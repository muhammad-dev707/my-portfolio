import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 overflow-hidden bg-[#0a0a0f]"
    >
      {/* Yangi kuchliroq background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:60px_60px]" />

        {/* Dynamic radial gradients */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(120,119,198,0.18),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.15),transparent_55%)]" />
        <div className="absolute bottom-0 left-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_90%,rgba(139,92,246,0.12),transparent_60%)]" />

        {/* Soft vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0f]/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mb-24">
          <span className="inline-block mb-6 text-xs tracking-[0.4em] uppercase text-white/50 font-medium">
            Selected work
          </span>

          <h2 className="text-5xl md:text-7xl font-bold leading-none text-white">
            Tanlangan <br />
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              loyihalar
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-lg text-white/70">
            Har bir loyiha — muammo yechimi, toza kod, muvozanatli dizayn va 
            noyob tajriba.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative transition-all duration-500 hover:-translate-y-4"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}