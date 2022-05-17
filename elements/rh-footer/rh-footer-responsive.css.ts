import { css } from 'lit';

import {
  desktopLargeBreakpoint,
  mobileBreakpoint,
  mobileXlBreakpoint,
  tabletLandscapeBreakpoint,
} from '../../lib/tokens.js';

export const responsiveStyles = css`
  @media screen and (min-width: ${mobileBreakpoint}) {
    .footer {
      grid-template-columns: 4fr 4fr 4fr;
      grid-template-areas:
        'logo      logo      logo'
        'primary   primary   primary'
        'spacer    spacer    spacer'
        'secondary secondary tertiary';
    }
  }

  @media screen and (min-width: ${mobileXlBreakpoint}) {
    .footer {
      grid-template-columns: auto 10fr 2fr;
      grid-template-rows: 32px max-content;
      grid-template-areas:
        'logo primary   tertiary'
        'logo secondary tertiary';
      gap: 24px 32px;
    }

    .footer-primary {
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
    .footer-tertiary {
      display: grid;
      justify-content: flex-end;
      align-items: center;
    }
  }

  @media screen and (min-width: 500px) {
    .footer-links-primary {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media screen and (min-width: ${mobileXlBreakpoint}) {
    .footer-links-primary {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
    }
  }

  @media screen and (min-width: 500px) {
    .footer-links-secondary {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }

  @media screen and (min-width: ${mobileBreakpoint}) {
    .footer-links-secondary {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media screen and (min-width: ${mobileXlBreakpoint}) {
    .footer-links-secondary {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 8px 24px;
    }
  }

  @media screen and (max-width: ${tabletLandscapeBreakpoint}) {
    /* Add a bit more margin to the primary content on mobile */
    .main-primary {
      margin: calc(
          var(--pf-global--spacer--2xl, 48px) -
            var(--pf-global--spacer--xl, 32px)
        )
        0;
    }

    .footer-logo {
      grid-area: logo;
    }

    .footer-primary {
      grid-area: primary;
    }
  }

  @media screen and (max-width: ${tabletLandscapeBreakpoint}) {
    /* Equalize padding on mobile */
    .section {
      --_section-side-gap: var(
        --rh-footer-section-side-gap,
        var(--pf-global--spacer--3xl, 24px)
      );
    }

    .footer-tertiary {
      margin-block-start: 16px;
    }
  }

  @media screen and (min-width: ${tabletLandscapeBreakpoint}) and (max-width: ${desktopLargeBreakpoint}) {
    /* Equalize padding on mobile */
    .section {
      --_section-side-gap: var(
        --rh-footer-section-side-gap,
        var(--pf-global--spacer--3xl, 32px)
      );
    }

    .footer-tertiary {
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
      --_section-side-gap: var(
        --rh-footer-section-side-gap,
        var(--pf-global--spacer--3xl, 64px)
      );
    }

    .header,
    .main {
      /* switch header to use grid instead */
      display: grid;
      grid-template-columns: 8fr 4fr;
    }
  }

  @media screen and (min-width: ${mobileBreakpoint}) {
    :host([is-mobile]) .links ::slotted(ul) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
