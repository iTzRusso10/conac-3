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
    large: 'min-h-[80vh]',
    medium: 'min-h-[55vh]',
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
        <div className="absolute inset-0 bg-gradient-to-br from-verde-bosco/30 via-crema to-pietra/40" />
      )}

      {/* Overlay naturale */}
      {overlay && image && (
        <div className="absolute inset-0 bg-gradient-to-t from-ferro/60 via-ferro/25 to-ferro/10" />
      )}

      {/* Content */}
      <div className="container relative z-10">
        <div
          className={`flex flex-col ${alignClasses[align]} max-w-3xl ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`font-serif text-4xl md:text-5xl lg:text-6xl leading-tight ${
              image ? 'text-bianco-latte' : 'text-ferro'
            }`}
          >
            {headline}
          </motion.h1>

          {subhead && (
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className={`mt-5 text-lg md:text-xl font-body leading-relaxed max-w-xl ${
                image ? 'text-crema/90' : 'text-ferro/75'
              }`}
            >
              {subhead}
            </motion.p>
          )}

          {cta && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8"
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

      {/* Scroll indicator - semplice */}
      {height === 'full' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className={`w-6 h-10 border-2 rounded-full flex justify-center pt-2 ${
              image ? 'border-bianco-latte/50' : 'border-ferro/30'
            }`}
          >
            <div className={`w-1 h-2 rounded-full ${image ? 'bg-bianco-latte/70' : 'bg-ferro/50'}`} />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
