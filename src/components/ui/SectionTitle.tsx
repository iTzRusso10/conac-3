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
          <div className="h-px w-12 bg-pietra" />
          <div className="w-2 h-2 bg-terracotta rotate-45" />
          <div className="h-px w-12 bg-pietra" />
        </motion.div>
      )}

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`mt-6 text-lg md:text-xl text-ferro/70 leading-relaxed ${
            centered ? 'max-w-2xl mx-auto' : 'max-w-xl'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
