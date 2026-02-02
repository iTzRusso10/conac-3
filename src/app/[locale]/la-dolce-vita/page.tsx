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

      {/* Manifesto */}
      <div className="container pt-14 mx-auto flex flex-col md:flex-row md:items-center gap-10 lg:gap-16">
        <div className="w-full md:w-1/2 lg:w-7/12">
          <SectionTitle
            decorated
            title={dictionary.dolcevita.manifesto.title}
            subtitle={dictionary.dolcevita.manifesto.intro}
            subtitles={[
              dictionary.dolcevita.manifesto.intro2,
              dictionary.dolcevita.manifesto.intro3,
            ]}
          />
        </div>
        <div className="w-full md:w-1/2 lg:w-5/12 md:shrink-0">
          <Image
            src="/images/pia.png"
            alt="La Dolce Vita"
            width={700}
            height={840}
            className="w-full h-auto object-cover rounded-2xl "
            sizes="(min-width: 1280px) 420px, (min-width: 768px) 40vw, 100vw"
          />
        </div>
      </div>

      <LogoDivider />

      {/* I Cinque Sensi */}
      <section className="section bg-bianco-latte">
        <div className="container">
          <SectionTitle
            centeredTitle={true}
            subtitleSize="text-[16px]"
            title={dictionary.dolcevita.senses.title}
            decorated
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {senses.map(({ key, icon: Icon }) => (
              <div key={key} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-crema border border-pietra flex items-center justify-center transition-all duration-300 group-hover:bg-verde-bosco group-hover:border-verde-bosco">
                  <Icon
                    size={32}
                    className="text-ferro/70 transition-colors group-hover:text-bianco-latte"
                  />
                </div>
                <h3 className="font-serif text-xl text-ferro mb-3">
                  {dictionary.dolcevita.senses[key].name}
                </h3>
                <p className="text-ferro/70 text-sm leading-relaxed">
                  {dictionary.dolcevita.senses[key].text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
