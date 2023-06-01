const Playground = require('./shortcodes/playground.cjs');
const RepoStatus = require('./shortcodes/repoStatus.cjs');
const RenderInstallation = require('./shortcodes/renderInstallation.cjs');
const ExampleImage = require('./shortcodes/example.cjs');
const Cta = require('./shortcodes/cta.cjs');
const Alert = require('./shortcodes/alert.cjs');
const Section = require('./shortcodes/section.cjs');
const Demo = require('./shortcodes/demo.cjs');

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
  eleventyConfig.addPlugin(ExampleImage);
  eleventyConfig.addPlugin(Cta);
  eleventyConfig.addPlugin(Alert);
  eleventyConfig.addPlugin(Section);
  eleventyConfig.addPlugin(Demo);
};
