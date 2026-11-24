import { mkdirSync, writeFileSync } from "node:fs";

const entry = "The hotel charged me $40 for a minibar cashew, so I ate it slowly in front of the mirror, just to make sure at least one of us enjoyed it.";

if (entry.length < 1 || entry.length > 280 || entry.trim().length === 0) {
  throw new Error(`entry must be 1-280 non-blank characters, got ${entry.length}`);
}
if (entry.split("\n").length !== 1) {
  throw new Error("entry must be exactly one line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(`${entry.length} characters written to /output/entry.txt`);
