import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Subscription } from '@/models/subscription';
import { checkPlateNumber } from '@/app/actions/check-plate';
import { render } from '@react-email/render';
import { ViolationNotificationEmail } from '@/emails/violation-notification';
import { generateUnsubscribeHash } from '@/lib/hash';
import { sendEmail } from '@/lib/mailer';

export async function GET(request: Request) {
  console.log('🔄 Starting cron job execution:', new Date().toISOString());
  
  try {
    // Verify cron secret
    const authHeader = request.headers.get('authorization');
    console.log('🔑 Auth Header present:', !!authHeader);
    
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      console.error('❌ Unauthorized cron job access attempt');
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Connect to database
    console.log('📡 Connecting to database...');
    await connectToDatabase();
    console.log('✅ Database connected');

    // Get subscriptions
    const subscriptions = await Subscription.find();
    console.log(`📋 Found ${subscriptions.length} subscriptions to process`);

    // Track statistics
    let successCount = 0;
    let errorCount = 0;
    let emailsSent = 0;

    // Process subscriptions
    for (const subscription of subscriptions) {
      console.log(`\n🔍 Processing subscription for ${subscription.email} (${subscription.plateNumber})`);
      
      try {
        // Check violations
        const result = await checkPlateNumber(subscription.plateNumber);
        console.log(`📊 Violation check result for ${subscription.plateNumber}:`, {
          success: result.success,
          violationsCount: result.data?.length || 0
        });
        
        if (result.success && result.data && result.data.length > 0) {
          // Render and send email
          console.log(`📧 Preparing email for ${subscription.email}`);
          const emailHtml = await render(
            ViolationNotificationEmail({
              violations: result.data,
              plateNumber: subscription.plateNumber,
              subscriberEmail: subscription.email,
            })
          );

          await sendEmail(
            {
              from: process.env.MAIL_USER,
              to: subscription.email,
              subject: `Thông báo vi phạm giao thông - Biển số ${subscription.plateNumber}`,
              headers: {
                'List-Unsubscribe': `<${process.env.NEXT_PUBLIC_APP_URL}/unsubscribe?hash=${generateUnsubscribeHash(subscription.email, subscription.plateNumber)}>`,
                'List-Unsubscribe-Post': 'List-Unsubscribe=One-Click'
              }
            },
            emailHtml
          );
          
          emailsSent++;
          console.log(`✅ Email sent successfully to ${subscription.email}`);
          successCount++;
        } else {
          console.log(`ℹ️ No violations found for ${subscription.plateNumber}`);
          successCount++;
        }
      } catch (error) {
        errorCount++;
        console.error(`❌ Error processing subscription for ${subscription.email}:`, error);
      }
    }

    // Log final statistics
    console.log('\n📊 Cron job completion statistics:', {
      totalProcessed: subscriptions.length,
      successCount,
      errorCount,
      emailsSent,
      completedAt: new Date().toISOString()
    });

    return NextResponse.json({
      message: 'Notifications sent successfully',
      statistics: {
        totalProcessed: subscriptions.length,
        successCount,
        errorCount,
        emailsSent
      }
    });
  } catch (error) {
    console.error('❌ Critical cron job error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 