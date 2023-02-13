import { getCompatibleStyle, supportsAdoptingStyleSheets } from 'lit';
/**
 * Controller which adds styles to it's host element.
 * Like `static styles = []`, except a controller.
 * Should typically only be used within other controllers.
 */
export class StyleController {
    constructor(host, 
    /** These styles will be applied to the host element */
    styles) {
        this.host = host;
        this.styles = styles;
        this.stylesAdopted = false;
        host.addController(this);
    }
    hostConnected() {
        if (this.stylesAdopted || !(this.host.renderRoot instanceof ShadowRoot)) {
            return;
        }
        const styles = [this.styles].flatMap(x => getCompatibleStyle(x)).filter(x => !!x);
        if (supportsAdoptingStyleSheets) {
            this.host.renderRoot.adoptedStyleSheets = [
                ...styles.map(x => x instanceof CSSStyleSheet ? x : x.styleSheet),
                ...this.host.renderRoot.adoptedStyleSheets ?? [],
            ];
        }
        else {
            styles.forEach(s => {
                const style = document.createElement('style');
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const nonce = window['litNonce'];
                if (nonce !== undefined) {
                    style.setAttribute('nonce', nonce);
                }
                style.textContent = s.cssText;
                this.host.renderRoot.appendChild(style);
            });
        }
        this.stylesAdopted = true;
    }
}
//# sourceMappingURL=style-controller.js.map