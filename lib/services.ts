export type ServiceIconKey = 'scissors' | 'razor' | 'clipper' | 'brush';

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  price?: string;
  duration?: string;
  iconKey: ServiceIconKey;
}

export const services: Service[] = [
  {
    slug: 'tunsoare-barba',
    shortTitle: 'Tunsoare & Barbă',
    title: 'Tunsoare & Îngrijire Barbă',
    description: 'Tunsoare precisă și conturare barbă pentru un look impecabil.',
    longDescription:
      'Combinăm tunsoarea clasică cu tehnici moderne. Fiecare client primește atenție la detalii și un rezultat care se potrivește stilului personal. Serviciul include consultație, tunsoare și finisare.',
    price: 'La cerere',
    duration: '~45 min',
    iconKey: 'scissors',
  },
  {
    slug: 'barba',
    shortTitle: 'Barbă',
    title: 'Îngrijire Completă Barbă',
    description: 'Conturare, tăiere și condiționare pentru o barbă arătoasă.',
    longDescription:
      'Tratament dedicat barbii: conturare precisă, tăiere cu foarfece și brici, produse de îngrijire. Rezultatul este o barbă curată, bine definită și confortabilă.',
    price: 'La cerere',
    duration: '~30 min',
    iconKey: 'razor',
  },
  {
    slug: 'tunsoare-clasica',
    shortTitle: 'Tunsoare Clasică',
    title: 'Tunsoare Clasică',
    description: 'Tunsoare tradițională de calitate, în spiritul frizeriei de barber.',
    longDescription:
      'Tunsoare clasică executată cu atenție la proporții și la preferințele clientului. Includem spălare și finisare cu produse profesionale.',
    price: 'La cerere',
    duration: '~35 min',
    iconKey: 'clipper',
  },
  {
    slug: 'styling',
    shortTitle: 'Styling',
    title: 'Styling & Finisare',
    description: 'Coafură și styling pentru evenimente sau look zilnic.',
    longDescription:
      'Serviciu de styling adaptat ocaziei: de la look casual la evenimente speciale. Folosim produse de calitate pentru un rezultat persistent.',
    price: 'La cerere',
    duration: '~20 min',
    iconKey: 'brush',
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
