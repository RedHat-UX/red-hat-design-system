import type { ColorTheme } from './consumer.js';
import type { CSSResult, ReactiveController } from 'lit';

import { ReactiveElement } from 'lit';

import { StyleController } from '@patternfly/pfe-core/controllers/style-controller.js';

import { createContext, type ContextRequestEvent, type UnknownContext } from '../event.js';

export interface ColorContextOptions<T extends ReactiveElement> {
  prefix?: string;
  propertyName?: keyof T;
}

type ColorContext = typeof ColorContextController.context;

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
export const contextEvents = new Map<
  ReactiveElement,
  ContextRequestEvent<ColorContext>
>();

export const isColorContextEvent =
  (event: ContextRequestEvent<UnknownContext>): event is ContextRequestEvent<ColorContext> =>
    event.context === ColorContextController.context;

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
  /** The context object which acts as the key for providers and consumers */
  public static readonly context = createContext<ColorTheme | null>(Symbol('rh-color-context'));

  /** The last-known color context on the host */
  protected last: ColorTheme | null = null;

  hostUpdate?(): void;

  /** callback which updates the context value on consumers */
  abstract update(next?: ColorTheme | null): void;

  constructor(protected host: T, styles: CSSStyleSheet | CSSResult) {
    new StyleController(host, styles);
    if (this.host instanceof ReactiveElement) {
      const Class = (this.host.constructor as typeof ReactiveElement);
      Class.styles = [Class.styles].flat().filter(x => !!x).concat([styles]);
    }
    host.addController(this);
  }
}
