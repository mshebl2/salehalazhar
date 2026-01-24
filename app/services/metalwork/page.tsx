import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"
import ServiceDetail from "@/components/service-detail"

export const metadata = {
  title: "اعمال الحدادة بالمدينة المنورة | صالح الازهري للمقاولات العامة",
  description:
    "شركة صالح الازهري للمقاولات العامة تقدم خدمات اعمال الحدادة بالمدينة المنورة، تشمل تصنيع الهياكل المعدنية، اعمال الحديد المسلح، تركيب الابواب والنوافذ المعدنية، اعمال الدرابزين والسلالم، واللحام والتشكيل.",
  keywords: [
    "اعمال الحدادة بالمدينة المنورة",
    "حدادة بالمدينة المنورة",
    "معلم حدادة بالمدينة المنورة",
    "تصنيع هياكل معدنية بالمدينة المنورة",
    "حديد مسلح بالمدينة المنورة",
    "تركيب ابواب معدنية بالمدينة المنورة",
    "تركيب نوافذ معدنية بالمدينة المنورة",
    "درابزين بالمدينة المنورة",
    "سلالم معدنية بالمدينة المنورة",
    "لحام بالمدينة المنورة",
    "تشكيل معدني بالمدينة المنورة",
    "خزانات معدنية بالمدينة المنورة",
  ],
  openGraph: {
    title: "اعمال الحدادة بالمدينة المنورة | صالح الازهري للمقاولات العامة",
    description:
      "شركة صالح الازهري للمقاولات العامة تقدم خدمات اعمال الحدادة بالمدينة المنورة، تشمل تصنيع الهياكل المعدنية، اعمال الحديد المسلح، تركيب الابواب والنوافذ المعدنية، اعمال الدرابزين والسلالم، واللحام والتشكيل.",
    url: "https://www.salehalazhari.com/metalwork",
    siteName: "صالح الازهري للمقاولات العامة والتشطيبات",
    locale: "ar_SA",
    type: "article",
    images: [
      {
        url: "https://www.salehalazhari.com/a5.png",
        alt: "اعمال الحدادة بالمدينة المنورة - صالح الازهري",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "اعمال الحدادة بالمدينة المنورة | صالح الازهري للمقاولات العامة",
    description:
      "شركة صالح الازهري للمقاولات العامة تقدم خدمات اعمال الحدادة بالمدينة المنورة، تشمل تصنيع الهياكل المعدنية، اعمال الحديد المسلح، تركيب الابواب والنوافذ المعدنية، اعمال الدرابزين والسلالم، واللحام والتشكيل.",
  },
}

const service = {
  title: "اعمال الحدادة بالمدينة المنورة",
  description:
    "تصنيع وتركيب الاعمال المعدنية والحديدية بالمدينة المنورة باحدث التقنيات واعلى معايير الجودة والامان",
  image: "/a5.png",
  features: [
    "تصنيع الهياكل المعدنية بالمدينة المنورة",
    "اعمال الحديد المسلح بالمدينة المنورة",
    "تركيب الابواب والنوافذ المعدنية بالمدينة المنورة",
    "اعمال الدرابزين والسلالم بالمدينة المنورة",
    "تصنيع الخزانات المعدنية بالمدينة المنورة",
    "اعمال اللحام والتشكيل بالمدينة المنورة",
  ],
  process: [
    "دراسة المخططات والمواصفات بالمدينة المنورة",
    "التصميم والحسابات الانشائية بالمدينة المنورة",
    "التصنيع في الورشة بالمدينة المنورة",
    "النقل والتركيب في الموقع بالمدينة المنورة",
    "اللحام والتثبيت النهائي بالمدينة المنورة",
    "الطلاء والحماية والتسليم بالمدينة المنورة",
  ],
}

export default function MetalworkPage() {
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
            "serviceType": "اعمال الحدادة بالمدينة المنورة",
            "name": "اعمال الحدادة بالمدينة المنورة",
            "description":
              "شركة صالح الازهري للمقاولات العامة تقدم خدمات اعمال الحدادة بالمدينة المنورة، تشمل تصنيع الهياكل المعدنية، اعمال الحديد المسلح، تركيب الابواب والنوافذ المعدنية، اعمال الدرابزين والسلالم، واللحام والتشكيل.",
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
            "image": "https://www.salehalazhari.com/a5.png",
            "logo": "https://www.salehalazhari.com/logo.png",
            "url": "https://www.salehalazhari.com/metalwork",
            "keywords": [
              "اعمال الحدادة بالمدينة المنورة",
              "حدادة بالمدينة المنورة",
              "معلم حدادة بالمدينة المنورة"
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
