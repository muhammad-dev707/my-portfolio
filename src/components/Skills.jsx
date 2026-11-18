import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles, 
  Layers, 
  CheckCircle2, 
  Code2, 
  Palette, 
  FileCode2, 
  Globe, 
  GitBranch, 
  Cpu, 
  Smartphone, 
  Server
} from 'lucide-react';
import { 
  FaReact, 
  FaHtml5, 
  FaCss3Alt, 
  FaJsSquare, 
  FaNodeJs, 
  FaGitAlt 
} from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { skills, skillCategories } from '../data/skills';

// Minimalist icon mapping
const getSkillIcon = (iconName) => {
  switch (iconName) {
    case 'React':
      return <FaReact className="w-6 h-6 text-[#8B5CF6]" />;
    case 'Tailwind':
      return <SiTailwindcss className="w-6 h-6 text-[#A78BFA]" />;
    case 'JavaScript':
      return <FaJsSquare className="w-6 h-6 text-[#F59E0B]" />;
    case 'HTML5':
      return <FaHtml5 className="w-6 h-6 text-[#EF4444]" />;
    case 'CSS3':
      return <FaCss3Alt className="w-6 h-6 text-[#3B82F6]" />;
    case 'Node':
      return <FaNodeJs className="w-6 h-6 text-[#10B981]" />;
    case 'Git':
      return <FaGitAlt className="w-6 h-6 text-[#F97316]" />;
    case 'API':
      return <Cpu className="w-6 h-6 text-[#C4B5FD]" />;
    case 'Responsive':
      return <Smartphone className="w-6 h-6 text-[#8B5CF6]" />;
    default:
      return <Code2 className="w-6 h-6 text-[#8B5CF6]" />;
  }
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter(s => s.categoryKey === activeCategory);

  return (
    <section
      id="skills"
      className="relative py-28 bg-[#08080D] border-t border-white/5 w-full overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#8B5CF6]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141420] border border-[#8B5CF6]/30 text-[#C4B5FD] text-xs font-semibold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
              <span>Technical Proficiency</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-display">
              Interactive{' '}
              <span className="bg-gradient-to-r from-white via-[#C4B5FD] to-[#8B5CF6] bg-clip-text text-transparent">
                Skills & Technologies.
              </span>
            </h2>

            <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
              Carefully organized toolset focused on building responsive, robust, and modern web applications.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#141420] border border-white/5 self-start md:self-end">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white shadow-[0_0_20px_rgba(139,92,246,0.35)]'
                    : 'text-[#A1A1AA] hover:text-white hover:bg-white/5'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative p-6 rounded-2xl bg-[#141420] border border-white/10 hover:border-[#8B5CF6]/40 shadow-lg hover:shadow-[0_10px_30px_rgba(139,92,246,0.15)] transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top Row: Minimal Icon + Category Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[#101019] border border-white/5 flex items-center justify-center group-hover:scale-110 group-hover:border-[#8B5CF6]/30 transition-all duration-300 shadow-sm">
                    {getSkillIcon(skill.icon)}
                  </div>

                  <span className="px-3 py-1 rounded-full bg-[#101019] border border-white/5 text-[11px] font-semibold text-[#A78BFA] group-hover:border-[#8B5CF6]/30 transition-colors">
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name & Tag */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-white group-hover:text-[#C4B5FD] transition-colors font-display">
                      {skill.name}
                    </h3>
                  </div>

                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Bottom Highlight Tag */}
                <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
                  <span className="text-[#A1A1AA] font-mono">{skill.tag}</span>
                  <span className="text-[#8B5CF6] font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Applied in Projects
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Technical Standard Bar */}
        <div className="mt-12 p-6 rounded-2xl bg-[#101019] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A1A1AA]">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6] animate-pulse" />
            <span>High engineering standards: Zero fake percentage bars, focus on production-ready quality.</span>
          </div>
          <span className="text-white font-medium">Semantic HTML • CSS Grid & Flexbox • Strict State Hygiene</span>
        </div>

      </div>
    </section>
  );
}
