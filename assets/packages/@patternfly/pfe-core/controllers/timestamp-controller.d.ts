import type { ReactiveController, ReactiveControllerHost } from 'lit';
export type DateTimeFormat = 'full' | 'long' | 'medium' | 'short';
export interface TimestampOptions {
    dateFormat?: DateTimeFormat;
    timeFormat?: DateTimeFormat;
    customFormat?: Intl.DateTimeFormatOptions;
    displaySuffix: string;
    locale: Intl.LocalesArgument;
    relative: boolean;
    utc: boolean;
    hour12: boolean;
}
export declare class TimestampController implements ReactiveController {
    #private;
    get localeString(): string;
    get date(): Date;
    set date(string: Date);
    get isoString(): string;
    get time(): string;
    constructor(host: ReactiveControllerHost, options?: Partial<TimestampOptions>);
    hostConnected?(): void;
    set(prop: PropertyKey, value: unknown): void;
}
