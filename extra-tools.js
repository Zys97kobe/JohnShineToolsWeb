function extraCopyText(text, message = "Copied") {
  return navigator.clipboard.writeText(text).then(() => showToast(message));
}

function digestToHex(buffer) {
  return [...new Uint8Array(buffer)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}

function digestToBase64(buffer) {
  let binary = "";
  new Uint8Array(buffer).forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return btoa(binary);
}

async function createDigest(value, algorithm) {
  const data = value instanceof ArrayBuffer ? value : new TextEncoder().encode(value);
  return crypto.subtle.digest(algorithm, data);
}

function hashGeneratorBody() {
  return `
    <div class="field">
      <label for="hashInput">Text to hash</label>
      <textarea id="hashInput" spellcheck="false" placeholder="Enter text to generate a hash..."></textarea>
      <small>Text is processed locally with the browser Web Crypto API. SHA-1 is included only for legacy compatibility.</small>
    </div>
    <div class="form-grid two-col extra-controls">
      <div class="field">
        <label for="hashAlgorithm">Algorithm</label>
        <select id="hashAlgorithm">
          <option value="SHA-256">SHA-256</option>
          <option value="SHA-384">SHA-384</option>
          <option value="SHA-512">SHA-512</option>
          <option value="SHA-1">SHA-1 (legacy)</option>
        </select>
      </div>
    </div>
    <div class="actions">
      <button class="primary" id="generateHash" type="button">Generate Hash</button>
      <button class="secondary" id="loadHashExample" type="button">Load Example</button>
      <button class="secondary" id="clearHash" type="button">Clear</button>
    </div>
    <div class="result" id="hashResult"></div>
  `;
}

function initHashGenerator() {
  const input = document.querySelector("#hashInput");
  const result = document.querySelector("#hashResult");
  const generate = async () => {
    if (!input.value) {
      result.innerHTML = `<p class="notice">Enter text to hash first.</p>`;
      return;
    }
    const algorithm = document.querySelector("#hashAlgorithm").value;
    try {
      const digest = await createDigest(input.value, algorithm);
      const hex = digestToHex(digest);
      const base64 = digestToBase64(digest);
      result.innerHTML = `
        <div class="copy-list hash-output-list">
          <div class="copy-row"><strong>Hex</strong><code>${hex}</code><button class="secondary extra-copy" type="button" data-value="${hex}">Copy</button></div>
          <div class="copy-row"><strong>Base64</strong><code>${base64}</code><button class="secondary extra-copy" type="button" data-value="${base64}">Copy</button></div>
        </div>
      `;
      result.querySelectorAll(".extra-copy").forEach((button) => button.addEventListener("click", () => extraCopyText(button.dataset.value)));
    } catch (error) {
      result.innerHTML = `<p class="notice">Hash generation failed: ${htmlEscape(error.message)}</p>`;
    }
  };
  document.querySelector("#generateHash").addEventListener("click", generate);
  document.querySelector("#loadHashExample").addEventListener("click", () => {
    input.value = "JohnShine Tools keeps this hash operation in your browser.";
    generate();
  });
  document.querySelector("#clearHash").addEventListener("click", () => {
    input.value = "";
    result.innerHTML = "";
    input.focus();
  });
}

function fileChecksumBody() {
  return `
    <div class="form-grid two-col extra-controls">
      <div class="field">
        <label for="checksumFile">File</label>
        <input id="checksumFile" type="file">
        <small>Files up to 100 MB are read locally and are not uploaded.</small>
      </div>
      <div class="field">
        <label for="checksumAlgorithm">Algorithm</label>
        <select id="checksumAlgorithm">
          <option value="SHA-256">SHA-256</option>
          <option value="SHA-384">SHA-384</option>
          <option value="SHA-512">SHA-512</option>
          <option value="SHA-1">SHA-1 (legacy)</option>
        </select>
      </div>
    </div>
    <div class="field extra-field-gap">
      <label for="expectedChecksum">Expected checksum (optional)</label>
      <input id="expectedChecksum" type="text" spellcheck="false" placeholder="Paste a hexadecimal checksum to verify the file">
    </div>
    <div class="actions">
      <button class="primary" id="calculateChecksum" type="button">Calculate Checksum</button>
      <button class="secondary" id="clearChecksum" type="button">Clear</button>
    </div>
    <div class="result" id="checksumResult"></div>
  `;
}

function initFileChecksum() {
  const fileInput = document.querySelector("#checksumFile");
  const expected = document.querySelector("#expectedChecksum");
  const result = document.querySelector("#checksumResult");
  document.querySelector("#calculateChecksum").addEventListener("click", async () => {
    const file = fileInput.files[0];
    if (!file) {
      result.innerHTML = `<p class="notice">Choose a file first.</p>`;
      return;
    }
    if (file.size > 100 * 1024 * 1024) {
      result.innerHTML = `<p class="notice">Choose a file smaller than 100 MB.</p>`;
      return;
    }
    const button = document.querySelector("#calculateChecksum");
    button.disabled = true;
    button.textContent = "Calculating...";
    try {
      const digest = await createDigest(await file.arrayBuffer(), document.querySelector("#checksumAlgorithm").value);
      const hex = digestToHex(digest);
      const normalizedExpected = expected.value.trim().replace(/^0x/i, "").replace(/\s+/g, "").toLowerCase();
      const matches = normalizedExpected ? normalizedExpected === hex : null;
      result.innerHTML = `
        <div class="result-grid compact-metrics">
          <div class="metric"><span>File</span><strong>${htmlEscape(file.name)}</strong></div>
          <div class="metric"><span>Size</span><strong>${bytes(file.size)}</strong></div>
          <div class="metric"><span>Verification</span><strong>${matches === null ? "Not requested" : matches ? "Match" : "No match"}</strong></div>
        </div>
        <div class="copy-list hash-output-list">
          <div class="copy-row"><strong>Checksum</strong><code>${hex}</code><button class="secondary" id="copyChecksum" type="button">Copy</button></div>
        </div>
      `;
      document.querySelector("#copyChecksum").addEventListener("click", () => extraCopyText(hex, "Checksum copied"));
    } catch (error) {
      result.innerHTML = `<p class="notice">Checksum calculation failed: ${htmlEscape(error.message)}</p>`;
    } finally {
      button.disabled = false;
      button.textContent = "Calculate Checksum";
    }
  });
  document.querySelector("#clearChecksum").addEventListener("click", () => {
    fileInput.value = "";
    expected.value = "";
    result.innerHTML = "";
  });
}

const tableExampleText = `Name,Role,Location
Ada Lovelace,Mathematician,London
Grace Hopper,Computer Scientist,New York
Katherine Johnson,Mathematician,Virginia`;

function tableConverterBody() {
  return `
    <div class="form-grid two-col extra-workspace">
      <div class="field">
        <label for="tableInput">CSV or TSV table</label>
        <textarea id="tableInput" spellcheck="false" placeholder="Name,Role&#10;Ada,Mathematician"></textarea>
      </div>
      <div class="field">
        <label for="tableOutput">Generated markup</label>
        <textarea id="tableOutput" spellcheck="false" readonly></textarea>
      </div>
    </div>
    <div class="form-grid two-col extra-controls">
      <div class="field">
        <label for="tableDelimiter">Input delimiter</label>
        <select id="tableDelimiter">
          <option value="auto">Auto detect</option>
          <option value=",">Comma (,)</option>
          <option value="tab">Tab</option>
          <option value=";">Semicolon (;)</option>
          <option value="|">Pipe (|)</option>
        </select>
      </div>
      <div class="field">
        <label for="tableOutputType">Output</label>
        <select id="tableOutputType">
          <option value="markdown">Markdown table</option>
          <option value="html">HTML table</option>
        </select>
      </div>
    </div>
    <label class="csv-check extra-check"><input id="tableHasHeader" type="checkbox" checked> First row is header</label>
    <div class="actions">
      <button class="primary" id="convertTable" type="button">Convert Table</button>
      <button class="secondary" id="loadTableExample" type="button">Load Example</button>
      <button class="secondary" id="copyTableOutput" type="button" disabled>Copy</button>
      <button class="secondary" id="downloadTableOutput" type="button" disabled>Download</button>
      <button class="secondary" id="clearTable" type="button">Clear</button>
    </div>
    <div class="result" id="tableResult"></div>
    <div class="result generated-table-preview" id="tablePreview" hidden></div>
  `;
}

function normalizeTableRows(rows) {
  const cleaned = rows.filter((row) => row.some((cell) => cell.trim())).map((row) => row.map((cell) => cell.trim()));
  const width = Math.max(...cleaned.map((row) => row.length), 0);
  return cleaned.map((row) => Array.from({ length: width }, (_, index) => row[index] || ""));
}

function tableRowsToMarkdown(rows, hasHeader) {
  const escapeCell = (cell) => cell.replace(/\\/g, "\\\\").replace(/\|/g, "\\|").replace(/\r?\n/g, "<br>");
  const working = rows.map((row) => row.map(escapeCell));
  const header = hasHeader ? working[0] : working[0].map((_, index) => `Column ${index + 1}`);
  const body = hasHeader ? working.slice(1) : working;
  return [header, header.map(() => "---"), ...body].map((row) => `| ${row.join(" | ")} |`).join("\n");
}

function tableRowsToHtml(rows, hasHeader) {
  const cells = (row, tag) => row.map((cell) => `      <${tag}>${htmlEscape(cell)}</${tag}>`).join("\n");
  const header = hasHeader ? `  <thead>\n    <tr>\n${cells(rows[0], "th")}\n    </tr>\n  </thead>\n` : "";
  const bodyRows = hasHeader ? rows.slice(1) : rows;
  return `<table>\n${header}  <tbody>\n${bodyRows.map((row) => `    <tr>\n${cells(row, "td")}\n    </tr>`).join("\n")}\n  </tbody>\n</table>`;
}

function initTableConverter() {
  const input = document.querySelector("#tableInput");
  const output = document.querySelector("#tableOutput");
  const result = document.querySelector("#tableResult");
  const preview = document.querySelector("#tablePreview");
  const copyButton = document.querySelector("#copyTableOutput");
  const downloadButton = document.querySelector("#downloadTableOutput");
  let currentType = "markdown";
  const convert = () => {
    if (!input.value.trim()) {
      result.innerHTML = `<p class="notice">Paste table data first.</p>`;
      return;
    }
    try {
      const selected = document.querySelector("#tableDelimiter").value;
      const delimiter = selected === "auto" ? detectCsvDelimiter(input.value) : selected === "tab" ? "\t" : selected;
      const rows = normalizeTableRows(parseDelimitedText(input.value, delimiter));
      if (!rows.length || !rows[0].length) throw new Error("No table rows were found.");
      const hasHeader = document.querySelector("#tableHasHeader").checked;
      currentType = document.querySelector("#tableOutputType").value;
      output.value = currentType === "markdown" ? tableRowsToMarkdown(rows, hasHeader) : tableRowsToHtml(rows, hasHeader);
      preview.hidden = false;
      preview.innerHTML = renderCsvTable(rows, hasHeader);
      result.innerHTML = `<div class="result-grid compact-metrics"><div class="metric"><span>Rows</span><strong>${rows.length}</strong></div><div class="metric"><span>Columns</span><strong>${rows[0].length}</strong></div><div class="metric"><span>Output</span><strong>${currentType === "markdown" ? "Markdown" : "HTML"}</strong></div></div>`;
      copyButton.disabled = false;
      downloadButton.disabled = false;
    } catch (error) {
      result.innerHTML = `<p class="notice">Table conversion failed: ${htmlEscape(error.message)}</p>`;
      preview.hidden = true;
      output.value = "";
    }
  };
  document.querySelector("#convertTable").addEventListener("click", convert);
  document.querySelector("#loadTableExample").addEventListener("click", () => {
    input.value = tableExampleText;
    convert();
  });
  copyButton.addEventListener("click", () => extraCopyText(output.value, "Table markup copied"));
  downloadButton.addEventListener("click", () => {
    const extension = currentType === "markdown" ? "md" : "html";
    const mime = currentType === "markdown" ? "text/markdown" : "text/html";
    downloadBlob(new Blob([output.value], { type: `${mime};charset=utf-8` }), `table.${extension}`);
  });
  document.querySelector("#clearTable").addEventListener("click", () => {
    input.value = "";
    output.value = "";
    result.innerHTML = "";
    preview.hidden = true;
    copyButton.disabled = true;
    downloadButton.disabled = true;
  });
}

function secureRandomString(length, alphabet) {
  let output = "";
  const limit = 256 - (256 % alphabet.length);
  while (output.length < length) {
    const values = new Uint8Array(Math.max(32, (length - output.length) * 2));
    crypto.getRandomValues(values);
    values.forEach((value) => {
      if (value < limit && output.length < length) output += alphabet[value % alphabet.length];
    });
  }
  return output;
}

function randomToken(length, format) {
  if (format === "hex") {
    const values = new Uint8Array(Math.ceil(length / 2));
    crypto.getRandomValues(values);
    return [...values].map((value) => value.toString(16).padStart(2, "0")).join("").slice(0, length);
  }
  if (format === "base64url") {
    const values = new Uint8Array(Math.ceil(length * 3 / 4) + 2);
    crypto.getRandomValues(values);
    return digestToBase64(values.buffer).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "").slice(0, length);
  }
  const alphabets = {
    alphanumeric: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    url: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_~."
  };
  return secureRandomString(length, alphabets[format]);
}

