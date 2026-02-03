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
  video?: string;
  overlay?: boolean;
  align?: "center" | "left";
  showBrandName?: boolean;
}

export default function Hero({
  headline,
  subhead,
  cta,
  image,
  video,
  overlay = true,
  align = "center",
  showBrandName = false,
}: HeroProps) {
  const alignClasses = {
    center: "text-center items-center justify-center",
    left: "text-left items-start",
  };

  const hasBackground = video || image;

  return (
    <>
      {/* MOBILE: Video sopra + contenuto sotto (pt-16 = altezza navbar mobile) */}
      <section className="md:hidden mt-16">
        {/* Video con aspect ratio */}
        {video && (
          <div className="relative w-full aspect-video bg-[#1a1a1a]">
            {/* Video - z-index: 0 */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-0"
            >
              <source src={video} type="video/mp4" />
            </video>
            {/* Overlay scuro - z-index: 1 */}
            {overlay && (
              <div
                className="absolute inset-0 z-1"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}
              />
            )}
          </div>
        )}

        {/* Contenuto mobile */}
        <div className="bg-crema px-4 py-8">
          {showBrandName ? (
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="font-script text-4xl text-ferro leading-none">
                  Relais Conac
                </h1>
                <span className="text-oro text-lg tracking-[0.2em] font-serif">
                  — 1888 —
                </span>
              </motion.div>

              {headline && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-4 text-base font-body italic text-ferro/80"
                >
                  {headline}
                </motion.p>
              )}

              {subhead && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="mt-2 text-sm font-body text-ferro/60"
                >
                  {subhead}
                </motion.p>
              )}

              {cta && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-6"
                >
                  <Link href={cta.href} className="btn btn-primary">
                    {cta.label}
                  </Link>
                </motion.div>
              )}
            </div>
          ) : (
            <div className={`flex flex-col ${alignClasses[align]}`}>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-serif text-3xl text-ferro leading-tight"
              >
                {headline}
              </motion.h1>
              {subhead && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-4 text-base font-body text-ferro/75"
                >
                  {subhead}
                </motion.p>
              )}
              {cta && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-6"
                >
                  <Link href={cta.href} className="btn btn-primary">
                    {cta.label}
                  </Link>
                </motion.div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* DESKTOP: Fullscreen con overlay ottimizzato */}
      <section className="hidden md:flex relative min-h-screen items-center justify-center overflow-hidden">
        {/* Video Background - z-index: 0 */}
        {video ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          >
            <source src={video} type="video/mp4" />
          </video>
        ) : image ? (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
            style={{ backgroundImage: `url(${image})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-linear-to-br from-verde-bosco/30 via-crema to-pietra/40 z-0" />
        )}

        {/* Overlay scuro per leggibilità - z-index: 1 */}
        {overlay && hasBackground && (
          <div
            className="absolute inset-0 z-1"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.45)" }}
          />
        )}

        {/* Content - z-index: 10 */}
        <div className="container relative z-10">
          <div
            className={`flex flex-col ${alignClasses[align]} max-w-3xl ${
              align === "center" ? "mx-auto" : ""
            }`}
          >
            {showBrandName ? (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="text-center"
                >
                  {/* Titolo crema su desktop */}
                  <h1 className="font-script text-7xl lg:text-8xl xl:text-9xl text-crema! leading-none drop-shadow-lg">
                    Relais Conac
                  </h1>
                  <div className="mt-4">
                    <span className="text-oro text-3xl lg:text-4xl tracking-[0.3em] font-serif drop-shadow-md">
                      — 1888 —
                    </span>
                  </div>
                </motion.div>

                {headline && (
                  <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mt-8 text-xl lg:text-2xl font-body italic text-white/90! max-w-xl text-center drop-shadow-md"
                  >
                    {headline}
                  </motion.p>
                )}

                {subhead && (
                  <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                    className="mt-4 text-lg font-body text-white/80! max-w-lg text-center drop-shadow-md"
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
                  className={`font-serif text-5xl lg:text-6xl leading-tight drop-shadow-lg ${
                    hasBackground ? "text-white" : "text-ferro"
                  }`}
                >
                  {headline}
                </motion.h1>

                {subhead && (
                  <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className={`mt-5 text-xl font-body leading-relaxed max-w-xl drop-shadow-md ${
                      hasBackground ? "text-white/90" : "text-ferro/75"
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
                  className={`btn shadow-lg ${
                    hasBackground
                      ? "bg-white text-ferro hover:bg-white/90 border-2 border-white"
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
    </>
  );
}
