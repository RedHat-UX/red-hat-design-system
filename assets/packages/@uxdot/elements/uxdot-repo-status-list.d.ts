import { LitElement } from 'lit';
import type { RepoStatus } from '../docs/_plugins/types.js';
export declare class UxdotRepoStatusList extends LitElement {
    static styles: CSSStyleSheet[];
    figmaStatus?: RepoStatus;
    rhdsStatus?: RepoStatus;
    sharedStatus?: RepoStatus;
    private getStatusInfo;
    render(): import("lit-html").TemplateResult<1>;
}
