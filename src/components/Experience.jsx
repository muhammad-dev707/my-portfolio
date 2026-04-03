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
      className="relative py-32 overflow-hidden bg-background"
    >
      {/* subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="mb-24">
          <span className="block mb-6 text-xs tracking-[0.35em] uppercase text-foreground/50">
            Experience
          </span>
          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Ish <br />
            <span className="text-foreground/60">tajribam</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-border/60 pl-10 space-y-20">
          {experiences.map((exp, i) => (
            <div key={i} className="relative">
              {/* Dot */}
              <span className="absolute -left-[11px] top-2 w-5 h-5 rounded-full bg-background border-2 border-primary" />

              <div className="bg-background/70 backdrop-blur-xl border border-border/50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
                <span className="text-sm text-primary font-semibold">
                  {exp.year}
                </span>

                <h3 className="text-2xl font-semibold mt-2 mb-3">
                  {exp.role}
                </h3>

                <p className="text-foreground/70 text-lg leading-relaxed">
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