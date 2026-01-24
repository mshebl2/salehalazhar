"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Building, Wrench, Palette, Settings } from "lucide-react"

const services = [
  {
    id: "decoration",
    title: "أعمال الديكور بالمدينة المنورة",
    description: "تصاميم داخلية وخارجية عصرية وأنيقة تجمع بين الجمال والوظيفية",
    icon: Palette,
    image: "/1.png",
    category: "decoration",
  },
  {
    id: "construction",
    title: "الأعمال الإنشائية بالمدينة المنورة",
    description: "بناء وتشييد المباني السكنية والتجارية والصناعية بأعلى معايير الجودة",
    icon: Building,
    image: "/2.png",
    category: "construction",
  },
  {
    id: "infrastructure",
    title: "أعمال البنية التحتية بالمدينة المنورة",
    description: "تنفيذ مشاريع البنية التحتية والمرافق العامة بأحدث التقنيات",
    icon: Wrench,
    image: "/3.png",
    category: "infrastructure",
  },
  {
    id: "electromechanical",
    title: "أعمال الكهروميكانيك بالمدينة المنورة",
    description: "تركيب وصيانة الأنظمة الكهربائية والميكانيكية بأعلى معايير السلامة",
    icon: Settings,
    image: "/4.png",
    category: "electromechanical",
  },
  {
    id: "metalwork",
    title: "أعمال الحدادة بالمدينة المنورة",
    description: "تصنيع وتركيب الهياكل المعدنية والأبواب والنوافذ بدقة عالية",
    icon: Building,
    image: "/5.png",
    category: "ironworks",
  },
  {
    id: "roads",
    title: "أعمال الطرق بالمدينة المنورة",
    description: "إنشاء وصيانة الطرق والممرات بأحدث التقنيات والمعدات المتطورة",
    icon: Building,
    image: "/6.png",
    category: "roads",
  },
  {
    id: "renovation",
    title: "أعمال الترميم والتشطيب بالمدينة المنورة",
    description: "تجديد وترميم المباني القديمة مع الحفاظ على الطابع المعماري الأصيل",
    icon: Wrench,
    image: "/7.png",
    category: "renovation",
  },
  {
    id: "real-estate",
    title: "الخدمات العقارية بالمدينة المنورة",
    description: "بيع وشراء وتأجير وتسويق عقاري متكامل للأفراد والشركات",
    icon: Building,
    image: "/real-estate.jpg",
    category: "real-estate",
  },
]

const categories = [
  { id: "all", name: "جميع الخدمات" },
  { id: "decoration", name: "الديكور" },
  { id: "construction", name: "الإنشائية" },
  { id: "infrastructure", name: "البنية التحتية" },
  { id: "electromechanical", name: "الكهروميكانيك" },
  { id: "ironworks", name: "الحدادة" },
  { id: "roads", name: "الطرق" },
  { id: "renovation", name: "الترميم والتشطيب" },
]

export default function ServicesGrid() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredServices =
    activeCategory === "all" ? services : services.filter((service) => service.category === activeCategory)

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D2240] mb-4">خدماتنا المتميزة</h2>
          <p className="text-lg text-[#2D3640] max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات المتخصصة في مجال البناء والتشطيب
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 ${
                activeCategory === category.id
                  ? "bg-[#C4D600] text-[#0D2240] hover:bg-[#C4D600]/90"
                  : "border-[#0D2240] text-[#0D2240] hover:bg-[#0D2240] hover:text-white"
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const IconComponent = service.icon
            return (
              <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <img
                    src={
                      service.image ||
                      `/placeholder.svg?height=250&width=400&query=${service.title || "/placeholder.svg"}`
                    }
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 bg-[#C4D600] p-3 rounded-full">
                    <IconComponent className="w-6 h-6 text-[#0D2240]" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0D2240] mb-3">{service.title}</h3>
                  <p className="text-[#2D3640] mb-4 leading-relaxed">{service.description}</p>
                  <Link href={`/services/${service.id}`}>
                    <Button className="w-full bg-[#0D2240] hover:bg-[#0D2240]/90 text-white">
                      تفاصيل الخدمة
                      <ArrowLeft className="w-4 h-4 mr-2" />
                    </Button>
                  </Link>
                </div>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
