const Playground = require('./shortcodes/playground.cjs');
const RepoStatus = require('./shortcodes/repoStatus.cjs');
const RenderInstallation = require('./shortcodes/renderInstallation.cjs');
const Demo = require('./shortcodes/demo.cjs');
const SpacerTokensTable = require('./shortcodes/spacerTokensTable.cjs');
const renderCodeDocs = require('./shortcodes/renderCodeDocs.cjs');

/** @typedef {import('@patternfly/pfe-tools/11ty/DocsPage').DocsPage} DocsPage */

/**
 * @typedef {object} EleventyContext
 * @property {object} ctx
 * @property {object} page
 * @property {object} eleventy
 */
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(RepoStatus);
  eleventyConfig.addPlugin(Playground);
  eleventyConfig.addPlugin(RenderInstallation);
  eleventyConfig.addPlugin(Demo);
  eleventyConfig.addPlugin(SpacerTokensTable);
  eleventyConfig.addPlugin(renderCodeDocs);
};
