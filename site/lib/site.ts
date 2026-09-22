/*
  Single source of business truth — feeds header, footer, trust bar, schema and pages.
  NAP: 06-Entregables/07-NAP-Canonico (12-sep-2026). Copy: 06-Entregables/11-Sitemap v2 (14-sep-2026).
  Canonical host: apex, no www. Change `business.url` here and nowhere else.
*/

export const business = {
  name: "ClaravDecor",
  descriptor: "Event Decor",
  owner: "Clara Vento",
  phone: "(469) 567-0386",
  phoneE164: "+14695670386",
  phoneHref: "tel:+14695670386",
  smsHref: "sms:+14695670386",
  email: "info@claravdecor.com",
  /** Service-area business. No public address is ever published. */
  baseArea: "Dallas, TX 75248",
  baseZip: "75248",
  hours: "Mon–Sun 8:00 AM – 8:00 PM",
  since: 2019,
  ownerExperience: "10 years of experience",
  url: "https://claravdecor.com",
  instagram: "https://www.instagram.com/claravdecor/",
  instagramHandle: "@claravdecor",
  googleReviews: {
    ratingValue: "5.0",
    reviewCount: "7",
  },
  // [TO CONFIRM] Google Place ID — "Leave a review" link stays inactive until we have it.
  reviewUrl: null as string | null,
} as const

export const cta = {
  primary: { label: "Get your free quote", href: "/contact#quote" },
  secondary: { label: "See our work", href: "/gallery" },
  responseTime: "We reply within 24–48 business hours.",
}

