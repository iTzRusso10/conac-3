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

      {/* Overlay */}
      {overlay && image && (
        <div className="absolute inset-0 bg-gradient-to-t from-ferro/60 via-ferro/30 to-ferro/10" />
      )}

      {/* Content */}
      <div className="container relative z-10">
        <div
          className={`flex flex-col ${alignClasses[align]} max-w-4xl ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
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

          {subhead && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className={`mt-6 md:mt-8 text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-2xl ${
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
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8 md:mt-10"
            >
              <Link
                href={cta.href}
                className={`btn ${
                  image
                    ? 'bg-bianco-latte text-ferro hover:bg-crema border-bianco-latte'
                    : 'btn-primary'
                }`}
              >
                {cta.label}
              </Link>
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      {height === 'full' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className={`w-6 h-10 rounded-full border-2 ${
              image ? 'border-bianco-latte/50' : 'border-ferro/30'
            } flex items-start justify-center p-2`}
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className={`w-1.5 h-1.5 rounded-full ${
                image ? 'bg-bianco-latte' : 'bg-ferro'
              }`}
            />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
