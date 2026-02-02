"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface HeroProps {
  headline: string;
  subhead?: string;
  cta?: {
    label: string;
    href: string;
  };
  image?: string;
  overlay?: boolean;
  height?: "full" | "large" | "medium";
  align?: "center" | "left";
  showBrandName?: boolean;
}

export default function Hero({
  headline,
  subhead,
  cta,
  image,
  overlay = true,
  height = "large",
  align = "center",
  showBrandName = false,
}: HeroProps) {
  const heightClasses = {
    full: "min-h-screen",
    large: "min-h-[80vh]",
    medium: "min-h-[55vh]",
  };

  const alignClasses = {
    center: "text-center items-center",
    left: "text-left items-start",
  };

  return (
    <section
      className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}
    >
      {/* Background */}
      {image ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-verde-bosco/30 via-crema to-pietra/40" />
      )}

      {/* Overlay naturale */}
      {overlay && image && (
        <div className="absolute inset-0 bg-gradient-to-t from-ferro/60 via-ferro/25 to-ferro/10" />
      )}

      {/* Content */}
      <div className="container relative z-10">
        <div
          className={`flex flex-col ${alignClasses[align]} max-w-3xl ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {showBrandName ? (
            <>
              {/* Brand Name con font script */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-center"
              >
                <h1 className="font-script text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-bianco-latte leading-none">
                  Relais Conac
                </h1>
                <div className="mt-2 md:mt-4">
                  <span className="text-oro text-2xl md:text-3xl lg:text-4xl tracking-[0.3em] font-serif">
                    — 1888 —
                  </span>
                </div>
              </motion.div>

              {/* Tagline come sottotitolo */}
              {headline && (
                <motion.p
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="mt-8 text-lg md:text-xl lg:text-2xl font-body italic text-crema/90 max-w-xl text-center"
                >
                  {headline}
                </motion.p>
              )}

              {subhead && (
                <motion.p
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="mt-4 text-base md:text-lg font-body text-crema/75 max-w-lg text-center"
                >
                  {subhead}
                </motion.p>
              )}
            </>
          ) : (
            <>
              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className={`font-serif text-4xl md:text-5xl lg:text-6xl leading-tight ${
                  image ? "text-bianco-latte" : "text-ferro"
                }`}
              >
                {headline}
              </motion.h1>

              {subhead && (
                <motion.p
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className={`mt-5 text-lg md:text-xl font-body leading-relaxed max-w-xl ${
                    image ? "text-crema/90" : "text-ferro/75"
                  }`}
                >
                  {subhead}
                </motion.p>
              )}
            </>
          )}

          {cta && (
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: showBrandName ? 0.7 : 0.5 }}
              className="mt-10"
            >
              <Link
                href={cta.href}
                className={`btn ${
                  image
                    ? "bg-bianco-latte text-ferro hover:bg-crema border-2 border-bianco-latte"
                    : "btn-primary"
                }`}
              >
                {cta.label}
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
