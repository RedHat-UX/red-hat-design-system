/// <reference lib="ESNext.Collection"/>
import type { UserConfig } from '@11ty/eleventy';
import slugify from 'slugify';
import { basename, dirname, join, sep } from 'node:path';
import { glob, readFile, stat } from 'node:fs/promises';
import { deslugify, getPfeConfig } from '@patternfly/pfe-tools/config.js';
import { getAllManifests } from '@patternfly/pfe-tools/custom-elements-manifest/custom-elements-manifest.js';
import { DocsPage } from '@patternfly/pfe-tools/11ty/DocsPage.js';
import yaml from 'js-yaml';
import { capitalize } from './tokensHelpers';

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
  isCodePage: boolean;
  isDemoPage: boolean;
  absPath: string;
  /** configured alias for this element e.g. `Call to Action` for `rh-cta` */
  alias?: string;
  screenshotPath: string;
  overviewHref: string;
}

interface ElementDocsPageFileSystemData extends ElementDocsPageBasicData {
  planned: boolean;
  fileExists: boolean;
  hasLightdom: boolean;
  hasLightdomShim: boolean;
  siblingElements: string[];
}

export interface ElementDocsPageData extends ElementDocsPageFileSystemData {
  docsPage: DocsPage;
  tabs: ElementDocsPageTabData[];
  /** e.g. `footer` for `rh-footer` or `call-to-action` for `rh-cta` */
  slug: string;
  subnav: { collection: string };
  tags: string[];
  layout: string;
}

const cwd = process.cwd();
const pfeconfig = getPfeConfig();
const repoStatus = yaml.load(await readFile(join(cwd, './docs/_data/repoStatus.yaml'), 'utf8'));
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

function getTagNameSlug(tagName: string) {
  const name = (pfeconfig?.aliases?.[tagName] ?? tagName).replace(`${pfeconfig?.tagPrefix ?? 'rh'}-`, '');
  return slugify(name, {
    strict: true,
    lower: true,
  });
}

function getTabData(filePath: string): ElementDocsPageTabData {
  const parts = filePath.split(sep);
  const tagName = parts.find(x => x.startsWith('rh-'))!;
  const pageSlug = filePath.split(sep).pop()?.split('.').shift()?.replace(/^(\d+|rh)-/, '') ?? '';
  const slug = getTagNameSlug(tagName);
  const permalink = pageSlug === 'overview' ? `/elements/${slug}/index.html` : `/elements/${slug}/${pageSlug}/index.html`;
  const pageTitle = capitalize(deslugify(pageSlug).toLowerCase().replace('rh-', ''));
  return {
    tagName,
    filePath,
    permalink,
    slug,
    url: permalink.replace('index.html', ''),
    pageTitle,
    pageSlug,
  };
}

function getBasicData(filePath: string): ElementDocsPageBasicData {
  const tabProps = getTabData(filePath);
  return { ...tabProps,
    isCodePage: tabProps.pageSlug === 'code',
    isDemoPage: tabProps.pageSlug === 'demos',
    absPath: join(cwd, filePath),
    alias: pfeconfig.aliases?.[tabProps.tagName],
    screenshotPath: `/elements/${tabProps.slug}/screenshot.png`,
    overviewHref: `/elements/${tabProps.slug}/`,
  };
}

async function getFSData(props: ElementDocsPageBasicData): Promise<ElementDocsPageFileSystemData> {
  const elDir = join(cwd, 'elements', props.tagName);
  const allTSFiles = await Array.fromAsync(glob(`elements/${props.tagName}/*.ts`, { cwd }));
  return {
    ...props,
    fileExists: await exists(props.absPath),
    planned: await isPlanned(props.tagName),
    hasLightdom: await exists(join(elDir, `${props.tagName}-lightdom.css`)),
    hasLightdomShim: await exists(join(elDir, `${props.tagName}-lightdom-shim.css`)),
    siblingElements: allTSFiles
        .map(x => basename(x))
        .filter(isElementSource)
        .map(stripExtension)
        .filter((x): x is string => !!x && x !== props.tagName),
  };
}

async function isPlanned(tagName: string) {
  for (const manifest of getAllManifests()) {
    if (manifest.declarations.has(tagName)) {
      return false;
    }
  }
  const element = repoStatus.find(element => element.tagName === tagName);
  return element?.libraries.find(library => library.name === 'RH Elements')?.status === 'Planned';
}

const isDocFor = (tagName: string) =>
  (x: string) =>
    x.split('/docs/').at(0) === `elements/${tagName}`;

async function getDocsPageData(
  data: ElementDocsPageFileSystemData,
  docsPages: DocsPage[],
  docFilePaths: string[],
): Promise<ElementDocsPageData> {
  const [manifest] = getAllManifests();

  const docsPage = docsPages.find(x => x.tagName === data.tagName)
            ?? new DocsPage(manifest);

  let tabs = docFilePaths
      .filter(isDocFor(data.tagName))
      .sort()
      .map(x => getTabData(x));

  if (!data.planned) {
    // Add 'virtual' demos page, it's generated by demos.11ty.cjs
    tabs.splice(-1, 0, {
      url: `/elements/${data.slug}/demos/`,
      pageTitle: 'Demos',
      pageSlug: 'demos',
      permalink: `/elements/${data.slug}/demos/`,
      filePath: `${dirname(data.filePath)}90-demos.md`,
      slug: data.slug,
      tagName: data.tagName,
    });
  }

  if (data.planned) {
    tabs = tabs.filter(x => x.pageSlug !== 'code');
  }

  const collection = `${data.tagName}-tabs`;

  const pageSlug = getTagNameSlug(data.tagName);
  const pageTitle = capitalize(deslugify(pageSlug).toLowerCase().replace('rh-', ''));
  return {
    ...data,
    tags: [collection],
    layout: 'layouts/pages/element.11ty.ts',
    subnav: {
      collection,
    },
    pageSlug,
    pageTitle,
    docsPage,
    tabs,
  };
}

/** @param  eleventyConfig */
export default function(eleventyConfig: UserConfig) {
  eleventyConfig.addCollection('elementDocs', async function() {
    try {
      const docFilePaths = await Array.fromAsync(glob(`elements/*/docs/*.md`, { cwd }));
      // TODO: adding the code file in the next line is a temporary hack to add in a virtual
      // `XX-code.md` and demo if one doesn't already exist. At a later date, this entire function
      // (elementDocs) should be refactored, and the elements/*/docs/*.md files should be used
      // only for markdown content, but the code and demos tabs should be fully generated, with
      // the XX-code.md content interjected, if any.
      const fakeCodeDocsPaths = await Array.fromAsync(glob('elements/*', { cwd }), x => [
        `${x}/docs/30-code.md`,
        `${x}/docs/40-demos.md`,
      ]);
      const filePaths = Array.from(new Set([...docFilePaths, ...fakeCodeDocsPaths.flat()]))
          .sort(function alphabetically(a: string, b: string) {
            return ( a < b ? -1 : a > b ? 1 : 0);
          });
      const elementDocs = await Promise.all(filePaths.map(async filePath =>
        getDocsPageData(
          await getFSData(getBasicData(filePath)),
          await eleventyConfig.globalData.elements(),
          filePaths,
        )));
      return elementDocs;
    } catch (e) {
      // it's important to surface this
      // eslint-disable-next-line no-console
      console.error(e);
      throw e;
    }
  });
};
