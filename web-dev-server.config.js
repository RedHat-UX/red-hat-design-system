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
    tagPrefix: 'rh-',
    title: 'Red Hat Design System',
    logoUrl: '/docs/assets/logo-red-hat.svg',
    githubUrl: 'https://github.com/redhat-ux/red-hat-design-system/',
    description: 'Red Hat Design System',
  },
});

