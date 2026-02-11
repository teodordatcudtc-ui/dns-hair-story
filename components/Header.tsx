'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { site } from '@/lib/site';
import { cn } from '@/lib/utils';

const nav = [
  { href: '/', label: 'Acasă' },
  { href: '/despre-noi', label: 'Despre noi' },
  { href: '/servicii', label: 'Servicii' },
  { href: '/galerie', label: 'Galerie' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      role="banner"
    >
      <div className="absolute inset-0 bg-dns-bg/90 backdrop-blur-md border-b border-white/5" />
      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-20">
        <Link
          href="/"
          className="flex items-baseline gap-1 font-display text-xl sm:text-2xl tracking-tight text-dns-white hover:text-dns-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-dns-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dns-bg"
          aria-label="DNS Hair story – Acasă"
        >
          <span className="text-dns-white">DNS</span>
          <span className="font-script text-dns-gold text-2xl sm:text-3xl -ml-0.5">hair story</span>
        </Link>

        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Navigație principală"
        >
          {nav.map(({ href, label }) => {
            const isActive = pathname === href || (href !== '/' && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  'text-sm uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-dns-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dns-bg',
                  isActive ? 'text-dns-gold' : 'text-dns-white/80 hover:text-dns-gold'
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <a
            href={`tel:${site.phoneRaw}`}
            className="inline-flex items-center gap-2 px-4 py-2 bg-dns-gold text-dns-bg font-semibold text-sm uppercase tracking-wider hover:bg-dns-gold-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-dns-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dns-bg"
          >
            Programare
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-dns-white hover:text-dns-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-dns-gold rounded"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Deschide meniul"
        >
          <span className="sr-only">Meniul</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          'md:hidden absolute top-full left-0 right-0 bg-dns-surface border-b border-white/10 overflow-hidden transition-all duration-300',
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        )}
        aria-hidden={!open}
      >
        <nav className="px-4 py-6 flex flex-col gap-4" aria-label="Navigație mobilă">
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className={cn(
                'text-dns-white/90 hover:text-dns-gold uppercase tracking-wider',
                pathname === href && 'text-dns-gold'
              )}
            >
              {label}
            </Link>
          ))}
          <a
            href={`tel:${site.phoneRaw}`}
            className="mt-2 inline-flex justify-center px-4 py-3 bg-dns-gold text-dns-bg font-semibold uppercase tracking-wider"
            onClick={() => setOpen(false)}
          >
            Programare – {site.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
