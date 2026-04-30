import type { DirectiveResult } from 'lit/directive.js';
import type { RenderInfo } from '@lit-labs/ssr';

import { URL } from 'node:url';

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname, basename, relative } from 'node:path';
import { pathToFileURL } from 'node:url';
import { parseFragment, serialize } from 'parse5';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { RHDSSSRController } from '@rhds/elements/lib/ssr-controller.js';

import * as Tools from '@parse5/tools';
import type { UxdotPattern } from './uxdot-pattern.js';

import { injectSSRHintAttributes } from '#11ty-plugins/ssr-hints.js';

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

function dedent(str: string) {
  const stripped = str.replace(/^\n/, '');
  const match = stripped.match(/^\s+/);
  return match ? stripped.replace(new RegExp(`^${match[0]}`, 'gm'), '') : str;
}

function isScript(node: Tools.Element) {
  if (node.tagName === 'script') {
    const type = Tools.getAttribute(node, 'type');
    switch (type) {
      case 'module':
      case 'javascript':
      case 'application/javascript':
      case 'text/javascript':
      case null:
        return true;
    }
  }
  return false;
}

function isStyle(node: Tools.Element) {
  return node.tagName === 'style';
}

interface EleventyPageData {
  inputPath: string;
  outputPath: string;
}

interface RHDSRenderInfo extends RenderInfo {
  page: EleventyPageData;
  slotControllerElements: string[];
}

export class UxdotPatternSSRControllerServer extends RHDSSSRController {
  declare host: UxdotPattern;
  allContent?: DirectiveResult;
  htmlContent?: DirectiveResult;
  cssContent?: DirectiveResult;
  jsContent?: DirectiveResult;
  hasCss = false;
  hasJs = false;
  viewportSrc?: string;

  async #extractInlineContent(kind: 'js' | 'css', partial: Tools.Node, baseUrl: URL) {
    const prop = kind === 'js' ? 'jsSrc' as const : 'cssSrc' as const;
    const nodePred = kind === 'js' ? isScript
                   : kind === 'css' ? isStyle
                   : () => false;
    let content = !this.host[prop] ? ''
                  : await readFile(new URL(this.host[prop], baseUrl.href), 'utf-8');
    for (const scriptTag of Tools.queryAll(partial, node =>
      Tools.isElementNode(node) && nodePred(node))) {
      content += `\n${dedent(Tools.getTextContent(scriptTag))}`;
      Tools.removeNode(scriptTag);
    }
    return content.trim();
  }

  async #getPatternContent(renderInfo: RHDSRenderInfo) {
    const { src } = this.host;
    if (!src) {
      return '';
    } else {
      return readFile(join(dirname(renderInfo.page.inputPath), src), 'utf8');
    }
  }

  #highlight(language: string, content: string) {
    const result = HighlightPairedShortcode(content, language, '', {
      lineSeparator: '\n',
      errorOnInvalidLanguage: false,
      alwaysWrapLineHighlights: false,
      preAttributes: {},
      codeAttributes: {},
    }) ?? '';
    return result;
  }

  async #loadHighlighter() {
    // START workaround for ssr: prism will try to use the DOM is `document` is available
    // but lit-ssr needs the shims, so delete it before highlighting and restore it after
    const shim = globalThis.document;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete globalThis.document;
    const { pairedShortcode } = await import('@11ty/eleventy-plugin-syntaxhighlight');
    // END workaround
    globalThis.document = shim;
    return pairedShortcode;
  }

  async ssrSetup(renderInfo: RHDSRenderInfo) {
    HighlightPairedShortcode ||= await this.#loadHighlighter();
    const content = await this.#getPatternContent(renderInfo);

    const partial = parseFragment(content);

    injectSSRHintAttributes.call(this, partial, renderInfo);

    const allContent = serialize(partial).trim();

    const baseUrl = pathToFileURL(renderInfo.page.inputPath);

    // NB: the css and js content functions *mutate* the partial,
    //     so it's important that the HTML content is serialized last, and that
    //     the entire content is printed as the runtime portion of the pattern.
    const cssContent = await this.#extractInlineContent('css', partial, baseUrl);
    const jsContent = await this.#extractInlineContent('js', partial, baseUrl);

    const htmlContent = serialize(partial).trim();

    this.hasCss = !!cssContent.length;
    this.hasJs = !!jsContent.length;
    this.allContent = unsafeHTML(allContent);
    this.cssContent = unsafeHTML(this.#highlight('css', cssContent));
    this.jsContent = unsafeHTML(this.#highlight('js', jsContent));
    this.htmlContent = unsafeHTML(this.#highlight('html', htmlContent));

    if (this.host.viewport) {
      await this.#writeViewportPage(allContent, renderInfo);
    }
  }

  async #writeViewportPage(content: string, renderInfo: RHDSRenderInfo) {
    const { src } = this.host;
    if (!src) {
      return;
    }
    const slug = basename(src, '.html');
    const outputDir = dirname(renderInfo.page.outputPath);
    const viewportDir = join(outputDir, '_iframe');
    const viewportFile = join(viewportDir, `${slug}.html`);

    await mkdir(viewportDir, { recursive: true });

    const { AssetCache } = await import('@11ty/eleventy-fetch');
    const assetCache = new AssetCache('rhds-ux-dot-import-map');
    const importMap = assetCache.isCacheValid('1d')
      ? await assetCache.getCachedValue()
      : {};

    const page = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script type="importmap">${JSON.stringify(importMap)}</script>
  <link rel="stylesheet" href="/assets/packages/@rhds/tokens/css/global.css">
  <link rel="stylesheet" href="/styles/fonts.css">
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: var(--rh-font-family-body-text);
    }
  </style>
</head>
<body>
${content}
</body>
</html>`;

    await writeFile(viewportFile, page, 'utf8');

    const siteRoot = join(process.cwd(), '_site');
    this.viewportSrc = '/' + relative(siteRoot, viewportFile);
  }
}
