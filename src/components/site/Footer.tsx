import artisanCollectionLogo from "@/assets/logos/artisan-collection.png";
import { brands } from "./brand-data";
import Reveal from "./Reveal";

const Footer = () => (
  <footer className="bg-charcoal border-t border-cream/10 text-cream/70">
    <div className="container py-16 grid md:grid-cols-12 gap-10">
      <Reveal className="md:col-span-5" variant="up">
        <img
          src={artisanCollectionLogo}
          alt="The Artisan Collection - TA Ramskill"
          className="h-28 md:h-36 w-auto object-contain mb-6"
        />
        <p className="mt-6 text-sm font-light max-w-sm leading-relaxed">
          A curated collection of dining, lounge, leisure, entertainment and stay experiences.
        </p>
      </Reveal>
      <Reveal className="md:col-span-3" variant="up" delay={100}>
        <p className="eyebrow text-gold mb-4">Navigate</p>
        <ul className="space-y-2 text-sm">
          {["Collection", "About", "Brands", "Gallery", "Contact"].map((label) => (
            <li key={label}>
              <a href={`/#${label.toLowerCase()}`} className="hover:text-gold transition-colors">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
      <Reveal className="md:col-span-4" variant="up" delay={200}>
        <p className="eyebrow text-gold mb-4">Brands</p>
        <ul className="space-y-2 text-sm">
          {brands.map((brand) => (
            <li key={brand.id}>
              <a href={`/brands/${brand.id}`} className="hover:text-gold transition-colors">
                {brand.name}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
    <Reveal variant="fade" delay={120}>
      <div className="border-t border-cream/10">
        <div className="container py-6 text-xs text-cream/50">
          <p>&copy; {new Date().getFullYear()} The Artisan Collection TA Ramskill. All rights reserved.</p>
        </div>
      </div>
    </Reveal>
  </footer>
);

export default Footer;
