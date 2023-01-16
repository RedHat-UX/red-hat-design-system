import type { ColorPalette } from '../../lib/context/color.js';
import { LitElement } from 'lit';
import './rh-footer-social-link.js';
import './rh-footer-links.js';
import './rh-footer-block.js';
import './rh-global-footer.js';
import '@patternfly/pfe-icon';
import '@rhds/elements/rh-accordion/rh-accordion.js';
/**
 * @element rh-footer
 * @csspart base - main footer element, containing all footer content
 * @slot    base - Overrides everything. Do not use.
 * @slot    header - Overrides `header-*`, `logo`, `social-links`
 * @csspart header - footer header, typically containing main logo and social links
 * @slot    header-primary - primary footer header content, e.g. main logo. Overrides `logo`
 * @csspart header-primary - primary footer header content, e.g. main logo
 * @slot    header-secondary - secondary footer header content, e.g. social links. Overrides `social-links`
 * @csspart header-secondary - secondary footer header content, e.g. social links
 * @slot    logo - main page or product logo. Defaults to Red Hat corporate logo
 * @csspart logo - main page or product logo container
 * @slot    social-links - social media links (icons). Contains a default set of links
 * @csspart social-links - social links container `<rh-footer-links>`
 * @slot    main - main footer content. Overrides `main-*`
 * @csspart main - main content container.
 * @slot    main-primary - main footer region. typically a columnar grid
 * @csspart main-primary - container for main footer links
 * @slot    links - main footer links
 * @csspart links - container for main footer links
 * @csspart links-accordion-header - mobile links accordion header element
 * @csspart links-accordion-panel - mobile links panel container element
 * @slot    main-secondary - typically contains prose or promotional content
 * @csspart main-secondary - container fro prose or promotional content
 * @slot    global - must contain `<rh-global-footer>`
 *
 * @cssprop --rh-footer-icon-color - {@default #8a8d90}
 * @cssprop --rh-footer-icon-color-hover - {@default #b8bbbe}
 * @cssprop --rh-footer-border-color - {@default #6a6e73}
 * @cssprop --rh-footer-accent-color - {@default #e00}
 * @cssprop --rh-footer-section-side-gap - {@default 32px}
 * @cssprop --rh-footer-links-gap - {@default 8px}
 * @cssprop --rh-footer-link-header-font-size - {@default 0.875em}
 * @cssprop --rh-footer-nojs-min-height - {@default 750px}
 */
export declare class RhFooter extends LitElement {
    #private;
    static readonly version = "{{version}}";
    static readonly styles: import("lit").CSSResult[];
    /**
     * Isomorphic import.meta.url function
     * Requires a node.js dom shim that sets window.location
     */
    static getImportURL(relativeLocation: string | URL): string | URL;
    colorPalette: ColorPalette;
    connectedCallback(): void;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * Get any `<ul>`s that are in the designated link slots
     * and syncronously update each list and header if we need to.
     */
    updateAccessibility(): void;
}
