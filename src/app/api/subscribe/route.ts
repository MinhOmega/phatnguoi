import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import { Subscription } from '@/models/subscription';
import nodemailer from 'nodemailer';
import { render } from '@react-email/render';
import { SubscriptionConfirmationEmail } from '@/emails/subscription-confirmation';

export async function POST(request: Request) {
  try {
    const { email, plateNumber } = await request.json();

    if (!email || !plateNumber) {
      return NextResponse.json(
        { error: 'Email và biển số xe là bắt buộc' },
        { status: 400 }
      );
    }

    await connectToDatabase();

    // Check if subscription already exists
    const existingSubscription = await Subscription.findOne({ email, plateNumber });
    if (existingSubscription) {
      return NextResponse.json(
        { error: 'Email này đã đăng ký nhận thông báo cho biển số xe này' },
        { status: 400 }
      );
    }

    // Create new subscription
    const subscription = new Subscription({ email, plateNumber });
    await subscription.save();

    // Send confirmation email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const emailHtml = await render(
      SubscriptionConfirmationEmail({
        email,
        plateNumber,
      })
    );

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Xác nhận đăng ký nhận thông báo vi phạm giao thông',
      html: emailHtml,
    });

    return NextResponse.json(
      { message: 'Đăng ký thành công' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Có lỗi xảy ra khi đăng ký' },
      { status: 500 }
    );
  }
} 