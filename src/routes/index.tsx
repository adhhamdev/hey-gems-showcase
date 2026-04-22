import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/Layout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hey Gems International — A Ceylon House" },
      { name: "description", content: "Hey Gems International — a quiet Sri Lankan house rooted in the heritage of Ceylon. Discreet, considered, personal." },
      { property: "og:title", content: "Hey Gems International — A Ceylon House" },
      { property: "og:description", content: "A quiet Sri Lankan house rooted in the heritage of Ceylon." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center text-center text-ivory bg-midnight overflow-hidden">
        <div className="absolute inset-0 opacity-100 bg-[radial-gradient(circle_at_50%_30%,oklch(0.18_0_0),transparent_60%)]" />
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(circle_at_80%_80%,oklch(0.22_0_0),transparent_60%)]" />
        <div className="relative z-10 px-6 max-w-3xl fade-in">
          <p className="text-xs md:text-sm tracking-[0.5em] text-gold mb-6">EST. CEYLON · SRI LANKA</p>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight">
            Hey Gems <span className="italic text-gold">International</span>
          </h1>
          <div className="gold-divider" />
          <p className="text-ivory/80 text-lg max-w-xl mx-auto">
            A quiet Sri Lankan house — rooted in heritage, guided by integrity,
            built on relationships that last generations.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link to="/about" className="px-8 py-3 bg-gold text-midnight text-xs tracking-[0.3em] uppercase hover:bg-ivory transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="px-8 py-3 border border-ivory/40 text-ivory text-xs tracking-[0.3em] uppercase hover:border-gold hover:text-gold transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] text-gold">OUR HOUSE</p>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">A Legacy from the Island</h2>
          <div className="gold-divider" />
          <p className="text-muted-foreground leading-relaxed">
            For generations, Sri Lanka — once known as Ratna-Dweepa, the Island of Gems —
            has been a place where heritage and craft meet. Hey Gems International continues
            that quiet tradition, working with discretion and care for a small, trusted
            circle of clients around the world.
          </p>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="py-20 bg-secondary">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.4em] text-gold">OUR PRINCIPLES</p>
            <h2 className="font-serif text-4xl md:text-5xl mt-4">Quietly, and Well</h2>
            <div className="gold-divider" />
          </div>
          <div className="grid md:grid-cols-3 gap-10 text-center">
            {[
              { name: "Heritage", desc: "A family rooted in the soil and tradition of Ceylon." },
              { name: "Integrity", desc: "Honest dealings, considered counsel, full transparency." },
              { name: "Discretion", desc: "Private by default. Personal by design." },
            ].map((s) => (
              <div key={s.name} className="px-4">
                <h3 className="font-serif text-2xl">{s.name}</h3>
                <div className="h-px w-10 bg-gold my-4 mx-auto" />
                <p className="text-sm text-muted-foreground max-w-xs mx-auto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-midnight text-ivory py-24 text-center px-6">
        <p className="text-xs tracking-[0.5em] text-gold">PRIVATE ENQUIRIES</p>
        <h2 className="font-serif text-4xl md:text-5xl mt-4">A conversation, to begin with.</h2>
        <div className="gold-divider" />
        <p className="max-w-xl mx-auto text-ivory/70 mb-8">
          Every relationship begins with a quiet conversation. Reach out, and we will
          take it from there — at your pace, in confidence.
        </p>
        <Link to="/contact" className="inline-block px-10 py-3 bg-gold text-midnight text-xs tracking-[0.3em] uppercase hover:bg-ivory transition-colors">
          Get in Touch
        </Link>
      </section>
    </Layout>
  );
}
