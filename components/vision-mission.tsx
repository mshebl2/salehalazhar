import { Card } from "@/components/ui/card"
import { Eye, Target, Heart, Award } from "lucide-react"

export default function VisionMission() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D2240] mb-4">
            رؤيتنا ورسالتنا بالمدينة المنورة
          </h2>
          <p className="text-lg text-[#2D3640] max-w-2xl mx-auto">
            نسعى لأن نكون الخيار الأول في مجال المقاولات والتشطيبات بالمدينة المنورة
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8">
            <div className="flex items-center mb-6">
              <div className="bg-[#C4D600] p-3 rounded-full ml-4">
                <Eye className="w-8 h-8 text-[#0D2240]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D2240]">رؤيتنا بالمدينة المنورة</h3>
            </div>
            <p className="text-lg text-[#2D3640] leading-relaxed">
              أن نكون الشركة الرائدة والمفضلة في مجال المقاولات العامة والتشطيبات في المدينة المنورة، ونساهم في
              بناء مستقبل عمراني مستدام يواكب رؤية المملكة 2030.
            </p>
          </Card>

          <Card className="p-8">
            <div className="flex items-center mb-6">
              <div className="bg-[#0D2240] p-3 rounded-full ml-4">
                <Target className="w-8 h-8 text-[#C4D600]" />
              </div>
              <h3 className="text-2xl font-bold text-[#0D2240]">رسالتنا بالمدينة المنورة</h3>
            </div>
            <p className="text-lg text-[#2D3640] leading-relaxed">
              تقديم خدمات مقاولات وتشطيبات متميزة بأعلى معايير الجودة والإتقان في المدينة المنورة، مع الالتزام بالمواعيد المحددة وتحقيق رضا
              العملاء من خلال فريق محترف وتقنيات حديثة.
            </p>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6 text-center">
            <div className="bg-[#C4D600] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Award className="w-8 h-8 text-[#0D2240]" />
            </div>
            <h4 className="text-xl font-bold text-[#0D2240] mb-3">الجودة بالمدينة المنورة</h4>
            <p className="text-[#2D3640]">نلتزم بأعلى معايير الجودة في جميع مراحل العمل</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="bg-[#0D2240] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Target className="w-8 h-8 text-[#C4D600]" />
            </div>
            <h4 className="text-xl font-bold text-[#0D2240] mb-3">الالتزام بالمدينة المنورة</h4>
            <p className="text-[#2D3640]">نحترم المواعيد المحددة ونلتزم بتسليم المشاريع في الوقت المناسب</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="bg-[#C4D600] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Eye className="w-8 h-8 text-[#0D2240]" />
            </div>
            <h4 className="text-xl font-bold text-[#0D2240] mb-3">الابتكار بالمدينة المنورة</h4>
            <p className="text-[#2D3640]">نستخدم أحدث التقنيات والأساليب في تنفيذ المشاريع</p>
          </Card>

          <Card className="p-6 text-center">
            <div className="bg-[#0D2240] p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <Heart className="w-8 h-8 text-[#C4D600]" />
            </div>
            <h4 className="text-xl font-bold text-[#0D2240] mb-3">الشفافية بالمدينة المنورة</h4>
            <p className="text-[#2D3640]">نؤمن بالتعامل الشفاف والصادق مع جميع عملائنا</p>
          </Card>
        </div>
      </div>
    </section>
  )
}
