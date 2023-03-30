import type { ReactiveControllerHost, ReactiveController } from 'lit';

import {
  Breakpoint2xsMax,
  Media2xl,
  MediaLg,
  MediaMd,
  MediaSm,
  MediaXl,
  MediaXs,
} from '@rhds/tokens/media.js';

type BreakpointKey =
  | '2xs'
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl';

type MediaToken =
  | typeof Media2xl
  | typeof MediaLg
  | typeof MediaMd
  | typeof MediaSm
  | typeof MediaXl
  | typeof MediaXs

function getMediaQueryListForToken(token: MediaToken | string) {
  const media =
      typeof token === 'string' ? `(max-width: ${token})`
    : Object.entries(token).map(x => `(${x.join(':')})`).join(' and ');
  return matchMedia(`screen and ${media}`);
}

export class ScreenSizeController implements ReactiveController {
  static instances = new Set<ScreenSizeController>();

  static queries = new Map<BreakpointKey, MediaQueryList>(Object.entries({
    '2xs': Breakpoint2xsMax,
    'xs': MediaXs,
    'sm': MediaSm,
    'md': MediaMd,
    'lg': MediaLg,
    'xl': MediaXl,
    '2xl': Media2xl,
  } satisfies Record<BreakpointKey, string | MediaToken>)
    .map(([k, v]) => [k as BreakpointKey, getMediaQueryListForToken(v)]));

  public mobile = ScreenSizeController.queries.get('2xs')?.matches ?? false;

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

for (const [key, list] of ScreenSizeController.queries) {
  if (key === '2xs') {
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
