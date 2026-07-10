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
    title: "Free Word Counter Online - Words, Sentences and Reading Time",
    description: "Count words, sentences, paragraphs, characters, reading time, and speaking time online for free.",
    ogTitle: "Word Counter",
    icon: "WC",
    summary: "Analyze words, sentences, reading time, and speaking time.",
    group: "text"
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
    description: "Count Unicode characters, UTF-8 bytes, UTF-16 units, lines, and paragraphs online for free.",
    ogTitle: "Character Counter",
    icon: "CH",
    summary: "Measure Unicode characters, bytes, lines, and paragraphs.",
    group: "text"
  },
  {
    slug: "qr-code-generator",
    title: "Free QR Code Generator Online - Create QR Codes",
    description: "Generate downloadable QR codes for URLs, text, email addresses, and contact details.",
    ogTitle: "QR Code Generator",
    icon: "QR",
    summary: "Generate a downloadable QR code.",
    group: "developer"
  },
  {
    slug: "password-generator",
    title: "Free Password Generator Online - Create Strong Passwords",
    description: "Generate strong random passwords online with configurable length and character sets.",
    ogTitle: "Password Generator",
    icon: "PW",
    summary: "Create strong random passwords.",
    group: "security"
  },
  {
    slug: "unix-timestamp",
    title: "Free Unix Timestamp Converter Online - Convert Epoch Time",
    description: "Convert Unix timestamps to readable dates and convert dates to Unix epoch time online for free.",
    ogTitle: "Unix Timestamp Converter",
    icon: "UT",
    summary: "Convert Unix time, milliseconds, and readable dates.",
    group: "date"
  },
  {
    slug: "encoding-converter",
    title: "Free Encoding Converter Online - Unicode, UTF-8, Base64, URL",
    description: "Encode and decode Unicode escapes, UTF-8 bytes, ASCII native text, Base64, URL, HTML entities, and hexadecimal text online for free.",
    ogTitle: "Encoding Converter",
    icon: "EC",
    summary: "Encode and decode Unicode, UTF-8, ASCII, Base64, URL, HTML, and Hex.",
    group: "developer"
  },
  {
    slug: "json-formatter",
    title: "Free JSON Formatter Online - Format, Validate and Minify JSON",
    description: "Free JSON formatter, validator, minifier, JSON Path tester, object graph viewer, and JSON to YAML or CSV converter. Beautify and inspect JSON locally in your browser.",
    ogTitle: "JSON Formatter",
    icon: "JSN",
    summary: "Format, validate, minify, query, and convert JSON locally.",
    group: "data"
  },
  {
    slug: "csv-viewer-cleaner",
    title: "Free CSV Viewer & Cleaner Online - Preview and Clean CSV",
    description: "View, clean, deduplicate, trim, and download CSV files online for free. CSV data is processed locally in your browser.",
    ogTitle: "CSV Viewer & Cleaner",
    icon: "CSV",
    summary: "Preview, trim, deduplicate, and clean CSV data locally.",
    group: "data"
  },
  {
    slug: "hash-generator",
    title: "Free Hash Generator Online - SHA-256, SHA-384 and SHA-512",
    description: "Generate SHA-1, SHA-256, SHA-384, and SHA-512 hashes from text online for free using your browser's Web Crypto API.",
    ogTitle: "Hash Generator",
    icon: "HG",
    summary: "Generate SHA hashes from text with Web Crypto.",
    group: "developer"
  },
  {
    slug: "file-checksum",
    title: "Free File Checksum Online - SHA-256 and SHA-512",
    description: "Calculate and verify SHA-1, SHA-256, SHA-384, or SHA-512 file checksums locally in your browser for free.",
    ogTitle: "File Checksum",
    icon: "FC",
    summary: "Calculate and verify SHA checksums for local files.",
    group: "developer"
  },
  {
    slug: "table-to-markdown-html",
    title: "Table to Markdown or HTML Converter Online",
    description: "Convert CSV or TSV table data to Markdown or HTML tables online for free. Preview and copy the result in your browser.",
    ogTitle: "Table to Markdown / HTML",
    icon: "TBL",
    summary: "Convert CSV or TSV data into Markdown or HTML tables.",
    group: "data"
  },
  {
    slug: "random-token-generator",
    title: "Secure Random Token Generator Online",
    description: "Generate secure random hexadecimal, alphanumeric, URL-safe, or Base64URL tokens online using browser cryptography.",
    ogTitle: "Random Token Generator",
    icon: "RT",
    summary: "Create cryptographically secure random tokens.",
    group: "security"
  },
  {
    slug: "csp-header-generator",
    title: "Content Security Policy Header Generator Online",
    description: "Build a Content-Security-Policy header with common CSP directives and copy the generated security header online for free.",
    ogTitle: "CSP Header Generator",
    icon: "CSP",
    summary: "Build a Content-Security-Policy header from common directives.",
    group: "security"
  },
  {
    slug: "time-zone-converter",
    title: "Free Time Zone Converter Online - Convert Date and Time",
    description: "Convert a date and time between IANA time zones online for free, including local time, UTC, and daylight saving offsets.",
    ogTitle: "Time Zone Converter",
    icon: "TZ",
    summary: "Convert dates and times between IANA time zones.",
    group: "date"
  },
  {
    slug: "business-days-calculator",
    title: "Free Business Days Calculator Online",
    description: "Count business days between two dates online. Exclude weekends and optional custom holidays with clear inclusive date settings.",
    ogTitle: "Business Days Calculator",
    icon: "BD",
    summary: "Count weekdays between dates and exclude custom holidays.",
    group: "date"
  },
  {
    slug: "color-converter",
    title: "HEX, RGB and HSL Color Converter Online",
    description: "Convert colors between HEX, RGB, and HSL formats online for free. Preview colors and copy CSS-ready values instantly.",
    ogTitle: "HEX / RGB / HSL Converter",
    icon: "CLR",
    summary: "Convert and preview HEX, RGB, and HSL colors.",
    group: "color"
  },
  {
    slug: "contrast-checker",
    title: "WCAG Color Contrast Checker Online",
    description: "Check foreground and background color contrast ratios against WCAG AA and AAA text thresholds online for free.",
    ogTitle: "Contrast Checker",
    icon: "CCK",
    summary: "Check color contrast against WCAG AA and AAA thresholds.",
    group: "color"
  }
];

const groupLabels = {
  image: "Image",
  file: "File",
  text: "Text",
  developer: "Developer",
  data: "Data",
  security: "Security",
  date: "Date",
  color: "Color"
};

const groupOrder = {
  image: ["image-compressor", "image-converter", "image-resizer"],
  file: ["pdf-merge", "pdf-split", "pdf-compressor"],
  text: ["word-counter", "character-counter", "case-converter"],
  developer: ["encoding-converter", "hash-generator", "file-checksum", "qr-code-generator"],
  data: ["json-formatter", "csv-viewer-cleaner", "table-to-markdown-html"],
  security: ["password-generator", "random-token-generator", "csp-header-generator"],
  date: ["unix-timestamp", "time-zone-converter", "business-days-calculator"],
  color: ["color-converter", "contrast-checker"]
};

function escapeAttr(value) {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

function staticCardsFor(page) {
  return pages
    .filter((item) => item.group === page.group)
    .sort((left, right) => groupOrder[page.group].indexOf(left.slug) - groupOrder[page.group].indexOf(right.slug))
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
