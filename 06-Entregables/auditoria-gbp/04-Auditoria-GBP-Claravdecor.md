# Auditoría de Google Business Profile — Claravdecor

**22 julio 2026**

| | |
|---|---|
| Verificación | Verificada |
| Apertura declarada | 10 agosto 2019 |
| Categoría primaria | `Balloon artist` |
| Categoría secundaria | `Balloon store` — **sin servicios asociados** |
| Teléfono / SMS | (469) 567-0386 · chat activo |
| Sitio web declarado | `beacons.ai/claravdecor` |
| Ubicación | Sin local físico, solo servicio a domicilio |
| Áreas de servicio | 16 ciudades |
| Servicios | 22, todos en inglés, todos bajo `Balloon artist` |
| Descripción | Cargada, en inglés, menciona 7 ciudades |
| Enlaces sociales | **Ninguno** |
| Atributos | Solo métodos de pago |
| Reseñas | 7 · 5.0 · 1 respondida |

---

## Diagnóstico

Tres fallas de configuración están costando visibilidad y conversión, en este orden:

1. **Sin anclaje geográfico verificable.** No hay dirección pública y no se reportan áreas de servicio configuradas. Un service-area business sin service areas cargadas no tiene señal de ubicación que Google pueda usar.
2. **Horario mal cargado.** La ficha aparece cerrada los domingos, lunes y martes en horario comercial. Ver §1.
3. **El destino de conversión no convierte.** El campo de sitio web apunta a una página de link-in-bio sin ruta de contacto. Ver §2.

### Evidencia de prominencia

Se ejecutaron búsquedas con sesgo de ubicación en 75248, radios de 15 y 20 km, con cinco variantes de nombre y consulta de categoría. La ficha no apareció en ninguna. Sí aparecieron siete competidores del mismo radio, incluyendo Bashify Event Co. (Richardson), que tiene cero reseñas.

Con los datos del panel a la vista, la hipótesis principal es la ausencia de áreas de servicio configuradas. Sin dirección pública **y** sin service areas, la ficha carece de cualquier ancla geográfica — lo que explica que sea invisible en consultas geolocalizadas mientras la ficha de un competidor sin reseñas sí aparece.

**Confirmar en BrightLocal antes de intervenir.** El Local Search Grid distingue una ficha invisible en todo el grid — configuración — de una que aparece en el pin y cae dentro de la milla — curva normal de proximidad. Son arreglos distintos.

---

## 1. Horario — dos correcciones

| Fuente | Horario |
|---|---|
| Clara declara | Los 7 días, 8:00 AM – 8:00 PM |
| GBP publicado | Lun–Vie 9 AM–7 AM · Sáb 10 AM–5 AM · Dom cerrado |

**Error 1 — captura AM/PM.** Los cierres están en AM. Google interpreta "9 AM–7 AM" literal. Cambiar a PM. Siete campos.

**Error 2 — días y franja no coinciden con la realidad.** Clara dice que atiende los 7 días de 8 a 8. El GBP tiene domingo cerrado y una franja distinta. Si de verdad atiende domingos, hay que reflejarlo — es día alto de eventos y de búsqueda de proveedor, y la competencia con horario reducido queda en desventaja.

Confirmar con Clara el horario real y cargarlo una sola vez, bien.

---

## 2. Sitio web — el destino de conversión no convierte

El campo de sitio web del GBP apunta a `beacons.ai/claravdecor`.

**Contenido completo de esa página:** enlace a Instagram, enlace a TikTok, registro de email, y un enlace promocional de Beacons.

### Lo que falta en el destino al que Google manda su tráfico

- Teléfono
- Formulario o botón de cotización
- WhatsApp
- Lista de servicios
- Portafolio de montajes
- Ciudades atendidas
- NAP

### Consecuencia

Quien encuentra la ficha en Maps y presiona "Sitio web" aterriza en una página cuyas únicas salidas son redes sociales. El prospecto con intención de contratar hoy se va a Instagram a mirar fotos en lugar de pedir cotización. Y una fracción del tráfico se va al enlace promocional de Beacons.

