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
  const inactive = slides.map((s, i) => ({ s, i })).filter(({ i }) => i !== active);

  return (
    <div className="mb-14 relative overflow-hidden border-2 border-accent/60 rounded-sm bg-gradient-to-br from-accent/15 via-card to-secondary/10 p-6 sm:p-10">
        <div className="absolute -top-10 -right-10 w-48 h-48 bg-accent/20 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute -bottom-16 -left-10 w-56 h-56 bg-secondary/20 blur-3xl rounded-full pointer-events-none" />

        <div className="relative grid lg:grid-cols-[180px,1fr] gap-6 lg:gap-8 items-start">
          {/* Thumbnails for the OTHER two pests — inside the same box */}
          <div className="flex lg:flex-col gap-3 order-2 lg:order-1">
            {inactive.map(({ s, i }) => (
              <button
                key={s.pest.t}
                type="button"
                onClick={() => setActive(i)}
                className="group relative flex-1 lg:flex-none overflow-hidden rounded-sm border border-border/60 bg-card/70 hover:border-accent hover:bg-accent/10 transition-all duration-300 text-left"
                aria-label={`Show ${s.pest.t}`}
              >
                <div className="flex items-center gap-3 p-3 lg:flex-col lg:items-start lg:p-4">
                  <img
                    src={s.pest.img}
                    alt=""
                    className="w-12 h-12 lg:w-16 lg:h-16 object-contain shrink-0 [filter:brightness(0)] transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="min-w-0">
                    <p className="text-[9px] uppercase tracking-[0.25em] text-accent font-bold mb-0.5">
                      View
                    </p>
                    <p className="text-xs sm:text-sm font-display font-bold uppercase tracking-wide text-foreground/90 leading-tight">
                      {s.pest.t.replace(/ (Pest )?Control| Treatment/g, "")}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Active pest content */}
          <div className="order-1 lg:order-2 min-h-[520px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current.pest.t}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="grid lg:grid-cols-[auto,1fr] gap-6 lg:gap-10 items-center">
              <motion.img
                key={current.pest.img}
                src={current.pest.img}
                alt={`${current.pest.t} illustration`}
                initial={{ scale: 0.85, rotate: -6, opacity: 0 }}
                animate={{ scale: 1, rotate: 0, opacity: 1 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="w-28 h-28 sm:w-40 sm:h-40 object-contain animate-float shrink-0 mx-auto lg:mx-0 [filter:brightness(0)]"
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
        </div>
    </div>
  );
}

export type { Slide as HotspotSlide };