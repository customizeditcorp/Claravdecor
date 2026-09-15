# Pack de extracción — Claude in Chrome + BrightLocal → C3 Onboarding

Prompts listos para copiar y pegar. Uno por superficie. **No los combines** — Claude in Chrome trabaja sobre la pestaña activa, y pedirle tres pantallas en un solo prompt produce datos incompletos sin que te avise.

---

## Reglas que aplican a todos los prompts

Los tres bloques siguientes van incluidos en cada prompt. No son adorno: son lo que evita que la extensión te devuelva un resumen bonito con datos inventados.

1. **Extracción literal, cero interpretación.** No quieres su lectura, quieres el dato crudo.
2. **`NO VISIBLE` explícito.** Si un campo no está en pantalla, tiene que escribir `NO VISIBLE` — nunca deducirlo, nunca dejarlo en blanco.
3. **Scroll obligatorio antes de reportar.** Google carga por lotes. Sin scroll hasta el final, te entrega la mitad y no lo menciona.

---

# PROMPT 1 — Panel de perfil

**Antes de pegar:** abre el panel de gestión del GBP del cliente. Google movió la administración de perfiles de una sola ubicación a la búsqueda misma; según la cuenta puede estar en `business.google.com` o buscando el nombre del negocio estando logueada con la cuenta propietaria. Deja abierta la pantalla de edición del perfil.

```
Estás viendo el panel de gestión de un Google Business Profile.

Extrae los siguientes campos EXACTAMENTE como aparecen. No interpretes,
no resumas, no corrijas errores de ortografía — si hay un typo, cópialo
tal cual. Si un campo no está visible en pantalla, escribe NO VISIBLE.
Nunca lo deduzcas.

Antes de reportar, haz scroll hasta el final de la página y abre cualquier
sección colapsada.

Devuélvelo en este formato exacto:

NOMBRE DEL NEGOCIO:
CATEGORÍA PRIMARIA:
CATEGORÍAS SECUNDARIAS: (lista todas, una por línea)
ESTADO DE VERIFICACIÓN:
DIRECCIÓN: (texto completo)
¿DIRECCIÓN OCULTA AL PÚBLICO?: (sí / no / no visible)
ÁREAS DE SERVICIO: (lista todas, una por línea)
TELÉFONO PRINCIPAL:
TELÉFONOS ADICIONALES:
SITIO WEB:
HORARIO: (los 7 días, tal como aparecen)
HORARIOS ESPECIALES:
FECHA DE APERTURA DECLARADA:
DESCRIPCIÓN DEL NEGOCIO: (texto completo, literal, y dime en qué
idioma está escrita)
CARACTERES USADOS EN LA DESCRIPCIÓN:
ATRIBUTOS ACTIVADOS: (lista todos)
ATRIBUTOS DISPONIBLES SIN ACTIVAR: (lista todos)
MENSAJERÍA: (activada / desactivada)
ENLACES DE RESERVA O CITAS:
ALERTAS, AVISOS O SUGERENCIAS PENDIENTES DE GOOGLE: (literal)

No agregues comentarios ni recomendaciones. Solo los datos.
```

---

# PROMPT 2 — Servicios y productos

**Antes de pegar:** abre la pestaña de Servicios (y luego repite en Productos si existe).

```
Estás viendo la sección de Servicios de un Google Business Profile.

Haz scroll hasta el final y expande todas las categorías antes de reportar.

Devuélveme:

1. La lista COMPLETA de servicios, uno por línea, EXACTAMENTE como están
   escritos. Copia los errores de ortografía tal cual — no los corrijas.
   Si un servicio está agrupado bajo una categoría, indica la categoría.

2. Para cada servicio, si tiene descripción o precio cargado, transcríbelo.
   Si no tiene, escribe SIN DESCRIPCIÓN o SIN PRECIO.

3. El total de servicios listados.

4. El idioma en que está escrito cada servicio.

No sugieras servicios que falten. No reorganices la lista. Solo transcribe.
```