Además, Google no tiene contenido propio que asociar a la entidad. Sin dominio propio no hay páginas de servicio, ni páginas de ciudad, ni datos estructurados, ni autoridad acumulable. La ficha compite solo con lo que tiene cargado dentro de Google.

### Corrección

**Corto plazo, esta semana:** si beacons.ai permite editar, agregar como primeros elementos un botón de llamada al (469) 567-0386, un botón de WhatsApp y un enlace de cotización. Que Instagram y TikTok bajen. Y eliminar el enlace promocional de Beacons si el plan lo permite.

**Correcto:** dominio propio con sitio, aunque sea de una página. Cualquier landing en dominio propio con teléfono, servicios, portafolio y formulario supera a beacons.ai como destino de GBP. El stack de C3 — Next.js sobre Vercel — resuelve esto rápido y aporta la señal de dominio que hoy no existe.

---

## 3. Categorías

### Estado

| | |
|---|---|
| Primaria | `Balloon artist` |
| Secundaria | `Balloon store` — **0 servicios asociados** |
| Secundarias sin usar | 8 de 9 |

### El hallazgo

En GBP los servicios se enlazan a la categoría bajo la cual se cargan. **Los 22 servicios están todos bajo `Balloon artist`. La categoría secundaria no tiene ninguno.**

Existe pero no está trabajando. Es capacidad de relevancia ya habilitada y sin usar.

### Sobre cuál debería ser la primaria

`Balloon artist` se asocia en la taxonomía de Google principalmente con artistas de globos — figuras torcidas, entretenimiento infantil. Claravdecor instala garlands estructurales, backdrops anclados y letras iluminadas, con montaje y desmontaje. Es instalación, no animación.

La categoría primaria es el factor de relevancia con más peso en el paquete local, y ambas candidatas ya están cargadas — invertirlas es un cambio de un campo, no una migración.

**Verificar antes de cambiar.** El GBP Audit de BrightLocal entrega el benchmark de categoría contra los mejor rankeados. Sin él, método manual: buscar *balloon garland Dallas* y *balloon decorations near me* desde una ubicación del área, abrir las tres primeras fichas del paquete local, y leer la categoría bajo cada nombre. Repetir con MV Fiestas, Balloon Therapy Events y Smiles Balloon Company.

**Advertencia:** cambiar la primaria puede activar re-revisión y fluctuación temporal de ranking. Documentar el estado actual con captura y no ejecutarlo la misma semana que otros cambios grandes.

### Secundarias a evaluar

De las 8 libres, las candidatas por afinidad real con lo que hace: `Event planner`, `Party equipment rental service`, `Wedding service`, `Party planner`.

---

## 3b. Áreas de servicio — tres listas que no coinciden

| Fuente | Ciudades |
|---|---|
| Manual de la clienta | 11 |
| GBP, áreas de servicio | **16** |
| GBP, descripción | 7 + "área DFW" |

**Cargadas en GBP (16):** Allen, Plano, Dallas, Frisco, Irving, Addison, Coppell, Garland, McKinney, Grapevine, Carrollton, Richardson, Highland Park, Farmers Branch, Southlake, University Park

**En GBP y no en el manual:** Allen, Coppell, Grapevine, Highland Park, Southlake, University Park
**En el manual y no en GBP:** The Colony

**Tres del corredor del aeropuerto no encajan:** Grapevine y Southlake están a 30–35 min hacia DFW, otro corredor. Declarar áreas más amplias que las que realmente se atienden no mejora posicionamiento y sí genera consultas fuera de radio rentable.

Fijar una lista en tres niveles y replicarla en GBP, descripción, sitio y materiales:
- **Núcleo** (sin cargo, páginas de ciudad): Dallas, Addison, Richardson, Carrollton, Farmers Branch, Coppell, Plano, University Park, Highland Park
- **Extendida** (con cargo): Frisco, McKinney, Allen, Garland, Irving
- **Revisar o descartar:** Grapevine, Southlake — corredor del aeropuerto

---

## 3c. Enlaces sociales — vacío

El perfil **no tiene ninguna red vinculada**, teniendo Instagram, TikTok, Pinterest y Threads activos.

