import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { pathToFileURL } from 'node:url';
import chalk from 'chalk';

import type { FileOptions, ProjectManifest } from 'playground-elements/shared/worker-api.js';

import { getPfeConfig, type PfeConfig } from '@patternfly/pfe-tools/config.js';
import {
  type DemoRecord,
  getAllManifests,
} from '@patternfly/pfe-tools/custom-elements-manifest/custom-elements-manifest.js';

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

/**
 * Returns a string with common indent stripped from each line. Useful for templating HTML
 * @param str indented string
 */
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

function isInlineStyle(node: Tools.Node): node is Tools.Element {
  return Tools.isElementNode(node) && node.tagName === 'style';
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
  }

  private addCommonCss() {
    this.append(this.createStyleLink(`/styles/demo/styles.css`));
  }

  private getFinalContent() {
    let lastNode: Tools.Node | undefined;
    while ((lastNode = this.fragment.childNodes.at(-1))
            && Tools.isTextNode(lastNode) && !lastNode.value.trim()) {
      Tools.removeNode(lastNode);
    }
    return demoPaths(serialize(this.fragment), this.demo.filePath);
  }

  private createStyleLink(href: string) {
    return Tools.createElement('link', { rel: 'stylesheet', href });
  }

  private createModuleLink(src: string) {
    return Tools.createElement('script', { type: 'module', src });
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
    const source = node.childNodes.map(x => Tools.isTextNode(x) ? x.value : '').join('\n');
    fileMap.set(`demo/${name}`, {
      content: dedent(source),
      // @ts-expect-error: this is a hint to our njk template
      inline: this.filename,
    });
    Tools.removeNode(node);
  }

  private async splitOutInlineSubresources(fileMap: PlaygroundFileMap) {
    const { demoSlug, demo: { primaryElementName } } = this;
    const dir = demoSlug === 'index.html' ? '.' : '..';
    const resourcePrefix = `${primaryElementName}-${demoSlug.replace('.html', '')}-inline`;
    let count = 0;
    // TODO: add an empty stylesheet if none exists
    for (const node of Tools.queryAll<Tools.Element>(this.fragment, Tools.isElementNode)) {
      if (isInlineModule(node)) {
        const moduleName = `${resourcePrefix}-${count++}.js`;
        this.replaceInlineNode(fileMap, node, moduleName);
        this.append(this.createModuleLink(`${dir}/${moduleName}`), Tools.createTextNode('\n'));
      } else if (isInlineStyle(node)) {
        const stylesheetName = `${resourcePrefix}-${count++}.css`;
        this.replaceInlineNode(fileMap, node, stylesheetName);
        this.append(this.createStyleLink(`${dir}/${stylesheetName}`), Tools.createTextNode('\n'));
      }
    }
  }

  public async replaceInlineSubresourcesWithHiddenFileLinks(fileMap: PlaygroundFileMap) {
    // remove inline subresources and replace them with links to hidden project files
    this.append(Tools.createCommentNode('playground-hide'));
    this.splitOutInlineSubresources(fileMap);
    await this.addAllSubresources(fileMap);
    this.addCommonCss();
    this.append(Tools.createCommentNode('playground-hide-end'));
    // trim whitespace before the hidden nodes
    let node: Tools.Node | undefined;
    let index = this.fragment.childNodes.findIndex(node =>
      Tools.isCommentNode(node) && node.data === 'playground-hide');
    while (Tools.isTextNode(node = this.fragment.childNodes.at(--index)!)) {
      if (!node.value.trim()) {
        Tools.removeNode(node);
      } else {
        break;
      }
    }
    const content = this.getFinalContent();
    fileMap.set(this.filename, {
      contentType: 'text/html',
      selected: this.isMainDemo,
      content,
      label: this.demo.title,
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
      await playgroundDemo?.replaceInlineSubresourcesWithHiddenFileLinks(map);
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
    const demos = getAllManifests(new URL('../', import.meta.url).pathname)
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
let emoji = '⚡';
let color = chalk.blue;
if (TOTAL.duration > 2000) {
  emoji = '🦥';
  color = chalk.red;
} else if (TOTAL.duration > 1000) {
  emoji = '🐢';
  color = chalk.yellow;
}
console.log(`${emoji} Playgrounds config generator done in ${color(TOTAL.duration)}ms`);
/* eslint-enable no-console */
