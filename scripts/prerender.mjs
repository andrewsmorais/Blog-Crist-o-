// Gera um arquivo HTML completo para cada página do blog (pré-renderização).
// Assim o Google, o AdSense e as IAs leem o texto do artigo direto no HTML,
// sem depender de JavaScript. Também cria o sitemap.xml automaticamente.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const SITE = 'https://www.sdgloria.com.br';
const SITE_NAME = 'Soli Deo Gloria';
const DEFAULT_IMAGE = `${SITE}/worship_hero.png`;
const DEFAULT_DESC =
  'Estudos bíblicos, teologia reformada, devocionais, personagens bíblicos e testemunhos de fé para nutrir sua vida espiritual.';

const { render, allArticlesData, artigosNovos } = await import(
  pathToFileURL(path.join(ROOT, 'dist-server', 'entry-server.js')).href
);

// Páginas fixas (não são artigos)
const STATIC = {
  '/': {
    title: `${SITE_NAME} | Estudos Bíblicos, Teologia Reformada e Devocionais`,
    description:
      'Estudos bíblicos, teologia reformada, devocionais, personagens bíblicos e testemunhos de fé. Conteúdo cristão em português para nutrir sua vida espiritual.',
  },
  '/sobre': { title: `Quem Somos | ${SITE_NAME}`, description: 'Conheça o Soli Deo Gloria, blog cristão de Andrews Rocha de Morais: quem escreve, no que cremos e como os estudos bíblicos são produzidos.' },
  '/contato': { title: `Contato | ${SITE_NAME}`, description: 'Fale com a equipe do Soli Deo Gloria: dúvidas, sugestões de estudos, correções e parcerias.' },
  '/estudos-biblicos': { title: `Estudos Bíblicos | ${SITE_NAME}`, description: 'Estudos bíblicos completos sobre doutrinas, livros e passagens das Escrituras, com aplicação prática para a vida cristã.' },
  '/devocionais': { title: `Devocionais | ${SITE_NAME}`, description: 'Devocionais cristãos para meditar na Palavra de Deus, fortalecer a fé e encontrar consolo nas Escrituras.' },
  '/personagens-biblicos': { title: `Personagens Bíblicos | ${SITE_NAME}`, description: 'A vida de homens e mulheres da Bíblia — Elias, Davi, Ester, Ana, Paulo, Jó e outros — e o que eles nos ensinam hoje.' },
  '/testemunhos': { title: `Testemunhos | ${SITE_NAME}`, description: 'Histórias reais de fé, conversão e restauração que mostram a fidelidade de Deus na vida de pessoas comuns.' },
  '/noticias': { title: `Notícias | ${SITE_NAME}`, description: 'Notícias do mundo cristão comentadas à luz da Bíblia.' },
  '/politica-de-privacidade': { title: `Política de Privacidade | ${SITE_NAME}`, description: 'Como o Soli Deo Gloria coleta, usa e protege seus dados, incluindo cookies e anúncios do Google AdSense.' },
  '/politica-de-cookies': { title: `Política de Cookies | ${SITE_NAME}`, description: 'Quais cookies o Soli Deo Gloria usa e como você pode gerenciá-los.' },
  '/termos-de-uso': { title: `Termos de Uso | ${SITE_NAME}`, description: 'Termos e condições de uso do site Soli Deo Gloria.' },
};

const CATEGORY_OF = { 'Estudos Bíblicos': '/estudos-biblicos', Devocionais: '/devocionais', 'Personagens Bíblicos': '/personagens-biblicos', Testemunhos: '/testemunhos', 'Notícias': '/noticias' };

// ---------- utilidades ----------
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const decode = (s) =>
  s.replace(/<!--.*?-->/g, '').replace(/<[^>]+>/g, '').replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();
const clip = (s, n = 158) => {
  if (s.length <= n) return s;
  const cut = s.slice(0, n - 1);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:.\s—-]+$/, '') + '…';
};
// Redes sociais (WhatsApp/Facebook) preferem JPG/PNG: usa o arquivo original ao lado do .webp
const socialImage = (src) => {
  if (!src.endsWith('.webp')) return src;
  const base = src.replace(/\.webp$/, '');
  for (const ext of ['.jpg', '.jpeg', '.png']) if (fs.existsSync(path.join(DIST, base + ext))) return base + ext;
  return src;
};
const abs = (u) => (u.startsWith('http') ? u : SITE + (u.startsWith('/') ? u : '/' + u));

