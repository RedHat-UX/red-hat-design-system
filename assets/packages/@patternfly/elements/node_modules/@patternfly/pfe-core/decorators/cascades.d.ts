import type { ReactiveElement } from 'lit';
/**
 * Cascades the decorated attribute to children
 * @param items
 * @deprecated use context, especially via `@patternfly/pfe-core/functions/context.js`;
 */
export declare function cascades<T extends ReactiveElement>(...items: string[]): PropertyDecorator;
