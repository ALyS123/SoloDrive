// webapp/src/pages/homepage/modules/LoginModal.tsx

import React, { useState } from "react";

interface LoginModalProps {
  open: boolean;
  onClose: () => void;
}

export default function LoginModal({ open, onClose }: LoginModalProps) {
  if (!open) return null;

  const [showPassword, setShowPassword] = useState(false);

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
        className="relative w-full max-w-md rounded-2xl border border-slate-700/70 bg-slate-900/95 px-6 py-6 shadow-2xl shadow-sky-500/40"
        onClick={stopPropagation}
      >
        {/* Glow accent */}
        <div className="pointer-events-none absolute -inset-px rounded-2xl bg-linear-to-r from-sky-500/20 via-fuchsia-500/15 to-violet-500/20 opacity-70 blur-xl" />

        <div className="relative space-y-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-3">
            <div>
              <h2 className="bg-linear-to-r from-sky-400 via-fuchsia-300 to-violet-400 bg-clip-text text-lg font-semibold tracking-tight text-transparent">
                Log in to SoloDrive
              </h2>
              <p className="mt-1 text-xs text-slate-300/80">
                Access your chats, files, and voice channels from anywhere.
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-600/70 bg-slate-900/90 text-slate-300/80 text-xs hover:border-sky-400/80 hover:text-sky-100"
            >
              ✕
            </button>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-200">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-200">
                Password
              </label>

              {/* Password with "Show password" toggle */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 pr-16 py-2 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-sky-400 focus:ring-1 focus:ring-sky-400"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-[11px] font-medium text-sky-400 hover:text-sky-300"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-xs text-slate-300/80">
                <input
                  type="checkbox"
                  className="h-3.5 w-3.5 rounded border-slate-600 bg-slate-900 text-sky-500"
                />
                <span>Keep me signed in</span>
              </label>
              <button
                type="button"
                className="text-xs font-medium text-sky-400 hover:text-sky-300"
              >
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-linear-to-r from-sky-500 via-fuchsia-500 to-violet-500 px-4 py-2.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-sky-500/40 transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl hover:shadow-fuchsia-500/45"
            >
              Log in
            </button>
          </form>

          <p className="text-center text-[11px] text-slate-400/90">
            Don&apos;t have an account?{" "}
            <span className="font-medium text-sky-400">Sign up instead</span>
          </p>
        </div>
      </div>
    </div>
  );
}
