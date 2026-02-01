import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getDictionary } from '@/i18n/getDictionary';
import { locales, type Locale } from '@/i18n/config';
import { suites, getSuiteById } from '@/data/suites';
import {
  Mountain,
  Bath,
  Leaf,
  Thermometer,
  Wifi,
  Coffee,
  Shirt,
  Wine,
  Flame,
  Building2,
  Grape,
  Trees,
} from 'lucide-react';

export async function generateStaticParams() {
  return suites.flatMap((suite) => [
    { locale: 'it', slug: suite.slug },
    { locale: 'en', slug: suite.slug },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const locale = (locales.includes(localeParam as Locale) ? localeParam : 'it') as Locale;
  const dictionary = await getDictionary(locale);
  const suite = getSuiteById(slug);

  if (!suite) return {};

  const suiteData = dictionary.suites.list[suite.id as keyof typeof dictionary.suites.list];

  return {
    title: `Suite ${suiteData.name}`,
    description: suiteData.description.slice(0, 160),
  };
}

export default async function SuiteDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: localeParam, slug } = await params;
  const locale = (locales.includes(localeParam as Locale) ? localeParam : 'it') as Locale;
  const dictionary = await getDictionary(locale);
  const suite = getSuiteById(slug);

  if (!suite) {
    notFound();
  }

  const suiteData = dictionary.suites.list[suite.id as keyof typeof dictionary.suites.list];

  const amenityIcons = [
    { key: 'view', icon: Mountain, show: suite.hasValleyView || suite.hasVineyardView },
    { key: 'bathroom', icon: Bath, show: true },
    { key: 'products', icon: Leaf, show: true },
    { key: 'heating', icon: Thermometer, show: true },
    { key: 'wifi', icon: Wifi, show: true },
    { key: 'kettle', icon: Coffee, show: true },
    { key: 'robes', icon: Shirt, show: true },
    { key: 'minibar', icon: Wine, show: true },
  ];

  const features = [
    { icon: Flame, label: locale === 'it' ? 'Camino' : 'Fireplace', show: suite.hasFireplace },
    { icon: Building2, label: locale === 'it' ? 'Balcone privato' : 'Private balcony', show: suite.hasBalcony },
    { icon: Mountain, label: locale === 'it' ? 'Vista valle' : 'Valley view', show: suite.hasValleyView },
    { icon: Grape, label: locale === 'it' ? 'Vista vigneti' : 'Vineyard view', show: suite.hasVineyardView },
    { icon: Trees, label: locale === 'it' ? 'Accesso giardino' : 'Garden access', show: suite.hasGardenAccess },
  ].filter(f => f.show);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-end">
        <div
          className="absolute inset-0"
          style={{ backgroundColor: suite.color }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-bianco-latte/30 font-serif text-6xl md:text-8xl italic">
              {suiteData.name}
            </span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ferro/70 via-transparent to-transparent" />
        
        <div className="container relative z-10 pb-16">
          <p className="text-crema/70 uppercase tracking-widest text-sm mb-2">Suite</p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-bianco-latte mb-4">
            {suiteData.name}
          </h1>
          <p className="font-serif text-xl md:text-2xl text-crema/90 italic">
            {suiteData.tagline}
          </p>
        </div>
      </section>

      {/* Description */}
      <section className="section bg-crema">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              <p className="text-sm uppercase tracking-widest text-terracotta mb-4">
                {suiteData.soul}
              </p>
              <p className="text-lg text-ferro/80 leading-relaxed mb-8">
                {suiteData.description}
              </p>

              {/* Highlight */}
              <div className="bg-bianco-latte p-6 italian-frame">
                <h3 className="font-serif text-lg text-ferro mb-2">
                  {dictionary.suites.details.highlight}
                </h3>
                <p className="text-ferro/70">{suiteData.highlight}</p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-bianco-latte p-6 italian-frame sticky top-28">
                {/* Quick info */}
                <div className="space-y-4 mb-6 pb-6 border-b border-pietra">
                  <div className="flex justify-between">
                    <span className="text-ferro/70">{dictionary.suites.details.size}</span>
                    <span className="font-medium">{suite.size} m²</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ferro/70">{dictionary.suites.details.guests}</span>
                    <span className="font-medium">{suite.guests}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-ferro/70">{dictionary.suites.details.bed}</span>
                    <span className="font-medium">{suite.bedType}</span>
                  </div>
                </div>

                {/* Special features */}
                {features.length > 0 && (
                  <div className="mb-6 pb-6 border-b border-pietra">
                    <div className="flex flex-wrap gap-2">
                      {features.map(({ icon: Icon, label }) => (
                        <span
                          key={label}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-verde-bosco/10 text-verde-bosco text-sm rounded-full"
                        >
                          <Icon size={14} />
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA */}
                <Link
                  href={`/${locale}/contatti`}
                  className="btn btn-primary w-full justify-center"
                >
                  {dictionary.cta.checkAvailability}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section bg-bianco-latte">
        <div className="container">
          <h2 className="font-serif text-2xl md:text-3xl text-ferro text-center mb-10">
            {dictionary.suites.details.features}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {amenityIcons.filter(a => a.show).map(({ key, icon: Icon }) => (
              <div key={key} className="flex items-center gap-3 text-ferro/80">
                <Icon size={20} className="text-verde-bosco flex-shrink-0" />
                <span className="text-sm">
                  {dictionary.suites.amenities[key as keyof typeof dictionary.suites.amenities]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery placeholder */}
      <section className="section bg-crema">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((n) => (
              <div key={n} className="aspect-square bg-pietra italian-frame">
                <div className="w-full h-full flex items-center justify-center text-ferro/40 text-sm">
                  {suiteData.name} - Foto {n}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other suites */}
      <section className="py-12 bg-bianco-latte">
        <div className="container text-center">
          <Link href={`/${locale}/suite`} className="btn btn-secondary">
            {dictionary.cta.otherSuites}
          </Link>
        </div>
      </section>
    </>
  );
}
