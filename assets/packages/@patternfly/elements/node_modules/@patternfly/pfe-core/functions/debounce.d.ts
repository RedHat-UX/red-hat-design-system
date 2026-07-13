/**
 * Debounce helper function
 * @see https://davidwalsh.name/javascript-debounce-function
 *
 * @param  func Function to be debounced
 * @param  delay How long until it will be run
 * @param  immediate Whether it should be run at the start instead of the end of the debounce
 */
export declare function debounce(func: (...args: any[]) => unknown, delay: number, immediate?: boolean): (this: unknown, ...args: any[]) => void;
