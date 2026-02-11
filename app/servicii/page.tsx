import type { Metadata } from 'next';
import Link from 'next/link';
import { ServiceIcon } from '@/components/ServiceIcons';
import { services } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Servicii',
  description:
    'Servicii DNS Hair story: tunsoare, barbă, styling. Prețuri și durate la cerere. Programare la Calea Crângași 20, București.',
};

export default function ServiciiPage() {
  return (
    <>
      <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dns-surface" />
        <div className="absolute inset-0 bg-gradient-to-b from-dns-bg/50 to-dns-bg" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6">
          <span className="font-script text-dns-gold text-3xl sm:text-4xl">Ce oferim</span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-dns-white mt-2 tracking-tight">
            Servicii
          </h1>
          <p className="mt-6 text-dns-white/80 text-lg max-w-xl">
            Fiecare serviciu este adaptat nevoilor tale. Pentru prețuri exacte și programări, sună-ne sau vizitează-ne.
          </p>
        </div>
      </section>

      {/* Listă servicii – layout non-grid: carduri cu offset și identități vizuale diferite */}
      <section className="relative py-20 sm:py-28 bg-dns-bg">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="space-y-6 sm:space-y-8">
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/servicii/${service.slug}`}
                className={`
                  group block relative overflow-hidden rounded-sm border border-white/5 hover:border-dns-gold/30 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-dns-gold
                  ${i % 2 === 0 ? 'md:ml-0' : 'md:ml-8 lg:ml-16'}
                `}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 p-6 sm:p-8 bg-dns-surface">
                  <ServiceIcon name={service.iconKey} size="lg" className="text-dns-gold/80 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h2 className="font-display text-2xl sm:text-3xl text-dns-white group-hover:text-dns-gold transition-colors">
                      {service.title}
                    </h2>
                    <p className="mt-2 text-dns-muted">{service.description}</p>
                    <div className="mt-3 flex flex-wrap gap-4 text-sm text-dns-gold/90">
                      {service.duration && <span>{service.duration}</span>}
                      {service.price && <span>{service.price}</span>}
                    </div>
                  </div>
                  <span className="text-dns-gold font-medium shrink-0 sm:pr-4">
                    Detalii →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA scurt */}
      <section className="relative py-16 bg-dns-charcoal">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 text-center">
          <p className="text-dns-white/90 text-lg">
            Pentru programări: <a href="tel:0786065653" className="text-dns-gold hover:underline font-semibold">0786 065 653</a>
          </p>
        </div>
      </section>
    </>
  );
}
