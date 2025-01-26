import { Metadata } from 'next'
import { Github, Mail } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Liên hệ',
  description: 'Thông tin liên hệ với hệ thống tra cứu vi phạm giao thông',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Liên hệ</h1>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
          <div className="space-y-6">
            <div className="flex items-start">
              <Mail className="w-6 h-6 text-blue-600 mt-1 mr-4" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <p className="text-gray-600">vnqminh0502@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <Github className="w-6 h-6 text-blue-600 mt-1 mr-4" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Github</h3>
                <a 
                  href="https://github.com/minhomega/phatnguoi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  github.com/minhomega/phatnguoi
                </a>
                <p className="text-gray-600 mt-1">
                  Vui lòng tạo issue trên Github nếu bạn gặp vấn đề với hệ thống
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 