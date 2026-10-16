# Clasificación de "nuevas fotos" — 2026-09-21

La carpeta tenía 91 archivos (88 fotos + 3 videos .mov). Esto es lo que hice:

## 1. Duplicados descartados automáticamente (9)
Copias exactas (mismo archivo con "(1)" o " 2" en el nombre) y tomas RAW del celular cuando ya existía la versión editada/recortada de la misma toma (mismo segundo exacto). No se tocaron, siguen en la carpeta original.

## 2. Fotos listas para publicar — 11
En `procesadas/<categoria>/`, redimensionadas (máx. 2000px, calidad ~82%, mismo criterio que las fotos actuales del sitio). No tienen nombres, caras identificables ni logos de terceros visibles:

- **birthday** (7): wreath tropical x2, cumpleaños 10 en cocina, garland ninja/fútbol x2, columna verde salvia/crema/plata sobre pared shimmer x2 — **estas dos últimas son buenas candidatas para la página de quinceañera** (mismo estilo que la foto "shimmer-wall" que ya marcan como `quinceStyle` en el sitio; no hay quince real todavía).
- **seasonal** (1): escultura de brujas y casa embrujada, Halloween.
- **bouquets** (2): bouquet Día del Padre x2 (globo estrella + caja de chocolates) — no hay nada de esto en el sitio actual, es contenido nuevo.

## 3. Fotos redimensionadas pero que necesitan tu confirmación (o de Clara) — 21
En `procesadas/_confirmar-con-clara/<categoria>/`. Ya están recortadas al tamaño correcto, pero cada una tiene un pendiente — igual que la regla que ya usan (`CLAUDE.md`: nombres de niños, logos, gente trabajando no se publica sin confirmar foto por foto):

- **Nombre/edad de niño visible** (8): Sonic "ANDRES 5" x2, Dragon Ball "ANDRES" x2, Minnie Mouse "Ester" x2, Spider-Man "Andrés Alejandro" x2.
- **Nombre de negocio/comunidad visible en el letrero** (3): la entrada de "Twinberry Isle" (misma puerta, tres fechas distintas — Halloween 2023 y otoño 2024).
- **Categoría nueva — bridal shower** (4): "Peyton's Bridal Shower / Future Mrs. Crawford", arco salvia/blush muy bonito, pero (a) esa categoría no existe todavía en el sitio (no es baby shower) y (b) el nombre completo y la fecha del evento están visibles en el letrero.
- **Gente identificable en la foto** (3): instalador armando una columna en un lobby de oficina, dos personas junto a la escultura de Hulk, una instaladora frente al arco "BABY".
- **Ocasión sin confirmar** (3): un arco azul/blanco/naranja en un pasillo institucional (¿colegio?), una columna naranja/marrón junto a una mesa de picnic con letrero ilegible.

## 4. No se procesaron (24 + 23)
- **24** son ángulos repetidos de la misma sesión ya cubierta por otra foto (por ejemplo, 3 tomas más del mismo wreath tropical, 5 tomas más del bridal shower).
- **23** no son fotos de decoración: 2 de personal preparando una mesa de catering, 1 de un certificado profesional, y **20 fotos que parecen ser de una boda personal** (novios, ceremonia, recepción — nada de globos). Probablemente se mezclaron por error en la carpeta; no las toqué.
- **3 videos (.mov)** — no se redimensionaron porque son video, no foto. Avísame si quieres que también los revise.

## 5. Reporte completo
`procesadas/reporte-clasificacion-2026-09-21.csv` tiene el detalle de las 32 fotos procesadas: archivo, origen, categoría, estado, tamaño original/final, alt text en inglés (mismo idioma que el sitio) y el pendiente exacto de cada una.

## No toqué
`04-Fotos/02-procesadas/`, `alt-map.json`, `mapa-fotos.csv` ni `site/lib/photos.ts` — eso es "publicar" en el sitio, y según las reglas del proyecto nada con nombre/logo/categoría nueva se sube sin tu confirmación (o la de Clara). Cuando me digas cuáles de las 21 están aprobadas, las integro al pipeline del sitio.

