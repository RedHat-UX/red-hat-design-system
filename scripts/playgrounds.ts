import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { pathToFileURL } from 'node:url';
import chalk from 'chalk';

import type { FileOptions, ProjectManifest } from 'playground-elements/shared/worker-api.js';

import { getPfeConfig, type PfeConfig } from '@patternfly/pfe-tools/config.js';
import {
  type DemoRecord,
  Manifest,
} from '@patternfly/pfe-tools/custom-elements-manifest/lib/Manifest.js';

import { parseFragment, serialize } from 'parse5';

import * as Tools from '@parse5/tools';

type CustomElementName = `${string}-${string}`;
type FilePath = string;

/**
 * named capture group 1 `attr`:
 * > Either `href` or `src`
 * `="/elements/rh-`
 * named capture group 2 `unprefixed`:
 * > **ANY** (_>= 0x_)
 * `/`
 * named capture group 3 `filename`:
 * > **ANY** (_>= 0x_)
 * `.`
 * named capture group 4 `extension`:
 * > One of `.`, or **WORD** (_>= 1x_)
 * `"`
 */
const DEMO_SUBRESOURCE_RE =
  /(?<attr>href|src)="\/elements\/rh-(?<unprefixed>.*)\/(?<filename>.*)\.(?<extension>[.\w]+)"/g;

/**
 * `/elements/`
 * capture group 1:
 * > **ANY** (_>= 0x_)
 * `/demo/'
 * 1st capture group
 * '.html`
 */
const DEMO_FILEPATH_IS_MAIN_DEMO_RE = /\/elements\/(.*)\/demo\/\1\.html/;

/**
 * Elements which can support a `src=""` attribute which points to a subresource
 */
const SRC_SUBRESOURCE_TAGNAMES = new Set([
  'img',
  'rh-avatar',
]);

/** Returns a string with common indent stripped from each line. Useful for templating HTML */
function dedent(str: string) {
  const stripped = str.replace(/^\n/, '');
  const match = stripped.match(/^\s+/);
  return match ? stripped.replace(new RegExp(`^${match[0]}`, 'gm'), '') : str;
}

function groupBy<T extends object>(prop: keyof T, xs: T[]): Record<string, T[]> {
  return xs.reduce((acc, x) =>
    Object.assign(acc, {
      [x[prop as string]]: [...acc[x[prop as string]] ?? [], x],
    }), {});
}

function getDemoFilename(x: DemoRecord) {
  return `demo/${(x.url.split('/demo/').pop() || `${x.primaryElementName}.html`).replace(/\/$/, '.html')}`
      .replace('.html', '/index.html')
      .replace(`${x.primaryElementName}/index.html`, 'index.html');
}

/**
 * Replace paths in demo files from the dev SPA's format to 11ty's format
 * @param content content
 * @param pathname pathname
 */
function demoPaths(content: string, pathname: string) {
  if (pathname.match(/elements\/.*\/demo\/index\.html$/)) {
    return content.replace(DEMO_SUBRESOURCE_RE, (...args) => {
      const [{ attr, unprefixed, filename, extension }] = args.reverse();
      return `${attr}="/elements/${unprefixed}/${filename}.${extension}"`;
    });
  } else {
    return content;
  }
}

function isModuleScript(node: Tools.Element) {
  return (
    node.tagName === 'script'
    && node.attrs.some(x => x.name === 'type' && x.value === 'module')
  );
}

function isInlineModule(node: Tools.Node): node is Tools.Element {
  return Tools.isElementNode(node)
          && isModuleScript(node)
          && !node.attrs.some(({ name }) => name === 'src');
}

function isStyleElement(node: Tools.Element) {
  return node.tagName === 'style';
}

function isStyleLink(node: Tools.Element) {
  return (
    node.tagName === 'link'
    && node.attrs.some(x => x.name === 'rel' && x.value === 'stylesheet')
    && node.attrs.some(x => x.name === 'href')
  );
}

