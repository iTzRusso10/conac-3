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
  truffle: 'bg-terracotta/10 text-terracotta',
  wine: 'bg-verde-bosco/10 text-verde-bosco',
  nature: 'bg-verde-bosco/10 text-verde-bosco',
  relax: 'bg-pietra/30 text-ferro',
};

export default function ExperienceCard({
  type,
  title,
  description,
  index = 0,
}: ExperienceCardProps) {
  const Icon = icons[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-6 bg-bianco-latte rounded-sm border border-pietra/30 hover:border-verde-bosco/30 transition-all duration-500 hover:shadow-lg"
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 rounded-full ${colors[type]} flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110`}
      >
        <Icon size={24} />
      </div>

      {/* Title */}
      <h3 className="font-serif text-xl text-ferro mb-3 group-hover:text-verde-bosco transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-ferro/70 leading-relaxed">{description}</p>
    </motion.div>
  );
}
