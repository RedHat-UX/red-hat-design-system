import { LitElement, type TemplateResult } from 'lit';
/**
 * Tab
 * @slot icon
 *       Can contain an `<svg>` or `<pf-icon>`
 * @slot
 *       Tab title text
 * @csspart button - button element
 * @csspart icon - span container for the icon
 * @csspart text - span container for the title text
 * @cssprop     {<length>} [--pf-c-tabs--m-box__item--m-current--first-child__link--before--BorderLeftWidth=1px]
 * @cssprop     {<length>} [--pf-c-tabs--m-box__item--m-current--last-child__link--before--BorderRightWidth=1px]
 * @cssprop     {<color>} [--pf-c-tabs__link--BackgroundColor=#f0f0f0]
 * @cssprop     {<color>} [--pf-c-tabs__link--disabled--BackgroundColor=#d2d2d2]
 * @cssprop     {<length>} [--pf-c-tabs__link--before--BorderTopWidth=1px]
 * @cssprop     {<length>} [--pf-c-tabs__link--before--BorderBottomWidth=1px]
 * @cssprop     {<length>} [--pf-c-tabs__link--before--BorderLeftWidth=0]
 * @cssprop     {<length>} [--pf-c-tabs__link--before--BorderRightWidth=1px]
 * @cssprop     {<length>} [--pf-c-tabs__link--disabled--before--BorderRightWidth=1px]
 * @cssprop     {<length>} [--pf-c-tabs__link--after--Top=auto]
 * @cssprop     {<length>} [--pf-c-tabs__link--after--Right=0]
 * @cssprop     {<length>} [--pf-c-tabs__link--after--Bottom=0]
 * @cssprop     {<length>} [--pf-c-tabs__link--before--Left=0]
 * @cssprop     {<length>} [--pf-c-tabs__link--PaddingTop=1rem]
 * @cssprop     {<length>} [--pf-c-tabs__link--PaddingBottom=1rem]
 * @cssprop     {<length>} [--pf-c-tabs__link--disabled--before--BorderBottomWidth=1px]
 * @cssprop     {<length>} [--pf-c-tabs__link--disabled--before--BorderLeftWidth=1px]
 * @cssprop     {<color>} [--pf-c-tabs__link--before--BorderTopColor=#d2d2d2]
 * @cssprop     {<color>} [--pf-c-tabs__link--before--BorderRightColor=#d2d2d2]
 * @cssprop     {<color>} [--pf-c-tabs__link--before--BorderBottomColor=#d2d2d2]
 * @cssprop     {<color>} [--pf-c-tabs__link--before--BorderLeftColor=#d2d2d2]
 * @cssprop     {<length>}  [--pf-c-tabs__link--FontSize=1rem]
 * @cssprop     {<color>}   [--pf-c-tabs__link--Color=#6a6e73]
 * @cssprop     {<length>}  [--pf-c-tabs__link--OutlineOffset=-0.375rem]
 * @cssprop     {<color>}  [--pf-c-tabs__link--after--BorderColor=#b8bbbe]
 * @cssprop     {<length>} [--pf-c-tabs__link--after--BorderTopWidth=0]
 * @cssprop     {<length>} [--pf-c-tabs__link--after--BorderRightWidth=0]
 * @cssprop     {<length>} [--pf-c-tabs__link--after--BorderBottomWidth=0]
 * @cssprop     {<length>} [--pf-c-tabs__link--after--BorderLeftWidth=0]
 * @cssprop     {<color>} [--pf-c-tabs__item--m-current__link--Color=#151515]
 * @cssprop     {<color>}   [--pf-c-tabs__item--m-current__link--after--BorderColor=#06c]
 * @cssprop     {<length>}  [--pf-c-tabs__item--m-current__link--after--BorderWidth=3px]
 * @cssprop     {<length>} [--pf-c-tabs__link--child--MarginRight=1rem]
 * @fires {TabExpandEvent} expand - when a tab expands
 */
export declare class PfTab extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    private icons;
    active: boolean;
    disabled: boolean;
    private ctx?;
    connectedCallback(): void;
    willUpdate(): void;
    render(): TemplateResult<1>;
    protected activeChanged(old: boolean, active: boolean): void;
    protected disabledChanged(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-tab': PfTab;
    }
}
