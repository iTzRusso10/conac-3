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

  return (
    <>
      {/* Page Hero */}
      <PageHero
        title={dictionary.dolcevita.hero.headline}
        subtitle={dictionary.dolcevita.hero.subhead}
        image="/images/hero-dolcevita.jpg"
      />

      <SectionWithLogo
        logoPosition="center"
        logoOpacity={0.05}
        logoSize="lg"
        className=" bg-crema pt-0!"
      >
        <div className="container px-4 lg:px-8 py-12 lg:py-16 flex flex-col gap-8">
          {/* Title */}
          <div className="text-center">
            <SectionTitle
              subtitle={dictionary.dolcevita.breakfast.intro}
              decorated
              title={dictionary.dolcevita.breakfast.title}
            />
          </div>

          {/* Griglia 4 foto */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-[-60px]">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="relative h-56 md:h-64 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src="/images/pia.png"
                  alt={`Breakfast ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* intro2 — centrato */}
          <p className="text-center max-w-2xl mx-auto">
            {dictionary.dolcevita.breakfast.intro2}
          </p>

          {/* Griglia 2 foto */}
          <div className="grid grid-cols-2 gap-4">
            {[1, 2].map((i) => (
              <div
                key={i}
                className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image
                  src="/images/pia.png"
                  alt={`Breakfast ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* 1 foto larga */}
          <div className="relative w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/pia.png"
              alt="Breakfast"
              fill
              className="object-cover"
            />
          </div>

          {/* intro3 — centrato */}
          <p className="text-center max-w-2xl mx-auto">
            {dictionary.dolcevita.breakfast.intro3}
          </p>

          {/* Ultimo blocco: foto sx | intro4 dx */}
          <div className="flex text-center flex-col gap-6 md:grid md:grid-cols-2 md:items-center md:gap-8">
            <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/pia.png"
                alt="Breakfast"
                fill
                className="object-cover"
              />
            </div>
            <p className="leading-relaxed">
              {dictionary.dolcevita.breakfast.intro4}
            </p>
          </div>
        </div>
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
