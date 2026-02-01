"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import type { Dictionary } from "@/i18n/getDictionary";
import type { Locale } from "@/i18n/config";
import { locales, localeNames } from "@/i18n/config";
import Image from "next/image";

interface NavbarProps {
  dictionary: Dictionary;
  locale: Locale;
}

export default function Navbar({ dictionary, locale }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled
            ? "bg-crema/95 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href={`/${locale}`}
              className={`font-serif text-xl md:text-2xl tracking-wide transition-colors ${
                isScrolled || !pathname.includes("suite/")
                  ? "text-ferro hover:text-verde-bosco"
                  : "text-bianco-latte hover:text-crema"
              }`}
            >
              <Image
                src="/images/structure_only.png"
                alt="Relais Conac"
                width={120}
                height={50}
                className="w-28 h-[60px]"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-sans transition-colors ${
                    pathname === item.href
                      ? "text-verde-bosco font-medium"
                      : isScrolled
                      ? "text-ferro/80 hover:text-verde-bosco"
                      : "text-ferro/80 hover:text-verde-bosco"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Right side: Language + CTA + Mobile Menu */}
            <div className="flex items-center gap-3">
              {/* Language Switcher */}
              <div className="relative">
                <button
                  onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                  className="flex items-center gap-1 text-sm text-ferro/70 hover:text-verde-bosco transition-colors px-2 py-1"
                  aria-label="Change language"
                >
                  <Globe size={16} />
                  <span className="uppercase text-xs font-sans">{locale}</span>
                </button>

                <AnimatePresence>
                  {isLangMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="absolute top-full right-0 mt-2 bg-bianco-latte rounded-lg shadow-lg py-1 min-w-[100px] border border-pietra/30"
                    >
                      {locales.map((l) => (
                        <Link
                          key={l}
                          href={getLocalizedPath(l)}
                          onClick={() => setIsLangMenuOpen(false)}
                          className={`block px-4 py-2 text-sm font-sans hover:bg-crema transition-colors ${
                            l === locale
                              ? "text-verde-bosco font-medium"
                              : "text-ferro"
                          }`}
                        >
                          {localeNames[l]}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Desktop */}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-ferro hover:text-verde-bosco transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-ferro/20 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="absolute right-0 top-0 bottom-0 w-72 max-w-full bg-crema shadow-xl"
            >
              <div className="p-6 pt-20">
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-lg font-serif py-3 border-b border-pietra/20 transition-colors ${
                        pathname === item.href
                          ? "text-verde-bosco"
                          : "text-ferro hover:text-verde-bosco"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>

                {/* CTA Mobile */}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
