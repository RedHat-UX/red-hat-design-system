/* eslint-disable @stylistic/max-len */
import { isServer } from 'lit';
import type { UxdotDemoSSRControllerServer } from './uxdot-demo-ssr-controller-server.js';
import type { UxdotDemoSSRControllerClient } from './uxdot-demo-ssr-controller-client.js';

export const UxdotDemoSSRController: typeof UxdotDemoSSRControllerClient | typeof UxdotDemoSSRControllerServer =
  isServer ? await import('./uxdot-demo-ssr-controller-server.js').then(m => m.UxdotDemoSSRControllerServer)
           : await import('./uxdot-demo-ssr-controller-client.js').then(m => m.UxdotDemoSSRControllerClient);
