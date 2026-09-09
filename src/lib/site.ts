export const site = {
  name: "Villa Pools, Inc.",
  shortName: "Villa Pools",
  tagline: "Custom Pools Built to Become the Center of the Backyard",
  description:
    "Villa Pools builds residential and commercial pools, spas, fountains, and water features across Southern California—from complex engineering to the final finish.",
  originalUrl: "https://www.villapoolsinc.com/",
  phoneDisplay: "(714) 488-7563",
  phoneTel: "+17144887563",
  cellDisplay: "(714) 746-1529",
  cellTel: "+17147461529",
  email: "lbt@villapoolsinc.com",
  addressLines: [
    "17853 Santiago Blvd., Suite 107-302",
    "Villa Park, CA 92861",
  ],
  license: {
    number: "1004609",
    classification: "C-53",
    classificationName: "Swimming Pool",
    status: "Current and active",
    issued: "June 22, 2015",
    expires: "June 30, 2027",
    verifiedOn: "September 8, 2026",
    cslbUrl: "https://www.cslb.ca.gov/1004609",
  },
  rla: {
    number: "1879",
    label: "Registered Landscape Architect",
    since: "1980",
  },
  counties: [
    "Orange County",
    "Riverside County",
    "San Bernardino County",
    "Southern Los Angeles County",
    "Northern San Diego County",
  ],
  experienceYears: "38+",
  nav: [
    { href: "/work", label: "Work" },
    { href: "/residential", label: "Residential" },
    { href: "/commercial", label: "Commercial" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
} as const;

export type NavItem = (typeof site.nav)[number];
