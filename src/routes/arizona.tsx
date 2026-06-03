import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { RegionPests } from "@/components/site/RegionPests";
import { ContactForm } from "@/components/site/ContactForm";
import { arizonaPests, azCities } from "@/lib/pests";
import { MiamiHotspotSlider, type HotspotSlide } from "@/components/site/MiamiHotspotSlider";
import imgTermite from "@/assets/pests/termite.png";
import imgScorpion from "@/assets/pests/scorpion.png";
import imgSpider from "@/assets/pests/spider.png";
import azImg from "@/assets/arizona-desert.jpg";

export const Route = createFileRoute("/arizona")({
  component: ArizonaPage,
  head: () => ({
    meta: [
      { title: "Arizona Pest Control — AP Pest Control, Phoenix Valley" },
      {
        name: "description",
        content:
          "Pest control in the Arizona Valley — Scottsdale, Phoenix, Tucson, Marana, Oro Valley, Peoria, Buckeye, Glendale and more. Scorpions, spiders, termites, roaches and rodents.",
      },
      { property: "og:title", content: "Arizona Pest Control — AP Pest" },
      {
        property: "og:description",
        content: "Sonoran Desert pest control rooted in 35+ years of experience in the Valley.",
      },
      { property: "og:image", content: azImg },
      { property: "og:url", content: "https://miami-glow-up.lovable.app/arizona" },
    ],
    links: [{ rel: "canonical", href: "https://miami-glow-up.lovable.app/arizona" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: "Pest Control",
          provider: {
            "@type": "LocalBusiness",
            name: "AP Pest Control",
            telephone: "+1-602-882-4013",
          },
          areaServed: { "@type": "AdministrativeArea", name: "Arizona Valley" },
          url: "https://miami-glow-up.lovable.app/arizona",
        }),
      },
    ],
  }),
});

