import { RhTabs } from '@rhds/elements/rh-tabs/rh-tabs.js';
import '@rhds/elements/rh-alert/rh-alert.js';
export declare class InstallationTabs extends RhTabs {
    #private;
    static stored: string | null;
    constructor();
    firstUpdated(): Promise<void>;
}
