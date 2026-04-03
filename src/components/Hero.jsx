import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-white dark:bg-[#0a0a0f] flex items-center pt-16 lg:pt-0 transition-colors duration-500"
    >
      {/* Background Effects - Light & Dark uchun mos */}
      <div className="absolute inset-0">
        {/* Light mode uchun yumshoq ranglar */}
        <div className="absolute -top-60 -left-60 w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] bg-fuchsia-500/10 dark:bg-fuchsia-600/25 rounded-full blur-[140px] lg:blur-[180px]" />
        <div className="absolute top-1/3 -right-40 w-[450px] h-[450px] lg:w-[600px] lg:h-[600px] bg-cyan-500/10 dark:bg-cyan-500/25 rounded-full blur-[130px] lg:blur-[170px]" />
        <div className="absolute bottom-20 left-1/4 w-[400px] h-[400px] lg:w-[550px] lg:h-[550px] bg-violet-500/10 dark:bg-violet-600/20 rounded-full blur-[120px] lg:blur-[160px]" />
      </div>

      {/* Grid Overlay - Light & Dark */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 xl:gap-24 items-center min-h-[85vh] lg:min-h-screen">

          {/* LEFT - Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 lg:space-y-9">
            
            <div className="inline-flex px-5 py-3 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl text-xs sm:text-sm tracking-[0.12em] text-gray-600 dark:text-white/70 mx-auto lg:mx-0">
              CREATIVE FRONTEND DEVELOPER
            </div>

            <h1 className="font-black leading-none text-gray-900 dark:text-white">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.6rem]">
                Nurmuhammad
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] xl:text-[4rem] bg-gradient-to-r from-fuchsia-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent mt-1">
                Frontend
              </span>
            </h1>

            <div className="text-xl sm:text-2xl md:text-3xl lg:text-[2.1rem] text-gray-700 dark:text-white/90 font-light min-h-[3rem]">
              <TypeAnimation
                sequence={[
                  'Creating beautiful interfaces',
                  2000,
                  'Crafting digital experiences',
                  2000,
                  'Turning ideas into reality',
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
                className="font-medium text-cyan-600 dark:text-cyan-300"
              />
            </div>

            <p className="max-w-md sm:max-w-lg mx-auto lg:mx-0 text-base sm:text-lg text-gray-600 dark:text-white/60 leading-relaxed">
              Estetik dizayn va zamonaviy texnologiyalarni birlashtirib, 
              foydalanuvchilar xotirasida qoladigan interfeyslar yarataman.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href="#projects"
                className="group px-9 sm:px-11 py-4 text-base sm:text-lg font-semibold bg-gray-900 text-white dark:bg-white dark:text-black rounded-2xl hover:bg-gray-800 dark:hover:bg-white/90 active:scale-[0.97] transition-all flex items-center justify-center gap-3"
              >
                Loyihalarni ko‘rish
                <span className="group-hover:translate-x-1 transition">→</span>
              </a>

              <a
                href="#contact"
                className="px-9 sm:px-11 py-4 text-base sm:text-lg font-semibold border border-gray-300 dark:border-white/30 hover:border-gray-400 dark:hover:border-white/60 text-gray-700 dark:text-white rounded-2xl transition-all active:scale-[0.97]"
              >
                Bog‘lanish
              </a>
            </div>
          </div>

          {/* RIGHT - Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[300px] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[460px]">
              <div className="absolute -inset-8 lg:-inset-10 bg-gradient-to-br from-fuchsia-500 via-purple-500 to-cyan-500 opacity-20 dark:opacity-30 blur-[70px] lg:blur-[100px] rounded-[50px]" />

              <div className="relative p-[3px] bg-gradient-to-br from-fuchsia-400 via-purple-400 to-cyan-400 rounded-[34px]">
                <div className="rounded-[30px] bg-white dark:bg-[#0a0a0f] overflow-hidden border border-gray-100 dark:border-white/10 shadow-2xl">
                  <img
                    src="https://www.zdnet.com/a/img/resize/4da45d0784f82cc687079eb6f2349f152dbe2466/2019/08/19/4a663776-f4a9-4f89-9bee-2d07ee052f5b/istock-1147195672-11.jpg?auto=webp&fit=crop&height=1200&width=1200"
                    alt="Nurmuhammad"
                    className="w-full aspect-[4/5] object-cover grayscale-[0.6] hover:grayscale-0 transition-all duration-700"
                  />

                  <div className="absolute bottom-6 left-6 px-5 py-2 bg-black/70 dark:bg-black/70 backdrop-blur-md rounded-2xl text-xs tracking-widest text-white/80 border border-white/10">
                    DIGITAL CREATOR • 2026
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}