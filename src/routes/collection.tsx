import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import sapphire from "@/assets/sapphire.jpg";
import ruby from "@/assets/ruby.jpg";
import emerald from "@/assets/emerald.jpg";
import collection from "@/assets/collection.jpg";

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title: "Collection — Hey Gems International" },
      { name: "description", content: "Explore our curated collection of Ceylon sapphires, rubies, emeralds and rare coloured gemstones." },
      { property: "og:title", content: "Collection — Hey Gems International" },
      { property: "og:description", content: "Curated Ceylon sapphires, rubies and rare coloured gemstones." },
    ],
  }),
  component: Collection,
});

const stones = [
  { img: sapphire, name: "Royal Blue Ceylon Sapphire", origin: "Ratnapura, Sri Lanka", carat: "3.42 ct", cut: "Cushion" },
  { img: ruby, name: "Pigeon Blood Ruby", origin: "Mogok / Ceylon", carat: "1.85 ct", cut: "Oval Brilliant" },
  { img: emerald, name: "Vivid Green Emerald", origin: "Muzo, Colombia", carat: "2.10 ct", cut: "Emerald Cut" },
  { img: sapphire, name: "Cornflower Blue Sapphire", origin: "Elahera, Sri Lanka", carat: "5.07 ct", cut: "Octagon" },
  { img: ruby, name: "Pinkish-Red Ceylon Ruby", origin: "Ratnapura, Sri Lanka", carat: "1.20 ct", cut: "Round" },
  { img: emerald, name: "Tsavorite Garnet", origin: "Tanzania", carat: "2.85 ct", cut: "Emerald Cut" },
];

function Collection() {
  return (
    <Layout>
      <PageHero title="The Collection" subtitle="A small selection from our current inventory. Each stone is one of a kind." />

      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {stones.map((s, i) => (
            <article key={i} className="group">
              <div className="aspect-square overflow-hidden bg-midnight">
                <img src={s.img} alt={s.name} loading="lazy" width={800} height={800} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="pt-6 text-center">
                <h3 className="font-serif text-2xl">{s.name}</h3>
                <div className="h-px w-10 bg-gold my-3 mx-auto" />
                <dl className="text-sm text-muted-foreground space-y-1">
                  <div><dt className="inline text-gold tracking-widest text-[10px] uppercase mr-2">Origin</dt><dd className="inline">{s.origin}</dd></div>
                  <div><dt className="inline text-gold tracking-widest text-[10px] uppercase mr-2">Weight</dt><dd className="inline">{s.carat}</dd></div>
                  <div><dt className="inline text-gold tracking-widest text-[10px] uppercase mr-2">Cut</dt><dd className="inline">{s.cut}</dd></div>
                </dl>
                <Link to="/contact" className="inline-block mt-5 text-xs tracking-[0.3em] uppercase border-b border-gold pb-1 hover:text-gold">
                  Enquire
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src={collection} alt="Loose Sri Lankan gemstones" loading="lazy" width={1200} height={800} className="w-full h-[400px] object-cover" />
          <div>
            <p className="text-xs tracking-[0.4em] text-gold">PRIVATE PARCELS</p>
            <h2 className="font-serif text-4xl mt-4">Beyond the Catalogue</h2>
            <div className="h-px w-16 bg-gold my-6" />
            <p className="text-muted-foreground leading-relaxed">
              The pieces shown are a glimpse of what passes through our hands each month.
              For matched pairs, calibrated parcels and rare specimens, contact us directly —
              we will curate to your brief.
            </p>
            <Link to="/contact" className="inline-block mt-8 px-8 py-3 bg-midnight text-ivory text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-midnight transition-colors">
              Request a Parcel
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
