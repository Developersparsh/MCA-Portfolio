import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, Play, Sparkles, CornerDownLeft, ShieldAlert } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface InteractiveTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenProject?: (projectId: string) => void;
}

export const InteractiveTerminal: React.FC<InteractiveTerminalProps> = ({ isOpen, onClose, onOpenProject }) => {
  const [inputVal, setInputVal] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [history, setHistory] = useState<Array<{ type: 'input' | 'output' | 'system' | 'alert'; text: string; time?: string }>>([
    { type: 'system', text: "Sparsh Dixit Interactive Dev Terminal [Version 2.4.0]" },
    { type: 'system', text: "Type 'help' or click quick commands below to explore." },
  ]);
  const endRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && !isMinimized) {
      endRef.current?.scrollIntoView({ behavior: 'smooth' });
      inputRef.current?.focus();
    }
  }, [history, isOpen, isMinimized]);

  if (!isOpen) return null;

  const handleCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    const newHistory = [...history, { type: 'input' as const, text: `$ ${rawCmd}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: `AVAILABLE COMMANDS:
  • forestguard : Run simulated real-time vision threat detection test
  • projects    : List featured engineering projects
  • skills      : Show core stack proficiencies
  • education   : View degree & university credentials
  • contact     : Transmit quick contact link
  • clear       : Clear terminal window`
        });
        break;

      case 'forestguard':
      case 'test forestguard':
        newHistory.push({
          type: 'alert',
          text: `[FORESTGUARD-AI LIVE INFERENCE ENGINE]
» Loading thermal model weights... Done.
» Ingesting canopy sensor telemetry: 38.4°C | 18% Humidity | Wind: 14kt NW
» Scanning sector B-4 (26.4499° N, 80.3319° E)...
⚠ [SMOKE SIGNATURE DETECTED] Confidence: 94.6%
✔ Automated webhook dispatched to emergency ranger dispatch in 180ms!`
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: `1. ForestGuard-AI (Computer Vision & IoT Wildfire Monitoring)
2. Real Estate Platform (MERN Stack Full-Stack Management)
3. AI Skill Matcher & Resume Engine (Python & NLP Embeddings)
4. Algorithmic Hub (Java Core/Advanced & LeetCode Optimizations)`
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: `LANGUAGES: Java (Core/Adv), Python, JavaScript (ES6+), SQL
FRAMEWORKS: React.js, Node.js, Express.js, Tailwind CSS, Bootstrap
DATABASES : MongoDB (Mongoose indexing), MySQL
METRICS   : 12+ REST APIs, 15% query latency reduction`
        });
        break;

      case 'certs':
      case 'certifications':
        newHistory.push({
          type: 'output',
          text: `• SAS Institute: Forecasting Using Model Studio in SAS Viya (Data Science & Time Series)
• Udemy: Python Programming Masterclass
• Udemy: Complete Java Development & Core Concepts
• Udemy: Full-Stack Web Development Bootcamp`
        });
        break;

      case 'education':
        newHistory.push({
          type: 'output',
          text: `• MCA (2026-2028): Chandigarh University, UP [In Progress]
• BCA (2022-2025): DAMS CSJM University, Kanpur [77.33% Distinction]
• Class XII (2022): UP Intermediate [65.8%]`
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `Email: ${personalInfo.email}
Phone: ${personalInfo.phone}
LinkedIn: ${personalInfo.linkedin}
GitHub: ${personalInfo.github}`
        });
        break;

      case 'clear':
        setHistory([
          { type: 'system', text: "Terminal cleared. Type 'help' for commands." }
        ]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'output',
          text: `Command not found: '${rawCmd}'. Type 'help' to see valid commands.`
        });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 w-full max-w-lg shadow-2xl transition-all">
      <div className="rounded-xl border border-neutral-700/80 bg-[#0d0f14]/95 backdrop-blur-xl shadow-2xl overflow-hidden text-xs font-mono-code">
        {/* Terminal Titlebar */}
        <div className="p-3 bg-neutral-900 border-b border-neutral-800 flex items-center justify-between gap-3 select-none">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-neutral-400 font-medium ml-1 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-amber-400" />
              <span>sparsh@dev-box: ~</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMinimized(!isMinimized)}
              className="p-1 rounded text-neutral-400 hover:text-white transition-colors"
              title={isMinimized ? "Expand" : "Minimize"}
            >
              {isMinimized ? <Maximize2 className="w-3.5 h-3.5" /> : <Minimize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-neutral-400 hover:text-white transition-colors"
              title="Close terminal"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        {!isMinimized && (
          <>
            <div className="p-4 h-64 overflow-y-auto space-y-2 text-neutral-300">
              {history.map((item, idx) => (
                <div key={idx} className="leading-relaxed">
                  {item.type === 'system' && (
                    <div className="text-neutral-500">{item.text}</div>
                  )}
                  {item.type === 'input' && (
                    <div className="text-amber-400 font-semibold">{item.text}</div>
                  )}
                  {item.type === 'output' && (
                    <pre className="text-neutral-300 whitespace-pre-wrap font-mono-code">{item.text}</pre>
                  )}
                  {item.type === 'alert' && (
                    <pre className="text-emerald-400 bg-emerald-950/20 p-2.5 rounded border border-emerald-500/30 whitespace-pre-wrap font-mono-code">
                      {item.text}
                    </pre>
                  )}
                </div>
              ))}
              <div ref={endRef} />
            </div>

            {/* Quick Action Suggestion Chips */}
            <div className="px-4 py-2 border-t border-neutral-800/80 bg-neutral-950/40 flex flex-wrap gap-1.5">
              <span className="text-[10px] text-neutral-500 self-center mr-1">Quick run:</span>
              <button
                onClick={() => handleCommand('forestguard')}
                className="px-2 py-0.5 rounded bg-emerald-950/60 hover:bg-emerald-900/60 text-emerald-300 border border-emerald-500/30 text-[10px] transition-colors flex items-center gap-1"
              >
                <ShieldAlert className="w-2.5 h-2.5 text-emerald-400" />
                <span>test forestguard</span>
              </button>
              <button
                onClick={() => handleCommand('projects')}
                className="px-2 py-0.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-[10px] transition-colors"
              >
                projects
              </button>
              <button
                onClick={() => handleCommand('skills')}
                className="px-2 py-0.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-[10px] transition-colors"
              >
                skills
              </button>
              <button
                onClick={() => handleCommand('clear')}
                className="px-2 py-0.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-400 text-[10px] transition-colors"
              >
                clear
              </button>
            </div>

            {/* Input Line */}
            <div className="p-3 border-t border-neutral-800 flex items-center gap-2 bg-neutral-950/80">
              <span className="text-amber-400 font-bold">$</span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type 'help', 'forestguard', 'skills'..."
                className="flex-1 bg-transparent text-white placeholder-neutral-600 focus:outline-none"
              />
              <button
                onClick={() => handleCommand(inputVal)}
                className="p-1 rounded text-neutral-400 hover:text-amber-400 transition-colors"
                title="Send command"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
