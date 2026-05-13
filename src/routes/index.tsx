import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import miamiHero from "@/assets/miami-hero.jpg";
import valleyHero from "@/assets/valley-hero.jpg";
import logo from "@/assets/ap-pest-logo.png";
import imgMosquito from "@/assets/pests/mosquito.png";
import imgCockroach from "@/assets/pests/cockroach.png";
import imgRodent from "@/assets/pests/rodent.png";
import imgAnt from "@/assets/pests/ant.png";
import imgTermite from "@/assets/pests/termite.png";
import imgScorpion from "@/assets/pests/scorpion.png";
import imgSpider from "@/assets/pests/spider.png";
import imgCommercial from "@/assets/pests/commercial.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "AP Pest Control — Miami, FL & Phoenix, AZ | Sustainable Pest Control" },
      {
        name: "description",
        content:
          "Independent, family-owned pest control serving Miami, FL and the Arizona Valley. Mosquitoes, roaches, scorpions, rodents, termites — handled.",
      },
    ],
  }),
});

type Pest = { t: string; d: string; img: string };

const miamiPests: Pest[] = [
  { t: "Mosquito Control", d: "Yard fogging and breeding-site treatment built for Florida humidity.", img: imgMosquito },
  { t: "Cockroach Control", d: "American & German roach programs for homes, restaurants, condos.", img: imgCockroach },
  { t: "Rodent Control", d: "Roof rats and Norway rats — exclusion, trapping, sanitation.", img: imgRodent },
  { t: "Ant Control", d: "Targeted baiting that wipes out the colony, not just the trail.", img: imgAnt },
  { t: "Termite Defense", d: "Subterranean & drywood programs tuned to South Florida wood.", img: imgTermite },
  { t: "Commercial", d: "Hotels, restaurants, marinas, multifamily — discreet schedules.", img: imgCommercial },
];

const arizonaPests: Pest[] = [
  { t: "Scorpion Control", d: "UV night sweeps and long-lasting perimeter treatments.", img: imgScorpion },
  { t: "Cockroach Control", d: "Targeted baits and dusts in cracks, crevices, and entry points.", img: imgCockroach },
  { t: "Rodent Control", d: "Inspection, sealing, trapping, and clean-up of affected areas.", img: imgRodent },
  { t: "Ant Control", d: "Non-repellent sprays and gel baits that kill the whole colony.", img: imgAnt },
  { t: "Spider & Wasp", d: "Web removal, nest treatment, and prevention around eaves and yards.", img: imgSpider },
  { t: "Mosquito Control", d: "Misting treatments for shady hide-outs and standing water.", img: imgMosquito },
];

const miamiCities = ["Miami", "Miami Beach", "Brickell", "Coral Gables", "Coconut Grove", "Wynwood", "Aventura", "Doral"];
const azCities = ["Scottsdale", "Phoenix", "Gilbert", "Chandler", "Mesa", "Queen Creek", "Tempe", "Ahwatukee"];

const testimonials = [
  { name: "Adrian Ptak", city: "Scottsdale, AZ", quote: "Absolute pleasure working with AP Pest. My area was a bit out of their service area but they said no worries — and that they did." },
  { name: "Tasia McWilliams", city: "Scottsdale, AZ", quote: "Matt paid close attention to detail, especially around entry points I didn't even know existed. Thoughtful about our 1-year-old." },
  { name: "Brittany David", city: "Phoenix, AZ", quote: "Their team is extremely knowledgeable, reliable, and will make sure your pest and rodent problems are quickly handled." },
];

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/70 border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="AP Pest" className="h-9 w-auto" />
          <span className="hidden sm:inline font-display font-bold text-lg tracking-[0.25em] text-foreground">
            AP <span className="text-gradient-miami">PEST</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-muted-foreground">
          <a href="#miami" className="hover:text-neon-pink transition">Miami, FL</a>
          <a href="#arizona" className="hover:text-neon-cyan transition">Arizona</a>
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#reviews" className="hover:text-foreground transition">Reviews</a>
          <a href="#contact" className="hover:text-foreground transition">Contact</a>
        </nav>
        <a href="tel:+16028824013" className="text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-sm bg-gradient-miami text-primary-foreground font-semibold shadow-neon hover:opacity-90 transition">
          Free Quote
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 grid grid-cols-2">
        <img src={miamiHero} alt="" className="w-full h-full object-cover opacity-50" />
        <img src={valleyHero} alt="" className="w-full h-full object-cover opacity-40" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
      <div className="absolute inset-y-0 left-1/2 w-px bg-gradient-to-b from-transparent via-neon-pink/60 to-transparent" />
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-24 w-full text-center">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.4em] text-neon-cyan mb-6 animate-flicker">
          ◢ Two coasts · One standard
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9]">
          Pest control for
          <br />
          <span className="text-gradient-miami glow-text italic">Miami</span>
          <span className="text-muted-foreground"> & </span>
          <span className="text-gradient-miami glow-text italic">Arizona.</span>
        </h1>
        <p className="mt-6 sm:mt-8 max-w-2xl mx-auto text-base sm:text-lg text-muted-foreground px-2">
          Independent, family-owned, and obsessed with sustainable pest control.
          Pick your region — we'll show up fast and do it right.
        </p>
        <div className="mt-12 grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <a href="#miami" className="group p-6 border border-neon-pink/40 hover:border-neon-pink hover:bg-neon-pink/5 transition text-left">
            <div className="text-xs uppercase tracking-[0.3em] text-neon-pink">Florida</div>
            <div className="text-2xl font-display font-bold mt-2">Miami, FL →</div>
            <div className="text-sm text-muted-foreground mt-1">Mosquitoes · Roaches · Termites</div>
          </a>
          <a href="#arizona" className="group p-6 border border-neon-cyan/40 hover:border-neon-cyan hover:bg-neon-cyan/5 transition text-left">
            <div className="text-xs uppercase tracking-[0.3em] text-neon-cyan">Arizona</div>
            <div className="text-2xl font-display font-bold mt-2">The Valley →</div>
            <div className="text-sm text-muted-foreground mt-1">Scorpions · Rodents · Ants</div>
          </a>
        </div>
      </div>
    </section>
  );
}

