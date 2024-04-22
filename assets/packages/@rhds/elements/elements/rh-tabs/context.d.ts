import type { RhTab } from './rh-tab.js';
export interface RhTabsContext {
    activeTab?: RhTab;
    firstTab?: RhTab;
    lastTab?: RhTab;
    box?: 'box' | 'inset';
    manual: boolean;
    vertical: boolean;
}
export declare const context: {
    __context__: RhTabsContext;
};
