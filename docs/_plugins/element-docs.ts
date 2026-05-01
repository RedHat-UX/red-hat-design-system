/// <reference lib="ESNext.Collection"/>
import type { UserConfig } from '@11ty/eleventy';
import type { RepoStatusRecord } from './types.js';
import slugify from 'slugify';
import yaml from 'js-yaml';
import chalk from 'chalk';
import { basename, dirname, join, sep } from 'node:path';
import { glob, readFile, readdir, stat } from 'node:fs/promises';
import { getPfeConfig } from '@patternfly/pfe-tools/config.js';
import { getAllManifests } from '@patternfly/pfe-tools/custom-elements-manifest/custom-elements-manifest.js';
import { DocsPage } from '@patternfly/pfe-tools/11ty/DocsPage.js';
import { $ } from 'execa';
import { capitalize } from '#11ty-plugins/tokensHelpers.js';
import { stripFrontmatter } from '#11ty-plugins/frontmatter.js';

// WARNING: This import uses the TypeScript compiler API to parse element source
// files. The compiler API is not a stable public API and may break across
// TypeScript major versions. If the docs build breaks after a TypeScript
// upgrade, this is a likely culprit. See scanElementDecorators() below.
import ts from 'typescript';

export interface ElementDecoratorData {
  /** Whether the element uses the @themable decorator */
  themable: boolean;
  /**
   * Color palettes supported by this element, or null if the element does not
   * use the @colorPalettes decorator. An empty array means all palettes are
   * supported (bare @colorPalettes with no arguments).
   */
  colorPalettes: string[] | null;
}

interface ElementDocsPageTabData {
  url: string;
  /** element name slug e.g. 'call-to-action' or 'footer' */
  slug: string;
  /** e.g. `Code` or `Guidelines` */
  pageTitle: string;
  /** e.g. 'code' or 'guidelines' */
  pageSlug: string;
  /** e.g. `/elements/call-to-action/code/index.html` */
  permalink: string;
  filePath: string;
  tagName: string;
}

interface ElementDocsPageBasicData extends ElementDocsPageTabData {
  description?: string;
  isCodePage: boolean;
  isDemoPage: boolean;
  isOverviewPage: boolean;
  absPath: string;
  /** configured alias for this element e.g. `Call to Action` for `rh-cta` */
  alias?: string;
  screenshotPath: string;
  overviewHref: string;
}

interface ElementDocsPageFileSystemData extends ElementDocsPageBasicData {
  planned: boolean;
  hidden: boolean;
  fileExists: boolean;
  hasLightdom: boolean;
  hasLightdomShim: boolean;
  siblingElements: string[];
  overviewImageHref?: string;
  mainDemoContent: string;
  /** Decorator metadata for this element and its siblings, keyed by tag name */
  decoratorData: Record<string, ElementDecoratorData>;
}

export interface ElementDocsPageData extends ElementDocsPageFileSystemData {
  data?: {
    order: number;
    title: string;
  };
  docsPage: DocsPage;
  tabs: ElementDocsPageTabData[];
  /** e.g. `footer` for `rh-footer` or `call-to-action` for `rh-cta` */
  slug: string;
  subnav: { collection: string };
  tags: string[];
  layout: string;
  elementData?: RepoStatusRecord; // Complete element data including relatedItems
  [key: string]: unknown;
}

const cwd = process.cwd();
const pfeconfig = getPfeConfig();
const isElementSource = (x: string) => x && x.startsWith('rh-') && !x.endsWith('.d.ts');
const stripExtension = (x: string) => x?.split('.').shift();

async function exists(path: string) {
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
};

/**
 * Scan element source files for `@themable` and `@colorPalettes` decorators
 * using the TypeScript compiler API.
 *
 * COST: This parses every element .ts source file during the docs build. The
 * TypeScript parser (ts.createSourceFile) is used in parse-only mode without
 * type checking, so it is fast (typically <100ms total for all elements), but
 * it is still real work that would not be necessary if the custom elements
 * manifest spec supported extensions for arbitrary decorator metadata.
 * See: https://github.com/webcomponents/custom-elements-manifest/issues/38
 *
 * WARNING: The TypeScript compiler API is not a stable public API. Node kinds,
 * modifier handling, and decorator AST shapes have changed across TS versions
 * (e.g. decorators moved from node.decorators to node.modifiers in TS 5.0).
 * If this function breaks after a TypeScript upgrade, check the ts.SyntaxKind
 * and ts.isDecorator APIs for changes.
 *
 * WHY NOT REGEX: Decorators can span multiple lines, use aliased imports, or
 * appear in non-obvious positions. A proper parser avoids false positives from
 * comments, strings, or partial matches.
 */
