import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import SolutionsSection from '@/components/SolutionsSection'
import CaseStudySection from '@/components/CaseStudySection'
import TestimonialsSection from '@/components/TestimonialsSection'
import TestimonialsNew from '@/components/TestimonialsNew'
import TestimonialsCarousel from '@/components/TestimonialsCarousel'
import ConsultationSection from '@/components/Consultation'
import TechStackSection from '@/components/Technologys'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <SolutionsSection />
      <CaseStudySection />
      <TestimonialsSection />
      <TestimonialsNew />
      <TestimonialsCarousel />
      <ConsultationSection />
      <TechStackSection />
    </main>
  )
}
