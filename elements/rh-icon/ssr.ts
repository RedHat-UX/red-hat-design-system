import '@patternfly/pfe-core/ssr-shims.js';

import { standard, social, ui, microns } from '@rhds/icons';

globalThis.RH_ICONS = new Map(Object.entries({ standard, social, ui, microns }));

declare global {
  // eslint-disable-next-line no-var
  var RH_ICONS: Map<string,
        | typeof standard
        | typeof ui
        | typeof social
        | typeof microns>;
}
