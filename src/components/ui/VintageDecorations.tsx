'use client';

import { motion } from 'framer-motion';

// Ornamento floreale SVG
export function FloralOrnament({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: 'w-20 h-6',
    md: 'w-32 h-8',
    lg: 'w-48 h-12',
  };

  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${sizes[size]} ${className}`}
      viewBox="0 0 120 30"
      fill="none"
    >
      <path
        d="M60 15 Q50 5, 40 15 Q30 25, 20 15 Q10 5, 5 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M60 15 Q70 5, 80 15 Q90 25, 100 15 Q110 5, 115 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="60" cy="15" r="4" fill="currentColor" />
      <circle cx="60" cy="15" r="2" fill="none" stroke="currentColor" strokeWidth="0.5" />
    </motion.svg>
  );
}

// Divisore di sezione elegante
export function SectionDivider({ variant = 'diamond' }: { variant?: 'diamond' | 'leaf' | 'star' | 'ornate' }) {
  const symbols = {
    diamond: '◆',
    leaf: '❦',
    star: '✦',
    ornate: '❧',
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-8 flex items-center justify-center"
    >
      <div className="absolute left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-pietra to-transparent" />
      <span className="relative z-10 bg-crema px-6 text-terracotta text-xl">
        {symbols[variant]}
      </span>
    </motion.div>
  );
}

// Cornice decorativa per testi importanti
export function VintageFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative ${className}`}
    >
      {/* Angoli decorativi */}
      <div className="absolute -top-3 -left-3 w-8 h-8 border-l-2 border-t-2 border-terracotta rounded-tl-lg" />
      <div className="absolute -top-3 -right-3 w-8 h-8 border-r-2 border-t-2 border-terracotta rounded-tr-lg" />
      <div className="absolute -bottom-3 -left-3 w-8 h-8 border-l-2 border-b-2 border-terracotta rounded-bl-lg" />
      <div className="absolute -bottom-3 -right-3 w-8 h-8 border-r-2 border-b-2 border-terracotta rounded-br-lg" />
      
      <div className="bg-bianco-latte/80 backdrop-blur-sm rounded-lg p-8 border border-pietra-light">
        {children}
      </div>
    </motion.div>
  );
}

// Quote box elegante
export function ElegantQuote({ children, author }: { children: React.ReactNode; author?: string }) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative pl-8 py-6 border-l-4 border-terracotta bg-bianco-latte/50 rounded-r-lg"
    >
      <span className="absolute top-2 left-4 text-6xl font-serif text-terracotta/20 leading-none">
        "
      </span>
      <div className="relative z-10 font-body italic text-lg text-ferro/80 leading-relaxed">
        {children}
      </div>
      {author && (
        <footer className="mt-4 font-serif text-sm text-terracotta">
          — {author}
        </footer>
      )}
    </motion.blockquote>
  );
}

// Bordo decorativo per immagini
export function ImageFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative group ${className}`}>
      {/* Cornice esterna */}
      <div className="absolute -inset-4 border border-pietra/50 rounded-xl" />
      
      {/* Contenuto */}
      <div className="relative rounded-lg overflow-hidden shadow-xl">
        {children}
      </div>
      
      {/* Ornamento angolo */}
      <div className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center">
        <span className="text-terracotta text-lg">✦</span>
      </div>
      <div className="absolute -bottom-2 -left-2 w-6 h-6 flex items-center justify-center">
        <span className="text-terracotta text-lg">✦</span>
      </div>
    </div>
  );
}

// Card con decorazione superiore
export function DecorativeCard({ 
  children, 
  title,
  className = '' 
}: { 
  children: React.ReactNode; 
  title?: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative bg-bianco-latte rounded-2xl overflow-hidden shadow-lg border border-pietra-light ${className}`}
    >
      {/* Banda decorativa superiore */}
      <div className="h-2 bg-gradient-to-r from-terracotta via-oro to-terracotta" />
      
      {/* Ornamento centrale */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-10 h-10 bg-bianco-latte rounded-full border-2 border-terracotta flex items-center justify-center">
          <span className="text-terracotta">❦</span>
        </div>
      </div>
      
      <div className="p-8 pt-10">
        {title && (
          <h3 className="font-serif text-2xl text-ferro text-center mb-4">{title}</h3>
        )}
        {children}
      </div>
    </motion.div>
  );
}

// Testo con highlight
export function HighlightText({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative">
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-0 left-0 right-0 h-3 bg-terracotta/20 -z-0" />
    </span>
  );
}

// Badge vintage
export function VintageBadge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 px-4 py-2 bg-crema border border-terracotta rounded-full font-serif text-sm text-terracotta ${className}`}>
      <span className="text-xs">✦</span>
      {children}
      <span className="text-xs">✦</span>
    </span>
  );
}

// Linea decorativa orizzontale
export function DecorativeLine({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-pietra" />
      <div className="w-2 h-2 bg-terracotta rotate-45" />
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-pietra" />
    </div>
  );
}
