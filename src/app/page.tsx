import { Metadata } from 'next'
import { HomeContent } from '@/components/home-content'

export const metadata: Metadata = {
  title: "Tra cứu phạt nguội | Kiểm tra vi phạm giao thông toàn quốc",
  description: "Hệ thống tra cứu phạt nguội trực tuyến cho xe ô tô, xe máy tại Việt Nam. Kiểm tra vi phạm giao thông nhanh chóng, chính xác tại TP HCM, Hà Nội, Đà Nẵng và các tỉnh thành.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tra cứu phạt nguội | Kiểm tra vi phạm giao thông toàn quốc",
    description: "Hệ thống tra cứu phạt nguội trực tuyến cho xe ô tô, xe máy tại Việt Nam. Kiểm tra vi phạm giao thông nhanh chóng, chính xác tại TP HCM, Hà Nội, Đà Nẵng và các tỉnh thành.",
    type: "website",
  },
}

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": `${process.env.NEXT_PUBLIC_APP_URL}/#website`,
              "url": process.env.NEXT_PUBLIC_APP_URL,
              "name": "Tra cứu phạt nguội và đăng kiểm toàn quốc",
              "headline": "Tra cứu phạt nguội",
              "description": "Hệ thống tra cứu phạt nguội trực tuyến cho xe ô tô, xe máy tại Việt Nam. Kiểm tra vi phạm giao thông nhanh chóng, chính xác tại TP HCM, Hà Nội, Đà Nẵng và các tỉnh thành.",
              "image": `${process.env.NEXT_PUBLIC_APP_URL}/og-image.png`
            },
            {
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Tra Cứu Phạt Nguội toàn quốc",
              "description": "Ứng dụng kiểm tra và tra cứu phạt nguội, đăng kiểm giao thông đường bộ cho xe ô tô, xe máy, xe máy điện tại Việt Nam và các tỉnh thành lớn như TP Hồ Chí Minh, Hà Nội, Đà Nẵng, ...",
              "operatingSystem": ["ANDROID", "IOS", "WEB"],
              "applicationCategory": "UtilityApplication",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "FREE"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "ratingCount": "1000+"
              }
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Phạt nguội là gì?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Phạt nguội là hình thức xử phạt vi phạm giao thông thông qua hệ thống camera giám sát, không dừng xe trực tiếp. Vi phạm được ghi lại và xử phạt sau đó."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Làm sao để tra cứu phạt nguội?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Bạn có thể tra cứu phạt nguội bằng cách nhập biển số xe vào hệ thống tra cứu của chúng tôi. Hệ thống sẽ kiểm tra và hiển thị các thông tin về vi phạm nếu có."
                  }
                }
              ]
            }
          ])
        }}
      />
      <HomeContent />
    </>
  )
}
