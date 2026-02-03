import Image from "next/image";
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

  const rowImaes = [
    "/images/home/11.webp",
    "/images/home/2.webp",
    "/images/home/3.webp",
    "/images/home/4.webp",
  ];

  const rowImaes2 = [
    "/images/home/13.jpg",
    "/images/home/14.jpg",
    "/images/home/17.jpg",
  ];

  const rowImaes3 = ["/images/home/13.jpg", "/images/home/14.jpg"];
  return (
    <>
      {/* HERO */}
      <Hero
        headline={dictionary.home.hero.headline}
        subhead={dictionary.home.hero.subhead}
        cta={{
          label: dictionary.cta.bookExperience,
          href: `/${locale}/suite`,
        }}
        video="/images/hero/hero-videos.mp4"
        showBrandName
      />

      {/* INTRO */}
      <SectionWithLogo className="bg-crema pt-1! md:pt-20! ">
        <SectionTitle title={dictionary.home.intro.title} decorated />

        <div className="flex flex-col gap-10 mt-10 lg:px-8">
          <div className="flex flex-col gap-8 lg:grid lg:place-items-center lg:gap-10">
            <p className="italic lg:block text-center lg:max-w-sm">
              &quot;{dictionary.home.intro.p1}&quot;
            </p>
          </div>

          {/* immagini secondarie */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {rowImaes.map((src, i) => (
              <div
                key={i}
                className="relative h-36 lg:h-44 rounded-2xl overflow-hidden"
              >
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>

          {/* blocco narrativo */}
          <div className="relative">
            <div className="relative bg-top h-72 lg:h-[420px] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/home/20.jpg"
                alt=""
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="mt-6 lg:absolute lg:bottom-10 lg:right-10 lg:max-w-lg text-center">
              <div className="bg-crema/95 backdrop-blur rounded-2xl p-8 shadow-lg">
                <p>{dictionary.home.intro.p3}</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <p className="italic text-center">{dictionary.home.intro.p4}</p>
          </div>
        </div>
      </SectionWithLogo>

      <LogoDivider />

      {/* MANIFESTO */}
      <SectionWithLogo className="bg-bianco-latte ">
        <SectionTitle title={dictionary.home.manifesto.title} decorated />
        <div className="flex justify-center flex-col gap-2 items-center">
          <p className="text-center">
            &quot;{dictionary.home.manifesto.intro}&quot;
          </p>
          <RusticFrame className="mt-4">
            <p className="text-center">{dictionary.home.manifesto.intro2}</p>
          </RusticFrame>
        </div>

        {/* MOBILE */}
        <div className="mt-12 md:hidden">
          <div className="grid grid-cols-2 gap-4">
            {rowImaes3.map((src, i) => (
              <div
                key={i}
                className="relative h-40 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>

          <div className="relative h-52 rounded-2xl overflow-hidden shadow-lg mt-4 w-full mx-auto">
            <Image
              src="/images/home/17.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-6">
            <div className="mt-4 text-center">
              <p>{dictionary.home.manifesto.p1}</p>
            </div>

            <div className="col-span-5 relative h-64 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/home/9.webp"
                alt=""
                fill
                className="object-cover w-full"
              />
            </div>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden md:block px-8 mt-16">
          <div className="grid grid-cols-3 gap-6 max-w-5xl mx-auto">
            {rowImaes2.map((src, i) => (
              <div
                key={i}
                className="relative h-56 rounded-2xl overflow-hidden shadow-lg"
              >
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-12 gap-8 mt-16 items-center">
            <div className="col-span-7 text-center">
              <p>{dictionary.home.manifesto.p1}</p>
            </div>

            <div className="col-span-5 relative h-64 rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/images/home/9.webp"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </SectionWithLogo>

      <LogoDivider />

      {/* AUTORE */}
      <SectionWithLogo className=" bg-crema text-center pt-0!">
        <SectionTitle title={dictionary.home.author_details.title} decorated />

        <div className="flex flex-col gap-6 mt-12 md:grid md:grid-cols-2 md:gap-10 md:items-center">
          <p className="px-4 md:px-0">{dictionary.home.author_details.intro}</p>
          <div className="relative h-72 md:h-[420px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/images/home/1.webp"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 mt-10 md:grid md:grid-cols-2 md:gap-10 md:items-center">
          <p className="px-4 md:px-0 md:order-2">
            {dictionary.home.author_details.p1}
          </p>
          <div className="relative h-72 md:h-[420px] rounded-3xl overflow-hidden shadow-xl md:order-1">
            <Image
              src="/images/home/16.webp"
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>
      </SectionWithLogo>

      <LogoDivider />

      {/* CTA FINALE */}
      <section className="section bg-verde-bosco text-bianco-latte relative overflow-hidden">
        <LogoWatermark position="center" opacity={0.1} size="xl" />

        <div className="relative z-10 px-4 md:px-8">
          <div className="max-w-3xl">
            <h2 className="font-serif text-4xl md:text-5xl mb-6">
              {dictionary.home.final.title}
            </h2>
            <p>{dictionary.home.final.text}</p>
            <Link
              href={`/${locale}/contatti`}
              className="btn bg-bianco-latte text-verde-bosco"
            >
              {dictionary.cta.checkAvailability}
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 opacity-10 hidden md:block">
          <OliveBranch className="w-40 h-14 text-bianco-latte" />
        </div>
      </section>
    </>
  );
}
