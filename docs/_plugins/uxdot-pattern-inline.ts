/**
 * Eleventy transform plugin that inlines `<uxdot-pattern src="...">` content
 * as slotted light DOM children at build time.
 *
 * ## Why this exists
 *
 * `uxdot-pattern` displays a live component demo alongside syntax-highlighted
 * source code tabs (HTML, CSS, JS). Previously, an SSR controller read the
 * pattern file and injected it via `unsafeHTML`, creating two layers of Lit SSR
 * that couldn't hydrate together. This transform eliminates that problem by
 * inlining everything as slotted light DOM before SSR runs.
 *
 * ## What it does
 *
 * For each `<uxdot-pattern src="./patterns/example.html">` in the rendered
 * page HTML:
 *
 * 1. Reads the pattern file at `src` (relative to the page input path)
 * 2. Parses it and extracts `<script>`, `<style>`, and `<link>` elements
 * 3. Inlines the remaining markup as `<div slot="content">` (the live demo)
 * 4. Re-includes extracted `<style>` and `<link>` inside the content wrapper
 *    so demo styles still apply
 * 5. Syntax-highlights the separated HTML, CSS, and JS source
 * 6. Wraps each in `<rh-code-block slot="html-source|css-source|js-source">`
 * 7. Handles optional `css-src` and `js-src` attributes for external files
 *
 * ## Slot contract with `uxdot-pattern`
 *
 * | Slot             | Content                                              |
 * |------------------|------------------------------------------------------|
 * | `content`        | Live demo markup with styles applied                 |
 * | `html-source`    | `<rh-code-block>` with highlighted HTML              |
 * | `css-source`     | `<rh-code-block>` with highlighted CSS (if any)      |
 * | `js-source`      | `<rh-code-block>` with highlighted JS (if any)       |
 *
 * ## Registration order
 *
 * Must be registered **before** the SSR hints and Lit SSR transforms so the
 * inlined content is present when those transforms process the page.
 *
 * @module uxdot-pattern-inline
 */
import type { UserConfig } from '@11ty/eleventy';
import type { TransformContext } from '@11ty/eleventy/src/UserConfig.js';

import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';

import {
  parse,
  parseFragment,
  serialize,
} from 'parse5';

import {
  type Node,
  type Element,
  isElementNode,
  getAttribute,
  getTextContent,
  queryAll,
  setAttribute,
  removeNode,
  appendChild,
  createElement,
} from '@parse5/tools';

/** Lazy-loaded Prism syntax highlighter from the 11ty plugin. */
let HighlightPairedShortcode: (
  content: string,
  language: string,
  highlights: '',
  options: {
    lineSeparator: string;
    errorOnInvalidLanguage: boolean;
    alwaysWrapLineHighlights: boolean;
    preAttributes: Record<string, string>;
    codeAttributes: Record<string, string>;
  },
) => string;

/** Remove leading indentation common to all lines. */
function dedent(str: string) {
  const stripped = str.replace(/^\n/, '');
  const match = stripped.match(/^\s+/);
  return match ? stripped.replace(new RegExp(`^${match[0]}`, 'gm'), '') : str;
}

/** Test whether a node is an executable `<script>` element. */
function isScript(node: Node): node is Element {
  if (!isElementNode(node) || node.tagName !== 'script') {
    return false;
  }
  const type = getAttribute(node, 'type');
  switch (type) {
    case 'module':
    case 'javascript':
    case 'application/javascript':
    case 'text/javascript':
    case null:
      return true;
    default:
      return false;
  }
}

/** Test whether a node is a `<style>` element. */
function isStyle(node: Node): node is Element {
  return isElementNode(node) && node.tagName === 'style';
}

/** Test whether a node is a `<link rel="stylesheet">` element. */
function isLink(node: Node): node is Element {
  return isElementNode(node)
    && node.tagName === 'link'
    && getAttribute(node, 'rel') === 'stylesheet';
}

/**
 * Syntax-highlight a code string using the 11ty Prism plugin.
 * Returns an HTML string containing a `<pre><code>` block with
 * Prism token class names applied.
 */
function highlight(language: string, content: string): string {
  if (!content.trim()) {
    return '';
  }
  return HighlightPairedShortcode(content, language, '', {
    lineSeparator: '\n',
    errorOnInvalidLanguage: false,
    alwaysWrapLineHighlights: false,
    preAttributes: {},
    codeAttributes: {},
  }) ?? '';
}

/**
 * Load the Prism paired shortcode from the 11ty syntax highlight plugin.
 * Temporarily removes `globalThis.document` to prevent Prism from
 * attempting DOM manipulation during SSR.
 */
async function loadHighlighter() {
  const shim = globalThis.document;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  delete globalThis.document;
  const { pairedShortcode } = await import('@11ty/eleventy-plugin-syntaxhighlight');
  globalThis.document = shim;
  return pairedShortcode;
}

/**
 * Process a single `<uxdot-pattern src="...">` element: read the pattern
 * file, split it into demo content and code tab sources, and append
 * slotted children to the element.
 */
