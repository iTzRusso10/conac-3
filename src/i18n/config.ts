export const locales = ['it', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'it';

export const localeNames: Record<Locale, string> = {
  it: 'Italiano',
  en: 'English',
};

export function getLocaleFromPathname(pathname: string): Locale {
  const segment = pathname.split('/')[1];
  if (locales.includes(segment as Locale)) {
    return segment as Locale;
  }
  return defaultLocale;
}
