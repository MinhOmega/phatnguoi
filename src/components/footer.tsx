'use client'

import Link from 'next/link'
import { Github, AlertTriangle } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-background border-t" role="contentinfo" aria-label="Footer">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-semibold text-foreground mb-3 text-lg">Tra Cứu Vi Phạm Giao Thông</h2>
            <p className="text-muted-foreground text-sm">
              Hệ thống tra cứu thông tin vi phạm giao thông trực tuyến, giúp người dân dễ dàng kiểm tra các thông tin về phạt nguội.
            </p>
            <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/50 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 mr-2 flex-shrink-0" aria-hidden="true" />
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  Trang web này sử dụng API của bên thứ 3, chỉ với mục đích học tập và tham khảo. Vui lòng sử dụng{' '}
                  <a 
                    href="https://www.csgt.vn/tra-cuu-phuong-tien-vi-pham.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium underline hover:text-yellow-800 dark:hover:text-yellow-200"
                    aria-label="Đến trang tra cứu chính thức của Cục CSGT"
                  >
                    trang web chính thức của Cục CSGT
                  </a>
                  {' '}để tra cứu chính xác.
                </p>
              </div>
            </div>
          </div>

          {/* Links */}
          <nav className="col-span-1" aria-label="Footer navigation">
            <h3 className="font-semibold text-foreground mb-3">Liên Kết</h3>
            <ul className="space-y-2" role="list">
              <li>
                <Link 
                  href="/about" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  aria-label="Đến trang giới thiệu"
                >
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  aria-label="Đến trang liên hệ"
                >
                  Liên hệ
                </Link>
              </li>
            </ul>
          </nav>

          {/* Legal */}
          <nav className="col-span-1" aria-label="Legal links">
            <h3 className="font-semibold text-foreground mb-3">Pháp Lý</h3>
            <ul className="space-y-2" role="list">
              <li>
                <Link 
                  href="/privacy" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  aria-label="Đọc chính sách bảo mật"
                >
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  aria-label="Đọc điều khoản sử dụng"
                >
                  Điều khoản sử dụng
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-t mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tra Cứu Vi Phạm Giao Thông. All rights reserved.
          </p>
          <div className="flex items-center mt-4 sm:mt-0">
            <a
              href="https://github.com/minhomega"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Visit our GitHub repository"
            >
              <Github className="w-5 h-5" aria-hidden="true" />
              <span className="sr-only">GitHub repository</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer