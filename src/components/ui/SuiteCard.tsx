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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="group"
    >
      <Link href={`/${locale}/suite/${suite.slug}`} className="block">
        {/* Image Container con cornice vintage */}
        <div className="relative">
          {/* Cornice esterna decorativa */}
          <div className="absolute -inset-3 border border-pietra/40 rounded-2xl transition-all duration-500 group-hover:border-terracotta/60" />
          
          {/* Angoli decorativi */}
          <div className="absolute -top-1 -left-1 w-6 h-6 border-l-2 border-t-2 border-terracotta rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -top-1 -right-1 w-6 h-6 border-r-2 border-t-2 border-terracotta rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -bottom-1 -left-1 w-6 h-6 border-l-2 border-b-2 border-terracotta rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 border-r-2 border-b-2 border-terracotta rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg border-4 border-bianco-latte">
            {/* Placeholder per immagine */}
            <div
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-110"
              style={{ backgroundColor: suite.color }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-bianco-latte/60 font-serif text-3xl italic">
                  {translations.name}
                </span>
              </div>
            </div>
            
            {/* Overlay gradiente */}
            <div className="absolute inset-0 bg-gradient-to-t from-ferro/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Badge anima */}
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-bianco-latte/90 backdrop-blur-sm rounded-full border border-pietra-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-xs font-serif text-terracotta tracking-wide">
                ✦ {translations.soul.split(',')[0]}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-6 px-1">
          {/* Nome suite */}
          <h3 className="font-serif text-2xl md:text-3xl text-ferro group-hover:text-verde-bosco transition-colors duration-300">
            {translations.name}
          </h3>
          
          {/* Linea decorativa */}
          <div className="my-3 flex items-center gap-2">
            <div className="h-px flex-1 bg-gradient-to-r from-terracotta/60 to-transparent" />
            <div className="w-1.5 h-1.5 bg-terracotta rotate-45" />
          </div>
          
          {/* Tagline */}
          <p className="font-body italic text-ferro/70 leading-relaxed">
            "{translations.tagline}"
          </p>

          {/* CTA */}
          <div className="mt-5 flex items-center gap-3 text-verde-bosco font-serif">
            <span className="text-sm tracking-wide">{ctaLabel}</span>
            <div className="w-8 h-px bg-verde-bosco transition-all duration-300 group-hover:w-12" />
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
