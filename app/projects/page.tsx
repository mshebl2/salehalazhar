import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"
import PageBanner from "@/components/page-banner"
import ProjectsGallery from "@/components/projects-gallery"
import ProjectsStats from "@/components/projects-stats"
import { getProjects } from "@/actions/project-actions"
import connectDB from "@/lib/db"
import SiteContent from "@/models/SiteContent"

export const metadata = {
  title: "معرض المشاريع - صالح الأزهري للمقاولات العامة والتشطيبات بالمدينة المنورة",
  description:
    "استعرض أفضل مشاريع شركة صالح الأزهري للمقاولات العامة والتشطيبات بالمدينة المنورة، مشاريع سكنية وتجارية وصناعية بجودة عالية وتنفيذ احترافي.",
}

export default async function ProjectsPage() {
  await connectDB()

  const [projects, bannerDoc] = await Promise.all([
    getProjects(),
    SiteContent.findOne({ key: 'banner_projects' })
  ])

  const banner = bannerDoc?.value || {}
  const bannerImage = banner.image || '/bb.png'
  const bannerTitle = banner.title || 'معرض المشاريع بالمدينة المنورة'
  const bannerSubtitle = banner.subtitle || 'استعرض مجموعة من أفضل مشاريعنا المنجزة في المدينة المنورة التي تعكس خبرتنا وجودة عملنا'

  const pageTitle =
    "معرض المشاريع - صالح الأزهري للمقاولات العامة والتشطيبات بالمدينة المنورة"
  const pageDescription =
    "استعرض أفضل مشاريع شركة صالح الأزهري للمقاولات العامة والتشطيبات بالمدينة المنورة، مشاريع سكنية وتجارية وصناعية بجودة عالية وتنفيذ احترافي."

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: pageTitle,
    description: pageDescription,
    url: "https://www.salehalazhari.com/projects",
    hasPart: projects.map((p: any) => ({
      "@type": "CreativeWork",
      name: p.title,
      description: p.description,
    }))
  }

  const plainProjects = JSON.parse(JSON.stringify(projects))

  return (
    <main className="min-h-screen">
      <Header />
      <PageBanner
        image={bannerImage}
        title={bannerTitle}
        subtitle={bannerSubtitle}
        fallbackImage="/bb.png"
      />
      <ProjectsStats />
      <ProjectsGallery projects={plainProjects} />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Footer />
      <FloatingContact />
    </main>
  )
}
