export interface Suite {
  id: string;
  slug: string;
  image: string;
  size: string;
  guests: number;
  bedType: string;
  hasFireplace: boolean;
  hasBalcony: boolean;
  hasValleyView: boolean;
  hasVineyardView: boolean;
  hasGardenAccess: boolean;
  color: string;
}

export const suites: Suite[] = [
  {
    id: 'bruma',
    slug: 'bruma',
    image: '/images/suites/bruma.jpg',
    size: '35',
    guests: 2,
    bedType: 'King',
    hasFireplace: false,
    hasBalcony: false,
    hasValleyView: true,
    hasVineyardView: false,
    hasGardenAccess: false,
    color: '#9BA8A0', // grigio perla
  },
  {
    id: 'vendemmia',
    slug: 'vendemmia',
    image: '/images/suites/vendemmia.jpg',
    size: '40',
    guests: 2,
    bedType: 'King',
    hasFireplace: true,
    hasBalcony: false,
    hasValleyView: false,
    hasVineyardView: true,
    hasGardenAccess: false,
    color: '#722F37', // bordeaux
  },
  {
    id: 'lanterna',
    slug: 'lanterna',
    image: '/images/suites/lanterna.jpg',
    size: '38',
    guests: 2,
    bedType: 'King',
    hasFireplace: false,
    hasBalcony: true,
    hasValleyView: true,
    hasVineyardView: false,
    hasGardenAccess: false,
    color: '#D4A574', // ambra
  },
  {
    id: 'tartufo',
    slug: 'tartufo',
    image: '/images/suites/tartufo.jpg',
    size: '32',
    guests: 2,
    bedType: 'Queen',
    hasFireplace: false,
    hasBalcony: false,
    hasValleyView: false,
    hasVineyardView: false,
    hasGardenAccess: true,
    color: '#6B5344', // terra
  },
  {
    id: 'vigna',
    slug: 'vigna',
    image: '/images/suites/vigna.jpg',
    size: '42',
    guests: 2,
    bedType: 'King',
    hasFireplace: false,
    hasBalcony: true,
    hasValleyView: false,
    hasVineyardView: true,
    hasGardenAccess: false,
    color: '#7A8B6E', // verde oliva
  },
  {
    id: 'camino',
    slug: 'camino',
    image: '/images/suites/camino.jpg',
    size: '45',
    guests: 2,
    bedType: 'King',
    hasFireplace: true,
    hasBalcony: false,
    hasValleyView: true,
    hasVineyardView: false,
    hasGardenAccess: false,
    color: '#A67C52', // pietra calda
  },
];

export const getSuiteById = (id: string): Suite | undefined => {
  return suites.find((suite) => suite.id === id);
};
