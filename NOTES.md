## rh-footer

- The `--rh-footer-nojs-min-height` CSS custom property is marked deprecated in the CSS but still documented as a `@cssprop`. A designer should confirm whether it can be removed or if a migration path is needed.
- The `rh-footer-block` sub-component has no class-level JSDoc or `@summary` tag. A designer should provide a concise purpose description for the design system documentation site.
- The `rh-footer-universal` component detects parent `<footer>` and `<h2>` elements by walking up the DOM tree. A designer should verify this heuristic works reliably in all supported CMS and framework rendering contexts.
- The social links region uses a hardcoded `aria-label="Red Hat social media links"`. A designer should confirm whether this label should be configurable for localization or product-specific social accounts.
- The accordion breakpoint for mobile link columns is tied to the `'md'` screen size token. A designer should confirm this threshold (992px) matches the intended responsive design specification.
- The `rh-footer-copyright` component auto-generates the year from `new Date().getFullYear()` at module load time. A designer should confirm whether this is acceptable for server-side rendering and static site generation contexts where the build year may differ from the display year.

## rh-code-block

- The `--rh-code-block-callout-size` and `--rh-code-block-border-block-start-width` are the only public CSS custom properties. A designer should evaluate whether additional hooks (e.g., code font size, container max-width, background color) should be exposed for consumer customization.
- The `legend` slot for callout annotations has no design documentation. A designer should provide layout and content guidance for using callout badges within code blocks.

## rh-jump-links

- The horizontal orientation hides nested `<rh-jump-links-list>` children entirely. A designer should confirm whether this is intentional or if a dropdown/popover pattern should be supported for nested links in horizontal mode.
- There is no built-in responsive behavior (e.g., switching from vertical to horizontal at a breakpoint). A designer should provide guidance on composing jump links with a disclosure element for mobile viewports.
- The `toggle` event is documented but does not carry detail data. A designer should evaluate whether the expanded state should be included in the event detail.
- The scroll spy `rootMargin` is set to `'0px 0px 0px 0px'` which may not align well with sticky headers. A designer should confirm whether an offset should be configurable.

## rh-navigation-secondary

- The `accessible-label` property defaults to `"secondary"` which is generic. A designer should recommend whether the default should include the product name or if documentation should more strongly encourage overriding this value.
- The `--rh-navigation-secondary-z-index` defaults to 102, matching the primary navigation z-index. A designer should confirm whether these should be differentiated when both navigations are visible simultaneously.
- The `layout` attribute on `rh-navigation-secondary-menu` accepts `'fixed-width'` and `'full-width'` but there is no design guidance on when to use `'fixed-width'`. A designer should provide usage recommendations.
- The current page indicator relies on consumers applying `aria-current="page"` manually. A designer should evaluate whether a utility or helper should be provided to simplify this integration for common CMS platforms.

## rh-back-to-top

- The component renders an `<a>` element but has no explicit ARIA role. A designer should confirm whether `role="navigation"` or an `aria-label` on the host would improve screen reader discovery, especially since the button is position-fixed and outside the normal content flow.
- The `scrollable-selector` attribute silently fails if the target element is not found. A designer should decide whether a console warning or visual indicator is appropriate when the selector does not match any element.
- The z-index is hardcoded to 1000. A designer should confirm this value does not conflict with other fixed/sticky elements (e.g., navigation, dialogs) and whether it should be exposed as a CSS custom property.
- The 400px default `scroll-distance` is not documented in the design guidelines. A designer should confirm this threshold matches the intended design specification for various page lengths.
- There is no `@fires` event for visibility changes. A designer should evaluate whether a `visible-change` event would help integrations that need to coordinate with other floating UI elements.

## rh-badge

- The badge has no implicit ARIA role and is not focusable. A designer should confirm whether `role="status"` or `aria-live="polite"` should be added when badge counts update dynamically (e.g., real-time notification counts).
- There is no maximum width constraint on the badge. A designer should confirm whether extremely large numbers (before threshold kicks in) should be handled with overflow or truncation.

## rh-button

- The `danger` boolean combines with `variant` but only `primary` and `secondary` have explicit danger CSS rules. A designer should confirm whether `danger` + `tertiary` is an unsupported combination and whether it should produce a console warning.
- The active/focus/hover colors for danger state use non-token hardcoded values (`#a30000`, `#ff7468`, `#c9190b`, `#fe5142`). A designer should confirm these are intentional or whether design tokens should be created for them.
- The `link` variant is defined in CSS but not included in the TypeScript `variant` type union. A designer should confirm whether `link` is a supported variant or deprecated, and update the type accordingly.
- The play button icon uses a `translate: 10%` hack for perceptual centering. A designer should confirm this offset is correct across icon sizes and whether it should be a design token.
- There is no `@fires` event for button clicks. A designer should evaluate whether a custom event (beyond the native `click`) is needed for framework integrations that want detail about the button's variant, type, or form association.

## rh-card

- The card has no ARIA role or landmark on the host element. A designer should confirm whether `role="region"` with an `aria-label` derived from the header slot content would improve screen reader navigation in card-heavy layouts.
- The promo variant automatically computes color palette by stripping `-er`/`-est` suffixes and reapplying them. A designer should confirm this automatic palette mapping is intuitive and whether it should be documented more prominently.
- The card does not fire any custom events (e.g., no slot-change or variant-change events). A designer should evaluate whether events would improve framework integrations.
- The `full-width` attribute only applies when `variant="promo"` but there is no runtime warning when used without the promo variant. A designer should decide whether a console warning is appropriate.
- The card has no explicit keyboard interaction patterns since it delegates to slotted interactive elements. A designer should confirm whether any card-level focus management is needed for single-link card patterns where the entire surface should be clickable.

## rh-cta

- The CTA has no ARIA role on the host element. A designer should confirm whether the shadow DOM link delegation provides sufficient accessible semantics across all screen reader and browser combinations.
- The `<button>` tag is not supported with the default (no variant) style but no runtime error is thrown, only a console warning. A designer should decide whether this should be enforced more strictly.
- The lightdom CSS shim (`rh-cta-lightdom-shim.css`) duplicates many color values with hardcoded hex fallbacks that may drift from design tokens. A designer should confirm whether a build step should synchronize these.
- The font-weight is hardcoded at `600` with a comment "WARNING: not a token value". A designer should confirm whether a design token should be created for this value.
- The brick variant stretches to 100% width but there is no maximum width constraint. A designer should confirm whether a max-width should be applied in certain layout contexts.

## rh-icon

- The icon element uses `role="presentation"` by default but does not set an explicit `aria-hidden`. A designer should confirm whether the ElementInternals-based role assignment is reliably picked up by all supported screen readers.
- The `loading="lazy"` default uses IntersectionObserver, which means icons above the fold may flash in during initial render. A designer should confirm whether icons in critical above-fold positions should default to `loading="eager"`.
- The `standard` set defaults to 40px while `ui` defaults to 16px. A designer should confirm whether there are use cases where these defaults cause unexpected size jumps when switching sets on the same element.
- The `resolve` static method is public and replaceable, allowing custom icon sources. A designer should provide guidance on when and how consumers should use this API, and whether icon caching behavior is expected.
- The fallback slot content is hidden once the icon loads but there is no transition. A designer should evaluate whether a fade-in transition would improve perceived loading quality.
