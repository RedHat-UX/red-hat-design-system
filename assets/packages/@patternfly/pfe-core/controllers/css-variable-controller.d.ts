import type { ReactiveElement, ReactiveController } from 'lit';
export declare class CssVariableController implements ReactiveController {
    host: ReactiveElement;
    style: CSSStyleDeclaration;
    constructor(host: ReactiveElement);
    private parseProperty;
    getVariable(name: string): string | null;
    hostConnected?(): void;
}
