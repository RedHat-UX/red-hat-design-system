import { LitElement, type TemplateResult } from 'lit';
/**
 * Provides a nested, expandable group for organizing related
 * `<rh-jump-link>` elements within `<rh-jump-links>`. Put the link that
 * labels this group in `slot="parent"`. In vertical orientation, child
 * links indent beneath the parent; in horizontal orientation the
 * group is hidden. Sets `aria-current="location"` and
 * `role="listitem"` on itself for screen readers. Avoid deeply
 * nesting multiple levels.
 *
 * @summary Nested group of jump links with an expandable parent
 */
export declare class RhJumpLinksList extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /** Whether the layout of children is vertical or horizontal. */
    private orientation?;
    /** Whether any child link in this group is the active section. When true, the parent border highlights and child list expands (vertical only). Defaults to false. */
    active: boolean;
    protected activeChanged(): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-jump-links-list': RhJumpLinksList;
    }
}
