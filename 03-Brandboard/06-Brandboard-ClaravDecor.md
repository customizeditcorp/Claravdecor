# Brandboard — ClaravDecor
**Sistema de marca para el build del sitio** · C3 Local Marketing · 22 julio 2026

Colores oficiales del brandboard de la diseñadora. `#3A2E24` Espresso es una adición autorizada: el set original no tenía ningún color capaz de servir como texto de lectura.

---

## 1. Logos

Todos en `/brand-assets/`. Vector real, wordmark en curvas — no requiere tipografías instaladas.

### Los que usa el sitio

| Ubicación | Archivo | Color |
|---|---|---|
| Navbar sobre fondo claro | `clarav-lockup-horizontal-taupe.svg` | `#B69572` |
| Navbar sobre fondo oscuro / hero | `clarav-lockup-horizontal-ivory.svg` | `#F7F3EE` |
| Footer | `clarav-lockup-horizontal-ivory.svg` | `#F7F3EE` |
| Favicon | `favicon.svg` + `favicon.ico` | `#B69572` |
| Apple touch icon | `apple-touch-icon-180.png` | ivory sobre taupe |
| Manifest PWA | `icon-192.png`, `icon-512.png` | ivory sobre taupe |
| Open Graph | `og-image-1200x630.png` | ivory sobre Espresso |

```html
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon-180.png">
<link rel="manifest" href="/site.webmanifest">
<meta property="og:image" content="https://[dominio]/og-image-1200x630.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

### Variantes completas disponibles

**Lockup horizontal** (1800×600, proporción 3:1) y **monograma CV** (1000×1000), cada uno en cinco colores:

`taupe #B69572` · `ivory #F7F3EE` · `espresso #3A2E24` · `white #FFFFFF` · `black #000000`

Del monograma, usar siempre las versiones `-centered`. Las otras conservan un encuadre descentrado que se nota en recorte circular.

### Reglas

- **Tamaño mínimo:** 120px de ancho. Por debajo, solo monograma.
- **Espacio libre:** igual a la altura de la "C" del monograma, en los cuatro lados.
- **Sobre fotografía:** solo con velo oscuro al 40% o más.
- **Nunca** la versión taupe sobre Warm Taupe o Mocha Taupe.
- **Nunca** estirar, rotar, recolorear fuera de las cinco variantes, ni agregar sombra o contorno.

---

## 2. Color

| Rol | Nombre | HEX | RGB |
|---|---|---|---|
| Texto y superficie oscura | Espresso | `#3A2E24` | 58, 46, 36 |
| Primario — CTA | Mocha Taupe | `#8C6F56` | 140, 111, 86 |
| Marca — acento | Warm Taupe | `#B69572` | 182, 149, 114 |
| Superficie secundaria | Champagne Beige | `#DCCBB8` | 220, 203, 184 |
| Fondo base | Ivory Cream | `#F7F3EE` | 247, 243, 238 |
| Acento temático | Sage Green | `#B7C1A8` | 183, 193, 168 |
| Acento temático | Dusty Blue | `#AFC4D5` | 175, 196, 213 |
| Acento temático | Blush Nude | `#E8D6D0` | 232, 214, 208 |

### Jerarquía de uso — 60 / 30 / 10

| Proporción | Colores | Función |
|---|---|---|
| **60%** | Ivory Cream | Fondo dominante de todo el sitio |
| **30%** | Champagne Beige, Warm Taupe | Superficies alternas, bordes, separadores, detalles |
| **10%** | Mocha Taupe, Espresso | Texto, CTAs, bloques de énfasis |

**Sage, Dusty Blue y Blush Nude no son estructurales.** Son acentos de sección temática — máximo uno por página. Uso natural: una sección por segmento de servicio (baby shower en blush, corporativo en dusty blue, quinceañeras en sage).

### Reglas no negociables

**1. Espresso es el único color de texto de lectura.**
Ninguno de los siete colores originales alcanza AA como cuerpo sobre el fondo de la propia marca. El más oscuro, Mocha Taupe, se queda en 4.20:1 sobre Ivory Cream.

**2. Texto blanco sobre Warm Taupe está prohibido.**
Da 2.79:1 y falla. Si el botón es Warm Taupe, el texto es Espresso. Es el error más fácil de cometer con esta paleta.

**3. Sage, Dusty Blue y Blush Nude nunca son texto.**
Sobre fondo claro dan entre 1.27:1 y 1.70:1 — invisibles.