GBP permite enlazarlas y las muestra en la ficha. Es señal de entidad, ruta de conversión adicional, y refuerzo de consistencia. Cinco minutos.

---

## 3d. Atributos — solo pagos

Cargados: débito, crédito, American Express, Discover. Google actualizó atributos automáticamente, lo que conviene revisar.

**Atributos a activar por relevancia directa con su posicionamiento:**

- **Identifies as women-owned** — filtro real de búsqueda en Google
- **Identifies as Latino-owned** — refuerza el hueco de mercado detectado
- **Online appointments / Onsite services** — coherente con el modelo service-area

`[REVISAR]` El listado completo de atributos quedó sin ver. Vale volver a la pestaña y revisar qué más hay disponible para esta categoría.

---

## 4. Servicios

### Ortografía

El listado del panel muestra `Custom Balloon Designs` correctamente escrito. Sin errores tipográficos pendientes.

### Redundancia

Seis entradas cubren el mismo concepto: *Balloon Decorations*, *Organic Balloon Decor*, *Custom Balloon Designs*, *Balloon Installations*, *Luxury Balloon Decor* y *Event Decor*. No suman relevancia y diluyen la lectura.

Conservar: `Balloon Garlands`, `Balloon Arches`, `Balloon Columns`, `Organic Balloon Decor`, `Balloon Backdrops`, `Balloon Centerpieces`, `Luxury Balloon Decor`, `Balloon Installations`. Eliminar los genéricos y liberar espacio.

### Servicios faltantes

Todos provienen del manual del cliente o de sus propias reseñas:

| Servicio | Prioridad |
|---|---|
| **Quinceañera Decorations** | **Alta.** Ticket alto, volumen de búsqueda fuerte y sostenido en el norte de Dallas. |
| **School Event Decorations** | **Alta.** Dos reseñas confirman trabajo escolar y el servicio no está listado. |
| **Full Event Design** | **Alta.** Su servicio de mayor ticket declarado. |
| Sweet 16 Decorations | Media |
| Wedding Decorations | Media |
| Sequin Walls | Media |
| Engagement / Proposal Decorations | Media |
| Custom Vinyl Decals | Media |
| Dessert Table Decorations | Baja |
| Main Table Decorations | Baja |
| Welcome Signs | Baja |
| Religious Event Decorations | Baja |

### Idioma

Los 22 servicios están en inglés. Cinco de las siete reseñas fueron escritas originalmente en español.

Google indexa el contenido de la ficha. Si la clientela busca *decoración con globos Dallas* o *decoración para quinceañera*, hoy no hay nada en la ficha que coincida.

**Acción:** descripción del negocio bilingüe en el mismo campo, y duplicados en español para los servicios de mayor intención — *Decoración para Quinceañeras*, *Decoración de Baby Shower*, *Decoración con Globos*.

---

## 5. Reseñas

| Métrica | Claravdecor | Radio inmediato |
|---|---|---|
| Cantidad | 7 | 82 – 424 |
| Calificación | 5.0 | 4.8 – 5.0 |
| Distribución temporal | Todas en un mes | Distribuida en años |
| Respuestas de la dueña | 1 de 7 | Variable |

### Cadencia

Las siete llegaron juntas, sin flujo anterior ni posterior. Google pondera recencia y constancia además de volumen. Un pico único seguido de silencio es patrón débil.

**Objetivo: 3–6 reseñas mensuales sostenidas**, cada una atada a un evento real y reciente. `[Ajustar la meta al volumen mensual de eventos — POR CONFIRMAR]`

### Respuestas

Seis reseñas sin responder. Responder es señal de actividad para Google y de profesionalismo para quien lee. Las respuestas deben ser específicas, sin plantilla, sin inventar detalles que no estén en la reseña, y en el idioma en que fue escrita — cinco en español, dos en inglés.

### Sistema de solicitud

Momento óptimo: 24 a 48 horas después del evento, junto con las fotos del montaje. La foto es el detonante emocional; el pedido va en el mismo mensaje.

Automatizable en GHL: disparador post-evento → envío de fotos + link corto a reseña → recordatorio a los 5 días sin respuesta.

---

## 6. Configuración pendiente de verificar

