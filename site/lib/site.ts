export const SITE = {
  name: "TwinFinish Painting & Tiling",
  short: "TwinFinish",
  descriptor: "Painting & Tiling",
  founder: "Frank Sbu Biyela",
  phoneDisplay: "063 499 7520",
  phoneIntl: "+27634997520",
  whatsapp: "https://wa.me/27634997520",
  area: "Cape Town & surrounding areas",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Professional painting and tiling for homes, apartments, offices and commercial spaces in Cape Town and surrounding areas.",
} as const;

export const PHONE_HREF = `tel:${SITE.phoneIntl}`;

export type NavItem = {
  href: string;
  label: string;
};

export const NAV: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export const SERVICE_OVERVIEW = [
  {
    title: "Interior painting",
    copy: "Walls, ceilings, trim, feature walls, colour changes and room refreshes, with proper preparation before the finish coats.",
    href: "/services/painting",
  },
  {
    title: "Exterior painting",
    copy: "Exterior surfaces prepared and painted for a clean, durable finish appropriate to the property and exposure.",
    href: "/services/painting",
  },
  {
    title: "Wall & floor tiling",
    copy: "Measured layouts, clean cuts, consistent joints, careful installation and detailed grouting for bathrooms, kitchens and other tiled spaces.",
    href: "/services/tiling",
  },
  {
    title: "Surface preparation & repairs",
    copy: "Patching, filling, sanding and minor preparation work required before painting or tiling.",
    href: "/services",
  },
  {
    title: "Commercial and rental refreshes",
    copy: "Practical painting and tiling scopes for offices, rental turnovers, shops and small commercial spaces.",
    href: "/services",
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Discuss",
    copy: "Tell us what you need, where the work is located and what the space has to work around.",
  },
  {
    step: "02",
    title: "Assess",
    copy: "Review surfaces, measurements, access and finishing requirements before anything starts.",
  },
  {
    step: "03",
    title: "Prepare & work",
    copy: "Protect the space, prepare correctly, then paint or tile with precision.",
  },
  {
    step: "04",
    title: "Finish & hand over",
    copy: "Complete details, clean the work area and review the result with you.",
  },
];
