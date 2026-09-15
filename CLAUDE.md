# ClaravDecor — contexto del proyecto

Sitio web y presencia local para **ClaravDecor**, decoración con globos para eventos (Dallas / Plano, TX). Cliente de Customize IT Corp bajo la metodología C3. Idioma de trabajo: español; el sitio se publica en inglés.

Fuente de verdad de las decisiones estratégicas: `02-Brief-OFV/2026-07-22-curado-con-clara/03c-Palanca-OFV-Claravdecor-2026-09-12.md`. Si algo aquí contradice ese documento, gana el documento.

## Palanca de la oferta de valor

- **Dominante: Riesgo / Confianza.** El buyer (Marisol) compra tranquilidad, no precio: "no busca lo más barato, busca que no le salga mal". Sus miedos son que se desinfle, que se caiga, que salga chueco en las fotos, que no quede como en la foto.
- **De apoyo: Oficio / Método**, con el nombre "Diseño Anclado al Espacio". El método explica *por qué* se puede confiar; no abre la conversación.
- **Apoyo visual obligatorio:** Prueba visual fue descartada como dominante solo porque los activos no la sostienen hoy (25 fotos, 6-7 eventos, todas verticales, sin fotos de proceso). Se reevalúa cuando haya 15-20 montajes bien fotografiados.
- **Descartadas como dominante:** Prueba social (7 reseñas, se citan con atribución, no abren), Dolor (compra aspiracional, no reparación), Velocidad (se promete, no se lidera con eso).

Evidencia que cruza tres de cuatro fuentes: el mismo hecho, *un proceso que garantiza que quede como imaginaste y aguante el evento*, aparece en el Brief, en las Reviews y en el Buyer. Las reseñas repiten fiabilidad, no belleza: "profesional y responsable", "puntual", "brings to life everything we imagine", "attention to detail".

## Diferenciador

Clara no describe su trabajo como el más bonito, sino como **el que no falla**. Lo concreto:

1. **Protocolo de evaluación del sitio** antes de diseñar: techado o exterior, superficie para anclar, corriente para letras, clima, viento, sol.
2. **Honestidad técnica declarada:** los globos revientan con el calor, los biodegradables duran menos, el clima no se controla. Se publica como "Lo que sí controlamos y lo que no".
3. **Mockup aprobado después de reservar.** Es lo que convierte el depósito no reembolsable (objeción #3 del buyer) en una decisión tranquila.
4. **Garantía de reposición** ("si un globo se revienta, voy y lo repongo"). Pendiente de acotar por escrito.
5. **Instalado antes del primer invitado, desmontaje incluido.**

## Patrón de arquitectura del sitio

**Portafolio-first, adaptado** (decidido por Luis el 14-sep-2026):

- La **galería es el eje central**. Marisol decide con el portafolio antes que nada.
- **Dos páginas ancla de producto** que reflejan el embudo real de dos peldaños: garland de entrada → `/full-event-design` como ancla.
- **Una página dedicada de alto valor:** quinceañera. Es la única ocasión con evidencia suficiente (persona propia "Daniela", ciclo de compra distinto, hueco de valor confirmado) para justificar URL propia pese a la escasez de fotos.
- **Una página combinada de ocasiones familiares:** birthday + baby shower / gender reveal.
- **Graduation y corporate NO tienen página propia.** Se pliegan como sección + FAQ dentro de `/full-event-design`. Tienen 1 y 3 fotos respectivamente y corporate es apuesta de crecimiento, no base actual.
- **Descartado:** las 7 páginas de servicio del sitemap v1 (diluían 25 fotos en demasiadas URLs) y una sola página genérica de servicios (perdía el SEO de cola larga de quinceañera).

Guardrail anti-doorway: una página solo se justifica con contenido real y único. Sitemap vigente: `06-Entregables/11-Sitemap-y-Copy-Web-ClaravDecor-2026-09-12.md` (v2, 14-sep).

## Cómo aterriza en la página principal

Hero = foto de montaje grande + velo Espresso + H1 "Tu celebración, montada e instalada. Tú solo llegas a disfrutarla." + subhead con el mockup. Luego: Cómo funciona (5 fases, mockup como paso propio), Lo que sí controlamos y lo que no, portafolio por tipo de evento, reseñas con atribución, desde $250, CTA en cada página.

La tensión registrada: el sitio no puede abrir con confianza y mostrar cuatro fotos. La primera pantalla lleva un montaje terminado, grande, con la promesa de proceso encima.

## Reglas duras

- **Nada etiquetado `[CONFIRM]` o `[TO CONFIRM]` se publica.** Hoy eso incluye: el nombre del método "Diseño Anclado al Espacio" (falta confirmación de Clara), la garantía como "garantía" (falta acotarla por escrito), el seguro / COI (no activo), un mockup real de ejemplo, fotos de Clara trabajando, y nombres de niños o logo Pfizer en fotos (confirmar foto por foto).
- Las reseñas se citan con el nombre del reseñador tal como aparece en Google. Markup de rating solo con export.
- Diseño y tokens: `05-Website/10-Design-Config-ClaravDecor-2026-09-12.md`. Prompt de build: `05-Website/12-Prompt-Build-Claude-Code-ClaravDecor-2026-09-12.md`. NAP canónico: `06-Entregables/07-NAP-Canonico-y-Anexo-NAP-Claravdecor-2026-09-12.md`.

## Repo

- Convención de nombres: la fecha en el nombre de un documento es la de creación, no la de última edición. Un archivo puede tener una versión más reciente en su contenido sin renombrarse (ej. el sitemap 12-sep contiene la v2 del 14-sep).
- Las fotos listas para web están en `04-Fotos/02-procesadas/` (máx. 2000 px, nombres SEO, `alt-map.json` con los textos alternativos).
- `04-Fotos/01-gbp-raw/` está en `.gitignore` y no se sube al repo.

## Sitio web (Next.js) — `site/`

- El código del sitio vive en `site/` (Next.js App Router, Tailwind 3, `lib/site.ts` como objeto único de negocio, `lib/photos.ts` como registro de fotos con alt real, `lib/schema.ts` para JSON-LD).
- Host canónico: `https://claravdecor.com` (apex, sin www), fijado en `business.url` de `site/lib/site.ts`.
- Comandos: `npm --prefix site run build` (build de producción), `npm --prefix site run dev` (desarrollo). Servidores de preview en `.claude/launch.json` (`claravdecor-site` en el puerto 3050, `claravdecor-dev` en el 3051).
- QA obligatoria antes de publicar: ver el source con JS desactivado (o `curl`) y confirmar copy, `alt` y bloques `ld+json`. Los pendientes visibles en el sitio llevan `data-pending="..."`; buscar ese atributo para localizar lo que falta confirmar con Clara.
- El formulario de contacto envía a `CONTACT_WEBHOOK_URL` (variable de entorno). Sin ella, el formulario muestra los canales directos en lugar de fingir el envío.
