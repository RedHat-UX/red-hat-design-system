import { LitElement } from 'lit';
import { type ColorPalette } from '../../lib/context/color/provider.js';
import '@patternfly/elements/pf-icon/pf-icon.js';
/**
 * Subnav provides a tabs-like navigation experience
 * @slot - Place navigation links here, expects collection of `<a>`
 *
 * @csspart container - container, <div> element
 * @csspart links     - <slot> element
 */
export declare class RhSubnav extends LitElement {
    #private;
    static readonly styles: import("lit").CSSResult[];
    /** Icon name to use for the scroll left button */
    protected static readonly scrollIconLeft: string;
    /** Icon name to use for the scroll right button */
    protected static readonly scrollIconRight: string;
    /** Icon set to use for the scroll buttons */
    protected static readonly scrollIconSet: string;
    private static instances;
    /**
     * Sets color theme based on parent context
     */
    private on?;
    /**
     * Sets color palette, which affects the element's styles as well as descendants' color theme.
     * Overrides parent color context.
     * Your theme will influence these colors so check there first if you are seeing inconsistencies.
     * See [CSS Custom Properties](#css-custom-properties) for default values
     */
    colorPalette?: ColorPalette;
    private links;
    private linkList;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-subnav': RhSubnav;
    }
}
