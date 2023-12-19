import { __decorate } from "tslib";
import { colorContextConsumer } from '../../lib/context/color/consumer.js';
import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators/property.js';
import { css } from "lit";
const style = css `:host{position:relative;display:block}#content{display:block;background-color:var(--rh-color-surface-lighter,#f2f2f2);border:var(--rh-border-width-sm,1px) solid var(--rh-color-border-subtle-on-light,#c7c7c7);border-block-start-width:var(--rh-code-block-border-block-start-width,var(--rh-border-width-sm,1px));padding:var(--rh-space-xl,24px);font-family:var(--rh-font-family-code, RedHatMono, "Red Hat Mono", "Courier New", Courier, monospace);color:var(--rh-color-text-primary-on-light,#151515);max-width:1000px;max-height:640px;height:calc(100% - 2 * var(--rh-space-xl,24px));overflow-y:auto;border-radius:var(--rh-border-radius-default,3px)}#content.dark{background-color:var(--rh-color-surface-darker,#1f1f1f);border-color:var(--rh-color-border-subtle-on-dark,#707070);color:var(--rh-color-text-secondary-on-dark,#c7c7c7)}#content::slotted(:is(script,pre)){display:inline;white-space:pre;color:inherit}:host([compact]) #content{padding:var(--rh-space-lg,16px);height:calc(100% - 2 * var(--rh-space-lg,16px))}:host([resizable]) #content{resize:vertical;overflow-x:scroll}.wrap::slotted(:is(script,pre)),:host([wrap]) #content::slotted(:is(script,pre)){white-space:pre-wrap}:host([full-height]) #content{max-height:initial}::slotted(pre){margin:0!important;padding:0!important;background:0 0!important;border:none!important}`;
/**
 * A code block is formatted text within a container.
 * @summary Formats code strings within a container
 * @slot - A non-executable script tag containing the sample content. JavaScript
 *         samples should use the type `text/sample-javascript`. HTML samples
 *         containing script tags must escape the closing `</script>` tag.
 */
let RhCodeBlock = class RhCodeBlock extends LitElement {
    constructor() {
        super(...arguments);
        /** When set, the code block displays with compact spacing */
        this.compact = false;
        /** When set, the code block is resizable */
        this.resizable = false;
        /** When set, the code block occupies it's full height, without scrolling */
        this.fullHeight = false;
    }
    render() {
        const { on = '' } = this;
        return html `
      <slot id="content" class="${classMap({ [on]: !!on })}"></slot>
    `;
    }
};
RhCodeBlock.styles = [style];
__decorate([
    property({ type: Boolean, reflect: true })
], RhCodeBlock.prototype, "compact", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], RhCodeBlock.prototype, "resizable", void 0);
__decorate([
    property({ type: Boolean, reflect: true, attribute: 'full-height' })
], RhCodeBlock.prototype, "fullHeight", void 0);
__decorate([
    colorContextConsumer()
], RhCodeBlock.prototype, "on", void 0);
RhCodeBlock = __decorate([
    customElement('rh-code-block')
], RhCodeBlock);
export { RhCodeBlock };
//# sourceMappingURL=rh-code-block.js.map