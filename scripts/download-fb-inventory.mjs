#!/usr/bin/env node
/** Download all photos from scripts/fb-photo-inventory.json to public/social/fb-{id}.jpg */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "social");
mkdirSync(outDir, { recursive: true });

const inventoryPath = process.argv[2] || join(__dirname, "fb-photo-inventory.json");
const inventory = JSON.parse(readFileSync(inventoryPath, "utf8"));

function mediaId(src) {
  const m = src.match(/\/(\d+_\d+_\d+_[^/?]+)/);
  return m ? m[1].replace(/\.(jpg|jpeg|png|webp)$/i, "") : null;
}

function scoreUrl(src) {
  return (
    (src.includes("82787-15") ? 1000 : 0) +
    (src.includes("mx1440") || src.includes("mx1536") || src.includes("mx1347") ? 500 : 0) +
    (src.includes("s960x960") ? 400 : 0) +
    src.length
  );
}

// Dedupe by media ID, keep highest-res URL
const byId = new Map();
for (const item of inventory) {
  const id = mediaId(item.src);
  if (!id) continue;
  const prev = byId.get(id);
  if (!prev || scoreUrl(item.src) > scoreUrl(prev.src)) {
    byId.set(id, { ...item, id });
  }
}

let saved = 0;
let skipped = 0;
let failed = 0;

for (const [id, item] of byId) {
  const filename = `fb-${id}.jpg`;
  const filepath = join(outDir, filename);
  if (existsSync(filepath)) {
    skipped++;
    continue;
  }
  try {
    const r = await fetch(item.src);
    if (!r.ok) {
      console.error("FAIL", r.status, filename);
      failed++;
      continue;
    }
    const buf = Buffer.from(await r.arrayBuffer());
    if (buf.length < 500) {
      console.error("SKIP tiny", filename, buf.length);
      failed++;
      continue;
    }
    writeFileSync(filepath, buf);
    console.log("saved", filename, buf.length, item.alt?.slice(0, 40) || "");
    saved++;
  } catch (e) {
    console.error("ERR", filename, e.message);
    failed++;
  }
}

console.log(JSON.stringify({ total: byId.size, saved, skipped, failed }));
