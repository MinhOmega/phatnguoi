'use client'

import { useState } from 'react'
import { ChevronDown, Check } from 'lucide-react'

interface FAQItem {
  question: string
  content: React.ReactNode
}

const faqItems: FAQItem[] = [
  {
    question: 'Phạt Nguội Là Gì và Tại Sao Nó Quan Trọng?',
    content: (
      <div>
        <h3 className="font-semibold text-gray-800 mb-3">Định Nghĩa Phạt Nguội</h3>
        <p className="text-gray-700 mb-4">
          <strong>Phạt nguội</strong> là hình thức xử phạt các phương tiện giao thông sau khi vi phạm mà không cần đến việc cảnh sát giao thông trực tiếp dừng phương tiện. 
          Thông qua các hệ thống camera được lắp đặt trên các tuyến đường, các hành vi như vượt đèn đỏ, chạy quá tốc độ, và đi sai làn đường đều được ghi nhận.
        </p>
        <p className="text-gray-700">
          Việc <strong>tra cứu phạt nguội</strong> giúp các chủ xe nắm được các vi phạm của mình, đảm bảo không có khoản phạt nào tồn đọng có thể ảnh hưởng đến việc đăng kiểm xe.
        </p>
      </div>
    ),
  },
  {
    question: 'Tra Cứu Qua Website Chính Thức',
    content: (
      <div>
        <p className="text-gray-700 mb-4">
          Một trong những cách đơn giản nhất để <strong>kiểm tra phạt nguội ô tô</strong> hoặc <strong>xe máy</strong> là sử dụng các website chính thức như Cổng thông tin điện tử Cục CSGT.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Bước Từng Bước Để Tra Cứu:</h4>
          <ol className="list-decimal list-inside text-gray-700 space-y-2">
            <li>Truy cập website chính thức của Cục CSGT</li>
            <li>Nhập thông tin về phương tiện như biển số</li>
            <li>Nhấn &quot;Tra cứu&quot; để xem kết quả</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    question: 'Sử Dụng Ứng Dụng Di Động',
    content: (
      <div>
        <p className="text-gray-700 mb-4">
          Ngoài website, bạn cũng có thể tải ứng dụng <strong>Phạt Nguội Toàn Quốc</strong> trên cả nền tảng Android và iOS để kiểm tra vi phạm mọi lúc, mọi nơi.
        </p>
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-800 mb-2">Lợi Ích Của Ứng Dụng:</h4>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <Check className="w-4 h-4 text-blue-600 mr-2" />
              Nhận thông báo tức thì khi có vi phạm
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 text-blue-600 mr-2" />
              Thanh toán trực tiếp qua ứng dụng
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 text-blue-600 mr-2" />
              Theo dõi lịch sử vi phạm của phương tiện
            </li>
          </ul>
        </div>
      </div>
    ),
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-white py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="text-lg font-semibold text-gray-800">{item.question}</span>
                <ChevronDown className={`w-5 h-5 transform transition-transform duration-300 ease-in-out ${
                  openIndex === index ? 'rotate-180' : ''
                }`} />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-4 border-t">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 