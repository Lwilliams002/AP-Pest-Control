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
      { title: "Miami Pest Control — AP Pest Control, FL" },
      { name: "description", content: "Pest control in Miami, FL. Mosquitoes, roaches, iguanas, termites, no-see-ums and more — sustainable programs built for South Florida." },
      { property: "og:title", content: "Miami Pest Control — AP Pest" },
      { property: "og:description", content: "South Florida pest control with art-deco style and serious results." },
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
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-12">
              <p className="text-xs uppercase tracking-[0.5em] text-secondary mb-4 font-semibold">Miami · Florida</p>
              <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold text-foreground tracking-wide">
                Hello,<br />
                <span className="text-gradient-miami">Miami.</span>
              </h1>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-3 font-semibold">South Florida service</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">Built for the <span className="text-gradient-miami">305.</span></h2>
              <p className="mt-5 text-base sm:text-lg text-muted-foreground leading-relaxed">
                From South Beach high-rises to Coral Gables homes, our Florida program is engineered around humidity, ocean air, and the pests that thrive in both. Mosquitoes, roaches, termites, iguanas — handled.
              </p>
              <Link to="/contact" className="inline-block mt-7 px-7 py-3.5 bg-brand text-brand-foreground font-semibold uppercase tracking-widest text-xs rounded-sm hover:opacity-90 transition">
                Book Miami Service
              </Link>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-3 font-semibold">Cities served</p>
              <div className="flex flex-wrap gap-2">
                {miamiCities.map((c) => (
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
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">Miami pest <span className="text-gradient-miami">programs.</span></h2>
              </div>
              <p className="text-xs text-muted-foreground">{miamiPests.length} programs · 🌴 = Miami exclusive</p>
            </div>
            <RegionPests pests={miamiPests} region="miami" />
          </div>
        </section>

        <section className="py-16 md:py-20 border-t border-border bg-gradient-miami-sunset/10">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs uppercase tracking-[0.4em] text-accent mb-3 font-semibold">Free Miami estimate</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">Tell us about <span className="text-gradient-miami">the pest.</span></h2>
              <p className="mt-5 text-muted-foreground max-w-md">
                We'll come out, look closer than anyone else has, and write you a plan that actually works for South Florida.
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
