export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur border-b border-white/10 bg-slate-900/40">
      <div className="w-full px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-linear-to-br from-sky-400 via-cyan-300 to-emerald-300" />
          <span className="font-semibold tracking-tight">SoloDrive</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a className="hover:text-white" href="#features">Features</a>
          <a className="hover:text-white" href="#how">How it works</a>
          <a className="hover:text-white" href="#pricing">Pricing</a>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#docs"
            className="hidden sm:inline-flex items-center rounded-xl px-4 py-2 text-sm border border-white/10 hover:border-white/30 transition"
          >
            Docs
          </a>
          <a
            href="#get-started"
            className="inline-flex items-center rounded-xl px-4 py-2 text-sm font-medium bg-sky-600 hover:bg-sky-500 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </header>
  );
}
