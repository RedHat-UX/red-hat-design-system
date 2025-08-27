import { LitElement } from 'lit';
import type { RepoStatus } from '../docs/_plugins/types.js';
import '@rhds/elements/rh-table/rh-table.js';
import '@rhds/elements/rh-tag/rh-tag.js';
export declare class UxdotRepoStatusChecklist extends LitElement {
    static styles: CSSStyleSheet[];
    figmaStatus?: RepoStatus;
    rhdsStatus?: RepoStatus;
    sharedStatus?: RepoStatus;
    private getStatusInfo;
    private getStatusDescription;
    render(): import("lit-html").TemplateResult<1>;
}
