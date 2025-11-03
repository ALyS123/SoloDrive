const FEATURES = [
  {
    title: "File Sync",
    desc: "Upload, version, and restore. Drag-drop with instant previews.",
    icon: "📁",
  },
  {
    title: "Share Links",
    desc: "Granular permissions, expirations, and download counters.",
    icon: "🔗",
  },
  {
    title: "Encryption",
    desc: "At rest + in transit. Optional client-side encryption.",
    icon: "🛡️",
  },
  {
    title: "Activity & Audit",
    desc: "Track edits, shares, and sign-ins with IP/device notes.",
    icon: "📊",
  },
  {
    title: "Custom Domains",
    desc: "api.solodrive.cloud, files.solodrive.cloud — your brand.",
    icon: "🌐",
  },
  {
    title: "Postgres-Powered",
    desc: "Reliable metadata, sessions, and tokens on PostgreSQL.",
    icon: "🐘",
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Features</h2>
      <p className="mt-3 text-slate-300 max-w-2xl">
        Everything you need to run a private, secure, and performant personal cloud.
      </p>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {FEATURES.map((f) => (
          <article key={f.title} className="glass-card p-6">
            <div className="mb-3 text-2xl">{f.icon}</div>
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-1 text-slate-300 text-sm">{f.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
