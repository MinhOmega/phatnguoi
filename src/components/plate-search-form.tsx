'use client'

import { useState } from 'react'
import { checkPlateNumber } from '@/app/actions/check-plate'
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
  MapPinned 
} from 'lucide-react'

interface ViolationData {
  'Biển kiểm soát': string
  'Màu biển': string
  'Loại phương tiện': string
  'Thời gian vi phạm': string
  'Địa điểm vi phạm': string
  'Hành vi vi phạm': string
  'Đơn vị phát hiện vi phạm': string
  'Nơi giải quyết vụ việc': string[] | string
  'Trạng thái': string
}

export default function PlateSearchForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [violations, setViolations] = useState<ViolationData[] | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)
    setError(null)
    setViolations(null)

    const formData = new FormData(event.currentTarget)
    const plateNumber = formData.get('plateNumber') as string

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

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="plateNumber" className="block text-lg font-medium text-gray-700 mb-3">
            <Car className="inline-block w-5 h-5 mr-2 text-blue-600" />
            Biển số xe
          </label>
          <input
            type="text"
            id="plateNumber"
            name="plateNumber"
            required
            pattern="^[0-9]{2}[A-Z][0-9]{5,6}$|^[0-9]{2}[A-Z]-[0-9]{3}.[0-9]{2}$"
            className="w-full px-5 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
            placeholder="Nhập biển số xe (VD: 51F-123.45 hoặc 51F12345)"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium py-4 px-6 rounded-xl transition-all duration-300 text-lg flex items-center justify-center group disabled:opacity-50"
        >
          {isLoading ? (
            <div className="animate-spin rounded-full h-6 w-6 border-4 border-white border-t-transparent"></div>
          ) : (
            <>
              <Search className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              <span>Kiểm tra ngay</span>
            </>
          )}
        </button>
      </form>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center items-center py-16">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent"></div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="bg-red-50 border border-red-200 p-6 rounded-xl flex items-center mt-6">
          <AlertCircle className="w-6 h-6 text-red-600 mr-3" />
          <p className="text-red-700 text-lg">{error}</p>
        </div>
      )}

      {/* Results */}
      {violations && violations.length > 0 && (
        <div className="space-y-6 mt-8">
          {violations.map((violation, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-xl text-gray-800 flex items-center">
                  <AlertTriangle className="w-5 h-5 text-yellow-500 mr-2" />
                  Vi phạm {index + 1}/{violations.length}
                </h3>
                <span className={`px-4 py-2 rounded-full flex items-center ${
                  violation['Trạng thái'].includes('Đã') 
                    ? 'text-green-700 bg-green-50 border border-green-200'
                    : 'text-yellow-700 bg-yellow-50 border border-yellow-200'
                }`}>
                  {violation['Trạng thái'].includes('Đã') ? (
                    <CheckCircle2 className="w-4 h-4 mr-1" />
                  ) : (
                    <Clock className="w-4 h-4 mr-1" />
                  )}
                  {violation['Trạng thái']}
                </span>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InfoCard
                    icon={<Car />}
                    label="Biển số"
                    value={violation['Biển kiểm soát']}
                  />
                  <InfoCard
                    icon={<Palette />}
                    label="Màu biển"
                    value={violation['Màu biển']}
                  />
                  <InfoCard
                    icon={<Car />}
                    label="Loại xe"
                    value={violation['Loại phương tiện']}
                  />
                  <InfoCard
                    icon={<Clock />}
                    label="Thời gian"
                    value={formatDate(violation['Thời gian vi phạm'])}
                  />
                </div>

                <InfoCard
                  icon={<MapPin />}
                  label="Địa điểm"
                  value={violation['Địa điểm vi phạm']}
                />
                <InfoCard
                  icon={<AlertCircle />}
                  label="Hành vi vi phạm"
                  value={violation['Hành vi vi phạm']}
                />
                <InfoCard
                  icon={<Building2 />}
                  label="Đơn vị phát hiện"
                  value={violation['Đơn vị phát hiện vi phạm']}
                />

                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium text-gray-700 mb-2">
                    <MapPinned className="inline-block w-5 h-5 mr-2 text-blue-600" />
                    Nơi giải quyết:
                  </p>
                  <ul className="space-y-2 pl-6">
                    {Array.isArray(violation['Nơi giải quyết vụ việc']) 
                      ? violation['Nơi giải quyết vụ việc'].map((location, idx) => (
                          <li key={idx} className="text-gray-800 flex items-start">
                            <Circle className="w-2 h-2 mt-2 mr-2 text-blue-600" />
                            {location}
                          </li>
                        ))
                      : <li className="text-gray-800">{violation['Nơi giải quyết vụ việc']}</li>
                    }
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {violations && violations.length === 0 && (
        <div className="bg-green-50 border border-green-200 p-6 rounded-xl flex items-center mt-6">
          <CheckCircle2 className="w-6 h-6 text-green-600 mr-3" />
          <p className="text-green-700 text-lg">Không tìm thấy thông tin vi phạm</p>
        </div>
      )}
    </div>
  )
}

function InfoCard({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <p className="font-medium text-gray-700 mb-2">
        <span className="inline-block w-5 h-5 mr-2 text-blue-600">{icon}</span>
        {label}:
      </p>
      <p className="text-gray-800">{value}</p>
    </div>
  )
} 