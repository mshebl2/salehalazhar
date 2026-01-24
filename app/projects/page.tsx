import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"
import ProjectsHero from "@/components/projects-hero"
import ProjectsGallery from "@/components/projects-gallery"
import ProjectsStats from "@/components/projects-stats"

export const metadata = {
  title: "معرض المشاريع - صالح الأزهري للمقاولات العامة والتشطيبات بالمدينة المنورة",
  description:
    "استعرض أفضل مشاريع شركة صالح الأزهري للمقاولات العامة والتشطيبات بالمدينة المنورة، مشاريع سكنية وتجارية وصناعية بجودة عالية وتنفيذ احترافي.",
}

export default function ProjectsPage() {
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
    hasPart: [
      {
        "@type": "CreativeWork",
        name: "مشروع تشطيب داخلي",
        description: "تشطيبات داخلية عالية الجودة في المدينة المنورة.",
      },
      {
        "@type": "CreativeWork",
        name: "مشروع مقاولات عامة",
        description: "تنفيذ مقاولات عامة بأعلى معايير الجودة.",
      },
    ],
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* إضافة عنوان H1 هنا لتحسين SEO */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4 text-center text-[#0D2240]">
          معرض مشاريع صالح الأزهري للمقاولات العامة والتشطيبات بالمدينة المنورة
        </h1>
        <p className="text-lg text-center text-[#2D3640] mb-10">
          شاهد أفضل أعمالنا في التشطيبات العامة والمقاولات بالمدينة المنورة، تنفيذ احترافي وجودة عالية مع الالتزام بالمواعيد.
        </p>
      </section>

      <ProjectsHero />
      <ProjectsStats />
      <ProjectsGallery />

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
