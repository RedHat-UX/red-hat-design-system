declare class Player {
    constructor(iframeOrID: string | HTMLIFrameElement, options?: {
        events?: {
            onReady?(event: Event): void;
        };
    });
    pauseVideo(): void;
}
declare global {
    interface Window {
        onYouTubeIframeAPIReady(): void;
        YT: {
            Player: typeof Player;
        };
    }
}
export declare function pauseVideo(iframe: HTMLIFrameElement): Promise<void>;
export {};
