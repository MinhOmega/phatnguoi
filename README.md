# Tra Cứu Vi Phạm Giao Thông

Hệ thống tra cứu thông tin vi phạm giao thông trực tuyến, cho phép người dùng kiểm tra nhanh chóng các thông tin về phạt nguội và vi phạm giao thông. Dự án sử dụng các công nghệ hiện đại để cung cấp trải nghiệm người dùng tốt nhất và thông tin chính xác về vi phạm giao thông.

## 🌟 Tổng Quan

- 🚀 Tra cứu thông tin vi phạm giao thông trực tuyến
- 🔔 Hệ thống thông báo qua email khi có vi phạm mới
- 📱 Giao diện responsive, tương thích mọi thiết bị
- ⚡ Tốc độ tra cứu nhanh chóng
- 🔒 Bảo mật thông tin người dùng

## ✨ Tính Năng Chi Tiết

### 🔍 Tra Cứu Vi Phạm
- Hỗ trợ nhiều định dạng biển số xe (VD: 11H1-1111, 11H11111, 11H-1111, 11H1111, 11HH11111, 11HH1111)
- Hiển thị thông tin chi tiết về vi phạm:
  - Thời gian và địa điểm vi phạm
  - Loại phương tiện và màu biển số
  - Hành vi vi phạm cụ thể
  - Đơn vị phát hiện vi phạm
  - Địa điểm giải quyết vi phạm
  - Trạng thái xử lý vi phạm

### 📧 Hệ Thống Thông Báo
- Đăng ký nhận thông báo qua email
- Tự động gửi email khi phát hiện vi phạm mới
- Xác nhận đăng ký qua email
- Quản lý đăng ký thông báo dễ dàng

### 💻 Giao Diện Người Dùng
- Thiết kế hiện đại với Tailwind CSS
- Responsive trên mọi thiết bị
- Hiệu ứng chuyển động mượt mà
- Biểu tượng trực quan với Lucide Icons
- Loading states và error handling thân thiện

## 🛠️ Công Nghệ Sử Dụng

- **Frontend:**
  - Next.js 15 - Framework React hiện đại
  - React 19 - Thư viện JavaScript cho UI
  - TypeScript - JavaScript với kiểu dữ liệu tĩnh
  - Tailwind CSS - Framework CSS tiện ích
  - Lucide Icons - Bộ icon đẹp và nhẹ

- **Backend:**
  - MongoDB - Cơ sở dữ liệu NoSQL
  - API Routes - Next.js API endpoints
  - Email Service - Hệ thống gửi email tự động

## 📦 Cài Đặt

1. Clone dự án:
```bash
git clone https://github.com/minhomega/phatnguoi.git
```

2. Di chuyển vào thư mục dự án:
```bash
cd phatnguoi
```

3. Cài đặt dependencies:
```bash
npm install
# hoặc
yarn install
# hoặc
pnpm install
```

4. Tạo file môi trường:
```bash
cp .env.example .env
```

5. Cấu hình các biến môi trường trong file `.env`

6. Chạy dự án:

```bash
# Môi trường development
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev

# Build cho production
npm run build
# hoặc
yarn build
# hoặc
pnpm build

# Chạy production
npm run start
# hoặc
yarn start
# hoặc
pnpm start
```
## 🌍 Triển Khai

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fminhomega%2Fphatnguoi&env=MONGODB_URI,MAIL_SERVICE,MAIL_HOST,MAIL_PORT,MAIL_USER,MAIL_PASSWORD,NEXT_PUBLIC_API_URL,CRON_SECRET,UNSUBSCRIBE_SECRET,NEXT_PUBLIC_APP_URL&project-name=phatnguoi&repository-name=phatnguoi)

Dự án được triển khai trên Vercel. Để triển khai:

1. Nhấn nút "Deploy" ở trên để fork và triển khai tự động, hoặc:
2. Đẩy code lên GitHub
3. Kết nối repository với Vercel
4. Vercel sẽ tự động triển khai khi có thay đổi trên nhánh main

