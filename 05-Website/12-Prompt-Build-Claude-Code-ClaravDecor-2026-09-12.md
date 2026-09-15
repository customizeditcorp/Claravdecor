# Prompt de Build — ClaravDecor (para Claude Code)

**v2 — 14-sep-2026 (reemplaza la v1 del 12-sep: cambió el patrón de arquitectura, ver abajo).**
Este archivo es lo que vas a pegar en Claude Code para arrancar el build del sitio.

## Qué cambió desde la v1

El 14-sep se decidió con evidencia que ClaravDecor corre bajo el patrón **portafolio-first, adaptado** (no silo servicio+ciudad): galería como eje central, 2 páginas ancla de producto (garland → full event design), 1 página dedicada de alto valor (quinceañera), 1 página combinada (birthday + baby shower/gender reveal), y graduation/corporate plegados como sección dentro de `/full-event-design`. El razonamiento completo con evidencia está en `02-Brief-OFV/2026-07-22-curado-con-clara/03c-Palanca-OFV-Claravdecor-2026-09-12.md`, sección "Patrón de arquitectura (14-sep-2026)". El doc 11 (sitemap + copy) ya está reescrito a v2 con esta estructura — no hace falta que Claude Code decida nada de esto, solo que lo lea.

## Dónde está cada cosa (ya en el Mac, en `Claravdecor/`)

| Qué | Dónde (ruta relativa a `Claravdecor/`) | Qué contiene |
|---|---|---|
| Copy completo + sitemap v2 + SEO + JSON-LD | `06-Entregables/11-Sitemap-y-Copy-Web-ClaravDecor-2026-09-12.md` | 10 páginas (no 13), copy en inglés, FAQs, títulos/meta, ejemplos de schema |
| Config de diseño (tokens de forma) | `05-Website/10-Design-Config-ClaravDecor-2026-09-12.md` | Radius, tipografía, spacing, notas de componente por componente |
| Brandboard (color real) | `03-Brandboard/06-Brandboard-ClaravDecor.md` + `03-Brandboard/brand-assets/` | Hex, contraste, logos SVG/PNG, favicon, OG image |
| Palanca OFV + patrón de arquitectura (con evidencia) | `02-Brief-OFV/2026-07-22-curado-con-clara/03c-Palanca-OFV-Claravdecor-2026-09-12.md` | Riesgo/Confianza dominante + patrón portafolio-first adaptado — qué se descartó y por qué |
| Oferta de valor completa | mismo folder: `03-Oferta-de-Valor-Claravdecor.md` + `03b-OFV-Addendum-Lean-2026-09-12.md` | Precios, depósitos, garantías, proceso de 5 fases |
| Fotos listas para producción | `04-Fotos/02-procesadas/` (24 archivos) + `alt-map.json` + `mapa-fotos.csv` | Nombradas y mapeadas a página/slot, con alt text |
| NAP canónico | `06-Entregables/07-NAP-Canonico-y-Anexo-NAP-Claravdecor-2026-09-12.md` | Nombre/dirección/teléfono exactos, ciudades de servicio (provisional) |

**Nada de esto está consolidado en Google Drive todavía.** Drive tiene casi todo repartido en las mismas carpetas espejo (02, 03, 04, 05, 06), pero Claude Code no lee Drive — lee tu disco. **Nota:** las copias en Drive de los docs 03c y 11 son todavía la versión v1 (12-sep) — no reflejan el cambio de patrón. Las copias del Mac (rutas de arriba) sí están al día; usa esas.

## Lo que falta o no está confirmado (Claude Code NO debe inventarlo ni resolverlo solo)

- Redacción exacta de la garantía de reposición → placeholder visible hasta que Clara la confirme por escrito
- Nombre del método "Diseño Anclado al Espacio" → confirmado por Luis, pendiente de validación de Clara
- Mockup real de ejemplo para "How it works" → no existe todavía; dejar el slot oculto
- Lista final de ciudades de servicio → hoy las 7 del brief; Clara decide en Semana 2
- Seguro de responsabilidad civil (COI) → no activo; no publicar copy de "insured"
- Fuente real del script del logo → no identificada; la firma se trata como imagen, nunca como texto tipografiado
- AggregateRating real (5.0/7, GBP) → sí publicar; reviews individuales con schema `Review` solo cuando exista un export verificado
- Fotos reales de quinceañera → no existen; `/quinceanera-decorations` usa temporalmente fotos de birthday por tono

## El prompt para pegar en Claude Code

