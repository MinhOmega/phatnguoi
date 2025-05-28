'use client'

import { useState } from 'react'
import PlateSearchForm from '@/components/plate-search-form'
import { FaqSection } from '@/components/faq-section'
import { SubscriptionModal } from '@/components/subscription-modal'
import { ShieldIcon, Bell } from 'lucide-react'
import ThemeToggler from '@/components/theme/toggler'
import CheckSeo from './check-seo'

export function HomeContent() {
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false)
  const [currentPlateNumber, setCurrentPlateNumber] = useState('')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-6 sm:py-8 md:py-12 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Add Theme Toggler */}
        <div className="flex justify-end mb-4">
          <ThemeToggler />
        </div>

        {/* Header */}
        <article className="prose prose-sm sm:prose-base lg:prose-lg mx-auto mb-6 sm:mb-8 text-gray-800 dark:text-gray-200">
          <p className="lead text-base sm:text-lg">
            <strong>Phạt nguội</strong> đã trở thành một phần quan trọng trong hệ thống giám sát giao thông tại Việt Nam. 
            Với hệ thống camera giám sát hiện đại, các hành vi vi phạm được ghi lại và xử phạt, ngay cả khi người vi phạm không bị bắt tại chỗ.
          </p>
        </article>

        {/* Title Section */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center">
              <ShieldIcon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-3 sm:mb-4 tracking-tight">
            Tra cứu vi phạm giao thông
          </h1>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4">
            Hệ thống tra cứu thông tin vi phạm giao thông trực tuyến
          </p>
          <div className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            <p>Developed by <a href="https://github.com/minhomega" className="text-blue-600 dark:text-blue-400 hover:underline">MinhVo</a></p>
            <p>UI design by <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline">Hoàng Phúc - FoxN</a></p>
          </div>
          
          {/* Add Subscription Button */}
          <button
            onClick={() => setShowSubscriptionModal(true)}
            className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <Bell className="w-4 h-4 mr-2" />
            Đăng ký nhận thông báo vi phạm
          </button>
        </div>

        {/* Search Form */}
        <div className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 transform hover:shadow-2xl transition-all duration-300">
          <PlateSearchForm
            setShowSubscriptionModal={setShowSubscriptionModal}
            setCurrentPlateNumber={setCurrentPlateNumber}
          />
        </div>

        {/* FAQ Section */}
        <FaqSection />

        {/* Subscription Modal */}
        <SubscriptionModal
          isOpen={showSubscriptionModal}
          onClose={() => {
            setShowSubscriptionModal(false)
            setCurrentPlateNumber('')
          }}
          plateNumber={currentPlateNumber}
        />
      </div>
      <CheckSeo className="absolute -z-10 top-0 left-0 w-full h-full overflow-hidden" />
    </div>
  )
} 