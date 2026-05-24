import { brands } from "./brand-data";
import BrandLogo from "./BrandLogo";
import Reveal from "./Reveal";

const DiscoverGrid = () => (
  <section id="collection" className="py-28 md:py-36 bg-gradient-dark text-cream">
    <div className="container">
      <Reveal className="max-w-3xl mb-16" variant="up">
        <p className="eyebrow mb-6">Discover Our Brands</p>
        <h2 className="font-display text-4xl md:text-6xl text-cream leading-tight">
          A collection for every <span className="italic text-gold">moment.</span>
        </h2>
      </Reveal>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-cream/10">
        {brands.map((b, index) => (
          <Reveal
            key={b.id}
            as="a"
            href={`/brands/${b.id}`}
            variant="scale"
            delay={(index % 4) * 80}
            className="group relative aspect-[4/5] overflow-hidden bg-charcoal"
          >
            <img
              src={b.image}
              alt={b.name}
              loading="lazy"
              width={800}
              height={1000}
              className="absolute inset-0 h-full w-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-[1200ms] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
            <div className="absolute inset-0 p-5 md:p-7 flex flex-col justify-end">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold mb-2">{b.category}</p>
              {b.logo ? (
                <BrandLogo
                  src={b.logo}
                  alt={b.name}
                  blend={b.logoBlend}
                  photo={b.logoPhoto}
                  compact
                  wrapperClassName="w-full max-w-[240px] group-hover:translate-x-1 transition-transform duration-500"
                  imageClassName={
                    b.logoPhoto
                      ? "h-auto w-full max-h-32 md:max-h-40 object-cover object-left"
                      : b.logoBlend
                        ? "h-24 md:h-32 w-auto max-w-full object-left"
                        : "h-20 md:h-28 w-auto max-w-full object-left"
                  }
                />
              ) : (
                <h3 className="font-display text-xl md:text-2xl text-cream group-hover:translate-x-1 transition-transform duration-500">
                  {b.name}
                </h3>
              )}
            </div>
          </Reveal>
        ))}
        <Reveal
          variant="fade"
          delay={320}
          className="hidden md:flex lg:col-span-1 aspect-[4/5] bg-charcoal items-center justify-center p-8 border border-cream/10"
        >
          <div>
            <p className="eyebrow text-gold mb-3">More</p>
            <p className="font-display text-2xl text-cream/80 leading-snug">
              New experiences <em className="not-italic text-gold">coming soon.</em>
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default DiscoverGrid;
