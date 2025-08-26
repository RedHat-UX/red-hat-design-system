import type { RepoStatusRecord, RepoStatus } from '../docs/_plugins/types.js';

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

export const libraries: Record<LibraryKey, string> = {
  figma: 'Figma library',
  rhds: 'RH Elements',
  shared: 'RH Shared Libs',
  docs: 'Documentation',
};

export const legend: Record<RepoStatus, Status> = {
  'planned': {
    pretty: 'Planned',
    description: 'Ready to be worked on or ready to be released',
    color: 'purple',
    variant: 'filled',
    icon: 'notification-fill',
  },
  'inProgress': {
    pretty: 'In Progress',
    description: 'In the design or development process',
    color: 'green',
    variant: 'outline',
    icon: 'harvey-ball-50',
  },
  'ready': {
    pretty: 'Ready',
    description: 'Ready to use and approved by all team members',
    color: 'green',
    variant: 'filled',
    icon: 'check-circle-fill',
  },
  'deprecated': {
    pretty: 'deprecated',
    description: 'No longer supported by RHDS',
    color: 'orange',
    variant: 'filled',
    icon: 'close-circle-fill',
  },
  'na': {
    pretty: 'N/A',
    description: 'Not planned, not available, or does not apply',
    color: 'gray',
    variant: 'outline',
    icon: 'ban',
  },
  'not-applicable': {
    pretty: 'Not Applicable',
    description: 'Not planned, not available, or does not apply',
    color: 'gray',
    variant: 'outline',
    icon: 'ban',
  },
  'beta': {
    pretty: 'Beta',
    description: 'Beta version available',
    color: 'cyan',
    variant: 'outline',
    icon: 'notification',
  },
  'experimental': {
    pretty: 'Experimental',
    description: 'Experimental version available',
    color: 'orange',
    variant: 'outline',
    icon: 'warning-triangle',
  },
  'new': {
    pretty: 'New',
    description: 'Recently released',
    color: 'green',
    variant: 'outline',
    icon: 'sparkle',
  },
};

export const checklist: Record<LibraryKey, Record<RepoStatus, string>> = {
  figma: {
    'ready': 'Component is available in the Figma library',
    'planned': 'Component will be added to the Figma library',
    'inProgress': 'Component is being designed in Figma',
    'deprecated': 'Component is deprecated in the Figma library',
    'na': 'Component is not applicable for Figma',
    'not-applicable': 'Component is not applicable for Figma',
    'beta': 'Component is in beta in the Figma library',
    'experimental': 'Component is experimental in the Figma library',
    'new': 'Component is newly added to the Figma library',
  },
  rhds: {
    'ready': 'Component is available in RH Elements',
    'planned': 'Component will be added to RH Elements',
    'inProgress': 'Component is being developed for RH Elements',
    'deprecated': 'Component is deprecated in RH Elements',
    'na': 'Component is not applicable for RH Elements',
    'not-applicable': 'Component is not applicable for RH Elements',
    'beta': 'Component is in beta in RH Elements',
    'experimental': 'Component is experimental in RH Elements',
    'new': 'Component is newly added to RH Elements',
  },
  shared: {
    'ready': 'Component is available in RH Shared Libs',
    'planned': 'Component will be added to RH Shared Libs',
    'inProgress': 'Component is being developed for RH Shared Libs',
    'deprecated': 'Component is deprecated in RH Shared Libs',
    'na': 'Component is not applicable for RH Shared Libs',
    'not-applicable': 'Component is not applicable for RH Shared Libs',
    'beta': 'Component is in beta in RH Shared Libs',
    'experimental': 'Component is experimental in RH Shared Libs',
    'new': 'Component is newly added to RH Shared Libs',
  },
  docs: {
    'ready': 'Component documentation is complete',
    'planned': 'Component documentation will be written',
    'inProgress': 'Component documentation is being written',
    'deprecated': 'Component documentation is deprecated',
    'na': 'Component documentation is not applicable',
    'not-applicable': 'Component documentation is not applicable',
    'beta': 'Component documentation is in beta',
    'experimental': 'Component documentation is experimental',
    'new': 'Component documentation is newly added',
  },
};
