import type { ColorTheme } from './consumer.js';
import type { CSSResult, ReactiveController } from 'lit';
import type { ContextEvent, Context } from '@lit/context';

import { ReactiveElement } from 'lit';

import { StyleController } from '@patternfly/pfe-core/controllers/style-controller.js';

import { createContextWithRoot } from '@patternfly/pfe-core/functions/context.js';

export type UnknownContext = Context<unknown, unknown>;

export interface ColorContextOptions<T extends ReactiveElement> {
  prefix?: string;
  propertyName?: keyof T;
}

type ColorContext = typeof context;

/** The context object which acts as the key for providers and consumers */
export const context = createContextWithRoot<ColorTheme | null>('rh-color-context');

export const isColorContextEvent =
  (event: ContextEvent<UnknownContext>): event is ContextEvent<ColorContext> =>
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
  /** The last-known color context on the host */
  protected last: ColorTheme | null = null;

  constructor(protected host: T, styles: CSSStyleSheet | CSSResult) {
    new StyleController(host, styles);
    host.addController(this);
  }
}
