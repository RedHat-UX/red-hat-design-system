import { __decorate } from "tslib";
import { tokens as metaTokens } from '@rhds/tokens/meta.js';
import { tokens as allTokens } from '@rhds/tokens';
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { state } from 'lit/decorators/state.js';
import { StringListConverter } from '@patternfly/pfe-core';
import '@rhds/elements/rh-table/rh-table.js';
import { themable } from '@rhds/elements/lib/themable.js';
import './uxdot-copy-button.js';
import { css } from "lit";
const styles = css `samp.space:not(.swatch){width:var(--samp-space-size);aspect-ratio:1/1;outline:var(--rh-border-width-sm,1px) dashed var(--samp-space-color,var(--rh-color-surface-darkest,#151515));color:var(--samp-space-color,var(--rh-color-text-primary-on-light,#151515));position:relative;font-size:var(--rh-font-size-body-text-xs,.75rem)}samp.space:not(.swatch),samp.space:not(.swatch) span{display:flex;justify-content:center;align-items:center}samp.space:not(.swatch) span{line-height:1rem;min-height:100%}samp.space:not(.swatch):before{content:"";width:var(--samp-space-size);aspect-ratio:1/1;background-color:var(--samp-space-color,var(--rh-color-surface-darkest,#151515));opacity:.125;z-index:-1;position:absolute}samp.space:not(.swatch) span.offset{position:absolute;left:calc(var(--samp-space-size) + 2px)}samp.space.xs:not(.swatch):before{opacity:1}samp.space.sm:not(.swatch){color:#c58c00}samp.space.sm:not(.swatch):before{opacity:1}samp.space.md:not(.swatch){color:#51a549}samp.length:not(.swatch){width:var(--samp-length-size);background-color:var(--rh-color-surface-darkest,#151515);opacity:var(--rh-opacity-60,.6);display:block;border-bottom:2px solid var(--rh-color-border-strong-on-light,#151515);position:relative}samp.length:not(.swatch):after,samp.length:not(.swatch):before{content:" ";position:absolute;display:block;height:var(--rh-length-xs,4px);width:0;inset-block:calc(var(--rh-length-xs, 4px)*-1);border-style:solid;border-inline-width:var(--rh-border-width-md,2px) 0;border-color:var(--rh-color-border-interactive-on-light,#06c)}samp.length:not(.swatch):before{inset-inline:-2px 100%}samp.length:not(.swatch):after{inset-inline:100% 2px}samp.icon:not(.swatch){aspect-ratio:1;display:block;width:var(--samp-icon-size);border:var(--rh-border-width-md,2px) dotted var(--rh-color-border-strong)}samp.font:not(.swatch){font-size:var(--samp-font-size,var(--rh-font-size-body-text-md,1rem));font-family:var(--samp-font-family,var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif));font-weight:var(--samp-font-weight,var(--rh-font-weight-body-text-regular,400))}samp.font.heading:not(.swatch){font-size:var(--samp-font-size,var(--rh-font-size-heading-md,1.75rem));font-family:var(--rh-font-family-heading,RedHatDisplay,"Red Hat Display",Helvetica,Arial,sans-serif)}samp.font.code:not(.swatch){font-family:var(--rh-font-family-code,RedHatMono,"Red Hat Mono","Courier New",Courier,monospace)}samp.color:not(.swatch){color:var(--samp-color)}samp.color:not(.swatch):not(.border,.text){aspect-ratio:1;height:var(--rh-length-xl,24px);display:block;border-radius:100%;border:1px solid #0000;background:var(--samp-color)}samp.color:not(.swatch):not(.border,.text,.dark){border-color:var(--rh-color-border-strong-on-light,#151515)}samp.line-height:not(.swatch){line-height:var(--samp-line-height)}samp.box-shadow:not(.swatch){height:var(--rh-length-2xl,32px);aspect-ratio:1;border-radius:var(--rh-border-radius-default,3px);box-shadow:var(--samp-box-shadow);display:block}samp.border:not(.swatch){width:var(--rh-length-2xl,32px);aspect-ratio:2;display:block;border-style:solid;border-width:var(--samp-space-size,var(--rh-border-width-md,2px));border-color:var(--samp-color,var(--rh-color-border-strong-on-light,#151515));border-radius:var(--samp-radius,var(--rh-border-radius-default,3px))}samp.border.sm:not(.swatch){border-width:var(--samp-space-size,var(--rh-border-width-sm,1px))}samp.border.md:not(.swatch){border-width:var(--samp-space-size,var(--rh-border-width-md,2px))}samp.border.lg:not(.swatch){border-width:var(--samp-space-size,var(--rh-border-width-lg,3px))}samp.opacity:not(.swatch){opacity:var(--samp-opacity);background-color:#000;display:block;width:var(--rh-length-xl,24px);aspect-ratio:1}samp.breakpoint:not(.swatch) img{max-height:var(--rh-length-3xl,48px)}samp.swatch{width:max-content;border-radius:var(--rh-border-radius-pill,64px);border-width:var(--rh-border-width-sm,1px);border-style:solid;border-color:oklch(from var(--swatch-color) calc(l + var(--_offset)) c h);padding:var(--rh-space-xs,4px) var(--rh-space-md,8px);display:inline;position:relative}samp.swatch span{display:block;width:max-content;line-height:1;inset-block-end:4px}samp.swatch.color{transition-property:background-color,border-color;transition-duration:var(--rh-animation-speed,.3s);transition-timing-function:var(--rh-animation-timing,cubic-bezier(.465,.183,.153,.946));background-color:var(--swatch-color);font-family:var(--rh-font-family-body-text,RedHatText,"Red Hat Text",Helvetica,Arial,sans-serif);font-size:var(--rh-font-size-body-text-sm,.875rem)}samp.swatch.color.isLight{color:var(--rh-color-text-primary-on-light,#151515)}samp.swatch.color.isDark{color:var(--rh-color-text-primary-on-dark,#fff)}samp.swatch.font{color:var(--swatch-color);transition:color var(--rh-animation-speed,.3s) var(--rh-animation-timing,cubic-bezier(.465,.183,.153,.946));font-size:var(--rh-font-size-heading-lg,2.25rem);font-weight:var(--rh-font-weight-heading-bold,700);border-radius:var(--rh-border-radius-default,3px);padding:var(--rh-space-sm,6px) var(--rh-space-md,8px)}samp.swatch.font span:last-child{font-size:var(--rh-font-size-body-text-md,1rem)}samp.swatch.border{border-color:var(--swatch-color);border-width:var(--rh-border-width-lg,3px)}samp.swatch.icon{display:inline-flex;align-items:center;gap:var(--rh-space-xs,4px)}samp.swatch.icon rh-icon{color:var(--swatch-color)}`;
const assignBasename = (token) => !token.name ? token : ({
    ...token,
    baseName: token.name.replace(/^(--)?rh-space-/, ''),
});
const getToken = (name) => {
    const tokenName = `--rh-space-${name.trim().replace('--rh-space-', '')}`;
    return metaTokens.get(tokenName);
};
/**
 * Reads token data from @rhds/tokens and outputs a table for specified tokens
 */
