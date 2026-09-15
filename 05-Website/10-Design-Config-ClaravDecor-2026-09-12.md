# Design config — ClaravDecor

**c3-design-system · delta de forma por cliente · 12-sep-2026**
Consumido por `c3-website-build` y por Claude Code en el build. **Solo forma.** El color viene del Brandboard 22-jul (§2 y §4); el orden de secciones y el copy vienen de website-build. Este doc no fija hex ni contenido.

**Palanca (decidida por Luis en el gate, 12-sep):** dominante **Riesgo / Confianza** · apoyo **Oficio / Método**.
**Decisión de portafolio:** lanzar magro con las 25 fotos procesadas (`04-Fotos/02-procesadas`, `mapa-fotos.csv`); todas autorizadas por Clara.
**Idioma:** inglés (práctica C3 para sitios de cliente).

---

## 1. Ejes de token resueltos

| Eje | Base neutral | Riesgo/Confianza (dominante) | Refuerzo Oficio/Método (uno solo) | Valor final ClaravDecor |
|---|---|---|---|---|
| Radius | 8px | 8px | — | **`--radius: 0.5rem`** (lg 8 · md 6 · sm 4). Botones con `--radius`, **no pill** (el `.btn` pill del brandboard §4 queda superado por la palanca: el pill lee "amable/social"; 8px lee "serio"). |
| Densidad | cómoda | cómoda | editorial **solo en la sección de proceso** | Secciones 64/96 (móvil/desktop). Sección "How it works": 2 columnas, aire 1.5×, líneas finas de 1px entre pasos. |
| Tipografía (uso) | cuerpo 16 | seria y legible; cuerpo ≥16 | titulares con carácter (serif) — ya lo da el brandboard | Cuerpo **16px** (buyer 30–45, no aplica el piso 18) · cuerpo-lg 18 para el lead del hero y el bloque de garantía · **H1 en Cormorant 400, no 300** (el 300 lee decorativo; la palanca pide legible) · H1 máx 52px desktop / 38 móvil · tracking 0. |
| Superficies | light-first, alternancia bg/card/muted | claro + "navy" | mate | Light-first sobre `--background`; alternancia con `--muted`; el rol "navy" de la palanca lo cumple **`--secondary` (Espresso)** en tres lugares y nada más: scrim del hero (≥45 %), bloque de énfasis "What we control / what we don't", footer. Sin gradientes, sin glass, sin sombras en secciones. |
| Bordes / motion | 1px suave, 1 sombra de card | suaves, transiciones calmas | líneas finas | `--border` 1px en cards y campos; una sola sombra de card (`shadow-sm` del brandboard); transiciones 200 ms ease solo en color/opacidad; **sin parallax, sin autoplay, sin contadores animados**; `prefers-reduced-motion` respetado. |

Lo que NO se aplicó (y por qué): edge-to-edge y radius 12 de *Prueba visual* — es apoyo obligatorio pero no palanca; la galería lo toma como **componente**, no como eje global (§3). Card + sombra de *Prueba social* — 7 reseñas no lo sostienen. CTA sticky de *Velocidad* — no es el modelo.

---

## 2. Bloque `:root` de estructura (sin color)

Los tokens de color se rellenan desde el Brandboard con esta correspondencia (nombres shadcn = vocabulario real del repo de referencia):

| Token shadcn | Rol del brandboard (§2 / §4) |
|---|---|
| `--background` | Fondo base (Ivory Cream) |
| `--foreground` | Texto de lectura (Espresso) — único color de texto |
| `--card` / `--card-foreground` | Superficie blanca / Espresso |
| `--muted` / `--muted-foreground` | Superficie secundaria (Champagne) / texto atenuado (`--color-text-muted`) |
| `--primary` / `--primary-foreground` | CTA (Mocha Taupe) / blanco |
| `--secondary` / `--secondary-foreground` | Superficie oscura (Espresso) / Ivory |
| `--accent` / `--accent-foreground` | Warm Taupe / **Espresso, nunca blanco** (2.79:1) |
| `--border` / `--input` | `--color-border` / `--color-border-strong` |
| `--ring` | `--color-focus-ring` (Mocha) |
| `--accent-theme` (por sección, opcional) | Sage · Dusty Blue · Blush — **máximo uno por página, nunca texto** |

