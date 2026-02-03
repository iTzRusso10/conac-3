"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  image?: string;
  align?: "center" | "left";
  imageClassName?: string;
}

export default function PageHero({
  title,
  subtitle,
  image,
  align = "center",
  imageClassName,
}: PageHeroProps) {
  const alignClasses = {
    center: "text-center items-center justify-center",
    left: "text-left items-start",
  };

  return (
    <section className="relative min-h-[50vh] md:min-h-[45vh] flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      {/* Background */}
      {image ? (
        <>
          <div
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat z-0 ${imageClassName}`}
            style={{ backgroundImage: `url(${image})` }}
          />
          {/* Overlay scuro per leggibilità */}
          <div
            className="absolute inset-0 z-1"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          />
        </>
      ) : (
        <div className="absolute inset-0 bg-linear-to-br from-verde-bosco/20 via-crema to-pietra/30 z-0" />
      )}

      {/* Content */}
      <div className="container h-100 relative z-10 py-12 md:py-16">
        <div
          className={`flex h-full flex-col ${alignClasses[align]} max-w-3xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight ${
              image ? "text-white! drop-shadow-lg" : "text-ferro"
            }`}
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className={`mt-4 text-base! md:text-lg! font-body max-w-2xl ${
                image ? "text-white/90! drop-shadow-md" : "text-ferro/70"
              } ${align === "center" ? "text-center" : ""}`}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </div>

      {/* Decorative bottom fade */}
      {image && (
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-t from-crema to-transparent z-10" />
      )}
    </section>
  );
}
