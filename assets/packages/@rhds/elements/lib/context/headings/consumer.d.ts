import { context } from './provider.js';
import { type LitElement, type TemplateResult } from 'lit';
import { ContextConsumer } from '@lit/context';
export interface HeadingTemplateOptions {
    id?: string;
    hidden?: boolean;
    level?: number;
}
export interface HeadingLevelTemplateOptions {
    id?: string;
    hidden?: boolean;
}
/**
 * Determines which heading level immediately precedes the host element,
 * and provides templates for shadow headings.
 */
export declare class HeadingLevelContextConsumer extends ContextConsumer<typeof context, LitElement> {
    offset: number;
    constructor(host: LitElement);
    get level(): number;
    /**
     * Wraps any renderable content in a heading, based on heading level
     * @param content DOM content to wrap in a header
     * @param options id, hidden
     */
    wrap(content: unknown, options?: HeadingLevelTemplateOptions): TemplateResult;
}
