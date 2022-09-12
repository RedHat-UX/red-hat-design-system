/* eslint-disable no-console */
// @ts-check

const { join } = require('node:path');
const { readdir } = require('node:fs/promises');

const PFE_DEPS = [
  '@patternfly/pfe-accordion@next',
  '@patternfly/pfe-band@next',
  '@patternfly/pfe-button@next',
  '@patternfly/pfe-card@next',
  '@patternfly/pfe-icon@next',
  '@patternfly/pfe-modal@next',
  '@patternfly/pfe-core@next',
  '@patternfly/pfe-tooltip/BaseTooltip.js',
  '@patternfly/pfe-core/decorators.js',
  '@patternfly/pfe-core/controllers/cascade-controller.js',
  '@patternfly/pfe-core/controllers/color-context.js',
  '@patternfly/pfe-core/controllers/css-variable-controller.js',
  '@patternfly/pfe-core/controllers/light-dom-controller.js',
  '@patternfly/pfe-core/controllers/logger.js',
  '@patternfly/pfe-core/controllers/perf-controller.js',
  '@patternfly/pfe-core/controllers/property-observer-controller.js',
  '@patternfly/pfe-core/controllers/slot-controller.js',
  '@patternfly/pfe-core/controllers/style-controller.js',
  '@patternfly/pfe-core/decorators/bound.js',
  '@patternfly/pfe-core/decorators/cascades.js',
  '@patternfly/pfe-core/decorators/color-context.js',
  '@patternfly/pfe-core/decorators/deprecation.js',
  '@patternfly/pfe-core/decorators/initializer.js',
  '@patternfly/pfe-core/decorators/observed.js',
  '@patternfly/pfe-core/decorators/pfelement.js',
  '@patternfly/pfe-core/decorators/time.js',
  '@patternfly/pfe-core/decorators/trace.js',
  '@patternfly/pfe-core/functions/debounce.js',
  '@patternfly/pfe-core/functions/deprecatedCustomEvent.js',
  '@patternfly/pfe-core/functions/random.js',
  '@lrnwebcomponents/code-sample',
  '@popperjs/core'
];

const LIT_DEPS = [
  'lit',
  'lit/async-directive.js',
  'lit/decorators.js',
  'lit/directive-helpers.js',
  'lit/directive.js',
  'lit/directives/class-map.js',
  'lit/experimental-hydrate-support.js',
  'lit/experimental-hydrate.js',
  'lit/static-html.js',
];

module.exports = async function(configData) {
  const { Generator } = await import('@jspm/generator');

  const elements = await readdir(join(__dirname, '..', '..', 'elements'));
  const generator = new Generator({
    defaultProvider: 'jspm', // this is the default defaultProvider
    env: ['production', 'browser', 'module'],
  });

  await generator.install('tslib');

  for (const pack of [...PFE_DEPS, ...LIT_DEPS]) {
    await generator.install(pack);
  }

  await generator.install({
    alias: '@rhds/elements',
    target: '/assets/rhds.min.js'
  });

  const subpaths = (/** @type{`./${string}`[]}*/(elements.map(x => `./${x}/${x}.js`)));
  await generator.install({
    alias: `@rhds/elements`,
    target: `/assets/elements/`,
    subpaths
  });

  const map = generator.getMap();

  map.imports = Object.fromEntries(Object.entries(map.imports).map(([k, v]) => [
    k, k === '@rhds/elements' ? '/assets/rhds.min.js'
      : k.startsWith('@rhds/elements') ? v.replace('./elements', '/assets/elements')
      : v
  ]));

  map.imports['@popperjs/core'] = 'https://ga.jspm.io/npm:@popperjs/core@2.11.5/dist/umd/popper.js';
  return map;
};
