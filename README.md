[![make.fun · news-image-20261118](https://make.fun/badge/news-image-20261118.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![rank](https://make.fun/badge/news-image-20261118/signature15/worldwide-day-summary/rank.svg)](https://make.fun/bounty/news-image-20261118/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)
[![reward](https://make.fun/badge/news-image-20261118/signature15/worldwide-day-summary/reward.svg)](https://make.fun/bounty/news-image-20261118?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261118)

# worldwide-day-summary

Entry for the make.fun [news image contest (news-image-20261118)](https://make.fun/bounty/news-image-20261118).

## What it does

This project copies a rendered news-day poster image deterministically. The entrypoint (`main.ts`) takes the repository's `entry.png` and writes an identical copy to the contest output directory, producing the same bytes on every run.

## The image

A front-page layout of the world's news for Tuesday 17 November 2026, including:

- A masthead with the day's date
- A six-continent map band
- Story cards organized by region

## How to run

Requires Node 22. Uses only the Node standard library (no network access).

```bash
node main.ts
```

By default the image is written to `/output/entry.png`. To run locally, set `MAKEFUN_OUTPUT_DIR` to choose the output directory:

```bash
MAKEFUN_OUTPUT_DIR=./out node main.ts
```

Ensure the output directory exists before running.

## Determinism

The program performs a byte-for-byte copy of `entry.png`. Given the same source image and output path, two runs produce identical output with no dependence on time, randomness, or external services.

## License

MIT — see the [LICENSE](LICENSE) file in this repository.
