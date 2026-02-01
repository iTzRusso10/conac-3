'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import type { Dictionary } from '@/i18n/getDictionary';
import type { Locale } from '@/i18n/config';

interface FooterProps {
  dictionary: Dictionary;
  locale: Locale;
}

export default function Footer({ dictionary, locale }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: `/${locale}`, label: dictionary.nav.home },
    { href: `/${locale}/storia`, label: dictionary.nav.story },
    { href: `/${locale}/la-dolce-vita`, label: dictionary.nav.dolcevita },
    { href: `/${locale}/suite`, label: dictionary.nav.suites },
    { href: `/${locale}/galleria`, label: dictionary.nav.gallery },
    { href: `/${locale}/esperienze`, label: dictionary.nav.experiences },
    { href: `/${locale}/ricevimenti`, label: dictionary.nav.events },
    { href: `/${locale}/contatti`, label: dictionary.nav.contact },
  ];

  return (
    <footer className="bg-ferro text-crema">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href={`/${locale}`} className="font-serif text-2xl text-bianco-latte block mb-4">
              [Nome Casolare]
            </Link>
            <p className="text-crema/70 font-serif italic text-lg mb-6">
              {dictionary.footer.tagline}
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crema/70 hover:text-terracotta transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-crema/70 hover:text-terracotta transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg text-bianco-latte mb-4">Menu</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-crema/70 hover:text-terracotta transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="font-serif text-lg text-bianco-latte mb-4">&nbsp;</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.slice(4).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-crema/70 hover:text-terracotta transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-bianco-latte mb-4">
              {dictionary.contact.info.title}
            </h4>
            <div className="flex flex-col gap-3 text-crema/70">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>
                  [Via/Strada], [Numero]<br />
                  [CAP] [Comune], Piemonte<br />
                  Italia
                </span>
              </div>
              <a
                href="tel:+390000000000"
                className="flex items-center gap-3 hover:text-terracotta transition-colors"
              >
                <Phone size={18} />
                <span>+39 000 000 0000</span>
              </a>
              <a
                href="mailto:info@nomecasolare.it"
                className="flex items-center gap-3 hover:text-terracotta transition-colors"
              >
                <Mail size={18} />
                <span>info@nomecasolare.it</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-crema/10">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-crema/50">
            <p>
              © {currentYear} [Nome Casolare]. {dictionary.footer.rights}.
            </p>
            <div className="flex items-center gap-6">
              <span>{dictionary.footer.vat} [00000000000]</span>
              <Link
                href={`/${locale}/privacy`}
                className="hover:text-crema transition-colors"
              >
                {dictionary.footer.privacy}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
