import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { PestCrawlerSwarm } from "@/components/site/PestCrawlerSwarm";
import { testimonials } from "@/lib/pests";
import heroTech from "@/assets/hero-tech.jpg";
import miamiImg from "@/assets/miami-deco.jpg";
import azImg from "@/assets/arizona-desert.jpg";
import mosquitoImg from "@/assets/pests/mosquito.png";
import scorpionImg from "@/assets/pests/scorpion.png";
import termiteImg from "@/assets/pests/termite.png";
import palmettoImg from "@/assets/pests/iguana.png";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [
      { title: "AP Pest Control — South Florida & Arizona" },
      {
        name: "description",
        content:
          "Independent, family-owned pest control with 35+ years of experience serving South Florida and the Arizona Valley. Sustainable, modern programs and a satisfaction guarantee.",
      },
      { property: "og:title", content: "AP Pest Control — South Florida & Arizona Valley" },
      {
        property: "og:description",
        content: "Sustainable pest control across two coasts. Free estimates.",
      },
      { property: "og:url", content: "https://miami-glow-up.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://miami-glow-up.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "AP Pest Control",
          description:
            "Independent, family-owned pest control with 35+ years of experience serving South Florida and the Arizona Valley.",
          url: "https://miami-glow-up.lovable.app/",
          logo: "https://miami-glow-up.lovable.app/ap-pest-logo.png",
          areaServed: [
            { "@type": "AdministrativeArea", name: "South Florida" },
            { "@type": "AdministrativeArea", name: "Arizona Valley" },
          ],
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+1-305-713-5011",
              areaServed: "US-FL",
              contactType: "customer service",
            },
            {
              "@type": "ContactPoint",
              telephone: "+1-602-882-4013",
              areaServed: "US-AZ",
              contactType: "customer service",
            },
          ],
        }),
      },
    ],
  }),
});

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main>
        {/* Hero — full-bleed cinematic */}
        <section className="relative">
          <img
            src={heroTech}
            alt="AP Pest technician treating a home at sunset"
            width={1920}
            height={1080}
            fetchPriority="high"
            decoding="async"
            className="w-full h-[70vh] sm:h-[80vh] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-transparent" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12 md:pb-20">
              <p className="text-xs uppercase tracking-[0.5em] text-brand-soft mb-5 font-semibold">
                Established 1986 · Family Owned
              </p>
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold leading-[1.02] text-foreground max-w-4xl">
                Pest control,
                <br />
                <span className="italic text-brand">done the right way.</span>
              </h1>
              <div className="mt-6 h-px w-32 heritage-rule" />
              <p className="mt-6 text-base sm:text-lg text-foreground/85 max-w-xl leading-relaxed">
                Independent, family-run protection for homes and businesses across South Florida and
                the Arizona Valley. Sustainable methods, honest pricing, real people.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="px-7 py-3.5 bg-brand text-brand-foreground font-semibold uppercase tracking-widest text-xs rounded-sm hover:opacity-90 transition"
                >
                  Free Estimate
                </Link>
                <a
                  href="tel:+16028824013"
                  className="px-7 py-3.5 border border-brand text-brand font-semibold uppercase tracking-widest text-xs rounded-sm hover:bg-brand/5 transition backdrop-blur-sm bg-background/30"
                >
                  Call (602) 882-4013
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Trust strip — moved up from Why Us */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.4em] text-brand-soft mb-3 font-semibold">
                Why families choose AP Pest
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                A standard you can <span className="italic text-brand">trust.</span>
              </h2>
              <div className="mt-4 mx-auto h-px w-32 heritage-rule" />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  t: "Family Owned",
                  d: "Independent and local. You talk to the people doing the work.",
                },
                { t: "Satisfaction Guaranteed", d: "If it's not right, we make it right. Always." },
                {
                  t: "Pet & Family Safe",
                  d: "Environmentally responsible products around kids and pets.",
                },
                {
                  t: "35+ Years of Experience",
                  d: "Trusted by over a thousand homes and businesses.",
                },
                { t: "Fast Response", d: "Free quotes and quick scheduling across both regions." },
                { t: "Modern Methods", d: "IPM-based plans, not cookie-cutter spray jobs." },
              ].map((it) => (
                <div
                  key={it.t}
                  className="p-7 border border-border bg-card rounded-sm hover:shadow-md transition"
                >
                  <h3 className="font-display text-xl font-bold text-brand">{it.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Two regions */}
        <section className="py-16 md:py-24 border-t border-border bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.4em] text-brand-soft mb-3 font-semibold">
                Two service regions
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                Choose your <span className="italic text-brand">region.</span>
              </h2>
              <div className="mt-4 mx-auto h-px w-32 heritage-rule" />
            </div>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              <RegionCard
                to="/southflorida"
                title="South Florida"
                subtitle="Miami to West Palm · neon coast, real humidity"
                img={miamiImg}
              />
              <RegionCard
                to="/arizona"
                title="The Arizona Valley"
                subtitle="Sonoran sunsets & desert wildlife"
                img={azImg}
              />
            </div>
          </div>
        </section>

        {/* Split-screen: Florida vs Arizona */}
        <section className="relative border-t border-border overflow-hidden">
          {/* Real pest icons crawling across the section */}
          <PestCrawlerSwarm />
          <div className="grid md:grid-cols-2">
            <div className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.38_0.09_215)] to-[oklch(0.58_0.10_200)] text-white p-10 md:p-16 min-h-[420px]">
              <p className="text-xs uppercase tracking-[0.4em] text-white/70 mb-3 font-semibold">
                South Florida
              </p>
              <h3 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                Humid coast. <span className="italic">Hungry pests.</span>
              </h3>
              <p className="mt-4 text-white/85 max-w-md">
                Year-round mosquitoes, palmetto bugs the size of your thumb, and iguanas in the
                hedges. We treat the climate, not just the bug.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/90">
                <li>· Mosquito misting & yard fogging</li>
                <li>· German roach & palmetto bug control</li>
                <li>· Iguana & wildlife removal</li>
              </ul>
              <Link
                to="/southflorida"
                className="mt-8 inline-block px-6 py-3 bg-white text-[oklch(0.22_0.04_230)] font-semibold uppercase tracking-widest text-xs rounded-sm hover:opacity-90 transition"
              >
                Explore South Florida →
              </Link>
              <img
                src={mosquitoImg}
                alt=""
                aria-hidden
                className="absolute bottom-6 right-6 w-28 opacity-30 animate-float"
                style={{ filter: "brightness(0) invert(1)" }}
              />
              <img
                src={palmettoImg}
                alt=""
                aria-hidden
                className="absolute top-8 right-10 w-20 opacity-25"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
            <div className="relative overflow-hidden bg-gradient-to-br from-[oklch(0.66_0.18_50)] to-[oklch(0.55_0.20_32)] text-white p-10 md:p-16 min-h-[420px]">
              <p className="text-xs uppercase tracking-[0.4em] text-white/70 mb-3 font-semibold">
                Arizona Valley
              </p>
              <h3 className="font-display text-4xl md:text-5xl font-bold leading-tight">
                Sonoran heat. <span className="italic">Desert invaders.</span>
              </h3>
              <p className="mt-4 text-white/90 max-w-md">
                Scorpions under every rock, subterranean termites silently chewing studs, and pack
                rats in the engine bay. Built for the desert.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-white/95">
                <li>· Scorpion barrier treatments</li>
                <li>· Subterranean termite control</li>
                <li>· Pack rat & rodent exclusion</li>
              </ul>
              <Link
                to="/arizona"
                className="mt-8 inline-block px-6 py-3 bg-white text-[oklch(0.22_0.04_45)] font-semibold uppercase tracking-widest text-xs rounded-sm hover:opacity-90 transition"
              >
                Explore Arizona →
              </Link>
              <img
                src={scorpionImg}
                alt=""
                aria-hidden
                className="absolute bottom-6 right-6 w-28 opacity-30 animate-float"
                style={{ filter: "brightness(0) invert(1)", animationDelay: "-2s" }}
              />
              <img
                src={termiteImg}
                alt=""
                aria-hidden
                className="absolute top-8 right-10 w-20 opacity-25"
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </div>
          </div>
        </section>

        {/* A Day with AP Pest — timeline */}
        <section className="py-16 md:py-24 border-t border-border bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <p className="text-xs uppercase tracking-[0.4em] text-brand-soft mb-3 font-semibold">
                A day with AP Pest
              </p>
              <h2 className="font-display text-4xl md:text-5xl font-bold">
                Four steps. <span className="italic text-brand">Real results.</span>
              </h2>
              <div className="mt-4 mx-auto h-px w-32 heritage-rule" />
            </div>
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {/* continuous dashed connector behind dots, md+ only */}
              <div
                aria-hidden
                className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-px"
                style={{
                  background:
                    "repeating-linear-gradient(90deg, var(--brand-soft) 0 8px, transparent 8px 16px)",
                }}
              />
              {[
                {
                  n: "01",
                  t: "Inspect",
                  d: "We walk your property, identify the pest, and locate entry points before treatment.",
                },
                {
                  n: "02",
                  t: "Treat",
                  d: "Targeted, family-safe application. No cookie-cutter sprays — only what your situation needs.",
                },
                {
                  n: "03",
                  t: "Monitor",
                  d: "Scheduled re-visits track activity so we catch returns before they become infestations.",
                },
                {
                  n: "04",
                  t: "Guarantee",
                  d: "If pests come back between visits, so do we — at no extra cost. Satisfaction guaranteed.",
                },
              ].map((s) => (
                <div key={s.n} className="relative text-center">
                  <div className="relative z-10 mx-auto w-14 h-14 rounded-full bg-brand text-brand-foreground flex items-center justify-center font-display text-lg font-bold shadow-heritage ring-8 ring-background">
                    {s.n}
                  </div>
                  <h3 className="mt-5 font-display text-2xl font-bold text-brand">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="py-16 md:py-24 border-t border-border bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <p className="text-center text-xs uppercase tracking-[0.4em] text-brand-soft mb-3 font-semibold">
              What our customers say
            </p>
            <h2 className="text-center font-display text-4xl md:text-5xl font-bold mb-12">
              Loved on <span className="italic text-brand">both coasts.</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <figure key={t.name} className="p-7 border border-border bg-card rounded-sm">
                  <div className="text-brand-soft text-xl">★★★★★</div>
                  <blockquote className="mt-4 text-foreground/85 leading-relaxed italic">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-5 pt-5 border-t border-border">
                    <div className="font-semibold text-brand">{t.name}</div>
                    <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                      {t.city}
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 border-t border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="font-display text-4xl md:text-6xl font-bold">
              Ready when <span className="italic text-brand">you are.</span>
            </h2>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">
              Free estimates, fast scheduling, and a satisfaction guarantee. Tell us where the
              trouble is.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/contact"
                className="px-8 py-4 bg-brand text-brand-foreground font-semibold uppercase tracking-widest text-xs rounded-sm hover:opacity-90 transition"
              >
                Request Free Estimate
              </Link>
              <a
                href="tel:+16028824013"
                className="px-8 py-4 border border-brand text-brand font-semibold uppercase tracking-widest text-xs rounded-sm hover:bg-brand/5 transition"
              >
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

function RegionCard({
  to,
  title,
  subtitle,
  img,
}: {
  to: "/southflorida" | "/arizona";
  title: string;
  subtitle: string;
  img: string;
}) {
  return (
    <Link
      to={to}
      className="group relative block overflow-hidden rounded-sm border border-border shadow-md aspect-[4/5] sm:aspect-[5/4]"
    >
      <img
        src={img}
        alt={title}
        loading="lazy"
        width={1920}
        height={1024}
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition duration-700"
      />
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
