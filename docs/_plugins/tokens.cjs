function getType(tokenOrCollection) {
  const path = (tokenOrCollection.path ?? []);
  const collections = [];
  path.reduce((last, key, i) => {
    const value = last[key];
    collections[i] = { key, value };
    return value;
  }, sources);
  return collections.reduceRight(($, { value: { $type } }) => $ ?? $type, tokenOrCollection.$type);
}

const getDocs = x => x?.$extensions?.['com.redhat.ux'];
const filterEntries = (p, x) => Object.fromEntries(Object.entries(x).filter(p));
const sortEntries = (p, x) => Object.fromEntries(Object.entries(x).sort(p));
const entryHasValue = ([, v]) => typeof v === 'object' && '$value' in v;

/** @typedef {(token: import('style-dictionary').DesignToken) => boolean} Predicate */

/** @type{(p: Predicate, q: Predicate) => Predicate} */
const and = (p, q) => x => p(x) && q(x);

/** @type {Predicate} */
const isColor = token =>
  getType(token) === 'color';

/** @type {Predicate} */
const isBreakpoint = token =>
  token.path.includes('breakpoint');

/** @type {Predicate} */
const isMobile = token =>
  token.path.includes('mobile');

/** @type {Predicate} */
const isTablet = token =>
  token.path.includes('tablet');

/** @type {Predicate} */
const isShadow = token =>
  getType(token) === 'shadow';

/** @type {Predicate} */
const isCubicBezier = token =>
  getType(token) === 'cubicBezier';

/** @type {Predicate} */
const isFontFamily = token =>
  getType(token) === 'fontFamily';

/** @type {Predicate} */
const isFontWeight = token =>
  getType(token) === 'fontWeight';

/** @type {Predicate} */
const isMediaQuery = token =>
  getType(token) === 'mediaQuery';

/** @type {Predicate} */
const hasExtensions = token =>
  !!token.$extensions;

/** @type {Predicate} */
const isDescription = and(hasExtensions, token => token.path.at(-1) === 'description');
const hasDescription = and(hasExtensions, token => token.$extensions['com.redhat.ux'].description);

const flattenTokens =  require('style-dictionary/lib/utils/flattenProperties.js');

module.exports = function(eleventyConfig) {
  const tokens = require('@rhds/tokens/json/rhds.tokens.json');
  const dictionary = { tokens, allTokens: flattenTokens(tokens) }
  eleventyConfig.addGlobalData('tokens', tokens);

  const getColorGroupOrder = x => getDocs(dictionary.tokens.color[x])?.order ?? Infinity;
  const breakpoints = dictionary.allTokens.filter(isBreakpoint);
  const mediaQueries = dictionary.allTokens.filter(isMediaQuery);
  const colors = dictionary.allTokens.filter(isColor);

  /* eslint-disable no-console */
  eleventyConfig.addFilter('log', x => console.log(x))
  eleventyConfig.addFilter('trace', x => (console.log(x), x))
  /* eslint-enable no-console */

  eleventyConfig.addFilter('isRef', x => x?.original?.$value?.startsWith?.('{') ?? false)
  eleventyConfig.addFilter('isMobile', x => isMobile(x))
  eleventyConfig.addFilter('isTablet', x => isTablet(x))
  eleventyConfig.addFilter('deref', x => `rh-${x.original.$value.replace(/[{}]/g, '').split('.').join('-')}`)
  eleventyConfig.addFilter('slugify', x => slugify(x))
  eleventyConfig.addFilter('flattenTokens', flattenTokens)
  eleventyConfig.addFilter('sortByPxSize', xs => [...xs].sort((a, b) => parseInt(a.$value) - parseInt(b.$value)))
  eleventyConfig.addFilter('getDocs', getDocs)
  eleventyConfig.addFilter('getDescription', x => md.render((x?.description ?? '').replaceAll('%(%', '{').replaceAll('%)%', '}')))
  eleventyConfig.addFilter('inlineCss', x => md.render(`\`\`\`css\n${x}\n\`\`\``))
  eleventyConfig.addFilter('isFontWeight', collection => getType(collection) === 'fontWeight')
  eleventyConfig.addFilter('getValues', x => filterEntries(entryHasValue, x))
  eleventyConfig.addFilter('excludekeys', (x, ...keys) => filterEntries(([k]) => !keys.includes(k), x))
  eleventyConfig.addFilter('pickkeys', (x, ...keys) => filterEntries(([k]) => keys.includes(k), x))
  eleventyConfig.addFilter('stripmeta', x => filterEntries(([k]) => k !== 'comment' && !k.startsWith('$'), x ?? {}));

  eleventyConfig.addFilter('sortColorGroupByOrder', x => sortEntries(([a], [b]) => getColorGroupOrder(a) - getColorGroupOrder(b), x));
  eleventyConfig.addFilter('buildCollection', name => ({
    ...dictionary.tokens[name],
    ...filterEntries(([, v]) => getDocs(v)?.category === name, dictionary.tokens.color)
  }));
}
