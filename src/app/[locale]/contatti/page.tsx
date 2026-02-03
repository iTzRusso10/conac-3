import type { Metadata } from "next";
import { getDictionary } from "@/i18n/getDictionary";
import { locales, type Locale } from "@/i18n/config";
import PageHero from "@/components/ui/PageHero";
import {
  MapPin,
  Phone,
  Mail,
  Car,
  Plane,
  Train,
  ParkingCircle,
  ChevronDown,
} from "lucide-react";
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
    title: locale === "it" ? "Contatti & Prenotazioni" : "Contact & Bookings",
    description:
      locale === "it"
        ? "Contattaci per informazioni o prenotazioni. Verifica la disponibilità delle nostre suite nelle Langhe piemontesi."
        : "Contact us for information or bookings. Check availability for our suites in Piedmont's Langhe.",
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: localeParam } = await params;
  const locale = (
    locales.includes(localeParam as Locale) ? localeParam : "it"
  ) as Locale;
  const dictionary = await getDictionary(locale);

  const faqItems = [
    { q: dictionary.contact.faq.q1, a: dictionary.contact.faq.a1 },
    { q: dictionary.contact.faq.q2, a: dictionary.contact.faq.a2 },
    { q: dictionary.contact.faq.q3, a: dictionary.contact.faq.a3 },
    { q: dictionary.contact.faq.q4, a: dictionary.contact.faq.a4 },
    { q: dictionary.contact.faq.q5, a: dictionary.contact.faq.a5 },
  ];

  return (
    <>
      <PageHero
        title={dictionary.contact.hero.headline}
        subtitle={dictionary.contact.hero.subhead}
      />

      {/* FORM + INFO */}
      <SectionWithLogo
        logoOpacity={0.1}
        logoPosition="center"
        className="section bg-crema"
      >
        <div className="container max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* LEFT COLUMN */}
            <div className="lg:col-span-7 space-y-10">
              <h2 className="font-serif text-3xl text-ferro">
                {dictionary.contact.info.title}
              </h2>

              {/* CONTACT DETAILS */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="text-verde-bosco mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-ferro mb-1">
                      {dictionary.contact.info.address}
                    </h4>
                    <p className="text-ferro/70">
                      [Nome Casolare]
                      <br />
                      [Via/Strada], [Numero]
                      <br />
                      [CAP] [Comune], Piemonte
                      <br />
                      Italia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-verde-bosco mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-ferro mb-1">
                      {dictionary.contact.info.phone}
                    </h4>
                    <a
                      href="tel:+390000000000"
                      className="text-ferro/70 hover:text-verde-bosco transition-colors"
                    >
                      +39 000 000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-verde-bosco mt-1" size={20} />
                  <div>
                    <h4 className="font-medium text-ferro mb-1">
                      {dictionary.contact.info.email}
                    </h4>
                    <a
                      href="mailto:info@nomecasolare.it"
                      className="text-ferro/70 hover:text-verde-bosco transition-colors"
                    >
                      info@nomecasolare.it
                    </a>
                  </div>
                </div>
              </div>

              {/* HOW TO REACH */}

              {/* MAP */}
              <div className="aspect-video italian-frame overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2823.8!2d7.9607638!3d45.0408778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4787dd9aa9908199%3A0x14c6389a842db8db!2sRelais%20Conac%201888!5e0!3m2!1sit!2sit!4v1706000000000!5m2!1sit!2sit"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location"
                />
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-5">
              <div className="lg:top-28">
                <div className="bg-bianco-latte p-6 italian-frame">
                  <h3 className="font-serif text-xl text-ferro mb-4">
                    {dictionary.contact.info.howToReach}
                  </h3>
                  <div className="space-y-3 text-sm text-ferro/70">
                    <div className="flex items-center gap-3">
                      <Car size={16} className="text-verde-bosco" />
                      <span>
                        <strong>{dictionary.contact.info.fromTurin}:</strong> 80
                        km, ~1 ora
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Car size={16} className="text-verde-bosco" />
                      <span>
                        <strong>{dictionary.contact.info.fromMilan}:</strong>{" "}
                        160 km, ~2 ore
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Plane size={16} className="text-verde-bosco" />
                      <span>
                        <strong>{dictionary.contact.info.airport}:</strong>{" "}
                        Torino Caselle (90 km)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Train size={16} className="text-verde-bosco" />
                      <span>
                        <strong>{dictionary.contact.info.train}:</strong> Alba
                        (15 km)
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <ParkingCircle size={16} className="text-verde-bosco" />
                      <span>
                        <strong>{dictionary.contact.info.parking}:</strong>{" "}
                        {dictionary.contact.info.parkingNote}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SectionWithLogo>

      {/* FAQ */}
      <section className="section bg-bianco-latte">
        <div className="container max-w-6xl">
          <h2 className="font-serif text-3xl text-ferro text-center mb-12">
            {dictionary.contact.faq.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="group bg-crema rounded-sm overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-medium text-ferro pr-4">{item.q}</span>
                  <ChevronDown
                    size={20}
                    className="text-ferro/50 transition-transform group-open:rotate-180"
                  />
                </summary>
                <div className="px-5 pb-5 text-ferro/70">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
