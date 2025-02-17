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
        <h2 className="font-semibold text-gray-800 dark:text-gray-100 mb-2 sm:mb-3 text-base sm:text-lg">Định Nghĩa Phạt Nguội</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
          <strong>Phạt nguội</strong> là hình thức xử phạt các phương tiện giao thông sau khi vi phạm mà không cần đến việc cảnh sát giao thông trực tiếp dừng phương tiện. 
          Thông qua các hệ thống camera được lắp đặt trên các tuyến đường, các hành vi như vượt đèn đỏ, chạy quá tốc độ, và đi sai làn đường đều được ghi nhận.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Việc <strong>tra cứu phạt nguội</strong> giúp các chủ xe nắm được các vi phạm của mình, đảm bảo không có khoản phạt nào tồn đọng có thể ảnh hưởng đến việc đăng kiểm xe.
        </p>
      </div>
    ),
  },
  {
    question: 'Tra Cứu Qua Website Chính Thức',
    content: (
      <div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Một trong những cách đơn giản nhất để <strong>kiểm tra phạt nguội ô tô</strong> hoặc <strong>xe máy</strong> là sử dụng các website chính thức như Cổng thông tin điện tử Cục CSGT.
        </p>
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
          <h2 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Bước Từng Bước Để Tra Cứu:</h2>
          <ol className="list-decimal list-inside text-gray-700 dark:text-gray-300 space-y-2">
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
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Ngoài website, bạn cũng có thể tải ứng dụng <strong>Phạt Nguội Toàn Quốc</strong> trên cả nền tảng Android và iOS để kiểm tra vi phạm mọi lúc, mọi nơi.
        </p>
        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
          <h2 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">Lợi Ích Của Ứng Dụng:</h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-center">
              <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
              Nhận thông báo tức thì khi có vi phạm
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
              Thanh toán trực tiếp qua ứng dụng
            </li>
            <li className="flex items-center">
              <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 mr-2" />
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

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      handleToggle(index)
    }
  }

  return (
    <section 
      className="bg-white dark:bg-transparent py-6 sm:py-8 md:py-12"
      aria-label="Câu hỏi thường gặp"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 sm:space-y-4" role="list">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl"
              role="listitem"
            >
              <button
                className="w-full px-4 sm:px-6 py-3 sm:py-4 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg sm:rounded-xl transition-all duration-300"
                onClick={() => handleToggle(index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <span className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100 pr-2">{item.question}</span>
                <ChevronDown 
                  className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 transform transition-transform duration-300 ease-in-out text-gray-600 dark:text-gray-400 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              <div 
                id={`faq-content-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 sm:px-6 py-3 sm:py-4 border-t border-gray-200 dark:border-gray-700 text-sm sm:text-base">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}