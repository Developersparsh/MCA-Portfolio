import React from 'react';
import { Terminal, Cpu, Database, Compass, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      index: "01",
      title: "Full-Stack MERN Architecture",
      desc: "Architecting end-to-end web applications with clean separation of concerns, stateful React hooks, Express routing, and MongoDB schemas."
    },
    {
      index: "02",
      title: "AI Integration & Python Workflows",
      desc: "Developing intelligent pipelines using Python, NLP text processing, and REST microservices to transform raw data into actionable decision engines."
    },
    {
      index: "03",
      title: "Query Indexing & Latency Tuning",
      desc: "Hands-on experience profiling MongoDB and SQL queries, designing indexes, and eliminating bottlenecks for measurable 15%+ performance boosts."
    },
    {
      index: "04",
      title: "Algorithmic Precision in Java",
      desc: "Solid grasp of Object-Oriented Programming, memory management, and competitive data structures to write clean, predictable code."
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 border-t border-white/[0.06] bg-[#090a0d] relative">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] font-mono-code text-amber-400/90 mb-3 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-amber-400" />
              <span>Philosophy & Perspective</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              Engineering with purpose. <br />
              <span className="font-serif-editorial italic font-normal text-amber-200">
                Driven by continuous learning.
              </span>
            </h2>
          </div>
          <div className="text-xs font-mono-code text-neutral-400 max-w-xs">
            "Aspiring to pursue high-impact engineering roles where clean architecture and teamwork combine to solve real problems."
          </div>
        </div>

        {/* Narrative Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-6 space-y-4 text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
            <p>
              I am an aspiring AI Engineer and MERN-Stack Developer currently pursuing my Master of Computer Applications (MCA) at Chandigarh University, following a distinguished Bachelor of Computer Application (BCA) with 77.33% from DAMS CSJM University, Kanpur.
            </p>
            <p>
              During my internship at <strong className="font-semibold text-white">Codsoft</strong>, I designed and implemented 12+ RESTful APIs for internal tools and boosted server-side query performance by 15% through meticulous MongoDB indexing and execution analysis.
            </p>
            <p>
              Beyond day-to-day coding, I served as <strong className="font-semibold text-white">Technical Head</strong> for university symposia, leading a team of 15+ student developers and organizing competitive coding hackathons. I actively solve algorithmic challenges on LeetCode and contribute to open-source UI libraries.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar) => (
              <div
                key={pillar.index}
                className="p-5 rounded-xl bg-[#111216] border border-neutral-800 hover:border-neutral-700 transition-colors"
              >
                <div className="text-xs font-mono-code text-amber-400 font-bold mb-2">
                  {pillar.index} // PILLAR
                </div>
                <h3 className="text-sm font-bold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
