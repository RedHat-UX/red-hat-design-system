const {
  RepoStatusList,
  RepoStatusChecklist,
  RepoStatusTable,
} = require('./shortcodes/repoStatus.cjs');
const SpacerTokensTable = require('./shortcodes/spacerTokensTable.cjs');

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(RepoStatusList);
  eleventyConfig.addPlugin(RepoStatusChecklist);
  eleventyConfig.addPlugin(RepoStatusTable);
  eleventyConfig.addPlugin(SpacerTokensTable);
};
