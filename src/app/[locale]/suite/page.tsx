import type { Metadata } from 'next';
import { getDictionary } from '@/i18n/getDictionary';
import { locales, type Locale } from '@/i18n/config';
import Hero from '@/components/ui/Hero';
import SuiteCard from '@/components/ui/SuiteCard';
import { suites } from '@/data/suites';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = (locales.includes(localeParam as Locale) ? localeParam : 'it') as Locale;

  return {
    title: locale === 'it' ? 'Le Nostre Suite' : 'Our Suites',
    description:
      locale === 'it'
        ? 'Sei suite, sei anime diverse. Camere con camino, vista colline, tessuti naturali e dettagli artigianali nel cuore delle Langhe.'
        : 'Six suites, six different souls. Rooms with fireplace, hill views, natural fabrics, and artisan details in the heart of Langhe.',
  };
}

export default async function SuitesPage({
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
        headline={dictionary.suites.hero.headline}
        subhead={dictionary.suites.hero.subhead}
        image="/images/hero-suites.jpg"
        height="medium"
      />

      {/* Intro */}
      <section className="py-12 bg-crema">
        <div className="container">
          <p className="text-center text-lg text-ferro/80 max-w-2xl mx-auto font-serif italic">
            {dictionary.suites.intro}
          </p>
        </div>
      </section>

      {/* Suites Grid */}
      <section className="section bg-bianco-latte">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {suites.map((suite, index) => (
              <SuiteCard
                key={suite.id}
                suite={suite}
                translations={dictionary.suites.list[suite.id as keyof typeof dictionary.suites.list]}
                ctaLabel={dictionary.cta.exploreSuite}
                locale={locale}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
