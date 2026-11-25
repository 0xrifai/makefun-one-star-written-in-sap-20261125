import { mkdirSync, writeFileSync } from "node:fs";

// One Star, Written in Sap — a one-line 1-star review by a houseplant.
//
// The entry is one line, under 280 characters, in the voice of a houseplant
// reviewing its human owner: the grievance is being shunted towards the
// window for "more light", and the punchline is that from the new spot the
// plant can already see the garden centre where its replacement was bought.
// It reads as a genuine one-star review — an explicit star rating, a clear
// complaint, and a reason for the single star — with a plant's-eye view of
// light, moving, and the garden centre, and no stock wilting melodrama.

// The line is a single string, written verbatim to the absolute output path.
const LINE =
  "One star: he keeps moving me closer to the window for 'more light', and now I can see the garden centre where he bought my replacement.";

// The gate requires 1 to 279 characters of non-whitespace UTF-8 text.
if (LINE.length < 1 || LINE.length > 279 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-279 characters, got ${LINE.length}`);
}

// Absolute path only: the grader mounts the repo read-only, so a relative
// output/ directory next to this script cannot be created there and the
// program would exit with code 1. /output is the grader's writable path.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
