import { RHDSSSRController } from '@rhds/elements/lib/ssr-controller.js';
export declare class UxdotPatternSSRControllerClient extends RHDSSSRController {
    allContent: import("lit-html/directive.js").DirectiveResult<{
        new (partInfo: import("lit-html/directive.js").PartInfo): {
            "__#private@#hydrated": boolean;
            update(part: import("lit-html").ChildPart): {
                _$litType$: number;
                strings: string[] & {
                    raw: readonly string[];
                };
                values: unknown[];
            } | typeof import("lit-html").noChange;
            render(): symbol;
            get _$isConnected(): boolean;
        };
    }>;
    htmlContent: import("lit-html/directive.js").DirectiveResult<{
        new (partInfo: import("lit-html/directive.js").PartInfo): {
            "__#private@#hydrated": boolean;
            update(part: import("lit-html").ChildPart): {
                _$litType$: number;
                strings: string[] & {
                    raw: readonly string[];
                };
                values: unknown[];
            } | typeof import("lit-html").noChange;
            render(): symbol;
            get _$isConnected(): boolean;
        };
    }>;
    cssContent: import("lit-html/directive.js").DirectiveResult<{
        new (partInfo: import("lit-html/directive.js").PartInfo): {
            "__#private@#hydrated": boolean;
            update(part: import("lit-html").ChildPart): {
                _$litType$: number;
                strings: string[] & {
                    raw: readonly string[];
                };
                values: unknown[];
            } | typeof import("lit-html").noChange;
            render(): symbol;
            get _$isConnected(): boolean;
        };
    }>;
    jsContent: import("lit-html/directive.js").DirectiveResult<{
        new (partInfo: import("lit-html/directive.js").PartInfo): {
            "__#private@#hydrated": boolean;
            update(part: import("lit-html").ChildPart): {
                _$litType$: number;
                strings: string[] & {
                    raw: readonly string[];
                };
                values: unknown[];
            } | typeof import("lit-html").noChange;
            render(): symbol;
            get _$isConnected(): boolean;
        };
    }>;
    hasCss: boolean;
    hasJs: boolean;
    hostConnected(): void;
}
