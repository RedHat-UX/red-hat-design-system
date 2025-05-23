import type { ReactiveController, ReactiveElement } from 'lit';
import type { RenderInfo } from '@lit-labs/ssr';

/** This is experimental and may change at any time without warning */
export class RHDSSSRController implements ReactiveController {
  isRHDSSSRController = true;
  /** @internal This is experimental and may change at any time without warning */
  ssrSetup?(renderInfo?: RenderInfo): Promise<unknown>;
  hostUpdate?(): void;
  hostUpdate?(): void;
  constructor(public host: ReactiveElement) {
    host.addController(this);
  }
}