export const nav = {
  services: [
    { href: "/full-event-design", label: "Full Event Design" },
    { href: "/balloon-garlands", label: "Balloon Garlands" },
    { href: "/quinceanera-decorations", label: "Quinceañera" },
    { href: "/birthday-and-baby-shower-decor", label: "Birthday & Baby Shower" },
  ],
  main: [
    { href: "/gallery", label: "Gallery" },
    { href: "/service-areas", label: "Service Areas" },
    { href: "/reviews", label: "Reviews" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
}

/** Trust bar — verifiable facts only (design config §3). Nothing tagged [CONFIRM]. */
export const trustFacts = [
  "Mockup approved before your event",
  "Set up before your first guest arrives",
  "Takedown included",
  `Serving North Dallas since ${business.since}`,
]

/** How it works — 5 phases. Mockup is its own step (Craft/Method reinforcement). */
export const processSteps = [
  {
    title: "Tell us about your idea.",
    body: "Share your event type, venue, date, theme, colors and budget — inspiration photos welcome. Free quote, no obligation.",
  },
  {
    title: "We read your space.",
    body: "Indoor or outdoor, surface, power access, height, weather — this decides the balloons, the technique, and how everything is anchored so it holds.",
  },
  {
    title: "You lock in your date.",
    body: "You get an invoice with everything spelled out and a deposit. Once it's paid, your date is reserved — exclusively for you.",
  },
  {
    title: "We design it and show you.",
    body: "Once your date is booked, we build your custom design — balloon architecture sized for your space, your exact palette (double-stuffed when your color doesn't exist off the shelf) — and send you a mockup to approve or adjust.",
    // [TO CONFIRM] real mockup example image — slot hidden until it exists.
    mockupSlot: true,
  },
  {
    title: "We set up and take down.",
    body: "Everything is installed before your first guest arrives, and removed on schedule when it's over.",
  },
]

/** "What we handle, and what we don't" — the cheapest trust piece. */
export const honest = {
  heading: "Honest about what we can promise",
  handle: [
    "Building to your approved mockup",
    "Choosing balloons and technique for your exact site, indoor or outdoor",
    "Installing before your first guest arrives",
    "Full takedown on schedule",
  ],
  upfront: [
    "Weather for outdoor events — we plan for it, we can't control it",
    "How long balloons hold up outdoors in Texas heat, wind and sun",
    "Care of rented pieces once the event is underway",
  ],
  /**
   * Guarantee — Clara offers it in practice. Final wording (own cause + time window) is
   * [CONFIRM] — Addendum §7 open. Published as a plain commitment, never as "guarantee"
   * until it's written down.
   */
  commitment: "We stand behind your setup. If anything fails on our end, we come back, fix it, and replace it. Your event has to look right.",
  commitmentPending: true,
}

export const pricing = {
  anchor: "$250",
  garlandSpec: "up to 8 ft, up to 3 colors, delivered and installed within 20 miles of 75248",
  quoteTerms: "Every quote is free, with no obligation, in 24–48 business hours.",
}

export type Faq = { question: string; answer: string }

/** FAQ master — doc 11 §6. Real objections (Marisol / Andrea). Figures from Addendum C4. */
export const faqs = {
  cost: {
    question: "How much does this cost?",
    answer: "Our balloon garland starts at $250 (up to 8 ft, up to 3 colors, delivered and installed within 20 miles of 75248) — that's a starting point, not full event decor. Full event design is quoted around your space and vision. Every quote is free, no obligation, in 24–48 business hours.",
  },
  deposit: {
    question: "Why isn't the deposit refundable?",
    answer: "Booking your date takes it off the market for other requests and starts our planning, sourcing and design work for you. It's explained in your quote before you pay.",
  },
  distance: {
    question: "Do you charge extra for distance?",
    answer: "Travel within our core North Dallas area is included. Events farther out — Frisco, McKinney, Fort Worth, Arlington, Grapevine — include a distance fee in your quote.",
  },
  weather: {
    question: "What if my event is outdoors and it rains?",
    answer: "We evaluate your site ahead of time and plan for it, including a backup option — but weather itself is never something we can guarantee.",
  },
  shortNotice: {
    question: "My event is in less than two weeks — can you still help?",
    answer: "Often, yes. Short-notice bookings may include a small fee, which we'll explain upfront in your quote.",
  },
  heat: {
    question: "Do balloons pop or deflate in the heat?",
    answer: "It can happen outdoors — Texas heat, wind and sun affect them. We choose materials and placement with that in mind, and if something fails on our end, we fix it.",
  },
  colors: {
    question: "Can you match our exact colors?",
    answer: "Yes — when the color you need doesn't exist off the shelf, we double-stuff to match your palette exactly.",
  },
  takedown: {
    question: "Do you install and take everything down?",
    answer: "Yes, both are included in every design — you don't lift a finger before or after.",
  },
  schools: {
    question: "Do you work with schools and businesses?",
    answer: "Yes, on a recurring basis — we design around your brand colors or campus theme and install before doors open.",
  },
  quinceBooking: {
    question: "How far in advance should we book?",
    answer: "Most quinceañeras book 3–8 months ahead to lock in the date and give us time to design; we can often accommodate shorter timelines too — ask us.",
  },
  quinceColors: {
    question: "Can you match our exact colors?",
    answer: "Yes — when your color isn't available off the shelf, we double-stuff to match it exactly.",
  },
  weddings: {
    question: "Do you decorate bridal showers and weddings?",
    answer: "Yes. Bridal showers follow the same process as any full design — organic arches, welcome signage and table styling in the bride's palette. For intimate weddings we also build balloon-free installations: macramé and driftwood ceremony arches, dried florals and fairy-light backdrops. Both are quoted as full event design around your venue and date.",
  },
  familyColors: {
    question: "Can you match our exact theme colors?",
    answer: "Yes — when your color isn't available off the shelf, we double-stuff to match it exactly.",
  },
  familyBooking: {
    question: "How far in advance should we book a baby shower or birthday?",
    answer: "Many book 1–3 weeks ahead, though popular dates fill faster — the earlier you reach out, the more options you have.",
  },
} satisfies Record<string, Faq>

export type Review = {
  /** Reviewer name exactly as it appears on Google. */
  name: string
  lang: "en" | "es"
  /** Excerpt as captured from the public GBP. Full text + date: [TO CONFIRM] export. */
  excerpt: string
  context?: string
}

/**
 * 7 real Google reviews, 5.0 average (public GBP). Quoted as text with attribution.
 * No `Review` schema until a verified export with dates exists (doc 11 §9).
 */
export const reviews: Review[] = [
  { name: "mayra rodriguez", lang: "en", excerpt: "The best decorator because she brings to life everything we imagine to surprise and delight our son on each birthday…", context: "Returning client — every birthday" },
  { name: "gaby castaneda", lang: "en", excerpt: "…She has created many of our school decorations… professionalism, reliability, and attention to detail…", context: "School events" },
  { name: "SMARTpro Academy", lang: "es", excerpt: "Clara lleva años decorando nuestros eventos, ¡simplemente espectacular! El nivel de detalle y el amor que le pone…", context: "Recurring institutional client" },
  { name: "JOMMY MARTINEZ", lang: "es", excerpt: "He tenido la oportunidad de trabajar con Clara en planificación de fiestas de cumpleaños y eventos corporativos, y la recomiendo ampliamente…", context: "Event planner — birthdays and corporate" },
  { name: "Maria Emilia Cordero de Arroyo", lang: "es", excerpt: "", context: "Attention to detail, professional and responsible" },
  { name: "Dayana Castro", lang: "es", excerpt: "Decoraciones espectaculares hechas con amor y pasión… cada detalle pensado!!!" },
  { name: "Fabian Toloza", lang: "es", excerpt: "Excelente trabajo, profesional y muy puntual 😃" },
]

/** Three rotating quotes on the home page (doc 11 §2 Section 5). */
export const homeReviews = [reviews[0], reviews[1], reviews[3]]

/**
 * Service areas — Anexo NAP §3, provisional list agreed for launch.
 * Grapevine / Southlake / Highland Park / University Park: [TO CONFIRM] Clara decides (not before 19-sep).
 */
export const areas = {
  core: ["Dallas", "Addison", "Richardson", "Carrollton", "Farmers Branch", "Coppell", "Plano"],
  extended: ["Frisco", "McKinney", "Allen", "Garland", "Irving", "The Colony"],
  coreNote: "Core area — no travel fee",
  extendedNote: "Extended area — distance fee applies",
}

export const areasServedAll = [...areas.core, ...areas.extended]

export type Service = {
  slug: string
  title: string
  navLabel: string
  metaTitle: string
  metaDescription: string
  h1: string
  intro: string
  /** schema.org Service.serviceType */
  serviceType: string
  included: string[]
  faqs: Faq[]
  ctaLabel: string
  themeAccent?: "sage" | "blue" | "blush"
}

export const services: Service[] = [
  {
    slug: "full-event-design",
    title: "Full Event Design",
    navLabel: "Full Event Design",
    metaTitle: "Full Event Design & Balloon Decor | ClaravDecor Dallas",
    metaDescription: "Custom event design for North Dallas — backdrops, balloon architecture and full-room styling, built for your space and approved before your event. Free quote in 24–48 hrs.",
    h1: "Full Event Design in North Dallas",
    intro: "You imagined a room. We build it to match — backdrops, balloon architecture, pedestals, signage and table styling designed around your actual space, not a catalog. You approve the design before the event, then walk into a room that's already finished.",
    serviceType: "Full event decor design and installation",
    included: [
      "Custom backdrop and balloon architecture, sized and colored to your event",
      "Pedestals, decorative furniture and signage designed as one concept",
      "Main table and dessert table styling",
      "Color matched to your exact palette, double-stuffed when it doesn't exist off the shelf",
      "A mockup of your design to approve or adjust before the event",
      "Full installation and takedown",
    ],
    faqs: [faqs.cost, faqs.deposit, faqs.distance, faqs.weather, faqs.schools, faqs.weddings],
    ctaLabel: "Get your free quote for your event",
  },
  {
    slug: "balloon-garlands",
    title: "Balloon Garlands",
    navLabel: "Balloon Garlands",
    metaTitle: "Balloon Garlands Dallas — From $250 | ClaravDecor",
    metaDescription: "Organic balloon garlands in North Dallas from $250 — up to 8 ft, up to 3 colors, delivered, installed and taken down. Color-matched to your palette. Free quote in 24–48 hrs.",
    h1: "Balloon Garlands in North Dallas — From $250",
    intro: "The easiest way to start. An organic balloon garland in your exact colors, delivered and installed before your guests arrive — and gone when it's over. No kits, no ladders, no guessing whether it will hold.",
    serviceType: "Organic balloon garland design and installation",
    included: [
      "Organic balloon garland up to 8 ft, up to 3 colors",
      "Color matched to your palette — double-stuffed when the shade doesn't exist off the shelf",
      "Sized and anchored for your wall, arch, table or entryway",
      "Delivery and installation within 20 miles of 75248",
      "Takedown included",
    ],
    faqs: [faqs.cost, faqs.colors, faqs.heat, faqs.distance, faqs.shortNotice, faqs.takedown],
    ctaLabel: "Get your free garland quote",
  },
  {
    slug: "quinceanera-decorations",
    title: "Quinceañera Decorations",
    navLabel: "Quinceañera",
    metaTitle: "Quinceañera Decorations Dallas–Fort Worth | ClaravDecor",
    metaDescription: "Custom quinceañera decor in North Dallas — backdrops, balloon garlands, marquee numbers and table styling designed around her theme. Free quote in 24–48 hrs.",
    h1: "Quinceañera Decorations in North Dallas",
    intro: "Her theme, her colors, her day — built into a room she walks into and recognizes immediately. Balloon garlands, arch backdrops, marquee numbers, and main table and dessert table styling, designed around her vision and approved before the big day.",
    serviceType: "Quinceañera decoration design and installation",
    included: [
      "Custom backdrop and garland in her palette",
      "Marquee number or name signage",
      "Main table and dessert table styling",
      "Installation before guests arrive, full takedown after",
    ],
    faqs: [faqs.quinceBooking, faqs.quinceColors, faqs.deposit, faqs.cost],
    ctaLabel: "Get your free quinceañera quote",
    themeAccent: "sage",
  },
  {
    slug: "birthday-and-baby-shower-decor",
    title: "Birthday & Baby Shower Decor",
    navLabel: "Birthday & Baby Shower",
    metaTitle: "Birthday & Baby Shower Balloon Decor Dallas | ClaravDecor",
    metaDescription: "Balloon backdrops, arches and columns for birthdays, baby showers and gender reveals across North Dallas — designed around your theme, installed and gone before you have to think about it.",
    h1: "Birthday, Baby Shower & Gender Reveal Decorations in North Dallas",
    intro: "From a first birthday to a milestone one, and from the baby shower to the reveal itself, we design the backdrop and balloon setup around your theme — and it's ready before the first guest arrives.",
    serviceType: "Birthday, baby shower and gender reveal balloon decor",
    included: [
      "Custom backdrop or arch in your palette",
      "Balloon columns or garland accents",
      "Installation before guests arrive, full takedown after",
    ],
    faqs: [faqs.familyColors, faqs.familyBooking, faqs.heat, faqs.cost, faqs.takedown],
    ctaLabel: "Get your free quote",
    themeAccent: "blush",
  },
]

export function getService(slug: string) {
  return services.find((s) => s.slug === slug)
}

/** Page-level SEO table (doc 11 §8). Service pages carry their own in `services`. */
export const pageMeta = {
  home: {
    title: "ClaravDecor | Event Decor & Balloon Design, North Dallas",
    description: "Custom event decor and balloon design in North Dallas. See your design as a mockup before the event, installed before your first guest, takedown included. Free quote in 24–48 hrs.",
  },
  gallery: {
    title: "Event Decor Portfolio | ClaravDecor",
    description: "Real ClaravDecor setups across North Dallas — birthdays, baby showers, gender reveals, graduations, corporate and school events, bouquets and seasonal columns.",
    h1: "Our Work — By Event Type",
  },
  serviceAreas: {
    title: "Service Areas | ClaravDecor North Dallas",
    description: "ClaravDecor serves Dallas, Addison, Richardson, Carrollton, Farmers Branch, Coppell and Plano with no travel fee, plus Frisco, McKinney, Allen, Garland, Irving and The Colony.",
    h1: "Where We Work — Serving North Dallas",
  },
  reviews: {
    title: "Reviews | ClaravDecor",
    description: "What families, schools and event partners say about ClaravDecor — 7 Google reviews, 5.0 average, quoted with attribution.",
    h1: "What Our Clients Say",
  },
  about: {
    title: "About Clara Vento | ClaravDecor",
    description: "Clara Vento has designed event decor in North Dallas since 2019, with 10 years of experience shaping spaces for the moments that matter.",
    h1: "About ClaravDecor",
  },
  contact: {
    title: "Contact | ClaravDecor",
    description: "Tell us about your event — date, venue, celebration type, indoor or outdoor — and get a free quote in 24–48 business hours. Text or call (469) 567-0386.",
    h1: "Tell Us About Your Event",
  },
}
