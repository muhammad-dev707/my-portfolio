import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Send, 
  Mail, 
  MessageSquare, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ExternalLink,
  AlertCircle,
  Copy,
  Check,
  Globe2
} from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

export default function Contact() {
  const [name, setName] = useState('');
  const [contactHandle, setContactHandle] = useState('');
  const [projectType, setProjectType] = useState('Landing Page Development');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', text: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Real verified credentials from existing repository
  const TELEGRAM_TOKEN = "8455385482:AAGjIgkRksbWSBFeTo_gLZuh1TupgbpDk4Y";
  const CHAT_ID = 6653089120;
  const REAL_EMAIL = "qudratovnurmuhammad404@gmail.com";
  const REAL_TELEGRAM = "https://t.me/developsystem";
  const REAL_GITHUB = "https://github.com/muhammad-dev707";

  const projectOptions = [
    'Landing Page Development',
    'Website Development',
    'React Development',
    'Responsive Web Design',
    'Consultation & Other'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(REAL_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name.trim() || !contactHandle.trim() || !message.trim()) {
      setStatus({
        type: 'error',
        text: 'Please fill in all required fields before submitting.'
      });
      return;
    }

    setLoading(true);
    setStatus({ type: '', text: '' });

    try {
      const formattedText = `🚀 NEW PORTFOLIO INQUIRY:\n\n👤 Name: ${name}\n📱 Contact (Telegram/Email): ${contactHandle}\n📌 Project Type: ${projectType}\n\n💬 Message:\n${message}\n\n⏰ Timestamp: ${new Date().toLocaleString()}`;

      const res = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: CHAT_ID, text: formattedText }),
        }
      );

      const data = await res.json();

      if (data.ok) {
        setStatus({
          type: 'success',
          text: 'Thank you! Your message has been transmitted directly. I will get back to you shortly.'
        });
        setName('');
        setContactHandle('');
        setMessage('');
      } else {
        setStatus({
          type: 'error',
          text: 'Direct transmission encountered a network delay. Please reach out directly on Telegram @developsystem.'
        });
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus({
        type: 'error',
        text: 'Network error. Please reach out directly via Telegram @developsystem or email.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-28 bg-[#08080D] border-t border-white/5 w-full overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-[#8B5CF6]/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[550px] h-[550px] bg-[#6D28D9]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#141420] border border-[#8B5CF6]/30 text-[#C4B5FD] text-xs font-semibold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>Initiate Collaboration</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight font-display">
            Have a Project in{' '}
            <span className="bg-gradient-to-r from-white via-[#C4B5FD] to-[#8B5CF6] bg-clip-text text-transparent">
              Mind?
            </span>
          </h2>

          <p className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed">
            Let's build something meaningful together.
          </p>
        </div>

        {/* Grid: Direct Contact Links Left, Form Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Real Direct Contact Channels */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Telegram Primary Card */}
            <a
              href={REAL_TELEGRAM}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-3xl bg-[#141420] border border-white/10 hover:border-[#8B5CF6]/50 shadow-lg hover:shadow-[0_10px_30px_rgba(139,92,246,0.15)] transition-all duration-300 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#101019] border border-white/5 flex items-center justify-center text-[#8B5CF6] group-hover:scale-105 transition-transform">
                  <Send className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[#A1A1AA] font-medium">Primary Messaging Channel</div>
                  <div className="text-base font-bold text-white group-hover:text-[#C4B5FD] transition-colors">
                    @developsystem
                  </div>
                  <div className="text-[11px] text-[#A78BFA] font-medium mt-0.5">Quick responses on Telegram</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#A1A1AA] group-hover:text-white transition-colors" />
            </a>

            {/* Email Direct Card */}
            <div className="group p-6 rounded-3xl bg-[#141420] border border-white/10 hover:border-[#8B5CF6]/50 shadow-lg transition-all duration-300 flex items-center justify-between">
              <a
                href={`mailto:${REAL_EMAIL}`}
                className="flex items-center gap-4 flex-1 min-w-0"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#101019] border border-white/5 flex items-center justify-center text-[#A78BFA] group-hover:scale-105 transition-transform shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs text-[#A1A1AA] font-medium">Direct Email</div>
                  <div className="text-xs sm:text-sm font-bold text-white group-hover:text-[#C4B5FD] transition-colors truncate">
                    {REAL_EMAIL}
                  </div>
                </div>
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="p-2 rounded-xl bg-[#101019] text-[#A1A1AA] hover:text-white border border-white/5 ml-2 transition-colors shrink-0"
                title="Copy Email"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* GitHub Card */}
            <a
              href={REAL_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded-3xl bg-[#141420] border border-white/10 hover:border-white/25 shadow-lg transition-all duration-300 flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#101019] border border-white/5 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                  <Github className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-[#A1A1AA] font-medium">GitHub Profile</div>
                  <div className="text-base font-bold text-white group-hover:text-slate-200 transition-colors">
                    github.com/muhammad-dev707
                  </div>
                  <div className="text-[11px] text-[#A1A1AA] mt-0.5">Explore source code & commits</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#A1A1AA] group-hover:text-white transition-colors" />
            </a>

            {/* Location & Availability Note */}
            <div className="p-5 rounded-2xl bg-[#101019] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-[#C4B5FD]">
                <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>Based in Tashkent, Uzbekistan</span>
              </div>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Available for local Uzbek clients and international remote contracts. Provide your project vision, timeline, and goals for a quick technical turnaround.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-7 sm:p-8 rounded-3xl bg-[#141420] border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.7)] backdrop-blur-xl space-y-5"
            >
              <div>
                <h3 className="text-lg font-bold text-white font-display">Send a Project Inquiry</h3>
                <p className="text-xs text-[#A1A1AA] mt-1">
                  Transmits directly to Nurmuhammad's Telegram notification service.
                </p>
              </div>

              {/* Status Alert */}
              {status.text && (
                <div
                  className={`p-4 rounded-2xl text-xs font-medium flex items-start gap-2.5 ${
                    status.type === 'success'
                      ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400'
                      : 'bg-red-500/10 border border-red-500/30 text-red-400'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  ) : (
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  )}
                  <span>{status.text}</span>
                </div>
              )}

              {/* Project Type Selector */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-white">
                  I'm interested in:
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt}
                      onClick={() => setProjectType(opt)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        projectType === opt
                          ? 'bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white shadow-md shadow-[#8B5CF6]/30'
                          : 'bg-[#101019] text-[#A1A1AA] hover:text-white border border-white/5'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Two Column Inputs: Name & Contact info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-white">
                    Your Name <span className="text-[#8B5CF6]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alexander or Sardor"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#101019] border border-white/10 text-sm text-white placeholder-[#71717A] focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-white">
                    Telegram or Email <span className="text-[#8B5CF6]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="@username or name@domain.com"
                    value={contactHandle}
                    onChange={(e) => setContactHandle(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-[#101019] border border-white/10 text-sm text-white placeholder-[#71717A] focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all"
                  />
                </div>
              </div>

              {/* Project Details / Message Textarea */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-white">
                  Project Details <span className="text-[#8B5CF6]">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project, target audience, timeline, or any specific requirements..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-[#101019] border border-white/10 text-sm text-white placeholder-[#71717A] focus:outline-none focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 rounded-xl text-sm font-bold bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#6D28D9] hover:from-[#7C3AED] hover:to-[#6D28D9] text-white shadow-xl shadow-[#8B5CF6]/25 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50 transition-all cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{loading ? 'Sending Message...' : 'Send Message'}</span>
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
