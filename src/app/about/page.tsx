import { Metadata } from 'next'
import ThemeToggler from '@/components/theme/toggler'

export const metadata: Metadata = {
  title: 'Giới thiệu | Tra cứu vi phạm giao thông',
  description: 'Thông tin chi tiết về hệ thống tra cứu vi phạm giao thông trực tuyến. Tìm hiểu về mục tiêu, cam kết và cách chúng tôi hỗ trợ người dân tra cứu thông tin vi phạm.',
  openGraph: {
    title: 'Giới thiệu | Tra cứu vi phạm giao thông',
    description: 'Thông tin chi tiết về hệ thống tra cứu vi phạm giao thông trực tuyến. Tìm hiểu về mục tiêu, cam kết và cách chúng tôi hỗ trợ người dân tra cứu thông tin vi phạm.',
    type: 'website',
  },
}

export default function AboutPage() {
  return (
    <main 
      className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12"
      role="main"
      aria-label="Trang giới thiệu"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-end mb-4">
          <ThemeToggler />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8">
          Giới thiệu về Hệ thống
        </h1>
        
        <article className="prose prose-blue dark:prose-invert max-w-none">
          <p className="lead text-lg text-gray-700 dark:text-gray-300">
            Hệ thống tra cứu vi phạm giao thông trực tuyến được phát triển nhằm mục đích hỗ trợ người dân dễ dàng kiểm tra thông tin về các vi phạm giao thông và phạt nguội.
          </p>

          <section aria-labelledby="goals-heading">
            <h2 id="goals-heading" className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">
              Mục tiêu của chúng tôi
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Chúng tôi hướng đến việc xây dựng một nền tảng đơn giản, dễ sử dụng và hiệu quả, giúp người dân có thể:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Tra cứu nhanh chóng các thông tin về vi phạm giao thông</li>
              <li>Cập nhật tình trạng xử lý vi phạm</li>
              <li>Nắm bắt thông tin về quy định giao thông mới</li>
              <li>Tiết kiệm thời gian và chi phí trong quá trình xử lý vi phạm</li>
            </ul>
          </section>

          <section aria-labelledby="commitments-heading">
            <h2 id="commitments-heading" className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mt-8 mb-4">
              Cam kết của chúng tôi
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Chúng tôi cam kết:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Cung cấp thông tin chính xác và cập nhật</li>
              <li>Bảo mật thông tin người dùng</li>
              <li>Hỗ trợ người dùng kịp thời</li>
              <li>Liên tục cải thiện và nâng cấp hệ thống</li>
            </ul>
          </section>
        </article>
      </div>
    </main>
  )
}