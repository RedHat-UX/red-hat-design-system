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

  eleventyConfig.addCollection('tokenCategory', function() {
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
    ].map(tokenCategory => {
      tokenCategory.slug ??= tokenCategory.path?.replace('.', '-') ?? '';
      const tokens = resolveTokens(tokenCategory.path);
      const docs = tokens?.$extensions?.['com.redhat.ux'];
      return {
        ...tokenCategory,
        docs,
        title: docs?.heading ?? tokenCategory.slug.replaceAll('-', ' '),
        url: `/tokens/${tokenCategory.slug}/`,
      };
    });
  });

  eleventyConfig.addPassthroughCopy({
    [join(__dirname, '11ty', '*')]: pluginOptions.assetsPath ?? '/assets/',
  });
};

