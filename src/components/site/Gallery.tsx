import { brands } from "./brand-data";
import Reveal from "./Reveal";

const Gallery = () => {
  const threeByJoImages = brands[0].gallery ?? [];
  const items = [
    { src: brands[0].image, span: "md:col-span-2 md:row-span-2", alt: "Three by Jo restaurant table" },
    { src: threeByJoImages[0]?.src ?? brands[0].image, span: "", alt: threeByJoImages[0]?.alt ?? "Three by Jo dining" },
    { src: threeByJoImages[1]?.src ?? brands[0].image, span: "", alt: threeByJoImages[1]?.alt ?? "Three by Jo drink" },
    { src: threeByJoImages[4]?.src ?? brands[0].image, span: "", alt: threeByJoImages[4]?.alt ?? "Three by Jo guest" },
    { src: threeByJoImages[5]?.src ?? brands[0].image, span: "md:col-span-2", alt: threeByJoImages[5]?.alt ?? "Three by Jo lounge" },
    { src: brands[3].image, span: "", alt: "Artisan bakery counter" },
    { src: brands[1].image, span: "", alt: "Cocktail lounge" },
    { src: brands[2].image, span: "", alt: "Sweet shop" },
    { src: brands[7].image, span: "md:col-span-2", alt: "Boutique stay" },
    { src: brands[4].image, span: "", alt: "Bowling alley" },
    { src: brands[6].image, span: "md:col-span-2", alt: "Roadhouse cinema" },
    { src: brands[5].image, span: "", alt: "Games lounge" },
  ];

  return (
    <section id="gallery" className="py-28 md:py-36 bg-cream">
      <div className="container">
        <Reveal
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
          variant="up"
        >
          <div>
            <p className="eyebrow mb-6">Highlights</p>
            <h2 className="font-display text-4xl md:text-5xl text-charcoal leading-tight max-w-xl">
              Moments from across <span className="italic text-accent">the collection.</span>
            </h2>
          </div>
          <p className="text-charcoal/60 max-w-sm font-light">
            An editorial look at the rooms, plates, lanes and quiet corners that make up our world.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {items.map((it, i) => (
            <Reveal
              key={i}
              variant="scale"
              delay={(i % 4) * 70}
              className={`relative overflow-hidden group ${it.span}`}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-700" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
