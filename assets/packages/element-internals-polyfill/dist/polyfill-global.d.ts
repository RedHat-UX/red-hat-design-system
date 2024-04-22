export declare function isElementInternalsSupported(): boolean;
export declare function determineNeededPolyfills(): {
    isFormAssociatedPolyfillNeeded: boolean;
    isCustomStateSetPolyfillNeeded: boolean;
};
export declare function maybePolyfillGlobalElementInternalsObject(): void;
