import { Metadata } from 'next'
import { HomeContent } from '@/components/home-content'

export const metadata: Metadata = {
  title: 'Tra cứu vi phạm giao thông',
  description: 'Hệ thống tra cứu thông tin vi phạm giao thông trực tuyến',
}

export default function HomePage() {
  return <HomeContent />
}
