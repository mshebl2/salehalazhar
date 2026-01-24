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
  title: "اعمال الطرق بالمدينة المنورة",
  description:
    "انشاء وتطوير الطرق والشوارع بالمدينة المنورة باحدث التقنيات لضمان السلامة والجودة والاستدامة",
  image: "/a6.png",
  features: [
    "تخطيط وتصميم الطرق بالمدينة المنورة",
    "اعمال الحفر والردم بالمدينة المنورة",
    "تنفيذ طبقات الاساس بالمدينة المنورة",
    "رصف الطرق بالاسفلت بالمدينة المنورة",
    "تركيب علامات المرور بالمدينة المنورة",
    "انظمة الصرف والتصريف بالمدينة المنورة",
  ],
  process: [
    "المسح الطبوغرافي والتخطيط بالمدينة المنورة",
    "التصميم الهندسي للطريق بالمدينة المنورة",
    "اعداد الموقع والحفر بالمدينة المنورة",
    "تنفيذ طبقات الاساس والقاعدة بالمدينة المنورة",
    "الرصف والتشطيبات بالمدينة المنورة",
    "تركيب الاشارات والتسليم بالمدينة المنورة",
  ],
}

export default function RoadsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      {/* هنا نضيف padding عشان الهيدر الثابت ما يغطي المحتوى */}
      <div className="pt-20">
        <ServiceDetail service={service} />
      </div>
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
