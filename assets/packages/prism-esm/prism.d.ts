/**
 * @typedef {import("./prism-core.js").GrammarToken} GrammarToken
 * @typedef {import("./prism-core.js").Grammar} Grammar
 * @typedef {import("./prism-core.js").TokenStream} TokenStream
 * @typedef {import("./prism-core.js").HookCallback} HookCallback
 * @typedef {import("./prism-core.js").PrismOptions} PrismOptions
 * @typedef {import("./prism-core.js").HighlightCallback} HighlightCallback
 * @typedef {import("./prism-core.js").LoaderOptions} LoaderOptions
 */
/**
 * The main entrypoint class
 */
export class Prism extends OGPrism {
}
export type GrammarToken = import("./prism-core.js").GrammarToken;
export type Grammar = import("./prism-core.js").Grammar;
export type TokenStream = import("./prism-core.js").TokenStream;
export type HookCallback = import("./prism-core.js").HookCallback;
export type PrismOptions = import("./prism-core.js").PrismOptions;
export type HighlightCallback = import("./prism-core.js").HighlightCallback;
export type LoaderOptions = import("./prism-core.js").LoaderOptions;
import { Prism as OGPrism } from "./prism-core.js";
export { environment, Token } from "./prism-core.js";
