/* eslint-disable @stylistic/max-len */
import { isServer } from 'lit';
import type { UxdotPatternSSRControllerServer } from './uxdot-pattern-ssr-controller-server.js';
import type { UxdotPatternSSRControllerClient } from './uxdot-pattern-ssr-controller-client.js';

export const UxdotPatternSSRController: typeof UxdotPatternSSRControllerClient | typeof UxdotPatternSSRControllerServer =
  isServer ? await import('./uxdot-pattern-ssr-controller-server.js').then(m => m.UxdotPatternSSRControllerServer)
           : await import('./uxdot-pattern-ssr-controller-client.js').then(m => m.UxdotPatternSSRControllerClient);
