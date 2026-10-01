import '@patternfly/pfe-core/ssr-shims.js';

import { parentPort, workerData } from 'node:worker_threads';
import { LitElementRenderer } from '@lit-labs/ssr/lib/lit-element-renderer.js';
import { renderGlobal } from '@patternfly/pfe-tools/ssr/global.js';

const { html, importSpecifiers } = workerData;

// Replace pfe-core's legacy flag with Lit's supported option for the same behavior.
globalThis.litSsrCallConnectedCallback = false;
LitElementRenderer.renderOptions.push(() => ({ connectedCallback: true }));

parentPort.postMessage(await renderGlobal(html, importSpecifiers.map(specifier =>
  import.meta.resolve(specifier))));
