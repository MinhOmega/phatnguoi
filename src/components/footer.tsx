'use client'

import Link from 'next/link'
import { Github } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-semibold text-gray-900 mb-3">Tra Cứu Vi Phạm Giao Thông</h3>
            <p className="text-gray-600 text-sm">
              Hệ thống tra cứu thông tin vi phạm giao thông trực tuyến, giúp người dân dễ dàng kiểm tra các thông tin về phạt nguội.
            </p>
          </div>

          {/* Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 mb-3">Liên Kết</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 text-sm">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 text-sm">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1">
            <h3 className="font-semibold text-gray-900 mb-3">Pháp Lý</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-blue-600 text-sm">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-blue-600 text-sm">
                  Điều khoản sử dụng
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Tra Cứu Vi Phạm Giao Thông. All rights reserved.
          </p>
          <div className="flex items-center mt-4 sm:mt-0">
            <a
              href="https://github.com/minhomega"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 