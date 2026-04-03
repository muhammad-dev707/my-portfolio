import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 overflow-hidden bg-[#f2f3f5]"
    >
      {/* Soft editorial background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(120,119,198,0.12),transparent_60%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_80%_60%,rgba(99,102,241,0.10),transparent_55%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mb-24">
          <span className="inline-block mb-6 text-xs tracking-[0.3em] uppercase text-foreground/50">
            Selected work
          </span>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight text-foreground">
            Tanlangan <br />
            <span className="text-foreground/60">
              loyihalar
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-foreground/70 text-lg">
            Har bir loyiha — muammo yechimi, toza kod va
            muvozanatli dizayn.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative transition-transform duration-300 hover:-translate-y-2"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}