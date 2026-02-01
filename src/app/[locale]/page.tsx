import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { locales, type Locale } from '@/i18n/config';
import Hero from '@/components/ui/Hero';
import SectionTitle from '@/components/ui/SectionTitle';
import SuiteCard from '@/components/ui/SuiteCard';
import ExperienceCard from '@/components/ui/ExperienceCard';
import { suites } from '@/data/suites';
import { galleryImages } from '@/data/gallery';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = (locales.includes(localeParam as Locale) ? localeParam : 'it') as Locale;
  const dictionary = await getDictionary(locale);

  const experienceTypes = ['truffle', 'wine', 'nature', 'relax'] as const;

  return (
    <>
      {/* Hero */}
      <Hero
        headline={dictionary.home.hero.headline}
        subhead={dictionary.home.hero.subhead}
        cta={{
          label: dictionary.cta.discoverSuites,
          href: `/${locale}/suite`,
        }}
        image="/images/hero-home.jpg"
        height="full"
      />

      {/* Intro - La Dolce Vita */}
      <section className="section bg-crema">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl text-terracotta tracking-widest mb-8">
              {dictionary.home.intro.title}
            </h2>

            <div className="space-y-6 font-serif text-lg md:text-xl text-ferro/80 leading-relaxed">
              <p className="italic">{dictionary.home.intro.p1}</p>
              <p>{dictionary.home.intro.p2}</p>
              <p>{dictionary.home.intro.p3}</p>
              <p>{dictionary.home.intro.p4}</p>
            </div>

            <div className="mt-10">
              <Link href={`/${locale}/la-dolce-vita`} className="btn btn-secondary">
                {dictionary.cta.readManifesto}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="py-8 bg-crema">
        <div className="container">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-24 bg-pietra" />
            <div className="w-2 h-2 bg-terracotta rotate-45" />
            <div className="h-px w-24 bg-pietra" />
          </div>
        </div>
      </div>

      {/* Suite Preview */}
      <section className="section bg-bianco-latte">
        <div className="container">
          <SectionTitle
            title={dictionary.home.suites.title}
            subtitle={dictionary.home.suites.intro}
            decorated
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {suites.slice(0, 3).map((suite, index) => (
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

          <div className="text-center mt-12">
            <Link href={`/${locale}/suite`} className="btn btn-primary">
              {dictionary.cta.discoverSuites}
            </Link>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="section bg-crema">
        <div className="container">
          <SectionTitle
            title={dictionary.home.experiences.title}
            subtitle={dictionary.home.experiences.intro}
            decorated
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {experienceTypes.map((type, index) => (
              <ExperienceCard
                key={type}
                type={type}
                title={dictionary.home.experiences[type].title}
                description={dictionary.home.experiences[type].desc}
                index={index}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href={`/${locale}/esperienze`} className="btn btn-secondary">
              {dictionary.cta.discoverExperiences}
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="section bg-pietra/20">
        <div className="container">
          <SectionTitle
            title={dictionary.home.gallery.title}
            subtitle={dictionary.home.gallery.intro}
          />

          {/* Simple gallery preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {galleryImages.slice(0, 4).map((image) => (
              <div
                key={image.id}
                className="aspect-square bg-pietra italian-frame overflow-hidden"
              >
                <div className="w-full h-full flex items-center justify-center text-ferro/40 text-sm text-center p-4">
                  {image.alt[locale]}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href={`/${locale}/galleria`} className="btn btn-secondary">
              {dictionary.cta.exploreGallery}
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section bg-verde-bosco text-bianco-latte">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
              {dictionary.home.final.title}
            </h2>
            <p className="text-crema/80 text-lg mb-8">
              {dictionary.home.final.text}
            </p>
            <Link
              href={`/${locale}/contatti`}
              className="btn bg-bianco-latte text-ferro hover:bg-crema border-bianco-latte"
            >
              {dictionary.cta.checkAvailability}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
