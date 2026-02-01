'use client';

import { motion } from 'framer-motion';

// Rametto d'ulivo - elemento rustico italiano
export function OliveBranch({ className = '', flip = false }: { className?: string; flip?: boolean }) {
  return (
    <motion.svg
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`w-24 h-8 ${flip ? 'scale-x-[-1]' : ''} ${className}`}
      viewBox="0 0 100 30"
      fill="none"
    >
      {/* Ramo */}
      <path
        d="M5 15 Q25 12, 50 15 Q75 18, 95 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Foglie */}
      <ellipse cx="20" cy="10" rx="6" ry="3" fill="currentColor" opacity="0.7" transform="rotate(-20 20 10)" />
      <ellipse cx="35" cy="18" rx="6" ry="3" fill="currentColor" opacity="0.7" transform="rotate(15 35 18)" />
      <ellipse cx="50" cy="12" rx="6" ry="3" fill="currentColor" opacity="0.7" transform="rotate(-10 50 12)" />
      <ellipse cx="65" cy="17" rx="6" ry="3" fill="currentColor" opacity="0.7" transform="rotate(20 65 17)" />
      <ellipse cx="80" cy="13" rx="6" ry="3" fill="currentColor" opacity="0.7" transform="rotate(-15 80 13)" />
    </motion.svg>
  );
}

// Grappolo d'uva stilizzato
export function GrapeVine({ className = '' }: { className?: string }) {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`w-12 h-16 ${className}`}
      viewBox="0 0 40 60"
      fill="none"
    >
      {/* Gambo */}
      <path d="M20 0 Q22 10, 20 20" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Foglia */}
      <path d="M20 8 Q30 5, 32 12 Q28 15, 20 12" fill="currentColor" opacity="0.6" />
      {/* Acini */}
      <circle cx="15" cy="28" r="5" fill="currentColor" opacity="0.8" />
      <circle cx="25" cy="28" r="5" fill="currentColor" opacity="0.8" />
      <circle cx="20" cy="35" r="5" fill="currentColor" opacity="0.8" />
      <circle cx="12" cy="38" r="5" fill="currentColor" opacity="0.7" />
      <circle cx="28" cy="38" r="5" fill="currentColor" opacity="0.7" />
      <circle cx="17" cy="45" r="5" fill="currentColor" opacity="0.6" />
      <circle cx="23" cy="45" r="5" fill="currentColor" opacity="0.6" />
      <circle cx="20" cy="52" r="4" fill="currentColor" opacity="0.5" />
    </motion.svg>
  );
}

// Sole toscano stilizzato
export function TuscanSun({ className = '', size = 'md' }: { className?: string; size?: 'sm' | 'md' | 'lg' }) {
  const sizes = { sm: 'w-6 h-6', md: 'w-10 h-10', lg: 'w-14 h-14' };
  
  return (
    <motion.svg
      initial={{ opacity: 0, rotate: -30 }}
      whileInView={{ opacity: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`${sizes[size]} ${className}`}
      viewBox="0 0 40 40"
      fill="none"
    >
      <circle cx="20" cy="20" r="8" fill="currentColor" />
      {[...Array(8)].map((_, i) => (
        <line
          key={i}
          x1="20"
          y1="20"
          x2={20 + 16 * Math.cos((i * Math.PI) / 4)}
          y2={20 + 16 * Math.sin((i * Math.PI) / 4)}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      ))}
    </motion.svg>
  );
}

// Divisore rustico con foglie
export function RusticDivider({ variant = 'leaves' }: { variant?: 'leaves' | 'vine' | 'simple' | 'sun' }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-8 flex items-center justify-center gap-4"
    >
      {variant === 'leaves' && (
        <>
          <OliveBranch className="text-verde-bosco/60" flip />
          <div className="w-2 h-2 rounded-full bg-terracotta" />
          <OliveBranch className="text-verde-bosco/60" />
        </>
      )}
      
      {variant === 'vine' && (
        <>
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-pietra" />
          <GrapeVine className="text-verde-bosco/50" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-pietra" />
        </>
      )}
      
      {variant === 'simple' && (
        <>
          <div className="h-px w-20 bg-pietra" />
          <div className="w-3 h-3 border-2 border-terracotta rotate-45" />
          <div className="h-px w-20 bg-pietra" />
        </>
      )}
      
      {variant === 'sun' && (
        <>
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-oro/50" />
          <TuscanSun className="text-oro" size="sm" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-oro/50" />
        </>
      )}
    </motion.div>
  );
}

