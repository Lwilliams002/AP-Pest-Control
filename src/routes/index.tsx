import { createFileRoute, Link } from "@tanstack/react-router";
import miamiHero from "@/assets/miami-hero.jpg";
import valleyHero from "@/assets/valley-hero.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "AP Pest Control — Miami & The Valley | Modern Pest Control" },
      {
        name: "description",
        content:
          "Independent, family-owned pest control. Now serving Miami and the Arizona Valley with sustainable, neon-precise extermination.",
      },
    ],
  }),
});

const services = [
  { n: "01", t: "Roach & Ant Control", d: "Targeted, low-toxicity treatments that hit the colony, not your home." },
  { n: "02", t: "Rodent Exclusion", d: "Seal, trap, monitor. No more midnight scratches in the walls." },
  { n: "03", t: "Termite Defense", d: "Annual inspections + bait systems engineered for desert and tropical climates." },
  { n: "04", t: "Mosquito & Tick", d: "Yard fogging tuned for Miami humidity and Valley dusk swarms." },
  { n: "05", t: "Scorpion Hunts", d: "UV night sweeps across patios, pool decks, and rock landscaping." },
  { n: "06", t: "Commercial Programs", d: "Restaurants, hotels, multifamily — quiet protection on a schedule." },
];

const testimonials = [
  { name: "Adrian Ptak", city: "Scottsdale, AZ", quote: "Absolute pleasure working with AP Pest. My area was out of their service area but they said no worries — and that they did." },
  { name: "Tasia McWilliams", city: "Scottsdale, AZ", quote: "Matt paid close attention to detail, especially around entry points. Thoughtful about our 1-year-old. Highly recommend." },
  { name: "Michael Smith", city: "Miami, FL", quote: "Felt like the SoBe of pest control. Fast, clean, on-brand, and the roaches haven't dared show up since." },
];

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-16">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg tracking-widest">
          <span className="inline-block w-2 h-2 rounded-full bg-neon-pink shadow-glow-pink animate-flicker" />
          AP <span className="text-gradient-miami">PEST</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest text-muted-foreground">
          <a href="#miami" className="hover:text-neon-pink transition">Miami</a>
          <a href="#valley" className="hover:text-neon-cyan transition">Valley</a>
          <a href="#services" className="hover:text-foreground transition">Services</a>
          <a href="#reviews" className="hover:text-foreground transition">Reviews</a>
        </nav>
        <a href="#contact" className="text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-sm bg-gradient-miami text-primary-foreground font-semibold shadow-neon hover:opacity-90 transition">
          Get Quote
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <img
        src={miamiHero}
        alt="Miami skyline at night with neon glow"
        width={1920}
        height={1024}
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      <div className="relative max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-12 gap-8 items-end w-full">
        <div className="md:col-span-8">
          <p className="text-xs uppercase tracking-[0.4em] text-neon-cyan mb-6 animate-flicker">
            ◢ Now serving Miami · Est. The Valley
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85]">
            Pest control,
            <br />
            <span className="text-gradient-miami glow-text italic">after dark.</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg text-muted-foreground">
            Independent. Family owned. Obsessed with the bugs you don't see.
            From Scottsdale dunes to South Beach high-rises — we keep it clean,
            sustainable, and a little bit neon.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact" className="px-8 py-4 bg-gradient-miami text-primary-foreground font-bold uppercase tracking-widest text-sm shadow-neon hover:scale-[1.02] transition">
              Book Inspection
            </a>
            <a href="#miami" className="px-8 py-4 border border-neon-cyan/60 text-neon-cyan uppercase tracking-widest text-sm hover:bg-neon-cyan/10 transition">
              Explore Miami →
            </a>
          </div>
        </div>
        <div className="md:col-span-4 hidden md:flex flex-col gap-3 text-right">
          <div className="text-7xl font-black text-gradient-miami">12+</div>
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">years protecting<br />homes & businesses</p>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-muted-foreground">
        scroll ↓
      </div>
    </section>
  );
}

