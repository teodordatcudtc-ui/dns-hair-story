import type { Metadata } from 'next';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Despre noi',
  description:
    'Povestea DNS Hair story – misiune, viziune și echipa. Frizerie premium la Calea Crângași 20, București.',
};

export default function DespreNoiPage() {
  return (
    <>
      {/* Hero pagină – identitate vizuală proprie: întunecat, titlu mare */}
      <section className="relative pt-24 sm:pt-28 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-dns-surface" />
        <div className="absolute inset-0 bg-gradient-to-b from-dns-bg/50 to-dns-bg" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6">
          <span className="font-script text-dns-gold text-3xl sm:text-4xl">Povestea noastră</span>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl text-dns-white mt-2 tracking-tight">
            Despre noi
          </h1>
          <p className="mt-6 text-dns-white/80 text-lg max-w-xl">
            DNS Hair story este mai mult decât o frizerie – este spațiul unde stilul și experiența se întâlnesc.
          </p>
        </div>
      </section>

      {/* Misiune & viziune – layout asimetric cu overlap */}
      <section className="relative py-20 sm:py-28 bg-dns-bg">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-1 bg-dns-gold" aria-hidden />
              <h2 className="font-display text-3xl sm:text-4xl text-dns-white">Misiune</h2>
              <p className="mt-4 text-dns-muted leading-relaxed">
                Să oferim fiecărui client o experiență de frizerie de calitate, într-un ambient premium și profesional. 
                Fiecare tunsoare și fiecare detaliu contează – de la consult la finisare.
              </p>
            </div>
            <div className="relative md:mt-16">
              <div className="absolute -top-4 -left-4 w-24 h-1 bg-dns-gold" aria-hidden />
              <h2 className="font-display text-3xl sm:text-4xl text-dns-white">Viziune</h2>
              <p className="mt-4 text-dns-muted leading-relaxed">
                Să rămânem o referință în zona noastră pentru cei care apreciază un serviciu serios, 
                un spațiu plăcut și un rezultat constant. Să creștem împreună cu comunitatea noastră de clienți.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Storytelling vizual – bloc cu imagine mare */}
      <section className="relative py-20 sm:py-28 bg-dns-surface clip-torn-top">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-3 order-2 lg:order-1">
              <div className="aspect-[4/3] bg-dns-charcoal rounded-sm overflow-hidden relative">
                <img
                  src="/images/despre-interior.jpg"
                  alt="Interior DNS Hair story"
                  className="w-full h-full object-cover"
                />
                <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-dns-gold/40 rounded-sm -z-10" aria-hidden />
              </div>
            </div>
            <div className="lg:col-span-2 order-1 lg:order-2">
              <span className="font-script text-dns-gold text-2xl">Locul nostru</span>
              <h2 className="font-display text-4xl sm:text-5xl text-dns-white mt-2">
                Un spațiu gândit pentru tine
              </h2>
              <p className="mt-6 text-dns-muted leading-relaxed">
                La {site.address} am creat un interior în care te simți bine: scaune confortabile, 
                lumină potrivită și toate instrumentele și produsele necesare pentru un rezultat la care ținem.
              </p>
              <p className="mt-4 text-dns-muted leading-relaxed">
                Venim cu multă pasiune pentru meserie și respect pentru timpul tău – de aceea fiecare programare 
                este tratată cu seriozitate și atenție la detalii.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Echipa – placeholder pentru viitoare bio-uri; identitate vizuală diferită */}
      <section className="relative py-20 sm:py-28 bg-dns-bg clip-torn-bottom">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-script text-dns-gold text-2xl">Echipa</span>
            <h2 className="font-display text-4xl sm:text-5xl text-dns-white mt-2">
              Oamenii din spatele DNS Hair story
            </h2>
            <p className="mt-6 text-dns-muted leading-relaxed">
              Lucrăm zilnic pentru a oferi un serviciu de încredere și un ambient plăcut. 
              Ne poți cunoaște în salon sau pe Instagram –{' '}
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dns-gold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-dns-gold rounded"
              >
                @dns.hairstory
              </a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
