(function(){
"use strict";

/* ---------- Textes ---------- */
const T = {
fr:{
  title:"Combien te coûtent vraiment tes abonnements\u00a0?",
  lead:"Dépose ton relevé bancaire. Radar repère les abonnements oubliés, les doublons, les hausses de prix et les frais bancaires, puis prépare tes lettres de résiliation.",
  drop:"Dépose ton relevé ici",
  dropHint:"PDF, CSV ou Excel, un ou plusieurs mois. Plus il y a de mois, plus la détection est fiable.",
  choose:"Choisir un fichier",
  paste:"Coller le texte du relevé",
  demo:"Voir un exemple, sans rien déposer",
  privacy:"Ton relevé ne quitte jamais ton appareil : tout est analysé dans ton navigateur, rien n'est envoyé ni enregistré.",
  pasteLabel:"Colle ici les lignes de ton relevé, copiées depuis ta banque en ligne ou ton PDF",
  analyze:"Analyser",
  reading:"Lecture du relevé…",
  errPwd:"Ce PDF est protégé par un mot de passe. Ouvre-le, enregistre une copie sans mot de passe, puis réessaie.",
  errNone:"Aucune opération lisible dans ce fichier. Certains PDF sont des images scannées : télécharge plutôt ton relevé en CSV depuis ta banque, ou colle le texte.",
  errFile:"Format non pris en charge. Utilise un PDF, un CSV, un fichier Excel ou un fichier texte.",
  totalLabel:"Tes dépenses récurrentes détectées",
  perYear:"/ an",
  perMonthLine:(m,n)=>`Soit ${m} par mois, répartis sur ${n} ${n>1?"lignes":"ligne"}.`,
  saveLabel:"Économie si tu résilies ce que tu as coché",
  saveHint:"Coche « Résilier » sur les lignes dont tu n'as plus besoin.",
  alertsTitle:"Points d'attention",
  dup:(cat,names)=>`${names.length} abonnements ${cat} en même temps : ${names.join(", ")}. Tu les utilises vraiment tous ?`,
  insDup:(names)=>`Plusieurs assurances : ${names.join(", ")}. Vérifie que tu n'es pas assuré deux fois pour la même chose (téléphone, carte bancaire, habitation).`,
  rise:(name,pct)=>`${name} a augmenté de ${pct} % pendant la période analysée.`,
  fees:(amt)=>`Tu paies environ ${amt} par an en frais bancaires. Beaucoup de banques en ligne n'en facturent aucun.`,
  listTitle:"À vérifier",
  listHint:"Abonnements et prélèvements qui reviennent. Décide ligne par ligne.",
  fixedTitle:"Charges fixes à comparer",
  fixedHint:"Tu ne vas pas les résilier, mais changer d'offre ou de fournisseur fait souvent baisser la facture.",
  cancel:"Résilier",
  letter:"Préparer la lettre",
  feeLetter:"Demander le remboursement",
  month:"/ mois", year:"/ an",
  once:"Vu une seule fois : montant annuel estimé",
  times:(n)=>`${n} prélèvements sur la période`,
  rose:(p)=>`+${p} %`,
  cats:{video:"vidéo",music:"musique",cloud:"stockage",gym:"salle de sport",games:"jeux",software:"logiciels",books:"lecture",apps:"applis",insurance:"assurance",fees:"frais bancaires",recurring:"récurrent",fixed:"charge fixe"},
  catsPlural:{video:"de vidéo",music:"de musique",cloud:"de stockage en ligne",gym:"de salle de sport",games:"de jeux",software:"de logiciels",books:"de lecture",apps:"d'applis"},
  feesName:"Frais bancaires",
  gymName:"Salle de sport",
  footnote:"Détection automatique : vérifie chaque ligne avant d'agir. Les montants annuels sont des estimations à partir de ton relevé.",
  restart:"Analyser un autre relevé",
  oneMonth:"Ton relevé couvre un seul mois. Ajoute d'autres mois pour repérer aussi les prélèvements que Radar ne connaît pas encore.",
  empty:"Aucun abonnement ni prélèvement récurrent détecté. Si ça te semble faux, ajoute plus de mois ou colle le texte du relevé.",
  dlgTitle:(s)=>`Lettre pour ${s}`,
  dlgTip:"Essaie d'abord de résilier depuis ton compte en ligne, dans les paramètres de l'abonnement : c'est souvent immédiat. Sinon, envoie cette lettre par e-mail ou en recommandé.",
  feeTip:"Envoie ce message à ta banque ou à ton conseiller. Les banques acceptent souvent de rembourser des frais quand on le demande.",
  yourName:"Ton nom (facultatif)",
  yourRef:"E-mail ou n° client (facultatif)",
  fieldsPriv:"Seulement pour remplir la lettre : ces infos restent sur ton appareil et ne sont envoyées nulle part.",
  mailOpen:"Ouvrir dans mon e-mail",
  online:(s)=>`Résilier en ligne sur le site de ${s}`,
  onlineTip:"Le plus rapide : résilie directement dans ton compte, en 2 minutes. La lettre reste disponible si besoin.",
  orLetter:"ou, si ça ne marche pas, envoie cette lettre :",
  copy:"Copier la lettre",
  copied:"Lettre copiée",
  close:"Fermer",
  langLabel:"Langue",
  phName:"[ton nom]", phRef:"[e-mail ou numéro client]",
  letterSub:(s,ref,name,date)=>`Objet : résiliation de mon abonnement ${s}\n\n${date}\n\nMadame, Monsieur,\n\nJe vous informe de ma décision de résilier mon abonnement ${s}, associé à : ${ref}.\n\nJe vous remercie de prendre en compte cette résiliation dans les meilleurs délais, de cesser tout prélèvement à compter de sa date d'effet et de m'envoyer une confirmation écrite.\n\nCordialement,\n${name}`,
  letterFee:(amt,ref,name,date)=>`Objet : demande de remboursement de frais bancaires\n\n${date}\n\nMadame, Monsieur,\n\nEn consultant mes relevés, j'ai constaté des frais bancaires pour un total de ${amt} sur les derniers mois (compte associé à : ${ref}).\n\nJe vous demande de bien vouloir étudier le remboursement de ces frais et de m'indiquer comment les éviter à l'avenir, ou de me proposer une formule sans frais de tenue de compte.\n\nCordialement,\n${name}`,
  fbTitle:"Radar a-t-il bien lu ton relevé ?",
  fbHint:"Radar est en bêta. Ton avis nous aide à mieux lire les relevés de toutes les banques.",
  fbYes:"👍 Oui, tout est juste", fbPartial:"🤏 En partie", fbNo:"👎 Non",
  fbBank:"Ta banque", fbBankPick:"Choisir…", fbOther:"Autre banque",
  fbEmail:"Ton e-mail (facultatif, pour te répondre)",
  fbComment:"Ce qui manque ou est faux (facultatif)",
  fbSend:"Envoyer mon avis",
  fbSent:(f,n,k,a)=>`Seront envoyés : ton avis, ta banque, ton commentaire et un résumé chiffré (fichier ${f}, ${n} opérations lues, ${k} lignes détectées, ${a} par an). Jamais ton relevé ni ses opérations.`,
  fbNeedVote:"Choisis d'abord 👍, 🤏 ou 👎.",
  fbSending:"Envoi…", fbThanks:"Merci ! Ton avis est bien reçu.", fbError:"L'envoi a échoué. Vérifie ta connexion et réessaie.",
  footLocal:"ton relevé est analysé sur ton appareil, jamais envoyé",
  footPrivacy:"Confidentialité et mentions légales",
  trustTitle:"✈️ Fais le test du mode avion.",
  trustText:"Active le mode avion, puis dépose ton relevé : Radar fonctionne quand même. C'est la preuve que rien ne sort de ton téléphone.",
  netOn:"En ligne", netOff:"Hors ligne ✓ rien ne peut sortir",
  manual:"Sans relevé : cocher mes abonnements",
  manualTitle:"Coche ce que tu paies",
  manualHint:"Aucune donnée bancaire : coche tes abonnements et ajuste les prix (indicatifs) si besoin.",
  manualTotal:"Total :",
  manualGo:"Voir mon résultat",
  manualMeta:"Ajouté à la main",
  perMonthShort:"/ mois",
  whoRole:"Footballeur semi-professionnel et fondateur de projets digitaux",
  whoText:"J'ai créé Radar parce que je voyais beaucoup de gens autour de moi payer chaque mois des abonnements qu'ils n'utilisaient plus, sans s'en rendre compte. Je voulais un outil simple, gratuit et respectueux de la vie privée.",
  whoProjects:"Je dirige aussi <a href=\"https://nextlevelplayerai.com/fr/histoire.html\" target=\"_blank\" rel=\"noopener\">Next Level Player</a>, qui aide les footballeurs amateurs à avoir une image professionnelle, et <a href=\"https://nuvorastudio.es/\" target=\"_blank\" rel=\"noopener\">Nuvora Studio</a>, studio de création de sites web pour les entreprises, avec l'aide d'<a href=\"https://www.instagram.com/awra_studios\" target=\"_blank\" rel=\"noopener\">Awra Studios</a>, creative & AI director.",
  whoCode:"Voir le code sur GitHub", whoMail:"M'écrire",
  locale:"fr-FR"
},
es:{
  title:"¿Cuánto te cuestan de verdad tus suscripciones?",
  lead:"Sube tu extracto bancario. Radar detecta suscripciones olvidadas, duplicados, subidas de precio y comisiones, y te prepara las cartas de baja.",
  drop:"Suelta aquí tu extracto",
  dropHint:"PDF, CSV o Excel, de uno o varios meses. Cuantos más meses, más fiable es la detección.",
  choose:"Elegir un archivo",
  paste:"Pegar el texto del extracto",
  demo:"Ver un ejemplo, sin subir nada",
  privacy:"Tu extracto nunca sale de tu dispositivo: todo se analiza en tu navegador, no se envía ni se guarda nada.",
  pasteLabel:"Pega aquí los movimientos de tu extracto, copiados de tu banca online o de tu PDF",
  analyze:"Analizar",
  reading:"Leyendo el extracto…",
  errPwd:"Este PDF está protegido con contraseña. Ábrelo, guarda una copia sin contraseña y vuelve a intentarlo.",
  errNone:"No hay movimientos legibles en este archivo. Algunos PDF son imágenes escaneadas: descarga mejor el extracto en CSV desde tu banco o pega el texto.",
  errFile:"Formato no compatible. Usa un PDF, un CSV, un Excel o un archivo de texto.",
  totalLabel:"Tus gastos recurrentes detectados",
  perYear:"/ año",
  perMonthLine:(m,n)=>`Es decir, ${m} al mes, repartidos en ${n} ${n>1?"conceptos":"concepto"}.`,
  saveLabel:"Ahorro si das de baja lo que has marcado",
  saveHint:"Marca «Dar de baja» en lo que ya no necesitas.",
  alertsTitle:"Puntos a revisar",
  dup:(cat,names)=>`${names.length} suscripciones ${cat} a la vez: ${names.join(", ")}. ¿De verdad usas todas?`,
  insDup:(names)=>`Varios seguros: ${names.join(", ")}. Comprueba que no estás asegurado dos veces para lo mismo (móvil, tarjeta, hogar).`,
  rise:(name,pct)=>`${name} ha subido un ${pct} % durante el periodo analizado.`,
  fees:(amt)=>`Pagas unos ${amt} al año en comisiones. Muchos bancos online no cobran ninguna.`,
  listTitle:"Por revisar",
  listHint:"Suscripciones y cargos que se repiten. Decide uno por uno.",
  fixedTitle:"Gastos fijos para comparar",
  fixedHint:"No los vas a dar de baja, pero cambiar de tarifa o de compañía suele bajar la factura.",
  cancel:"Dar de baja",
  letter:"Preparar la carta",
  feeLetter:"Pedir la devolución",
  month:"/ mes", year:"/ año",
  once:"Visto una sola vez: importe anual estimado",
  times:(n)=>`${n} cargos en el periodo`,
  rose:(p)=>`+${p} %`,
  cats:{video:"vídeo",music:"música",cloud:"almacenamiento",gym:"gimnasio",games:"juegos",software:"software",books:"lectura",apps:"apps",insurance:"seguro",fees:"comisiones",recurring:"recurrente",fixed:"gasto fijo"},
  catsPlural:{video:"de vídeo",music:"de música",cloud:"de almacenamiento en la nube",gym:"de gimnasio",games:"de juegos",software:"de software",books:"de lectura",apps:"de apps"},
  feesName:"Comisiones bancarias",
  gymName:"Gimnasio",
  footnote:"Detección automática: revisa cada línea antes de actuar. Los importes anuales son estimaciones a partir de tu extracto.",
  restart:"Analizar otro extracto",
  oneMonth:"Tu extracto cubre un solo mes. Añade más meses para detectar también los cargos que Radar todavía no conoce.",
  empty:"No se ha detectado ninguna suscripción ni cargo recurrente. Si te parece raro, añade más meses o pega el texto del extracto.",
  dlgTitle:(s)=>`Carta para ${s}`,
  dlgTip:"Prueba primero a darte de baja desde tu cuenta online, en los ajustes de la suscripción: suele ser inmediato. Si no, envía esta carta por correo electrónico o burofax.",
  feeTip:"Envía este mensaje a tu banco o a tu gestor. Los bancos suelen devolver comisiones cuando se les pide.",
  yourName:"Tu nombre (opcional)",
  yourRef:"Correo o n.º de cliente (opcional)",
  fieldsPriv:"Solo para rellenar la carta: estos datos se quedan en tu dispositivo y no se envían a ningún sitio.",
  mailOpen:"Abrir en mi correo",
  online:(s)=>`Darse de baja en la web de ${s}`,
  onlineTip:"Lo más rápido: date de baja directamente en tu cuenta, en 2 minutos. La carta sigue disponible si la necesitas.",
  orLetter:"o, si no funciona, envía esta carta:",
  copy:"Copiar la carta",
  copied:"Carta copiada",
  close:"Cerrar",
  langLabel:"Idioma",
  phName:"[tu nombre]", phRef:"[correo o número de cliente]",
  letterSub:(s,ref,name,date)=>`Asunto: baja de mi suscripción a ${s}\n\n${date}\n\nMuy señores míos:\n\nLes comunico mi decisión de dar de baja mi suscripción a ${s}, asociada a: ${ref}.\n\nLes ruego que tramiten la baja a la mayor brevedad, que no realicen más cargos a partir de la fecha de efecto y que me envíen confirmación por escrito.\n\nAtentamente,\n${name}`,
  letterFee:(amt,ref,name,date)=>`Asunto: solicitud de devolución de comisiones\n\n${date}\n\nMuy señores míos:\n\nRevisando mis extractos, he comprobado comisiones por un total de ${amt} en los últimos meses (cuenta asociada a: ${ref}).\n\nLes solicito que estudien la devolución de estas comisiones y me indiquen cómo evitarlas en el futuro, o que me ofrezcan una cuenta sin comisiones de mantenimiento.\n\nAtentamente,\n${name}`,
  fbTitle:"¿Radar ha leído bien tu extracto?",
  fbHint:"Radar está en beta. Tu opinión nos ayuda a leer mejor los extractos de todos los bancos.",
  fbYes:"👍 Sí, todo correcto", fbPartial:"🤏 En parte", fbNo:"👎 No",
  fbBank:"Tu banco", fbBankPick:"Elegir…", fbOther:"Otro banco",
  fbEmail:"Tu correo (opcional, para responderte)",
  fbComment:"Qué falta o está mal (opcional)",
  fbSend:"Enviar mi opinión",
  fbSent:(f,n,k,a)=>`Se enviará: tu opinión, tu banco, tu comentario y un resumen en cifras (archivo ${f}, ${n} movimientos leídos, ${k} conceptos detectados, ${a} al año). Nunca tu extracto ni sus movimientos.`,
  fbNeedVote:"Elige primero 👍, 🤏 o 👎.",
  fbSending:"Enviando…", fbThanks:"¡Gracias! Hemos recibido tu opinión.", fbError:"No se ha podido enviar. Revisa tu conexión y vuelve a intentarlo.",
  footLocal:"tu extracto se analiza en tu dispositivo, nunca se envía",
  footPrivacy:"Privacidad y aviso legal",
  trustTitle:"✈️ Haz la prueba del modo avión.",
  trustText:"Activa el modo avión y sube tu extracto: Radar funciona igual. Es la prueba de que nada sale de tu móvil.",
  netOn:"Conectado", netOff:"Sin conexión ✓ nada puede salir",
  manual:"Sin extracto: marcar mis suscripciones",
  manualTitle:"Marca lo que pagas",
  manualHint:"Sin datos bancarios: marca tus suscripciones y ajusta los precios (orientativos) si hace falta.",
  manualTotal:"Total:",
  manualGo:"Ver mi resultado",
  manualMeta:"Añadido a mano",
  perMonthShort:"/ mes",
  whoRole:"Futbolista semiprofesional y fundador de proyectos digitales",
  whoText:"Creé Radar porque vi a mucha gente de mi entorno pagar cada mes suscripciones que ya no usaba sin darse cuenta. Quería una herramienta sencilla, gratuita y que respetara la privacidad.",
  whoProjects:"También dirijo <a href=\"https://nextlevelplayerai.com/\" target=\"_blank\" rel=\"noopener\">Next Level Player</a>, que ayuda a futbolistas amateurs a tener una imagen profesional, y <a href=\"https://nuvorastudio.es/\" target=\"_blank\" rel=\"noopener\">Nuvora Studio</a>, estudio de diseño web para negocios, con la ayuda de <a href=\"https://www.instagram.com/awra_studios\" target=\"_blank\" rel=\"noopener\">Awra Studios</a>, creative & AI director.",
  whoCode:"Ver el código en GitHub", whoMail:"Escríbeme",
  locale:"es-ES"
}};

let lang = (navigator.language||"fr").toLowerCase().startsWith("es") ? "es" : "fr";
try{ const s = localStorage.getItem("radar-lang"); if(s==="fr"||s==="es") lang=s; }catch(e){}
const t = () => T[lang];

function applyLang(){
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i]").forEach(el=>{ const v=t()[el.dataset.i]; if(typeof v==="string") el.textContent=v; });
  document.querySelectorAll("#langGroup button").forEach(b=>b.setAttribute("aria-pressed", String(b.dataset.lang===lang)));
  document.getElementById("langGroup").setAttribute("aria-label", t().langLabel);
  if($("whoProjects")) $("whoProjects").innerHTML = t().whoProjects;
  if(typeof netBadge==="function") netBadge();
  if($("mlist") && $("mlist").children.length){ buildManual(); manualTotal(); }
  if(lastData) render(lastData, false);
}
document.querySelectorAll("#langGroup button").forEach(b=>b.addEventListener("click",()=>{
  lang=b.dataset.lang; try{localStorage.setItem("radar-lang",lang)}catch(e){} applyLang();
}));

/* ---------- Dictionnaires ---------- */
const clean = s => s.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
const SUBS = [
 [["NETFLIX"],"Netflix","video"],[["SPOTIFY"],"Spotify","music"],[["DISNEY"],"Disney+","video"],
 [["PRIME VIDEO","AMAZON PRIME","AMZN PRIME","PRIMEVIDEO","AMAZONPRIME"],"Amazon Prime","video"],
 [["HBO","MAX.COM"],"Max","video"],[["APPLE.COM/BILL","ITUNES","ICLOUD","APPLE COM BILL"],"Apple (iCloud, App Store)","cloud"],
 [["GOOGLE ONE","GOOGLE STORAGE"],"Google One","cloud"],[["YOUTUBE"],"YouTube Premium","video"],
 [["DEEZER"],"Deezer","music"],[["DAZN"],"DAZN","video"],[["MOVISTAR+","MOVISTAR PLUS"],"Movistar Plus+","video"],
 [["CANAL+","CANAL PLUS","CANALPLUS"],"Canal+","video"],[["FILMIN"],"Filmin","video"],[["CRUNCHYROLL"],"Crunchyroll","video"],
 [["PARAMOUNT"],"Paramount+","video"],[["SKYSHOWTIME"],"SkyShowtime","video"],[["AUDIBLE"],"Audible","books"],
 [["KINDLE UNLIMITED","KINDLE UNLTD"],"Kindle Unlimited","books"],[["XBOX"],"Xbox Game Pass","games"],
 [["PLAYSTATION","SONY INTERACTIVE"],"PlayStation Plus","games"],[["NINTENDO"],"Nintendo Online","games"],
 [["ADOBE"],"Adobe","software"],[["MICROSOFT 365","MSFT","MICROSOFT*"],"Microsoft 365","software"],[["DROPBOX"],"Dropbox","cloud"],
 [["OPENAI","CHATGPT"],"ChatGPT","software"],[["TARIFA DEL PLAN","PLAN FEE","FRAIS DU PLAN","REVOLUT PREMIUM","REVOLUT PLUS","REVOLUT METAL","N26 SMART","N26 YOU","N26 METAL"],"Plan Revolut / N26","software"],[["ANTHROPIC","CLAUDE.AI"],"Claude","software"],[["CANVA"],"Canva","software"],
 [["DUOLINGO"],"Duolingo","apps"],[["TINDER"],"Tinder","apps"],[["BUMBLE"],"Bumble","apps"],[["MEETIC"],"Meetic","apps"],
 [["UBER ONE"],"Uber One","apps"],[["GLOVO PRIME"],"Glovo Prime","apps"],[["DELIVEROO PLUS"],"Deliveroo Plus","apps"],
 [["BASIC FIT","BASIC-FIT","BASICFIT"],"Basic-Fit","gym"],[["MCFIT"],"McFit","gym"],[["FITNESS PARK"],"Fitness Park","gym"],
 [["ALTAFIT"],"Altafit","gym"],[["GO FIT","GOFIT"],"GO fit","gym"],[["LINKEDIN"],"LinkedIn Premium","software"],
 [["TWITCH"],"Twitch","apps"],[["PATREON"],"Patreon","apps"],[["STRAVA"],"Strava","apps"],[["CALM.COM","HEADSPACE"],"Méditation","apps"]
].map(([k,n,c])=>({k:k.map(clean),n,c}));
const GYM = ["GIMNASIO","GYM","SALLE DE SPORT","FITNESS"].map(clean);
const FEES = ["COMISION","COMMISSION","FRAIS","COTISATION","MANTENIMIENTO","AGIOS","DESCUBIERTO","INTERETS DEBITEURS","CUOTA TARJETA","CUOTA ANUAL","TENUE DE COMPTE","COMISIONES"].map(clean);
const INS = ["SEGURO","ASSURANCE","MUTUELLE","ASEGURADORA","INSURANCE","ASSUR"].map(clean);
const FIXED = ["ALQUILER","LOYER","HIPOTECA","PRESTAMO","PRET","CREDIT IMMO","IBERDROLA","ENDESA","NATURGY","TOTALENERGIES","EDF","ENGIE","HOLALUZ","AGUA","EAU","IMPUESTO","IMPOT","DGFIP","IBI","URSSAF","SEGURIDAD SOCIAL","TGSS","COMUNIDAD PROP","SYNDIC","ORANGE","MOVISTAR","VODAFONE","SFR","BOUYGUES","FREE MOBILE","FREE TELECOM","DIGI","LOWI","YOIGO","MASMOVIL","PEPEPHONE","SOSH","SIMYO","O2","JAZZTEL","CRECHE","GUARDERIA","COLEGIO","ECOLE"].map(clean);
const INCOME = ["NOMINA","SALAIRE","SALARIO","VIREMENT DE","VIR RECU","VIREMENT RECU","TRANSFERENCIA RECIBIDA","TRANSF RECIBIDA","TRANSF. RECIBIDA","ABONO","INGRESO","DEVOLUCION","REMBOURSEMENT","REMB","CAF","PENSION","BIZUM RECIBIDO","PRESTACION","REEMBOLSO","INTERESES A FAVOR","VIR SEPA RECU","TRANSFERENCIA DE","RECARGA","TOP UP","TOP-UP","TOPUP","MONEY ADDED","RECHARGE"].map(clean);
const SKIP = ["BIZUM","RETIRADA","CAJERO","RETRAIT","DAB","TRASPASO","SALDO","SOLDE","TOTAL"].map(clean);

function has(desc, kws){
  const up = clean(desc);
  const spaced = " " + up.replace(/[^A-Z0-9+]+/g," ") + " ";
  const compact = up.replace(/[^A-Z0-9+]/g,"");
  return kws.some(kw=>{
    if(/[^A-Z0-9 +]/.test(kw)) return compact.includes(kw.replace(/[^A-Z0-9+]/g,""));
    return spaced.includes(" "+kw+" ") || (kw.length>=5 && spaced.includes(" "+kw));
  });
}
const findSub = d => SUBS.find(s=>has(d,s.k));

/* ---------- Lecture des lignes ---------- */
const MONTHS = {JAN:1,JANV:1,ENE:1,FEB:2,FEV:2,FEVR:2,MAR:3,MARS:3,ABR:4,AVR:4,APR:4,MAI:5,MAY:5,JUN:6,JUIN:6,JUL:7,JUIL:7,AGO:8,AOU:8,AOUT:8,AUG:8,SEP:9,SEPT:9,OCT:10,NOV:11,DEC:12,DIC:12};
const RE_DMY = /(^|\s)(\d{1,2})([\/.\-])(\d{1,2})(?:\3(\d{2,4}))?(?=\s|$)/;
const RE_YMD = /(^|\s)(\d{4})-(\d{2})-(\d{2})(?=\s|$|T)/;
const RE_TXT = /(^|\s)(\d{1,2})\s+([A-Za-zÀ-ÿ]{3,5})\.?(?:\s+(\d{4}))?(?=\s|$)/;
const RE_AMT = /([+\-−]?)\s?(\d{1,3}(?:[.\s  ']\d{3})+|\d+)[.,](\d{2})(?![\d])/g;
const RE_DATE_G = /(^|\s)(\d{1,2})([\/.\-])(\d{1,2})(?:\3(\d{2,4}))?(?=\s|$)/g;

function takeDate(str, anchored){
  const s = anchored ? str.trimStart() : str;
  let m, d, mo, y, sep="", hasY=false;
  const tries = [[RE_YMD,"ymd"],[RE_DMY,"dmy"],[RE_TXT,"txt"]];
  for(const [re,kind] of tries){
    m = s.match(re);
    if(!m) continue;
    if(anchored && m.index!==0) continue;
    if(kind==="ymd"){ y=+m[2]; mo=+m[3]; d=+m[4]; hasY=true; }
    else if(kind==="dmy"){ d=+m[2]; sep=m[3]; mo=+m[4]; y=m[5]? +m[5] : null; hasY=!!m[5]; if(y!==null && y<100) y+=2000; }
    else { d=+m[2]; mo=MONTHS[clean(m[3]).replace(/\./g,"")]; y=m[4]? +m[4] : null; hasY=!!m[4]; if(!mo) continue; }
    if(d<1||d>31||mo<1||mo>12) continue;
    return {d,mo,y,sep,hasY,rest:(s.slice(0,m.index)+" "+s.slice(m.index+m[0].length)).trim()};
  }
  return null;
}

function parseAmount(sign,intPart,dec){
  const v = parseFloat(intPart.replace(/[.\s  ']/g,"")+"."+dec);
  return (sign==="-"||sign==="−") ? -v : v;
}

/* Nombre d'une cellule de tableur : 1.050,00 · 1,050.00 · -12,99 EUR · 12,99- · (12,99) */
function parseNum(v){
  if(typeof v==="number") return isFinite(v) ? v : null;
  let s = String(v==null?"":v).trim();
  if(!s || !/\d/.test(s)) return null;
  const neg = /^[\-−]|[\-−]\s*(€|EUR)?$|^\(.*\)$/i.test(s) || /\s(D|DB|DR)$/i.test(s);
  s = s.replace(/[^\d.,]/g,"");
  const last = Math.max(s.lastIndexOf("."), s.lastIndexOf(","));
  let n;
  if(last>=0 && /^\d{1,2}$/.test(s.slice(last+1))) n = parseFloat(s.slice(0,last).replace(/[.,]/g,"")+"."+s.slice(last+1));
  else n = parseFloat(s.replace(/[.,]/g,""));
  if(!isFinite(n)) return null;
  return neg ? -n : n;
}

/* Enlève les autres dates de la ligne (date de valeur « 04.06 » qui ressemble à un montant) */
function stripDates(rest, first){
  return rest.replace(RE_DATE_G, (all, pre, d, sep, mo, y)=>{
    if(sep!==first.sep || +d<1 || +d>31 || +mo<1 || +mo>12) return all;
    if(!(y || !first.hasY)) return all;
    if(Math.abs(+mo-first.mo)>1 && Math.abs(+mo-first.mo)!==11) return all;
    return pre+" ";
  });
}

function parseLine(line, anchored){
  const first = takeDate(line, anchored);
  if(!first) return null;
  let rest = first.rest;
  const second = takeDate(rest, true); // fecha valor
  if(second) rest = second.rest;
  if(first.sep) rest = stripDates(rest, first);
  const amts = []; let m; RE_AMT.lastIndex=0;
  while((m = RE_AMT.exec(rest))) amts.push({v:parseAmount(m[1],m[2],m[3]), i:m.index, sign:m[1]});
  if(!amts.length) return null;
  const pick = amts.length>=2 ? amts[amts.length-2] : amts[0];
  let desc = rest.slice(0, amts[0].i).replace(/[€$£]|\bEUR\b/gi," ").replace(/\s+/g," ").trim();
  if(!desc || !/[A-Za-zÀ-ÿ]{2}/.test(desc)){
    desc = rest.replace(RE_AMT," ").replace(/[€$£]|\bEUR\b/gi," ").replace(/\s+/g," ").trim();
  }
  if(!desc || !/[A-Za-zÀ-ÿ]{2}/.test(desc)) return null;
  if(Math.abs(pick.v) < 0.5 || Math.abs(pick.v) > 20000) return null;
  return {d:first.d, mo:first.mo, y:first.y, desc, amt:pick.v};
}

/* Lignes de texte (PDF, texte collé) -> opérations. Les lignes sans date qui suivent
   une opération complètent son libellé (ex. « PRELEVEMENT EUROPEEN » puis « DE: NETFLIX »). */
const STOP_CONT = /\b(TOTAL|SOLDE|SALDO|PAGE|PAGINA|NOUVEAU|ANCIEN|REPORT|SUMA|IBAN|BIC|TITULAR|RELEVE|EXTRACTO)\b/;
function linesToTx(lines, withCont){
  const pass = anchored => {
    const out = []; let last = null, extra = 0;
    lines.forEach(l=>{
      const x = parseLine(l, anchored);
      if(x){ out.push(x); last = x; extra = 0; return; }
      if(!withCont || !last || extra>=2) { last = null; return; }
      const s = String(l).replace(/\s+/g," ").trim();
      if(!s || s.length>90 || !/[A-Za-zÀ-ÿ]{3}/.test(s) || STOP_CONT.test(clean(s)) || takeDate(s,false)) { last = null; return; }
      RE_AMT.lastIndex=0; if(RE_AMT.test(s)) { last = null; return; }
      last.more = last.more ? last.more+" | "+s : s; extra++;
    });
    return out;
  };
  let tx = pass(true);
  if(tx.length < 3) tx = pass(false);
  return tx;
}

/* ---------- Tableaux : CSV et Excel, lus par colonnes ---------- */
const HN = s => clean(String(s==null?"":s)).replace(/[^A-Z0-9]+/g," ").trim().replace(/\s(EUR|EUROS|E)$/,"");
const COLS = {
  date:["FECHA OPERACION","FECHA OPERATIVA","F OPERATIVA","F OPERACION","FECHA","FECHA CONTABLE","F CONTABLE","DATE","DATE OPERATION","DATE DE L OPERATION","DATE D OPERATION","DATEOP","STARTED DATE","TRANSACTION DATE","BOOKING DATE","DATE COMPTABLE"],
  vdate:["FECHA VALOR","F VALOR","DATE DE VALEUR","DATE VALEUR","DATEVAL","VALUE DATE","VALEUR","COMPLETED DATE"],
  desc:["CONCEPTO","CONCEPTO COMUN","CONCEPTO AMPLIADO","DESCRIPCION","DESCRIPTION","LIBELLE","LIBELLE OPERATION","LIBELLE DE L OPERATION","LIBELLE COURT","LABEL","PAYEE","BENEFICIAIRE","NATURE DE L OPERATION","NATURE DES OPERATIONS","DETALLE","DETALLE MOVIMIENTO","MOTIVO","COUNTERPARTY","NOMBRE"],
  more:["DETAIL","DETAIL DE L ECRITURE","DETAILS","PAYMENT REFERENCE","INFORMACION ADICIONAL","OBSERVACIONES","REFERENCE","COMMENTAIRE"],
  amount:["IMPORTE","IMPORTE OPERACION","MONTANT","MONTANT DE L OPERATION","MONTANT OPERATION","AMOUNT","CANTIDAD","MOVIMIENTO IMPORTE"],
  debit:["DEBIT","DEBE","CARGO","CARGOS","DEBITO","RETIRADAS","GASTOS","MONTANT DEBIT","DINERO SALIENTE","SALIENTE","SALIDAS","MONEY OUT","PAID OUT","SORTIES","ARGENT SORTANT","DEBITS"],
  credit:["CREDIT","HABER","ABONO","ABONOS","CREDITO","INGRESOS","MONTANT CREDIT","DINERO ENTRANTE","ENTRANTE","ENTRADAS","MONEY IN","PAID IN","ENTREES","ARGENT ENTRANT","CREDITS"],
  fee:["FEE","FEES"],
  state:["STATE","ESTADO","STATUT"]
};
function headerMap(row){
  const map = {};
  row.forEach((c,i)=>{
    const h = HN(c); if(!h) return;
    for(const [k,list] of Object.entries(COLS)){
      if(list.includes(h)){
        if(k==="desc"||k==="more"){ (map[k]=map[k]||[]).push(i); }
        else if(map[k]===undefined) map[k]=i;
        break;
      }
    }
  });
  if(map.date===undefined && map.vdate!==undefined){ map.date = map.vdate; }
  const ok = map.date!==undefined && (map.amount!==undefined || (map.debit!==undefined && map.credit!==undefined) || map.debit!==undefined);
  return ok ? map : null;
}
function cellDate(v){
  if(v instanceof Date && !isNaN(v)) return {d:v.getDate(), mo:v.getMonth()+1, y:v.getFullYear()};
  if(typeof v==="number" && v>20000 && v<80000){ const dt=new Date(Math.round((v-25569)*864e5)); return {d:dt.getUTCDate(),mo:dt.getUTCMonth()+1,y:dt.getUTCFullYear()}; }
  return takeDate(String(v==null?"":v).replace(/T/," "), true) || takeDate(String(v==null?"":v), false);
}
function tableToTx(rows){
  let map=null, h=-1;
  for(let i=0;i<Math.min(rows.length,60);i++){ map = headerMap(rows[i]); if(map){ h=i; break; } }
  if(!map) return null;
  const tx = [];
  for(let i=h+1;i<rows.length;i++){
    const r = rows[i]; if(!r || !r.length) continue;
    const dt = cellDate(r[map.date]); if(!dt) continue;
    if(map.state!==undefined && /REVERT|DECLIN|FAIL|ANUL|REJET|PENDING/i.test(String(r[map.state]||""))) continue;
    let amt = null;
    if(map.amount!==undefined){
      amt = parseNum(r[map.amount]);
      const fee = map.fee!==undefined ? parseNum(r[map.fee]) : null;
      if(amt!==null && fee) amt -= Math.abs(fee);
    } else {
      const c = map.credit!==undefined ? parseNum(r[map.credit]) : null;
      const d = parseNum(r[map.debit]);
      if(c) amt = Math.abs(c); else if(d) amt = -Math.abs(d);
    }
    if(amt===null || Math.abs(amt)<0.5 || Math.abs(amt)>20000) continue;
    const parts = (map.desc||[]).map(j=>String(r[j]==null?"":r[j])).join("\n").split(/\r?\n/).map(s=>s.trim()).filter(Boolean);
    const more = (map.more||[]).map(j=>String(r[j]==null?"":r[j]).trim()).filter(Boolean);
    let desc = parts.shift() || more.shift() || "";
    desc = desc.replace(/\s+/g," ").trim();
    if(!/[A-Za-zÀ-ÿ]{2}/.test(desc)) continue;
    tx.push({d:dt.d, mo:dt.mo, y:dt.y, desc, more:parts.concat(more).map(s=>s.replace(/\s+/g," ")).join(" | "), amt});
  }
  return tx.length>=2 ? tx : null;
}

/* Filtre des sens : si la source a des montants négatifs, les positifs sont des entrées d'argent */
function spendOnly(tx){
  const hasNeg = tx.some(x=>x.amt<0);
  return tx.filter(x=>!(hasNeg && x.amt>0));
}
function finalizeTx(sources){
  const all = sources.map(spendOnly);
  const years = {}; all.flat().forEach(x=>{ if(x.y) years[x.y]=(years[x.y]||0)+1; });
  const defY = +(Object.entries(years).sort((a,b)=>b[1]-a[1])[0]||[new Date().getFullYear()])[0];
  const seen = new Map(); const tx = [];
  all.forEach((src,si)=>src.forEach(x=>{
    if(!x.y) x.y = defY;
    const k = [x.d,x.mo,x.y,Math.abs(x.amt).toFixed(2),(normKey(x.desc)||clean(x.desc)).replace(/[^A-Z]/g,"").slice(0,8)].join("|");
    const prev = seen.get(k);
    if(prev!==undefined && prev!==si) return; // même opération dans deux fichiers qui se chevauchent
    seen.set(k,si); tx.push(x);
  }));
  tx.forEach(x=>{ x.key = x.y*100+x.mo; x.ts = new Date(x.y,x.mo-1,x.d).getTime(); x.full = x.desc+(x.more?" "+x.more:""); });
  return tx.filter(x=>{ const s = x.loose ? x.full : x.desc; return !(has(s,INCOME) || has(s,SKIP)); }).map(x=>({...x, amt:Math.abs(x.amt)}));
}

function normKey(desc){
  let s = clean(desc)
    .replace(/\b(PRLV|PRELEVEMENT|PRELEVEMENTS|EUROPEEN|ECHEANCE|SEPA|CB|CARTE|PAGO|COMPRA|TARJ|CONTACTLESS|RECIBO|ADEUDO|DOMICILIACION|DOMICILIADO|FACTURA|FACT|PAIEMENT|PAR|EN|DE|DEL|DU|LA|LE|LES|EL|WWW|COM|HTTPS?|ECH|MANDAT|MDT|ID|EMETTEUR|ICS|RUM|REF|NUM|OP)\b/g," ")
    .replace(/[^A-Z& ]/g," ").replace(/\s+/g," ").trim();
  return s.split(" ").filter(w=>w.length>1 && !/^X+$/.test(w)).slice(0,3).join(" ");
}
const titleCase = s => s.toLowerCase().replace(/(^|\s)\S/g, c=>c.toUpperCase());

/* ---------- Analyse ---------- */
function analyze(tx){
  const monthsSet = new Set(tx.map(x=>x.key));
  const lastKey = Math.max(...tx.map(x=>x.key));
  const spanFrom = k => (Math.floor(lastKey/100)-Math.floor(k/100))*12 + (lastKey%100 - k%100) + 1;
  const nMonths = Math.max(1, monthsSet.size);
  const groups = new Map();
  const add = (key, obj, x) => {
    if(!groups.has(key)) groups.set(key, {...obj, tx:[]});
    groups.get(key).tx.push(x);
  };
  tx.forEach(x=>{
    const sub = findSub(x.full);
    if(sub){ add("s:"+sub.n, {type:"sub", cat:sub.c, name:sub.n}, x); return; }
    if(has(x.desc,FEES)){ add("fees", {type:"fees", cat:"fees", nameKey:"feesName"}, x); return; }
    const k = normKey(x.desc) || normKey((x.more||"").split(" | ")[0]) || clean(x.desc).slice(0,20);
    if(has(x.full,INS)){ add("i:"+k, {type:"insurance", cat:"insurance", name:titleCase(k)}, x); return; }
    if(has(x.full,FIXED)){ add("f:"+k, {type:"fixed", cat:"fixed", name:titleCase(k)}, x); return; }
    if(has(x.full,GYM)){ add("g:"+k, {type:"sub", cat:"gym", name:titleCase(k)}, x); return; }
    add("u:"+k, {type:"unknown", cat:"recurring", name:titleCase(k)}, x);
  });

  const items = [];
  groups.forEach((g,key)=>{
    g.tx.sort((a,b)=>a.ts-b.ts);
    const amts = g.tx.map(x=>x.amt);
    const total = amts.reduce((a,b)=>a+b,0);
    const months = new Set(g.tx.map(x=>x.key)).size;
    const min = Math.min(...amts), max = Math.max(...amts);
    const stable = max <= min*1.2;
    const perMonth = g.tx.length / months;

    if(g.type==="unknown"){
      if(!(months>=2 && max <= min*1.08 && perMonth<=1.5)) return;
    }
    if(g.type==="insurance" || g.type==="fixed"){
      if(months<2 && nMonths>=2 && g.type==="fixed") return;
    }
    let annual, estimated=false;
    if(g.type==="fees"){ annual = total / nMonths * 12; }
    else if(months===1 && g.tx.length===1){ annual = amts[0]*12; estimated = true; }
    else {
      // abonnement commencé en cours de période : on compte depuis le premier prélèvement
      const freq = g.tx.length / spanFrom(g.tx[0].key);
      annual = (freq>=0.75 && freq<=1.5) ? amts[amts.length-1]*12 : amts[amts.length-1] * (g.tx.length / nMonths) * 12;
    }

    let rise = 0;
    if(g.type!=="fees" && g.tx.length>=2){
      const f = g.tx[0].amt, l = g.tx[g.tx.length-1].amt;
      if(l > f*1.03 && l <= f*1.8) rise = Math.round((l/f-1)*100);
    }
    items.push({id:key, type:g.type==="unknown"?"recurring":g.type, cat:g.cat, name:g.name, nameKey:g.nameKey,
      annual, monthly:annual/12, count:g.tx.length, estimated, rise, total});
  });
  items.sort((a,b)=>b.annual-a.annual);
  return {items, nMonths};
}

/* ---------- Rendu ---------- */
const $ = id => document.getElementById(id);
let lastData = null;
const selected = new Set();
const fmt = v => new Intl.NumberFormat(t().locale,{style:"currency",currency:"EUR",maximumFractionDigits: v>=100?0:2}).format(v);
const nameOf = it => it.nameKey ? t()[it.nameKey] : it.name;

function countUp(el, target, suffix){
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const set = v => { el.innerHTML = fmt(v) + `<small>${suffix}</small>`; };
  if(reduce){ set(target); return; }
  const start = performance.now(), dur = 900;
  const step = now => { const p = Math.min(1,(now-start)/dur); set(target*(1-Math.pow(1-p,3))); if(p<1) requestAnimationFrame(step); };
  requestAnimationFrame(step);
}

function itemRow(it, withToggle){
  const li = document.createElement("li");
  li.className = "item" + (selected.has(it.id) ? " cut" : "");
  const tags = [];
  tags.push(`<span class="tag">${t().cats[it.cat]||it.cat}</span>`);
  if(it.rise) tags.push(`<span class="tag warn">${t().rose(it.rise)}</span>`);
  const meta = it.manual ? t().manualMeta : it.estimated ? t().once : t().times(it.count);
  li.innerHTML = `
    <div><div class="name"></div><div class="meta">${tags.join("")}${meta}</div></div>
    <div class="price"><b>${fmt(it.annual)} ${t().year}</b><span>${fmt(it.monthly)} ${t().month}</span></div>`;
  li.querySelector(".name").textContent = nameOf(it);
  if(withToggle){
    const act = document.createElement("div"); act.className="actions";
    const lab = document.createElement("label"); lab.className="toggle";
    const cb = document.createElement("input"); cb.type="checkbox"; cb.checked = selected.has(it.id);
    cb.addEventListener("change",()=>{ cb.checked?selected.add(it.id):selected.delete(it.id); li.classList.toggle("cut",cb.checked); updateSave(); });
    lab.append(cb, document.createTextNode(t().cancel));
    const btn = document.createElement("button"); btn.type="button"; btn.className="linkbtn";
    btn.textContent = it.type==="fees" ? t().feeLetter : t().letter;
    btn.addEventListener("click",()=>openLetter(it));
    act.append(lab, btn); li.append(act);
  }
  return li;
}

/* ---------- Retours des utilisateurs ---------- */
const CFG = window.RADAR_CONFIG || {};
function fbSummary(){
  if(!lastData) return null;
  const check = lastData.items.filter(i=>i.type!=="fixed");
  return {formats:lastFormats||"?", ops:lastTxCount, lines:check.length,
    subs:check.filter(i=>i.type==="sub").map(i=>i.name).join(", "),
    annual:Math.round(check.reduce((a,b)=>a+b.annual,0)), months:lastData.nMonths};
}
function renderFeedback(){
  const on = !!CFG.formId && !!lastData;
  $("fb").hidden = !on;
  if(!on) return;
  const s = fbSummary();
  $("fbSent").textContent = t().fbSent(s.formats, s.ops, s.lines, fmt(s.annual));
}
$("fbForm").addEventListener("submit", async e=>{
  e.preventDefault();
  const f = e.target, st = $("fbStatus");
  const verdict = (f.querySelector('input[name="verdict"]:checked')||{}).value;
  if(!verdict){ st.className="ko"; st.textContent=t().fbNeedVote; return; }
  if(f._gotcha.value) return;
  const s = fbSummary();
  const payload = {verdict, bank:$("fbBank").value||"", email:$("fbEmail").value.trim(), comment:$("fbComment").value.trim().slice(0,1000),
    lang, formats:s.formats, operations:s.ops, lignes:s.lines, total_annuel_eur:s.annual, mois:s.months,
    _subject:`Radar · ${verdict} · ${$("fbBank").value||"?"} · ${s.formats}`};
  if(!payload.email) delete payload.email;
  $("fbBtn").disabled = true; st.className=""; st.textContent = t().fbSending;
  try{
    const r = await fetch("https://formspree.io/f/"+encodeURIComponent(CFG.formId), {method:"POST", headers:{"Accept":"application/json","Content-Type":"application/json"}, body:JSON.stringify(payload)});
    if(!r.ok) throw new Error(r.status);
    f.reset(); st.className="ok"; st.textContent=t().fbThanks;
  }catch(err){ st.className="ko"; st.textContent=t().fbError; }
  finally{ $("fbBtn").disabled = false; }
});

function updateSave(){
  if(!lastData) return;
  const sum = lastData.items.filter(i=>selected.has(i.id)).reduce((a,b)=>a+b.annual,0);
  $("saveAmt").textContent = fmt(sum) + " " + t().year;
}

function render(data, animate=true){
  const check = data.items.filter(i=>i.type!=="fixed");
  const fixed = data.items.filter(i=>i.type==="fixed");
  const total = check.reduce((a,b)=>a+b.annual,0);
  if(animate) countUp($("bigTotal"), total, t().perYear);
  else $("bigTotal").innerHTML = fmt(total) + `<small>${t().perYear}</small>`;
  $("perMonth").textContent = check.length ? t().perMonthLine(fmt(total/12), check.length) : "";
  $("oneMonth").hidden = data.nMonths>1;

  // alertes
  const alerts = [];
  const byCat = {};
  check.filter(i=>i.type==="sub").forEach(i=>{ (byCat[i.cat]=byCat[i.cat]||[]).push(nameOf(i)); });
  Object.entries(byCat).forEach(([c,names])=>{ if(names.length>=2 && ["video","music","cloud","gym","games"].includes(c)) alerts.push(t().dup(t().catsPlural[c]||c, names)); });
  const ins = check.filter(i=>i.type==="insurance");
  if(ins.length>=2) alerts.push(t().insDup(ins.map(nameOf)));
  check.filter(i=>i.rise).forEach(i=>alerts.push(t().rise(nameOf(i), i.rise)));
  const fees = check.find(i=>i.type==="fees");
  if(fees) alerts.push(t().fees(fmt(fees.annual)));
  $("alerts").innerHTML = "";
  alerts.forEach(a=>{ const li=document.createElement("li"); li.textContent=a; $("alerts").append(li); });
  $("alertsWrap").hidden = !alerts.length;

  $("items").innerHTML = "";
  check.forEach(it=>$("items").append(itemRow(it,true)));
  $("emptyMsg").hidden = check.length>0;

  $("fixed").innerHTML = "";
  fixed.forEach(it=>$("fixed").append(itemRow(it,false)));
  $("fixedWrap").hidden = !fixed.length;
  renderFeedback();
  $("fixedTotal").textContent = fixed.length ? `(${fmt(fixed.reduce((a,b)=>a+b.annual,0))} ${t().year})` : "";
  updateSave();
}

/* ---------- Lettres ---------- */
/* Pages officielles de gestion / résiliation (compte de l'utilisateur) */
const CANCEL = {
 "Netflix":"https://www.netflix.com/cancelplan",
 "Spotify":"https://www.spotify.com/account/subscription/",
 "Disney+":"https://www.disneyplus.com/account",
 "Amazon Prime":()=>lang==="es"?"https://www.amazon.es/gp/primecentral":"https://www.amazon.fr/gp/primecentral",
 "Max":"https://www.max.com/account",
 "YouTube Premium":"https://www.youtube.com/paid_memberships",
 "DAZN":"https://www.dazn.com/myaccount",
 "Apple (iCloud, App Store)":"https://support.apple.com/HT202039",
 "Google One":"https://one.google.com/settings",
 "Xbox Game Pass":"https://account.microsoft.com/services",
 "Microsoft 365":"https://account.microsoft.com/services",
 "PlayStation Plus":"https://www.playstation.com/support/store/cancel-ps-store-subscription/",
 "Adobe":"https://account.adobe.com/plans",
 "Dropbox":"https://www.dropbox.com/account/plan",
 "ChatGPT":"https://help.openai.com/en/articles/7232927-how-do-i-cancel-my-chatgpt-plus-subscription",
 "Claude":"https://claude.ai/settings/billing",
 "Canva":"https://www.canva.com/settings/billing-and-teams",
 "LinkedIn Premium":"https://www.linkedin.com/premium/manage/",
 "Crunchyroll":"https://www.crunchyroll.com/account/membership",
 "Deezer":"https://www.deezer.com/account/subscription",
 "Kindle Unlimited":()=>lang==="es"?"https://www.amazon.es/kindle-dbs/ku/ku-central":"https://www.amazon.fr/kindle-dbs/ku/ku-central",
 "Audible":()=>lang==="es"?"https://www.audible.es/account/overview":"https://www.audible.fr/account/overview"
};
const cancelUrl = it => { const u = it.type!=="fees" && CANCEL[nameOf(it)]; return typeof u==="function" ? u() : (u||""); };
let current = null;
function updateMail(){
  const txt = $("letter").value, lines = txt.split("\n");
  const s0 = lines[0].replace(/^(Objet|Asunto)\s*:\s*/,""); const subj = s0.charAt(0).toUpperCase()+s0.slice(1);
  $("mailBtn").href = "mailto:?subject="+encodeURIComponent(subj)+"&body="+encodeURIComponent(lines.slice(1).join("\n").trim());
}
function buildLetter(){
  if(!current) return;
  const name = $("fName").value.trim() || t().phName;
  const ref = $("fRef").value.trim() || t().phRef;
  const date = new Date().toLocaleDateString(t().locale,{day:"numeric",month:"long",year:"numeric"});
  $("letter").value = current.type==="fees"
    ? t().letterFee(fmt(current.total), ref, name, date)
    : t().letterSub(nameOf(current), ref, name, date);
  updateMail();
}
function openLetter(it){
  current = it;
  $("dlgTitle").textContent = t().dlgTitle(nameOf(it));
  const url = cancelUrl(it);
  $("dlgTip").textContent = it.type==="fees" ? t().feeTip : (url ? t().onlineTip : t().dlgTip);
  $("onlineBtn").hidden = !url; $("orLine").hidden = !url;
  if(url){ $("onlineBtn").href = url; $("onlineBtn").textContent = t().online(nameOf(it)); }
  $("copyBtn").textContent = t().copy;
  buildLetter();
  if($("dlg").showModal) $("dlg").showModal(); else $("dlg").setAttribute("open","");
}
["fName","fRef"].forEach(id=>$(id).addEventListener("input",buildLetter));
$("dlgClose").addEventListener("click",()=>$("dlg").close());
$("copyBtn").addEventListener("click",async()=>{
  try{ await navigator.clipboard.writeText($("letter").value); }
  catch(e){ $("letter").select(); document.execCommand && document.execCommand("copy"); }
  $("copyBtn").textContent = t().copied;
  setTimeout(()=>{$("copyBtn").textContent=t().copy},1800);
});

/* ---------- Fichiers ---------- */
const RE_AMT_CELL = /^([+\-−]?)\s?(\d{1,3}(?:[.\s  ']\d{3})+|\d+)[.,](\d{2})\s?(€|EUR)?\s?(-)?$/i;
const PDF_COLS = {debit:COLS.debit, credit:COLS.credit, bal:["SALDO","SOLDE","BALANCE","DISPONIBLE","SALDO DISPONIBLE","NOUVEAU SOLDE"]};
const SKIP_SECTION = /^(REVERTIDAS|REVERTIDA|REVERTED|TRANSACCIONES PENDIENTES|PENDIENTES|PENDING|OPERATIONS EN ATTENTE|OPERATIONS EN COURS|EN ATTENTE|OPERATIONS ANNULEES|ANNULEES|MOVIMIENTOS PENDIENTES)\b/;
function pdfHeader(parts){
  const cols = {};
  parts.forEach(p=>{
    const h = HN(p.s);
    for(const [k,list] of Object.entries(PDF_COLS)) if(list.includes(h) && !cols[k]) cols[k] = {l:p.x, r:p.r, c:(p.x+p.r)/2};
  });
  return (cols.debit && cols.credit) ? cols : null;
}
/* Relevés à colonnes Débit / Crédit (ou Cargo / Abono) : les montants n'ont pas de signe,
   c'est la colonne qui dit si l'argent sort ou entre. */
function signByColumn(parts, cols){
  parts.forEach(p=>{
    const m = p.s.trim().match(RE_AMT_CELL); if(!m) return;
    // le montant doit être sous l'en-tête de sa colonne (à 30 pt près), sinon c'est autre chose (date de valeur…)
    let best=null, dist=Infinity;
    for(const [k,c] of Object.entries(cols)){
      if(p.r < c.l-30 || p.x > c.r+30) continue;
      const dd = Math.abs((p.x+p.r)/2-c.c);
      if(dd<dist){ dist=dd; best=k; }
    }
    if(!best) return;
    const abs = m[2]+","+m[3];
    p.s = best==="bal" ? "" : (best==="debit" ? "-" : "+") + abs;
  });
}
let pdfReady = null;
function loadPDF(){
  if(window.pdfjsLib) return Promise.resolve();
  if(!pdfReady) pdfReady = loadScript("vendor/pdf.min.js").then(()=>{ pdfjsLib.GlobalWorkerOptions.workerSrc = "vendor/pdf.worker.min.js"; }).catch(e=>{ pdfReady=null; throw e; });
  return pdfReady;
}
async function pdfLines(file){
  await loadPDF();
  const pdf = await pdfjsLib.getDocument({data: await file.arrayBuffer(), isEvalSupported:false}).promise;
  const out = []; let cols = null, skip = false;
  for(let p=1;p<=pdf.numPages;p++){
    const page = await pdf.getPage(p);
    const tc = await page.getTextContent();
    const rows = [];
    tc.items.forEach(it=>{
      if(!it.str || !it.str.trim()) return;
      const y = it.transform[5], x = it.transform[4];
      const h = Math.abs(it.transform[3]) || it.height || 8;
      let row = rows.find(r=>Math.abs(r.y-y)<3);
      if(!row){ row={y,parts:[]}; rows.push(row); }
      row.parts.push({x, r:x+(it.width||it.str.length*h*0.5), h, s:it.str});
    });
    rows.sort((a,b)=>b.y-a.y).forEach(r=>{
      r.parts.sort((a,b)=>a.x-b.x);
      // recolle les morceaux très proches (« 1 » + « 050,00 » -> « 1 050,00 »)
      const parts = [];
      r.parts.forEach(q=>{
        const prev = parts[parts.length-1];
        const gap = prev ? q.x - prev.r : Infinity;
        if(prev && gap < prev.h*0.45){ prev.s += (gap > prev.h*0.12 ? " " : "") + q.s; prev.r = q.r; }
        else parts.push({...q});
      });
      const text = parts.map(q=>q.s).join(" ");
      // sections à ignorer : opérations annulées ou en attente (Revolut « Revertidas », « Pendientes »…)
      if(SKIP_SECTION.test(clean(text).trim())){ skip = true; out.push(""); return; }
      const hc = pdfHeader(parts);
      if(hc){ cols = hc; if(hc.bal) skip = false; }
      else if(cols) signByColumn(parts, cols);
      out.push(skip ? "" : parts.map(q=>q.s).filter(Boolean).join("  "));
    });
  }
  return out;
}

/* CSV : champs entre guillemets, retours à la ligne dans un libellé, séparateur ; , tab ou | */
function parseCSV(text){
  const sample = text.split(/\r?\n/).slice(0,40);
  let delim = ";", best = -1;
  for(const d of [";","\t",",","|"]){
    const counts = {}; sample.forEach(l=>{ const n=l.split(d).length-1; if(n>=2) counts[n]=(counts[n]||0)+1; });
    const top = Math.max(0,...Object.values(counts));
    if(top>best){ best=top; delim=d; }
  }
  const rows = []; let row = [], cur = "", q = false;
  for(let i=0;i<text.length;i++){
    const ch = text[i];
    if(q){
      if(ch==='"'){ if(text[i+1]==='"'){ cur+='"'; i++; } else q=false; }
      else cur+=ch;
    } else if(ch==='"' && cur.trim()===""){ q=true; cur=""; }
    else if(ch==='"' && cur==="="){ q=true; cur=""; }
    else if(ch===delim){ row.push(cur.trim()); cur=""; }
    else if(ch==="\n" || ch==="\r"){ if(ch==="\r" && text[i+1]==="\n") i++; row.push(cur.trim()); rows.push(row); row=[]; cur=""; }
    else cur+=ch;
  }
  if(cur || row.length){ row.push(cur.trim()); rows.push(row); }
  return rows;
}
const rowsToLines = rows => rows.map(r=>r.map(c=>String(c==null?"":c).replace(/\s+/g," ").trim()).join("   "));

/* Les exports de banques sont souvent en Windows-1252, pas en UTF-8 */
async function readText(file){
  const buf = await file.arrayBuffer();
  try{ return new TextDecoder("utf-8",{fatal:true}).decode(buf).replace(/^﻿/,""); }
  catch(e){ return new TextDecoder("windows-1252").decode(buf); }
}

let xlsxReady = null;
const XLSX_URLS = ["vendor/xlsx.full.min.js"];
function loadScript(src){ return new Promise((ok,ko)=>{ const s=document.createElement("script"); s.src=src; s.onload=ok; s.onerror=()=>{ s.remove(); ko(new Error("noxlsx")); }; document.head.append(s); }); }
function loadXLSX(){
  if(window.XLSX) return Promise.resolve();
  if(!xlsxReady) xlsxReady = loadScript(XLSX_URLS[0]).catch(e=>{ xlsxReady=null; throw e; });
  return xlsxReady;
}
async function sheetRows(file){
  await loadXLSX();
  const wb = XLSX.read(await file.arrayBuffer(), {type:"array", cellDates:true});
  let rows = [];
  wb.SheetNames.forEach(n=>{ rows = rows.concat(XLSX.utils.sheet_to_json(wb.Sheets[n], {header:1, raw:true, defval:""})); });
  return rows;
}

function status(msg, err){
  $("status").innerHTML = msg ? `<div class="msg${err?" err":""}"></div>` : "";
  if(msg) $("status").firstChild.textContent = msg;
}

/* Tableau sans ligne d'en-tête (ex. certains exports LCL ou BNP) : on devine chaque colonne */
function rowsNoHeader(rows){
  const tx = [];
  rows.forEach(r=>{
    if(!r || r.length<3) return;
    let di = -1, dt = null;
    for(let i=0;i<r.length && di<0;i++){
      const v = r[i]; const sv = String(v==null?"":v).trim();
      if(v instanceof Date || (sv.length<=19 && /^\d{1,4}[\/.\-]\d{1,2}([\/.\-]\d{2,4})?(\s.*)?$/.test(sv))){ dt = cellDate(v); if(dt) di = i; }
    }
    if(di<0) return;
    const amts = [], texts = [];
    r.forEach((v,i)=>{
      if(i===di) return;
      const sv = String(v==null?"":v).trim(); if(!sv) return;
      if(typeof v==="number" || RE_AMT_CELL.test(sv)) { const n=parseNum(v); if(n!==null) amts.push(n); }
      else if(/[A-Za-zÀ-ÿ]{2}/.test(sv)) texts.push(sv.replace(/\s+/g," "));
    });
    if(!amts.length || !texts.length) return;
    const amt = amts.length>=2 ? amts[amts.length-2] : amts[0];
    if(Math.abs(amt)<0.5 || Math.abs(amt)>20000) return;
    texts.sort((a,b)=>b.length-a.length);
    tx.push({d:dt.d, mo:dt.mo, y:dt.y, desc:texts[0], more:texts.slice(1).join(" "), amt, loose:true});
  });
  return tx.length>=3 ? tx : null;
}
const fromTable = rows => tableToTx(rows) || rowsNoHeader(rows) || linesToTx(rowsToLines(rows), false);

async function handleFiles(files){
  if(!files.length) return;
  status(t().reading);
  const sources = [];
  lastFormats = [...new Set(files.map(f=>(f.name.split(".").pop()||"?").toLowerCase()))].join("+");
  try{
    for(const f of files){
      const n = f.name.toLowerCase();
      if(n.endsWith(".pdf") || f.type==="application/pdf"){
        sources.push(linesToTx(await pdfLines(f), true));
      } else if(/\.(xlsx|xls|ods)$/.test(n) || /spreadsheet|excel/.test(f.type)){
        sources.push(fromTable(await sheetRows(f)));
      } else if(n.endsWith(".csv") || f.type==="text/csv"){
        sources.push(fromTable(parseCSV(await readText(f))));
      } else if(n.endsWith(".txt") || f.type.startsWith("text/")){
        sources.push(linesToTx((await readText(f)).split(/\r?\n/), true));
      } else { status(t().errFile, true); return; }
    }
  }catch(e){
    if(e && (e.name==="PasswordException" || /password/i.test(e.message||""))) status(t().errPwd, true);
    else status(t().errNone, true);
    return;
  }
  runTx(finalizeTx(sources));
}

function run(lines){ lastFormats = "texte"; runTx(finalizeTx([linesToTx(lines, true)])); }
let lastFormats = "", lastTxCount = 0;
function runTx(tx){
  lastTxCount = tx.length;
  if(tx.length < 2){ status(t().errNone, true); return; }
  status("");
  selected.clear();
  lastData = analyze(tx);
  $("intro").hidden = true;
  $("results").hidden = false;
  render(lastData, true);
  window.scrollTo({top:0});
}

const drop = $("drop");
$("file").addEventListener("change", e=>handleFiles([...e.target.files]));
["dragenter","dragover"].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.add("over")}));
["dragleave","drop"].forEach(ev=>drop.addEventListener(ev,e=>{e.preventDefault();drop.classList.remove("over")}));
drop.addEventListener("drop", e=>handleFiles([...e.dataTransfer.files]));

$("pasteToggle").addEventListener("click",()=>{ $("pasteBox").hidden = !$("pasteBox").hidden; if(!$("pasteBox").hidden) $("pasteArea").focus(); });
$("pasteGo").addEventListener("click",()=>{ const v=$("pasteArea").value; if(v.trim()) run(v.split(/\r?\n/)); });
$("restart").addEventListener("click",()=>{
  lastData=null; selected.clear(); $("file").value=""; $("fbStatus").textContent="";
  $("results").hidden=true; $("intro").hidden=false; status(""); window.scrollTo({top:0});
});

/* ---------- Relevé d'exemple ---------- */
function demoLines(){
  const L = []; let bal = 2400;
  const fmtN = v => { const s=Math.abs(v).toFixed(2).split("."); return (v<0?"-":"")+s[0].replace(/\B(?=(\d{3})+(?!\d))/g,".")+","+s[1]; };
  const push = (d,m,desc,v)=>{ bal+=v; const dd=String(d).padStart(2,"0"), mm=String(m).padStart(2,"0"); L.push(`${dd}/${mm}/2026 ${dd}/${mm}/2026 ${desc} ${fmtN(v)} ${fmtN(bal)}`); };
  const luz = {6:-58.40,7:-71.20,8:-64.90};
  [6,7,8].forEach(m=>{
    push(1,m,"NOMINA CLUB DEPORTIVO GIJON",1650);
    push(2,m,"RECIBO ALQUILER VIVIENDA",-650);
    push(4,m,"COMPRA TARJ. 4XXX NETFLIX.COM",-12.99);
    push(6,m,"COMPRA TARJ. 4XXX SPOTIFY P2F3A",m===6?-10.99:-11.99);
    push(7,m,"COMPRA TARJ. 4XXX DISNEY PLUS",-9.99);
    push(8,m,"COMPRA TARJ. 4XXX AMAZON PRIME ES",-4.99);
    push(9,m,"COMPRA TARJ. 4XXX APPLE.COM/BILL",-2.99);
    push(10,m,"RECIBO BASIC-FIT SPAIN",-29.99);
    push(11,m,"RECIBO SEGURO MOVIL PROTECT",-7.99);
    push(12,m,"RECIBO SEGURO TARJETA PLUS",-4.50);
    push(13,m,"COMISION MANTENIMIENTO CUENTA",-5);
    push(14,m,"RECIBO IBERDROLA CLIENTES",luz[m]);
    push(15,m,"RECIBO DIGI SPAIN TELECOM",-15);
    push(16,m,"RECIBO SUSCRIPCION REVISTA DIGITAL",-8.99);
    push(17,m,"COMPRA TARJ. 4XXX MERCADONA GIJON",-(40+m*3.7));
    push(21,m,"COMPRA TARJ. 4XXX MERCADONA GIJON",-(55+m*2.1));
    push(23,m,"COMPRA TARJ. 4XXX BAR EL PUERTO",-(12+m));
    push(25,m,"BIZUM ENVIADO",-20);
  });
  push(20,8,"COMPRA TARJ. 4XXX DAZN LIMITED",-29.99);
  return L;
}
$("demoBtn").addEventListener("click",()=>run(demoLines()));

/* ---------- Mode manuel : sans relevé ---------- */
const MANUAL = [
 ["Netflix","video",13.99],["Spotify","music",11.99],["Disney+","video",9.99],["Amazon Prime","video",4.99],
 ["Max","video",9.99],["YouTube Premium","video",13.99],["DAZN","video",19.99],["Movistar Plus+","video",10],
 ["Canal+","video",19.99],["Filmin","video",7.99],["Apple (iCloud, App Store)","cloud",2.99],["Google One","cloud",1.99],
 ["Xbox Game Pass","games",14.99],["PlayStation Plus","games",8.99],["ChatGPT","software",22.99],["Microsoft 365","software",10],
 ["Adobe","software",12.09],["Canva","software",12],["Audible","books",9.99],["Duolingo","apps",7.99],
 ["Tinder","apps",14.99],["gymName","gym",29.99],["insName","insurance",7.99]
];
function manualName(n){ return n==="gymName" ? t().gymName : n==="insName" ? (lang==="es"?"Seguro de móvil":"Assurance mobile") : n; }
function buildManual(){
  const ul = $("mlist"); if(ul.children.length) { ul.querySelectorAll("[data-mname]").forEach(l=>l.firstChild.nodeValue=manualName(l.dataset.mname)); ul.querySelectorAll(".cat").forEach(c=>c.textContent=t().cats[c.dataset.cat]||""); ul.querySelectorAll(".pm").forEach(x=>x.textContent=t().perMonthShort); return; }
  MANUAL.forEach(([n,c,p],i)=>{
    const li = document.createElement("li"); li.className="mrow";
    li.innerHTML = `<input type="checkbox" id="m${i}"><label for="m${i}" data-mname="${n}">x<span class="cat" data-cat="${c}"></span></label><span class="mprice"><input type="number" inputmode="decimal" min="0" step="0.01" value="${p}" aria-label="€"> € <span class="pm"></span></span>`;
    li.querySelector("label").firstChild.nodeValue = manualName(n);
    li.querySelector(".cat").textContent = t().cats[c]||"";
    li.querySelector(".pm").textContent = t().perMonthShort;
    li.addEventListener("input", manualTotal); li.addEventListener("change", manualTotal);
    ul.append(li);
  });
}
function manualPicked(){
  return [...$("mlist").children].map((li,i)=>({li,i})).filter(o=>o.li.querySelector("input[type=checkbox]").checked)
    .map(({li,i})=>{ const [n,c]=MANUAL[i]; const p=Math.max(0,parseFloat(li.querySelector("input[type=number]").value)||0);
      return {id:"m:"+n, type:c==="insurance"?"insurance":"sub", cat:c, name:manualName(n), annual:p*12, monthly:p, count:0, estimated:false, rise:0, total:p, manual:true}; });
}
function manualTotal(){ const s = manualPicked().reduce((a,b)=>a+b.annual,0); $("mTotal").textContent = fmt(s)+" "+t().year; }
$("manualToggle").addEventListener("click",()=>{ buildManual(); manualTotal(); $("manualBox").hidden = !$("manualBox").hidden; if(!$("manualBox").hidden) $("manualBox").scrollIntoView({behavior:"smooth",block:"start"}); });
$("manualGo").addEventListener("click",()=>{
  const items = manualPicked().sort((a,b)=>b.annual-a.annual); if(!items.length) return;
  lastFormats = "manuel"; lastTxCount = 0;
  selected.clear(); lastData = {items, nMonths:12};
  $("intro").hidden = true; $("results").hidden = false; render(lastData, true); window.scrollTo({top:0});
});

/* ---------- Indicateur « hors ligne » (preuve que rien ne sort) ---------- */
function netBadge(){ const b=$("netBadge"); const off=!navigator.onLine; b.textContent = off ? t().netOff : t().netOn; b.classList.toggle("off", off); }
window.addEventListener("online", netBadge); window.addEventListener("offline", netBadge);

applyLang();
if("serviceWorker" in navigator && location.protocol==="https:"){ window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{})); }
})();