function randomTokenGeneratorBody() {
  return `
    <div class="form-grid two-col extra-controls">
      <div class="field"><label for="tokenFormat">Format</label><select id="tokenFormat"><option value="hex">Hexadecimal</option><option value="alphanumeric">Alphanumeric</option><option value="url">URL-safe characters</option><option value="base64url">Base64URL</option></select></div>
      <div class="field"><label for="tokenLength">Length</label><input id="tokenLength" type="number" min="8" max="256" value="32"></div>
      <div class="field"><label for="tokenQuantity">Number of tokens</label><input id="tokenQuantity" type="number" min="1" max="20" value="1"></div>
    </div>
    <div class="actions"><button class="primary" id="generateTokens" type="button">Generate Tokens</button><button class="secondary" id="copyTokens" type="button" disabled>Copy All</button></div>
    <div class="result" id="tokenResult"></div>
  `;
}

function initRandomTokenGenerator() {
  const result = document.querySelector("#tokenResult");
  const copyButton = document.querySelector("#copyTokens");
  let tokens = [];
  const generate = () => {
    const length = Math.max(8, Math.min(256, Number(document.querySelector("#tokenLength").value) || 32));
    const quantity = Math.max(1, Math.min(20, Number(document.querySelector("#tokenQuantity").value) || 1));
    const format = document.querySelector("#tokenFormat").value;
    tokens = Array.from({ length: quantity }, () => randomToken(length, format));
    result.innerHTML = `<div class="token-list">${tokens.map((token, index) => `<div class="token-row"><span>${index + 1}</span><code>${token}</code><button class="secondary token-copy" type="button" data-index="${index}">Copy</button></div>`).join("")}</div>`;
    result.querySelectorAll(".token-copy").forEach((button) => button.addEventListener("click", () => extraCopyText(tokens[Number(button.dataset.index)], "Token copied")));
    copyButton.disabled = false;
  };
  document.querySelector("#generateTokens").addEventListener("click", generate);
  copyButton.addEventListener("click", () => extraCopyText(tokens.join("\n"), "Tokens copied"));
  generate();
}

