import YAML from 'js-yaml';
export default {
  customRules: [{
    names: ['markdownlint-changeset-packagename'],
    description: 'Require changesets to use the correct package name',
    tags: ['frontmatter'],
    function({ name, frontMatterLines, ...rest }, onError) {
      const yaml = YAML.load(frontMatterLines.filter(Boolean).filter(x => x !== '---'))
      for (const [key, value] of Object.entries(yaml)) {
        if (['patch','minor','major'].includes(value)) {
          if (key !== '@rhds/elements') {
            onError({
              lineNumber: 2,
              detail: `incorrect package name ${key}`,
            })
          }
        }
      }
    }
  }],
  dot: true,
  files: './changeset/*.md',
  config: {
    default: false,
    'markdownlint-changeset-packagename': true,
  }
}
