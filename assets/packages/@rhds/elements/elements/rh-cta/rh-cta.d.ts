import { LitElement } from 'lit';
import type { IconNameFor, IconSetName } from '@rhds/icons';
/**
 * A call to action is styled text representing a link.
 * @summary     A call to action is styled text representing a link.
 *
 * @alias call-to-action
 *
 */
export declare class RhCta extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    /**
     * Indicates the importance of this call-to-action in the context of the page.
     * Will also influence how the call-to-action is styled.
     *   - **Primary**: Use for the primary or most important link. This variant is the highest in
     *       hierarchy and can also be used to play a video in a Modal or large container.
     *   - **Secondary**: Use for secondary or general links. This variant is lower in hierarchy than
     *       the Primary variant and can be used multiple times in the same container or layout.
     *   - **Brick**: Use to group links together. Only the Brick variant can stretch to fit a
     *       container or grid, otherwise the text label padding in other variants stays the same.
     *   - Default (no variant): Use for tertiary or the least important links. This variant is the
     *       lowest in hierarchy and can be used multiple times in the same container or layout.
     */
    variant?: 'primary' | 'secondary' | 'brick';
    /**
     * When set, overrides the default slot. Use *instead* of a slotted anchor tag
     */
    href?: string;
    /** when `href` is set, the link's `download` attribute */
    download?: string;
    /** when `href` is set, the link's `referrerpolicy` attribute */
    referrerpolicy?: string;
    /** when `href` is set, the link's `rel` attribute */
    rel?: string;
    /** when `href` is set, the link's `target` attribute */
    target?: string;
    /** Icon name */
    icon?: IconNameFor<IconSetName>;
    /** Icon set */
    iconSet: IconSetName;
    scheduleUpdate(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-cta': RhCta;
    }
}
