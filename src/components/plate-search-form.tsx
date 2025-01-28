'use client'

import { useState } from 'react'
import { checkPlateNumber, type ViolationResponse } from '@/app/actions/check-plate'
import { formatDate } from '@/lib/utils'
import { 
  Car, 
  Search, 
  AlertTriangle, 
  AlertCircle, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Building2, 
  Circle, 
  Palette, 
  MapPinned,
  Bell
} from 'lucide-react'

interface PlateSearchFormProps {
  setShowSubscriptionModal: (show: boolean) => void
  setCurrentPlateNumber: (plateNumber: string) => void
}

export default function PlateSearchForm({ 
  setShowSubscriptionModal, 
  setCurrentPlateNumber 
}: PlateSearchFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [violations, setViolations] = useState<ViolationResponse[] | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [plateNumber, setPlateNumber] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    setError(null)
    setViolations(null)

    const formData = new FormData(event.currentTarget)
    const plateNumber = formData.get('plateNumber') as string
    setPlateNumber(plateNumber)

    try {
      const result = await checkPlateNumber(plateNumber)
      if (result.success && result.data) {
        setViolations(result.data)
      } else {
        setError(result.error || 'Đã xảy ra lỗi không xác định')
      }
    } catch {
      setError('Không thể kết nối đến máy chủ')
    } finally {
      setIsLoading(false)
    }
  }

  const handleSubscribe = () => {
    setCurrentPlateNumber(plateNumber)
    setShowSubscriptionModal(true)
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      event.preventDefault()
      const form = event.currentTarget.closest('form')
      if (form) form.requestSubmit()
    }
  }

  return (
    <div role="region" aria-label="Tra cứu vi phạm giao thông">
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" role="search">
        <div>
          <label htmlFor="plateNumber" className="block text-base sm:text-lg font-medium text-gray-700 dark:text-gray-200 mb-2 sm:mb-3">
            <Car className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600 dark:text-blue-400" aria-hidden="true" />
            Biển số xe
          </label>
          <input
            type="text"
            id="plateNumber"
            name="plateNumber"
            required
            pattern="^\d{2}([A-Z]\d?|[A-Z]{2})-(\d{4}|\d{5}|\d{3}\.\d{2})$|^\d{2}([A-Z]\d?|[A-Z]{2})\d{5}$"
            className="w-full px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-lg border border-gray-300 dark:border-gray-600 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-100 dark:placeholder-gray-400 transition-all duration-200"
            placeholder="Nhập biển số xe (VD: 11H1-1111, 11AB-111.11)"
            aria-label="Nhập biển số xe"
            aria-required="true"
            aria-invalid={error ? "true" : "false"}
            onKeyDown={handleKeyDown}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          aria-label={isLoading ? "Đang tìm kiếm..." : "Kiểm tra vi phạm"}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-500 dark:to-blue-600 dark:hover:from-blue-600 dark:hover:to-blue-700 text-white font-medium py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 text-base sm:text-lg flex items-center justify-center group disabled:opacity-50"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 border-3 sm:border-4 border-white border-t-transparent" role="status">
              <span className="sr-only">Đang tìm kiếm...</span>
            </div>
          ) : (
            <>
              <Search className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" aria-hidden="true" />
              <span>Kiểm tra ngay</span>
            </>
          )}
        </button>
      </form>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center items-center py-12 sm:py-16">
          <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-4 border-blue-600 border-t-transparent"></div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div role="alert" className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 p-4 sm:p-6 rounded-lg sm:rounded-xl flex items-center mt-4 sm:mt-6">
          <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 dark:text-red-400 mr-2 sm:mr-3 flex-shrink-0" aria-hidden="true" />
          <p className="text-red-700 dark:text-red-200 text-base sm:text-lg">{error}</p>
        </div>
      )}

      {/* Results */}
      {violations && violations.length > 0 && (
        <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
          <div className="flex justify-end">
            <button
              onClick={handleSubscribe}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
              aria-label="Đăng ký nhận thông báo vi phạm"
            >
              <Bell className="w-4 h-4 mr-2" aria-hidden="true" />
              Đăng ký nhận thông báo
            </button>
          </div>
          {violations.map((violation, index) => (
            <article 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300"
              aria-label={`Vi phạm ${index + 1} trong ${violations.length}`}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 mb-4 sm:mb-6">
                <h3 className="font-semibold text-lg sm:text-xl text-gray-800 dark:text-gray-100 flex items-center">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 mr-2" aria-hidden="true" />
                  Vi phạm {index + 1}/{violations.length}
                </h3>
                <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center justify-center sm:justify-start ${
                  violation.status.includes('Đã') 
                    ? 'text-green-700 dark:text-green-200 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800'
                    : 'text-yellow-700 dark:text-yellow-200 bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800'
                }`}>
                  {violation.status.includes('Đã') ? (
                    <CheckCircle2 className="w-4 h-4 mr-1" aria-hidden="true" />
                  ) : (
                    <Clock className="w-4 h-4 mr-1" aria-hidden="true" />
                  )}
                  {violation.status}
                </span>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
                  <InfoCard
                    icon={<Car />}
                    label="Biển số"
                    value={violation.plateNumber}
                  />
                  <InfoCard
                    icon={<Palette />}
                    label="Màu biển"
                    value={violation.plateColor}
                  />
                  <InfoCard
                    icon={<Car />}
                    label="Loại xe"
                    value={violation.vehicleType}
                  />
                  <InfoCard
                    icon={<Clock />}
                    label="Thời gian"
                    value={formatDate(violation.violationTime)}
                  />
                </div>

                <InfoCard
                  icon={<MapPin />}
                  label="Địa điểm"
                  value={violation.violationLocation}
                />
                <InfoCard
                  icon={<AlertCircle />}
                  label="Hành vi vi phạm"
                  value={violation.violationBehavior}
                />
                <InfoCard
                  icon={<Building2 />}
                  label="Đơn vị phát hiện"
                  value={violation.detectionUnit}
                />

                <div className="bg-gray-50 dark:bg-gray-700/50 p-3 sm:p-4 rounded-lg">
                  <p className="font-medium text-gray-700 dark:text-gray-200 mb-2 text-sm sm:text-base">
                    <MapPinned className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                    Nơi giải quyết:
                  </p>
                  <ul className="space-y-2 pl-4 sm:pl-6 text-sm sm:text-base">
                    {Array.isArray(violation.resolutionPlace) 
                      ? violation.resolutionPlace.map((location, idx) => (
                          <li key={idx} className="text-gray-800 dark:text-gray-200 flex items-start">
                            <Circle className="w-1.5 h-1.5 sm:w-2 sm:h-2 mt-2 mr-2 text-blue-600 dark:text-blue-400 flex-shrink-0" aria-hidden="true" />
                            {location}
                          </li>
                        ))
                      : <li className="text-gray-800 dark:text-gray-200">{violation.resolutionPlace}</li>
                    }
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {violations && violations.length === 0 && (
        <div role="alert" className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 p-4 sm:p-6 rounded-lg sm:rounded-xl flex items-center mt-4 sm:mt-6">
          <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 dark:text-green-400 mr-2 sm:mr-3 flex-shrink-0" aria-hidden="true" />
          <p className="text-green-700 dark:text-green-200 text-base sm:text-lg">Không tìm thấy thông tin vi phạm</p>
        </div>
      )}
    </div>
  )
}

interface InfoCardProps {
  icon: React.ReactNode
  label: string
  value: string
}

function InfoCard({ icon, label, value }: InfoCardProps) {
  return (
    <div className="bg-gray-50 dark:bg-gray-700/50 p-3 sm:p-4 rounded-lg">
      <p className="font-medium text-gray-700 dark:text-gray-200 mb-1 sm:mb-2 text-sm sm:text-base">
        <span className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600 dark:text-blue-400" aria-hidden="true">{icon}</span>
        {label}:
      </p>
      <p className="text-gray-800 dark:text-gray-200 text-sm sm:text-base">{value}</p>
    </div>
  )
}