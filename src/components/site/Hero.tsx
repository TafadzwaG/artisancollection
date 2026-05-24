import { useEffect, useState } from "react";
import heroImg from "@/assets/hero.jpg";
import heroCafe from "@/assets/hero/hero-cafe.png";
import heroLounge from "@/assets/hero/hero-lounge.png";
import heroThreeByJo from "@/assets/hero/hero-three-by-jo.png";
import heroWestgate from "@/assets/hero/hero-westgate.png";
import heroRestaurant from "@/assets/hero/hero-restaurant.png";
import artisanCollectionLogo from "@/assets/logos/artisan-collection.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SLIDE_INTERVAL_MS = 7000;
const FADE_DURATION_MS = 2500;

const heroImages = [
  {
    src: heroImg,
    alt: "The Artisan Collection — interior of a luxury restaurant and bar",
  },
  {
    src: heroRestaurant,
    alt: "Elegant dining room with rose-covered walls at The Artisan Collection",
  },
  {
    src: heroLounge,
    alt: "Three by Jo lounge with Real People, Real Food, Real Laughter neon signage",
  },
  {
    src: heroThreeByJo,
    alt: "Three by Jo restaurant exterior with outdoor seating",
  },
  {
    src: heroCafe,
    alt: "Artisan cafe with specialty coffee and curated interiors",
  },
 
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    heroImages.forEach(({ src }) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % heroImages.length);
    }, SLIDE_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, []);

  return (
    <section id="top" className="relative h-[100svh] min-h-[680px] w-full overflow-hidden">
      <div className="absolute inset-0">
        {heroImages.map((image, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={image.src}
              aria-hidden={!isActive}
              className={cn(
                "hero-slide absolute inset-0 overflow-hidden",
                isActive ? "opacity-100 z-[2]" : "opacity-0 z-[1]"
              )}
              style={{
                transition: `opacity ${FADE_DURATION_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
              }}
            >
              <img
                src={image.src}
                alt={isActive ? image.alt : ""}
                width={1920}
                height={1080}
                decoding="async"
                className="hero-slide-image absolute inset-0 h-full w-full object-cover animate-slow-zoom"
              />
            </div>
          );
        })}
        <div className="absolute inset-0 z-20 bg-gradient-hero pointer-events-none" />
        <div className="absolute inset-0 z-20 bg-charcoal/30 pointer-events-none" />
      </div>

      <div className="relative z-30 h-full container flex flex-col justify-end pb-24 md:pb-32">
        <div className="max-w-3xl animate-fade-in">
          <img
            src={artisanCollectionLogo}
            alt=""
            aria-hidden="true"
            className="h-40 md:h-56 w-auto object-contain mb-8"
          />
          <h1 className="sr-only">The Artisan Collection — TA Ramskill</h1>
          <p className="eyebrow text-accent mb-6">A Curated Collection · Est. Ramskill</p>
          <p className="text-cream/80 text-lg md:text-xl max-w-xl leading-relaxed mb-10 font-light">
            A curated portfolio of dining, lounge, leisure, entertainment and boutique stay experiences — crafted to leave a lasting impression.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="gold" size="xl">
              <a href="#brands">Explore the Collection</a>
            </Button>
            <Button asChild variant="luxe" size="xl">
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center text-cream/60 text-[10px] uppercase tracking-[0.4em]">
        <span>Scroll</span>
        <span className="block w-px h-12 bg-cream/40 mt-3 animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
