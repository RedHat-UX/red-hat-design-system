import type { UxdotPattern } from './uxdot-pattern.js';
import { RHDSSSRController } from '@rhds/elements/lib/ssr-controller.js';
/** Hydrate the results of SSR on the client */
export declare class UxdotPatternSSRControllerClient extends RHDSSSRController {
    allContent?: Node;
    htmlContent?: Node;
    jsContent?: Node;
    cssContent?: Node;
    hasCss: boolean;
    hasJs: boolean;
    constructor(host: UxdotPattern);
}
