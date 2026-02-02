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
    id: "incanto",
    slug: "incanto",
    image: "/images/suites/bruma.jpg",
    size: "35",
    guests: 2,
    bedType: "King",
    hasFireplace: false,
    hasBalcony: false,
    hasValleyView: true,
    hasVineyardView: false,
    hasGardenAccess: false,
    color: "#9BA8A0", // grigio perla
  },
  {
    id: "anima",
    slug: "anima",
    image: "/images/suites/vendemmia.jpg",
    size: "40",
    guests: 2,
    bedType: "King",
    hasFireplace: true,
    hasBalcony: false,
    hasValleyView: false,
    hasVineyardView: true,
    hasGardenAccess: false,
    color: "#722F37", // bordeaux
  },
  {
    id: "fiordaliso",
    slug: "fiordaliso",
    image: "/images/suites/lanterna.jpg",
    size: "38",
    guests: 2,
    bedType: "King",
    hasFireplace: false,
    hasBalcony: true,
    hasValleyView: true,
    hasVineyardView: false,
    hasGardenAccess: false,
    color: "#D4A574", // ambra
  },
];

export const getSuiteById = (id: string): Suite | undefined => {
  return suites.find((suite) => suite.id === id);
};
