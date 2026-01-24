import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"
import AboutHero from "@/components/about-hero"
import CompanyStory from "@/components/company-story"
import VisionMission from "@/components/vision-mission"
import TeamSection from "@/components/team-section"
import AchievementsCounter from "@/components/achievements-counter"

export const metadata = {
  title: "من نحن - صالح الازهري للمقاولات العامة والتشطيبات بالمدينة المنورة",
  description:
    "شركة صالح الازهري للمقاولات العامة والتشطيبات بالمدينة المنورة تقدم خدمات البناء، التشطيب، الترميم، البنية التحتية، والكهروميكانيك بأعلى معايير الجودة والاحترافية.",
  keywords: [
    "من نحن بالمدينة المنورة",
    "صالح الازهري للمقاولات العامة بالمدينة المنورة",
    "شركة مقاولات بالمدينة المنورة",
    "مقاولات عامة وتشطيبات بالمدينة المنورة",
    "شركة بناء بالمدينة المنورة",
    "شركة ترميم بالمدينة المنورة",
    "شركة بنية تحتية بالمدينة المنورة",
    "شركة كهروميكانيك بالمدينة المنورة",
    "شركة حدادة بالمدينة المنورة",
    "شركة طرق بالمدينة المنورة",
    "شركة عقارات بالمدينة المنورة",
  ],
  openGraph: {
    title: "من نحن - صالح الازهري للمقاولات العامة والتشطيبات بالمدينة المنورة",
    description:
      "شركة صالح الازهري للمقاولات العامة والتشطيبات بالمدينة المنورة تقدم خدمات البناء، التشطيب، الترميم، البنية التحتية، والكهروميكانيك بأعلى معايير الجودة والاحترافية.",
    url: "https://www.salehalazhari.com/about",
    siteName: "صالح الازهري للمقاولات العامة والتشطيبات",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "https://www.salehalazhari.com/about-hero.png",
        alt: "من نحن - صالح الازهري للمقاولات العامة والتشطيبات بالمدينة المنورة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "من نحن - صالح الازهري للمقاولات العامة والتشطيبات بالمدينة المنورة",
    description:
      "شركة صالح الازهري للمقاولات العامة والتشطيبات بالمدينة المنورة تقدم خدمات البناء، التشطيب، الترميم، البنية التحتية، والكهروميكانيك بأعلى معايير الجودة والاحترافية.",
  },
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <AboutHero />
      <CompanyStory />
      <VisionMission />
      <TeamSection />
      <AchievementsCounter />
      <Footer />
      <FloatingContact />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            name: "من نحن - صالح الازهري للمقاولات العامة والتشطيبات",
            description:
              "شركة صالح الازهري للمقاولات العامة والتشطيبات بالمدينة المنورة تقدم خدمات البناء، التشطيب، الترميم، البنية التحتية، والكهروميكانيك بأعلى معايير الجودة والاحترافية.",
            url: "https://www.salehalazhari.com/about",
            mainEntity: {
              "@type": "Organization",
              name: "صالح الازهري للمقاولات العامة والتشطيبات",
              url: "https://www.salehalazhari.com/",
              telephone: "+966568202809",
              address: {
                "@type": "PostalAddress",
                addressLocality: "المدينة المنورة",
                addressCountry: "SA",
              },
            },
          }),
        }}
      />
    </main>
  )
}
