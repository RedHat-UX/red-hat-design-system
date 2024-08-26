import type { Context } from '@lit/context';
import type { PfTab } from './pf-tab.js';
export interface PfTabsContext {
    activeTab: PfTab | undefined;
    box: 'light' | 'dark' | null;
    fill: boolean;
    vertical: boolean;
    manual: boolean;
    borderBottom: 'true' | 'false';
}
export declare class TabExpandEvent<Tab> extends Event {
    tab: Tab;
    constructor(tab: Tab);
}
export declare const context: Context<unknown, PfTabsContext>;
