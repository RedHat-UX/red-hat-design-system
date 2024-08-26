import { LitElement, type TemplateResult } from 'lit';
/**
 * The **panel** component is a container that supports flexible content layouts. It can
 * be used to house other components such as fields, forms, videos, buttons, and more.
 * The panel should not be confused with the [drawer](https://www.patternfly.org/v4/components/drawer/design-guidelines/)
 * component, which allows you to surface information via a collapsable container.
 * @slot header - Place header content here
 * @slot - Place main content here
 * @slot footer - Place footer content here
 * @cssprop [--pf-c-panel--Width=auto]
 * @cssprop [--pf-c-panel--MinWidth=auto]
 * @cssprop [--pf-c-panel--MaxWidth=none]
 * @cssprop [--pf-c-panel--ZIndex=auto]
 * @cssprop [--pf-c-panel--BackgroundColor=var(--pf-global--BackgroundColor--100, #fff)]
 * @cssprop [--pf-c-panel--BoxShadow=none]
 * @cssprop [--pf-c-panel--before--BorderWidth=0]
 * @cssprop [--pf-c-panel--before--BorderColor=var(--pf-global--BorderColor--100, #d2d2d2)]
 * @cssprop [--pf-c-panel--m-bordered--before--BorderWidth=var(--pf-global--BorderWidth--sm, 1px)]
 * @cssprop [--pf-c-panel--m-raised--BoxShadow=var(--pf-global--BoxShadow--md, 0 0.25rem 0.5rem 0rem rgba(3, 3, 3, 0.12), 0 0 0.25rem 0 rgba(3, 3, 3, 0.06))]
 * @cssprop [--pf-c-panel--m-raised--ZIndex=var(--pf-global--ZIndex--sm, 200)]
 * @cssprop [--pf-c-panel__header--PaddingTop=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-panel__header--PaddingRight=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-panel__header--PaddingBottom=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-panel__header--PaddingLeft=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-panel__main--MaxHeight=none]
 * @cssprop [--pf-c-panel__main--Overflow=visible]
 * @cssprop [--pf-c-panel__main-body--PaddingTop=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-panel__main-body--PaddingRight=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-panel__main-body--PaddingBottom=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-panel__main-body--PaddingLeft=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-panel__footer--PaddingTop=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-panel__footer--PaddingRight=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-panel__footer--PaddingBottom=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-panel__footer--PaddingLeft=var(--pf-global--spacer--md, 1rem)]
 * @cssprop [--pf-c-panel__footer--BoxShadow=none]
 * @cssprop [--pf-c-panel--m-scrollable__main--MaxHeight=18.75rem]
 * @cssprop [--pf-c-panel--m-scrollable__main--Overflow=auto]
 * @cssprop [--pf-c-panel--m-scrollable__footer--BoxShadow=0 -0.3125rem 0.25rem -0.25rem rgba(3, 3, 3, 0.16)]
 */
export declare class PfPanel extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    scrollable: boolean;
    variant?: 'raised' | 'bordered';
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pf-panel': PfPanel;
    }
}
