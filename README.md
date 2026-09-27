# Radar 📡

**ES** · Radar analiza tu extracto bancario (PDF, CSV o Excel) **directamente en tu navegador** y encuentra suscripciones olvidadas, duplicados, subidas de precio y comisiones. Después te prepara la carta de baja en español o en francés.

**FR** · Radar analyse ton relevé bancaire (PDF, CSV ou Excel) **directement dans ton navigateur** et trouve les abonnements oubliés, les doublons, les hausses de prix et les frais bancaires. Il prépare ensuite la lettre de résiliation en français ou en espagnol.

👉 https://radar-ahorro.pages.dev

## 🔒 Tu extracto nunca sale de tu dispositivo / Ton relevé ne quitte jamais ton appareil

- Todo el análisis se hace en `app.js`, en tu navegador. No hay servidor, ni base de datos, ni registro.
- La política de seguridad del sitio (`_headers`) **bloquea** cualquier conexión salvo a la propia web (y a `formspree.io`, solo para el formulario de opinión opcional, que nunca incluye el extracto).
- Prueba del modo avión: abre la web, activa el modo avión y sube tu extracto. Funciona igual.

Tout le code est ici : vérifie par toi-même qu'aucune donnée n'est envoyée.

## Contenido / Contenu

| Archivo | Rol |
|---|---|
| `index.html` | Página |
| `app.js` | Lectura del extracto, detección y cartas |
| `config.js` | Ajustes (formulario de opinión) |
| `sw.js` | Funcionamiento sin conexión |
| `_headers` | Cabeceras de seguridad (Cloudflare Pages) |
| `vendor/` | pdf.js (Mozilla) y SheetJS, sin modificar — ver `vendor/LICENCES.txt` |

## Autor

Proyecto personal de Landry Talbot Antoinette (Gijón). Beta gratuita.

## Licencia

MIT — ver `LICENSE`.
