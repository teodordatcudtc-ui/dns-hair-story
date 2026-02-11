import type { Metadata } from 'next';
import { Bebas_Neue, Great_Vibes, DM_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const greatVibes = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-script',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'DNS Hair story | Frizerie București – Calea Crângași',
    template: '%s | DNS Hair story',
  },
  description:
    'DNS Hair story – frizerie premium în București. Tunsoare, barbă, styling. Experiență de calitate la Calea Crângași 20.',
  keywords: ['frizerie', 'București', 'tunsoare', 'barbă', 'barber', 'DNS Hair story', 'Calea Crângași'],
  authors: [{ name: 'DNS Hair story' }],
  openGraph: {
    type: 'website',
    locale: 'ro_RO',
    siteName: 'DNS Hair story',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ro"
      className={`${bebas.variable} ${greatVibes.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen flex flex-col font-body">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
