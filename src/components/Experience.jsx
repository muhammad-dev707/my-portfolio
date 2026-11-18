import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      period: '2024 — Hozirgacha',
      active: true,
      role: 'Frontend Freelance Muhandisi',
      type: 'Masofaviy & Freelance',
      description:
        'Mustaqil mijozlar va startaplar uchun yuqori darajadagi veb-ilovalar, landing pagelar va murakkab boshqaruv panellarini (CRM/Dashboard) yaratish.',
      achievements: [
        'React 18, Vite va Tailwind CSS yordamida tezkor arxitektura tuzish',
        'Firebase va REST API orqali autentifikatsiya va real vaqt ma\'lumotlar bazasini ulash',
        'Figma dizaynlarini 1:1 pixel-perfect formatda to\'liq responsiv kodga aylantirish'
      ],
      technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Firebase', 'Framer Motion']
    },
    {
      period: '2023 — 2024',
      active: false,
      role: 'Junior Frontend Dasturchi',
      type: 'Loyihaviy Amaliyot',
      description:
        'Interaktiv veb-saytlar va SPA loyihalar ishlab chiqish. Komponentli arxitektura, holatni boshqarish (state management) va responsive qoidalarini amalda qo\'llash.',
      achievements: [
        '10 dan ortiq biznes veb-saytlari va landing sahifalarni muvaffaqiyatli ishga tushirish',
        'Saytlarning mobil qurilmalar va turli brauzerlarda to\'g\'ri ishlashini ta\'minlash',
        'GitHub orqali versiyalarni boshqarish va jamoa bilan hamkorlik qilish'
      ],
      technologies: ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'REST API', 'Git & GitHub']
    },
    {
      period: '2022 — 2023',
      active: false,
      role: 'Self-Taught Dasturchi & Tadqiqotchi',
      type: 'Ta\'lim & Tajriba',
      description:
        'Dasturlash asoslarini mustaqil va chuqur o\'rganish, dastlabki loyihalar ustida tajriba orttirish va veb-standartlarni o\'zlashtirish.',
      achievements: [
        'HTML5, CSS3, zamonaviy JavaScript (DOM, Async/Await) asoslarini mukammal o\'rganish',
        'Algoritmlar, ma\'lumotlar tuzilmasi va Clean Code tamoyillari bo\'yicha bilim olish',
        'Dastlabki mini-o\'yinlar va amaliy ilovalarni yaratish'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web', 'Git']
    },
  ];

  return (
    <section
      id="experience"
      className="relative py-28 bg-[#07090E] border-t border-white/5 w-full overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kasbiy Yo'l • Tajriba & Bosqichlar</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-display">
            Mening amaliy va{' '}
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-300 bg-clip-text text-transparent">
              ish tajribam
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base">
            O'z ustimda tinimsiz ishlash, yangi texnologiyalarni amaliyotda sinash va muvaffaqiyatli loyihalarni topshirish tarixi.
          </p>
        </div>

        {/* Timeline Component */}
        <div className="relative max-w-4xl">
          
          {/* Vertical Connecting Line */}
          <div className="absolute left-4 sm:left-8 top-3 bottom-3 w-[2px] bg-gradient-to-b from-indigo-500 via-violet-500/40 to-slate-800" />

          <div className="space-y-10 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-12 sm:pl-20 group">
                
                {/* Node Indicator */}
                <div className="absolute left-2 sm:left-6 top-1.5 -translate-x-1/2 flex items-center justify-center">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                    exp.active 
                      ? 'border-indigo-400 bg-[#07090E] shadow-[0_0_15px_rgba(99,102,241,0.6)]' 
                      : 'border-slate-700 bg-[#0F172A] group-hover:border-slate-500'
                  }`}>
                    <div className={`w-2 h-2 rounded-full ${exp.active ? 'bg-indigo-400 animate-ping' : 'bg-slate-600'}`} />
                  </div>
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-8 rounded-3xl bg-[#0F172A]/70 border border-white/10 group-hover:border-indigo-500/40 group-hover:bg-[#131D31] backdrop-blur-xl transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10 space-y-4">
                  
                  {/* Card Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-4">
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold font-mono ${
                        exp.active 
                          ? 'bg-indigo-500/15 border border-indigo-500/30 text-indigo-300' 
                          : 'bg-[#131D31] text-slate-400 border border-white/5'
                      }`}>
                        {exp.period}
                      </span>
                      {exp.active && (
                        <span className="flex items-center gap-1 text-[10px] font-bold text-indigo-400 uppercase">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span> Hozirgi bosqich
                        </span>
                      )}
                    </div>

                    <span className="text-xs font-medium text-slate-400">
                      {exp.type}
                    </span>
                  </div>

                  {/* Role Title */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-slate-300 text-sm mt-2 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  {/* Key Achievements */}
                  <div className="space-y-2 pt-2">
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Asosiy Natijalar:
                    </div>
                    {exp.achievements.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies Used */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {exp.technologies.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-[#0B0F19] text-slate-400 border border-white/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