| Elemento | Relevancia |
|---|---|
| Estado de verificación | Si no está verificada, explica la invisibilidad. Revisar primero. |
| Dirección visible u oculta | Si opera desde casa con dirección pública: riesgo de suspensión y riesgo personal |
| Service areas configuradas | Sin ellas, la ficha no compite fuera del radio inmediato de 75248 |
| Categorías secundarias | Hasta 9 disponibles, probablemente vacías |
| Cantidad y calidad de fotos | En este nicho la foto es el argumento de venta |
| Horario publicado | Sin horario, la ficha se ve incompleta. MV Fiestas publica 8am–8pm los 7 días. |
| Teléfono y sitio web | Sin URL no hay destino de conversión |
| Descripción del negocio | 750 caracteres disponibles |
| Atributos | "Se habla español", women-led. Son filtros reales de búsqueda. |
| Productos y Posts | Señal de actividad |
| Mensajería | Si la promesa es responder en 24–48h, el canal debe existir |

---

## Plan de acción

### Esta semana — 2 horas en total

| # | Acción | Tiempo |
|---|---|---|
| 1 | **Corregir el horario** — cierres de AM a PM, y confirmar con Clara si atiende domingos (dice que sí, 7 días 8–8) | 10 min |
| 2 | **Vincular Instagram, TikTok, Pinterest y Threads** en la sección de redes | 5 min |
| 3 | **Asociar servicios a `Balloon store`** — hoy no tiene ninguno | 15 min |
| 4 | **Activar atributos** — women-owned, Latino-owned, servicios a domicilio | 10 min |
| 5 | **Reordenar beacons.ai** — llamada, WhatsApp y cotización arriba; redes abajo; quitar el enlace promocional de Beacons | 20 min |
| 6 | **Responder las 6 reseñas pendientes**, en el idioma original de cada una | 1 h |
| 7 | **Agregar Quinceañera, School Events y Full Event Design** a servicios | 20 min |
| 8 | **Correr Local Search Grid y GBP Audit en BrightLocal** | 30 min |

### Decisiones antes de ejecutar

| # | Acción | Requiere |
|---|---|---|
| 9 | Fijar la lista de ciudades en 3 niveles y replicarla | Confirmar con Clara Grapevine, Southlake y The Colony |
| 10 | Evaluar abrir domingos, aunque sea medio día | Decisión de Clara |
| 11 | Invertir primaria y secundaria de categoría | Benchmark del GBP Audit |
| 12 | Llenar secundarias libres — Event planner, Party equipment rental service | Mismo benchmark |

### Próximas dos semanas

| # | Acción | Depende de |
|---|---|---|
| 13 | **Sitio en claravdecor.com** — el dominio ya está registrado. Reemplaza beacons.ai en el campo de sitio web. | Fotos y decisiones de arquitectura |
| 14 | Descripción bilingüe, 750 caracteres, con la lista de ciudades corregida | Lista única de ciudades |
| 15 | Biblioteca de fotos — mínimo 20 montajes, nombres de archivo descriptivos | Portafolio de Clara |
| 16 | Duplicados de servicios en español | Arquitectura bilingüe |
| 17 | Sistema de solicitud de reseñas en GHL | Volumen mensual de eventos |
| 18 | Resolver seguro de responsabilidad civil | Clara |
| 19 | Citation Tracker — corregir NAP | Dominio publicado |

### Mes 2 en adelante

20. Posts semanales con montajes recientes
21. Cadencia sostenida de reseñas — 3 a 6 mensuales
22. Páginas de servicio y de ciudad
23. Landing para el carril institucional — escuelas y corporativo

---

## Prácticas descartadas

Dos de los competidores mayores usan nombres de negocio con palabras clave incrustadas en la ficha, del tipo *"MV Fiestas | Balloon decorations, bouquets & Event rentals in Dallas, TX"*.

Esa práctica viola las directrices de representación de Google y es causa documentada de suspensión. Que funcione para ellos hoy no la vuelve segura, y para un negocio cuya única presencia digital es el GBP, una suspensión es un golpe grave.

Nombre real, limpio. La relevancia se gana con categorías, servicios, reseñas y fotos.