function hasLocalSrcAttr(node: Tools.Element) {
  return (
    node.attrs.some(({ name, value }) => name === 'src' && !value.startsWith('http'))
  );
}

function getAttrMap(node: Tools.Element) {
  return Object.fromEntries(node.attrs.map(({ name, value }) =>
    [name, value]));
}

class SubresourceError extends Error {
  constructor(
    message: string,
    public originalError: Error,
    public subresourceFileURL: URL,
  ) {
    super(message);
  }
}

class PlaygroundDemo {
  private static isValidDemo(demo: DemoRecord): demo is Required<DemoRecord> {
    return !!demo.filePath && !demo.filePath.endsWith('proxy.html');
  }

  static async of(demo: DemoRecord) {
    if (this.isValidDemo(demo)) {
      const filename = getDemoFilename(demo);
      const isMainDemo = filename === 'demo/index.html';
      const demoSlug = filename.split('/').at(1);
      if (!demoSlug) {
        throw new Error(`No slug for ${filename}`);
      }
      return new PlaygroundDemo(
        demo,
        filename,
        isMainDemo,
        demoSlug,
        parseFragment(await fs.readFile(demo.filePath, 'utf8')),
      );
    }
  }

  private constructor(
    private demo: Required<DemoRecord>,
    private filename: string,
    private isMainDemo: boolean,
    private demoSlug: string,
    private fragment: Tools.DocumentFragment,
  ) {
    const cssPrefix = this.demo.filePath.match(DEMO_FILEPATH_IS_MAIN_DEMO_RE) ? '' : '../';
    this.append(Tools.createTextNode('\n'),
                Tools.createCommentNode('playground-fold'),
                Tools.createTextNode('\n'),
                Tools.createElement('link', {
                  rel: 'stylesheet',
                  href: `${cssPrefix}reset.css`,
                }),
                Tools.createTextNode('\n'),
                Tools.createElement('link', {
                  rel: 'stylesheet',
                  href: `${cssPrefix}fonts.css`,
                }),
                Tools.createTextNode('\n'),
                Tools.createElement('link', {
                  rel: 'stylesheet',
                  href: `${cssPrefix}typography.css`,
                }),
                Tools.createCommentNode('playground-fold-end'));
  }

  public async addFiles(fileMap: PlaygroundFileMap) {
    this.splitOutInlineStyles(fileMap);
    this.splitOutInlineModules(fileMap);
    await this.addAllSubresources(fileMap);
    fileMap.set(this.filename, {
      contentType: 'text/html',
      selected: this.isMainDemo,
      content: demoPaths(serialize(this.fragment), this.demo.filePath),
      label: this.demo.title,
    });
  }

  private append(...nodes: Tools.ChildNode[]) {
    Tools.spliceChildren(this.fragment, Infinity, 0, ...nodes);
  }

  private async addSubresourceURL(fileMap: PlaygroundFileMap, subresourceURL: string) {
    const { isMainDemo, demoSlug } = this;
    /** @see docs/_plugins/rhds.cjs demoPaths transform */
    const base = pathToFileURL(path.join(
      process.cwd(),
      'elements',
      this.demo.primaryElementName,
      'demo/',
    ));
    const docsDir = pathToFileURL(path.join(process.cwd(), 'docs/'));
    if (subresourceURL && !subresourceURL.startsWith('http')) {
      const subresourceFileURL =
        !subresourceURL.startsWith('/') ? new URL(subresourceURL, base)
      : new URL(subresourceURL.replace('/', './'), docsDir);
      try {
        const resourceName =
          path.normalize(`demo${isMainDemo ? '' : `/${demoSlug}`}/${subresourceURL}`);
        if (!fileMap.has(resourceName)) {
          const content =
            demoPaths(await fs.readFile(subresourceFileURL, 'utf8'), subresourceFileURL.pathname);
          let contentType = 'text/plain';
          switch (subresourceURL.split('.').pop()) {
            case 'html': contentType = 'text/html'; break;
            case 'css': contentType = 'text/css'; break;
            case 'js': contentType = 'text/javascript'; break;
          }
          fileMap.set(resourceName, {
            content,
            contentType,
            hidden: true,
          });
        }
      } catch (e) {
        throw new SubresourceError(
          `Could not find subresource ${subresourceURL} at ${subresourceFileURL?.href ?? 'unknown'}`,
          e,
          subresourceFileURL,
        );
      }
    }
  }

