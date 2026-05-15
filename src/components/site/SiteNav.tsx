import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/ap-pest-logo.png";

export function SiteNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border">
      <a
        href="tel:+16028824013"
        className="block bg-brand text-brand-foreground text-center text-xs sm:text-sm font-semibold tracking-wide py-2 px-4 hover:opacity-95 transition"
      >
        <span className="inline-flex items-center justify-center gap-2 flex-wrap">
          <Phone className="w-3.5 h-3.5" />
          <span className="uppercase">Call Us Now</span>
          <span className="opacity-90">·</span>
          <span>50% OFF 1st Service</span>
          <span className="opacity-90">·</span>
          <span className="font-bold">(602) 882-4013</span>
        </span>
      </a>
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 h-16">
        <Link to="/" className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center h-10 w-10 rounded-sm bg-brand">
            <img src={logo} alt="AP Pest" className="h-7 w-auto" />
          </span>
          <span className="font-display font-bold text-lg sm:text-xl text-brand">
            AP Pest
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-brand" }} className="text-foreground/80 hover:text-brand transition">Home</Link>
          <Link to="/miami" activeProps={{ className: "text-brand" }} className="text-foreground/80 hover:text-brand transition">Miami, FL</Link>
          <Link to="/arizona" activeProps={{ className: "text-brand" }} className="text-foreground/80 hover:text-brand transition">Arizona</Link>
          <Link to="/contact" activeProps={{ className: "text-brand" }} className="text-foreground/80 hover:text-brand transition">Contact</Link>
        </nav>

        <div className="flex items-center gap-2">
          <a href="tel:+16028824013" className="hidden sm:inline-block px-4 py-2 bg-brand text-brand-foreground text-xs uppercase tracking-widest font-semibold rounded-sm hover:opacity-90 transition">
            Free Quote
          </a>
          <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="Menu">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-6 py-4 gap-3 text-sm font-medium">
            <Link to="/" onClick={() => setOpen(false)} className="py-2">Home</Link>
            <Link to="/miami" onClick={() => setOpen(false)} className="py-2">Miami, FL</Link>
            <Link to="/arizona" onClick={() => setOpen(false)} className="py-2">Arizona</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="py-2">Contact</Link>
            <a href="tel:+16028824013" className="mt-2 px-4 py-3 bg-brand text-brand-foreground text-xs uppercase tracking-widest font-semibold rounded-sm text-center">Call (602) 882-4013</a>
          </nav>
        </div>
      )}
    </header>
  );
}
