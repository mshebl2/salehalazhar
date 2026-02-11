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
  const projects = await Project.find({}).select('href _id')
  return projects.map((project) => {
    // Use href if available, otherwise use _id
    const slug = project.href 
      ? project.href.replace('/projects/', '')
      : project._id.toString()
    return { slug }
  })
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  await connectDB()
  
  // Try to find by href first, then by _id
  let project = await Project.findOne({ href: `/projects/${params.slug}` })
  
  if (!project) {
    // If not found by href, try by _id
    project = await Project.findById(params.slug)
  }

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
  
  // Try to find by href first, then by _id
  let project = await Project.findOne({ href: `/projects/${params.slug}` })
  
  if (!project) {
    // If not found by href, try by _id
    project = await Project.findById(params.slug)
  }

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
