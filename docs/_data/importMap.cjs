// @ts-check

const { join } = require('node:path');
const { readdir } = require('node:fs/promises');

const PFE_DEPS = [
  '@patternfly/pfe-accordion@next',
  '@patternfly/pfe-band@next',
  '@patternfly/pfe-button@next',
  '@patternfly/pfe-card@next',
  '@patternfly/pfe-cta@next',
  '@patternfly/pfe-icon@next',
  '@patternfly/pfe-modal@next',
  { target: '@patternfly/pfe-core@^2.0.0-next.7', subpaths: [
    '.',
    './decorators.js',
    './controllers/cascade-controller.js',
    './controllers/color-context.js',
    './controllers/css-variable-controller.js',
    './controllers/light-dom-controller.js',
    './controllers/logger.js',
    './controllers/perf-controller.js',
    './controllers/property-observer-controller.js',
    './controllers/slot-controller.js',
    './controllers/style-controller.js',
    './decorators/bound.js',
    './decorators/cascades.js',
    './decorators/color-context.js',
    './decorators/deprecation.js',
    './decorators/initializer.js',
    './decorators/observed.js',
    './decorators/pfelement.js',
    './decorators/time.js',
    './decorators/trace.js',
    './functions/debounce.js',
    './functions/deprecatedCustomEvent.js',
    './functions/random.js',
  ] }
];

const LIT_DEPS = [
  { target: 'lit', subpaths: [
    '.',
    './async-directive.js',
    './decorators.js',
    './directive-helpers.js',
    './directive.js',
    './directives/class-map.js',
    './experimental-hydrate-support.js',
    './experimental-hydrate.js',
    './static-html.js',
  ] },
];

module.exports = async function(configData) {
  const { Generator } = await import('@jspm/generator');

  const elements = await readdir(join(__dirname, '..', '..', 'elements'));
  const generator = new Generator({
    defaultProvider: 'jspm', // this is the default defaultProvider
    env: ['production', 'browser', 'module'],
  });

  await generator.install(['tslib', ...PFE_DEPS, ...LIT_DEPS]);

  await generator.install({
    alias: '@rhds/elements',
    target: '/assets/rhds.min.js'
  });

  const subpaths = (/** @type{`./${string}`[]}*/(['.', ...elements.map(x => `./${x}/${x}.js`)]));
  await generator.install({ alias: `@rhds/elements`, target: `/assets/elements/`, subpaths });

  const map = generator.getMap();

  map.imports = Object.fromEntries(Object.entries(map.imports).map(([k, v]) => [
    k, k === '@rhds/elements' ? '/assets/rhds.min.js'
      : k.startsWith('@rhds/elements') ? v.replace('./elements', '/assets/elements')
      : v
  ]));
  return map;
};