function ArizonaPage() {
  return (
    <div className="theme-arizona min-h-screen bg-background text-foreground desert-bg">
      <SiteNav />
      <main>
        <section className="relative">
          <img
            src={azImg}
            alt="Sonoran desert at sunset with saguaro cacti"
            width={1920}
            height={1024}
            className="w-full h-[55vh] sm:h-[65vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
              <p className="text-xs uppercase tracking-[0.5em] text-accent mb-4 font-semibold">
                The Valley · Arizona
              </p>
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold text-foreground">
                Born in the
                <br />
                <span className="text-gradient-arizona italic">desert.</span>
              </h1>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-3 font-semibold">
                Where it started
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
                35+ years of experience across{" "}
                <span className="text-gradient-arizona italic">the Valley.</span>
              </h2>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
                35+ years of experience protecting Arizona homes from scorpions, spiders, termites,
                roaches, rodents and everything else the desert serves up after sundown. Same family.
                Same standard.
              </p>
              <Link
                to="/contact"
                className="inline-block mt-7 px-7 py-3.5 bg-brand text-brand-foreground font-semibold uppercase tracking-widest text-xs rounded-sm hover:opacity-90 transition"
              >
                Book Arizona Service
              </Link>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-3 font-semibold">
                Cities served
              </p>
              <div className="flex flex-wrap gap-2">
                {azCities.map((c) => (
                  <span
                    key={c}
                    className="text-xs px-3 py-1.5 border border-brand/30 bg-card uppercase tracking-wider rounded-sm"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <MiamiHotspotSlider
              slides={arizonaHotspots}
              gradientClass="text-gradient-arizona italic"
            />
            <div className="flex items-end justify-between flex-wrap gap-3 mb-8">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-accent mb-2 font-semibold">
                  Tap a pest
                </p>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
                  Arizona pest <span className="text-gradient-arizona italic">programs.</span>
                </h2>
              </div>
              <p className="text-xs text-muted-foreground">
                {arizonaPests.length} programs · 🌵 = Arizona exclusive
              </p>
            </div>
            <RegionPests pests={arizonaPests} region="arizona" />
          </div>
        </section>

        <section id="az-contact" className="py-16 md:py-20 border-t border-border scroll-mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-3 font-semibold">
                Free Arizona estimate
              </p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
                Tell us about <span className="text-gradient-arizona italic">the pest.</span>
              </h2>
              <p className="mt-5 text-muted-foreground max-w-md">
                Free estimates across Scottsdale, Phoenix, Tucson, Marana, Oro Valley, Peoria,
                Buckeye, Glendale and the surrounding Valley. We'll show up fast with a plan that
                works for the desert.
              </p>
            </div>
            <ContactForm defaultRegion="arizona" lockRegion />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

const arizonaHotspots: HotspotSlide[] = [
  {
    pest: { t: "Scorpion Control", d: "", img: imgScorpion, about: "", signs: [], risk: "" },
    kicker: "🦂 Desert specialty · Arizona Valley",
    headlineLead: "Bark scorpions",
    headlineTail: "own the night.",
    body: "Arizona bark scorpions climb walls, slip through weep screeds, and glow under UV — they're the most venomous scorpion in North America and they thrive in Valley block walls, garages, and irrigated yards. Generic spray won't touch them; it takes layered exclusion and a real perimeter program.",
    steps: [
      {
        label: "UV night sweep",
        body: "We blacklight the property after dark to map every harborage — block walls, irrigation boxes, pavers, and roof tile gaps you'd never spot in daylight.",
      },
      {
        label: "Seal & dust",
        body: "Weep-screed mesh, door sweeps, and crack-and-crevice dust in voids lock scorpions out of the structure before they ever get inside.",
      },
      {
        label: "Quarterly perimeter",
        body: "Long-residual perimeter band plus follow-up sweeps every quarter keeps populations crashed through scorpion season (April–October).",
      },
    ],
    badges: [
      "Pet & kid conscious",
      "Weep-screed exclusion",
      "Quarterly scorpion plans",
      "Pool-deck & patio focus",
    ],
    cta: "Get scorpion treatment",
  },
  {
    pest: { t: "General Spider Control", d: "", img: imgSpider, about: "", signs: [], risk: "" },
    kicker: "🕷️ Common invader · Arizona Valley",
    headlineLead: "Spiders",
    headlineTail: "move into shade.",
    body: "Arizona spiders follow insects into garages, patios, block walls, storage areas, and eaves. Our general spider program removes webs and egg sacs, treats harborage zones, and reduces the insect pressure that keeps them coming back.",
    steps: [
      {
        label: "De-web",
        body: "We knock down webs and egg sacs around eaves, patio furniture, garages, and block-wall corners before treating.",
      },
      {
        label: "Treat harborage",
        body: "Targeted dusts and residual perimeter treatments reach cracks, storage zones, and shaded areas where spiders hide.",
      },
      {
        label: "Reduce prey",
        body: "General pest control cuts down the insects spiders hunt, so the pressure drops instead of returning days later.",
      },
    ],
    badges: [
      "Web & egg-sac removal",
      "Garage & patio focus",
      "Block-wall treatment",
      "Quarterly general plans",
    ],
    cta: "Get spider treatment",
  },
  {
    pest: { t: "General Termite Control", d: "", img: imgTermite, about: "", signs: [], risk: "" },
    kicker: "⚠️ Silent threat · Arizona Valley",
    headlineLead: "Termites",
    headlineTail: "never sleep.",
    body: "Arizona has one of the highest termite densities in the country. Subterranean colonies tunnel up through slab cracks year-round — most homeowners only find out after damage is visible, and standard insurance doesn't cover a dollar of it.",
    steps: [
      {
        label: "Inspect",
        body: "Full perimeter and slab inspection — mud tubes, discarded wings, hollow wood, expansion joints, and plumbing penetrations.",
      },
      {
        label: "Treat",
        body: "A continuous treated zone around the structure blocks termites from tunneling into the home and helps eliminate active pressure.",
      },
      {
        label: "Monitor",
        body: "Annual re-inspections catch new activity early — we check mud tubes, slab joints, and known hotspots before damage spreads.",
      },
    ],
    badges: [
      "Pre-construction & escrow",
      "WDIIR reports for sale",
      "Drywood spot treatment",
      "Annual re-inspections",
    ],
    cta: "Get termite treatment",
  },
];
