import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Process from '../components/Process';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Portfolio({ onOpenAdmin }) {
  return (
    <div className="min-h-screen bg-[#08080D] text-[#FFFFFF] w-full relative selection:bg-[#8B5CF6]/30 selection:text-white">
      {/* Sticky Top Navbar */}
      <Navbar onOpenAdmin={onOpenAdmin} />

      {/* Main Content Sections */}
      <main className="w-full overflow-hidden">
        {/* Section 4: Hero */}
        <Hero />

        {/* Section 5: About */}
        <About />

        {/* Section 6: Skills */}
        <Skills />

        {/* Section 7: Projects */}
        <Projects />

        {/* Section 8: Services */}
        <Services />

        {/* Section 9: Work Process */}
        <Process />

        {/* Section 10: Contact */}
        <Contact />
      </main>

      {/* Section 11: Footer */}
      <Footer onOpenAdmin={onOpenAdmin} />
    </div>
  );
}
