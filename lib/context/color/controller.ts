import type { ColorTheme } from './consumer.js';
import type { ReactiveController, ReactiveElement } from 'lit';

import { StyleController } from '@patternfly/pfe-core/controllers/style-controller.js';

import {
  createContext,
  ContextEvent,
  type Context,
  type UnknownContext,
} from '../event.js';

import CONTEXT_BASE_STYLES from './context-color.css';

export interface ColorContextOptions<T extends ReactiveElement> {
  prefix?: string;
  propertyName?: keyof T;
}

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
export const contextEvents = new Map<ReactiveElement, ContextEvent<UnknownContext>>();

/**
 * Color context is derived from the `--context` css custom property,
 * which *must* be set by the `color-palette` attribute
 * This property is set (in most cases) in `color-context.scss`,
 * which is added to components via `StyleController`.
 *
 * In this way, we avoid the need to execute javascript in order to convert from a given
 * `ColorPalette` to a given `ColorTheme`, since those relationships are specified in CSS.
 */
export abstract class ColorContextController<
  T extends ReactiveElement
> implements ReactiveController {
    abstract update(next?: ColorTheme | null): void;

    /** The context object which describes the host's colour context */
    protected context: Context<ColorTheme|null>;

    /** The style controller which provides the necessary CSS. */
    protected styleController: StyleController;

    /** Prefix for colour context. Set this in Options to create a separate context */
    protected prefix = 'rh-';

    /** The last-known color context on the host */
    protected last: ColorTheme|null = null;

    hostUpdate?(): void

    constructor(protected host: T, options?: ColorContextOptions<T>) {
      this.prefix = options?.prefix ?? 'rh-';
      this.context = createContext(`${this.prefix}-color-context`);
      this.styleController = new StyleController(host, CONTEXT_BASE_STYLES);
      host.addController(this);
    }
}
