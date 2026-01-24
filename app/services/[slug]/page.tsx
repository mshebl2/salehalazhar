import { notFound } from "next/navigation"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"
import ServiceDetail from "@/components/service-detail"

const services = {
  "general-contracting": {
    title: "المقاولات العامة",
    description: "نقدم خدمات المقاولات العامة الشاملة للمشاريع السكنية والتجارية والصناعية",
    image: "/services/general-contracting.jpg",
    features: [
      "تنفيذ المشاريع السكنية والتجارية",
      "البناء بالخرسانة المسلحة",
      "أعمال الحفر والأساسات",
      "البناء بالطوب والبلوك",
      "أعمال العزل المائي والحراري",
      "تركيب الأنظمة الإنشائية",
    ],
    process: [
      "دراسة المشروع والموقع",
      "إعداد التصاميم والمخططات",
      "الحصول على التراخيص اللازمة",
      "تنفيذ أعمال الحفر والأساسات",
      "البناء والتشييد",
      "التشطيبات النهائية والتسليم",
    ],
  },
  "interior-finishing": {
    title: "التشطيبات الداخلية",
    description: "تشطيبات داخلية فاخرة تجمع بين الجمال والوظيفية لتحقيق أحلامكم",
    image: "/services/interior-finishing.jpg",
    features: [
      "أعمال الدهانات والديكورات",
      "تركيب الأرضيات والسيراميك",
      "تركيب الأسقف المعلقة",
      "أعمال النجارة والأبواب",
      "تركيب الإضاءة والكهرباء",
      "أعمال السباكة والصحي",
    ],
    process: [
      "استشارة التصميم الداخلي",
      "اختيار المواد والألوان",
      "إعداد المخططات التفصيلية",
      "تنفيذ أعمال التشطيب",
      "التركيبات النهائية",
      "التسليم والضمان",
    ],
  },
  "exterior-finishing": {
    title: "التشطيبات الخارجية",
    description: "تشطيبات خارجية عصرية تعكس هوية المبنى وتضمن الحماية والجمال",
    image: "/services/exterior-finishing.jpg",
    features: [
      "أعمال الواجهات والكسوة",
      "تركيب الحجر الطبيعي والصناعي",
      "أعمال الدهانات الخارجية",
      "تركيب الزجاج والألمنيوم",
      "أعمال العزل والحماية",
      "تنسيق الحدائق والمداخل",
    ],
    process: [
      "تحليل الواجهة والتصميم",
      "اختيار مواد التشطيب",
      "إعداد المخططات",
      "تنفيذ أعمال الكسوة",
      "التشطيبات النهائية",
      "الفحص والتسليم",
    ],
  },
  "maintenance-renovation": {
    title: "الصيانة والترميم",
    description: "خدمات صيانة وترميم شاملة للحفاظ على المباني وتجديدها",
    image: "/services/maintenance-renovation.jpg",
    features: [
      "صيانة المباني الدورية",
      "ترميم المباني القديمة",
      "إصلاح التشققات والعيوب",
      "تجديد التشطيبات",
      "صيانة الأنظمة الكهربائية",
      "صيانة أنظمة السباكة",
    ],
    process: [
      "فحص وتقييم المبنى",
      "تحديد أعمال الصيانة المطلوبة",
      "إعداد خطة العمل",
      "تنفيذ أعمال الصيانة",
      "الاختبار والفحص",
      "التسليم والمتابعة",
    ],
  },
  "interior-design": {
    title: "التصميم الداخلي",
    description: "تصاميم داخلية إبداعية تعكس شخصيتكم وتلبي احتياجاتكم",
    image: "/services/interior-design.jpg",
    features: [
      "التصميم المعماري الداخلي",
      "اختيار الألوان والمواد",
      "تصميم الأثاث المخصص",
      "تخطيط الإضاءة",
      "التصميم ثلاثي الأبعاد",
      "الإشراف على التنفيذ",
    ],
    process: [
      "استشارة التصميم الأولية",
      "دراسة المساحة والاحتياجات",
      "إعداد المفاهيم التصميمية",
      "التصميم التفصيلي",
      "اختيار المواد والتشطيبات",
      "الإشراف على التنفيذ",
    ],
  },
  "project-management": {
    title: "إدارة المشاريع",
    description: "إدارة احترافية للمشاريع لضمان التسليم في الوقت المحدد وبأعلى جودة",
    image: "/services/project-management.jpg",
    features: [
      "تخطيط وجدولة المشاريع",
      "إدارة الموارد والفرق",
      "مراقبة الجودة والتكلفة",
      "التنسيق مع المقاولين",
      "إعداد التقارير الدورية",
      "ضمان الالتزام بالمواعيد",
    ],
    process: [
      "تحليل متطلبات المشروع",
      "إعداد خطة المشروع",
      "تشكيل فريق العمل",
      "تنفيذ ومراقبة المشروع",
      "إدارة المخاطر والتغييرات",
      "التسليم والإغلاق",
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({
    slug: slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services]

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

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services]

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
