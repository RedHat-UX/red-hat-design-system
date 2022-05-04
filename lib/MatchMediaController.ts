import type { ReactiveControllerHost, ReactiveController } from 'lit';

export class MatchMediaController implements ReactiveController {
  /**
   * The matchMedia result
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia
   */
  public matches = false;

  private resizeObserver = new ResizeObserver(this.evaluate.bind(this));

  private onChange?(list: MediaQueryList): void

  constructor(
    /** reference to the host element using this controller */
    public host: ReactiveControllerHost & Element,
    private mediaQuery = '',
    private options?: { onChange?(list: MediaQueryList): void }
  ) {
    this.host.addController(this);
    this.mediaQuery = mediaQuery;
    this.onChange = options?.onChange;
  }

  hostConnected() {
    if (this.host) {
      this.resizeObserver.observe(this.host);
    }
  }

  hostDisconnected() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  evaluate() {
    // use matchMedia to evaluate if the current media query is a match.
    const value = window.matchMedia(this.mediaQuery);
    const { matches } = value;
    // dirty check value to determine to update or not
    if (this.matches !== matches) {
      this.matches = matches;
      // request a render update
      this.host.requestUpdate();
      this.onChange?.(value);
    }
  }
}
