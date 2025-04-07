import type { ReactiveController, ReactiveElement } from 'lit';
import type { RenderInfo } from '@lit-labs/ssr';
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
