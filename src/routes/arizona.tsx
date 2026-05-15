import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { RegionPests } from "@/components/site/RegionPests";
import { ContactForm } from "@/components/site/ContactForm";
import { arizonaPests, azCities } from "@/lib/pests";
import azImg from "@/assets/arizona-desert.jpg";

export const Route = createFileRoute("/arizona")({
  component: ArizonaPage,
  head: () => ({
    meta: [
      { title: "Arizona Pest Control — AP Pest Control, Phoenix Valley" },
      { name: "description", content: "Pest control in the Arizona Valley — Scottsdale, Phoenix, Gilbert, Chandler. Scorpions, rodents, kissing bugs, rattlesnakes, ants and more." },
      { property: "og:title", content: "Arizona Pest Control — AP Pest" },
      { property: "og:description", content: "Sonoran Desert pest control rooted in 12+ years of Valley experience." },
      { property: "og:image", content: azImg },
    ],
  }),
});

function ArizonaPage() {
  return (
    <div className="theme-arizona min-h-screen bg-background text-foreground desert-bg">
      <SiteNav />
      <main>
        <section className="relative">
          <img src={azImg} alt="Sonoran desert at sunset with saguaro cacti" width={1920} height={1024} className="w-full h-[55vh] sm:h-[65vh] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
              <p className="text-xs uppercase tracking-[0.5em] text-accent mb-4 font-semibold">The Valley · Arizona</p>
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold text-foreground">
                Born in the<br />
                <span className="text-gradient-arizona italic">desert.</span>
              </h1>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-3 font-semibold">Where it started</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">12+ years across <span className="text-gradient-arizona italic">the Valley.</span></h2>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
                More than a decade protecting Arizona homes from scorpions, roof rats, kissing bugs, rattlesnakes and everything else the desert serves up after sundown. Same family. Same standard.
              </p>
              <Link to="/contact" className="inline-block mt-7 px-7 py-3.5 bg-brand text-brand-foreground font-semibold uppercase tracking-widest text-xs rounded-sm hover:opacity-90 transition">
                Book Arizona Service
              </Link>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-3 font-semibold">Cities served</p>
              <div className="flex flex-wrap gap-2">
                {azCities.map((c) => (
                  <span key={c} className="text-xs px-3 py-1.5 border border-brand/30 bg-card uppercase tracking-wider rounded-sm">{c}</span>
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
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">Arizona pest <span className="text-gradient-arizona italic">programs.</span></h2>
              </div>
              <p className="text-xs text-muted-foreground">{arizonaPests.length} programs · 🌵 = Arizona exclusive</p>
            </div>
            <RegionPests pests={arizonaPests} region="arizona" />
          </div>
        </section>

        <section className="py-16 md:py-20 border-t border-border">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-3 font-semibold">Free Arizona estimate</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">Tell us about <span className="text-gradient-arizona italic">the pest.</span></h2>
              <p className="mt-5 text-muted-foreground max-w-md">
                Free estimates across Scottsdale, Phoenix, and the surrounding Valley. We'll show up fast with a plan that works for the desert.
              </p>
            </div>
            <ContactForm defaultRegion="arizona" />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
