import { pfeDevServerConfig } from '@patternfly/pfe-tools/dev-server.js';

export default pfeDevServerConfig({
  site: {
    title: 'Red Hat Design System',
    logoUrl: '/docs/assets/red-hat-digital-design-system.svg',
    githubUrl: 'https://github.com/redhat-ux/red-hat-design-system/',
    description: 'Red Hat Design System',
  },
  litcssOptions: {
    include: /elements\/rh-[\w-]+\/[\w-]+\.css$/,
  },
});

