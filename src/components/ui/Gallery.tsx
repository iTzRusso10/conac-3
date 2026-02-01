'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryImage } from '@/data/gallery';
import type { Locale } from '@/i18n/config';

interface GalleryProps {
  images: GalleryImage[];
  locale: Locale;
  filters?: {
    all: string;
    [key: string]: string;
  };
}

export default function Gallery({ images, locale, filters }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredImages =
    activeFilter === 'all'
      ? images
      : images.filter((img) => img.category === activeFilter);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
    document.body.style.overflow = '';
  };

  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === 0 ? filteredImages.length - 1 : selectedIndex - 1
      );
    }
  };

  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        selectedIndex === filteredImages.length - 1 ? 0 : selectedIndex + 1
      );
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  const categories = ['all', 'exteriors', 'interiors', 'suites', 'pool', 'experiences', 'details'];

  return (
    <>
      {/* Filters */}
      {filters && (
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-sm ${
                activeFilter === cat
                  ? 'bg-verde-bosco text-bianco-latte'
                  : 'bg-pietra/30 text-ferro hover:bg-pietra/50'
              }`}
            >
              {filters[cat] || cat}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredImages.map((image, index) => (
            <motion.button
              key={image.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              onClick={() => openLightbox(index)}
              className={`relative overflow-hidden italian-frame group cursor-pointer ${
                image.aspectRatio === 'portrait'
                  ? 'row-span-2'
                  : image.aspectRatio === 'landscape'
                  ? 'col-span-2'
                  : ''
              }`}
              style={{ aspectRatio: image.aspectRatio === 'portrait' ? '3/4' : image.aspectRatio === 'landscape' ? '16/9' : '1/1' }}
            >
              {/* Placeholder - replace with actual images */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-pietra to-pietra-dark transition-transform duration-500 group-hover:scale-110"
              >
                <div className="absolute inset-0 flex items-center justify-center text-ferro/40 text-sm">
                  {image.alt[locale]}
                </div>
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-ferro/0 group-hover:bg-ferro/30 transition-colors duration-300" />
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ferro/95 flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-bianco-latte/70 hover:text-bianco-latte transition-colors z-10"
              aria-label="Close"
            >
              <X size={32} />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-6 text-bianco-latte/70 hover:text-bianco-latte transition-colors z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={48} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-6 text-bianco-latte/70 hover:text-bianco-latte transition-colors z-10"
              aria-label="Next"
            >
              <ChevronRight size={48} />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[80vh] w-full mx-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Placeholder - replace with actual image */}
              <div className="aspect-video bg-pietra rounded flex items-center justify-center">
                <span className="text-ferro/60 text-lg">
                  {filteredImages[selectedIndex].alt[locale]}
                </span>
              </div>

              {/* Caption */}
              <p className="mt-4 text-center text-bianco-latte/70">
                {filteredImages[selectedIndex].alt[locale]}
              </p>
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-bianco-latte/50 text-sm">
              {selectedIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
