import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/i18n/getDictionary";
import { locales, type Locale } from "@/i18n/config";
import { SectionWithLogo } from "@/components/ui/LogoDecorations";
import Hero from "@/components/ui/Hero";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: localeParam } = await params;
  const locale = (
    locales.includes(localeParam as Locale) ? localeParam : "it"
  ) as Locale;

  return {
    title: locale === "it" ? "La Nostra Storia" : "Our Story",
    description:
      locale === "it"
        ? "Scopri la storia del nostro casolare: dalle origini contadine alla rinascita come B&B di charme nelle Langhe piemontesi."
        : "Discover our farmhouse story: from rural origins to rebirth as a boutique B&B in Piedmont Langhe.",
  };
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = (
    locales.includes(localeParam as Locale) ? localeParam : "it"
  ) as Locale;
  const dictionary = await getDictionary(locale);

  return (
    <>
      {/* Hero */}
      <Hero
        headline={dictionary.story.hero.headline}
        subhead={dictionary.story.hero.subhead}
        image="/images/hero-story.jpg"
      />

      {/* Le Radici */}
      <SectionWithLogo
        className="bg-crema"
        logoPosition="center"
        logoOpacity={0.05}
        logoSize="xl"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image placeholder */}
            <div className="aspect-[4/3] bg-pietra italian-frame order-2 lg:order-1">
              <div className="w-full h-full flex items-center justify-center text-ferro/40">
                [Foto storica / dettaglio pietra antica]
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl md:text-4xl text-ferro mb-6">
                {dictionary.story.roots.title}
              </h2>
              <div className="space-y-4 text-ferro/80 leading-relaxed">
                <p>{dictionary.story.roots.p1}</p>
                <p>{dictionary.story.roots.p2}</p>
                <p className="font-serif italic text-lg">
                  {dictionary.story.roots.p3}
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWithLogo>

      {/* Riportarlo alla luce */}
      <SectionWithLogo
        className="bg-bianco-latte"
        logoPosition="center"
        logoOpacity={0.05}
        logoSize="xl"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-ferro mb-6">
                {dictionary.story.rebirth.title}
              </h2>
              <div className="space-y-4 text-ferro/80 leading-relaxed">
                <p>{dictionary.story.rebirth.p1}</p>
                <p>{dictionary.story.rebirth.p2}</p>
                <p>{dictionary.story.rebirth.p3}</p>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="aspect-[4/3] bg-pietra italian-frame">
              <div className="w-full h-full flex items-center justify-center text-ferro/40">
                [Foto restauro / artigiano al lavoro]
              </div>
            </div>
          </div>
        </div>
      </SectionWithLogo>

      {/* Quello che siamo */}
      <SectionWithLogo
        className="bg-crema"
        logoPosition="center"
        logoOpacity={0.05}
        logoSize="xl"
      >
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-ferro mb-8">
              {dictionary.story.today.title}
            </h2>
            <div className="space-y-6 text-lg text-ferro/80 leading-relaxed">
              <p>{dictionary.story.today.p1}</p>
              <p>{dictionary.story.today.p2}</p>
              <p className="font-serif italic text-xl text-ferro">
                {dictionary.story.today.p3}
              </p>
            </div>

            <div className="mt-12">
              <Link href={`/${locale}/suite`} className="btn btn-primary">
                {dictionary.cta.discoverSuites}
              </Link>
            </div>
          </div>
        </div>
      </SectionWithLogo>
    </>
  );
}
