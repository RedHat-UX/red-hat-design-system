import type { DirectiveResult } from 'lit/directive.js';
import { RHDSSSRController } from '@rhds/elements/lib/ssr-controller.js';
import type { UxdotPattern } from './uxdot-pattern.js';
interface EleventyPageData {
    inputPath: string;
    outputPath: string;
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
    page: EleventyPageData;
    ssrSetup(): Promise<void>;
}
export {};
