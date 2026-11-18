import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  MapPin, 
  CheckCircle2, 
  Code2, 
  Laptop, 
  Layers, 
  ShieldCheck, 
  Send,
  Zap,
  Globe2,
  Cpu
} from 'lucide-react';

export default function About() {
  const corePrinciples = [
    {
      icon: Code2,
      title: "Clean, Maintainable Code",
      description: "Writing semantic, structured, and modular code that is easy to scale, maintain, and understand."
    },
    {
      icon: Laptop,
      title: "Intuitive Interfaces",
      description: "Translating complex design concepts into fluid, intuitive user experiences that delight users."
    },
    {
      icon: Zap,
      title: "Performance & Responsiveness",
      description: "Optimizing web applications to load rapidly and render flawlessly across all modern screen sizes."
    },
    {
      icon: Globe2,
      title: "Modern Web Standards",
      description: "Leveraging modern React workflows, Tailwind utility architecture, and REST API integration."
    }
  ];

  return (
    <section
      id="about"
      className="relative py-28 bg-[#101019] border-t border-white/5 w-full overflow-hidden"
    >
      {/* Background Ambient Accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#8B5CF6]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141420] border border-[#8B5CF6]/30 text-[#C4B5FD] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>About Me</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-display">
            Turning Ideas Into{' '}
            <span className="bg-gradient-to-r from-white via-[#C4B5FD] to-[#8B5CF6] bg-clip-text text-transparent">
              Digital Reality.
            </span>
          </h2>

          <p className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed">
            Crafting tailored web solutions with dedication to clean code, user-centric interfaces, and reliable engineering.
          </p>
        </div>

        {/* Main Content Grid: Story Card Left & Highlights Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Personal Narrative Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-8 rounded-3xl bg-[#141420] border border-white/10 shadow-[0_15px_35px_rgba(0,0,0,0.5)] space-y-6">
              
              {/* Profile Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8B5CF6]/20 to-[#101019] border border-[#8B5CF6]/40 flex items-center justify-center text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                    {/* Stylized N Monogram */}
                    <span className="text-xl font-black text-[#C4B5FD] font-display">N</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white font-display">
                      Nurmuhammad
                    </h3>
                    <p className="text-xs text-[#A1A1AA] flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
                      <span>Tashkent, Uzbekistan</span>
                    </p>
                  </div>
                </div>

                <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Open for Hire</span>
                </div>
              </div>

              {/* Exact Provided Story Text */}
              <div className="space-y-4 text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
                <p>
                  Hi, I'm <strong className="text-white font-semibold">Nurmuhammad</strong>, a passionate Frontend Developer from Tashkent, Uzbekistan. I enjoy transforming ideas and designs into beautiful, responsive, and user-friendly websites.
                </p>

                <p>
                  I focus on writing clean code, creating intuitive interfaces, and building digital experiences that work seamlessly across all devices.
                </p>

                <p>
                  I'm constantly learning, improving my skills, and exploring modern web technologies.
                </p>
              </div>

              {/* Authentic Highlights Matrix (No fake numbers or years) */}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
                <div className="p-3.5 rounded-xl bg-[#101019] border border-white/5">
                  <div className="text-xs text-[#A1A1AA]">Primary Specialization</div>
                  <div className="text-sm font-bold text-white mt-1">Frontend Development</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#101019] border border-white/5">
                  <div className="text-xs text-[#A1A1AA]">Location & Work</div>
                  <div className="text-sm font-bold text-[#C4B5FD] mt-1">Tashkent / Remote</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#101019] border border-white/5">
                  <div className="text-xs text-[#A1A1AA]">Core Stack</div>
                  <div className="text-sm font-bold text-white mt-1">React & Tailwind CSS</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#101019] border border-white/5">
                  <div className="text-xs text-[#A1A1AA]">Collaboration</div>
                  <div className="text-sm font-bold text-emerald-400 mt-1">Direct Communication</div>
                </div>
              </div>

              {/* Telegram Contact Quick Action */}
              <div className="pt-2">
                <a
                  href="https://t.me/developsystem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#C4B5FD] hover:text-white transition-colors"
                >
                  <Send className="w-3.5 h-3.5 text-[#8B5CF6]" />
                  <span>Chat directly via Telegram: @developsystem</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Key Principles & Technical Pillars */}
          <div className="lg:col-span-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {corePrinciples.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={index}
                    className="p-6 rounded-2xl bg-[#141420] border border-white/10 hover:border-[#8B5CF6]/40 transition-all duration-300 group shadow-lg"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#101019] border border-white/5 group-hover:border-[#8B5CF6]/40 flex items-center justify-center text-[#8B5CF6] group-hover:text-[#C4B5FD] group-hover:scale-105 transition-all duration-300 mb-4">
                      <IconComponent className="w-6 h-6" />
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-[#C4B5FD] transition-colors mb-2 font-display">
                      {item.title}
                    </h4>

                    <p className="text-xs text-[#A1A1AA] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Target Audience Value Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-[#141420] to-[#1B1B2C] border border-[#8B5CF6]/20 shadow-lg space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-[#C4B5FD] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#8B5CF6]" />
                <span>Ready to Partner With</span>
              </div>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Startups, small & medium businesses, educational centers, restaurants, personal brands, and international freelance clients needing reliable, high-end web development.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
