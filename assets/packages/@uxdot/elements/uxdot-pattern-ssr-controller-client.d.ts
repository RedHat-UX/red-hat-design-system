import { RHDSSSRController } from '@rhds/elements/lib/ssr-controller.js';
/** Hydrate the results of SSR on the client */
export declare class UxdotPatternSSRControllerClient extends RHDSSSRController {
    allContent: symbol;
    htmlContent: symbol;
    jsContent: symbol;
    cssContent: symbol;
    hasCss: symbol;
    hasJs: symbol;
    hasWorkedAroundHydrationWoes: boolean;
    hostUpdated(): void;
}
