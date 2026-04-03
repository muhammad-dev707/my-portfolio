import React from 'react';
import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-28 overflow-hidden bg-background"
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/3 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-primary/10 text-primary">
            🧠 Skills & Tools
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">
            Texnologiyalar <span className="text-foreground/60">bilan ishlayman</span>
          </h2>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-border/50 bg-background/70 backdrop-blur-xl p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/0 via-primary/20 to-accent/20 opacity-0 blur-xl transition group-hover:opacity-100" />

              <div className="relative z-10">
                <h3 className="font-semibold text-lg mb-4 text-center">
                  {skill.name}
                </h3>

                {/* Progress */}
                <div className="w-full h-2 rounded-full bg-muted/30 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <p className="mt-3 text-sm text-center text-foreground/60">
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