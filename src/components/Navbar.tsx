import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, FileText, Mail } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08090b]/90 backdrop-blur-md border-b border-neutral-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5 border-b border-white/[0.04]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="text-base md:text-lg font-bold tracking-tight text-white hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 group flex items-center gap-2"
        >
          <span className="w-2 h-2 rounded-sm bg-amber-400 opacity-90 transition-transform group-hover:scale-125" />
          <span>Sparsh Dixit</span>
          <span className="hidden sm:inline-block text-xs font-normal text-neutral-500 font-mono-code ml-1">
            / MCA '28
          </span>
        </a>

        {/* Zone 2: 4-5 concise single-line nav links */}
        <nav className="hidden md:flex items-center gap-7 text-xs tracking-wide uppercase font-medium text-neutral-400 font-mono-code">
          <a
            href="#about"
            className="hover:text-white transition-colors hover:underline underline-offset-4 decoration-amber-400/50 whitespace-nowrap shrink-0"
          >
            About
          </a>
          <a
            href="#experience"
            className="hover:text-white transition-colors hover:underline underline-offset-4 decoration-amber-400/50 whitespace-nowrap shrink-0"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-white transition-colors hover:underline underline-offset-4 decoration-amber-400/50 whitespace-nowrap shrink-0"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:text-white transition-colors hover:underline underline-offset-4 decoration-amber-400/50 whitespace-nowrap shrink-0"
          >
            Skills
          </a>
          <a
            href="#education"
            className="hover:text-white transition-colors hover:underline underline-offset-4 decoration-amber-400/50 whitespace-nowrap shrink-0"
          >
            Education
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenResume}
            className="px-3.5 py-1.5 text-xs font-mono-code text-neutral-300 hover:text-white border border-neutral-700/80 hover:border-neutral-500 rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap shrink-0 bg-neutral-900/60"
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>Resume</span>
          </button>
          <button
            onClick={onOpenContact}
            className="px-4 py-2 text-xs font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-sm hover:shadow-amber-400/20 hover:shadow-md flex items-center gap-1.5 whitespace-nowrap shrink-0 active:scale-95"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenContact}
            className="px-3 py-1.5 text-xs font-semibold text-neutral-950 bg-amber-400 rounded-md"
          >
            Contact
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-400 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-neutral-800 bg-[#0b0c10]/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-3 font-mono-code text-xs uppercase tracking-wider">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-neutral-300 hover:text-amber-400"
          >
            About
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-neutral-300 hover:text-amber-400"
          >
            Experience
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-neutral-300 hover:text-amber-400"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-neutral-300 hover:text-amber-400"
          >
            Skills
          </a>
          <a
            href="#education"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 text-neutral-300 hover:text-amber-400"
          >
            Education
          </a>
          <div className="pt-2 border-t border-neutral-800 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="flex-1 py-2 text-center border border-neutral-700 rounded text-neutral-200"
            >
              Resume
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="flex-1 py-2 text-center bg-amber-400 text-neutral-950 font-semibold rounded"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