**4. Mocha Taupe como texto solo desde 24px**, o bold desde 19px. Como fondo de botón con texto blanco funciona a cualquier tamaño.

### Contraste validado

**Texto Espresso `#3A2E24` sobre:**

| Fondo | Ratio | |
|---|---|---|
| Blanco | 13.16:1 | AAA |
| Ivory Cream | 11.91:1 | AAA |
| Blush Nude | 9.37:1 | AAA |
| Champagne Beige | 8.32:1 | AAA |
| Dusty Blue | 7.32:1 | AAA |
| Sage Green | 7.02:1 | AAA |
| Warm Taupe | 4.72:1 | AA |

**Sobre superficie Espresso:** Ivory Cream 11.91:1 (AAA) · Champagne Beige 8.32:1 (AAA) · Warm Taupe 4.72:1 (AA, solo acentos y enlaces)

**Botones:** blanco sobre Mocha Taupe 4.64:1 (AA) · Espresso sobre Warm Taupe 4.72:1 (AA)

---

## 3. Tipografía

| Rol | Fuente | Pesos a cargar | Fallback |
|---|---|---|---|
| Títulos | Cormorant Garamond | 300, 400, 600 | `Georgia, 'Times New Roman', serif` |
| Cuerpo e interfaz | Montserrat | 400, 500, 600, 700 | `'Helvetica Neue', Arial, sans-serif` |

Ambas son Google Fonts. Cargar solo esos pesos con `display=swap` y `preconnect` — son siete cortes en total y cargar familias completas cuesta rendimiento innecesario.

### Escala

| Nivel | Fuente | Tamaño esc./móv. | Interlineado | Peso | Tracking |
|---|---|---|---|---|---|
| H1 | Cormorant | 56 / 40 px | 1.1 | 300 | 0 |
| H2 | Cormorant | 40 / 32 px | 1.2 | 400 | 0 |
| H3 | Cormorant | 30 / 26 px | 1.3 | 400 | 0 |
| H4 | Montserrat | 22 / 20 px | 1.4 | 600 | 0 |
| Cuerpo grande | Montserrat | 18 px | 1.7 | 400 | 0 |
| Cuerpo | Montserrat | 16 px | 1.7 | 400 | 0 |
| Caption | Montserrat | 14 px | 1.5 | 400 | 0 |
| Eyebrow | Montserrat | 12 px | 1.4 | 600 | 0.16em, mayúsculas |
| Botón | Montserrat | 15 px | 1 | 600 | 0.04em |

### Reglas

- **Cormorant nunca baja de 20px.** Serif de contraste alto y trazo fino; a tamaño de cuerpo pierde legibilidad, sobre todo en móvil.
- **Peso 300 solo para H1 grande.** En títulos chicos usar 400.
- **Montserrat para todo lo funcional:** cuerpo, navegación, formularios, botones, precios, listas.
- El estilo de mayúsculas espaciadas del lockup (*EVENT DECOR*) se replica con Montserrat 600 + `letter-spacing: 0.16em` para eyebrows y etiquetas de sección. Es el gesto que amarra el sitio con la identidad impresa.

`[TODO]` La script del logo — la de "decor" y de "Creating elegant celebrations" — no está identificada. No es ninguna de las dos anteriores. Hasta saber cuál es, esa firma se trata como imagen, no como texto.

---

## 4. Tokens

