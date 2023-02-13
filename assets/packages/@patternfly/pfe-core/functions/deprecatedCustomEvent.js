/**
 * Construct a CustomEvent with the given name and detail.
 * The event bubbles and is composed.
 */
export function deprecatedCustomEvent(name, detail) {
    return new CustomEvent(name, {
        bubbles: true,
        composed: true,
        detail,
    });
}
//# sourceMappingURL=deprecatedCustomEvent.js.map