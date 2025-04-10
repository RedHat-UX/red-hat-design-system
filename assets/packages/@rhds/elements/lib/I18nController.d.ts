import { type ReactiveController, type ReactiveElement } from 'lit';
export type LanguageCode = string;
export type Microcopy = Record<LanguageCode, Record<string, string>>;
export declare class I18nController implements ReactiveController {
    #private;
    private host;
    language: string;
    constructor(host: ReactiveElement, defaults: Microcopy);
    hostConnected(): void;
    hostDisconnected(): void;
    update(): void;
    loadTranslation(url: URL, lang?: LanguageCode, force?: boolean): Promise<this | undefined>;
    get(key: string, lang?: LanguageCode): string;
    set(key: string, value: string, lang?: LanguageCode): this;
    clear(lang?: LanguageCode): void;
    clearAll(): void;
    delete(key: string, lang?: LanguageCode): boolean;
    join(obj: Microcopy[LanguageCode], lang?: LanguageCode): this;
    toJSON(): {
        [k: string]: {
            [k: string]: string;
        };
    };
}
