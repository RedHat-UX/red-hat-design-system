import { type ReactiveController, type ReactiveControllerHost } from 'lit';
export interface TabsAriaControllerOptions<Tab, Panel> {
    /** Add an `isTab` predicate to ensure this tabs instance' state does not leak into parent tabs' state */
    isTab: (node: unknown) => node is Tab;
    isActiveTab: (tab: Tab) => boolean;
    /** Add an `isPanel` predicate to ensure this tabs instance' state does not leak into parent tabs' state */
    isPanel: (node: unknown) => node is Panel;
    getHTMLElement?: () => HTMLElement;
}
export declare class TabsAriaController<Tab extends HTMLElement = HTMLElement, Panel extends HTMLElement = HTMLElement> implements ReactiveController {
    #private;
    get tabs(): Tab[];
    get activeTab(): Tab | undefined;
    /**
     * @param host controller host
     * @param options controller options
     * @example Usage in PfTab
     *          ```ts
     *          new TabsController(this, {
     *             isTab: (x): x is PfTab => x instanceof PfTab,
     *             isPanel: (x): x is PfTabPanel => x instanceof PfTabPanel
     *          });
     *          ```
     */
    constructor(host: ReactiveControllerHost, options: TabsAriaControllerOptions<Tab, Panel>);
    hostConnected(): void;
    hostUpdated(): void;
    hostDisconnected(): void;
    panelFor(tab: Tab): Panel | undefined;
    tabFor(panel: Panel): Tab | undefined;
}
