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
 * ### Inner Markdown (backticks inside block custom elements)
 *
 * A whole block like `<rh-alert>`…`</rh-alert>` becomes one `html_block`
 * token. CommonMark does not parse Markdown inside that token, so inline
 * code (backticks) would stay literal and angle brackets could be parsed by
 * the browser as HTML. Call {@link markdownItBlockElementInnerMarkdown} from
 * the markdown-it plugin chain so the **inner** source runs through
 * `renderInline` (backticks, emphasis, inline HTML, etc.).
 *
 * @example
 * ```ts
 * // At the top of eleventy.config.ts, before any markdown-it import:
 * import './docs/_plugins/markdown-it-block-elements.ts';
 * ```
 *
 * @module markdown-it-block-elements
 */
import type MarkdownIt from 'markdown-it';
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

/** Tag names registered as block-level (same order as discovery; use for inner-Markdown pass). */
export const markdownItBlockElementTags: readonly string[] = added;

/**
 * Tags that must be entity-escaped when they appear as raw markup in inline HTML but are
 * not in {@link markdownItBlockElementTags} (e.g. `rh-tile` uses `:host { display: flex }`
 * in a follow-on rule, so the CSS scan misses it — yet bare `<rh-tile>` in prose still
 * upgrades during SSR).
 */
const EXTRA_INNER_HTML_ESCAPE_TAGS: readonly string[] = ['rh-tile'];

function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * After inline Markdown → HTML, any **literal** `&lt;rh-tile&gt;`-style sequences that
 * are still written as real angle brackets (`<rh-tile>`) become actual DOM nodes when
 * the page HTML is parsed — and Lit SSR will upgrade them (see `componentModules` in
 * `eleventy.config.ts`). That produces nested component chrome (e.g. tiles inside
 * alerts) when backticks / links did not fully convert to `&lt;` entities.
 *
 * Content that already went through `renderInline` as `<code>&lt;rh-tile&gt;</code>`
 * does not contain a raw `<rh-tile` substring, so this pass does not double-escape it.
 *
 * @param html Inline HTML from `renderInline`
 * @param tagNames Custom element tag names to escape when they appear as raw markup
 */
function escapeBareCustomElementTags(html: string, tagNames: readonly string[]): string {
  let out = html;
  const sorted = [...tagNames].sort((a, b) => b.length - a.length);
  for (const tag of sorted) {
    const e = escapeRegExp(tag);
    out = out.replace(new RegExp(`<${e}(?=[\\s/>])`, 'gi'), `&lt;${tag}`);
    out = out.replace(new RegExp(`</${e}>`, 'gi'), `&lt;/${tag}&gt;`);
  }
  return out;
}

/**
 * For `html_block` tokens that consist of a single registered custom element,
 * run the inner HTML through `md.renderInline` so backticks and other inline
 * Markdown work inside `<rh-alert>`, `<uxdot-pattern>`, etc.
 *
 * @param md markdown-it instance
 */
export function markdownItBlockElementInnerMarkdown(md: MarkdownIt): void {
  const orig = md.renderer.rules.html_block;
  const tags = [...markdownItBlockElementTags].sort((a, b) => b.length - a.length);
  const matchers = tags.map(tag => {
    const e = escapeRegExp(tag);
    return {
      tag,
      re: new RegExp(`^<${e}([^>]*)>([\\s\\S]*)</${e}>\\s*$`),
    };
  });

  md.renderer.rules.html_block = function(tokens, idx, options, env, self) {
    const token = tokens[idx];
    const trimmed = token.content.trim();
    for (const { tag, re } of matchers) {
      const m = trimmed.match(re);
      if (m) {
        const [, attrs, inner] = m;
        let renderedInner = md.renderInline(inner, env);
        const escapeTags = [
          ...new Set([...markdownItBlockElementTags, ...EXTRA_INNER_HTML_ESCAPE_TAGS]),
        ];
        renderedInner = escapeBareCustomElementTags(renderedInner, escapeTags);
        return `<${tag}${attrs}>${renderedInner}</${tag}>\n`;
      }
    }
    return orig?.call(this, tokens, idx, options, env, self) ?? token.content;
  };
}
