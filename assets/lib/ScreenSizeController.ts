import type { ReactiveControllerHost, ReactiveController } from 'lit';

import { bound } from '@patternfly/pfe-core/decorators/bound.js';

import {
  mobileBreakpoint,
  mobileXlBreakpoint,
  desktopLargeBreakpoint,
  desktopSmallBreakpoint,
  tabletLandscapeBreakpoint,
  tabletPortraitBreakpoint,
  mobileLandscapeBreakpoint,
  mobilePortraitBreakpoint,
} from './tokens.js';

export type BreakpointKey =
  | 'mobile'
  | 'mobileXl'
  | 'desktopLarge'
  | 'desktopSmall'
  | 'tabletLandscape'
  | 'tabletPortrait'
  | 'mobileLandscape'
  | 'mobilePortrait'

export class ScreenSizeController implements ReactiveController {
  static instances = new Set<ScreenSizeController>();

  static queries = new Map<BreakpointKey, MediaQueryList>([
    ['mobile', matchMedia(`screen and (max-width: ${mobileBreakpoint})`)],
    ['mobilePortrait', matchMedia(`screen and (min-width: ${mobilePortraitBreakpoint})`)],
    ['mobileLandscape', matchMedia(`screen and (min-width: ${mobileLandscapeBreakpoint})`)],
    ['tabletPortrait', matchMedia(`screen and (min-width: ${tabletPortraitBreakpoint})`)],
    ['tabletLandscape', matchMedia(`screen and (min-width: ${tabletLandscapeBreakpoint})`)],
    ['mobileXl', matchMedia(`screen and (max-width: ${mobileXlBreakpoint})`)],
    ['desktopSmall', matchMedia(`screen and (min-width: ${mobileXlBreakpoint}) and (max-width: ${desktopSmallBreakpoint})`)],
    ['desktopLarge', matchMedia(`screen and (min-width: ${desktopLargeBreakpoint})`)],
  ]);

  public mobile = ScreenSizeController.queries.get('mobile')?.matches ?? false;

  public size: Omit<BreakpointKey, 'mobile'>;

  public matches = new Set<BreakpointKey>();

  private onChange?(matches: boolean): void

  constructor(
    /** reference to the host element using this controller */
    public host: ReactiveControllerHost,
    private breakpoint: BreakpointKey | void,
    options?: {
      onChange?(matches: boolean): void
    }
  ) {
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
  @bound evaluate() {
    this.host.requestUpdate();
    if (this.breakpoint) {
      this.onChange?.(this.matches.has(this.breakpoint) ?? false);
    }
  }
}

for (const [key, list] of ScreenSizeController.queries) {
  if (key === 'mobile') {
    list.addEventListener('change', event => {
      for (const instance of ScreenSizeController.instances) {
        instance.mobile = event.matches;
        instance.evaluate();
      }
    });
  } else {
    list.addEventListener('change', event => {
      for (const instance of ScreenSizeController.instances) {
        if (event.matches) {
          instance.size = key;
          instance.matches.add(key);
        } else {
          instance.matches.delete(key);
        }
        instance.evaluate();
      }
    });
  }
}
