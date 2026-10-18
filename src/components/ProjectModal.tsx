import React, { useEffect, useState } from 'react';
import { X, Github, ExternalLink, Layers, CheckCircle2, Terminal, Code, Play, ShieldAlert, Activity, Flame } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [simulationRunning, setSimulationRunning] = useState(false);
  const [simulationResult, setSimulationResult] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setSimulationResult(null);
      setSimulationRunning(false);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const runSimulation = () => {
    setSimulationRunning(true);
    setSimulationResult("Ingesting real-time multispectral sensor feed...");
    setTimeout(() => {
      setSimulationResult("Thermal anomaly identified at Sector 4-Alpha (26.4499° N, 80.3319° E) | Confidence: 94.6% | Automated dispatch sent to local response team via Webhook (Latency: 140ms).");
      setSimulationRunning(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#111216] border border-neutral-700/80 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden text-neutral-200">
        {/* Top corner crosshair accents */}
        <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-amber-400" />
        <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-amber-400" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-neutral-800/80 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10 mb-6">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono-code text-neutral-400 mb-2">
            <span className="text-amber-400 font-semibold">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>Role: {project.role}</span>
            <span aria-hidden="true">·</span>
            <span>{project.duration}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-sm text-neutral-400 font-light">
            {project.subtitle}
          </p>
        </div>

        {/* Interactive Simulator for ForestGuard-AI */}
        {project.id === 'forestguard-ai' && (
          <div className="mb-6 p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs uppercase font-mono-code tracking-wider text-emerald-300 font-semibold flex items-center gap-2">
                <Flame className="w-4 h-4 text-orange-400" />
                <span>Interactive Vision Inference Test</span>
              </span>
              <button
                onClick={runSimulation}
                disabled={simulationRunning}
                className="px-3 py-1 text-xs font-mono-code bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold rounded flex items-center gap-1.5 transition-colors active:scale-95 disabled:opacity-60"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>{simulationRunning ? 'Scanning Feeds...' : 'Run Vision Scan'}</span>
              </button>
            </div>
            <p className="text-xs text-neutral-300 mb-2">
              Simulate sensor data ingestion and thermal anomaly detection across camera nodes.
            </p>
            {simulationResult && (
              <div className="p-2.5 rounded bg-black/60 border border-emerald-500/40 text-[11px] font-mono-code text-emerald-300 animate-fadeIn">
                {simulationResult}
              </div>
            )}
          </div>
        )}

        {/* Overview */}
        <div className="mb-6 p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
          <h4 className="text-xs uppercase font-mono-code tracking-wider text-amber-300 mb-2 flex items-center gap-2">
            <Terminal className="w-3.5 h-3.5" />
            <span>Architecture & System Overview</span>
          </h4>
          <p className="text-sm text-neutral-300 leading-relaxed">
            {project.description}
          </p>
          {project.architectureDetails && (
            <div className="mt-3 pt-3 border-t border-neutral-800 text-xs font-mono-code text-neutral-400">
              <span className="text-neutral-500">System Pattern:</span> {project.architectureDetails}
            </div>
          )}
        </div>

        {/* Core Technical Highlights */}
        <div className="mb-6">
          <h4 className="text-xs uppercase font-mono-code tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>Engineered Highlights & Deliverables</span>
          </h4>
          <ul className="space-y-2.5">
            {project.highlights.map((item, idx) => (
              <li key={idx} className="text-xs sm:text-sm text-neutral-300 flex items-start gap-2.5 bg-neutral-950/40 p-3 rounded-lg border border-neutral-800/60">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-1.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Matrix */}
        <div className="mb-8">
          <h4 className="text-xs uppercase font-mono-code tracking-wider text-neutral-400 mb-2.5 flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>Technology Stack</span>
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 text-xs font-mono-code rounded bg-neutral-800/80 text-neutral-200 border border-neutral-700/80"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Footnotes */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-neutral-800">
          <div className="text-xs font-mono-code text-neutral-500">
            Sparsh Dixit Portfolio Showcase
          </div>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-xs font-mono-code text-white bg-neutral-800 hover:bg-neutral-700 rounded-md transition-colors flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                <span>View on GitHub</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono-code font-semibold text-neutral-950 bg-amber-400 hover:bg-amber-300 rounded-md transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
