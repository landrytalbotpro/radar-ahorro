/* Radar : génère les pages / (espagnol par défaut), /es/ et /fr/, plus sitemap.xml et robots.txt.
   Lancer depuis le dossier du site :  node _build/build.js
   L'adresse du site se change à UN seul endroit : _build/config.json ("siteUrl").
   À modifier ici : template.html (structure), info-es.html / info-fr.html (textes fixes), META ci-dessous. */
const fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..");
const read = f => fs.readFileSync(path.join(__dirname, f), "utf8");
const SITE = JSON.parse(read("config.json")).siteUrl.replace(/\/+$/, "");

// Les textes de l'interface viennent du même dictionnaire que app.js : on les écrit dans le HTML
// pour que Google (et les gens sans JavaScript) voient la page complète dans la bonne langue.
const app = fs.readFileSync(path.join(ROOT, "app.js"), "utf8");
const T = new Function(app.slice(app.indexOf("const T = {"), app.indexOf("}};") + 3) + "\nreturn T;")();

const META = {
  es: {
    title: "Radar: descubre cuánto pagas en suscripciones y comisiones",
    desc: "Sube tu extracto (PDF, CSV o Excel) y Radar encuentra suscripciones olvidadas, subidas de precio y comisiones, y te prepara la carta de baja. Gratis y nada sale de tu móvil.",
    ogTitle: "Radar: ¿cuánto te cuestan de verdad tus suscripciones?",
    ogDesc: "Suscripciones olvidadas, duplicados, subidas de precio y comisiones: Radar los encuentra en tu extracto y prepara la carta de baja. Gratis, 100 % en tu navegador.",
    locale: "es_ES", beta: "beta"
  },
  fr: {
    title: "Radar : combien te coûtent tes abonnements et frais bancaires ?",
    desc: "Dépose ton relevé (PDF, CSV ou Excel) : Radar trouve les abonnements oubliés, les hausses de prix et les frais bancaires, et prépare la lettre de résiliation. Gratuit, rien ne quitte ton téléphone.",
    ogTitle: "Radar : combien te coûtent vraiment tes abonnements ?",
    ogDesc: "Abonnements oubliés, doublons, hausses de prix, frais bancaires : Radar les trouve dans ton relevé et prépare les lettres de résiliation. Gratuit, 100 % dans ton navigateur.",
    locale: "fr_FR", beta: "bêta"
  }
};

const esc = s => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const URL_ = { es: SITE + "/es/", fr: SITE + "/fr/", root: SITE + "/" };

function head(lang, page) {
  const m = META[lang], other = lang === "es" ? "fr" : "es";
  // La racine montre l'espagnol mais désigne /es/ comme page officielle : pas de doublon pour Google.
  const canonical = URL_[lang];
  return [
    `<title>${esc(m.title)}</title>`,
    `<meta name="description" content="${esc(m.desc)}">`,
    `<link rel="canonical" href="${canonical}">`,
    `<link rel="alternate" hreflang="es" href="${URL_.es}">`,
    `<link rel="alternate" hreflang="fr" href="${URL_.fr}">`,
    `<link rel="alternate" hreflang="x-default" href="${URL_.es}">`,
    `<meta name="theme-color" content="#13202A">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="Radar">`,
    `<meta property="og:url" content="${canonical}">`,
    `<meta property="og:locale" content="${m.locale}">`,
    `<meta property="og:locale:alternate" content="${META[other].locale}">`,
    `<meta property="og:title" content="${esc(m.ogTitle)}">`,
    `<meta property="og:description" content="${esc(m.ogDesc)}">`,
    `<meta property="og:image" content="${SITE}/icons/icon-512.png">`,
    `<meta name="twitter:card" content="summary">`
  ].join("\n");
}

function page(lang, isRoot) {
  const D = T[lang];
  let h = read("template.html");
  h = h.replace("{{LANG}}", lang)
       .replace("{{PAGE_ATTR}}", isRoot ? ' data-page="root"' : "")
       .replace("{{HEAD_SEO}}", head(lang, isRoot))
       .replace("{{BETA}}", META[lang].beta)
       .replace("{{LANG_LABEL}}", esc(D.langLabel))
       .replace("{{CUR_FR}}", lang === "fr" ? ' aria-current="true"' : "")
       .replace("{{CUR_ES}}", lang === "es" ? ' aria-current="true"' : "")
       .replace("{{INFO}}", read(`info-${lang}.html`).trimEnd());
  // Pré-remplit chaque élément vide data-i="clé" avec le texte de la langue (app.js réécrit le même texte ensuite).
  h = h.replace(/(<[a-z0-9]+\b[^>]*\sdata-i="(\w+)"[^>]*>)(<\/)/g, (all, open, key, close) =>
    typeof D[key] === "string" ? open + esc(D[key]) + close : all);
  h = h.replace('<p id="whoProjects"></p>', `<p id="whoProjects">${D.whoProjects}</p>`);
  if (/\{\{\w+\}\}/.test(h)) throw new Error("Balise {{…}} non remplacée");
  return h;
}

const write = (f, s) => { fs.mkdirSync(path.dirname(path.join(ROOT, f)), { recursive: true }); fs.writeFileSync(path.join(ROOT, f), s); console.log("✓", f); };
write("index.html", page("es", true));
write("es/index.html", page("es", false));
write("fr/index.html", page("fr", false));

const today = new Date().toISOString().slice(0, 10);
const alt = `    <xhtml:link rel="alternate" hreflang="es" href="${URL_.es}"/>\n    <xhtml:link rel="alternate" hreflang="fr" href="${URL_.fr}"/>\n    <xhtml:link rel="alternate" hreflang="x-default" href="${URL_.es}"/>`;
write("sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>${URL_.es}</loc>
    <lastmod>${today}</lastmod>
${alt}
  </url>
  <url>
    <loc>${URL_.fr}</loc>
    <lastmod>${today}</lastmod>
${alt}
  </url>
</urlset>
`);
write("robots.txt", `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
