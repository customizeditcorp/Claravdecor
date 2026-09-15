# ClaravDecor — Sitemap, arquitectura y copy del sitio (v2)

**c3-website-build · v2 — 14-sep-2026 (reemplaza la v1 del 12-sep) · Paso 12 de la Ruta B.1**
Consume: OFV 22-jul + Addendum 12-sep (lean, mecanismo, precio) · Persona 22-jul (Marisol / Daniela / Andrea) · NAP canónico 07 · Design config 10 (forma) · Brandboard 22-jul (color) · Fotos procesadas (`mapa-fotos.csv`, `alt-map.json`) · **Decisión de portafolio: lanzar magro, 25 fotos, todas autorizadas por Clara.**
**Patrón de arquitectura:** Portafolio-first, adaptado — decidido con evidencia el 14-sep-2026, registrado en `03c-Palanca-OFV-ClaravDecor` §"Patrón de arquitectura". Este doc es la v2 del sitemap; la v1 (12-sep, 7 páginas de servicio en silo) queda archivada — se escribió antes de aplicar ese análisis.
**Host canónico:** `https://claravdecor.com` (apex, sin `www`) — se fija en `lib/site.ts` y se usa en canonical, OG, sitemap, robots y todos los `url`/`@id` del schema.
**Idioma:** inglés (práctica C3 para sitios de cliente; el español queda en GBP y reseñas — ver Anexo NAP).
**Lever aplicado:** Risk/Trust dominante, Craft/Method secundario — ya resuelto en forma por `10-design-config-2026-09-12.md`. Este doc no repite tokens; solo estructura y copy.

---

## 1. Sitemap (guardrail anti-doorway aplicado + patrón portafolio-first)

```
/                                    Home
/gallery                             Eje central del patrón — portafolio por tipo de evento
/full-event-design                   Servicio — peldaño ancla (Diseño Anclado al Espacio)
                                      incluye sección + FAQ de graduation/corporate/schools
/balloon-garlands                    Servicio — peldaño de entrada ($250)
/quinceanera-decorations             Página dedicada — único tipo de evento con evidencia
                                      suficiente para URL propia (ver §1a)
/birthday-and-baby-shower-decor      Página combinada — birthday + baby shower + gender reveal
/service-areas                       Una sola página, NO una por ciudad (ver nota)
/reviews                             Reseñas con atribución
/about                                Sobre Clara + el método
/contact                             Formulario + canales directos
```

**10 páginas, no 13.** La v1 (12-sep) tenía 7 páginas de servicio en silo — una por cada tipo de evento del GBP. Se archivó tras aplicar el mismo rigor de evidencia que ya usamos para la palanca (ver `03c-Palanca-OFV` §"Patrón de arquitectura").

### 1a. Por qué cambia la arquitectura de servicio

**Evidencia para consolidar:**
- Buyer persona (Marisol), criterio de decisión #1: *"Portafolio visual — decide antes que nada."* Su escenario de conversión verifica la galería antes de seguir (Persona §7, §12) — la galería es el eje, no una sección más.
- Business Brief §4, textual: *"un sitio de decoración de eventos vive de su galería, y hoy no hay volumen para llenar un portafolio robusto ni páginas de servicio con imágenes propias variadas."* Con 25 fotos de 6–7 eventos, 7 páginas dedicadas diluyen el inventario — graduation tiene 1 foto, corporate 3.
- Business Brief §2: la escalera real del negocio es un embudo de dos peldaños (garland de entrada → diseño integral ancla), no un catálogo plano de servicios equivalentes.
- Guardrail anti-doorway: una página solo se justifica con contenido real y único — graduation y corporate no lo tienen hoy, y corporate es *"1 de cada 10 eventos... apuesta de crecimiento, no base actual"* (Persona Andrea, Brief §5).

