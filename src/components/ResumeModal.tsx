import React, { useEffect, useState } from 'react';
import { X, Download, Printer, Copy, Check, FileText, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
SPARSH DIXIT
Aspiring AI Engineer & MERN-Stack Developer
Location: Kanpur, Uttar Pradesh, India
Email: ${personalInfo.email} | Phone: ${personalInfo.phone}
LinkedIn: ${personalInfo.linkedin} | GitHub: ${personalInfo.github}

CAREER OBJECTIVE
${personalInfo.objective}

EDUCATION
- Master of Computer Applications (MCA) | Chandigarh University, UP | 2026-2028 | Status: Enrolled
- Bachelor of Computer Application (BCA) | DAMS CSJM University, Kanpur | 2022-2025 | Aggregate: 77.33%
- Higher Secondary Certificate (Class XII) | Uttar Pradesh Intermediate Education | 2022 | Percentage: 65.8%

EXPERIENCE
Web Developer Intern | Codsoft (Nov 2023 - Dec 2023)
- Designed and implemented 12+ RESTful APIs for internal applications using Node.js and Express.
- Enhanced server-side performance by 15% through database indexing and query optimization.
- Collaborated with frontend teams to ensure seamless integration and data consistency.

PROJECTS
ForestGuard-AI | Role: AI & Full-Stack Architect (2024)
- Trained custom vision models detecting wildfire smoke & thermal anomalies with 94.6% recall.
- Built interactive React geospatial monitoring dashboard with live threat telemetry and sensor heatmaps.
- Engineered high-throughput FastAPI/Node.js ingest services handling real-time IoT canopy telemetry.

Real Estate Website | Role: Project Lead (May 2024 - Aug 2024)
- Developed a responsive real estate website using the MERN Stack.
- Implemented property listing and management features with MONGODB.
- Built an interactive Frontend using React.js, HTML, CSS and JavaScript.

TECHNICAL SKILLS
- Programming Languages: Java (Core & Advanced), Python, SQL, JavaScript
- Web Technologies: HTML5, CSS3, React.js, Bootstrap
- Tools & Databases: Git, MySQL, MongoDB

INTERPERSONAL SKILLS
- Strong analytical and problem-solving abilities
- Effective leadership and teamwork in collaborative environments
- Excellent communication and documentation skills

ACHIEVEMENTS & CERTIFICATIONS
- Certification: Completed "Forecasting Using Model Studio in SAS Viya" (Data Science & Time Series by SAS).
- Certification: Completed Certifications from Udemy in Python, Java, and Web Development.
- Technical Head: Leading the technical team and coordinating technical activities during college event.

HOBBIES AND INTERESTS
- Competitive Programming: Active on LeetCode with a focus on algorithm optimization.
- Open Source: Contributing to UI library documentation on GitHub.
- Building full-stack projects and solving programming problems.
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-neutral-900 border border-neutral-700 rounded-2xl shadow-2xl z-10 my-6 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Modal Top Control Bar */}
        <div className="p-4 px-6 border-b border-neutral-800 bg-[#0d0e12] flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono-code text-neutral-300">
            <FileText className="w-4 h-4 text-amber-400" />
            <span>Sparsh_Dixit_Resume.pdf (Verified ATS Format)</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 text-xs font-mono-code text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded transition-colors flex items-center gap-1.5"
              title="Copy plain text"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-mono-code text-neutral-950 font-semibold bg-amber-400 hover:bg-amber-300 rounded transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
              aria-label="Close resume viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Resume Document Sheet (A4 aesthetic) */}
        <div className="p-6 sm:p-10 overflow-y-auto bg-white text-neutral-900 selection:bg-neutral-200">
          {/* Header */}
          <div className="border-b border-neutral-300 pb-5 mb-5 text-center sm:text-left">
            <h1 className="text-3xl font-bold tracking-tight text-neutral-950 mb-1">
              Sparsh Dixit
            </h1>
            <p className="text-sm font-semibold text-neutral-700 mb-3">
              Aspiring AI Engineer & MERN-Stack Developer
            </p>
            <div className="text-xs text-neutral-600 flex flex-wrap items-center justify-center sm:justify-start gap-x-3 gap-y-1">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-neutral-500" />
                Kanpur, Uttar Pradesh, India
              </span>
              <span className="text-neutral-400 hidden sm:inline">|</span>
              <a href={`mailto:${personalInfo.email}`} className="text-blue-600 hover:underline flex items-center gap-1">
                <Mail className="w-3 h-3 text-neutral-500" />
                {personalInfo.email}
              </a>
              <span className="text-neutral-400 hidden sm:inline">|</span>
              <span className="flex items-center gap-1">
                <Phone className="w-3 h-3 text-neutral-500" />
                {personalInfo.phone}
              </span>
              <span className="text-neutral-400 hidden sm:inline">|</span>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1">
                <Linkedin className="w-3 h-3 text-neutral-500" />
                LinkedIn
              </a>
              <span className="text-neutral-400 hidden sm:inline">|</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1">
                <Github className="w-3 h-3 text-neutral-500" />
                GitHub
              </a>
            </div>
          </div>

          {/* Career Objective */}
          <div className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-300 pb-1 mb-2">
              Career Objective
            </h2>
            <p className="text-xs leading-relaxed text-neutral-700">
              {personalInfo.objective}
            </p>
          </div>

          {/* Education */}
          <div className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-300 pb-1 mb-2">
              Education
            </h2>
            <div className="space-y-2 text-xs text-neutral-700">
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <div>
                  <span className="font-semibold text-neutral-900">• Master of Computer Applications (MCA)</span> — Chandigarh University, UP
                </div>
                <div className="text-neutral-600 font-mono-code text-[11px]">
                  2026–2028 | Status: Enrolled
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <div>
                  <span className="font-semibold text-neutral-900">• Bachelor of Computer Application (BCA)</span> — DAMS CSJM University, Kanpur
                </div>
                <div className="text-neutral-600 font-mono-code text-[11px]">
                  2022–2025 | Aggregate: 77.33%
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <div>
                  <span className="font-semibold text-neutral-900">• Higher Secondary Certificate (Class XII)</span> — Uttar Pradesh Intermediate Education
                </div>
                <div className="text-neutral-600 font-mono-code text-[11px]">
                  2022 | Percentage: 65.8%
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-300 pb-1 mb-2">
              Experience
            </h2>
            <div className="text-xs">
              <div className="flex justify-between items-baseline mb-1">
                <span className="font-bold text-neutral-900">Web Developer Intern | Codsoft</span>
                <span className="text-neutral-600 font-mono-code text-[11px]">Nov 2023 – Dec 2023</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-neutral-700 pl-1">
                <li>Designed and implemented 12+ RESTful APIs for internal applications using Node.js and Express.</li>
                <li>Enhanced server-side performance by 15% through database indexing and query optimization on MongoDB.</li>
                <li>Collaborated with frontend teams to ensure seamless integration, consistent contracts, and data consistency.</li>
              </ul>
            </div>
          </div>

          {/* Featured & Academic Projects */}
          <div className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-300 pb-1 mb-2">
              Featured Projects
            </h2>
            <div className="text-xs space-y-3">
              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-bold text-neutral-900">ForestGuard-AI | Role: AI & Full-Stack Architect</span>
                  <span className="text-neutral-600 font-mono-code text-[11px]">2024</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-neutral-700 pl-1">
                  <li>Trained deep vision models detecting early wildfire smoke signatures and thermal hot-spots with 94.6% recall.</li>
                  <li>Built interactive React geospatial dashboard featuring risk heatmaps, live telemetry, and incident dispatching.</li>
                  <li>Engineered high-throughput FastAPI and Node.js microservices handling streaming IoT canopy sensor data.</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-baseline mb-1">
                  <span className="font-bold text-neutral-900">Real Estate Website | Role: Project Lead</span>
                  <span className="text-neutral-600 font-mono-code text-[11px]">May 2024 – Aug 2024</span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-neutral-700 pl-1">
                  <li>Developed a responsive real estate website using the MERN Stack.</li>
                  <li>Implemented property listing and management features with MONGODB.</li>
                  <li>Built an interactive Frontend using React.js, HTML, CSS and JavaScript.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-300 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="text-xs space-y-1 text-neutral-700">
              <p><strong className="text-neutral-900">• Programming Languages:</strong> Java (Core & Advanced), Python, SQL, JavaScript.</p>
              <p><strong className="text-neutral-900">• Web Technologies:</strong> HTML5, CSS3, React.js, Bootstrap.</p>
              <p><strong className="text-neutral-900">• Tools & Databases:</strong> Git, MySQL, MongoDB.</p>
            </div>
          </div>

          {/* Interpersonal Skills */}
          <div className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-300 pb-1 mb-2">
              Interpersonal Skills
            </h2>
            <ul className="list-disc list-inside space-y-1 text-xs text-neutral-700 pl-1">
              <li>Strong analytical and problem-solving abilities.</li>
              <li>Effective leadership and teamwork in collaborative environments.</li>
              <li>Excellent communication and documentation skills.</li>
            </ul>
          </div>

          {/* Achievements & Certifications */}
          <div className="mb-5">
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-300 pb-1 mb-2">
              Achievements & Certifications
            </h2>
            <ul className="list-disc list-inside space-y-1 text-xs text-neutral-700 pl-1">
              <li><strong className="text-neutral-900">SAS Certification:</strong> Forecasting Using Model Studio in SAS Viya (Data Science & Predictive Modeling by SAS Institute).</li>
              <li><strong className="text-neutral-900">Udemy Certifications:</strong> Completed Certifications in Python, Java, and Full-Stack Web Development.</li>
              <li><strong className="text-neutral-900">Technical Head:</strong> Leading the technical team and coordinating technical activities during college event.</li>
            </ul>
          </div>

          {/* Hobbies and Interests */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-neutral-950 border-b border-neutral-300 pb-1 mb-2">
              Hobbies and Interests
            </h2>
            <ul className="list-disc list-inside space-y-1 text-xs text-neutral-700 pl-1">
              <li><strong className="text-neutral-900">Competitive Programming:</strong> Active on LeetCode with a focus on algorithm optimization.</li>
              <li><strong className="text-neutral-900">Open Source:</strong> Contributing to UI library documentation on GitHub.</li>
              <li><strong className="text-neutral-900">Full-Stack Building:</strong> Solving programming problems to strengthen analytical thinking.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
