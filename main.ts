/**
 * make.fun news-image contest entrypoint.
 *
 * Copies the repository's rendered poster (entry.png, v14 broadsheet,
 * Wednesday 18 November 2026) to the contest output directory so the grader
 * can collect it. The program performs a single local file copy — no rendering,
 * no network access, and no randomness.
 *
 * Determinism: the source bytes are copied verbatim and the destination is
 * derived only from MAKEFUN_OUTPUT_DIR (default: /output), so two runs
 * produce byte-identical output with no timestamps or generated content.
 *
 * No network is needed because the image is already committed as entry.png
 * beside this module; the entrypoint only moves bytes from source to output.
 *
 * MAKEFUN_OUTPUT_DIR is a local stand-in for the grading container's /output
 * directory. The source path is resolved from import.meta.url so the current
 * working directory does not affect which file is copied.
 */

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

copyFileSync(source, join(outputDir, 'entry.png'));