**Por qué quinceañera SÍ conserva página propia (no se consolida con las demás):** es la única ocasión con evidencia suficiente para justificar una URL dedicada pese a la escasez de fotos — persona propia ("Daniela": doble decisor, ciclo 3–8 meses, margen de error percibido cero), término de búsqueda específico y de alto volumen ("quinceañera decorations Dallas"), y el Brief la marca explícitamente como uno de los **"huecos de mayor valor."** Colapsarla en la página combinada habría sacrificado ese SEO de cola larga sin necesidad.

**Por qué birthday y baby-shower/gender-reveal SÍ se combinan:** comparten tono, miedos (Persona §5: que se caiga encima de un niño, que se vea barato) y son, juntas, la categoría con más fotos reales (16 de las 25) — una sola página bien poblada supera a dos páginas delgadas.

**Por qué graduation y corporate bajan a sección + FAQ dentro de `/full-event-design`:** ninguna tiene evidencia de alto volumen de búsqueda propio en la Persona, ambas tienen el inventario de fotos más débil, y corporate es explícitamente el segmento de crecimiento (Andrea), no la base actual. La reseña institucional real (SMARTpro Academy) y las 3 fotos de corporate se usan ahí, no en una página que competiría por poco tráfico con contenido delgado.

**Por qué 2 páginas de producto y no 25 (una por cada ítem del GBP):** el GBP lista 25 servicios porque así compite por relevancia en Google; el sitio no necesita clonar esa lista. La escalera real del negocio tiene dos peldaños de producto (garland → diseño integral) y el comprador busca por **tipo de evento**, no por componente ("balloon arch" vs "backdrop" no son decisiones separadas de compra).

**Por qué no hay `/areas/[city]` todavía:** el guardrail anti-doorway exige contenido real y único por ciudad — fotos reales de esa ciudad, testimonios de esa ciudad. Hoy las 27 fotos del GBP no tienen geolocalización (Google la borra) y no hay forma honesta de decir "trabajos en Frisco" vs "trabajos en Plano". Una página por ciudad hoy sería contenido duplicado con el nombre cambiado — exactamente lo que el guardrail prohíbe. Se publica **una sola** página `/service-areas` con la lista de zonas (núcleo/extendida, según §3 del Anexo NAP) y un mapa de cobertura. Las páginas por ciudad se activan cuando exista evidencia real por ciudad (fotos con testimonio atribuible a esa ciudad) — no antes.

**Corporativo:** su contenido vive dentro de `/full-event-design` (Andrea es el segmento de crecimiento y ya hay reseñas institucionales reales — SMARTpro Academy), pero **sin CTA de "solicitar propuesta corporativa"** ni mención de seguro/COI hasta que la póliza esté activa (Addendum §gate). El CTA de esa sección es el genérico de cotización.

---

## 2. Home — copy completo (inglés)

**Hero** (arquetipo Risk/Trust — foto de montaje + scrim Espresso 45%, candidatas de `10-design-config` §3: shimmer wall 13 / baby shower arch bear / sage hoop arch bear)

> **H1:** Your celebration, set up and ready. You just walk in and enjoy it.
> **Subhead:** Book your date, see your design, approve it — and on the day of your event, it's already done.
> **CTA primario:** Get your free quote — **CTA secundario:** See our work

**Trust bar** (una fila, hechos verificables, sin estrellas ni cifras infladas):
> Mockup approved before your event · Set up before your first guest arrives · Takedown included · Serving North Dallas since 2019

**Section 2 — How it works** *(ProcessSteps, editorial, refuerzo Craft/Method — el mockup es un paso propio)*

> **Eyebrow:** OUR PROCESS — **H2:** From your idea to a room that's already done

