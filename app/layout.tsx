import type React from "react"
import type { Metadata } from "next"
import { Tajawal } from "next/font/google"
import { Suspense } from "react"
import Script from "next/script"
import "./globals.css"

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  display: "swap",
  variable: "--font-tajawal",
})

// دالة لتحديد نوع الصفحة: شركة أو مؤسسة
function getType(searchParams?: { type?: string }) {
  if (searchParams?.type === "institution") return "مؤسسة";
  return "شركة"; // افتراضي
}

export async function generateMetadata({ searchParams }: { searchParams?: { type?: string } }): Promise<Metadata> {
  const type = getType(searchParams);

  return {
    title: `${type} صالح الازهري للمقاولات العامة والتشطيبات بالمدينة المنورة`,
    description: `${type} صالح الازهري تقدم جميع خدمات المقاولات والديكور بالمدينة المنورة: الاعمال الانشائية، اعمال البنية التحتية، اعمال الكهروميكانيك، اعمال الحدادة، اعمال الطرق، اعمال الترميم والتشطيب، والخدمات العقارية.`,
    keywords: [
      `${type} مقاولات بالمدينة المنورة`,
      `${type} صالح الازهري`,
      "اعمال الديكور بالمدينة المنورة",
      "الاعمال الانشائية بالمدينة المنورة",
      "اعمال البنية التحتية بالمدينة المنورة",
      "اعمال الكهروميكانيك بالمدينة المنورة",
      "اعمال الحدادة بالمدينة المنورة",
      "اعمال الطرق بالمدينة المنورة",
      "اعمال الترميم والتشطيب بالمدينة المنورة",
      "الخدمات العقارية بالمدينة المنورة",
    ],
    generator: "Next.js",
    icons: {
      icon: "/favicon.png",
      shortcut: "/favicon.png",
    },
    openGraph: {
      title: `${type} صالح الازهري للمقاولات العامة والتشطيبات بالمدينة المنورة`,
      description: `${type} صالح الازهري رائد في مجال المقاولات العامة والديكور بالمدينة المنورة. 📞 للتواصل: 966568202809`,
      url: "https://www.salehalazhari.com/",
      siteName: "صالح الازهري",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `${type} صالح الازهري للمقاولات العامة والتشطيبات بالمدينة المنورة`,
        },
      ],
      locale: "ar_SA",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${type} صالح الازهري للمقاولات العامة والتشطيبات بالمدينة المنورة`,
      description: `افضل ${type} للمقاولات والديكور بالمدينة المنورة: انشائية، بنية تحتية، كهروميكانيك، حدادة، طرق، ترميم وتشطيب، وخدمات عقارية. 📞 للتواصل: 966568202809`,
      images: ["/og-image.jpg"],
    },
  };
}

export default function RootLayout({
  children,
  searchParams,
}: {
  children: React.ReactNode,
  searchParams?: { type?: string }
}) {
  const type = getType(searchParams);

  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* favicon و sitemap */}
        <link rel="icon" href="/favicon.png" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* ميتا اضافية */}
        <meta name="author" content={`${type} صالح الازهري`} />
        <meta name="telephone" content="966568202809" />

        {/* Google Analytics 4 */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-WSP986F000"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WSP986F000');
            `,
          }}
        />

        {/* Structured Data JSON-LD */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": `${type} صالح الازهري`,
              "url": "https://www.salehalazhari.com/",
              "telephone": "+966568202809",
              "description": `${type} صالح الازهري للمقاولات العامة والتشطيبات بالمدينة المنورة تقدم جميع خدمات المقاولات والديكور.`,
            }),
          }}
        />
      </head>
      <body className={`font-sans ${tajawal.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
      </body>
    </html>
  )
}
