/* Radar : génère les images de partage (WhatsApp, Facebook, X…) 1200×630, une par langue.
   Lancer depuis le dossier du site :  node _build/og.js   (nécessite Playwright)
   Sortie : icons/og-es.png et icons/og-fr.png */
const path = require("path"), fs = require("fs");
const { chromium } = require(process.env.PLAYWRIGHT || "playwright");
const ROOT = path.join(__dirname, "..");
const font = f => "data:font/woff2;base64," + fs.readFileSync(path.join(ROOT, "fonts", f)).toString("base64");

const TXT = {
  es: { title: "¿Cuánto te cuestan de verdad tus suscripciones?",
        sub: "Sube tu extracto: Radar encuentra suscripciones olvidadas, subidas de precio y comisiones.",
        chips: ["Gratis", "Sin registro", "Nada sale de tu móvil"],
        amount: "2 272 €", per: "al año", ex: "Ejemplo con un extracto ficticio",
        rows: [["Netflix", "155,88 €"], ["Gimnasio", "359,88 €"], ["Móvil + fibra", "540,00 €"], ["Comisiones", "60,00 €"]], beta: "beta" },
  fr: { title: "Combien te coûtent vraiment tes abonnements\u202f?",
        sub: "Dépose ton relevé : Radar trouve les abonnements oubliés, les hausses de prix et les frais bancaires.",
        chips: ["Gratuit", "Sans inscription", "Rien ne quitte ton téléphone"],
        amount: "2 272 €", per: "par an", ex: "Exemple avec un relevé fictif",
        rows: [["Netflix", "155,88 €"], ["Salle de sport", "359,88 €"], ["Forfait + box", "540,00 €"], ["Frais bancaires", "60,00 €"]], beta: "bêta" }
};
const LOGO = `<svg viewBox="0 0 32 32" width="64" height="64"><circle cx="16" cy="16" r="14" fill="none" stroke="#13202A" stroke-width="2.5"/><circle cx="16" cy="16" r="7.5" fill="none" stroke="#13202A" stroke-width="2.5" opacity=".5"/><path d="M16 16 L27 9" stroke="#B23A26" stroke-width="3" stroke-linecap="round"/><circle cx="16" cy="16" r="2.4" fill="#13202A"/></svg>`;

const html = L => { const t = TXT[L]; return `<!doctype html><html lang="${L}"><meta charset="utf-8"><style>
@font-face{font-family:B;font-weight:800;src:url(${font("bricolage-grotesque-latin-800-normal.woff2")})}
@font-face{font-family:B;font-weight:700;src:url(${font("bricolage-grotesque-latin-700-normal.woff2")})}
@font-face{font-family:A;font-weight:400;src:url(${font("atkinson-hyperlegible-latin-400-normal.woff2")})}
@font-face{font-family:A;font-weight:700;src:url(${font("atkinson-hyperlegible-latin-700-normal.woff2")})}
*{box-sizing:border-box;margin:0}
body{width:1200px;height:630px;background:#EDF1F3;color:#13202A;font-family:A;display:grid;grid-template-columns:1fr 400px;gap:56px;padding:64px 72px;overflow:hidden}
.brand{display:flex;align-items:center;gap:16px;font:800 46px B;letter-spacing:-.01em}
.beta{font:700 17px A;letter-spacing:.06em;text-transform:uppercase;color:#0F6E7A;background:#DCEDEF;border-radius:999px;padding:5px 14px}
h1{font:800 66px/1.02 B;letter-spacing:-.025em;margin:40px 0 22px}
.sub{font-size:25px;line-height:1.4;color:#566673}
.chips{display:flex;gap:10px;margin-top:30px;flex-wrap:wrap}
.chip{font:700 20px A;color:#0F6E7A;background:#DCEDEF;border-radius:999px;padding:8px 16px}
.card{align-self:center;background:#fff;border:1px solid #CCD6DC;border-radius:28px;padding:34px 34px 28px;box-shadow:0 20px 50px rgba(19,32,42,.10)}
.big{font:800 86px/1 B;letter-spacing:-.04em;color:#B23A26}
.per{font:700 24px A;margin-top:6px}
.ex{font-size:16px;color:#566673;margin-top:4px}
ul{list-style:none;padding:0;margin-top:22px;border-top:1px solid #CCD6DC}
li{display:flex;justify-content:space-between;font-size:21px;padding:11px 0;border-bottom:1px solid #CCD6DC}
li:last-child{border-bottom:0} li b{font-weight:700}
</style><body>
<div><div class="brand">${LOGO}Radar <span class="beta">${t.beta}</span></div>
<h1>${t.title}</h1><p class="sub">${t.sub}</p>
<div class="chips">${t.chips.map(c => `<span class="chip">${c}</span>`).join("")}</div></div>
<div class="card"><div class="big">${t.amount}</div><div class="per">${t.per}</div><div class="ex">${t.ex}</div>
<ul>${t.rows.map(r => `<li><b>${r[0]}</b><span>${r[1]}</span></li>`).join("")}</ul></div>
</body></html>`; };

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  for (const L of ["es", "fr"]) {
    await p.setContent(html(L)); await p.evaluate(() => document.fonts.ready);
    await p.screenshot({ path: path.join(ROOT, "icons", `og-${L}.png`) });
    console.log("✓ icons/og-" + L + ".png");
  }
  await b.close();
})();
