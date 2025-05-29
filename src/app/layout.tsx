import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme/provider";
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'

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
    "tra cứu phạt nguội online",
    "kiểm tra vi phạm giao thông online",
    "tra cứu phạt nguội toàn quốc",
    "kiểm tra phạt nguội xe máy",
    "kiểm tra phạt nguội ô tô",
    "tra cứu vi phạm giao thông HCM",
    "tra cứu vi phạm giao thông Hà Nội",
    "kiểm tra phạt nguội xe máy HCM",
    "kiểm tra phạt nguội xe máy Hà Nội",
    "tra cứu phạt nguội xe máy",
    "tra cứu phạt nguội ô tô",
    "kiểm tra vi phạm giao thông xe máy",
    "kiểm tra vi phạm giao thông ô tô",
    "tra cứu phạt nguội trực tuyến",
    "kiểm tra vi phạm giao thông trực tuyến",
    "tra cứu phạt nguội online HCM",
    "tra cứu phạt nguội online Hà Nội",
    "kiểm tra phạt nguội online HCM",
    "kiểm tra phạt nguội online Hà Nội",
    "tra cứu vi phạm giao thông online HCM",
    "tra cứu vi phạm giao thông online Hà Nội",
    "kiểm tra vi phạm giao thông online HCM",
    "kiểm tra vi phạm giao thông online Hà Nội",
    "tra cứu phạt nguội xe máy HCM",
    "tra cứu phạt nguội xe máy Hà Nội",
    "tra cứu phạt nguội ô tô HCM",
    "tra cứu phạt nguội ô tô Hà Nội",
    "kiểm tra phạt nguội xe máy online",
    "kiểm tra phạt nguội ô tô online",
    "tra cứu vi phạm giao thông xe máy online",
    "tra cứu vi phạm giao thông ô tô online",
    "kiểm tra vi phạm giao thông xe máy online",
    "kiểm tra vi phạm giao thông ô tô online",
    "tra cứu phạt nguội xe máy trực tuyến",
    "tra cứu phạt nguội ô tô trực tuyến",
    "kiểm tra phạt nguội xe máy trực tuyến",
    "kiểm tra phạt nguội ô tô trực tuyến",
    "tra cứu vi phạm giao thông xe máy trực tuyến",
    "tra cứu vi phạm giao thông ô tô trực tuyến",
    "kiểm tra vi phạm giao thông xe máy trực tuyến",
    "kiểm tra vi phạm giao thông ô tô trực tuyến",
    "tra cứu phạt nguội toàn quốc online",
    "kiểm tra vi phạm giao thông toàn quốc online",
    "tra cứu phạt nguội toàn quốc trực tuyến",
    "kiểm tra vi phạm giao thông toàn quốc trực tuyến",
    "tra cứu phạt nguội toàn quốc HCM",
    "tra cứu phạt nguội toàn quốc Hà Nội",
    "kiểm tra vi phạm giao thông toàn quốc HCM",
    "kiểm tra vi phạm giao thông toàn quốc Hà Nội",
    "tra cứu phạt nguội toàn quốc xe máy",
    "tra cứu phạt nguội toàn quốc ô tô",
    "kiểm tra vi phạm giao thông toàn quốc xe máy",
    "kiểm tra vi phạm giao thông toàn quốc ô tô",
    "tra cứu phạt nguội toàn quốc xe máy online",
    "tra cứu phạt nguội toàn quốc ô tô online",
    "kiểm tra vi phạm giao thông toàn quốc xe máy online",
    "kiểm tra vi phạm giao thông toàn quốc ô tô online",
    "tra cứu phạt nguội toàn quốc xe máy trực tuyến",
    "tra cứu phạt nguội toàn quốc ô tô trực tuyến",
    "kiểm tra vi phạm giao thông toàn quốc xe máy trực tuyến",
    "kiểm tra vi phạm giao thông toàn quốc ô tô trực tuyến",
    "tra cứu phạt nguội toàn quốc xe máy HCM",
    "tra cứu phạt nguội toàn quốc xe máy Hà Nội",
    "tra cứu phạt nguội toàn quốc ô tô HCM",
    "tra cứu phạt nguội toàn quốc ô tô Hà Nội",
    "kiểm tra vi phạm giao thông toàn quốc xe máy HCM",
    "kiểm tra vi phạm giao thông toàn quốc xe máy Hà Nội",
    "kiểm tra vi phạm giao thông toàn quốc ô tô HCM",
    "kiểm tra vi phạm giao thông toàn quốc ô tô Hà Nội",
    "tra cứu phạt nguội toàn quốc xe máy online HCM",
    "tra cứu phạt nguội toàn quốc xe máy online Hà Nội",
    "tra cứu phạt nguội toàn quốc ô tô online HCM",
    "tra cứu phạt nguội toàn quốc ô tô online Hà Nội",
    "kiểm tra vi phạm giao thông toàn quốc xe máy online HCM",
    "kiểm tra vi phạm giao thông toàn quốc xe máy online Hà Nội",
    "kiểm tra vi phạm giao thông toàn quốc ô tô online HCM",
    "kiểm tra vi phạm giao thông toàn quốc ô tô online Hà Nội",
    "tra cứu phạt nguội toàn quốc xe máy trực tuyến HCM",
    "tra cứu phạt nguội toàn quốc xe máy trực tuyến Hà Nội",
    "tra cứu phạt nguội toàn quốc ô tô trực tuyến HCM",
    "tra cứu phạt nguội toàn quốc ô tô trực tuyến Hà Nội",
    "kiểm tra vi phạm giao thông toàn quốc xe máy trực tuyến HCM",
    "kiểm tra vi phạm giao thông toàn quốc xe máy trực tuyến Hà Nội",
    "kiểm tra vi phạm giao thông toàn quốc ô tô trực tuyến HCM",
    "kiểm tra vi phạm giao thông toàn quốc ô tô trực tuyến Hà Nội",
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
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID ?? ""} />
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID ?? ""} />
    </html>
  );
}
