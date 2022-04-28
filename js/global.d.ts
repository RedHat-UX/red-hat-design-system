declare function dismiss(): void;
declare var $html: HTMLHtmlElement | null;
declare class RhdsComponentStatus extends HTMLElement {
    static get observedAttributes(): string[];
    spreadSheetUrl: string;
    loading: boolean;
    error: boolean;
    _componentData: {
        columns: never[];
        components: never[];
    };
    _filteredComponentData: {
        columns: never[];
        components: never[];
    };
    _render(): void;
    attributeChangedCallback(attr: any, oldVal: any, newVal: any): void;
    _fetchData(): Promise<void>;
}
declare const alertName: "alertconsent";
declare const alertValue: "dismissed";
declare const buttonElement: Element | null;
