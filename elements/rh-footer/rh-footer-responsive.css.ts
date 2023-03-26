import { css } from 'lit';

import {
  mobilePortraitBreakpoint,
  tabletPortraitBreakpoint,
  tabletLandscapeBreakpoint,
  desktopLargeBreakpoint,
} from '../../lib/tokens.js';

export const responsiveStyles = css`
  @media screen and (min-width: ${tabletPortraitBreakpoint}) {
    .global-base {
      grid-template-columns: 4fr 4fr 4fr;
      grid-template-areas:
        'logo      logo      logo'
        'primary   primary   primary'
        'spacer    spacer    spacer'
        'secondary secondary secondary';
    }
    .global-base:is(.hasTertiary) {
      grid-template-columns: 4fr 4fr 4fr;
      grid-template-areas:
        'logo      logo      logo'
        'primary   primary   primary'
        'spacer    spacer    spacer'
        'secondary secondary tertiary';
    }
  }

  @media screen and (min-width: ${tabletLandscapeBreakpoint}) {
    /* :not(.nothing) is a hack to match CSS specificity with :is(.hasTertiary) */
    .global-base:not(.nothing) {
      grid-template-columns: auto 10fr 2fr;
      grid-template-rows: max-content max-content;
      grid-template-areas:
        'logo primary  tertiary'
        'logo secondary tertiary';
      gap: 24px 32px;
    }

    .global-primary {
      display: flex;
    }
  }

  .spacer {
    grid-area: spacer;
    border-bottom: 1px solid var(--_border-color);
  }

  @media screen and (min-width: ${tabletLandscapeBreakpoint}) {
    .spacer {
      display: none;
    }
  }

  @media screen and (min-width: ${tabletLandscapeBreakpoint}) {
    .global-tertiary {
      display: grid;
      justify-content: flex-end;
      align-items: center;
    }
  }

  @media screen and (min-width: ${mobilePortraitBreakpoint}) {
    .global-links-primary {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .global-links-secondary {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (min-width: ${tabletPortraitBreakpoint}) {
    .global-links-primary {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }

    .global-links-secondary {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }

    .hasTertiary .global-links-secondary {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (min-width: ${tabletLandscapeBreakpoint}) {
    .global-links-primary {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
    }
  }

  @media screen and (min-width: ${tabletLandscapeBreakpoint}) {
    :not(.hasTertiary) .global-links-secondary {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 8px 24px;
    }
  }

  @media screen and (max-width: ${tabletLandscapeBreakpoint}) {
    .global-logo {
      grid-area: logo;
    }

    .global-primary {
      grid-area: primary;
    }
  }

  @media screen and (min-width: ${tabletLandscapeBreakpoint}) {
    /* only show the header border on >mobile */
    .header:after {
      display: block;
    }

    .main {
      padding-top: var(--rh-space-2xl, 32px);
      padding-bottom: var(--rh-space-4xl, 64px);
    }
  }

  @media screen and (min-width: ${tabletLandscapeBreakpoint}) and (max-width: ${desktopLargeBreakpoint}) {
    .header,
    .main {
      /* switch header to use grid instead */
      display: grid;
      grid-template-columns: 8fr 4fr;
    }
  }

  @media screen and (min-width: ${desktopLargeBreakpoint}) {
    .header,
    .main {
      /* switch header to use grid instead */
      display: grid;
      grid-template-columns: 8fr 4fr;
    }
  }

  @media screen and (min-width: ${tabletPortraitBreakpoint}) {
    .isMobile .links ::slotted(ul) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
