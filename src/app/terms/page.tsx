import { Metadata } from 'next'
import ThemeToggler from '@/components/theme/toggler'

export const metadata: Metadata = {
  title: 'Điều khoản sử dụng | Tra cứu vi phạm giao thông',
  description: 'Điều khoản sử dụng và quy định của hệ thống tra cứu vi phạm giao thông. Bao gồm quyền và trách nhiệm của người dùng.',
  openGraph: {
    title: 'Điều khoản sử dụng | Tra cứu vi phạm giao thông',
    description: 'Điều khoản sử dụng và quy định của hệ thống tra cứu vi phạm giao thông. Bao gồm quyền và trách nhiệm của người dùng.',
    type: 'website',
  }
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Add Theme Toggler */}
        <div className="flex justify-end mb-4">
          <ThemeToggler />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Điều khoản sử dụng
        </h1>

        <article className="prose prose-blue dark:prose-invert max-w-none">
          <p className="lead text-lg text-gray-700 dark:text-gray-300">
            Bằng việc sử dụng dịch vụ của chúng tôi, bạn đồng ý với các điều khoản sau đây.
          </p>

          <section aria-labelledby="general-terms">
            <h2 id="general-terms" className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Điều khoản chung
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>Dịch vụ chỉ được sử dụng cho mục đích tra cứu thông tin vi phạm giao thông</li>
              <li>Người dùng phải đảm bảo tính chính xác của thông tin cung cấp</li>
              <li>Không được sử dụng dịch vụ cho mục đích phi pháp</li>
            </ul>
          </section>

          <section aria-labelledby="rights-responsibilities">
            <h2 id="rights-responsibilities" className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Quyền và trách nhiệm
            </h2>
            
            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-6 mb-3">
              Quyền của người dùng
            </h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>Tra cứu thông tin vi phạm giao thông</li>
              <li>Nhận hỗ trợ khi gặp vấn đề</li>
              <li>Yêu cầu xóa thông tin cá nhân</li>
            </ul>

            <h3 className="text-xl font-medium text-gray-800 dark:text-gray-200 mt-6 mb-3">
              Trách nhiệm của người dùng
            </h3>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
              <li>Không chia sẻ thông tin đăng nhập</li>
              <li>Không can thiệp vào hoạt động của hệ thống</li>
              <li>Thông báo khi phát hiện lỗi hoặc vấn đề bảo mật</li>
            </ul>
          </section>

          <section aria-labelledby="terms-changes">
            <h2 id="terms-changes" className="text-2xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Thay đổi điều khoản
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Chúng tôi có quyền thay đổi điều khoản sử dụng mà không cần thông báo trước. 
              Việc tiếp tục sử dụng dịch vụ sau khi thay đổi đồng nghĩa với việc chấp nhận điều khoản mới.
            </p>
          </section>
        </article>
      </div>
    </main>
  )
}