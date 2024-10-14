import { Breakpoint2xsMax, Media2xl, MediaLg, MediaMd, MediaSm, MediaXl, MediaXs, } from '@rhds/tokens/media.js';
function getMediaQueryListForToken(token) {
    const media = typeof token === 'string' ? `(max-width: ${token})`
        : Object.entries(token).map(x => `(${x.join(':')})`).join(' and ');
    return matchMedia(`screen and ${media}`);
}
const BREAKPOINTS = {
    '2xs': Breakpoint2xsMax,
    'xs': MediaXs,
    'sm': MediaSm,
    'md': MediaMd,
    'lg': MediaLg,
    'xl': MediaXl,
    '2xl': Media2xl,
};
export class ScreenSizeController {
    constructor(
    /** reference to the host element using this controller */
    host, breakpoint, options) {
        this.host = host;
        this.breakpoint = breakpoint;
        this.mobile = ScreenSizeController.queries.get('2xs')?.matches ?? false;
        this.matches = new Set();
        this.host.addController(this);
        this.size = '2xs';
        this.breakpoint = breakpoint;
        this.onChange = options?.onChange;
        for (const [key, list] of ScreenSizeController.queries) {
            if (key !== '2xs' && list.matches) {
                this.size = key;
                this.matches.add(key);
                this.evaluate();
            }
        }
    }
    hostConnected() {
        ScreenSizeController.instances.add(this);
    }
    hostDisconnected() {
        ScreenSizeController.instances.delete(this);
    }
    /** Requests a render and calls the onChange callback */
    evaluate() {
        if (this.breakpoint) {
            this.onChange?.(this.matches.has(this.breakpoint));
        }
        this.host.requestUpdate();
    }
}
ScreenSizeController.instances = new Set();
ScreenSizeController.queries = new Map(Object.entries(BREAKPOINTS).map(([k, v]) => [k, getMediaQueryListForToken(v)]));
for (const [key, list] of ScreenSizeController.queries) {
    if (key === '2xs') {
        list.addEventListener('change', event => {
            for (const instance of ScreenSizeController.instances) {
                instance.mobile = event.matches;
                instance.evaluate();
            }
        });
    }
    else {
        list.addEventListener('change', event => {
            for (const instance of ScreenSizeController.instances) {
                if (event.matches) {
                    instance.size = key;
                    instance.matches.add(key);
                }
                else {
                    instance.matches.delete(key);
                }
                instance.evaluate();
            }
        });
    }
}
//# sourceMappingURL=ScreenSizeController.js.map