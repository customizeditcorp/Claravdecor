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

---

## 7. Registro de evidencia — investigación en Refero (14-sep-2026, build)

**Regla aplicada (CLAUDE.md global, punto 8):** la palanca fija hero archetype y orden de secciones; los valores concretos de forma son tendencias a contrastar con referencias reales. Este registro documenta qué se investigó, qué se encontró y por qué los valores de §1 se sostienen. Los valores **no cambiaron**: la evidencia los confirma.

**Anclas de búsqueda usadas:** (a) palanca Riesgo/Confianza + Oficio/Método; (b) diferenciador real del negocio: estudio pequeño de decoración de eventos, premium en español, proceso visible (mockup → instalación); (c) paleta cálida Ivory/Espresso del brandboard. Consultas: "warm editorial serif event decor studio, ivory and espresso, calm trust-first landing with process steps and photo gallery" · "event planner or wedding decor portfolio site, photo grid gallery, flat surfaces, warm neutrals, sharp image edges" · "how it works process steps section, editorial two-column layout".

**Referencias recuperadas (estilos completos, con tokens):**

| Referencia | Sitio real | Qué es | Radius | Densidad / ritmo | Superficies |
|---|---|---|---|---|---|
| Apollo | apolloworkspace.com | Workspace premium, lino cálido + panel umber, hero serif sobre foto oscurecida | 3px en cards, imágenes, botones y nav | Espaciosa: gap de sección 68px, gap de elemento 20px | Lino claro dominante; panel oscuro (umber) solo en hero/full-bleed; sin sombras, bordes de 1px muy claros |
| MANNA | mannaarchitects.com | Portafolio de arquitectura, canvas terroso | 0px en imágenes | Cómoda: gap de sección 40px, caption a 10px bajo la imagen | Plana, sin sombras ni elevación; imágenes como bloques abiertos, no cards |
| Palmer | palmer-dinnerware.com | E-commerce tipo galería, crema cálido | 9px en cards, 3px en nav, 0px en botones | Cómoda: gap de sección 80px, gap de elemento 12px | Canvas crema; cards transparentes sobre el fondo; una sola barra oscura como ancla |
| Katherine Pihl | katherinepihl.com | Portafolio gallery-first, retícula de módulos cuadrados | 0px | Cómoda: gap de sección 40px, gap 12px | Plana; interacción por borde de 1px al hover, sin fondos rellenos |
| alet | aletagency.com | Agencia creativa, arcilla cálida | 10.8px en cards, pill en botones | Cómoda-amplia: gap de sección 101px | Plana, sin sombras; imágenes contenidas, a veces superpuestas |
| Christopher Ireland / Cori Corinne / Cup of Couple | portafolios editoriales | Tipografía serif grande sobre pergamino | 0px | Espaciosa (48–60px) / cómoda (36px) | Planas, líneas finas de 1px como único divisor |

### Eje Radius — valor final `--radius: 0.5rem` (8px) · **se sostiene**

- **Qué se encontró:** el rango real del vertical "editorial cálido / galería" va de 0px (MANNA, Pihl, Ireland, Corinne, Cup of Couple) a 3px (Apollo) y 9–11px en cards (Palmer, alet). Ninguna referencia usa pill en el CTA principal salvo alet (agencia, no servicio local). El default de la tabla de palancas para Riesgo/Confianza (8–10px) cae dentro del rango observado pero en su extremo alto.
- **Por qué encaja:** 8px en botones y cards mantiene el lado "serio" que la palanca pide (no pill, no "amable/social") sin llegar al 0px absoluto de los portafolios puros, que en un negocio de servicio local con formulario y CTAs leería frío. **Las imágenes de galería sí van a 0px** (§3), alineadas con MANNA/Pihl/Ireland: la foto es el bloque, no la card.
- **Ajuste derivado de la evidencia:** ninguno en el valor. Se confirma la excepción ya prevista en §3 (galería sin radius).

### Eje Densidad — secciones 64/96 (móvil/desktop), editorial 1.5× solo en "How it works" · **se sostiene**

- **Qué se encontró:** los gaps de sección observados van de 36px (Cup of Couple, revista densa) a 101px (alet). La mediana del grupo cálido/galería está en 60–80px (Corinne 60, Apollo 68, Palmer 80). Todas las referencias usan dos columnas alternadas o texto + imagen con aire generoso; ninguna usa cards con íconos para explicar proceso.
- **Por qué encaja:** 96px desktop está en el tercio alto del rango observado, coherente con la lectura "sin prisa" que Apollo describe como "unhurried, thoughtful rhythm". El 1.5× (144px) en la sección de proceso es el único punto por encima de todas las referencias salvo alet; se justifica porque es el refuerzo Oficio/Método y la única sección donde el usuario debe leer cinco pasos completos. Las líneas finas de 1px entre pasos replican el "Section Separator" de Apollo y los hairlines de Cup of Couple/Ireland.
- **Ajuste derivado de la evidencia:** ninguno.

### Eje Superficies — light-first, alternancia bg/card/muted, Espresso solo en scrim del hero, bloque de confianza y footer · **se sostiene**

