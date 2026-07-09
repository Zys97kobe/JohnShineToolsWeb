import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const template = readFileSync(join(root, "index.html"), "utf8");
const siteBaseUrl = "https://johnshinetools.com";

const pages = [
  {
    slug: "image-compressor",
    title: "Free Image Compressor Online - Compress JPG, PNG, WebP",
    description: "Compress JPG, PNG, and WebP images online for free. Reduce image file size directly in your browser.",
    ogTitle: "Image Compressor",
    icon: "IC",
    summary: "Reduce JPG, PNG, or WebP file size in your browser.",
    group: "image"
  },
  {
    slug: "image-converter",
    title: "Free Image Converter Online - Convert JPG, PNG, WebP",
    description: "Convert images between JPG, PNG, and WebP online for free. Files are processed locally in your browser.",
    ogTitle: "Image Converter",
    icon: "CV",
    summary: "Convert images between JPG, PNG, and WebP.",
    group: "image"
  },
  {
    slug: "image-resizer",
    title: "Free Image Resizer Online - Resize JPG, PNG and WebP",
    description: "Resize JPG, PNG, and WebP images online for free. Change image width and height directly in your browser.",
    ogTitle: "Image Resizer",
    icon: "RS",
    summary: "Resize JPG, PNG, and WebP images by width, height, or percentage.",
    group: "image"
  },
  {
    slug: "pdf-merge",
    title: "Free PDF Merge Online - Combine PDF Files",
    description: "Merge multiple PDF files into one PDF online for free. Combine PDF pages in your browser.",
    ogTitle: "PDF Merge",
    icon: "PM",
    summary: "Combine multiple PDFs into one file.",
    group: "file"
  },
  {
    slug: "pdf-split",
    title: "Free PDF Split Online - Extract PDF Pages",
    description: "Split PDF files online for free. Extract selected PDF pages or page ranges in your browser.",
    ogTitle: "PDF Split",
    icon: "PS",
    summary: "Extract pages or page ranges from a PDF.",
    group: "file"
  },
  {
    slug: "pdf-compressor",
    title: "Free PDF Compressor Online - Optimize PDF Files",
    description: "Compress and optimize PDF files online for free. Create a cleaner PDF copy in your browser.",
    ogTitle: "PDF Compressor",
    icon: "PC",
    summary: "Optimize PDF structure and metadata.",
    group: "file"
  },
  {
    slug: "word-counter",
    title: "Free Word Counter Online - Count Words and Characters",
    description: "Count words, characters, sentences, and reading time online for free.",
    ogTitle: "Word Counter",
    icon: "WC",
    summary: "Count words, characters, sentences, and reading time.",
    group: "file"
  },
  {
    slug: "case-converter",
    title: "Free Case Converter Online - Change Text Case",
    description: "Convert text to sentence case, lowercase, uppercase, title case, camelCase, snake_case, and more.",
    ogTitle: "Case Converter",
    icon: "CC",
    summary: "Convert text case for titles, slugs, and code labels.",
    group: "text"
  },
  {
    slug: "character-counter",
    title: "Free Character Counter Online - Count Text Length",
    description: "Count characters, bytes, lines, and paragraphs online for free.",
    ogTitle: "Character Counter",
    icon: "CH",
    summary: "Count characters, bytes, lines, and paragraphs.",
    group: "text"
  },
  {
    slug: "qr-code-generator",
    title: "Free QR Code Generator Online - Create QR Codes",
    description: "Generate downloadable QR codes for URLs, text, email addresses, and contact details.",
    ogTitle: "QR Code Generator",
    icon: "QR",
    summary: "Generate a downloadable QR code.",
    group: "other"
  },
  {
    slug: "password-generator",
    title: "Free Password Generator Online - Create Strong Passwords",
    description: "Generate strong random passwords online with configurable length and character sets.",
    ogTitle: "Password Generator",
    icon: "PW",
    summary: "Create strong random passwords.",
    group: "other"
  },
  {
    slug: "unix-timestamp",
    title: "Free Unix Timestamp Converter Online - Convert Epoch Time",
    description: "Convert Unix timestamps to readable dates and convert dates to Unix epoch time online for free.",
    ogTitle: "Unix Timestamp Converter",
    icon: "UT",
    summary: "Convert Unix time, milliseconds, and readable dates.",
    group: "network"
  },
  {
    slug: "encoding-converter",
    title: "Free Encoding Converter Online - Unicode, UTF-8, Base64, URL",
    description: "Encode and decode Unicode escapes, UTF-8 bytes, ASCII native text, Base64, URL, HTML entities, and hexadecimal text online for free.",
    ogTitle: "Encoding Converter",
    icon: "EC",
    summary: "Encode and decode Unicode, UTF-8, ASCII, Base64, URL, HTML, and Hex.",
    group: "network"
  },
  {
    slug: "json-formatter",
    title: "Free JSON Formatter Online - Format, Validate and Minify JSON",
    description: "Free JSON formatter, validator, minifier, JSON Path tester, object graph viewer, and JSON to YAML or CSV converter. Beautify and inspect JSON locally in your browser.",
    ogTitle: "JSON Formatter",
    icon: "JSN",
    summary: "Format, validate, minify, query, and convert JSON locally.",
    group: "network"
  }
];

const groupLabels = {
  image: "Image",
  file: "File",
  text: "Text",
  network: "Network",
  other: "Other"
};

function escapeAttr(value) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function staticCardsFor(page) {
  return pages
    .filter((item) => item.group === page.group)
    .map((item) => `            <a class="tool-card ${item.slug === page.slug ? "active" : ""}" href="/${item.slug}/" data-tool="${item.slug}">
              <span class="tool-icon">${item.icon}</span>
              <span>
                <strong>${item.ogTitle}</strong>
                <span>${item.summary}</span>
              </span>
            </a>`)
    .join("\n");
}

for (const page of pages) {
  const url = `${siteBaseUrl}/${page.slug}/`;
  const html = template
    .replace(/<title>.*?<\/title>/, `<title>${page.title}</title>`)
    .replace(/<meta name="description" content=".*?">/, `<meta name="description" content="${escapeAttr(page.description)}">`)
    .replace(/<link rel="canonical" href=".*?">/, `<link rel="canonical" href="${url}">`)
    .replace(/<meta property="og:title" content=".*?">/, `<meta property="og:title" content="${escapeAttr(page.ogTitle)}">`)
    .replace(/<meta property="og:description" content=".*?">/, `<meta property="og:description" content="${escapeAttr(page.description)}">`)
    .replace(/<meta property="og:url" content=".*?">/, `<meta property="og:url" content="${url}">`)
    .replace(/<span id="toolGroupTitle">.*?<\/span>/, `<span id="toolGroupTitle">${groupLabels[page.group]}</span>`)
    .replace(/<div id="toolCards" class="tool-cards">[\s\S]*?<\/div>\s*<\/aside>/, `<div id="toolCards" class="tool-cards">\n${staticCardsFor(page)}\n          </div>\n        </aside>`);

  const outputDir = join(root, page.slug);
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "index.html"), html);
}

console.log(`Built ${pages.length} tool pages.`);
