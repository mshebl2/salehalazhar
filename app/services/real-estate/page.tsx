import Header from "@/components/header";
import Footer from "@/components/footer";
import FloatingContact from "@/components/floating-contact";
import ServiceDetail from "@/components/service-detail";

export const metadata = {
  title: "خدمات عقارية بالمدينة المنورة | صالح الازهري للمقاولات العامة",
  description:
    "نقدم خدمات عقارية متكاملة بالمدينة المنورة تشمل البيع والشراء والتأجير والتسويق العقاري وإدارة المعاملات والاستشارات العقارية بأعلى مستوى من الاحترافية.",
  keywords: [
    "خدمات عقارية بالمدينة المنورة",
    "بيع عقارات بالمدينة المنورة",
    "شراء عقارات بالمدينة المنورة",
    "تأجير عقارات بالمدينة المنورة",
    "تسويق عقاري بالمدينة المنورة",
    "عقارات سكنية بالمدينة المنورة",
    "عقارات تجارية بالمدينة المنورة",
    "وساطة عقارية بالمدينة المنورة",
    "مكاتب عقارية بالمدينة المنورة",
    "ادارة عقارات بالمدينة المنورة",
    "استشارات عقارية بالمدينة المنورة",
    "عقارات للايجار بالمدينة المنورة",
    "عقارات للبيع بالمدينة المنورة",
    "تمويل عقاري بالمدينة المنورة",
    "عقارات استثمارية بالمدينة المنورة",
    "تقييم عقاري بالمدينة المنورة",
    "تسويق عقاري الكتروني بالمدينة المنورة",
    "عقارات فاخرة بالمدينة المنورة",
    "شقق للبيع بالمدينة المنورة",
    "فلل للبيع بالمدينة المنورة",
    "اراضي للبيع بالمدينة المنورة",
    "معلم عقاري بالمدينة المنورة",
  ],
  openGraph: {
    title: "خدمات عقارية بالمدينة المنورة | صالح الازهري للمقاولات العامة",
    description:
      "نقدم خدمات عقارية متكاملة بالمدينة المنورة تشمل البيع والشراء والتأجير والتسويق العقاري وإدارة المعاملات والاستشارات العقارية بأعلى مستوى من الاحترافية.",
    url: "https://www.salehalazhari.com/real-estate",
    siteName: "صالح الازهري للمقاولات العامة والتشطيبات",
    locale: "ar_SA",
    type: "article",
    images: [
      {
        url: "https://www.salehalazhari.com/12121212.png",
        alt: "خدمات عقارية بالمدينة المنورة - صالح الازهري",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "خدمات عقارية بالمدينة المنورة | صالح الازهري للمقاولات العامة",
    description:
      "نقدم خدمات عقارية متكاملة بالمدينة المنورة تشمل البيع والشراء والتأجير والتسويق العقاري وإدارة المعاملات والاستشارات العقارية بأعلى مستوى من الاحترافية.",
  },
};

const service = {
  title: "خدمات عقارية بالمدينة المنورة",
  description:
    "نقدم خدمات عقارية متكاملة بالمدينة المنورة تشمل البيع، الشراء، التأجير، والتسويق العقاري لتلبية احتياجات الافراد والشركات",
  image: "/12121212.png",
  features: [
    "بيع وشراء العقارات السكنية والتجارية بالمدينة المنورة",
    "خدمات تأجير عقارات قصيرة وطويلة المدى بالمدينة المنورة",
    "تسويق عقاري مبتكر بالمدينة المنورة للوصول لارق شريحة من العملاء",
    "ادارة المعاملات العقارية بكفاءة وشفافية بالمدينة المنورة",
    "استشارات عقارية متخصصة بالمدينة المنورة تناسب احتياجاتك",
    "حلول عقارية مرنة للافراد والمستثمرين بالمدينة المنورة",
  ],
  process: [
    "استقبال طلب العميل وفهم متطلباته بالمدينة المنورة",
    "اعداد خطة تسويقية او بحث عن عقار مناسب بالمدينة المنورة",
    "التفاوض وامتمام الاجراءات القانونية بالمدينة المنورة",
    "متابعة العقود وضمان الشفافية بالمدينة المنورة",
    "تقديم الدعم الفني والاداري بعد البيع او التأجير بالمدينة المنورة",
    "تسليم العقار ومتابعة رضا العميل بالمدينة المنورة",
  ],
};

export default function RealEstatePage() {
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

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.salehalazhari.com/real-estate",
            serviceType: "خدمات عقارية بالمدينة المنورة",
            name: "خدمات عقارية بالمدينة المنورة",
            description:
              "نقدم خدمات عقارية متكاملة بالمدينة المنورة تشمل البيع والشراء والتأجير والتسويق العقاري وإدارة المعاملات والاستشارات العقارية بأعلى مستوى من الاحترافية.",
            url: "https://www.salehalazhari.com/real-estate",
            image: "https://www.salehalazhari.com/12121212.png",
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
    </main>
  );
}
