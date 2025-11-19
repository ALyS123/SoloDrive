import { useState, useEffect } from 'react';

export default function SiteHeader() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isGlowing, setIsGlowing] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlowing((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-purple-500/15 bg-slate-950/80 backdrop-blur-xl shadow-2xl shadow-purple-500/10">
      {/* subtle top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-cyan-400/80 via-fuchsia-500/80 to-violet-500/80" />

      {/* mouse-follow glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          background: `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(56, 189, 248, 0.25), transparent 55%)`,
        }}
      />

      {/* glass / depth layer */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.18),_transparent_60%),linear-gradient(to_bottom,_rgba(15,23,42,0.97),_rgba(15,23,42,1))]" />

      <div className="relative mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div
            className={`relative flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/30 ring-1 ring-sky-300/40 transition-all duration-500 group-hover:scale-110 group-hover:shadow-2xl group-hover:shadow-sky-400/40 ${
              isGlowing ? 'brightness-110' : 'brightness-[0.97]'
            }`}
          >
            <div className="absolute inset-[2px] rounded-2xl bg-slate-950/90 backdrop-blur-sm border border-sky-400/40" />
            <span className="relative text-lg font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-sky-400 via-cyan-200 to-white">
              S
            </span>
          </div>

          <div className="flex flex-col">
            <span className="bg-gradient-to-r from-sky-400 via-fuchsia-300 to-violet-400 bg-clip-text text-lg font-semibold tracking-tight text-transparent">
              SoloDrive
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-300/70">
              Chat · Voice · Cloud
            </span>
          </div>
        </div>

        {/* Auth buttons */}
        <div className="flex items-center gap-3">
          {/* Login */}
          <button className="group relative inline-flex items-center gap-2 rounded-xl border border-slate-600/70 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-200/90 shadow-sm shadow-slate-900/80 transition-all duration-200 hover:border-sky-400/80 hover:text-sky-100 hover:shadow-sky-500/25">
            <span className="relative z-10">Log in</span>
            <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-sky-500/0 via-sky-500/10 to-fuchsia-500/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </button>

          {/* Sign Up */}
          <button className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-sky-500 via-fuchsia-500 to-violet-500 px-5 py-2.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-sky-500/40 transition-all duration-200 hover:scale-[1.03] hover:shadow-2xl hover:shadow-fuchsia-500/45">
            <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-80 transition-transform duration-700 group-hover:translate-x-[120%]" />
            <span className="relative z-10">Sign up</span>
          </button>
        </div>
      </div>

      {/* Animated bottom border */}
      <div className="relative h-[2px] w-full overflow-hidden bg-gradient-to-r from-transparent via-purple-500/70 to-transparent">
        <div className="absolute inset-0 translate-x-[-50%] bg-gradient-to-r from-sky-400 via-fuchsia-400 to-violet-500 blur-[1px] motion-safe:animate-[pulse_2.6s_ease-in-out_infinite]" />
      </div>
    </header>
  );
}
