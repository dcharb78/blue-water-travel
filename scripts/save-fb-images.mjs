#!/usr/bin/env node
/**
 * Reads JSON array of { filename, base64 } from stdin and writes to public/social/
 */
import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "social");
mkdirSync(outDir, { recursive: true });

let input = "";
process.stdin.setEncoding("utf8");
for await (const chunk of process.stdin) input += chunk;

const items = JSON.parse(input);
for (const { filename, base64 } of items) {
  const path = join(outDir, filename);
  writeFileSync(path, Buffer.from(base64, "base64"));
  console.log("Wrote", path, Buffer.from(base64, "base64").length, "bytes");
}
