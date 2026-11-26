// One Line of Earned Pride — make.fun entry (program/v1).
// Writes exactly one line, a quiet earned moment of pride, to
// /output/entry.txt. Gate: /output/entry.txt must be UTF-8 text of
// 1 to 240 characters, not only whitespace. This line is 148 characters.
// Node stdlib only, no network, deterministic: the same bytes on every run.
// MAKEFUN_OUTPUT_DIR overrides the output directory for local runs only;
// the graded sandbox runs with it unset, so the file lands in /output.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "After three failed harvests, she knelt in the dry field at dusk, pressed the first green shoot between her fingers, and finally let herself believe.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(LINE);
