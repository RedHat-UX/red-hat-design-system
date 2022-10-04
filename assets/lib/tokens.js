import { unsafeCSS } from 'lit';
// @todo: these are fake tokens, these need substituted with our design tokens
export const mobilePortraitBreakpoint = unsafeCSS `320px`;
export const mobileLandscapeBreakpoint = unsafeCSS `576px`;
export const tabletPortraitBreakpoint = unsafeCSS `768px`;
export const tabletLandscapeBreakpoint = unsafeCSS `992px`;
export const desktopSmallBreakpoint = unsafeCSS `1200px`;
export const desktopLargeBreakpoint = unsafeCSS `1368px`;
export const pfGlobalSpacer = {
    xs: '--pf-global--spacer--xs',
    sm: '--pf-global--spacer--sm',
    md: '--pf-global--spacer--md',
    lg: '--pf-global--spacer--lg',
    xl: '--pf-global--spacer--xl',
    twoXL: '--pf-global--spacer--2xl',
    threeXL: '--pf-global--spacer--3xl',
    fourXL: '--pf-global--spacer--4xl', // 80px
};
//# sourceMappingURL=tokens.js.map