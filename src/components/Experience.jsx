import React from 'react';

export default function Experience() {
  const experiences = [
    {
      year: '2024 – Hozirgacha',
      role: 'Frontend Freelancer',
      description:
        'Shaxsiy va kichik biznes loyihalari. React, Tailwind CSS va Firebase asosida zamonaviy interfeyslar yaratish.',
    },
    {
      year: '2023 – 2024',
      role: 'Junior Web Developer',
      description:
        'Landing page va SPA loyihalar. UI/UX asoslari, responsive dizayn va komponentli arxitektura.',
    },
    {
      year: '2022 – 2023',
      role: 'Self-taught Developer',
      description:
        'Frontend asoslarini mustaqil o‘rganish: HTML, CSS, JavaScript, React va Tailwind CSS.',
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-32 
        bg-[#0a0a0f] 
        bg-gradient-to-b from-[#0a0a0f] via-[#1a1433] to-[#0a0a0f]"
    >
      {/* Container */}
      <div className="relative container mx-auto px-6">

        {/* Header */}
        <div className="mb-24 text-center md:text-left">
          <span className="block mb-6 text-xs tracking-[0.35em] uppercase 
            text-violet-400 font-medium">
            Experience
          </span>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white">
            Ish <br />
            <span className="text-slate-400">tajribam</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-white/10 pl-10 space-y-20">
          {experiences.map((exp, i) => (
            <div key={i} className="relative group">

              {/* Timeline Dot */}
              <span className="absolute -left-[11px] top-2 w-5 h-5 rounded-full 
                bg-[#0a0a0f] border-4 border-violet-500 
                group-hover:border-fuchsia-400 transition-colors" />

              {/* Card */}
              <div className="bg-white/5 backdrop-blur-2xl border border-white/10 
                rounded-3xl p-8 shadow-xl transition-all duration-300 
                hover:border-violet-500/50 hover:-translate-y-1 
                hover:shadow-2xl hover:shadow-violet-500/10">

                <span className="text-sm font-medium text-violet-300 tracking-wide">
                  {exp.year}
                </span>

                <h3 className="text-2xl font-semibold mt-3 mb-4 text-white">
                  {exp.role}
                </h3>

                <p className="text-slate-400 text-[17px] leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}