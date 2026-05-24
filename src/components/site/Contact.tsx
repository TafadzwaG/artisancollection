import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import Reveal from "./Reveal";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Message received",
        description: "Thank you — a member of our team will be in touch shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 600);
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-charcoal text-cream">
      <div className="container grid lg:grid-cols-12 gap-14 lg:gap-20">
        <Reveal className="lg:col-span-5" variant="left">
          <p className="eyebrow text-gold mb-6">Get in Touch</p>
          <h2 className="font-display text-4xl md:text-6xl leading-tight mb-8">
            We'd love to <span className="italic text-gold">hear from you.</span>
          </h2>
          <p className="text-cream/70 font-light text-lg leading-relaxed mb-12 max-w-md">
            Reservations, private hire, partnerships or general enquiries — our team is happy to help.
          </p>

          <ul className="space-y-6 text-cream/80">
            <li className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-gold mt-0.5 shrink-0" />
              <a href="mailto:info@artisancollectionzim.com" className="hover:text-gold transition-colors">info@artisancollectionzim.com</a>
            </li>
            <li className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-gold mt-0.5 shrink-0" />
              <a href="tel:+447510975478" className="hover:text-gold transition-colors">+44 7510 975478</a>
            </li>
            <li className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" />
              <span>P6 Office, Westgate Shopping Centre</span>
            </li>
          </ul>

          <div className="flex items-center gap-4 mt-12 pt-8 border-t border-cream/10">
            <a href="#" aria-label="Instagram" className="w-10 h-10 border border-cream/20 hover:border-gold hover:text-gold flex items-center justify-center transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 border border-cream/20 hover:border-gold hover:text-gold flex items-center justify-center transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </Reveal>

        <Reveal as="form" onSubmit={onSubmit} className="lg:col-span-7 space-y-6" variant="right" delay={120}>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] text-cream/60 mb-2 block">Name</label>
              <Input required name="name" className="bg-transparent border-0 border-b border-cream/20 rounded-none px-0 h-12 text-cream placeholder:text-cream/40 focus-visible:ring-0 focus-visible:border-gold" placeholder="Your full name" />
            </div>
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] text-cream/60 mb-2 block">Email</label>
              <Input required type="email" name="email" className="bg-transparent border-0 border-b border-cream/20 rounded-none px-0 h-12 text-cream placeholder:text-cream/40 focus-visible:ring-0 focus-visible:border-gold" placeholder="you@example.com" />
            </div>
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-[0.3em] text-cream/60 mb-2 block">Subject</label>
            <Input name="subject" className="bg-transparent border-0 border-b border-cream/20 rounded-none px-0 h-12 text-cream placeholder:text-cream/40 focus-visible:ring-0 focus-visible:border-gold" placeholder="Reservation, private hire, partnership..." />
          </div>
          <div>
            <label className="text-[10px] uppercase tracking-[0.3em] text-cream/60 mb-2 block">Message</label>
            <Textarea required name="message" rows={5} className="bg-transparent border-0 border-b border-cream/20 rounded-none px-0 text-cream placeholder:text-cream/40 focus-visible:ring-0 focus-visible:border-gold resize-none" placeholder="Tell us a little about your enquiry..." />
          </div>
          <div className="pt-4">
            <Button type="submit" variant="gold" size="xl" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;