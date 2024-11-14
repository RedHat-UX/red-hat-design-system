var _DirController_instances, _DirController_getDirContext;
import { __classPrivateFieldGet } from "tslib";
/**
 * Discovers and reports the host element's closest `dir`,
 * even across shadow roots. Does not observe DOM changes.
 * @see https://caniuse.com/css-dir-pseudo
 */
export class DirController {
    constructor(host) {
        _DirController_instances.add(this);
        this.host = host;
        /** The element's current `dir` */
        this.dir = 'auto';
        this.update();
    }
    hostConnected() {
        this.update();
    }
    async update() {
        const initial = this.dir;
        await this.host.updateComplete;
        this.dir = __classPrivateFieldGet(this, _DirController_instances, "m", _DirController_getDirContext).call(this);
        if (this.dir !== initial) {
            this.host.requestUpdate();
        }
    }
}
_DirController_instances = new WeakSet(), _DirController_getDirContext = function _DirController_getDirContext() {
    let host = this.host;
    while (host) {
        const dirContext = host.closest('[dir]');
        if (dirContext) {
            return dirContext.getAttribute('dir') ?? 'ltr';
        }
        else {
            ({ host } = host?.getRootNode() ?? {});
        }
    }
    return 'ltr';
};
//# sourceMappingURL=DirController.js.map