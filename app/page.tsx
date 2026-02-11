import Link from 'next/link';
import { HeroHome } from '@/components/HeroHome';
import { ServiceIcon } from '@/components/ServiceIcons';
import { site } from '@/lib/site';
import { services } from '@/lib/services';

export default function HomePage() {
  return (
    <>
      <HeroHome />

      {/* Secțiune scurtă – identitate vizuală diferită: fundal deschis, unghi rupt */}
      <section className="relative bg-dns-white text-dns-bg py-20 sm:py-28 clip-torn-top">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="md:order-2">
              <p className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight">
                Mai mult decât o tunsoare.
              </p>
              <p className="mt-4 text-dns-charcoal/80 text-lg max-w-lg">
                La DNS Hair story fiecare vizită este tratată cu atenție la detalii. 
                Spațiul nostru a fost gândit pentru confort și pentru un rezultat constant, profesional.
              </p>
              <Link
                href="/despre-noi"
                className="inline-block mt-6 text-dns-gold-dark font-semibold uppercase tracking-wider hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-dns-gold rounded"
              >
                Povestea noastră →
              </Link>
            </div>
            <div className="md:order-1 relative">
              <div className="aspect-[4/3] bg-dns-charcoal/10 rounded-sm overflow-hidden">
                {/* Poți pune aici o imagine din locație – ex. /images/about-preview.jpg */}
                <img
                  src="/images/about-preview.jpg"
                  alt="Interior DNS Hair story"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border-2 border-dns-gold/50 rounded-sm -z-10" aria-hidden />
            </div>
          </div>
        </div>
      </section>

      {/* Servicii – layout asimetric, nu grid egal */}
      <section className="relative bg-dns-bg py-20 sm:py-28 clip-torn-bottom">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-14">
            <div>
              <span className="font-script text-dns-gold text-3xl">Serviciile noastre</span>
              <h2 className="font-display text-4xl sm:text-5xl text-dns-white mt-1">
                Ce oferim
              </h2>
            </div>
            <Link
              href="/servicii"
              className="text-dns-gold font-semibold uppercase tracking-wider hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-dns-gold rounded shrink-0"
            >
              Toate serviciile →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.slice(0, 4).map((s, i) => (
              <Link
                key={s.slug}
                href={`/servicii/${s.slug}`}
                className="group block p-6 sm:p-8 bg-dns-surface border border-white/5 hover:border-dns-gold/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-dns-gold rounded"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <ServiceIcon name={s.iconKey} size="lg" className="text-dns-gold/90" />
                <h3 className="mt-4 font-display text-xl text-dns-white group-hover:text-dns-gold transition-colors">
                  {s.shortTitle}
                </h3>
                <p className="mt-2 text-dns-muted text-sm">{s.description}</p>
                <span className="mt-4 inline-block text-dns-gold text-sm font-medium">
                  Detalii →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie preview – secțiune nouă */}
      <section className="relative py-20 sm:py-28 bg-dns-surface clip-torn-top" aria-label="Galerie">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12">
            <div>
              <span className="font-script text-dns-gold text-3xl">Atmosferă</span>
              <h2 className="font-display text-4xl sm:text-5xl text-dns-white mt-1">
                Galerie
              </h2>
            </div>
            <Link
              href="/galerie"
              className="text-dns-gold font-semibold uppercase tracking-wider hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-dns-gold rounded shrink-0"
            >
              Toate fotografiile →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            {[1, 2, 3, 4].map((n) => (
              <Link
                key={n}
                href="/galerie"
                className="group block aspect-[3/4] rounded-sm overflow-hidden bg-dns-charcoal border border-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-dns-gold"
              >
                <img
                  src={`/images/galerie/${n}.jpg`}
                  alt={`Galerie DNS Hair story ${n}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Secțiune scurtă – Vizitează-ne / Locație */}
      <section className="relative py-20 sm:py-24 bg-dns-bg clip-torn-bottom">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div>
              <span className="font-script text-dns-gold text-2xl">Locație</span>
              <h2 className="font-display text-3xl sm:text-4xl text-dns-white mt-2">
                Vizitează-ne
              </h2>
              <p className="mt-4 text-dns-muted">
                {site.address}
              </p>
              <p className="mt-2">
                <a href={`tel:${site.phoneRaw}`} className="text-dns-gold hover:underline font-medium">
                  {site.phone}
                </a>
              </p>
              <Link
                href="/contact"
                className="inline-block mt-6 text-dns-gold font-semibold uppercase tracking-wider hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-dns-gold rounded"
              >
                Contact & hartă →
              </Link>
            </div>
            <div className="aspect-[4/3] rounded-sm overflow-hidden bg-dns-charcoal border border-white/10">
              <img
                src="/images/despre-interior.jpg"
                alt="Locație DNS Hair story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA bloc – fundal auriu uniform, fără clip (nu acoperă textul) */}
      <section className="relative bg-dns-gold/95 text-dns-bg py-16 sm:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl tracking-tight">
              Programează-te la DNS Hair story
            </h2>
            <p className="mt-2 text-dns-bg/80">
              {site.address} · {site.phone}
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href={`tel:${site.phoneRaw}`}
              className="inline-flex px-6 py-4 border-2 border-dns-bg text-dns-bg font-semibold uppercase tracking-wider hover:bg-dns-bg/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-dns-bg focus-visible:ring-offset-2 focus-visible:ring-offset-dns-gold rounded"
            >
              Sună acum
            </a>
            <Link
              href="/contact"
              className="inline-flex px-6 py-4 border-2 border-dns-bg text-dns-bg font-semibold uppercase tracking-wider hover:bg-dns-bg/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-dns-bg focus-visible:ring-offset-2 focus-visible:ring-offset-dns-gold rounded"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
