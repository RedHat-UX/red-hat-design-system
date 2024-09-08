const { join } = require('node:path');
const tokensJSON = require('@rhds/tokens/json/rhds.tokens.json');
const { resolveTokens } = require('./tokensHelpers.cjs');

/**
 * @param {import('@11ty/eleventy').UserConfig} eleventyConfig
 * @param {PluginOptions} [pluginOptions]
 */
module.exports = function RHDSPlugin(eleventyConfig, pluginOptions = { }) {
  eleventyConfig.addPassthroughCopy('docs/tokens/**/*.{svg,jpe?g,png}');

  eleventyConfig.addGlobalData('tokens', tokensJSON);

  eleventyConfig.addCollection('token', function() {
    return [
      { path: 'color', exclude: ['border', 'text', 'icon'] },
      { path: 'box-shadow' },
      { path: 'font', include: ['line-height', 'color.text'] },
      { path: 'border', include: ['color.border'] },
      { path: 'opacity' },
      { path: 'space' },
      { path: 'length' },
      { slug: 'icon', path: 'size.icon', include: ['size.icon', 'color.icon'] },
      { path: 'breakpoint' },
      { path: 'media' },
    ].map(cat => {
      cat.slug ??= cat.path?.replace('.', '-') ?? '';

      const tokens = resolveTokens(cat.path);

      const docs = tokens?.$extensions?.['com.redhat.ux'];
      const title = docs?.heading ?? cat.slug.replaceAll('-', ' ');
      const url = `/tokens/${cat.slug}/`;

      return { ...cat, title, docs, url };
    });
  });

  eleventyConfig.addPassthroughCopy({
    [join(__dirname, '11ty', '*')]: pluginOptions.assetsPath ?? '/assets/',
  });
};

