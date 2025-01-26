'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

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
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, plateNumber }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Có lỗi xảy ra')
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

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Đăng ký nhận thông báo
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="plateNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Biển số xe
            </label>
            <input
              type="text"
              id="plateNumber"
              value={plateNumber}
              onChange={(e) => setPlateNumber(e.target.value)}
              required
              pattern="^[0-9]{2}[A-Z][0-9]?-[0-9]{4,5}$|^[0-9]{2}[A-Z][0-9]?[0-9]{4,5}$"
              placeholder="Nhập biển số xe (VD: 11H1-1111 hoặc 11H-11111)"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Nhập địa chỉ email của bạn"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {error && (
            <div className="text-red-600 text-sm">{error}</div>
          )}

          {success && (
            <div className="text-green-600 text-sm">Đăng ký thành công!</div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:opacity-50"
          >
            {isLoading ? 'Đang xử lý...' : 'Đăng ký'}
          </button>
        </form>
      </div>
    </div>
  )
} 