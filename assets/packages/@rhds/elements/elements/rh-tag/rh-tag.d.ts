import { LitElement } from 'lit';
import type { TemplateResult } from 'lit';
import type { IconNameFor, IconSetName } from '@rhds/icons';
import '@rhds/elements/rh-icon/rh-icon.js';
/**
 * A tag provides a short, pill-shaped label for categorizing content or
 * indicating status. It should include an icon when color alone conveys
 * meaning. Linked tags must have descriptive text for screen readers, and
 * should provide an `aria-label` on group containers. When disabled, Enter
 * keyboard navigation is suppressed on linked tags.
 *
 * @summary Categorizes content, adds context, or indicates status
 */
export declare class RhTag extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * The name of the icon to display in the tag.
     * When set, an `rh-icon` element renders in the icon slot as a decorative visual.
     */
    icon?: IconNameFor<IconSetName>;
    /**
     * The icon set from which to select the icon. Defaults to `ui`.
     */
    iconSet: IconSetName;
    /**
     * The visual style variant of the tag.
     * - `filled`: colored background with a subtle border (default)
     * - `outline`: transparent background with a colored border
     * - `desaturated`: transparent background with a neutral border and text color
     */
    variant?: 'filled' | 'outline' | 'desaturated';
    /**
     * The size of the tag. When set to `compact`, the tag uses a smaller font
     * size and reduced padding.
     */
    size?: 'compact';
    /**
     * Optional URL that makes the tag a navigable link. When set, the tag
     * renders an anchor element around its text content.
     */
    href?: string;
    /**
     * Whether an interactive (linked) tag is disabled. When true, the tag
     * visually appears inactive and keyboard navigation is suppressed.
     */
    disabled: boolean;
    /**
     * The color palette of the tag. Nine colors are available. Choose colors
     * that correspond to the tag's semantic meaning (e.g. red for errors,
     * green for success). Defaults to gray.
     *
     * Note: `cyan` is accepted but deprecated; use `teal` instead.
     */
    color?: 'red' | 'red-orange' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'purple' | 'gray';
    render(): TemplateResult<1>;
}
export type TagColor = RhTag['color'];
declare global {
    interface HTMLElementTagNameMap {
        'rh-tag': RhTag;
    }
}