```css
:root {
  /* forma — c3-design-system, palanca Riesgo/Confianza */
  --radius: 0.5rem;                 /* lg 8px · md 6px · sm 4px */

  --container-max: 80rem;           /* 1280px */
  --container-pad: 1.5rem;          /* 24px */
  --measure: 68ch;

  --space-1: .25rem; --space-2: .5rem; --space-3: .75rem; --space-4: 1rem;
  --space-6: 1.5rem; --space-8: 2rem; --space-12: 3rem; --space-16: 4rem;
  --space-24: 6rem;  --space-32: 8rem;
  --section-y: var(--space-16);     /* móvil */
  --section-y-lg: var(--space-24);  /* desktop */
  --section-y-editorial: calc(var(--section-y-lg) * 1.5); /* solo "How it works" */

  /* familias: las fija el brandboard §3 (Cormorant Garamond / Montserrat) */
  --font-display: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;
  --font-body: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;

  --fs-h1: clamp(2.375rem, 4.5vw, 3.25rem);   /* 38 → 52 */
  --fs-h2: clamp(2rem, 3.5vw, 2.5rem);        /* 32 → 40 */
  --fs-h3: clamp(1.625rem, 2.5vw, 1.875rem);  /* 26 → 30 */
  --fs-h4: 1.375rem;
  --fs-body-lg: 1.125rem;
  --fs-body: 1rem;
  --fs-caption: .875rem;
  --fs-eyebrow: .75rem;

  --fw-h1: 400;                     /* no 300: palanca pide legible */
  --fw-h: 400; --fw-h4: 600; --fw-body: 400; --fw-btn: 600;
  --lh-tight: 1.1; --lh-heading: 1.25; --lh-body: 1.7;
  --ls-eyebrow: .16em; --ls-btn: .04em;

  --border-w: 1px;
  --shadow-card: 0 1px 3px rgb(0 0 0 / .07);   /* única sombra; el tinte lo pone el brandboard */
  --hero-scrim: .45;                            /* mínimo del brandboard §1 */

  --motion-fast: 150ms; --motion-base: 200ms; --motion-ease: ease;
  --tap-min: 44px;
}
@media (prefers-reduced-motion: reduce) {
  :root { --motion-fast: 0ms; --motion-base: 0ms; }
}
section { scroll-margin-top: 6rem; }
```

Cormorant nunca por debajo de 20px (regla del brandboard; la palanca la refuerza). Eyebrows: Montserrat 600, mayúsculas, `--ls-eyebrow` — es el gesto que amarra con el lockup *EVENT DECOR*.

---

## 3. Notas de densidad y superficie por componente (c3-blocks)

