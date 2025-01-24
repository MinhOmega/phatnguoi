import { Metadata } from 'next'
import PlateSearchForm from '@/components/plate-search-form'
import { FaqSection } from '@/components/faq-section'

export const metadata: Metadata = {
  title: 'Tra cứu vi phạm giao thông',
  description: 'Hệ thống tra cứu thông tin vi phạm giao thông trực tuyến',
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <article className="prose prose-lg mx-auto mb-8 text-gray-800">
          <p className="lead">
            <strong>Phạt nguội</strong> đã trở thành một phần quan trọng trong hệ thống giám sát giao thông tại Việt Nam. 
            Với hệ thống camera giám sát hiện đại, các hành vi vi phạm được ghi lại và xử phạt, ngay cả khi người vi phạm không bị bắt tại chỗ.
          </p>
        </article>

        {/* Title Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <ShieldIcon className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
            Tra cứu vi phạm giao thông
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hệ thống tra cứu thông tin vi phạm giao thông trực tuyến
          </p>
          <div className="mt-4 text-sm text-gray-500">
            <p>Developed by <a href="https://github.com/minhomega" className="text-blue-600 hover:underline">MinhVo</a></p>
          </div>
        </div>

        {/* Search Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 transform hover:shadow-2xl transition-all duration-300">
          <PlateSearchForm />
        </div>

        {/* FAQ Section */}
        <FaqSection />
      </div>
    </div>
  )
}

function ShieldIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  )
}
