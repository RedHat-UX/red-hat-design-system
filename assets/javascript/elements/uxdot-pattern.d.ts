import type { ColorPalette } from '@rhds/elements/lib/context/color/provider.js';
import { LitElement } from 'lit';
import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
import '@rhds/elements/rh-surface/rh-surface.js';
import '@rhds/elements/rh-code-block/rh-code-block.js';
import '@rhds/elements/rh-tabs/rh-tabs.js';
export declare class UxdotPattern extends LitElement {
    #private;
    static styles: CSSStyleSheet[];
    /** Which color palette to apply to the demo surface */
    colorPalette: ColorPalette;
    /** The id of the element in shadow DOM which the color picker targets */
    target: string;
    /** Path to the pattern source file, relative to the input file */
    src?: string;
    /** Path to additional CSS file to include */
    cssSrc?: string;
    /** Path to additional JS file to include */
    jsSrc?: string;
    /** Should the color picker be hidden? */
    noColorPicker: boolean;
    /** Should the code blocks be expanded? */
    fullHeight: boolean;
    /** Which colour palettes should be allowed in the picker? (default: all) */
    allow: ColorPalette[];
    private on?;
    ssrController: import("./uxdot-pattern-ssr-controller-server.js").UxdotPatternSSRControllerServer | import("./uxdot-pattern-ssr-controller-client.js").UxdotPatternSSRControllerClient;
    render(): import("lit-html").TemplateResult<1>;
}
