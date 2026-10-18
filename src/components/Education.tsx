import React from 'react';
import { GraduationCap, Award, BookOpen, MapPin, Calendar, Heart, Terminal } from 'lucide-react';
import { educationData, hobbiesAndInterests } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 md:py-28 border-t border-white/[0.06] bg-[#08090b]">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] font-mono-code text-amber-400/90 mb-3 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-amber-400" />
              <span>Academic Foundations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              Education & <span className="font-serif-editorial italic font-normal text-amber-200">Credentials</span>
            </h2>
          </div>
          <p className="text-xs font-mono-code text-neutral-400 max-w-sm">
            Formal degrees in Computer Applications with academic honors and competitive coding dedication.
          </p>
        </div>

        {/* Education 3-in-a-row or horizontal cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {educationData.map((edu, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-[#101115] border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono-code text-neutral-500 mb-3">
                  <span className="flex items-center gap-1.5 text-amber-400">
                    <GraduationCap className="w-3.5 h-3.5" />
                    <span>0{idx + 1}</span>
                  </span>
                  <span>{edu.period}</span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-amber-200 transition-colors mb-1">
                  {edu.degree}
                </h3>

                <div className="text-xs text-neutral-400 mb-4 flex items-center gap-1.5">
                  <span className="text-neutral-300 font-medium">{edu.institution}</span>
                  <span className="text-neutral-600" aria-hidden="true">·</span>
                  <span>{edu.location}</span>
                </div>

                <div className="mb-4 inline-block px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs font-mono-code text-amber-300">
                  {edu.score}
                </div>

                {edu.highlights && (
                  <ul className="space-y-1.5 text-xs text-neutral-400">
                    {edu.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-neutral-600 shrink-0 mt-1.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="pt-4 mt-6 border-t border-neutral-800/80 text-[11px] font-mono-code text-neutral-500 flex items-center justify-between">
                <span>Status:</span>
                <span className="text-neutral-300">{edu.status || 'Completed'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Hobbies and Core Technical Interests */}
        <div className="p-8 rounded-2xl bg-neutral-900/30 border border-neutral-800">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono-code text-amber-400/90 mb-4">
            <Heart className="w-3.5 h-3.5" />
            <span>Hobbies & Engineering Pursuits</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {hobbiesAndInterests.map((interest, iIdx) => (
              <div key={iIdx} className="space-y-1.5">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-amber-400" />
                  <span>{interest.title}</span>
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
