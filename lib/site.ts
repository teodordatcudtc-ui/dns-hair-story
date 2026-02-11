/** Înlocuiește cu domeniul real după deploy (ex. https://dnshairstory.ro) */
export const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dnshairstory.ro';

export const site = {
  name: 'DNS Hair story',
  shortName: 'DNS',
  tagline: 'Frizerie',
  phone: '0786065653',
  phoneRaw: '0786065653',
  address: 'Calea Crângași 20, București',
  instagram: 'https://www.instagram.com/dns.hairstory/',
  mapsEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8291.56112326635!2d26.04561023317914!3d44.45254211034325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b201003fc01417%3A0x909400fba144c1a1!2sDNS%20Hair%20story!5e0!3m2!1sen!2sro!4v1770811018519!5m2!1sen!2sro',
} as const;
