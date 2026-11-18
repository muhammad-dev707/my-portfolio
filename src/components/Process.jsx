import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Search, 
  PenTool, 
  Code2, 
  Rocket, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { workflowSteps } from '../data/process';

const getStepIcon = (index) => {
  switch (index) {
    case 0:
      return <Search className="w-5 h-5 text-[#8B5CF6]" />;
    case 1:
      return <PenTool className="w-5 h-5 text-[#A78BFA]" />;
    case 2:
      return <Code2 className="w-5 h-5 text-[#C4B5FD]" />;
    case 3:
      return <Rocket className="w-5 h-5 text-emerald-400" />;
    default:
      return <Code2 className="w-5 h-5 text-[#8B5CF6]" />;
  }
};

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-28 bg-[#101019] border-t border-white/5 w-full overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#8B5CF6]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141420] border border-[#8B5CF6]/30 text-[#C4B5FD] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>Workflow & Methodology</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-display">
            A Transparent,{' '}
            <span className="bg-gradient-to-r from-white via-[#C4B5FD] to-[#8B5CF6] bg-clip-text text-transparent">
              Four-Step Process.
            </span>
          </h2>

          <p className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed">
            From initial kickoff to deployment, every step is built around open communication, quality checks, and prompt delivery.
          </p>
        </div>

        {/* 4 Connected Cards / Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {workflowSteps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative p-7 rounded-3xl bg-[#141420] border border-white/10 hover:border-[#8B5CF6]/40 shadow-lg hover:shadow-[0_15px_30px_rgba(139,92,246,0.15)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step Header: Step Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#101019] border border-white/5 flex items-center justify-center group-hover:scale-105 group-hover:border-[#8B5CF6]/40 transition-all duration-300 shadow-sm">
                    {getStepIcon(index)}
                  </div>

                  <span className="text-3xl font-black text-white/10 group-hover:text-[#8B5CF6]/40 font-display transition-colors">
                    {item.step}
                  </span>
                </div>

                {/* Phase Tag */}
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-bold bg-[#101019] text-[#C4B5FD] border border-white/5 mb-3">
                  {item.phase}
                </span>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-[#C4B5FD] transition-colors mb-3 font-display">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#A1A1AA] leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              {/* Bullet Details */}
              <div className="pt-4 border-t border-white/5 space-y-2">
                {item.details.map((detail, dIndex) => (
                  <div key={dIndex} className="flex items-start gap-2 text-[11px] text-[#A1A1AA]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] mt-1 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}
