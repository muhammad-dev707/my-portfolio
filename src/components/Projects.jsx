import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Layers, ArrowRight } from 'lucide-react';
import { projects, projectCategories } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section
      id="projects"
      className="relative py-28 bg-[#101019] border-t border-white/5 w-full overflow-hidden"
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#8B5CF6]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141420] border border-[#8B5CF6]/30 text-[#C4B5FD] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>Portfolio Showcase</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-display">
              Selected{' '}
              <span className="bg-gradient-to-r from-white via-[#C4B5FD] to-[#8B5CF6] bg-clip-text text-transparent">
                Works.
              </span>
            </h2>

            <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
              Explore real-world web applications and digital interfaces built with performance, usability, and clean code at their foundation.
            </p>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#141420] border border-white/5 self-start md:self-end">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white shadow-[0_0_20px_rgba(139,92,246,0.35)]'
                    : 'text-[#A1A1AA] hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* GitHub Repository CTA Footer */}
        <div className="mt-16 p-8 rounded-3xl bg-[#141420] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white font-display">
              Looking for more code repositories?
            </h3>
            <p className="text-xs text-[#A1A1AA]">
              Inspect commit histories, open-source work, and experiment repositories directly on GitHub.
            </p>
          </div>

          <a
            href="https://github.com/muhammad-dev707"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-6 py-3 rounded-xl text-xs font-bold bg-[#101019] hover:bg-white/10 text-white border border-white/10 hover:border-[#8B5CF6]/50 flex items-center gap-2 transition-all shadow-md shrink-0"
          >
            <span>Visit github.com/muhammad-dev707</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C4B5FD] transition-transform group-hover:translate-x-1" />
          </a>
        </div>

      </div>
    </section>
  );
}
