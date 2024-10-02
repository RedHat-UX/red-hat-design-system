const {
  RepoStatusList,
  RepoStatusChecklist,
  RepoStatusTable,
} = require('./shortcodes/repoStatus.cjs');
const SpacerTokensTable = require('./shortcodes/spacerTokensTable.cjs');
const UxdotPattern = require('./shortcodes/uxdotPattern.cjs');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(RepoStatusList);
  eleventyConfig.addPlugin(RepoStatusChecklist);
  eleventyConfig.addPlugin(RepoStatusTable);
  eleventyConfig.addPlugin(SpacerTokensTable);
  eleventyConfig.addPlugin(UxdotPattern);
};
