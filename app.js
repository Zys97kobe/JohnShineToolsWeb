const tools = [
  {
    id: "image-compressor",
    icon: "IC",
    category: "Image",
    path: "/image-compressor/",
    seoTitle: "Free Image Compressor Online - Compress JPG, PNG, WebP",
    seoDescription: "Compress JPG, PNG, and WebP images online for free. Reduce image file size directly in your browser.",
    title: "Image Compressor",
    summary: "Reduce JPG, PNG, or WebP file size in your browser.",
    description: "Compress large images for websites, email, and social sharing. Files are processed locally in your browser.",
    instructions: [
      "Choose a JPG, PNG, or WebP image from your device.",
      "Adjust the quality setting to balance file size and visual clarity.",
      "Preview the compressed result, then download the optimized image."
    ]
  },
  {
    id: "image-converter",
    icon: "CV",
    category: "Image",
    path: "/image-converter/",
    seoTitle: "Free Image Converter Online - Convert JPG, PNG, WebP",
    seoDescription: "Convert images between JPG, PNG, and WebP online for free. Files are processed locally in your browser.",
    title: "Image Converter",
    summary: "Convert images between JPG, PNG, and WebP.",
    description: "Change image formats without uploading your file. Choose output type and quality, then download the converted image.",
    instructions: [
      "Select the image you want to convert.",
      "Pick the output format, such as JPG, PNG, or WebP.",
      "Set the quality if the format supports it, then download the converted file."
    ]
  },
  {
    id: "pdf-merge",
    icon: "PM",
    category: "PDF",
    path: "/pdf-merge/",
    seoTitle: "Free PDF Merge Online - Combine PDF Files",
    seoDescription: "Merge multiple PDF files into one PDF online for free. Combine PDF pages in your browser.",
    title: "PDF Merge",
    summary: "Combine multiple PDFs into one file.",
    description: "Merge PDFs in the order you select them. This tool loads a browser PDF library only when needed.",
    instructions: [
      "Choose two or more PDF files from your device.",
      "Files are merged in the order selected by your browser.",
      "Click merge and download the combined PDF when processing is complete."
    ]
  },
  {
    id: "pdf-split",
    icon: "PS",
    category: "PDF",
    path: "/pdf-split/",
    seoTitle: "Free PDF Split Online - Extract PDF Pages",
    seoDescription: "Split PDF files online for free. Extract selected PDF pages or page ranges in your browser.",
    title: "PDF Split",
    summary: "Extract pages or page ranges from a PDF.",
    description: "Split a PDF into selected pages or ranges. Use examples like 1-3, 5, 8-10.",
    instructions: [
      "Choose the PDF file you want to split.",
      "Enter page numbers or ranges, for example 1-3, 5, 8-10.",
      "Generate and download a new PDF containing only the selected pages."
    ]
  },
  {
    id: "pdf-compressor",
    icon: "PC",
    category: "PDF",
    path: "/pdf-compressor/",
    seoTitle: "Free PDF Compressor Online - Optimize PDF Files",
    seoDescription: "Compress and optimize PDF files online for free. Create a cleaner PDF copy in your browser.",
    title: "PDF Compressor",
    summary: "Optimize PDF structure and metadata.",
    description: "Create a cleaner PDF copy with object streams and removed metadata. Large scanned PDFs may need server-side image recompression for bigger savings.",
    instructions: [
      "Choose a PDF file from your device.",
      "Run the compressor to rebuild and optimize the PDF structure.",
      "Download the optimized copy and compare file size and visual quality."
    ]
  },
  {
    id: "word-counter",
    icon: "WC",
    category: "Text",
    path: "/word-counter/",
    seoTitle: "Free Word Counter Online - Count Words and Characters",
    seoDescription: "Count words, characters, sentences, and reading time online for free.",
    title: "Word Counter",
    summary: "Count words, characters, sentences, and reading time.",
    description: "Paste English copy and get instant writing metrics for SEO, social posts, and documents.",
    instructions: [
      "Paste or type your text into the input box.",
      "Review the live word count, character count, sentence count, and reading time.",
      "Edit the text as needed and the metrics will update automatically."
    ]
  },
  {
    id: "case-converter",
    icon: "CC",
    category: "Text",
    path: "/case-converter/",
    seoTitle: "Free Case Converter Online - Change Text Case",
    seoDescription: "Convert text to sentence case, lowercase, uppercase, title case, camelCase, snake_case, and more.",
    title: "Case Converter",
    summary: "Convert text case for titles, slugs, and code labels.",
    description: "Switch between sentence case, lowercase, uppercase, title case, camelCase, PascalCase, snake_case, and kebab-case.",
    instructions: [
      "Paste or type the text you want to change.",
      "Select the case style that matches your writing, SEO, or coding need.",
      "Copy the converted result from the output area."
    ]
  },
  {
    id: "character-counter",
    icon: "CH",
    category: "Text",
    path: "/character-counter/",
    seoTitle: "Free Character Counter Online - Count Text Length",
    seoDescription: "Count characters, bytes, lines, and paragraphs online for free.",
    title: "Character Counter",
    summary: "Count characters, bytes, lines, and paragraphs.",
    description: "Measure text length for meta descriptions, ads, bios, forms, and messages.",
    instructions: [
      "Paste or type the text you want to measure.",
      "Check character, byte, line, and paragraph counts instantly.",
      "Use the numbers to fit platform limits for ads, bios, metadata, or forms."
    ]
  },
  {
    id: "qr-code-generator",
    icon: "QR",
    category: "QR",
    path: "/qr-code-generator/",
    seoTitle: "Free QR Code Generator Online - Create QR Codes",
    seoDescription: "Generate downloadable QR codes for URLs, text, email addresses, and contact details.",
    title: "QR Code Generator",
    summary: "Generate a downloadable QR code.",
    description: "Create a QR code for a URL, text, email address, or contact detail. Generation happens in the browser.",
    instructions: [
      "Enter the URL, text, email address, or contact detail for the QR code.",
      "Optionally upload a small logo image to place in the center.",
      "Choose the output size, generate the QR code, then download the PNG."
    ]
  },
  {
    id: "password-generator",
    icon: "PW",
    category: "Security",
    path: "/password-generator/",
    seoTitle: "Free Password Generator Online - Create Strong Passwords",
    seoDescription: "Generate strong random passwords online with configurable length and character sets.",
    title: "Password Generator",
    summary: "Create strong random passwords.",
    description: "Generate secure passwords with configurable length and character sets using the browser crypto API.",
    instructions: [
      "Set the password length and choose which character types to include.",
      "Generate a random password using your browser's crypto API.",
      "Copy the password and store it in a trusted password manager."
    ]
  }
];

