import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import artisanCollectionLogo from "@/assets/logos/artisan-collection.png";

const links = [
  { href: "/#collection", label: "Collection" },
  { href: "/#about", label: "About" },
  { href: "/#brands", label: "Brands" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-6"
      )}
    >
      <nav className="container flex items-center justify-between">
        <a href="/" className="flex items-center transition-opacity hover:opacity-90">
          <img
            src={artisanCollectionLogo}
            alt="The Artisan Collection — TA Ramskill"
            className={cn(
              "w-auto object-contain transition-all duration-500",
              scrolled ? "h-12 md:h-14" : "h-20 md:h-24"
            )}
          />
        </a>
        <ul className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={cn(
                  "nav-link text-xs uppercase tracking-[0.25em] transition-colors hover:text-accent",
                  scrolled ? "text-charcoal/80" : "text-cream/90"
                )}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/#contact"
          className={cn(
            "hidden md:inline-flex items-center px-5 h-10 text-[10px] uppercase tracking-[0.3em] transition-all duration-500 border shadow-sm",
            scrolled
              ? "bg-brown text-cream border-brown hover:bg-accent hover:border-accent hover:text-charcoal"
              : "bg-accent/90 text-charcoal border-accent hover:bg-brown hover:border-brown hover:text-cream"
          )}
        >
          Reserve
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
