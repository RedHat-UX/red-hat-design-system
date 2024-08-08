import { pfeTestRunnerConfig } from '@patternfly/pfe-tools/test/config.js';
import { litcssOptions } from './web-dev-server.config.js';

// TODO: remove after next pfe-tools version
export default {
  ...pfeTestRunnerConfig({
    litcssOptions,
    tsconfig: 'tsconfig.json',
    files: ['elements/**/*.spec.ts'],
    ...process.argv.includes('--default-reporter') && { reporter: 'default' },
  }),
  nodeResolve: {
    exportConditions: ['production'],
  },
};

// export default pfeTestRunnerConfig({
//  litcssOptions,
//  tsconfig: 'tsconfig.json',
//  files: ['elements/**/*.spec.ts'],
//  ...process.argv.includes('--default-reporter') && { reporter: 'default' },
// });

