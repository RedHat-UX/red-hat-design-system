/**
 * Debounce helper function
 * @see https://davidwalsh.name/javascript-debounce-function
 *
 * @param  func Function to be debounced
 * @param  delay How long until it will be run
 * @param  immediate Whether it should be run at the start instead of the end of the debounce
 */
export function debounce(func, delay, immediate = false) {
    let timeout;
    return function (...args) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = window.setTimeout(later, delay);
        if (callNow) {
            func.apply(context, args);
        }
    };
}
//# sourceMappingURL=debounce.js.map