import { useEffect } from "react";
import { ChevronLeft, Download, Printer } from "lucide-react";
import { Link } from "react-router-dom";
import threeByJoHeadline from "@/assets/three-by-jo-headline.jpg";
import threeByJoLogoRose from "@/assets/three-by-jo-logo-rose.jpeg";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Reveal from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { THREE_BY_JOE_MENU } from "@/data/three-by-joe-menu";
import { downloadThreeByJoMenuHtml } from "@/lib/download-three-by-joe-menu";

const ThreeByJoMenu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => window.print();

  return (
    <main className="bg-background text-charcoal overflow-x-hidden three-by-jo-menu">
      <Navbar />

      <section className="relative min-h-[52svh] overflow-hidden text-cream print:min-h-0 print:py-8">
        <img
          src={threeByJoHeadline}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover print:hidden"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/30 print:hidden" />
        <div className="relative z-10 container flex flex-col justify-end min-h-[52svh] pb-16 md:pb-20 pt-36 print:min-h-0 print:pt-0 print:pb-0">
          <Reveal variant="fade" className="print:hidden">
            <Link
              to="/brands/three-by-joe"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-cream/70 hover:text-gold transition-colors mb-10"
            >
              <ChevronLeft className="h-4 w-4" />
              Back to Three by Jo
            </Link>
          </Reveal>
          <Reveal className="max-w-3xl" variant="up" delay={80}>
            <div className="overflow-hidden rounded-sm shadow-luxe ring-1 ring-cream/20 w-fit mb-8 print:shadow-none print:ring-0">
              <img
                src={threeByJoLogoRose}
                alt="Three by Jo"
                className="h-auto w-full max-w-[280px] md:max-w-[320px] object-cover"
              />
            </div>
            <p className="eyebrow text-gold mb-4 print:text-accent">Dining Menu</p>
            <h1 className="font-display text-5xl md:text-7xl leading-tight mb-4 print:text-charcoal">
              Our Menu
            </h1>
            <p className="text-cream/85 text-lg md:text-xl font-light max-w-2xl leading-relaxed print:text-charcoal/80">
              {THREE_BY_JOE_MENU.intro}
            </p>
          </Reveal>
        </div>
      </section>

      <div className="sticky top-[72px] z-40 border-b border-border bg-cream/95 backdrop-blur-md print:hidden">
        <div className="container py-4 flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs uppercase tracking-[0.25em] text-charcoal/60">
            {THREE_BY_JOE_MENU.currencyNote}
          </p>
          <div className="flex flex-wrap gap-3">
            <Button variant="dark" size="lg" onClick={handlePrint}>
              <Printer className="h-4 w-4" />
              Print Menu
            </Button>
            <Button variant="gold" size="lg" onClick={() => downloadThreeByJoMenuHtml()}>
              <Download className="h-4 w-4" />
              Download Menu
            </Button>
          </div>
        </div>
      </div>

      <section className="py-16 md:py-24 bg-cream print:py-8">
        <div className="container max-w-4xl space-y-16 md:space-y-20 print:space-y-10">
          {THREE_BY_JOE_MENU.sections.map((section, sectionIndex) => (
            <Reveal key={section.id} variant="up" delay={sectionIndex * 60} className="print:opacity-100">
              <div className="mb-8 pb-4 border-b border-border/80">
                <h2 className="font-display text-3xl md:text-4xl text-charcoal">{section.title}</h2>
                {section.description ? (
                  <p className="mt-2 text-charcoal/60 font-light">{section.description}</p>
                ) : null}
              </div>
              <ul className="space-y-8">
                {section.items.map((item) => (
                  <li key={item.name} className="grid md:grid-cols-[1fr_auto] gap-2 md:gap-8 items-start">
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3 className="font-display text-xl md:text-2xl text-charcoal">{item.name}</h3>
                        {item.dietary?.length ? (
                          <span className="text-[10px] uppercase tracking-[0.2em] text-[#8b4a5c]">
                            {item.dietary.join(" / ")}
                          </span>
                        ) : null}
                      </div>
                      {item.description ? (
                        <p className="mt-2 text-charcoal/65 font-light leading-relaxed">{item.description}</p>
                      ) : null}
                    </div>
                    <p className="font-display text-xl md:text-2xl text-accent md:text-right whitespace-nowrap">
                      ${item.price}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-12 bg-background border-t border-border print:hidden">
        <div className="container max-w-4xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="font-display text-2xl italic text-accent mb-2">{THREE_BY_JOE_MENU.tagline}</p>
            <p className="text-sm text-charcoal/60">Menu updated {THREE_BY_JOE_MENU.updatedAt}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="dark" size="lg" asChild>
              <Link to="/brands/three-by-joe">Back to Three by Jo</Link>
            </Button>
            <Button variant="gold" size="lg" onClick={() => downloadThreeByJoMenuHtml()}>
              <Download className="h-4 w-4" />
              Download Menu
            </Button>
          </div>
        </div>
      </section>

      <div className="print:hidden">
        <Footer />
      </div>
    </main>
  );
};

export default ThreeByJoMenu;
