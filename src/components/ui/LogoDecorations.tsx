"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Logo come separatore tra sezioni
export function LogoDivider({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`py-8 flex items-center justify-center ${className}`}
    >
      <div className="flex items-center gap-6">
        {/* Linea sinistra */}
        <div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent to-pietra" />

        {/* Logo */}
        <Image
          src="/images/structure_only.png"
          alt="Relais Conac 1888"
          width={80}
          height={50}
          className=""
        />

        {/* Linea destra */}
        <div className="h-px w-16 md:w-24 bg-gradient-to-l from-transparent to-pietra" />
      </div>
    </motion.div>
  );
}

// Logo come sfondo di sezione (watermark)
export function LogoWatermark({
  position = "center",
  opacity = 0.03,
  size = "lg",
}: {
  position?: "center" | "left" | "right" | "top-right" | "bottom-left";
  opacity?: number;
  size?: "sm" | "md" | "lg" | "xl";
}) {
  const positions = {
    center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
    left: "top-1/2 left-10 -translate-y-1/2",
    right: "top-1/2 right-10 -translate-y-1/2",
    "top-right": "top-10 right-10",
    "bottom-left": "bottom-10 left-10",
  };

  const sizes = {
    sm: "w-32 h-32",
    md: "w-48 h-48",
    lg: "w-64 h-64 md:w-80 md:h-80",
    xl: "w-80 h-80 md:w-96 md:h-96",
  };

  return (
    <div
      className={`absolute ${positions[position]} ${sizes[size]} pointer-events-none`}
      style={{ opacity }}
    >
      <Image
        src="/images/logo-conac.png"
        alt=""
        fill
        className="object-contain"
        aria-hidden="true"
      />
    </div>
  );
}

// Sezione con logo di sfondo
export function SectionWithLogo({
  children,
  className = "",
  logoPosition = "center",
  logoOpacity = 0.03,
  logoSize = "lg",
}: {
  children: React.ReactNode;
  className?: string;
  logoPosition?: "center" | "left" | "right" | "top-right" | "bottom-left";
  logoOpacity?: number;
  logoSize?: "sm" | "md" | "lg" | "xl";
}) {
  return (
    <section className={`section relative overflow-hidden ${className}`}>
      <LogoWatermark
        position={logoPosition}
        opacity={logoOpacity}
        size={logoSize}
      />
      <div className="container relative z-10">{children}</div>
    </section>
  );
}

// Logo piccolo per uso inline
export function LogoSmall({ className = "" }: { className?: string }) {
  return (
    <div className={`relative w-12 h-12 ${className}`}>
      <Image
        src="/images/logo-conac.png"
        alt="Relais Conac 1888"
        fill
        className="object-contain"
      />
    </div>
  );
}
