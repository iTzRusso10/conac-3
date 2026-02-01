'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
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
        <div className="relative aspect-[4/3] overflow-hidden italian-frame">
          {/* Placeholder for image */}
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundColor: suite.color }}
          >
            {/* When you have images, replace with: */}
            {/* <Image
              src={suite.image}
              alt={translations.name}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            /> */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-bianco-latte/80 font-serif text-2xl italic">
                {translations.name}
              </span>
            </div>
          </div>
          
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-ferro/0 group-hover:bg-ferro/20 transition-colors duration-500" />
        </div>

        {/* Content */}
        <div className="mt-5">
          <h3 className="font-serif text-2xl text-ferro group-hover:text-verde-bosco transition-colors">
            {translations.name}
          </h3>
          
          <p className="mt-2 text-ferro/70 font-serif italic">
            {translations.tagline}
          </p>
          
          <p className="mt-3 text-sm text-pietra-dark uppercase tracking-wider">
            {translations.soul}
          </p>

          {/* CTA */}
          <div className="mt-4 flex items-center gap-2 text-verde-bosco">
            <span className="text-sm font-medium">{ctaLabel}</span>
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
