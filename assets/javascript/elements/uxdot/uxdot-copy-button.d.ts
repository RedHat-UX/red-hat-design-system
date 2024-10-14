import type { IconNameFor } from '@rhds/icons';
import { LitElement } from 'lit';
import '@rhds/elements/rh-tooltip/rh-tooltip.js';
import '@rhds/elements/rh-icon/rh-icon.js';
export declare class UxdotCopyButton extends LitElement {
    #private;
    static styles: CSSStyleSheet[];
    copy?: string;
    icon?: IconNameFor<'ui'>;
    render(): import("lit-html").TemplateResult<1>;
    firstUpdated(): void;
}