```css
:root {
  /* Marca */
  --brand-espresso:  #3A2E24;
  --brand-mocha:     #8C6F56;
  --brand-taupe:     #B69572;
  --brand-champagne: #DCCBB8;
  --brand-ivory:     #F7F3EE;
  --brand-sage:      #B7C1A8;
  --brand-blue:      #AFC4D5;
  --brand-blush:     #E8D6D0;

  /* Roles */
  --color-bg:            var(--brand-ivory);
  --color-surface:       #FFFFFF;
  --color-surface-alt:   var(--brand-champagne);
  --color-surface-dark:  var(--brand-espresso);

  --color-text:              var(--brand-espresso);   /* 11.91:1 — AAA */
  --color-text-muted:        #6B5B4C;                 /*  6.60:1 — AA  */
  --color-text-on-dark:      var(--brand-ivory);      /* 11.91:1 — AAA */
  --color-text-on-dark-muted:var(--brand-champagne);  /*  8.32:1 — AAA */

  --color-primary:       var(--brand-mocha);
  --color-primary-hover: #755C46;
  --color-on-primary:    #FFFFFF;                     /* 4.64:1 — AA */

  --color-accent:        var(--brand-taupe);
  --color-on-accent:     var(--brand-espresso);       /* 4.72:1 — AA. NUNCA blanco. */

  --color-border:        #E2D8CC;
  --color-border-strong: var(--brand-champagne);

  --color-success:    #4F6B4A;
  --color-error:      #8C3A2E;
  --color-focus-ring: var(--brand-mocha);

  /* Tipografía */
  --font-display: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;
  --font-body:    'Montserrat', 'Helvetica Neue', Arial, sans-serif;

  --fs-h1: clamp(2.5rem, 5vw, 3.5rem);
  --fs-h2: clamp(2rem, 4vw, 2.5rem);
  --fs-h3: clamp(1.625rem, 3vw, 1.875rem);
  --fs-h4: 1.375rem;
  --fs-body-lg: 1.125rem;
  --fs-body: 1rem;
  --fs-caption: 0.875rem;
  --fs-eyebrow: 0.75rem;

  --lh-tight: 1.1;  --lh-heading: 1.25;  --lh-body: 1.7;
  --ls-eyebrow: 0.16em;  --ls-button: 0.04em;

  /* Espaciado */
  --space-1: 0.25rem;  --space-2: 0.5rem;   --space-3: 0.75rem;
  --space-4: 1rem;     --space-6: 1.5rem;   --space-8: 2rem;
  --space-12: 3rem;    --space-16: 4rem;    --space-24: 6rem;  --space-32: 8rem;

  /* Radio y sombra */
  --radius-sm: 4px;  --radius-md: 8px;  --radius-lg: 16px;  --radius-pill: 999px;
  --shadow-sm: 0 1px 3px  rgba(58,46,36,.07);
  --shadow-md: 0 4px 16px rgba(58,46,36,.10);
  --shadow-lg: 0 12px 40px rgba(58,46,36,.13);

  --container-max: 1200px;
  --container-pad: var(--space-6);
}
```

### Botones

```css
.btn {
  font-family: var(--font-body);
  font-size: .9375rem;
  font-weight: 600;
  letter-spacing: var(--ls-button);
  padding: .875rem 2rem;
  border-radius: var(--radius-pill);
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color .2s ease, color .2s ease, border-color .2s ease;
}

/* CTA principal — pedir cotización */
.btn--primary       { background: var(--color-primary); color: var(--color-on-primary); }
.btn--primary:hover { background: var(--color-primary-hover); }

/* Secundario — ver portafolio.  Texto Espresso: blanco aquí FALLA (2.79:1) */
.btn--secondary     { background: var(--color-accent); color: var(--color-on-accent); }

.btn--outline       { background: transparent; color: var(--color-text);
                      border-color: var(--color-border-strong); }
.btn--outline:hover { background: var(--color-surface-alt); }

.btn--on-dark       { background: var(--brand-ivory); color: var(--brand-espresso); }

.btn:focus-visible  { outline: 2px solid var(--color-focus-ring); outline-offset: 3px; }
```

---

## 5. Estructura de página

| Zona | Superficie | Texto | Logo |
|---|---|---|---|
| Header | Ivory Cream, sólido al scroll | Espresso | Taupe |
| Hero | Foto de montaje + velo Espresso 45% | Ivory Cream | Ivory |
| Cuerpo | Ivory Cream | Espresso | — |
| Secciones alternas | Champagne Beige o blanco | Espresso | — |
| Bloque de énfasis | Espresso | Ivory Cream, acentos en Warm Taupe | — |
| Secciones temáticas | Un acento: Blush, Dusty Blue o Sage | Espresso | — |
| Footer | Espresso | Ivory Cream, secundario Champagne | Ivory |

**Un solo color de acción en todo el sitio:** el CTA es siempre Mocha Taupe con texto blanco. Si todo es acento, nada lo es.

**Warm Taupe no va como fondo de bloques grandes.** Solo detalles, bordes, íconos, viñetas y botones secundarios. Como fondo amplio compite con el CTA y ningún texto claro le sirve encima.

---

## Pendientes que afectan el build

1. **Script del logo sin identificar** — bloquea reproducir la firma como texto
2. **Follaje sin vector** — el motivo botánico existe solo en JPEG de baja resolución. Sin él no hay elemento gráfico repetible para separadores y remates. Detalle en `brand-assets/FOLLAJE.md`.
3. **Lockup vertical sin SVG** — existe solo en el brandboard. Necesario si el hero lo requiere.
4. **Dominio** — el OG image y las rutas absolutas del `<head>` dependen de él
