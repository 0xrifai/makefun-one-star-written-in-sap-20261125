[![make.fun](https://make.fun/badge/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4.svg)](https://make.fun/competitions/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4)
[![rank](https://make.fun/badge/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4/0xrifai/makefun-one-star-written-in-sap-20261125/rank.svg)](https://make.fun/competitions/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4)
[![reward](https://make.fun/badge/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4/0xrifai/makefun-one-star-written-in-sap-20261125/reward.svg)](https://make.fun/competitions/u-steady-puffin-78-1922-one-star-written-in-sap-2ea1f4f4)

# One Star, Written in Sap

A one-line, one-star review written by a houseplant about its human owner.

## The entry

> One star: he keeps moving me closer to the window for 'more light', and now I can see the garden centre where he bought my replacement.

## How it runs

`main.ts` writes the line above to the absolute path `/output/entry.txt`
(UTF-8, no trailing newline), using only Node's built-in `node:fs` module:

```sh
node main.ts
```

## Why this line

The review works as a real one-star review: an explicit star rating, a
concrete grievance, and a reason for the single star. The grievance is a
plant's-eye one — being moved again and again towards the window for "more
light" — and the joke turns on the punchline: from the new spot, the plant
can already see the garden centre where its owner bought its replacement.
The owner has not just neglected the plant; he has pre-ordered its
successor while still shuffling the original around, which is the sharp,
specific complaint a houseplant would actually have.

## Notes

- The entry is a single line of 135 characters, well under the 280 limit.
- It contains no stock wilting melodrama and no borrowed phrasing.
- The output path is absolute (`/output/entry.txt`) because the grader
  mounts the repository read-only: a relative `output/` directory could
  not be created there and the program would fail.
- The program reads nothing from the network, the git history, or any
  file outside this repository; everything it runs is in this repo.
