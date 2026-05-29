import { useEffect, useState } from "react";
import type { Pest } from "@/lib/pests";
import { REGION_FLAG } from "@/lib/pests";
import { Drawer, DrawerContent, DrawerTitle } from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function RegionPests({ pests, region }: { pests: Pest[]; region: "miami" | "arizona" }) {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const selected = pests[active];

  const pestToneClass = (p: Pest) =>
    `pest-art-${p.t
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")}`;

  const renderIcon = (p: Pest, className: string) => {
    return (
      <img
        src={p.img}
        alt={p.t}
        loading="lazy"
        className={`${className} realistic-pest-icon ${pestToneClass(p)}`}
      />
    );
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, startIndex: active });

  useEffect(() => {
    if (!emblaApi) return;
    if (open) emblaApi.scrollTo(active, true);
  }, [active, open, emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActive(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const renderDetail = (p: Pest) => (
    <article className="flex flex-col gap-5">
      <div className="flex items-center gap-4">
        {renderIcon(p, "w-20 h-20 object-contain shrink-0")}
        <div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-brand mb-1">Pest Program</p>
          <h3 className="text-xl font-display font-bold leading-tight text-foreground">{p.t}</h3>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {p.unique && (
              <span className="inline-flex items-center gap-1.5 px-2 py-1 border border-brand bg-brand/5 text-[10px] uppercase tracking-[0.2em] font-bold text-brand">
                <span className="text-base leading-none">{REGION_FLAG[p.unique].emoji}</span>
                {REGION_FLAG[p.unique].label}
              </span>
            )}
            {p.seasonal && (
              <span className="inline-flex items-center gap-1.5 px-2 py-1 border border-accent bg-accent/10 text-[10px] uppercase tracking-[0.2em] font-bold text-accent">
                🔥 {p.seasonal}
              </span>
            )}
          </div>
        </div>
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-brand mb-2">What it is</p>
        <p className="text-sm text-foreground/85 leading-relaxed">{p.about}</p>
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-brand mb-2">
          Signs you have them
        </p>
        <ul className="space-y-1.5">
          {p.signs.map((s) => (
            <li key={s} className="text-sm text-foreground/85 flex gap-2 leading-relaxed">
              <span className="text-accent">◆</span>
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-3 border-t border-border">
        <p className="text-[10px] uppercase tracking-[0.3em] text-brand mb-2">Why it matters</p>
        <p className="text-sm text-foreground/85 leading-relaxed">{p.risk}</p>
      </div>
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-brand mb-2">Our approach</p>
        <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
      </div>
    </article>
  );

  return (
    <div className="grid lg:grid-cols-12 gap-6 lg:gap-8" data-region={region}>
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
                  <span
                    className="absolute top-1 right-1 text-sm leading-none"
                    title={REGION_FLAG[p.unique].label}
                  >
                    {REGION_FLAG[p.unique].emoji}
                  </span>
                )}
                {p.seasonal && (
                  <span
                    className="absolute top-1 left-1 text-[8px] uppercase tracking-wider font-bold text-accent-foreground bg-accent px-1.5 py-0.5 rounded-sm leading-none"
                    title={p.seasonal}
                  >
                    🔥
                  </span>
                )}
                {renderIcon(
                  p,
                  `w-full h-full max-h-[60%] object-contain transition ${isActive ? "scale-110" : "group-hover:scale-105 opacity-90"}`,
                )}
                <span
                  className={`mt-1 text-[9px] sm:text-[10px] uppercase tracking-wider font-bold ${isActive ? "text-brand" : "text-muted-foreground"}`}
                >
                  {p.t
                    .replace(" Pest Control", "")
                    .replace(" Control", "")
                    .replace(" Defense", "")
                    .replace(" Treatment", "")
                    .replace(" Removal", "")}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="hidden lg:block lg:col-span-5">
        <article className="border border-brand/40 bg-card p-6 sm:p-8 h-full flex flex-col gap-5 rounded-sm shadow-md">
          <div className="flex items-center gap-4">
            {renderIcon(
              selected,
              "w-20 h-20 sm:w-24 sm:h-24 object-contain animate-float shrink-0",
            )}
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand mb-1">Pest Program</p>
              <h3 className="text-xl sm:text-2xl font-display font-bold leading-tight text-foreground">
                {selected.t}
              </h3>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {selected.unique && (
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 border border-brand bg-brand/5 text-[10px] uppercase tracking-[0.2em] font-bold text-brand">
                    <span className="text-base leading-none">
                      {REGION_FLAG[selected.unique].emoji}
                    </span>
                    {REGION_FLAG[selected.unique].label}
                  </span>
                )}
                {selected.seasonal && (
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 border border-accent bg-accent/10 text-[10px] uppercase tracking-[0.2em] font-bold text-accent">
                    🔥 {selected.seasonal}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-brand mb-2">What it is</p>
            <p className="text-sm text-foreground/85 leading-relaxed">{selected.about}</p>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-brand mb-2">
              Signs you have them
            </p>
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

      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent className="lg:hidden max-h-[90vh] focus:outline-none">
          <DrawerTitle className="sr-only">{selected.t}</DrawerTitle>
          <div className="px-4 pt-2 pb-1 flex items-center justify-between">
            <button
              onClick={() => emblaApi?.scrollPrev()}
              disabled={active === 0}
              className="p-2 -ml-2 text-muted-foreground disabled:opacity-30"
              aria-label="Previous pest"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Swipe · {active + 1} / {pests.length}
            </p>
            <button
              onClick={() => emblaApi?.scrollNext()}
              disabled={active === pests.length - 1}
              className="p-2 -mr-2 text-muted-foreground disabled:opacity-30"
              aria-label="Next pest"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {pests.map((p) => (
                <div
                  key={p.t}
                  className="flex-[0_0_100%] min-w-0 px-5 pb-6 pt-2 overflow-y-auto max-h-[75vh]"
                >
                  {renderDetail(p)}
                </div>
              ))}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
