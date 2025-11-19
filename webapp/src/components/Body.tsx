export default function HomePage() {
  return (
    <div className="relative">
      {/* soft background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-10 h-64 w-64 rounded-full bg-cyan-500/15 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-72 w-72 rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* HERO */}
        <section className="grid gap-10 lg:grid-cols-[1.1fr,1fr] items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-slate-900/70 px-3 py-1 text-[11px] font-medium text-slate-200/80 shadow-lg shadow-sky-500/10">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Early Access · SoloDrive
            </div>

            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
              One space for{" "}
              <span className="bg-linear-to-r from-sky-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
                chat, voice, and cloud storage
              </span>
              .
            </h1>

            <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-300/80">
              SoloDrive keeps your conversations, voice channels, and files in sync.
              No more jumping between apps—just one fast, modern workspace that follows you
              across devices.
            </p>

            {/* CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-linear-to-r from-sky-500 via-fuchsia-500 to-violet-500 px-5 py-2.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-sky-500/40 transition-all duration-200 hover:scale-[1.03] hover:shadow-2xl hover:shadow-fuchsia-500/45">
                <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-linear-to-r from-transparent via-white/30 to-transparent opacity-80 transition-transform duration-700 group-hover:translate-x-[120%]" />
                <span className="relative z-10">Get started free</span>
              </button>

              <button className="inline-flex items-center gap-2 rounded-xl border border-slate-600/70 bg-slate-900/70 px-4 py-2 text-sm font-medium text-slate-200/90 shadow-sm shadow-slate-900/80 transition-all duration-200 hover:border-sky-400/80 hover:text-sky-100">
                See live demo
              </button>
            </div>

            {/* mini highlights */}
            <div className="mt-6 grid gap-3 text-xs text-slate-300/80 sm:grid-cols-3 max-w-lg">
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <div>
                  <p className="font-semibold text-slate-100 text-[11px] uppercase tracking-[0.16em]">
                    Unified inbox
                  </p>
                  <p className="mt-1 text-[11px]">
                    Channels, DMs, and voice in one clean interface.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                <div>
                  <p className="font-semibold text-slate-100 text-[11px] uppercase tracking-[0.16em]">
                    Cloud-first storage
                  </p>
                  <p className="mt-1 text-[11px]">
                    Upload, preview, and share files without leaving chat.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <div>
                  <p className="font-semibold text-slate-100 text-[11px] uppercase tracking-[0.16em]">
                    Private by design
                  </p>
                  <p className="mt-1 text-[11px]">
                    End-to-end control over your data and conversations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: fake app preview */}
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-linear-to-tr from-sky-500/20 via-fuchsia-500/10 to-violet-500/20 blur-2xl" />
            <div className="relative rounded-3xl border border-slate-700/70 bg-slate-900/90 p-4 shadow-2xl shadow-sky-900/40 backdrop-blur-xl">
              {/* top bar */}
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-rose-400/80" />
                  <span className="h-2 w-2 rounded-full bg-amber-300/80" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
                </div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                  SoloDrive · Preview
                </span>
              </div>

              <div className="grid gap-3 sm:grid-cols-[0.9fr,1.1fr]">
                {/* sidebar */}
                <div className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-3 text-[11px]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Channels
                  </p>
                  <div className="mt-2 space-y-1.5">
                    <div className="flex items-center justify-between rounded-lg bg-sky-500/10 px-2 py-1">
                      <span className="text-slate-100"># general</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </div>
                    <div className="flex items-center justify-between rounded-lg px-2 py-1 text-slate-400 hover:bg-slate-800/70">
                      <span># voice-lounge</span>
                      <span className="text-[9px] text-slate-500">live</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg px-2 py-1 text-slate-400 hover:bg-slate-800/70">
                      <span># uploads</span>
                      <span className="text-[9px] text-slate-500">12 files</span>
                    </div>
                  </div>

                  <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                    Storage
                  </p>
                  <div className="mt-2 space-y-1.5 text-[11px]">
                    <div className="flex justify-between text-slate-300/90">
                      <span>Cloud space</span>
                      <span>72% used</span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-slate-800">
                      <div className="h-1.5 w-3/4 rounded-full bg-linear-to-r from-sky-400 to-fuchsia-400" />
                    </div>
                  </div>
                </div>

                {/* chat pane */}
                <div className="flex flex-col rounded-2xl border border-slate-700/70 bg-slate-950/70 p-3 text-[11px]">
                  <div className="mb-2 flex items-center justify-between">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                      # general
                    </p>
                    <span className="rounded-full bg-sky-500/15 px-2 py-0.5 text-[10px] text-sky-200">
                      Connected
                    </span>
                  </div>

                  <div className="flex-1 space-y-2 overflow-hidden">
                    <div className="flex gap-2">
                      <div className="mt-1 h-5 w-5 rounded-full bg-linear-to-br from-sky-500 to-fuchsia-500" />
                      <div>
                        <p className="text-[10px] text-slate-400">You · just now</p>
                        <p className="text-[11px] text-slate-100">
                          Uploaded <span className="text-sky-300">project-design.pdf</span> to
                          <span className="text-sky-300"> /SoloDrive/Work</span>.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className="mt-1 h-5 w-5 rounded-full bg-slate-700" />
                      <div>
                        <p className="text-[10px] text-slate-400">Teammate</p>
                        <p className="text-[11px] text-slate-200">
                          Nice. I&apos;ll open it from the cloud tab.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <div className="mt-1 h-5 w-5 rounded-full bg-emerald-500/80" />
                      <div>
                        <p className="text-[10px] text-slate-400">SoloDrive Bot</p>
                        <p className="text-[11px] text-slate-200">
                          File synced and ready on all devices.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-3 py-1.5">
                    <span className="flex-1 text-[11px] text-slate-500">
                      Message #general or /upload
                    </span>
                    <span className="rounded-lg bg-linear-to-r from-sky-500 to-fuchsia-500 px-2 py-1 text-[10px] font-semibold text-white">
                      Send
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES STRIP */}
        <section className="mt-14 grid gap-4 sm:grid-cols-3 text-xs sm:text-[13px] text-slate-300/85">
          <div className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-4 shadow-lg shadow-slate-950/60">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-300">
              Chat-first
            </p>
            <p className="mt-2 text-sm text-slate-100">Real-time channels & DMs.</p>
            <p className="mt-1 text-[12px]">
              Reactions, threads, and presence built for fast conversations.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-4 shadow-lg shadow-slate-950/60">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-fuchsia-300">
              Voice-ready
            </p>
            <p className="mt-2 text-sm text-slate-100">Drop into voice rooms.</p>
            <p className="mt-1 text-[12px]">
              Hop into low-latency voice channels without leaving your workspace.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-4 shadow-lg shadow-slate-950/60">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Cloud storage
            </p>
            <p className="mt-2 text-sm text-slate-100">Files where you talk.</p>
            <p className="mt-1 text-[12px]">
              Drag, drop, and share with structure—folders, search, and previews.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