const cspDirectiveFields = [
  ["default-src", "'self'"],
  ["script-src", "'self'"],
  ["style-src", "'self'"],
  ["img-src", "'self' data:"],
  ["connect-src", "'self'"],
  ["font-src", "'self'"],
  ["object-src", "'none'"],
  ["base-uri", "'self'"],
  ["frame-ancestors", "'none'"],
  ["form-action", "'self'"]
];

function cspHeaderGeneratorBody() {
  return `
    <div class="form-grid two-col csp-grid">
      ${cspDirectiveFields.map(([name, value]) => `<div class="field"><label for="csp-${name}">${name}</label><input id="csp-${name}" data-csp-directive="${name}" type="text" spellcheck="false" value="${value.replace(/"/g, "&quot;")}"></div>`).join("")}
    </div>
    <div class="csv-clean-options">
      <label class="csv-check"><input id="cspUpgrade" type="checkbox" checked> upgrade-insecure-requests</label>
      <label class="csv-check"><input id="cspReportOnly" type="checkbox"> Report-Only header</label>
    </div>
    <div class="actions"><button class="primary" id="generateCsp" type="button">Generate CSP Header</button><button class="secondary" id="copyCsp" type="button" disabled>Copy Header</button><button class="secondary" id="resetCsp" type="button">Reset Secure Defaults</button></div>
    <div class="result" id="cspResult"></div>
  `;
}

function buildCspHeader(directives, upgrade, reportOnly) {
  const values = directives.map(([name, rawValue]) => {
    const value = rawValue.replace(/[;,\r\n]/g, " ").trim().replace(/\s+/g, " ");
    return value ? `${name} ${value}` : "";
  }).filter(Boolean);
  if (upgrade) values.push("upgrade-insecure-requests");
  const headerName = reportOnly ? "Content-Security-Policy-Report-Only" : "Content-Security-Policy";
  return `${headerName}: ${values.join("; ")}`;
}

function initCspHeaderGenerator() {
  const result = document.querySelector("#cspResult");
  const copyButton = document.querySelector("#copyCsp");
  let header = "";
  const setDefaults = () => {
    cspDirectiveFields.forEach(([name, value]) => {
      document.querySelector(`#csp-${name}`).value = value;
    });
    document.querySelector("#cspUpgrade").checked = true;
    document.querySelector("#cspReportOnly").checked = false;
  };
  const generate = () => {
    const directives = [...document.querySelectorAll("[data-csp-directive]")].map((input) => [input.dataset.cspDirective, input.value]);
    header = buildCspHeader(directives, document.querySelector("#cspUpgrade").checked, document.querySelector("#cspReportOnly").checked);
    result.innerHTML = `<div class="header-output"><code>${htmlEscape(header)}</code></div><p class="notice">Test new policies with Report-Only before enforcement. A CSP is defense in depth and can block required site resources if configured incorrectly.</p>`;
    copyButton.disabled = false;
  };
  document.querySelector("#generateCsp").addEventListener("click", generate);
  copyButton.addEventListener("click", () => extraCopyText(header, "CSP header copied"));
  document.querySelector("#resetCsp").addEventListener("click", () => {
    setDefaults();
    generate();
  });
  generate();
}

