// @ts-check
import { pfeDevServerConfig } from '@patternfly/pfe-tools/dev-server.js';

export const litcssOptions = {
  include: /elements\/rh-[\w-]+\/[\w-]+\.css$/,
  exclude: /lightdom/,
};

export default pfeDevServerConfig({
  litcssOptions,
  sourceControlURLPrefix: 'https://github.com/redhat-ux/red-hat-design-system/tree/main/',
  demoURLPrefix: 'https://ux.redhat.com/',
  tagPrefix: 'rh',
  site: {
    title: 'Red Hat Design System',
    logoUrl: '/docs/assets/logo-red-hat.svg',
    favicon: '/docs/assets/logo-red-hat.svg',
    description: 'Red Hat Design System',
    stylesheets: [
      '/docs/assets/base.css',
      '/docs/assets/demos.css',
    ]
  },
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

