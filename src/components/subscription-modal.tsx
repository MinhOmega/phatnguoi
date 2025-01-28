'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { subscribe } from '@/app/actions/subscription'

interface SubscriptionModalProps {
  isOpen: boolean
  onClose: () => void
  plateNumber: string
}

export function SubscriptionModal({ isOpen, onClose, plateNumber: initialPlateNumber }: SubscriptionModalProps) {
  const [email, setEmail] = useState('')
  const [plateNumber, setPlateNumber] = useState(initialPlateNumber)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  // Reset form when modal opens
  useEffect(() => {
    if (isOpen) {
      setPlateNumber(initialPlateNumber)
      setEmail('')
      setError(null)
      setSuccess(false)
    }
  }, [isOpen, initialPlateNumber])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const result = await subscribe(email, plateNumber)

      if (!result.success) {
        throw new Error(result.error)
      }

      setSuccess(true)
      setTimeout(() => {
        onClose()
      }, 2000)
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Có lỗi xảy ra')
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center p-4 z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onKeyDown={handleKeyDown}
    >
      <div 
        className="bg-white dark:bg-gray-900 rounded-lg max-w-md w-full p-6 relative shadow-xl"
        role="document"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 transition-colors"
          aria-label="Đóng hộp thoại"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        <h2 
          id="modal-title" 
          className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4"
        >
          Đăng ký nhận thông báo
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="plateNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Biển số xe
            </label>
            <input
              type="text"
              id="plateNumber"
              value={plateNumber}
              onChange={(e) => setPlateNumber(e.target.value)}
              required
              pattern="^\d{2}([A-Z]\d?|[A-Z]{2})-(\d{4}|\d{5}|\d{3}\.\d{2})$|^\d{2}([A-Z]\d?|[A-Z]{2})\d{5}$"
              placeholder="Nhập biển số xe (VD: 11H1-1111, 11AB-111.11)"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
              aria-describedby="plateNumber-error"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Nhập địa chỉ email của bạn"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
              aria-describedby="email-error"
            />
          </div>

          {error && (
            <div 
              className="text-red-600 dark:text-red-400 text-sm" 
              role="alert"
              id={error.includes('email') ? 'email-error' : 'plateNumber-error'}
            >
              {error}
            </div>
          )}

          {success && (
            <div 
              className="text-green-600 dark:text-green-400 text-sm"
              role="status"
            >
              Đăng ký thành công!
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            aria-busy={isLoading}
          >
            {isLoading ? (
              <>
                <span className="sr-only">Đang xử lý...</span>
                <span aria-hidden="true">Đang xử lý...</span>
              </>
            ) : 'Đăng ký'}
          </button>
        </form>
      </div>
    </div>
  )
}