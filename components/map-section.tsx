export default function MapSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D2240] mb-4">موقعنا بالمدينة المنورة</h2>
          <p className="text-lg text-[#2D3640]">تفضل بزيارتنا في مقر الشركة بالمدينة المنورة</p>
        </div>

        <div className="rounded-lg overflow-hidden shadow-lg h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.9358393016482!2d39.654641399999996!3d24.383535300000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdeb002bf2028f%3A0x47fb149a36dd27ad!2z2YXYpNiz2LPYqSDYtdin2YTYrSDYp9mE2KfYstmH2LHZiiDZhNmE2YXZgtin2YjZhNin2Kog2KfZhNi52KfZhdip!5e0!3m2!1sar!2seg!4v1756942718045!5m2!1sar!2seg"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  )
}