const toolCards = document.querySelector("#toolCards");
const toolPanel = document.querySelector("#toolPanel");
const toolSearch = document.querySelector("#toolSearch");
const toolGroupTitle = document.querySelector("#toolGroupTitle");
const topNavItems = [...document.querySelectorAll("[data-group]")];
document.querySelector("#year").textContent = new Date().getFullYear();

const siteBaseUrl = "https://johnshinetools.com";
const homeMeta = {
  title: "JohnShine Tools - Free Online Tools for Images, PDFs, Text and Security",
  description: "Use free online tools to compress images, convert images, merge PDFs, split PDFs, count words, convert text case, generate QR codes, and create secure passwords.",
  url: `${siteBaseUrl}/`
};

const toolGroups = {
  image: {
    label: "Image",
    tools: ["image-compressor", "image-converter"]
  },
  file: {
    label: "File",
    tools: ["pdf-merge", "pdf-split", "pdf-compressor", "word-counter"]
  },
  text: {
    label: "Text",
    tools: ["case-converter", "character-counter"]
  },
  other: {
    label: "Other",
    tools: ["qr-code-generator", "password-generator"]
  }
};

function trackEvent(eventName, params = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, params);
  }
}

function trackToolSelect(tool) {
  trackEvent("tool_select", {
    tool_id: tool.id,
    tool_name: tool.title,
    tool_category: tool.category
  });
}

let activeGroup = "image";

const MB = 1024 * 1024;
const LIMITS = {
  imageFile: 20 * MB,
  qrLogoFile: 2 * MB,
  pdfFile: 50 * MB,
  pdfMergeTotal: 150 * MB
};

function bytes(size) {
  if (!Number.isFinite(size)) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  let value = size;
  let index = 0;
  while (value >= 1024 && index < units.length - 1) {
    value /= 1024;
    index += 1;
  }
  return `${value.toFixed(index ? 1 : 0)} ${units[index]}`;
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}

function validateImageFile(file) {
  if (file.size > LIMITS.imageFile) {
    return `This image is too large. Please choose a file under ${bytes(LIMITS.imageFile)}.`;
  }
  return "";
}

function validateQrLogoFile(file) {
  if (!file) return "";
  if (!file.type.startsWith("image/")) {
    return "The logo must be an image file.";
  }
  if (file.size > LIMITS.qrLogoFile) {
    return `This logo is too large. Please choose an image under ${bytes(LIMITS.qrLogoFile)}.`;
  }
  return "";
}

