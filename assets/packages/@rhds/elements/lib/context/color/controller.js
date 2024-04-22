import { StyleController } from '@patternfly/pfe-core/controllers/style-controller.js';
import { createContext } from '../event.js';
import COLOR_CONTEXT_BASE_STYLES from "./context-color.css.js";
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
 * Color context is derived from the `--context` css custom property,
 * which *must* be set by the `color-palette` attribute
 * This property is set (in most cases) in `color-context.scss`,
 * which is added to components via `StyleController`.
 *
 * In this way, we avoid the need to execute javascript in order to convert from a given
 * `ColorPalette` to a given `ColorTheme`, since those relationships are specified in CSS.
 */
export class ColorContextController {
    constructor(host) {
        this.host = host;
        /** The last-known color context on the host */
        this.last = null;
        this.styleController = new StyleController(host, COLOR_CONTEXT_BASE_STYLES);
        host.addController(this);
    }
}
/** The context object which acts as the key for providers and consumers */
ColorContextController.context = createContext(Symbol('rh-color-context'));
//# sourceMappingURL=controller.js.map