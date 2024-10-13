import { LitElement } from 'lit';
type Color = 'purple' | 'green' | 'orange' | 'gray' | 'cyan';
type Variant = 'filled' | 'outline';
type Icon = string;
type LibraryKey = 'figma' | 'rhds' | 'shared' | 'docs';
type StatusKey = 'planned' | 'inProgress' | 'ready' | 'deprecated' | 'na' | 'beta' | 'experimental' | 'new';
type OverallStatusKey = 'ready' | 'new' | 'planned';
interface LibraryStatus {
    key: LibraryKey;
    name: string;
    status: string;
}
export interface TagStatus {
    tagName: string;
    name: string;
    type: string;
    description?: string;
    overallStatus: OverallStatusKey;
    libraries: Record<LibraryKey, StatusKey>;
}
interface ComputedLibraryStatus extends LibraryStatus {
    name: string;
    color: Color;
    variant: Variant;
    icon: Icon;
    status: string;
    description: string;
}
export interface ComputedTagStatus extends Omit<TagStatus, 'libraries'> {
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
