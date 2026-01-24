"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

// بيانات المشاريع
const projects = {
  "luxury-villa-riyadh": {
    title: "فيلا فاخرة - الرياض",
    description: "مشروع فيلا سكنية فاخرة تجمع بين التصميم العصري والطابع التراثي السعودي",
    services: ["المقاولات العامة", "التشطيبات الداخلية", "التشطيبات الخارجية", "التصميم الداخلي"],
    images: [
      "/projects/villa-1-main.jpg",
      "/projects/villa-1-interior.jpg",
      "/projects/villa-1-exterior.jpg",
      "/projects/villa-1-garden.jpg",
    ],
    features: [
      "تصميم معماري فريد يجمع بين الأصالة والحداثة",
      "استخدام مواد عالية الجودة ومقاومة للعوامل الجوية",
      "نظام إضاءة ذكي وتكييف مركزي",
      "حديقة منسقة مع نظام ري أوتوماتيكي",
      "مسبح خاص مع منطقة استرخاء",
      "نظام أمان متطور مع كاميرات مراقبة",
    ],
  },
  "commercial-complex-jeddah": {
    title: "مجمع تجاري - جدة",
    description: "مجمع تجاري حديث يضم محلات تجارية ومكاتب إدارية بتصميم عصري",
    services: ["المقاولات العامة", "التشطيبات التجارية", "إدارة المشاريع"],
    images: [
      "/projects/commercial-1-main.jpg",
      "/projects/commercial-1-interior.jpg",
      "/projects/commercial-1-facade.jpg",
      "/projects/commercial-1-lobby.jpg",
    ],
    features: [
      "واجهة زجاجية عصرية مع إضاءة LED",
      "مساحات تجارية مرنة قابلة للتخصيص",
      "نظام تكييف مركزي موفر للطاقة",
      "مواقف سيارات متعددة الطوابق",
      "أنظمة أمان وحماية من الحريق",
      "تصميم داخلي أنيق يجذب العملاء",
    ],
  },
}

// مكون تفاصيل المشروع داخل المودال
function ProjectDetail({ project }: { project: any }) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
      <p className="mb-4 text-[#2D3640]">{project.description}</p>

      {/* الصور فقط */}
      <div className="grid md:grid-cols-2 gap-4">
        {project.images.map((img: string, idx: number) => (
          <img
            key={idx}
            src={img}
            alt={`${project.title} ${idx}`}
            className="w-full h-48 object-cover rounded"
          />
        ))}
      </div>
    </div>
  )
}

// الصفحة الرئيسية للمشاريع
export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null)

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-12">مشاريعنا</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.keys(projects).map((key) => {
          const project = projects[key]
          return (
            <Card
              key={key}
              className="overflow-hidden relative cursor-pointer"
              onClick={() => setSelectedProject(project)} // اضغط على الكارد لعرض التفاصيل
            >
              <img
                src={project.images[0]}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              </div>
            </Card>
          )
        })}
      </div>

      {/* المودال */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white w-11/12 md:w-3/4 lg:w-2/3 p-8 rounded-lg max-h-[90vh] overflow-y-auto relative">
            <button
              className="absolute top-4 right-4 text-xl font-bold"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
            <ProjectDetail project={selectedProject} />
          </div>
        </div>
      )}
    </div>
  )
}
