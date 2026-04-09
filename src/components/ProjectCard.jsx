import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <div
      className="group rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300
      bg-site-gradient dark:bg-site-gradient
        "
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden aspect-video">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* HOVER OVERLAY */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent
            opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4 sm:p-6"
        >
          <div className="flex gap-2 sm:gap-3 flex-wrap">
            {project.live && project.live !== '#' && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-white px-3 sm:px-4 py-1.5 sm:py-2
                  text-xs sm:text-sm rounded-lg hover:bg-primary/90 transition"
              >
                Live
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-3 sm:px-4 py-1.5 sm:py-2
                  text-xs sm:text-sm rounded-lg hover:bg-gray-700 transition dark:bg-gray-700 dark:hover:bg-gray-600"
              >
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4 sm:p-5 md:p-6">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-gray-100">
          {project.title}
        </h3>

        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2.5 sm:px-3 py-1 text-xs sm:text-sm 
                bg-primary/10 text-primary rounded-full dark:bg-primary/20 dark:text-primary"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}