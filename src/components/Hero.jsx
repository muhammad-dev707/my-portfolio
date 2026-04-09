import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center 
        pt-32 md:pt-36 lg:pt-40   // ← Bu yerda o'zgartirdim
        bg-[#0a0a0f] 
        bg-gradient-to-br from-[#0a0a0f] via-[#120d2b] to-[#0f172a]
        overflow-hidden z-10
      "
    >
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#4f46e520_0%,transparent_50%)]" />

      {/* CONTAINER */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 
          gap-10 sm:gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE - Text Content */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-7">
            
            {/* Badge */}
            <div className="inline-flex px-5 py-2.5 rounded-2xl border 
              border-violet-500/40 bg-white/5 backdrop-blur-2xl 
              text-xs tracking-[2px] font-medium text-violet-300">
              CREATIVE FRONTEND DEVELOPER
            </div>

            {/* Name */}
            <h1 className="font-black leading-none text-white">
              <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-[3.9rem]">
                Nurmuhammad
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem]
                bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 
                bg-clip-text text-transparent mt-1">
                Frontend
              </span>
            </h1>

            {/* Type Animation */}
            <div className="text-lg sm:text-xl md:text-2xl min-h-[2.8rem]">
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
                className="font-medium text-cyan-400 tracking-tight"
              />
            </div>

            {/* Description */}
            <p className="max-w-md mx-auto lg:mx-0 text-base text-slate-400 leading-relaxed">
              Estetik dizayn va zamonaviy texnologiyalarni birlashtirib,
              foydalanuvchilar xotirasida qoladigan interfeyslar yarataman.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
              <a
                href="#projects"
                className="group px-8 py-4 text-base font-semibold rounded-2xl
                  bg-gradient-to-r from-violet-600 to-fuchsia-600 
                  hover:from-violet-500 hover:to-fuchsia-500
                  text-white transition-all duration-300 
                  active:scale-95 shadow-xl shadow-violet-600/40
                  flex items-center justify-center gap-2"
              >
                Loyihalar
                <span className="group-hover:translate-x-1 transition">→</span>
              </a>

              <a
                href="#contact"
                className="px-8 py-4 text-base font-semibold rounded-2xl
                  border border-slate-600 hover:border-violet-400
                  text-slate-300 hover:text-white
                  hover:bg-white/5 backdrop-blur-sm
                  transition-all duration-300"
              >
                Bog‘lanish
              </a>
            </div>
          </div>

          {/* RIGHT SIDE - Image */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[440px]">
              <div className="rounded-3xl overflow-hidden 
                border border-white/10 shadow-2xl shadow-black/60 
                ring-1 ring-white/5">
                
                <img
                  src="https://www.zdnet.com/a/img/resize/4da45d0784f82cc687079eb6f2349f152dbe2466/2019/08/19/4a663776-f4a9-4f89-9bee-2d07ee052f5b/istock-1147195672-11.jpg?auto=webp&fit=crop&height=1200&width=1200"
                  alt="Nurmuhammad"
                  className="w-full aspect-[4/5] object-cover 
                    hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}