"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Building, Wrench, Palette, Settings, Zap, Hammer, RefreshCw, Bold } from "lucide-react"

// Map icon names to components
const IconMap: { [key: string]: any } = {
  Palette: Palette,
  Building: Building,
  Wrench: Wrench,
  Settings: Settings,
  Zap: Zap,
  Hammer: Hammer,
  RefreshCw: RefreshCw,
  Road: Bold
}

interface Service {
  _id: string
  title: string
  description: string
  icon: string
  href?: string
  // Add other properties if needed based on the model
}

interface ServicesGridProps {
  services: Service[]
}

const categories = [
  { id: "all", name: "جميع الخدمات" },
]

export default function ServicesGrid({ services }: ServicesGridProps) {
  const [activeCategory, setActiveCategory] = useState("all")

  // Assume filtering logic if categories were dynamic, but for now show all or if category field existed on service
  // Since we removed 'category' from Service interface in the snippet (not sure if it exists in DB model), we just show all.
  // If we want filtering, we need category in DB.

  const filteredServices = services

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D2240] mb-4">خدماتنا المتميزة</h2>
          <p className="text-lg text-[#2D3640] max-w-2xl mx-auto">
            نقدم مجموعة شاملة من الخدمات المتخصصة في مجال البناء والتشطيب
          </p>
        </div>

        {/* Category Filter - Simplified for now as dynamic categories would require DB support */}
        {/* <div className="flex flex-wrap justify-center gap-4 mb-12">
            ... 
        </div> */}

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const IconComponent = IconMap[service.icon] || Building

            return (
              <Card key={service._id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <div className="bg-gray-200 h-48 w-full flex items-center justify-center">
                    {/* Placeholder or image if service has one */}
                    <IconComponent className="w-16 h-16 text-gray-400 opacity-50" />
                  </div>

                  <div className="absolute top-4 right-4 bg-[#C4D600] p-3 rounded-full">
                    <IconComponent className="w-6 h-6 text-[#0D2240]" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0D2240] mb-3">{service.title}</h3>
                  <p className="text-[#2D3640] mb-4 leading-relaxed">{service.description}</p>
                  <Link href={service.href || "#"}>
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
