import { pfeTestRunnerConfig } from '@patternfly/pfe-tools/test/config.js';
import { litcssOptions, stripCssImportAttributesPlugin } from './web-dev-server.config.js';

const baseConfig = pfeTestRunnerConfig({
  litcssOptions,
  tsconfig: 'tsconfig.settings.json',
  files: ['elements/**/*.spec.ts'],
  importMapOptions: { },
});

export default {
  ...baseConfig,
  plugins: [
    stripCssImportAttributesPlugin(),
    ...baseConfig.plugins || [],
  ],
  middleware: [
    /** redirect requests for /(lib|elements)/*.js to *.ts */
    function(ctx, next) {
      if (!ctx.path.includes('node_modules') && ctx.path.match(/(lib|elements)\/.*\.js$/)) {
        ctx.redirect(ctx.path.replace('.js', '.ts'));
      } else {
        return next();
      }
    },
  ],
};

