'use client';

import Link from 'next/link';

export function HeroHome() {
  return (
    <section
      className="relative min-h-[65vh] sm:min-h-[100vh] flex items-center overflow-hidden"
      aria-label="Secțiune principală"
    >
      {/* Background: pune hero.jpg sau interior din locație în public/images/hero.jpg */}
      <div className="absolute inset-0 bg-dns-surface">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dns-bg via-dns-bg/85 to-transparent" />
        <div className="absolute inset-0 bg-dns-bg/40" />
      </div>

      {/* Floating decorative – cercuri aurii (inspirat din lustre) */}
      <div className="absolute top-[15%] right-[8%] w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-dns-gold/40 opacity-60" aria-hidden />
      <div className="absolute top-[25%] right-[18%] w-16 h-16 rounded-full border border-dns-gold/30 opacity-50" aria-hidden />
      <div className="absolute bottom-[20%] left-[5%] w-20 h-20 rounded-full border border-dns-gold/25 opacity-40" aria-hidden />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-2xl">
          {/* Element dominant: titluri supradimensionate, asimetrice */}
          <div className="flex flex-col animate-fade-in">
            <span className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tighter text-dns-white leading-[0.95]">
              DNS
            </span>
            <span className="font-script text-5xl sm:text-6xl md:text-7xl text-dns-gold -mt-2 ml-1">
              hair story
            </span>
          </div>

          <p className="mt-6 sm:mt-8 text-dns-white/90 text-lg sm:text-xl max-w-md font-body animate-slide-up animate-delay-200">
            Frizerie premium în București. Tunsoare, barbă, styling – într-un spațiu creat pentru experiență.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-wrap gap-4 animate-slide-up animate-delay-300">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-4 bg-dns-gold text-dns-bg font-semibold uppercase tracking-wider hover:bg-dns-gold-light transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-dns-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dns-bg"
            >
              Programează-te
            </Link>
            <Link
              href="/servicii"
              className="inline-flex items-center gap-2 px-6 py-4 border border-dns-gold/60 text-dns-gold font-semibold uppercase tracking-wider hover:bg-dns-gold/10 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-dns-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dns-bg"
            >
              Servicii
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-60" aria-hidden>
        <div className="w-6 h-10 rounded-full border-2 border-dns-gold/60 flex justify-center pt-2">
          <span className="w-1 h-2 rounded-full bg-dns-gold animate-bounce" />
        </div>
      </div>
    </section>
  );
}
