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

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div>
          <label htmlFor="plateNumber" className="block text-base sm:text-lg font-medium text-gray-700 mb-2 sm:mb-3">
            <Car className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
            Biển số xe
          </label>
          <input
            type="text"
            id="plateNumber"
            name="plateNumber"
            required
            pattern="^[0-9]{2}[A-Z][0-9]?-[0-9]{4,5}$|^[0-9]{2}[A-Z][0-9]?[0-9]{4,5}$"
            className="w-full px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-lg border border-gray-300 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            placeholder="Nhập biển số xe (VD: 11H1-1111 hoặc 11H-11111)"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-3 sm:py-4 px-4 sm:px-6 rounded-lg sm:rounded-xl transition-all duration-300 text-base sm:text-lg flex items-center justify-center group disabled:opacity-50"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-5 w-5 sm:h-6 sm:w-6 border-3 sm:border-4 border-white border-t-transparent"></div>
          ) : (
            <>
              <Search className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform" />
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
        <div className="bg-red-50 border border-red-200 p-4 sm:p-6 rounded-lg sm:rounded-xl flex items-center mt-4 sm:mt-6">
          <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 mr-2 sm:mr-3 flex-shrink-0" />
          <p className="text-red-700 text-base sm:text-lg">{error}</p>
        </div>
      )}

      {/* Results */}
      {violations && violations.length > 0 && (
        <div className="space-y-4 sm:space-y-6 mt-6 sm:mt-8">
          <div className="flex justify-end">
            <button
              onClick={handleSubscribe}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <Bell className="w-4 h-4 mr-2" />
              Đăng ký nhận thông báo
            </button>
          </div>
          {violations.map((violation, index) => (
            <div key={index} className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 mb-4 sm:mb-6">
                <h3 className="font-semibold text-lg sm:text-xl text-gray-800 flex items-center">
                  <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 mr-2" />
                  Vi phạm {index + 1}/{violations.length}
                </h3>
                <span className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center justify-center sm:justify-start ${
                  violation.status.includes('Đã') 
                    ? 'text-green-700 bg-green-50 border border-green-200'
                    : 'text-yellow-700 bg-yellow-50 border border-yellow-200'
                }`}>
                  {violation.status.includes('Đã') ? (
                    <CheckCircle2 className="w-4 h-4 mr-1" />
                  ) : (
                    <Clock className="w-4 h-4 mr-1" />
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

                <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                  <p className="font-medium text-gray-700 mb-2 text-sm sm:text-base">
                    <MapPinned className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600" />
                    Nơi giải quyết:
                  </p>
                  <ul className="space-y-2 pl-4 sm:pl-6 text-sm sm:text-base">
                    {Array.isArray(violation.resolutionPlace) 
                      ? violation.resolutionPlace.map((location, idx) => (
                          <li key={idx} className="text-gray-800 flex items-start">
                            <Circle className="w-1.5 h-1.5 sm:w-2 sm:h-2 mt-2 mr-2 text-blue-600 flex-shrink-0" />
                            {location}
                          </li>
                        ))
                      : <li className="text-gray-800">{violation.resolutionPlace}</li>
                    }
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {violations && violations.length === 0 && (
        <div className="bg-green-50 border border-green-200 p-4 sm:p-6 rounded-lg sm:rounded-xl flex items-center mt-4 sm:mt-6">
          <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 mr-2 sm:mr-3 flex-shrink-0" />
          <p className="text-green-700 text-base sm:text-lg">Không tìm thấy thông tin vi phạm</p>
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
    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
      <p className="font-medium text-gray-700 mb-1 sm:mb-2 text-sm sm:text-base">
        <span className="inline-block w-4 h-4 sm:w-5 sm:h-5 mr-2 text-blue-600">{icon}</span>
        {label}:
      </p>
      <p className="text-gray-800 text-sm sm:text-base">{value}</p>
    </div>
  )
} 