  private async addAllSubresources(fileMap: PlaygroundFileMap) {
    const hrefSubresourceElements: IterableIterator<Tools.Element> =
          Tools.queryAll(this.fragment, node =>
            Tools.isElementNode(node)
              && isStyleLink(node));

    const srcSubresourceElements: IterableIterator<Tools.Element> =
          Tools.queryAll(this.fragment, node =>
            Tools.isElementNode(node)
            && SRC_SUBRESOURCE_TAGNAMES.has(node.tagName)
            && hasLocalSrcAttr(node));

    // register demo css resources
    for (const el of hrefSubresourceElements) {
      try {
        const attrs = getAttrMap(el);
        await this.addSubresourceURL(fileMap, attrs.href);
      } catch (e) {
        // we can swallow the error for the demo typography and font file because we wrote it ourselves above.
        // maybe not the most elegant solution, but it works
        if (e.subresourceFileURL?.href?.endsWith('typography.css')
            || e.subresourceFileURL?.href?.endsWith('reset.css')
            || e.subresourceFileURL?.href?.endsWith('fonts.css')) {
          continue;
        } else {
          // In order to surface the error to the user, let's enable console logging
          // eslint-disable-next-line no-console
          console.log(e.message);
          throw e;
        }
      }
    }

    // register demo script and image resources
    for (const el of srcSubresourceElements) {
      const attrs = getAttrMap(el);
      await this.addSubresourceURL(fileMap, attrs.src);
    }
  }

  private replaceInlineNode(fileMap: PlaygroundFileMap, node: Tools.Element, name: string) {
    const source = node.childNodes.map(x =>
      (x as Tools.TextNode).value ?? '').join('\n');
    const content = dedent(source);
    fileMap.set(`demo/${name}`, {
      content,
      // @ts-expect-error: this is a hint to our njk template
      inline: this.filename,
    });
    Tools.removeNode(node);
  }

  /** @see https://github.com/google/playground-elements/issues/93#issuecomment-1775247123 */
  private async splitOutInlineModules(fileMap: PlaygroundFileMap) {
    Array.from(Tools.queryAll<Tools.Element>(this.fragment, isInlineModule)).forEach((node, i) => {
      const moduleName = `${this.demo.primaryElementName}-${this.demoSlug.replace('.html', '')}-inline-script-${i++}.js`;
      this.append(Tools.createTextNode('\n'),
                  Tools.createCommentNode('playground-fold'),
                  Tools.createTextNode('\n'),
                  Tools.createElement('script', {
                    type: 'module',
                    src: `./${this.demoSlug === 'index.html' ? '' : '../'}${moduleName}`,
                  }),
                  Tools.createTextNode('\n'),
                  Tools.createCommentNode('playground-fold-end'),
      );
      this.replaceInlineNode(fileMap, node, moduleName);
    });
  }

  private async splitOutInlineStyles(fileMap: PlaygroundFileMap) {
    const inlineStyles: IterableIterator<Tools.Element> =
      Tools.queryAll(this.fragment, node => Tools.isElementNode(node) && isStyleElement(node));

    Array.from(inlineStyles).forEach((node, i) => {
      const stylesheetName = `${this.demo.primaryElementName}-${this.demoSlug.replace('.html', '')}-inline-style-${i++}.css`;
      this.append(Tools.createTextNode('\n\n'),
                  Tools.createCommentNode('playground-fold'),
                  Tools.createElement('link', {
                    rel: 'stylesheet',
                    href: `./${this.demoSlug === 'index.html' ? '' : '../'}${stylesheetName}`,
                  }),
                  Tools.createTextNode('\n'),
                  Tools.createCommentNode('playground-fold-end'),
      );
      this.replaceInlineNode(fileMap, node, stylesheetName);
    });
  }
}

