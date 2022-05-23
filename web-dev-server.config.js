import { pfeDevServerConfig } from '@patternfly/pfe-tools/dev-server.js';

export const litcssOptions = {
  include: /elements\/rh-[\w-]+\/[\w-]+\.css$/,
  exclude: /lightdom/,
};

export default pfeDevServerConfig({
  litcssOptions,
  site: {
    tagPrefix: 'rh-',
    title: 'Red Hat Design System',
    logoUrl: '/docs/assets/logo-red-hat.svg',
    githubUrl: 'https://github.com/redhat-ux/red-hat-design-system/',
    description: 'Red Hat Design System',
  },
});

