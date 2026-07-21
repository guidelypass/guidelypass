export const siteConfig = {
  name: "GuidelyPass",
  url: "https://guidelypass.vercel.app",
};

export type RegionSlug = "europe" | "asia" | "americas" | "africa";
export type DestinationSlug =
  | "paris"
  | "rome"
  | "tokyo"
  | "bali"
  | "new-york"
  | "rio-de-janeiro"
  | "cape-town"
  | "serengeti";

export type DestinationStruct = {
  slug: DestinationSlug;
  image: string;
};

export type RegionStruct = {
  slug: RegionSlug;
  destinations: DestinationStruct[];
};

export const regions: RegionStruct[] = [
  {
    slug: "europe",
    destinations: [
      {
        slug: "paris",
        image:
          "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        slug: "rome",
        image:
          "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  {
    slug: "asia",
    destinations: [
      {
        slug: "tokyo",
        image:
          "https://images.unsplash.com/photo-1565618754154-c8011e5df2a6?auto=format&fit=crop&w=1200&q=80",
      },
      {
        slug: "bali",
        image:
          "https://images.unsplash.com/photo-1559628233-eb1b1a45564b?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  {
    slug: "americas",
    destinations: [
      {
        slug: "new-york",
        image:
          "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&fit=crop&w=1200&q=80",
      },
      {
        slug: "rio-de-janeiro",
        image:
          "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
  {
    slug: "africa",
    destinations: [
      {
        slug: "cape-town",
        image:
          "https://images.unsplash.com/photo-1626894169601-482d26b23f35?auto=format&fit=crop&w=1200&q=80",
      },
      {
        slug: "serengeti",
        image:
          "https://images.unsplash.com/photo-1526319238109-524eecb9b913?auto=format&fit=crop&w=1200&q=80",
      },
    ],
  },
];

export type ExperienceSlug = "hiking" | "cultural-tours" | "wildlife" | "beaches";

export type ExperienceStruct = {
  slug: ExperienceSlug;
  image: string;
};

export const experiences: ExperienceStruct[] = [
  {
    slug: "hiking",
    image:
      "https://images.unsplash.com/photo-1562593028-1fe2d15bde36?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "cultural-tours",
    image:
      "https://images.unsplash.com/photo-1538460120076-604b93a2ce88?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "wildlife",
    image:
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=600&q=80",
  },
  {
    slug: "beaches",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
  },
];
