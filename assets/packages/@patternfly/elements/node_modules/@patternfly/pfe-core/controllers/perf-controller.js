import { getRandomId } from '../functions/random.js';
export class PerfController {
    constructor(host) {
        this.host = host;
        this.hasMeasured = false;
        host.addController(this);
        // Set up the mark ID based on existing ID on component if it exists
        if (!host.id) {
            this.markId = getRandomId(host.localName);
        }
        else if (host.id.startsWith('pf-') && !host.id.startsWith(host.localName)) {
            this.markId = host.id.replace('pf', host.localName);
        }
        else {
            this.markId = `${host.localName}-${host.id}`;
        }
        performance.mark(`${this.markId}-defined`);
    }
    hostUpdate() {
        if (!this.hasMeasured) {
            this.measure();
        }
    }
    measure() {
        this.hasMeasured = true;
        performance.mark(`${this.markId}-rendered`);
        // Navigation start, i.e., the browser first sees that the user has navigated to the page
        performance.measure(`${this.markId}-from-navigation-to-first-render`, undefined, `${this.markId}-rendered`);
        // Render is run before connection unless delayRender is used
        performance.measure(`${this.markId}-from-defined-to-first-render`, `${this.markId}-defined`, `${this.markId}-rendered`);
        // Once we've measured time to render, we no longer need the controller,
        // so we allow it to be garbage-collected
        this.host.removeController(this);
    }
}
//# sourceMappingURL=perf-controller.js.map