"use client"

import { useState, useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, MapPin, Ruler, Eye, Filter } from "lucide-react"

const projects = [
  {
    id: "luxury-villa-decoration",
    title: "فيلا فاخرة - أعمال الديكور",
    category: "decoration",
    location: "المدينة المنورة",
    area: "800 م²",
    year: "2023",
    image: "/a (4).png",
    description: "تصميم وتنفيذ ديكورات داخلية وخارجية فاخرة لفيلا سكنية",
  },
  {
    id: "commercial-building-construction",
    title: "مبنى تجاري - أعمال إنشائية",
    category: "construction",
    location: "المدينة المنورة",
    area: "2500 م²",
    year: "2023",
    image: "/a (5).png",
    description: "تنفيذ أعمال إنشائية متكاملة لمبنى تجاري حديث",
  },
  {
    id: "infrastructure-project",
    title: "مشروع البنية التحتية",
    category: "infrastructure",
    location: "المدينة المنورة",
    area: "5000 م²",
    year: "2022",
    image: "/a (6).png",
    description: "تنفيذ شبكات المياه والصرف الصحي والكهرباء لمجمع سكني",
  },
  {
    id: "electromechanical-hospital",
    title: "مستشفى - أعمال كهروميكانيك",
    category: "electromechanical",
    location: "المدينة المنورة",
    area: "3000 م²",
    year: "2023",
    image: "/a (7).png",
    description: "تركيب وصيانة الأنظمة الكهربائية والميكانيكية لمستشفى حديث",
  },
  {
    id: "ironworks-factory",
    title: "مصنع - أعمال الحدادة",
    category: "ironworks",
    location: "المدينة المنورة",
    area: "4000 م²",
    year: "2022",
    image: "/a (8).png",
    description: "تصنيع وتركيب الهياكل المعدنية لمصنع صناعي",
  },
  {
    id: "road-construction",
    title: "طريق رئيسي - أعمال الطرق",
    category: "roads",
    location: "المدينة المنورة",
    area: "10 كم",
    year: "2021",
    image: "/a (1).png",
    description: "إنشاء وتطوير طريق رئيسي بأحدث معايير السلامة",
  },
  {
    id: "heritage-building-renovation",
    title: "مبنى تراثي - ترميم وتشطيب",
    category: "renovation",
    location: "المدينة المنورة",
    area: "1200 م²",
    year: "2022",
    image: "/a (2).png",
    description: "ترميم وتجديد مبنى تراثي مع الحفاظ على الطابع الأصيل",
  },
  {
    id: "mall-decoration",
    title: "مول تجاري - أعمال الديكور",
    category: "decoration",
    location: "المدينة المنورة",
    area: "6000 م²",
    year: "2023",
    image: "/a (3).png",
    description: "تصميم وتنفيذ ديكورات عصرية لمول تجاري كبير",
  },
]

const categories = [
  { id: "all", name: "جميع المشاريع" },
  { id: "decoration", name: "الديكور" },
  { id: "construction", name: "الإنشائية" },
  { id: "infrastructure", name: "البنية التحتية" },
  { id: "electromechanical", name: "الكهروميكانيك" },
  { id: "ironworks", name: "الحدادة" },
  { id: "roads", name: "الطرق" },
  { id: "renovation", name: "الترميم والتشطيب" },
]

export default function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section
      ref={sectionRef}
      className={`py-20 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D2240] mb-4">مشاريعنا المميزة</h2>
          <p className="text-lg text-[#2D3640] max-w-2xl mx-auto">
            مجموعة مختارة من أفضل مشاريعنا التي تعكس جودة عملنا وخبرتنا
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <div className="flex items-center gap-2 mb-4 w-full justify-center">
            <Filter className="w-5 h-5 text-[#0D2240]" />
            <span className="text-[#0D2240] font-medium">تصفية المشاريع:</span>
          </div>
          {categories.map((category, index) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 transition-all duration-300 hover:scale-105 ${
                activeCategory === category.id
                  ? "bg-[#C4D600] text-[#0D2240] hover:bg-[#C4D600]/90 shadow-lg"
                  : "border-[#0D2240] text-[#0D2240] hover:bg-[#0D2240] hover:text-white"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {category.name}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`overflow-hidden hover:shadow-2xl transition-all duration-500 group cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${hoveredProject === project.id ? "scale-105 shadow-2xl" : "hover:scale-105"}`}
              style={{ transitionDelay: `${index * 100 + 700}ms` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={
                    project.image ||
                    `/placeholder.svg?height=300&width=400&query=${project.title || "/placeholder.svg"} construction project`
                  }
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div className="absolute bottom-4 right-4 bg-[#C4D600] text-[#0D2240] px-3 py-1 rounded-full text-sm font-medium transform group-hover:scale-110 transition-all duration-300 shadow-lg">
                  {project.year}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0D2240] mb-3 group-hover:text-[#C4D600] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-[#2D3640] mb-4 leading-relaxed group-hover:text-[#0D2240] transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex items-center gap-4 text-sm text-[#2D3640] mb-4">
                  <div className="flex items-center gap-1 group-hover:text-[#C4D600] transition-colors duration-300">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1 group-hover:text-[#C4D600] transition-colors duration-300">
                    <Ruler className="w-4 h-4" />
                    <span>{project.area}</span>
                  </div>
                </div>

                <Link href={`/projects/${project.id}`}>
                  <Button className="w-full bg-[#0D2240] hover:bg-[#C4D600] hover:text-[#0D2240] text-white transition-all duration-300 group-hover:shadow-lg transform group-hover:-translate-y-1">
                    تفاصيل المشروع
                    <ArrowLeft className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