> **Lưu ý**: Đảm bảo đã cấu hình đầy đủ các biến môi trường trong phần Environment Variables của Vercel:
> - `MONGODB_URI`: URL kết nối MongoDB
> - `MAIL_SERVICE`: Dịch vụ email (mặc định: gmail)
> - `MAIL_HOST`: Host SMTP (mặc định: smtp.gmail.com)
> - `MAIL_PORT`: Port SMTP (mặc định: 465)
> - `MAIL_USER`: Email đăng nhập SMTP
> - `MAIL_PASSWORD`: Mật khẩu email SMTP
> - `NEXT_PUBLIC_API_URL`: URL API của ứng dụng
> - `CRON_SECRET`: Khóa bí mật cho Cron Job
> - `UNSUBSCRIBE_SECRET`: Khóa bí mật cho chức năng hủy đăng ký
> - `NEXT_PUBLIC_APP_URL`: URL của ứng dụng (mặc định là URL của Vercel sau khi deploy)

## 🔧 Cấu Hình

Các biến môi trường cần thiết trong file `.env`:

```env
# MongoDB
MONGODB_URI=your_mongodb_connection_string

# Email Service
MAIL_SERVICE=your_email_service
MAIL_HOST=your_smtp_host
MAIL_PORT=your_smtp_port
MAIL_USER=your_smtp_username
MAIL_PASSWORD=your_smtp_password

# API Configuration
NEXT_PUBLIC_API_URL=your_api_url

# App Configuration
NEXT_PUBLIC_APP_URL=your_app_url
UNSUBSCRIBE_SECRET=your_unsubscribe_secret

# Cron Job
CRON_SECRET=your_cron_secret
```

## 🔧 Scripts

- `npm run dev` - Chạy môi trường development
- `npm run build` - Build dự án cho production
- `npm run start` - Chạy phiên bản production
- `npm run lint` - Kiểm tra lỗi với ESLint

## 📝 Hướng Dẫn Sử Dụng

### Tra Cứu Vi Phạm
1. Truy cập trang web
2. Nhập biển số xe theo một trong các định dạng:
   - 11H1-1111
   - 11H11111
   - 11H-1111
   - 11H1111
   - 11HH11111
   - 11HH1111
3. Nhấn "Kiểm tra ngay"
4. Xem kết quả hiển thị chi tiết về các vi phạm (nếu có)

### Đăng Ký Thông Báo
1. Tra cứu biển số xe
2. Nhấn "Đăng ký nhận thông báo"
3. Nhập email
4. Xác nhận đăng ký qua email

## 🤝 Đóng Góp

Chúng tôi rất hoan nghênh mọi đóng góp! Để đóng góp:

1. Fork dự án
2. Tạo nhánh tính năng (`git checkout -b feature/TinhNangMoi`)
3. Commit thay đổi (`git commit -m 'Thêm tính năng mới'`)
4. Push lên nhánh (`git push origin feature/TinhNangMoi`)
5. Tạo Pull Request

### Quy Tắc Đóng Góp
- Tuân thủ coding style của dự án
- Cập nhật documentation khi cần
- Tạo issues cho bugs hoặc tính năng mới

## 📄 Giấy Phép

Dự án được phân phối dưới giấy phép MIT. Xem `LICENSE` để biết thêm thông tin.

## 👤 Tác Giả

**MinhVo**
- GitHub: [@minhomega](https://github.com/minhomega)

## ⭐️ Hỗ Trợ Dự Án

Nếu dự án này giúp ích cho bạn, hãy:
- Cho dự án một ngôi sao ⭐️
- Chia sẻ với bạn bè
- Đóng góp code hoặc tài liệu

## 📞 Liên Hệ & Hỗ Trợ

- Tạo issue trên GitHub
- Email: vnqminh0502@gmail.com
