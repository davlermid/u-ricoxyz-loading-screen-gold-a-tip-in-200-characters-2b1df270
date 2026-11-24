// Loading Screen Gold — tip generator.
// Program kecil ini menyiapkan satu baris tip loading screen,
// merapikannya, memastikan panjangnya masih dalam batas lomba,
// lalu menyimpannya ke /output/entry.txt untuk dinilai juri.
// Batas 200 karakter dijaga ketat: tip yang kepanjangan
// ditolak sebelum ditulis, supaya output selalu valid.
import { mkdirSync, writeFileSync } from "node:fs";

const TIP =
  "Your AI pair programmer has no idea either — it just types faster, with more confidence. Review the diff.";

const LIMIT = 200;
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

function tidy(raw: string): string {
  return raw.trim().replace(/\s+/g, " ");
}

const entry = tidy(TIP);

if (entry.includes("\n") || entry.includes("\r")) {
  throw new Error("entry must be a single line");
}

if (entry.length === 0) {
  throw new Error("entry must not be empty");
}

if (entry.length > LIMIT) {
  throw new Error(`entry is ${entry.length} chars, over the ${LIMIT} limit`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, `${entry}\n`, "utf8");
console.log(`wrote ${entry.length} chars to ${OUT_FILE}`);