function extraDateTimeLocalValue(date = new Date()) {
  const pad = (value) => String(value).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function supportedTimeZones() {
  const zones = typeof Intl.supportedValuesOf === "function" ? Intl.supportedValuesOf("timeZone") : [
    "America/Chicago", "America/Denver", "America/Los_Angeles", "America/New_York", "Asia/Dubai", "Asia/Hong_Kong", "Asia/Shanghai", "Asia/Singapore", "Asia/Tokyo", "Australia/Sydney", "Europe/Berlin", "Europe/London", "Europe/Paris", "Pacific/Auckland"
  ];
  return ["UTC", ...zones.filter((zone) => zone !== "UTC")];
}

function timeZoneOptions(selected) {
  return supportedTimeZones().map((zone) => `<option value="${zone}" ${zone === selected ? "selected" : ""}>${zone}</option>`).join("");
}

function zonedDateParts(date, timeZone) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23"
  });
  return Object.fromEntries(formatter.formatToParts(date).filter((part) => part.type !== "literal").map((part) => [part.type, Number(part.value)]));
}

function timeZoneOffsetMs(date, timeZone) {
  const parts = zonedDateParts(date, timeZone);
  return Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute, parts.second) - Math.floor(date.getTime() / 1000) * 1000;
}

function zonedLocalDate(value, timeZone) {
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})$/);
  if (!match) throw new Error("Enter a valid date and time.");
  const input = { year: Number(match[1]), month: Number(match[2]), day: Number(match[3]), hour: Number(match[4]), minute: Number(match[5]) };
  const wallClockUtc = Date.UTC(input.year, input.month - 1, input.day, input.hour, input.minute, 0);
  let instant = new Date(wallClockUtc - timeZoneOffsetMs(new Date(wallClockUtc), timeZone));
  instant = new Date(wallClockUtc - timeZoneOffsetMs(instant, timeZone));
  const resolved = zonedDateParts(instant, timeZone);
  if (["year", "month", "day", "hour", "minute"].some((key) => resolved[key] !== input[key])) {
    throw new Error("This local time does not exist in the source zone, usually because of a daylight saving transition.");
  }
  return instant;
}

