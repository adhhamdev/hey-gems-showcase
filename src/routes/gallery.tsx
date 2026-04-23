import { Layout, PageHero } from "@/components/Layout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Hey Gems International" },
      { name: "description", content: "A quiet gallery of Ceylon gemstones — captured in motion, light and color from the Island of Gems." },
      { property: "og:title", content: "Gallery — Hey Gems International" },
      { property: "og:description", content: "A quiet gallery of Ceylon gemstones in motion." },
    ],
  }),
  component: GalleryPage,
});

const videos = [
  { src: "/videos/gem-1.mp4" },
  { src: "/videos/gem-2.mp4" },
  { src: "/videos/gem-3.mp4" },
  { src: "/videos/gem-4.mp4" },
  { src: "/videos/gem-5.mp4" },
  { src: "/videos/gem-6.mp4" },
  { src: "/videos/gem-7.mp4" },
  { src: "/videos/gem-8.mp4" },
  { src: "/videos/gem-9.mp4" },
  { src: "/videos/gem-10.mp4" },
  { src: "/videos/gem-11.mp4" },
  { src: "/videos/gem-12.mp4" },
  { src: "/videos/gem-13.mp4" },
  { src: "/videos/gem-14.mp4" }

];

function GalleryPage() {
  return (
    <Layout>
      <PageHero
        title="Gallery"
        subtitle="A quiet study of Ceylon gemstones — in light, in motion, in hand."
      />

      <section className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((v) => (
            <figure
              key={v.src}
              className="group relative overflow-hidden border border-gold/20 bg-midnight rounded-sm shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]"
            >
              <div className="relative aspect-[9/16] overflow-hidden">
                <video
                  src={v.src}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
              </div>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-midnight text-ivory py-20 text-center px-6">
        <p className="text-xs tracking-[0.5em] text-gold">PRIVATE VIEWINGS</p>
        <h2 className="font-serif text-3xl md:text-4xl mt-4">Stones are best seen in person.</h2>
        <div className="gold-divider" />
        <p className="max-w-xl mx-auto text-ivory/70">
          Reach out for a private viewing or a curated selection sent for your consideration.
        </p>
      </section>
    </Layout>
  );
}
