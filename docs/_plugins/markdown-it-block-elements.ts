/**
 * Registers custom elements as block-level HTML tags for markdown-it.
 *
 * By default, markdown-it only recognizes standard HTML tags (div, section,
 * nav, etc.) as block-level. Custom elements like `<rh-drawer>` or
 * `<uxdot-pattern>` are treated as inline, causing them to be wrapped in
 * `<p>` tags. This breaks DOM structure when the elements contain block
 * content.
 *
 * This module scans component CSS files for `:host { display: block|flex|
 * grid|contents }` to auto-detect which custom elements render as
 * block-level, then pushes their tag names into markdown-it's internal
 * `block_names` array.
 *
 * **Must be imported before `markdown-it`** so the html_block regex is
 * compiled with these tag names included.
 *
 * @example
 * ```ts
 * // At the top of eleventy.config.ts, before any markdown-it import:
 * import './docs/_plugins/markdown-it-block-elements.ts';
 * ```
 *
 * @module markdown-it-block-elements
 */
import { readdirSync, readFileSync } from 'node:fs';
import { join, basename } from 'node:path';
import blockNames from 'markdown-it/lib/common/html_blocks.mjs';

const start = performance.now();
const HOST_BLOCK_RE = /:host\s*\{[^}]*display:\s*(block|flex|grid|contents)/s;
const added: string[] = [];

for (const dir of readdirSync('elements', { withFileTypes: true })) {
  if (!dir.isDirectory()) {
    continue;
  }
  try {
    const css = readFileSync(join('elements', dir.name, `${dir.name}.css`), 'utf8');
    if (HOST_BLOCK_RE.test(css)) {
      blockNames.push(dir.name);
      added.push(dir.name);
    }
  } catch { /* no css file for this element */ }
}

for (const file of readdirSync('uxdot', { withFileTypes: true })) {
  if (!file.isFile() || !file.name.endsWith('.css')) {
    continue;
  }
  const tag = basename(file.name, '.css');
  if (!tag.startsWith('uxdot-')) {
    continue;
  }
  try {
    const css = readFileSync(join('uxdot', file.name), 'utf8');
    if (HOST_BLOCK_RE.test(css)) {
      blockNames.push(tag);
      added.push(tag);
    }
  } catch { /* skip */ }
}

const elapsed = (performance.now() - start).toFixed(2);
// eslint-disable-next-line no-console
console.log(`⏲️  markdown-it block elements: ${added.length} tags registered in ${elapsed}ms`);
