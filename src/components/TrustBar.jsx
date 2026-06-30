import * as React from "react";
import { Counter } from "./Testimonials";

const stats = [
  { from: 0, to: 50, suffix: "+", label: "Businesses Transformed" },
  { from: 0, to: 98, suffix: "%", label: "Client Satisfaction" },
  { from: 0, to: 1.5, decimals: 1, suffix: "yrs", label: "monday.com Partner" },
  { from: 0, to: 3, suffix: "x", label: "Avg Productivity Gain" },
];

const logos = [
  "Acme Corp",
  "Nexus Inc",
  "Vertex Co",
  "Orion Ltd",
  "Pulse HQ",
  "Stride Co",
];

export default function TrustBar() {
  return (
    <section className="border-y border-border bg-surface">
      {/* Stats row */}
      <div className="max-w-[1400px] mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-4xl font-bold text-primary mb-1">
              <Counter from={s.from} to={s.to} decimals={s.decimals} suffix={s.suffix} />
            </p>
            <p className="text-sm text-muted font-medium">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Logo strip */}
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <p className="text-center text-xs text-muted font-semibold uppercase tracking-widest mb-8">
          Trusted by teams across industries
        </p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 items-center justify-items-center">
          {logos.map((name) => (
            <div
              key={name}
              className="h-10 w-full max-w-[120px] bg-border/60 rounded-sm flex items-center justify-center"
            >
              <span className="text-[11px] font-bold text-muted tracking-wide">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
