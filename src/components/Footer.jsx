import React from 'react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 
      bg-[#0a0a0f] 
      bg-gradient-to-t from-[#0a0a0f] via-[#1a1433] to-[#0a0a0f]
      overflow-hidden">

      {/* Subtle background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 left-1/4 w-[400px] h-[400px] 
          bg-violet-500/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 right-1/4 w-[350px] h-[350px] 
          bg-cyan-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 flex flex-col sm:flex-row 
        items-center justify-between gap-6 text-center sm:text-left">

        {/* Left - Copyright */}
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Nurmuhammad. Barcha huquqlar himoyalangan.
        </p>

        {/* Center - Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2 text-lg font-bold tracking-wider 
            text-white hover:text-violet-400 transition-colors duration-300"
        >
          <span className="text-violet-400">&lt;</span>
          DEV
          <span className="text-violet-400">/&gt;</span>
        </a>

        {/* Right - Tech Stack */}
        <div className="flex items-center gap-5 text-sm text-slate-400">
          <span>React</span>
          <span className="text-white/30">•</span>
          <span>Tailwind</span>
          <span className="text-white/30">•</span>
          <span>Vite</span>
        </div>

      </div>

      {/* Bottom thin line */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs text-slate-500 tracking-widest">
            CRAFTED WITH PASSION IN UZBEKISTAN
          </p>
        </div>
      </div>
    </footer>
  );
}