import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"
import ServiceDetail from "@/components/service-detail"

export const metadata = {
  title: "اعمال البنية التحتية بالمدينة المنورة | صالح الازهري للمقاولات العامة",
  description:
    "شركة صالح الازهري للمقاولات العامة تقدم خدمات اعمال البنية التحتية بالمدينة المنورة، تشمل شبكات المياه والصرف الصحي، شبكات الكهرباء والاتصالات، اعمال الطرق والجسور، محطات المعالجة والضخ، وانظمة الصرف والتصريف.",
  keywords: [
    "اعمال البنية التحتية بالمدينة المنورة",
    "بنية تحتية بالمدينة المنورة",
    "معلم بنية تحتية بالمدينة المنورة",
    "شبكات مياه بالمدينة المنورة",
    "صرف صحي بالمدينة المنورة",
    "شبكات كهرباء بالمدينة المنورة",
    "شبكات اتصالات بالمدينة المنورة",
    "اعمال طرق وجسور بالمدينة المنورة",
    "محطات معالجة بالمدينة المنورة",
    "محطات ضخ بالمدينة المنورة",
    "انظمة صرف وتصريف بالمدينة المنورة",
    "مشاريع بنية تحتية بالمدينة المنورة",
  ],
  openGraph: {
    title: "اعمال البنية التحتية بالمدينة المنورة | صالح الازهري للمقاولات العامة",
    description:
      "شركة صالح الازهري للمقاولات العامة تقدم خدمات اعمال البنية التحتية بالمدينة المنورة، تشمل شبكات المياه والصرف الصحي، شبكات الكهرباء والاتصالات، اعمال الطرق والجسور، محطات المعالجة والضخ، وانظمة الصرف والتصريف.",
    url: "https://www.salehalazhari.com/infrastructure",
    siteName: "صالح الازهري للمقاولات العامة والتشطيبات",
    locale: "ar_SA",
    type: "article",
    images: [
      {
        url: "https://www.salehalazhari.com/a3.png",
        alt: "اعمال البنية التحتية بالمدينة المنورة - صالح الازهري",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "اعمال البنية التحتية بالمدينة المنورة | صالح الازهري للمقاولات العامة",
    description:
      "شركة صالح الازهري للمقاولات العامة تقدم خدمات اعمال البنية التحتية بالمدينة المنورة، تشمل شبكات المياه والصرف الصحي، شبكات الكهرباء والاتصالات، اعمال الطرق والجسور، محطات المعالجة والضخ، وانظمة الصرف والتصريف.",
  },
}

const service = {
  title: "اعمال البنية التحتية بالمدينة المنورة",
  description:
    "تطوير وتنفيذ مشاريع البنية التحتية بالمدينة المنورة لخدمة المجتمعات والمشاريع التنموية بأعلى معايير الجودة.",
  image: "/a3.png",
  features: [
    "شبكات المياه والصرف الصحي بالمدينة المنورة",
    "شبكات الكهرباء والاتصالات بالمدينة المنورة",
    "اعمال الطرق والجسور بالمدينة المنورة",
    "انظمة الصرف والتصريف بالمدينة المنورة",
    "محطات المعالجة والضخ بالمدينة المنورة",
    "البنية التحتية للمشاريع الكبرى بالمدينة المنورة",
  ],
  process: [
    "دراسة الجدوى والتخطيط بالمدينة المنورة",
    "التصميم الهندسي المتخصص بالمدينة المنورة",
    "الحصول على الموافقات بالمدينة المنورة",
    "تنفيذ اعمال الحفر والتمديد بالمدينة المنورة",
    "التركيب والتشغيل بالمدينة المنورة",
    "الاختبار والصيانة والتسليم بالمدينة المنورة",
  ],
}

export default function InfrastructurePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceDetail service={service} />

      {/* CTA */}
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

      {/* ===== Structured Data (Schema) ===== */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "اعمال البنية التحتية بالمدينة المنورة",
            "name": "اعمال البنية التحتية بالمدينة المنورة",
            "description":
              "شركة صالح الازهري للمقاولات العامة تقدم خدمات اعمال البنية التحتية بالمدينة المنورة، تشمل شبكات المياه والصرف الصحي، شبكات الكهرباء والاتصالات، اعمال الطرق والجسور، محطات المعالجة والضخ، وانظمة الصرف والتصريف.",
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
            "image": "https://www.salehalazhari.com/a3.png",
            "logo": "https://www.salehalazhari.com/logo.png",
            "url": "https://www.salehalazhari.com/infrastructure",
            "keywords": [
              "اعمال البنية التحتية بالمدينة المنورة",
              "بنية تحتية بالمدينة المنورة",
              "معلم بنية تحتية بالمدينة المنورة"
            ],
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
