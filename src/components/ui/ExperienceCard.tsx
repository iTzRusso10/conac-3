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
  truffle: { bg: 'bg-terracotta/15', icon: 'text-terracotta' },
  wine: { bg: 'bg-verde-bosco/15', icon: 'text-verde-bosco' },
  nature: { bg: 'bg-verde-bosco/15', icon: 'text-verde-bosco' },
  relax: { bg: 'bg-oro/15', icon: 'text-oro-dark' },
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
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="flex gap-4 items-start"
    >
      {/* Icon - stile semplice rustico */}
      <div
        className={`flex-shrink-0 w-12 h-12 rounded-xl ${colorSet.bg} ${colorSet.icon} flex items-center justify-center`}
      >
        <Icon size={24} strokeWidth={1.5} />
      </div>

      {/* Content */}
      <div className="flex-1">
        <h3 className="font-serif text-lg text-ferro mb-1">
          {title}
        </h3>
        <p className="font-body text-ferro/65 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
