"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Palette, Building, Wrench, Zap, Hammer, Bold as Road, RefreshCw, Plus, Minus } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "أعمال الديكور بالمدينة المنورة",
    description: "تصاميم داخلية وخارجية عصرية وأنيقة",
    details: "نقدم حلول تصميم متكاملة تشمل التصميم الداخلي والخارجي بأحدث الطرق والمواد عالية الجودة.",
    href: "/services/decoration",
  },
  {
    icon: Building,
    title: "الأعمال الإنشائية بالمدينة المنورة",
    description: "بناء وتشييد المباني السكنية والتجارية",
    details: "خبرة واسعة في تنفيذ المشاريع الإنشائية من الأساسات حتى التشطيب النهائي.",
    href: "/services/construction",
  },
  {
    icon: Wrench,
    title: "أعمال البنية التحتية بالمدينة المنورة",
    description: "أعمال البنية التحتية والمرافق العامة",
    details: "تنفيذ مشاريع البنية التحتية بما يشمل شبكات المياه والصرف الصحي والكهرباء.",
    href: "/services/infrastructure",
  },
  {
    icon: Zap,
    title: "أعمال الكهروميكانيك بالمدينة المنورة",
    description: "تركيب وصيانة الأنظمة الكهربائية والميكانيكية",
    details: "فريق متخصص في تركيب وصيانة جميع الأنظمة الكهربائية والميكانيكية بأعلى معايير السلامة.",
    href: "/services/electromechanical",
  },
  {
    icon: Hammer,
    title: "أعمال الحدادة بالمدينة المنورة",
    description: "تصنيع وتركيب الهياكل المعدنية",
    details: "تصنيع وتركيب الهياكل المعدنية والأبواب والنوافذ بدقة عالية وجودة ممتازة.",
    href: "/services/metalwork",
  },
  {
    icon: Road,
    title: "أعمال الطرق بالمدينة المنورة",
    description: "إنشاء وصيانة الطرق والممرات",
    details: "خبرة في تنفيذ مشاريع الطرق والرصف بأحدث التقنيات والمعدات المتطورة.",
    href: "/services/roads",
  },
  {
    icon: RefreshCw,
    title: "أعمال الترميم والتشطيب بالمدينة المنورة",
    description: "تجديد وترميم المباني القديمة",
    details: "إعادة تأهيل وترميم المباني القديمة بأساليب حديثة مع الحفاظ على الطابع المعماري الأصلي.",
    href: "/services/renovation",
  },
  {
    icon: Building,
    title: "الخدمات العقارية بالمدينة المنورة",
    description: "حلول عقارية شاملة للأفراد والشركات",
    details: "نقدم خدمات عقارية متكاملة تشمل التسويق العقاري، إدارة الأملاك، الاستشارات، وتقييم العقارات بأعلى معايير الجودة.",
    href: "/services/real-estate",
  },
]

export default function ServicesSection() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  return (
    <section
      ref={sectionRef}
      className={`py-20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-800 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-30px]"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D2240] mb-4">خدماتنا بالمدينة المنورة</h2>
          <p className="text-lg text-[#2D3640] max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات في مجال البناء والتشطيب بأعلى معايير الجودة
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`p-6 text-center hover:shadow-xl transition-all duration-500 cursor-pointer group ${
                expandedCard === index ? "ring-2 ring-[#C4D600] shadow-xl scale-105" : "hover:scale-105"
              } ${isVisible ? `opacity-100 translate-y-0 delay-[${300 + index * 100}ms]` : "opacity-0 translate-y-10"}`}
              onClick={() => toggleCard(index)}
            >
              <div
                className={`bg-[#C4D600] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 ${
                  expandedCard === index ? "bg-[#0D2240] scale-110" : "group-hover:scale-110 group-hover:rotate-12"
                }`}
              >
                <service.icon
                  className={`w-8 h-8 transition-all duration-300 ${
                    expandedCard === index ? "text-[#C4D600]" : "text-[#0D2240] group-hover:text-white"
                  }`}
                />
              </div>

              <h3 className="text-xl font-bold text-[#0D2240] mb-3 group-hover:text-[#C4D600] transition-colors duration-300">
                {service.title}
              </h3>

              <p className="text-[#2D3640] mb-4 group-hover:text-[#0D2240] transition-colors duration-300">
                {service.description}
              </p>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  expandedCard === index ? "max-h-32 opacity-100 mb-4" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm text-[#2D3640] leading-relaxed border-t pt-3">{service.details}</p>
              </div>

              <div className="flex flex-col gap-2">
                <Link href={service.href}>
                  <Button
                    variant="outline"
                    className="w-full border-[#C4D600] text-[#C4D600] hover:bg-[#C4D600] hover:text-[#0D2240] bg-transparent transition-all duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    تفاصيل الخدمة
                  </Button>
                </Link>

                <Button
                  variant="ghost"
                  size="sm"
                  className="text-[#0D2240] hover:text-[#C4D600] transition-all duration-300"
                >
                  {expandedCard === index ? (
                    <>
                      <Minus className="w-4 h-4 ml-1 transition-transform duration-300" />
                      عرض أقل
                    </>
                  ) : (
                    <>
                      <Plus className="w-4 h-4 ml-1 transition-transform duration-300" />
                      عرض المزيد
                    </>
                  )}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-800 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link href="/services">
            <Button
              size="lg"
              className="bg-[#0D2240] hover:bg-[#1a3a5c] text-white font-bold hover:scale-105 transition-all duration-300"
            >
              عرض جميع الخدمات
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
