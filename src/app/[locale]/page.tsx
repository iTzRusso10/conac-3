import Link from "next/link";
import { getDictionary } from "@/i18n/getDictionary";
import { locales, type Locale } from "@/i18n/config";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  RusticFrame,
  FarmhouseQuote,
  SimpleLine,
  OliveBranch,
} from "@/components/ui/VintageDecorations";
import {
  LogoDivider,
  LogoWatermark,
  SectionWithLogo,
} from "@/components/ui/LogoDecorations";
import Hero from "@/components/ui/Hero";

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
      {/* Hero con video */}
      <Hero
        headline={dictionary.home.hero.headline}
        subhead={dictionary.home.hero.subhead}
        cta={{
          label: dictionary.cta.bookExperience,
          href: `/${locale}/suite`,
        }}
        video="/images/hero/hero-videos.mp4"
        showBrandName={true}
      />

      {/* Intro - La Dolce Vita */}
      <SectionWithLogo
        className="bg-crema pt-0!"
        logoPosition="center"
        logoOpacity={0.1}
        logoSize="lg"
      >
        {/* Titolo sezione con stile rustico */}
        <div className="text-center mb-12">
          <span className="inline-block text-verde-bosco/60 mb-4">
            <LogoDivider className="" />
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
              {dictionary.home.intro.p2}
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
              {dictionary.home.intro.p3}
            </p>
          </div>

          {/* Citazione */}
          <div className="lg:order-1">
            <FarmhouseQuote>{dictionary.home.intro.p4}</FarmhouseQuote>
          </div>
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
        <SectionTitle
          title={dictionary.home.manifesto.title}
          subtitle={dictionary.home.manifesto.intro}
          decorated
        />

        <SectionTitle
          title={""}
          subtitle={dictionary.home.manifesto.p1}
          decorated
        />

        {/* CTA */}
        <div className="text-center mt-14">
          <SimpleLine className="max-w-xs mx-auto mb-8" />
          <Link href={`/${locale}/suite`} className="btn btn-primary">
            {dictionary.cta.readManifesto}
          </Link>
        </div>
      </SectionWithLogo>
      <LogoDivider />

      {/* Separatore con logo */}

      {/* Experiences */}
      <SectionWithLogo
        className="bg-crema !pt-0"
        logoPosition="center"
        logoOpacity={0.05}
        logoSize="lg"
      >
        <SectionTitle
          title={dictionary.home.author_details.title}
          subtitle={dictionary.home.author_details.intro}
          decorated
        />
        <SectionTitle
          title={""}
          subtitle={dictionary.home.author_details.p1}
          decorated
        />
      </SectionWithLogo>

      {/* Separatore con logo */}
      <LogoDivider />

      {/* Final CTA */}
      <section className="section bg-verde-bosco text-bianco-latte relative overflow-hidden">
        {/* Logo watermark */}
        <LogoWatermark position="center" opacity={0.1} size="xl" />

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
