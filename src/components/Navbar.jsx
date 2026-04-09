import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode') === 'true';
    setDarkMode(saved);
    document.documentElement.classList.toggle('dark', saved);
  }, []);

  const toggleDark = () => {
    const value = !darkMode;
    setDarkMode(value);
    document.documentElement.classList.toggle('dark', value);
    localStorage.setItem('darkMode', value);
  };

  return (
    <nav className="fixed inset-x-0 top-4 z-50 px-4">
      <div className="max-w-7xl mx-auto">

        {/* ==================== MAIN NAVBAR ==================== */}
        <div className="flex items-center justify-between px-6 py-4 
          bg-[#0f0f1a]/95 backdrop-blur-2xl 
          border border-violet-500/30 rounded-3xl 
          shadow-2xl shadow-black/50">

          {/* LOGO */}
          <a
            href="#hero"
            className="text-xl font-bold tracking-widest text-white flex items-center gap-1.5 
              hover:text-violet-300 transition-colors"
          >
            &lt;<span className="text-violet-400">DEV</span> /&gt;
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium uppercase tracking-[1.5px] 
                  text-slate-300 hover:text-white transition-all duration-300 group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r 
                  from-violet-400 to-cyan-400 group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            {/* Dark Mode Toggle (Desktop) */}
            <button
              onClick={toggleDark}
              className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 
                text-slate-300 hover:text-white border border-white/10 
                transition-all active:scale-95"
              aria-label="Toggle theme"
            >
              {darkMode ? <FaSun size={19} /> : <FaMoon size={19} />}
            </button>
          </div>

          {/* MOBILE RIGHT SIDE */}
          <div className="md:hidden flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDark}
              className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 
                text-slate-300 hover:text-white border border-white/10 
                transition-all active:scale-95"
              aria-label="Toggle theme"
            >
              {darkMode ? <FaSun size={19} /> : <FaMoon size={19} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 
                text-slate-300 hover:text-white border border-white/10 
                transition-all active:scale-95"
              aria-label="Toggle menu"
            >
              {isOpen ? <FaTimes size={21} /> : <FaBars size={21} />}
            </button>
          </div>
        </div>

        {/* ==================== MOBILE MENU ==================== */}
        {isOpen && (
          <div className="md:hidden mt-3 px-1">
            <div className="bg-[#0f0f1a]/95 backdrop-blur-2xl border border-violet-500/30 
              rounded-3xl py-6 px-4 shadow-2xl shadow-black/60">
              
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-4 text-base font-medium text-slate-200 
                      hover:text-white hover:bg-violet-500/10 rounded-2xl 
                      transition-all active:bg-violet-500/20"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="mt-6 w-full py-3.5 text-sm font-medium tracking-widest 
                  text-slate-400 hover:text-white border border-white/10 
                  rounded-2xl hover:border-violet-400/50 transition-all"
              >
                YOPISH
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}