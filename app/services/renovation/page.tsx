import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";
import ServiceDetail from "@/components/service-detail";

export const metadata = {
  title: "اعمال الترميم والتشطيب بالمدينة المنورة | صالح الازهري للمقاولات العامة",
  description:
    "شركة صالح الازهري للمقاولات العامة تقدم خدمات الترميم والتشطيب بالمدينة المنورة، تشمل ترميم المباني القديمة، تجديد التشطيبات الداخلية والخارجية، اصلاح التشققات، اعمال العزل، والتشطيبات الفاخرة.",
  keywords: [
    "اعمال الترميم بالمدينة المنورة",
    "تشطيب بالمدينة المنورة",
    "ترميم مباني بالمدينة المنورة",
    "تجديد تشطيبات بالمدينة المنورة",
    "اصلاح تشققات بالمدينة المنورة",
    "اعمال عزل بالمدينة المنورة",
    "معلم ترميم بالمدينة المنورة",
    "معلم تشطيب بالمدينة المنورة",
  ],
  openGraph: {
    title: "اعمال الترميم والتشطيب بالمدينة المنورة | صالح الازهري للمقاولات العامة",
    description:
      "شركة صالح الازهري للمقاولات العامة تقدم خدمات الترميم والتشطيب بالمدينة المنورة، تشمل ترميم المباني القديمة، تجديد التشطيبات الداخلية والخارجية، اصلاح التشققات، اعمال العزل، والتشطيبات الفاخرة.",
    url: "https://www.salehalazhari.com/renovation",
    siteName: "صالح الازهري للمقاولات العامة والتشطيبات",
    locale: "ar_SA",
    type: "article",
    images: [
      {
        url: "https://www.salehalazhari.com/121214520.png",
        alt: "اعمال الترميم والتشطيب بالمدينة المنورة - صالح الازهري",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "اعمال الترميم والتشطيب بالمدينة المنورة | صالح الازهري للمقاولات العامة",
    description:
      "شركة صالح الازهري للمقاولات العامة تقدم خدمات الترميم والتشطيب بالمدينة المنورة، تشمل ترميم المباني القديمة، تجديد التشطيبات الداخلية والخارجية، اصلاح التشققات، اعمال العزل، والتشطيبات الفاخرة.",
  },
};

const service = {
  title: "اعمال الترميم والتشطيب بالمدينة المنورة",
  description:
    "خدمات ترميم وتشطيب شاملة بالمدينة المنورة لتجديد المباني والمنشآت واعادة احيائها باحدث المعايير",
  image: "/121214520.png",
  features: [
    "ترميم المباني التراثية والقديمة بالمدينة المنورة",
    "تجديد التشطيبات الداخلية والخارجية بالمدينة المنورة",
    "اصلاح التشققات والعيوب الانشائية بالمدينة المنورة",
    "تحديث الانظمة الكهربائية والميكانيكية بالمدينة المنورة",
    "اعمال العزل والحماية بالمدينة المنورة",
    "التشطيبات الفاخرة والديكورات بالمدينة المنورة",
  ],
  process: [
    "فحص وتقييم حالة المبنى بالمدينة المنورة",
    "اعداد خطة الترميم والتجديد بالمدينة المنورة",
    "تنفيذ اعمال الهدم الجزئي بالمدينة المنورة",
    "الترميم والاصلاح الانشائي بالمدينة المنورة",
    "التشطيبات والديكورات الجديدة بالمدينة المنورة",
    "الفحص النهائي والتسليم بالمدينة المنورة",
  ],
};

export default function RenovationPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ServiceDetail service={service} />

      {/* CTA Section */}
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

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.salehalazhari.com/renovation",
            "serviceType": "اعمال الترميم والتشطيب بالمدينة المنورة",
            "name": "اعمال الترميم والتشطيب بالمدينة المنورة",
            "description":
              "شركة صالح الازهري للمقاولات العامة تقدم خدمات الترميم والتشطيب بالمدينة المنورة، تشمل ترميم المباني القديمة، تجديد التشطيبات، اصلاح التشققات، اعمال العزل، والتشطيبات الفاخرة.",
            "url": "https://www.salehalazhari.com/renovation",
            "image": "https://www.salehalazhari.com/121214520.png",
            "provider": {
              "@type": "LocalBusiness",
              "name": "صالح الازهري للمقاولات العامة والتشطيبات",
              "url": "https://www.salehalazhari.com/",
              "telephone": "+966568202809",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "المدينة المنورة",
                "addressCountry": "SA",
              },
            },
            "areaServed": {
              "@type": "City",
              "name": "المدينة المنورة",
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+966568202809",
              "contactType": "customer service",
              "areaServed": "SA",
            },
          }),
        }}
      />
    </main>
  );
}
