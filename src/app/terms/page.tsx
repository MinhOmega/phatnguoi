import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Điều khoản sử dụng',
  description: 'Điều khoản sử dụng của hệ thống tra cứu vi phạm giao thông',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Điều khoản sử dụng</h1>

        <div className="prose prose-blue">
          <p className="lead">
            Bằng việc sử dụng dịch vụ của chúng tôi, bạn đồng ý với các điều khoản sau đây.
          </p>

          <h2>Điều khoản chung</h2>
          <ul>
            <li>Dịch vụ chỉ được sử dụng cho mục đích tra cứu thông tin vi phạm giao thông</li>
            <li>Người dùng phải đảm bảo tính chính xác của thông tin cung cấp</li>
            <li>Không được sử dụng dịch vụ cho mục đích phi pháp</li>
          </ul>

          <h2>Quyền và trách nhiệm</h2>
          <h3>Quyền của người dùng</h3>
          <ul>
            <li>Tra cứu thông tin vi phạm giao thông</li>
            <li>Nhận hỗ trợ khi gặp vấn đề</li>
            <li>Yêu cầu xóa thông tin cá nhân</li>
          </ul>

          <h3>Trách nhiệm của người dùng</h3>
          <ul>
            <li>Không chia sẻ thông tin đăng nhập</li>
            <li>Không can thiệp vào hoạt động của hệ thống</li>
            <li>Thông báo khi phát hiện lỗi hoặc vấn đề bảo mật</li>
          </ul>

          <h2>Thay đổi điều khoản</h2>
          <p>
            Chúng tôi có quyền thay đổi điều khoản sử dụng mà không cần thông báo trước. 
            Việc tiếp tục sử dụng dịch vụ sau khi thay đổi đồng nghĩa với việc chấp nhận điều khoản mới.
          </p>
        </div>
      </div>
    </div>
  )
} 