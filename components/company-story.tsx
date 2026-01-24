import { Card } from "@/components/ui/card"

export default function CompanyStory() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D2240] mb-8">قصه نجاحنا</h2>
            <div className="space-y-6 text-lg text-[#2D3640] leading-relaxed">
              <p>
                تاسست شركه صالح الازهري للمقاولات العامه والتشطيبات منذ اكثر من 15 عاما بالمدينه المنوره، وبدات رحلتنا بحلم بسيط:
                تقديم خدمات بناء وتشطيب متميزه تلبي احتياجات عملائنا وتفوق توقعاتهم.
              </p>
              <p>
                على مر السنين، نمت الشركه لتصبح واحده من الشركات الرائده في المملكه العربيه السعوديه، حيث نجحنا في تنفيذ
                اكثر من 250 مشروعا متنوعا يشمل المباني السكنيه والتجاريه والمشاريع الحكوميه.
              </p>
              <p>
                نفخر بفريقنا المتخصص من المهندسين والفنيين ذوي الخبره العاليه، والذين يعملون بشغف واتقان لضمان تسليم كل
                مشروع في الوقت المحدد وباعلى معايير الجوده.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 text-center bg-[#C4D600]/10">
              <div className="text-4xl font-bold text-[#0D2240] mb-2">2009</div>
              <div className="text-[#2D3640] font-medium">سنه التاسيس</div>
            </Card>
            <Card className="p-6 text-center bg-[#0D2240]/10">
              <div className="text-4xl font-bold text-[#C4D600] mb-2">15+</div>
              <div className="text-[#2D3640] font-medium">سنه خبره</div>
            </Card>
            <Card className="p-6 text-center bg-[#0D2240]/10">
              <div className="text-4xl font-bold text-[#C4D600] mb-2">250+</div>
              <div className="text-[#2D3640] font-medium">مشروع مكتمل</div>
            </Card>
            <Card className="p-6 text-center bg-[#C4D600]/10">
              <div className="text-4xl font-bold text-[#0D2240] mb-2">150+</div>
              <div className="text-[#2D3640] font-medium">عميل راضي</div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
