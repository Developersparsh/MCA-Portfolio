import React, { useState } from 'react';
import { ArrowUpRight, FolderGit2, Sparkles, Layers, Terminal, ChevronRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Full-Stack', 'AI & Python', 'Backend & API', 'Algorithms'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-white/[0.06] bg-[#08090b]">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-[0.2em] font-mono-code text-amber-400/90 mb-3 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-amber-400" />
              <span>Selected Works & Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white text-balance">
              Featured <span className="font-serif-editorial italic font-normal text-amber-200">Projects</span>
            </h2>
          </div>

          {/* Interactive Filter Segmented Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-900/80 rounded-lg border border-neutral-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono-code rounded-md transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-neutral-950 font-semibold shadow-sm'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {filteredProjects.map((project, idx) => {
            const isFeatured = project.featured;
            return (
              <div
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`relative rounded-xl border border-neutral-800 bg-[#101115] p-6 sm:p-7 flex flex-col justify-between hover:border-neutral-600 transition-all duration-300 cursor-pointer group shadow-lg hover:shadow-black/60 ${
                  isFeatured ? 'lg:col-span-7' : 'lg:col-span-5'
                }`}
              >
                {/* Top Subtle Crosshair Corner */}
                <div className="absolute top-3 right-3 text-[10px] font-mono-code text-neutral-600 group-hover:text-amber-400 transition-colors">
                  0{idx + 1} // PRJ
                </div>

                <div>
                  {/* Category and Role */}
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono-code text-neutral-400 mb-3">
                    <span className="text-amber-400 font-medium">{project.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>Role: {project.role}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-neutral-500">{project.duration}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-200 transition-colors mb-2 flex items-center justify-between gap-3">
                    <span>{project.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-500 group-hover:text-amber-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs font-mono-code text-neutral-400 mb-4">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Highlights sample */}
                  <div className="space-y-1.5 mb-6">
                    {project.highlights.slice(0, 2).map((h, hIdx) => (
                      <div key={hIdx} className="text-xs text-neutral-400 flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-amber-400/80 shrink-0 mt-1.5" />
                        <span className="line-clamp-2">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer with Tech Stack and Action Link */}
                <div className="pt-4 border-t border-neutral-800/80 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-neutral-900 text-neutral-300 border border-neutral-800"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[10px] font-mono-code text-neutral-500 self-center">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-mono-code text-amber-400 group-hover:text-amber-300 flex items-center gap-1 font-medium">
                    <span>Inspect</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* GitHub Repository Callout Banner */}
        <div className="mt-12 p-6 rounded-xl border border-neutral-800 bg-neutral-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center text-white shrink-0">
              <FolderGit2 className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">More Repositories on GitHub</div>
              <div className="text-xs text-neutral-400">Review full source code, commit history, and algorithmic scripts.</div>
            </div>
          </div>
          <a
            href="https://github.com/Developersparsh"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 text-xs font-mono-code uppercase font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors flex items-center gap-1.5 shrink-0"
          >
            <span>Visit @Developersparsh</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
