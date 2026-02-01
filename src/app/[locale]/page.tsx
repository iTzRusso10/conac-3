import Link from "next/link";
import { getDictionary } from "@/i18n/getDictionary";
import { locales, type Locale } from "@/i18n/config";
import Hero from "@/components/ui/Hero";
import SectionTitle from "@/components/ui/SectionTitle";
import SuiteCard from "@/components/ui/SuiteCard";
import ExperienceCard from "@/components/ui/ExperienceCard";
import {
  RusticFrame,
  FarmhouseQuote,
  FarmhouseCard,
  HandHighlight,
  SimpleLine,
  RusticCorner,
  OliveBranch,
} from "@/components/ui/VintageDecorations";
import {
  LogoDivider,
  LogoWatermark,
  SectionWithLogo,
} from "@/components/ui/LogoDecorations";
import { suites } from "@/data/suites";
import { galleryImages } from "@/data/gallery";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = (
    locales.includes(localeParam as Locale) ? localeParam : "it"
  ) as Locale;
  const dictionary = await getDictionary(locale);

  const experienceTypes = ["truffle", "wine", "nature", "relax"] as const;

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
      <SectionWithLogo
        className="bg-crema"
        logoPosition="center"
        logoOpacity={0.1}
        logoSize="lg"
      >
        {/* Titolo sezione con stile rustico */}
        <div className="text-center mb-12">
          <span className="inline-block text-verde-bosco/60 mb-4">
            <OliveBranch className="mx-auto" />
          </span>
          <h2 className="font-serif text-3xl md:text-4xl text-ferro">
            {dictionary.home.intro.title}
          </h2>
        </div>

        {/* Layout a due colonne alternato */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Colonna sinistra - Testo in cornice */}
          <RusticFrame>
            <p className="font-body text-lg text-ferro/85 leading-relaxed text-center italic">
              &quot;{dictionary.home.intro.p1}&quot;
            </p>
          </RusticFrame>

          {/* Colonna destra - Descrizione con parole evidenziate */}
          <div className="space-y-5">
            <p className="font-body text-lg text-ferro/80 leading-relaxed">
              È la <HandHighlight>pietra calda</HandHighlight> sotto i piedi al
              mattino. Il <strong>profumo del bosco</strong> che entra dalla
              finestra. Un <HandHighlight>calice di Barolo</HandHighlight>{" "}
              mentre il sole scende dietro le colline.
            </p>
          </div>
        </div>

        {/* Separatore semplice */}
        <SimpleLine className="my-12 max-w-md mx-auto" />

        {/* Seconda parte - Layout speculare */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-5xl mx-auto">
          {/* Testo */}
          <div className="lg:order-2 space-y-5">
            <p className="font-body text-lg text-ferro/80 leading-relaxed">
              A <strong>Relais Conac</strong> coltiviamo l&apos;
              <HandHighlight>arte della lentezza</HandHighlight>. Ogni dettaglio
              — dalle <strong>lanterne in ferro battuto</strong> ai{" "}
              <strong>fiori di campo</strong> — racconta una cura artigianale
              che si è persa altrove.
            </p>
          </div>

          {/* Citazione */}
          <div className="lg:order-1">
            <FarmhouseQuote>
              Qui non si &quot;soggiorna&quot;. Si vive, per qualche giorno,
              come si dovrebbe vivere sempre.
            </FarmhouseQuote>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <Link
            href={`/${locale}/la-dolce-vita`}
            className="btn btn-terracotta"
          >
            {dictionary.cta.readManifesto}
          </Link>
        </div>
      </SectionWithLogo>

      {/* Separatore con logo */}
      <LogoDivider />

      {/* Suite Preview */}
      <SectionWithLogo
        className="bg-bianco-latte"
        logoPosition="right"
        logoOpacity={0.04}
        logoSize="lg"
      >
        {/* Decorazioni angolari rustiche */}
        <RusticCorner position="tl" />
        <RusticCorner position="tr" />
        <RusticCorner position="bl" />
        <RusticCorner position="br" />

        <SectionTitle
          title={dictionary.home.suites.title}
          subtitle={dictionary.home.suites.intro}
          decorated
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {suites.slice(0, 3).map((suite, index) => (
            <SuiteCard
              key={suite.id}
              suite={suite}
              translations={
                dictionary.suites.list[
                  suite.id as keyof typeof dictionary.suites.list
                ]
              }
              ctaLabel={dictionary.cta.exploreSuite}
              locale={locale}
              index={index}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <SimpleLine className="max-w-xs mx-auto mb-8" />
          <Link href={`/${locale}/suite`} className="btn btn-primary">
            {dictionary.cta.discoverSuites}
          </Link>
        </div>
      </SectionWithLogo>

      {/* Separatore con logo */}
      <LogoDivider />

      {/* Experiences */}
      <SectionWithLogo
        className="bg-crema"
        logoPosition="center"
        logoOpacity={0.05}
        logoSize="lg"
      >
        <SectionTitle
          title={dictionary.home.experiences.title}
          subtitle={dictionary.home.experiences.intro}
          decorated
        />

        {/* Grid con card rustiche */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 max-w-4xl mx-auto">
          {experienceTypes.map((type, index) => (
            <FarmhouseCard key={type}>
              <ExperienceCard
                type={type}
                title={dictionary.home.experiences[type].title}
                description={dictionary.home.experiences[type].desc}
                index={index}
              />
            </FarmhouseCard>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link href={`/${locale}/esperienze`} className="btn btn-secondary">
            {dictionary.cta.discoverExperiences}
          </Link>
        </div>
      </SectionWithLogo>

      {/* Separatore con logo */}
      <LogoDivider />

      {/* Gallery Teaser */}
      <SectionWithLogo
        className="bg-pietra/20"
        logoPosition="center"
        logoOpacity={0.035}
        logoSize="xl"
      >
        <SectionTitle
          title={dictionary.home.gallery.title}
          subtitle={dictionary.home.gallery.intro}
        />

        {/* Galleria con layout naturale */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-10">
          {galleryImages.slice(0, 4).map((image, i) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
              style={{ aspectRatio: i === 0 ? "1/1" : "1/1" }}
            >
              {/* Placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-pietra to-pietra-dark flex items-center justify-center">
                <span className="text-ferro/50 text-sm text-center px-4 font-body">
                  {image.alt[locale]}
                </span>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-verde-bosco/0 group-hover:bg-verde-bosco/10 transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href={`/${locale}/galleria`} className="btn btn-secondary">
            {dictionary.cta.exploreGallery}
          </Link>
        </div>
      </SectionWithLogo>

      {/* Final CTA */}
      <section className="section bg-verde-bosco text-bianco-latte relative overflow-hidden">
        {/* Logo watermark */}
        <LogoWatermark position="center" opacity={0.08} size="xl" />

        {/* Rametti decorativi */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10">
            <OliveBranch className="w-32 h-10 text-bianco-latte" />
          </div>
          <div className="absolute bottom-10 right-10">
            <OliveBranch className="w-32 h-10 text-bianco-latte" flip />
          </div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-5">
              {dictionary.home.final.title}
            </h2>

            <p className="text-crema/85 text-lg mb-10 font-body">
              {dictionary.home.final.text}
            </p>

            <Link
              href={`/${locale}/contatti`}
              className="btn bg-bianco-latte text-verde-bosco hover:bg-crema border-2 border-bianco-latte"
            >
              {dictionary.cta.checkAvailability}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
