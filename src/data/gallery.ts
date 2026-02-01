export interface GalleryImage {
  id: string;
  src: string;
  alt: {
    it: string;
    en: string;
  };
  category: 'exteriors' | 'interiors' | 'suites' | 'pool' | 'experiences' | 'details';
  aspectRatio: 'landscape' | 'portrait' | 'square';
}

export const galleryImages: GalleryImage[] = [
  // Esterni
  {
    id: 'ext-1',
    src: '/images/gallery/casolare-esterno.jpg',
    alt: { it: 'Facciata del casolare al tramonto', en: 'Farmhouse facade at sunset' },
    category: 'exteriors',
    aspectRatio: 'landscape',
  },
  {
    id: 'ext-2',
    src: '/images/gallery/vialetto-lanterne.jpg',
    alt: { it: 'Vialetto con lanterne accese', en: 'Pathway with lit lanterns' },
    category: 'exteriors',
    aspectRatio: 'portrait',
  },
  {
    id: 'ext-3',
    src: '/images/gallery/vista-colline.jpg',
    alt: { it: 'Vista panoramica sulle colline', en: 'Panoramic view of the hills' },
    category: 'exteriors',
    aspectRatio: 'landscape',
  },
  {
    id: 'ext-4',
    src: '/images/gallery/corte-interna.jpg',
    alt: { it: 'Corte interna fiorita', en: 'Blooming inner courtyard' },
    category: 'exteriors',
    aspectRatio: 'square',
  },
  // Piscina
  {
    id: 'pool-1',
    src: '/images/gallery/piscina-tramonto.jpg',
    alt: { it: 'Piscina con bordi in pietra al tramonto', en: 'Stone-edged pool at sunset' },
    category: 'pool',
    aspectRatio: 'landscape',
  },
  {
    id: 'pool-2',
    src: '/images/gallery/piscina-vista.jpg',
    alt: { it: 'Piscina con vista sulla valle', en: 'Pool overlooking the valley' },
    category: 'pool',
    aspectRatio: 'landscape',
  },
  {
    id: 'pool-3',
    src: '/images/gallery/lettini-piscina.jpg',
    alt: { it: 'Lettini a bordo piscina', en: 'Sun loungers by the pool' },
    category: 'pool',
    aspectRatio: 'portrait',
  },
  // Interni
  {
    id: 'int-1',
    src: '/images/gallery/camino-acceso.jpg',
    alt: { it: 'Camino acceso in sala comune', en: 'Lit fireplace in common room' },
    category: 'interiors',
    aspectRatio: 'portrait',
  },
  {
    id: 'int-2',
    src: '/images/gallery/sala-colazione.jpg',
    alt: { it: 'Sala colazione', en: 'Breakfast room' },
    category: 'interiors',
    aspectRatio: 'landscape',
  },
  {
    id: 'int-3',
    src: '/images/gallery/cantina.jpg',
    alt: { it: 'Cantina con vini locali', en: 'Cellar with local wines' },
    category: 'interiors',
    aspectRatio: 'square',
  },
  // Suite
  {
    id: 'suite-1',
    src: '/images/gallery/suite-bruma.jpg',
    alt: { it: 'Suite Bruma', en: 'Bruma Suite' },
    category: 'suites',
    aspectRatio: 'landscape',
  },
  {
    id: 'suite-2',
    src: '/images/gallery/suite-camino.jpg',
    alt: { it: 'Suite Camino con fuoco acceso', en: 'Camino Suite with lit fire' },
    category: 'suites',
    aspectRatio: 'landscape',
  },
  {
    id: 'suite-3',
    src: '/images/gallery/suite-lanterna.jpg',
    alt: { it: 'Suite Lanterna', en: 'Lanterna Suite' },
    category: 'suites',
    aspectRatio: 'portrait',
  },
  // Esperienze
  {
    id: 'exp-1',
    src: '/images/gallery/caccia-tartufo.jpg',
    alt: { it: 'Caccia al tartufo nel bosco', en: 'Truffle hunting in the woods' },
    category: 'experiences',
    aspectRatio: 'landscape',
  },
  {
    id: 'exp-2',
    src: '/images/gallery/degustazione-vino.jpg',
    alt: { it: 'Degustazione di vino', en: 'Wine tasting' },
    category: 'experiences',
    aspectRatio: 'square',
  },
  {
    id: 'exp-3',
    src: '/images/gallery/passeggiata-vigne.jpg',
    alt: { it: 'Passeggiata tra le vigne', en: 'Walk through the vineyards' },
    category: 'experiences',
    aspectRatio: 'landscape',
  },
  // Dettagli
  {
    id: 'det-1',
    src: '/images/gallery/lanterna-dettaglio.jpg',
    alt: { it: 'Lanterna in ferro battuto', en: 'Wrought-iron lantern' },
    category: 'details',
    aspectRatio: 'portrait',
  },
  {
    id: 'det-2',
    src: '/images/gallery/fiori-vaso.jpg',
    alt: { it: 'Fiori di campo in vaso di ceramica', en: 'Wildflowers in ceramic vase' },
    category: 'details',
    aspectRatio: 'square',
  },
  {
    id: 'det-3',
    src: '/images/gallery/calici-vino.jpg',
    alt: { it: 'Calici di vino rosso', en: 'Red wine glasses' },
    category: 'details',
    aspectRatio: 'portrait',
  },
  {
    id: 'det-4',
    src: '/images/gallery/pietra-texture.jpg',
    alt: { it: 'Texture di pietra antica', en: 'Ancient stone texture' },
    category: 'details',
    aspectRatio: 'square',
  },
];

export const getImagesByCategory = (category: GalleryImage['category']) => {
  return galleryImages.filter((img) => img.category === category);
};