function validatePdfFiles(files, kind) {
  const oversized = files.find((file) => file.size > LIMITS.pdfFile);
  if (oversized) {
    return `${oversized.name} is too large. Please choose PDF files under ${bytes(LIMITS.pdfFile)} each.`;
  }

  if (kind === "merge") {
    const total = files.reduce((sum, file) => sum + file.size, 0);
    if (total > LIMITS.pdfMergeTotal) {
      return `These PDFs are too large together. Please keep the total under ${bytes(LIMITS.pdfMergeTotal)}.`;
    }
  }

  return "";
}

function initFilePicker(inputId, outputId, clearId) {
  const input = document.querySelector(`#${inputId}`);
  const output = document.querySelector(`#${outputId}`);
  const clear = clearId ? document.querySelector(`#${clearId}`) : null;
  if (!input || !output) return;

  const update = () => {
    const files = [...input.files];
    if (!files.length) {
      output.textContent = "No file selected";
    } else if (files.length === 1) {
      output.textContent = files[0].name;
    } else {
      output.textContent = `${files.length} files selected`;
    }
    if (clear) clear.hidden = !files.length;
  };

  input.addEventListener("change", update);
  if (clear) {
    clear.addEventListener("click", () => {
      input.value = "";
      update();
    });
  }
  update();
}

function groupForTool(toolId) {
  return Object.keys(toolGroups).find((group) => toolGroups[group].tools.includes(toolId)) || "image";
}

function toolsForGroup(group) {
  const ids = toolGroups[group]?.tools || toolGroups.image.tools;
  return ids.map((id) => tools.find((tool) => tool.id === id)).filter(Boolean);
}

function normalizeToolPath(pathname) {
  const trimmed = pathname.replace(/^\/+|\/+$/g, "");
  return trimmed ? `/${trimmed}/` : "/";
}

function toolFromPath(pathname) {
  const normalized = normalizeToolPath(pathname);
  return tools.find((tool) => tool.path === normalized) || null;
}

function updateMeta(tool, isToolPage) {
  const title = isToolPage ? tool.seoTitle : homeMeta.title;
  const description = isToolPage ? tool.seoDescription : homeMeta.description;
  const url = isToolPage ? `${siteBaseUrl}${tool.path}` : homeMeta.url;

  document.title = title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", isToolPage ? tool.title : "JohnShine Tools");
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
  document.querySelector('meta[property="og:url"]')?.setAttribute("content", url);
}

function setActiveGroup(group) {
  activeGroup = toolGroups[group] ? group : "image";
  if (toolGroupTitle) toolGroupTitle.textContent = toolGroups[activeGroup].label;
  topNavItems.forEach((item) => {
    item.classList.toggle("active", item.dataset.group === activeGroup);
  });
}

function renderCards(filter = "") {
  const needle = filter.trim().toLowerCase();
  const current = getTool().id;
  const visible = toolsForGroup(activeGroup).filter((tool) => {
    const text = `${tool.title} ${tool.summary} ${tool.category}`.toLowerCase();
    return text.includes(needle);
  });

  toolCards.innerHTML = visible.length ? visible.map((tool) => `
    <a class="tool-card ${tool.id === current ? "active" : ""}" href="${tool.path}" data-tool="${tool.id}">
      <span class="tool-icon">${tool.icon}</span>
      <span>
        <strong>${tool.title}</strong>
        <span>${tool.summary}</span>
      </span>
    </a>
  `).join("") : `<p class="notice">No tools match your search.</p>`;
}

function panelShell(tool, body) {
  const instructions = tool.instructions?.length ? `
    <section class="tool-instructions" aria-label="How to use ${tool.title}">
      <h3>How to use ${tool.title}</h3>
      <ol>
        ${tool.instructions.map((item) => `<li>${item}</li>`).join("")}
      </ol>
    </section>
  ` : "";

  return `
    <div class="panel-head">
      <div>
        <h2>${tool.title}</h2>
        <p>${tool.description}</p>
      </div>
      <span class="badge">${tool.category}</span>
    </div>
    ${instructions}
    ${body}
  `;
}

function getTool() {
  const pathTool = toolFromPath(window.location.pathname);
  const hashId = window.location.hash.replace("#", "");
  const hashTool = tools.find((item) => item.id === hashId);
  const tool = pathTool || hashTool || tools[0];
  setActiveGroup(groupForTool(tool.id));
  return tool;
}

function loadScript(src, globalName) {
  if (window[globalName]) return Promise.resolve(window[globalName]);
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) {
      existing.addEventListener("load", () => resolve(window[globalName]));
      existing.addEventListener("error", reject);
      return;
    }
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => {
      if (window[globalName]) {
        resolve(window[globalName]);
      } else {
        reject(new Error(`Loaded ${src}, but ${globalName} was not available`));
      }
    };
    script.onerror = () => reject(new Error(`Could not load ${src}`));
    document.head.appendChild(script);
  });
}