- **Qué se encontró:** todas las referencias del grupo son planas: sin sombras, sin glass, sin gradientes (Apollo: "favors a flatter design with subtle borders and color shifts for depth"; Palmer: elevación solo implícita en la foto; MANNA/Pihl/Corinne: explícitamente "no shadows"). El panel oscuro aparece **una sola vez** por página en las que lo usan: hero full-bleed (Apollo) o barra de navegación (Palmer). Ninguna usa dos bloques oscuros seguidos en el cuerpo.
- **Por qué encaja:** la regla de §1 ("navy" = Espresso en tres lugares y nada más) coincide con el patrón observado de un panel oscuro como ancla. El bloque "What we handle / what we don't" ocupa ese lugar en el cuerpo; el footer y el scrim del hero son marcos, no cuerpo. La única sombra de card (`--shadow-card`, 1px 3px al 7 %) queda por debajo de todo lo observado y se usa solo en las cards de portafolio de la home y en el formulario, donde la referencia más cercana (Palmer) también admite cards suaves.
- **Ajuste derivado de la evidencia:** ninguno. Se registra que Apollo confirma la elección de alternar lino/crema con un solo panel oscuro, y MANNA/Pihl confirman la galería como bloques abiertos sobre el fondo, sin card.

### Lo que la evidencia NO sostiene y se dejó fuera
- Cards con sombra visible y radius 12–16 (Prueba social) — ninguna referencia del grupo las usa.
- Edge-to-edge global (Prueba visual) — solo alet/MANNA lo hacen, y son portafolios sin formulario ni CTA de servicio; en ClaravDecor se aplica únicamente como componente de galería.
- Marquee o carrusel horizontal de imágenes (alet) — motion autoplay; ver §8.

---

## 8. Motion — revisión con Magic UI (14-sep-2026, build)

**Regla aplicada (CLAUDE.md global, puntos 8 y 10):** el motion se investiga en Magic UI después de que todo el contenido está server-rendered, se reescribe contra los tokens del cliente y se vuelve a verificar con JS desactivado. La fila "Bordes / motion" de §1 ("transiciones 200 ms solo en color/opacidad, sin parallax, sin autoplay, sin contadores") era una tendencia, no una cifra cerrada; **queda superada solo en un punto**, documentado abajo.

**Qué se buscó:** registro de Magic UI, consulta "fade reveal scroll text animate blur" (37 componentes). Se leyó el código fuente de `blur-fade` y `text-animate`.

| Componente Magic UI | Qué hace | Decisión | Por qué |
|---|---|---|---|
| **blur-fade** | Entrada al viewport: opacidad 0 → 1, desplazamiento 6px, desenfoque 6px → 0, 400 ms ease-out, una sola vez (`useInView once`) | **Adoptado, reconstruido** | Es exactamente el registro "calmo" que pide Riesgo/Confianza: el contenido aparece asentándose, no saltando. Refuerza la lectura de galería como bloques que se van revelando (MANNA, Pihl) sin autoplay ni bucle. |
| text-animate (blurInUp por palabra) | Anima el H1 palabra por palabra con blur | **Descartado** | Parte el H1 en `<span>` por palabra y lo esconde hasta hidratar: golpea LCP y el H1 deja de ser un nodo de texto limpio. La palanca pide un H1 legible y estable, no teatral. |
| text-reveal | Texto que se opaca/desopaca con el scroll (scroll-linked) | Descartado | Es parallax de texto; contradice "sin parallax" y no aporta a la confianza. |
| marquee | Carrusel infinito autoplay (reseñas/logos) | Descartado | Autoplay; 7 reseñas no llenan un carrusel y el buyer necesita leerlas, no verlas pasar. |
| number-ticker | Contador animado | Descartado | No hay cifras que celebrar (7 reseñas) y §1 lo excluye por lectura "inflada". |
| animated-shiny-text, aurora-text, sparkles-text, border-beam, dia-text-reveal | Brillos, gradientes, destellos | Descartados | Registro "fun/tech"; el brandboard es mate y sobrio (Apollo: "flatter design with subtle borders"). |
| progressive-blur, scroll-progress | Utilidades de scroll | Descartados | No hay contenedores con scroll interno ni artículos largos. |

**Cómo se reconstruyó `blur-fade` en ClaravDecor** (`site/components/reveal.tsx` + tokens en `globals.css`):
- Sin la dependencia `motion` (≈30 KB): `IntersectionObserver` + transiciones CSS sobre `--motion-reveal: 400ms`, `--motion-ease-out`, `--reveal-offset: 6px`, `--reveal-blur: 6px`. Mismos valores que el original de Magic UI; la evidencia no pedía cambiarlos.
- **Guardrail 1 intacto:** el HTML del servidor no esconde nada. El estado oculto se aplica solo tras hidratar y solo a elementos que aún están bajo el pliegue; lo que ya está en pantalla no parpadea. Verificado con `curl`: cero atributos `data-reveal` en el HTML inicial.
- `prefers-reduced-motion`: los tokens de reveal pasan a 0 y el elemento aparece sin transición.
- Escalonado por índice: galería 40 ms (tope en el 8.º), cards de portafolio 60 ms, pasos del proceso 80 ms, citas de reseñas 80 ms.

