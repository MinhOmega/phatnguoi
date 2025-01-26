import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT ?? "465"),
  secure: true, // true for port 465, false for other ports
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
  ignoreTLS: process.env.NODE_ENV !== "production",
  requireTLS: process.env.NODE_ENV === "production",
  service: process.env.MAIL_SERVICE || undefined,
});

interface MailOptions {
  from?: string;
  to: string;
  subject: string;
  headers?: Record<string, string>;
}

export const sendEmail = async (mailOptions: MailOptions, htmlContent: string) => {
  return await transporter.sendMail({
    ...mailOptions,
    html: htmlContent,
  });
};

export default transporter;