async function scanAllElementDecorators(): Promise<Record<string, ElementDecoratorData>> {
  const result: Record<string, ElementDecoratorData> = {};

  for await (const filePath of glob('elements/*/rh-*.ts', { cwd })) {
    if (filePath.endsWith('.d.ts')) {
      continue;
    }
    const filebasename = basename(filePath);
    const tagName = filebasename.replace('.ts', '');

    const sourceText = await readFile(join(cwd, filePath), 'utf8');

    // ts.createSourceFile is parse-only: no type resolution, no program
    // creation, no tsconfig needed. This is the cheapest way to get an AST.
    const sourceFile = ts.createSourceFile(
      filePath,
      sourceText,
      ts.ScriptTarget.Latest,
      /* setParentNodes */ true,
    );

    let themable = false;
    let colorPalettes: string[] | null = null;

    for (const statement of sourceFile.statements) {
      if (!ts.isClassDeclaration(statement)) {
        continue;
      }
      // In TS 5.0+, decorators are modifiers on the class declaration.
      // ts.canHaveDecorators and ts.getDecorators are the stable accessors.
      const decorators = ts.canHaveDecorators(statement) ?
        ts.getDecorators(statement) ?? []
        : [];

      for (const decorator of decorators) {
        const expr = decorator.expression;

        // Bare decorator: @themable or @colorPalettes
        if (ts.isIdentifier(expr)) {
          if (expr.text === 'themable') {
            themable = true;
          } else if (expr.text === 'colorPalettes') {
            // Bare @colorPalettes means all palettes are supported
            colorPalettes = [];
          }
        }

        // Call decorator: @colorPalettes('light', 'dark', ...)
        if (ts.isCallExpression(expr)
            && ts.isIdentifier(expr.expression)
            && expr.expression.text === 'colorPalettes') {
          colorPalettes = expr.arguments
              .filter(ts.isStringLiteral)
              .map(arg => arg.text);
        }
      }
    }

    result[tagName] = { themable, colorPalettes };
  }

  return result;
}

/**
 * Load complete element data from colocated YAML file including relatedItems
 * @param tagName
 */
async function loadElementData(tagName: string): Promise<RepoStatusRecord | undefined> {
  const yamlPath = join(cwd, 'elements', tagName, 'docs', 'data.yaml');

  if (await exists(yamlPath)) {
    try {
      const yamlContent = await readFile(yamlPath, 'utf8');
      const data = yaml.load(yamlContent) as RepoStatusRecord;

      // Validate that the tagName matches
      if (data.tagName !== tagName) {
        // eslint-disable-next-line no-console
        console.warn(`Warning: tagName mismatch in ${yamlPath}. Expected ${tagName}, got ${data.tagName}`);
      }

      return data;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.warn(`Warning: Failed to parse YAML file ${yamlPath}:`, error);
    }
  }

  // No fallback needed since all elements should have colocated data now
  return undefined;
}

function getTagNameSlug(tagName: string) {
  const name = (pfeconfig?.aliases?.[tagName] ?? tagName).replace(`${pfeconfig?.tagPrefix ?? 'rh'}-`, '');
  return slugify.default(name, {
    strict: true,
    lower: true,
  });
}

/**
 * @param eleventyConfig
 */
