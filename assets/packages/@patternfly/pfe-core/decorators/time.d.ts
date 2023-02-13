/**
 * Tracks the time a method takes to complete using the [performance API](https://developer.mozilla.org/en-US/docs/Web/API/Performance)
 */
export declare function time(tag?: string): (_: unknown, key: string, descriptor: PropertyDescriptor) => void;
