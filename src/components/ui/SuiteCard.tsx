'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Suite } from '@/data/suites';
import type { Locale } from '@/i18n/config';

interface SuiteCardProps {
  suite: Suite;
  translations: {
    name: string;
    tagline: string;
    soul: string;
  };
  ctaLabel: string;
  locale: Locale;
  index?: number;
}

export default function SuiteCard({
  suite,
  translations,
  ctaLabel,
  locale,
  index = 0,
}: SuiteCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link href={`/${locale}/suite/${suite.slug}`} className="block">
        {/* Image Container */}
        <div className="relative overflow-hidden rounded-xl shadow-md group-hover:shadow-lg transition-shadow">
          <div className="aspect-[4/3] overflow-hidden">
            {/* Placeholder per immagine */}
            <div
              className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundColor: suite.color }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-bianco-latte/70 font-serif text-2xl italic">
                  {translations.name}
                </span>
              </div>
            </div>
          </div>
          
          {/* Badge anima - stile rustico */}
          <div className="absolute top-3 left-3 px-3 py-1 bg-bianco-latte/90 backdrop-blur-sm rounded-full shadow-sm">
            <span className="text-xs font-sans text-verde-bosco font-medium">
              {translations.soul.split(',')[0]}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="mt-5">
          {/* Nome suite */}
          <h3 className="font-serif text-xl md:text-2xl text-ferro group-hover:text-verde-bosco transition-colors">
            {translations.name}
          </h3>
          
          {/* Tagline */}
          <p className="mt-2 font-body text-ferro/65 text-sm leading-relaxed italic">
            "{translations.tagline}"
          </p>

          {/* CTA */}
          <div className="mt-4 flex items-center gap-2 text-verde-bosco text-sm font-sans">
            <span>{ctaLabel}</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
