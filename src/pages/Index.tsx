import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import About from "@/components/site/About";
import DiscoverGrid from "@/components/site/DiscoverGrid";
import Brands from "@/components/site/Brands";
import Gallery from "@/components/site/Gallery";
import WhyUs from "@/components/site/WhyUs";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

const Index = () => (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <DiscoverGrid />
      <Brands />
      <Gallery />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
);

export default Index;
