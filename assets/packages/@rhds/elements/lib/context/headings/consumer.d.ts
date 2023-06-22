import { HeadingLevelController } from './controller.js';
export interface HeadingTemplateOptions {
    id?: string;
    hidden?: boolean;
    level?: number;
}
/**
 * Determines which heading level immediately precedes the host element,
 * and provides templates for shadow headings.
 */
export declare class HeadingLevelContextConsumer extends HeadingLevelController {
    #private;
    /** When a consumer connects, it requests context from the closest provider. */
    hostConnected(): void;
    /** When a consumer disconnects, it's removed from the list of consumers. */
    hostDisconnected(): void;
    /** Sets the heading level on the host and any children that requested multiple updates */
    update(next: number): void;
}
