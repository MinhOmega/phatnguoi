import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Giới thiệu',
  description: 'Thông tin về hệ thống tra cứu vi phạm giao thông',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Giới thiệu về Hệ thống</h1>
        
        <div className="prose prose-blue">
          <p className="lead">
            Hệ thống tra cứu vi phạm giao thông trực tuyến được phát triển nhằm mục đích hỗ trợ người dân dễ dàng kiểm tra thông tin về các vi phạm giao thông và phạt nguội.
          </p>

          <h2>Mục tiêu của chúng tôi</h2>
          <p>
            Chúng tôi hướng đến việc xây dựng một nền tảng đơn giản, dễ sử dụng và hiệu quả, giúp người dân có thể:
          </p>
          <ul>
            <li>Tra cứu nhanh chóng các thông tin về vi phạm giao thông</li>
            <li>Cập nhật tình trạng xử lý vi phạm</li>
            <li>Nắm bắt thông tin về quy định giao thông mới</li>
            <li>Tiết kiệm thời gian và chi phí trong quá trình xử lý vi phạm</li>
          </ul>

          <h2>Cam kết của chúng tôi</h2>
          <p>
            Chúng tôi cam kết:
          </p>
          <ul>
            <li>Cung cấp thông tin chính xác và cập nhật</li>
            <li>Bảo mật thông tin người dùng</li>
            <li>Hỗ trợ người dùng kịp thời</li>
            <li>Liên tục cải thiện và nâng cấp hệ thống</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 