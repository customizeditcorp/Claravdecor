/*
  Photo registry — 04-Fotos/02-procesadas (25 files 14-sep-2026 + 34 decor and 6 founder/process photos 21-sep-2026, all authorized by Clara).
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
  | "bridal-shower"
  | "wedding"

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
  // --- Added 21-sep-2026: 34 photos from "nuevas fotos/procesadas" (CSV reporte-clasificacion-2026-09-21), all authorized by Clara. ---
  { file: "birthday-balloon-decor-tropical-wreath-arch-table-01.jpg", alt: "Pink, teal and yellow tropical balloon wreath arch over a party table with a Life's a Party neon sign", category: "birthday", width: 1406, height: 2000 },
  { file: "birthday-balloon-decor-tropical-wreath-cake-closeup-01.jpg", alt: "Close-up of a tropical fruit-themed birthday cake in front of a pink, teal and yellow balloon wreath", category: "birthday", width: 901, height: 2000, small: true },
  { file: "birthday-balloon-decor-tenth-birthday-kitchen-garland-01.jpg", alt: "Orange, mint and red balloon garland over kitchen cabinets with number 10 balloons for a tenth birthday", category: "birthday", width: 2000, height: 901, small: true },
  { file: "corporate-balloon-decor-office-lobby-column-install-01.jpg", alt: "Navy, silver and gold balloon column being installed in a marble office lobby", category: "corporate", width: 901, height: 2000, small: true },
  { file: "birthday-balloon-decor-sonic-backdrop-blue-black-01.jpg", alt: "Blue, black and silver Sonic the Hedgehog themed balloon backdrop with a number 5 for a birthday", category: "birthday", width: 2000, height: 1592 },
  { file: "birthday-balloon-decor-sonic-backdrop-blue-black-02.jpg", alt: "Close-up of the blue, black and silver Sonic the Hedgehog balloon backdrop and pedestal", category: "birthday", width: 1220, height: 2000 },
  { file: "seasonal-balloon-decor-halloween-witch-house-sculpture-01.jpg", alt: "Balloon sculpture of two witches beside a haunted gingerbread-style house for a Halloween display", category: "seasonal", width: 901, height: 2000, small: true },
  { file: "seasonal-balloon-decor-halloween-hulk-sculpture-01.jpg", alt: "Purple and green Hulk balloon sculpture at an event", category: "seasonal", width: 901, height: 2000, small: true },
  { file: "seasonal-balloon-decor-halloween-door-entrance-black-orange-01.jpg", alt: "Black and orange Halloween balloon garland flanking a brick front door entrance", category: "seasonal", width: 901, height: 2000, small: true },
  { file: "seasonal-balloon-decor-fall-door-entrance-orange-black-01.jpg", alt: "Orange, brown and black fall balloon garland flanking a brick front door entrance", category: "seasonal", width: 1500, height: 2000 },
  { file: "seasonal-balloon-decor-fall-door-entrance-orange-black-02.jpg", alt: "Wide view of an orange, brown and black fall balloon garland framing a front door entrance", category: "seasonal", width: 942, height: 1852, small: true },
  { file: "birthday-balloon-decor-ninja-soccer-garland-green-black-01.jpg", alt: "Green, black and white balloon garland with ninja and soccer ball balloons on a hallway wall", category: "birthday", width: 1125, height: 2000 },
  { file: "birthday-balloon-decor-ninja-soccer-garland-green-black-02.jpg", alt: "Wide view of a green, black and white ninja and soccer themed balloon garland in a gym hallway", category: "birthday", width: 1125, height: 2000 },
  { file: "balloon-bouquets-fathers-day-star-chocolate-box-01.jpg", alt: "Close-up of a Happy Father's Day star balloon with a chocolate gift box balloon bouquet", category: "bouquets", width: 1125, height: 2000 },
  { file: "balloon-bouquets-fathers-day-star-chocolate-box-02.jpg", alt: "Happy Father's Day star balloon bouquet with a chocolate heart gift box, held in hand", category: "bouquets", width: 1125, height: 2000 },
  { file: "birthday-balloon-decor-sage-cream-silver-column-shimmer-wall-01.jpg", alt: "Sage green, cream and silver organic balloon column on a silver shimmer wall backdrop", category: "birthday", width: 1125, height: 2000, quinceStyle: true },
  { file: "birthday-balloon-decor-sage-cream-silver-column-shimmer-wall-02.jpg", alt: "Close-up of the sage green, cream and silver organic balloon column on a shimmer wall backdrop", category: "birthday", width: 1125, height: 2000, quinceStyle: true },
  { file: "birthday-balloon-decor-dragon-ball-red-blue-01.jpg", alt: "Dragon Ball Z themed balloon backdrop in red, blue and cream with character cutouts and a power level sign", category: "birthday", width: 1125, height: 2000 },
  { file: "birthday-balloon-decor-dragon-ball-red-blue-02.jpg", alt: "Close-up of the red, blue and cream Dragon Ball Z themed balloon backdrop with character cutouts", category: "birthday", width: 1125, height: 2000 },
  { file: "bridal-shower-balloon-decor-arch-sage-blush-01.jpg", alt: "Sage green, blush and cream organic balloon arch beside a wall with gold bridal shower script", category: "bridal-shower", width: 1125, height: 2000 },
  { file: "bridal-shower-balloon-decor-arch-sage-blush-detail-02.jpg", alt: "Detail of a sage green, blush and cream balloon arch beside a green glass vase with flowers", category: "bridal-shower", width: 1125, height: 2000 },
  { file: "bridal-shower-balloon-decor-arch-sage-blush-detail-03.jpg", alt: "Detail of a sage green, blush and cream organic balloon arch with fresh flowers", category: "bridal-shower", width: 1125, height: 2000 },
  { file: "bridal-shower-balloon-decor-welcome-sign-easel-04.jpg", alt: "Bridal shower welcome sign on an easel beside cream and sage balloons", category: "bridal-shower", width: 1125, height: 2000 },
  { file: "birthday-balloon-decor-minnie-mouse-red-black-01.jpg", alt: "Red, white and black Minnie Mouse themed dessert table with a number 2 and heart-covered cake", category: "birthday", width: 1440, height: 1800 },
  { file: "birthday-balloon-decor-minnie-mouse-red-black-02.jpg", alt: "Wide view of a red, white and black Minnie Mouse themed second birthday dessert table with balloon columns", category: "birthday", width: 1440, height: 1802 },
  { file: "birthday-balloon-decor-avengers-dessert-table-01.jpg", alt: "Colorful Avengers superhero themed balloon column and dessert table with a comic backdrop", category: "birthday", width: 1280, height: 720, small: true },
  { file: "baby-shower-balloon-decor-outdoor-green-white-gold-arch-baby-blocks-01.jpg", alt: "Green, white and gold organic balloon arch outdoors with wooden blocks spelling BABY", category: "baby-shower", width: 1440, height: 1440 },
  { file: "birthday-balloon-decor-spiderman-red-black-silver-01.jpg", alt: "Red, black and silver Spider-Man themed birthday cake display with a comic-style name sign", category: "birthday", width: 1080, height: 1080 },
  { file: "birthday-balloon-decor-spiderman-red-black-silver-02.jpg", alt: "Close-up of the red, black and silver Spider-Man themed cake and balloon display", category: "birthday", width: 1080, height: 1080 },
  { file: "wedding-balloon-free-macrame-arch-driftwood-pampas-01.jpg", alt: "Bride and groom embracing under a boho macrame ceremony arch with driftwood branches, pampas grass and white florals", category: "wedding", width: 1112, height: 1600 },
  { file: "wedding-balloon-free-macrame-arch-driftwood-pampas-02.jpg", alt: "Close-up of the bride and groom kissing under the macrame ceremony arch with their dog", category: "wedding", width: 1280, height: 853, small: true },
  { file: "wedding-macrame-photo-wall-driftwood-floral-01.jpg", alt: "Wedding party posing in front of a macrame and driftwood photo wall with white floral accents", category: "wedding", width: 1066, height: 1600 },
  { file: "wedding-ceremony-aisle-dried-pampas-floral-entrance-01.jpg", alt: "Wide view of a wedding ceremony aisle with dried pampas grass and floral entrance installations and an olive green runner", category: "wedding", width: 1600, height: 1066 },
  { file: "wedding-reception-fairy-light-ivy-backdrop-01.jpg", alt: "Bride and groom at the cake table in front of a fairy-light, tulle and ivy garland reception backdrop", category: "wedding", width: 1600, height: 1066 },
]

/** Founder / process photos — not decor, never in gallery groups. Used on /about (design config §3, "la persona detrás del proceso"). */
export type TeamPhoto = { file: string; alt: string; width: number; height: number; small?: boolean }
export const teamPhotos: TeamPhoto[] = [
  { file: "clara-vento-certificacion-wedding-planning-expert-01.jpg", alt: "Clara Vento holding her international Wedding Planning Expert, Destination Wedding Specialist and Digital Marketing for Planners certification", width: 1080, height: 1920 },
  { file: "clara-vento-instalando-backdrop-avengers-01.jpg", alt: "Clara Vento installing red and yellow balloons on an Avengers themed birthday backdrop", width: 720, height: 1280, small: true },
  { file: "clara-vento-instalando-backdrop-avengers-02.jpg", alt: "Clara Vento adjusting balloons on an Avengers themed birthday backdrop, wearing a ClaravDecor event staff shirt", width: 720, height: 1280, small: true },
  { file: "clara-vento-instalando-arco-baby-shower-01.jpg", alt: "Clara Vento installing a green, white and gold organic balloon arch for an outdoor baby shower", width: 1440, height: 1440 },
  { file: "clara-vento-preparando-mesa-dulce-01.jpg", alt: "Clara Vento, wearing a ClaravDecor branded shirt, arranging a dessert table with flowers", width: 1200, height: 1600 },
  { file: "clara-vento-preparando-mesa-dulce-02.jpg", alt: "Clara Vento setting glassware on a dessert table decorated with flowers", width: 1200, height: 1600 },
]

export function teamPhoto(file: string): TeamPhoto {
  const p = teamPhotos.find((x) => x.file === file)
  if (!p) throw new Error(`Unknown team photo: ${file}`)
  return p
}

export function teamPhotoSrc(p: TeamPhoto) {
  return `/images/${p.file}`
}

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
    id: "bridal-shower-wedding",
    label: "Bridal Shower & Wedding",
    photos: [...byCategory("bridal-shower"), ...byCategory("wedding")],
    href: "/full-event-design#weddings-bridal",
    hrefLabel: "Bridal showers & weddings",
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