**Dónde se aplica:** tiles de galería (todas las páginas), cards "Portfolio by event type" (home), los cinco pasos de "How it works", las tres citas de reseñas de la home. **Dónde no:** hero, H1, trust bar, bloque "What we handle", FAQ, formulario — contenido de confianza que debe estar quieto y presente desde el primer frame.

**Delta sobre §1:** la fila "Bordes / motion" pasa de "transiciones 200 ms solo en color/opacidad" a "transiciones 200 ms en color/opacidad **más un reveal de entrada de 400 ms (opacidad, 6px, blur 6px) en galería, cards, pasos y citas**". Sigue sin parallax, sin autoplay, sin contadores.

### Eje Tipografía (display) — decisión final 14-sep-2026: **Playfair Display** · supera a Cormorant Garamond (§1, §2 y brandboard §3)

- **Anclas de búsqueda:** el lockup real (`brand-assets/og-image-1200x630.png`): "CLARAV" en serif de alto contraste con remates finos (transicional/Didone), "decor" en script itálica sin identificar, "EVENT DECOR" en sans geométrico de mayúsculas espaciadas. Consultas Refero: "elegant high-contrast serif display headline paired with letter-spaced uppercase sans-serif labels, warm cream palette, luxury event or wedding studio" · "Didone Bodoni high-contrast serif headline, thin hairline serifs, luxury boutique or bridal brand".
- **Qué se encontró:** Playfair Display aparece en **uso real** en Christopher Ireland (H display 94 px y 63 px, peso 400, canvas pergamino, líneas finas de 1px: la referencia estructuralmente más parecida a ClaravDecor) y como **sustituto declarado** de los serifs a medida de Laura Monin (`title`), Katherine Pihl (`Ryhmes`) y Liron Moran (`cardinalfruit`). Garamond aparece solo en texto de apoyo (Cup of Couple) o como sustituto de display (Cori Corinne → EB Garamond); ninguna referencia del vertical lo usa como serif de titular.
- **Opciones evaluadas:** A) mantener Cormorant Garamond (costo cero, encaje medio: old-style más suave que los remates del lockup) · **B) Playfair Display (elegida)** · C) EB Garamond (más legible que Cormorant en H3, menos afín al contraste del logo).
- **Por qué encaja B:** Playfair es transicional con hairlines, lo más cercano al monograma CV y a "CLARAV"; sostiene el titular a 38–48 px con peso 400 sin leer decorativo (la palanca pide legible), y el par serif de alto contraste + sans espaciado replica exactamente la relación "CLARAV / EVENT DECOR" del lockup. Montserrat no cambia: es el amarre con "EVENT DECOR".
- **Ajustes derivados:** `--fs-h1` pasa de `clamp(2.375rem, 4.5vw, 3.25rem)` a `clamp(2.375rem, 4.5vw, 3rem)` (máx. 52 → 48 px) por la mayor altura de x de Playfair; H2/H3 sin cambio. Se cargan dos cortes (400, 500) en vez de tres; el número de paso de "How it works" pasa de peso 300 a 400 porque Playfair no tiene 300. La regla "serif nunca por debajo de 20 px" se mantiene. El brandboard §3 queda superado en la familia de titulares; el cuerpo (Montserrat 400/500/600/700) no cambia.
- **Decidió:** Luis, 14-sep-2026, con las tres opciones y su evidencia sobre la mesa.

**Extensión 14-sep — nav y subtítulos en Playfair (decidió Luis tras ver el hero).**
- **Qué se pidió:** menos familias visibles en pantalla; el hero en Playfair fijó el tono y la nav y los subtítulos en Montserrat leían como una tercera voz.
- **Evidencia:** Cup of Couple usa un serif de titulación (Perpetua Titling) en todos los encabezados de sección y deja el sans solo para cuerpo y nav; Christopher Ireland pone los enlaces de categoría en Playfair; Cori Corinne lleva la nav a 18 px, peso 400, en caja normal. Ninguna referencia del grupo usa serif en mayúsculas espaciadas pequeñas, así que la nav en serif va en caja normal, no en el estilo eyebrow.
- **Decisión:** nav de escritorio y dropdown en Playfair 500 a 16 px, caja normal (menú móvil a 18 px); subtítulos H3/H4 ("We handle", títulos de paso, "Core area", nombres de tarjeta) y preguntas del FAQ en Playfair 500 a 24 px (utilidad `.subtitle`). Eyebrows, botones, cuerpo, captions y títulos de columna del footer siguen en Montserrat: son la capa funcional y el amarre con "EVENT DECOR".
- **Delta sobre §1/§2 y brandboard §3:** `--fs-h4` 22 → 24 px, `--fw-h4` 600 → 500, `h4` pasa a `--font-display`; la nota "H4 Montserrat" del brandboard queda superada. Excepción documentada a "serif nunca por debajo de 20 px": la nav va a 16 px porque Playfair 500 conserva el trazo en tamaños de interfaz, a diferencia de Cormorant; si en QA de móvil se ve fina, subir a 17 px antes que volver a sans.
