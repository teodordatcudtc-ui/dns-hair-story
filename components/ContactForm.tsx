'use client';

import { useState } from 'react';
import { validateContactForm } from '@/lib/contact-form';

export function ContactForm() {
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const { valid, errors } = validateContactForm(formData);
    if (!valid) {
      setError(errors.join(' '));
      return;
    }
    // Aici poți integra un API (ex. trimitere email sau webhook)
    setSuccess(true);
    form.reset();
  }

  return (
    <div>
      <h2 className="font-display text-2xl sm:text-3xl text-dns-white">Trimite un mesaj</h2>
      <form onSubmit={handleSubmit} className="mt-6 space-y-6">
        <div>
          <label htmlFor="nume" className="block text-sm text-dns-gold uppercase tracking-wider mb-2">
            Nume
          </label>
          <input
            id="nume"
            name="nume"
            type="text"
            required
            minLength={2}
            autoComplete="name"
            className="w-full px-4 py-3 bg-dns-surface border border-white/10 text-dns-white placeholder:text-dns-muted focus:border-dns-gold focus:outline-none focus:ring-1 focus:ring-dns-gold rounded"
            placeholder="Numele tău"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-dns-gold uppercase tracking-wider mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full px-4 py-3 bg-dns-surface border border-white/10 text-dns-white placeholder:text-dns-muted focus:border-dns-gold focus:outline-none focus:ring-1 focus:ring-dns-gold rounded"
            placeholder="email@exemplu.ro"
          />
        </div>
        <div>
          <label htmlFor="mesaj" className="block text-sm text-dns-gold uppercase tracking-wider mb-2">
            Mesaj
          </label>
          <textarea
            id="mesaj"
            name="mesaj"
            required
            minLength={10}
            rows={5}
            className="w-full px-4 py-3 bg-dns-surface border border-white/10 text-dns-white placeholder:text-dns-muted focus:border-dns-gold focus:outline-none focus:ring-1 focus:ring-dns-gold rounded resize-y"
            placeholder="Mesajul tău (programare, întrebări...)"
          />
        </div>
        {error && (
          <p className="text-red-400 text-sm" role="alert">
            {error}
          </p>
        )}
        {success && (
          <p className="text-dns-gold text-sm" role="status">
            Mesajul a fost trimis. Te vom contacta în curând.
          </p>
        )}
        <button
          type="submit"
          className="px-6 py-4 bg-dns-gold text-dns-bg font-semibold uppercase tracking-wider hover:bg-dns-gold-light transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-dns-gold focus-visible:ring-offset-2 focus-visible:ring-offset-dns-bg rounded"
        >
          Trimite
        </button>
      </form>
    </div>
  );
}
