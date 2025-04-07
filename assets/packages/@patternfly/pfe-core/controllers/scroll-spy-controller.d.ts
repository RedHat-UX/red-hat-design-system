import { type ReactiveController, type ReactiveControllerHost } from 'lit';
export interface ScrollSpyControllerOptions extends IntersectionObserverInit {
    /**
     * Tag names of legal link children.
     * Legal children must have an `href` property/attribute pair, like `<a>`.
     */
    tagNames: string[];
    /**
     * Attribute to set on the active link element.
     * @default 'active'
     */
    activeAttribute?: string;
    /**
     * The root node to query content for
     * @default the host's root node
     */
    rootNode?: Node;
    /**
     * function to call on link children to get their URL hash (i.e. id to scroll to)
     * @default el => el.getAttribute('href');
     */
    getHash?: (el: Element) => string | null;
    /**
     * Optional callback for when an intersection occurs
     */
    onIntersection?(): void;
}
export declare class ScrollSpyController implements ReactiveController {
    #private;
    private host;
    get root(): Element | Document | null | undefined;
    set root(v: Element | Document | null | undefined);
    get rootMargin(): string | undefined;
    set rootMargin(v: string | undefined);
    get threshold(): number | number[];
    set threshold(v: number | number[]);
    constructor(host: ReactiveControllerHost & HTMLElement, options: ScrollSpyControllerOptions);
    hostConnected(): void;
    hostDisconnected(): void;
    /**
     * Explicitly set the active item
     * @param link usually an `<a>`
     */
    setActive(link: EventTarget | null): Promise<void>;
}
