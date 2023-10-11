import { playwrightLauncher } from '@web/test-runner-playwright';
import { pfeTestRunnerConfig } from '@patternfly/pfe-tools/test/config.js';
import { litcssOptions } from './web-dev-server.config.js';

const config = pfeTestRunnerConfig({
  litcssOptions,
  tsconfig: 'tsconfig.json',
  files: ['elements/**/*.spec.ts'],
  ...process.argv.includes('--default-reporter') && { reporter: 'default' },
});

export default {
  ...config,
  browsers: [
    ...config.browsers,
    ...!process.env.CI ? [] : [
      playwrightLauncher({ product: 'firefox' }),
      playwrightLauncher({ product: 'webkit' }),
    ],
  ],
};
