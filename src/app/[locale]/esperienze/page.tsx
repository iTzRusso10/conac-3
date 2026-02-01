import type { Metadata } from 'next';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import type { Locale } from '@/i18n/config';
import Hero from '@/components/ui/Hero';
import { Search, Wine, TreeDeciduous, Waves, Clock, Gift, Calendar } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'it' ? 'Esperienze' : 'Experiences',
    description:
      locale === 'it'
        ? 'Vivi il Piemonte autentico: caccia al tartufo, degustazioni di Barolo, passeggiate nei boschi. Esperienze esclusive per gli ospiti del casolare.'
        : 'Experience authentic Piedmont: truffle hunting, Barolo tastings, forest walks. Exclusive experiences for farmhouse guests.',
  };
}

export default async function ExperiencesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  return (
    <>
      {/* Hero */}
      <Hero
        headline={dictionary.experiences.hero.headline}
        subhead={dictionary.experiences.hero.subhead}
        image="/images/hero-experiences.jpg"
        height="medium"
      />

      {/* Truffle Hunting */}
      <section className="section bg-crema">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="aspect-[4/3] bg-terracotta/20 italian-frame">
              <div className="w-full h-full flex items-center justify-center text-terracotta/60">
                [Foto caccia al tartufo]
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Search className="text-terracotta" size={28} />
                <h2 className="font-serif text-3xl md:text-4xl text-ferro">
                  {dictionary.experiences.truffle.title}
                </h2>
              </div>

              <div className="space-y-4 text-ferro/80 leading-relaxed mb-8">
                <p>{dictionary.experiences.truffle.p1}</p>
                <p>{dictionary.experiences.truffle.p2}</p>
                <p className="font-serif italic text-lg text-ferro">
                  {dictionary.experiences.truffle.p3}
                </p>
              </div>

              {/* Details */}
              <div className="space-y-3 text-sm text-ferro/70">
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{dictionary.experiences.truffle.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gift size={16} />
                  <span>{dictionary.experiences.truffle.includes}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{dictionary.experiences.truffle.season}</span>
                </div>
              </div>

              <div className="mt-8">
                <Link href={`/${locale}/contatti`} className="btn btn-primary">
                  {dictionary.cta.bookExperience}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wine Tastings */}
      <section className="section bg-bianco-latte">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-4">
                <Wine className="text-verde-bosco" size={28} />
                <h2 className="font-serif text-3xl md:text-4xl text-ferro">
                  {dictionary.experiences.wine.title}
                </h2>
              </div>

              <div className="space-y-4 text-ferro/80 leading-relaxed mb-8">
                <p>{dictionary.experiences.wine.p1}</p>
                <p>{dictionary.experiences.wine.p2}</p>
                <p className="font-serif italic text-lg text-ferro">
                  {dictionary.experiences.wine.p3}
                </p>
              </div>

              {/* Details */}
              <ul className="space-y-2 text-sm text-ferro/70">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-verde-bosco rounded-full" />
                  {dictionary.experiences.wine.wines}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-verde-bosco rounded-full" />
                  {dictionary.experiences.wine.pairing}
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-verde-bosco rounded-full" />
                  {dictionary.experiences.wine.visits}
                </li>
              </ul>

              <div className="mt-8">
                <Link href={`/${locale}/contatti`} className="btn btn-primary">
                  {dictionary.cta.bookExperience}
                </Link>
              </div>
            </div>

            {/* Image */}
            <div className="aspect-[4/3] bg-verde-bosco/20 italian-frame order-1 lg:order-2">
              <div className="w-full h-full flex items-center justify-center text-verde-bosco/60">
                [Foto degustazione vino]
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nature Walks */}
      <section className="section bg-crema">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="aspect-[4/3] bg-verde-bosco/10 italian-frame">
              <div className="w-full h-full flex items-center justify-center text-verde-bosco/60">
                [Foto sentiero nel bosco]
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <TreeDeciduous className="text-verde-bosco" size={28} />
                <h2 className="font-serif text-3xl md:text-4xl text-ferro">
                  {dictionary.experiences.nature.title}
                </h2>
              </div>

              <div className="space-y-4 text-ferro/80 leading-relaxed mb-8">
                <p>{dictionary.experiences.nature.p1}</p>
                <p>{dictionary.experiences.nature.p2}</p>
                <p>{dictionary.experiences.nature.p3}</p>
              </div>

              {/* Trails */}
              <div className="bg-bianco-latte p-6 rounded-sm">
                <h4 className="font-medium text-ferro mb-4">
                  {locale === 'it' ? 'Suggerimenti percorsi:' : 'Trail suggestions:'}
                </h4>
                <ul className="space-y-2 text-sm text-ferro/70">
                  <li>{dictionary.experiences.nature.trail1}</li>
                  <li>{dictionary.experiences.nature.trail2}</li>
                  <li>{dictionary.experiences.nature.trail3}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pool */}
      <section className="section bg-bianco-latte">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <Waves className="text-pietra-dark mx-auto mb-6" size={48} />
            <h2 className="font-serif text-3xl md:text-4xl text-ferro mb-8">
              {dictionary.experiences.pool.title}
            </h2>

            <div className="space-y-4 text-lg text-ferro/80 leading-relaxed font-serif">
              <p>{dictionary.experiences.pool.p1}</p>
              <p className="italic">{dictionary.experiences.pool.p2}</p>
              <p>{dictionary.experiences.pool.p3}</p>
            </div>
          </div>

          {/* Pool image */}
          <div className="mt-12 aspect-[21/9] bg-pietra/30 italian-frame max-w-5xl mx-auto">
            <div className="w-full h-full flex items-center justify-center text-ferro/40">
              [Foto panoramica piscina]
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-verde-bosco text-bianco-latte">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            {locale === 'it' ? 'Pronti a vivere il Piemonte?' : 'Ready to live Piedmont?'}
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
