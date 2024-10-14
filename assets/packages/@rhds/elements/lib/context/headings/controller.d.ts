import type { ReactiveController, ReactiveElement, TemplateResult } from 'lit';
import { type ContextRequestEvent } from '../event.js';
import type { HeadingLevelContextConsumer } from './consumer.js';
export interface HeadingLevelTemplateOptions {
    id?: string;
    hidden?: boolean;
}
export interface HeadingLevelContextOptions {
    /** Root Heading level. default 1 */
    level?: number;
    /** Heading offset for children. default 1 */
    offset?: number;
    /**
     * Attribute to read on the host which will determine root heading level.
     */
    attribute?: string;
    /**
     * Only for providers which are also consumers.
     */
    parent?: HeadingLevelContextConsumer;
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
export declare const contextEvents: Map<ReactiveElement, ContextRequestEvent<{
    __context__: unknown;
}>>;
/**
 * Determines which heading level immediately precedes the host element,
 * and provides templates for shadow headings.
 */
export declare class HeadingLevelController implements ReactiveController {
    #private;
    protected host: ReactiveElement;
    /** Heading level preceding component document, as in 1 for <h1>, 2 for <h2> etc. */
    protected options?: HeadingLevelContextOptions | undefined;
    static readonly context: Readonly<{
        __context__: number;
    }>;
    offset: number;
    get level(): number;
    set level(level: string | number | undefined | null);
    constructor(host: ReactiveElement, 
    /** Heading level preceding component document, as in 1 for <h1>, 2 for <h2> etc. */
    options?: HeadingLevelContextOptions | undefined);
    hostConnected?(): void;
    /**
     * Wraps any renderable content in a heading, based on heading level
     */
    wrap(content: unknown, options?: HeadingLevelTemplateOptions): TemplateResult;
}
