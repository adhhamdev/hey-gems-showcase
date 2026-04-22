import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import craftsmanship from "@/assets/craftsmanship.jpg";
import collection from "@/assets/collection.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hey Gems International" },
      { name: "description", content: "Learn about Hey Gems International, a Sri Lankan house dedicated to ethically sourced Ceylon gemstones, transparency and master craftsmanship." },
      { property: "og:title", content: "About — Hey Gems International" },
      { property: "og:description", content: "A Sri Lankan house dedicated to ethically sourced Ceylon gemstones." },
    ],
  }),
  component: About,
});

const values = [
  { title: "Heritage", text: "Rooted in centuries of Sri Lankan gem trading tradition." },
  { title: "Integrity", text: "Every stone fully traceable from mine to market." },
  { title: "Craft", text: "Master-cut by artisans with decades of experience." },
  { title: "Trust", text: "Independent gemological certification on request." },
];

function About() {
  return (
    <Layout>
      <PageHero title="About Us" subtitle="A boutique gem house rooted in the soil and tradition of Ceylon." />

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src={collection} alt="Sri Lankan gemstone collection" loading="lazy" width={1200} height={800} className="w-full h-[500px] object-cover" />
          <div>
            <p className="text-xs tracking-[0.4em] text-gold">OUR STORY</p>
            <h2 className="font-serif text-4xl mt-4">From the Island of Gems</h2>
            <div className="h-px w-16 bg-gold my-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              Hey Gems International was born from a deep love for the gem-bearing soils of
              Sri Lanka. For more than a century, our family has worked alongside the
              miners, cutters and traders of Ratnapura — the storied "City of Gems."
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today we serve a global community of collectors, designers and private
              jewellers, offering curated parcels of Ceylon sapphires, rubies, spinels,
              garnets and a host of rare coloured stones. Our promise is simple: extraordinary
              gems, presented honestly, priced fairly.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] text-gold">WHAT WE STAND FOR</p>
          <h2 className="font-serif text-4xl mt-4">Our Values</h2>
          <div className="gold-divider" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((v) => (
              <div key={v.title} className="bg-background p-8 border border-border">
                <h3 className="font-serif text-2xl text-midnight">{v.title}</h3>
                <div className="h-px w-10 bg-gold my-4 mx-auto" />
                <p className="text-sm text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] text-gold">SOURCING</p>
            <h2 className="font-serif text-4xl mt-4">Ethically Mined. Honestly Cut.</h2>
            <div className="h-px w-16 bg-gold my-6" />
            <p className="text-muted-foreground leading-relaxed mb-4">
              We work only with small-scale, licensed mining cooperatives that meet
              Sri Lankan environmental and labour standards. Most stones travel a few
              kilometres from mine to our cutting floor — a remarkably short, transparent
              supply chain.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              No heat-treatment is performed without your knowledge, and every transaction
              is accompanied by full provenance information.
            </p>
          </div>
          <img src={craftsmanship} alt="Gem craftsmanship" loading="lazy" width={1200} height={800} className="w-full h-[500px] object-cover order-first md:order-last" />
        </div>
      </section>
    </Layout>
  );
}
