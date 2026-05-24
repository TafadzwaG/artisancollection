import { brands } from "./brand-data";
import BrandLogo from "./BrandLogo";
import Reveal from "./Reveal";
import { Button } from "@/components/ui/button";

const Brands = () => {
  return (
    <section id="brands" className="py-28 md:py-40 bg-background">
      <div className="container">
        <Reveal className="max-w-3xl mb-20" variant="up">
          <p className="eyebrow mb-6">Featured Brands</p>
          <h2 className="font-display text-4xl md:text-6xl text-charcoal leading-tight">
            Eight distinct experiences,
            <br />
            <span className="italic text-accent">one collection.</span>
          </h2>
        </Reveal>

        <div className="space-y-28 md:space-y-40">
          {brands.map((b, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={b.id}
                className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                <Reveal
                  className={`lg:col-span-7 group relative overflow-hidden ${
                    reverse ? "lg:order-2" : ""
                  }`}
                  variant={reverse ? "right" : "left"}
                >
                  <div className="relative overflow-hidden aspect-[4/3] md:aspect-[16/11]">
                    <img
                      src={b.image}
                      alt={`${b.name} - ${b.category}`}
                      loading="lazy"
                      width={1280}
                      height={1280}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-700" />
                    <div className="absolute top-6 left-6 px-3 py-1 bg-cream/90 backdrop-blur text-[10px] uppercase tracking-[0.3em] text-charcoal">
                      {b.category}
                    </div>
                    <div className="absolute bottom-6 right-6 font-display text-cream/80 text-sm tracking-wider">
                      0{i + 1} / 0{brands.length}
                    </div>
                  </div>
                  {b.gallery ? (
                    <div className="mt-3 grid grid-cols-4 gap-3">
                      {b.gallery.slice(0, 4).map((item, galleryIndex) => (
                        <Reveal
                          key={item.src}
                          as="div"
                          variant="scale"
                          delay={galleryIndex * 70}
                          className="relative aspect-square overflow-hidden bg-muted"
                        >
                          <img
                            src={item.src}
                            alt={item.alt}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                          />
                        </Reveal>
                      ))}
                    </div>
                  ) : null}
                </Reveal>

                <Reveal
                  className={`lg:col-span-5 ${reverse ? "lg:order-1 lg:pr-8" : "lg:pl-8"}`}
                  variant={reverse ? "left" : "right"}
                  delay={120}
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-accent mb-4">
                    {b.tagline}
                  </p>
                  {b.logo ? (
                    <BrandLogo
                      src={b.logo}
                      alt={`${b.name} logo`}
                      blend={b.logoBlend}
                      photo={b.logoPhoto}
                      wrapperClassName="mb-6"
                      imageClassName={
                        b.logoPhoto
                          ? "h-auto w-full max-w-[320px] max-h-44 md:max-h-52 object-cover"
                          : "h-28 md:h-40 w-auto max-w-[360px]"
                      }
                    />
                  ) : (
                    <h3 className="font-display text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
                      {b.name}
                    </h3>
                  )}
                  <p className="text-charcoal/70 text-base md:text-lg leading-relaxed font-light mb-8">
                    {b.description}
                  </p>
                  <Button variant="dark" size="lg" asChild>
                    <a href={`/brands/${b.id}`}>Visit Brand &rarr;</a>
                  </Button>
                </Reveal>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Brands;
