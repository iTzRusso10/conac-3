"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import type { Dictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import { localeNames } from "@/i18n/config";
import Image from "next/image";

interface NavbarProps {
  dictionary: Dictionary;
  locale: Locale;
}

export default function Navbar({ dictionary, locale }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Determina se siamo sulla home page (dove c'è il video fullscreen)
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;

  // Scroll detection per navbar trasparente/solida
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Blocca scroll quando menu è aperto
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: `/${locale}`, label: dictionary.nav.home },
    { href: `/${locale}/storia`, label: dictionary.nav.story },
    { href: `/${locale}/la-dolce-vita`, label: dictionary.nav.dolcevita },
    { href: `/${locale}/suite`, label: dictionary.nav.suites },
    { href: `/${locale}/galleria`, label: dictionary.nav.gallery },
    { href: `/${locale}/esperienze`, label: dictionary.nav.experiences },
    { href: `/${locale}/ricevimenti`, label: dictionary.nav.events },
    { href: `/${locale}/contatti`, label: dictionary.nav.contact },
  ];

  const getLocalizedPath = (newLocale: Locale) => {
    const pathWithoutLocale = pathname.replace(`/${locale}`, "") || "/";
    return `/${newLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;
  };

  const otherLocale = locale === "it" ? "en" : "it";

  // Su desktop + home page + non scrollato = navbar trasparente con testo bianco
  // Altrimenti = navbar bianca con testo scuro
  const isTransparent = isHomePage && !isScrolled && !isMenuOpen;

  return (
    <>
      {/* HEADER - z-index alto per stare sopra tutto */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isTransparent
            ? "bg-crema shadow-sm md:bg-transparent md:shadow-none"
            : "bg-crema shadow-sm"
        }`}
      >
        <div className="container">
          <nav className="grid grid-cols-3 items-center h-16 md:h-20">
            {/* Logo - Sinistra */}
            <Link href={`/${locale}`} className="justify-self-start">
              <Image
                src="/images/pia.png"
                alt="Relais Conac"
                width={80}
                height={44}
                className={`h-9 w-auto md:h-11 transition-all duration-300 ${
                  isTransparent ? "md:brightness-0 md:invert" : ""
                }`}
              />
            </Link>

            {/* Brand Name - Centro */}
            <Link
              href={`/${locale}`}
              className="justify-self-center flex flex-col items-center mt-1"
            >
              <span
                className={`font-script font-bold text-[17px] md:text-xl leading-tight transition-colors duration-300 ${
                  isTransparent
                    ? "text-ferro md:text-white md:drop-shadow-lg"
                    : "text-ferro"
                }`}
              >
                Relais Conac
              </span>
              <span
                className={`text-[9px] mt-[-3px] md:text-[10px] tracking-[0.15em] font-sans leading-tight transition-colors duration-300 ${
                  isTransparent
                    ? "text-terracotta md:text-oro md:drop-shadow-md"
                    : "text-terracotta"
                }`}
              >
                1888
              </span>
            </Link>

            {/* Right: Language + Menu Toggle */}
            <div className="justify-self-end flex items-center gap-1">
              <Link
                href={getLocalizedPath(otherLocale)}
                className={`flex items-center gap-1 px-2 py-1.5 transition-colors duration-300 ${
                  isTransparent
                    ? "text-ferro md:text-white hover:text-verde-bosco md:hover:text-white/80"
                    : "text-ferro hover:text-verde-bosco"
                }`}
                title={localeNames[otherLocale]}
              >
                <Globe size={16} />
                <span className="text-xs font-sans uppercase">
                  {otherLocale}
                </span>
              </Link>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 transition-colors duration-300 ${
                  isTransparent
                    ? "text-ferro md:text-white hover:text-verde-bosco md:hover:text-white/80"
                    : "text-ferro hover:text-verde-bosco"
                }`}
                aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* MENU PANEL */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed top-16 md:top-20 left-0 right-0 bottom-0 z-40 bg-ferro/20 md:backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu - inizia subito sotto l'header */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25, ease: "easeOut" }}
              className="fixed w-full top-16 md:top-20 right-0 bottom-0 md:left-auto md:w-96 z-40 bg-crema shadow-2xl flex flex-col"
            >
              {/* Navigation */}
              <nav className="flex-1 flex flex-col justify-start p-6">
                <ul className="space-y-1">
                  {navItems.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                      <motion.li
                        key={item.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.03 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block py-3 px-4 rounded-lg text-lg font-serif transition-colors ${
                            isActive
                              ? "bg-verde-bosco/10 text-verde-bosco"
                              : "text-ferro hover:bg-pietra/10 hover:text-verde-bosco"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8"
                >
                  <Link
                    href={`/${locale}/contatti`}
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full py-3 px-4 bg-verde-bosco text-bianco-latte text-center font-sans rounded-lg hover:bg-verde-bosco/90 transition-colors"
                  >
                    {dictionary.cta.checkAvailability}
                  </Link>
                </motion.div>

                {/* Contatti */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="mt-6 pt-4 border-t  flex justify-between items-center border-pietra/20  text-ferro/60 font-sans text-center"
                >
                  <p className="text-sm!">+39 0173 789 000</p>
                  <p className="text-sm!">info@relaisconac.it</p>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
