export type ProjectCategory = "painting" | "tiling" | "team";

export type Project = {
  id: string;
  title: string;
  caption: string;
  category: ProjectCategory[];
  image: string;
  width: number;
  height: number;
  focal?: string;
  alt: string;
};

export const PROJECT_FILTERS: { value: "all" | ProjectCategory; label: string }[] = [
  { value: "all", label: "All" },
  { value: "painting", label: "Painting" },
  { value: "tiling", label: "Tiling" },
  { value: "team", label: "Team" },
];

export const PROJECTS: Project[] = [
  {
    id: "exterior-painting",
    title: "Exterior painting",
    caption: "Exterior painting concept",
    category: ["painting"],
    image: "/images/twinfinish/03_Services/renovation-exterior.webp",
    width: 1448,
    height: 1086,
    focal: "center 58%",
    alt: "Concept visual of painters finishing the exterior of a coastal Cape Town villa",
  },
  {
    id: "painting-progress",
    title: "Painting in progress",
    caption: "On-site painting concept",
    category: ["painting"],
    image: "/images/twinfinish/03_Services/exterior-painting.webp",
    width: 1448,
    height: 1086,
    focal: "62% 50%",
    alt: "Concept visual of a painter rolling an exterior wall beside a ladder",
  },
  {
    id: "precision-tiling",
    title: "Precision tiling",
    caption: "Floor tiling concept",
    category: ["tiling"],
    image: "/images/twinfinish/03_Services/floor-tiling.webp",
    width: 1448,
    height: 1086,
    focal: "center 55%",
    alt: "Concept visual of large-format floor tiles being set with levelling clips",
  },
  {
    id: "bathroom-finishes",
    title: "Bathroom finishes",
    caption: "Bathroom tiling concept",
    category: ["tiling"],
    image: "/images/twinfinish/03_Services/bathroom-wall-tiling.webp",
    width: 1672,
    height: 941,
    focal: "center 45%",
    alt: "Concept visual of a marble bathroom being tiled by the TwinFinish crew",
  },
  {
    id: "cape-town",
    title: "Cape Town service area",
    caption: "Cape Town project concept",
    category: ["painting", "team"],
    image: "/images/twinfinish/02_About/about-service-area.webp",
    width: 1448,
    height: 1086,
    focal: "center 52%",
    alt: "Concept visual of a finished Cape Town property with Table Mountain behind it",
  },
  {
    id: "team-workmanship",
    title: "Team workmanship",
    caption: "Team at work concept",
    category: ["painting", "team"],
    image: "/images/twinfinish/02_About/about-team.webp",
    width: 1448,
    height: 1086,
    focal: "center 45%",
    alt: "Concept visual of the TwinFinish crew holding brushes and rollers on site",
  },
];

export const PROJECT_PREVIEW: Project[] = [
  PROJECTS[4],
  PROJECTS[2],
  {
    id: "team-on-site",
    title: "Team workmanship",
    caption: "TwinFinish crew concept",
    category: ["painting", "team"],
    image: "/images/twinfinish/04_Projects/project-team-workmanship.webp",
    width: 1672,
    height: 941,
    focal: "center 45%",
    alt: "Concept visual of the TwinFinish team working on a Cape Town property",
  },
];
