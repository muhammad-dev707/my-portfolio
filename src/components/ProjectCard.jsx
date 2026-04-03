   
   import React from 'react';
   export default function ProjectCard({ project }) {
  return (
    <div className="group bg-background border border-border/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div className="flex gap-4">
            {project.live && project.live !== "#" && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="bg-primary text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-primary/90">
                Live Demo
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-700">
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
        <p className="text-foreground/70 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map(t => (
            <span key={t} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}