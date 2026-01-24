import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"
import ServicesHero from "@/components/services-hero"
import ServicesGrid from "@/components/services-grid"
import ServicesCTA from "@/components/services-cta"

export const metadata = {
  title: "خدمات المقاولات العامة والتشطيبات في المدينة المنورة | صالح الأزهري",
  description:
    "شركة صالح الأزهري للمقاولات العامة والتشطيبات في المدينة المنورة تقدم خدمات تشطيب داخلي وخارجي، صيانة وترميم، بناء، تمديدات كهرباء وسباكة بأعلى جودة.",
  keywords: [
    "مقاولات عامة بالمدينة المنورة",
    "تشطيبات بالمدينة المنورة",
    "صيانة وترميم بالمدينة المنورة",
    "بناء في المدينة المنورة",
    "شركة مقاولات بالمدينة المنورة",
    "تشطيب داخلي وخارجي بالمدينة المنورة",
  ],
  openGraph: {
    title: "خدمات المقاولات العامة والتشطيبات في المدينة المنورة | صالح الأزهري",
    description:
      "شركة صالح الأزهري للمقاولات العامة والتشطيبات في المدينة المنورة تقدم خدمات تشطيب داخلي وخارجي، صيانة وترميم، بناء، تمديدات كهرباء وسباكة بأعلى جودة.",
    url: "https://www.salehalazhari.com/services",
    siteName: "صالح الأزهري للمقاولات العامة والتشطيبات",
    locale: "ar_SA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "خدمات المقاولات العامة والتشطيبات في المدينة المنورة | صالح الأزهري",
    description:
      "شركة صالح الأزهري للمقاولات العامة والتشطيبات في المدينة المنورة تقدم خدمات تشطيب داخلي وخارجي، صيانة وترميم، بناء، تمديدات كهرباء وسباكة بأعلى جودة.",
  },
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServicesHero />
      <ServicesGrid />
      <ServicesCTA />
      <Footer />
      <FloatingContact />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "صالح الأزهري للمقاولات العامة والتشطيبات",
            "description": "شركة مقاولات عامة وتشطيبات وصيانة وترميم في المدينة المنورة.",
            "url": "https://www.salehalazhari.com/",
            "telephone": "+966568202809",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "المدينة المنورة",
              "addressLocality": "المدينة المنورة",
              "addressCountry": "SA"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 24.5247,
              "longitude": 39.5692
            },
            "openingHours": "Mo,Tu,We,Th,Fr 08:00-19:00",
            "sameAs": [
              "https://www.salehalazhari.com/"
            ]
          }),
        }}
      />
    </main>
  )
}
