// webapp/src/pages/homepage/modules/SignupModal.tsx

import React from "react";

interface SignupModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SignupModal({ open, onClose }: SignupModalProps) {
  if (!open) return null;

  const handleBackdropClick = () => {
    onClose();
  };

  const stopPropagation: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md"
      onClick={handleBackdropClick}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-slate-700/70 bg-slate-900/95 px-6 py-6 shadow-2xl shadow-fuchsia-500/40"
        onClick={stopPropagation}
      >
        {/* Glow accent */}
        <div className="pointer-events-none absolute -inset-px rounded-2xl bg-linear-to-r from-sky-500/20 via-fuchsia-500/25 to-violet-500/25 opacity-80 blur-xl" />

        <div className="relative space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="bg-linear-to-r from-sky-400 via-fuchsia-300 to-violet-400 bg-clip-text text-lg font-semibold tracking-tight text-transparent">
                Create your SoloDrive account
              </h2>
              <p className="mt-1 text-xs text-slate-300/80">
                One identity for chat, voice, file storage, and more.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-600/70 bg-slate-900/90 text-slate-300/80 text-xs hover:border-fuchsia-400/80 hover:text-fuchsia-100"
            >
              ✕
            </button>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-200">
                Display name
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400"
                placeholder="Ali"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-200">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400"
                placeholder="you@example.com"
              />
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-200">
                  Password
                </label>
                <input
                  type="password"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400"
                  placeholder="••••••••"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-200">
                  Confirm
                </label>
                <input
                  type="password"
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-medium text-slate-200">
                Preferred username / handle
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400"
                placeholder="@solodriver"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-linear-to-r from-sky-500 via-fuchsia-500 to-violet-500 px-4 py-2.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-fuchsia-500/40 transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl hover:shadow-sky-500/45"
            >
              Sign up
            </button>
          </form>

          <p className="text-center text-[11px] text-slate-400/90">
            By creating an account you agree to the{" "}
            <span className="font-medium text-sky-400">Terms</span> and{" "}
            <span className="font-medium text-sky-400">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
}
