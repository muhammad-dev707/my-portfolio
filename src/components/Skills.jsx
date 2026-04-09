import React from 'react';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-32 
        bg-[#0a0a0f] 
        bg-gradient-to-b from-[#0a0a0f] via-[#1a1433] to-[#0a0a0f]"
    >
      {/* Container */}
      <div className="relative container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-24">
          <span className="inline-block mb-4 px-6 py-2 text-sm font-medium rounded-full 
            border border-violet-500/30 
            bg-white/5 backdrop-blur-xl
            text-violet-300 tracking-wider">
            🧠 Skills & Tools
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Texnologiyalar{' '}
            <span className="text-slate-400">bilan ishlayman</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="group relative rounded-3xl border border-white/10 
                bg-white/5 backdrop-blur-2xl p-8 
                transition-all duration-300 hover:-translate-y-3 hover:border-violet-500/50
                hover:shadow-2xl hover:shadow-violet-500/10"
            >
              <div className="relative z-10">

                <h3 className="font-semibold text-xl mb-6 text-center text-white">
                  {skill.name}
                </h3>

                {/* Progress Bar */}
                <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 
                    transition-all duration-1000 shadow-sm shadow-violet-500/50"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <p className="mt-4 text-center text-sm font-medium text-slate-400">
                  {skill.level}%
                </p>

              </div>

              {/* Subtle glow effect on hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/10 to-cyan-500/10 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}