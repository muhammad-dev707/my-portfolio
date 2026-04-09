import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="relative py-32 bg-site-gradient dark:bg-site-gradient"
    >
      {/* Container */}
      <div className="relative container mx-auto px-6">
        
        {/* ===== HEADER ===== */}
        <div className="grid lg:grid-cols-12 gap-12 mb-28 items-end">
          <div className="lg:col-span-8">
            <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] font-black leading-[1.05] text-gray-900 dark:text-white">
              About
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-gray-700 dark:from-gray-400 to-gray-400 dark:to-gray-300">
                My Creative Path
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 text-gray-600 dark:text-gray-300 text-lg">
            <p>
              Frontend — bu men uchun nafaqat kod, balki dizayn,
              tafakkur va foydalanuvchi hissiyotidir.
            </p>
          </div>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          
          {/* TEXT */}
          <div className="lg:col-span-6 space-y-8 text-gray-700 dark:text-gray-300 text-lg">
            <p className="text-2xl font-semibold text-gray-900 dark:text-white">
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
          </div>

          {/* IMAGE */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative">
              
              {/* soft glow */}
              <div className="absolute -inset-6 bg-gradient-to-tr from-gray-200 dark:from-gray-700 to-gray-100 dark:to-gray-800 blur-2xl rounded-[40px]" />

              <img
                src="https://www.zdnet.com/a/img/resize/4da45d0784f82cc687079eb6f2349f152dbe2466/2019/08/19/4a663776-f4a9-4f89-9bee-2d07ee052f5b/istock-1147195672-11.jpg?auto=webp&fit=crop&height=1200&width=1200"
                alt="Nurmuhammad"
                className="relative z-10 w-[420px] rounded-[32px] shadow-xl object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}