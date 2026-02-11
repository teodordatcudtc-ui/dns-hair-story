import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 bg-dns-bg">
      <h1 className="font-display text-6xl sm:text-8xl text-dns-white">404</h1>
      <p className="mt-4 text-dns-muted text-lg">Pagina nu a fost găsită.</p>
      <Link
        href="/"
        className="mt-8 px-6 py-4 bg-dns-gold text-dns-bg font-semibold uppercase tracking-wider hover:bg-dns-gold-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-dns-gold rounded"
      >
        Înapoi la prima pagină
      </Link>
    </div>
  );
}
