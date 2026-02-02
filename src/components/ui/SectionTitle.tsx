"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  subtitles?: string[];
  subtitleSize?: string;
  centered?: boolean;
  decorated?: boolean;
  decoratedImageSrc?: string;
  decoratedImageAlt?: string;
  decoratedImageWidth?: number;
  decoratedImageHeight?: number;
  decoratedImageClassName?: string;
  centeredTitle?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  subtitles = [],
  subtitleSize = "text-lg",
  centeredTitle = true,
  centered = true,
  decorated = false,
  decoratedImageSrc,
  decoratedImageAlt = "",
  decoratedImageWidth = 160,
  decoratedImageHeight = 40,
  decoratedImageClassName = "",
}: SectionTitleProps) {
  const subtitleList = [subtitle, ...subtitles].filter((item): item is string =>
    Boolean(item && item.trim()),
  );

  return (
    <div className={`mb-10 ${centeredTitle ? "text-center" : "text-left"}`}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-serif text-3xl md:text-4xl text-ferro"
      >
        {title}
      </motion.h2>

      {decorated && (
        <>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`mt-4 flex items-center gap-3 ${
              centeredTitle ? "justify-center" : ""
            }`}
          >
            {/* Linea con punto centrale - stile rustico semplice */}
            <div className="h-px w-12 bg-pietra" />
            <div className="w-2 h-2 rounded-full bg-terracotta/70" />
            <div className="h-px w-12 bg-pietra" />
          </motion.div>

          {decoratedImageSrc && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.25 }}
              className={`mt-4 ${centered ? "mx-auto" : ""} ${decoratedImageClassName}`}
            >
              <Image
                src={decoratedImageSrc}
                alt={decoratedImageAlt}
                width={decoratedImageWidth}
                height={decoratedImageHeight}
                className="h-auto w-full object-cover"
              />
            </motion.div>
          )}
        </>
      )}

      {subtitleList.length > 0 &&
        subtitleList.map((item, index) => (
          <motion.p
            key={`${item}-${index}`}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
            className={`mt-5 ${subtitleSize} ${centered ? "text-center" : "text-left"}  text-ferro/70 leading-relaxed font-body ${
              centered ? "max-w-xl mx-auto" : "max-w-lg"
            }`}
          >
            {item}
          </motion.p>
        ))}
    </div>
  );
}
