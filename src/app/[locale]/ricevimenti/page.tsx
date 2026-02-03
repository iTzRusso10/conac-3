import type { Metadata } from "next";
import { getDictionary } from "@/i18n/getDictionary";
import { locales, type Locale } from "@/i18n/config";
import PageHero from "@/components/ui/PageHero";
import EventForm from "@/components/ui/EventForm";
import { Heart, Users, Sunset, Utensils, Check } from "lucide-react";
import Image from "next/image";
import { SectionWithLogo } from "@/components/ui/LogoDecorations";

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
    title: locale === "it" ? "Ricevimenti & Eventi" : "Events & Celebrations",
    description:
      locale === "it"
        ? "Organizza il tuo evento esclusivo: matrimoni intimi, cene romantiche, aperitivi a bordo piscina. Location unica nelle Langhe piemontesi."
        : "Host your exclusive event: intimate weddings, romantic dinners, poolside aperitifs. A unique venue in Piedmont's Langhe.",
  };
}

export default async function EventsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = (
    locales.includes(localeParam as Locale) ? localeParam : "it"
  ) as Locale;
  const dictionary = await getDictionary(locale);

  const weddingHighlights = Object.values(dictionary.events.wedding.highlights);

  return (
    <>
      {/* Page Hero */}
      <PageHero
        title={dictionary.events.hero.headline}
        subtitle={dictionary.events.hero.subhead}
        image="/images/momenti/5.jpeg"
        imageClassName=""
      />

      {/* Matrimoni Intimi */}
      <SectionWithLogo
        logoOpacity={0.1}
        logoPosition="center"
        className="section bg-crema"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="aspect-[4/3] bg-pietra italian-frame">
            <div className="w-full h-full flex items-center justify-center text-ferro/40">
              <Image
                src="/images/momenti/4.jpeg"
                width={1000}
                height={1000}
                alt="Pia"
                className=" object-cover w-full h-full object-center"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Heart className="text-terracotta" size={24} />
              <h2 className="font-serif text-3xl md:text-4xl text-ferro">
                {dictionary.events.wedding.title}
              </h2>
            </div>

            <div className="space-y-4 text-ferro/80 leading-relaxed mb-8">
              <p className="font-serif italic text-xl text-ferro">
                {dictionary.events.wedding.p1}
              </p>
              <p>{dictionary.events.wedding.p2}</p>
              <p>{dictionary.events.wedding.p3}</p>
              <p>{dictionary.events.wedding.p4}</p>
            </div>

            {/* Highlights */}
            <ul className="space-y-3">
              {weddingHighlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3 text-ferro/80">
                  <Check
                    size={18}
                    className="text-verde-bosco mt-0.5 flex-shrink-0"
                  />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWithLogo>

      {/* Feste Private */}
      <SectionWithLogo
        logoOpacity={0.1}
        logoPosition="center"
        className="section bg-bianco-latte"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-terracotta" size={24} />
              <h2 className="font-serif text-3xl md:text-4xl text-ferro">
                {dictionary.events.party.title}
              </h2>
            </div>
            <div className="space-y-4 text-ferro/80 leading-relaxed">
              <p>{dictionary.events.party.p1}</p>
              <p>{dictionary.events.party.p2}</p>
            </div>
          </div>

          {/* Image */}
          <div className="aspect-[4/3] bg-pietra italian-frame order-1 lg:order-2">
            <div className="w-full h-full flex items-center justify-center text-ferro/40">
              <Image
                src="/images/momenti/3.jpeg"
                width={1000}
                height={1000}
                alt="Pia"
                className=" object-cover w-full h-full object-center"
              />
            </div>
          </div>
        </div>
      </SectionWithLogo>

      {/* Aperitivo e Cena */}
      <SectionWithLogo
        logoOpacity={0.1}
        logoPosition="center"
        className="section bg-crema"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Aperitivo */}
          <div className="bg-bianco-latte p-6 italian-frame">
            <div className="flex items-center gap-3 mb-4">
              <Sunset className="text-terracotta" size={24} />
              <h3 className="font-serif text-2xl text-ferro">
                {dictionary.events.aperitivo.title}
              </h3>
            </div>
            <div className="space-y-3 text-ferro/80">
              <p>{dictionary.events.aperitivo.p1}</p>
              <p className="font-serif italic text-lg text-ferro">
                {dictionary.events.aperitivo.p2}
              </p>
            </div>
            <Image
              src="/images/momenti/2.jpeg"
              width={1000}
              height={1000}
              alt="Pia"
              className="mt-4 object-cover w-full aspect-square md:aspect-video object-center"
            />
          </div>

          {/* Cena */}
          <div className="bg-bianco-latte p-6 italian-frame">
            <div className="flex items-center gap-3 mb-4">
              <Utensils className="text-terracotta" size={24} />
              <h3 className="font-serif text-2xl text-ferro">
                {dictionary.events.dinner.title}
              </h3>
            </div>
            <div className="space-y-3 text-ferro/80">
              <p>{dictionary.events.dinner.p1}</p>
              <p className="font-serif italic text-lg text-ferro">
                {dictionary.events.dinner.p2}
              </p>
            </div>
            <Image
              src="/images/momenti/1.jpeg"
              width={1000}
              height={1000}
              alt="Pia"
              className="mt-4 object-cover w-full aspect-square md:aspect-video object-center"
            />
          </div>
        </div>
      </SectionWithLogo>
    </>
  );
}
