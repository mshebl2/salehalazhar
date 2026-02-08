import { notFound } from "next/navigation"
import Head from "next/head"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"
import BlogPost from "@/components/blog-post"
import connectDB from "@/lib/db"
import Post from "@/models/Post"

export const revalidate = 3600 // إعادة التحقق كل ساعة

// توليد الصفحات الثابتة لجميع slugs
export async function generateStaticParams() {
  await connectDB()
  const posts = await Post.find({ isPublished: true }).select("slug")
  return posts.map((post) => ({ slug: post.slug }))
}

// توليد metadata لكل مقال
export async function generateMetadata({ params }: { params: { slug: string } }) {
  await connectDB()
  const post = await Post.findOne({ slug: decodeURIComponent(params.slug), isPublished: true })

  if (!post) {
    return { title: "المقال غير موجود" }
  }

  return {
    title: `${post.title} - مدونة صالح الأزهري للمقاولات`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.salehalazhari.com/blog/${post.slug}`,
      images: post.featuredImage
        ? [`https://www.salehalazhari.com${post.featuredImage}`]
        : [`https://www.salehalazhari.com/aaa.png`],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.featuredImage
        ? [`https://www.salehalazhari.com${post.featuredImage}`]
        : [`https://www.salehalazhari.com/aaa.png`],
    },
  }
}

// صفحة عرض المقال
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  await connectDB()
  const post = await Post.findOne({ slug: decodeURIComponent(params.slug), isPublished: true })

  if (!post) notFound()

  const title = post.title
  const description = post.excerpt
  const url = `https://www.salehalazhari.com/blog/${post.slug}`
  const image = post.featuredImage
    ? `https://www.salehalazhari.com${post.featuredImage}`
    : "https://www.salehalazhari.com/aaa.png"
  const publishedDate = post.publishedAt
    ? new Date(post.publishedAt).toISOString().split("T")[0]
    : new Date(post.createdAt).toISOString().split("T")[0]

  // Structured Data لكل مقال
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    image: image,
    author: { "@type": "Person", name: "مؤسسة صالح الأزهري" },
    publisher: {
      "@type": "Organization",
      name: "مؤسسة صالح الأزهري",
      logo: { "@type": "ImageObject", url: "https://www.salehalazhari.com/logo.png" },
    },
    datePublished: publishedDate,
    dateModified: post.updatedAt ? new Date(post.updatedAt).toISOString().split("T")[0] : publishedDate,
    description: description,
    url: url,
  }

  // Serialize Mongoose document to plain object for BlogPost component
  const postData = {
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    image: post.featuredImage,
    publishedDate: publishedDate,
    author: "مؤسسة صالح الأزهري",
    tags: post.tags || [],
  }

  return (
    <main className="min-h-screen bg-white">
      <Head>
        <title>{title} - مدونة صالح الأزهري للمقاولات</title>
        <meta name="description" content={description} />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <Header />

      <div className="text-black [&_a]:text-blue-700 [&_a]:hover:text-blue-500">
        <BlogPost post={postData} />
      </div>

      <Footer />
      <FloatingContact />
    </main>
  )
}