## 6. Actualización — las fotos de la boda (2026-09-21)
Las revisé de nuevo: tenías razón, esas ~20 fotos SÍ son un evento real donde Clara hizo la decoración — una boda estilo boho con un arco ceremonial de macramé, ramas y pampas grass, un "photo wall" de macramé a juego, la entrada del pasillo con instalaciones de pampas/flores secas, y un backdrop de recepción con luces, tul y guirnalda de hiedra. Es una categoría que el sitio no tiene todavía (**wedding**) y es trabajo de muy buena calidad — vale la pena considerarla.

De esas ~20, solo **5 muestran la decoración con claridad** (el resto son fotos de los novios posando, bailando, etc. sin que se vea decoración de fondo). Las 5 ya están redimensionadas en `procesadas/_confirmar-con-clara/wedding/`:

- `wedding-balloon-free-macrame-arch-driftwood-pampas-01.jpg` y `-02.jpg` — el arco ceremonial de macramé completo, novios abrazándose/besándose (en la segunda con su perro).
- `wedding-macrame-photo-wall-driftwood-floral-01.jpg` — el photo wall de macramé, con 3 personas.
- `wedding-ceremony-aisle-dried-pampas-floral-entrance-01.jpg` — el pasillo completo con las instalaciones de pampas secas a la entrada, invitados sentados (incluye un niño).
- `wedding-reception-fairy-light-ivy-backdrop-01.jpg` — el backdrop de recepción con luces y guirnalda de hiedra, novios cortando el pastel.

**Importante antes de publicarlas:** en las 5 se ve la cara de los novios y/o invitados con toda claridad — es una boda real, no un montaje de práctica. Además de la confirmación de nombre/uso que ya aplicas a las demás fotos, para una boda normalmente hace falta el **permiso explícito de los novios** para usarla en marketing, y conviene confirmar si Clara tiene los **derechos de estas fotos** (por el estilo, parecen tomadas por un fotógrafo profesional de la boda, no son fotos de celular de Clara — si es así, el fotógrafo también podría tener que autorizar el uso).

Las otras ~15 fotos de esa sesión (novios posando sin decoración visible, baile, corte de pastel sin fondo decorado, fotos de grupo con disfraces) no las procesé porque no muestran el trabajo de decoración — si quieres que las revise también por otro motivo (por ejemplo para el portafolio de fotografía, no de decoración), avísame.

## 7. Actualización — Clara autorizó todas las fotos (2026-09-21)
Con esa confirmación, moví 13 fotos de `_confirmar-con-clara/` a las carpetas limpias por categoría (ya no tienen ningún pendiente de nombre, edad, negocio o persona en la foto): Sonic "Andrés 5" x2, escultura de Hulk, la entrada "Twinberry Isle" x3, Dragon Ball "Andrés" x2, Minnie Mouse "Ester" x2, el arco "BABY" con la instaladora, y Spider-Man "Andrés Alejandro" x2.

**Total ahora: 24 fotos listas, 13 todavía en `_confirmar-con-clara/`** — pero ya no por tema de permiso, sino por esto:

- **`bridal-shower/` (4 fotos)** — el permiso de nombre/fecha ya está cubierto, pero la categoría "bridal shower" todavía no existe en el sitio (no es lo mismo que baby shower). Es una decisión de si la agregamos o no, no de permiso.
- **`corporate/school-arch` (2 fotos)** — necesito que me digas qué tipo de evento es el arco azul/blanco/naranja en el pasillo institucional, para saber si va en la página de corporate o en otra.
- **`seasonal/outdoor-picnic` (1 foto)** — el letrero manuscrito no se lee, necesito saber la ocasión exacta.
- **`corporate/office-lobby-column-install` (1 foto)** — no es tema de permiso, es que se ve a alguien instalando y la decoración sin terminar; dime si quieres fotos de "detrás de cámaras" en el sitio o prefieres solo trabajo terminado.
- **`wedding/` (5 fotos)** — el permiso de los novios/invitados ya está cubierto por Clara. Queda un punto aparte: por el estilo (edición profesional, no parece foto de celular), si estas fotos las tomó un fotógrafo de bodas contratado para el evento, los derechos de autor de la imagen en sí normalmente son del fotógrafo, no del cliente ni de Clara — eso es independiente del permiso para usar la decoración/el evento. Si Clara las tomó ella misma o el fotógrafo ya le cedió el uso, no hay problema.

