// Fortune Cookie Funnies for Engineers — u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a
// Writes one fortune-cookie line for a software engineer to entry.txt.
// Deterministic: the same bytes on every run.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "You will deploy on Friday and nothing will break — the universe is saving it for Monday.";

// Self-checking gate (mirrors the sealed scorer): UTF-8 text, 1..120 chars,
// single line, not only whitespace.
function gate(text: string): void {
  if (text.length < 1 || text.length > 120) {
    throw new Error(`gate failed: length ${text.length} outside 1..120`);
  }
  if (text.trim().length === 0) {
    throw new Error("gate failed: entry is only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("gate failed: entry must be a single line");
  }
}

gate(ENTRY);

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read-back re-gate: what landed on disk must be byte-identical to the
// gated entry, so a truncated or altered write can never slip through.
const onDisk = readFileSync(outPath, "utf8");
if (onDisk !== ENTRY) {
  throw new Error("re-gate failed: entry.txt on disk differs from gated entry");
}
gate(onDisk);

console.log(ENTRY);
console.log(`wrote ${outPath} (${ENTRY.length} chars)`);
