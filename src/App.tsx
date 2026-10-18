import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { SkillsMatrix } from './components/SkillsMatrix';
import { Education } from './components/Education';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { InteractiveTerminal } from './components/InteractiveTerminal';

export default function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  // Smooth scroll progress bar at top of page
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleOpenContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#08090b] text-[#e2e8f0] flex flex-col font-sans selection:bg-amber-400/20 selection:text-amber-200 relative">
      {/* Top Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-amber-500 via-amber-300 to-emerald-400 origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Top 3-Zone Sticky Navbar */}
      <Navbar
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={handleOpenContact}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section with Split-screen & 3D Portrait Stage */}
        <Hero
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={handleOpenContact}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />

        {/* About & Engineering Philosophy */}
        <AboutSection />

        {/* Professional Experience & Leadership */}
        <Experience />

        {/* Featured Projects with Bento Grid & Filter Tabs */}
        <Projects />

        {/* Technical Skills Matrix */}
        <SkillsMatrix />

        {/* Academic Education, Certifications & Interests */}
        <Education />

        {/* Interactive Contact & Inquiry Channels */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating CLI Terminal Toggle Button */}
      <div className="fixed bottom-6 left-6 z-40">
        <button
          onClick={() => setIsTerminalOpen(!isTerminalOpen)}
          className="px-3.5 py-2 rounded-full bg-neutral-900/90 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700/80 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-mono-code transition-all active:scale-95 group"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <TerminalIcon className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline">CLI Terminal</span>
        </button>
      </div>

      {/* Interactive CLI Terminal Drawer */}
      <InteractiveTerminal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />

      {/* ATS Resume Viewer & Print Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
