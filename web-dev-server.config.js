import { pfeDevServerConfig } from '@patternfly/pfe-tools/dev-server.js';

export default pfeDevServerConfig({
  litcssOptions: {
    include: ['**/elements/*/*.css']
  },
});

