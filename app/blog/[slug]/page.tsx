import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"
import BlogPost from "@/components/blog-post"
import connectDB from "@/lib/db"
import Post from "@/models/Post"

export const revalidate = 3600 // Revalidate every hour

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
  }
}

// صفحة عرض المقال
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  await connectDB()
  const post = await Post.findOne({ slug: decodeURIComponent(params.slug), isPublished: true })

  if (!post) notFound()

  // Serialize Mongoose document to plain object for the client component
  // We need to map 'image' prop expected by BlogPost to 'featuredImage'
  const postData = {
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    image: post.featuredImage,
    publishedDate: post.publishedAt ? new Date(post.publishedAt).toISOString().split('T')[0] : new Date(post.createdAt).toISOString().split('T')[0],
    author: "مؤسسة صالح الأزهري", // Default author for now
    tags: post.tags
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* كل الروابط في الصفحة هتظهر باللون الأزرق وتغير عند hover */}
      <div className="text-black [&_a]:text-blue-700 [&_a]:hover:text-blue-500">
        <BlogPost post={postData} />
      </div>

      <Footer />
      <FloatingContact />
    </main>
  )
}