function RegionSection({
  id, eyebrow, title, italic, copy, cities, pests, image, accent, reverse,
}: {
  id: string; eyebrow: string; title: string; italic: string; copy: string;
  cities: string[]; pests: Pest[]; image: string;
  accent: "pink" | "cyan"; reverse?: boolean;
}) {
  const [active, setActive] = useState(0);
  const accentText = accent === "pink" ? "text-neon-pink" : "text-neon-cyan";
  const accentBorder = accent === "pink" ? "border-neon-pink/40" : "border-neon-cyan/40";
  const accentBorderStrong = accent === "pink" ? "border-neon-pink" : "border-neon-cyan";
  const accentBg = accent === "pink" ? "bg-neon-pink/5" : "bg-neon-cyan/5";
  const selected = pests[active];

  return (
    <section id={id} className="relative py-20 md:py-28 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`grid lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 md:mb-16 ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
          <div className="lg:col-span-5">
            <div className={`relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] border ${accentBorder} p-1`}>
              <div className={`absolute -inset-4 ${accent === "pink" ? "bg-gradient-miami" : "bg-gradient-sunset"} blur-3xl opacity-20 -z-10`} />
              <img src={image} alt={title} loading="lazy" className="w-full h-full object-cover" />
              <div className="absolute bottom-3 left-3 right-3 backdrop-blur-md bg-background/70 border border-border p-3 sm:p-4">
                <p className={`text-[10px] sm:text-xs uppercase tracking-[0.3em] ${accentText}`}>Service area</p>
                <p className="text-lg sm:text-xl font-display font-bold mt-1">{title}</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <p className={`text-[10px] sm:text-xs uppercase tracking-[0.4em] ${accentText} mb-4`}>◢ {eyebrow}</p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 leading-[0.9]">
              {title.split(" ")[0]} <span className="italic text-gradient-miami">{italic}</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-xl">{copy}</p>
            <div>
              <p className={`text-[10px] sm:text-xs uppercase tracking-[0.3em] ${accentText} mb-3`}>Cities served</p>
              <div className="flex flex-wrap gap-2">
                {cities.map((c) => (
                  <span key={c} className="text-[10px] sm:text-xs px-3 py-1.5 border border-border bg-card/50 uppercase tracking-wider">{c}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Interactive pests */}
        <div>
          <div className="flex items-end justify-between flex-wrap gap-3 mb-6">
            <p className={`text-[10px] sm:text-xs uppercase tracking-[0.3em] ${accentText}`}>◢ Tap a pest</p>
            <p className="text-xs text-muted-foreground">{pests.length} programs</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Pest grid */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-2 sm:gap-3">
                {pests.map((p, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      key={p.t}
                      onClick={() => setActive(i)}
                      className={`group relative aspect-square border ${isActive ? `${accentBorderStrong} ${accentBg} shadow-neon` : "border-border bg-card/30"} p-2 sm:p-3 transition-all hover:${accentBorderStrong.replace("border-", "border-")} flex flex-col items-center justify-center text-center`}
                      aria-label={p.t}
                    >
                      <img
                        src={p.img}
                        alt={p.t}
                        loading="lazy"
                        className={`w-full h-full max-h-[60%] object-contain transition-transform ${isActive ? "scale-110" : "group-hover:scale-105 opacity-80"}`}
                      />
                      <span className={`mt-1 text-[9px] sm:text-[10px] uppercase tracking-wider font-bold ${isActive ? accentText : "text-muted-foreground"}`}>
                        {p.t.replace(" Control", "").replace(" Defense", "")}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Detail panel */}
            <div className="lg:col-span-5">
              <div className={`relative border ${accentBorderStrong} ${accentBg} p-6 sm:p-8 h-full min-h-[280px] flex flex-col`}>
                <div className="flex-1 flex items-center justify-center mb-4">
                  <img
                    src={selected.img}
                    alt={selected.t}
                    className="w-32 h-32 sm:w-40 sm:h-40 object-contain animate-float"
                  />
                </div>
                <div>
                  <p className={`text-[10px] uppercase tracking-[0.3em] ${accentText} mb-2`}>Program</p>
                  <h3 className="text-2xl sm:text-3xl font-black font-display">{selected.t}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mt-3 leading-relaxed">{selected.d}</p>
                </div>
              </div>
            </div>
          </div>

          <a href="#contact" className="inline-block mt-10 px-8 py-4 bg-gradient-miami text-primary-foreground font-bold uppercase tracking-widest text-sm shadow-neon">
            Book {title.split(",")[0]} Service
          </a>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    { t: "Guaranteed", d: "Satisfaction guarantee — if it's not right, we make it right." },
    { t: "Family Owned", d: "Independent and local. You talk to the people doing the work." },
    { t: "Pet & Family Safe", d: "Environmentally responsible products around kids and pets." },
    { t: "Fast Response", d: "Free quotes and quick scheduling across both regions." },
    { t: "Up-to-date Methods", d: "Custom plans, modern tools, no cookie-cutter spray jobs." },
    { t: "Real Results", d: "Skilled techs targeting scorpions, roaches, rodents — for good." },
  ];
  return (
    <section id="services" className="relative py-28 border-t border-border">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-neon-pink mb-4">◢ Why AP Pest</p>
          <h2 className="text-4xl md:text-6xl font-black">
            One standard. <span className="italic text-gradient-miami">Both coasts.</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {items.map((it) => (
            <div key={it.t} className="bg-background p-8 hover:bg-card transition">
              <h3 className="text-xl font-bold">{it.t}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="py-28 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.4em] text-neon-cyan mb-4">◢ Google Reviews</p>
        <h2 className="text-4xl md:text-6xl font-black mb-16">
          Loved on <span className="italic text-gradient-miami">both coasts.</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure key={t.name} className="relative p-8 border border-border bg-card/40 backdrop-blur hover:border-neon-pink/60 hover:shadow-neon transition">
              <div className="text-neon-pink text-2xl mb-4">★★★★★</div>
              <blockquote className="text-foreground/90 leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-6 pt-6 border-t border-border">
                <div className="font-bold">{t.name}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{t.city}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section id="contact" className="relative py-28 border-t border-border overflow-hidden">
      <div className="absolute inset-0 bg-gradient-sunset opacity-15" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-neon-cyan mb-6">◢ Free estimate</p>
        <h2 className="text-4xl md:text-7xl font-black mb-8">
          Remove pesky pests <span className="italic text-gradient-miami glow-text">today.</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
          Tell us where the trouble is — Miami or the Valley — we'll show up
          fast with a plan that actually works.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+16028824013" className="px-10 py-5 bg-gradient-miami text-primary-foreground font-bold uppercase tracking-widest text-sm shadow-neon hover:scale-[1.02] transition">
            Call (602) 882-4013
          </a>
          <a href="mailto:hello@ap-pest-control.com" className="px-10 py-5 border border-neon-cyan/60 text-neon-cyan uppercase tracking-widest text-sm hover:bg-neon-cyan/10 transition">
            hello@ap-pest-control.com
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8 text-sm text-muted-foreground">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="AP Pest" className="h-10 w-auto" />
            <span className="font-display font-bold tracking-[0.25em] text-foreground">
              AP <span className="text-gradient-miami">PEST</span>
            </span>
          </div>
          <p className="mt-4">Independent & family owned. Sustainable pest control across Miami and the Arizona Valley.</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neon-pink mb-3">Miami, FL</p>
          <p>{miamiCities.slice(0, 4).join(" · ")}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-neon-cyan mb-3">Arizona</p>
          <p>{azCities.slice(0, 4).join(" · ")}</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-8 text-xs text-muted-foreground">
        © {new Date().getFullYear()} AP Pest Control.
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <RegionSection
          id="miami"
          eyebrow="Now serving"
          title="Miami, FL"
          italic="Florida."
          copy="From South Beach high-rises to Coral Gables homes, we built a Florida program around humidity, ocean air, and the pests that thrive in both. Mosquitoes, roaches, termites, rodents — handled."
          cities={miamiCities}
          pests={miamiPests}
          image={miamiHero}
          accent="pink"
        />
        <RegionSection
          id="arizona"
          eyebrow="Where it started"
          title="The Valley, AZ"
          italic="Arizona."
          copy="More than a decade protecting Arizona homes from scorpions, roof rats, ants, and everything else the desert serves up after sundown. Same family. Same standard."
          cities={azCities}
          pests={arizonaPests}
          image={valleyHero}
          accent="cyan"
          reverse
        />
        <WhyUs />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
