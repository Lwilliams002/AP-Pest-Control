import { Link, useRouterState } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import miamiLogo from "@/assets/ap-pest-miami-logo-clean.png";
import arizonaLogo from "@/assets/ap-pest-arizona-logo.svg";

export function SiteNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isMiami = pathname.startsWith("/southflorida");
  const isArizona = pathname.startsWith("/arizona");
  const phone = isMiami ? "+13057135011" : "+16028824013";
  const phoneDisplay = isMiami ? "(305) 713-5011" : "(602) 882-4013";
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
      <a
        href={`tel:${phone}`}
        className="block bg-brand text-brand-foreground text-center text-xs sm:text-sm font-semibold tracking-wide py-2 px-4 hover:opacity-95 transition"
      >
        <span className="inline-flex items-center justify-center gap-2 flex-wrap">
          <Phone className="w-3.5 h-3.5" />
          <span className="uppercase">Call Us Now</span>
          <span className="opacity-90">·</span>
          <span>50% OFF 1st Service</span>
          <span className="opacity-90">·</span>
          <span className="font-bold">{phoneDisplay}</span>
        </span>
      </a>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16">
        <Link to="/" className="flex items-center gap-3">
          {isMiami ? (
            <img src={miamiLogo} alt="AP Pest" className="h-20 sm:h-24 w-auto -my-4" />
          ) : isArizona ? (
            <img src={arizonaLogo} alt="AP Pest" className="h-11 w-auto" />
          ) : (
            <img src={arizonaLogo} alt="AP Pest" className="h-11 w-auto [filter:brightness(0)]" />
          )}
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-brand" }}
            className="text-foreground/80 hover:text-brand transition"
          >
            Home
          </Link>
          <Link
            to="/southflorida"
            activeProps={{ className: "text-brand" }}
            className="text-foreground/80 hover:text-brand transition"
          >
            South Florida
          </Link>
          <Link
            to="/arizona"
            activeProps={{ className: "text-brand" }}
            className="text-foreground/80 hover:text-brand transition"
          >
            Arizona
          </Link>
          <Link
            to="/contact"
            activeProps={{ className: "text-brand" }}
            className="text-foreground/80 hover:text-brand transition"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${phone}`}
            className="hidden sm:inline-block px-4 py-2 bg-brand text-brand-foreground text-xs uppercase tracking-widest font-semibold rounded-sm hover:opacity-90 transition"
          >
            Free Quote
          </a>
        </div>
      </div>

      <nav className="md:hidden border-t border-border bg-background/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-around px-2 py-2 text-xs font-semibold uppercase tracking-wider">
          <Link
            to="/"
            activeOptions={{ exact: true }}
            activeProps={{ className: "text-brand" }}
            className="px-2 py-1.5 text-foreground/80"
          >
            Home
          </Link>
          <Link
            to="/southflorida"
            activeProps={{ className: "text-brand" }}
            className="px-2 py-1.5 text-foreground/80"
          >
            S. Florida
          </Link>
          <Link
            to="/arizona"
            activeProps={{ className: "text-brand" }}
            className="px-2 py-1.5 text-foreground/80"
          >
            Arizona
          </Link>
          <Link
            to="/contact"
            activeProps={{ className: "text-brand" }}
            className="px-2 py-1.5 text-foreground/80"
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
