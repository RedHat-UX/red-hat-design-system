import type { DesignToken } from '#11ty-plugins/tokensHelpers.js';
import { LitElement } from 'lit';
import '@rhds/elements/rh-table/rh-table.js';
import './uxdot-copy-button.js';
/**
 * Reads token data from @rhds/tokens and outputs a table for specified tokens
 */
export declare class UxdotSpacerTokensTable extends LitElement {
    static styles: CSSStyleSheet[];
    caption: string;
    colorPalette: string;
    tokens: string[];
    metaData: DesignToken[];
    render(): import("lit-html").TemplateResult<1>;
}
