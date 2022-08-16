// @ts-check
const path = require('node:path');

module.exports = async function() {
  const { Generator } = await import('@jspm/generator');

  const generator = new Generator({
    defaultProvider: 'unpkg', // this is the default defaultProvider
    env: ['production', 'browser', 'module'],
  });

  await generator.install([
    'tslib',
    'lit',
    '@patternfly/pfe-band@next',
    '@patternfly/pfe-cta@next',
    { target: '@rhds/elements', subpaths: [
      './rh-footer/rh-footer.js',
    ] },
  ]);

  const map = generator.getMap();
  delete map.scopes;
  map.imports = Object.fromEntries(Object.entries(map.imports).map(([k, v]) => {
    return [
      k,
        v.startsWith('https://unpkg.com') ? `${v}?module`
      : v.startsWith('./elements') ? `https://unpkg.com/@rhds/elements@1.0.0-beta.15/${v.replace('./elements/', 'elements/')}?module`
      : v
    ];
  }));
  return map;
};
