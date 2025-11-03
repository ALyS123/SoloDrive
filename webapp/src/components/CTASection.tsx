export default function CTASection() {
  return (
    <section id="get-started" className="mx-auto max-w-7xl px-6 py-16">
      <div className="glass-card p-8 md:p-10">
        <div className="md:flex items-center justify-between gap-8">
          <div className="max-w-2xl">
            <h3 className="text-2xl md:text-3xl font-bold">
              Ready to claim your storage?
            </h3>
            <p className="mt-2 text-slate-300">
              Start in minutes — deploy behind Cloudflare, bring your own Postgres, and
              own your files end-to-end.
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex gap-3">
            <a
              href="#install"
              className="inline-flex items-center rounded-xl px-6 py-3 font-medium bg-emerald-600 hover:bg-emerald-500 transition"
            >
              Quick Install
            </a>
            <a
              href="#docs"
              className="inline-flex items-center rounded-xl px-6 py-3 font-medium border border-white/10 hover:border-white/30 transition"
            >
              Read Docs
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
