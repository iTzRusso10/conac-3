'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroProps {
  headline: string;
  subhead?: string;
  cta?: {
    label: string;
    href: string;
  };
  image?: string;
  overlay?: boolean;
  height?: 'full' | 'large' | 'medium';
  align?: 'center' | 'left';
}

export default function Hero({
  headline,
  subhead,
  cta,
  image,
  overlay = true,
  height = 'large',
  align = 'center',
}: HeroProps) {
  const heightClasses = {
    full: 'min-h-screen',
    large: 'min-h-[85vh]',
    medium: 'min-h-[60vh]',
  };

  const alignClasses = {
    center: 'text-center items-center',
    left: 'text-left items-start',
  };

  return (
    <section
      className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}
    >
      {/* Background */}
      {image ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-verde-bosco/20 via-crema to-pietra/30" />
      )}

      {/* Overlay elegante */}
      {overlay && image && (
        <div className="absolute inset-0 bg-gradient-to-t from-ferro/70 via-ferro/30 to-ferro/20" />
      )}

      {/* Pattern decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cornice angoli */}
        <div className="absolute top-8 left-8 w-32 h-32 border-l border-t border-bianco-latte/20 rounded-tl-3xl" />
        <div className="absolute top-8 right-8 w-32 h-32 border-r border-t border-bianco-latte/20 rounded-tr-3xl" />
        <div className="absolute bottom-8 left-8 w-32 h-32 border-l border-b border-bianco-latte/20 rounded-bl-3xl" />
        <div className="absolute bottom-8 right-8 w-32 h-32 border-r border-b border-bianco-latte/20 rounded-br-3xl" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div
          className={`flex flex-col ${alignClasses[align]} max-w-4xl ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {/* Ornamento superiore */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`mb-6 ${image ? 'text-oro' : 'text-terracotta'} text-3xl`}
          >
            ❦
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight ${
              image ? 'text-bianco-latte' : 'text-ferro'
            }`}
          >
            {headline}
          </motion.h1>

          {/* Linea decorativa sotto titolo */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="my-6 flex items-center justify-center gap-4"
          >
            <div className={`h-px w-16 ${image ? 'bg-oro/50' : 'bg-terracotta/50'}`} />
            <div className={`w-2 h-2 rotate-45 ${image ? 'bg-oro' : 'bg-terracotta'}`} />
            <div className={`h-px w-16 ${image ? 'bg-oro/50' : 'bg-terracotta/50'}`} />
          </motion.div>

          {subhead && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className={`text-lg md:text-xl lg:text-2xl font-body italic leading-relaxed max-w-2xl ${
                image ? 'text-crema/90' : 'text-ferro/80'
              }`}
            >
              {subhead}
            </motion.p>
          )}

          {cta && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10"
            >
              <Link
                href={cta.href}
                className={`btn ${
                  image
                    ? 'bg-bianco-latte text-ferro hover:bg-crema border-2 border-bianco-latte'
                    : 'btn-primary'
                }`}
              >
                {cta.label}
              </Link>
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll indicator elegante */}
      {height === 'full' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
            className={`${image ? 'text-bianco-latte/60' : 'text-ferro/40'}`}
          >
            <svg width="24" height="40" viewBox="0 0 24 40" fill="none">
              <rect x="1" y="1" width="22" height="38" rx="11" stroke="currentColor" strokeWidth="2"/>
              <motion.circle
                animate={{ y: [0, 16, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
                cx="12" cy="12" r="4" fill="currentColor"
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
