'use client'

import { useEffect, useState, Suspense } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { AlertCircle, CheckCircle2, Home, RefreshCw } from 'lucide-react'
import { unsubscribe } from '@/app/actions/subscription'
import { TextShimmer } from '@/components/text-shimmer'

function UnsubscribeContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('')

  const handleUnsubscribe = async (hash: string) => {
    setStatus('loading')
    try {
      const result = await unsubscribe(hash)

      if (result.success) {
        setStatus('success')
        setMessage('Bạn đã hủy đăng ký nhận thông báo thành công')
      } else {
        setStatus('error')
        setMessage(result.error || 'Có lỗi xảy ra khi hủy đăng ký')
      }
    } catch {
      setStatus('error')
      setMessage('Không thể kết nối đến máy chủ')
    }
  }

  useEffect(() => {
    const hash = searchParams.get('hash')
    if (!hash) {
      setStatus('error')
      setMessage('Liên kết không hợp lệ')
      return
    }

    handleUnsubscribe(hash)
  }, [searchParams])

  const handleRetry = () => {
    const hash = searchParams.get('hash')
    if (hash) {
      handleUnsubscribe(hash)
    }
  }

  const handleGoHome = () => {
    router.push('/')
  }

  return (
    <div className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 border border-blue-100">
      {status === 'loading' && (
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
          <TextShimmer 
            as="p"
            className="text-lg font-medium"
            duration={1.5}
          >
            Đang xử lý yêu cầu của bạn...
          </TextShimmer>
        </div>
      )}

      {status === 'success' && (
        <div className="flex flex-col items-center space-y-4">
          <CheckCircle2 className="w-12 h-12 text-green-600 animate-in zoom-in-50 duration-300" />
          <TextShimmer 
            as="p"
            className="text-lg font-medium text-center"
            duration={2}
          >
            {message}
          </TextShimmer>
          <button
            onClick={handleGoHome}
            className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
            Về trang chủ
          </button>
        </div>
      )}

      {status === 'error' && (
        <div className="flex flex-col items-center space-y-4">
          <AlertCircle className="w-12 h-12 text-red-600 animate-in zoom-in-50 duration-300" />
          <TextShimmer 
            as="p"
            className="text-lg font-medium text-center"
            duration={2}
          >
            {message}
          </TextShimmer>
          <div className="flex gap-3 mt-4">
            <button
              onClick={handleRetry}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Thử lại
            </button>
            <button
              onClick={handleGoHome}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <Home className="w-4 h-4 mr-2" />
              Về trang chủ
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

function LoadingFallback() {
  return (
    <div className="relative bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 md:p-8 border border-blue-100">
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
        <TextShimmer 
          as="p"
          className="text-lg font-medium"
          duration={1.5}
        >
          Đang tải...
        </TextShimmer>
      </div>
    </div>
  )
}

export default function UnsubscribePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 py-12">
      <div className="max-w-lg mx-auto px-4">
        <Suspense fallback={<LoadingFallback />}>
          <UnsubscribeContent />
        </Suspense>
      </div>
    </div>
  )
}