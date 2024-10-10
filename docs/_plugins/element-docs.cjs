/// <reference lib="ESNext.Array"/>

// @ts-check
const path = require('node:path');
const { glob, readFile } = require('node:fs/promises');
const _slugify = require('slugify');
const slugify = typeof _slugify === 'function' ? _slugify : _slugify.default;
const capitalize = require('capitalize');
const yaml = require('js-yaml');

/** @param {string} path */
const exists = async path => {
  const { stat } = await import('node:fs/promises');
  try {
    await stat(path);
    return true;
  } catch {
    return false;
  }
};

async function readYaml(filePath) {
  return yaml.load(await readFile(path.join(cwd, filePath), 'utf8'));
}

const cwd = process.cwd();

/**
 * @param {string} tagName e.g. pf-jazz-hands
 * @param {import("@patternfly/pfe-tools/config.js").PfeConfig} config pfe tools repo config
 */
function getTagNameSlug(tagName, config) {
  const name = config?.aliases?.[tagName] ?? tagName.replace(`${config?.tagPrefix ?? 'rh'}-`, '');
  return slugify(name, {
    strict: true,
    lower: true,
  });
}

/**
 * @param {{ slug: string; }} a first
 * @param {{ slug: string; }} b next
 */
function alphabeticallyBySlug(a, b) {
  return (
      a.slug < b.slug ? -1
    : a.slug > b.slug ? 1
    : 0
  );
}

/** @param {import('@11ty/eleventy').UserConfig} eleventyConfig */
module.exports = function(eleventyConfig) {
  async function isPlanned(tagName) {
    const { getAllManifests } =
      await import('@patternfly/pfe-tools/custom-elements-manifest/custom-elements-manifest.js');
    for (const manifest of getAllManifests()) {
      if (manifest.declarations.has(tagName)) {
        return false;
      }
    }
    const repoStatus =
      eleventyConfig.globalData?.repoStatus ?? await readYaml('./docs/_data/repoStatus.yaml');
    const element = repoStatus.find(element => element.tagName === tagName);
    return element?.libraries.find(library => library.name === 'RH Elements')?.status === 'Planned';
  }

  eleventyConfig.addFilter('isPlanned', isPlanned);

  eleventyConfig.addCollection('elementDocs', async function() {
    const { pfeconfig } = eleventyConfig?.globalData ?? {};
    /**
     * @param {string} filePath
     */
    async function getProps(filePath) {
      const [, tagName] = filePath.split(path.sep);
      const absPath = path.join(cwd, filePath);
      /** configured alias for this element e.g. `Call to Action` for `rh-cta` */
      const alias = pfeconfig.aliases[tagName];
      /** e.g. `footer` for `rh-footer` or `call-to-action` for `rh-cta` */
      const slug = getTagNameSlug(tagName, pfeconfig);
      /** e.g. `Code` or `Guidelines` */
      const pageTitle =
        capitalize(filePath.split(path.sep).pop()?.split('.').shift()?.replace(/^\d+-/, '') ?? '');
      const pageSlug = slugify(pageTitle, { strict: true, lower: true });
      /** e.g. `/elements/call-to-action/code/index.html` */
      const overviewHref = `/elements/${slug}/`;
      const permalink =
          pageSlug === 'overview' ? `/elements/${slug}/index.html`
        : `/elements/${slug}/${pageSlug}/index.html`;
      const href = permalink.replace('index.html', '');
      const fileExists = await exists(absPath);
      const elDir = path.join(cwd, 'elements', tagName);
      const hasLightdom = await exists(path.join(elDir, `${tagName}-lightdom.css`));
      const hasLightdomShim = await exists(path.join(elDir, `${tagName}-lightdom-shim.css`));
      const siblingElements = (await Array.fromAsync(glob(`elements/${tagName}/*.ts`, { cwd })))
          .map(x => x.split('/').pop())
          .filter(x => x && x.startsWith('rh-') && !x.endsWith('.d.ts'))
          .map(x => x?.split('.').shift())
          .filter(x => x !== tagName);
      const isCodePage = pageSlug === 'code';
      const screenshotPath = `/elements/${slug}/screenshot.png`;
      /** urls for related links */
      return {
        tagName,
        planned: await isPlanned(tagName),
        filePath,
        fileExists,
        hasLightdom,
        hasLightdomShim,
        isCodePage,
        siblingElements,
        absPath,
        alias,
        slug,
        pageTitle,
        pageSlug,
        screenshotPath,
        permalink,
        href,
        overviewHref,
      };
    }

    try {
      const { DocsPage } = await import('@patternfly/pfe-tools/11ty/DocsPage.js');
      const { getAllManifests } =
        await import('@patternfly/pfe-tools/custom-elements-manifest/custom-elements-manifest.js');

      const customElementsManifestDocsPages = await eleventyConfig.globalData?.elements();

      const filePaths = (await Array.fromAsync(glob(`elements/*/docs/*.md`, { cwd })))
          .filter(x => x.match(/\d{1,3}-[\w-]+\.md$/)); // only include new style docs

      const elementDocFilePaths =
        Array.from(new Set([
          ...filePaths,
          // TODO: adding the code file in the next line is a temporary hack to add in a virtual
          // `XX-code.md` if one doesn't already exist. At a later date, this entire function
          // (elementDocs) should be refactored, and the elements/*/docs/*.md files should be used
          // only for markdown content, but the code and demos tabs should be fully generated, with
          // the XX-code.md content interjected, if any.
          ...await Array.fromAsync(glob('elements/*', { cwd }), x => `${x}/docs/30-code.md`),
        ]));

      const elementDocs = await Promise.all(elementDocFilePaths.map(async filePath => {
        const props = await getProps(filePath);
        const [manifest] = getAllManifests();
        const docsPage =
          customElementsManifestDocsPages.find(x => x.tagName === props.tagName)
            ?? new DocsPage(manifest);

        const demosUrl = `/elements/${props.slug}/demos/`;
        let tabs = await Promise.all(elementDocFilePaths
            .filter(x => x.split('/docs/').at(0) === (`elements/${props.tagName}`))
            .sort()
        // todo: avoid calling getProps twice, it's expensive
            .map(x => getProps(x)));
        // Add 'virtual' demos page, it's generated by demos.11ty.cjs
        tabs.splice(-1, 0, { ...props, pageTitle: 'Demos', href: demosUrl });
        if (props.planned) {
          tabs = tabs.filter(x => x.pageSlug !== 'demos' && x.pageSlug !== 'code');
        }
        return { docsPage, tabs, ...props };
      }));
      elementDocs.sort(alphabeticallyBySlug);
      return elementDocs;
    } catch (e) {
      // it's important to surface this
      // eslint-disable-next-line no-console
      console.error(e);
      throw e;
    }
  });
};
