import type { RepoStatusRecord, RepoStatus } from '../docs/_plugins/types.js';
type Color = 'purple' | 'green' | 'orange' | 'gray' | 'cyan';
type Variant = 'filled' | 'outline';
type Icon = string;
type LibraryKey = 'figma' | 'rhds' | 'shared' | 'docs';
interface Status {
    pretty: string;
    description?: string;
    color: Color;
    variant: Variant;
    icon: string;
}
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
export declare const libraries: Record<LibraryKey, string>;
export declare const legend: Record<RepoStatus, Status>;
export declare const checklist: Record<LibraryKey, Record<RepoStatus, string>>;
export {};
