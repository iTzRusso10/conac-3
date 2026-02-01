import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n/config';
import { getDictionary } from '@/i18n/getDictionary';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import '../globals.css';

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  
  if (!locales.includes(locale as Locale)) {
    return {};
  }
  
  const validLocale = locale as Locale;
  const dictionary = await getDictionary(validLocale);

  return {
    title: {
      default: `${dictionary.metadata.siteName} | ${dictionary.metadata.tagline}`,
      template: `%s | ${dictionary.metadata.siteName}`,
    },
    description:
      validLocale === 'it'
        ? 'Un casolare storico trasformato in B&B esclusivo nelle Langhe piemontesi. Suite con anima, piscina in pietra, esperienze autentiche.'
        : 'A historic farmhouse transformed into an exclusive B&B in Piedmont Langhe. Soulful suites, stone pool, authentic experiences.',
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  const validLocale = locale as Locale;
  const dictionary = await getDictionary(validLocale);

  return (
    <html lang={validLocale}>
      <body className="bg-crema text-ferro antialiased">
        <Navbar dictionary={dictionary} locale={validLocale} />
        <main>{children}</main>
        <Footer dictionary={dictionary} locale={validLocale} />
      </body>
    </html>
  );
}
