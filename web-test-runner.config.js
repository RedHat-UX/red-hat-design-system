import { pfeTestRunnerConfig } from '@patternfly/pfe-tools/test/config.js';
import { litcssOptions } from './web-dev-server.config.js';

export default { ...pfeTestRunnerConfig({
  litcssOptions,
  tsconfig: 'tsconfig.json',
  files: ['elements/**/*.spec.ts'],
  importMapOptions: {
  },
}),

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

