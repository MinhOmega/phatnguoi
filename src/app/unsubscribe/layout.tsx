import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hủy đăng ký | Tra cứu vi phạm giao thông",
  description: "Hủy đăng ký nhận thông báo từ hệ thống tra cứu vi phạm giao thông.",
  openGraph: {
    title: "Hủy đăng ký | Tra cứu vi phạm giao thông",
    description: "Hủy đăng ký nhận thông báo từ hệ thống tra cứu vi phạm giao thông.",
    type: "website",
  },
};

export default function UnsubscribeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