// Cornice rustica in stile tegola/terracotta
export function RusticFrame({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative ${className}`}
    >
      {/* Bordo stile terracotta */}
      <div className="absolute -inset-1 bg-gradient-to-br from-terracotta/20 via-transparent to-terracotta/20 rounded-lg" />
      
      <div className="relative bg-bianco-latte/90 backdrop-blur-sm rounded-lg p-6 md:p-8 border border-pietra/50 shadow-sm">
        {/* Angolo decorativo semplice */}
        <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-terracotta/40 rounded-tl" />
        <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-terracotta/40 rounded-tr" />
        <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-terracotta/40 rounded-bl" />
        <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-terracotta/40 rounded-br" />
        {children}
      </div>
    </motion.div>
  );
}

// Quote box stile casolare
export function FarmhouseQuote({ children, author }: { children: React.ReactNode; author?: string }) {
  return (
    <motion.blockquote
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="relative pl-6 py-4 border-l-3 border-terracotta/60 bg-crema-dark/30 rounded-r-lg"
    >
      <div className="font-body italic text-lg text-ferro/80 leading-relaxed">
        {children}
      </div>
      {author && (
        <footer className="mt-3 font-serif text-sm text-terracotta/80">
          — {author}
        </footer>
      )}
    </motion.blockquote>
  );
}

// Card stile casolare
export function FarmhouseCard({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative bg-bianco-latte rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow ${className}`}
    >
      {/* Bordo superiore terracotta */}
      <div className="h-1 bg-gradient-to-r from-terracotta/40 via-terracotta to-terracotta/40" />
      
      <div className="p-6 md:p-8">
        {children}
      </div>
    </motion.div>
  );
}

// Testo evidenziato stile artigianale
export function HandHighlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline">
      <span className="relative z-10 font-semibold">{children}</span>
      <span className="absolute bottom-0 left-0 right-0 h-2 bg-oro/25 -z-0 -rotate-1" />
    </span>
  );
}

// Badge rustico
export function RusticBadge({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1.5 bg-verde-bosco/10 border border-verde-bosco/30 rounded-full font-body text-sm text-verde-bosco ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-verde-bosco/60" />
      {children}
    </span>
  );
}

// Linea decorativa semplice
export function SimpleLine({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-pietra/60" />
      <div className="w-1.5 h-1.5 rounded-full bg-terracotta/60" />
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-pietra/60" />
    </div>
  );
}

// Icona foglia semplice
export function LeafIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={`w-5 h-5 ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M12 2C6.5 2 2 6.5 2 12c0 5.5 10 10 10 10s10-4.5 10-10c0-5.5-4.5-10-10-10z" />
      <path d="M12 22V8" />
      <path d="M8 12c2-2 6-2 8 0" />
    </svg>
  );
}

// Decorazione angolo rustico per sezioni
export function RusticCorner({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) {
  const positions = {
    tl: 'top-4 left-4',
    tr: 'top-4 right-4 scale-x-[-1]',
    bl: 'bottom-4 left-4 scale-y-[-1]',
    br: 'bottom-4 right-4 scale-[-1]',
  };

  return (
    <div className={`absolute ${positions[position]} w-16 h-16 opacity-20`}>
      <svg viewBox="0 0 60 60" fill="none" className="w-full h-full text-verde-bosco">
        <path
          d="M5 55 L5 20 Q5 5, 20 5 L55 5"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        {/* Piccola foglia decorativa */}
        <ellipse cx="30" cy="5" rx="8" ry="4" fill="currentColor" opacity="0.5" transform="rotate(-30 30 5)" />
      </svg>
    </div>
  );
}
