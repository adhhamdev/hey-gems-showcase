import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Hey Gems International" },
      { name: "description", content: "Hey Gems International is a quiet Sri Lankan house rooted in the heritage of Ceylon, built on integrity, discretion and lasting relationships." },
      { property: "og:title", content: "About — Hey Gems International" },
      { property: "og:description", content: "A quiet Sri Lankan house rooted in the heritage of Ceylon." },
    ],
  }),
  component: About,
});

const values = [
  { title: "Heritage", text: "Rooted in the long tradition of Ceylon — an island known for centuries as the home of fine things." },
  { title: "Integrity", text: "We say what we mean and stand behind every dealing. Trust is the only currency that matters." },
  { title: "Discretion", text: "Our work is private by nature. We protect the confidence of every client without exception." },
  { title: "Craft", text: "An attention to detail learned from generations of artisans. Quiet, patient, and exact." },
];

function About() {
  return (
    <Layout>
      <PageHero title="About Us" subtitle="A small Sri Lankan house, working quietly from the Island of Gems." />

      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] text-gold">OUR STORY</p>
          <h2 className="font-serif text-4xl mt-4">From the Island of Ceylon</h2>
          <div className="gold-divider" />
          <p className="text-muted-foreground leading-relaxed mb-6">
            Hey Gems International was founded in Sri Lanka — an island long known
            as Ratna-Dweepa, the Island of Gems. Our work is rooted in that history:
            a quiet, generational tradition of fine craftsmanship, fair dealing and
            relationships that pass from one decade to the next.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We are a small house by design. We keep our circle close, our standards
            high, and our manner unhurried. Most of those who work with us were
            introduced by someone who came before them — and we like it that way.
          </p>
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
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] text-gold">OUR APPROACH</p>
          <h2 className="font-serif text-4xl mt-4">Slow, Considered, Personal</h2>
          <div className="gold-divider" />
          <p className="text-muted-foreground leading-relaxed mb-6">
            We do not chase volume or fashion. We prefer to take our time, to
            listen carefully, and to act only when we are certain. Each
            relationship is built one conversation at a time.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            If our way of working resonates with you, we would be delighted
            to hear from you.
          </p>
        </div>
      </section>
    </Layout>
  );
}
