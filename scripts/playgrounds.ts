import * as fs from 'node:fs/promises';
import * as path from 'node:path';
import { pathToFileURL } from 'node:url';
import chalk from 'chalk';

import { getPfeConfig } from '@patternfly/pfe-tools/config.js';
import {
  type DemoRecord,
  Manifest,
} from '@patternfly/pfe-tools/custom-elements-manifest/lib/Manifest.js';

import { parseFragment, serialize } from 'parse5';
import * as Tools from '@parse5/tools';

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

function append(node: Tools.Node, ...nodes: Tools.ChildNode[]) {
  Tools.spliceChildren(node, Infinity, 0, ...nodes);
}

async function getConfig() {
  const pfeConfig = getPfeConfig();
  const demos = Manifest.getAll(new URL('../', import.meta.url).pathname)
      .flatMap(manifest => manifest.getTagNames()
          .flatMap(tagName => manifest.getDemoMetadata(tagName, pfeConfig)));

  const demoManifests = groupBy('primaryElementName', demos);

  const playgroundConfigsMap = new Map();

  const resetCSS = pathToFileURL(path.join(process.cwd(), 'docs/styles/reset.css'));
  const resetCSSSource = await fs.readFile(resetCSS.pathname, 'utf8');
  const fontsCSS = pathToFileURL(path.join(process.cwd(), 'docs/styles/fonts.css'));
  const fontsCSSSource = await fs.readFile(fontsCSS.pathname, 'utf8');
  const typographyCSS = pathToFileURL(path.join(process.cwd(), 'docs/styles/typography.css'));
  const typographyCSSSource = await fs.readFile(typographyCSS.pathname, 'utf8');

  for (const [primaryElementName, demos] of Object.entries(demoManifests)) {
    const fileMap = new Map();

    for (const demo of demos) {
      if (!demo.filePath || demo.filePath.endsWith('proxy.html')) {
        continue;
      }

      const demoSource = await fs.readFile(demo.filePath, 'utf8');
      const fragment = parseFragment(demoSource);

      const cssPrefix = demo.filePath.match(DEMO_FILEPATH_IS_MAIN_DEMO_RE) ? '' : '../';

      append(
        fragment,
        Tools.createCommentNode('playground-fold'),
        Tools.createElement('link', {
          rel: 'stylesheet',
          href: `${cssPrefix}reset.css`,
        }),
        Tools.createElement('link', {
          rel: 'stylesheet',
          href: `${cssPrefix}fonts.css`,
        }),
        Tools.createElement('link', {
          rel: 'stylesheet',
          href: `${cssPrefix}typography.css`,
        }),
        Tools.createTextNode('\n\n'),
        Tools.createCommentNode('playground-fold-end'),
      );

      const filename = getDemoFilename(demo);

      /** @see docs/_plugins/rhds.cjs demoPaths transform */
      const base =
        pathToFileURL(path.join(process.cwd(), 'elements', primaryElementName, 'demo/'));
      const docsDir = pathToFileURL(path.join(process.cwd(), 'docs/'));
      const isMainDemo = filename === 'demo/index.html';
      const demoSlug = filename.split('/').at(1);

      if (!demoSlug) {
        throw new Error(`No slug for ${filename}`);
      }

      const addSubresourceURL = async (subresourceURL: string) => {
        if (subresourceURL && !subresourceURL.startsWith('http')) {
          const subresourceFileURL = !subresourceURL.startsWith('/') ?
            // non-tabular ternary

            new URL(subresourceURL, base)
            : new URL(subresourceURL.replace('/', './'), docsDir);
          try {
            const resourceName =
              path.normalize(`demo${isMainDemo ? '' : `/${demoSlug}`}/${subresourceURL}`);
            if (!fileMap.has(resourceName)) {
              const content =
                demoPaths(
                  await fs.readFile(subresourceFileURL, 'utf8'),
                  subresourceFileURL.pathname,
                );
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
              `Error generating playground for ${demo.slug}.\nCould not find subresource ${subresourceURL} at ${subresourceFileURL?.href ?? 'unknown'}`,
              e,
              subresourceFileURL,
            );
          }
        }
      };

      fileMap.set('demo/reset.css', {
        contentType: 'text/css',
        content: resetCSSSource,
        hidden: true,
      });

      fileMap.set('demo/fonts.css', {
        contentType: 'text/css',
        content: fontsCSSSource,
        hidden: true,
      });

      fileMap.set('demo/typography.css', {
        contentType: 'text/css',
        content: typographyCSSSource,
        hidden: true,
      });

      const hrefSubresourceElements: IterableIterator<Tools.Element> =
        Tools.queryAll(fragment, node =>
          Tools.isElementNode(node)
            && isStyleLink(node));

      const srcSubresourceElements: IterableIterator<Tools.Element> =
        Tools.queryAll(fragment, node =>
          Tools.isElementNode(node)
          && SRC_SUBRESOURCE_TAGNAMES.has(node.tagName)
          && hasLocalSrcAttr(node));

      // register demo css resources
      for (const el of hrefSubresourceElements) {
        try {
          const attrs = getAttrMap(el);
          await addSubresourceURL(attrs.href);
        } catch (e) {
          // we can swallow the error for the demo typography and font file because we wrote it ourselves above.
          // maybe not the most elegant solution, but it works
          if (e.subresourceFileURL?.href?.endsWith('typography.css')
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
        await addSubresourceURL(attrs.src);
      }

      // HACK: https://github.com/google/playground-elements/issues/93#issuecomment-1775247123
      const inlineModules: IterableIterator<Tools.Element> =
        Tools.queryAll(fragment, node =>
          Tools.isElementNode(node)
          && isModuleScript(node)
          && !node.attrs.some(({ name }) => name === 'src'));

      Array.from(inlineModules).forEach((el, i) => {
        const moduleName = `${primaryElementName}-${demoSlug.replace('.html', '')}-inline-script-${i++}.js`;
        append(
          fragment,
          Tools.createCommentNode('playground-hide'),
          Tools.createElement('script', {
            type: 'module',
            src: `./${demoSlug === 'index.html' ? '' : '../'}${moduleName}`,
          }),
          Tools.createTextNode('\n\n'),
          Tools.createCommentNode('playground-hide-end'),
        );

        fileMap.set(`demo/${moduleName}`, {
          content: el.childNodes.map(x => (x as Tools.TextNode).value ?? '').join('\n').trim(),
          hidden: true,
        });
      });
      // ENDHACK

      fileMap.set(filename, {
        contentType: 'text/html',
        selected: isMainDemo,
        content: demoPaths(serialize(fragment), demo.filePath),
        label: demo.title,
      });

      const files = Object.fromEntries(fileMap.entries());
      playgroundConfigsMap.set(primaryElementName, { files });
    }
  }

  return Object.fromEntries(playgroundConfigsMap.entries());
};

performance.mark('playgrounds-start');
const config = await getConfig();
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
