/*
  Photo registry — 04-Fotos/02-procesadas (25 files, all authorized by Clara, 14-sep-2026).
  alt text is verbatim from alt-map.json. Do not rename files or reassign cities.
  `small` = ≤1000px source; thumbnail only, never hero/banner (design config §3).
*/
export type PhotoCategory =
  | "birthday"
  | "baby-shower"
  | "gender-reveal"
  | "bouquets"
  | "corporate"
  | "seasonal"
  | "graduation"

export type Photo = {
  file: string
  alt: string
  category: PhotoCategory
  width: number
  height: number
  small?: boolean
  /** Fits the quinceañera tone (shimmer wall, pampas, teen milestone). No real quince photos exist yet. */
  quinceStyle?: boolean
  secondary?: boolean
}

export const photos: Photo[] = [
  { file: "birthday-balloon-decor-shimmer-wall-pink-garland-13-01.jpg", alt: "Pink and silver balloon garland on a shimmer wall backdrop with 13 number balloons for a teen birthday", category: "birthday", width: 1386, height: 2000, quinceStyle: true },
  { file: "birthday-balloon-decor-shimmer-wall-pink-garland-13-02.jpg", alt: "Close-up of the pink and silver balloon garland and 13 number balloons on a shimmer wall", category: "birthday", width: 2000, height: 1483, quinceStyle: true },
  { file: "baby-shower-balloon-decor-arch-backdrop-blue-tan-bear-01.jpg", alt: "Blue, tan and cream balloon garland on a white arch backdrop with a teddy bear for a baby shower", category: "baby-shower", width: 1332, height: 2000 },
  { file: "birthday-balloon-decor-arch-backdrop-red-black-second-birthday-01.jpg", alt: "Red, black and white balloon garland on a white arch backdrop with a number 2 balloon for a second birthday", category: "birthday", width: 941, height: 1672, small: true },
  { file: "birthday-balloon-decor-gamer-backdrop-blue-green-01.jpg", alt: "Blue, green and black balloon garland on a gamer-themed neon backdrop for a 10th birthday", category: "birthday", width: 1125, height: 2000 },
  { file: "birthday-balloon-decor-gamer-backdrop-blue-green-02.jpg", alt: "Close-up of the blue and green balloon garland and neon controller sign on a gamer birthday backdrop", category: "birthday", width: 1125, height: 2000 },
  { file: "birthday-balloon-decor-mario-backdrop-01.jpg", alt: "Video game themed birthday backdrop with colorful balloon garlands and a red centerpiece", category: "birthday", width: 1179, height: 694, small: true },
  { file: "baby-shower-balloon-decor-sage-hoop-arch-bear-01.jpg", alt: "Sage green and cream balloon hoop arch with a teddy bear basket set up outdoors for a baby shower", category: "baby-shower", width: 942, height: 901, small: true },
  { file: "baby-shower-balloon-decor-sage-hoop-arch-bear-02.jpg", alt: "Sage green and cream balloon hoop arch with a teddy bear in a basket at an outdoor baby shower", category: "baby-shower", width: 942, height: 1275, small: true },
  { file: "gender-reveal-balloon-decor-sage-cream-column-01.jpg", alt: "Sage green and cream balloon column topped with a Boy or Girl bubble balloon at an outdoor gender reveal", category: "gender-reveal", width: 923, height: 1556, small: true },
  { file: "balloon-bouquets-birthday-number-9-bear-01.jpg", alt: "Birthday balloon bouquet with a number 9 balloon, a bear-themed bubble balloon and yellow and cream balloons", category: "bouquets", width: 1125, height: 2000 },
  { file: "balloon-bouquets-birthday-bear-close-up-01.jpg", alt: "Close-up of a bear-themed bubble balloon with gold pearls on a birthday balloon bouquet", category: "bouquets", width: 1125, height: 2000 },
  { file: "corporate-balloon-decor-office-star-bouquets-blue-01.jpg", alt: "Blue and silver star balloon bouquets decorating an office lobby for a corporate event", category: "corporate", width: 1280, height: 960 },
  { file: "corporate-balloon-decor-welcome-bubble-balloon-01.jpg", alt: "Clear bubble balloon with a Bienvenidos welcome message and blue foil balloons at a corporate office", category: "corporate", width: 960, height: 1280, small: true },
  { file: "corporate-balloon-decor-star-bouquet-breakroom-01.jpg", alt: "Blue and silver star balloon bouquet in an office break room for a corporate welcome event", category: "corporate", width: 1254, height: 1254 },
  { file: "birthday-balloon-decor-superhero-dessert-table-01.jpg", alt: "Superhero themed birthday dessert table with red, blue and yellow balloons and a comic backdrop", category: "birthday", width: 1500, height: 2000 },
  { file: "birthday-balloon-decor-superhero-dessert-table-02.jpg", alt: "Wide view of a superhero themed birthday setup with balloon garlands, comic backdrop and dessert table", category: "birthday", width: 1500, height: 2000 },
  { file: "balloon-bouquets-valentines-bear-red-hearts-01.jpg", alt: "Valentine balloon bouquet with a teddy bear foil balloon, red heart balloons and gold accents", category: "bouquets", width: 983, height: 1962, small: true },
  { file: "birthday-balloon-decor-pink-cream-gold-garland-pampas-01.jpg", alt: "Pink, cream and chrome gold balloon garland with pampas grass and a gold stand for a birthday", category: "birthday", width: 1086, height: 1448, quinceStyle: true },
  { file: "baby-shower-balloon-decor-baby-in-bloom-backdrop-pink-purple-01.jpg", alt: "Pink, lavender and purple balloon garland on a Baby in Bloom arch backdrop with a floral panel", category: "baby-shower", width: 1552, height: 2000 },
  { file: "seasonal-balloon-decor-spring-tulip-column-pastel-01.jpg", alt: "Pastel balloon column with tulip balloon accents beside a brick entryway for a spring celebration", category: "seasonal", width: 1125, height: 2000 },
  { file: "seasonal-balloon-decor-spring-tulip-column-pastel-02.jpg", alt: "Pastel balloon column with tulip balloons framing a front door for a spring celebration", category: "seasonal", width: 1125, height: 2000 },
  { file: "birthday-balloon-decor-first-birthday-daisy-backdrop-pink-mint-01.jpg", alt: "Pink and mint balloon garland with daisy accents on a purple backdrop for a groovy first birthday", category: "birthday", width: 1607, height: 2000 },
  { file: "graduation-balloon-decor-garage-arch-red-black-01.jpg", alt: "Red, black and white balloon arch over a garage door for a college-bound graduation party", category: "graduation", width: 1125, height: 2000 },
  { file: "baby-shower-balloon-decor-welcome-sign-easel-01.jpg", alt: "Floral welcome sign on an easel with fresh flowers at an outdoor baby shower", category: "baby-shower", width: 1125, height: 2000, secondary: true },
]

