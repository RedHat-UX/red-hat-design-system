/**
 * Server-side rendering entry point for `<rh-icon>`.
 *
 * Importing this module installs the icon sets on `globalThis.RH_ICONS`
 * before the element module is evaluated, so that `render()` can resolve
 * icon content synchronously while server-rendering.
 *
 * Package consumers on Node resolve here through the `node` export
 * condition, without needing to import `./ssr.js` themselves.
 */
import './ssr.js';

export * from './rh-icon.js';
