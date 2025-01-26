"use server";

import { connectToDatabase } from "@/lib/mongodb";
import { Subscription } from "@/models/subscription";
import { render } from "@react-email/render";
import { SubscriptionConfirmationEmail } from "@/emails/subscription-confirmation";
import { UnsubscribeConfirmationEmail } from "@/emails/unsubscribe-confirmation";
import { generateUnsubscribeHash } from "@/lib/hash";
import { sendEmail } from "@/lib/mailer";

export async function subscribe(email: string, plateNumber: string) {
  try {
    if (!email || !plateNumber) {
      throw new Error("Email và biển số xe là bắt buộc");
    }

    await connectToDatabase();

    // Check if subscription already exists
    const existingSubscription = await Subscription.findOne({ email, plateNumber });
    if (existingSubscription) {
      throw new Error("Email này đã đăng ký nhận thông báo cho biển số xe này");
    }

    // Create new subscription
    const subscription = new Subscription({ email, plateNumber });
    await subscription.save();

    // Send confirmation email
    const emailHtml = await render(
      SubscriptionConfirmationEmail({
        email,
        plateNumber,
      }),
    );

    await sendEmail(
      {
        from: process.env.MAIL_USER,
        to: email,
        subject: "Xác nhận đăng ký nhận thông báo vi phạm giao thông",
        headers: {
          "List-Unsubscribe": `<${process.env.NEXT_PUBLIC_APP_URL}/unsubscribe?hash=${generateUnsubscribeHash(email, plateNumber)}>`,
          "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
        },
      },
      emailHtml,
    );

    return { success: true, message: "Đăng ký thành công" };
  } catch (error) {
    console.error("Subscription error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Có lỗi xảy ra khi đăng ký",
    };
  }
}

export async function unsubscribe(hash: string) {
  try {
    if (!hash) {
      throw new Error("Liên kết không hợp lệ");
    }

    await connectToDatabase();

    // Find all subscriptions and check hash
    const subscriptions = await Subscription.find();
    const subscription = subscriptions.find((sub) => {
      const generatedHash = generateUnsubscribeHash(sub.email, sub.plateNumber);
      return generatedHash === hash;
    });

    if (!subscription) {
      throw new Error("Không tìm thấy đăng ký hoặc liên kết không hợp lệ");
    }

    // Delete the subscription
    await Subscription.findByIdAndDelete(subscription._id);

    // Send confirmation email
    const emailHtml = await render(
      UnsubscribeConfirmationEmail({
        email: subscription.email,
        plateNumber: subscription.plateNumber,
      }),
    );

    await sendEmail(
      {
        from: process.env.MAIL_USER,
        to: subscription.email,
        subject: "Xác nhận hủy đăng ký nhận thông báo vi phạm giao thông",
      },
      emailHtml,
    );

    return { success: true, message: "Hủy đăng ký thành công" };
  } catch (error) {
    console.error("Unsubscribe error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Có lỗi xảy ra khi hủy đăng ký",
    };
  }
}
