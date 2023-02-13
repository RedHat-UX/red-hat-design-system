var _FloatingDOMController_instances, _FloatingDOMController_open, _FloatingDOMController_opening, _FloatingDOMController_cleanup, _FloatingDOMController_anchor, _FloatingDOMController_alignment, _FloatingDOMController_styles, _FloatingDOMController_placement, _FloatingDOMController_options, _FloatingDOMController_invoker_get, _FloatingDOMController_content_get, _FloatingDOMController_update;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { autoUpdate, computePosition, offset as offsetMiddleware, shift as shiftMiddleware, flip as flipMiddleware, } from '@floating-ui/dom';
/**
 * Controls floating DOM within a web component, e.g. tooltips and popovers
 */
export class FloatingDOMController {
    /** The crosswise alignment of the invoker on which to display the floating DOM */
    get alignment() {
        return __classPrivateFieldGet(this, _FloatingDOMController_alignment, "f") ?? 'center';
    }
    /** The side of the invoker on which to display the floating DOM */
    get anchor() {
        return __classPrivateFieldGet(this, _FloatingDOMController_anchor, "f") ?? '';
    }
    /**
     * When true, the floating DOM is visible
     */
    get open() {
        return __classPrivateFieldGet(this, _FloatingDOMController_open, "f");
    }
    /** The computed placement of the floating DOM */
    get placement() {
        return __classPrivateFieldGet(this, _FloatingDOMController_placement, "f") ?? 'top';
    }
    /**
     * Styles to apply to your element's container
     *
     * - `--_floating-content-translate`: translate to apply to floating content.
     */
    get styles() {
        return __classPrivateFieldGet(this, _FloatingDOMController_styles, "f") ?? {};
    }
    constructor(host, options) {
        var _a, _b, _c, _d;
        this.host = host;
        _FloatingDOMController_instances.add(this);
        _FloatingDOMController_open.set(this, false);
        _FloatingDOMController_opening.set(this, false);
        _FloatingDOMController_cleanup.set(this, void 0);
        _FloatingDOMController_anchor.set(this, void 0);
        _FloatingDOMController_alignment.set(this, void 0);
        _FloatingDOMController_styles.set(this, void 0);
        _FloatingDOMController_placement.set(this, void 0);
        _FloatingDOMController_options.set(this, void 0);
        host.addController(this);
        __classPrivateFieldSet(this, _FloatingDOMController_options, options, "f");
        (_a = __classPrivateFieldGet(this, _FloatingDOMController_options, "f")).invoker ?? (_a.invoker = host);
        (_b = __classPrivateFieldGet(this, _FloatingDOMController_options, "f")).arrow ?? (_b.arrow = false);
        (_c = __classPrivateFieldGet(this, _FloatingDOMController_options, "f")).flip ?? (_c.flip = true);
        (_d = __classPrivateFieldGet(this, _FloatingDOMController_options, "f")).shift ?? (_d.shift = true);
    }
    hostDisconnected() {
        __classPrivateFieldGet(this, _FloatingDOMController_cleanup, "f")?.call(this);
    }
    /** Show the floating DOM */
    async show({ offset, placement } = {}) {
        const invoker = __classPrivateFieldGet(this, _FloatingDOMController_instances, "a", _FloatingDOMController_invoker_get);
        const content = __classPrivateFieldGet(this, _FloatingDOMController_instances, "a", _FloatingDOMController_content_get);
        if (!invoker || !content) {
            return;
        }
        if (!__classPrivateFieldGet(this, _FloatingDOMController_opening, "f")) {
            __classPrivateFieldSet(this, _FloatingDOMController_opening, true, "f");
            const p = __classPrivateFieldGet(this, _FloatingDOMController_instances, "m", _FloatingDOMController_update).call(this, placement, offset);
            __classPrivateFieldSet(this, _FloatingDOMController_cleanup, __classPrivateFieldGet(this, _FloatingDOMController_cleanup, "f") ?? autoUpdate(invoker, content, () => __classPrivateFieldGet(this, _FloatingDOMController_instances, "m", _FloatingDOMController_update).call(this, placement, offset)), "f");
            await p;
            __classPrivateFieldSet(this, _FloatingDOMController_opening, false, "f");
        }
        __classPrivateFieldSet(this, _FloatingDOMController_open, true, "f");
        this.host.requestUpdate();
    }
    /** Hide the floating DOM */
    async hide() {
        await this.host.updateComplete;
        while (__classPrivateFieldGet(this, _FloatingDOMController_opening, "f") && !this.open) {
            await new Promise(requestAnimationFrame);
        }
        __classPrivateFieldSet(this, _FloatingDOMController_open, false, "f");
        __classPrivateFieldGet(this, _FloatingDOMController_cleanup, "f")?.call(this);
        this.host.requestUpdate();
        await this.host.updateComplete;
    }
}
_FloatingDOMController_open = new WeakMap(), _FloatingDOMController_opening = new WeakMap(), _FloatingDOMController_cleanup = new WeakMap(), _FloatingDOMController_anchor = new WeakMap(), _FloatingDOMController_alignment = new WeakMap(), _FloatingDOMController_styles = new WeakMap(), _FloatingDOMController_placement = new WeakMap(), _FloatingDOMController_options = new WeakMap(), _FloatingDOMController_instances = new WeakSet(), _FloatingDOMController_invoker_get = function _FloatingDOMController_invoker_get() {
    const { invoker } = __classPrivateFieldGet(this, _FloatingDOMController_options, "f");
    return typeof invoker === 'function' ? invoker() : invoker;
}, _FloatingDOMController_content_get = function _FloatingDOMController_content_get() {
    const { content } = __classPrivateFieldGet(this, _FloatingDOMController_options, "f");
    return typeof content === 'function' ? content() : content;
}, _FloatingDOMController_update = async function _FloatingDOMController_update(placement = 'top', offset) {
    var _a, _b;
    const { flip, padding, shift } = __classPrivateFieldGet(this, _FloatingDOMController_options, "f");
    const invoker = __classPrivateFieldGet(this, _FloatingDOMController_instances, "a", _FloatingDOMController_invoker_get);
    const content = __classPrivateFieldGet(this, _FloatingDOMController_instances, "a", _FloatingDOMController_content_get);
    if (!invoker || !content) {
        return;
    }
    const { x, y, placement: _placement } = await computePosition(invoker, content, {
        strategy: 'absolute',
        placement,
        middleware: [
            offsetMiddleware(offset),
            shift && shiftMiddleware({ padding }),
            flip && flipMiddleware({ padding }),
        ].filter(Boolean)
    });
    __classPrivateFieldSet(this, _FloatingDOMController_placement, _placement, "f");
    _a = this, _b = this, [({ set value(_c) { __classPrivateFieldSet(_a, _FloatingDOMController_anchor, _c, "f"); } }).value, ({ set value(_c) { __classPrivateFieldSet(_b, _FloatingDOMController_alignment, _c, "f"); } }).value] = (__classPrivateFieldGet(this, _FloatingDOMController_placement, "f").split('-') ?? []);
    __classPrivateFieldSet(this, _FloatingDOMController_styles, {
        '--_floating-content-translate': `${x}px ${y}px`,
    }, "f");
    this.host.requestUpdate();
};
//# sourceMappingURL=floating-dom-controller.js.map