`reporte-clasificacion-2026-09-21.csv` ya refleja este cambio (columna `estado`: listo/confirmar).

## 8. Actualización final (2026-09-21)
Con la confirmación de que Clara también tiene el permiso del fotógrafo de la boda, y que sí quieres fotos de proceso/instalación:

- Moví las **10 fotos restantes** (las 5 de la boda, las 4 del bridal shower y la de instalación en el lobby) a sus carpetas limpias — ya no hay ninguna en `_confirmar-con-clara/` por tema de permiso.
- Agregué **`bridal-shower`** y **`wedding`** como categorías nuevas en `site/lib/photos.ts` (`PhotoCategory`), junto a las que ya existían.

**Total: 34 de 37 fotos listas** (antes 24). Solo quedan 3 en `_confirmar-con-clara/` y es por un dato que me falta, no por permiso:

- `corporate/corporate-balloon-decor-school-arch-blue-orange-01.jpg` y `-02.jpg` — el arco azul/blanco/naranja en el pasillo institucional; necesito que me digas qué tipo de evento es.
- `seasonal/seasonal-balloon-decor-outdoor-picnic-orange-brown-column-01.jpg` — la columna naranja junto a la mesa de picnic; el letrero manuscrito no se alcanza a leer.

### Lo que todavía NO hice (siguiente paso, si lo quieres)
Solo agregué el tipo `bridal-shower`/`wedding` en el código — no agregué las fotos al registro real del sitio (`04-Fotos/02-procesadas/`, `alt-map.json`, `mapa-fotos.csv`, ni las entradas en `site/lib/photos.ts`), ni decidí en qué página van a aparecer bridal shower y wedding. Siguiendo el mismo criterio que ya usaron para graduation y corporate (pocas fotos → sección + FAQ dentro de una página existente, no URL propia), lo natural sería sumarlas como sección dentro de `full-event-design`. Dime si seguimos con eso y lo dejo publicado.

## 9. Fotos de Clara para About / Contact (2026-09-21)
Confirmaste que es ella en las 6 fotos identificadas. Ya están redimensionadas en `procesadas/equipo-clara/` (no van en el gallery de decoración por categoría, son para el equipo/founder):

- `clara-vento-certificacion-wedding-planning-expert-01.jpg` — **la mejor para About**: cara visible, sonriendo, con su certificación internacional (el diploma dice "Clara Carolina Vento Rueda").
- `clara-vento-instalando-backdrop-avengers-01.jpg` y `-02.jpg` — instalando un backdrop de Avengers, de espaldas, playera "@claravdecor".
- `clara-vento-instalando-arco-baby-shower-01.jpg` — instalando el arco verde/blanco/dorado (esta también sigue en `baby-shower/` como foto de decoración).
- `clara-vento-preparando-mesa-dulce-01.jpg` y `-02.jpg` — preparando una mesa de postres con flores, playera "@claravdecor" visible en una de las dos.

El sitio (`site/lib/site.ts`) todavía no tiene un campo para foto de fondadora en `/about` — hoy esa página es solo texto. Cuando le pases el prompt a Claude Code para integrar las fotos nuevas, puedes pedirle también que agregue una foto de Clara a `/about` usando `clara-vento-certificacion-wedding-planning-expert-01.jpg` como principal.
