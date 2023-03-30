import { css } from 'lit';

export const responsiveStyles = css`
  /* tabletPortraitBreakpoint -> BreakpointSm */
  @media screen and (min-width: 768px) {
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

  /* tabletLandscapeBreakpoint -> BreakpointMd */
  @media screen and (min-width: 992px) {
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

  /* tabletLandscapeBreakpoint -> BreakpointMd */
  @media screen and (min-width: 992px) {
    .spacer {
      display: none;
    }
  }

  /* tabletLandscapeBreakpoint -> BreakpointMd */
  @media screen and (min-width: 992px) {
    .global-tertiary {
      display: grid;
      justify-content: flex-end;
      align-items: center;
    }
  }

  /* mobilePortraitBreakpoint */
  /* mobilePortraitBreakpoint is out of sync with new token values */
  @media screen and (min-width: 320px) {
    .global-links-primary {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .global-links-secondary {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  /* tabletPortraitBreakpoint -> BreakpointSm */
  @media screen and (min-width: 768px) {
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

  /* tabletLandscapeBreakpoint -> BreakpointMd */
  @media screen and (min-width: 992px) {
    .global-links-primary {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
    }
  }

  /* tabletLandscapeBreakpoint -> BreakpointMd */
  @media screen and (min-width: 992px) {
    :not(.hasTertiary) .global-links-secondary {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 8px 24px;
    }
  }

  /* tabletLandscapeBreakpoint -> BreakpointMd */
  @media screen and (max-width: 992px) {
    .global-logo {
      grid-area: logo;
    }

    .global-primary {
      grid-area: primary;
    }
  }

  /* tabletLandscapeBreakpoint -> BreakpointMd */
  @media screen and (min-width: 992px) {
    /* only show the header border on >mobile */
    .header:after {
      display: block;
    }

    .main {
      padding-top: var(--rh-space-2xl, 32px);
      padding-bottom: var(--rh-space-4xl, 64px);
    }
  }

  /* min-width: tabletLandscapeBreakpoint -> BreakpointMd max-width: desktopLargeBreakpoint */
  /* desktopLargeBreakpoint is out of sync with new token values */
  @media screen and (min-width: 992px) and (max-width: 1368px) {
    .header,
    .main {
      /* switch header to use grid instead */
      display: grid;
      grid-template-columns: 8fr 4fr;
    }
  }

  /* desktopLargeBreakpoint */
  /* desktopLargeBreakpoint is out of sync with new token values */
  @media screen and (min-width: 1368px) {
    .header,
    .main {
      /* switch header to use grid instead */
      display: grid;
      grid-template-columns: 8fr 4fr;
    }
  }

  /* tabletPortraitBreakpoint -> BreakpointSm */
  @media screen and (min-width: 768px) {
    .isMobile .links ::slotted(ul) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
