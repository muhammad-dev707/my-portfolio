import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-[#f8f6f2]">
      
      {/* subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-10 left-1/3 w-[300px] h-[300px] bg-[#eae6df] rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Left */}
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Developer
        </p>

        {/* Center */}
        <a
          href="#hero"
          className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition"
        >
          &lt;DEVELOPER /&gt;
        </a>

        {/* Right */}
        <p className="text-sm text-gray-500">
          React · Tailwind · Vite
        </p>

      </div>
    </footer>
  );
}