async function loadScriptFallback(sources, globalName) {
  let lastError;
  for (const src of sources) {
    try {
      return await loadScript(src, globalName);
    } catch (error) {
      lastError = error;
    }
  }
  throw lastError;
}

async function loadPdfLib() {
  return loadScript("https://cdn.jsdelivr.net/npm/pdf-lib@1.17.1/dist/pdf-lib.min.js", "PDFLib");
}

async function loadQrLib() {
  const qrFactory = await loadScriptFallback([
    "/assets/vendor/qrcode-generator.min.js",
    "https://cdn.jsdelivr.net/npm/qrcode-generator@1.4.4/qrcode.min.js"
  ], "qrcode");
  if (qrFactory.stringToBytesFuncs && qrFactory.stringToBytesFuncs["UTF-8"]) {
    qrFactory.stringToBytes = qrFactory.stringToBytesFuncs["UTF-8"];
  }
  return qrFactory;
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
  const r = Math.min(radius, width / 2, height / 2);
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + width - r, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + r);
  ctx.lineTo(x + width, y + height - r);
  ctx.quadraticCurveTo(x + width, y + height, x + width - r, y + height);
  ctx.lineTo(x + r, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}

async function drawLogo(ctx, canvasSize, logoFile) {
  if (!logoFile) return;

  const bitmap = await createImageBitmap(logoFile);
  const logoSize = Math.round(canvasSize * 0.2);
  const pad = Math.round(logoSize * 0.14);
  const boxSize = logoSize + pad * 2;
  const boxX = Math.round((canvasSize - boxSize) / 2);
  const boxY = Math.round((canvasSize - boxSize) / 2);
  const logoX = boxX + pad;
  const logoY = boxY + pad;

  const sourceSide = Math.min(bitmap.width, bitmap.height);
  const sourceX = Math.round((bitmap.width - sourceSide) / 2);
  const sourceY = Math.round((bitmap.height - sourceSide) / 2);

  ctx.save();
  drawRoundedRect(ctx, boxX, boxY, boxSize, boxSize, Math.round(boxSize * 0.16));
  ctx.fillStyle = "#ffffff";
  ctx.fill();

  drawRoundedRect(ctx, logoX, logoY, logoSize, logoSize, Math.round(logoSize * 0.12));
  ctx.clip();
  ctx.drawImage(bitmap, sourceX, sourceY, sourceSide, sourceSide, logoX, logoY, logoSize, logoSize);
  ctx.restore();

  if (typeof bitmap.close === "function") bitmap.close();
}

async function drawQrToCanvas(canvas, text, size, logoFile) {
  const qr = qrcode(0, logoFile ? "H" : "M");
  qr.addData(text, "Byte");
  qr.make();

  const moduleCount = qr.getModuleCount();
  const margin = 4;
  const cellSize = Math.max(1, Math.floor(size / (moduleCount + margin * 2)));
  const imageSize = cellSize * (moduleCount + margin * 2);

  canvas.width = imageSize;
  canvas.height = imageSize;

  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, imageSize, imageSize);
  ctx.fillStyle = "#111820";

  for (let row = 0; row < moduleCount; row += 1) {
    for (let col = 0; col < moduleCount; col += 1) {
      if (qr.isDark(row, col)) {
        ctx.fillRect((col + margin) * cellSize, (row + margin) * cellSize, cellSize, cellSize);
      }
    }
  }

  await drawLogo(ctx, imageSize, logoFile);
}

function imageToolBody(kind) {
  const isCompressor = kind === "compress";
  return `
    <div class="form-grid two-col">
      <div class="field">
        <label for="imageInput">Image file</label>
        <div class="file-picker">
          <input class="native-file" id="imageInput" type="file" accept="image/png,image/jpeg,image/webp">
          <label class="file-button" for="imageInput">Choose File</label>
          <button class="file-clear" id="imageFileClear" type="button" hidden>Clear</button>
          <span class="file-name" id="imageFileName">No file selected</span>
        </div>
        <small>JPG, PNG, and WebP are supported. Maximum file size: ${bytes(LIMITS.imageFile)}.</small>
      </div>
      <div class="field">
        <label for="imageFormat">Output format</label>
        <select id="imageFormat">
          <option value="image/jpeg">JPG</option>
          <option value="image/webp">WebP</option>
          <option value="image/png">PNG</option>
        </select>
      </div>
      <div class="field">
        <label for="imageQuality">Quality: <span id="qualityValue">82</span>%</label>
        <input id="imageQuality" type="range" min="20" max="100" value="82">
      </div>
      <div class="field">
        <label for="maxWidth">Max width</label>
        <input id="maxWidth" type="number" min="100" max="10000" value="${isCompressor ? "1920" : "3000"}">
      </div>
    </div>
    <div class="actions">
      <button class="primary" id="processImage" type="button">${isCompressor ? "Compress Image" : "Convert Image"}</button>
    </div>
    <div class="result" id="imageResult"></div>
  `;
}

