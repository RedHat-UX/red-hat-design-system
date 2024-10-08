import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { pathToFileURL } from 'node:url';
import { parseFragment, serialize } from 'parse5';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import * as Tools from '@parse5/tools';
import type { UxdotPattern } from './uxdot-pattern.js';
import type { DirectiveResult } from 'lit/directive.js';

function dedent(str: string) {
  const stripped = str.replace(/^\n/, '');
  const match = stripped.match(/^\s+/);
  return match ? stripped.replace(new RegExp(`^${match[0]}`, 'gm'), '') : str;
}

interface EleventyPageData {
  inputPath: string;
  outputPath: string;
}

export class UxdotPatternSSRControllerServer {
  constructor(public host: UxdotPattern) {}

  #HighlightPairedShortcode?: (
    content: string,
    language: string,
    highlightlines: string,
    options: object,
  ) => string;

  allContent?: DirectiveResult;
  htmlContent?: DirectiveResult;
  cssContent?: DirectiveResult;
  jsContent?: DirectiveResult;
  hasCss = false;
  hasJs = false;
  // this is set in the worker
  page!: EleventyPageData;


  async #extractInlineContent(kind: 'js' | 'css', partial: Tools.Node) {
    const prop = kind === 'js' ? 'jsSrc' as const : 'cssSrc' as const;
    const nodePred = kind === 'js' ? (node: Tools.Element) => node.tagName === 'script'
                   : kind === 'css' ? (node: Tools.Element) => node.tagName === 'style'
                   : () => false;
    const baseUrl = pathToFileURL(this.page.inputPath);
    let content = !this.host[prop] ? ''
                  : await readFile(new URL(this.host[prop], baseUrl.href), 'utf-8');
    for (const scriptTag of Tools.queryAll(partial, node =>
      Tools.isElementNode(node) && nodePred(node))) {
      content += `\n${dedent(Tools.getTextContent(scriptTag))}`;
      Tools.removeNode(scriptTag);
    }
    return content.trim();
  }

  async #getPatternContent() {
    const { src } = this.host;
    if (!src) {
      return '';
    } else {
      return readFile(join(dirname(this.page.inputPath), src), 'utf8');
    }
  }

  #highlight(language: string, content: string) {
    const result = this.#HighlightPairedShortcode?.(content, language, '', {
      lineSeparator: '\n',
      errorOnInvalidLanguage: false,
      alwaysWrapLineHighlights: false,
      preAttributes: {},
      codeAttributes: {},
    }) ?? '';
    return result;
  }

  async hostUpdate() {
    // START workaround for ssr: prism will try to use the DOM is `document` is available
    // but lit-ssr needs the shims, so delete it before highlighting and restore it after
    const shim = globalThis.document;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete globalThis.document;
    this.#HighlightPairedShortcode =
      await import(
        '@11ty/eleventy-plugin-syntaxhighlight/src/HighlightPairedShortcode.js',
      ).then(m => m.default);
    const allContent = await this.#getPatternContent();
    const partial = parseFragment(allContent);

    // NB: the css and js content functions *mutate* the partial,
    //     so it's important that the HTML content is serialized last, and that
    //     the entire content is printed as the runtime portion of the pattern.
    const cssContent = await this.#extractInlineContent('css', partial);
    const jsContent = await this.#extractInlineContent('js', partial);
    const htmlContent = serialize(partial).trim();

    this.hasCss = !!cssContent.length;
    this.hasJs = !!jsContent.length;
    this.allContent = unsafeHTML(allContent);
    this.cssContent = unsafeHTML(this.#highlight('css', cssContent));
    this.jsContent = unsafeHTML(this.#highlight('js', jsContent));
    this.htmlContent = unsafeHTML(this.#highlight('html', htmlContent));
    // END workaround
    globalThis.document = shim;
    return [];
  }
}

