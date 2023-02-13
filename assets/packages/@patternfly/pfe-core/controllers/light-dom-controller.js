import { Logger } from './logger.js';
export class LightDOMController {
    constructor(host, initializer, options) {
        this.host = host;
        this.options = options;
        this.initializer = initializer.bind(host);
        this.mo = new MutationObserver(this.initializer);
        this.logger = new Logger(this.host);
        host.addController(this);
    }
    hostConnected() {
        if (this.hasLightDOM()) {
            this.initializer();
        }
        else if (this.options?.emptyWarning) {
            this.logger.warn(this.options?.emptyWarning);
        }
        this.initObserver();
    }
    hostDisconnected() {
        this.mo.disconnect();
    }
    initObserver() {
        if (this.options?.observe ?? true) {
            // Use the provided options, or their defaults
            this.mo.observe(this.host, typeof this.options?.observe !== 'object' ? { childList: true }
                : this.options?.observe);
        }
    }
    /**
     * Returns a boolean statement of whether or not this component contains any light DOM.
     */
    hasLightDOM() {
        return !!(this.host.children.length > 0 ||
            (this.host.textContent ?? '').trim().length > 0);
    }
}
//# sourceMappingURL=light-dom-controller.js.map