function initImageTool(kind) {
  const input = document.querySelector("#imageInput");
  const format = document.querySelector("#imageFormat");
  const quality = document.querySelector("#imageQuality");
  const qualityValue = document.querySelector("#qualityValue");
  const maxWidth = document.querySelector("#maxWidth");
  const result = document.querySelector("#imageResult");
  initFilePicker("imageInput", "imageFileName", "imageFileClear");
  quality.addEventListener("input", () => {
    qualityValue.textContent = quality.value;
  });

  document.querySelector("#processImage").addEventListener("click", async () => {
    const file = input.files[0];
    if (!file) {
      result.innerHTML = `<p class="notice">Choose an image first.</p>`;
      return;
    }

    const fileError = validateImageFile(file);
    if (fileError) {
      result.innerHTML = `<p class="notice">${fileError}</p>`;
      return;
    }

    const bitmap = await createImageBitmap(file);
    const targetWidth = Math.min(bitmap.width, Number(maxWidth.value) || bitmap.width);
    const scale = targetWidth / bitmap.width;
    const targetHeight = Math.round(bitmap.height * scale);
    const canvas = document.createElement("canvas");
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(bitmap, 0, 0, targetWidth, targetHeight);

    canvas.toBlob((blob) => {
      if (!blob) {
        result.innerHTML = `<p class="notice">This browser could not process the selected image.</p>`;
        return;
      }
      const ext = format.value.split("/")[1].replace("jpeg", "jpg");
      const name = file.name.replace(/\.[^.]+$/, `-${kind === "compress" ? "compressed" : "converted"}.${ext}`);
      const previewUrl = URL.createObjectURL(blob);
      result.innerHTML = `
        <div class="result-grid">
          <div class="metric"><span>Original</span><strong>${bytes(file.size)}</strong></div>
          <div class="metric"><span>Output</span><strong>${bytes(blob.size)}</strong></div>
          <div class="metric"><span>Dimensions</span><strong>${targetWidth}×${targetHeight}</strong></div>
        </div>
        <p><img class="preview-image" src="${previewUrl}" alt="Processed image preview"></p>
        <button class="primary" id="downloadImage" type="button">Download Image</button>
      `;
      document.querySelector("#downloadImage").addEventListener("click", () => downloadBlob(blob, name));
    }, format.value, Number(quality.value) / 100);
  });
}

function pdfInputBody(kind) {
  const multiple = kind === "merge" ? "multiple" : "";
  const extra = kind === "split" ? `
    <div class="field">
      <label for="pdfRanges">Pages or ranges</label>
      <input id="pdfRanges" type="text" value="1" placeholder="1-3, 5, 8-10">
      <small>Use commas to separate pages and ranges. Page numbers start at 1.</small>
    </div>
  ` : "";
  return `
    <div class="form-grid">
      <div class="field">
        <label for="pdfInput">PDF file${kind === "merge" ? "s" : ""}</label>
        <div class="file-picker">
          <input class="native-file" id="pdfInput" type="file" accept="application/pdf" ${multiple}>
          <label class="file-button" for="pdfInput">Choose File${kind === "merge" ? "s" : ""}</label>
          <button class="file-clear" id="pdfFileClear" type="button" hidden>Clear</button>
          <span class="file-name" id="pdfFileName">No file selected</span>
        </div>
        <small>Maximum file size: ${bytes(LIMITS.pdfFile)} each${kind === "merge" ? `, ${bytes(LIMITS.pdfMergeTotal)} total` : ""}.</small>
      </div>
      ${extra}
    </div>
    <div class="actions">
      <button class="primary" id="processPdf" type="button">${kind === "merge" ? "Merge PDFs" : kind === "split" ? "Split PDF" : "Compress PDF"}</button>
    </div>
    <div class="result" id="pdfResult"></div>
  `;
}

function parseRanges(input, pageCount) {
  const pages = new Set();
  input.split(",").map((part) => part.trim()).filter(Boolean).forEach((part) => {
    const match = part.match(/^(\d+)(?:-(\d+))?$/);
    if (!match) return;
    const start = Math.max(1, Number(match[1]));
    const end = Math.min(pageCount, Number(match[2] || match[1]));
    for (let page = start; page <= end; page += 1) pages.add(page - 1);
  });
  return [...pages].sort((a, b) => a - b);
}

