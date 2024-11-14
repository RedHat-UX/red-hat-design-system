var _HeadingLevelContextConsumer_instances, _HeadingLevelContextConsumer_dispose, _HeadingLevelContextConsumer_contextCallback;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { ContextRequestEvent } from '../event.js';
import { contextEvents, HeadingLevelController } from './controller.js';
/**
 * Determines which heading level immediately precedes the host element,
 * and provides templates for shadow headings.
 */
export class HeadingLevelContextConsumer extends HeadingLevelController {
    constructor() {
        super(...arguments);
        _HeadingLevelContextConsumer_instances.add(this);
        _HeadingLevelContextConsumer_dispose.set(this, void 0);
    }
    /** When a consumer connects, it requests context from the closest provider. */
    hostConnected() {
        const { context } = HeadingLevelController;
        const event = new ContextRequestEvent(context, e => __classPrivateFieldGet(this, _HeadingLevelContextConsumer_instances, "m", _HeadingLevelContextConsumer_contextCallback).call(this, e), true);
        this.host.dispatchEvent(event);
        contextEvents.set(this.host, event);
    }
    /** When a consumer disconnects, it's removed from the list of consumers. */
    hostDisconnected() {
        __classPrivateFieldGet(this, _HeadingLevelContextConsumer_dispose, "f")?.call(this);
        __classPrivateFieldSet(this, _HeadingLevelContextConsumer_dispose, undefined, "f");
        contextEvents.delete(this.host);
    }
    /** Sets the heading level on the host and any children that requested multiple updates */
    update(next) {
        this.level = next;
        this.host.requestUpdate();
    }
}
_HeadingLevelContextConsumer_dispose = new WeakMap(), _HeadingLevelContextConsumer_instances = new WeakSet(), _HeadingLevelContextConsumer_contextCallback = function _HeadingLevelContextConsumer_contextCallback(value, dispose) {
    // protect against changing providers
    if (dispose && dispose !== __classPrivateFieldGet(this, _HeadingLevelContextConsumer_dispose, "f")) {
        __classPrivateFieldGet(this, _HeadingLevelContextConsumer_dispose, "f")?.call(this);
        __classPrivateFieldSet(this, _HeadingLevelContextConsumer_dispose, dispose, "f");
    }
    this.update(value);
};
//# sourceMappingURL=consumer.js.map