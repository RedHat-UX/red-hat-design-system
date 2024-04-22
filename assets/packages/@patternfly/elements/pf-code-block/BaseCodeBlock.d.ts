import type { TemplateResult } from 'lit';
import { LitElement } from 'lit';
export declare abstract class BaseCodeBlock extends LitElement {
    static readonly styles: CSSStyleSheet[];
    abstract render(): TemplateResult;
    protected get content(): string;
    protected dedent(str: string): string;
}
