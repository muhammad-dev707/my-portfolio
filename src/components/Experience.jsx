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
      className="relative py-32 overflow-hidden bg-[#f8f6f2]"
    >
      {/* Soft Milk Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#eae6df] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-[#e6e1d9] rounded-full blur-[120px]" />
      </div>

      {/* subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-24">
          <span className="block mb-6 text-xs tracking-[0.35em] uppercase text-gray-500">
            Experience
          </span>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Ish <br />
            <span className="text-gray-500">tajribam</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-gray-300 pl-10 space-y-20">
          {experiences.map((exp, i) => (
            <div key={i} className="relative">
              
              {/* Dot */}
              <span className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-[#f8f6f2] border-2 border-gray-400" />

              <div className="bg-white/70 backdrop-blur-xl border border-gray-200 rounded-2xl p-8 shadow-md hover:shadow-xl transition">
                
                <span className="text-sm text-gray-600 font-semibold">
                  {exp.year}
                </span>

                <h3 className="text-2xl font-semibold mt-2 mb-3 text-gray-900">
                  {exp.role}
                </h3>

                <p className="text-gray-600 text-lg leading-relaxed">
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