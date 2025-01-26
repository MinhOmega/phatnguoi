import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Chính sách bảo mật',
  description: 'Chính sách bảo mật của hệ thống tra cứu vi phạm giao thông',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Chính sách bảo mật</h1>

        <div className="prose prose-blue">
          <p className="lead">
            Chúng tôi cam kết bảo vệ quyền riêng tư và thông tin cá nhân của người dùng.
          </p>

          <h2>Thu thập thông tin</h2>
          <p>
            Chúng tôi chỉ thu thập những thông tin cần thiết để phục vụ việc tra cứu vi phạm giao thông, bao gồm:
          </p>
          <ul>
            <li>Biển số xe</li>
            <li>Thông tin tra cứu</li>
            <li>Thời gian truy cập</li>
          </ul>

          <h2>Sử dụng thông tin</h2>
          <p>
            Thông tin thu thập được chỉ được sử dụng để:
          </p>
          <ul>
            <li>Cung cấp dịch vụ tra cứu vi phạm</li>
            <li>Cải thiện trải nghiệm người dùng</li>
            <li>Phân tích thống kê</li>
          </ul>

          <h2>Bảo mật thông tin</h2>
          <p>
            Chúng tôi áp dụng các biện pháp bảo mật nghiêm ngặt để bảo vệ thông tin người dùng:
          </p>
          <ul>
            <li>Mã hóa dữ liệu</li>
            <li>Kiểm soát truy cập</li>
            <li>Giám sát hệ thống</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 