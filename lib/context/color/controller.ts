import type { ColorTheme } from './consumer.js';
import type { CSSResult, ReactiveController } from 'lit';
import type { PropertyDecorator } from 'lit/decorators/property.js';

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


type Initializer<T extends ReactiveElement> = (
  klass: typeof ReactiveElement,
  name: keyof T,
  options?: ColorContextOptions<T>,
) => void;

function standard<T extends ReactiveElement, V>(
  target: ClassAccessorDecoratorTarget<T, V>,
  context:
    | ClassSetterDecoratorContext<T, V>
    | ClassGetterDecoratorContext<T, V>
    | ClassAccessorDecoratorContext<T, V>,
  initialize: Initializer<T>,
  options?: ColorContextOptions<T>
) {
  const { kind } = context;
  switch (kind) {
    case 'setter':
    case 'getter':
    case 'accessor': return {
      init(this: T, v: V): V {
        initialize(
          this.constructor as typeof ReactiveElement,
          context.name as keyof T,
          options,
        );
        return v;
      },
    } as ClassAccessorDecoratorResult<T, V>;
  }
}

function legacy<T extends ReactiveElement>(
  proto: T,
  property: keyof T,
  initialize: Initializer<T>,
  options?: ColorContextOptions<T>,
): void {
  initialize(proto.constructor as typeof ReactiveElement, property, options);
}

export function makeContextDecorator<T extends ReactiveElement>(init: Initializer<T>) {
  return (options?: ColorContextOptions<T>): PropertyDecorator => {
    return function<U extends T, V>(
      protoOrTgt: U | ClassAccessorDecoratorTarget<U, V>,
      propOrCtx: keyof U | ClassAccessorDecoratorContext<U, V>,
    ) {
      if (typeof propOrCtx === 'object') {
        const target = protoOrTgt as ClassAccessorDecoratorTarget<U, V>;
        const context = propOrCtx as ClassAccessorDecoratorContext<U, V>;
        return standard<U, V>(target, context, init as Initializer<U>, options);
      } else {
        return legacy<U>(protoOrTgt as U, propOrCtx, init as Initializer<U>, options);
      }
    } as PropertyDecorator;
  };
}

