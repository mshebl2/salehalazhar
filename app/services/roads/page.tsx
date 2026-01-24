import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"
import ServiceDetail from "@/components/service-detail"

export const metadata = {
  title: "اعمال الطرق بالمدينة المنورة | صالح الازهري للمقاولات العامة",
  description:
    "شركة صالح الازهري للمقاولات العامة تقدم خدمات اعمال الطرق بالمدينة المنورة بأعلى جودة، تشمل تصميم الطرق، الحفر والردم، تنفيذ طبقات الاساس، رصف الاسفلت، وتركيب علامات المرور.",
  keywords: [
    "اعمال الطرق بالمدينة المنورة",
    "رصف طرق بالمدينة المنورة",
    "تصميم طرق بالمدينة المنورة",
    "تطوير الطرق بالمدينة المنورة",
    "شركة طرق بالمدينة المنورة",
    "اعمال الاسفلت بالمدينة المنورة",
    "معلم طرق بالمدينة المنورة",
  ],
  openGraph: {
    title: "اعمال الطرق بالمدينة المنورة | صالح الازهري للمقاولات العامة",
    description:
      "شركة صالح الازهري للمقاولات العامة تقدم خدمات اعمال الطرق بالمدينة المنورة بأعلى جودة، تشمل تصميم الطرق، الحفر والردم، تنفيذ طبقات الاساس، رصف الاسفلت، وتركيب علامات المرور.",
    url: "https://www.salehalazhari.com/roads",
    siteName: "صالح الازهري للمقاولات العامة والتشطيبات",
    locale: "ar_SA",
    type: "article",
    images: [
      {
        url: "https://www.salehalazhari.com/a6.png",
        alt: "اعمال الطرق بالمدينة المنورة - صالح الازهري",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "اعمال الطرق بالمدينة المنورة | صالح الازهري للمقاولات العامة",
    description:
      "شركة صالح الازهري للمقاولات العامة تقدم خدمات اعمال الطرق بالمدينة المنورة بأعلى جودة، تشمل تصميم الطرق، الحفر والردم، تنفيذ طبقات الاساس، رصف الاسفلت، وتركيب علامات المرور.",
  },
}

const service = {
  title: "أعمال الطرق",
  description: "إنشاء وتطوير الطرق والشوارع بأحدث التقنيات لضمان السلامة والجودة والاستدامة",
  image: "/a6.png",
  features: [
    "تخطيط وتصميم الطرق",
    "أعمال الحفر والردم",
    "تنفيذ طبقات الأساس",
    "رصف الطرق بالأسفلت",
    "تركيب علامات المرور",
    "أنظمة الصرف والتصريف",
  ],
  process: [
    "المسح الطبوغرافي والتخطيط",
    "التصميم الهندسي للطريق",
    "إعداد الموقع والحفر",
    "تنفيذ طبقات الأساس والقاعدة",
    "الرصف والتشطيبات",
    "تركيب الإشارات والتسليم",
  ],
}

export default function RoadsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceDetail service={service} />

      {/* CTA */}
      <section className="bg-[#f5f5f5] py-10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">
            هل تهتم بهذه الخدمة بالمدينة المنورة؟
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

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.salehalazhari.com/roads",
            "serviceType": "اعمال الطرق بالمدينة المنورة",
            "name": "اعمال الطرق بالمدينة المنورة",
            "description":
              "شركة صالح الازهري للمقاولات العامة تقدم خدمات اعمال الطرق بالمدينة المنورة، تشمل تصميم الطرق، الحفر والردم، تنفيذ طبقات الاساس، رصف الاسفلت، وتركيب علامات المرور.",
            "url": "https://www.salehalazhari.com/roads",
            "image": "https://www.salehalazhari.com/a6.png",
            "provider": {
              "@type": "LocalBusiness",
              "name": "صالح الازهري للمقاولات العامة والتشطيبات",
              "url": "https://www.salehalazhari.com/",
              "telephone": "+966568202809",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "المدينة المنورة",
                "addressCountry": "SA"
              }
            },
            "areaServed": {
              "@type": "City",
              "name": "المدينة المنورة"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+966568202809",
              "contactType": "customer service",
              "areaServed": "SA"
            }
          }),
        }}
      />
    </main>
  )
}
