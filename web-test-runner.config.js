import { pfeTestRunnerConfig } from '@patternfly/pfe-tools/test-runner.js';
import { litcssOptions } from './web-dev-server.config.js';

export default pfeTestRunnerConfig({
  litcssOptions,
  files: ['**/elements/**/*.spec.ts'],
  // uncomment to get default wtr reporter
  // reporter: 'default',
});

