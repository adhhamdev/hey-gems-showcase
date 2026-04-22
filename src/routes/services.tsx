import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Gem, Search, ScrollText, Scissors, ShieldCheck, Globe } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Hey Gems International" },
      { name: "description", content: "Sourcing, cutting, certification and bespoke advisory for Ceylon gemstones." },
      { property: "og:title", content: "Services — Hey Gems International" },
      { property: "og:description", content: "Sourcing, cutting, certification and bespoke advisory." },
    ],
  }),
  component: Services,
});

const services = [
  { icon: Gem, title: "Sourcing", text: "Hand-selected stones from licensed Sri Lankan mining cooperatives." },
  { icon: Scissors, title: "Cutting & Polishing", text: "Master-cut on-island for maximum brilliance and yield." },
  { icon: ShieldCheck, title: "Certification", text: "Independent reports from GIA, Gübelin, SSEF and GRS on request." },
  { icon: Search, title: "Bespoke Search", text: "Calibrated parcels, matched pairs and rare specimens to your brief." },
  { icon: ScrollText, title: "Advisory", text: "Investment-grade guidance for collectors and private clients." },
  { icon: Globe, title: "Global Delivery", text: "Fully insured, discreet international shipping." },
];

function Services() {
  return (
    <Layout>
      <PageHero title="Our Services" subtitle="From mine to setting — a complete service for collectors, jewellers and connoisseurs." />

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => (
            <div key={s.title} className="border border-border p-10 text-center hover:border-gold transition-colors">
              <s.icon className="mx-auto text-gold" size={32} strokeWidth={1.2} />
              <h3 className="font-serif text-2xl mt-5">{s.title}</h3>
              <div className="h-px w-10 bg-gold my-4 mx-auto" />
              <p className="text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-midnight text-ivory py-24 text-center px-6">
        <p className="text-xs tracking-[0.5em] text-gold">START A CONVERSATION</p>
        <h2 className="font-serif text-4xl md:text-5xl mt-4">Tell us what you are looking for</h2>
        <div className="gold-divider" />
        <Link to="/contact" className="inline-block mt-6 px-10 py-3 bg-gold text-midnight text-xs tracking-[0.3em] uppercase hover:bg-ivory transition-colors">
          Contact Us
        </Link>
      </section>
    </Layout>
  );
}
