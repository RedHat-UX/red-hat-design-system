import { mobileBreakpoint, mobileXlBreakpoint, desktopLargeBreakpoint, desktopSmallBreakpoint, tabletLandscapeBreakpoint, tabletPortaitBreakpoint, mobileLandscapeBreakpoint, mobilePortraitBreakpoint, } from './tokens.js';
export class RHDSScreenSizeController {
    constructor(
    /** reference to the host element using this controller */
    host) {
        this.host = host;
        this.mobile = RHDSScreenSizeController.queries.get('mobile')?.matches ?? false;
        this.host.addController(this);
        this.size = 'mobilePortrait';
        for (const [key, list] of RHDSScreenSizeController.queries) {
            if (key !== 'mobile' && list.matches) {
                this.size = key;
            }
        }
    }
    hostConnected() {
        RHDSScreenSizeController.instances.add(this);
    }
    hostDisconnected() {
        RHDSScreenSizeController.instances.delete(this);
    }
}
RHDSScreenSizeController.instances = new Set();
RHDSScreenSizeController.queries = new Map([
    ['mobile', matchMedia(`screen and (max-width: ${mobileBreakpoint})`)],
    ['mobilePortrait', matchMedia(`screen and (max-width: ${mobilePortraitBreakpoint})`)],
    ['mobileLandscape', matchMedia(`screen and (max-width: ${mobileLandscapeBreakpoint})`)],
    ['tabletPortait', matchMedia(`screen and (max-width: ${tabletPortaitBreakpoint})`)],
    ['tabletLandscape', matchMedia(`screen and (max-width: ${tabletLandscapeBreakpoint})`)],
    ['mobileXl', matchMedia(`screen and (max-width: ${mobileXlBreakpoint})`)],
    ['desktopSmall', matchMedia(`screen and (min-width: ${mobileXlBreakpoint}) and (max-width: ${desktopSmallBreakpoint})`)],
    ['desktopLarge', matchMedia(`screen and (min-width: ${desktopLargeBreakpoint})`)],
]);
for (const [key, list] of RHDSScreenSizeController.queries) {
    if (key === 'mobile') {
        list.addEventListener('change', event => {
            for (const instance of RHDSScreenSizeController.instances) {
                instance.mobile = event.matches;
                instance.host.requestUpdate();
            }
        });
    }
    else {
        list.addEventListener('change', event => {
            for (const instance of RHDSScreenSizeController.instances) {
                if (event.matches) {
                    instance.size = key;
                    instance.host.requestUpdate();
                }
            }
        });
    }
}
//# sourceMappingURL=RHDSScreenSizeController.js.map