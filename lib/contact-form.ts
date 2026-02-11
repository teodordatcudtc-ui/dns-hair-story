export type ContactFormState = {
  success?: boolean;
  error?: string;
  fields?: Record<string, string>;
};

export function validateContactForm(formData: FormData): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  const nume = (formData.get('nume') as string)?.trim();
  const email = (formData.get('email') as string)?.trim();
  const mesaj = (formData.get('mesaj') as string)?.trim();

  if (!nume || nume.length < 2) errors.push('Numele trebuie să aibă cel puțin 2 caractere.');
  if (!email) errors.push('Adresa de email este obligatorie.');
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push('Introdu o adresă de email validă.');
  if (!mesaj || mesaj.length < 10) errors.push('Mesajul trebuie să aibă cel puțin 10 caractere.');

  return { valid: errors.length === 0, errors };
}
