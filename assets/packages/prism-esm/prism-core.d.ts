/**
 * Export the current environment so if users want to assign it to the global scope, they can.
 * @example
 *   import { Prism, environment } from "prism-esm"
 *   environment.Prism = Prism
 */
export const environment: {};
/**
 * @typedef {object} PrismOptions
 * @property {boolean} [manual=false]
 * @property {boolean} [disableWorkerMessageHandler]
 */
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
export class Prism {
    /**
     * @param {PrismOptions} options
     */
    constructor(options?: PrismOptions);
    manual: boolean;
    plugins: {};
    /**
     * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
     * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
     * own worker, you don't want it to do this.
     *
     * By setting this value to `true`, Prism will not add its own listeners to the worker.
     *
     * You obviously have to change this value before Prism executes. To do this, you can add an
     * empty Prism object into the global scope before loading the Prism script like this:
     *
     * ```js
     * window.Prism = window.Prism || {};
     * Prism.disableWorkerMessageHandler = true;
     * // Load Prism's script
     * ```
     *
     * @default false
     * @type {boolean}
     * @public
     */
    public disableWorkerMessageHandler: boolean;
    Token: typeof Token;
    util: Util;
    /**
     * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
     * @type {{[key: string]: any}}
     */
    languages: {
        [key: string]: any;
    };
    /**
     * @public
     */
    public hooks: {
        all: {};
        /**
         * Adds the given callback to the list of callbacks for the given hook.
         *
         * The callback will be invoked when the hook it is registered for is run.
         * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
         *
         * One callback function can be registered to multiple hooks and the same hook multiple times.
         *
         * @param {string} name The name of the hook.
         * @param {HookCallback} callback The callback function which is given environment variables.
         * @public
         */
        add: (name: string, callback: HookCallback) => void;
        /**
         * Runs a hook invoking all registered callbacks with the given environment variables.
         *
         * Callbacks will be invoked synchronously and in the order in which they were registered.
         *
         * @param {string} name The name of the hook.
         * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
         * @public
         */
        run: (name: string, env: {
            [x: string]: any;
        }) => void;
    };
    filename: string;
    /**
    * This is the most high-level function in Prism’s API.
    * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
    * each one of them.
    *
    * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
    *
    * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
    * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
    * @memberof Prism
    * @public
    */
    public highlightAll(async?: boolean, callback?: HighlightCallback): void;
    /**
        * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
        * {@link Prism.highlightElement} on each one of them.
        *
        * The following hooks will be run:
        * 1. `before-highlightall`
        * 2. `before-all-elements-highlight`
        * 3. All hooks of {@link Prism.highlightElement} for each element.
        *
        * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
        * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
        * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
        * @memberof Prism
        * @public
        */
    public highlightAllUnder(container: ParentNode, async?: boolean, callback?: HighlightCallback): void;
    /**
    * Highlights the code inside a single element.
    *
    * The following hooks will be run:
    * 1. `before-sanity-check`
    * 2. `before-highlight`
    * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
    * 4. `before-insert`
    * 5. `after-highlight`
    * 6. `complete`
    *
    * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
    * the element's language.
    *
    * @param {Element} element The element containing the code.
    * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
    * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
    * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
    * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
    *
    * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
    * asynchronous highlighting to work. You can build your own bundle on the
    * [Download page](https://prismjs.com/download.html).
    * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
    * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
    * @public
    */
    public highlightElement(element: Element, async?: boolean, callback?: HighlightCallback): void;
    /**
        * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
        * and the language definitions to use, and returns a string with the HTML produced.
        *
        * The following hooks will be run:
        * 1. `before-tokenize`
        * 2. `after-tokenize`
        * 3. `wrap`: On each {@link Token}.
        *
        * @param {string} text A string with the code to be highlighted.
        * @param {Grammar} grammar An object containing the tokens to use.
        *
        * Usually a language definition like `Prism.languages.markup`.
        * @param {string} language The name of the language definition passed to `grammar`.
        * @returns {string} The highlighted HTML.
        * @memberof Prism
        * @public
        * @example
        * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
        */
    public highlight(text: string, grammar: Grammar, language: string): string;
    /**
        * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
        * and the language definitions to use, and returns an array with the tokenized code.
        *
        * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
        *
        * This method could be useful in other contexts as well, as a very crude parser.
        *
        * @param {string} text A string with the code to be highlighted.
        * @param {Grammar} grammar An object containing the tokens to use.
        *
        * Usually a language definition like `Prism.languages.markup`.
        * @returns {TokenStream} An array of strings and tokens, a token stream.
        * @memberof Prism
        * @public
        * @example
        * let code = `var foo = 0;`;
        * let tokens = Prism.tokenize(code, Prism.languages.javascript);
        * tokens.forEach(token => {
        *     if (token instanceof Prism.Token && token.type === 'number') {
        *         console.log(`Found numeric literal: ${token.content}`);
        *     }
        * });
        */
    public tokenize(text: string, grammar: Grammar): TokenStream;
}
/**
* Creates a new token.
* @class
* @public
*/
export class Token {
    /**
    * Converts the given token or token stream to an HTML representation.
    *
    * The following hooks will be run:
    * 1. `wrap`: On each {@link Token}.
    *
    * @param {string | Token | TokenStream} o The token or token stream to be converted.
    * @param {string} language The name of current language.
    * @param {Prism} prism - The instance of prism to use for "wrap" hooks
    * @returns {string} The HTML representation of the token or token stream.
    * @memberof Token
    * @static
    */
    static stringify(o: string | Token | TokenStream, language: string, prism: Prism): string;
    /**
    * @param {string} type See {@link Token#type type}
    * @param {string | TokenStream} content See {@link Token#content content}
    * @param {string|string[]} [alias] The alias(es) of the token.
    * @param {string} [matchedStr=""] A copy of the full string this token was created from.
    */
    constructor(type: string, content: string | TokenStream, alias?: string | string[], matchedStr?: string);
    /**
        * The type of the token.
        *
        * This is usually the key of a pattern in a {@link Grammar}.
        *
        * @type {string}
        * @see GrammarToken
        * @public
        */
    public type: string;
    /**
        * The strings or tokens contained by this token.
        *
        * This will be a token stream if the pattern matched also defined an `inside` grammar.
        *
        * @type {string | TokenStream}
        * @public
        */
    public content: string | TokenStream;
    /**
        * The alias(es) of the token.
        *
        * @type {string|string[]}
        * @see GrammarToken
        * @public
        */
    public alias: string | string[];
    length: number;
}
export type RematchOptions = {
    cause: string;
    reach: number;
};
export type LinkedListNode<T> = {
    value: T;
    /**
     * The previous node.
     */
    prev: LinkedListNode<T> | null;
    /**
     * The next node.
     */
    next: LinkedListNode<T> | null;
};
export type PrismOptions = {
    manual?: boolean;
    disableWorkerMessageHandler?: boolean;
};
/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 */
export type GrammarToken = {
    /**
     * The regular expression of the token.
     */
    pattern: RegExp;
    /**
     * If `true`, then the first capturing group of `pattern` will (effectively)
     * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
     */
    lookbehind?: boolean;
    /**
     * Whether the token is greedy.
     */
    greedy?: boolean;
    /**
     * An optional alias or list of aliases.
     */
    alias?: string | string[];
    /**
     * The nested grammar of this token.
     *
     * The `inside` grammar will be used to tokenize the text value of each token of this kind.
     *
     * This can be used to make nested and even recursive language definitions.
     *
     * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
     * each another.
     */
    inside?: Grammar;
};
export type Grammar = {
    [x: string]: RegExp | GrammarToken | Array<RegExp | GrammarToken>;
};
/**
 * A function which will invoked after an element was successfully highlighted.
 */