---

# PROMPT 3 — Reseñas

**Antes de pegar:** abre la pestaña de reseñas. Este es el prompt donde más se pierde información por falta de scroll.

```
Estás viendo las reseñas de un Google Business Profile.

PRIMERO: haz scroll hasta el fondo repetidamente hasta que no carguen más
reseñas. Si hay un botón de "cargar más" o "ver más reseñas", presiónalo
hasta que desaparezca. Confírmame cuántas cargaste en total antes de
transcribir.

Luego, para CADA reseña, dame:

AUTOR:
CANTIDAD DE RESEÑAS DEL AUTOR: (el número que aparece bajo su nombre)
¿ES LOCAL GUIDE?: (sí / no)
FECHA: (tal como la muestra Google — "hace un mes", "hace 2 años", etc.)
CALIFICACIÓN:
TEXTO COMPLETO: (literal, sin recortar. Si dice "más" o "leer más",
  presiónalo y transcribe el texto completo)
¿TRADUCIDA POR GOOGLE?: (sí / no — si dice "Traducido por Google",
  responde sí e indica el idioma original)
FOTOS ADJUNTAS: (cantidad)
RESPUESTA DE LA DUEÑA: (texto completo, o SIN RESPUESTA)
FECHA DE LA RESPUESTA:

Al final, dame estos totales:
- Total de reseñas
- Calificación promedio mostrada
- Distribución por estrellas (cuántas de 5, de 4, de 3, de 2, de 1)
- Cuántas tienen respuesta de la dueña
- Cuántas fueron escritas originalmente en cada idioma
- La reseña más antigua y la más reciente, con sus fechas

No interpretes el contenido. No resumas. Transcripción literal.
```

---

# PROMPT 4 — Rendimiento / Performance

**Antes de pegar:** abre la sección de Rendimiento y **ajusta el rango a los últimos 6 meses** antes de correr el prompt.

```
Estás viendo la sección de Rendimiento (Performance) de un Google Business
Profile. El rango de fechas debe estar en los últimos 6 meses — si no lo
está, cámbialo primero y avísame.

Extrae:

RANGO DE FECHAS MOSTRADO:

VISTAS DEL PERFIL:
- Total
- Desglose por plataforma (Búsqueda / Maps) y dispositivo si está disponible

INTERACCIONES:
- Llamadas: total
- Mensajes: total
- Solicitudes de indicaciones: total
- Clics al sitio web: total
- Reservas: total

BÚSQUEDAS QUE MOSTRARON EL PERFIL:
Transcribe la lista completa de términos con su volumen. Haz scroll o
presiona "ver más" hasta agotar la lista. Este es el dato más importante
de esta pantalla — no lo recortes.

COMPARATIVA CON EL PERIODO ANTERIOR: (si aparece)

Si alguna métrica no está disponible, escribe NO VISIBLE. No estimes.
```

---

# PROMPT 5 — Fotos y publicaciones

```
Estás viendo la sección de Fotos de un Google Business Profile.

Dame:
- Cantidad total de fotos subidas por el negocio
- Cantidad de fotos subidas por clientes
- Desglose por categoría (Portada, Logo, Interior, Exterior, Equipo,
  Productos, etc.) con la cantidad de cada una
- Fecha de la foto más reciente subida por el negocio
- ¿Hay videos? ¿Cuántos?

Luego ve a la sección de Publicaciones (Posts) y dame:
- Cantidad de publicaciones activas
- Fecha de la publicación más reciente
- Los últimos 5 posts: fecha, tipo (Novedad / Oferta / Evento) y las
  primeras 2 líneas del texto

Si alguna sección está vacía, escribe VACÍA.
```

---

# PROMPT 6 — Verificación de categoría de competidores

Este es el que resuelve la duda de categoría primaria sin adivinar. **Corre uno por competidor.**

