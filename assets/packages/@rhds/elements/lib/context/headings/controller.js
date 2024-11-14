var _HeadingLevelController_level;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createContext, } from '../event.js';
/**
 * Maps from consumer host elements to already-fired request events
 * We hold these in memory in order to re-fire the events every time a new provider connects.
 * This is a hedge against cases where an early-upgrading provider claims an early-upgrading
 * consumer before a late-upgrading provider has a chance to register as the rightful provider
 * @example Monkey-in-the-middle error
 *          In this example, we must re-fire the event from eager-consumer when late-provider
 *          upgrades, so as to ensure that late-provider claims it for itself
 *          ```html
 *          <early-provider>
 *            <late-provider>
 *              <eager-consumer></eager-consumer>
 *            </late-provider>
 *          </early-provider>
 *          ```
 */
export const contextEvents = new Map();
/**
 * Determines which heading level immediately precedes the host element,
 * and provides templates for shadow headings.
 */
export class HeadingLevelController {
    get level() {
        return __classPrivateFieldGet(this, _HeadingLevelController_level, "f");
    }
    set level(level) {
        const val = typeof level === 'string' ? parseInt(level) : level;
        if (typeof val === 'number' && !Number.isNaN(val)) {
            __classPrivateFieldSet(this, _HeadingLevelController_level, val, "f");
        }
    }
    constructor(host, 
    /** Heading level preceding component document, as in 1 for <h1>, 2 for <h2> etc. */
    options) {
        this.host = host;
        this.options = options;
        _HeadingLevelController_level.set(this, 1);
        host.addController(this);
        this.offset = options?.offset ?? 1;
        if (options?.parent) {
            this.level = options.parent.level;
        }
        else if (options?.level) {
            this.level = options.level;
        }
    }
    /**
     * Wraps any renderable content in a heading, based on heading level
     */
    wrap(content, options) {
        const level = Math.max(1, this.level + this.offset);
        const id = options?.id;
        const hidden = options?.hidden ?? false;
        switch (level) {
            case 1: return html `<h1 ?hidden=${hidden} id="${ifDefined(id)}">${content}</h1>`;
            case 2: return html `<h2 ?hidden=${hidden} id="${ifDefined(id)}">${content}</h2>`;
            case 3: return html `<h3 ?hidden=${hidden} id="${ifDefined(id)}">${content}</h3>`;
            case 4: return html `<h4 ?hidden=${hidden} id="${ifDefined(id)}">${content}</h4>`;
            case 5: return html `<h5 ?hidden=${hidden} id="${ifDefined(id)}">${content}</h5>`;
            default: return html `<h6 ?hidden=${hidden} id="${ifDefined(id)}">${content}</h6>`;
        }
    }
}
_HeadingLevelController_level = new WeakMap();
HeadingLevelController.context = createContext(Symbol('rh-heading-level-context'));
//# sourceMappingURL=controller.js.map