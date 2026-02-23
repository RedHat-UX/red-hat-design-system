import { RHDSSSRController } from '@rhds/elements/lib/ssr-controller.js';
import { noChange } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
/** Hydrate the results of SSR on the client */
export declare class UxdotPatternSSRControllerClient extends RHDSSSRController {
    #private;
    allContent: ReturnType<typeof unsafeHTML> | typeof noChange;
    htmlContent: ReturnType<typeof unsafeHTML> | typeof noChange;
    jsContent: ReturnType<typeof unsafeHTML> | typeof noChange;
    cssContent: ReturnType<typeof unsafeHTML> | typeof noChange;
    hasCss: boolean | typeof noChange;
    hasJs: boolean | typeof noChange;
    hasWorkedAroundHydrationWoes: boolean;
    hostConnected(): Promise<void>;
    hostUpdated(): void;
}