| Bloque | Tratamiento en ClaravDecor |
|---|---|
| **Header** | `--background` sólido al scroll, lockup taupe, altura 72px, un solo CTA (`--primary`). Sin barra de anuncios. |
| **TrustBar** | Fila plana bajo el hero, texto `--fs-caption`, separadores `--border`. Solo hechos verificables (mockup after booking · set up before your first guest · takedown included · North Dallas). Nada con etiqueta `[CONFIRM]`. |
| **Hero** (variante Riesgo/Confianza) | Foto de montaje a sangre + scrim `--secondary` al 45 %, texto `--secondary-foreground`. Alto 80vh desktop / 70vh móvil. **Las fotos son verticales:** recorte con `object-fit: cover; object-position: center 35%` y arte dirigido por breakpoint (`<picture>`: en móvil la vertical entera, en desktop recorte 16:9). Candidatas (mapa-fotos, slot hero): `birthday…shimmer-wall…13-01`, `baby-shower…arch-backdrop…bear-01`, `baby-shower…sage-hoop-arch-bear-01`. Sin video, sin slider. |
| **ProcessSteps** ("How it works") — *el refuerzo Oficio/Método* | Sección editorial: `--section-y-editorial`, 2 columnas (número del paso en Cormorant 56px peso 300 — único lugar donde se permite el 300 — y texto en Montserrat), líneas finas de 1px entre pasos, sin cards, sin íconos. El mockup es un paso propio; deja un slot de imagen para el ejemplo real `[TO CONFIRM]`, oculto hasta que exista. |
| **WhyUs** → "What we control / what we don't" | Bloque de énfasis sobre `--secondary`, texto `--secondary-foreground`, acentos `--accent`. Dos columnas planas. Es la pieza de confianza más barata; recibe la única superficie oscura del cuerpo. |
| **ServiceGrid** | Cards sobre `--card` con `--border` y `--shadow-card`, radius `--radius`, imagen 4:5 arriba. Acento temático opcional por card (`--accent-theme` como línea superior de 3px, no como fondo). |
| **Gallery** (apoyo Prueba visual, tratado como componente) | Retícula de **retrato 4:5**: 2 col móvil / 3 col ≥768 / 4 col ≥1280, gap `--space-2`, **sin bordes ni radius** (0), hover = opacidad .92 en `--motion-base`. Agrupada por tipo de evento (birthday · baby shower & gender reveal · graduation · corporate · bouquets & seasonal); filtros como enlaces/`<details>` server-rendered, todas las imágenes en el HTML inicial con `alt` de `alt-map.json`. Lightbox opcional y progresivo. Las 4 fotos ≤1000px (`mario`, `red-black-second-birthday`, `pink-cream-gold-pampas`, `sage-hoop-02`) solo como miniatura, nunca a ancho completo. |
| **Reviews** | Citas con atribución (nombre como aparece en Google), sobre `--muted`, sin cards con sombra, sin estrellas animadas, sin markup de rating hasta tener export. |
| **ServiceAreas** | Lista plana en 2 niveles (núcleo / extendida) según §3 del Anexo NAP cuando Clara decida; hasta entonces las 7 del brief. Sin mapa embebido. |
| **CTABand** | Sobre `--muted`, no sobre `--secondary` (esa superficie es del bloque de confianza). Un CTA `--primary`, uno `outline`. |
| **ContactForm** | Campos con `--input` 1px, labels visibles siempre, error en texto. Sin cotizador ni calculadora. |
| **Footer** | `--secondary`, lockup ivory, NAP canónico (07-NAP §1) en texto plano + schema. |

---

## 4. Accesibilidad (verificado contra el brandboard)

Contrastes ya validados en Brandboard §2: Espresso sobre Ivory 11.91:1, sobre Champagne 8.32:1, sobre Warm Taupe 4.72:1; blanco sobre Mocha 4.64:1. Reglas que el build no puede romper: texto blanco sobre Warm Taupe (falla), Mocha como texto solo ≥24px o bold ≥19px, Sage/Dusty Blue/Blush nunca como texto. Foco `:focus-visible` 2px `--ring` offset 3px; tap ≥44px; un `<h1>` por página; `alt` real del `alt-map.json`, decorativas `alt=""`.

---

## 5. Render (guardarraíles)

- Next App Router, **server components** para todo lo que renderiza contenido: copy, `alt`, JSON-LD en el HTML inicial.
- `next/image` con `sizes` reales; **nunca** `background-image` para las fotos de montaje (son contenido).
- **No** `output:'export'`, **no** `images.unoptimized:true`, **no** `typescript.ignoreBuildErrors:true`.
- Fuentes: `next/font/google` solo con los 7 cortes del brandboard §3, `display: swap`.
- QA de salida: ver source con JS desactivado → copy + alt + `ld+json` presentes; Lighthouse móvil ≥90 en Performance y Accessibility.

---

## 6. Deuda y pendientes que tocan el diseño

- Follaje sin vector (brandboard): sin separador botánico repetible → se lanza sin él; slot reservado como `<svg>` decorativo `aria-hidden`.
- Script del logo sin identificar → la firma se trata como imagen.
- Foto horizontal de montaje y fotos de proceso: no existen → hero con recorte dirigido; segundo lote de Clara con checklist (horizontal desde la entrada, detalle, ella instalando).
- Mockup real de ejemplo `[TO CONFIRM]` → slot oculto en ProcessSteps.
- Base white-label `DESIGN.md`: este delta está escrito contra los defaults del skill; si el archivo base vive en el repo de referencia, aplicar este delta encima sin tocar el base.
