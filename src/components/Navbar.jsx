import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

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
  const [darkMode, setDarkMode] = useState(false);

  // Dark mode init
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
    <nav className="fixed top-6 inset-x-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* MAIN BAR */}
        <div className="flex items-center justify-between rounded-2xl bg-background/70 backdrop-blur-xl border border-border/40 shadow-lg px-6 py-4">

          {/* LOGO */}
          <a
            href="#hero"
            className="relative text-xs font-semibold tracking-[0.35em] uppercase text-foreground/70 hover:text-foreground transition"
          >
            &lt;developer /&gt;
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-xs uppercase tracking-widest text-foreground/70 hover:text-foreground transition group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            {/* THEME TOGGLE */}
            <button
              onClick={toggleDark}
              className="p-2 rounded-full bg-muted/20 hover:bg-muted/40 transition"
              aria-label="Toggle theme"
            >
              {darkMode ? <FaSun size={14} /> : <FaMoon size={14} />}
            </button>
          </div>

          {/* MOBILE BUTTONS */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleDark}>
              {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="mt-4 rounded-2xl bg-background/90 backdrop-blur-xl border border-border/40 p-6 space-y-6 md:hidden shadow-xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm uppercase tracking-widest text-foreground/80 hover:text-primary transition"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}