1. **Tell us about your idea.** Share your event type, venue, date, theme, colors and budget — inspiration photos welcome. Free quote, no obligation.
2. **We read your space.** Indoor or outdoor, surface, power access, height, weather — this decides the balloons, the technique, and how everything is anchored so it holds.
3. **You lock in your date.** You get an invoice with everything spelled out and a deposit. Once it's paid, your date is reserved — exclusively for you.
4. **We design it and show you.** Once your date is booked, we build your custom design — balloon architecture sized for your space, your exact palette (double-stuffed when your color doesn't exist off the shelf) — and send you a mockup to approve or adjust.
5. **We set up and take down.** Everything is installed before your first guest arrives, and removed on schedule when it's over.

*(Slot oculto `[TO CONFIRM]` para un mockup real de ejemplo — se activa cuando exista.)*

**Section 3 — What we handle, and what we don't** *(WhyUs, superficie Espresso — la pieza de confianza más barata)*

> **H2:** Honest about what we can promise

| We handle | We're upfront about |
|---|---|
| Building to your approved mockup | Weather for outdoor events — we plan for it, we can't control it |
| Choosing balloons and technique for your exact site, indoor or outdoor | How long balloons hold up outdoors in Texas heat, wind and sun |
| Installing before your first guest arrives | Care of rented pieces once the event is underway |
| Full takedown on schedule | — |

> **Guarantee:** We stand behind your setup. If anything fails on our end, we come back, fix it, and replace it. Your event has to look right. `[wording final pendiente de acotar con Clara: causa propia + ventana de tiempo — Addendum §7 open]`

**Section 4 — Portfolio by event type** *(Gallery, retícula 4:5, agrupada — ver §5, eje central del patrón)*
> **H2:** See it before it's your turn — Birthday · Baby Shower & Gender Reveal · Quinceañera · Graduation · Corporate & School

**Section 5 — Reviews** *(citas reales con atribución, `10-design-config` — sin markup animado)*
> **H2:** What families and partners say
> 3 citas rotativas (mayra, gaby/SMARTpro, Jommy) + link "Read all reviews on Google" → `/reviews`

**Section 6 — Pricing posture** *(sin cifra de integral, ancla en $250)*
> **H2:** Start from $250
> Our organic balloon garland — up to 8 ft, up to 3 colors, delivered and installed within 20 miles of 75248 — is the easiest way to start. Full event design is quoted around your space and your vision. Every quote is free, with no obligation, in 24–48 business hours.
> CTA: See garland details → `/balloon-garlands` · Explore full event design → `/full-event-design`

**Section 7 — Final CTA**
> **H2:** Tell us about your event and get your free quote
> We reply within 24–48 business hours.
> [Text or call (469) 567-0386] · [Message us on Instagram] · [Fill out the form]

---

## 3. Página ancla: `/full-event-design`

**Title tag (≤60c):** Full Event Design & Balloon Decor | ClaravDecor Dallas
**Meta description:** Custom event design for North Dallas — backdrops, balloon architecture and full-room styling, built for your space and approved before your event. Free quote in 24–48 hrs.

> **H1:** Full Event Design in North Dallas
> **Intro (result-first):** You imagined a room. We build it to match — backdrops, balloon architecture, pedestals, signage and table styling designed around your actual space, not a catalog. You approve the design before the event, then walk into a room that's already finished.

**What's included**
- Custom backdrop and balloon architecture, sized and colored to your event
- Pedestals, decorative furniture and signage designed as one concept
- Main table and dessert table styling
- Color matched to your exact palette, double-stuffed when it doesn't exist off the shelf
- A mockup of your design to approve or adjust before the event
- Full installation and takedown

**The process (Diseño Anclado al Espacio)** *(link a How it works de home; aquí un resumen de 3 líneas + link "See our full process")*
> Every full design starts with reading your actual space — indoor or outdoor, surface, power, weather — so the balloons, technique and anchoring are built to hold. Once your date is booked, we design it and send you a mockup before we build anything.

**Why us**
> Sección "What we handle, and what we don't" (reutilizar bloque de home, mismo copy) — en página de servicio se enfatiza el ítem "one provider, one point of contact" si Clara lo confirma como diferenciador frente al miedo de Andrea ("un solo proveedor falla y se cae todo").

**Also for schools, graduations & corporate events** *(sección plegada — antes página propia en v1; ver §1a)*
> From office parties to campus events and graduation celebrations, we design around your brand colors or school theme and install before doors open — the same process, the same mockup approval, built for a workplace or campus instead of a living room. We've worked with schools and offices on a recurring basis. *(Sin mención de seguro/COI hasta que la póliza esté activa — carril suave.)*
> Gallery embed: corporate (3 fotos, incluye Pfizer — Clara autorizó su uso) + graduation (1 foto).

**FAQ** (ver §6, subset: costo, depósito, distancia, clima, + "Do you work with schools and businesses?")

**Gallery** (embed filtrado: todas las categorías, 8–10 fotos representativas)

**CTA final:** Get your free quote for your event

---

## 4. Página dedicada: `/quinceanera-decorations` (Daniela)

**Title:** Quinceañera Decorations Dallas–Fort Worth | ClaravDecor
**Meta:** Custom quinceañera decor in North Dallas — backdrops, balloon garlands, marquee numbers and table styling designed around her theme. Free quote in 24–48 hrs.

> **H1:** Quinceañera Decorations in North Dallas
> **Intro:** Her theme, her colors, her day — built into a room she walks into and recognizes immediately. Balloon garlands, arch backdrops, marquee numbers, and main table and dessert table styling, designed around her vision and approved before the big day.

**What's included:** custom backdrop and garland in her palette · marquee number or name signage · main table and dessert table styling · installation before guests arrive, full takedown after

**Why it matters for this one:** *(persona note interna, no va en el sitio tal cual — sirve de guía de tono)* doble decisor (hija define estilo, mamá aprueba presupuesto y firma), ciclo largo 3–8 meses, margen de error percibido cero. El copy debe hablar directo a la festejada ("her theme, her colors") y a la mamá en el bloque de confianza/proceso.

**FAQ específico:** "How far in advance should we book?" → Most quinceañeras book 3–8 months ahead to lock in the date and give us time to design; we can often accommodate shorter timelines too — ask us. · "Can you match our exact colors?" → Yes — when your color isn't available off the shelf, we double-stuff to match it exactly.

**Gallery filtrada:** quinceañera / cumpleaños de tema similar (columna con temática, shimmer wall) — hoy sin fotos propias de quinceañera; usar categoría birthday más cercana en tono y anotar internamente `[pedir a Clara fotos reales de quinceañera para esta página]`.

**CTA:** Get your free quinceañera quote

---

## 5. Página combinada: `/birthday-and-baby-shower-decor`

**Title (≤60c):** Birthday & Baby Shower Balloon Decor Dallas | ClaravDecor
**Meta description:** Balloon backdrops, arches and columns for birthdays, baby showers and gender reveals across North Dallas — designed around your theme, installed and gone before you have to think about it.

> **H1:** Birthday, Baby Shower & Gender Reveal Decorations in North Dallas
> **Intro (result-first):** From a first birthday to a milestone one, and from the baby shower to the reveal itself, we design the backdrop and balloon setup around your theme — and it's ready before the first guest arrives.

**Birthday parties** *(H2)*
> A themed backdrop, a balloon arch, or a full balloon wall — sized to your venue and your colors, built for kids' parties and adult milestones alike. Our biggest gallery category — see real setups below.
> Miedos que responde (Persona §5): que se vea barato, que el color no combine, que se desinflen antes de que llegue la gente.

**Baby showers & gender reveals** *(H2)*
> Arches, backdrops and balloon columns designed around the reveal moment or the shower theme — sage, blush, blue or your own palette — installed and gone before you have to think about it.
> Miedo que responde (Persona §5): que se caiga encima de un niño, que salga arrugado o chueco en las fotos.

**What's included:** custom backdrop or arch in your palette · balloon columns or garland accents · installation before guests arrive, full takedown after

**FAQ específico:** "Can you match our exact theme colors?" → Yes — when your color isn't available off the shelf, we double-stuff to match it exactly. · "How far in advance should we book a baby shower or birthday?" → Many book 1–3 weeks ahead, though popular dates fill faster — the earlier you reach out, the more options you have.

**Gallery filtrada:** Birthday (11 fotos: shimmer wall, gamer, mario, superhero, first birthday daisy, pink-cream-gold) + Baby Shower & Gender Reveal (5 fotos: arch backdrop, sage hoop arch, baby-in-bloom, welcome sign) + Bouquets (3 fotos: birthday, valentine's)

**CTA:** Get your free quote

---

## 6. FAQ maestro (objeciones reales de Marisol/Andrea — Persona §8, Addendum §Componente 4)

1. **How much does this cost?** Our balloon garland starts at $250 (up to 8 ft, up to 3 colors, delivered and installed within 20 miles of 75248) — that's a starting point, not full event decor. Full event design is quoted around your space and vision. Every quote is free, no obligation, in 24–48 business hours.
2. **Why isn't the deposit refundable?** Booking your date takes it off the market for other requests and starts our planning, sourcing and design work for you. It's explained in your quote before you pay.
3. **Do you charge extra for distance?** Travel within our core North Dallas area is included. Events farther out — Frisco, McKinney, Fort Worth, Arlington, Grapevine — include a distance fee in your quote.
4. **What if my event is outdoors and it rains?** We evaluate your site ahead of time and plan for it, including a backup option — but weather itself is never something we can guarantee.
5. **My event is in less than two weeks — can you still help?** Often, yes. Short-notice bookings may include a small fee, which we'll explain upfront in your quote.
6. **Do balloons pop or deflate in the heat?** It can happen outdoors — Texas heat, wind and sun affect them. We choose materials and placement with that in mind, and if something fails on our end, we fix it.
7. **Can you match our exact colors?** Yes — when the color you need doesn't exist off the shelf, we double-stuff to match your palette exactly.
8. **Do you install and take everything down?** Yes, both are included in every design — you don't lift a finger before or after.
9. **Do you work with schools and businesses?** Yes, on a recurring basis — we design around your brand colors or campus theme and install before doors open. *(Sin mención de seguro/COI hasta que la póliza esté activa.)*

*(#2, #3, #5 usan las cifras exactas del Addendum Componente 4 — no inventar variantes.)*

---

## 7. Páginas de apoyo — copy breve

**`/service-areas`**
> H1: Where We Work — Serving North Dallas
> Intro: Based in the 75248 area, we serve families and organizations across North Dallas. Core area (no travel fee): Dallas, Addison, Richardson, Carrollton, Farmers Branch, Coppell, Plano. Extended area (distance fee applies): Frisco, McKinney, Allen, Garland, Irving, The Colony. Don't see your city? Ask — we may still be able to help.
> *(Lista final pendiente de la decisión de Clara sobre Grapevine/Southlake/Highland Park/University Park — Anexo NAP §3. Se publica con la lista núcleo+extendida ya acordada; se actualiza cuando Clara decida el resto — un solo cambio, no antes del 19-sep.)*

**`/about`**
> H1: About ClaravDecor
> Clara Vento has been designing event decor in North Dallas since 2019, with 10 years of experience shaping spaces for the moments that matter. Every design starts with your space and your vision — not a catalog — and every setup is installed before your first guest and cleared away when it's over. *(Sin mención de seguro; sin "10 años en el mercado" — regla de precisión de copy.)*

**`/gallery`** *(eje central del patrón — no una página de apoyo más)*
> H1: Our Work — By Event Type
> Retícula 4:5, filtros: Birthday · Baby Shower & Gender Reveal · Quinceañera-style · Graduation · Corporate & School · Bouquets & Seasonal. 25 fotos, `alt` real de `alt-map.json`. Sin lightbox obligatorio (progresivo). Cada filtro enlaza a la página correspondiente cuando existe (`/full-event-design`, `/quinceanera-decorations`, `/birthday-and-baby-shower-decor`) para reforzar el cruce galería ↔ páginas de servicio que sostiene este patrón.

**`/reviews`**
> H1: What Our Clients Say
> Las 7 reseñas completas, atribuidas por nombre tal como aparecen en Google, con fecha. Link "Leave us a review" solo activo cuando el flujo de solicitud de reseñas de GHL esté armado (falta Place ID).

**`/contact`**
> H1: Tell Us About Your Event
> Formulario: fecha del evento* · ciudad y lugar* · tipo de celebración* · interior o exterior* · cantidad aproximada de invitados* · hora del evento · hora disponible para instalación · foto de inspiración · presupuesto aproximado (opcional, con el reencuadre: "This isn't to charge up to it — it's so we don't suggest something that doesn't fit.")
> Canales directos arriba del formulario: Text/Call (469) 567-0386 · Instagram DM · info@claravdecor.com

---

## 8. On-page SEO — tabla por página

| Página | Title (≤60c) | H1 |
|---|---|---|
| Home | ClaravDecor \| Event Decor & Balloon Design, North Dallas | Your celebration, set up and ready |
| /gallery | Event Decor Portfolio \| ClaravDecor | Our Work — By Event Type |
| /full-event-design | Full Event Design & Balloon Decor \| ClaravDecor Dallas | Full Event Design in North Dallas |
| /balloon-garlands | Balloon Garlands Dallas — From $250 \| ClaravDecor | Balloon Garlands in North Dallas — From $250 |
| /quinceanera-decorations | Quinceañera Decorations Dallas–Fort Worth \| ClaravDecor | Quinceañera Decorations in North Dallas |
| /birthday-and-baby-shower-decor | Birthday & Baby Shower Balloon Decor Dallas \| ClaravDecor | Birthday, Baby Shower & Gender Reveal Decorations |
| /service-areas | Service Areas \| ClaravDecor North Dallas | Where We Work |
| /reviews | Reviews \| ClaravDecor | What Our Clients Say |
| /about | About Clara Vento \| ClaravDecor | About ClaravDecor |
| /contact | Contact \| ClaravDecor | Tell Us About Your Event |

Cada página: 1 solo H1, meta description propia (no global), OG propio, alt real en cada foto, breadcrumb, canonical al apex.

---

## 9. Schema (JSON-LD) — guardrail 6

**Sitio completo** (`@id` estable, referenciado desde cada página de servicio):

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://claravdecor.com/#business",
  "name": "ClaravDecor",
  "url": "https://claravdecor.com",
  "telephone": "+14695670386",
  "email": "info@claravdecor.com",
  "areaServed": [
    {"@type": "City", "name": "Dallas"}, {"@type": "City", "name": "Plano"},
    {"@type": "City", "name": "Richardson"}, {"@type": "City", "name": "Carrollton"},
    {"@type": "City", "name": "Addison"}, {"@type": "City", "name": "Farmers Branch"},
    {"@type": "City", "name": "Coppell"}, {"@type": "City", "name": "Frisco"},
    {"@type": "City", "name": "McKinney"}, {"@type": "City", "name": "Allen"},
    {"@type": "City", "name": "Garland"}, {"@type": "City", "name": "Irving"},
    {"@type": "City", "name": "The Colony"}
  ],
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
    "opens": "08:00", "closes": "20:00"
  }],
  "aggregateRating": {
    "@type": "AggregateRating", "ratingValue": "5.0", "reviewCount": "7"
  }
}
```
*(Sin `address` — SAB con dirección oculta; NO se publica ninguna dirección aunque exista un campo. `aggregateRating` es real y verificable en el GBP público — no se toca hasta que cambie.)*

**Página de servicio** (ejemplo `/full-event-design`; repetir el mismo bloque para `/balloon-garlands`, `/quinceanera-decorations` y `/birthday-and-baby-shower-decor` con su propio `serviceType`/`url`):
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Full event decor design and installation",
  "provider": {"@id": "https://claravdecor.com/#business"},
  "areaServed": {"@id": "https://claravdecor.com/#business"},
  "url": "https://claravdecor.com/full-event-design"
}
```

