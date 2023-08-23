import { pfeTestRunnerConfig } from '@patternfly/pfe-tools/test/config.js';
import { litcssOptions } from './web-dev-server.config.js';

export default pfeTestRunnerConfig({
  litcssOptions,
  tsconfig: 'tsconfig.json',
  files: ['elements/**/*.spec.ts'],
  ...process.argv.includes('--default-reporter') && { reporter: 'default' },
});
