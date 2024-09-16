const {
  RepoStatusList,
  RepoStatusChecklist,
  RepoStatusTable,
} = require('./shortcodes/repoStatus.cjs');
const RenderInstallation = require('./shortcodes/renderInstallation.cjs');
const RenderCodeDocs = require('./shortcodes/renderCodeDocs.cjs');
const SpacerTokensTable = require('./shortcodes/spacerTokensTable.cjs');
const UxdotPattern = require('./shortcodes/uxdotPattern.cjs');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(RepoStatusList);
  eleventyConfig.addPlugin(RepoStatusChecklist);
  eleventyConfig.addPlugin(RepoStatusTable);
  eleventyConfig.addPlugin(RenderInstallation);
  eleventyConfig.addPlugin(SpacerTokensTable);
  eleventyConfig.addPlugin(RenderCodeDocs);
  eleventyConfig.addPlugin(UxdotPattern);
};
