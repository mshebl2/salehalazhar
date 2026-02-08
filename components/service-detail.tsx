import Image from "next/image"

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
      <section className="relative py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-lg leading-relaxed text-gray-700">
                {service.description}
              </p>
            </div>
            <div className="relative w-full h-80">
              <div className="w-full h-full bg-gray-200 rounded-2xl shadow-lg flex items-center justify-center">
                <span className="text-gray-500">صورة الخدمة</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">تفاصيل الخدمة</h2>
          <div className="prose prose-lg max-w-none">
            <div className="p-8 bg-white rounded-2xl shadow">
              <div className="whitespace-pre-wrap text-gray-700 leading-relaxed">
                {service.details}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
