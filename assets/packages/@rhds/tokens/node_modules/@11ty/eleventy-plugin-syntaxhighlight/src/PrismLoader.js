const Prism = require("prismjs");
const PrismLoader = require("prismjs/components/index.js");
// Avoid "Language does not exist: " console logs
PrismLoader.silent = true;

const PrismAlias = require("./PrismNormalizeAlias");

module.exports = function(language) {
  let diffRemovedRawName = language;
  if(language.startsWith("diff-")) {
    diffRemovedRawName = language.substr("diff-".length);
  }
  // aliasing should ignore diff-
  let aliasedName = PrismAlias(diffRemovedRawName);

  if(!Prism.languages[ aliasedName ]) {
    PrismLoader(aliasedName);
  }
  if(!Prism.languages[ aliasedName ]) {
    throw new Error(`"${language}" is not a valid Prism.js language for eleventy-plugin-syntaxhighlight`);
  }

  if(!language.startsWith("diff-")) {
    return Prism.languages[ aliasedName ];
  }

  // language has diff- prefix
  let fullLanguageName = `diff-${aliasedName}`;

  if(!Prism.languages.diff) {
    PrismLoader("diff");
    // Bundled Plugin
    require("prismjs/plugins/diff-highlight/prism-diff-highlight");
  }

  // Store into with aliased keys
  //   ts -> diff-typescript
  //   js -> diff-javascript
  Prism.languages[ fullLanguageName ] = Prism.languages.diff;

  return Prism.languages[ fullLanguageName ];
};