**Antes de pegar:** busca en Google, desde una ubicación dentro del área de servicio del cliente, la consulta que escribiría un comprador real. Abre la ficha del competidor en el panel lateral.

```
Estás viendo la ficha de Google Business Profile de un negocio (vista
pública, no panel de administración).

Extrae exactamente:

NOMBRE DEL NEGOCIO: (literal, incluyendo cualquier texto adicional
  después del nombre)
CATEGORÍA MOSTRADA BAJO EL NOMBRE:
CALIFICACIÓN:
CANTIDAD DE RESEÑAS:
DIRECCIÓN COMPLETA: (o "área de servicio" si no muestra dirección)
HORARIO DE HOY:
TELÉFONO:
SITIO WEB:
ATRIBUTOS VISIBLES:
CANTIDAD DE FOTOS:
SERVICIOS LISTADOS: (si la ficha los muestra)
¿TIENE PRODUCTOS CARGADOS?:
FECHA DE LA RESEÑA MÁS RECIENTE:

Y dime cuál fue la consulta de búsqueda y desde qué ubicación se hizo,
si es visible.
```

---

## Orden de ejecución

1. Prompt 1 → panel de perfil
2. Prompt 2 → servicios
3. Prompt 3 → reseñas
4. Prompt 4 → rendimiento
5. Prompt 5 → fotos y posts
6. Prompt 6 → **tres veces**, sobre los tres primeros del paquete local para la consulta principal del cliente

Pégame las seis salidas en un solo mensaje y actualizo la auditoría completa.

---

## Qué NO le pidas a la extensión

- **Que opine o recomiende.** Se contamina la extracción. El análisis lo hago yo con el dato crudo.
- **Que edite el perfil.** Los cambios en GBP se hacen a mano, con captura del estado previo. Un cambio de categoría primaria puede disparar re-revisión de la ficha.
- **Que responda reseñas.** Requieren contexto y criterio de marca, y quedan publicadas a nombre del cliente.
- **Datos de más de una pantalla en un solo prompt.** Te devuelve la primera completa y la segunda a medias, sin avisarte.

---

# BrightLocal — qué reporte responde qué pregunta

Con BrightLocal en la cuenta, varios de los prompts de arriba dejan de ser necesarios. Estos reportes son fuente operativa y sustituyen la extracción manual:

| Reporte | Qué responde | Sustituye a |
|---|---|---|
| **GBP Audit** | Estado de optimización de la ficha y **benchmark contra los competidores mejor rankeados** | Prompts 1, 2 y 6 |
| **Local Search Grid** | Visibilidad geográfica real por punto del mapa, por keyword | El test de prominencia manual |
| **Local Search Rank Checker** | Ranking a nivel ciudad y código postal, con volumen de búsqueda localizado | Estimaciones de volumen |
| **Local Search Audit** | Auditoría completa: on-page, GBP, citaciones, reseñas, competencia | La auditoría manual entera |
| **Citation Tracker** | Consistencia de NAP y oportunidades de citación | Nada que yo tuviera |
| **Monitor Reviews** | Reseñas consolidadas de Google, Facebook, Yelp y otros | Prompt 3, y lo amplía a otras plataformas |

**Lo que necesito de ti en formato exportado:**

1. **GBP Audit** completo — es el que más peso tiene
2. **Local Search Grid** de las 3–5 keywords principales, con el grid centrado en la base del cliente
3. **Citation Tracker** — inconsistencias de NAP encontradas
4. **Monitor Reviews** — export de todas las reseñas con fecha, plataforma, autor e idioma

CSV o PDF, cualquiera sirve. Del Grid, si puedes, mándame también la captura del mapa — el patrón visual de dónde cae la visibilidad dice cosas que el promedio numérico esconde.

**Lo que Prompt 4 sigue aportando aunque tengas BrightLocal:** el desglose de términos de búsqueda que mostraron el perfil. Ese dato viene de Google directo y BrightLocal no lo reemplaza — es la única fuente de qué está escribiendo la gente real que ya encuentra la ficha.
