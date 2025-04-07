import { isServer, ReactiveElement } from 'lit';
let initialized;
async function load() {
    const { default: { cssText } } = await import('@rhds/tokens/css/default-theme.css.js');
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(cssText);
    document.adoptedStyleSheets = [...(document.adoptedStyleSheets ?? []), sheet];
}
let p;
/**
 * Ensures this element is [themable](https://ux.redhat.com/theming/).
 *
 * @param klass element constructor
 * @see https://ux.redhat.com/theming/color-palettes/
 */
export function themable(klass) {
    if (isServer) {
        return klass;
    }
    initialized ?? (initialized = document.documentElement.computedStyleMap?.().has('--rh-color-accent-base')
        ?? !!getComputedStyle(document.documentElement).getPropertyValue('--rh-color-accent-base'));
    if (!initialized) {
        p ?? (p = load());
        return class ThemableElement extends klass {
            async getUpdateComplete() {
                await p;
                return super.getUpdateComplete();
            }
        };
    }
    return klass;
}
//# sourceMappingURL=themable.js.map