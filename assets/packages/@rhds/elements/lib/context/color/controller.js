import { StyleController } from '@patternfly/pfe-core/controllers/style-controller.js';
import { createContext, ContextEvent, } from '../event.js';
import { css } from "lit";
const CONTEXT_BASE_STYLES = css `:host(:is([color-palette^=dark])){--context:dark;--_context-text:var(--rh-color-text-primary-on-dark, #ffffff)}:host(:is([color-palette^=light],[color-palette=base])){--context:light;--_context-text:var(--rh-color-text-primary-on-light, #151515)}:host(:is([color-palette=lightest])){--_context-background-color:var(--rh-color-surface-lightest, #ffffff)}:host(:is([color-palette=lighter])){--_context-background-color:var(--rh-color-surface-lighter, #f2f2f2)}:host(:is([color-palette=light])){--_context-background-color:var(--rh-color-surface-light, #e0e0e0)}:host(:is([color-palette=base])){--_context-background-color:var(--rh-color-surface-lightest, #ffffff)}:host(:is([color-palette=dark])){--_context-background-color:var(--rh-color-surface-dark, #383838)}:host(:is([color-palette=darker])){--_context-background-color:var(--rh-color-surface-darker, #1f1f1f)}:host(:is([color-palette=darkest])){--_context-background-color:var(--rh-color-surface-darkest, #151515)}`;
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
*              <eager-consumer>
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
    constructor(host, options) {
        this.host = host;
        /** Prefix for colour context. Set this in Options to create a separate context */
        this.prefix = 'rh-';
        /** The last-known color context on the host */
        this.last = null;
        this.prefix = options?.prefix ?? 'rh-';
        this.context = createContext(`${this.prefix}-color-context`);
        this.styleController = new StyleController(host, CONTEXT_BASE_STYLES);
        host.addController(this);
    }
}
//# sourceMappingURL=controller.js.map