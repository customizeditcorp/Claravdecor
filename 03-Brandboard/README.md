# Pack de assets — ClaravDecor

Generado desde los SVG entregados. Todo vector reescalable, sin rasters embebidos.

---

## Sistema de logo

### Monograma — versión recentrada (usar esta)

| Archivo | Color | Uso |
|---|---|---|
| `clarav-monogram-centered-taupe.svg` | `#B69572` | Favicon, marca sobre fondo claro |
| `clarav-monogram-centered-ivory.svg` | `#F7F3EE` | Sobre Espresso, taupe o negro |
| `clarav-monogram-centered-espresso.svg` | `#3A2E24` | Marca oscura sobre fondo claro |
| `clarav-monogram-centered-white.svg` | `#FFFFFF` | Reverso puro, franelas |
| `clarav-monogram-centered-black.svg` | `#000000` | Impresión a una tinta, bordado, sello |

Las versiones sin `-centered` conservan el encuadre original y quedan solo como respaldo.

### Lockup horizontal

| Archivo | Color | Uso |
|---|---|---|
| `clarav-lockup-horizontal-taupe.svg` | `#B69572` | Navbar sobre fondo claro |
| `clarav-lockup-horizontal-ivory.svg` | `#F7F3EE` | Footer, hero, franelas |
| `clarav-lockup-horizontal-espresso.svg` | `#3A2E24` | Documentos, firma de email |
| `clarav-lockup-horizontal-white.svg` | `#FFFFFF` | Reverso puro |
| `clarav-lockup-horizontal-black.svg` | `#000000` | Una tinta |

Proporción 3:1 (1800×600). El wordmark está en curvas — no requiere las tipografías instaladas.

---

## Favicon e íconos de aplicación

| Archivo | Medida | Dónde |
|---|---|---|
| `favicon.svg` | vector | Etiqueta principal — el navegador escala solo |
| `favicon.ico` | 16/32/48 | Respaldo para navegadores viejos |
| `favicon-16.png` … `favicon-64.png` | — | Respaldo explícito |
| `apple-touch-icon-180.png` | 180×180 | Pantalla de inicio iOS — fondo sólido, iOS no respeta transparencia |
| `icon-192.png`, `icon-512.png` | — | Manifest PWA |

### Etiquetas para el `<head>`

```html
<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon-180.png">
<link rel="manifest" href="/site.webmanifest">
<meta property="og:image" content="https://[dominio]/og-image-1200x630.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
```

---

## Perfiles y redes

| Archivo | Medida | Dónde |
|---|---|---|
| `gbp-perfil-720.png` | 720×720 | **Google Business Profile.** Fondo sólido, sin transparencia — GBP compone el alfa de forma impredecible. |
| `avatar-512-taupe.png` | 512×512 | Instagram, TikTok, Facebook — versión recomendada |
| `avatar-512-ivory.png` | 512×512 | Alternativa sobre fondo claro |
| `og-image-1200x630.png` | 1200×630 | Vista previa al compartir el enlace |

**Por qué el avatar va con fondo sólido:** la versión entregada era taupe sobre transparente. Sobre las tarjetas blancas de Google Maps eso da 2.79:1 de contraste y se ve lavado al tamaño del paquete local. Ivory sobre taupe sólido resuelve visibilidad y respeta la paleta.

---

## Correcciones aplicadas

**1. Centrado óptico.** Midiendo el bbox real de la tinta sobre lienzo de 1000: margen izquierdo 128 contra derecho 81, superior 198 contra inferior 170. El monograma estaba corrido a la derecha y hacia abajo. En recorte circular — que es como se ve en Instagram y en GBP — esa asimetría se nota. Las versiones `-centered` tienen márgenes parejos.

**2. Color negro fuera de paleta.** Los SVG entregados usan `#111111`, que no existe en el sistema de marca. Hay dos roles legítimos y no cumplía ninguno:
- Impresión a una tinta, bordado, sello → `#000000`
- Marca oscura sobre fondo claro → `#3A2E24` Espresso

Se generaron ambos. `#111111` queda descartado.

**3. Faltaba la versión en reverso.** No había variante blanca ni ivory — justamente las que necesita para las franelas negras que ya están en producción y para el footer oscuro del sitio. Generadas.

---

## Pendientes

**El follaje no está en estos archivos.** El monograma tiene dos trazados: la C y la V. El motivo floral de línea fina que acompaña al logo original no viene incluido.

Si la simplificación fue deliberada para tamaños chicos, es una decisión correcta — esa línea fina desaparece bajo 32px. Pero entonces el sistema necesita dos niveles documentados:

- **Versión limpia** *(estos archivos)* — favicon, avatar, navbar, aplicaciones pequeñas y funcionales
- **Versión completa con follaje** `[PENDIENTE]` — hero, tarjeta, impresos, franelas, aplicaciones grandes

Hace falta el SVG de la versión completa. El motivo de follaje además es el elemento gráfico repetible del sistema — separadores, esquinas, viñetas — y sin vector no se puede usar.

**Faltan también:**
- Lockup vertical en SVG *(existe solo como JPEG en el brandboard)*
- AI/EPS/PDF con CMYK para imprenta
- Prueba de color física antes de cualquier tirada
- OG image con eslogan — el archivo actual lleva solo el lockup, porque el texto en vivo requiere Cormorant Garamond y Montserrat instaladas
