import type { Metadata } from 'next';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { locales, type Locale } from '@/i18n/config';
import Hero from '@/components/ui/Hero';
import Gallery from '@/components/ui/Gallery';
import { galleryImages } from '@/data/gallery';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = (locales.includes(localeParam as Locale) ? localeParam : 'it') as Locale;

  return {
    title: locale === 'it' ? 'Galleria' : 'Gallery',
    description:
      locale === 'it'
        ? 'Esplora le immagini del casolare: piscina in pietra, suite con camino, lanterne, boschi e colline delle Langhe piemontesi.'
        : "Explore farmhouse images: stone pool, suites with fireplace, lanterns, woods, and Piedmont's Langhe hills.",
  };
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = (locales.includes(localeParam as Locale) ? localeParam : 'it') as Locale;
  const dictionary = await getDictionary(locale);

  return (
    <>
      {/* Hero */}
      <Hero
        headline={dictionary.gallery.hero.headline}
        subhead={dictionary.gallery.hero.subhead}
        height="medium"
      />

      {/* Gallery */}
      <section className="section bg-crema">
        <div className="container">
          <Gallery
            images={galleryImages}
            locale={locale}
            filters={dictionary.gallery.filters}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-verde-bosco text-bianco-latte">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            {dictionary.gallery.cta.title}
          </h2>
          <Link
            href={`/${locale}/contatti`}
            className="btn bg-bianco-latte text-ferro hover:bg-crema"
          >
            {dictionary.cta.checkAvailability}
          </Link>
        </div>
      </section>
    </>
  );
}
