# Follaje — estado y qué hace falta

## Veredicto

**El JPEG del brandboard no da para vector de producción.** No es cuestión de criterio, son las mediciones.

### Lo que hay en la imagen

| Fuente | Resolución nativa | Trazo mediano | % de trazos de 1–2 px | Ruido JPEG |
|---|---|---|---|---|
| Logo, versión clara | 85 × 135 | 2 px | 66% | σ 12.0 |
| Logo, versión oscura | 115 × 155 | 2 px | 60% | σ 14.8 |
| Franela, logo grande | 70 × 80 | 2 px | 73% | σ 20.8 |
| Tarjeta, ilustración botánica | 180 × 185 | 7 px | 23% | σ 9.7 |

En el follaje del logo, **seis de cada diez trazos miden uno o dos píxeles**, con ruido de compresión de 12 a 15 niveles encima. A esa escala el ruido y la línea son indistinguibles.

### Lo que pasó al intentar vectorizar

Se probó con la mejor fuente disponible — la ilustración de la tarjeta, que es la de mayor resolución y menor ruido — con ampliación 8×, filtro de mediana y umbral por percentil.

**Resultado: 109 trazados y 420 KB.** Un dibujo botánico de línea limpio debería resolverse en 15 a 25 trazados y menos de 20 KB.

El vectorizador no estaba siguiendo la línea. Estaba siguiendo artefactos de compresión, y fragmentando cada trazo en decenas de contornos con ondulaciones que no existen en el dibujo original.

Y hay un problema adicional que ninguna métrica arregla: ese trazado tendría que convivir con la C y la V, que vienen de SVG real con curvas Bézier limpias. La diferencia de calidad se vería a cualquier tamaño por encima de un favicon.

---

## Lo que sí se entregó

En `referencia-follaje/`, seis PNG con canal alfa, extraídos con rampa suave para conservar la línea fina:

| Archivo | Medida | Qué es |
|---|---|---|
| `follaje-logo-{taupe,ivory,espresso}.png` | 920 × 1240 | La ramita integrada al monograma CV |
| `ilustracion-tarjeta-{taupe,ivory,espresso}.png` | 1440 × 1480 | La composición botánica del reverso de la tarjeta |

**Para qué sirven:**
- Referencia para que la diseñadora redibuje
- Uso digital de emergencia a tamaño moderado — web, redes
- Comparación al validar el vector definitivo

**Para qué no sirven:**
- Impresión — la ampliación es interpolada, no hay detalle real que recuperar
- Bordado en franelas
- Cualquier aplicación grande
- El elemento gráfico repetible del Bloque 6

---

## Aclaración: son dos dibujos distintos

No son el mismo elemento y conviene no mezclarlos:

| Elemento | Qué es | Rol |
|---|---|---|
| **Ramita del logo** | Flor con tallo y hojas, integrada al monograma. Hojas sueltas abajo a la izquierda de la C. | Parte del lockup. No se usa sola. |
| **Composición de la tarjeta** | Ramillete botánico más amplio, con varias flores y tallos. | Elemento decorativo independiente. **Este es el del Bloque 6** — separadores, esquinas, marca de agua, viñetas. |

---

## Lo que hace falta

**Pedirle a la diseñadora el archivo fuente.** El `.ai`, `.svg` o `.pdf` con el que se armó el brandboard. Si el logo se construyó en vector — y la calidad del lockup sugiere que sí — la ramita ya existe en curvas y es cuestión de exportarla.

**Si el archivo no aparece:** redibujarlo. Es un elemento botánico de línea, decorativo, sin geometría crítica. No necesita coincidir píxel a píxel con el original — necesita coincidir en estilo: trazo de grosor uniforme, terminaciones limpias, misma densidad de hojas. Es trabajo de una o dos horas, no un rehacer de identidad.

**Mientras tanto**, el sistema funciona sin follaje. Los assets ya generados — favicon, avatar, GBP, OG, navbar — usan la versión limpia y esa es la correcta para todos esos usos de todas formas. Lo que queda bloqueado es la papelería impresa, el bordado y el elemento gráfico repetible del sitio.
