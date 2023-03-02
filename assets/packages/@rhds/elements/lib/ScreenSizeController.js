import { __decorate } from "tslib";
import { bound } from '@patternfly/pfe-core/decorators/bound.js';
import { desktopLargeBreakpoint, desktopSmallBreakpoint, tabletLandscapeBreakpoint, tabletPortraitBreakpoint, mobileLandscapeBreakpoint, mobilePortraitBreakpoint, } from './tokens.js';
export class ScreenSizeController {
    constructor(
    /** reference to the host element using this controller */
    host, breakpoint, options) {
        this.host = host;
        this.breakpoint = breakpoint;
        this.mobile = ScreenSizeController.queries.get('mobile')?.matches ?? false;
        this.matches = new Set();
        this.host.addController(this);
        this.size = 'mobilePortrait';
        this.breakpoint = breakpoint;
        this.onChange = options?.onChange;
        for (const [key, list] of ScreenSizeController.queries) {
            if (key !== 'mobile' && list.matches) {
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
        this.host.requestUpdate();
        if (this.breakpoint) {
            this.onChange?.(this.matches.has(this.breakpoint) ?? false);
        }
    }
}
ScreenSizeController.instances = new Set();
ScreenSizeController.queries = new Map([
    ['mobile', matchMedia(`screen and (max-width: ${tabletPortraitBreakpoint})`)],
    ['mobilePortrait', matchMedia(`screen and (min-width: ${mobilePortraitBreakpoint})`)],
    ['mobileLandscape', matchMedia(`screen and (min-width: ${mobileLandscapeBreakpoint})`)],
    ['tabletPortrait', matchMedia(`screen and (min-width: ${tabletPortraitBreakpoint})`)],
    ['tabletLandscape', matchMedia(`screen and (min-width: ${tabletLandscapeBreakpoint})`)],
    ['desktopSmall', matchMedia(`screen and (min-width: ${tabletLandscapeBreakpoint}) and (max-width: ${desktopSmallBreakpoint})`)],
    ['desktopLarge', matchMedia(`screen and (min-width: ${desktopLargeBreakpoint})`)],
]);
__decorate([
    bound
], ScreenSizeController.prototype, "evaluate", null);
for (const [key, list] of ScreenSizeController.queries) {
    if (key === 'mobile') {
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