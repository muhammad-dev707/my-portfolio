import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left */}
        <p className="text-sm text-foreground/60">
          © {new Date().getFullYear()} Developer
        </p>

        {/* Center */}
        <a
          href="#hero"
          className="text-sm font-medium text-foreground/70 hover:text-foreground transition"
        >
          &lt;DEVELOPER /&gt;
        </a>

        {/* Right */}
        <p className="text-sm text-foreground/50">
          React · Tailwind · Vite
        </p>

      </div>
    </footer>
  );
}