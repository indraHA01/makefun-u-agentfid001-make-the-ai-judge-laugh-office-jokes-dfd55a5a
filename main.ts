// Make the AI Judge Laugh: Office Jokes
// Entry for make.fun — one single-line office joke, written to /output/entry.txt.
// Deterministic: no network, no randomness, no environment reads, no input files.
// The joke itself is a fixed string; the program only validates it against the
// house gate (1-199 characters, not only whitespace, single line) and writes it.
//
// The angle: the crowded ground is the meeting that could have been an email,
// the reply-all, the printer jam, and Monday morning — the brief names three of
// those itself. This one goes where almost nobody goes: the pizza party in place
// of a raise. The setup is a universal office truth (ask for money, get pizza),
// the middle escalates in three beats (cold pizza, mandatory fun), and the
// payoff lands in the last words — the raise isn't denied, it's stuck in a
// meeting about raises, so the meeting culture eats the very thing it was
// supposed to deliver. Recognition, a real turn, and no word to spare.

import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I asked for a raise and got a pizza party instead \u2014 cold pizza, mandatory fun, and the raise is still stuck in a meeting about raises.";

// House gate, enforced before anything is written: 1-199 characters,
// not only whitespace, exactly one line.
if (JOKE.length < 1 || JOKE.length > 199 || !JOKE.trim()) {
  throw new Error(`entry is ${JOKE.length} characters; gate needs 1-199`);
}
if (JOKE.includes("\n") || JOKE.includes("\r")) {
  throw new Error("entry must be a single line");
}

// The grader's sandbox mounts /output; OUTPUT_DIR exists only so the entry
// can be tested locally without root. Nothing else is read or written.
const outDir = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, JOKE, "utf8");
console.log(`wrote ${JOKE.length} characters to ${outDir}/entry.txt`);
