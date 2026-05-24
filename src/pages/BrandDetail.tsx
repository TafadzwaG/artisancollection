import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CalendarDays, ChevronLeft, Mail, Sparkles, UtensilsCrossed } from "lucide-react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import BrandLogo from "@/components/site/BrandLogo";
import Reveal from "@/components/site/Reveal";
import { brands } from "@/components/site/brand-data";
import { Button } from "@/components/ui/button";

const BrandDetail = () => {
  const { brandId } = useParams();
  const brand = brands.find((item) => item.id === brandId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [brandId]);

  if (!brand) {
    return (
      <main className="min-h-screen bg-background text-charcoal">
        <Navbar />
        <section className="container min-h-[70vh] pt-36 pb-20 flex flex-col justify-center">
          <Reveal variant="up">
            <a href="/#brands" className="text-xs uppercase tracking-[0.25em] text-accent mb-8">
              Back to brands
            </a>
            <h1 className="font-display text-5xl md:text-7xl mb-6">Brand not found</h1>
            <p className="text-charcoal/70 max-w-xl text-lg">
              This collection page does not exist. Return to the main collection to choose a brand.
            </p>
          </Reveal>
        </section>
        <Footer />
      </main>
    );
  }

  const gallery = brand.gallery?.length
    ? brand.gallery
    : [
        { src: brand.image, alt: brand.name },
        { src: brand.image, alt: `${brand.name} detail` },
      ];
  const relatedBrands = brands.filter((item) => item.id !== brand.id).slice(0, 3);
  const highlights = brand.highlights ?? ["Bookings", "Private hire", "General enquiries"];

  return (
    <main className="bg-background text-charcoal overflow-x-hidden">
      <Navbar />

      <section className="relative min-h-[82svh] overflow-hidden text-cream">
        <img
          src={brand.image}
          alt={`${brand.name} hero`}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-charcoal/20" />
        <div className="relative z-10 container min-h-[82svh] flex flex-col justify-end pb-20 md:pb-28 pt-36">
          <Reveal variant="fade">
            <a
              href="/#brands"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-cream/70 hover:text-gold transition-colors mb-10"
            >
              <ChevronLeft className="h-4 w-4" />
              Collection
            </a>
          </Reveal>
          <Reveal className="max-w-4xl" variant="up" delay={100}>
            <p className="eyebrow text-gold mb-5">{brand.category}</p>
            {brand.logo ? (
              <>
                <h1 className="sr-only">{brand.name}</h1>
                <BrandLogo
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  blend={brand.logoBlend}
                  photo={brand.logoPhoto}
                  wrapperClassName="mb-8"
                  imageClassName={
                    brand.logoPhoto
                      ? "h-auto w-full max-w-[420px] max-h-52 md:max-h-60 object-cover"
                      : "h-32 md:h-48 w-auto max-w-[420px]"
                  }
                />
              </>
            ) : (
              <h1 className="font-display text-6xl md:text-8xl leading-none mb-6">
                {brand.name}
              </h1>
            )}
            <p className="text-2xl md:text-3xl font-display italic text-gold mb-6">
              {brand.tagline}
            </p>
            <p className="text-cream/82 text-lg md:text-xl leading-relaxed max-w-2xl font-light">
              {brand.description}
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              {brand.id === "three-by-joe" ? (
                <Button variant="gold" size="xl" asChild>
                  <Link to="/brands/three-by-joe/menu">
                    <UtensilsCrossed className="h-4 w-4" />
                    View Menu
                  </Link>
                </Button>
              ) : null}
              <Button variant={brand.id === "three-by-joe" ? "luxe" : "gold"} size="xl" asChild>
                <a href="/#contact">
                  <CalendarDays className="h-4 w-4" />
                  Enquire Now
                </a>
              </Button>
              <Button variant="luxe" size="xl" asChild>
                <a href={`mailto:info@artisancollectionzim.com?subject=${encodeURIComponent(brand.name)}`}>
                  <Mail className="h-4 w-4" />
                  Email Team
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-cream">
        <div className="container grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5" variant="left">
            <p className="eyebrow mb-6">Experience</p>
            <h2 className="font-display text-4xl md:text-6xl leading-tight mb-8">
              Everything needed for a <span className="italic text-accent">complete visit.</span>
            </h2>
            <p className="text-charcoal/70 text-lg leading-relaxed font-light">
              From first arrival to the final detail, the experience is shaped around atmosphere, service and the ease of gathering well.
            </p>
          </Reveal>
          <div className="lg:col-span-7 grid md:grid-cols-3 gap-4">
            {highlights.map((highlight, index) => (
              <Reveal
                key={highlight}
                variant="up"
                delay={index * 100}
                className="border border-border bg-background p-6 min-h-44"
              >
                <Sparkles className="h-5 w-5 text-accent mb-8" />
                <p className="font-display text-3xl text-accent mb-3">0{index + 1}</p>
                <h3 className="text-sm uppercase tracking-[0.24em] leading-relaxed">
                  {highlight}
                </h3>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-background">
        <div className="container">
          <Reveal
            className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
            variant="up"
          >
            <div>
              <p className="eyebrow mb-5">Gallery</p>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                A closer look at <span className="italic text-accent">{brand.name}.</span>
              </h2>
            </div>
            <Button variant="dark" size="lg" asChild>
              <a href="/#contact">Plan a Visit &rarr;</a>
            </Button>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] gap-3 md:gap-4">
            {gallery.slice(0, 8).map((item, index) => (
              <Reveal
                key={`${item.src}-${index}`}
                variant="scale"
                delay={(index % 4) * 70}
                className={`relative overflow-hidden bg-muted ${
                  index === 0 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-charcoal text-cream">
        <div className="container">
          <Reveal className="mb-8" variant="up">
            <p className="eyebrow text-gold">Keep Exploring</p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-px bg-cream/10">
            {relatedBrands.map((item, index) => (
              <Reveal
                key={item.id}
                as="a"
                href={`/brands/${item.id}`}
                variant="scale"
                delay={index * 100}
                className="group relative aspect-[4/5] overflow-hidden bg-charcoal"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-3">
                    {item.category}
                  </p>
                  <h3 className="font-display text-3xl text-cream">{item.name}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BrandDetail;
