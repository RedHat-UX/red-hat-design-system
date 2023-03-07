import type { ReactiveController, ReactiveElement } from 'lit';
export interface Options {
    name?: string;
    pattern?: 'squares' | 'triangles';
    size?: number;
    colors?: string[];
}
export interface Initializer extends Options {
    canvas: HTMLCanvasElement;
    colors: string[];
}
export declare class RandomPatternController implements ReactiveController {
    #private;
    constructor(host: ReactiveElement, canvas: HTMLCanvasElement);
    hostConnected?(): void;
    render(options?: Options): void;
}
