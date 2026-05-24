import Reveal from "./Reveal";

const About = () => (
  <section id="about" className="relative py-28 md:py-40 bg-cream paper-grain">
    <div className="container grid lg:grid-cols-12 gap-12 lg:gap-20">
      <Reveal className="lg:col-span-4" variant="left">
        <p className="eyebrow mb-6">About the Collection</p>
        <div className="hidden lg:block w-16 h-px bg-accent" />
      </Reveal>
      <Reveal className="lg:col-span-8" variant="right" delay={120}>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-10">
          A family of places, <span className="italic text-accent">crafted with intention.</span>
        </h2>
        <div className="space-y-6 text-charcoal/75 text-lg leading-relaxed font-light max-w-3xl">
          <p>
            The Artisan Collection TA Ramskill is a portfolio of distinctive lifestyle, dining, leisure and accommodation venues — each with its own character, all bound by a shared standard of warmth, design and detail.
          </p>
          <p>
            From a chef-led restaurant and a velvet-lit lounge to a vintage bowling hall, a roadhouse cinema and boutique countryside stays, we build places where people gather, linger and return.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-border">
          {[
            { n: "08", l: "Venues" },
            { n: "15+", l: "Years" },
            { n: "1M+", l: "Guests" },
            { n: "01", l: "Vision" },
          ].map((s, index) => (
            <Reveal key={s.l} as="div" variant="up" delay={index * 90}>
              <div className="font-display text-4xl md:text-5xl text-accent">{s.n}</div>
              <div className="text-xs uppercase tracking-[0.25em] text-charcoal/60 mt-2">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </div>
  </section>
);

export default About;
