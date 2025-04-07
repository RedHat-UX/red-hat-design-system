function makeConverter(f) {
    return {
        fromAttribute(value) {
            if (typeof value !== 'string') {
                return null;
            }
            else {
                return value.split(',').map(f);
            }
        },
        toAttribute(value) {
            return value.join(',');
        },
    };
}
/**
 * A LitElement property converter which represents a list of numbers as a comma separated string
 * @see https://lit.dev/docs/components/properties/#conversion-converter
 */
export const NumberListConverter = makeConverter(x => parseInt(x?.trim(), 10));
/**
 * A LitElement property converter which represents a list of strings as a comma separated string
 * @see https://lit.dev/docs/components/properties/#conversion-converter
 */
export const StringListConverter = makeConverter(x => x.trim());
/**
 * A composed, bubbling event for UI interactions
 * e.g. when an accordion panel opens.
 */
export class ComposedEvent extends Event {
    constructor(type, init) {
        super(type, {
            bubbles: true,
            composed: true,
            ...init,
        });
    }
}
//# sourceMappingURL=core.js.map