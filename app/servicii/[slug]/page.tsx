import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ServiceIcon } from '@/components/ServiceIcons';
import { getServiceBySlug, services } from '@/lib/services';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: 'Serviciu' };
  return {
    title: service.title,
    description: service.description,
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dns-surface" />
        <div className="absolute inset-0 bg-gradient-to-b from-dns-bg/50 to-dns-bg" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6">
          <Link
            href="/servicii"
            className="text-dns-gold/90 hover:text-dns-gold text-sm uppercase tracking-wider"
          >
            ← Servicii
          </Link>
          <span className="mt-4 flex">
            <ServiceIcon name={service.iconKey} size="lg" className="text-dns-gold/90" />
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-dns-white mt-2 tracking-tight">
            {service.title}
          </h1>
          <p className="mt-6 text-dns-white/80 text-lg max-w-xl">
            {service.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-6 text-dns-gold/90">
            {service.duration && <span>{service.duration}</span>}
            {service.price && <span>{service.price}</span>}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-24 bg-dns-bg">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6">
          <div className="prose prose-invert prose-lg max-w-none">
            <p className="text-dns-muted leading-relaxed">
              {service.longDescription}
            </p>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10">
            <Link
              href="/contact"
              className="inline-flex px-6 py-4 bg-dns-gold text-dns-bg font-semibold uppercase tracking-wider hover:bg-dns-gold-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-dns-gold rounded"
            >
              Programează-te
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
