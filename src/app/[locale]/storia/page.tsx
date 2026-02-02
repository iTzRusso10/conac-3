import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/i18n/getDictionary";
import { locales, type Locale } from "@/i18n/config";
import { SectionWithLogo } from "@/components/ui/LogoDecorations";
import PageHero from "@/components/ui/PageHero";
import SectionTitle from "@/components/ui/SectionTitle";

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
      {/* Page Hero */}
      <PageHero
        title={dictionary.story.hero.headline}
        subtitle={dictionary.story.hero.subhead}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-20 items-center">
            {/* Image placeholder */}
            <div className="aspect-[4/3] bg-pietra italian-frame order-2 lg:order-1">
              <div className="w-full h-full flex items-center justify-center text-ferro/40">
                [Foto storica / dettaglio pietra antica]
              </div>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <SectionTitle
                subtitleSize="text-[16px]"
                centered={false}
                title={dictionary.story.roots.title}
                decorated
                subtitle={`${dictionary.story.roots.p1}`}
                subtitles={[dictionary.story.roots.p2]}
              />
            </div>
            {/* <div className="order-1 lg:order-2">
              <h2 className="font-serif text-3xl md:text-4xl text-ferro mb-6"></h2>
              <div className="space-y-4 text-ferro/80 leading-relaxed">
                <p>{dictionary.story.roots.p1}</p>
                <p>{dictionary.story.roots.p2}</p>
                <p className="font-serif italic text-lg">
                  {dictionary.story.roots.p3}
                </p>
              </div>
            </div> */}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-20 items-center">
            {/* Text */}
            {/* <div>
              <h2 className="font-serif text-3xl md:text-4xl text-ferro mb-6">
                {dictionary.story.rebirth.title}
              </h2>
              <div className="space-y-4 text-ferro/80 leading-relaxed">
                <p>{dictionary.story.rebirth.p1}</p>
                <p>{dictionary.story.rebirth.p2}</p>
                <p>{dictionary.story.rebirth.p3}</p>
              </div>
            </div> */}

            <SectionTitle
              subtitleSize="text-[16px]"
              centered={false}
              title={dictionary.story.rebirth.title}
              decorated
              subtitle={`${dictionary.story.rebirth.p1}`}
              subtitles={[dictionary.story.rebirth.p2]}
            />

            {/* Image placeholder */}
            <div className="aspect-[4/3] bg-pietra italian-frame">
              <div className="w-full h-full flex items-center justify-center text-ferro/40">
                [Foto restauro / artigiano al lavoro]
              </div>
            </div>
          </div>
        </div>
      </SectionWithLogo>
      {/* Sogno */}
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
              <SectionTitle
                subtitleSize="text-[16px]"
                centered={false}
                title={dictionary.story.dreams.title}
                decorated
                subtitle={`${dictionary.story.dreams.p1}`}
                subtitles={[dictionary.story.dreams.p2]}
              />
            </div>
          </div>
        </div>
      </SectionWithLogo>

      {/* Luxury B&B */}
      <SectionWithLogo
        className="bg-bianco-latte"
        logoPosition="center"
        logoOpacity={0.05}
        logoSize="xl"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text */}
            <SectionTitle
              subtitleSize="text-[16px]"
              centered={false}
              title={dictionary.story["luxuryb&b"].title}
              decorated
              subtitle={dictionary.story["luxuryb&b"].p1}
              subtitles={[dictionary.story["luxuryb&b"].p2]}
            />

            {/* Image placeholder */}
            <div className="aspect-[4/3] bg-pietra italian-frame">
              <div className="w-full h-full flex items-center justify-center text-ferro/40">
                [Foto restauro / artigiano al lavoro]
              </div>
            </div>
          </div>
        </div>
      </SectionWithLogo>

      <SectionWithLogo
        logoPosition="center"
        logoOpacity={0.2}
        logoSize="xl"
        className="section bg-verde-bosco text-bianco-latte"
      >
        <div className="container text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6">
            {locale === "it" ? "Vivi La Dolce Vita" : "Live La Dolce Vita"}
          </h2>
          <Link
            href={`/${locale}/esperienze`}
            className="btn bg-bianco-latte text-ferro hover:bg-crema"
          >
            {dictionary.cta.discoverExperiences}
          </Link>
        </div>
      </SectionWithLogo>
    </>
  );
}
