import { Link, useRouterState } from "@tanstack/react-router";
import miamiLogo from "@/assets/ap-pest-miami-logo-clean.png";
import arizonaLogo from "@/assets/ap-pest-arizona-logo.svg";

export function SiteFooter() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isMiami = pathname.startsWith("/southflorida");
  const isArizona = pathname.startsWith("/arizona");
  const phone = isMiami ? "+13057135011" : "+16028824013";
  const phoneDisplay = isMiami ? "(305) 713-5011" : "(602) 882-4013";
  const email = isMiami ? "Appestmiami2026@gmail.com" : "hello@ap-pest-control.com";
  return (
    <footer className="border-t border-border bg-card/40 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10 text-sm">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-3">
            {isMiami ? (
              <img src={miamiLogo} alt="AP Pest" className="h-24 w-auto" />
            ) : isArizona ? (
              <img src={arizonaLogo} alt="AP Pest" className="h-14 w-auto" />
            ) : (
              <img src={arizonaLogo} alt="AP Pest" className="h-14 w-auto [filter:brightness(0)]" />
            )}
          </Link>
          <p className="mt-4 max-w-sm text-muted-foreground">
            Independent, family-owned pest control. Sustainable, modern programs across South
            Florida and the Arizona Valley since 2012.
          </p>
        </div>
        <div>
          <p className="font-display font-bold text-brand mb-3">Service Areas</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <Link to="/southflorida" className="hover:text-brand">
                South Florida
              </Link>
            </li>
            <li>
              <Link to="/arizona" className="hover:text-brand">
                Arizona Valley
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-brand">
                Free estimate
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-display font-bold text-brand mb-3">Contact</p>
          <ul className="space-y-2 text-muted-foreground">
            <li>
              <a href={`tel:${phone}`} className="hover:text-brand">
                {phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${email}`} className="hover:text-brand break-all">
                {email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} AP Pest Control. Independent & family owned.</span>
          <span>South Florida · Phoenix</span>
        </div>
      </div>
    </footer>
  );
}