```
Vas a construir el sitio de ClaravDecor (event/balloon decor, Dallas–Fort Worth)
siguiendo la skill c3-website-build de mi pipeline, patrón de arquitectura
portafolio-first (adaptado) — YA decidido con evidencia, no lo re-decidas.
Stack: Next.js App Router, shadcn/Tailwind, patrón de referencia
jd-valley-painting (lib/site.ts como objeto único de negocio).

Lee estos archivos de contexto antes de escribir código (rutas relativas a la raíz
de este proyecto, carpeta Claravdecor/):

- 06-Entregables/11-Sitemap-y-Copy-Web-ClaravDecor-2026-09-12.md  <- sitemap v2 (10
  páginas), copy completo de cada página, FAQ, títulos SEO, ejemplos JSON-LD.
  Fuente de verdad del contenido y de la arquitectura.
- 02-Brief-OFV/2026-07-22-curado-con-clara/03c-Palanca-OFV-Claravdecor-2026-09-12.md
  <- palanca (Riesgo/Confianza) + patrón de arquitectura, con la evidencia de por
  qué el sitio tiene 10 páginas y no 13 ni una sola página de servicios genérica.
- 05-Website/10-Design-Config-ClaravDecor-2026-09-12.md  <- tokens de forma
  (radius, tipografía, densidad, notas por componente). No trae color.
- 03-Brandboard/06-Brandboard-ClaravDecor.md  <- color real (hex), tipografía,
  botones, reglas de contraste. Usa el bloque :root del §4 tal cual.
- 03-Brandboard/brand-assets/  <- logos SVG/PNG, favicon, OG image; usar
  directamente, no regenerar.
- 04-Fotos/02-procesadas/  <- 24 fotos ya nombradas y optimizadas, con
  alt-map.json (filename -> alt text) y mapa-fotos.csv (foto -> página/slot).
  Úsalas como vienen; no renombres ni reasignes ciudad.
- 06-Entregables/07-NAP-Canonico-y-Anexo-NAP-Claravdecor-2026-09-12.md  <- nombre,
  teléfono, horario, ciudades de servicio exactos. No inventes ni cambies el NAP.

Arquitectura del sitio (NO renegociar — ya decidida con evidencia el 14-sep):
/  /gallery (eje central)  /full-event-design (ancla, incluye sección de
graduation/corporate/schools)  /balloon-garlands (entrada)
/quinceanera-decorations (dedicada)  /birthday-and-baby-shower-decor
(combinada)  /service-areas  /reviews  /about  /contact

Reglas duras (no negociables):
1. Todo el copy, alt de imágenes y JSON-LD debe estar en el HTML inicial —
   verifica con JS desactivado antes de dar por terminada cualquier página.
2. Un solo host canónico (decide www vs. apex y úsalo en todo: canonical, OG,
   sitemap, @id del schema).
3. NO generes página por ciudad (/areas/[city]) — service-areas es UNA sola
   página. No hay fotos geolocalizadas ni testimonios por ciudad.
4. NO generes páginas de servicio adicionales a las 10 del sitemap (nada de
   graduation o corporate como página propia) — esa consolidación ya se decidió
   con evidencia (ver 03c-Palanca-OFV).
5. No inventes reviews, ratings ni testimonios. El AggregateRating real es
   5.0 / 7 reviews (GBP): publícalo. Reviews individuales con schema Review
   solo cuando yo te dé el export.
6. Ningún dato marcado [CONFIRM] o [TO CONFIRM] en los documentos anteriores
   se publica tal cual — usa un placeholder visible o deja la sección fuera
   hasta que yo confirme.
7. Palanca de diseño: Riesgo/Confianza dominante, Oficio/Método de apoyo — el
   hero, el orden de secciones y el tono deben reflejarlo.

Empieza por: home + /gallery + la página ancla (/full-event-design) + schema
site-wide (LocalBusiness + ProfessionalService) + /contact; después
/balloon-garlands, /quinceanera-decorations, /birthday-and-baby-shower-decor,
/service-areas; al final /reviews y /about. Al terminar cada página, confírmame
qué archivos tocaste antes de seguir con la siguiente.
```

## Qué hacer con esto

1. Copia el bloque de arriba y pégalo como primer mensaje en Claude Code, parado en la raíz del repo del sitio.
2. Si el repo del sitio vive en otra carpeta (no dentro de `Claravdecor/`), copia primero las carpetas `02-Brief-OFV`, `03-Brandboard`, `04-Fotos/02-procesadas`, `05-Website` y `06-Entregables` (o al menos los archivos listados arriba) dentro del repo, para que Claude Code los pueda leer con su propio filesystem.
3. Cuando Claude Code termine las páginas núcleo, corre tú mismo el chequeo de "JS desactivado" (o pídeselo como parte del QA) antes de deploy.
4. Confirma que exista `~/.claude/CLAUDE.md` (nivel usuario, una sola vez) con los guardrails duros condensados — si no existe todavía, pídele a Claude Code que lo genere antes de tocar diseño (Step 0 de c3-website-build).
