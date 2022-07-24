const fs = require('fs');
const path = require('path');

// TODO: use https://github.com/jspm/generator to generate the import map from semver ranges
module.exports = {
  'imports': {
    '@patternfly/pfe-band': 'https://ga.jspm.io/npm:@patternfly/pfe-band@2.0.0-next.2/pfe-band.js',
    '@patternfly/pfe-button': 'https://ga.jspm.io/npm:@patternfly/pfe-button@2.0.0-next.3/pfe-button.js',
    '@patternfly/pfe-card': 'https://ga.jspm.io/npm:@patternfly/pfe-card@2.0.0-next.4/pfe-card.js',
    '@patternfly/pfe-cta': 'https://ga.jspm.io/npm:@patternfly/pfe-cta@2.0.0-next.4/pfe-cta.js',
    '@patternfly/pfe-icon': 'https://ga.jspm.io/npm:@patternfly/pfe-icon@2.0.0-next.2/pfe-icon.js',
    '@patternfly/pfe-modal': 'https://ga.jspm.io/npm:@patternfly/pfe-modal@2.0.0-next.4/pfe-modal.js',
    '@patternfly/pfe-core': 'https://ga.jspm.io/npm:@patternfly/pfe-core@2.0.0-next.6/core.js',
    '@patternfly/pfe-core/decorators.js': 'https://ga.jspm.io/npm:@patternfly/pfe-core@2.0.0-next.5/decorators.js',
    '@patternfly/pfe-core/decorators/': 'https://ga.jspm.io/npm:@patternfly/pfe-core@2.0.0-next.5/decorators/',
    '@patternfly/pfe-core/controllers/': 'https://ga.jspm.io/npm:@patternfly/pfe-core@2.0.0-next.5/controllers/',
    '@patternfly/pfe-core/functions/': 'https://ga.jspm.io/npm:@patternfly/pfe-core@2.0.0-next.5/functions/',
    'lit': 'https://ga.jspm.io/npm:lit@2.2.7/index.js',
    'lit/async-directive.js': 'https://ga.jspm.io/npm:lit@2.2.8/async-directive.js',
    'lit/decorators.js': 'https://ga.jspm.io/npm:lit@2.2.8/decorators.js',
    'lit/decorators/': 'https://ga.jspm.io/npm:lit@2.2.8/decorators/',
    'lit/directive-helpers.js': 'https://ga.jspm.io/npm:lit@2.2.8/directive-helpers.js',
    'lit/directive.js': 'https://ga.jspm.io/npm:lit@2.2.8/directive.js',
    'lit/directives/': 'https://ga.jspm.io/npm:lit@2.2.8/directives/',
    'lit/experimental-hydrate-support.js': 'https://ga.jspm.io/npm:lit@2.2.8/experimental-hydrate-support.js',
    'lit/experimental-hydrate.js': 'https://ga.jspm.io/npm:lit@2.2.8/experimental-hydrate.js',
    'lit/static-html.js': 'https://ga.jspm.io/npm:lit@2.2.8/static-html.js',

    ...Object.fromEntries(fs.readdirSync(path.join(__dirname, '..', '..', 'elements')).flatMap(dirname => [
      [
        `@rhds/elements/${dirname}`,
        `/components/${dirname.replace('rh-', '')}/${dirname}.js`,
      ], [
        `@rhds/elements/${dirname}/`,
        `/components/${dirname.replace('rh-', '')}/`,
      ]
    ])),
  },
  'scopes': {
    'https://ga.jspm.io/': {
      '@lit/reactive-element': 'https://ga.jspm.io/npm:@lit/reactive-element@1.3.4/development/reactive-element.js',
      '@lit/reactive-element/decorators/': 'https://ga.jspm.io/npm:@lit/reactive-element@1.3.4/development/decorators/',
      'lit-element/experimental-hydrate-support.js': 'https://ga.jspm.io/npm:lit-element@3.2.2/development/experimental-hydrate-support.js',
      'lit-element/lit-element.js': 'https://ga.jspm.io/npm:lit-element@3.2.2/development/lit-element.js',
      'lit-html': 'https://ga.jspm.io/npm:lit-html@2.2.7/development/lit-html.js',
      'lit-html/directives/': 'https://ga.jspm.io/npm:lit-html@2.2.7/development/directives/',
      'lit-html/experimental-hydrate.js': 'https://ga.jspm.io/npm:lit-html@2.2.7/development/experimental-hydrate.js',
      'lit-html/static.js': 'https://ga.jspm.io/npm:lit-html@2.2.7/development/static.js'
    }
  }
};

