import React from 'react';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 overflow-hidden bg-[#f8f6f2]"
    >
      {/* Soft milk background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-[#eae6df] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-[#e6e1d9] rounded-full blur-[120px]" />
      </div>

      {/* subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-24">
          <span className="inline-block mb-4 px-5 py-1.5 text-sm rounded-full bg-[#e7e3dc] text-gray-700">
            🧠 Skills & Tools
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Texnologiyalar{' '}
            <span className="text-gray-500">bilan ishlayman</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-gray-200 bg-white/70 backdrop-blur-xl p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* soft glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#d6d1c7]/0 via-[#d6d1c7]/30 to-[#cfc9be]/30 opacity-0 blur-xl transition group-hover:opacity-100" />

              <div className="relative z-10">
                
                <h3 className="font-semibold text-lg mb-4 text-center text-gray-900">
                  {skill.name}
                </h3>

                {/* Progress */}
                <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-gray-700 to-gray-400 transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <p className="mt-3 text-sm text-center text-gray-600">
                  {skill.level}%
                </p>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}