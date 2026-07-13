import type { ReactiveController, ReactiveElement } from 'lit';
export declare class PerfController implements ReactiveController {
    private host;
    hasMeasured: boolean;
    markId: string;
    constructor(host: ReactiveElement);
    hostUpdate(): void;
    measure(): void;
}
