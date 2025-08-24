import globals from 'globals';
import tseslint from 'typescript-eslint';
import pfe from '@patternfly/eslint-config-elements';

export default tseslint.config(
  ...pfe,
  {
    name: 'local/ignores',
    ignores: [
      'custom-elements.json',
      'package-lock.json',
      'node_modules',
      'node_modules/**/*',
      '_site',
      'rhds.min.js',

      '**/*.d.ts',
      '**/*.(spec|e2e).js',
      'react',
      'elements/**/*.js',
      'uxdot/**/*.js',
      'lib/**/*.js',

      'docs/demo.js',
      'docs/pfe.min.js',
      'docs/bundle.js',
      'docs/core',
      'docs/components',
      'docs/_plugins/lit-ssr/worker.js',
      'docs/assets/javascript/elements/uxdot/*.js.map',
      'docs/assets/javascript/elements/uxdot/*.d.ts',
      'docs/assets/javascript/elements/uxdot/*.js',
      'node_modules',

      '!core/*/demo/*.js',
      '!elements/*/demo/*.js',

      '.cache/*',

    ],
  },
  {
    name: 'local/scripts',
    files: ['scripts/*.js'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    name: 'local/docs/overrides',
    files: ['docs/theming/code-samples/*.*'],
    rules: {
      '@stylistic/no-multi-spaces': ['off'],
    },
  }
);
