import Link from 'next/link';
import { site } from '@/lib/site';

const links = [
  { href: '/despre-noi', label: 'Despre noi' },
  { href: '/servicii', label: 'Servicii' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/contact', label: 'Contact' },
  { href: '/legal/confidentialitate', label: 'Confidentialitate' },
  { href: '/legal/termeni', label: 'Termeni și condiții' },
];

export function Footer() {
  return (
    <footer className="bg-dns-surface border-t border-white/10" role="contentinfo">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div>
            <Link href="/" className="inline-block font-display text-2xl text-dns-white hover:text-dns-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-dns-gold rounded">
              <span className="text-dns-white">DNS</span>
              <span className="font-script text-dns-gold text-3xl"> hair story</span>
            </Link>
            <p className="mt-3 text-dns-muted text-sm max-w-xs">
              Frizerie premium în București. Experiență de calitate, atenție la detalii.
            </p>
          </div>

          <div>
            <h3 className="text-dns-gold text-xs uppercase tracking-widest mb-4">Linkuri</h3>
            <ul className="space-y-2">
              {links.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-dns-white/80 hover:text-dns-gold text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-dns-gold rounded"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-dns-gold text-xs uppercase tracking-widest mb-4">Contact</h3>
            <address className="not-italic text-dns-white/80 text-sm space-y-2">
              <p>{site.address}</p>
              <p>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="hover:text-dns-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-dns-gold rounded"
                >
                  {site.phone}
                </a>
              </p>
              <p>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-dns-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-dns-gold rounded"
                >
                  Instagram
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-dns-muted text-xs">
            © {new Date().getFullYear()} DNS Hair story. Toate drepturile rezervate.
          </p>
          <div className="flex gap-6 text-xs">
            <Link href="/legal/confidentialitate" className="text-dns-muted hover:text-dns-gold transition-colors">
              Confidentialitate
            </Link>
            <Link href="/legal/termeni" className="text-dns-muted hover:text-dns-gold transition-colors">
              Termeni
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
