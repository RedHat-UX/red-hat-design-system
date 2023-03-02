import { StyleController } from '@patternfly/pfe-core/controllers/style-controller.js';
import { createContext, ContextEvent, } from '../event.js';
import { css } from "lit";
const CONTEXT_BASE_STYLES = css `:host(:is([color-palette^=dark])){--context:dark;--rh-context-text:var(--rh-context-dark-color-text, #ffffff);--rh-context-text-muted:var(--rh-context-dark-color-text-muted, #d2d2d2);--rh-context-link:var(--rh-context-dark-color-text-link, #73bcf7);--rh-context-link-hover:var(--rh-context-dark-color-text-link-hover, #bee1f4);--rh-context-link-focus:var(--rh-context-dark-color-text-link-focus, #bee1f4);--rh-context-link-visited:var(--rh-context-dark-color-text-link-visited, #a18fff);--rh-context-link-visited-hover:var(--rh-context-dark-color-text-link-visited-hover, #cbc1ff)}:host(:is([color-palette^=light],[color-palette=base])){--context:light;--rh-context-text:var(--rh-context-light-color-text, #151515);--rh-context-text-muted:var(--rh-context-light-color-text-muted, #6a6e73);--rh-context-link:var(--rh-context-light-color-text-link, #0066cc);--rh-context-link-hover:var(--rh-context-light-color-text-link-hover, #004080);--rh-context-link-focus:var(--rh-context-light-color-text-link-focus, #004080);--rh-context-link-visited:var(--rh-context-light-color-text-link-visited, #6753ac);--rh-context-link-visited-hover:var(--rh-context-light-color-text-link-visited-hover, #1f0066)}:host(:is([color-palette=lightest])){--rh-context-background-color:var(--rh-color-surface-lightest, #ffffff)}:host(:is([color-palette=lighter])){--rh-context-background-color:var(--rh-color-surface-lighter, #f5f5f5)}:host(:is([color-palette=light])){--rh-context-background-color:var(--rh-color-surface-light, #f0f0f0)}:host(:is([color-palette=base])){--rh-context-background-color:var(--rh-color-surface-lightest, #ffffff)}:host(:is([color-palette=dark])){--rh-context-background-color:var(--rh-color-surface-dark, #3c3f42)}:host(:is([color-palette=darker])){--rh-context-background-color:var(--rh-color-surface-darker, #212427)}:host(:is([color-palette=darkest])){--rh-context-background-color:var(--rh-color-surface-darkest, #151515)}`;
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