let UxdotSpacerTokensTable = class UxdotSpacerTokensTable extends LitElement {
    constructor() {
        super(...arguments);
        this.caption = '';
        this.colorPalette = 'light';
        this.tokens = Array.from(allTokens.keys())
            .filter((x) => x.startsWith('--rh-space'));
        this.metaData = [];
    }
    render() {
        const metaData = this.tokens
            .map(getToken)
            .filter(x => !!x);
        return html `
      <!-- TODO: remove lightdom after implementing auto-load-->
      <link rel="stylesheet" href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css">
      <rh-table color-palette="${this.colorPalette}">
        <table>
          <caption>${this.caption}</caption>
          <thead>
            <tr>
              <th scope="col" data-label="Example">Example</th>
              <th scope="col" data-label="Token">Token</th>
              <th scope="col" data-label="Description">Description</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>${metaData
            .map(assignBasename)
            .map(token => html `
            <tr>
              <td data-label="Example">
                <samp class="${classMap({ space: true, [token.baseName]: true })}"
                  style="${styleMap({
            '--samp-space-size': token.$value,
            '--samp-space-color': token.$extensions['com.redhat.ux'].color,
        })}">
                  <span class="${classMap({ offset: parseInt(token.$value) < 16 })}">
                    ${token.baseName}
                  </span>
                </samp>
              </td>
              <td data-label="Token">
                <uxdot-copy-button>--${token.name}</uxdot-copy-button>
              </td>
              <td data-label="Description">${token.$description}</td>
              <td data-label="Copy">
                <div>
                  <uxdot-copy-button copy="var(--${token.name}, ${token.$value})"></uxdot-copy-button>
                  <a href="/tokens/space/#${token.name}">
                    <rh-icon icon="link" set="ui" aria-label="link"></rh-icon>
                  </a>
                </div>
              </td>
            </tr>`)}
          </tbody>
        </table>
      </rh-table>
      <slot></slot>
    `;
    }
};
UxdotSpacerTokensTable.styles = [styles];
__decorate([
    property()
], UxdotSpacerTokensTable.prototype, "caption", void 0);
__decorate([
    property({ attribute: 'color-palette' })
], UxdotSpacerTokensTable.prototype, "colorPalette", void 0);
__decorate([
    property({ converter: StringListConverter })
], UxdotSpacerTokensTable.prototype, "tokens", void 0);
__decorate([
    state()
], UxdotSpacerTokensTable.prototype, "metaData", void 0);
UxdotSpacerTokensTable = __decorate([
    themable,
    customElement('uxdot-spacer-tokens-table')
], UxdotSpacerTokensTable);
export { UxdotSpacerTokensTable };
//# sourceMappingURL=uxdot-spacer-tokens-table.js.map