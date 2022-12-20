var _RhCta_instances, _RhCta_initializing, _RhCta_dir, _RhCta_logger, _RhCta_isDefault_get;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import { DirController } from '../../lib/DirController.js';
import { colorContextConsumer, colorContextProvider } from '../../lib/context/color.js';
import { classMap } from 'lit/directives/class-map.js';
import '@patternfly/pfe-icon';
import style from "./rh-cta.css.js";
const supportedTags = ['a', 'button']; // add input later
function isSupportedContent(el) {
    return !!el && supportedTags.includes(el.localName);
}
const CONTENT = new WeakMap();
function contentInitialized(el) {
    return !!el && !!CONTENT.get(el);
}
function isButton(element) {
    return element.tagName.toLowerCase() === 'button';
}
/**
 * Call to action stands out from regular hypertext links, and is used for linking users to webpages.
 *
 * @summary Directs a user to other pages or displays extra content
 *
 * @slot - We expect an anchor tag, `<a>` with an `href`, to be the first child inside `rh-cta` element. Less preferred but allowed for specific use-cases include: `<button>` (note however that the `button` tag is not supported for the default CTA styles).
 *
 * @csspart container - container element for slotted CTA
 *
 */
let RhCta = class RhCta extends LitElement {
    constructor() {
        super(...arguments);
        _RhCta_instances.add(this);
        /**
         * Sets color theme based on parent context
         */
        this.on = 'light';
        /** The slotted `<a>` or `<button>` element */
        this.cta = null;
        /** true while the initializer method is running - to prevent double-execution */
        _RhCta_initializing.set(this, false);
        /** Is the element in an RTL context? */
        _RhCta_dir.set(this, new DirController(this));
        _RhCta_logger.set(this, new Logger(this));
    }
    render() {
        const rtl = __classPrivateFieldGet(this, _RhCta_dir, "f").dir === 'rtl';
        const { on } = this;
        return html `
      <span id="container" part="container" class="${classMap({ rtl, [on]: !!on })}">
        <slot @slotchange=${this.firstUpdated}></slot>${!__classPrivateFieldGet(this, _RhCta_instances, "a", _RhCta_isDefault_get) && !this.icon ? '' : this.icon ? html `
        <pfe-icon icon=${this.icon} size="sm"></pfe-icon>` : html `&nbsp;<svg xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 31.56 31.56" focusable="false" width="1em">
          <path d="M15.78 0l-3.1 3.1 10.5 10.49H0v4.38h23.18l-10.5 10.49 3.1 3.1 15.78-15.78L15.78 0z" />
        </svg>`}
      </span>
    `;
    }
    firstUpdated() {
        let [cta] = this.shadowRoot?.querySelector('slot')?.assignedElements() ?? [];
        while (cta instanceof HTMLSlotElement) {
            [cta] = cta.assignedElements();
        }
        if (contentInitialized(cta) || __classPrivateFieldGet(this, _RhCta_initializing, "f")) {
            return;
        }
        __classPrivateFieldSet(this, _RhCta_initializing, true, "f");
        // If the first child does not exist or that child is not a supported tag
        if (!isSupportedContent(cta)) {
            return __classPrivateFieldGet(this, _RhCta_logger, "f").warn(`The first child in the light DOM must be a supported call-to-action tag (<a>, <button>)`);
        }
        else if (isButton(cta) && !this.variant) {
            return __classPrivateFieldGet(this, _RhCta_logger, "f").warn(`Button tag is not supported semantically by the default link styles`);
        }
        else {
            // Capture the first child as the CTA element
            this.cta = cta;
            CONTENT.set(this.cta, true);
            __classPrivateFieldSet(this, _RhCta_initializing, false, "f");
        }
    }
};
_RhCta_initializing = new WeakMap(), _RhCta_dir = new WeakMap(), _RhCta_logger = new WeakMap(), _RhCta_instances = new WeakSet(), _RhCta_isDefault_get = function _RhCta_isDefault_get() {
    return !this.hasAttribute('variant');
};
RhCta.version = '{{version}}';
RhCta.styles = [style];
__decorate([
    property({ reflect: true })
], RhCta.prototype, "variant", void 0);
__decorate([
    property({ reflect: true })
], RhCta.prototype, "icon", void 0);
__decorate([
    colorContextProvider(),
    property({ reflect: true, attribute: 'color-palette' })
], RhCta.prototype, "colorPalette", void 0);
__decorate([
    colorContextConsumer()
], RhCta.prototype, "on", void 0);
RhCta = __decorate([
    customElement('rh-cta')
], RhCta);
export { RhCta };
//# sourceMappingURL=rh-cta.js.map