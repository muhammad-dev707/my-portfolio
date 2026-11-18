import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ArrowRight, 
  MessageSquare,
  Sparkles,
  ExternalLink
} from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenAdmin }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ['hero', 'about', 'skills', 'projects', 'services', 'contact'];
      const scrollPos = window.scrollY + 220;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav
            className={`flex items-center justify-between px-5 sm:px-6 py-3 rounded-2xl transition-all duration-300 ${
              scrolled
                ? 'bg-[#101019]/85 backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.7)]'
                : 'bg-[#141420]/60 backdrop-blur-md border border-white/5 shadow-lg'
            }`}
          >
            {/* Logo Monogram */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick('#hero');
              }}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#141420] to-[#101019] border border-[#8B5CF6]/40 shadow-[0_0_20px_rgba(139,92,246,0.25)] group-hover:border-[#8B5CF6] group-hover:shadow-[0_0_25px_rgba(139,92,246,0.45)] transition-all duration-300">
                {/* Custom Geometric N Monogram */}
                <svg
                  className="w-5 h-5 text-[#8B5CF6] transition-transform duration-300 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 19V5l12 14V5" />
                </svg>
                {/* Micro accent dot */}
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#8B5CF6] shadow-[0_0_8px_#8B5CF6]" />
              </div>

              <div className="flex flex-col text-left">
                <span className="text-sm font-bold text-white tracking-tight font-display group-hover:text-[#C4B5FD] transition-colors">
                  Nurmuhammad
                </span>
                <span className="text-[10px] text-[#A1A1AA] font-medium tracking-wider uppercase">
                  Frontend Developer
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-1 bg-[#08080D]/60 p-1 rounded-xl border border-white/5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`relative px-4 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-200 ${
                      isActive
                        ? 'text-white'
                        : 'text-[#A1A1AA] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] shadow-[0_0_15px_rgba(139,92,246,0.4)] z-0"
                        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Desktop Right CTA: "Let's Talk" Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick('#contact');
                }}
                className="group relative inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] shadow-[0_0_25px_rgba(139,92,246,0.35)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] active:scale-95 transition-all duration-300"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-white/5 border border-white/10 text-white hover:border-[#8B5CF6]/50 active:scale-95 transition-all"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5 text-[#8B5CF6]" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>
      </header>

      {/* Elegant Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed inset-x-4 top-20 z-40 md:hidden rounded-2xl bg-[#101019]/95 border border-white/10 backdrop-blur-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.85)]"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive
                        ? 'bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white shadow-[0_0_20px_rgba(139,92,246,0.3)]'
                        : 'text-[#A1A1AA] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs opacity-50 font-mono">0{navLinks.indexOf(link) + 1}</span>
                  </a>
                );
              })}

              <div className="pt-3 border-t border-white/10 mt-2">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick('#contact');
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] shadow-lg shadow-[#8B5CF6]/30 active:scale-95 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Let's Talk</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