function formatDateInZone(date, timeZone) {
  return new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
    timeZoneName: "longOffset"
  }).format(date);
}

function dateTimeInputInZone(date, timeZone) {
  const parts = zonedDateParts(date, timeZone);
  const pad = (value) => String(value).padStart(2, "0");
  return `${parts.year}-${pad(parts.month)}-${pad(parts.day)}T${pad(parts.hour)}:${pad(parts.minute)}`;
}

function timeZoneConverterBody() {
  const localZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  return `
    <div class="field">
      <label for="timeZoneDate">Source date and time</label>
      <input id="timeZoneDate" type="datetime-local" value="${extraDateTimeLocalValue()}">
    </div>
    <div class="form-grid two-col extra-controls">
      <div class="field"><label for="sourceTimeZone">From time zone</label><select id="sourceTimeZone">${timeZoneOptions(localZone)}</select></div>
      <div class="field"><label for="targetTimeZone">To time zone</label><select id="targetTimeZone">${timeZoneOptions(localZone === "UTC" ? "America/New_York" : "UTC")}</select></div>
    </div>
    <div class="actions"><button class="primary" id="convertTimeZone" type="button">Convert Time Zone</button><button class="secondary" id="swapTimeZones" type="button">Swap Zones</button><button class="secondary" id="useCurrentTime" type="button">Use Current Time</button></div>
    <div class="result" id="timeZoneResult"></div>
  `;
}

function initTimeZoneConverter() {
  const input = document.querySelector("#timeZoneDate");
  const source = document.querySelector("#sourceTimeZone");
  const target = document.querySelector("#targetTimeZone");
  const result = document.querySelector("#timeZoneResult");
  let lastInstant = null;
  const convert = () => {
    try {
      lastInstant = zonedLocalDate(input.value, source.value);
      result.innerHTML = `
        <div class="result-grid time-zone-results">
          <div class="metric metric--long"><span>${htmlEscape(source.value)}</span><strong>${htmlEscape(formatDateInZone(lastInstant, source.value))}</strong></div>
          <div class="metric metric--long"><span>${htmlEscape(target.value)}</span><strong>${htmlEscape(formatDateInZone(lastInstant, target.value))}</strong></div>
          <div class="metric metric--long"><span>UTC / ISO</span><strong>${lastInstant.toISOString()}</strong></div>
        </div>
      `;
    } catch (error) {
      result.innerHTML = `<p class="notice">Time zone conversion failed: ${htmlEscape(error.message)}</p>`;
    }
  };
  document.querySelector("#convertTimeZone").addEventListener("click", convert);
  document.querySelector("#swapTimeZones").addEventListener("click", () => {
    if (!lastInstant) convert();
    const oldSource = source.value;
    const oldTarget = target.value;
    if (lastInstant) input.value = dateTimeInputInZone(lastInstant, oldTarget);
    source.value = oldTarget;
    target.value = oldSource;
    convert();
  });
  document.querySelector("#useCurrentTime").addEventListener("click", () => {
    input.value = dateTimeInputInZone(new Date(), source.value);
    convert();
  });
  convert();
}

function dateInputValue(date) {
  return date.toISOString().slice(0, 10);
}

