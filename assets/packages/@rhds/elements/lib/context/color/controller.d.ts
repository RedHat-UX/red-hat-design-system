import type { ColorTheme } from './consumer.js';
import type { ReactiveController, ReactiveElement } from 'lit';
import { StyleController } from '@patternfly/pfe-core/controllers/style-controller.js';
import { type ContextRequestEvent } from '../event.js';
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
*              <eager-consumer></eager-consumer>
*            </late-provider>
*          </early-provider>
*          ```
*/
export declare const contextEvents: Map<ReactiveElement, ContextRequestEvent<Readonly<{
    __context__: ColorTheme | null;
}>>>;
/**
 * Color context is derived from the `--context` css custom property,
 * which *must* be set by the `color-palette` attribute
 * This property is set (in most cases) in `color-context.scss`,
 * which is added to components via `StyleController`.
 *
 * In this way, we avoid the need to execute javascript in order to convert from a given
 * `ColorPalette` to a given `ColorTheme`, since those relationships are specified in CSS.
 */
export declare abstract class ColorContextController<T extends ReactiveElement> implements ReactiveController {
    protected host: T;
    /** The context object which acts as the key for providers and consumers */
    static readonly context: Readonly<{
        __context__: ColorTheme | null;
    }>;
    /** The style controller which provides the necessary CSS. */
    protected styleController: StyleController;
    /** The last-known color context on the host */
    protected last: ColorTheme | null;
    hostUpdate?(): void;
    /** callback which updates the context value on consumers */
    abstract update(next?: ColorTheme | null): void;
    constructor(host: T);
}