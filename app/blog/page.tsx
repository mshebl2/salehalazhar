import React from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"
import PageBanner from "@/components/page-banner"
import connectDB from "@/lib/db"
import Post from "@/models/Post"
import SiteContent from "@/models/SiteContent"

export const revalidate = 3600 // Revalidate every hour

export const metadata = {
  title: "مدونة مؤسسة صالح الأزهري للمقاولات بالمدينة المنورة",
  description:
    "اقرأ أحدث المقالات والدلائل حول المقاولات العامة والتشطيبات بالمدينة المنورة من مؤسسة صالح الأزهري.",
}

export default async function BlogListingPage() {
  await connectDB()

  const [posts, bannerDoc] = await Promise.all([
    Post.find({ isPublished: true }).sort({ createdAt: -1 }),
    SiteContent.findOne({ key: 'banner_blog' })
  ])

  const banner = bannerDoc?.value || {}
  const bannerImage = banner.image || '/aaa.png'
  const bannerTitle = banner.title || 'المدونة'
  const bannerSubtitle = banner.subtitle || 'اكتشف أحدث النصائح والاتجاهات في عالم البناء والتشطيب من خبراء المجال'

  const pageTitle = "مدونة مؤسسة صالح الأزهري للمقاولات بالمدينة المنورة"
  const pageDescription =
    "اقرأ أحدث المقالات والدلائل حول المقاولات العامة والتشطيبات بالمدينة المنورة من مؤسسة صالح الأزهري."

  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: pageTitle,
    description: pageDescription,
    url: "https://www.salehalazhari.com/blog",
    publisher: {
      "@type": "Organization",
      name: "مؤسسة صالح الأزهري",
      logo: {
        "@type": "ImageObject",
        url: "https://www.salehalazhari.com/logo.png",
      },
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      image: post.featuredImage ? `https://www.salehalazhari.com${post.featuredImage}` : undefined,
      author: {
        "@type": "Person",
        name: "مؤسسة صالح الأزهري",
      },
      datePublished: post.publishedAt || post.createdAt,
      url: `https://www.salehalazhari.com/blog/${post.slug}`,
      description: post.excerpt,
    })),
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <PageBanner
        image={bannerImage}
        title={bannerTitle}
        subtitle={bannerSubtitle}
        fallbackImage="/aaa.png"
      />

      <section className="max-w-6xl mx-auto px-4 py-12">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${encodeURIComponent(post.slug)}`}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {post.featuredImage && (
                <img src={post.featuredImage} alt={post.title} className="w-full h-48 object-cover" />
              )}
              <div className="p-4">
                <h2 className="text-xl font-bold text-[#0D2240] mb-2">{post.title}</h2>
                <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
              </div>
            </Link>
          ))}
          {posts.length === 0 && (
            <div className="col-span-full text-center py-12 text-gray-500">
              لا توجد مقالات منشورة حالياً.
            </div>
          )}
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Footer />
      <FloatingContact />
    </main>
  )
}
