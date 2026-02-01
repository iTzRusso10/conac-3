import type { Locale } from './config';

const dictionaries = {
  it: () => import('./locales/it.json').then((module) => module.default),
  en: () => import('./locales/en.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]();
};

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