function initPdfTool(kind) {
  const result = document.querySelector("#pdfResult");
  initFilePicker("pdfInput", "pdfFileName", "pdfFileClear");
  document.querySelector("#processPdf").addEventListener("click", async () => {
    const files = [...document.querySelector("#pdfInput").files];
    if (!files.length) {
      result.innerHTML = `<p class="notice">Choose ${kind === "merge" ? "PDF files" : "a PDF file"} first.</p>`;
      return;
    }

    const fileError = validatePdfFiles(files, kind);
    if (fileError) {
      result.innerHTML = `<p class="notice">${fileError}</p>`;
      return;
    }

    result.innerHTML = `<p class="notice">Loading PDF tools...</p>`;

    try {
      const { PDFDocument } = await loadPdfLib();
      if (kind === "merge") {
        const output = await PDFDocument.create();
        for (const file of files) {
          const source = await PDFDocument.load(await file.arrayBuffer());
          const pages = await output.copyPages(source, source.getPageIndices());
          pages.forEach((page) => output.addPage(page));
        }
        const bytesOut = await output.save({ useObjectStreams: true });
        const blob = new Blob([bytesOut], { type: "application/pdf" });
        result.innerHTML = `<p class="notice">Merged ${files.length} PDFs into ${bytes(blob.size)}.</p><button class="primary" id="downloadPdf" type="button">Download PDF</button>`;
        document.querySelector("#downloadPdf").addEventListener("click", () => downloadBlob(blob, "merged.pdf"));
        return;
      }

      const sourceFile = files[0];
      const source = await PDFDocument.load(await sourceFile.arrayBuffer());

      if (kind === "split") {
        const ranges = parseRanges(document.querySelector("#pdfRanges").value, source.getPageCount());
        if (!ranges.length) {
          result.innerHTML = `<p class="notice">Enter at least one valid page or range.</p>`;
          return;
        }
        const output = await PDFDocument.create();
        const pages = await output.copyPages(source, ranges);
        pages.forEach((page) => output.addPage(page));
        const bytesOut = await output.save({ useObjectStreams: true });
        const blob = new Blob([bytesOut], { type: "application/pdf" });
        result.innerHTML = `<p class="notice">Extracted ${ranges.length} page${ranges.length === 1 ? "" : "s"} into ${bytes(blob.size)}.</p><button class="primary" id="downloadPdf" type="button">Download Split PDF</button>`;
        document.querySelector("#downloadPdf").addEventListener("click", () => downloadBlob(blob, "split.pdf"));
        return;
      }

      source.setTitle("");
      source.setAuthor("");
      source.setSubject("");
      source.setKeywords([]);
      source.setProducer("JohnShine Tools");
      source.setCreator("JohnShine Tools");
      const bytesOut = await source.save({ useObjectStreams: true, addDefaultPage: false });
      const blob = new Blob([bytesOut], { type: "application/pdf" });
      result.innerHTML = `
        <div class="result-grid">
          <div class="metric"><span>Original</span><strong>${bytes(sourceFile.size)}</strong></div>
          <div class="metric"><span>Output</span><strong>${bytes(blob.size)}</strong></div>
        </div>
        <p class="notice">This browser-safe optimization does not recompress embedded scanned images.</p>
        <button class="primary" id="downloadPdf" type="button">Download Optimized PDF</button>
      `;
      document.querySelector("#downloadPdf").addEventListener("click", () => downloadBlob(blob, "optimized.pdf"));
    } catch (error) {
      result.innerHTML = `<p class="notice">PDF processing failed: ${error.message}</p>`;
    }
  });
}

