/* eslint-disable @stylistic/max-len */
import { isServer } from 'lit';
export const UxdotPatternSSRController = isServer ? await import('./uxdot-pattern-ssr-controller-server.js').then(m => m.UxdotPatternSSRControllerServer)
    : await import('./uxdot-pattern-ssr-controller-client.js').then(m => m.UxdotPatternSSRControllerClient);
//# sourceMappingURL=uxdot-pattern-ssr-controller.js.map