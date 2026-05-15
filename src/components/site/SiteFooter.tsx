import { Link } from "@tanstack/react-router";
import logo from "@/assets/ap-pest-logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10 text-sm">
        <div className="md:col-span-2">
          <Link to="/" className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center h-11 w-11 rounded-sm bg-brand">
              <img src={logo} alt="AP Pest" className="h-8 w-auto" />
            </span>
            <span className="font-display font-bold text-xl text-brand">AP Pest</span>
          </Link>
          <p className="mt-4 max-w-sm text-muted-foreground">
            Independent, family-owned pest control. Sustainable, modern programs across Miami, FL and the Arizona Valley since 2012.
          </p>
        </div>
        <div>
          <p className="font-display font-bold text-brand mb-3">Service Areas</p>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/miami" className="hover:text-brand">Miami, FL</Link></li>
            <li><Link to="/arizona" className="hover:text-brand">Arizona Valley</Link></li>
            <li><Link to="/contact" className="hover:text-brand">Free estimate</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-display font-bold text-brand mb-3">Contact</p>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="tel:+16028824013" className="hover:text-brand">(602) 882-4013</a></li>
            <li><a href="mailto:hello@ap-pest-control.com" className="hover:text-brand break-all">hello@ap-pest-control.com</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 py-5 text-xs text-muted-foreground flex flex-wrap justify-between gap-2">
          <span>© {new Date().getFullYear()} AP Pest Control. Independent & family owned.</span>
          <span>Miami · Phoenix</span>
        </div>
      </div>
    </footer>
  );
}