function textStats(text) {
  const words = (text.trim().match(/\b[\w'-]+\b/g) || []).length;
  const chars = text.length;
  const charsNoSpaces = text.replace(/\s/g, "").length;
  const sentences = (text.match(/[.!?]+(?:\s|$)/g) || []).length;
  const lines = text ? text.split(/\r\n|\r|\n/).length : 0;
  const paragraphs = text.trim() ? text.trim().split(/\n\s*\n/).length : 0;
  return { words, chars, charsNoSpaces, sentences, lines, paragraphs, minutes: Math.max(1, Math.ceil(words / 225)) };
}

function initCounter(type) {
  const isWord = type === "word";
  toolPanel.querySelector("#textInput").addEventListener("input", (event) => {
    const stats = textStats(event.target.value);
    document.querySelector("#textResult").innerHTML = isWord ? `
      <div class="result-grid">
        <div class="metric"><span>Words</span><strong>${stats.words}</strong></div>
        <div class="metric"><span>Characters</span><strong>${stats.chars}</strong></div>
        <div class="metric"><span>Sentences</span><strong>${stats.sentences}</strong></div>
        <div class="metric"><span>Reading Time</span><strong>${stats.minutes} min</strong></div>
      </div>
    ` : `
      <div class="result-grid">
        <div class="metric"><span>Characters</span><strong>${stats.chars}</strong></div>
        <div class="metric"><span>No Spaces</span><strong>${stats.charsNoSpaces}</strong></div>
        <div class="metric"><span>Lines</span><strong>${stats.lines}</strong></div>
        <div class="metric"><span>Paragraphs</span><strong>${stats.paragraphs}</strong></div>
      </div>
    `;
  });
}

function textAreaBody(placeholder = "Paste or type text here...") {
  return `
    <div class="field">
      <label for="textInput">Text</label>
      <textarea id="textInput" placeholder="${placeholder}"></textarea>
    </div>
    <div class="result" id="textResult"></div>
  `;
}

function toTitleCase(text) {
  return text.toLowerCase().replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function wordsForCase(text) {
  return text.trim().split(/[^a-zA-Z0-9]+/).filter(Boolean);
}

function initCaseConverter() {
  const input = document.querySelector("#caseInput");
  const output = document.querySelector("#caseOutput");
  document.querySelector("#caseMode").addEventListener("change", update);
  input.addEventListener("input", update);
  document.querySelector("#copyCase").addEventListener("click", () => navigator.clipboard.writeText(output.value));

  function update() {
    const mode = document.querySelector("#caseMode").value;
    const text = input.value;
    const words = wordsForCase(text);
    const capitalized = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    const map = {
      sentence: text.toLowerCase().replace(/(^\s*\w|[.!?]\s+\w)/g, (match) => match.toUpperCase()),
      lower: text.toLowerCase(),
      upper: text.toUpperCase(),
      title: toTitleCase(text),
      camel: words.map((word, index) => index ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() : word.toLowerCase()).join(""),
      pascal: capitalized.join(""),
      snake: words.map((word) => word.toLowerCase()).join("_"),
      kebab: words.map((word) => word.toLowerCase()).join("-")
    };
    output.value = map[mode] || text;
  }
}

function caseBody() {
  return `
    <div class="form-grid two-col">
      <div class="field">
        <label for="caseInput">Input</label>
        <textarea id="caseInput" placeholder="Paste text to convert..."></textarea>
      </div>
      <div class="field">
        <label for="caseOutput">Output</label>
        <textarea id="caseOutput" readonly></textarea>
      </div>
      <div class="field">
        <label for="caseMode">Conversion</label>
        <select id="caseMode">
          <option value="sentence">Sentence case</option>
          <option value="lower">lowercase</option>
          <option value="upper">UPPERCASE</option>
          <option value="title">Title Case</option>
          <option value="camel">camelCase</option>
          <option value="pascal">PascalCase</option>
          <option value="snake">snake_case</option>
          <option value="kebab">kebab-case</option>
        </select>
      </div>
    </div>
    <div class="actions">
      <button class="secondary" id="copyCase" type="button">Copy Output</button>
    </div>
  `;
}

function qrBody() {
  return `
    <div class="form-grid two-col">
      <div class="field">
        <label for="qrText">QR content</label>
        <textarea id="qrText" placeholder="https://johnshinetools.com or 中文内容"></textarea>
      </div>
      <div class="field">
        <label for="qrSize">Size</label>
        <input id="qrSize" type="number" min="128" max="1024" value="512">
        <small>PNG download size in pixels.</small>
      </div>
      <div class="field">
        <label for="qrLogoInput">Logo image</label>
        <div class="file-picker">
          <input class="native-file" id="qrLogoInput" type="file" accept="image/png,image/jpeg,image/webp">
          <label class="file-button" for="qrLogoInput">Choose File</label>
          <button class="file-clear" id="qrLogoClear" type="button" hidden>Clear</button>
          <span class="file-name" id="qrLogoFileName">No file selected</span>
        </div>
        <small>Optional. Use a square PNG or JPG under ${bytes(LIMITS.qrLogoFile)} for best scanning.</small>
      </div>
    </div>
    <div class="actions">
      <button class="primary" id="makeQr" type="button">Generate QR Code</button>
    </div>
    <div class="result qr-output" id="qrResult"></div>
  `;
}

function initQr() {
  initFilePicker("qrLogoInput", "qrLogoFileName", "qrLogoClear");

  document.querySelector("#makeQr").addEventListener("click", async () => {
    const text = document.querySelector("#qrText").value.trim();
    const sizeValue = Number(document.querySelector("#qrSize").value) || 512;
    const size = Math.max(128, Math.min(1024, sizeValue));
    const logoFile = document.querySelector("#qrLogoInput").files[0] || null;
    const result = document.querySelector("#qrResult");
    if (!text) {
      result.innerHTML = `<p class="notice">Enter text or a URL first.</p>`;
      return;
    }

    const logoError = validateQrLogoFile(logoFile);
    if (logoError) {
      result.innerHTML = `<p class="notice">${logoError}</p>`;
      return;
    }

    result.innerHTML = `<p class="notice">Generating QR code...</p>`;
    try {
      await loadQrLib();
      const canvas = document.createElement("canvas");
      await drawQrToCanvas(canvas, text, size, logoFile);
      result.innerHTML = "";
      result.appendChild(canvas);
      const actions = document.createElement("div");
      actions.className = "actions";
      actions.innerHTML = `<button class="primary" id="downloadQr" type="button">Download PNG</button>`;
      result.appendChild(actions);
      document.querySelector("#downloadQr").addEventListener("click", () => {
        canvas.toBlob((blob) => downloadBlob(blob, "qr-code.png"), "image/png");
      });
    } catch (error) {
      result.innerHTML = `<p class="notice">QR generation failed: ${error.message}</p>`;
    }
  });
}

function passwordBody() {
  return `
    <div class="form-grid two-col">
      <div class="field">
        <label for="passwordLength">Length</label>
        <input id="passwordLength" type="number" min="8" max="128" value="20">
      </div>
      <div class="field">
        <label for="passwordSets">Character sets</label>
        <select id="passwordSets">
          <option value="all">Uppercase, lowercase, numbers, symbols</option>
          <option value="no-symbols">Uppercase, lowercase, numbers</option>
          <option value="readable">Readable, no ambiguous characters</option>
        </select>
      </div>
    </div>
    <div class="actions">
      <button class="primary" id="makePassword" type="button">Generate Password</button>
    </div>
    <div class="result" id="passwordResult">
      <div class="password-output">
        <input id="passwordOutput" type="text" readonly aria-label="Generated password">
        <button class="secondary" id="copyPassword" type="button">Copy</button>
      </div>
    </div>
  `;
}

function initPassword() {
  const output = document.querySelector("#passwordOutput");
  const generate = () => {
    const length = Math.max(8, Math.min(128, Number(document.querySelector("#passwordLength").value) || 20));
    const mode = document.querySelector("#passwordSets").value;
    const sets = {
      all: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{};:,.?",
      "no-symbols": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      readable: "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789"
    };
    const chars = sets[mode];
    const random = new Uint32Array(length);
    crypto.getRandomValues(random);
    output.value = [...random].map((value) => chars[value % chars.length]).join("");
  };
  document.querySelector("#makePassword").addEventListener("click", generate);
  document.querySelector("#copyPassword").addEventListener("click", () => navigator.clipboard.writeText(output.value));
  generate();
}

function renderTool() {
  const tool = getTool();
  updateMeta(tool, Boolean(toolFromPath(window.location.pathname)));
  renderCards(toolSearch.value);

  const bodies = {
    "image-compressor": imageToolBody("compress"),
    "image-converter": imageToolBody("convert"),
    "pdf-merge": pdfInputBody("merge"),
    "pdf-split": pdfInputBody("split"),
    "pdf-compressor": pdfInputBody("compress"),
    "word-counter": textAreaBody("Paste your article, page copy, or document text..."),
    "case-converter": caseBody(),
    "character-counter": textAreaBody("Paste text to measure character length..."),
    "qr-code-generator": qrBody(),
    "password-generator": passwordBody()
  };

  toolPanel.innerHTML = panelShell(tool, bodies[tool.id]);

  if (tool.id === "image-compressor") initImageTool("compress");
  if (tool.id === "image-converter") initImageTool("convert");
  if (tool.id === "pdf-merge") initPdfTool("merge");
  if (tool.id === "pdf-split") initPdfTool("split");
  if (tool.id === "pdf-compressor") initPdfTool("compress");
  if (tool.id === "word-counter") initCounter("word");
  if (tool.id === "character-counter") initCounter("character");
  if (tool.id === "case-converter") initCaseConverter();
  if (tool.id === "qr-code-generator") initQr();
  if (tool.id === "password-generator") initPassword();
}

toolCards.addEventListener("click", (event) => {
  const card = event.target.closest("[data-tool]");
  if (!card) return;
  const tool = tools.find((item) => item.id === card.dataset.tool);
  if (!tool) return;
  event.preventDefault();
  history.pushState({}, "", tool.path);
  trackToolSelect(tool);
  renderTool();
});

topNavItems.forEach((item) => {
  item.addEventListener("click", (event) => {
    const group = item.dataset.group;
    const firstTool = toolsForGroup(group)[0];
    if (!firstTool) return;
    event.preventDefault();
    setActiveGroup(group);
    toolSearch.value = "";
    history.pushState({}, "", firstTool.path);
    trackToolSelect(firstTool);
    renderTool();
  });
});

toolSearch.addEventListener("input", () => renderCards(toolSearch.value));
window.addEventListener("popstate", renderTool);
window.addEventListener("hashchange", () => {
  const tool = getTool();
  history.replaceState({}, "", tool.path);
  renderTool();
});
renderTool();
