import type { LitElement } from 'lit';
import { ContextProvider } from '@lit/context';
export interface HeadingContext {
    /** Root Heading level. default 1 */
    level: number;
    /** Heading offset for children. default 1 */
    offset: number;
}
export declare const context: {
    __context__: HeadingContext;
};
export interface HeadingLevelContextOptions extends HeadingContext {
    /**
     * Attribute to read on the host which will determine root heading level.
     */
    attribute?: string;
}
/**
 * Determines which heading level immediately precedes the host element,
 * and provides templates for shadow headings.
 */
export declare class HeadingLevelContextProvider extends ContextProvider<typeof context, LitElement> {
    #private;
    host: LitElement;
    constructor(host: LitElement, options?: Partial<HeadingLevelContextOptions>);
    setValue(ctx: Partial<HeadingContext>): void;
    hostConnected(): void;
}
