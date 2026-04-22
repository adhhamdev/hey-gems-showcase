import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="relative bg-midnight pt-40 pb-20 text-center text-ivory overflow-hidden">
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_50%_0%,var(--gold),transparent_60%)]" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_15%_80%,oklch(0.55_0.18_260),transparent_55%)]" />
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_85%_70%,oklch(0.55_0.20_25),transparent_55%)]" />
      <div className="relative">
        <p className="text-xs tracking-[0.5em] text-gold mb-4">HEY GEMS INTERNATIONAL</p>
        <h1 className="font-serif text-5xl md:text-6xl">{title}</h1>
        <div className="gold-divider" />
        {subtitle && <p className="max-w-xl mx-auto text-ivory/70 px-6">{subtitle}</p>}
      </div>
    </section>
  );
}
