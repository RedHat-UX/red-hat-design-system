declare class ObserverShim {
    observe(): void;
    disconnect(): void;
}
declare class MiniHTMLElement {
    tagName: string;
    innerHTML: string;
    constructor(tagName: string);
}
declare class MiniHTMLTemplateElement extends MiniHTMLElement {
    content: {
        cloneNode: () => string;
    };
}
declare class MiniDocument {
    createElement(tagName: string): MiniHTMLElement;
}
