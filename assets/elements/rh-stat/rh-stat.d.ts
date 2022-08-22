import type { ColorTheme } from '../../lib/context/color.js';
import { LitElement } from 'lit';
import { MatchMediaController } from '../../lib/MatchMediaController.js';
/**
 * Stat
 * @slot - Place element content here
 */
export declare class RhStat extends LitElement {
    static readonly version = "{{version}}";
    static readonly styles: import("lit").CSSResult[];
    on: ColorTheme;
    icon: string;
    top: 'default' | 'statistic';
    size: 'default' | 'large';
    protected matchMedia: MatchMediaController;
    isMobile: boolean;
    private slots;
    constructor();
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    updateIcons(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-stat': RhStat;
    }
}