export function photoSrc(p: Photo) {
  return `/images/${p.file}`
}

export function byFile(file: string): Photo {
  const p = photos.find((x) => x.file === file)
  if (!p) throw new Error(`Unknown photo: ${file}`)
  return p
}

export function byCategory(...cats: PhotoCategory[]) {
  return photos.filter((p) => cats.includes(p.category))
}

/** Gallery groups — order and labels from doc 11 §7 (/gallery). */
export type GalleryGroup = {
  id: string
  label: string
  photos: Photo[]
  /** Service page this group links to, when it exists. */
  href?: string
  hrefLabel?: string
}

export const galleryGroups: GalleryGroup[] = [
  {
    id: "birthday",
    label: "Birthday",
    photos: byCategory("birthday"),
    href: "/birthday-and-baby-shower-decor",
    hrefLabel: "Birthday decor details",
  },
  {
    id: "baby-shower-gender-reveal",
    label: "Baby Shower & Gender Reveal",
    photos: [...byCategory("baby-shower").filter((p) => !p.secondary), ...byCategory("gender-reveal"), ...byCategory("baby-shower").filter((p) => p.secondary)],
    href: "/birthday-and-baby-shower-decor",
    hrefLabel: "Baby shower & gender reveal details",
  },
  {
    id: "quinceanera-style",
    label: "Quinceañera-style",
    photos: photos.filter((p) => p.quinceStyle),
    href: "/quinceanera-decorations",
    hrefLabel: "Quinceañera decorations",
  },
  {
    id: "graduation",
    label: "Graduation",
    photos: byCategory("graduation"),
    href: "/full-event-design#schools-corporate",
    hrefLabel: "Graduation & school events",
  },
  {
    id: "corporate-school",
    label: "Corporate & School",
    photos: byCategory("corporate"),
    href: "/full-event-design#schools-corporate",
    hrefLabel: "Corporate & school events",
  },
  {
    id: "bouquets-seasonal",
    label: "Bouquets & Seasonal",
    photos: [...byCategory("bouquets"), ...byCategory("seasonal")],
    href: "/balloon-garlands",
    hrefLabel: "Balloon garlands from $250",
  },
]

/** Hero / banner slots (mapa-fotos.csv "uso_sugerido"). Never a `small` photo. */
export const heroPhotos = {
  home: byFile("birthday-balloon-decor-shimmer-wall-pink-garland-13-01.jpg"),
  fullEventDesign: byFile("baby-shower-balloon-decor-arch-backdrop-blue-tan-bear-01.jpg"),
  balloonGarlands: byFile("birthday-balloon-decor-pink-cream-gold-garland-pampas-01.jpg"),
  quinceanera: byFile("birthday-balloon-decor-shimmer-wall-pink-garland-13-02.jpg"),
  birthdayBabyShower: byFile("birthday-balloon-decor-first-birthday-daisy-backdrop-pink-mint-01.jpg"),
  gallery: byFile("birthday-balloon-decor-superhero-dessert-table-02.jpg"),
  about: byFile("baby-shower-balloon-decor-baby-in-bloom-backdrop-pink-purple-01.jpg"),
  contact: byFile("seasonal-balloon-decor-spring-tulip-column-pastel-02.jpg"),
  serviceAreas: byFile("graduation-balloon-decor-garage-arch-red-black-01.jpg"),
  reviews: byFile("balloon-bouquets-birthday-number-9-bear-01.jpg"),
}
