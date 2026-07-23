#!/usr/bin/env node
/** Usage: node scripts/import-fb-cdp-batch.mjs <cdp-json-path> */
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "social");
const cdpPath = process.argv[2];
const raw = readFileSync(cdpPath, "utf8");
const parsed = JSON.parse(raw);
const items = JSON.parse(parsed.result.value);

let n = 0;
for (const item of items) {
  const { filename, b64, alt, id } = item;
  if (!b64) continue;
  const path = join(outDir, filename);
  if (existsSync(path)) continue;
  writeFileSync(path, Buffer.from(b64, "base64"));
  console.log("saved", filename, alt?.slice(0, 50) || id);
  n++;
}
console.log("batch saved:", n);
