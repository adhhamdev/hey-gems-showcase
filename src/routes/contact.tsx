import { createFileRoute } from "@tanstack/react-router";
import { Layout, PageHero } from "@/components/Layout";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

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
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-xs tracking-[0.4em] text-gold">DIRECT CONTACT</p>
            <h2 className="font-serif text-4xl mt-4">Reach our atelier</h2>
            <div className="h-px w-16 bg-gold my-6" />

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

          <form className="bg-secondary p-10 border border-border" onSubmit={(e) => e.preventDefault()}>
            <p className="text-xs tracking-[0.4em] text-gold">SEND A MESSAGE</p>
            <h3 className="font-serif text-3xl mt-3 mb-8">Send us a note</h3>

            <div className="space-y-5">
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Name</label>
                <input className="mt-2 w-full bg-background border border-border px-4 py-3 focus:border-gold outline-none" />
              </div>
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Email</label>
                <input type="email" className="mt-2 w-full bg-background border border-border px-4 py-3 focus:border-gold outline-none" />
              </div>
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Message</label>
                <textarea rows={5} className="mt-2 w-full bg-background border border-border px-4 py-3 focus:border-gold outline-none resize-none" />
              </div>
              <button className="w-full px-8 py-3 bg-midnight text-ivory text-xs tracking-[0.3em] uppercase hover:bg-gold hover:text-midnight transition-colors">
                Send Enquiry
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