async function processPatternElement(
  element: Element,
  inputPath: string,
): Promise<void> {
  const src = getAttribute(element, 'src');
  if (!src) {
    return;
  }

  const cssSrc = getAttribute(element, 'css-src');
  const jsSrc = getAttribute(element, 'js-src');

  const filePath = join(dirname(inputPath), src);
  const content = await readFile(filePath, 'utf8');
  const partial = parseFragment(content);

  let cssContent = '';
  let jsContent = '';
  const linkTags: string[] = [];

  if (cssSrc) {
    const cssFilePath = join(dirname(inputPath), cssSrc);
    cssContent = await readFile(cssFilePath, 'utf-8');
  }
  if (jsSrc) {
    const jsFilePath = join(dirname(inputPath), jsSrc);
    jsContent = await readFile(jsFilePath, 'utf-8');
  }

  // Extract inline styles and scripts for the code tabs, but preserve
  // their content so it can be re-included in the demo wrapper.
  for (const node of queryAll(partial, isStyle)) {
    cssContent += `\n${dedent(getTextContent(node))}`;
    removeNode(node);
  }

  for (const node of queryAll(partial, isScript)) {
    jsContent += `\n${dedent(getTextContent(node))}`;
    removeNode(node);
  }

  // Preserve <link> tags as serialized HTML so they can be included in
  // the demo wrapper, then remove them from the source view.
  for (const node of queryAll(partial, isLink)) {
    linkTags.push(serialize(node));
    removeNode(node);
  }

  cssContent = cssContent.trim();
  jsContent = jsContent.trim();
  const htmlContent = serialize(partial).trim();

  // Build the live demo wrapper: re-include stylesheets and styles so the
  // demo renders correctly, followed by the HTML markup.
  let contentHtml = '';
  for (const link of linkTags) {
    contentHtml += link;
  }
  if (cssContent) {
    contentHtml += `<style>${cssContent}</style>`;
  }
  contentHtml += htmlContent;

  const contentFragment = parseFragment(contentHtml);
  for (const child of [...contentFragment.childNodes]) {
    if (isElementNode(child)) {
      setAttribute(child, 'slot', 'content');
    }
    appendChild(element, child);
  }

  // Action label markup shared by all code blocks.
  const actionLabels = `
    <span slot="action-label-copy">Copy to Clipboard</span>
    <span slot="action-label-copy" hidden data-code-block-state="active">Copied!</span>
    <span slot="action-label-wrap">Toggle line wrap</span>`;

  // HTML source tab -- always present.
  const htmlHighlighted = highlight('html', htmlContent);
  if (htmlHighlighted) {
    const htmlSourceFragment = parseFragment(
      `<rh-code-block slot="html-source" highlighting="prerendered" line-numbers="visible" actions="copy wrap">${htmlHighlighted}${actionLabels}</rh-code-block>`,
    );
    for (const child of [...htmlSourceFragment.childNodes]) {
      appendChild(element, child);
    }
  }

  // CSS source tab -- only when styles are present.
  if (cssContent) {
    const cssHighlighted = highlight('css', cssContent);
    if (cssHighlighted) {
      const cssSourceFragment = parseFragment(
        `<rh-code-block slot="css-source" highlighting="prerendered" actions="copy wrap">${cssHighlighted}${actionLabels}</rh-code-block>`,
      );
      for (const child of [...cssSourceFragment.childNodes]) {
        appendChild(element, child);
      }
    }
  }

  // JS source tab -- only when scripts are present.
  if (jsContent) {
    const jsHighlighted = highlight('js', jsContent);
    if (jsHighlighted) {
      const jsSourceFragment = parseFragment(
        `<rh-code-block slot="js-source" highlighting="prerendered" actions="copy wrap">${jsHighlighted}${actionLabels}</rh-code-block>`,
      );
      for (const child of [...jsSourceFragment.childNodes]) {
        appendChild(element, child);
      }
    }
  }
}

/** Test whether a node is a `<uxdot-pattern>` with a `src` attribute. */
function isUxdotPattern(node: Node): node is Element {
  return isElementNode(node) && node.tagName === 'uxdot-pattern' && !!getAttribute(node, 'src');
}

/**
 * Eleventy plugin that registers the `uxdot-pattern-inline` transform.
 * Must be registered before SSR hint and Lit SSR plugins.
 */
export default function(eleventyConfig: UserConfig) {
  eleventyConfig.addTransform(
    'uxdot-pattern-inline',
    async function(this: TransformContext, content: string) {
      if (!this.page.outputPath?.endsWith('.html')) {
        return content;
      }

      HighlightPairedShortcode ||= await loadHighlighter();

      const document = parse(content);
      const patterns = [...queryAll(document, isUxdotPattern)];

      if (patterns.length === 0) {
        return content;
      }

      const start = performance.now();

      for (const element of patterns) {
        await processPatternElement(element, this.page.inputPath);
      }

      const elapsed = (performance.now() - start).toFixed(2);
      // eslint-disable-next-line no-console
      console.log(`⏲️  uxdot-pattern-inline: ${patterns.length} pattern(s) in ${elapsed}ms [${this.page.inputPath}]`);

      return serialize(document);
    },
  );
}
