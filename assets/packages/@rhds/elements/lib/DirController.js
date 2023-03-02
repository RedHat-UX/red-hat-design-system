var _DirController_instances, _DirController_getDirContext;
import { __classPrivateFieldGet } from "tslib";
/**
 * Discovers and reports the host element's closest `dir`,
 * even across shadow roots. Does not observe DOM changes.
 * @see https://caniuse.com/css-dir-pseudo
 */
export class DirController {
    constructor(host) {
        this.host = host;
        _DirController_instances.add(this);
        this.dir = __classPrivateFieldGet(this, _DirController_instances, "m", _DirController_getDirContext).call(this);
    }
    hostConnected() {
        this.dir = __classPrivateFieldGet(this, _DirController_instances, "m", _DirController_getDirContext).call(this);
    }
}
_DirController_instances = new WeakSet(), _DirController_getDirContext = function _DirController_getDirContext() {
    let host = this.host;
    while (host) {
        const dirContext = host.closest('[dir]');
        if (dirContext?.hasAttribute('dir')) {
            return dirContext?.getAttribute('dir') || 'ltr';
        }
        else {
            ({ host } = host?.getRootNode() ?? {});
        }
    }
    return 'ltr';
};
//# sourceMappingURL=DirController.js.map