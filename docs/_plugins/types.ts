/**
 * Shared TypeScript interfaces for element documentation data
 */

type OverallStatus = 'planned' | 'ready' | 'deprecated';
type LibraryStatus = OverallStatus | 'not-applicable';

export interface RepoStatusRecord {
  tagName: string;
  name: string;
  type: 'element' | 'pattern' | 'hidden';
  overallStatus: OverallStatus;
  libraries: {
    figma: LibraryStatus;
    rhds: LibraryStatus;
    shared: LibraryStatus;
    docs: LibraryStatus;
  };
  relatedItems?: string[];
  description?: string;
}

// Status values for individual elements
export type RepoStatus =
| LibraryStatus
| 'inProgress'
| 'beta'
| 'experimental'
| 'new'
| 'na';
