import type { ReactiveControllerHost, ReactiveController } from 'lit';

import {
  mobileBreakpoint,
  mobileXlBreakpoint,
  desktopLargeBreakpoint,
  desktopSmallBreakpoint,
  tabletLandscapeBreakpoint,
  tabletPortaitBreakpoint,
  mobileLandscapeBreakpoint,
  mobilePortraitBreakpoint,
} from './tokens.js';

export type BreakpointKey =
  | 'mobile'
  | 'mobileXl'
  | 'desktopLarge'
  | 'desktopSmall'
  | 'tabletLandscape'
  | 'tabletPortait'
  | 'mobileLandscape'
  | 'mobilePortrait'

export class RHDSScreenSizeController implements ReactiveController {
  static instances = new Set<RHDSScreenSizeController>();

  static queries = new Map<BreakpointKey, MediaQueryList>([
    ['mobile', matchMedia(`screen and (max-width: ${mobileBreakpoint})`)],
    ['mobileXl', matchMedia(`screen and (max-width: ${mobileXlBreakpoint})`)],
    ['mobilePortrait', matchMedia(`screen and (min-width: ${mobilePortraitBreakpoint})`)],
    ['mobileLandscape', matchMedia(`screen and (min-width: ${mobileLandscapeBreakpoint})`)],
    ['tabletPortait', matchMedia(`screen and (min-width: ${tabletPortaitBreakpoint})`)],
    ['tabletLandscape', matchMedia(`screen and (min-width: ${tabletLandscapeBreakpoint})`)],
    ['desktopSmall', matchMedia(`screen and (min-width: ${mobileXlBreakpoint}) and (max-width: ${desktopSmallBreakpoint})`)],
    ['desktopLarge', matchMedia(`screen and (min-width: ${desktopLargeBreakpoint})`)],
  ]);

  public mobile = RHDSScreenSizeController.queries.get('mobile')?.matches ?? false;

  public size: Omit<BreakpointKey, 'mobile'>;

  public matches = new Set();

  constructor(
    /** reference to the host element using this controller */
    public host: ReactiveControllerHost,
  ) {
    this.host.addController(this);
    this.size = 'mobilePortrait';
    for (const [key, list] of RHDSScreenSizeController.queries) {
      if (key !== 'mobile' && list.matches) {
        this.size = key;
        this.matches.add(key);
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

for (const [key, list] of RHDSScreenSizeController.queries) {
  if (key === 'mobile') {
    list.addEventListener('change', event => {
      for (const instance of RHDSScreenSizeController.instances) {
        instance.mobile = event.matches;
        instance.host.requestUpdate();
      }
    });
  } else {
    list.addEventListener('change', event => {
      for (const instance of RHDSScreenSizeController.instances) {
        if (event.matches) {
          instance.size = key;
          instance.matches.add(key);
          instance.host.requestUpdate();
        } else {
          instance.matches.delete(key);
        }
      }
    });
  }
}
