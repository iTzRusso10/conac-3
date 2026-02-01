'use client';

import { motion } from 'framer-motion';
import { Wine, TreeDeciduous, Waves, Search } from 'lucide-react';

interface ExperienceCardProps {
  type: 'truffle' | 'wine' | 'nature' | 'relax';
  title: string;
  description: string;
  index?: number;
}

const icons = {
  truffle: Search,
  wine: Wine,
  nature: TreeDeciduous,
  relax: Waves,
};

const colors = {
  truffle: { bg: 'bg-terracotta/10', text: 'text-terracotta', border: 'border-terracotta' },
  wine: { bg: 'bg-verde-bosco/10', text: 'text-verde-bosco', border: 'border-verde-bosco' },
  nature: { bg: 'bg-verde-bosco/10', text: 'text-verde-bosco', border: 'border-verde-bosco' },
  relax: { bg: 'bg-pietra/30', text: 'text-ferro', border: 'border-pietra-dark' },
};

export default function ExperienceCard({
  type,
  title,
  description,
  index = 0,
}: ExperienceCardProps) {
  const Icon = icons[type];
  const colorSet = colors[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group text-center"
    >
      {/* Icon con cornice circolare vintage */}
      <div className="relative inline-block mb-6">
        {/* Cerchio esterno decorativo */}
        <div className={`absolute -inset-2 rounded-full border ${colorSet.border} opacity-30 group-hover:opacity-60 transition-opacity`} />
        
        {/* Cerchio principale */}
        <div
          className={`w-20 h-20 rounded-full ${colorSet.bg} ${colorSet.text} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg`}
        >
          <Icon size={32} strokeWidth={1.5} />
        </div>

        {/* Ornamento */}
        <div className={`absolute -bottom-1 left-1/2 -translate-x-1/2 text-sm ${colorSet.text}`}>
          ✦
        </div>
      </div>

      {/* Title */}
      <h3 className="font-serif text-xl md:text-2xl text-ferro mb-4 group-hover:text-verde-bosco transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="font-body text-ferro/70 leading-relaxed italic">
        {description}
      </p>
    </motion.div>
  );
}
