import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { MapPin, Sparkles, ShieldCheck } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface SparshPortraitProps {
  customImageSrc?: string;
}

export const SparshPortrait: React.FC<SparshPortraitProps> = ({ customImageSrc }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [sheenPos, setSheenPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  // Default to Cyber Cyan lighting as requested by user
  const [themeMode, setThemeMode] = useState<'cyan' | 'amber' | 'emerald'>('cyan');
  const [isBlinking, setIsBlinking] = useState(false);

  // Periodic natural blink animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 140);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const xPercent = (x / rect.width) * 100;
    const yPercent = (y / rect.height) * 100;

    // Smooth calculated 3D rotation (-14deg to +14deg)
    const rotX = ((y / rect.height) - 0.5) * -16;
    const rotY = ((x / rect.width) - 0.5) * 16;

    setRotateX(rotX);
    setRotateY(rotY);
    setSheenPos({ x: xPercent, y: yPercent });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setSheenPos({ x: 50, y: 50 });
    setIsHovered(false);
  };

  const themeColors = {
    cyan: {
      accent: '#06b6d4',
      glow: 'from-cyan-500/25 via-blue-600/15 to-purple-600/10',
      rim: '#38bdf8',
      secondaryRim: '#a855f7',
      badge: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30',
      dot: '#06b6d4'
    },
    amber: {
      accent: '#f59e0b',
      glow: 'from-amber-500/25 via-orange-500/15 to-transparent',
      rim: '#fbbf24',
      secondaryRim: '#f97316',
      badge: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
      dot: '#f59e0b'
    },
    emerald: {
      accent: '#10b981',
      glow: 'from-emerald-500/25 via-teal-500/15 to-transparent',
      rim: '#34d399',
      secondaryRim: '#06b6d4',
      badge: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
      dot: '#10b981'
    }
  }[themeMode];

  return (
    <div className="relative w-full max-w-[430px] mx-auto select-none" style={{ perspective: 1200 }}>
      {/* Dynamic Ambient Aura Glow (Cyber Cyan as default) */}
      <div 
        className={`absolute -inset-6 bg-gradient-to-tr ${themeColors.glow} rounded-3xl blur-2xl -z-10 transition-all duration-700`}
        style={{ opacity: isHovered ? 0.95 : 0.45 }}
      />

      <motion.div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
          scale: isHovered ? 1.025 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 22,
          mass: 0.5
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="relative rounded-2xl border border-neutral-800 bg-[#0c0d12] overflow-hidden shadow-2xl shadow-black/95 cursor-crosshair group"
      >
        {/* Architectural corner crosshair brackets with dynamic cyan/amber accents */}
        <div 
          className="absolute top-3.5 left-3.5 w-4 h-4 border-t-2 border-l-2 z-30 pointer-events-none transition-colors"
          style={{ borderColor: themeColors.rim }}
        />
        <div 
          className="absolute top-3.5 right-3.5 w-4 h-4 border-t-2 border-r-2 z-30 pointer-events-none transition-colors"
          style={{ borderColor: themeColors.rim }}
        />
        <div 
          className="absolute bottom-3.5 left-3.5 w-4 h-4 border-b-2 border-l-2 z-30 pointer-events-none transition-colors"
          style={{ borderColor: themeColors.rim }}
        />
        <div 
          className="absolute bottom-3.5 right-3.5 w-4 h-4 border-b-2 border-r-2 z-30 pointer-events-none transition-colors"
          style={{ borderColor: themeColors.rim }}
        />

        {/* Top telemetry & lighting preset controls */}
        <div className="absolute top-4 left-9 right-9 flex items-center justify-between text-[10px] font-mono-code text-neutral-400 z-30">
          <span className="flex items-center gap-1.5 text-neutral-200 font-medium">
            <span 
              className="w-1.5 h-1.5 rounded-full animate-pulse" 
              style={{ backgroundColor: themeColors.accent }}
            />
            <span>3D HERO PROTAGONIST</span>
          </span>

          {/* Interactive lighting theme toggles (Cyan first) */}
          <div className="flex items-center gap-1.5 bg-neutral-900/90 p-1 rounded-full border border-neutral-700 pointer-events-auto shadow-md">
            <button
              onClick={() => setThemeMode('cyan')}
              className={`w-3.5 h-3.5 rounded-full transition-transform ${themeMode === 'cyan' ? 'scale-125 ring-2 ring-cyan-400 ring-offset-1 ring-offset-black' : 'opacity-60 hover:opacity-100'}`}
              style={{ backgroundColor: '#06b6d4' }}
              title="Cyber Cyan (Default)"
            />
            <button
              onClick={() => setThemeMode('amber')}
              className={`w-3.5 h-3.5 rounded-full transition-transform ${themeMode === 'amber' ? 'scale-125 ring-2 ring-amber-400 ring-offset-1 ring-offset-black' : 'opacity-60 hover:opacity-100'}`}
              style={{ backgroundColor: '#f59e0b' }}
              title="Warm Gold Amber"
            />
            <button
              onClick={() => setThemeMode('emerald')}
              className={`w-3.5 h-3.5 rounded-full transition-transform ${themeMode === 'emerald' ? 'scale-125 ring-2 ring-emerald-400 ring-offset-1 ring-offset-black' : 'opacity-60 hover:opacity-100'}`}
              style={{ backgroundColor: '#10b981' }}
              title="Matrix Emerald"
            />
          </div>
        </div>

        {/* Portrait Canvas Viewport */}
        <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#090b10] flex items-center justify-center">
          {customImageSrc ? (
            <img
              src={customImageSrc}
              alt="Sparsh Dixit"
              className="w-full h-full object-cover object-center filter contrast-[1.05]"
            />
          ) : (
            /* High-End Stylized 3D Character Rendering matching Linkedin-photo (1).jpeg */
            <div className="w-full h-full relative flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#131622] via-[#0d0f17] to-[#07080d]">
              {/* Studio Atmospheric Backdrop */}
              <div 
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 25%, rgba(6, 182, 212, 0.22) 0%, transparent 65%), radial-gradient(circle at 85% 45%, ${themeColors.rim}33 0%, transparent 55%)`
                }}
              />

              {/* Dynamic Interactive Cursor Spotlight */}
              <div 
                className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle 340px at ${sheenPos.x}% ${sheenPos.y}%, rgba(255, 255, 255, 0.12) 0%, transparent 70%)`
                }}
              />

              {/* SVG 3D Stylized Character Model */}
              <svg
                viewBox="0 0 420 520"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Soft 3D Lighting & Shadows Filters */}
                  <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
                    <feOffset dx="0" dy="3" result="offsetblur" />
                    <feComponentTransfer>
                      <feFuncA type="linear" slope="0.35" />
                    </feComponentTransfer>
                    <feMerge>
                      <feMergeNode />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>

                  <filter id="skinGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2.5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>

                  {/* Anatomical 3D Skin Gradients */}
                  <radialGradient id="faceMesh" cx="50%" cy="40%" r="55%">
                    <stop offset="0%" stopColor="#edd0ba" />
                    <stop offset="35%" stopColor="#e2b99c" />
                    <stop offset="70%" stopColor="#cf9a76" />
                    <stop offset="95%" stopColor="#b77c57" />
                    <stop offset="100%" stopColor="#9a623f" />
                  </radialGradient>

                  <linearGradient id="foreheadShine" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f5ddcc" stopOpacity="0.85" />
                    <stop offset="100%" stopColor="#e2b99c" stopOpacity="0" />
                  </linearGradient>

                  <linearGradient id="jawUnderShadow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#8d5432" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#67391e" stopOpacity="0.95" />
                  </linearGradient>

                  <linearGradient id="neckMesh" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#a86e49" />
                    <stop offset="40%" stopColor="#c58e69" />
                    <stop offset="100%" stopColor="#9a623f" />
                  </linearGradient>

                  {/* Volumetric Dark Hair Gradients */}
                  <linearGradient id="hairBase" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#252730" />
                    <stop offset="50%" stopColor="#15171d" />
                    <stop offset="100%" stopColor="#0a0a0d" />
                  </linearGradient>

                  <radialGradient id="hairVolumeHighlight" cx="45%" cy="25%" r="50%">
                    <stop offset="0%" stopColor="#434758" />
                    <stop offset="40%" stopColor="#2c2f3c" />
                    <stop offset="100%" stopColor="#14151b" />
                  </radialGradient>

                  {/* Tailored Crisp Black Shirt */}
                  <linearGradient id="blackShirtFabric" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22242b" />
                    <stop offset="40%" stopColor="#14151a" />
                    <stop offset="100%" stopColor="#08090c" />
                  </linearGradient>

                  <linearGradient id="collarFlap" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#2d3039" />
                    <stop offset="70%" stopColor="#17181f" />
                    <stop offset="100%" stopColor="#0e0f14" />
                  </linearGradient>

                  {/* Warm Natural Eye Sclera & Iris */}
                  <radialGradient id="irisGrad" cx="45%" cy="40%" r="55%">
                    <stop offset="0%" stopColor="#5a3825" />
                    <stop offset="40%" stopColor="#3d2315" />
                    <stop offset="85%" stopColor="#1f1109" />
                    <stop offset="100%" stopColor="#0d0704" />
                  </radialGradient>

                  {/* Refined Natural Lower Lip Gradient */}
                  <linearGradient id="lowerLipGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#c57d72" />
                    <stop offset="60%" stopColor="#b4675b" />
                    <stop offset="100%" stopColor="#964b40" />
                  </linearGradient>

                  {/* Neatly Groomed Beard Gradient - Deep Natural Black with Subtle Barber Shading */}
                  <linearGradient id="designerBeard" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1e2029" stopOpacity="0.82" />
                    <stop offset="30%" stopColor="#15161d" stopOpacity="0.94" />
                    <stop offset="70%" stopColor="#0f1015" stopOpacity="0.98" />
                    <stop offset="100%" stopColor="#08090c" stopOpacity="1" />
                  </linearGradient>

                  {/* Beard Chin Volume Gradient */}
                  <radialGradient id="beardChinMesh" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#252733" stopOpacity="0.9" />
                    <stop offset="60%" stopColor="#14151b" stopOpacity="0.98" />
                    <stop offset="100%" stopColor="#0b0c0f" stopOpacity="1" />
                  </radialGradient>

                  {/* Quiff / Pompadour Volume Gradient */}
                  <linearGradient id="quiffVolume" x1="20%" y1="0%" x2="80%" y2="100%">
                    <stop offset="0%" stopColor="#3d4152" />
                    <stop offset="35%" stopColor="#292c37" />
                    <stop offset="75%" stopColor="#17181e" />
                    <stop offset="100%" stopColor="#0b0c0f" />
                  </linearGradient>
                </defs>

                {/* --- 1. CRISP BLACK BUTTONED SHIRT (MATCHING REFERENCE PHOTO) --- */}
                {/* Torso & Shoulders */}
                <path
                  d="M 45 520 C 60 395, 120 350, 165 338 L 210 375 L 255 338 C 300 350, 360 395, 375 520 Z"
                  fill="url(#blackShirtFabric)"
                />

                {/* Subtle Fabric Folds & Arm Creases */}
                <path d="M 125 430 Q 155 455 185 520" stroke="#252731" strokeWidth="2.5" fill="none" opacity="0.7" />
                <path d="M 295 430 Q 265 455 235 520" stroke="#252731" strokeWidth="2.5" fill="none" opacity="0.7" />
                <path d="M 75 490 Q 110 470 145 490" stroke="#1f2129" strokeWidth="2" fill="none" opacity="0.6" />
                <path d="M 345 490 Q 310 470 275 490" stroke="#1f2129" strokeWidth="2" fill="none" opacity="0.6" />

                {/* Crisp Tailored Shirt Collar Flaps */}
                <path
                  d="M 152 342 L 198 410 L 210 380 L 175 338 Z"
                  fill="url(#collarFlap)"
                  stroke="#353843"
                  strokeWidth="1.2"
                  filter="url(#softShadow)"
                />
                <path
                  d="M 268 342 L 222 410 L 210 380 L 245 338 Z"
                  fill="url(#collarFlap)"
                  stroke="#353843"
                  strokeWidth="1.2"
                  filter="url(#softShadow)"
                />

                {/* Center Button Placket */}
                <path d="M 210 380 L 210 520" stroke="#1e2027" strokeWidth="3" />
                {/* Dark Mother-of-Pearl Shirt Buttons */}
                <circle cx="210" cy="425" r="3.5" fill="#32353e" stroke="#17181e" strokeWidth="1" />
                <circle cx="210" cy="475" r="3.5" fill="#32353e" stroke="#17181e" strokeWidth="1" />

                {/* --- 2. NECK & STERNOCLEIDOMASTOID ANATOMY --- */}
                {/* Neck Shadow under Jaw */}
                <path
                  d="M 172 265 L 172 355 C 195 375, 225 375, 248 355 L 248 265 Z"
                  fill="url(#jawUnderShadow)"
                />
                {/* Neck Base Tone */}
                <path
                  d="M 180 275 L 180 348 C 196 360, 224 360, 240 348 L 240 275 Z"
                  fill="url(#neckMesh)"
                />
                {/* Throat Contour & Subtle Adam's Apple */}
                <path d="M 205 315 Q 210 322 215 315" stroke="#905b39" strokeWidth="2.2" strokeLinecap="round" fill="none" opacity="0.8" />
                <path d="M 194 300 Q 186 340 178 355" stroke="#875133" strokeWidth="2" fill="none" opacity="0.4" />
                <path d="M 226 300 Q 234 340 242 355" stroke="#875133" strokeWidth="2" fill="none" opacity="0.4" />

                {/* --- 3. NATURAL EARS (WELL PROPORTIONED) --- */}
                {/* Left Ear */}
                <g transform="rotate(-3 133 226)">
                  <path
                    d="M 136 204 C 122 208, 120 236, 131 248 C 135 252, 139 252, 140 246 C 135 240, 134 216, 138 210 Z"
                    fill="#be8664"
                  />
                  {/* Concha & Inner Fossa */}
                  <path d="M 133 218 Q 128 228 134 236" stroke="#915938" strokeWidth="2" fill="none" />
                </g>

                {/* Right Ear */}
                <g transform="rotate(3 287 226)">
                  <path
                    d="M 284 204 C 298 208, 300 236, 289 248 C 285 252, 281 252, 280 246 C 285 240, 286 216, 282 210 Z"
                    fill="#be8664"
                  />
                  <path d="M 287 218 Q 292 228 286 236" stroke="#915938" strokeWidth="2" fill="none" />
                </g>

                {/* --- 4. REALISTIC OVAL-TO-ANGULAR HEAD & FACIAL STRUCTURE --- */}
                {/* Cranium & Jaw Base Mesh */}
                <path
                  d="M 136 172 C 132 232, 145 274, 178 298 L 210 308 L 242 298 C 275 274, 288 232, 284 172 C 284 98, 136 98, 136 172 Z"
                  fill="url(#faceMesh)"
                  filter="url(#softShadow)"
                />

                {/* Forehead Volumetric Highlight */}
                <ellipse cx="210" cy="148" rx="55" ry="28" fill="url(#foreheadShine)" opacity="0.6" />

                {/* Sculpted Cheekbones & Temples */}
                <path
                  d="M 140 185 C 146 232, 162 264, 185 282 C 166 260, 152 222, 148 185 Z"
                  fill="#b57b56"
                  opacity="0.38"
                />
                <path
                  d="M 280 185 C 274 232, 258 264, 235 282 C 254 260, 268 222, 272 185 Z"
                  fill="#b57b56"
                  opacity="0.38"
                />

                {/* Soft Cheek Highlights (Subsurface Scatter simulation) */}
                <ellipse cx="170" cy="225" rx="16" ry="10" fill="#f0ceb6" opacity="0.35" />
                <ellipse cx="250" cy="225" rx="16" ry="10" fill="#f0ceb6" opacity="0.35" />

                {/* --- 5. DIFFERENT HAIRSTYLE: MODERN TEXTURED SIDE-SWEPT CROP & TAPER FADE --- */}
                {/* Volumetric Natural Hair Outline (Handsome Textured Side-Part Flow) */}
                <path
                  d="M 124 164 C 116 102, 142 54, 204 50 C 270 52, 302 98, 296 164 C 284 146, 268 132, 242 122 C 222 114, 186 114, 164 122 C 146 130, 134 146, 124 164 Z"
                  fill="url(#hairBase)"
                />

                {/* Main Hair Volume Highlight Mesh with Deep Crown Depth */}
                <path
                  d="M 138 120 C 158 66, 196 56, 214 58 C 248 54, 280 76, 286 120 C 266 104, 242 94, 212 98 C 178 94, 154 104, 138 120 Z"
                  fill="url(#quiffVolume)"
                />

                {/* Dimensional Side-Swept Layered Locks (Natural Textured Flow from Part to Side) */}
                <path
                  d="M 162 76 C 182 66, 210 74, 234 94 C 214 88, 188 88, 172 96 Z"
                  fill="#3d4253"
                  opacity="0.9"
                />
                <path
                  d="M 184 62 C 208 58, 238 68, 262 92 C 242 82, 216 82, 196 90 Z"
                  fill="#4c5166"
                  opacity="0.85"
                />
                <path
                  d="M 150 96 C 170 82, 198 90, 216 112 C 196 104, 174 104, 158 114 Z"
                  fill="#2b2d39"
                  opacity="0.95"
                />
                <path
                  d="M 210 68 C 236 66, 266 82, 282 114 C 264 102, 240 98, 222 106 Z"
                  fill="#343745"
                  opacity="0.85"
                />

                {/* Clean Hairline Contour (Removed the 4 hanging strands for clean, handsome forehead) */}

                {/* Subtle Directional Highlights catching Cyber Cyan Lighting */}
                <path d="M 175 70 Q 202 78 230 96" stroke="#5d637a" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                <path d="M 198 64 Q 225 74 254 94" stroke="#5d637a" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                <path d="M 220 72 Q 248 84 274 108" stroke="#484d60" strokeWidth="1.6" strokeLinecap="round" fill="none" />

                {/* Clean, Sculpted Sideburn Taper Fade */}
                <path d="M 126 166 C 130 190, 134 206, 136 212 L 140 190 Z" fill="#14151a" opacity="0.9" />
                <path d="M 294 166 C 290 190, 286 206, 284 212 L 280 190 Z" fill="#14151a" opacity="0.9" />

                {/* --- 6. NATURAL EYEBROWS (THICK, WELL-DEFINED, FEATHERED) --- */}
                {/* Left Eyebrow */}
                <path
                  d="M 152 178 C 166 170, 185 170, 194 175 C 185 174, 166 174, 154 181 Z"
                  fill="#15161a"
                />
                <path d="M 155 180 Q 172 171 192 175" stroke="#1c1d22" strokeWidth="4.5" strokeLinecap="round" />
                {/* Right Eyebrow */}
                <path
                  d="M 226 175 C 235 170, 254 170, 268 178 C 256 174, 237 174, 228 181 Z"
                  fill="#15161a"
                />
                <path d="M 228 175 Q 248 171 265 180" stroke="#1c1d22" strokeWidth="4.5" strokeLinecap="round" />

                {/* --- 7. EXPRESSIVE WARM DARK BROWN EYES WITH NATURAL BLINK --- */}
                {/* Left Eye */}
                <g style={{ transformOrigin: '173px 195px', transform: isBlinking ? 'scaleY(0.08)' : 'scaleY(1)', transition: 'transform 0.14s ease' }}>
                  {/* Sclera */}
                  <path d="M 158 195 Q 173 186 188 195 Q 173 203 158 195 Z" fill="#f8fafc" />
                  <path d="M 158 195 Q 163 191 168 194 Q 163 198 158 195 Z" fill="#e2e8f0" opacity="0.7" />
                  <circle cx="159" cy="195" r="1.5" fill="#dc8d7c" />

                  {/* Iris */}
                  <circle cx="173" cy="195" r="5.2" fill="url(#irisGrad)" />
                  <circle cx="173" cy="195" r="2.6" fill="#090503" />

                  {/* Specular Catchlights */}
                  <circle cx="174.5" cy="193" r="1.6" fill="#ffffff" />
                  <circle cx="171.5" cy="196.5" r="0.9" fill={themeColors.rim} opacity="0.85" />

                  {/* Upper Eyelid Crease & Lash Line */}
                  <path d="M 157 194 Q 173 185 189 194" stroke="#18191f" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                  <path d="M 159 190 Q 173 182 187 190" stroke="#a46d4c" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.75" />
                  <path d="M 160 197 Q 173 203 186 197" stroke="#b07957" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5" />
                </g>

                {/* Right Eye */}
                <g style={{ transformOrigin: '247px 195px', transform: isBlinking ? 'scaleY(0.08)' : 'scaleY(1)', transition: 'transform 0.14s ease' }}>
                  {/* Sclera */}
                  <path d="M 232 195 Q 247 186 262 195 Q 247 203 232 195 Z" fill="#f8fafc" />
                  <path d="M 252 194 Q 257 191 262 195 Q 257 198 252 194 Z" fill="#e2e8f0" opacity="0.7" />
                  <circle cx="261" cy="195" r="1.5" fill="#dc8d7c" />

                  {/* Iris */}
                  <circle cx="247" cy="195" r="5.2" fill="url(#irisGrad)" />
                  <circle cx="247" cy="195" r="2.6" fill="#090503" />

                  {/* Specular Catchlights */}
                  <circle cx="248.5" cy="193" r="1.6" fill="#ffffff" />
                  <circle cx="245.5" cy="196.5" r="0.9" fill={themeColors.rim} opacity="0.85" />

                  {/* Upper Eyelid Crease & Lash Line */}
                  <path d="M 231 194 Q 247 185 263 194" stroke="#18191f" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                  <path d="M 233 190 Q 247 182 261 190" stroke="#a46d4c" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.75" />
                  <path d="M 234 197 Q 247 203 260 197" stroke="#b07957" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5" />
                </g>

                {/* --- 8. PROPORTIONED NOSE WITH SOFT 3D SHADING --- */}
                <path
                  d="M 207 190 L 206 226 C 201 230, 196 234, 202 237 C 207 239, 213 239, 218 237 C 224 234, 219 230, 214 226 L 213 190"
                  fill="none"
                  stroke="#af7655"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <ellipse cx="201" cy="236" rx="3.5" ry="2" fill="#69371d" />
                <ellipse cx="219" cy="236" rx="3.5" ry="2" fill="#69371d" />
                <circle cx="210" cy="231" r="3.2" fill="#fae2d2" opacity="0.65" />
                <path d="M 197 234 Q 199 229 203 227" stroke="#b07755" strokeWidth="1.2" fill="none" />
                <path d="M 223 234 Q 221 229 217 227" stroke="#b07755" strokeWidth="1.2" fill="none" />

                {/* Philtrum Column */}
                <path d="M 207 242 L 207 249" stroke="#b27958" strokeWidth="1.2" opacity="0.6" />
                <path d="M 213 242 L 213 249" stroke="#b27958" strokeWidth="1.2" opacity="0.6" />

                {/* --- 9. REFINED NATURAL LIPS --- */}
                {/* Upper Lip: Soft anatomical Cupid's Bow with vermilion fullness */}
                <path
                  d="M 189 257 C 198 254, 206 255, 210 257 C 214 255, 222 254, 231 257 C 224 261, 196 261, 189 257 Z"
                  fill="#98473c"
                />
                {/* Lip Separation Smile Line: Gentle, masculine, natural smirk */}
                <path
                  d="M 188 258 Q 210 266 232 258"
                  stroke="#5d221a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Lower Lip (Soft natural contour, anatomically balanced, no awkward thickness) */}
                <path
                  d="M 191 259 C 196 267, 203 270, 210 270 C 217 270, 224 267, 229 259 C 223 262, 217 263, 210 263 C 203 263, 197 262, 191 259 Z"
                  fill="url(#lowerLipGrad)"
                />
                {/* Lower Lip Subtle Diffuse Highlight (Soft natural moisture sheen) */}
                <ellipse cx="210" cy="265.5" rx="6.5" ry="1.8" fill="#fce4de" opacity="0.45" />
                {/* Soft Depth Shadow under Lower Lip */}
                <ellipse cx="210" cy="272" rx="9" ry="2" fill="#723b20" opacity="0.38" />

                {/* --- 10. FIXED REALISTIC CONNECTED BEARD & GROOMED MUSTACHE --- */}
                {/* Full Sculpted Jawline & Chin Beard (Solid anatomical coverage with natural depth) */}
                <path
                  d="M 136 212 C 139 234, 150 255, 172 266 L 184 274 C 192 280, 202 284, 210 284 C 218 284, 228 280, 236 274 L 248 266 C 270 255, 281 234, 284 212 C 285 240, 276 272, 245 301 C 232 308, 222 311, 210 311 C 198 311, 188 308, 175 301 C 144 272, 135 240, 136 212 Z"
                  fill="url(#designerBeard)"
                />

                {/* Seamless Connected Mustache & Mouth Corner Chinstrap Bridges */}
                <path
                  d="M 180 250 C 194 245, 203 246, 210 248 C 217 246, 226 245, 240 250 C 244 256, 244 266, 238 276 L 230 274 C 234 264, 228 257, 210 256 C 192 257, 186 264, 190 274 L 182 276 C 176 266, 176 256, 180 250 Z"
                  fill="url(#designerBeard)"
                />

                {/* Centered Soul Patch (Seamlessly joining lower lip shadow into chin beard) */}
                <path
                  d="M 206 272 L 214 272 L 213 286 L 207 286 Z"
                  fill="#0e0f14"
                  opacity="0.95"
                />

                {/* Chin 3D Volume Highlight (Subtle curvature and hair density depth) */}
                <ellipse cx="210" cy="296" rx="18" ry="7" fill="url(#beardChinMesh)" opacity="0.75" />

                {/* Natural Soft Fade on Upper Cheeklines */}
                <path
                  d="M 136 212 C 140 234, 151 254, 172 266"
                  stroke="#2a2c36"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.4"
                />
                <path
                  d="M 284 212 C 280 234, 269 254, 248 266"
                  stroke="#2a2c36"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.4"
                />

                {/* --- 11. CYBER CYAN & ATMOSPHERIC 3D RIM LIGHTING --- */}
                {/* Electric Cyber Cyan Key Rim Light along right temple, jawline, and collar */}
                <path
                  d="M 284 138 C 294 180, 282 250, 240 298 L 255 338 L 268 342"
                  stroke={themeColors.rim}
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.85"
                />
                {/* Subtle Cyan Bounce on Cheekbone */}
                <path
                  d="M 268 215 Q 262 235 250 248"
                  stroke={themeColors.rim}
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.45"
                />

                {/* Secondary Warm / Purple Ambient Fill Rim along left silhouette */}
                <path
                  d="M 136 138 C 126 180, 138 250, 180 298"
                  stroke={themeColors.secondaryRim}
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  fill="none"
                  opacity="0.5"
                />
              </svg>
            </div>
          )}

          {/* Technical horizontal scanning grid hairline */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-45" />

          {/* Bottom technical caption overlay */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-transparent p-5 pt-12 flex flex-col gap-1.5 z-20 pointer-events-none">
            <div className="flex items-center justify-between text-[11px] font-mono-code">
              <span className="text-white font-bold tracking-wide flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" style={{ color: themeColors.accent }} />
                <span>SPARSH DIXIT</span>
              </span>
              <span className="font-semibold" style={{ color: themeColors.accent }}>
                MCA '28 · CS
              </span>
            </div>
            <div className="flex items-center justify-between text-[9px] font-mono-code text-neutral-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-2.5 h-2.5 text-neutral-500" />
                <span>{personalInfo.coordinates}</span>
              </span>
              <span className="tracking-wider text-neutral-400 font-medium">
                KANPUR, INDIA
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating subtle footnote */}
      <div className="mt-3 flex items-center justify-between px-2 text-[11px] font-mono-code text-neutral-400">
        <span className="flex items-center gap-1.5">
          <span 
            className="w-1.5 h-1.5 rounded-full animate-pulse" 
            style={{ backgroundColor: themeColors.accent }}
          />
          <span className="capitalize">{themeMode} Lighting Active</span>
        </span>
        <span className="text-neutral-500">Interactive 3D Stage</span>
      </div>
    </div>
  );
};
