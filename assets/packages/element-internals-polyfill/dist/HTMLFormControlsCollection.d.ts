export declare class HTMLFormControlsCollection implements HTMLFormControlsCollection {
    #private;
    constructor(elements: any);
    [index: number]: Element;
    get length(): number;
    [Symbol.iterator](): any;
    item(i: any): Element;
    namedItem(name: any): Element;
}
