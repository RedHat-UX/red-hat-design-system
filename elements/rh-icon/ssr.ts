import '@patternfly/pfe-core/ssr-shims.js';

import { standard, social, ui, microns } from '@rhds/icons';

globalThis.RH_ICONS = new Map(
  Object.entries({ standard, social, ui, microns })
);

declare global {

  var RH_ICONS: Map<
    string,
    typeof standard | typeof ui | typeof social | typeof microns
  >;
}
