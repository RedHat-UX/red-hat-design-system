import type { DirectiveResult } from 'lit/directive.js';
import type { RenderInfo } from '@lit-labs/ssr';
import { RHDSSSRController } from '@rhds/elements/lib/ssr-controller.js';
import type { UxdotPattern } from './uxdot-pattern.js';
interface EleventyPageData {
    inputPath: string;
    outputPath: string;
}
interface RHDSRenderInfo extends RenderInfo {
    page: EleventyPageData;
    slotControllerElements: string[];
}
export declare class UxdotPatternSSRControllerServer extends RHDSSSRController {
    #private;
    host: UxdotPattern;
    allContent?: DirectiveResult;
    htmlContent?: DirectiveResult;
    cssContent?: DirectiveResult;
    jsContent?: DirectiveResult;
    hasCss: boolean;
    hasJs: boolean;
    ssrSetup(renderInfo: RHDSRenderInfo): Promise<void>;
}
export {};
