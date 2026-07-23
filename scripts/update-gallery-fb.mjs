#!/usr/bin/env node
/** Auto-add all public/social/fb-*.jpg to lib/content/gallery.ts */
import { readFileSync, writeFileSync, readdirSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const socialDir = join(root, "public", "social");
const galleryPath = join(root, "lib", "content", "gallery.ts");
const inventoryPath = join(__dirname, "fb-photo-inventory.json");

const inventory = existsSync(inventoryPath)
  ? JSON.parse(readFileSync(inventoryPath, "utf8"))
  : [];

const altById = new Map();
for (const item of inventory) {
  const m = item.src?.match(/\/(\d+_\d+_\d+_[^/?]+)/);
  if (!m) continue;
  const id = m[1].replace(/\.(jpg|jpeg|png|webp)$/i, "");
  const alt = item.alt && item.alt !== "No photo description available." ? item.alt : "";
  if (alt) altById.set(id, alt);
}

function inferCategory(alt) {
  const a = (alt || "").toLowerCase();
  if (/wedding|bride|groom|ceremony|reception|floral/.test(a)) return "weddings";
  if (/cruise|viking|celebrity|ship|river cruise|ocean/.test(a)) return "cruises";
  if (/agent|highlight|erica|joie|terri|team|advisor/.test(a)) return "team";
  if (/promo|promotion|gratuit|deal|offer|sale|discount/.test(a)) return "promotions";
  if (/machu|panama|destination|resort|beach|travel|fishing|colonial|casco/.test(a))
    return "destinations";
  return "destinations";
}

function slugFromId(id) {
  return `fb-${id}`.replace(/[^a-zA-Z0-9_-]/g, "-").slice(0, 80);
}

const gallerySrc = readFileSync(galleryPath, "utf8");
const existingSrcs = new Set([...gallerySrc.matchAll(/src:\s*"([^"]+)"/g)].map((m) => m[1]));

const fbFiles = readdirSync(socialDir)
  .filter((f) => f.startsWith("fb-") && f.endsWith(".jpg"))
  .sort();

const newEntries = [];
for (const file of fbFiles) {
  const src = `/social/${file}`;
  if (existingSrcs.has(src)) continue;

  const cdnId = file.replace(/^fb-/, "").replace(/\.jpg$/, "");
  const alt =
    altById.get(cdnId) ||
    altById.get(cdnId.replace(/-/g, "_")) ||
    "Blue Water Travel Facebook photo";
  const category = inferCategory(alt);
  const id = slugFromId(cdnId);
  const caption = alt.includes("Facebook")
    ? alt
    : `${alt} — Blue Water Travel Facebook`;

  newEntries.push({ id, src, alt, category, caption });
}

if (newEntries.length === 0) {
  console.log("No new gallery entries to add");
  process.exit(0);
}

// Insert before closing ]; of galleryImages
const insertPoint = gallerySrc.lastIndexOf("];");
if (insertPoint === -1) throw new Error("Could not find galleryImages array end");

const blocks = newEntries.map(
  (e) => `  {
    id: "${e.id}",
    src: "${e.src}",
    alt: "${e.alt.replace(/"/g, '\\"')}",
    category: "${e.category}",
    caption: "${e.caption.replace(/"/g, '\\"')}",
  }`
);

let updated = gallerySrc.slice(0, insertPoint);
if (!updated.trimEnd().endsWith(",")) {
  updated = updated.trimEnd();
  if (!updated.endsWith("[")) updated += ",";
  updated += "\n";
} else {
  updated += "\n";
}
updated += blocks.join(",\n") + ",\n";
updated += gallerySrc.slice(insertPoint);

// Add promotions category if needed
if (
  newEntries.some((e) => e.category === "promotions") &&
  !updated.includes('id: "promotions"')
) {
  updated = updated.replace(
    /(\{ id: "team", label: "Team" \},)/,
    '$1\n  { id: "promotions", label: "Promotions" },'
  );
}

writeFileSync(galleryPath, updated);
console.log(`Added ${newEntries.length} gallery entries (${fbFiles.length} fb files total)`);
