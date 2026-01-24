import Image from "next/image"

type ServiceDetailProps = {
  service: {
    title: string
    description: string
    image: string
    features: string[]
    process: string[]
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
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">مميزات الخدمة</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feature, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl shadow">
                <h3 className="font-semibold text-lg">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">خطوات التنفيذ</h2>
          <div className="space-y-4">
            {service.process.map((step, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl shadow">
                <h3 className="font-semibold text-lg">
                  خطوة {idx + 1}: {step}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
