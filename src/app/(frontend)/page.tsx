import { Hero } from '@/components/Hero'
import { WorkGrid } from '@/components/WorkGrid'
import { TrustedBy, Process, Capabilities, Pricing, Testimonial, BookCall, Referral } from '@/components/Sections'

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedBy />
      <Process />
      <WorkGrid limit={2} />
      <Capabilities />
      <Pricing />
      <Testimonial />
      <BookCall />
      <Referral />
    </>
  )
}
