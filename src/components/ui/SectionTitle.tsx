'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  decorated?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  decorated = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      {/* Ornamento superiore */}
      {decorated && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`mb-4 text-terracotta text-2xl ${centered ? '' : ''}`}
        >
          ❦
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-serif text-3xl md:text-4xl lg:text-5xl text-ferro"
      >
        {title}
      </motion.h2>

      {decorated && (
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`mt-6 flex items-center gap-4 ${centered ? 'justify-center' : ''}`}
        >
          {/* Linea sinistra con curva */}
          <svg width="80" height="12" viewBox="0 0 80 12" className="text-pietra">
            <path 
              d="M0 6 Q20 2, 40 6 Q60 10, 80 6" 
              stroke="currentColor" 
              strokeWidth="1" 
              fill="none"
            />
          </svg>
          
          {/* Diamante centrale */}
          <div className="relative">
            <div className="w-3 h-3 bg-terracotta rotate-45" />
            <div className="absolute inset-0 w-3 h-3 border border-terracotta rotate-45 scale-150 opacity-50" />
          </div>
          
          {/* Linea destra con curva */}
          <svg width="80" height="12" viewBox="0 0 80 12" className="text-pietra">
            <path 
              d="M0 6 Q20 10, 40 6 Q60 2, 80 6" 
              stroke="currentColor" 
              strokeWidth="1" 
              fill="none"
            />
          </svg>
        </motion.div>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`mt-6 text-lg md:text-xl text-ferro/70 leading-relaxed font-body italic ${
            centered ? 'max-w-2xl mx-auto' : 'max-w-xl'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
