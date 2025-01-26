'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { AlertCircle, CheckCircle2 } from 'lucide-react'
import { unsubscribe } from '@/app/actions/subscription'
import { TextShimmer } from '@/components/text-shimmer'

export default function UnsubscribePage() {
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const handleUnsubscribe = async () => {
      const hash = searchParams.get('hash')
      if (!hash) {
        setStatus('error')
        setMessage('Liên kết không hợp lệ')
        return
      }

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

    handleUnsubscribe()
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-50 py-12">
      <div className="max-w-lg mx-auto px-4">
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
            </div>
          )}
        </div>
      </div>
    </div>
  )
}