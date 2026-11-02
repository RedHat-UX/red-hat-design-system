import { register } from 'node:module';

import '@patternfly/pfe-core/ssr-shims.js';

import { LitElementRenderer } from '@lit-labs/ssr/lib/lit-element-renderer.js';
import { renderGlobal } from '@patternfly/pfe-tools/ssr/global.js';

// Element tests import `.js` specifiers. Compile emits those files; until then
// the loader reads the TypeScript source. Registration has to finish before
// the component import below.
const ssrLoaderReady = Promise.resolve(register(
  new URL('./ssr-source-loader.js', import.meta.url),
  import.meta.url,
));

// Replace pfe-core's legacy flag with Lit's supported option for the same behavior.
globalThis.litSsrCallConnectedCallback = false;
LitElementRenderer.renderOptions.push(() => ({ connectedCallback: true }));

export default async function({ html, importSpecifiers }) {
  await ssrLoaderReady;
  return renderGlobal(html, importSpecifiers.map(specifier =>
    import.meta.resolve(specifier)));
}
