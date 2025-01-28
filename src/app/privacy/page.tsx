import { Metadata } from 'next'
import ThemeToggler from '@/components/theme/toggler'

export const metadata: Metadata = {
  title: 'Chính sách bảo mật | Tra cứu vi phạm giao thông',
  description: 'Chính sách bảo mật và cam kết bảo vệ thông tin cá nhân của người dùng khi sử dụng hệ thống tra cứu vi phạm giao thông.',
  openGraph: {
    title: 'Chính sách bảo mật | Tra cứu vi phạm giao thông',
    description: 'Chính sách bảo mật và cam kết bảo vệ thông tin cá nhân của người dùng khi sử dụng hệ thống tra cứu vi phạm giao thông.',
    type: 'website',
  }
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Add Theme Toggler */}
        <div className="flex justify-end mb-4">
          <ThemeToggler />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Chính sách bảo mật
        </h1>

        <article className="prose prose-blue dark:prose-invert max-w-none">
          <p className="lead text-gray-700 dark:text-gray-300">
            Chúng tôi cam kết bảo vệ quyền riêng tư và thông tin cá nhân của người dùng.
          </p>

          <section aria-labelledby="collection-heading">
            <h2 id="collection-heading" className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
              Thu thập thông tin
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Chúng tôi chỉ thu thập những thông tin cần thiết để phục vụ việc tra cứu vi phạm giao thông, bao gồm:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Biển số xe</li>
              <li>Thông tin tra cứu</li>
              <li>Thời gian truy cập</li>
            </ul>
          </section>

          <section aria-labelledby="usage-heading">
            <h2 id="usage-heading" className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
              Sử dụng thông tin
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Thông tin thu thập được chỉ được sử dụng để:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Cung cấp dịch vụ tra cứu vi phạm</li>
              <li>Cải thiện trải nghiệm người dùng</li>
              <li>Phân tích thống kê</li>
            </ul>
          </section>

          <section aria-labelledby="security-heading">
            <h2 id="security-heading" className="text-xl font-semibold text-gray-900 dark:text-gray-100 mt-8 mb-4">
              Bảo mật thông tin
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Chúng tôi áp dụng các biện pháp bảo mật nghiêm ngặt để bảo vệ thông tin người dùng:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Mã hóa dữ liệu</li>
              <li>Kiểm soát truy cập</li>
              <li>Giám sát hệ thống</li>
            </ul>
          </section>
        </article>
      </div>
    </main>
  )
}