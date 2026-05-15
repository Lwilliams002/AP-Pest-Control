import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ContactForm } from "@/components/site/ContactForm";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact AP Pest Control — Free Estimates Miami & Arizona" },
      { name: "description", content: "Request a free pest control estimate in Miami, FL or the Arizona Valley. Family owned, fast response, satisfaction guaranteed." },
      { property: "og:title", content: "Contact AP Pest Control" },
      { property: "og:description", content: "Free estimates across Miami and Arizona." },
    ],
  }),
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-brand-soft mb-3 font-semibold">Get in touch</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold">Free <span className="italic text-brand">estimate.</span></h1>
            <div className="mt-5 h-px w-32 heritage-rule" />
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed">
              Tell us where the trouble is — Miami or the Valley — and we'll show up fast with a plan that actually works.
            </p>
            <div className="mt-8 space-y-4">
              <a href="tel:+16028824013" className="block p-5 border border-border rounded-sm hover:border-brand transition">
                <p className="text-xs uppercase tracking-widest text-brand-soft font-semibold">Phone</p>
                <p className="font-display text-2xl font-bold text-brand">(602) 882-4013</p>
              </a>
              <a href="mailto:hello@ap-pest-control.com" className="block p-5 border border-border rounded-sm hover:border-brand transition">
                <p className="text-xs uppercase tracking-widest text-brand-soft font-semibold">Email</p>
                <p className="font-display text-xl font-bold text-brand break-all">hello@ap-pest-control.com</p>
              </a>
            </div>
          </div>
          <ContactForm />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
