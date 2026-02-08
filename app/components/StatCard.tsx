import type { ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string;
  hint?: string;
  accent?: boolean;
  children?: ReactNode;
}

export function StatCard({ label, value, hint, accent, children }: StatCardProps) {
  return (
    <div className={`rounded-2xl border border-white/10 bg-card p-5 ${accent ? "gradient-card" : ""}`}>
      <p className="text-xs uppercase tracking-[0.3em] text-white/50">{label}</p>
      <div className="mt-3 flex items-end justify-between gap-4">
        <p className="text-3xl font-semibold">{value}</p>
        {children}
      </div>
      {hint ? <p className="mt-3 text-sm text-white/60">{hint}</p> : null}
    </div>
  );
}
