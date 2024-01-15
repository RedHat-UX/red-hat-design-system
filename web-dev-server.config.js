// @ts-check
import { pfeDevServerConfig } from '@patternfly/pfe-tools/dev-server/config.js';
import { glob } from 'glob';

/**
 * Find all modules in a glob pattern, relative to the repo root, and resolve them as package paths
 * @param {string} pattern
 * @param {(spec: string) => [string, string]} fn
 */
async function resolveLocal(pattern, fn) {
  return glob(pattern, { ignore: ['**/test/**'] })
    .then(files => files.map(fn))
    .then(Object.fromEntries);
}

export default pfeDevServerConfig({
  tsconfig: 'tsconfig.json',
  litcssOptions: {
    include: (/** @type{string[]}*/(/** @type{unknown}*/([
      /elements\/rh-[\w-]+\/[\w-]+\.css$/,
      /lib\/.*\.css$/,
    ]))),
    exclude: /lightdom/,
  },
  importMapOptions: {
    providers: {
      '@patternfly/icons': 'nodemodules',
      '@patternfly/elements': 'nodemodules',
      '@patternfly/pfe-tools': 'nodemodules',
      '@patternfly/pfe-core': 'nodemodules',
    },
    inputMap: {
      imports: {
        ...await resolveLocal('./lib/**/*.js', spec => [`@rhds/elements/${spec}`, `./${spec}`]),
        ...await resolveLocal('./elements/**/*.js', x => [`@rhds/elements/${x.replace('elements/', '')}`, `./${x}`]),
      },
    },
  },
  middleware: [
    /** redirect requests for /assets/ css to /docs/assets/ */
    function(ctx, next) {
      if (ctx.path.startsWith('/assets/')) {
        ctx.redirect(`/docs${ctx.path}`);
      } else {
        return next();
      }
    }
  ]
});
