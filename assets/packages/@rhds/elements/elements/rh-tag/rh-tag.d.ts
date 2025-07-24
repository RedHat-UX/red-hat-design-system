import { LitElement } from 'lit';
import type { IconNameFor, IconSetName } from '@rhds/icons';
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 * A tag is a caption added to an element for better clarity and user convenience.
 *
 * @summary  Highlights an element to add clarity or draw attention
 *
 * @alias tag
 *
 * @fires close - when a removable label's close button is clicked
 *
 */
export declare class RhTag extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * The icon to display in the label.
     */
    icon?: IconNameFor<IconSetName>;
    /**
     * Icon set to display in the label
     */
    iconSet: IconSetName;
    /** The variant of the label. */
    variant?: 'filled' | 'outline' | 'desaturated';
    /** The variant of the label. */
    size?: 'compact';
    /** optional href for linked tag. */
    href?: string;
    /**
     * The color of the label.
     * Note: 'cyan' will also work, but is deprecated
     */
    color?: 'red' | 'red-orange' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'gray';
    render(): import("lit-html").TemplateResult<1>;
}
export type TagColor = RhTag['color'];
declare global {
    interface HTMLElementTagNameMap {
        'rh-tag': RhTag;
    }
}
