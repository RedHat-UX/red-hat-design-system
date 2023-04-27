const noPref = Symbol();
/** Retrieve an HTML metadata item */
function getMeta(name) {
    return document.head.querySelector(`meta[name="${name}"]`)?.content;
}
/**
 * A boolean value that indicates if the performance should be tracked.
 * For use in a JS file or script tag; can also be added in the constructor of a component during development.
 * @example trackPerformance(true);
 */
export function trackPerformance(preference = noPref) {
    if (preference !== noPref) {
        window.PfeConfig.trackPerformance = !!preference;
    }
    return window.PfeConfig.trackPerformance;
}
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
            ...init
        });
    }
}
const bodyNoAutoReveal = document.body.hasAttribute('no-auto-reveal');
/** Global patternfly elements config */
window.PfeConfig = Object.assign(window.PfeConfig ?? {}, {
    trackPerformance: window.PfeConfig?.trackPerformance ?? getMeta('pf-track-performance') === 'true',
    // if the body tag has `no-auto-reveal` attribute, reveal immediately
    // if `<meta name="pf-auto-reveal">` exists, and it's `content` is 'true',
    // then auto-reveal the body
    autoReveal: window.PfeConfig?.autoReveal ?? (bodyNoAutoReveal ? !bodyNoAutoReveal
        : getMeta('pf-auto-reveal') === 'true'),
    get log() {
        return !!localStorage.pfeLog;
    },
    set log(v) {
        if (v) {
            localStorage.setItem('pfeLog', `${true}`);
        }
        else {
            localStorage.removeItem('pfeLog');
        }
    },
});
//# sourceMappingURL=core.js.map