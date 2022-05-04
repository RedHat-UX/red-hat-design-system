import { pfeDevServerConfig } from '@patternfly/pfe-tools/dev-server.js';

export const litcssOptions = {
  include: /elements\/rh-[\w-]+\/[\w-]+\.css$/,
  exclude: /lightdom/,
};

export default pfeDevServerConfig({
  litcssOptions,
  site: {
    title: 'Red Hat Design System',
    logoUrl: '/docs/assets/red-hat-digital-design-system.svg',
    githubUrl: 'https://github.com/redhat-ux/red-hat-design-system/',
    description: 'Red Hat Design System',
  },
});