export default function(eleventyConfig: UserConfig): void {
  eleventyConfig.on('eleventy.before', async function() {
    performance.mark('analyze-start');
    await $`npm run analyze`;
    performance.mark('analyze-end');
    const TOTAL = performance.measure('analyze-total', 'analyze-start', 'analyze-end');
    // eslint-disable-next-line no-console
    console.log(`⏲️  Custom elements manifest generated in ${chalk.blue(TOTAL.duration)}ms\n`);
  });
  eleventyConfig.addCollection('elementDocs', async function() {
    try {
      const [manifest] = getAllManifests();

      const _docsPages =
        eleventyConfig.globalData.elements as DocsPage[] | (() => Promise<DocsPage[]>);

      const docsPages = typeof _docsPages === 'function' ? await _docsPages() : _docsPages;

      // 1. compile a list of all sibling element names by scanning the filesystem
      // 2. compile a list of all output files
      // 3. assign helpful data to each page entry
      // 4. compile a list of tabs for each page's subnav.
      //    this step depends on the full list from step 2.
      // 5. assign data which relies on the filesystem (async)

      // Scan element source files for decorator metadata (@themable,
      // @colorPalettes). This parses all element .ts files using the TS
      // compiler API in parse-only mode. See scanAllElementDecorators() for
      // cost and stability notes.
      performance.mark('decorator-scan-start');
      const allDecoratorData = await scanAllElementDecorators();
      performance.mark('decorator-scan-end');
      const DECORATOR_SCAN = performance.measure(
        'decorator-scan-total',
        'decorator-scan-start',
        'decorator-scan-end',
      );
      // eslint-disable-next-line no-console
      console.log(`⏲️  Decorator scan completed in ${chalk.blue(DECORATOR_SCAN.duration.toFixed(0))}ms\n`);

      const siblingElementsByTagName = new Map<string, string[]>();
      for await (const path of glob(`elements/*/*.ts`, { cwd })) {
        const tagName = path.replace('elements/', '').split('/').shift()!;
        const filebasename = basename(path);
        const siblingTagName = stripExtension(filebasename);
        if (siblingTagName && isElementSource(filebasename) && siblingTagName !== tagName) {
          if (!siblingElementsByTagName.has(tagName)) {
            siblingElementsByTagName.set(tagName, []);
          }
          siblingElementsByTagName.get(tagName)!.push(siblingTagName);
        }
      }

      const filePaths = Array.from(new Set([
        // docs file paths that exist on disk
        ...await Array.fromAsync(glob(`elements/*/docs/*.md`, { cwd })),
        // ensure that code and demos pages are generated, should there not be any content for them
        // in elements/*/docs/*-code.md or elements/*/docs/*-demos.md. Duplicates are avoided with
        // the new Set constructor
        ...(await Array.fromAsync(glob('elements/*', { cwd }), x =>
            x.includes('.') ? [] : [
              `${x}/docs/30-code.md`,
              `${x}/docs/90-demos.md`,
            ])).flat(),
      ])).sort();

      const basicDataPromises = filePaths.map(async filePath => {
        const tagName = filePath
            .split(sep)
            .find(x => x.startsWith('rh-'))!;
        const pageSlug = filePath
            .split(sep)
            .pop()
            ?.split('.')
            ?.shift()
            ?.replace(/^(\d+|rh)-/, '') ?? '';
        const slug = getTagNameSlug(tagName);
        const collection = `${tagName}-tabs`;
        const permalink =
              pageSlug === 'overview' ? `/elements/${slug}/index.html`
            : `/elements/${slug}/${pageSlug}/index.html`;
        const elementData = await loadElementData(tagName);
        return {
          filePath,
          tagName,
          pageSlug,
          layout: 'layouts/pages/element.11ty.ts',
          planned: elementData?.libraries.rhds === 'planned',
          hidden: elementData?.type === 'hidden',
          subnav: { collection },
          slug,
          pageTitle: capitalize(pageSlug),
          docsPage: docsPages.find(x => x.tagName === tagName) ?? new DocsPage(manifest),
          permalink,
          tags: [collection],
          url: permalink.replace('index.html', ''),
          absPath: join(cwd, filePath),
          description: elementData?.description,
          alias: pfeconfig.aliases?.[tagName],
          screenshotPath: `/elements/${slug}/screenshot.png`,
          overviewHref: `/elements/${slug}/`,
          elementData, // Include complete element data in page context
        };
      });

      const basicData = await Promise.all(basicDataPromises);

      const dataWithTabs = basicData.map((data, _, a) => ({
        ...data,
        tabs: a
            .filter(x =>
              x.tagName === data.tagName
              && (
                !data.planned
                || (
                  x.pageSlug !== 'code'
                  && x.pageSlug !== 'demos'
                )
              ))
            .map(tab => !data.planned || tab.pageSlug !== 'demo' ? tab : ({
            // Add 'virtual' demos page, it's generated by demos.11ty.cjs
              ...tab,
              url: `/elements/${data.slug}/demos/`,
              pageSlug: 'demos',
              permalink: `/elements/${data.slug}/demos/index.html`,
              filePath: `${dirname(data.filePath)}/40-demos.md`,
              slug: data.slug,
              tagName: data.tagName,
            }))
            .sort((a, b) => a.filePath > b.filePath ? 1 : -1),
      }));

      return await Promise.all(
        dataWithTabs.map(async data => {
          const elDir = join(cwd, 'elements', data.tagName);
          const docsDir = join(elDir, 'docs');
          const demoPath = join(elDir, 'demo', `${data.tagName}.html`);
          const hasDocs = await exists(docsDir);
          const docsDirLs = hasDocs ? await readdir(docsDir) : null;
          const _overviewImageHref = docsDirLs?.find(x => x.match(/overview.(png|svg)/));
          const overviewImageHref =
            _overviewImageHref && await exists(join(docsDir, _overviewImageHref)) ?
              _overviewImageHref : undefined;
          // Build decorator data for this element and its siblings
          const siblings = siblingElementsByTagName.get(data.tagName) ?? [];
          const decoratorData: Record<string, ElementDecoratorData> = {};
          for (const tag of [data.tagName, ...siblings]) {
            decoratorData[tag] = allDecoratorData[tag]
              ?? { themable: false, colorPalettes: null };
          }

          return {
            ...data,
            fileExists: await exists(data.absPath),
            hasLightdom: await exists(join(elDir, `${data.tagName}-lightdom.css`)),
            hasLightdomShim: await exists(join(elDir, `${data.tagName}-lightdom-shim.css`)),
            mainDemoContent: !await exists(demoPath) ? ''
              : stripFrontmatter(await readFile(demoPath, 'utf8')),
            overviewImageHref,
            siblingElements: siblings,
            decoratorData,
          };
        })
      );
    } catch (e) {
      // it's important to surface this
      // eslint-disable-next-line no-console
      console.error(e);
      throw e;
    }
  });
};
