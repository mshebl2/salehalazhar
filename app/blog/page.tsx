import React from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"

// بيانات المقالات
const blogPosts = {
  "شركة-مقاولات-المدينة-المنورة": {
    title: "شركة مقاولات عامة بالمدينة المنورة – مؤسسة صالح الأزهري",
    excerpt:
      "دليل شامل لأهم الخدمات ونصائح المقاولات العامة بالمدينة المنورة، وكيف تختار المقاول المناسب لمشروعك.",
    image: "/00.png",
    publishedDate: "2026-01-10",
    author: "مؤسسة صالح الأزهري",
  },
}

export const metadata = {
  title: "مدونة مؤسسة صالح الأزهري للمقاولات بالمدينة المنورة",
  description:
    "اقرأ أحدث المقالات والدلائل حول المقاولات العامة والتشطيبات بالمدينة المنورة من مؤسسة صالح الأزهري.",
}

export default function BlogListingPage() {
  const postsArray = Object.entries(blogPosts)

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
    blogPost: postsArray.map(([slug, post]) => ({
      "@type": "BlogPosting",
      headline: post.title,
      image: `https://www.salehalazhari.com${post.image}`,
      author: {
        "@type": "Person",
        name: post.author,
      },
      datePublished: post.publishedDate,
      url: `https://www.salehalazhari.com/blog/${slug}`,
      description: post.excerpt,
    })),
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#0D2240]">المدونة</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postsArray.map(([slug, post]) => (
            <Link
              key={slug}
              href={`/blog/${encodeURIComponent(slug)}`}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {post.image && (
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              )}
              <div className="p-4">
                <h2 className="text-xl font-bold text-[#0D2240] mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
            </Link>
          ))}
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
