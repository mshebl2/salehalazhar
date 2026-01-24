"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const slides = [
  {
    id: 1,
    image: "/modern-construction-site.png",
    title: "مشاريع إنشائية متميزة بالمدينة المنورة",
    subtitle: "نحن نبني المستقبل بأيدي خبيرة وتقنيات حديثة",
  },
  {
    id: 2,
    image: "/تشطيبات شقق ( Apartment finishes ).png",
    title: "تشطيبات فاخرة بالمدينة المنورة",
    subtitle: "تصاميم داخلية وخارجية تلبي أعلى معايير الجودة والأناقة",
  },
  {
    id: 3,
    image: "/1 (15).jpg",
    title: "أعمال الطرق والبنية التحتية بالمدينة المنورة",
    subtitle: "حلول شاملة للبنية التحتية والطرق بأحدث المعايير",
  },
  {
    id: 4,
    image: "/images.png",
    title: "الأعمال الكهروميكانيكية بالمدينة المنورة",
    subtitle: "أنظمة كهربائية وميكانيكية متطورة وآمنة",
  },
  {
    id: 5,
    image: "/1 (3).png",
    title: "الترميم والتجديد بالمدينة المنورة",
    subtitle: "إعادة إحياء المباني بلمسة عصرية واحترافية",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url("${slide.image}")` }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            {slides[currentSlide].title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-balance opacity-90">
            {slides[currentSlide].subtitle}
          </p>
          <Button size="lg" className="bg-[#C4D600] hover:bg-[#e6a61a] text-[#0D2240] font-bold text-lg px-8 py-3">
            تواصل معنا الآن
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-[#C4D600]" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
