// @ts-check
import { pfeDevServerConfig } from '@patternfly/pfe-tools/dev-server/config.js';

export const litcssOptions = {
  include: (/** @type{string[]}*/(/** @type{unknown}*/([
    /elements\/rh-[\w-]+\/[\w-]+\.css$/,
    /lib\/.*\.css$/,
  ]))),
  exclude: /lightdom/,
};

export default pfeDevServerConfig({
  litcssOptions,
  tsconfig: 'tsconfig.json',
  middleware: [
    /** redirect requests for lightdom css to /elements */
    function(ctx, next) {
      const match = ctx.path.match(/^\/components\/(?<slug>[-\w]+)\/(?<path>.*)\.css$/);
      if (match) {
        const { slug, path } = /** @type{{ slug: string; path: string }} */ (match.groups);
        ctx.redirect(`/elements/rh-${slug}/${path}.css`);
      }
      return next();
    },
    /** redirect requests for /assets/prism.css css to /docs/assets/prism.css */
    function(ctx, next) {
      if (ctx.path === '/assets/prism.css') {
        ctx.redirect('/docs/assets/prism.css');
      }
      return next();
    }
  ]
});
