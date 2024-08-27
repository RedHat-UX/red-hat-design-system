import '@patternfly/pfe-core/ssr-shims.js';
import { standard, social, ui, microns } from '@rhds/icons';
declare global {
    var RH_ICONS: Map<string, typeof standard | typeof ui | typeof social | typeof microns>;
}