const MONTHS = { jan: 1, janeiro: 1, fev: 2, feb: 2, fevereiro: 2, mar: 3, 'março': 3, marco: 3, abr: 4, apr: 4, abril: 4, mai: 5, may: 5, maio: 5, jun: 6, junho: 6, jul: 7, julho: 7, ago: 8, aug: 8, agosto: 8, set: 9, sep: 9, setembro: 9, out: 10, oct: 10, outubro: 10, nov: 11, novembro: 11, dez: 12, dec: 12, dezembro: 12 };
function parseDate(text) {
  if (!text) return null;
  const m = text.toLowerCase().match(/(\d{1,2})\s*(?:de\s+)?([a-zçã]+)\.?,?\s*(?:de\s+)?(\d{4})/);
  if (!m || !MONTHS[m[2]]) return null;
  return `${m[3]}-${String(MONTHS[m[2]]).padStart(2, '0')}-${m[1].padStart(2, '0')}`;
}

// Lista de rotas: lida do próprio App.jsx (toda página nova entra sozinha)
const appSrc = fs.readFileSync(path.join(ROOT, 'src', 'App.jsx'), 'utf8');
const routes = [...new Set(['/', ...[...appSrc.matchAll(/path === '([^']+)'/g)].map((m) => m[1]).filter((r) => r !== '' && r !== '/')])];

for (const a of artigosNovos) if (!routes.includes(a.link)) routes.push(a.link);

const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');
if (!template.includes('<!--seo:start-->')) throw new Error('index.html sem marcadores <!--seo:start-->');

function buildHead({ title, description, canonical, image, type, robots, jsonld }) {
  return [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<meta name="robots" content="${robots}" />`,
    canonical ? `<link rel="canonical" href="${canonical}" />` : '',
    `<meta property="og:type" content="${type}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    canonical ? `<meta property="og:url" content="${canonical}" />` : '',
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:image" content="${esc(image)}" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    `<meta name="twitter:image" content="${esc(image)}" />`,
    ...jsonld.map((j) => `<script type="application/ld+json">${JSON.stringify(j).replace(/</g, '\\u003c')}</script>`),
  ]
    .filter(Boolean)
    .map((l) => '    ' + l)
    .join('\n');
}

function page(headHtml, bodyHtml) {
  return template
    .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, headHtml.trimStart())
    .replace('<div id="root"></div>', `<div id="root">${bodyHtml}</div>`);
}

function outFile(route) {
  if (route === '/') return path.join(DIST, 'index.html');
  return path.join(DIST, route.slice(1) + '.html');
}


// ---------- Capas dos artigos novos (geradas, sem texto) ----------
const PALETTES = [
  ['#2b1a2e', '#722f37', '#f2c879'], ['#10263b', '#2e6f95', '#f4e3b1'], ['#1f2d1f', '#4f7a4a', '#f3dd9a'],
  ['#2d1b13', '#a2542c', '#f7e1b5'], ['#1a1f3a', '#5a4e9c', '#f5d6a1'], ['#2a2420', '#8a6d3b', '#f6ecd0'],
];
async function makeCover(slug, index) {
  const [bg1, bg2, glow] = PALETTES[index % PALETTES.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${bg1}"/><stop offset="1" stop-color="${bg2}"/></linearGradient>
      <radialGradient id="r" cx="50%" cy="38%" r="55%"><stop offset="0" stop-color="${glow}" stop-opacity="0.85"/><stop offset="1" stop-color="${glow}" stop-opacity="0"/></radialGradient>
    </defs>
    <rect width="1200" height="630" fill="url(#g)"/>
    <rect width="1200" height="630" fill="url(#r)"/>
    <g fill="none" stroke="${glow}" stroke-opacity="0.35" stroke-width="2">
      <circle cx="600" cy="240" r="120"/><circle cx="600" cy="240" r="190"/><circle cx="600" cy="240" r="270"/>
    </g>
    <g fill="${glow}" fill-opacity="0.92"><rect x="586" y="150" width="28" height="190" rx="4"/><rect x="535" y="205" width="130" height="28" rx="4"/></g>
    <rect y="560" width="1200" height="70" fill="#000" fill-opacity="0.25"/>
  </svg>`;
  const dir = path.join(DIST, 'capas');
  fs.mkdirSync(dir, { recursive: true });
  // Se existir uma imagem de verdade (public/capas/<slug>.webp), usa ela e só gera o .jpg para redes sociais.
  const real = path.join(dir, slug + '.webp');
  if (fs.existsSync(real)) {
    await sharp(real).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 85 }).toFile(path.join(dir, slug + '.jpg'));
    return;
  }
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  await sharp(png).webp({ quality: 80 }).toFile(path.join(dir, slug + '.webp'));
  await sharp(png).jpeg({ quality: 85 }).toFile(path.join(dir, slug + '.jpg'));
}
for (const [i, a] of artigosNovos.entries()) await makeCover(a.slug, i);

const ORG = { '@type': 'Organization', name: SITE_NAME, url: SITE, logo: { '@type': 'ImageObject', url: `${SITE}/favicon.svg` } };
const sitemap = [];
const problems = [];

for (const route of routes) {
  const body = render(route);
  if (body.includes('page-404')) {
    problems.push(`${route} → abre a página 404 (sem conteúdo). Foi deixada de fora do sitemap.`);
    continue;
  }

  const h1 = decode((body.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || '');
  const novo = artigosNovos.find((a) => a.link === route);
  const article = novo || allArticlesData.find((a) => (a.link || a.path) === route);
  const isStatic = Boolean(STATIC[route]);

  // Descrição: resumo cadastrado > primeiro parágrafo com conteúdo
  let description = STATIC[route]?.description || article?.excerpt;
  if (!description) {
    const mainHtml = body.slice(body.indexOf('<main') >= 0 ? body.indexOf('<main') : 0);
    const para = [...mainHtml.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map((m) => decode(m[1])).find((t) => t.length > 90);
    description = para || DEFAULT_DESC;
  }
  description = clip(decode(description));

  const title = STATIC[route]?.title || `${clip(h1 || article?.title || SITE_NAME, 70)} | ${SITE_NAME}`;
  const imgMatch = body.match(/<img[^>]*class="article-hero-img"[^>]*>/) || (!isStatic && body.match(/<main[\s\S]*?(<img[^>]*>)/));
  const imgTag = Array.isArray(imgMatch) ? imgMatch[1] || imgMatch[0] : '';
  const imgSrc = (imgTag.match(/src="([^"]+)"/) || [])[1];
  const image = imgSrc ? abs(socialImage(imgSrc)) : DEFAULT_IMAGE;
  const dateText = (decode(body).match(/📅\s*([^⏱|]{6,40})/) || [])[1] || article?.date;
  const date = novo?.dateISO || parseDate(dateText);
  const canonical = route === '/' ? `${SITE}/` : SITE + route;

  const jsonld = [];
  if (route === '/') {
    jsonld.push({ '@context': 'https://schema.org', '@type': 'WebSite', name: SITE_NAME, url: `${SITE}/`, inLanguage: 'pt-BR', description, publisher: ORG });
  } else if (!isStatic) {
    const crumbName = Object.keys(CATEGORY_OF).find((c) => body.includes(`href="${CATEGORY_OF[c]}"`) && body.includes('class="breadcrumbs"')) ;
    jsonld.push({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: clip(h1 || article?.title || '', 110),
      description,
      image: [image],
      ...(date ? { datePublished: date, dateModified: date } : {}),
      inLanguage: 'pt-BR',
      author: { '@type': 'Person', name: 'Andrews Rocha de Morais', url: `${SITE}/sobre` },
      publisher: ORG,
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
    });
    if (novo?.faq?.length) {
      jsonld.push({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: novo.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })) });
    }
    const items = [{ '@type': 'ListItem', position: 1, name: 'Início', item: `${SITE}/` }];
    if (crumbName) items.push({ '@type': 'ListItem', position: 2, name: crumbName, item: SITE + CATEGORY_OF[crumbName] });
    items.push({ '@type': 'ListItem', position: items.length + 1, name: clip(h1, 80), item: canonical });
    jsonld.push({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items });
  }

  const head = buildHead({ title, description, canonical, image, type: isStatic ? 'website' : 'article', robots: 'index, follow, max-image-preview:large', jsonld });
  const file = outFile(route);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page(head, body));

  const priority = route === '/' ? '1.0' : CATEGORY_OF && Object.values(CATEGORY_OF).includes(route) ? '0.9' : isStatic ? '0.3' : '0.8';
  sitemap.push(`  <url>\n    <loc>${canonical}</loc>${date ? `\n    <lastmod>${date}</lastmod>` : ''}\n    <priority>${priority}</priority>\n  </url>`);
}

// Página 404 de verdade (o servidor responde com código 404 e o Google não indexa)
const body404 = render('/__pagina-que-nao-existe__');
const head404 = buildHead({ title: `Página não encontrada | ${SITE_NAME}`, description: DEFAULT_DESC, canonical: '', image: DEFAULT_IMAGE, type: 'website', robots: 'noindex, follow', jsonld: [] });
fs.writeFileSync(path.join(DIST, '404.html'), page(head404, body404));

fs.writeFileSync(
  path.join(DIST, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemap.join('\n')}\n</urlset>\n`
);

console.log(`✔ ${sitemap.length} páginas geradas + 404.html + sitemap.xml`);
if (problems.length) console.warn('⚠ Atenção:\n  ' + problems.join('\n  '));
