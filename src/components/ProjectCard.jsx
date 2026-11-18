import React from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  Layers,
  Code
} from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';
import kimyoLocalImg from '../assets/kimyo.jpg';

export default function ProjectCard({ project }) {
  // If id is 1 (Kimyo Test Tizimi), prefer local high-res asset
  const imageSrc = project.id === 1 ? kimyoLocalImg : project.image;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-3xl bg-[#141420] border border-white/10 hover:border-[#8B5CF6]/50 shadow-[0_15px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_45px_rgba(139,92,246,0.2)] transition-all duration-500 flex flex-col overflow-hidden"
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-[#101019]">
        <img
          src={imageSrc}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />

        {/* Ambient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141420] via-transparent to-transparent opacity-90" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#101019]/90 backdrop-blur-md text-[#C4B5FD] border border-white/10">
            {project.category}
          </span>

          {project.isDemo ? (
            <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
              {project.demoBadge || 'Demo Concept'}
            </span>
          ) : (
            <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-[#8B5CF6]/20 text-[#C4B5FD] border border-[#8B5CF6]/30 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-[#8B5CF6]" />
              <span>Production Live</span>
            </span>
          )}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
        
        <div className="space-y-3">
          {/* Project Title */}
          <div>
            <h3 className="text-xl font-bold text-white group-hover:text-[#C4B5FD] transition-colors font-display flex items-center justify-between">
              <span>{project.title}</span>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#A1A1AA] hover:text-white transition-colors"
                title="Open Live Website"
              >
                <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </h3>
            {project.subtitle && (
              <p className="text-xs text-[#8B5CF6] font-medium mt-0.5">
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Short Description */}
          <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Key Feature Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <ul className="space-y-1.5 pt-2">
              {project.highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-[#A1A1AA]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Technologies List & Action CTAs */}
        <div className="pt-4 border-t border-white/5 space-y-4">
          
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-[11px] font-mono font-medium bg-[#101019] text-[#E4E4E7] border border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="grid grid-cols-2 gap-3 pt-1">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] hover:from-[#7C3AED] hover:to-[#6D28D9] flex items-center justify-center gap-2 shadow-md shadow-[#8B5CF6]/20 transition-all duration-200"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Live Demo</span>
            </a>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-[#A1A1AA] hover:text-white bg-[#101019] hover:bg-white/5 border border-white/10 flex items-center justify-center gap-2 transition-all duration-200"
            >
              <Github className="w-3.5 h-3.5" />
              <span>Source Code</span>
            </a>
          </div>

        </div>

      </div>
    </motion.article>
  );
}