function businessDaysCalculatorBody() {
  const start = new Date();
  const end = new Date(start.getTime() + 30 * 86400000);
  return `
    <div class="form-grid two-col extra-controls">
      <div class="field"><label for="businessStart">Start date</label><input id="businessStart" type="date" value="${dateInputValue(start)}"></div>
      <div class="field"><label for="businessEnd">End date</label><input id="businessEnd" type="date" value="${dateInputValue(end)}"></div>
    </div>
    <div class="csv-clean-options">
      <label class="csv-check"><input id="includeBusinessStart" type="checkbox" checked> Include start date</label>
      <label class="csv-check"><input id="includeBusinessEnd" type="checkbox" checked> Include end date</label>
    </div>
    <div class="field extra-field-gap">
      <label for="businessHolidays">Custom holidays (optional)</label>
      <textarea id="businessHolidays" class="short-textarea" spellcheck="false" placeholder="2026-12-25&#10;2027-01-01"></textarea>
      <small>Enter one YYYY-MM-DD date per line or separate dates with commas. Saturdays and Sundays are excluded automatically.</small>
    </div>
    <div class="actions"><button class="primary" id="calculateBusinessDays" type="button">Calculate Business Days</button><button class="secondary" id="clearBusinessHolidays" type="button">Clear Holidays</button></div>
    <div class="result" id="businessDaysResult"></div>
  `;
}

function parseUtcDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) throw new Error("Choose valid start and end dates.");
  const date = new Date(`${value}T00:00:00Z`);
  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0, 10) !== value) throw new Error(`Invalid date: ${value}`);
  return date;
}

function businessDayStats(start, end, holidays, includeStart, includeEnd) {
  if (start > end) throw new Error("The end date must be on or after the start date.");
  const span = Math.round((end - start) / 86400000) + 1;
  if (span > 36600) throw new Error("Choose a date range shorter than 100 years.");
  let total = 0;
  let business = 0;
  let weekends = 0;
  let holidayCount = 0;
  for (let index = 0; index < span; index += 1) {
    if ((index === 0 && !includeStart) || (index === span - 1 && !includeEnd)) continue;
    const date = new Date(start.getTime() + index * 86400000);
    const weekend = date.getUTCDay() === 0 || date.getUTCDay() === 6;
    const holiday = holidays.has(dateInputValue(date));
    total += 1;
    if (weekend) weekends += 1;
    else if (holiday) holidayCount += 1;
    else business += 1;
  }
  return { total, business, weekends, holidayCount };
}

function initBusinessDaysCalculator() {
  const result = document.querySelector("#businessDaysResult");
  const calculate = () => {
    try {
      const start = parseUtcDate(document.querySelector("#businessStart").value);
      const end = parseUtcDate(document.querySelector("#businessEnd").value);
      const holidayValues = document.querySelector("#businessHolidays").value.split(/[\s,;]+/).filter(Boolean);
      const holidays = new Set(holidayValues.map((value) => dateInputValue(parseUtcDate(value))));
      const includeStart = document.querySelector("#includeBusinessStart").checked;
      const includeEnd = document.querySelector("#includeBusinessEnd").checked;
      const { total, business, weekends, holidayCount } = businessDayStats(start, end, holidays, includeStart, includeEnd);
      result.innerHTML = `<div class="result-grid compact-metrics"><div class="metric"><span>Business Days</span><strong>${business}</strong></div><div class="metric"><span>Included Days</span><strong>${total}</strong></div><div class="metric"><span>Weekend Days</span><strong>${weekends}</strong></div><div class="metric"><span>Holidays Excluded</span><strong>${holidayCount}</strong></div></div>`;
    } catch (error) {
      result.innerHTML = `<p class="notice">Business day calculation failed: ${htmlEscape(error.message)}</p>`;
    }
  };
  document.querySelector("#calculateBusinessDays").addEventListener("click", calculate);
  document.querySelector("#clearBusinessHolidays").addEventListener("click", () => {
    document.querySelector("#businessHolidays").value = "";
    calculate();
  });
  calculate();
}

function clampColor(value, min = 0, max = 255) {
  return Math.min(max, Math.max(min, value));
}

function hslToRgb(hue, saturation, lightness) {
  const h = ((hue % 360) + 360) % 360;
  const s = clampColor(saturation, 0, 100) / 100;
  const l = clampColor(lightness, 0, 100) / 100;
  const chroma = (1 - Math.abs(2 * l - 1)) * s;
  const section = h / 60;
  const x = chroma * (1 - Math.abs((section % 2) - 1));
  const [r1, g1, b1] = section < 1 ? [chroma, x, 0] : section < 2 ? [x, chroma, 0] : section < 3 ? [0, chroma, x] : section < 4 ? [0, x, chroma] : section < 5 ? [x, 0, chroma] : [chroma, 0, x];
  const match = l - chroma / 2;
  return { r: Math.round((r1 + match) * 255), g: Math.round((g1 + match) * 255), b: Math.round((b1 + match) * 255) };
}

function rgbToHsl(r, g, b) {
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const delta = max - min;
  const lightness = (max + min) / 2;
  let hue = 0;
  if (delta) {
    if (max === red) hue = 60 * (((green - blue) / delta) % 6);
    else if (max === green) hue = 60 * ((blue - red) / delta + 2);
    else hue = 60 * ((red - green) / delta + 4);
  }
  if (hue < 0) hue += 360;
  const saturation = delta ? delta / (1 - Math.abs(2 * lightness - 1)) : 0;
  return { h: hue, s: saturation * 100, l: lightness * 100 };
}

