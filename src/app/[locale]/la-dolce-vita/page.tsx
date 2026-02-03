import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary } from "@/i18n/getDictionary";
import { locales, type Locale } from "@/i18n/config";
import PageHero from "@/components/ui/PageHero";
import { Eye, Ear, Wind, Coffee, Hand } from "lucide-react";
import { LogoDivider, SectionWithLogo } from "@/components/ui/LogoDecorations";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";

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
    title: "La Dolce Vita",
    description:
      locale === "it"
        ? "La Dolce Vita non è nostalgia, è un modo di vivere. Scopri la filosofia del nostro casolare: lentezza, autenticità, piacere dei sensi."
        : "La Dolce Vita is not nostalgia — it's a way of living. Discover our farmhouse philosophy: slowness, authenticity, pleasure of the senses.",
  };
}

export default async function DolceVitaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = (
    locales.includes(localeParam as Locale) ? localeParam : "it"
  ) as Locale;
  const dictionary = await getDictionary(locale);

  const senses = [
    { key: "sight", icon: Eye },
    { key: "sound", icon: Ear },
    { key: "smell", icon: Wind },
    { key: "taste", icon: Coffee },
    { key: "touch", icon: Hand },
  ] as const;

  const imagesRow = [
    "/images/dolcevita/1.jpg",
    "/images/dolcevita/2.webp",
    "/images/dolcevita/3.webp",
    "/images/dolcevita/4.webp",
  ];

  const imagesRow2 = [
    "/images/dolcevita/5.webp",
    "/images/dolcevita/7.webp",
    "/images/dolcevita/8.webp",
    "/images/dolcevita/9.webp",
  ];

  return (
    <>
      {/* Page Hero */}
      <PageHero
        title={dictionary.dolcevita.hero.headline}
        subtitle={dictionary.dolcevita.hero.subhead}
        image="/images/dolcevita/6.webp"
        imageClassName="bg-bottom!"
      />

      <SectionWithLogo
        logoPosition="center"
        logoOpacity={0.05}
        logoSize="lg"
        className="bg-crema pt-0! pb-0!"
      >
        <LogoDivider className="pt-10" />

        {/* MOBILE - invariato */}
        <div className="lg:hidden flex flex-col gap-8">
          <div className="text-center">
            <SectionTitle
              subtitle={dictionary.dolcevita.breakfast.intro}
              decorated
              title={dictionary.dolcevita.breakfast.title}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-[-60px]">
            {imagesRow.map((image, i) => (
              <div key={i} className="relative h-56 overflow-hidden shadow-lg">
                <Image
                  src={image}
                  alt={`Breakfast ${i}`}
                  fill
                  className="object-cover object-bottom"
                />
              </div>
            ))}
          </div>

          <p className="text-center max-w-2xl mx-auto">
            {dictionary.dolcevita.breakfast.intro2}
          </p>

          <div className="grid grid-cols-1 gap-4">
            <div className="relative h-64 overflow-hidden shadow-lg">
              <Image
                src={imagesRow2[0]}
                alt="Breakfast 1"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-64 overflow-hidden shadow-lg">
              <Image
                src={imagesRow2[1]}
                alt="Breakfast 2"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex items-center justify-center text-center">
              <p className="text-lg leading-relaxed">
                {dictionary.dolcevita.breakfast.intro3}
              </p>
            </div>

            <div className="flex items-center justify-center text-center">
              <p className="text-lg leading-relaxed">
                {dictionary.dolcevita.breakfast.intro4}
              </p>
            </div>

            <div className="relative h-64 overflow-hidden shadow-lg">
              <Image
                src={imagesRow2[2]}
                alt="Breakfast 3"
                fill
                className="object-cover"
              />
            </div>

            <div className="relative h-64 overflow-hidden shadow-lg">
              <Image
                src={imagesRow2[3]}
                alt="Breakfast 4"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* DESKTOP - layout compatto e arioso */}
        <div className="hidden lg:block lg:px-8 lg:py-12">
          <div className="max-w-6xl mx-auto flex flex-col gap-10">
            {/* Title */}
            <div className="text-center">
              <SectionTitle
                subtitle={dictionary.dolcevita.breakfast.intro}
                decorated
                title={dictionary.dolcevita.breakfast.title}
              />
            </div>

            {/* Griglia 4 foto - più compatta */}
            <div className="grid grid-cols-4 gap-4">
              {imagesRow.map((image, i) => (
                <div
                  key={i}
                  className="relative h-48 overflow-hidden shadow-lg"
                >
                  <Image
                    src={image}
                    alt={`Breakfast ${i}`}
                    fill
                    className="object-cover object-bottom"
                  />
                </div>
              ))}
            </div>

            {/* intro2 */}
            <p className="text-center max-w-3xl mx-auto text-lg leading-relaxed">
              {dictionary.dolcevita.breakfast.intro2}
            </p>

            {/* Layout alternato immagini + testo */}
            <div className="grid grid-cols-3 gap-6 items-center">
              {/* Prima riga: img - testo - img */}
              <div className="relative h-72 overflow-hidden shadow-lg">
                <Image
                  src={imagesRow2[0]}
                  alt="Breakfast 1"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-center justify-center text-center px-6">
                <p className="text-lg leading-relaxed">
                  {dictionary.dolcevita.breakfast.intro3}
                </p>
              </div>

              <div className="relative h-72 overflow-hidden shadow-lg">
                <Image
                  src={imagesRow2[1]}
                  alt="Breakfast 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-6 items-center">
              {/* Seconda riga: img - testo - img (invertito) */}
              <div className="relative h-72 overflow-hidden shadow-lg">
                <Image
                  src={imagesRow2[2]}
                  alt="Breakfast 3"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex items-center justify-center text-center px-6">
                <p className="text-lg leading-relaxed">
                  {dictionary.dolcevita.breakfast.intro4}
                </p>
              </div>

              <div className="relative h-72 overflow-hidden shadow-lg">
                <Image
                  src={imagesRow2[3]}
                  alt="Breakfast 4"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <LogoDivider />
      </SectionWithLogo>
      {/* Colazione / Breakfast */}

      {/* CTA */}
      <SectionWithLogo
        logoPosition="center"
        logoOpacity={0.1}
        logoSize="xl"
        className=" bg-verde-bosco text-bianco-latte"
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
