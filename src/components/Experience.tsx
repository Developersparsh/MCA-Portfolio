import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, Layers, Users } from 'lucide-react';
import { experienceData } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 border-t border-white/[0.06] bg-[#090a0d]">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] font-mono-code text-amber-400/90 mb-3 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-amber-400" />
              <span>Professional Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              Experience & <span className="font-serif-editorial italic font-normal text-amber-200">Leadership</span>
            </h2>
          </div>
          <p className="text-xs font-mono-code text-neutral-400 max-w-sm">
            Hands-on software development internship and technical leadership delivering measurable backend velocity.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <div
              key={item.id}
              className="relative p-6 sm:p-8 rounded-xl bg-neutral-900/40 border border-neutral-800/90 hover:border-neutral-700 transition-all duration-300 group"
            >
              {/* Top Accent Crosshair */}
              <div className="absolute top-3 right-3 text-[10px] font-mono-code text-neutral-600 group-hover:text-amber-400/70 transition-colors">
                REF // 0{index + 1}
              </div>

              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <span className="text-xs font-mono-code px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20">
                      {item.type}
                    </span>
                    <h3 className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors">
                      {item.role}
                    </h3>
                  </div>
                  <div className="text-sm font-medium text-neutral-300 flex items-center gap-2">
                    <span className="text-amber-400 font-semibold">{item.company}</span>
                    <span className="text-neutral-600" aria-hidden="true">·</span>
                    <span className="text-neutral-400 text-xs flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-neutral-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono-code text-neutral-400 shrink-0 bg-neutral-950/60 px-3 py-1.5 rounded-md border border-neutral-800">
                  <Calendar className="w-3.5 h-3.5 text-amber-400" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-neutral-300 font-light mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* Detailed Bullet Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-6">
                {item.bullets.map((bullet, bIdx) => (
                  <div
                    key={bIdx}
                    className="p-3.5 rounded-lg bg-neutral-950/40 border border-neutral-800/60 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs text-neutral-300 leading-normal">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technology Tags (Clean unboxed style with subtle separators or refined chips) */}
              <div className="pt-4 border-t border-white/[0.04] flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono-code text-neutral-500 mr-2">
                  Stack:
                </span>
                {item.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs font-mono-code text-neutral-300 bg-neutral-800/60 px-2.5 py-1 rounded border border-neutral-700/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Impact Highlights Bar */}
        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-neutral-900/60 via-amber-950/10 to-neutral-900/60 border border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Backend Indexing & Performance Focus</div>
              <div className="text-xs text-neutral-400">Achieved 15% lower latency on production endpoints via optimized indexing.</div>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0 text-xs font-mono-code text-neutral-400">
            <span className="text-emerald-400 font-semibold">12+ APIs Deployed</span>
            <span className="text-neutral-700">|</span>
            <span>REST Protocol</span>
            <span className="text-neutral-700">|</span>
            <span>Zero-Downtime Migration</span>
          </div>
        </div>
      </div>
    </section>
  );
};
