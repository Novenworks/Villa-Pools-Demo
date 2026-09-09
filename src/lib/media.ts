export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  category: "residential" | "commercial" | "spa" | "construction";
};

export const media = {
  logo: { src: "/media/logo.png", alt: "Villa Pools", width: 1000, height: 124 },
  logoWhite: {
    src: "/media/logo-white.png",
    alt: "Villa Pools",
    width: 1000,
    height: 124,
  },
  hero: {
    src: "/media/hero-infinity-dusk.webp",
    alt: "Dusk view of a custom infinity-edge pool with fire bowls and city lights beyond",
    width: 1500,
    height: 807,
  },
  cta: {
    src: "/media/cta-night-fire.webp",
    alt: "Night view of an infinity-edge pool with fire features",
    width: 1500,
    height: 1045,
  },
  lester: {
    src: "/media/portrait-lester.webp",
    alt: "Lester B. Townsend, CEO of Villa Pools",
    width: 500,
    height: 667,
  },
  kathy: {
    src: "/media/portrait-kathy.webp",
    alt: "Kathy Mendoza, Office Manager",
    width: 500,
    height: 667,
  },
  cpsa: {
    src: "/media/badge-cpsa.png",
    alt: "California Pool & Spa Association",
    width: 357,
    height: 100,
  },
  brands: [
    { src: "/media/brand-jandy.png", alt: "Jandy" },
    { src: "/media/brand-pentair.png", alt: "Pentair" },
    { src: "/media/brand-hayward.png", alt: "Hayward" },
    { src: "/media/brand-raypak.png", alt: "Raypak" },
    { src: "/media/brand-pebbletec.png", alt: "PebbleTec" },
  ],
} as const;

export const projects: ProjectImage[] = [
  {
    src: "/media/project-architectural-dusk.webp",
    alt: "Architectural dusk shot of a geometric pool with fire bowls and a raised spa",
    width: 1800,
    height: 1456,
    category: "residential",
  },
  {
    src: "/media/project-geometric-spa.webp",
    alt: "Geometric pool with raised spa, glass tile, and pebble finish",
    width: 1000,
    height: 750,
    category: "residential",
  },
  {
    src: "/media/project-fire-bowls-spa.webp",
    alt: "Raised spa with fire bowls, waterfalls, and a sheer descent",
    width: 1000,
    height: 750,
    category: "spa",
  },
  {
    src: "/media/project-vanishing-edge.webp",
    alt: "Vanishing-edge pool looking toward distant hills",
    width: 1000,
    height: 750,
    category: "residential",
  },
  {
    src: "/media/project-freeform-lagoon.webp",
    alt: "Freeform lagoon-style pool with a rock waterfall",
    width: 1000,
    height: 750,
    category: "residential",
  },
  {
    src: "/media/project-freeform-waterfalls.webp",
    alt: "Freeform pool with beach-style entry and rock waterfalls",
    width: 1000,
    height: 750,
    category: "residential",
  },
  {
    src: "/media/project-modern-lines.webp",
    alt: "Modern geometric pool with spa spillway and dark water",
    width: 1000,
    height: 750,
    category: "residential",
  },
  {
    src: "/media/project-intimate-spa.webp",
    alt: "Intimate raised spa with dual sheer descents",
    width: 1000,
    height: 750,
    category: "spa",
  },
  {
    src: "/media/project-geometric-trellis.webp",
    alt: "Geometric pool and spa beside a vine-covered trellis",
    width: 1000,
    height: 750,
    category: "residential",
  },
  {
    src: "/media/project-geometric-umbrella.webp",
    alt: "Geometric pool with raised spa, spa spill, and shade umbrella",
    width: 1000,
    height: 750,
    category: "residential",
  },
  {
    src: "/media/project-raised-spa.webp",
    alt: "Contemporary raised spa spilling into a dark-water pool",
    width: 1000,
    height: 750,
    category: "spa",
  },
  {
    src: "/media/project-raised-spa-fire.webp",
    alt: "Raised spa with fire bowls overlooking a geometric pool",
    width: 1000,
    height: 661,
    category: "residential",
  },
  {
    src: "/media/project-spa-fire-feature.webp",
    alt: "Spa with fire bowls, sheer descent, and spa spillway",
    width: 1000,
    height: 733,
    category: "spa",
  },
  {
    src: "/media/project-wide-geometric.webp",
    alt: "Wide geometric pool with raised spa and patio seating",
    width: 1500,
    height: 710,
    category: "residential",
  },
  {
    src: "/media/project-vanishing-dusk.webp",
    alt: "Vanishing-edge pool at dusk with city lights on the horizon",
    width: 1000,
    height: 697,
    category: "residential",
  },
  {
    src: "/media/project-geometric-yard.webp",
    alt: "Geometric backyard pool with raised spa and spa spill",
    width: 1000,
    height: 643,
    category: "residential",
  },
  {
    src: "/media/project-spa-spillway.webp",
    alt: "Raised spa spilling into a pebble-finish pool",
    width: 1000,
    height: 584,
    category: "spa",
  },
  {
    src: "/media/project-spa-tile.webp",
    alt: "Spa with detailed tile and a sheer-descent water feature",
    width: 1000,
    height: 626,
    category: "spa",
  },
  {
    src: "/media/commercial-community.webp",
    alt: "Large community swimming pool with lap lanes and a spa",
    width: 1500,
    height: 1125,
    category: "commercial",
  },
  {
    src: "/media/commercial-indoor.webp",
    alt: "Indoor commercial pool with a spa and tiled deck",
    width: 1000,
    height: 714,
    category: "commercial",
  },
  {
    src: "/media/commercial-geometric.webp",
    alt: "Geometric pool with raised spa, photographed for commercial work",
    width: 1000,
    height: 649,
    category: "commercial",
  },
  {
    src: "/media/commercial-lap.webp",
    alt: "Rectilinear pool with raised spa and spa spillway",
    width: 1000,
    height: 650,
    category: "commercial",
  },
  {
    src: "/media/project-construction.webp",
    alt: "Pool shell under construction with steel and plumbing in place",
    width: 1000,
    height: 473,
    category: "construction",
  },
];

export const homeGallery = projects.filter((p) =>
  [
    "/media/project-architectural-dusk.webp",
    "/media/project-geometric-spa.webp",
    "/media/project-fire-bowls-spa.webp",
    "/media/project-vanishing-edge.webp",
    "/media/project-freeform-lagoon.webp",
    "/media/project-modern-lines.webp",
    "/media/commercial-community.webp",
    "/media/project-intimate-spa.webp",
  ].includes(p.src),
);

export const residentialProjects = projects.filter((p) =>
  ["residential", "spa"].includes(p.category),
);

export const commercialProjects = projects.filter(
  (p) => p.category === "commercial",
);
