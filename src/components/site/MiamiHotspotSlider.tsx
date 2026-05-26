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

  return (
    <div className="mb-14 relative overflow-hidden border-2 border-accent/60 rounded-sm bg-gradient-to-br from-accent/15 via-card to-secondary/10">
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-accent/20 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-16 -left-10 w-56 h-56 bg-secondary/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative flex flex-col md:flex-row md:items-stretch gap-1 p-1 md:h-[700px] lg:h-[680px]">
        {slides.map((s, i) => {
          const isActive = i === active;
          return (
            <motion.div
              key={s.pest.t}
              onClick={() => !isActive && setActive(i)}
              animate={{ flex: isActive ? 8 : 1 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className={`relative overflow-hidden rounded-sm border transition-colors duration-300 min-h-[88px] md:min-h-0 md:h-full ${
                isActive
                  ? "border-accent/60 bg-card/80 cursor-default"
                  : "border-border/50 bg-card/40 hover:bg-accent/10 cursor-pointer"
              }`}
            >
              {/* Collapsed view */}
              <AnimatePresence>
                {!isActive && (
                  <motion.button
                    key="collapsed"
                    type="button"
                    onClick={() => setActive(i)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 flex md:flex-col items-center justify-center gap-3 p-4 group"
                    aria-label={`View ${s.pest.t}`}
                  >
                    <img
                      src={s.pest.img}
                      alt=""
                      className="w-14 h-14 md:w-16 md:h-16 object-contain opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 [filter:brightness(0)]"
                    />
                    <div className="md:[writing-mode:vertical-rl] md:rotate-180 text-center">
                      <p className="text-[9px] uppercase tracking-[0.3em] text-accent font-bold mb-1">
                        View
                      </p>
                      <p className="font-display text-sm md:text-base font-bold uppercase tracking-wider text-foreground/85 leading-tight">
                        {s.pest.t.replace(/ (Pest )?Control| Treatment/g, "")}
                      </p>
                    </div>
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Expanded view */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key="expanded"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, delay: 0.2 }}
                    className="relative md:absolute md:inset-0 p-6 sm:p-8 lg:p-10"
                  >
                    <div className="grid lg:grid-cols-[auto,1fr] gap-6 lg:gap-10 items-center">
                      <img
                        src={s.pest.img}
                        alt={`${s.pest.t} illustration`}
                        className="w-28 h-28 sm:w-40 sm:h-40 object-contain animate-float shrink-0 mx-auto lg:mx-0 [filter:brightness(0)]"
                      />
                      <div>
                        <span className="inline-flex items-center gap-1.5 px-2 py-1 border border-accent bg-accent/15 text-[10px] uppercase tracking-[0.25em] font-bold text-accent rounded-sm mb-3">
                          {s.kicker}
                        </span>
                        <h3 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-wide leading-tight">
                          <span className="text-gradient-miami">{s.headlineLead}</span>{" "}
                          {s.headlineTail}
                        </h3>
                        <p className="mt-3 text-sm sm:text-base text-foreground/85 leading-relaxed max-w-2xl">
                          {s.body}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 grid sm:grid-cols-3 gap-4">
                      {s.steps.map((st, idx) => (
                        <div
                          key={st.label}
                          className="border border-border/60 bg-card/80 backdrop-blur p-4 rounded-sm"
                        >
                          <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-2">
                            Step {idx + 1} · {st.label}
                          </p>
                          <p className="text-sm text-foreground/85 leading-relaxed">{st.body}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                      {s.badges.map((b) => (
                        <span key={b} className="flex items-center gap-1.5">
                          <span className="text-accent">◆</span> {b}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 mt-7">
                      <a
                        href="#miami-contact"
                        className="inline-flex items-center px-5 py-2.5 bg-accent text-accent-foreground font-semibold uppercase tracking-widest text-xs rounded-sm hover:opacity-90 transition"
                      >
                        {s.cta}
                      </a>
                      <a
                        href="#miami-contact"
                        className="inline-flex items-center px-5 py-2.5 border border-accent/60 text-foreground font-semibold uppercase tracking-widest text-xs rounded-sm hover:bg-accent/10 transition"
                      >
                        Free yard inspection
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export type { Slide as HotspotSlide };
