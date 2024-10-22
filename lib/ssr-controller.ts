import type { ReactiveController, ReactiveElement } from 'lit';


export const ssrControllerMap = new WeakMap<ReactiveElement, RHDSSSRController[]>;

/** This is experimental and may change at any time without warning */
export class RHDSSSRController implements ReactiveController {
  isRHDSSSRController = true;
  /** @internal This is experimental and may change at any time without warning */
  ssrSetup?(): Promise<unknown>;
  hostUpdate?(): void;
  hostUpdate?(): void;
  constructor(public host: ReactiveElement) {
    host.addController(this);
    ssrControllerMap.set(host, [...ssrControllerMap.get(host) ?? [], this]);
  }
}
