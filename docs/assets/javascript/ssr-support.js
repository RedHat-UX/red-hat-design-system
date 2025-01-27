// dsd polyfill needs to happen before hydration attempts
// lit-element-hydrate-support needs to be included before lit is loaded
import '/assets/javascript/dsd-polyfill.js';
import '@lit-labs/ssr-client/lit-element-hydrate-support.js';
import 'element-internals-polyfill';
