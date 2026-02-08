import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"
import ServiceDetail from "@/components/service-detail"
import connectDB from "@/lib/db"
import Service from "@/models/Service"

export async function generateStaticParams() {
  await connectDB()
  const services = await Service.find({}).select('href')
  return services.map((service) => ({
    slug: service.href.replace('/services/', ''),
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  await connectDB()
  const service = await Service.findOne({ href: `/services/${params.slug}` })

  if (!service) {
    return {
      title: "الخدمة غير موجودة",
    }
  }

  return {
    title: `${service.title} - صالح الأزهري للمقاولات العامة والتشطيبات`,
    description: service.description,
  }
}

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  await connectDB()
  const service = await Service.findOne({ href: `/services/${params.slug}` })

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen">
      <Header />
      <ServiceDetail service={service} />
      <Footer />
      <FloatingContact />
    </main>
  )
}
