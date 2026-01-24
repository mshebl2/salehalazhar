import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"
import ContactHero from "@/components/contact-hero"
import ContactForm from "@/components/contact-form"
import ContactInfo from "@/components/contact-info"
import ContactMap from "@/components/contact-map"

export const metadata = {
  title: "تواصل معنا - صالح الازهري للمقاولات العامة والتشطيبات بالمدينة المنورة",
  description:
    "تواصل مع شركة صالح الازهري للمقاولات العامة والتشطيبات بالمدينة المنورة للحصول على استشارة مجانية وعرض سعر مخصص لمشاريع البناء والتشطيب.",
  keywords: [
    "تواصل معنا بالمدينة المنورة",
    "شركة مقاولات بالمدينة المنورة",
    "صالح الازهري للمقاولات بالمدينة المنورة",
    "رقم هاتف مقاولات بالمدينة المنورة",
    "اتصل بنا مقاولات بالمدينة المنورة",
    "طلب عرض سعر بالمدينة المنورة",
    "استشارة مقاولات بالمدينة المنورة",
    "خدمات بناء بالمدينة المنورة",
    "خدمات تشطيبات بالمدينة المنورة",
  ],
  openGraph: {
    title: "تواصل معنا - صالح الازهري للمقاولات العامة والتشطيبات بالمدينة المنورة",
    description:
      "تواصل مع شركة صالح الازهري للمقاولات العامة والتشطيبات بالمدينة المنورة للحصول على استشارة مجانية وعرض سعر مخصص لمشاريع البناء والتشطيب.",
    url: "https://www.salehalazhari.com/contact",
    siteName: "صالح الازهري للمقاولات العامة والتشطيبات",
    locale: "ar_SA",
    type: "website",
    images: [
      {
        url: "https://www.salehalazhari.com/contact-hero.png",
        alt: "تواصل معنا - صالح الازهري للمقاولات العامة والتشطيبات بالمدينة المنورة",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "تواصل معنا - صالح الازهري للمقاولات العامة والتشطيبات بالمدينة المنورة",
    description:
      "تواصل مع شركة صالح الازهري للمقاولات العامة والتشطيبات بالمدينة المنورة للحصول على استشارة مجانية وعرض سعر مخصص لمشاريع البناء والتشطيب.",
  },
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ContactHero />
      <div className="grid lg:grid-cols-2 gap-0">
        <ContactForm />
        <ContactInfo />
      </div>
      <ContactMap />
      <Footer />
      <FloatingContact />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "تواصل معنا - صالح الازهري للمقاولات العامة والتشطيبات",
            description:
              "تواصل مع شركة صالح الازهري للمقاولات العامة والتشطيبات بالمدينة المنورة للحصول على استشارة مجانية وعرض سعر مخصص لمشاريع البناء والتشطيب.",
            url: "https://www.salehalazhari.com/contact",
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
