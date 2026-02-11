import type { Metadata } from 'next';
import { ContactForm } from '@/components/ContactForm';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contactează DNS Hair story: Calea Crângași 20, București. Telefon 0786 065 653. Programare și informații.',
};

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dns-surface" />
        <div className="absolute inset-0 bg-gradient-to-b from-dns-bg/50 to-dns-bg" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6">
          <span className="font-script text-dns-gold text-3xl sm:text-4xl">Hai să vorbim</span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-dns-white mt-2 tracking-tight">
            Contact
          </h1>
          <p className="mt-6 text-dns-white/80 text-lg max-w-xl">
            Programează-te telefonic sau trimite un mesaj. Te așteptăm la Calea Crângași 20.
          </p>
        </div>
      </section>

      {/* Date contact + Formular – layout asimetric */}
      <section className="relative py-20 sm:py-28 bg-dns-bg">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <div className="sticky top-28">
                <h2 className="font-display text-2xl sm:text-3xl text-dns-white">Date contact</h2>
                <div className="mt-6 space-y-6 text-dns-white/80">
                  <div>
                    <p className="text-dns-gold text-sm uppercase tracking-wider">Adresă</p>
                    <p className="mt-1">{site.address}</p>
                  </div>
                  <div>
                    <p className="text-dns-gold text-sm uppercase tracking-wider">Telefon</p>
                    <p className="mt-1">
                      <a href={`tel:${site.phoneRaw}`} className="hover:text-dns-gold transition-colors">
                        {site.phone}
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="text-dns-gold text-sm uppercase tracking-wider">Instagram</p>
                    <p className="mt-1">
                      <a
                        href={site.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-dns-gold transition-colors"
                      >
                        @dns.hairstory
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Hartă – Google Maps embed exact ca în cerințe */}
      <section className="relative bg-dns-surface py-16 clip-torn-top" aria-label="Locație pe hartă">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <h2 className="font-display text-2xl text-dns-white mb-6">Locație</h2>
          <div className="rounded-sm overflow-hidden border border-white/10 aspect-[4/3] max-h-[450px]">
            <iframe
              src={site.mapsEmbed}
              width="600"
              height="450"
              style={{ border: 0, width: '100%', height: '100%', minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="DNS Hair story pe Google Maps"
            />
          </div>
        </div>
      </section>
    </>
  );
}
