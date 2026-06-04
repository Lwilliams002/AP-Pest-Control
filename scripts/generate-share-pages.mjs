import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const distDir = new URL("../dist/", import.meta.url);
const indexHtmlPath = new URL("index.html", distDir);
const siteUrl = "https://ap-pest-control.com";

const pages = [
  {
    path: "southflorida",
    title: "South Florida Pest Control — AP Pest Control",
    description:
      "Pest control across South Florida — Miami, Fort Lauderdale, Boca Raton, West Palm Beach. Mosquitoes, roaches, rodents, termites, centipedes, millipedes and more.",
    ogTitle: "South Florida Pest Control — AP Pest",
    ogDescription:
      "Neon-bright service across South Florida — Miami to Palm Beach. Built for humidity, hurricanes, and everything that bites.",
    image: `${siteUrl}/social/south-share.png`,
    imageAlt: "AP Pest Control South Florida service preview",
  },
  {
    path: "arizona",
    title: "Arizona Pest Control — AP Pest Control, Phoenix Valley",
    description:
      "Pest control in the Arizona Valley — Scottsdale, Phoenix, Tucson, Marana, Oro Valley, Peoria, Buckeye, Glendale and more. Scorpions, spiders, termites, roaches and rodents.",
    ogTitle: "Arizona Pest Control — AP Pest",
    ogDescription: "Sonoran Desert pest control rooted in 35+ years of experience in the Valley.",
    image: `${siteUrl}/social/arizona-share.png`,
    imageAlt: "AP Pest Control Arizona service preview",
  },
];

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function metaTags(page) {
  const url = `${siteUrl}/${page.path}`;
  const tags = [
    `<title>${escapeHtml(page.title)}</title>`,
    `<meta name="description" content="${escapeHtml(page.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="AP Pest Control" />`,
    `<meta property="og:title" content="${escapeHtml(page.ogTitle)}" />`,
    `<meta property="og:description" content="${escapeHtml(page.ogDescription)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${page.image}" />`,
    `<meta property="og:image:secure_url" content="${page.image}" />`,
    `<meta property="og:image:type" content="image/png" />`,
    `<meta property="og:image:width" content="1536" />`,
    `<meta property="og:image:height" content="1024" />`,
    `<meta property="og:image:alt" content="${escapeHtml(page.imageAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(page.ogTitle)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(page.ogDescription)}" />`,
    `<meta name="twitter:image" content="${page.image}" />`,
    `<meta name="twitter:image:alt" content="${escapeHtml(page.imageAlt)}" />`,
  ];

  return tags.map((tag) => `    ${tag}`).join("\n");
}

function injectHead(html, page) {
  return html
    .replace(/\s*<title>.*?<\/title>/s, "")
    .replace("  </head>", `${metaTags(page)}\n  </head>`);
}

const indexHtml = await readFile(indexHtmlPath, "utf8");

for (const page of pages) {
  const outputPath = join(distDir.pathname, page.path, "index.html");
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, injectHead(indexHtml, page));
  console.log(`Generated dist/${page.path}/index.html`);
}