class PlaygroundFileMap extends Map<FilePath, FileOptions> {
  private static urls = {
    reset: pathToFileURL(path.join(process.cwd(), 'docs/styles/reset.css')),
    fonts: pathToFileURL(path.join(process.cwd(), 'docs/styles/fonts.css')),
    typography: pathToFileURL(path.join(process.cwd(), 'docs/styles/typography.css')),
  };

  private static sources: Partial<Record<keyof typeof PlaygroundFileMap.urls, string>> = {};

  static async of(demos: DemoRecord[]) {
    this.sources.reset ??= await fs.readFile(this.urls.reset.pathname, 'utf8');
    this.sources.fonts ??= await fs.readFile(this.urls.fonts.pathname, 'utf8');
    this.sources.typography ??= await fs.readFile(this.urls.typography.pathname, 'utf8');
    const map = new PlaygroundFileMap();
    for (const demo of demos) {
      const playgroundDemo = await PlaygroundDemo.of(demo);
      await playgroundDemo?.addFiles(map);
    }
    return map;
  }

  private constructor() {
    super();
  }

  print() {
    this.set('demo/reset.css', {
      contentType: 'text/css',
      content: PlaygroundFileMap.sources.reset,
      hidden: true,
    });

    this.set('demo/fonts.css', {
      contentType: 'text/css',
      content: PlaygroundFileMap.sources.fonts,
      hidden: true,
    });

    this.set('demo/typography.css', {
      contentType: 'text/css',
      content: PlaygroundFileMap.sources.typography,
      hidden: true,
    });

    return Object.fromEntries(this.entries());
  }
}

class PlaygroundConfigMap extends Map<CustomElementName, Pick<ProjectManifest, 'files'>> {
  static async of(pfeConfig: Required<PfeConfig>) {
    const demos = Manifest.getAll(new URL('../', import.meta.url).pathname)
        .flatMap(manifest => manifest.getTagNames()
            .flatMap(tagName => manifest.getDemoMetadata(tagName, pfeConfig)));
    const demoManifests = groupBy('primaryElementName', demos);
    const map = new this();
    for (const [primaryElementName, demos] of Object.entries(demoManifests)) {
      const fileMap = await PlaygroundFileMap.of(demos);
      const files = fileMap.print();
      map.set(primaryElementName as CustomElementName, { files });
    }
    return map;
  }

  private constructor() {
    super();
  }

  print() {
    return Object.fromEntries(this.entries());
  }
}

performance.mark('playgrounds-start');
const pfeConfig = getPfeConfig();
const playgroundConfigsMap = await PlaygroundConfigMap.of(pfeConfig);
const config = playgroundConfigsMap.print();
const content = JSON.stringify(config, null, 2);
const [,,outputRelative] = process.argv;
const outputUrl = new URL(`../${outputRelative}`, import.meta.url);
await fs.writeFile(outputUrl, content, 'utf8');
performance.mark('playgrounds-end');

// We should log performance regressions
/* eslint-disable no-console */
const TOTAL = performance.measure('playgrounds-total', 'playgrounds-start', 'playgrounds-end');
if (TOTAL.duration > 2000) {
  console.log(
    `🦥 Playgrounds config generator done in ${chalk.red(TOTAL.duration)}ms\n`,
  );
} else if (TOTAL.duration > 1000) {
  console.log(
    `🐢 Playgrounds config generator done in ${chalk.yellow(TOTAL.duration)}ms\n`,
  );
} else {
  console.log(
    `⚡ Playgrounds config generator done in ${chalk.blue(TOTAL.duration)}ms\n`,
  );
}
/* eslint-enable no-console */
