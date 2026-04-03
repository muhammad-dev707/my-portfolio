import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#eef2ff] to-[#fdf4ff]"
    >
      {/* Abstract shapes */}
      <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-purple-300/40 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 -right-32 w-[500px] h-[500px] bg-indigo-300/40 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-pink-300/30 blur-[160px]" />

      <div className="relative max-w-[1400px] mx-auto px-8">
        {/* ===== HEADER ===== */}
        <div className="grid lg:grid-cols-12 gap-12 mb-28 items-end">
          <div className="lg:col-span-8">
            <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[1.05] text-gray-900">
              About
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
                My Creative Path
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 text-gray-600 text-lg">
            <p>
              Frontend — bu men uchun nafaqat kod, balki dizayn,
              tafakkur va foydalanuvchi hissiyotidir.
            </p>
          </div>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          {/* TEXT */}
          <div className="lg:col-span-6 space-y-8 text-gray-700 text-lg">
            <p className="text-2xl font-semibold text-gray-900">
              Salom, men Nurmuhammad.
            </p>

            <p>
              2022-yildan buyon men zamonaviy veb-interfeyslar ishlab
              chiqaman. Har bir loyiha — bu foydalanuvchi tajribasini
              soddalashtirish va dizaynni jonlantirish imkoniyati.
            </p>

            <p>
              Asosan <strong>React</strong>, <strong>Tailwind CSS</strong>,{' '}
              <strong>Next.js</strong> va <strong>TypeScript</strong> bilan
              ishlayman.
            </p>

            <p>
              Maqsadim — oddiy ishlaydigan emas, balki esda qoladigan
              mahsulotlar yaratish.
            </p>

            {/* ACTIONS */}
            <div className="flex gap-6 pt-8">
              <a
                href="#projects"
                className="px-7 py-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold hover:scale-105 transition"
              >
                Loyihalar
              </a>
              <a
                href="#contact"
                className="px-7 py-3 rounded-full border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                Aloqa
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-tr from-indigo-400/40 to-purple-400/40 blur-2xl rounded-[40px]" />

              <img
                src="https://www.zdnet.com/a/img/resize/4da45d0784f82cc687079eb6f2349f152dbe2466/2019/08/19/4a663776-f4a9-4f89-9bee-2d07ee052f5b/istock-1147195672-11.jpg?auto=webp&fit=crop&height=1200&width=1200"
                alt="Nurmuhammad"
                className="relative z-10 w-[420px] rounded-[32px] shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}