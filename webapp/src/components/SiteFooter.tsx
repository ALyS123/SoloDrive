export default function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-400">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded-md bg-linear-to-br from-sky-400 via-cyan-300 to-emerald-300" />
            <span className="font-medium text-slate-200">SoloDrive</span>
          </div>
          <div className="flex gap-5">
            <a className="hover:text-white" href="#privacy">Privacy</a>
            <a className="hover:text-white" href="#terms">Terms</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </div>
        </div>
        <p className="mt-4">&copy; {new Date().getFullYear()} SoloDrive. All rights reserved.</p>
      </div>
    </footer>
  );
}