function MiamiSection() {
  return (
    <section id="miami" className="relative py-32 overflow-hidden border-t border-border">
      <img src={miamiHero} alt="" loading="lazy" width={1920} height={1024} className="absolute inset-0 w-full h-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-transparent" />
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-neon-pink mb-4">◢ New territory</p>
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            Hello,
            <br />
            <span className="text-gradient-miami italic">Miami.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md">
            We packed the truck, crossed the country, and brought our obsessive
            standard of pest control to the 305. Roach, rodent, mosquito and
            termite programs built specifically for Florida humidity and
            ocean-side ecosystems.
          </p>
          <ul className="space-y-3 text-sm">
            {["South Beach & Brickell residences", "Wynwood & Design District commercial", "Coral Gables & Coconut Grove homes", "Restaurants, hotels, marinas"].map((x) => (
              <li key={x} className="flex items-center gap-3 text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-neon-cyan shadow-[0_0_10px_currentColor]" />
                {x}
              </li>
            ))}
          </ul>
          <a href="#contact" className="inline-block mt-10 px-8 py-4 bg-gradient-miami text-primary-foreground font-bold uppercase tracking-widest text-sm shadow-neon">
            Book Miami Service
          </a>
        </div>
        <div className="relative aspect-[4/5] animate-float">
          <div className="absolute inset-0 bg-gradient-miami blur-3xl opacity-30" />
          <div className="relative h-full border border-neon-pink/40 p-1 shadow-neon">
            <img src={miamiHero} alt="Miami at night" loading="lazy" width={800} height={1000} className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-background/60 border border-neon-cyan/30 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-neon-cyan">Now booking</p>
              <p className="text-2xl font-display font-bold mt-1">Miami-Dade & Broward</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValleySection() {
  return (
    <section id="valley" className="relative py-32 overflow-hidden border-t border-border">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative aspect-[4/5] order-2 md:order-1">
          <div className="absolute inset-0 bg-gradient-sunset blur-3xl opacity-25" />
          <div className="relative h-full border border-neon-purple/40 p-1">
            <img src={valleyHero} alt="Arizona Valley at dusk" loading="lazy" width={800} height={1000} className="w-full h-full object-cover" />
            <div className="absolute bottom-4 left-4 right-4 backdrop-blur-md bg-background/60 border border-neon-pink/30 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-neon-pink">Home base</p>
              <p className="text-2xl font-display font-bold mt-1">Phoenix · Scottsdale · Tempe</p>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <p className="text-xs uppercase tracking-[0.4em] text-neon-cyan mb-4">◢ Where it started</p>
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            Born in
            <br />
            <span className="text-gradient-miami italic">The Valley.</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-md">
            For more than a decade we've protected Arizona homes from scorpions,
            roof rats, termites, and everything else the desert serves up after
            sundown. Same family, same standard.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {[
              { k: "5★", v: "Google Reviews" },
              { k: "1k+", v: "Homes serviced" },
              { k: "100%", v: "Family owned" },
            ].map((s) => (
              <div key={s.v} className="border-l-2 border-neon-pink pl-4">
                <div className="text-3xl font-black text-gradient-miami">{s.k}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="relative py-32 border-t border-border">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-neon-pink mb-4">◢ Services</p>
            <h2 className="text-5xl md:text-7xl font-black">
              The full <span className="italic text-gradient-miami">arsenal.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Every program is custom-built around your property, family, and
            climate. No cookie-cutter spray-and-pray.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
          {services.map((s) => (
            <div key={s.n} className="group relative bg-background p-8 hover:bg-card transition cursor-pointer overflow-hidden">
              <div className="absolute -inset-px bg-gradient-miami opacity-0 group-hover:opacity-100 transition pointer-events-none" style={{ maskImage: "linear-gradient(black, black)", WebkitMaskComposite: "xor", padding: "1px" }} />
              <div className="font-display text-xs text-neon-cyan tracking-[0.3em]">{s.n}</div>
              <h3 className="text-2xl font-bold mt-4 group-hover:text-gradient-miami transition">{s.t}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{s.d}</p>
              <div className="mt-6 text-xs uppercase tracking-widest text-neon-pink opacity-0 group-hover:opacity-100 transition">Learn more →</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="py-32 border-t border-border relative">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-xs uppercase tracking-[0.4em] text-neon-cyan mb-4">◢ Reviews</p>
        <h2 className="text-5xl md:text-7xl font-black mb-16">
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
    <section id="contact" className="relative py-32 border-t border-border overflow-hidden">
      <div className="absolute inset-0 bg-gradient-sunset opacity-20" />
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <p className="text-xs uppercase tracking-[0.4em] text-neon-cyan mb-6">◢ Free inspection</p>
        <h2 className="text-5xl md:text-8xl font-black mb-8">
          Ready when <span className="italic text-gradient-miami glow-text">you are.</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
          Tell us where the trouble is. We'll show up, look closer than anyone
          else has, and write you a plan that actually works.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+14805551234" className="px-10 py-5 bg-gradient-miami text-primary-foreground font-bold uppercase tracking-widest text-sm shadow-neon hover:scale-[1.02] transition">
            Call (480) 555-1234
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
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-2 font-display font-bold tracking-widest">
          <span className="inline-block w-2 h-2 rounded-full bg-neon-pink shadow-glow-pink" />
          AP <span className="text-gradient-miami">PEST</span>
        </div>
        <p>© {new Date().getFullYear()} AP Pest Control. Independent & family owned. Miami · Phoenix.</p>
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
        <MiamiSection />
        <ValleySection />
        <Services />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
