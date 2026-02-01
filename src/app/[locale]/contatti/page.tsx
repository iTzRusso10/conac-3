import type { Metadata } from 'next';
import { getDictionary } from '@/i18n/getDictionary';
import type { Locale } from '@/i18n/config';
import Hero from '@/components/ui/Hero';
import BookingForm from '@/components/ui/BookingForm';
import { MapPin, Phone, Mail, Car, Plane, Train, ParkingCircle, ChevronDown } from 'lucide-react';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'it' ? 'Contatti & Prenotazioni' : 'Contact & Bookings',
    description:
      locale === 'it'
        ? 'Contattaci per informazioni o prenotazioni. Verifica la disponibilità delle nostre suite nelle Langhe piemontesi.'
        : "Contact us for information or bookings. Check availability for our suites in Piedmont's Langhe.",
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
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
      {/* Hero */}
      <Hero
        headline={dictionary.contact.hero.headline}
        subhead={dictionary.contact.hero.subhead}
        height="medium"
      />

      {/* Form & Info */}
      <section className="section bg-crema">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Form */}
            <div>
              <h2 className="font-serif text-3xl text-ferro mb-8">
                {dictionary.contact.form.title}
              </h2>
              <BookingForm dictionary={dictionary} />

              {/* Booking Engine Placeholder */}
              <div className="mt-8 p-6 bg-pietra/20 border-2 border-dashed border-pietra rounded-sm">
                <p className="text-sm text-ferro/60 text-center">
                  {locale === 'it'
                    ? '[ Placeholder per integrazione Booking Engine / Channel Manager ]'
                    : '[ Placeholder for Booking Engine / Channel Manager integration ]'}
                </p>
                <p className="text-xs text-ferro/40 text-center mt-2">
                  {locale === 'it'
                    ? 'Es: Cloudbeds, Little Hotelier, Lodgify widget'
                    : 'E.g.: Cloudbeds, Little Hotelier, Lodgify widget'}
                </p>
              </div>
            </div>

            {/* Info */}
            <div>
              <h2 className="font-serif text-3xl text-ferro mb-8">
                {dictionary.contact.info.title}
              </h2>

              {/* Contact Details */}
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <MapPin className="text-verde-bosco mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-medium text-ferro mb-1">
                      {dictionary.contact.info.address}
                    </h4>
                    <p className="text-ferro/70">
                      [Nome Casolare]<br />
                      [Via/Strada], [Numero]<br />
                      [CAP] [Comune], Piemonte<br />
                      Italia
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-verde-bosco mt-1 flex-shrink-0" size={20} />
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
                  <Mail className="text-verde-bosco mt-1 flex-shrink-0" size={20} />
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

              {/* How to Reach */}
              <div className="bg-bianco-latte p-6 italian-frame mb-10">
                <h3 className="font-serif text-xl text-ferro mb-4">
                  {dictionary.contact.info.howToReach}
                </h3>
                <div className="space-y-3 text-sm text-ferro/70">
                  <div className="flex items-center gap-3">
                    <Car size={16} className="text-verde-bosco" />
                    <span>
                      <strong>{dictionary.contact.info.fromTurin}:</strong> 80 km, ~1 ora
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Car size={16} className="text-verde-bosco" />
                    <span>
                      <strong>{dictionary.contact.info.fromMilan}:</strong> 160 km, ~2 ore
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Plane size={16} className="text-verde-bosco" />
                    <span>
                      <strong>{dictionary.contact.info.airport}:</strong> Torino Caselle (90 km)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Train size={16} className="text-verde-bosco" />
                    <span>
                      <strong>{dictionary.contact.info.train}:</strong> Alba (15 km)
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ParkingCircle size={16} className="text-verde-bosco" />
                    <span>
                      <strong>{dictionary.contact.info.parking}:</strong>{' '}
                      {dictionary.contact.info.parkingNote}
                    </span>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="aspect-video bg-pietra italian-frame">
                <div className="w-full h-full flex items-center justify-center text-ferro/40">
                  [Mappa Google Maps]
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-bianco-latte">
        <div className="container">
          <h2 className="font-serif text-3xl text-ferro text-center mb-12">
            {dictionary.contact.faq.title}
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <details
                key={index}
                className="group bg-crema rounded-sm overflow-hidden"
              >
                <summary className="flex items-center justify-between p-5 cursor-pointer list-none">
                  <span className="font-medium text-ferro pr-4">{item.q}</span>
                  <ChevronDown
                    size={20}
                    className="text-ferro/50 transition-transform group-open:rotate-180 flex-shrink-0"
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