export type HighlightCallback = (element: Element) => void;
export type HookCallback = (env: {
    [x: string]: any;
}) => void;
/**
 * Options for loading grammars in "./components/*.js"
 */
export type LoaderOptions = {
    force?: boolean;
};
export type TokenStreamItem = {
    type: string;
    content: string | Array<string | TokenStreamItem>;
};
export type TokenStream = Array<string | TokenStreamItem>;
/**
* A namespace for utility methods.
*
* All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
* change or disappear at any time.
*
*/
declare class Util {
    /**
     * @param {Prism} prism
     */
    constructor(prism: Prism);
    prism: Prism;
    /**
     * @param {Token | Token[] | string} tokens
     * @return {Token | Token[] | string}
     */
    encode: (tokens: Token | Token[] | string) => Token | Token[] | string;
    /**
        * Returns the name of the type of the given value.
        *
        * @param {any} o
        * @returns {string}
        * @example
        * type(null)      === 'Null'
        * type(undefined) === 'Undefined'
        * type(123)       === 'Number'
        * type('foo')     === 'String'
        * type(true)      === 'Boolean'
        * type([1, 2])    === 'Array'
        * type({})        === 'Object'
        * type(String)    === 'Function'
        * type(/abc+/)    === 'RegExp'
        */
    type(o: any): string;
    /**
    * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
    *
    * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
    *
    * @param {Element} element
    * @returns {string}
    */
    getLanguage(element: Element): string;
    /**
    * Sets the Prism `language-xxxx` class of the given element.
    *
    * @param {Element} element
    * @param {string} language
    * @returns {void}
    */
    setLanguage(element: Element, language: string): void;
    /**
        * Returns a unique number for the given object. Later calls will still return the same number.
        *
        * @param {Object} obj
        * @returns {number}
        */
    objId(obj: any): number;
    /**
    * Creates a deep clone of the given object.
    *
    * The main intended use of this function is to clone language definitions.
    *
    * @template T
    * @param {T} o
    * @returns {T}
    */
    clone<T>(o: T): T;
    /**
    * Returns whether a given class is active for `element`.
    *
    * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
    * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
    * given class is just the given class with a `no-` prefix.
    *
    * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
    * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
    * ancestors have the given class or the negated version of it, then the default activation will be returned.
    *
    * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
    * version of it, the class is considered active.
    *
    * @param {Element} element
    * @param {string} className
    * @param {boolean} [defaultActivation=false]
    * @returns {boolean}
    */
    isActive(element: Element, className: string, defaultActivation?: boolean): boolean;
    /**
        * Returns the script element that is currently executing.
        *
        * This does __not__ work for line script element.
        *
        * @returns {HTMLScriptElement | null}
        */
    currentScript(): HTMLScriptElement | null;
}
export {};
