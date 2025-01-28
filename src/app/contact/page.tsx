import { Metadata } from 'next'
import { Github, Mail } from 'lucide-react'
import ThemeToggler from '@/components/theme/toggler'

export const metadata: Metadata = {
  title: 'Liên hệ | Tra cứu vi phạm giao thông',
  description: 'Thông tin liên hệ với hệ thống tra cứu vi phạm giao thông. Gửi email hoặc tạo issue trên Github để được hỗ trợ.',
  openGraph: {
    title: 'Liên hệ | Tra cứu vi phạm giao thông',
    description: 'Thông tin liên hệ với hệ thống tra cứu vi phạm giao thông. Gửi email hoặc tạo issue trên Github để được hỗ trợ.',
    type: 'website',
  }
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Add Theme Toggler */}
        <div className="flex justify-end mb-4">
          <ThemeToggler />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Liên hệ
        </h1>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 md:p-8">
          <div className="space-y-6">
            <div className="flex items-start">
              <Mail 
                className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 mr-4" 
                aria-hidden="true"
              />
              <div>
                <h2 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  Email
                </h2>
                <a
                  href="mailto:vnqminh0502@gmail.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  aria-label="Gửi email đến vnqminh0502@gmail.com"
                >
                  vnqminh0502@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <Github 
                className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 mr-4" 
                aria-hidden="true"
              />
              <div>
                <h2 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">
                  Github
                </h2>
                <a 
                  href="https://github.com/minhomega/phatnguoi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                  aria-label="Truy cập repository Github (mở trong tab mới)"
                >
                  github.com/minhomega/phatnguoi
                </a>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  Vui lòng tạo issue trên Github nếu bạn gặp vấn đề với hệ thống
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}