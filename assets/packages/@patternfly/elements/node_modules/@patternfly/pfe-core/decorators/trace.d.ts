/**
 * Logs the result of a class method
 * @param tag log tag, prepended to outputs
 */
export declare function trace(tag?: string): (_: unknown, key: string, descriptor: PropertyDescriptor) => void;
