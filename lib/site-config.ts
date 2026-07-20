export const siteConfig = {
  name: "GuidelyPass",
  tagline: "Discover the World: Your Complete Destination Guides",
  description:
    "GuidelyPass publishes in-depth, purchasable travel guides for popular destinations — what to bring, when to go, what to do, where to eat, and what to know before you land.",
  url: "https://guidelypass.vercel.app",
};

export type Destination = {
  name: string;
  slug: string;
  image: string;
};

export type Region = {
  name: string;
  slug: string;
  destinations: Destination[];
};

export const regions: Region[] = [
  {
    name: "Europe",
    slug: "europe",
    destinations: [
      {
        name: "Paris",
        slug: "paris",
        image:
          "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Rome",
        slug: "rome",
        image:
          "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    name: "Asia",
    slug: "asia",
    destinations: [
      {
        name: "Tokyo",
        slug: "tokyo",
        image:
          "https://images.unsplash.com/photo-1565618754154-c8011e5df2a6?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Bali",
        slug: "bali",
        image:
          "https://images.unsplash.com/photo-1559628233-eb1b1a45564b?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    name: "Americas",
    slug: "americas",
    destinations: [
      {
        name: "New York",
        slug: "new-york",
        image:
          "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Rio de Janeiro",
        slug: "rio-de-janeiro",
        image:
          "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
  {
    name: "Africa",
    slug: "africa",
    destinations: [
      {
        name: "Cape Town",
        slug: "cape-town",
        image:
          "https://images.unsplash.com/photo-1626894169601-482d26b23f35?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Serengeti",
        slug: "serengeti",
        image:
          "https://images.unsplash.com/photo-1526319238109-524eecb9b913?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
];

export type Experience = {
  name: string;
  slug: string;
  image: string;
};

export const experiences: Experience[] = [
  {
    name: "Hiking",
    slug: "hiking",
    image:
      "https://images.unsplash.com/photo-1562593028-1fe2d15bde36?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Cultural Tours",
    slug: "cultural-tours",
    image:
      "https://images.unsplash.com/photo-1538460120076-604b93a2ce88?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Wildlife",
    slug: "wildlife",
    image:
      "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Beaches",
    slug: "beaches",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
  },
];
