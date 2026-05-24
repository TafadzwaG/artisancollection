import Reveal from "./Reveal";

const items = [
  { n: "01", title: "Dining", text: "Chef-led kitchens with an eye for seasonality, sourcing and quiet refinement." },
  { n: "02", title: "Lounge", text: "Velvet rooms, considered cocktails and a soundtrack made for slow hours." },
  { n: "03", title: "Leisure", text: "Bowling, games and entertainment — designed without the usual compromises." },
  { n: "04", title: "Cinema", text: "An independent picture house with a roadside diner attached." },
  { n: "05", title: "Stay", text: "Boutique countryside homes for short escapes and longer pauses." },
  { n: "06", title: "Experience", text: "A consistent standard of design, warmth and detail across every venue." },
];

const WhyUs = () => (
  <section className="py-28 md:py-36 bg-secondary/40">
    <div className="container">
      <Reveal className="max-w-3xl mb-20" variant="up">
        <p className="eyebrow mb-6">Why The Collection</p>
        <h2 className="font-display text-4xl md:text-6xl text-charcoal leading-tight">
          One standard, <span className="italic text-accent">six worlds.</span>
        </h2>
      </Reveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {items.map((it, index) => (
          <Reveal
            key={it.n}
            variant="up"
            delay={(index % 3) * 90}
            className="bg-cream p-10 md:p-12 group hover:bg-charcoal hover:text-cream transition-colors duration-700"
          >
            <div className="font-display text-5xl text-accent mb-6">{it.n}</div>
            <h3 className="font-display text-2xl mb-4">{it.title}</h3>
            <p className="text-sm leading-relaxed font-light opacity-75">{it.text}</p>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
