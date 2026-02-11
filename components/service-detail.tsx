import Image from "next/image"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import Link from "next/link"

type ServiceDetailProps = {
  service: {
    title: string
    description: string
    details: string
    href: string
    icon: string
    order: number
  }
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#0D2240]/10 to-[#C4D600]/10">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-8">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-[#0D2240] hover:text-[#C4D600]">الرئيسية</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="/services" className="text-[#0D2240] hover:text-[#C4D600]">الخدمات</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[#C4D600]">{service.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#0D2240] rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl text-[#C4D600]">{service.icon}</span>
                </div>
                <div>
                  <h1 className="text-4xl lg:text-5xl font-bold text-[#0D2240] mb-2">
                    {service.title}
                  </h1>
                </div>
              </div>
              <p className="text-lg leading-relaxed text-gray-700 mb-8">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-[#0D2240] px-6 py-3 text-white font-medium shadow-lg hover:bg-[#1a3a5c] transition-colors">
                  اطلب الخدمة
                </Link>
                <Link href="/projects" className="inline-flex items-center justify-center rounded-lg border border-[#0D2240] px-6 py-3 text-[#0D2240] font-medium hover:bg-[#0D2240] hover:text-white transition-colors">
                  مشاهدة المشاريع
                </Link>
              </div>
            </div>
            <div className="relative w-full h-96 lg:h-[500px]">
              <div className="w-full h-full bg-gradient-to-br from-[#0D2240] to-[#C4D600] rounded-3xl shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <span className="text-6xl text-white mb-4 block">{service.icon}</span>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#0D2240] mb-4">تفاصيل الخدمة</h2>
              <div className="w-24 h-1 bg-[#C4D600] mx-auto rounded-full"></div>
            </div>
            <div className="prose prose-lg max-w-none">
              <div className="p-8 lg:p-12 bg-white rounded-3xl shadow-xl">
                <div className="whitespace-pre-wrap text-gray-700 leading-relaxed text-lg">
                  {service.details}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0D2240]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            هل تحتاج لهذه الخدمة؟
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر تنافسي
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-lg bg-[#C4D600] px-8 py-4 text-[#0D2240] font-bold text-lg shadow-lg hover:bg-[#B8C600] transition-colors">
              تواصل معنا
            </Link>
            <Link href="tel:+966505123456" className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-4 text-white font-bold text-lg hover:bg-white hover:text-[#0D2240] transition-colors">
              اتصل الآن
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
