import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import gemsCluster from "@/assets/gems-cluster.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Hey Gems International" },
      { name: "description", content: "Get in touch with Hey Gems International for sourcing, enquiries and bespoke gemstone requests." },
      { property: "og:title", content: "Contact — Hey Gems International" },
      { property: "og:description", content: "Get in touch with Hey Gems International." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <Layout>
      <PageHero title="Get in Touch" subtitle="We respond to every enquiry personally — usually within one business day." />

      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.4em] text-gold">DIRECT CONTACT</p>
            <h2 className="font-serif text-4xl mt-4">Reach our atelier</h2>
            <div className="h-px w-16 bg-gold my-6" />
            <p className="text-muted-foreground mb-8 leading-relaxed">
              For private enquiries, sourcing requests or simply a conversation —
              we are reachable through any of the channels below.
            </p>

            <ul className="space-y-6 text-foreground">
              <li className="flex items-start gap-4">
                <MapPin className="text-gold mt-1" size={20} />
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Atelier</p>
                  <p className="mt-1">Colombo, Sri Lanka</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Phone className="text-gold mt-1" size={20} />
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Telephone</p>
                  <a href="tel:+94777695759" className="mt-1 block hover:text-gold">+94 77 769 5759</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="text-gold mt-1" size={20} />
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Email</p>
                  <a href="mailto:hello@heygems.lk" className="mt-1 block hover:text-gold">hello@heygems.lk</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Instagram className="text-gold mt-1" size={20} />
                <div>
                  <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">Instagram</p>
                  <a href="https://instagram.com/HEY_GEMS_INTERNATIONAL" target="_blank" rel="noreferrer" className="mt-1 block hover:text-gold">
                    @HEY_GEMS_INTERNATIONAL
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden border border-gold/20">
            <img
              src={gemsCluster}
              alt="A scattered arrangement of Ceylon gemstones — sapphires, rubies and emeralds — on dark velvet"
              loading="lazy"
              width={1600}
              height={1024}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-midnight/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-ivory">
              <p className="text-xs tracking-[0.4em] text-gold">CEYLON · SRI LANKA</p>
              <p className="font-serif text-2xl mt-2">The Island of Gems</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
