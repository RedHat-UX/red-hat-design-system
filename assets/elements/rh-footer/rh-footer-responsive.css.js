import { css } from 'lit';
import { desktopLargeBreakpoint, mobileBreakpoint, mobileXlBreakpoint, tabletLandscapeBreakpoint, } from '../../lib/tokens.js';
export const responsiveStyles = css `
  @media screen and (min-width: ${mobileBreakpoint}) {
    .global-base {
      grid-template-columns: 4fr 4fr 4fr;
      grid-template-areas:
        'logo      logo      logo'
        'primary   primary   primary'
        'spacer    spacer    spacer'
        'secondary secondary tertiary';
    }
  }

  @media screen and (min-width: ${mobileXlBreakpoint}) {
    .global-base {
      grid-template-columns: auto 10fr 2fr;
      grid-template-rows: 32px max-content;
      grid-template-areas:
        'logo primary   tertiary'
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

  @media screen and (min-width: ${mobileXlBreakpoint}) {
    .spacer {
      display: none;
    }
  }

  @media screen and (min-width: ${mobileXlBreakpoint}) {
    .global-tertiary {
      display: grid;
      justify-content: flex-end;
      align-items: center;
    }
  }

  @media screen and (min-width: 500px) {
    .global-links-primary {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media screen and (min-width: ${mobileXlBreakpoint}) {
    .global-links-primary {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
    }
  }

  @media screen and (min-width: 500px) {
    .global-links-secondary {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media screen and (min-width: ${mobileBreakpoint}) {
    .global-links-secondary {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (min-width: ${mobileXlBreakpoint}) {
    .global-links-secondary {
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

  @media screen and (max-width: ${tabletLandscapeBreakpoint}) {
    /* Equalize padding on mobile */
    .section {
      --_section-side-gap: var(--rh-footer-section-side-gap, var(--rh-space-2xl, 32px));
    }

    /* hide the header border on mobile */
    .header:after {
      display: none;
    }

    /* force the mobile links menu to go flush against the header */
    .main {
      padding-top: 0;
    }

    .global-tertiary {
      margin-block-start: 16px;
    }
  }

  @media screen and (min-width: ${tabletLandscapeBreakpoint}) and (max-width: ${desktopLargeBreakpoint}) {
    /* Equalize padding on mobile */
    .section {
      --_section-side-gap: var(--rh-footer-section-side-gap, var(--rh-space-2xl, 32px));
    }

    .global-tertiary {
      margin-block-start: 16px;
    }

    .header,
    .main {
      /* switch header to use grid instead */
      display: grid;
      grid-template-columns: 8fr 4fr;
    }
  }

  @media screen and (min-width: ${desktopLargeBreakpoint}) {
    .section {
      --_section-side-gap: var(--rh-footer-section-side-gap, var(--rh-space-2xl, 32px));
    }

    .header,
    .main {
      /* switch header to use grid instead */
      display: grid;
      grid-template-columns: 8fr 4fr;
    }
  }

  @media screen and (min-width: ${mobileBreakpoint}) {
    .isMobile .links ::slotted(ul) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
//# sourceMappingURL=rh-footer-responsive.css.js.map