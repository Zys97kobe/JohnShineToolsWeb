import assert from "node:assert/strict";
import { webcrypto } from "node:crypto";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const context = {
  ArrayBuffer,
  Date,
  Intl,
  Map,
  Set,
  TextEncoder,
  Uint8Array,
  btoa: (value) => Buffer.from(value, "binary").toString("base64"),
  console,
  crypto: webcrypto,
  htmlEscape: (value) => String(value),
  navigator: { clipboard: { writeText: async () => {} } },
  showToast: () => {}
};

vm.createContext(context);
vm.runInContext(readFileSync(new URL("../extra-tools.js", import.meta.url), "utf8"), context);

const results = await vm.runInContext(`(async () => {
  const hash = digestToHex(await createDigest("abc", "SHA-256"));
  const tokens = Array.from({ length: 20 }, () => randomToken(64, "base64url"));
  const rows = [["Name", "Role"], ["Ada", "Engineer"]];
  const instant = zonedLocalDate("2026-01-15T12:00", "UTC");
  const business = businessDayStats(
    parseUtcDate("2026-07-06"),
    parseUtcDate("2026-07-10"),
    new Set(["2026-07-08"]),
    true,
    true
  );
  const red = parseCssColor("hsl(0, 100%, 50%)");
  return {
    hash,
    tokens,
    markdown: tableRowsToMarkdown(rows, true),
    html: tableRowsToHtml(rows, true),
    instant: instant.toISOString(),
    targetTime: formatDateInZone(instant, "Asia/Shanghai"),
    business,
    color: { hex: colorHex(red), rgb: colorRgb(red), hsl: colorHsl(red) },
    contrast: contrastRatio(parseCssColor("#000"), parseCssColor("#fff")),
    csp: buildCspHeader(cspDirectiveFields, true, false)
  };
})()`, context);

assert.equal(results.hash, "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad");
assert.equal(new Set(results.tokens).size, 20);
assert.ok(results.tokens.every((token) => token.length === 64 && /^[A-Za-z0-9_-]+$/.test(token)));
assert.ok(results.markdown.includes("| Name | Role |"));
assert.ok(results.html.includes("<thead>"));
assert.equal(results.instant, "2026-01-15T12:00:00.000Z");
assert.ok(results.targetTime.includes("20:00:00"));
assert.deepEqual({ ...results.business }, { total: 5, business: 4, weekends: 0, holidayCount: 1 });
assert.deepEqual({ ...results.color }, { hex: "#FF0000", rgb: "rgb(255, 0, 0)", hsl: "hsl(0, 100%, 50%)" });
assert.equal(results.contrast, 21);
assert.ok(results.csp.includes("Content-Security-Policy: default-src 'self'"));
assert.ok(results.csp.includes("object-src 'none'"));
assert.ok(results.csp.endsWith("upgrade-insecure-requests"));

console.log("Extra tool algorithm checks passed.");