**FAQ** (una por página con FAQ visible, texto idéntico al de pantalla): `FAQPage` con `mainEntity` = las preguntas de §6 relevantes a esa página.

**Todas las páginas internas:** `BreadcrumbList`.

**No se publica** `Review` individual por reseña hasta exportar el texto completo con fecha verificada (hoy se cita en la página `/reviews` como texto, sin marcar cada una como `Review` schema — evita desalineación entre el texto visible y el markup).

---

## 10. Guardrails verificados para este cliente

- Sin dirección pública en ningún lado (SAB, GBP address oculta) — coherente con NAP canónico.
- Sin cifra de "años en el mercado" — solo "since 2019" (negocio) y "10 years of experience" (Clara), nunca combinados.
- Sin testimonios inventados, sin `Review`/`AggregateRating` fabricado — las 7 reseñas y el 5.0 son reales y públicos en el GBP.
- Sin páginas de ciudad sin evidencia real (§1).
- Sin páginas de tipo de evento sin evidencia real de volumen/diferenciación (§1a) — graduation y corporate se documentan como sección, no como página.
- Sin calculadora de precio ni cotizador automático (práctica C3 + el negocio cotiza a medida).
- Seguro/COI: cero menciones hasta que la póliza esté activa (Addendum, gate).
- Render: Next App Router, server components para copy/alt/JSON-LD, sin `output:'export'`, `next/image` real. QA obligatoria antes de publicar: ver código fuente con JS desactivado.

