import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Termeni și condiții',
  description: 'Termenii și condițiile de utilizare ale site-ului DNS Hair story.',
};

export default function TermeniPage() {
  return (
    <article className="pt-24 sm:pt-28 pb-20 sm:pb-28 bg-dns-bg">
      <div className="max-w-[720px] mx-auto px-4 sm:px-6">
        <Link href="/" className="text-dns-gold/90 hover:text-dns-gold text-sm uppercase tracking-wider">
          ← Acasă
        </Link>
        <h1 className="font-display text-4xl sm:text-5xl text-dns-white mt-6">
          Termeni și condiții
        </h1>
        <p className="mt-4 text-dns-muted">Ultima actualizare: februarie 2025</p>

        <div className="mt-10 prose prose-invert prose-sm max-w-none text-dns-white/80 space-y-6">
          <section>
            <h2 className="font-display text-xl text-dns-white mt-8">1. Acceptarea termenilor</h2>
            <p>
              Accesarea și utilizarea site-ului DNS Hair story implică acceptarea prezentei pagini de termeni. 
              Dacă nu ești de acord, te rugăm să nu folosești site-ul.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-dns-white mt-8">2. Utilizare corectă</h2>
            <p>
              Site-ul este destinat informării despre serviciile noastre și pentru programări/contact. 
              Nu este permis să folosești conținutul în mod care încalcă drepturile noastre sau ale terților 
              sau să afectezi funcționarea site-ului.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-dns-white mt-8">3. Proprietate intelectuală</h2>
            <p>
              Conținutul site-ului (texte, imagini, logo) este protejat și aparține DNS Hair story sau 
              licențiatorilor noștri. Nu este permisă copierea sau redistribuirea fără acord.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-dns-white mt-8">4. Limita răspunderii</h2>
            <p>
              Oferim informațiile „ca atare”. Nu ne asumăm răspundere pentru daune indirecte rezultate 
              din utilizarea site-ului sau a informațiilor de pe acesta. Pentru serviciile efectiv prestate 
              în salon se aplică practicile noastre interne și legislația în vigoare.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-dns-white mt-8">5. Modificări</h2>
            <p>
              Ne rezervăm dreptul de a modifica acești termeni. Utilizarea continuată a site-ului după 
              publicarea modificărilor constituie acceptarea noilor termeni.
            </p>
          </section>
        </div>

        <p className="mt-12 text-dns-muted text-sm">
          <Link href="/contact" className="text-dns-gold hover:underline">Contact</Link> ·{' '}
          <Link href="/legal/confidentialitate" className="text-dns-gold hover:underline">Confidentialitate</Link>
        </p>
      </div>
    </article>
  );
}
