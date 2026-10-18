import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, Terminal as TerminalIcon, Sparkles, Flame } from 'lucide-react';
import { SparshPortrait } from './SparshPortrait';
import { personalInfo, metrics } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  onOpenTerminal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenContact, onOpenTerminal }) => {
  const dynamicWords = [
    "Scalable MERN Architectures",
    "ForestGuard-AI Vision Systems",
    "Optimized MongoDB Indexing",
    "Java Data Structures & LeetCode"
  ];
  const [wordIdx, setWordIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIdx((prev) => (prev + 1) % dynamicWords.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="top" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden architectural-grid">
      {/* Background radial gradient mask */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(217,119,6,0.08),rgba(9,10,12,0.95))]" />

      {/* Floating subtle ambient particles */}
      <div className="absolute top-1/4 left-10 w-2 h-2 rounded-full bg-amber-400/30 blur-[1px] animate-pulse" />
      <div className="absolute top-1/3 right-16 w-3 h-3 rounded-full bg-cyan-400/20 blur-[1px] animate-bounce" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-emerald-400/20 blur-[1px] animate-pulse" style={{ animationDuration: '3s' }} />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8">
        {/* Topline Editorial Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-mono-code text-neutral-400 pb-8 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-neutral-300 font-medium tracking-wide">
              {personalInfo.availability}
            </span>
          </div>
          <div className="flex items-center gap-3 text-neutral-400">
            <span>{personalInfo.location}</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-500">{personalInfo.coordinates}</span>
          </div>
        </div>

        {/* 2-Column Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-10 pb-12">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Kicker with animated rotating specialization badge */}
            <div className="text-xs uppercase tracking-[0.2em] font-mono-code text-amber-400/90 mb-4 flex items-center gap-2">
              <span className="w-5 h-[1px] bg-amber-400/60" />
              <span>Engineering Focus //</span>
              <span className="text-neutral-200 transition-all duration-500 font-semibold">
                {dynamicWords[wordIdx]}
              </span>
            </div>

            {/* Oversized Headline with Editorial Serif Emphasis */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] mb-6 text-balance">
              Building scalable web systems. <br />
              <span className="font-serif-editorial font-normal italic text-amber-200">
                Driven by intelligence.
              </span>
            </h1>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-xl mb-8">
              Hi, I'm <strong className="font-semibold text-white">Sparsh Dixit</strong>. An aspiring AI Engineer and MERN-Stack Developer pursuing MCA at Chandigarh University, engineering intelligent vision systems like <strong className="text-amber-300 font-medium">ForestGuard-AI</strong> and optimized distributed backends.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="#projects"
                className="px-5 py-3 text-xs uppercase font-mono-code tracking-wider font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-all shadow-md shadow-amber-500/10 hover:shadow-amber-500/25 flex items-center gap-2 group active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform group-hover:translate-y-0.5" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 text-xs uppercase font-mono-code tracking-wider font-medium text-white bg-neutral-900 hover:bg-neutral-800 border border-neutral-700/80 hover:border-neutral-500 rounded-md transition-all flex items-center gap-2 active:scale-95"
              >
                <span>View Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400" />
              </button>

              {onOpenTerminal && (
                <button
                  onClick={onOpenTerminal}
                  className="px-4 py-3 text-xs uppercase font-mono-code tracking-wider text-emerald-400 bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-500/30 rounded-md transition-all flex items-center gap-2 active:scale-95"
                >
                  <TerminalIcon className="w-3.5 h-3.5" />
                  <span>Launch CLI</span>
                </button>
              )}
            </div>

            {/* Verified Social Channels & Direct Links */}
            <div className="flex items-center gap-6 pt-4 border-t border-white/[0.06] text-xs font-mono-code text-neutral-400 w-full">
              <span className="text-neutral-500">Connect:</span>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5 hover:underline underline-offset-4 decoration-amber-400/50"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#0a66c2]" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-2.5 h-2.5 text-neutral-600" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors flex items-center gap-1.5 hover:underline underline-offset-4 decoration-amber-400/50"
              >
                <Github className="w-3.5 h-3.5 text-neutral-200" />
                <span>GitHub</span>
                <ArrowUpRight className="w-2.5 h-2.5 text-neutral-600" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="hover:text-white transition-colors flex items-center gap-1.5 hover:underline underline-offset-4 decoration-amber-400/50"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>{personalInfo.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Animated Portrait Stage */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <SparshPortrait />
          </div>
        </div>

        {/* Full-Width Quantitative Metrics Strip below Split */}
        <div className="mt-8 pt-8 border-t border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {metrics.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-1 p-3 rounded-lg bg-neutral-900/20 border border-neutral-800/40 hover:border-neutral-700 transition-colors">
              <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-mono-code tabular-nums">
                {item.value}
              </span>
              <span className="text-xs font-semibold text-neutral-200 uppercase tracking-wide">
                {item.label}
              </span>
              <span className="text-[11px] text-neutral-500 leading-tight">
                {item.context}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
