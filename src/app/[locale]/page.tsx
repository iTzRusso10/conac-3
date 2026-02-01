import Link from 'next/link';
import { getDictionary } from '@/i18n/getDictionary';
import { locales, type Locale } from '@/i18n/config';
import Hero from '@/components/ui/Hero';
import SectionTitle from '@/components/ui/SectionTitle';
import SuiteCard from '@/components/ui/SuiteCard';
import ExperienceCard from '@/components/ui/ExperienceCard';
import { 
  FloralOrnament, 
  SectionDivider, 
  VintageFrame, 
  ElegantQuote,
  DecorativeCard,
  HighlightText,
  DecorativeLine 
} from '@/components/ui/VintageDecorations';
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
      <section className="section bg-crema relative overflow-hidden">
        {/* Pattern di sfondo sottile */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 text-pietra text-9xl font-serif opacity-10">❦</div>
          <div className="absolute bottom-10 right-10 text-pietra text-9xl font-serif opacity-10 rotate-180">❦</div>
        </div>

        <div className="container relative">
          {/* Ornamento superiore */}
          <FloralOrnament size="lg" className="text-terracotta mx-auto mb-8" />
          
          <div className="max-w-4xl mx-auto">
            {/* Titolo in cornice */}
            <div className="text-center mb-12">
              <span className="inline-block px-8 py-3 border-2 border-terracotta rounded-full">
                <h2 className="font-serif text-3xl md:text-4xl text-ferro tracking-wide">
                  {dictionary.home.intro.title}
                </h2>
              </span>
            </div>

            {/* Layout a due colonne con testo alternato */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Colonna sinistra - Citazione in cornice */}
              <VintageFrame className="lg:order-1">
                <p className="font-body italic text-xl text-ferro/80 leading-relaxed text-center">
                  {dictionary.home.intro.p1}
                </p>
              </VintageFrame>

              {/* Colonna destra - Testo descrittivo */}
              <div className="lg:order-2 space-y-6">
                <p className="font-body text-lg text-ferro/80 leading-relaxed">
                  È la <HighlightText><strong>pietra calda</strong></HighlightText> sotto i piedi al mattino. 
                  Il <strong>profumo del bosco</strong> che entra dalla finestra. 
                  Un <HighlightText><strong>calice di Barolo</strong></HighlightText> mentre il sole scende dietro le colline.
                </p>
              </div>
            </div>

            {/* Separatore decorativo */}
            <DecorativeLine className="my-12" />

            {/* Seconda parte - Layout speculare */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Colonna sinistra - Testo */}
              <div className="lg:order-2 lg:text-right space-y-6">
                <p className="font-body text-lg text-ferro/80 leading-relaxed">
                  A <strong>[Nome Casolare]</strong> coltiviamo l'<HighlightText><strong>arte della lentezza</strong></HighlightText>. 
                  Ogni dettaglio — dalle <strong>lanterne in ferro battuto</strong> ai <strong>fiori raccolti nel prato</strong> — 
                  racconta una cura artigianale che si è persa altrove.
                </p>
              </div>

              {/* Colonna destra - Quote elegante */}
              <ElegantQuote>
                Qui non si "soggiorna". Si vive, per qualche giorno, come si dovrebbe vivere sempre.
              </ElegantQuote>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <Link href={`/${locale}/la-dolce-vita`} className="btn btn-elegant">
                {dictionary.cta.readManifesto}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Divisore */}
      <SectionDivider variant="leaf" />

      {/* Suite Preview */}
      <section className="section bg-bianco-latte relative">
        {/* Decorazioni angolari */}
        <div className="absolute top-8 left-8 w-24 h-24 border-l-2 border-t-2 border-pietra/30 rounded-tl-3xl" />
        <div className="absolute top-8 right-8 w-24 h-24 border-r-2 border-t-2 border-pietra/30 rounded-tr-3xl" />
        <div className="absolute bottom-8 left-8 w-24 h-24 border-l-2 border-b-2 border-pietra/30 rounded-bl-3xl" />
        <div className="absolute bottom-8 right-8 w-24 h-24 border-r-2 border-b-2 border-pietra/30 rounded-br-3xl" />

        <div className="container">
          <SectionTitle
            title={dictionary.home.suites.title}
            subtitle={dictionary.home.suites.intro}
            decorated
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
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

          {/* Ornamento e CTA */}
          <div className="text-center mt-16">
            <FloralOrnament size="md" className="text-terracotta mx-auto mb-8" />
            <Link href={`/${locale}/suite`} className="btn btn-primary">
              {dictionary.cta.discoverSuites}
            </Link>
          </div>
        </div>
      </section>

      {/* Divisore con pattern */}
      <div className="h-20 bg-gradient-to-b from-bianco-latte to-crema relative">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-pietra to-transparent" />
      </div>

      {/* Experiences - Layout alternato */}
      <section className="section bg-crema relative">
        <div className="container">
          <SectionTitle
            title={dictionary.home.experiences.title}
            subtitle={dictionary.home.experiences.intro}
            decorated
          />

          {/* Grid con card decorative */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {experienceTypes.map((type, index) => (
              <DecorativeCard key={type} className={index % 2 === 1 ? 'md:mt-8' : ''}>
                <ExperienceCard
                  type={type}
                  title={dictionary.home.experiences[type].title}
                  description={dictionary.home.experiences[type].desc}
                  index={index}
                />
              </DecorativeCard>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href={`/${locale}/esperienze`} className="btn btn-secondary">
              {dictionary.cta.discoverExperiences}
            </Link>
          </div>
        </div>
      </section>

      {/* Divisore */}
      <SectionDivider variant="ornate" />

      {/* Gallery Teaser - Con cornice elegante */}
      <section className="section bg-pietra/20 relative overflow-hidden">
        {/* Sfondo decorativo */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-pietra/30 to-transparent" />
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-pietra/30 to-transparent" />
        </div>

        <div className="container relative">
          <SectionTitle
            title={dictionary.home.gallery.title}
            subtitle={dictionary.home.gallery.intro}
          />

          {/* Galleria con layout a mosaico */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {galleryImages.slice(0, 4).map((image, i) => (
              <div
                key={image.id}
                className={`relative group overflow-hidden rounded-xl shadow-lg border-4 border-bianco-latte ${
                  i === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                style={{ aspectRatio: i === 0 ? '1/1' : '1/1' }}
              >
                {/* Placeholder con stile vintage */}
                <div className="absolute inset-0 bg-gradient-to-br from-pietra to-pietra-dark flex items-center justify-center">
                  <span className="text-ferro/40 text-sm text-center px-4 font-serif italic">
                    {image.alt[locale]}
                  </span>
                </div>
                {/* Overlay hover */}
                <div className="absolute inset-0 bg-ferro/0 group-hover:bg-ferro/20 transition-colors duration-500" />
                {/* Cornice interna */}
                <div className="absolute inset-2 border border-bianco-latte/50 rounded-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <FloralOrnament size="sm" className="text-terracotta mx-auto mb-6" />
            <Link href={`/${locale}/galleria`} className="btn btn-secondary">
              {dictionary.cta.exploreGallery}
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA - Con design elegante */}
      <section className="section bg-verde-bosco text-bianco-latte relative overflow-hidden">
        {/* Pattern decorativo */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-bianco-latte rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-bianco-latte rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-bianco-latte rounded-full" />
        </div>

        <div className="container relative">
          <div className="max-w-2xl mx-auto text-center">
            {/* Ornamento */}
            <div className="text-oro text-4xl mb-6">❦</div>
            
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              {dictionary.home.final.title}
            </h2>
            
            <p className="text-crema/80 text-lg md:text-xl mb-10 font-body italic">
              {dictionary.home.final.text}
            </p>
            
            <Link
              href={`/${locale}/contatti`}
              className="btn bg-bianco-latte text-verde-bosco hover:bg-crema border-2 border-bianco-latte"
            >
              {dictionary.cta.checkAvailability}
            </Link>

            {/* Ornamento inferiore */}
            <div className="mt-10 text-oro/50 text-2xl">✦ ✦ ✦</div>
          </div>
        </div>
      </section>
    </>
  );
}
