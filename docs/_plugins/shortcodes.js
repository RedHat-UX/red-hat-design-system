import { RepoStatusList, RepoStatusChecklist, RepoStatusTable } from './shortcodes/repoStatus.js';

export default function(eleventyConfig) {
  eleventyConfig.addPlugin(RepoStatusList);
  eleventyConfig.addPlugin(RepoStatusChecklist);
  eleventyConfig.addPlugin(RepoStatusTable);
};
