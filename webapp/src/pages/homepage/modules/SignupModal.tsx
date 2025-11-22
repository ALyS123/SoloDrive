// webapp/src/pages/homepage/modules/SignupModal.tsx

import React, { useEffect, useState } from "react";

interface SignupModalProps {
  open: boolean;
  onClose: () => void;
}

export default function SignupModal({ open, onClose }: SignupModalProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // derived checks
  const hasMinLength = password.length >= 8;
  const hasSymbol = /[^A-Za-z0-9]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const passwordsMatch = password.length > 0 && password === confirmPassword;

  // Close on ESC
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const handleBackdropClick = () => {
    onClose();
  };

  const stopPropagation: React.MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation();
  };

  // theme-matching requirement colors: fuchsia when unmet, cyan when satisfied
  const requirementClass = (ok: boolean) =>
    `flex items-center gap-1.5 text-[11px] ${
      ok ? "text-sky-300" : "text-fuchsia-300"
    }`;

  const icon = (ok: boolean) => (ok ? "✓" : "✕");

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
                User name
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400"
                placeholder=""
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-200">
                Email
              </label>
              <input
                type="email"
                className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400"
                placeholder=""
              />
            </div>

            {/* Password – full width with requirements */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-200">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 pr-16 py-2 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400"
                  placeholder=""
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-[11px] font-medium text-fuchsia-400 hover:text-fuchsia-300"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

              {/* Password requirements */}
              <div className="mt-1 space-y-0.5">
                <div className={requirementClass(hasMinLength)}>
                  <span>{icon(hasMinLength)}</span>
                  <span>At least 8 characters</span>
                </div>
                <div className={requirementClass(hasSymbol)}>
                  <span>{icon(hasSymbol)}</span>
                  <span>At least 1 unique symbol</span>
                </div>
                <div className={requirementClass(hasUpper)}>
                  <span>{icon(hasUpper)}</span>
                  <span>At least 1 capital letter</span>
                </div>
                <div className={requirementClass(hasNumber)}>
                  <span>{icon(hasNumber)}</span>
                  <span>At least 1 number</span>
                </div>
              </div>
            </div>

            {/* Confirm password below */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-200">
                Confirm password
              </label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 pr-16 py-2 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-fuchsia-400 focus:ring-1 focus:ring-fuchsia-400"
                  placeholder=""
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((prev) => !prev)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-[11px] font-medium text-fuchsia-400 hover:text-fuchsia-300"
                  aria-label={
                    showConfirm ? "Hide confirm password" : "Show confirm password"
                  }
                >
                  {showConfirm ? "Hide" : "Show"}
                </button>
              </div>

              {/* Confirm requirement */}
              <div className="mt-1">
                <div className={requirementClass(passwordsMatch)}>
                  <span>{icon(passwordsMatch)}</span>
                  <span>Passwords match</span>
                </div>
              </div>
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
