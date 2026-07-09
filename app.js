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
    id: "image-resizer",
    icon: "RS",
    category: "Image",
    path: "/image-resizer/",
    seoTitle: "Free Image Resizer Online - Resize JPG, PNG and WebP",
    seoDescription: "Resize JPG, PNG, and WebP images online for free. Change image width and height directly in your browser.",
    title: "Image Resizer",
    summary: "Resize JPG, PNG, and WebP images by width, height, or percentage.",
    description: "Change image dimensions directly in your browser. Lock the aspect ratio, scale by percentage, preview the result, and download the resized image.",
    instructions: [
      "Upload a JPG, PNG, or WebP image up to 20 MB.",
      "Enter a target width and height, or scale the image by percentage.",
      "Choose the output format and quality, preview the resized image, then download it."
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
  },
  {
    id: "unix-timestamp",
    icon: "UT",
    category: "Network",
    path: "/unix-timestamp/",
    seoTitle: "Free Unix Timestamp Converter Online - Convert Epoch Time",
    seoDescription: "Convert Unix timestamps to readable dates and convert dates to Unix epoch time online for free.",
    title: "Unix Timestamp Converter",
    summary: "Convert Unix time, milliseconds, and readable dates.",
    description: "Convert between Unix timestamps, milliseconds, ISO dates, and local time directly in your browser.",
    instructions: [
      "Check the current Unix timestamp in seconds and milliseconds.",
      "Enter a Unix timestamp to convert it into local and UTC date formats.",
      "Enter a date and time to convert it back into Unix epoch time."
    ]
  },
  {
    id: "encoding-converter",
    icon: "EC",
    category: "Network",
    path: "/encoding-converter/",
    seoTitle: "Free Encoding Converter Online - Unicode, UTF-8, Base64, URL",
    seoDescription: "Encode and decode Unicode escapes, UTF-8 bytes, ASCII native text, Base64, URL, HTML entities, and hexadecimal text online for free.",
    title: "Encoding Converter",
    summary: "Encode and decode Unicode, UTF-8, ASCII, Base64, URL, HTML, and Hex.",
    description: "Convert common web encodings for URLs, APIs, Unicode text, Base64, HTML, and debugging. Processing happens in your browser.",
    instructions: [
      "Paste the text you want to encode or decode.",
      "Choose Unicode, UTF-8, ASCII/NATIVE, Base64, URL, HTML entities, or Hex conversion.",
      "Run the conversion and copy the output for your request, page, or debugging task."
    ]
  },
  {
    id: "json-formatter",
    icon: "JSN",
    category: "Network",
    path: "/json-formatter/",
    seoTitle: "Free JSON Formatter Online - Format, Validate and Minify JSON",
    seoDescription: "Free JSON formatter, validator, minifier, JSON Path tester, object graph viewer, and JSON to YAML or CSV converter. Beautify and inspect JSON locally in your browser.",
    title: "JSON Formatter",
    summary: "Format, validate, minify, query, and convert JSON locally.",
    description: "Format, validate, minify, inspect JSON as an object graph, run JSON Path queries, and convert JSON to YAML or CSV directly in your browser. Data is not uploaded to a server.",
    instructions: [
      "Paste JSON into the input box.",
      "Format, minify, validate, query with JSON Path, or convert JSON to YAML or CSV.",
      "Review the object tree, copy the result, or download the output as a .json file."
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
  title: "JohnShine Tools - Free Online Tools for Images, PDFs, Text, Network and Security",
  description: "Use free online tools to compress images, convert images, merge PDFs, split PDFs, count words, convert text case, generate QR codes, create passwords, convert timestamps, format JSON, or convert encodings.",
  url: `${siteBaseUrl}/`
};

const toolGroups = {
  image: {
    label: "Image",
    tools: ["image-compressor", "image-converter", "image-resizer"]
  },
  file: {
    label: "File",
    tools: ["pdf-merge", "pdf-split", "pdf-compressor", "word-counter"]
  },
  text: {
    label: "Text",
    tools: ["case-converter", "character-counter"]
  },
  network: {
    label: "Network",
    tools: ["unix-timestamp", "encoding-converter", "json-formatter"]
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
let timestampTimer = null;

const MB = 1024 * 1024;
const LIMITS = {
  imageFile: 20 * MB,
  imageMaxDimension: 10000,
  imageMaxPixels: 10000 * 10000,
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

function validateImageDimensions(width, height) {
  if (!Number.isFinite(width) || !Number.isFinite(height) || width <= 0 || height <= 0) {
    return "Width and height must be greater than 0.";
  }
  if (width > LIMITS.imageMaxDimension || height > LIMITS.imageMaxDimension) {
    return `Width and height must be ${LIMITS.imageMaxDimension} px or less.`;
  }
  if (width * height > LIMITS.imageMaxPixels) {
    return `Image dimensions are too large. Keep images under ${LIMITS.imageMaxDimension} × ${LIMITS.imageMaxDimension}.`;
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

function imageResizerBody() {
  return `
    <div class="form-grid two-col">
      <div class="field">
        <label for="resizeImageInput">Image file</label>
        <div class="file-picker">
          <input class="native-file" id="resizeImageInput" type="file" accept="image/png,image/jpeg,image/webp">
          <label class="file-button" for="resizeImageInput">Choose File</label>
          <button class="file-clear" id="resizeImageFileClear" type="button" hidden>Clear</button>
          <span class="file-name" id="resizeImageFileName">No file selected</span>
        </div>
        <small>JPG, PNG, and WebP are supported. Maximum file size: ${bytes(LIMITS.imageFile)}.</small>
      </div>
      <div class="field">
        <label>Original</label>
        <div class="result-grid compact-metrics">
          <div class="metric"><span>Width</span><strong id="resizeOriginalWidth">-</strong></div>
          <div class="metric"><span>Height</span><strong id="resizeOriginalHeight">-</strong></div>
          <div class="metric"><span>Size</span><strong id="resizeOriginalSize">-</strong></div>
        </div>
      </div>
      <div class="field">
        <label for="resizeWidth">Target width</label>
        <input id="resizeWidth" type="number" min="1" max="${LIMITS.imageMaxDimension}" placeholder="1200">
      </div>
      <div class="field">
        <label for="resizeHeight">Target height</label>
        <input id="resizeHeight" type="number" min="1" max="${LIMITS.imageMaxDimension}" placeholder="900">
      </div>
      <div class="field">
        <label for="resizePercent">Scale percentage</label>
        <input id="resizePercent" type="number" min="1" max="500" value="100">
        <small>Use 50 for half size, 200 for double size.</small>
      </div>
      <div class="field">
        <label for="resizeFormat">Output format</label>
        <select id="resizeFormat">
          <option value="image/jpeg">JPG</option>
          <option value="image/png">PNG</option>
          <option value="image/webp">WebP</option>
        </select>
      </div>
      <div class="field">
        <label for="resizeQuality">Quality: <span id="resizeQualityValue">82</span>%</label>
        <input id="resizeQuality" type="range" min="20" max="100" value="82">
        <small>Quality applies to JPG and WebP output.</small>
      </div>
      <label class="inline-check">
        <input id="resizeLockRatio" type="checkbox" checked>
        <span>Lock aspect ratio</span>
      </label>
    </div>
    <div class="actions">
      <button class="primary" id="resizeImage" type="button">Resize Image</button>
    </div>
    <div class="result" id="resizeResult"></div>
  `;
}

function initImageResizer() {
  const input = document.querySelector("#resizeImageInput");
  const widthInput = document.querySelector("#resizeWidth");
  const heightInput = document.querySelector("#resizeHeight");
  const percentInput = document.querySelector("#resizePercent");
  const formatInput = document.querySelector("#resizeFormat");
  const qualityInput = document.querySelector("#resizeQuality");
  const qualityValue = document.querySelector("#resizeQualityValue");
  const lockRatio = document.querySelector("#resizeLockRatio");
  const result = document.querySelector("#resizeResult");
  const originalWidth = document.querySelector("#resizeOriginalWidth");
  const originalHeight = document.querySelector("#resizeOriginalHeight");
  const originalSize = document.querySelector("#resizeOriginalSize");
  let sourceBitmap = null;
  let sourceFile = null;
  let aspectRatio = 1;

  initFilePicker("resizeImageInput", "resizeImageFileName", "resizeImageFileClear");

  const resetOriginal = () => {
    originalWidth.textContent = "-";
    originalHeight.textContent = "-";
    originalSize.textContent = "-";
    widthInput.value = "";
    heightInput.value = "";
    percentInput.value = "100";
    result.innerHTML = "";
  };

  const setSizeFromPercent = () => {
    if (!sourceBitmap) return;
    const percent = Number(percentInput.value) || 100;
    const nextWidth = Math.max(1, Math.round(sourceBitmap.width * percent / 100));
    const nextHeight = Math.max(1, Math.round(sourceBitmap.height * percent / 100));
    widthInput.value = nextWidth;
    heightInput.value = nextHeight;
  };

  qualityInput.addEventListener("input", () => {
    qualityValue.textContent = qualityInput.value;
  });

  input.addEventListener("change", async () => {
    sourceFile = input.files[0] || null;
    if (!sourceFile) {
      sourceBitmap = null;
      resetOriginal();
      return;
    }

    const fileError = validateImageFile(sourceFile);
    if (fileError) {
      sourceBitmap = null;
      resetOriginal();
      result.innerHTML = `<p class="notice">${fileError}</p>`;
      return;
    }

    let bitmap;
    try {
      bitmap = await createImageBitmap(sourceFile);
    } catch (error) {
      sourceBitmap = null;
      resetOriginal();
      result.innerHTML = `<p class="notice">This browser could not read the selected image.</p>`;
      return;
    }
    const dimensionError = validateImageDimensions(bitmap.width, bitmap.height);
    if (dimensionError) {
      sourceBitmap = null;
      resetOriginal();
      result.innerHTML = `<p class="notice">${dimensionError}</p>`;
      return;
    }
    sourceBitmap = bitmap;
    aspectRatio = sourceBitmap.width / sourceBitmap.height;
    originalWidth.textContent = sourceBitmap.width;
    originalHeight.textContent = sourceBitmap.height;
    originalSize.textContent = bytes(sourceFile.size);
    percentInput.value = "100";
    widthInput.value = sourceBitmap.width;
    heightInput.value = sourceBitmap.height;
  });

  widthInput.addEventListener("input", () => {
    if (!lockRatio.checked || !sourceBitmap) return;
    const width = Number(widthInput.value);
    if (width > 0) heightInput.value = Math.max(1, Math.round(width / aspectRatio));
  });

  heightInput.addEventListener("input", () => {
    if (!lockRatio.checked || !sourceBitmap) return;
    const height = Number(heightInput.value);
    if (height > 0) widthInput.value = Math.max(1, Math.round(height * aspectRatio));
  });

  percentInput.addEventListener("input", setSizeFromPercent);

  document.querySelector("#resizeImageFileClear").addEventListener("click", () => {
    sourceBitmap = null;
    sourceFile = null;
    resetOriginal();
  });

  document.querySelector("#resizeImage").addEventListener("click", () => {
    if (!sourceFile || !sourceBitmap) {
      result.innerHTML = `<p class="notice">Choose an image first.</p>`;
      return;
    }

    const targetWidth = Math.round(Number(widthInput.value));
    const targetHeight = Math.round(Number(heightInput.value));
    const dimensionError = validateImageDimensions(targetWidth, targetHeight);
    if (dimensionError) {
      result.innerHTML = `<p class="notice">${dimensionError}</p>`;
      return;
    }

    const canvas = document.createElement("canvas");
    canvas.width = targetWidth;
    canvas.height = targetHeight;
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(sourceBitmap, 0, 0, targetWidth, targetHeight);

    const quality = formatInput.value === "image/png" ? undefined : Number(qualityInput.value) / 100;
    canvas.toBlob((blob) => {
      if (!blob) {
        result.innerHTML = `<p class="notice">This browser could not resize the selected image.</p>`;
        return;
      }
      const ext = formatInput.value.split("/")[1].replace("jpeg", "jpg");
      const name = sourceFile.name.replace(/\.[^.]+$/, `-resized.${ext}`);
      const previewUrl = URL.createObjectURL(blob);
      result.innerHTML = `
        <div class="result-grid">
          <div class="metric"><span>Original</span><strong>${sourceBitmap.width}×${sourceBitmap.height}</strong></div>
          <div class="metric"><span>New size</span><strong>${targetWidth}×${targetHeight}</strong></div>
          <div class="metric"><span>Output</span><strong>${bytes(blob.size)}</strong></div>
        </div>
        <p><img class="preview-image" src="${previewUrl}" alt="Resized image preview"></p>
        <button class="primary" id="downloadResizedImage" type="button">Download Resized Image</button>
      `;
      document.querySelector("#downloadResizedImage").addEventListener("click", () => downloadBlob(blob, name));
    }, formatInput.value, quality);
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

function formatDateDetails(date) {
  if (Number.isNaN(date.getTime())) {
    return {
      local: "Invalid date",
      utc: "Invalid date",
      iso: "Invalid date"
    };
  }
  return {
    local: date.toLocaleString(),
    utc: date.toUTCString(),
    iso: date.toISOString()
  };
}

function showToast(message, type = "success") {
  let toast = document.querySelector("#siteToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "siteToast";
    toast.className = "site-toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }
  window.clearTimeout(toast.hideTimer);
  toast.textContent = message;
  toast.className = `site-toast ${type === "error" ? "error" : "success"} show`;
  toast.hideTimer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 1600);
}

function formatLocalIsoWithOffset(date) {
  const pad = (value) => String(Math.abs(value)).padStart(2, "0");
  const offsetMinutes = -date.getTimezoneOffset();
  const sign = offsetMinutes >= 0 ? "+" : "-";
  const hours = Math.floor(Math.abs(offsetMinutes) / 60);
  const minutes = Math.abs(offsetMinutes) % 60;
  return `${formatLocalInput(date).replace(" ", "T")}${sign}${pad(hours)}:${pad(minutes)}`;
}

function localTimeFormats(date) {
  return [
    {
      label: "Default local",
      value: date.toLocaleString()
    },
    {
      label: "YYYY-MM-DD HH:mm:ss",
      value: formatLocalInput(date)
    },
    {
      label: "YYYY/MM/DD HH:mm:ss",
      value: formatLocalInput(date).replace(/-/g, "/")
    },
    {
      label: "US format",
      value: date.toLocaleString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true
      })
    },
    {
      label: "Local ISO 8601",
      value: formatLocalIsoWithOffset(date)
    },
    {
      label: "Date only",
      value: date.toLocaleDateString()
    },
    {
      label: "Time only",
      value: date.toLocaleTimeString()
    }
  ];
}

function parseDateInput(value) {
  const raw = value.trim();
  if (!raw) return new Date(NaN);

  const normalized = raw
    .replace(/\//g, "-")
    .replace(/^(\d{4}-\d{1,2}-\d{1,2})\s+/, "$1T");

  const date = new Date(normalized);
  if (!Number.isNaN(date.getTime())) return date;

  const match = raw.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})(?:\s+|T)(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?$/);
  if (!match) return new Date(NaN);

  const [, year, month, day, hour, minute, second = "0"] = match;
  return new Date(Number(year), Number(month) - 1, Number(day), Number(hour), Number(minute), Number(second));
}

function formatLocalInput(date) {
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function timestampBody() {
  return `
    <div class="result-grid timestamp-current">
      <div class="metric"><span>Current Seconds</span><strong id="currentUnixSeconds">0</strong></div>
      <div class="metric"><span>Current Milliseconds</span><strong id="currentUnixMillis">0</strong></div>
    </div>
    <div class="form-grid two-col timestamp-form">
      <div class="field">
        <label for="timestampInput">Unix timestamp</label>
        <input id="timestampInput" type="text" inputmode="numeric" placeholder="1719830400 or 1719830400000">
        <small>Enter seconds or milliseconds since January 1, 1970 UTC.</small>
      </div>
      <div class="field">
        <label for="dateInput">Date and time</label>
        <div class="date-paste-control">
          <input id="dateInput" type="text" placeholder="2026-07-01 11:58:03">
          <input id="datePickerInput" type="datetime-local" aria-label="Choose date and time">
        </div>
        <small>Paste formats like 2026-07-01 11:58:03, or choose a date with the picker. Local timezone is used when no timezone is included.</small>
      </div>
    </div>
    <div class="actions timestamp-actions">
      <button class="primary" id="convertTimestamp" type="button">Convert Timestamp</button>
      <button class="primary" id="convertDate" type="button">Convert Date</button>
      <button class="secondary" id="useCurrentTime" type="button">Use Current Time</button>
    </div>
    <div class="result" id="timestampResult"></div>
  `;
}

function initTimestamp() {
  const seconds = document.querySelector("#currentUnixSeconds");
  const millis = document.querySelector("#currentUnixMillis");
  const timestampInput = document.querySelector("#timestampInput");
  const dateInput = document.querySelector("#dateInput");
  const datePickerInput = document.querySelector("#datePickerInput");
  const result = document.querySelector("#timestampResult");

  const updateNow = () => {
    const now = Date.now();
    seconds.textContent = Math.floor(now / 1000).toString();
    millis.textContent = now.toString();
  };

  const showDate = (date) => {
    if (Number.isNaN(date.getTime())) {
      result.innerHTML = `<p class="notice">Enter a valid Unix timestamp.</p>`;
      return;
    }
    const details = formatDateDetails(date);
    const localRows = localTimeFormats(date)
      .map((item) => `
        <div class="copy-row">
          <span class="copy-label">${htmlEscape(item.label)}</span>
          <code>${htmlEscape(item.value)}</code>
          <button class="secondary copy-time" type="button" data-copy="${encodeURIComponent(item.value)}">Copy</button>
        </div>
      `)
      .join("");
    result.innerHTML = `
      <div class="result-grid timestamp-summary-grid">
        <div class="metric metric--long"><span>UTC Time</span><strong>${details.utc}</strong></div>
        <div class="metric metric--long"><span>ISO 8601</span><strong>${details.iso}</strong></div>
        <div class="metric"><span>Unix Seconds</span><strong>${Math.floor(date.getTime() / 1000)}</strong></div>
      </div>
      <div class="copy-list">
        <h3>Local time formats</h3>
        ${localRows}
      </div>
    `;
    result.querySelectorAll(".copy-time").forEach((button) => {
      button.addEventListener("click", async () => {
        window.clearTimeout(button.copyPulseTimer);
        try {
          await navigator.clipboard.writeText(decodeURIComponent(button.dataset.copy));
          button.classList.add("copy-pulse");
          showToast("Copied to clipboard");
        } catch (error) {
          showToast("Copy failed", "error");
        }
        button.copyPulseTimer = window.setTimeout(() => {
          button.classList.remove("copy-pulse");
        }, 240);
      });
    });
  };

  const showTimestamp = (date) => {
    if (Number.isNaN(date.getTime())) {
      result.innerHTML = `<p class="notice">Enter a valid date and time.</p>`;
      return;
    }
    result.innerHTML = `
      <div class="result-grid timestamp-conversion-grid">
        <div class="metric"><span>Unix Seconds</span><strong>${Math.floor(date.getTime() / 1000)}</strong></div>
        <div class="metric"><span>Unix Milliseconds</span><strong>${date.getTime()}</strong></div>
        <div class="metric metric--long"><span>UTC Time</span><strong>${date.toUTCString()}</strong></div>
      </div>
    `;
  };

  document.querySelector("#convertTimestamp").addEventListener("click", () => {
    const raw = timestampInput.value.trim();
    const value = Number(raw);
    if (!raw || !Number.isFinite(value)) {
      result.innerHTML = `<p class="notice">Enter a valid Unix timestamp.</p>`;
      return;
    }
    const millisValue = Math.abs(value) < 100000000000 ? value * 1000 : value;
    showDate(new Date(millisValue));
  });

  document.querySelector("#convertDate").addEventListener("click", () => {
    showTimestamp(parseDateInput(dateInput.value));
  });

  datePickerInput.addEventListener("change", () => {
    const pickedDate = parseDateInput(datePickerInput.value);
    if (!Number.isNaN(pickedDate.getTime())) {
      dateInput.value = formatLocalInput(pickedDate);
    }
  });

  document.querySelector("#useCurrentTime").addEventListener("click", () => {
    const now = new Date();
    timestampInput.value = Math.floor(now.getTime() / 1000).toString();
    dateInput.value = formatLocalInput(now);
    datePickerInput.value = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 16);
    showTimestamp(now);
  });

  updateNow();
  timestampTimer = setInterval(updateNow, 1000);
  document.querySelector("#useCurrentTime").click();
}

function htmlEscape(text) {
  const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

function htmlAttr(text) {
  return htmlEscape(String(text));
}

function htmlUnescape(text) {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
}

function codeUnitToUnicodeEscape(codeUnit) {
  return `\\u${codeUnit.toString(16).padStart(4, "0").toUpperCase()}`;
}

function textToUnicodeEscapes(text) {
  return [...text].map((char) => {
    if (char.length === 1) return codeUnitToUnicodeEscape(char.charCodeAt(0));
    return codeUnitToUnicodeEscape(char.charCodeAt(0)) + codeUnitToUnicodeEscape(char.charCodeAt(1));
  }).join("");
}

function unicodeEscapesToText(text) {
  return text
    .replace(/\\u\{([0-9a-fA-F]+)\}/g, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/\\u([0-9a-fA-F]{4})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
}

function nativeToAscii(text) {
  return Array.from(text).map((char) => {
    const first = char.charCodeAt(0);
    if (first <= 0x7f && char.length === 1) return char;
    if (char.length === 1) return codeUnitToUnicodeEscape(first);
    return codeUnitToUnicodeEscape(first) + codeUnitToUnicodeEscape(char.charCodeAt(1));
  }).join("");
}

function asciiToNative(text) {
  return unicodeEscapesToText(text);
}

function textToUtf8Percent(text) {
  return [...new TextEncoder().encode(text)].map((byte) => `%${byte.toString(16).padStart(2, "0").toUpperCase()}`).join("");
}

function utf8PercentToText(text) {
  const normalized = text.trim().replace(/\\x([0-9a-fA-F]{2})/g, "%$1").replace(/\s+/g, "");
  if (!normalized) return "";
  if (!/^(%[0-9a-fA-F]{2})+$/.test(normalized)) {
    throw new Error("UTF-8 input must use %E4%BD%A0 or \\xE4\\xBD\\xA0 byte format.");
  }
  return decodeURIComponent(normalized);
}

function textToBase64(text) {
  const bytesIn = new TextEncoder().encode(text);
  let binary = "";
  bytesIn.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

function base64ToText(text) {
  const binary = atob(text);
  const bytesOut = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytesOut);
}

function textToHex(text) {
  return [...new TextEncoder().encode(text)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function hexToText(text) {
  const cleaned = text.replace(/\s+/g, "");
  if (!cleaned || cleaned.length % 2) throw new Error("Hex input must contain an even number of characters.");
  if (!/^[0-9a-fA-F]+$/.test(cleaned)) throw new Error("Hex input can only contain 0-9 and A-F characters.");
  const bytesOut = new Uint8Array(cleaned.match(/.{2}/g).map((pair) => parseInt(pair, 16)));
  return new TextDecoder().decode(bytesOut);
}

function copyIconSvg(type = "copy") {
  if (type === "check") {
    return `<svg class="copy-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.5l4.2 4.2L19 7"></path></svg>`;
  }
  return `<svg class="copy-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="2"></rect><rect x="5" y="5" width="11" height="11" rx="2"></rect></svg>`;
}

function jsonFormatterBody() {
  return `
    <div class="form-grid two-col json-workspace">
      <div class="field">
        <label for="jsonInput">JSON input</label>
        <textarea id="jsonInput" spellcheck="false" placeholder='{"name":"JohnShine Tools","items":[1,2,3]}'></textarea>
        <small>Processing happens locally in your browser. JSON is not uploaded to a server.</small>
      </div>
      <div class="field">
        <label for="jsonOutput">Result</label>
        <div class="json-output-wrap">
          <button class="json-modal-copy json-output-copy" id="copyJsonOutput" type="button" data-tooltip="Copy" aria-label="Copy result">${copyIconSvg()}</button>
          <textarea id="jsonOutput" spellcheck="false" readonly></textarea>
        </div>
      </div>
      <div class="field">
        <label for="jsonPathInput">JSON Path query</label>
        <input id="jsonPathInput" type="text" value="$" placeholder="$.items[0] or $.users[*].name">
        <small>Supports $, dot properties, bracket properties, numeric indexes, and * wildcard.</small>
      </div>
    </div>
    <div class="actions json-actions">
      <button class="primary" id="formatJson" type="button">Format JSON</button>
      <button class="secondary" id="minifyJson" type="button">Minify JSON</button>
      <button class="secondary" id="validateJson" type="button">Validate</button>
      <button class="secondary" id="jsonToYaml" type="button">JSON to YAML</button>
      <button class="secondary" id="jsonToCsv" type="button">JSON to CSV</button>
      <button class="secondary" id="runJsonPath" type="button">Run JSON Path</button>
      <button class="secondary" id="downloadJsonOutput" type="button" title="Download the current Result output">Download Result</button>
    </div>
    <div class="result" id="jsonResult"></div>
    <div class="result json-tree-panel" id="jsonTree"></div>
  `;
}

function jsonErrorDetails(error, source) {
  const match = error.message.match(/position\s+(\d+)/i);
  if (!match) return error.message;
  const position = Number(match[1]);
  const before = source.slice(0, position);
  const lines = before.split("\n");
  return `${error.message}. Line ${lines.length}, column ${lines.at(-1).length + 1}.`;
}

function parseJsonInput(source) {
  try {
    return { ok: true, value: JSON.parse(source) };
  } catch (error) {
    return { ok: false, error: jsonErrorDetails(error, source) };
  }
}

function jsonDepth(value) {
  if (value === null || typeof value !== "object") return 0;
  const children = Array.isArray(value) ? value : Object.values(value);
  if (!children.length) return 1;
  return 1 + Math.max(...children.map(jsonDepth));
}

function jsonNodeCount(value) {
  if (value === null || typeof value !== "object") return 1;
  const children = Array.isArray(value) ? value : Object.values(value);
  return 1 + children.reduce((sum, child) => sum + jsonNodeCount(child), 0);
}

function yamlScalar(value) {
  if (value === null) return "null";
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  return JSON.stringify(String(value));
}

function jsonToYaml(value, indent = 0) {
  const space = "  ".repeat(indent);
  if (value === null || typeof value !== "object") return `${space}${yamlScalar(value)}`;
  if (Array.isArray(value)) {
    if (!value.length) return `${space}[]`;
    return value.map((item) => {
      if (item !== null && typeof item === "object") {
        return `${space}-\n${jsonToYaml(item, indent + 1)}`;
      }
      return `${space}- ${yamlScalar(item)}`;
    }).join("\n");
  }
  const entries = Object.entries(value);
  if (!entries.length) return `${space}{}`;
  return entries.map(([key, item]) => {
    const safeKey = /^[A-Za-z0-9_-]+$/.test(key) ? key : JSON.stringify(key);
    if (item !== null && typeof item === "object") {
      return `${space}${safeKey}:\n${jsonToYaml(item, indent + 1)}`;
    }
    return `${space}${safeKey}: ${yamlScalar(item)}`;
  }).join("\n");
}

function csvCell(value) {
  const text = value !== null && typeof value === "object" ? JSON.stringify(value) : String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

function jsonToCsv(value) {
  const rows = Array.isArray(value) ? value : Object.values(value || {});
  if (!Array.isArray(rows) || !rows.length) throw new Error("CSV conversion needs a JSON array or an object containing rows.");
  if (rows.every((row) => row !== null && typeof row === "object" && !Array.isArray(row))) {
    const columns = [...new Set(rows.flatMap((row) => Object.keys(row)))];
    return [
      columns.map(csvCell).join(","),
      ...rows.map((row) => columns.map((column) => csvCell(row[column])).join(","))
    ].join("\n");
  }
  return ["value", ...rows.map(csvCell)].join("\n");
}

function parseJsonPath(path) {
  const source = path.trim();
  if (!source || source[0] !== "$") throw new Error("JSON Path must start with $.");
  const tokens = [];
  let index = 1;
  while (index < source.length) {
    if (source[index] === ".") {
      index += 1;
      if (source[index] === "*") {
        tokens.push("*");
        index += 1;
        continue;
      }
      const match = source.slice(index).match(/^[A-Za-z_$][\w$-]*/);
      if (!match) throw new Error("Invalid dot property in JSON Path.");
      tokens.push(match[0]);
      index += match[0].length;
      continue;
    }
    if (source[index] === "[") {
      const close = source.indexOf("]", index);
      if (close === -1) throw new Error("Missing ] in JSON Path.");
      const raw = source.slice(index + 1, close).trim();
      if (raw === "*") tokens.push("*");
      else if (/^\d+$/.test(raw)) tokens.push(Number(raw));
      else {
        const quoted = raw.match(/^['"](.+)['"]$/);
        if (!quoted) throw new Error("Bracket properties must use a number, *, or quoted key.");
        tokens.push(quoted[1]);
      }
      index = close + 1;
      continue;
    }
    throw new Error("Unsupported JSON Path syntax.");
  }
  return tokens;
}

function runJsonPath(value, path) {
  const tokens = parseJsonPath(path);
  let matches = [value];
  tokens.forEach((token) => {
    const next = [];
    matches.forEach((item) => {
      if (token === "*") {
        if (Array.isArray(item)) next.push(...item);
        else if (item && typeof item === "object") next.push(...Object.values(item));
      } else if (item != null && typeof item === "object" && token in item) {
        next.push(item[token]);
      }
    });
    matches = next;
  });
  return matches.length === 1 ? matches[0] : matches;
}

function jsonValuePreview(value) {
  if (value === null) return "null";
  if (typeof value === "string") return value.length > 28 ? `${value.slice(0, 28)}...` : value;
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  const count = Array.isArray(value) ? value.length : Object.keys(value).length;
  return Array.isArray(value) ? `[${count} item${count === 1 ? "" : "s"}]` : `{${count} key${count === 1 ? "" : "s"}}`;
}

function jsonPathSegment(key) {
  if (typeof key === "number" || /^\d+$/.test(String(key))) return `[${key}]`;
  return /^[A-Za-z_$][\w$]*$/.test(String(key)) ? `.${key}` : `[${JSON.stringify(String(key))}]`;
}

function collectJsonGraph(value, label = "root", depth = 0, state = { nextId: 1, nodes: [], maxNodes: 500 }, parentId = null, path = "$", ancestors = []) {
  const id = state.nextId;
  state.nextId += 1;
  const isObject = value !== null && typeof value === "object";
  const entries = isObject ? (Array.isArray(value) ? value.map((item, index) => [index, item]) : Object.entries(value)) : [];
  const node = {
    id,
    parentId,
    ancestors,
    path,
    value,
    label: String(label),
    depth,
    type: Array.isArray(value) ? "Array" : isObject ? "Object" : typeof value,
    rows: [],
    childIds: [],
    width: 260,
    height: 56 + Math.max(entries.length, 1) * 34
  };
  state.nodes.push(node);

  entries.forEach(([key, item]) => {
    if (item !== null && typeof item === "object" && state.nodes.length < state.maxNodes) {
      const child = collectJsonGraph(item, key, depth + 1, state, id, `${path}${jsonPathSegment(key)}`, [...ancestors, id]);
      node.childIds.push(child.id);
      node.rows.push({ key: String(key), value: jsonValuePreview(item), nested: true });
    } else {
      node.rows.push({ key: String(key), value: jsonValuePreview(item), nested: false });
    }
  });
  if (entries.some(([, item]) => item !== null && typeof item === "object") && state.nodes.length >= state.maxNodes) {
    node.rows.push({ key: "...", value: "graph node limit reached", nested: false });
  }
  return node;
}

function renderJsonGraph(value) {
  const state = { nextId: 1, nodes: [], maxNodes: 500 };
  collectJsonGraph(value, "root", 0, state);
  const columns = new Map();
  state.nodes.forEach((node) => {
    if (!columns.has(node.depth)) columns.set(node.depth, []);
    columns.get(node.depth).push(node);
  });
  const columnGap = 360;
  const rowGap = 36;
  const topPad = 34;
  const leftPad = 34;
  [...columns.entries()].forEach(([depth, nodes]) => {
    let y = topPad;
    nodes.forEach((node) => {
      node.x = leftPad + depth * columnGap;
      node.y = y;
      y += node.height + rowGap;
    });
  });
  const maxX = Math.max(...state.nodes.map((node) => node.x + node.width)) + leftPad;
  const maxY = Math.max(...state.nodes.map((node) => node.y + node.height)) + topPad;
  const nodeById = new Map(state.nodes.map((node) => [node.id, node]));
  const paths = state.nodes
    .filter((node) => node.parentId)
    .map((node) => {
      const parent = nodeById.get(node.parentId);
      const startX = parent.x + parent.width;
      const startY = parent.y + parent.height / 2;
      const endX = node.x;
      const endY = node.y + node.height / 2;
      const curve = Math.max(80, (endX - startX) * 0.5);
      return `<path data-child-id="${node.id}" data-ancestor-ids="${htmlAttr(node.ancestors.join(" "))}" d="M ${startX} ${startY} C ${startX + curve} ${startY}, ${endX - curve} ${endY}, ${endX} ${endY}" />`;
    })
    .join("");
  const cards = state.nodes.map((node) => `
    <article class="json-graph-card" data-node-id="${node.id}" data-parent-id="${node.parentId || ""}" data-ancestor-ids="${htmlAttr(node.ancestors.join(" "))}" data-json="${htmlAttr(encodeURIComponent(JSON.stringify(node.value, null, 2)))}" data-path="${htmlAttr(node.path)}" style="left:${node.x}px;top:${node.y}px;width:${node.width}px;min-height:${node.height}px">
      <header>
        <strong>${node.childIds.length ? `<button class="json-node-toggle" type="button" aria-label="Collapse node" data-node-id="${node.id}">-</button>` : ""}${htmlEscape(node.label)}</strong>
        <span>${htmlEscape(node.type)}${node.childIds.length ? ` · ${node.childIds.length}` : ""}</span>
      </header>
      <div class="json-graph-rows">
        ${node.rows.map((row) => `
          <div class="json-graph-row ${row.nested ? "nested" : ""}">
            <span>${htmlEscape(row.key)}</span>
            <code>${htmlEscape(row.value)}</code>
          </div>
        `).join("")}
      </div>
    </article>
  `).join("");
  return `
    <div class="json-graph" style="width:${maxX}px;height:${maxY}px">
      <svg class="json-graph-lines" width="${maxX}" height="${maxY}" viewBox="0 0 ${maxX} ${maxY}" aria-hidden="true">${paths}</svg>
      ${cards}
    </div>
  `;
}

function jsonNodeModalBody(json, path) {
  return `
    <div class="json-node-modal-backdrop" id="jsonNodeModal">
      <section class="json-node-modal" role="dialog" aria-modal="true" aria-labelledby="jsonNodeModalTitle">
        <header>
          <h3 id="jsonNodeModalTitle">Content</h3>
          <button class="json-modal-close" type="button" aria-label="Close">×</button>
        </header>
        <div class="json-modal-block">
          <button class="json-modal-copy" type="button" data-copy="${htmlAttr(encodeURIComponent(json))}" data-tooltip="Copy" aria-label="Copy JSON">${copyIconSvg()}</button>
          <pre>${htmlEscape(json)}</pre>
        </div>
        <h4>JSON Path</h4>
        <div class="json-modal-block json-path-block">
          <button class="json-modal-copy" type="button" data-copy="${htmlAttr(encodeURIComponent(path))}" data-tooltip="Copy" aria-label="Copy JSON Path">${copyIconSvg()}</button>
          <pre>${htmlEscape(path)}</pre>
        </div>
      </section>
    </div>
  `;
}

async function copyWithIconFeedback(copyButton, text) {
  window.clearTimeout(copyButton.copyIconTimer);
  try {
    await navigator.clipboard.writeText(text);
    copyButton.classList.add("copied");
    copyButton.dataset.tooltip = "Copied";
    copyButton.innerHTML = copyIconSvg("check");
  } catch (error) {
    copyButton.dataset.tooltip = "Copy failed";
    showToast("Copy failed", "error");
  }
  copyButton.copyIconTimer = window.setTimeout(() => {
    copyButton.classList.remove("copied");
    copyButton.dataset.tooltip = "Copy";
    copyButton.innerHTML = copyIconSvg();
  }, 1300);
}

function bindJsonGraphInteractions(container) {
  const updateVisibility = () => {
    const collapsed = new Set([...container.querySelectorAll(".json-graph-card.collapsed")].map((card) => card.dataset.nodeId));
    container.querySelectorAll("[data-ancestor-ids]").forEach((item) => {
      const ancestors = item.dataset.ancestorIds ? item.dataset.ancestorIds.split(" ") : [];
      item.classList.toggle("hidden-by-collapse", ancestors.some((id) => collapsed.has(id)));
    });
  };

  container.querySelectorAll(".json-node-toggle").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      const card = event.target.closest(".json-graph-card");
      const collapsed = card.classList.toggle("collapsed");
      button.textContent = collapsed ? "+" : "-";
      button.setAttribute("aria-label", collapsed ? "Expand node" : "Collapse node");
      updateVisibility();
    });
  });

  container.querySelectorAll(".json-graph-card").forEach((card) => {
    card.addEventListener("click", () => {
      const json = decodeURIComponent(card.dataset.json);
      const path = card.dataset.path;
      document.querySelector("#jsonNodeModal")?.remove();
      document.body.insertAdjacentHTML("beforeend", jsonNodeModalBody(json, path));
      const modal = document.querySelector("#jsonNodeModal");
      modal.querySelector(".json-modal-close").addEventListener("click", () => modal.remove());
      modal.addEventListener("click", (event) => {
        if (event.target === modal) modal.remove();
      });
      modal.querySelectorAll(".json-modal-copy").forEach((copyButton) => {
        copyButton.addEventListener("click", async () => {
          await copyWithIconFeedback(copyButton, decodeURIComponent(copyButton.dataset.copy));
        });
      });
    });
  });
}

function initJsonFormatter() {
  const input = document.querySelector("#jsonInput");
  const output = document.querySelector("#jsonOutput");
  const pathInput = document.querySelector("#jsonPathInput");
  const result = document.querySelector("#jsonResult");
  const tree = document.querySelector("#jsonTree");
  let currentOutputFormat = "json";

  const parseOrShow = () => {
    const source = input.value.trim();
    if (!source) {
      result.innerHTML = `<p class="notice">Paste JSON first.</p>`;
      tree.innerHTML = "";
      return null;
    }
    const parsed = parseJsonInput(source);
    if (!parsed.ok) {
      output.value = "";
      result.innerHTML = `<p class="notice">Invalid JSON: ${htmlEscape(parsed.error)}</p>`;
      tree.innerHTML = "";
      return null;
    }
    return parsed.value;
  };

  const showJsonSummary = (value, message = "JSON is valid.") => {
    result.innerHTML = `
      <div class="result-grid compact-metrics">
        <div class="metric"><span>Status</span><strong>${htmlEscape(message)}</strong></div>
        <div class="metric"><span>Object depth</span><strong>${jsonDepth(value)}</strong></div>
        <div class="metric"><span>Nodes</span><strong>${jsonNodeCount(value)}</strong></div>
      </div>
    `;
    tree.innerHTML = `<h3>Object graph</h3>${renderJsonGraph(value)}`;
    bindJsonGraphInteractions(tree);
  };

  const format = () => {
    const value = parseOrShow();
    if (value === null) return;
    output.value = JSON.stringify(value, null, 2);
    currentOutputFormat = "json";
    showJsonSummary(value, "Formatted");
  };

  document.querySelector("#formatJson").addEventListener("click", format);
  document.querySelector("#minifyJson").addEventListener("click", () => {
    const value = parseOrShow();
    if (value === null) return;
    output.value = JSON.stringify(value);
    currentOutputFormat = "json";
    showJsonSummary(value, "Minified");
  });
  document.querySelector("#validateJson").addEventListener("click", () => {
    const value = parseOrShow();
    if (value === null) return;
    showJsonSummary(value);
  });
  document.querySelector("#jsonToYaml").addEventListener("click", () => {
    const value = parseOrShow();
    if (value === null) return;
    output.value = jsonToYaml(value);
    currentOutputFormat = "yaml";
    showJsonSummary(value, "Converted to YAML");
  });
  document.querySelector("#jsonToCsv").addEventListener("click", () => {
    const value = parseOrShow();
    if (value === null) return;
    try {
      output.value = jsonToCsv(value);
      currentOutputFormat = "csv";
      showJsonSummary(value, "Converted to CSV");
    } catch (error) {
      result.innerHTML = `<p class="notice">CSV conversion failed: ${htmlEscape(error.message)}</p>`;
    }
  });
  document.querySelector("#runJsonPath").addEventListener("click", () => {
    const value = parseOrShow();
    if (value === null) return;
    try {
      const queryResult = runJsonPath(value, pathInput.value);
      output.value = JSON.stringify(queryResult, null, 2);
      currentOutputFormat = "json";
      showJsonSummary(queryResult, "JSON Path result");
    } catch (error) {
      result.innerHTML = `<p class="notice">JSON Path failed: ${htmlEscape(error.message)}</p>`;
    }
  });
  document.querySelector("#copyJsonOutput").addEventListener("click", async (event) => {
    await copyWithIconFeedback(event.currentTarget, output.value);
  });
  document.querySelector("#downloadJsonOutput").addEventListener("click", () => {
    const types = {
      json: { extension: "json", mime: "application/json" },
      yaml: { extension: "yaml", mime: "application/x-yaml" },
      csv: { extension: "csv", mime: "text/csv" }
    };
    let value = output.value;
    if (!value) {
      const parsed = parseOrShow();
      if (parsed === null) return;
      value = JSON.stringify(parsed, null, 2);
      currentOutputFormat = "json";
      output.value = value;
      showJsonSummary(parsed, "Formatted");
    }
    const fileType = types[currentOutputFormat] || { extension: "txt", mime: "text/plain" };
    downloadBlob(new Blob([value], { type: fileType.mime }), `johnshinetools-result.${fileType.extension}`);
  });
  input.addEventListener("input", () => {
    if (!input.value.trim()) {
      output.value = "";
      result.innerHTML = "";
      tree.innerHTML = "";
    }
  });
}

function encodingBody() {
  return `
    <div class="form-grid two-col">
      <div class="field">
        <label for="encodingInput">Input</label>
        <textarea id="encodingInput" placeholder="Paste text, Unicode escapes, UTF-8 bytes, Base64, URL, HTML entities, or Hex..."></textarea>
      </div>
      <div class="field">
        <label for="encodingOutput">Output</label>
        <textarea id="encodingOutput" readonly></textarea>
      </div>
      <div class="field">
        <label for="encodingMode">Conversion</label>
        <select id="encodingMode">
          <option value="unicode-encode">Unicode escape encode</option>
          <option value="unicode-decode">Unicode escape decode</option>
          <option value="utf8-encode">UTF-8 percent encode</option>
          <option value="utf8-decode">UTF-8 percent decode</option>
          <option value="native-to-ascii">Native to ASCII</option>
          <option value="ascii-to-native">ASCII to Native</option>
          <option value="base64-encode">Base64 encode</option>
          <option value="base64-decode">Base64 decode</option>
          <option value="url-encode">URL encode</option>
          <option value="url-decode">URL decode</option>
          <option value="html-escape">HTML escape</option>
          <option value="html-unescape">HTML unescape</option>
          <option value="hex-encode">Hex encode</option>
          <option value="hex-decode">Hex decode</option>
        </select>
      </div>
    </div>
    <div class="actions">
      <button class="primary" id="runEncoding" type="button">Convert</button>
      <button class="secondary" id="swapEncoding" type="button">Swap</button>
      <button class="secondary" id="copyEncoding" type="button">Copy Output</button>
    </div>
    <div class="result" id="encodingResult"></div>
  `;
}

function initEncoding() {
  const input = document.querySelector("#encodingInput");
  const output = document.querySelector("#encodingOutput");
  const mode = document.querySelector("#encodingMode");
  const result = document.querySelector("#encodingResult");

  const convert = () => {
    const text = input.value;
    const converters = {
      "unicode-encode": textToUnicodeEscapes,
      "unicode-decode": unicodeEscapesToText,
      "utf8-encode": textToUtf8Percent,
      "utf8-decode": utf8PercentToText,
      "native-to-ascii": nativeToAscii,
      "ascii-to-native": asciiToNative,
      "base64-encode": textToBase64,
      "base64-decode": base64ToText,
      "url-encode": encodeURIComponent,
      "url-decode": decodeURIComponent,
      "html-escape": htmlEscape,
      "html-unescape": htmlUnescape,
      "hex-encode": textToHex,
      "hex-decode": hexToText
    };

    try {
      output.value = converters[mode.value](text);
      result.innerHTML = `<p class="notice">Conversion complete. Output length: ${output.value.length} characters.</p>`;
    } catch (error) {
      output.value = "";
      result.innerHTML = `<p class="notice">Conversion failed: ${error.message}</p>`;
    }
  };

  document.querySelector("#runEncoding").addEventListener("click", convert);
  document.querySelector("#swapEncoding").addEventListener("click", () => {
    input.value = output.value;
    output.value = "";
    result.innerHTML = `<p class="notice">Output moved to input.</p>`;
  });
  document.querySelector("#copyEncoding").addEventListener("click", () => navigator.clipboard.writeText(output.value));
  input.addEventListener("input", convert);
  mode.addEventListener("change", convert);
}

function renderTool() {
  const tool = getTool();
  const isToolPage = Boolean(toolFromPath(window.location.pathname));
  if (timestampTimer) {
    clearInterval(timestampTimer);
    timestampTimer = null;
  }
  updateMeta(tool, isToolPage);
  renderCards(toolSearch.value);

  const bodies = {
    "image-compressor": imageToolBody("compress"),
    "image-converter": imageToolBody("convert"),
    "image-resizer": imageResizerBody(),
    "pdf-merge": pdfInputBody("merge"),
    "pdf-split": pdfInputBody("split"),
    "pdf-compressor": pdfInputBody("compress"),
    "word-counter": textAreaBody("Paste your article, page copy, or document text..."),
    "case-converter": caseBody(),
    "character-counter": textAreaBody("Paste text to measure character length..."),
    "qr-code-generator": qrBody(),
    "password-generator": passwordBody(),
    "unix-timestamp": timestampBody(),
    "json-formatter": jsonFormatterBody(),
    "encoding-converter": encodingBody()
  };

  toolPanel.innerHTML = panelShell(tool, bodies[tool.id]);

  if (tool.id === "image-compressor") initImageTool("compress");
  if (tool.id === "image-converter") initImageTool("convert");
  if (tool.id === "image-resizer") initImageResizer();
  if (tool.id === "pdf-merge") initPdfTool("merge");
  if (tool.id === "pdf-split") initPdfTool("split");
  if (tool.id === "pdf-compressor") initPdfTool("compress");
  if (tool.id === "word-counter") initCounter("word");
  if (tool.id === "character-counter") initCounter("character");
  if (tool.id === "case-converter") initCaseConverter();
  if (tool.id === "qr-code-generator") initQr();
  if (tool.id === "password-generator") initPassword();
  if (tool.id === "unix-timestamp") initTimestamp();
  if (tool.id === "json-formatter") initJsonFormatter();
  if (tool.id === "encoding-converter") initEncoding();
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
