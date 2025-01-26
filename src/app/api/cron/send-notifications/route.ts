import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Subscription } from '@/models/subscription';
import { checkPlateNumber } from '@/app/actions/check-plate';
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import { ViolationNotificationEmail } from '@/emails/violation-notification';

export async function GET(request: Request) {
  try {
    // Verify cron secret to prevent unauthorized access
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectToDatabase();

    // Get all subscriptions
    const subscriptions = await Subscription.find();

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Process each subscription
    for (const subscription of subscriptions) {
      try {
        // Check violations
        const result = await checkPlateNumber(subscription.plateNumber);
        
        if (result.success && result.data) {
          // Render email template
          const emailHtml = await render(
            ViolationNotificationEmail({
              violations: result.data,
              plateNumber: subscription.plateNumber,
            })
          );

          // Send email
          await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: subscription.email,
            subject: `Thông báo vi phạm giao thông - Biển số ${subscription.plateNumber}`,
            html: emailHtml,
          });
        }
      } catch (error) {
        console.error(`Error processing subscription for ${subscription.email}:`, error);
      }
    }

    return NextResponse.json({ message: 'Notifications sent successfully' });
  } catch (error) {
    console.error('Cron job error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
} 