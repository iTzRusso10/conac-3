import type { Metadata } from 'next';
import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import type { Locale } from '@/i18n/config';
import Hero from '@/components/ui/Hero';
import { Eye, Ear, Wind, Coffee, Hand } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: 'La Dolce Vita',
    description:
      locale === 'it'
        ? 'La Dolce Vita non è nostalgia, è un modo di vivere. Scopri la filosofia del nostro casolare: lentezza, autenticità, piacere dei sensi.'
        : "La Dolce Vita is not nostalgia — it's a way of living. Discover our farmhouse philosophy: slowness, authenticity, pleasure of the senses.",
  };
}

export default async function DolceVitaPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  const senses = [
    { key: 'sight', icon: Eye },
    { key: 'sound', icon: Ear },
    { key: 'smell', icon: Wind },
    { key: 'taste', icon: Coffee },
    { key: 'touch', icon: Hand },
  ] as const;

  return (
    <>
      {/* Hero */}
      <Hero
        headline={dictionary.dolcevita.hero.headline}
        subhead={dictionary.dolcevita.hero.subhead}
        image="/images/hero-dolcevita.jpg"
        height="medium"
      />

      {/* Manifesto */}
      <section className="section bg-crema">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-ferro text-center mb-12">
              {dictionary.dolcevita.manifesto.title}
            </h2>

            <div className="space-y-8 text-lg text-ferro/80 leading-relaxed">
              <p>{dictionary.dolcevita.manifesto.intro}</p>
              <p className="font-medium text-ferro">{dictionary.dolcevita.manifesto.intro2}</p>

              {/* Time */}
              <div className="border-l-2 border-terracotta pl-6 py-2">
                <h3 className="font-serif text-xl text-ferro mb-2">
                  {dictionary.dolcevita.manifesto.time.title}
                </h3>
                <p>{dictionary.dolcevita.manifesto.time.text}</p>
              </div>

              {/* Details */}
              <div className="border-l-2 border-terracotta pl-6 py-2">
                <h3 className="font-serif text-xl text-ferro mb-2">
                  {dictionary.dolcevita.manifesto.details.title}
                </h3>
                <p>{dictionary.dolcevita.manifesto.details.text}</p>
              </div>

              {/* Pleasure */}
              <div className="border-l-2 border-terracotta pl-6 py-2">
                <h3 className="font-serif text-xl text-ferro mb-2">
                  {dictionary.dolcevita.manifesto.pleasure.title}
                </h3>
                <p>{dictionary.dolcevita.manifesto.pleasure.text}</p>
              </div>

              {/* Authenticity */}
              <div className="border-l-2 border-terracotta pl-6 py-2">
                <h3 className="font-serif text-xl text-ferro mb-2">
                  {dictionary.dolcevita.manifesto.authenticity.title}
                </h3>
                <p>{dictionary.dolcevita.manifesto.authenticity.text}</p>
              </div>

              <p className="font-serif italic text-xl text-center text-ferro pt-6">
                {dictionary.dolcevita.manifesto.conclusion}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* I Cinque Sensi */}
      <section className="section bg-bianco-latte">
        <div className="container">
          <h2 className="font-serif text-3xl md:text-4xl text-ferro text-center mb-16">
            {dictionary.dolcevita.senses.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {senses.map(({ key, icon: Icon }) => (
              <div key={key} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-crema border border-pietra flex items-center justify-center transition-all duration-300 group-hover:bg-verde-bosco group-hover:border-verde-bosco">
                  <Icon
                    size={32}
                    className="text-ferro/70 transition-colors group-hover:text-bianco-latte"
                  />
                </div>
                <h3 className="font-serif text-xl text-ferro mb-3">
                  {dictionary.dolcevita.senses[key].name}
                </h3>
                <p className="text-ferro/70 text-sm leading-relaxed">
                  {dictionary.dolcevita.senses[key].text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-verde-bosco text-bianco-latte">
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            {locale === 'it' ? 'Vivi La Dolce Vita' : 'Live La Dolce Vita'}
          </h2>
          <Link
            href={`/${locale}/esperienze`}
            className="btn bg-bianco-latte text-ferro hover:bg-crema"
          >
            {dictionary.cta.discoverExperiences}
          </Link>
        </div>
      </section>
    </>
  );
}
