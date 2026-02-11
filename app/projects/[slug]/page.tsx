import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"
import ProjectDetail from "@/components/project-detail"
import connectDB from "@/lib/db"
import Project from "@/models/Project"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"

export async function generateStaticParams() {
  await connectDB()
  const projects = await Project.find({}).select('href')
  return projects.map((project) => ({
    slug: project.href.replace('/projects/', ''),
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  await connectDB()
  const project = await Project.findOne({ href: `/projects/${params.slug}` })

  if (!project) {
    return {
      title: "المشروع غير موجود",
    }
  }

  return {
    title: `${project.title} - صالح الأزهري للمقاولات العامة والتشطيبات`,
    description: project.description,
  }
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  await connectDB()
  const project = await Project.findOne({ href: `/projects/${params.slug}` })

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      <ProjectDetail project={project} />
      <Footer />
      <FloatingContact />
    </main>
  )
}
