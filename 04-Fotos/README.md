# 04-Fotos — esquema de carpetas

- `01-gbp-raw/` — originales (GBP, lotes del iPhone, HEIC, MOV, JPG a resolución completa). **Ignorado por git**; vive solo en disco y en el respaldo.
  - `lote-2026-09-21/`, `lote-2026-10-14/` — originales de cada lote tal como llegaron.
- `02-procesadas/` — las fotos que usa el sitio: máx. 2000 px, nombres SEO, carpeta plana. Registro: `alt-map.json` (archivo → alt) y `mapa-fotos.csv` (origen, categoría, tamaños, alt, uso, flags/permisos). `site/public/images/` es una copia exacta de esta carpeta.
- `03-lotes/<fecha>/` — reporte de clasificación y LEEME de cada lote, más `_confirmar-con-clara/` con fotos procesadas que aún no entran al sitio.

Regla: una foto entra al sitio solo si está en `02-procesadas`, en los dos registros y en `site/lib/photos.ts`, con su permiso anotado en la columna `flags`.
