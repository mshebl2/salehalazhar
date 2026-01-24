import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"
import ServiceDetail from "@/components/service-detail"

export const metadata = {
  title: "الأعمال الانشائية بالمدينة المنورة | صالح الازهري للمقاولات العامة",
  description:
    "شركة صالح الازهري للمقاولات العامة تقدم خدمات الأعمال الانشائية بالمدينة المنورة للمشاريع السكنية والتجارية والصناعية بأعلى معايير الجودة والاحتراف.",
  keywords: [
    "الأعمال الانشائية بالمدينة المنورة",
    "مقاول انشاءات بالمدينة المنورة",
    "شركة انشاءات بالمدينة المنورة",
    "بناء خرسانة مسلحة بالمدينة المنورة",
    "اعمال الحفر والأساسات بالمدينة المنورة",
    "تنفيذ الهياكل الانشائية بالمدينة المنورة",
    "بناء طوب وبلوك بالمدينة المنورة",
    "عزل مائي وحراري بالمدينة المنورة",
    "تركيب انظمة انشائية متقدمة بالمدينة المنورة",
    "معلم انشاءات بالمدينة المنورة",
  ],
  openGraph: {
    title: "الأعمال الانشائية بالمدينة المنورة | صالح الازهري للمقاولات العامة",
    description:
      "شركة صالح الازهري للمقاولات العامة تقدم خدمات الأعمال الانشائية بالمدينة المنورة للمشاريع السكنية والتجارية والصناعية بأعلى معايير الجودة.",
    url: "https://www.salehalazhari.com/services/construction",
    siteName: "صالح الازهري للمقاولات العامة والتشطيبات",
    locale: "ar_SA",
    type: "article",
    images: [
      {
        url: "https://www.salehalazhari.com/a2.png",
        alt: "الأعمال الانشائية بالمدينة المنورة - صالح الازهري",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "الأعمال الانشائية بالمدينة المنورة | صالح الازهري للمقاولات العامة",
    description:
      "شركة صالح الازهري للمقاولات العامة تقدم خدمات الأعمال الانشائية بالمدينة المنورة للمشاريع السكنية والتجارية والصناعية بأعلى معايير الجودة.",
  },
}

const service = {
  title: "الأعمال الانشائية بالمدينة المنورة",
  description:
    "تنفيذ الأعمال الانشائية الشاملة بالمدينة المنورة للمشاريع السكنية والتجارية والصناعية بأعلى معايير الجودة",
  image: "/a2.png",
  features: [
    "أعمال الحفر والأساسات بالمدينة المنورة",
    "البناء بالخرسانة المسلحة بالمدينة المنورة",
    "تنفيذ الهياكل الإنشائية بالمدينة المنورة",
    "البناء بالطوب والبلوك بالمدينة المنورة",
    "أعمال العزل المائي والحراري بالمدينة المنورة",
    "تركيب الأنظمة الإنشائية المتقدمة بالمدينة المنورة",
  ],
  process: [
    "دراسة التربة والموقع بالمدينة المنورة",
    "إعداد التصاميم الإنشائية بالمدينة المنورة",
    "الحصول على التراخيص بالمدينة المنورة",
    "تنفيذ أعمال الحفر والأساسات بالمدينة المنورة",
    "البناء والتشييد بالمدينة المنورة",
    "الفحص والاختبار والتسليم بالمدينة المنورة",
  ],
}

export default function ConstructionPage() {
  return (
    <main className="min-h-screen">
      <Header />

      {/* ===== Structured Data (Schema) ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.salehalazhari.com/services/construction",
            name: "الأعمال الانشائية بالمدينة المنورة",
            description:
              "شركة صالح الازهري للمقاولات العامة تقدم خدمات الأعمال الانشائية بالمدينة المنورة للمشاريع السكنية والتجارية والصناعية بأعلى معايير الجودة.",
            url: "https://www.salehalazhari.com/services/construction",
            image: "https://www.salehalazhari.com/a2.png",
            logo: "https://www.salehalazhari.com/logo.png",
            serviceType: "الأعمال الانشائية بالمدينة المنورة",
            keywords: [
              "الأعمال الانشائية بالمدينة المنورة",
              "مقاول انشاءات بالمدينة المنورة",
              "شركة انشاءات بالمدينة المنورة",
            ],
            provider: {
              "@type": "LocalBusiness",
              name: "صالح الازهري للمقاولات العامة والتشطيبات",
              url: "https://www.salehalazhari.com/",
              telephone: "+966568202809",
              address: {
                "@type": "PostalAddress",
                addressLocality: "المدينة المنورة",
                addressCountry: "SA",
              },
            },
            areaServed: {
              "@type": "City",
              name: "المدينة المنورة",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+966568202809",
              contactType: "customer service",
              areaServed: "SA",
            },
          }),
        }}
      />

      <ServiceDetail service={service} />

      {/* ===== CTA ===== */}
      <section className="bg-[#f5f5f5] py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            مهتم بهذه الخدمة بالمدينة المنورة؟
          </h2>
          <p className="mb-6 text-lg">
            تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك في المدينة المنورة
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="https://www.salehalazhari.com/contact"
              className="px-6 py-3 rounded-lg bg-[#1f2937] text-white font-bold"
            >
              احصل على عرض سعر
            </a>

            <a
              href="/services"
              className="px-6 py-3 rounded-lg border border-[#1f2937] font-bold"
            >
              عودة للخدمات
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </main>
  )
}
