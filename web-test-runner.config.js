import { pfeTestRunnerConfig } from '@patternfly/pfe-tools/test/config.js';
import { litcssOptions } from './web-dev-server.config.js';

export default pfeTestRunnerConfig({
  litcssOptions,
  tsconfig: 'tsconfig.json',
  files: ['elements/**/*.spec.ts'],
  importMapOptions: {
    providers: {
      '@rhds/icons': 'nodemodules',
      '@patternfly/pfe-tools': 'nodemodules',
      '@patternfly/pfe-core': 'nodemodules',
    },
  },
});

