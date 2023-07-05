import { isElementInView } from '@patternfly/pfe-core/functions/isElementInView.js';
export class OverflowController {
    /** Overflow container */
    #container;
    /** Children that can overflow */
    #items;
    #scrollTimeoutDelay;
    #scrollTimeout;
    /** Default state */
    #hideOverflowButtons;
    get firstItem() {
        return this.#items.at(0);
    }
    get lastItem() {
        return this.#items.at(-1);
    }
    constructor(host, options) {
        this.host = host;
        this.options = options;
        /** Children that can overflow */
        this.#items = [];
        this.#scrollTimeoutDelay = 0;
        /** Default state */
        this.#hideOverflowButtons = false;
        this.showScrollButtons = false;
        this.overflowLeft = false;
        this.overflowRight = false;
        this.onScroll = () => {
            clearTimeout(this.#scrollTimeout);
            this.#scrollTimeout = setTimeout(() => this.#setOverflowState(), this.#scrollTimeoutDelay);
        };
        this.host.addController(this);
        if (options?.hideOverflowButtons) {
            this.#hideOverflowButtons = options?.hideOverflowButtons;
        }
    }
    #setOverflowState() {
        if (!this.firstItem || !this.lastItem || !this.#container) {
            return;
        }
        this.overflowLeft = !this.#hideOverflowButtons && !isElementInView(this.#container, this.firstItem);
        this.overflowRight = !this.#hideOverflowButtons && !isElementInView(this.#container, this.lastItem);
        let scrollButtonsWidth = 0;
        if (this.overflowLeft || this.overflowRight) {
            scrollButtonsWidth = (this.#container.parentElement?.querySelector('button')?.getBoundingClientRect().width || 0) * 2;
        }
        this.showScrollButtons = !this.#hideOverflowButtons &&
            this.#container.scrollWidth > (this.#container.clientWidth + scrollButtonsWidth);
        this.host.requestUpdate();
    }
    init(container, items) {
        this.#container = container;
        // convert HTMLCollection to HTMLElement[]
        this.#items = items;
    }
    scrollLeft() {
        if (!this.#container) {
            return;
        }
        const leftScroll = this.#container.scrollLeft - this.#container.clientWidth;
        this.#container.scroll({ left: leftScroll, behavior: 'smooth' });
        this.#setOverflowState();
    }
    scrollRight() {
        if (!this.#container) {
            return;
        }
        const leftScroll = this.#container.scrollLeft + this.#container.clientWidth;
        this.#container.scroll({ left: leftScroll, behavior: 'smooth' });
        this.#setOverflowState();
    }
    update() {
        this.#setOverflowState();
    }
    hostConnected() {
        this.onScroll();
        this.#setOverflowState();
    }
}
//# sourceMappingURL=overflow-controller.js.map