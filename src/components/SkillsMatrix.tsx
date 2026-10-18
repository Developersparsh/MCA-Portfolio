import React, { useState } from 'react';
import { Code2, Globe, Database, Wrench, Award, CheckCircle, Terminal } from 'lucide-react';
import { skillCategories, certificationsData } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const icons = [
    <Code2 className="w-4 h-4" />,
    <Globe className="w-4 h-4" />,
    <Database className="w-4 h-4" />,
    <Wrench className="w-4 h-4" />,
    <Award className="w-4 h-4" />
  ];

  const currentCategory = skillCategories[activeCategoryIndex];

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-white/[0.06] bg-[#090a0d]">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] font-mono-code text-amber-400/90 mb-3 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-amber-400" />
              <span>Competency & Technology</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              Technical <span className="font-serif-editorial italic font-normal text-amber-200">Skills Matrix</span>
            </h2>
          </div>
          <p className="text-xs font-mono-code text-neutral-400 max-w-sm">
            Core full-stack foundations, object-oriented Java, Python data workflows, and modern web frameworks.
          </p>
        </div>

        {/* Tab Navigation for Skill Categories */}
        <div className="flex overflow-x-auto pb-2 gap-2 mb-8 scrollbar-none border-b border-neutral-800">
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-mono-code rounded-t-lg transition-all whitespace-nowrap shrink-0 border-b-2 -mb-[2px] ${
                activeCategoryIndex === idx
                  ? 'border-amber-400 text-amber-300 bg-neutral-900/60 font-semibold'
                  : 'border-transparent text-neutral-400 hover:text-white hover:bg-neutral-900/30'
              }`}
            >
              <span className={activeCategoryIndex === idx ? 'text-amber-400' : 'text-neutral-500'}>
                {icons[idx % icons.length]}
              </span>
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="mb-8 p-4 rounded-xl bg-neutral-900/30 border border-neutral-800/80 flex items-center justify-between gap-4">
          <div className="text-xs font-mono-code text-neutral-300 flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>{currentCategory.description}</span>
          </div>
          <span className="text-[11px] font-mono-code text-neutral-500 shrink-0 hidden sm:inline-block">
            {currentCategory.items.length} Tracked Core Competencies
          </span>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {currentCategory.items.map((skill, sIdx) => (
            <div
              key={skill.name}
              className="p-5 rounded-xl bg-[#111216] border border-neutral-800/80 hover:border-neutral-700 transition-colors group"
            >
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="text-sm font-semibold text-white group-hover:text-amber-200 transition-colors">
                  {skill.name}
                </span>
                <span className="text-xs font-mono-code text-amber-400/90 font-medium bg-amber-400/10 px-2 py-0.5 rounded border border-amber-400/20">
                  {skill.level}
                </span>
              </div>

              {/* Progress Bar & Proficiency */}
              <div className="mb-3.5">
                <div className="flex justify-between text-[11px] font-mono-code text-neutral-400 mb-1.5">
                  <span>Proficiency Benchmark</span>
                  <span className="text-neutral-300 tabular-nums">{skill.proficiency}%</span>
                </div>
                <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-amber-500 to-amber-300 rounded-full transition-all duration-700 ease-out"
                    style={{ width: `${skill.proficiency}%` }}
                  />
                </div>
              </div>

              {/* Skill Sub-tags */}
              <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-neutral-800/60">
                {skill.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[11px] font-mono-code text-neutral-400 bg-neutral-900/90 px-2 py-0.5 rounded border border-neutral-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Banner */}
        <div>
          <div className="text-xs uppercase tracking-[0.2em] font-mono-code text-amber-400/90 mb-4 flex items-center gap-2">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Certifications</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certificationsData.map((cert, cIdx) => {
              // Custom thematic styles based on user requirements
              let theme = {
                cardBg: 'bg-neutral-900/40 border-neutral-800 hover:border-neutral-700',
                issuerColor: 'text-amber-400',
                badgeText: 'Verified',
                badgeColor: 'text-neutral-500',
                tagBg: 'text-neutral-400 bg-neutral-950 border-neutral-800',
                glow: ''
              };

              if (cert.title.toLowerCase().includes('sas') || cert.issuer.includes('SAS')) {
                theme = {
                  cardBg: 'bg-gradient-to-b from-cyan-950/30 to-neutral-900/70 border-cyan-500/40 hover:border-cyan-400/80 shadow-lg shadow-cyan-950/20',
                  issuerColor: 'text-cyan-400',
                  badgeText: 'Enterprise AI',
                  badgeColor: 'text-cyan-400/90 bg-cyan-950/60 border border-cyan-800/40',
                  tagBg: 'text-cyan-300 bg-cyan-950/60 border-cyan-800/40',
                  glow: 'group-hover:text-cyan-200'
                };
              } else if (cert.title.toLowerCase().includes('python')) {
                // Udemy Purple styling
                theme = {
                  cardBg: 'bg-gradient-to-b from-purple-950/35 to-neutral-900/70 border-purple-500/40 hover:border-purple-400/80 shadow-lg shadow-purple-950/20',
                  issuerColor: 'text-purple-400',
                  badgeText: 'Udemy Certified',
                  badgeColor: 'text-purple-300 bg-purple-950/60 border border-purple-800/40',
                  tagBg: 'text-purple-300 bg-purple-950/60 border-purple-800/40',
                  glow: 'group-hover:text-purple-200'
                };
              } else if (cert.title.toLowerCase().includes('java')) {
                // Java Orange/Red styling
                theme = {
                  cardBg: 'bg-gradient-to-b from-orange-950/35 to-neutral-900/70 border-orange-500/40 hover:border-orange-400/80 shadow-lg shadow-orange-950/20',
                  issuerColor: 'text-orange-400',
                  badgeText: 'Core & Advanced',
                  badgeColor: 'text-orange-300 bg-orange-950/60 border border-orange-800/40',
                  tagBg: 'text-orange-300 bg-orange-950/60 border-orange-800/40',
                  glow: 'group-hover:text-orange-200'
                };
              } else if (cert.title.toLowerCase().includes('full-stack') || cert.title.toLowerCase().includes('bootcamp')) {
                // Full Stack Web Development Emerald styling
                theme = {
                  cardBg: 'bg-gradient-to-b from-emerald-950/35 to-neutral-900/70 border-emerald-500/40 hover:border-emerald-400/80 shadow-lg shadow-emerald-950/20',
                  issuerColor: 'text-emerald-400',
                  badgeText: 'Full-Stack MERN',
                  badgeColor: 'text-emerald-300 bg-emerald-950/60 border border-emerald-800/40',
                  tagBg: 'text-emerald-300 bg-emerald-950/60 border-emerald-800/40',
                  glow: 'group-hover:text-emerald-200'
                };
              }

              return (
                <div
                  key={cIdx}
                  className={`p-4 rounded-xl border transition-all duration-300 flex flex-col justify-between group ${theme.cardBg}`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono-code mb-2">
                      <span className={`font-semibold ${theme.issuerColor}`}>
                        {cert.issuer}
                      </span>
                      <span className={`text-[10px] px-2 py-0.5 rounded font-mono-code ${theme.badgeColor}`}>
                        {theme.badgeText}
                      </span>
                    </div>
                    <h4 className={`text-sm font-semibold text-white mb-3 transition-colors ${theme.glow || 'group-hover:text-amber-200'}`}>
                      {cert.title}
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/[0.06]">
                    {cert.skills.map((s, sIdx) => (
                      <span
                        key={sIdx}
                        className={`text-[10px] font-mono-code px-1.5 py-0.5 rounded border ${theme.tagBg}`}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
