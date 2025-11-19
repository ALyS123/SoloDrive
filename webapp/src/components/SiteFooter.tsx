export default function SiteFooter() {
  return (
    <footer className="relative mt-16 border-t border-purple-500/20 bg-slate-950/90 backdrop-blur-xl">
      {/* top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-sky-400/80 via-fuchsia-500/80 to-violet-500/80" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 text-xs sm:text-sm text-slate-400/80">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Logo block (matches header) */}
          <div className="flex items-center gap-3">
            <div className="relative flex size-9 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 via-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/30 ring-1 ring-sky-300/40">
              <div className="absolute inset-[2px] rounded-2xl bg-slate-950/90 backdrop-blur-sm border border-sky-400/40" />
              <span className="relative text-sm font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-sky-400 via-cyan-200 to-white">
                S
              </span>
            </div>
            <div className="flex flex-col">
              <span className="bg-gradient-to-r from-sky-400 via-fuchsia-300 to-violet-400 bg-clip-text text-sm font-semibold tracking-tight text-transparent">
                SoloDrive
              </span>
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-slate-300/70">
                Chat · Voice · Cloud
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-wrap items-center gap-4 text-[11px] sm:text-xs">
            <a href="#privacy" className="transition-colors hover:text-sky-100">
              Privacy
            </a>
            <a href="#terms" className="transition-colors hover:text-sky-100">
              Terms
            </a>
            <a href="#contact" className="transition-colors hover:text-sky-100">
              Contact
            </a>
          </div>
        </div>

        <p className="mt-4 text-[11px] text-slate-500/80">
          &copy; {new Date().getFullYear()} SoloDrive. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
