import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
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
    /** serve lightdom CSS files directly from filesystem */
    async function(ctx, next) {
      if (!ctx.path.includes('-lightdom')) {
        return next();
      }
      const match = ctx.path.match(
        /(?:\/elements)?\/(rh-[\w-]+)(?:\/\1)?-(lightdom(?:-[\w-]*)?)\.css$/);
      if (!match) {
        return next();
      }
      const [, elementName, suffix] = match;
      const filePath = join(process.cwd(), 'elements', elementName, `${elementName}-${suffix}.css`);
      try {
        ctx.type = 'text/css';
        ctx.body = await readFile(filePath, 'utf-8');
      } catch {
        return next();
      }
    },
  ],
};

