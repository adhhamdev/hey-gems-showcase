import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";
import heroImg from "@/assets/hero-gems.jpg";
import sapphire from "@/assets/sapphire.jpg";
import ruby from "@/assets/ruby.jpg";
import emerald from "@/assets/emerald.jpg";
import craftsmanship from "@/assets/craftsmanship.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hey Gems International — Fine Ceylon Gemstones" },
      { name: "description", content: "Ethically sourced Ceylon sapphires, rubies and rare coloured gemstones from Sri Lanka. A boutique house for collectors and jewellers." },
      { property: "og:title", content: "Hey Gems International — Fine Ceylon Gemstones" },
      { property: "og:description", content: "Ethically sourced Ceylon sapphires, rubies and rare coloured gemstones from Sri Lanka." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center text-ivory">
        <img src={heroImg} alt="Ceylon sapphires and rubies" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative z-10 px-6 max-w-3xl fade-in">
          <p className="text-xs md:text-sm tracking-[0.5em] text-gold mb-6">EST. CEYLON · SRI LANKA</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight">
            The Heritage of <span className="italic text-gold">Ceylon Gems</span>
          </h1>
          <div className="gold-divider" />
          <p className="text-ivory/80 text-lg max-w-xl mx-auto">
            Hand-selected sapphires, rubies and rare coloured stones — sourced directly
            from the legendary mines of Sri Lanka.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/collection" className="px-8 py-3 bg-gold text-midnight text-xs tracking-[0.3em] uppercase hover:bg-ivory transition-colors">
              View Collection
            </Link>
            <Link to="/contact" className="px-8 py-3 border border-ivory/40 text-ivory text-xs tracking-[0.3em] uppercase hover:border-gold hover:text-gold transition-colors">
              Enquire
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] text-gold">OUR STORY</p>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">A Legacy Set in Stone</h2>
          <div className="gold-divider" />
          <p className="text-muted-foreground leading-relaxed">
            For generations, Sri Lanka — once known as Ratna-Dweepa, the Island of Gems —
            has produced some of the world's most coveted coloured stones. Hey Gems
            International continues that tradition, bringing transparency, craftsmanship
            and quiet luxury to every stone we offer.
          </p>
        </div>
      </section>

      {/* SIGNATURE STONES */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] text-gold">SIGNATURE STONES</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">Our Specialities</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: sapphire, name: "Ceylon Sapphire", desc: "From cornflower blue to padparadscha — the crown jewel of Sri Lanka." },
              { img: ruby, name: "Burmese & Ceylon Ruby", desc: "Pigeon-blood reds and warm pinkish hues, full of fire." },
              { img: emerald, name: "Rare Coloured Stones", desc: "Spinels, garnets, alexandrite, tourmaline and more." },
            ].map((s) => (
              <div key={s.name} className="group text-center">
                <div className="aspect-square overflow-hidden bg-midnight">
                  <img src={s.img} alt={s.name} loading="lazy" width={800} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <h3 className="font-serif text-2xl mt-6">{s.name}</h3>
                <p className="text-sm text-muted-foreground mt-2 max-w-xs mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRAFTSMANSHIP */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src={craftsmanship} alt="Gemologist examining a stone" loading="lazy" width={1200} height={800} className="w-full h-[500px] object-cover" />
          <div>
            <p className="text-xs tracking-[0.4em] text-gold">CRAFTSMANSHIP</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">Cut by hand. <br/>Chosen with care.</h2>
            <div className="h-px w-16 bg-gold my-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Every stone passes through generations of expertise — from rough selection at
              the mine, to faceting in our workshop, to certification by independent
              gemological laboratories.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We work directly with miners and master cutters across Ratnapura and Beruwala,
              ensuring fair value and full traceability for every gem we present.
            </p>
            <Link to="/about" className="inline-block mt-8 text-xs tracking-[0.3em] uppercase border-b border-gold pb-1 hover:text-gold">
              Read Our Story →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-midnight text-ivory py-24 text-center px-6">
        <p className="text-xs tracking-[0.5em] text-gold">BESPOKE ENQUIRIES</p>
        <h2 className="font-serif text-4xl md:text-5xl mt-4">Looking for a particular stone?</h2>
        <div className="gold-divider" />
        <p className="max-w-xl mx-auto text-ivory/70 mb-8">
          Whether you are a collector, jeweller, or sourcing for a private commission —
          our specialists will hand-pick stones to your specifications.
        </p>
        <Link to="/contact" className="inline-block px-10 py-3 bg-gold text-midnight text-xs tracking-[0.3em] uppercase hover:bg-ivory transition-colors">
          Begin Your Enquiry
        </Link>
      </section>
    </Layout>
  );
}
