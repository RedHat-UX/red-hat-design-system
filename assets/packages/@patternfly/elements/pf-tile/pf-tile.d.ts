import { LitElement, type TemplateResult } from 'lit';
export type StackedSize = ('md' | 'lg');
/**
 * A **tile** component is a form of selection that can be used in place of a
 * radio button and is commonly used in forms. A tile appears visually similar to a
 * [selectable card](../card/). However, tiles are used specifically when the user is selecting
 * a static option, whereas a selectable card triggers an action or opens a quickstart
 * or sidebar to provide additional information.
 * @alias Tile
 * @attr {'boolean'} selected       - selected variant
 * @attr {'md'|'lg'|null} stacked   - stacked variant
 */
export declare class PfTile extends LitElement {
    static readonly styles: CSSStyleSheet[];
    selected: boolean;
    stacked?: StackedSize;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-tile': PfTile;
    }
}
