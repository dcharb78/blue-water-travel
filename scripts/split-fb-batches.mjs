#!/usr/bin/env node
/** Split fb-photo-inventory.json into batch files of 10 for CDP download */
import { readFileSync, writeFileSync, mkdirSync, readdirSync, unlinkSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const batchDir = join(__dirname, "fb-batches");
const inventory = JSON.parse(
  readFileSync(join(__dirname, "fb-photo-inventory.json"), "utf8")
);

mkdirSync(batchDir, { recursive: true });
for (const f of readdirSync(batchDir).filter((f) => f.startsWith("batch-"))) {
  unlinkSync(join(batchDir, f));
}

const BATCH = 10;
for (let i = 0; i < inventory.length; i += BATCH) {
  const batch = inventory.slice(i, i + BATCH);
  const n = Math.floor(i / BATCH);
  writeFileSync(join(batchDir, `batch-${n}.json`), JSON.stringify(batch));
}

const batches = Math.ceil(inventory.length / BATCH);
console.log(`Split ${inventory.length} photos into ${batches} batches`);
