import { type ReactiveController, type ReactiveControllerHost } from 'lit';
interface InternalsControllerOptions extends Partial<ARIAMixin> {
    getHTMLElement?(): HTMLElement;
}
export declare class InternalsController implements ReactiveController, ARIAMixin {
    #private;
    host: ReactiveControllerHost;
    private options?;
    private static instances;
    readonly form: ElementInternals['form'];
    readonly shadowRoot: ElementInternals['shadowRoot'];
    readonly states: unknown;
    readonly willValidate: ElementInternals['willValidate'];
    readonly validationMessage: ElementInternals['validationMessage'];
    static getLabels(host: ReactiveControllerHost): Element[];
    static isSafari: boolean;
    static of(host: ReactiveControllerHost, options?: InternalsControllerOptions): InternalsController;
    role: string | null;
    ariaActivedescendant: string | null;
    ariaAtomic: string | null;
    ariaAutoComplete: string | null;
    ariaBusy: string | null;
    ariaBrailleLabel: string | null;
    ariaBrailleRoleDescription: string | null;
    ariaChecked: string | null;
    ariaColCount: string | null;
    ariaColIndex: string | null;
    ariaColIndexText: string | null;
    ariaColSpan: string | null;
    ariaCurrent: string | null;
    ariaDescription: string | null;
    ariaDisabled: string | null;
    ariaExpanded: string | null;
    ariaHasPopup: string | null;
    ariaHidden: string | null;
    ariaInvalid: string | null;
    ariaKeyShortcuts: string | null;
    ariaLabel: string | null;
    ariaLevel: string | null;
    ariaLive: string | null;
    ariaModal: string | null;
    ariaMultiLine: string | null;
    ariaMultiSelectable: string | null;
    ariaOrientation: string | null;
    ariaPlaceholder: string | null;
    ariaPosInSet: string | null;
    ariaPressed: string | null;
    ariaReadOnly: string | null;
    ariaRelevant: string | null;
    ariaRequired: string | null;
    ariaRoleDescription: string | null;
    ariaRowCount: string | null;
    ariaRowIndex: string | null;
    ariaRowIndexText: string | null;
    ariaRowSpan: string | null;
    ariaSelected: string | null;
    ariaSetSize: string | null;
    ariaSort: string | null;
    ariaValueMax: string | null;
    ariaValueMin: string | null;
    ariaValueNow: string | null;
    ariaValueText: string | null;
    /** WARNING: be careful of cross-root ARIA browser support */
    ariaActiveDescendantElement: Element | null;
    /** WARNING: be careful of cross-root ARIA browser support */
    ariaControlsElements: Element[] | null;
    /** WARNING: be careful of cross-root ARIA browser support */
    ariaDescribedByElements: Element[] | null;
    /** WARNING: be careful of cross-root ARIA browser support */
    ariaDetailsElements: Element[] | null;
    /** WARNING: be careful of cross-root ARIA browser support */
    ariaErrorMessageElements: Element[] | null;
    /** WARNING: be careful of cross-root ARIA browser support */
    ariaFlowToElements: Element[] | null;
    /** WARNING: be careful of cross-root ARIA browser support */
    ariaLabelledByElements: Element[] | null;
    /** WARNING: be careful of cross-root ARIA browser support */
    ariaOwnsElements: Element[] | null;
    /** True when the control is disabled via it's containing fieldset element */
    get formDisabled(): boolean;
    get labels(): NodeList;
    get validity(): ValidityState;
    /** A best-attempt based on observed behaviour in FireFox 115 on fedora 38 */
    get computedLabelText(): string;
    private get element();
    private internals;
    private _formDisabled;
    private constructor();
    /**
     * Typescript (with experimental decorators) will compile the class
     * such that the order of operations is:
     * 1. set up constructor parameter fields
     * 2. run decorated field setters with initializers as the value
     * 3. run the rest of the constructor
     * Because of that, `this.internals` may not be available in the decorator setter
     * so we cheat here with nullish coalescing assignment operator `??=`;
     */
    private attachOrRetrieveInternals;
    private initializeOptions;
    hostConnected?(): void;
    setFormValue(...args: Parameters<ElementInternals['setFormValue']>): void;
    setValidity(...args: Parameters<ElementInternals['setValidity']>): void;
    checkValidity(...args: Parameters<ElementInternals['checkValidity']>): boolean;
    reportValidity(...args: Parameters<ElementInternals['reportValidity']>): boolean;
    submit(): void;
    reset(): void;
}
/** @see https://w3c.github.io/aria/#ref-for-dom-ariamixin-ariaactivedescendantelement-1 */
declare global {
    interface ARIAMixin {
        ariaActiveDescendantElement: Element | null;
        ariaControlsElements: readonly Element[] | null;
        ariaDescribedByElements: readonly Element[] | null;
        ariaDetailsElements: readonly Element[] | null;
        ariaErrorMessageElements: readonly Element[] | null;
        ariaFlowToElements: readonly Element[] | null;
        ariaLabelledByElements: readonly Element[] | null;
        ariaOwnsElements: readonly Element[] | null;
    }
}
export {};
