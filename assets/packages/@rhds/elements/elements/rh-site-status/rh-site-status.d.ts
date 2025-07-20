import { LitElement } from 'lit';
import '@rhds/elements/rh-icon/rh-icon.js';
import '@rhds/elements/rh-spinner/rh-spinner.js';
import '@rhds/icons/ui/check-circle.js';
import '@rhds/icons/ui/check-circle-fill.js';
import '@rhds/icons/ui/warning-fill.js';
import '@rhds/icons/ui/warning.js';
import '@rhds/icons/ui/error.js';
import '@rhds/icons/ui/error-fill.js';
type Impact = 'none' | 'minor' | 'major' | 'critical';
type StatusKey = 'operational' | 'degraded_performance' | 'partial_outage' | 'major_outage';
interface Page {
    id?: string;
    name?: string;
    updated_at?: string;
    url: string;
}
/** @see https://metastatuspage.com/api#status */
interface Status {
    description: string;
    indicator: Impact;
}
/** @see https://metastatuspage.com/api#components */
interface Component {
    status: StatusKey;
    name: string;
    /** ISO-8601 Date time format string */
    created_at: string;
    /** ISO-8601 Date time format string */
    updated_at: string;
    position: number;
    description: string | null;
    showcase: boolean;
    /** ISO-8601 Date time format string */
    start_date: string | null;
    id: string;
    page_id: string;
    group_id: string | null;
    components: string[];
}
interface Incident {
    created_at: string;
    id: string;
    impact: Impact;
    name: string;
    page_id: string;
    status: 'investigating' | 'identified' | 'monitoring' | 'resolved' | 'postmortem';
    resolved_at: string | null;
    updated_at: string | null;
    shortlink: string;
    monitoring_at: string | null;
    incident_updates: unknown[];
}
/** @internal */
export interface SummaryResponse {
    page: Page;
    status: Status;
    components: Component[];
    incidents: Incident[];
}
/**
 * Website status communicates the operational status of a website or domain using a status icon and
 * link. It is usually located in the Footer component.
 *
 * @summary Communicates operational status of a website or domain
 *
 * @alias site-status
 *
 * @slot - loading-text - Text to display while loading the status defaults to "Loading"
 */
export declare class RhSiteStatus extends LitElement {
    #private;
    static readonly styles: CSSStyleSheet[];
    private static dataURI;
    private static fetchOptions;
    connectedCallback(): void;
    protected render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'rh-site-status': RhSiteStatus;
    }
}
export {};
