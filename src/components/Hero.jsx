import React from 'react';
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#0a0a0f] flex items-center"
    >
      {/* ===== BACKGROUND ===== */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-fuchsia-600/30 rounded-full blur-[160px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/30 rounded-full blur-[160px]" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 w-full">
        <div className="grid grid-cols-12 items-center gap-16">
          
          {/* ===== LEFT TEXT ===== */}
          <div className="col-span-12 lg:col-span-7">
            <span className="inline-block mb-6 px-4 py-2 rounded-full border border-white/20 text-xs tracking-widest text-white/70 backdrop-blur-md">
              CREATIVE FRONTEND · DIGITAL DESIGN
            </span>

            <h1 className="font-black leading-[0.95] text-white mb-8 max-w-[700px]">
              <span className="block text-[clamp(3rem,6vw,5.5rem)]">
                Nurmuhammad
              </span>
              <span className="block text-[clamp(2.5rem,5vw,4.5rem)] text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400">
                Frontend
              </span>
            </h1>

            <div className="text-xl md:text-2xl mb-8 text-white/80">
              <TypeAnimation
                sequence={[
                  'Interfaces with emotion',
                  1800,
                  'Experimental frontend',
                  1800,
                  'Digital experiences',
                  1800,
                ]}
                speed={60}
                repeat={Infinity}
                wrapper="span"
                className="font-semibold text-cyan-300"
              />
            </div>

            <p className="max-w-xl text-white/60 text-lg mb-12">
              Men estetikani texnologiya bilan birlashtirib,
              foydalanuvchi xotirasida qoladigan interfeyslar yarataman.
            </p>

            <div className="flex gap-10 items-center">
              <a
                href="#projects"
                className="relative group text-lg font-semibold text-white"
              >
                <span className="relative z-10">Loyihalar</span>
                <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-fuchsia-400 to-cyan-400 group-hover:h-full transition-all duration-300" />
              </a>

              <a
                href="#contact"
                className="text-lg font-semibold text-white/60 hover:text-white transition"
              >
                Aloqa →
              </a>
            </div>
          </div>

          {/* ===== RIGHT IMAGE ===== */}
          <div className="col-span-12 lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-cyan-500 blur-[120px] opacity-40" />

              <div className="relative p-[2px] rounded-[32px] bg-gradient-to-br from-fuchsia-400 via-purple-400 to-cyan-400">
                <div className="rounded-[30px] bg-black/40 backdrop-blur-xl border border-white/10 overflow-hidden group">
                  <img
                    src="https://www.zdnet.com/a/img/resize/4da45d0784f82cc687079eb6f2349f152dbe2466/2019/08/19/4a663776-f4a9-4f89-9bee-2d07ee052f5b/istock-1147195672-11.jpg?auto=webp&fit=crop&height=1200&width=1200"
                    alt="Nurmuhammad"
                    className="w-[360px] h-[460px] object-cover grayscale group-hover:grayscale-0 transition duration-700"
                  />

                  <span className="absolute bottom-5 left-5 text-xs tracking-widest text-white/70">
                    DIGITAL CREATOR
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}