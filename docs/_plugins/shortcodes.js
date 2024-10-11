import { RepoStatusList, RepoStatusChecklist, RepoStatusTable } from './shortcodes/repoStatus.js';
import SpacerTokensTable from './shortcodes/spacerTokensTable.js';

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(RepoStatusList);
  eleventyConfig.addPlugin(RepoStatusChecklist);
  eleventyConfig.addPlugin(RepoStatusTable);
  eleventyConfig.addPlugin(SpacerTokensTable);
};
