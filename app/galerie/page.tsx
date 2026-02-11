import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Galerie',
  description: 'Imagini din DNS Hair story – interior, atmosferă și servicii. Frizerie București, Calea Crângași 20.',
};

const galleryImages = [
  { src: '/images/galerie/1.jpg', alt: 'Interior DNS Hair story' },
  { src: '/images/galerie/2.jpg', alt: 'Stații de lucru' },
  { src: '/images/galerie/3.jpg', alt: 'Atmosferă salon' },
  { src: '/images/galerie/4.jpg', alt: 'Detalii interior' },
  { src: '/images/galerie/5.jpg', alt: 'Servicii' },
  { src: '/images/galerie/6.jpg', alt: 'DNS Hair story' },
];

export default function GaleriePage() {
  return (
    <>
      <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dns-surface" />
        <div className="absolute inset-0 bg-gradient-to-b from-dns-bg/50 to-dns-bg" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6">
          <span className="font-script text-dns-gold text-3xl sm:text-4xl">Atmosferă</span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-dns-white mt-2 tracking-tight">
            Galerie
          </h1>
          <p className="mt-6 text-dns-white/80 text-lg max-w-xl">
            O privire în interiorul DNS Hair story – spațiul și momentele care ne definesc.
          </p>
        </div>
      </section>

      <section className="relative py-20 sm:py-28 bg-dns-bg" aria-label="Galerie foto">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {galleryImages.map((img, i) => (
              <div
                key={img.src}
                className="relative overflow-hidden rounded-md bg-dns-surface border border-white/5 aspect-[4/3] sm:aspect-[3/4]"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
