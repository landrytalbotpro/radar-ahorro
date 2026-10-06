# Radar 📡

**ES** · Radar analiza tu extracto bancario (PDF, CSV o Excel) **directamente en tu navegador** y encuentra suscripciones olvidadas, duplicados, subidas de precio y comisiones. Después te prepara la carta de baja en español o en francés.

**FR** · Radar analyse ton relevé bancaire (PDF, CSV ou Excel) **directement dans ton navigateur** et trouve les abonnements oubliés, les doublons, les hausses de prix et les frais bancaires. Il prépare ensuite la lettre de résiliation en français ou en espagnol.

👉 https://radar-ahorro.pages.dev

## 🔒 Tu extracto nunca sale de tu dispositivo / Ton relevé ne quitte jamais ton appareil

- Todo el análisis se hace en `app.js`, en tu navegador. No hay servidor, ni base de datos, ni registro.
- La política de seguridad del sitio (`_headers`) **bloquea** cualquier conexión salvo a la propia web (y a `api.web3forms.com`, solo para el formulario de opinión opcional, que nunca incluye el extracto).
- Prueba del modo avión: abre la web, activa el modo avión y sube tu extracto. Funciona igual.

Tout le code est ici : vérifie par toi-même qu'aucune donnée n'est envoyée.

## Contenido / Contenu

| Archivo | Rol |
|---|---|
| `index.html`, `es/`, `fr/` | Páginas (generadas: no editar a mano) |
| `_build/` | Plantilla, textos fijos ES/FR y `config.json` con la URL del sitio. Regenerar con `node _build/build.js` |
| `sitemap.xml`, `robots.txt` | Generados por `_build/build.js` |
| `app.js` | Lectura del extracto, detección y cartas |
| `config.js` | Ajustes (formulario de opinión) |
| `sw.js` | Funcionamiento sin conexión |
| `_headers` | Cabeceras de seguridad (Cloudflare Pages) |
| `vendor/` | pdf.js 3.11.174 (Mozilla) y SheetJS 0.18.5, versiones oficiales sin modificar — ver `vendor/LICENCES.txt` |
| `icons/`, `fonts/` | Iconos y tipografías (Bricolage Grotesque, Atkinson Hyperlegible — licencia OFL) |

## Autor

Proyecto personal de Landry Talbot Antoinette (España). Beta gratuita.

## Licencia / Licence

[PolyForm Noncommercial 1.0.0](https://polyformproject.org/licenses/noncommercial/1.0.0) — ver `LICENSE`.

- **ES** · Puedes ver, verificar y usar este código para fines personales o no comerciales. Cualquier uso comercial requiere el permiso del autor: landrytalbotpro@gmail.com
- **FR** · Tu peux lire, vérifier et utiliser ce code à des fins personnelles ou non commerciales. Tout usage commercial nécessite l'accord de l'auteur : landrytalbotpro@gmail.com

Las bibliotecas de `vendor/` y las tipografías de `fonts/` conservan sus propias licencias (Apache 2.0 y OFL).
