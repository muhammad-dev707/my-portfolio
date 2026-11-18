import React from 'react';
import { 
  ArrowUp, 
  Send, 
  Mail, 
  ShieldCheck,
  Heart
} from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

export default function Footer({ onOpenAdmin }) {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#08080D] border-t border-white/5 w-full overflow-hidden text-[#A1A1AA]">
      
      {/* Top Subtle Purple Border Glow Line */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-[#8B5CF6]/40 to-transparent" />

      {/* Ambient Radial Lighting */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-[#8B5CF6]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10 w-full">
        
        {/* Top Grid Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-white/5">
          
          {/* Col 1: Monogram Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <a
              href="#hero"
              className="inline-flex items-center gap-3 group cursor-pointer"
            >
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#141420] to-[#101019] border border-[#8B5CF6]/40 flex items-center justify-center text-[#8B5CF6] shadow-md shadow-[#8B5CF6]/20">
                <svg
                  className="w-4 h-4 text-[#8B5CF6]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 19V5l12 14V5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-white text-base tracking-tight font-display">
                  Nurmuhammad
                </span>
                <span className="text-[10px] text-[#A1A1AA] font-medium tracking-wider uppercase">
                  Frontend Developer
                </span>
              </div>
            </a>

            <p className="text-xs text-[#A1A1AA] max-w-sm leading-relaxed">
              Transforming concepts into high-performance, modern, and accessible web experiences for clients and startups worldwide.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href="https://t.me/developsystem"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#141420] border border-white/10 hover:border-[#8B5CF6]/50 flex items-center justify-center text-[#A1A1AA] hover:text-[#C4B5FD] transition-all"
                title="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>

              <a
                href="https://github.com/muhammad-dev707"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-[#141420] border border-white/10 hover:border-white/20 flex items-center justify-center text-[#A1A1AA] hover:text-white transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href="mailto:qudratovnurmuhammad404@gmail.com"
                className="w-9 h-9 rounded-xl bg-[#141420] border border-white/10 hover:border-[#8B5CF6]/50 flex items-center justify-center text-[#A1A1AA] hover:text-[#C4B5FD] transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Quick Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <a href="#hero" className="hover:text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#skills" className="hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#services" className="hover:text-white transition-colors">Services</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          {/* Col 3: Back to top & location info */}
          <div className="md:col-span-3 space-y-4 md:text-right flex flex-col md:items-end">
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-2xl bg-[#141420] border border-white/10 hover:border-[#8B5CF6]/50 flex items-center justify-center text-[#A1A1AA] hover:text-white shadow-md transition-all group cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 text-[#8B5CF6]" />
            </button>

            <div className="text-xs text-[#A1A1AA]">
              <span className="block font-semibold text-white">Tashkent, Uzbekistan</span>
              <span className="block text-[11px] mt-0.5">Available for Global Remote Work</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Subtle Admin trigger */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-[#A1A1AA]">
            Designed & Built by Nurmuhammad. © {currentYear} All rights reserved.
          </p>

          <div className="flex items-center gap-4 text-[11px] text-[#71717A]">
            <span>React.js • Tailwind CSS</span>
            {onOpenAdmin && (
              <button
                type="button"
                onClick={onOpenAdmin}
                className="hover:text-[#A1A1AA] transition-colors cursor-pointer flex items-center gap-1 opacity-40 hover:opacity-100"
                title="Admin Authentication Studio"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Admin Studio</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </footer>
  );
}
