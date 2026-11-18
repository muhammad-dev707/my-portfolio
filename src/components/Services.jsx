import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Layout, 
  Globe, 
  Code2, 
  Smartphone, 
  ArrowUpRight,
  CheckCircle2
} from 'lucide-react';
import { services } from '../data/services';

const getServiceIcon = (iconName) => {
  switch (iconName) {
    case 'Layout':
      return <Layout className="w-6 h-6 text-[#8B5CF6]" />;
    case 'Globe':
      return <Globe className="w-6 h-6 text-[#A78BFA]" />;
    case 'Code2':
      return <Code2 className="w-6 h-6 text-[#C4B5FD]" />;
    case 'Smartphone':
      return <Smartphone className="w-6 h-6 text-[#8B5CF6]" />;
    default:
      return <Code2 className="w-6 h-6 text-[#8B5CF6]" />;
  }
};

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-28 bg-[#08080D] border-t border-white/5 w-full overflow-hidden"
    >
      {/* Background Ambient Radial Glow */}
      <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-[#8B5CF6]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141420] border border-[#8B5CF6]/30 text-[#C4B5FD] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>Service Capabilities</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-display">
            What I Can{' '}
            <span className="bg-gradient-to-r from-white via-[#C4B5FD] to-[#8B5CF6] bg-clip-text text-transparent">
              Do For You.
            </span>
          </h2>

          <p className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed">
            Tailored engineering services designed to turn client concepts into high-converting, modern, and reliable digital experiences.
          </p>
        </div>

        {/* 4 Premium Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-[#141420] border border-white/10 hover:border-[#8B5CF6]/50 shadow-[0_15px_35px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_45px_rgba(139,92,246,0.18)] transition-all duration-500 flex flex-col justify-between"
            >
              <div>
                {/* Card Top Row: Step Number + Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#101019] border border-white/5 group-hover:border-[#8B5CF6]/40 flex items-center justify-center transition-all duration-300 group-hover:scale-105 shadow-inner">
                    {getServiceIcon(service.icon)}
                  </div>

                  <span className="text-3xl font-black text-white/10 group-hover:text-[#8B5CF6]/30 font-display transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-bold text-white group-hover:text-[#C4B5FD] transition-colors mb-2 font-display">
                  {service.title}
                </h3>

                {/* Primary Short Description */}
                <p className="text-sm font-medium text-[#C4B5FD]/90 mb-3">
                  {service.shortDescription}
                </p>

                {/* Detailed Description */}
                <p className="text-xs text-[#A1A1AA] leading-relaxed mb-6">
                  {service.detailedDescription}
                </p>

                {/* Key Features Bullet List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-[#A1A1AA]">
                      <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags & Action Link */}
              <div className="pt-6 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-semibold bg-[#101019] text-[#A1A1AA] border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8B5CF6] group-hover:text-white transition-colors"
                >
                  <span>Inquire Now</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#101019] border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-[#A1A1AA] text-center sm:text-left">
            Have a custom requirement or need an ongoing frontend contractor?
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-xl text-xs font-bold bg-[#8B5CF6]/15 hover:bg-[#8B5CF6]/25 text-[#C4B5FD] border border-[#8B5CF6]/30 transition-all shrink-0"
          >
            Discuss Custom Scope
          </a>
        </div>

      </div>
    </section>
  );
}
