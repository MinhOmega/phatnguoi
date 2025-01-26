import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    // Verify debug secret to prevent unauthorized access
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${process.env.DEBUG_SECRET}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get all environment variables
    const envVars = {
      // App URLs
      NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
      VERCEL_URL: process.env.VERCEL_URL,
      
      // MongoDB
      MONGODB_URI: process.env.MONGODB_URI ? '[CONFIGURED]' : '[MISSING]',
      
      // Email Config
      MAIL_USER: process.env.MAIL_USER ? '[CONFIGURED]' : '[MISSING]',
      MAIL_PASSWORD: process.env.MAIL_PASSWORD ? '[CONFIGURED]' : '[MISSING]',
      
      // Cron Config
      CRON_SECRET: process.env.CRON_SECRET ? '[CONFIGURED]' : '[MISSING]',
      
      // Debug Config
      DEBUG_SECRET: process.env.DEBUG_SECRET ? '[CONFIGURED]' : '[MISSING]',
      
      // Vercel Environment Info
      VERCEL_ENV: process.env.VERCEL_ENV,
      VERCEL_REGION: process.env.VERCEL_REGION,
      VERCEL_GIT_COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA,
      VERCEL_GIT_COMMIT_MESSAGE: process.env.VERCEL_GIT_COMMIT_MESSAGE,
      
      // Node Environment
      NODE_ENV: process.env.NODE_ENV,
    };

    // Add deployment info
    const deploymentInfo = {
      timestamp: new Date().toISOString(),
      platform: 'Vercel',
      environment: process.env.VERCEL_ENV || process.env.NODE_ENV,
      region: process.env.VERCEL_REGION || 'unknown',
    };

    return NextResponse.json({
      status: 'success',
      deployment: deploymentInfo,
      environment: envVars,
    });
  } catch (error) {
    console.error('Environment debug error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 