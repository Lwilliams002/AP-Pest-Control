import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { RegionPests } from "@/components/site/RegionPests";
import { ContactForm } from "@/components/site/ContactForm";
import { miamiPests, miamiCities, miamiMosquito } from "@/lib/pests";
import miamiImg from "@/assets/miami-deco.jpg";

export const Route = createFileRoute("/miami")({
  component: MiamiPage,
  head: () => ({
    meta: [
      { title: "South Florida Pest Control — AP Pest Control" },
      { name: "description", content: "Pest control across South Florida — Miami, Fort Lauderdale, Boca Raton, West Palm Beach. Mosquitoes, roaches, iguanas, termites, no-see-ums and more." },
      { property: "og:title", content: "South Florida Pest Control — AP Pest" },
      { property: "og:description", content: "Neon-bright service across South Florida — Miami to Palm Beach. Built for humidity, hurricanes, and everything that bites." },
      { property: "og:image", content: miamiImg },
    ],
  }),
});

function MiamiPage() {
  return (
    <div className="theme-miami min-h-screen bg-background text-foreground palm-bg">
      <SiteNav />
      <main>
        <section className="relative">
          <img src={miamiImg} alt="Miami Art Deco hotel at sunset" width={1920} height={1024} className="w-full h-[55vh] sm:h-[65vh] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/30" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
              <p className="text-xs uppercase tracking-[0.5em] text-secondary mb-4 font-semibold neon-cyan">South Florida · Coast to Coast</p>
              <h1 className="font-display text-6xl sm:text-8xl md:text-9xl font-bold tracking-wider uppercase">
                <span className="neon-cyan">Hello,</span><br />
                <span className="text-gradient-miami">South FL.</span>
              </h1>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-3 font-semibold">From the 305 to the 561</p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wide">Built for the <span className="text-gradient-miami">whole coast.</span></h2>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
                From South Beach high-rises and Brickell condos to Fort Lauderdale canals, Boca estates, and Palm Beach pools — our program is engineered around humidity, ocean air, and the pests that thrive in both. Mosquitoes, roaches, termites, iguanas, no-see-ums — handled.
              </p>
              <Link to="/contact" className="inline-block mt-7 px-7 py-3.5 bg-brand text-brand-foreground font-semibold uppercase tracking-widest text-xs rounded-sm hover:opacity-90 transition">
                Book South Florida Service
              </Link>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-3 font-semibold">Cities served</p>
              <div className="flex flex-wrap gap-2">
                {miamiCities.map((c) => (
                  <span key={c} className="text-xs px-3 py-1.5 border border-secondary/40 bg-card uppercase tracking-wider rounded-sm text-foreground/90">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-14 relative overflow-hidden border-2 border-accent/60 rounded-sm bg-gradient-to-br from-accent/15 via-card to-secondary/10 p-6 sm:p-10">
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-accent/20 blur-3xl rounded-full pointer-events-none" />
              <div className="absolute -bottom-16 -left-10 w-56 h-56 bg-secondary/20 blur-3xl rounded-full pointer-events-none" />
              <div className="relative grid lg:grid-cols-[auto,1fr] gap-6 lg:gap-10 items-center">
                <img src={miamiMosquito.img} alt="Mosquito" className="w-28 h-28 sm:w-40 sm:h-40 object-contain animate-float shrink-0 mx-auto lg:mx-0 [filter:brightness(0)]" />
                <div>
                  <span className="inline-flex items-center gap-1.5 px-2 py-1 border border-accent bg-accent/15 text-[10px] uppercase tracking-[0.25em] font-bold text-accent rounded-sm mb-3">
                    🔥 Summer hotspot · South Florida
                  </span>
                  <h3 className="font-display text-3xl sm:text-5xl font-bold uppercase tracking-wide leading-tight">
                    <span className="text-gradient-miami">Mosquito</span> season is here.
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-foreground/85 leading-relaxed max-w-2xl">
                    Afternoon storms, irrigated lawns, and bromeliads turn South Florida yards into a 24-hour mosquito nursery. Aedes mosquitoes only need a bottle cap of standing water to breed — and they're the ones spreading Zika, dengue, and West Nile across the coast every summer.
                  </p>
                </div>
              </div>

              <div className="relative mt-8 grid sm:grid-cols-3 gap-4">
                <div className="border border-border/60 bg-card/80 backdrop-blur p-4 rounded-sm">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-2">Step 1 · Inspect</p>
                  <p className="text-sm text-foreground/85 leading-relaxed">We walk the whole yard — gutters, bromeliads, AC pans, plant saucers, bird baths — and map every breeding site before we treat anything.</p>
                </div>
                <div className="border border-border/60 bg-card/80 backdrop-blur p-4 rounded-sm">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-2">Step 2 · Knock down</p>
                  <p className="text-sm text-foreground/85 leading-relaxed">Targeted fogging of foliage, hedges, and shaded harborage drops the adult population fast — usually noticeable by the next evening.</p>
                </div>
                <div className="border border-border/60 bg-card/80 backdrop-blur p-4 rounded-sm">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-accent font-bold mb-2">Step 3 · Break the cycle</p>
                  <p className="text-sm text-foreground/85 leading-relaxed">Larvicide in standing water + monthly retreats during the wet season stop the next generation before it hatches.</p>
                </div>
              </div>

              <div className="relative mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-semibold">
                <span className="flex items-center gap-1.5"><span className="text-accent">◆</span> Pet & kid conscious</span>
                <span className="flex items-center gap-1.5"><span className="text-accent">◆</span> Event prep (24–48 hr)</span>
                <span className="flex items-center gap-1.5"><span className="text-accent">◆</span> Monthly wet-season plans</span>
                <span className="flex items-center gap-1.5"><span className="text-accent">◆</span> No-see-um add-on available</span>
              </div>

              <div className="relative flex flex-wrap gap-3 mt-7">
                <a href="#miami-contact" className="inline-flex items-center px-5 py-2.5 bg-accent text-accent-foreground font-semibold uppercase tracking-widest text-xs rounded-sm hover:opacity-90 transition">
                  Get mosquito treatment
                </a>
                <a href="#miami-contact" className="inline-flex items-center px-5 py-2.5 border border-accent/60 text-foreground font-semibold uppercase tracking-widest text-xs rounded-sm hover:bg-accent/10 transition">
                  Free yard inspection
                </a>
              </div>
            </div>
            <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-accent mb-2 font-semibold">Tap a pest</p>
                <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wide">South Florida pest <span className="text-gradient-miami">programs.</span></h2>
              </div>
              <p className="text-xs text-muted-foreground">{miamiPests.length} programs · 🌴 = South Florida exclusive</p>
            </div>
            <RegionPests pests={miamiPests} region="miami" />
          </div>
        </section>

        <section id="miami-contact" className="py-16 md:py-20 border-t border-border bg-gradient-miami-sunset/10 scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-3 font-semibold">Free South Florida estimate</p>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-wide">Tell us about <span className="text-gradient-miami">the pest.</span></h2>
              <p className="mt-5 text-muted-foreground max-w-md">
                Miami to West Palm — we'll come out, look closer than anyone else has, and write a plan that actually works for the coast.
              </p>
            </div>
            <ContactForm defaultRegion="miami" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
