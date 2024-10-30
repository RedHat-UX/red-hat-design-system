import type { RepoStatusRecord } from '#11ty-data/repoStatus.js';
import { LitElement } from 'lit';
type Color = 'purple' | 'green' | 'orange' | 'gray' | 'cyan';
type Variant = 'filled' | 'outline';
type Icon = string;
type LibraryKey = 'figma' | 'rhds' | 'shared' | 'docs';
interface LibraryStatus {
    key: LibraryKey;
    name: string;
    status: string;
}
interface ComputedLibraryStatus extends LibraryStatus {
    name: string;
    color: Color;
    variant: Variant;
    icon: Icon;
    status: string;
    description: string;
}
export interface ComputedTagStatus extends Omit<RepoStatusRecord, 'libraries'> {
    color: Color;
    variant: Variant;
    icon: Icon;
    slug: string;
    libraries: ComputedLibraryStatus[];
}
export declare class UxdotRepoElement extends LitElement {
    private static libraries;
    private static legend;
    private static checklist;
    private static allStatus;
    private static getStatus;
    getStatus(): ComputedTagStatus[];
    getStatus(tagName: string): ComputedTagStatus;
}
export {};
