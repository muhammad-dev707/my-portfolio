import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Send, 
  Sparkles, 
  Terminal, 
  Code2, 
  Layers, 
  Smartphone, 
  Zap, 
  Check, 
  Copy,
  ExternalLink
} from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('developer');

  const handleCopyTelegram = () => {
    navigator.clipboard.writeText('@developsystem');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-32 pb-20 lg:pt-40 lg:pb-28 w-full bg-[#08080D] overflow-hidden"
    >
      {/* Ambient Radial Lights & Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top Center Subtle Purple Glow */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[550px] bg-[#8B5CF6]/12 rounded-full blur-[160px]" />
        
        {/* Bottom Left Subtle Secondary Glow */}
        <div className="absolute -bottom-24 -left-20 w-[550px] h-[550px] bg-[#6D28D9]/10 rounded-full blur-[170px]" />

        {/* Subtle geometric dot grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #FFFFFF 1px, transparent 0)`,
            backgroundSize: '36px 36px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, Bio & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Availability Indicator Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#141420]/80 border border-[#8B5CF6]/30 shadow-[0_0_20px_rgba(139,92,246,0.18)] backdrop-blur-md">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8B5CF6] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#8B5CF6]"></span>
              </span>
              <span className="text-xs font-semibold text-[#C4B5FD] tracking-wide">
                Available for Projects
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-black text-white tracking-tight leading-[1.08] font-display">
              Building Digital <br />
              <span className="bg-gradient-to-r from-white via-[#C4B5FD] to-[#8B5CF6] bg-clip-text text-transparent">
                Experiences
              </span>{' '}
              That Matter.
            </h1>

            {/* Animated Role Subtitle */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-lg sm:text-2xl font-semibold text-[#A1A1AA] min-h-[36px]">
              <span className="text-[#8B5CF6] font-mono font-bold">&gt;</span>
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  2200,
                  'React & Tailwind Specialist',
                  2200,
                  'High-Performance Web Builder',
                  2200,
                  'Responsive UI Craftsman',
                  2200,
                ]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
                className="bg-gradient-to-r from-[#FFFFFF] via-[#E4E4E7] to-[#A78BFA] bg-clip-text text-transparent"
              />
            </div>

            {/* Supporting Text */}
            <p className="max-w-xl mx-auto lg:mx-0 text-[#A1A1AA] text-base sm:text-lg leading-relaxed font-normal">
              I'm <span className="text-white font-medium">Nurmuhammad</span>, a Frontend Developer focused on building modern, responsive, and high-performance web experiences.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              {/* CTA 1: Explore My Work */}
              <a
                href="#projects"
                className="group relative px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] text-white shadow-[0_0_30px_rgba(139,92,246,0.35)] hover:shadow-[0_0_40px_rgba(139,92,246,0.55)] flex items-center gap-2.5 active:scale-95 transition-all duration-300"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              {/* CTA 2: Let's Work Together */}
              <a
                href="#contact"
                className="px-7 py-3.5 rounded-xl font-semibold text-sm bg-[#141420]/80 hover:bg-[#1B1B2C] text-white border border-white/10 hover:border-[#8B5CF6]/50 flex items-center gap-2 active:scale-95 transition-all duration-300 shadow-lg backdrop-blur-md"
              >
                <Send className="w-4 h-4 text-[#A78BFA]" />
                <span>Let's Work Together</span>
              </a>

              {/* Social Icon: GitHub */}
              <a
                href="https://github.com/muhammad-dev707"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#141420]/80 hover:bg-[#1B1B2C] text-[#A1A1AA] hover:text-white border border-white/10 hover:border-[#8B5CF6]/40 active:scale-95 transition-all duration-300 shadow-md"
                title="View GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>

              {/* Social Icon: Telegram */}
              <a
                href="https://t.me/developsystem"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-[#141420]/80 hover:bg-[#1B1B2C] text-[#A1A1AA] hover:text-[#C4B5FD] border border-white/10 hover:border-[#8B5CF6]/40 active:scale-95 transition-all duration-300 shadow-md"
                title="Connect on Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
            </div>

            {/* Quick Metrics / Credibility Banner */}
            <div className="grid grid-cols-3 gap-3 pt-6 border-t border-white/5 max-w-lg mx-auto lg:mx-0">
              <div className="p-3.5 rounded-xl bg-[#101019]/80 border border-white/5">
                <div className="text-xl font-black text-white font-display">Tashkent</div>
                <div className="text-[11px] text-[#A1A1AA] mt-0.5">Uzbekistan (UTC+5)</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#101019]/80 border border-white/5">
                <div className="text-xl font-black text-[#C4B5FD] font-display">Clean Code</div>
                <div className="text-[11px] text-[#A1A1AA] mt-0.5">Modern React & UI</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#101019]/80 border border-white/5">
                <div className="text-xl font-black text-white font-display">100%</div>
                <div className="text-[11px] text-[#A1A1AA] mt-0.5">Responsive Design</div>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Sophisticated Developer Showcase Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative w-full max-w-[420px]">
              
              {/* Purple Glow Halo behind card */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#8B5CF6]/30 via-[#7C3AED]/20 to-transparent rounded-3xl blur-2xl opacity-70 pointer-events-none" />

              {/* High-End IDE / Component Showcase Card */}
              <div className="relative rounded-2xl overflow-hidden bg-[#141420] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
                
                {/* Window Header */}
                <div className="px-4 py-3 bg-[#101019] border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#EF4444]/70 border border-[#EF4444]/30" />
                    <span className="w-3 h-3 rounded-full bg-[#F59E0B]/70 border border-[#F59E0B]/30" />
                    <span className="w-3 h-3 rounded-full bg-[#10B981]/70 border border-[#10B981]/30" />
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center gap-1 bg-[#08080D] p-1 rounded-lg border border-white/5 text-[11px] font-mono">
                    <button
                      type="button"
                      onClick={() => setActiveTab('developer')}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        activeTab === 'developer'
                          ? 'bg-[#141420] text-[#C4B5FD] font-semibold'
                          : 'text-[#A1A1AA] hover:text-white'
                      }`}
                    >
                      Developer.jsx
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('stack')}
                      className={`px-2.5 py-1 rounded transition-colors ${
                        activeTab === 'stack'
                          ? 'bg-[#141420] text-[#C4B5FD] font-semibold'
                          : 'text-[#A1A1AA] hover:text-white'
                      }`}
                    >
                      Stack.json
                    </button>
                  </div>

                  <span className="text-[10px] text-[#A1A1AA] font-mono hidden sm:inline">v2.0</span>
                </div>

                {/* Window Body: Interactive Code Display */}
                <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-[#E4E4E7]">
                  {activeTab === 'developer' ? (
                    <div className="space-y-1.5">
                      <div className="text-[#A1A1AA]">// Nurmuhammad — Frontend Developer</div>
                      <div>
                        <span className="text-[#A78BFA]">const</span>{' '}
                        <span className="text-white font-bold">developer</span> = &#123;
                      </div>
                      <div className="pl-4">
                        <span className="text-[#C4B5FD]">name:</span>{' '}
                        <span className="text-emerald-400">"Nurmuhammad"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-[#C4B5FD]">role:</span>{' '}
                        <span className="text-emerald-400">"Frontend Developer"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-[#C4B5FD]">location:</span>{' '}
                        <span className="text-emerald-400">"Tashkent, Uzbekistan"</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-[#C4B5FD]">focus:</span>{' '}
                        <span className="text-amber-300">["React", "Tailwind CSS", "UI/UX"]</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-[#C4B5FD]">availability:</span>{' '}
                        <span className="text-[#A78BFA]">true</span>,
                      </div>
                      <div className="pl-4">
                        <span className="text-[#C4B5FD]">craftsmanship:</span>{' '}
                        <span className="text-emerald-400">"Pixel-perfect & High-performance"</span>
                      </div>
                      <div>&#125;;</div>
                      <div className="pt-2 text-[#8B5CF6]">
                        <span className="text-[#A78BFA]">export default</span> developer;
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-1.5">
                      <div className="text-[#A1A1AA]">// Verified Tech Stack</div>
                      <div>&#123;</div>
                      <div className="pl-4">
                        <span className="text-[#C4B5FD]">"frontend":</span> [
                        <span className="text-emerald-400">"HTML5"</span>,{' '}
                        <span className="text-emerald-400">"CSS3"</span>,{' '}
                        <span className="text-emerald-400">"JavaScript"</span>,{' '}
                        <span className="text-emerald-400">"React.js"</span>,{' '}
                        <span className="text-emerald-400">"Tailwind CSS"</span>],
                      </div>
                      <div className="pl-4">
                        <span className="text-[#C4B5FD]">"additional":</span> [
                        <span className="text-emerald-400">"Node.js"</span>,{' '}
                        <span className="text-emerald-400">"Git"</span>,{' '}
                        <span className="text-emerald-400">"REST APIs"</span>,{' '}
                        <span className="text-emerald-400">"Responsive Design"</span>],
                      </div>
                      <div className="pl-4">
                        <span className="text-[#C4B5FD]">"performance":</span>{' '}
                        <span className="text-emerald-400">"Optimized & Fast"</span>
                      </div>
                      <div>&#125;</div>
                    </div>
                  )}
                </div>

                {/* Bottom Interactive Bar */}
                <div className="px-5 py-3.5 bg-[#101019] border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[11px] text-[#A1A1AA]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Telegram: @developsystem</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyTelegram}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#141420] hover:bg-white/10 text-[10px] text-white font-medium border border-white/10 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3 text-[#A78BFA]" />
                        <span>Copy Handle</span>
                      </>
                    )}
                  </button>
                </div>

              </div>

              {/* Floating Badge 1: Top Right */}
              <div className="absolute -top-5 -right-5 hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#141420]/90 border border-[#8B5CF6]/30 shadow-[0_10px_25px_rgba(0,0,0,0.6)] backdrop-blur-xl animate-float">
                <div className="w-8 h-8 rounded-xl bg-[#8B5CF6]/20 border border-[#8B5CF6]/30 flex items-center justify-center text-[#C4B5FD]">
                  <Zap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-[#A1A1AA] uppercase font-semibold">Speed & Polish</div>
                  <div className="text-xs font-bold text-white">High-Performance</div>
                </div>
              </div>

              {/* Floating Badge 2: Bottom Left */}
              <div className="absolute -bottom-5 -left-5 hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#141420]/90 border border-white/10 shadow-[0_10px_25px_rgba(0,0,0,0.6)] backdrop-blur-xl">
                <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#A78BFA]">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-[#A1A1AA] uppercase font-semibold">Adaptive UI</div>
                  <div className="text-xs font-bold text-white">Mobile-First</div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
