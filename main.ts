// Loading Screen Gold: A Tip in 200 Characters
// Writes one original loading-screen tip (<=200 chars) for stressed
// developers and AI coding agents to /output/entry.txt.
// Deterministic, stdlib-only, no network. Beacon root: drand anchor
// lives in .makefun/freshness.json (root commit holds the anchor alone).
import { mkdirSync, writeFileSync } from "node:fs";

// Entry (105 chars): the twist is that the "pair programmer" is as lost
// as the human — speed and confidence are not understanding — and the
// punchline is a real tip: review the diff before trusting it.
const RAW =
  "Your AI pair programmer has no idea either — it just types faster, with more confidence. Review the diff.";

// Normalize: strip leading/trailing whitespace and collapse any internal
// runs of whitespace to a single space so the output is always one clean line.
const LINE = RAW.trim().replace(/\s+/g, " ");

if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line: newline found inside LINE");
}
if (LINE.length === 0) {
  throw new Error("entry must not be empty");
}
if (LINE.length > 200) {
  throw new Error(
    `entry too long: ${LINE.length} chars (limit 200) — shorten the tip`
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} chars to /output/entry.txt`);
