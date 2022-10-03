// @ts-check
import { pfeDevServerConfig } from '@patternfly/pfe-tools/dev-server.js';

/** @type{import('@patternfly/pfe-tools/dev-server.js').PfeDevServerConfigOptions['litcssOptions']} */
export const litcssOptions = {
  include: [
    /elements\/rh-[\w-]+\/[\w-]+\.css$/,
    /lib\/.*\.css$/,
  ],
  exclude: /lightdom/,
};

export default pfeDevServerConfig({
  litcssOptions,
  middleware: [
    /** redirect requests for lightdom css to /elements */
    function(ctx, next) {
      const match = ctx.path.match(/^\/components\/(?<slug>[-\w]+)\/(?<path>.*)\.css$/);
      if (match) {
        const { slug, path } = match.groups;
        ctx.redirect(`/elements/rh-${slug}/${path}.css`);
      }
      return next();
    }
  ]
});

