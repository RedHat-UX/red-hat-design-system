import '@patternfly/pfe-core/ssr-shims.js';

import { LitElementRenderer } from '@lit-labs/ssr/lib/lit-element-renderer.js';
import { renderGlobal } from '@patternfly/pfe-tools/ssr/global.js';

// Replace pfe-core's legacy flag with Lit's supported option for the same behavior.
globalThis.litSsrCallConnectedCallback = false;
LitElementRenderer.renderOptions.push(() => ({ connectedCallback: true }));

export default async function({ html, importSpecifiers }) {
  return renderGlobal(html, importSpecifiers.map(specifier =>
    import.meta.resolve(specifier)));
}
