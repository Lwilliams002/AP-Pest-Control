import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Pest } from "@/lib/pests";

type Slide = {
  pest: Pest;
  kicker: string;
  headlineLead: string;
  headlineTail: string;
  body: string;
  steps: { label: string; body: string }[];
  badges: string[];
  cta: string;
};

export function MiamiHotspotSlider({ slides }: { slides: Slide[] }) {
  const [active, setActive] = useState(0);
  const current = slides[active];

  return (
    <div className="mb-14 relative overflow-hidden border-2 border-accent/60 rounded-sm bg-gradient-to-br from-accent/15 via-card to-secondary/10">
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-accent/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-16 -left-10 w-56 h-56 bg-secondary/20 blur-3xl rounded-full pointer-events-none" />

      {/* Tab strip — all three pests, active is highlighted */}
      <div role="tablist" className="relative grid grid-cols-3 border-b-2 border-accent/40 bg-card/40 backdrop-blur">
        {slides.map((s, i) => {
          const isActive = i === active;
          return (
            <button
              key={s.pest.t}
              role="tab"
              aria-selected={isActive}
              type="button"
              onClick={() => setActive(i)}
              className={`relative group flex items-center justify-center gap-3 px-3 py-4 sm:px-5 sm:py-5 text-left transition-colors duration-300 ${
                isActive ? "bg-accent/10" : "hover:bg-accent/5"
              } ${i !== 0 ? "border-l border-accent/30" : ""}`}
            >
              <img
                src={s.pest.img}
                alt=""
                className={`w-10 h-10 sm:w-12 sm:h-12 object-contain shrink-0 [filter:brightness(0)] transition-all duration-300 ${
                  isActive ? "scale-110" : "opacity-60 group-hover:opacity-100"
                }`}
              />
              <div className="min-w-0">
                <p className={`text-[9px] uppercase tracking-[0.25em] font-bold mb-0.5 ${isActive ? "text-accent" : "text-muted-foreground"}`}>
                  {isActive ? "Now Viewing" : "View"}
                </p>
                <p className={`text-xs sm:text-sm font-display font-bold uppercase tracking-wide leading-tight ${
                  isActive ? "text-foreground" : "text-foreground/70"
                }`}>
                  {s.pest.t.replace(/ (Pest )?Control| Treatment/g, "")}
                </p>
              </div>
              {isActive && (
                <motion.span
                  layoutId="miami-hotspot-tab-underline"
                  className="absolute left-0 right-0 -bottom-[2px] h-[3px] bg-accent"
                  transition={{ type: "spring", stiffness: 320, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Active pest panel */}
      <div className="relative p-6 sm:p-10 min-h-[540px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.pest.t}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid lg:grid-cols-[auto,1fr] gap-6 lg:gap-10 items-center">
              <motion.img
                src={current.pest.img}
                alt={`${current.pest.t} illustration`}
                initial={{ scale: 0.85, rotate: -6, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="w-32 h-32 sm:w-44 sm:h-44 object-contain animate-float shrink-0 mx-auto lg:mx-0 [filter:brightness(0)]"
              />
              <div>
                <span className="inline-flex items-center gap-1.5 px-2 py-1 border border-accent bg-accent/15 text-[10px] uppercase tracking-[0.25em] font-bold text-accent rounded-sm mb-3">
                  {current.kicker}
                </span>
                <h3 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-wide leading-tight">
                  <span className="text-gradient-miami">{current.headlineLead}</span> {current.headlineTail}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-foreground/85 leading-relaxed max-w-2xl">
                  {current.body}
                </p>
              </div>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {current.steps.map((s, i) => (
                <div key={s.label} className="border border-border/60 bg-card/80 backdrop-blur p-4 rounded-sm">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-2">
                    Step {i + 1} · {s.label}
                  </p>
                  <p className="text-sm text-foreground/85 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
              {current.badges.map((b) => (
                <span key={b} className="flex items-center gap-1.5">
                  <span className="text-accent">◆</span> {b}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-7">
              <a href="#miami-contact" className="inline-flex items-center px-5 py-2.5 bg-accent text-accent-foreground font-semibold uppercase tracking-widest text-xs rounded-sm hover:opacity-90 transition">
                {current.cta}
              </a>
              <a href="#miami-contact" className="inline-flex items-center px-5 py-2.5 border border-accent/60 text-foreground font-semibold uppercase tracking-widest text-xs rounded-sm hover:bg-accent/10 transition">
                Free yard inspection
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
  );
}

export type { Slide as HotspotSlide };