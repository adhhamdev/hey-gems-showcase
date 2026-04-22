import { Link } from "@tanstack/react-router";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-midnight text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-serif text-2xl tracking-widest">HEY GEMS</h3>
          <p className="text-xs tracking-[0.4em] text-gold mt-1">INTERNATIONAL</p>
          <p className="mt-6 text-sm text-ivory/70 max-w-md leading-relaxed">
            A Sri Lankan house rooted in the heritage of Ceylon — quietly serving
            collectors, jewellers and connoisseurs around the world.
          </p>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-5">Explore</h4>
          <ul className="space-y-3 text-sm text-ivory/80">
            <li><Link to="/about" className="hover:text-gold">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-gold">Contact</Link></li>
            <li><Link to="/terms" className="hover:text-gold">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.3em] uppercase text-gold mb-5">Contact</h4>
          <ul className="space-y-3 text-sm text-ivory/80">
            <li className="flex items-start gap-2"><MapPin size={14} className="mt-1 text-gold" /> <span>63 New Kankanangoda,<br />Chinafort, Beruwala,<br />Sri Lanka</span></li>
            <li className="flex items-center gap-2">
              <Phone size={14} className="text-gold" />
              <a href="tel:+94767107505" className="hover:text-gold">+94 76 710 7505</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={14} className="text-gold" />
              <a href="mailto:Mishkathmax@gmail.com" className="hover:text-gold">Mishkathmax@gmail.com</a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/hey_gems_international"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-gold"
              >
                <Instagram size={14} className="text-gold" /> @hey_gems_international
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-ivory/50">
          <p>© {new Date().getFullYear()} Hey Gems International. All rights reserved.</p>
          <p className="tracking-widest">CRAFTED IN CEYLON</p>
        </div>
      </div>
    </footer>
  );
}
