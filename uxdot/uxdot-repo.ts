import type { RepoStatus, RepoStatusRecord } from '#11ty-data/repoStatus.js';
import { isServer, LitElement } from 'lit';

type Color = 'purple' | 'green' | 'orange' | 'gray' | 'cyan';
type Variant = 'filled' | 'outline';
type Icon = string;

type LibraryKey =
| 'figma'
| 'rhds'
| 'shared'
| 'docs';

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

const repoStatus: RepoStatusRecord[] =
    isServer ? await import('#11ty-data/repoStatus.js').then(x => x.default)
  : await fetch('/assets/javascript/repoStatus.json').then(x => x.json());

export class UxdotRepoElement extends LitElement {
  private static libraries: Record<LibraryKey, string> = {
    figma: 'Figma library',
    rhds: 'RH Elements',
    shared: 'RH Shared Libs',
    docs: 'Documentation',
  };

  private static legend: Record<RepoStatus, Status> = {
    planned: {
      pretty: 'Planned',
      description: 'Ready to be worked on or ready to be released',
      color: 'purple',
      variant: 'filled',
      icon: 'notification-fill',
    },
    inProgress: {
      pretty: 'In Progress',
      description: 'In the design or development process',
      color: 'green',
      variant: 'outline',
      icon: 'harvey-ball-50',
    },
    ready: {
      pretty: 'Ready',
      description: 'Ready to use and approved by all team members',
      color: 'green',
      variant: 'filled',
      icon: 'check-circle-fill',
    },
    deprecated: {
      pretty: 'deprecated',
      description: 'No longer supported by RHDS',
      color: 'orange',
      variant: 'filled',
      icon: 'close-circle-fill',
    },
    na: {
      pretty: 'N/A',
      description: 'Not planned, not available, or does not apply',
      color: 'gray',
      variant: 'outline',
      icon: 'ban',
    },
    beta: {
      pretty: 'Beta',
      color: 'purple',
      variant: 'outline',
      icon: 'build-fill',
    },
    experimental: {
      pretty: 'Experimental',
      color: 'orange',
      variant: 'outline',
      icon: 'experimental',
    },
    new: {
      pretty: 'New',
      color: 'cyan',
      variant: 'outline',
      icon: 'new-fill',
    },
  };

  private static checklist: Record<LibraryKey, Record<RepoStatus, string>> = {
    figma: {
      ready: 'Component is available in the Figma library',
      inProgress: 'Component will be added to the Figma library when finished',
      planned: 'Component should be added to the Figma library at a later date',
      deprecated: 'Component was removed from the Figma library',
      na: 'Not planned, not available, or does not apply',
      beta: '',
      experimental: '',
      new: '',
    },
    rhds: {
      ready: 'Component is available in the RH Elements repo',
      inProgress: 'Component will be added to the RH Elements repo when finished',
      planned: 'Component should be added to the RH Elements repo at a later date',
      deprecated: 'Component is no longer available in the RH Elements repo',
      na: 'Not planned, not available, or does not apply',
      beta: '',
      experimental: '',
      new: '',
    },
    shared: {
      ready: 'Component is available in the RH Shared Libs repo',
      inProgress: 'Component will be added to the RH Shared Libs repo when finished',
      planned: 'Component should be added to the RH Shared Libs repo at a later date',
      deprecated: 'Component is no longer available in the RH Shared Libs repo',
      na: 'Not planned, not available, or does not apply',
      beta: '',
      experimental: '',
      new: '',
    },
    docs: {
      ready: '',
      inProgress: '',
      planned: '',
      deprecated: '',
      na: '',
      beta: '',
      experimental: '',
      new: '',
    },
  };

  private static allStatus: ComputedTagStatus[] = repoStatus.map(UxdotRepoElement.getStatus);

  private static getStatus(status: RepoStatusRecord) {
    const libraries = Object.entries(status.libraries) as [LibraryKey, RepoStatus][];
    const overall = UxdotRepoElement.legend[status.overallStatus];
    return {
      ...status!,
      color: overall.color,
      variant: overall.variant,
      icon: overall.icon,
      slug: status.name.toLowerCase().replace(/\s+/, '-'),
      libraries: libraries.flatMap(([key, status]) => {
        const legend = UxdotRepoElement.legend[status];
        return !legend ? [] : [{
          key,
          name: UxdotRepoElement.libraries[key],
          color: legend.color,
          variant: legend.variant,
          icon: legend.icon,
          status: legend.pretty,
          description: UxdotRepoElement.checklist[key]?.[status] ?? '',
        }];
      }),
    };
  }

  getStatus(): ComputedTagStatus[];
  getStatus(tagName: string): ComputedTagStatus;
  getStatus(tagName?: string) {
    if (tagName) {
      return UxdotRepoElement.allStatus.find(x => x.tagName === tagName);
    } else {
      return UxdotRepoElement.allStatus;
    }
  }
}
