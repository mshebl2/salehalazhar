import Header from "@/components/header"
import HeroSlider from "@/components/hero-slider"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import AchievementsCounter from "@/components/achievements-counter"
import MapSection from "@/components/map-section"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"
import { getProjects } from "@/actions/project-actions"
import { getServices } from "@/actions/service-actions"
import SiteContent from "@/models/SiteContent"
import connectDB from "@/lib/db"

export default async function HomePage() {
  await connectDB()

  // Fetch dynamic content parallelly
  const [projects, services, heroSlidesDoc] = await Promise.all([
    getProjects(),
    getServices(),
    SiteContent.findOne({ key: 'hero_slides' })
  ])

  const heroSlides = heroSlidesDoc?.value || []
  const plainProjects = JSON.parse(JSON.stringify(projects))
  const plainServices = JSON.parse(JSON.stringify(services))

  return (
    <main className="min-h-screen">
      <Header />
      <HeroSlider slides={heroSlides} />
      <AboutSection />
      <ServicesSection services={plainServices} />
      <ProjectsSection projects={plainProjects} />
      <MapSection />
      <AchievementsCounter />   {/* هنا بعد الماب */}
      <Footer />
      <FloatingContact />
    </main>
  )
}
