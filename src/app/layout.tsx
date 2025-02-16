import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme/provider";

const inter = Inter({ subsets: ["latin", "vietnamese"] });

export const metadata: Metadata = {
  title: {
    default: "Tra cứu phạt nguội | Kiểm tra vi phạm giao thông toàn quốc",
    template: "%s | Tra cứu phạt nguội",
  },
  description:
    "Hệ thống tra cứu phạt nguội trực tuyến cho xe ô tô, xe máy tại Việt Nam. Kiểm tra vi phạm giao thông nhanh chóng, chính xác tại TP HCM, Hà Nội, Đà Nẵng và các tỉnh thành.",
  keywords: [
    "tra cứu phạt nguội",
    "kiểm tra vi phạm giao thông",
    "phạt nguội",
    "kiểm tra phạt nguội",
    "vi phạm giao thông",
    "tra cứu biển số xe",
    "xử phạt giao thông",
    "CSGT",
    "cảnh sát giao thông",
    "tra cứu online",
    "phạt nguội giao thông",
    "tra cứu vi phạm",
    "phạt nguội ô tô",
    "phạt nguội xe máy",
    "CSGT online",
    "tra cứu CSGT",
    "kiểm tra phạt giao thông",
    "kiểm tra vi phạm",
    "phạt giao thông",
    "tra cứu biển số",
    "vi phạm ô tô",
    "vi phạm xe máy",
    "phạt nguội HCM",
    "phạt nguội Hà Nội",
  ],
  authors: [{ name: "MinhVo", url: "https://github.com/minhomega" }],
  creator: "MinhVo",
  publisher: "MinhVo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_APP_URL}`),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tra cứu phạt nguội | Kiểm tra vi phạm giao thông toàn quốc",
    description:
      "Hệ thống tra cứu phạt nguội trực tuyến cho xe ô tô, xe máy tại Việt Nam. Kiểm tra vi phạm giao thông nhanh chóng, chính xác tại TP HCM, Hà Nội, Đà Nẵng và các tỉnh thành.",
    url: `${process.env.NEXT_PUBLIC_APP_URL}`,
    siteName: "Kiểm tra phạt nguội",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tra cứu phạt nguội và vi phạm giao thông",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tra cứu phạt nguội | Kiểm tra vi phạm giao thông toàn quốc",
    description:
      "Hệ thống tra cứu phạt nguội trực tuyến cho xe ô tô, xe máy tại Việt Nam. Kiểm tra nhanh chóng và chính xác.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "7VSWE62mf-36m_9k7UVFkqQ3UMleu79PnejFhWINKt0",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://kiemtraphatnguoi.vercel.app",
              "name": "Tra cứu phạt nguội",
              "description": "Hệ thống tra cứu phạt nguội trực tuyến cho xe ô tô, xe máy tại Việt Nam",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://kiemtraphatnguoi.vercel.app/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <main>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
          </ThemeProvider>
        </main>
        <Footer />
      </body>
    </html>
  );
}
