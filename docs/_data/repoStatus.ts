/**
 * Guidelines:
 * Creating repoStatus data for a new component
 *
 * - tagName: rh-jazz-hands
 *   name: Jazz hands  - name should match the same format as sidenav, typically uppercase first word rest lower.
 *   type: element # element | hidden
 *   overallStatus: ready # na | planned | ready
 *   libraries:  - Dict of 4 name/status key values pairs (Figma library, RH Elements, RH Shared Libs, Documentation)
 *     figma: ready # ready | planned | na
 *     ...
 *
*/

export type RepoStatus =
  | 'planned'
  | 'inProgress'
  | 'ready'
  | 'deprecated'
  | 'na'
  | 'beta'
  | 'experimental'
  | 'new';

export interface RepoStatusLibraryRecord {
  figma: RepoStatus;
  rhds: RepoStatus;
  shared: RepoStatus;
  docs: RepoStatus;
}

export interface RepoStatusRecord {
  tagName: `rh-${string}`;
  type: 'element' | 'pattern' | 'hidden';
  /** pretty name, as appears in sidenav */
  name: string;
  /** Appears on the header of the docs page */
  description?: string;
  /** Controls the optional appearance of status tags in listings such as sidenav */
  overallStatus: RepoStatus;
  /** Controls the content of the repo status table element on docs pages */
  libraries: RepoStatusLibraryRecord;
}

export default [
  {
    tagName: 'rh-accordion',
    name: 'Accordion',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'ready',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-alert',
    name: 'Alert',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'ready',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-announcement',
    name: 'Announcement',
    type: 'element',
    overallStatus: 'new',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'planned',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-audio-player',
    name: 'Audio player',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'ready',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-avatar',
    name: 'Avatar',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'ready',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-back-to-top',
    name: 'Back to top',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'planned',
      docs: 'inProgress',
    },
  },
  {
    tagName: 'rh-badge',
    name: 'Badge',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'ready',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-blockquote',
    name: 'Blockquote',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'ready',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-breadcrumb',
    name: 'Breadcrumb',
    type: 'element',
    overallStatus: 'new',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'planned',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-button',
    name: 'Button',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'ready',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-cta',
    name: 'Call to action',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'ready',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-card',
    name: 'Card',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'ready',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-chip',
    name: 'Chip',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'planned',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-code-block',
    name: 'Code block',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'ready',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-dialog',
    name: 'Dialog',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'ready',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-disclosure',
    name: 'Disclosure',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'planned',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-footer',
    name: 'Footer',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'ready',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-footnote',
    name: 'Footnote',
    type: 'element',
    overallStatus: 'planned',
    libraries: {
      figma: 'planned',
      rhds: 'planned',
      shared: 'planned',
      docs: 'planned',
    },
  },
  {
    tagName: 'rh-health-index',
    name: 'Health index',
    type: 'element',
    overallStatus: 'new',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'planned',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-icon',
    name: 'Icon',
    type: 'element',
    overallStatus: 'new',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'planned',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-jump-links',
    name: 'Jump links',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'inProgress',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-menu',
    name: 'Menu',
    type: 'hidden',
    description: 'A subcomponent of rh-audio-player, hidden from end users.',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'planned',
      docs: 'planned',
    },
  },
  {
    tagName: 'rh-navigation-primary',
    name: 'Navigation (primary)',
    type: 'element',
    overallStatus: 'planned',
    libraries: {
      figma: 'planned',
      rhds: 'ready',
      shared: 'planned',
      docs: 'planned',
    },
  },
  {
    tagName: 'rh-navigation-secondary',
    name: 'Navigation (secondary)',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'ready',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-pagination',
    name: 'Pagination',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'ready',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-popover',
    name: 'Popover',
    type: 'element',
    overallStatus: 'ready',
    description: `A Popover displays content in a non-modal dialog and adds contextual information or provides resources via text and links.`,
    libraries: {
      figma: 'ready',
      rhds: 'planned',
      shared: 'planned',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-progress-steps',
    name: 'Progress steps',
    type: 'element',
    overallStatus: 'ready',
    description: `Progress steps guide a user through a task with multiple sequential steps toward the completion of a linear process.`,
    libraries: {
      figma: 'ready',
      rhds: 'planned',
      shared: 'planned',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-scheme-toggle',
    name: 'Scheme toggle',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'planned',
      rhds: 'ready',
      shared: 'planned',
      docs: 'planned',
    },
  },
  {
    tagName: 'rh-site-status',
    name: 'Site status',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'planned',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-skip-link',
    name: 'Skip link',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'planned',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-spinner',
    name: 'Spinner',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'ready',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-stat',
    name: 'Statistic',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'ready',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-subnav',
    name: 'Subnavigation',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'ready',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-surface',
    name: 'Surface',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'ready',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-switch',
    name: 'Switch',
    type: 'element',
    overallStatus: 'new',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'planned',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-table',
    name: 'Table',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'ready',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-tabs',
    name: 'Tabs',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'ready',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-tag',
    name: 'Tag',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'inProgress',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-tile',
    name: 'Tile',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'ready',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-timestamp',
    name: 'Timestamp',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'ready',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-tooltip',
    name: 'Tooltip',
    type: 'element',
    overallStatus: 'ready',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'ready',
      docs: 'ready',
    },
  },
  {
    tagName: 'rh-video-embed',
    name: 'Video embed',
    type: 'element',
    overallStatus: 'new',
    libraries: {
      figma: 'ready',
      rhds: 'ready',
      shared: 'planned',
      docs: 'ready',
    },
  },
] satisfies RepoStatusRecord[];