function parseCssColor(value) {
  const source = value.trim();
  const hex = source.match(/^#?([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/i);
  if (hex) {
    let digits = hex[1];
    if (digits.length <= 4) digits = [...digits].map((digit) => digit + digit).join("");
    return {
      r: parseInt(digits.slice(0, 2), 16),
      g: parseInt(digits.slice(2, 4), 16),
      b: parseInt(digits.slice(4, 6), 16),
      a: digits.length === 8 ? parseInt(digits.slice(6, 8), 16) / 255 : 1
    };
  }
  const rgb = source.match(/^rgba?\((.+)\)$/i);
  if (rgb) {
    const parts = rgb[1].replace(/\//g, " ").split(/[,\s]+/).filter(Boolean);
    if (parts.length < 3 || parts.length > 4) throw new Error("RGB needs three channels and an optional alpha value.");
    const channel = (part) => part.endsWith("%") ? clampColor(parseFloat(part) * 2.55) : clampColor(parseFloat(part));
    const values = parts.slice(0, 3).map(channel);
    if (values.some(Number.isNaN)) throw new Error("RGB channels must be numbers or percentages.");
    const alpha = parts[3] === undefined ? 1 : parts[3].endsWith("%") ? parseFloat(parts[3]) / 100 : parseFloat(parts[3]);
    if (!Number.isFinite(alpha)) throw new Error("Alpha must be a number.");
    return { r: Math.round(values[0]), g: Math.round(values[1]), b: Math.round(values[2]), a: clampColor(alpha, 0, 1) };
  }
  const hsl = source.match(/^hsla?\((.+)\)$/i);
  if (hsl) {
    const parts = hsl[1].replace(/\//g, " ").split(/[,\s]+/).filter(Boolean);
    if (parts.length < 3 || !parts[1].endsWith("%") || !parts[2].endsWith("%")) throw new Error("HSL must use hue, saturation%, and lightness%.");
    const rgbValue = hslToRgb(parseFloat(parts[0]), parseFloat(parts[1]), parseFloat(parts[2]));
    const alpha = parts[3] === undefined ? 1 : parts[3].endsWith("%") ? parseFloat(parts[3]) / 100 : parseFloat(parts[3]);
    if (![rgbValue.r, rgbValue.g, rgbValue.b, alpha].every(Number.isFinite)) throw new Error("HSL contains an invalid number.");
    return { ...rgbValue, a: clampColor(alpha, 0, 1) };
  }
  throw new Error("Use HEX, rgb(...), or hsl(...) format.");
}

function colorHex(color, includeAlpha = color.a < 1) {
  const channel = (value) => Math.round(value).toString(16).padStart(2, "0").toUpperCase();
  return `#${channel(color.r)}${channel(color.g)}${channel(color.b)}${includeAlpha ? channel(color.a * 255) : ""}`;
}

function colorRgb(color) {
  return color.a < 1 ? `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a.toFixed(3).replace(/0+$/, "").replace(/\.$/, "")})` : `rgb(${color.r}, ${color.g}, ${color.b})`;
}

function colorHsl(color) {
  const hsl = rgbToHsl(color.r, color.g, color.b);
  const core = `${Math.round(hsl.h)}, ${hsl.s.toFixed(1).replace(/\.0$/, "") }%, ${hsl.l.toFixed(1).replace(/\.0$/, "") }%`;
  return color.a < 1 ? `hsla(${core}, ${color.a.toFixed(3).replace(/0+$/, "").replace(/\.$/, "")})` : `hsl(${core})`;
}

function colorConverterBody() {
  return `
    <div class="color-input-row">
      <div class="field"><label for="colorValue">HEX, RGB, or HSL</label><input id="colorValue" type="text" spellcheck="false" value="#1768E8" placeholder="#1768E8 or rgb(23, 104, 232)"></div>
      <div class="field color-picker-field"><label for="colorPicker">Color picker</label><input id="colorPicker" type="color" value="#1768e8"></div>
    </div>
    <div class="actions"><button class="primary" id="convertColor" type="button">Convert Color</button></div>
    <div class="result" id="colorResult"></div>
  `;
}

function initColorConverter() {
  const input = document.querySelector("#colorValue");
  const picker = document.querySelector("#colorPicker");
  const result = document.querySelector("#colorResult");
  const convert = () => {
    try {
      const color = parseCssColor(input.value);
      const hex = colorHex(color);
      const rgb = colorRgb(color);
      const hsl = colorHsl(color);
      picker.value = colorHex(color, false).toLowerCase();
      result.innerHTML = `
        <div class="color-swatch" style="background:${colorHex(color)}"><span style="color:${contrastRatio(color, { r: 255, g: 255, b: 255, a: 1 }) >= 4.5 ? "#fff" : "#000"}">Color preview</span></div>
        <div class="copy-list"><div class="copy-row"><strong>HEX</strong><code>${hex}</code><button class="secondary color-copy" data-value="${hex}" type="button">Copy</button></div><div class="copy-row"><strong>RGB</strong><code>${rgb}</code><button class="secondary color-copy" data-value="${rgb}" type="button">Copy</button></div><div class="copy-row"><strong>HSL</strong><code>${hsl}</code><button class="secondary color-copy" data-value="${hsl}" type="button">Copy</button></div></div>
      `;
      result.querySelectorAll(".color-copy").forEach((button) => button.addEventListener("click", () => extraCopyText(button.dataset.value, "Color copied")));
    } catch (error) {
      result.innerHTML = `<p class="notice">Color conversion failed: ${htmlEscape(error.message)}</p>`;
    }
  };
  document.querySelector("#convertColor").addEventListener("click", convert);
  picker.addEventListener("input", () => {
    input.value = picker.value.toUpperCase();
    convert();
  });
  input.addEventListener("change", convert);
  convert();
}

function relativeLuminance(color) {
  const channel = (value) => {
    const normalized = value / 255;
    return normalized <= 0.04045 ? normalized / 12.92 : ((normalized + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * channel(color.r) + 0.7152 * channel(color.g) + 0.0722 * channel(color.b);
}

function contrastRatio(first, second) {
  const firstLuminance = relativeLuminance(first);
  const secondLuminance = relativeLuminance(second);
  return (Math.max(firstLuminance, secondLuminance) + 0.05) / (Math.min(firstLuminance, secondLuminance) + 0.05);
}

function contrastStatus(label, passed) {
  return `<div class="contrast-status ${passed ? "pass" : "fail"}"><span>${label}</span><strong>${passed ? "Pass" : "Fail"}</strong></div>`;
}

function contrastCheckerBody() {
  return `
    <div class="form-grid two-col contrast-controls">
      <div class="color-input-row compact"><div class="field"><label for="foregroundColor">Foreground</label><input id="foregroundColor" type="text" value="#172026"></div><div class="field color-picker-field"><label for="foregroundPicker">Pick</label><input id="foregroundPicker" type="color" value="#172026"></div></div>
      <div class="color-input-row compact"><div class="field"><label for="backgroundColor">Background</label><input id="backgroundColor" type="text" value="#FFFFFF"></div><div class="field color-picker-field"><label for="backgroundPicker">Pick</label><input id="backgroundPicker" type="color" value="#ffffff"></div></div>
    </div>
    <div class="actions"><button class="primary" id="checkContrast" type="button">Check Contrast</button><button class="secondary" id="swapContrast" type="button">Swap Colors</button></div>
    <div class="result" id="contrastResult"></div>
  `;
}

function initContrastChecker() {
  const foreground = document.querySelector("#foregroundColor");
  const background = document.querySelector("#backgroundColor");
  const foregroundPicker = document.querySelector("#foregroundPicker");
  const backgroundPicker = document.querySelector("#backgroundPicker");
  const result = document.querySelector("#contrastResult");
  const check = () => {
    try {
      const foregroundValue = parseCssColor(foreground.value);
      const backgroundValue = parseCssColor(background.value);
      if (foregroundValue.a < 1 || backgroundValue.a < 1) throw new Error("Contrast checking requires opaque colors without alpha transparency.");
      const ratio = contrastRatio(foregroundValue, backgroundValue);
      const foregroundHex = colorHex(foregroundValue, false);
      const backgroundHex = colorHex(backgroundValue, false);
      foregroundPicker.value = foregroundHex.toLowerCase();
      backgroundPicker.value = backgroundHex.toLowerCase();
      result.innerHTML = `
        <div class="contrast-preview" style="color:${foregroundHex};background:${backgroundHex}"><strong>Readable sample text</strong><span>The quick brown fox jumps over the lazy dog.</span></div>
        <div class="contrast-ratio"><span>Contrast ratio</span><strong>${ratio.toFixed(2)}:1</strong></div>
        <div class="contrast-status-grid">${contrastStatus("AA normal text (4.5:1)", ratio >= 4.5)}${contrastStatus("AA large text (3:1)", ratio >= 3)}${contrastStatus("AAA normal text (7:1)", ratio >= 7)}${contrastStatus("AAA large text (4.5:1)", ratio >= 4.5)}</div>
      `;
    } catch (error) {
      result.innerHTML = `<p class="notice">Contrast check failed: ${htmlEscape(error.message)}</p>`;
    }
  };
  document.querySelector("#checkContrast").addEventListener("click", check);
  document.querySelector("#swapContrast").addEventListener("click", () => {
    const current = foreground.value;
    foreground.value = background.value;
    background.value = current;
    check();
  });
  [[foregroundPicker, foreground], [backgroundPicker, background]].forEach(([picker, input]) => picker.addEventListener("input", () => {
    input.value = picker.value.toUpperCase();
    check();
  }));
  check();
}
