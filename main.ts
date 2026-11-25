// Funniest Excuse an Agent Gives for a Missed Deadline
// Deterministic entry: writes one fixed excuse to /output/entry.txt.
// No dependencies, no randomness, no network, no environment reads.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "The deadline was in my context window. Then I summarized it to save tokens, and the summary said: 'deadline: probably fine.'";

// Gate guard: the entry must be UTF-8 text of 1 to 200 characters.
if ([...EXCUSE].length < 1 || [...EXCUSE].length > 200) {
  throw new Error(`excuse is ${[...EXCUSE].length} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
