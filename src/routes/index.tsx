import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { testimonials } from "@/lib/pests";
import heritage from "@/assets/heritage-home.jpg";
import miamiImg from "@/assets/miami-deco.jpg";
import azImg from "@/assets/arizona-desert.jpg";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "AP Pest Control — Family-Owned Pest Control in Miami, FL & Arizona" },
      { name: "description", content: "Independent, family-owned pest control serving Miami, FL and the Arizona Valley since 2012. Sustainable, modern programs and a satisfaction guarantee." },
      { property: "og:title", content: "AP Pest Control — Miami, FL & Arizona Valley" },
      { property: "og:description", content: "Sustainable pest control across two coasts. Free estimates." },
    ],
  }),
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-brand-soft mb-5 font-semibold">Established 2012 · Family Owned</p>
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] text-foreground">
                Pest control,<br />
                <span className="italic text-brand">done the right way.</span>
              </h1>
              <div className="mt-6 h-px w-32 heritage-rule" />
              <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-lg leading-relaxed">
                A trusted, independent pest control company protecting homes and businesses in Miami, Florida and the Arizona Valley. Sustainable methods, honest pricing, real people.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/contact" className="px-7 py-3.5 bg-brand text-brand-foreground font-semibold uppercase tracking-widest text-xs rounded-sm hover:opacity-90 transition">
                  Free Estimate
                </Link>
                <a href="tel:+16028824013" className="px-7 py-3.5 border border-brand text-brand font-semibold uppercase tracking-widest text-xs rounded-sm hover:bg-brand/5 transition">
                  Call (602) 882-4013
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-heritage opacity-10 blur-3xl" />
              <img src={heritage} alt="A traditional family home protected by AP Pest" width={1920} height={1024} className="relative w-full aspect-[4/3] object-cover rounded-sm shadow-heritage border border-brand-soft/40" />
            </div>
          </div>
        </section>

        {/* Two regions */}
        <section className="py-16 md:py-24 border-t border-border bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.4em] text-brand-soft mb-3 font-semibold">Two service regions</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold">Choose your <span className="italic text-brand">region.</span></h2>
              <div className="mt-4 mx-auto h-px w-32 heritage-rule" />
            </div>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <RegionCard to="/miami" title="Miami, Florida" subtitle="South Beach pastels & Atlantic humidity" img={miamiImg} />
              <RegionCard to="/arizona" title="The Arizona Valley" subtitle="Sonoran sunsets & desert wildlife" img={azImg} />
            </div>
          </div>
        </section>

        {/* Why us */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.4em] text-brand-soft mb-3 font-semibold">Why families choose AP Pest</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold">A standard you can <span className="italic text-brand">trust.</span></h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { t: "Family Owned", d: "Independent and local. You talk to the people doing the work." },
                { t: "Satisfaction Guaranteed", d: "If it's not right, we make it right. Always." },
                { t: "Pet & Family Safe", d: "Environmentally responsible products around kids and pets." },
                { t: "12+ Years Experience", d: "Trusted by over a thousand homes and businesses." },
                { t: "Fast Response", d: "Free quotes and quick scheduling across both regions." },
                { t: "Modern Methods", d: "IPM-based plans, not cookie-cutter spray jobs." },
              ].map((it) => (
                <div key={it.t} className="p-7 border border-border bg-card rounded-sm hover:shadow-md transition">
                  <h3 className="font-display text-xl font-bold text-brand">{it.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 md:py-24 border-t border-border bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <p className="text-center text-xs uppercase tracking-[0.4em] text-brand-soft mb-3 font-semibold">What our customers say</p>
            <h2 className="text-center font-display text-4xl md:text-5xl font-bold mb-12">Loved on <span className="italic text-brand">both coasts.</span></h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <figure key={t.name} className="p-7 border border-border bg-card rounded-sm">
                  <div className="text-brand-soft text-xl">★★★★★</div>
                  <blockquote className="mt-4 text-foreground/85 leading-relaxed italic">"{t.quote}"</blockquote>
                  <figcaption className="mt-5 pt-5 border-t border-border">
                    <div className="font-semibold text-brand">{t.name}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{t.city}</div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-display text-4xl md:text-6xl font-bold">Ready when <span className="italic text-brand">you are.</span></h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
              Free estimates, fast scheduling, and a satisfaction guarantee. Tell us where the trouble is.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/contact" className="px-8 py-4 bg-brand text-brand-foreground font-semibold uppercase tracking-widest text-xs rounded-sm hover:opacity-90 transition">
                Request Free Estimate
              </Link>
              <a href="tel:+16028824013" className="px-8 py-4 border border-brand text-brand font-semibold uppercase tracking-widest text-xs rounded-sm hover:bg-brand/5 transition">
                Call (602) 882-4013
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

function RegionCard({ to, title, subtitle, img }: { to: "/miami" | "/arizona"; title: string; subtitle: string; img: string }) {
  return (
    <Link to={to} className="group relative block overflow-hidden rounded-sm border border-border shadow-md aspect-[4/5] sm:aspect-[5/4]">
      <img src={img} alt={title} loading="lazy" width={1920} height={1024} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
      <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
        <p className="text-xs uppercase tracking-[0.4em] text-white/80 mb-2">Service Region</p>
        <h3 className="font-display text-3xl md:text-4xl font-bold">{title}</h3>
        <p className="mt-2 text-sm text-white/85">{subtitle}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-white">
          Explore region <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}
