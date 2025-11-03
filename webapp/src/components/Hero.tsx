export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40 mask-[radial-gradient(60%_60%_at_50%_20%,#000_20%,transparent_70%)]">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 size-272 rounded-full bg-linear-to-br from-sky-500/20 via-cyan-300/10 to-emerald-300/20 blur-3xl" />
      </div>

      <div className="w-full px-8 py-20 md:py-28">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Your personal cloud,
          <span className="bg-linear-to-r from-sky-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
            {" "}on your terms.
          </span>
        </h1>

        <p className="mt-5 text-lg text-slate-300 max-w-none">
          SoloDrive is a self-hosted storage hub with secure file sync, share links,
          and clean dashboards — deploy behind Cloudflare, bring your own domain.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#get-started"
            className="inline-flex items-center rounded-xl px-6 py-3 font-medium bg-sky-600 hover:bg-sky-500 transition"
          >
            Launch SoloDrive
          </a>
          <a
            href="#demo"
            className="inline-flex items-center rounded-xl px-6 py-3 font-medium border border-white/10 hover:border-white/30 transition"
          >
            Watch Demo
          </a>
        </div>
      </div>
    </section>
  );
}
