import { readFile } from 'node:fs/promises';
import { Worker } from 'node:worker_threads';
import { pfeTestRunnerConfig } from '@patternfly/pfe-tools/test/config.js';
import {
  litcssOptions,
  resolveLightdomPath,
  stripCssImportAttributesPlugin,
} from './web-dev-server.config.js';

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
    {
      name: 'ssr-fixture',
      async executeCommand({ command, payload }) {
        if (command !== 'render-ssr-fixture') {
          return;
        }
        // SSR installs browser globals and registers custom elements in Node.
        // Give each fixture a fresh worker so that state stays out of the test server and other fixtures.
        const worker = new Worker(new URL('./scripts/ssr-test-worker.js', import.meta.url), {
          workerData: payload,
        });
        try {
          return await new Promise((resolve, reject) => {
            worker.once('message', resolve);
            worker.once('error', reject);
          });
        } finally {
          await worker.terminate();
        }
      },
    },
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
      const filePath = await resolveLightdomPath(elementName, suffix);
      try {
        ctx.type = 'text/css';
        ctx.body = await readFile(filePath, 'utf-8');
      } catch {
        return next();
      }
    },
  ],
};