---

## 11. Abierto / bloqueado (no inventar, pasar a Clara)

| Ítem | Bloquea |
|---|---|
| Nombre del método "Diseño Anclado al Espacio" | `[CONFIRM]` — Luis lo dio por bueno el 12-sep; Clara lo confirma antes de publicarlo en el sitio (regla del skill de criterios OFV) |
| Garantía por escrito (causa propia + ventana) | Wording exacto de §Guarantee en home y páginas de servicio |
| Recargo de urgencia 10%/15% y su relación con el depósito 60% | FAQ #5 usa lenguaje genérico ("a small fee") hasta formalizarse |
| Fotos horizontales + de proceso (checklist ya entregado a Clara) | Hero variado / sección de proceso con imagen real |
| Mockup real de ejemplo | Slot oculto en "How it works" |
| Lista final de ciudades (§3 Anexo NAP) | `/service-areas` publica con la lista provisional; un solo cambio cuando Clara decida |
| Logo fuente con follaje / lockup SVG | Header y footer usan el lockup actual hasta entonces |
| Place ID del GBP | Link "Leave a review" en `/reviews` queda inactivo hasta tenerlo |
| Fotos reales de quinceañera | `/quinceanera-decorations` usa galería de birthday por tono hasta tener fotos propias |

---

## 12. Próximo paso técnico (handoff a build)

Con este doc (v2) + `10-design-config-2026-09-12.md` + brandboard (color) + `alt-map.json`/`mapa-fotos.csv` (imágenes) + `03c-Palanca-OFV` (palanca + patrón de arquitectura), el build en Claude Code puede arrancar directo sobre el template de referencia (`lib/site.ts` como objeto único de negocio) sin otra ronda de estrategia. Secuencia sugerida (Paso 8 del skill): (1) home + `/gallery` + `/full-event-design` + `/contact` con schema de sitio, (2) `/balloon-garlands`, `/quinceanera-decorations`, `/birthday-and-baby-shower-decor`, `/service-areas`, (3) fotos reales reemplazando cualquier placeholder, (4) QA JS-desactivado + Rich Results Test + mobile, (5) deploy en el dominio canónico y handoff a la fase de presencia local (ya en marcha).
