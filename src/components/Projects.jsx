import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 bg-site-gradient dark:bg-site-gradient"
    >
      {/* Container */}
      <div className="relative container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mb-24 text-center md:text-left">
          <span className="inline-block mb-6 text-xs tracking-[0.4em] uppercase text-gray-600 dark:text-gray-400 font-medium">
            Selected work
          </span>

          <h2 className="text-5xl md:text-7xl font-bold leading-none text-gray-900 dark:text-white">
            Tanlangan <br />
            <span className="bg-gradient-to-r from-violet-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              loyihalar
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-lg text-gray-700 dark:text-gray-300">
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