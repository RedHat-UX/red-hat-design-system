import type { ReactiveController, ReactiveElement } from 'lit';
export declare class Logger implements ReactiveController {
    private host;
    private static logDebug;
    private static instances;
    private get prefix();
    /**
     * A boolean value that indicates if the logging should be printed to the console; used for debugging.
     * For use in a JS file or script tag; can also be added in the constructor of a component during development.
     * @example Logger.debugLog(true);
     * @tags debug
     */
    static debugLog(preference?: null): boolean;
    /**
     * A logging wrapper which checks the debugLog boolean and prints to the console if true.
     *
     * @example Logger.log("Hello");
     */
    static log(...msgs: unknown[]): void;
    /**
     * A console warning wrapper which formats your output with useful debugging information.
     *
     * @example Logger.warn("Hello");
     */
    static warn(...msgs: unknown[]): void;
    /**
     * A console error wrapper which formats your output with useful debugging information.
     * For use inside a component's function.
     * @example Logger.error("Hello");
     */
    static error(...msgs: unknown[]): void;
    /**
     * Local logging that outputs the tag name as a prefix automatically
     *
     * @example this.logger.log("Hello");
     */
    log(...msgs: unknown[]): void;
    /**
     * Local warning wrapper that outputs the tag name as a prefix automatically.
     * For use inside a component's function.
     * @example this.logger.warn("Hello");
     */
    warn(...msgs: unknown[]): void;
    /**
     * Local error wrapper that outputs the tag name as a prefix automatically.
     * For use inside a component's function.
     * @example this.logger.error("Hello");
     */
    error(...msgs: unknown[]): void;
    constructor(host: ReactiveElement);
    hostConnected(): void;
}
