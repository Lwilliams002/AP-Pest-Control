import { useState } from "react";
import type { Pest } from "@/lib/pests";
import { REGION_FLAG } from "@/lib/pests";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";

export function RegionPests({
  pests,
  region,
}: {
  pests: Pest[];
  region: "miami" | "arizona";
}) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const selected = pests[active];

  const iconFilter = (p: Pest) => {
    // Keep the commercial building icon in full color so its windows remain visible.
    if (p.t.toLowerCase().includes("commercial")) return "";
    return region === "arizona" ? "[filter:brightness(0)_invert(1)]" : "[filter:brightness(0)]";
  };

  return (
    <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
      <div className="lg:col-span-7">
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 sm:gap-3">
          {pests.map((p, i) => {
            const isActive = i === active;
            return (
              <button
                key={p.t}
                onClick={() => {
                  setActive(i);
                  if (isMobile) setOpen(true);
                }}
                className={`group relative aspect-square border ${isActive ? "border-brand bg-brand/5 shadow-md" : "border-border bg-card hover:border-brand/60"} p-2 sm:p-3 transition flex flex-col items-center justify-center text-center rounded-sm`}
                aria-label={p.t}
              >
                {p.unique && (
                  <span className="absolute top-1 right-1 text-sm leading-none" title={REGION_FLAG[p.unique].label}>
                    {REGION_FLAG[p.unique].emoji}
                  </span>
                )}
                <img
                  src={p.img}
                  alt={p.t}
                  loading="lazy"
                  className={`w-full h-full max-h-[60%] object-contain transition ${iconFilter(p)} ${isActive ? "scale-110" : "group-hover:scale-105 opacity-90"}`}
                />
                <span className={`mt-1 text-[9px] sm:text-[10px] uppercase tracking-wider font-bold ${isActive ? "text-brand" : "text-muted-foreground"}`}>
                  {p.t.replace(" Pest Control", "").replace(" Control", "").replace(" Defense", "").replace(" Treatment", "").replace(" Removal", "")}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="hidden lg:block lg:col-span-5">
        <article className="border border-brand/40 bg-card p-6 sm:p-8 h-full flex flex-col gap-5 rounded-sm shadow-md">
          <div className="flex items-center gap-4">
            <img src={selected.img} alt={selected.t} className={`w-20 h-20 sm:w-24 sm:h-24 object-contain animate-float shrink-0 ${iconFilter(selected)}`} />
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand mb-1">Pest Program</p>
              <h3 className="text-xl sm:text-2xl font-display font-bold leading-tight text-foreground">{selected.t}</h3>
              {selected.unique && (
                <span className="inline-flex items-center gap-1.5 mt-2 px-2 py-1 border border-brand bg-brand/5 text-[10px] uppercase tracking-[0.2em] font-bold text-brand">
                  <span className="text-base leading-none">{REGION_FLAG[selected.unique].emoji}</span>
                  {REGION_FLAG[selected.unique].label}
                </span>
              )}
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-brand mb-2">What it is</p>
            <p className="text-sm text-foreground/85 leading-relaxed">{selected.about}</p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-brand mb-2">Signs you have them</p>
            <ul className="space-y-1.5">
              {selected.signs.map((s) => (
                <li key={s} className="text-sm text-foreground/85 flex gap-2 leading-relaxed">
                  <span className="text-accent">◆</span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-3 border-t border-border">
            <p className="text-[10px] uppercase tracking-[0.3em] text-brand mb-2">Why it matters</p>
            <p className="text-sm text-foreground/85 leading-relaxed">{selected.risk}</p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-brand mb-2">Our approach</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{selected.d}</p>
          </div>
        </article>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="lg:hidden max-h-[90vh] overflow-y-auto max-w-[95vw] rounded-sm">
          <DialogTitle className="sr-only">{selected.t}</DialogTitle>
          <article className="flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <img src={selected.img} alt={selected.t} className={`w-20 h-20 object-contain shrink-0 ${iconFilter(selected)}`} />
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-brand mb-1">Pest Program</p>
                <h3 className="text-xl font-display font-bold leading-tight text-foreground">{selected.t}</h3>
                {selected.unique && (
                  <span className="inline-flex items-center gap-1.5 mt-2 px-2 py-1 border border-brand bg-brand/5 text-[10px] uppercase tracking-[0.2em] font-bold text-brand">
                    <span className="text-base leading-none">{REGION_FLAG[selected.unique].emoji}</span>
                    {REGION_FLAG[selected.unique].label}
                  </span>
                )}
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand mb-2">What it is</p>
              <p className="text-sm text-foreground/85 leading-relaxed">{selected.about}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand mb-2">Signs you have them</p>
              <ul className="space-y-1.5">
                {selected.signs.map((s) => (
                  <li key={s} className="text-sm text-foreground/85 flex gap-2 leading-relaxed">
                    <span className="text-accent">◆</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-3 border-t border-border">
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand mb-2">Why it matters</p>
              <p className="text-sm text-foreground/85 leading-relaxed">{selected.risk}</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand mb-2">Our approach</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{selected.d}</p>
            </div>
          </article>
        </DialogContent>
      </Dialog>
    </div>
  );
}
