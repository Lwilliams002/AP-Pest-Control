import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { RegionPests } from "@/components/site/RegionPests";
import { ContactForm } from "@/components/site/ContactForm";
import { miamiPests, miamiCities } from "@/lib/pests";
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

        <section className="py-16 md:py-20 border-t border-border bg-gradient-miami-sunset/10">
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
