import type { ReactiveControllerHost, ReactiveController } from 'lit';

import { bound } from '@patternfly/pfe-core/decorators/bound.js';

import {
  Breakpoint2xsMax,
  BreakpointXsMax,
  BreakpointXs,
  BreakpointSmMax,
  BreakpointSm,
  BreakpointMdMax,
  BreakpointMd,
  BreakpointLgMax,
  BreakpointLg,
  BreakpointXlMax,
  BreakpointXl,
  Breakpoint2xl,
} from '@rhds/tokens/media.js';

export type BreakpointKey =
  | 'mobile'
  | 'Breakpoint2xsMax'
  | 'BreakpointXsMax'
  | 'BreakpointXs'
  | 'BreakpointSmMax'
  | 'BreakpointSm'
  | 'BreakpointMdMax'
  | 'BreakpointMd'
  | 'BreakpointLgMax'
  | 'BreakpointLg'
  | 'BreakpointXlMax'
  | 'BreakpointXl'
  | 'Breakpoint2xl';

export class ScreenSizeController implements ReactiveController {
  static instances = new Set<ScreenSizeController>();

  static queries = new Map<BreakpointKey, MediaQueryList>([
    ['mobile', matchMedia(`screen and (max-width: ${Breakpoint2xsMax})`)],
    ['Breakpoint2xsMax', matchMedia(`screen and (max-width: ${Breakpoint2xsMax})`)],
    ['BreakpointXsMax', matchMedia(`screen and (max-width: ${BreakpointXsMax})`)],
    ['BreakpointXs', matchMedia(`screen and (min-width: ${BreakpointXs})`)],
    ['BreakpointSmMax', matchMedia(`screen and (max-width: ${BreakpointSmMax})`)],
    ['BreakpointSm', matchMedia(`screen and (min-width: ${BreakpointSm})`)],
    ['BreakpointMdMax', matchMedia(`screen and (max-width: ${BreakpointMdMax})`)],
    ['BreakpointMd', matchMedia(`screen and (min-width: ${BreakpointMd})`)],
    ['BreakpointLgMax', matchMedia(`screen and (max-width: ${BreakpointLgMax})`)],
    ['BreakpointLg', matchMedia(`screen and (min-width: ${BreakpointLg})`)],
    ['BreakpointXlMax', matchMedia(`screen and (max-width: ${BreakpointXlMax})`)],
    ['BreakpointXl', matchMedia(`screen and (min-width: ${BreakpointXl})`)],
    ['Breakpoint2xl', matchMedia(`screen and (min-width: ${Breakpoint2xl})`)],
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
      onChange?(matches: boolean): void;
    }
  ) {
    this.host.addController(this);
    this.size = 'mobile';
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
