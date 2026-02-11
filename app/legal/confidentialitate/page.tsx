import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Politica de confidențialitate',
  description: 'Politica de confidențialitate și protecția datelor DNS Hair story.',
};

export default function ConfidentialitatePage() {
  return (
    <article className="pt-24 sm:pt-28 pb-20 sm:pb-28 bg-dns-bg">
      <div className="max-w-[720px] mx-auto px-4 sm:px-6">
        <Link href="/" className="text-dns-gold/90 hover:text-dns-gold text-sm uppercase tracking-wider">
          ← Acasă
        </Link>
        <h1 className="font-display text-4xl sm:text-5xl text-dns-white mt-6">
          Politica de confidențialitate
        </h1>
        <p className="mt-4 text-dns-muted">Ultima actualizare: februarie 2025</p>

        <div className="mt-10 prose prose-invert prose-sm max-w-none text-dns-white/80 space-y-6">
          <section>
            <h2 className="font-display text-xl text-dns-white mt-8">1. Operatorul de date</h2>
            <p>
              DNS Hair story („nosotros”) procesează datele personale în calitate de operator. 
              Ne poți contacta la adresa din secțiunea Contact a site-ului sau la numărul de telefon afișat.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-dns-white mt-8">2. Date colectate</h2>
            <p>
              Colectăm doar datele pe care ni le furnizezi (nume, email, telefon, mesaj) în contextul 
              formularului de contact sau al programărilor. Datele de trafic (ex. adresa IP) pot fi 
              înregistrate de serviciul de hosting pentru securitate și funcționarea site-ului.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-dns-white mt-8">3. Scopul prelucrării</h2>
            <p>
              Folosim datele pentru a răspunde la solicitări, pentru programări și pentru comunicări 
              legate de serviciile noastre. Nu folosim datele pentru marketing fără consimțământul tău explicit.
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-dns-white mt-8">4. Drepturile tale</h2>
            <p>
              În conformitate cu GDPR, ai dreptul la acces, rectificare, ștergere, restricționare și 
              portabilitate a datelor, precum și dreptul de a te opune prelucrării. Poți depune o plângere 
              la autoritatea de supraveghere (ANSPDCP în România).
            </p>
          </section>
          <section>
            <h2 className="font-display text-xl text-dns-white mt-8">5. Modificări</h2>
            <p>
              Ne rezervăm dreptul de a actualiza această politică. Modificările esențiale vor fi 
              reflectate pe această pagină cu o dată de actualizare revizuită.
            </p>
          </section>
        </div>

        <p className="mt-12 text-dns-muted text-sm">
          <Link href="/contact" className="text-dns-gold hover:underline">Contact</Link> ·{' '}
          <Link href="/legal/termeni" className="text-dns-gold hover:underline">Termeni și condiții</Link>
        </p>
      </div>
    </article>
  );
}
