// Banned-word scan for explicit file paths (same regex as _verify-rebrand.mjs).
import { readFileSync } from 'node:fs';

const BANNED =
  /(?<![a-zA-Z])(sups?|paddles?|paddling|paddlers?|surfing|surfers?|surfer|surfs|surf|kayaks?|vests?|wetsuit|isup|boards?)(?![a-zA-Z])/i;

const files = process.argv.slice(2);
let hits = 0;
for (const f of files) {
  const lines = readFileSync(f, 'utf8').split('\n');
  lines.forEach((l, i) => {
    if (BANNED.test(l)) {
      hits++;
      console.log(`${f}:${i + 1}: ${l.trim().slice(0, 140)}`);
    }
  });
}
console.log(hits === 0 ? 'CLEAN' : `${hits} hit lines`);
