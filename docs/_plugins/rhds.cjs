// @ts-check
const fs = require('node:fs');
const path = require('node:path');
const slugify = require('slugify');
const { exec: _exec } = require('node:child_process');
const { promisify } = require('node:util');
const exec = promisify(_exec);
const RHDSAlphabetizeTagsPlugin = require('./alphabetize-tags.cjs');
const RHDSShortcodesPlugin = require('./shortcodes.cjs');


/** @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig */
module.exports = function(eleventyConfig, { tagsToAlphabetize }) {
  eleventyConfig.addPlugin(RHDSAlphabetizeTagsPlugin, { tagsToAlphabetize });

  /** add `section`, `example`, `demo`, etc. shortcodes */
  eleventyConfig.addPlugin(RHDSShortcodesPlugin);

  /** format date strings */
  eleventyConfig.addFilter('prettyDate', function(dateStr, options = {}) {
    const { dateStyle = 'medium' } = options;
    return new Intl.DateTimeFormat('en-US', { dateStyle })
      .format(new Date(dateStr));
  });

  // Rewrite DEMO lightdom css relative URLs
  const LIGHTDOM_HREF_RE = /href="\.(?<pathname>.*-lightdom\.css)"/g;
  const LIGHTDOM_PATH_RE = /href="\.(.*)"/;
  eleventyConfig.addTransform('demo-lightdom-css',
    /**
     * @param {string} content
     * @this {{outputPath: string, inputPath: string}}
     */
    function(content) {
      const { outputPath, inputPath } = this;
      if (inputPath === './docs/components/demos.html') {
        const matches = content.match(LIGHTDOM_HREF_RE);
        if (matches) {
          for (const match of matches) {
            const [, path] = match.match(LIGHTDOM_PATH_RE) ?? [];
            const { pathname } = new URL(path, `file:///${outputPath}`);
            content = content.replace(`.${path}`, pathname
              .replace('/_site/components/', '/assets/elements/rh-')
              .replace('/demo/', '/'));
          }
        }
      }
      return content;
    });

  // generate a bundle that packs all of rhds with all dependencies
  // into a single large javascript file
  eleventyConfig.on('eleventy.before', async () => {
    const { bundle } = await import('../../scripts/bundle.js');
    await bundle({ outfile: '_site/assets/rhds.min.js' });
  });

  eleventyConfig.on('eleventy.before', async ({ runMode }) => {
    if (runMode === 'watch') {
      await exec('npx cem analyze');
    }
  });

  // Copy element demo files
  const repoRoot = process.cwd();
  const elements = fs.readdirSync(path.join(repoRoot, 'elements'));

  const config = require('../../.pfe.config.json');
  const aliases = config.aliases ?? {};
  const getSlug = tagName => slugify(aliases[tagName] ?? tagName.replace('rh-', '')).toLowerCase();

  eleventyConfig.addPassthroughCopy(Object.fromEntries(elements.flatMap(element => {
    const slug = getSlug(element);
    return [
      [
        `elements/${element}/demo/**/*.{css,js,png,svg,jpg,webp}`,
        `components/${slug}/demo`,
      ],
    ];
  })));
};
