import type { RhCodeBlock } from './rh-code-block.js';
/**
 * Highlight a string using prism.js
 * @param textContent source code
 * @param language a supported language
 */
export declare function highlight(textContent: string, language: RhCodeBlock['language']): Promise<import("lit-html").TemplateResult<1>>;
export { prismStyles, preRenderedLightDomStyles } from './prism.css.js';
