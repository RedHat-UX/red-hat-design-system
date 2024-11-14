import type { ReactiveController, ReactiveElement } from 'lit';
import type { RenderInfo } from '@lit-labs/ssr';
export declare const ssrControllerMap: WeakMap<ReactiveElement, RHDSSSRController[]>;
/** This is experimental and may change at any time without warning */
export declare class RHDSSSRController implements ReactiveController {
    host: ReactiveElement;
    isRHDSSSRController: boolean;
    /** @internal This is experimental and may change at any time without warning */
    ssrSetup?(renderInfo?: RenderInfo): Promise<unknown>;
    hostUpdate?(): void;
    hostUpdate?(): void;
    constructor(host: ReactiveElement);
}
