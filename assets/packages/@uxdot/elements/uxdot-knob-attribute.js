var _UxdotKnobAttribute_instances, _UxdotKnobAttribute_values, _UxdotKnobAttribute_iconSet, _UxdotKnobAttribute_icons, _UxdotKnobAttribute_typeMembers, _UxdotKnobAttribute_computeValues, _UxdotKnobAttribute_computeIcons, _UxdotKnobAttribute_getValueForCheckboxes, _UxdotKnobAttribute_firstChange, _UxdotKnobAttribute_onChange;
import { __classPrivateFieldGet, __classPrivateFieldSet, __decorate } from "tslib";
import { LitElement, html, isServer } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';
import { icons } from '@rhds/icons/metadata.js';
import { css } from "lit";
const styles = css `li{list-style-type:none;padding:0;margin:0;margin-block:0}li .checkbox-group,li>label{display:flex;align-items:center}li>label{padding-block-end:var(--pf-c-form__group-label--PaddingBottom,8px);font-size:var(--pf-c-form__label--FontSize,16px);line-height:var(--pf-c-form__label--LineHeight,1.5rem)}li rh-tooltip{--rh-color-interactive-primary-default:var(--rh-color-icon-subtle);margin-block-start:var(--rh-space-sm,6px)}#knob-title{font-size:var(--rh-font-size-body-text-sm,.875rem)}#knob[type=text]{box-sizing:border-box;display:flex;flex:1 0 auto;min-width:44px;font-family:var(--pf-global--FontFamily--sans-serif);font-weight:var(--pf-global--FontWeight--normal,400);color:var(--pf-c-form-control--Color,#151515);width:var(--pf-c-form-control--Width,100%);height:var(--pf-c-form-control--Height,36px);line-height:var(--pf-c-form-control--LineHeight,24px);padding-block:var(--pf-c-form-control--PaddingTop,8px) var(--pf-c-form-control--PaddingBottom,8px);padding-inline:var(--pf-c-form-control--PaddingLeft,8px) var(--pf-c-form-control--PaddingRight,8px);font-size:var(--pf-c-form-control--FontSize);background-color:var(--pf-c-form-control--BackgroundColor,#fff);background-repeat:no-repeat;border:var(--pf-c-form-control--BorderWidth,1px) solid;border-color:var(--pf-c-form-control--BorderTopColor,#d2d2d2) var(--pf-c-form-control--BorderRightColor,#d2d2d2) var(--pf-theme--color--text,#151515) var(--pf-c-form-control--BorderLeftColor,#d2d2d2);border-radius:var(--pf-c-form-control--BorderRadius);appearance:none}pf-option{--rh-icon-size:var(--rh-size-icon-03)}button.toggletip{background:none;border:none;padding:none;margin:none;outline:none}button.toggletip rh-icon{color:var(--rh-color-interactive-primary-default)}button.toggletip:is(:focus,:hover){outline:none}button.toggletip:is(:focus,:hover) rh-icon{color:var(--rh-color-interactive-primary-hover)}`;
import '@rhds/elements/rh-switch/rh-switch.js';
import '@rhds/elements/rh-tabs/rh-tabs.js';
import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';
import { observes } from '@patternfly/pfe-core/decorators.js';
const dequote = (x) => x.replace(/^\s*['"]([^'"]+)['"].*$/m, '$1');
const ARRAY_OF_PAREN_TYPE_RE = /^\((.*)\)\[\]$/;
let UxdotKnobAttribute = class UxdotKnobAttribute extends LitElement {
    constructor() {
        super(...arguments);
        _UxdotKnobAttribute_instances.add(this);
        _UxdotKnobAttribute_values.set(this, new Map);
        _UxdotKnobAttribute_iconSet.set(this, null);
        _UxdotKnobAttribute_icons.set(this, []);
        _UxdotKnobAttribute_typeMembers.set(this, []);
        // guards against the initial pf-select change event
        _UxdotKnobAttribute_firstChange.set(this, false);
    }
    get value() {
        const el = this.shadowRoot?.getElementById('knob');
        return el?.value;
    }
    set value(v) {
        const el = this.shadowRoot?.getElementById('knob');
        el.value = v;
    }
    async update(ch) {
        await __classPrivateFieldGet(this, _UxdotKnobAttribute_instances, "m", _UxdotKnobAttribute_computeValues).call(this);
        await __classPrivateFieldGet(this, _UxdotKnobAttribute_instances, "m", _UxdotKnobAttribute_computeIcons).call(this);
        super.update(ch);
    }
    typeChanged() {
        __classPrivateFieldSet(this, _UxdotKnobAttribute_typeMembers, (this.type ?? '')
            .split('|')
            .filter(member => !!member && member !== 'undefined'), "f");
    }
    render() {
        const options = __classPrivateFieldGet(this, _UxdotKnobAttribute_typeMembers, "f");
        const isIconSet = this.name === 'icon-set' || (this.tag === 'rh-icon' && this.name === 'set');
        const isUnionType = options.length > 1
            // case: `variant?: 'subtle'`
            || (options.length === 1 && !!options.at(0)?.match(/^'.*'$/));
        // case: rh-code-block action field: `actions?: ('code'|'wrap')[]`
        const [, listAttrEnum] = this.type?.match(ARRAY_OF_PAREN_TYPE_RE) ?? [];
        const listAttrEnumMembers = listAttrEnum?.split('|') ?? [];
        // TODO: replace tooltip with popover for toggletips
        return html `
      <li data-name="${this.name}" @change="${__classPrivateFieldGet(this, _UxdotKnobAttribute_instances, "m", _UxdotKnobAttribute_onChange)}">
        <label for="knob">
          <code id="knob-title">${this.name}</code>
          <rh-tooltip>
            <button class="toggletip" aria-labelledby="knob-title"><rh-icon icon="information" set="ui"></rh-icon></button>
            <div slot="content"><slot name="description"></slot></div>
          </rh-tooltip>
        </label>${this.type === 'boolean' ? html `
        <rh-switch id="knob"
                   ?checked="${__classPrivateFieldGet(this, _UxdotKnobAttribute_values, "f").get(this.name)}"
                   message-on="Attribute is present"
                   message-off="Attribute is absent"></rh-switch>` : listAttrEnumMembers.length ? listAttrEnumMembers.map(member => html `
        <div class="checkbox-group">
          <input id="${this.name}-${dequote(member)}"
                 type="checkbox"
                 name="${this.name}"
                 value="${dequote(member)}">
          <label for="${this.name}-${dequote(member)}">${dequote(member)}</label>
        </div>`) : isIconSet ? html `
        <pf-select id="knob"
                   data-kind="iconSet"
                   value="${ifDefined(__classPrivateFieldGet(this, _UxdotKnobAttribute_values, "f").get(this.name)) ?? this.default}">
          <pf-option value="">Choose an Icon Set</pf-option>
          <pf-option>ui</pf-option>
          <pf-option>standard</pf-option>
          <pf-option>microns</pf-option>
          <pf-option>social</pf-option>
        </pf-select>` : this.name === 'icon' ? html `
        <pf-select id="knob"
                   data-kind="icon"
                   variant="typeahead"
                   value="${ifDefined(__classPrivateFieldGet(this, _UxdotKnobAttribute_values, "f").get(this.name))}">
          <pf-option value="">Choose an Icon</pf-option>${__classPrivateFieldGet(this, _UxdotKnobAttribute_icons, "f").map(option => html `
          <pf-option>
            ${option}
            <rh-icon slot="icon"
                     icon="${option}"
                     set="${__classPrivateFieldGet(this, _UxdotKnobAttribute_iconSet, "f")}"></rh-icon>
          </pf-option>`)}
        </pf-select>` : isUnionType ? html `
        <pf-select id="knob"
                   data-kind="enum"
                   value="${ifDefined(__classPrivateFieldGet(this, _UxdotKnobAttribute_values, "f").get(this.name))}">
          <pf-option value="">Choose a Value</pf-option>${options.map(option => html `
          <pf-option>${dequote(option)}</pf-option>`)}
        </pf-select>` : this.name === 'color-palette' ? html `
        <rh-context-picker id="knob"
                           allowed="${ifDefined(options.at(0) === 'ColorPalette' ? undefined : options.map(dequote).join(','))}"
                           value="${__classPrivateFieldGet(this, _UxdotKnobAttribute_values, "f").get(this.name) ?? 'lightest'}"></rh-context-picker>` : html `
        <input type="text"
               id="knob"
               inputmode="${ifDefined(this.type === 'number' ? 'numeric' : undefined)}"
               value="${ifDefined(__classPrivateFieldGet(this, _UxdotKnobAttribute_values, "f").get(this.name))}">`}
      </li>
    `;
    }
};
_UxdotKnobAttribute_values = new WeakMap();
_UxdotKnobAttribute_iconSet = new WeakMap();
_UxdotKnobAttribute_icons = new WeakMap();
_UxdotKnobAttribute_typeMembers = new WeakMap();
_UxdotKnobAttribute_firstChange = new WeakMap();
_UxdotKnobAttribute_instances = new WeakSet();
_UxdotKnobAttribute_computeValues = async function _UxdotKnobAttribute_computeValues() {
    if (isServer) {
        /* eslint-disable @stylistic/max-len */
        const { readFile } = await import('node:fs/promises');
        const { parseFragment } = await import('parse5');
        const Tools = await import('@parse5/tools');
        const { getPfeConfig } = await import('@patternfly/pfe-tools/config.js');
        const { getAllManifests } = await import('@patternfly/pfe-tools/custom-elements-manifest/custom-elements-manifest.js');
        /* eslint-enable @stylistic/max-len */
        const manifests = getAllManifests();
        const [manifest] = manifests;
        const [demo] = Object.groupBy(manifests
            .flatMap(manifest => manifest.getTagNames()
            .flatMap(tagName => manifest.getDemoMetadata(tagName, getPfeConfig()))), x => x.primaryElementName)[this.tag] ?? [];
        if (!demo?.filePath) {
            return new Map;
        }
        ;
        const attributes = manifest.getAttributes(this.tag) ?? [];
        const content = await readFile(demo.filePath, 'utf-8');
        const fragment = parseFragment(content);
        const elementNode = Tools.query(fragment, node => Tools.isElementNode(node) && node.tagName === this.tag);
        if (!elementNode) {
            throw new Error('demo does not contain element');
        }
        for (const attr of attributes) {
            __classPrivateFieldGet(this, _UxdotKnobAttribute_values, "f").set(attr.name, (attr.type?.text === 'boolean' ?
                Tools.hasAttribute(elementNode, attr.name)
                : Tools.getAttribute(elementNode, attr.name)));
        }
    }
    else {
        const demo = this.closest('uxdot-demo');
        if (demo) {
            for (const attr of demo.dataset.attributes?.split(',') ?? []) {
                const value = await demo.getDemoElementAttribute(attr);
                __classPrivateFieldGet(this, _UxdotKnobAttribute_values, "f").set(attr, value ?? '');
                if (attr === this.name) {
                    this.value = value ?? '';
                }
            }
        }
    }
};
_UxdotKnobAttribute_computeIcons = async function _UxdotKnobAttribute_computeIcons() {
    if (!isServer
        && this.hasUpdated
        && this.name === 'icon') {
        const demo = this.closest('uxdot-demo');
        if (demo) {
            await demo.updateComplete;
            let iconSet = null;
            if (this.tag === 'rh-icon') {
                iconSet = await demo.getDemoElementAttribute('set') ?? 'standard';
            }
            else {
                const liveValue = await demo.getDemoElementAttribute('icon-set');
                if (liveValue) {
                    iconSet = liveValue;
                }
                else {
                    const setKnob = demo.querySelector('uxdot-knob-attribute[name="icon-set"]');
                    await setKnob?.updateComplete;
                    iconSet = setKnob?.value || this.tagName === 'rh-icon' ? 'standard' : 'ui';
                }
            }
            switch (iconSet) {
                case 'microns':
                case 'ui':
                case 'social':
                case 'standard': {
                    __classPrivateFieldSet(this, _UxdotKnobAttribute_iconSet, iconSet, "f");
                    __classPrivateFieldSet(this, _UxdotKnobAttribute_icons, [...icons.get(iconSet) ?? []], "f");
                    break;
                }
                default:
                    __classPrivateFieldSet(this, _UxdotKnobAttribute_iconSet, null, "f");
            }
        }
    }
};
_UxdotKnobAttribute_getValueForCheckboxes = function _UxdotKnobAttribute_getValueForCheckboxes() {
    const checkboxes = this.shadowRoot?.querySelectorAll(`[type="checkbox"][name="${this.name}"]`);
    return Array.from(checkboxes ?? [])
        .filter(x => x.checked)
        .map(x => x.value)
        .join(' ');
};
_UxdotKnobAttribute_onChange = async function _UxdotKnobAttribute_onChange(event) {
    if (__classPrivateFieldGet(this, _UxdotKnobAttribute_firstChange, "f") || event.target?.localName !== 'pf-select') {
        const target = event.target;
        const demo = this.closest('uxdot-demo');
        await target.updateComplete;
        const value = target.type === 'checkbox' ? __classPrivateFieldGet(this, _UxdotKnobAttribute_instances, "m", _UxdotKnobAttribute_getValueForCheckboxes).call(this)
            : this.type === 'boolean' ? target.checked
                : target.value;
        if (demo && this.name) {
            demo.setDemoElementAttribute(this.name, value);
        }
    }
    else {
        __classPrivateFieldSet(this, _UxdotKnobAttribute_firstChange, true, "f");
    }
};
UxdotKnobAttribute.styles = [styles];
__decorate([
    property()
], UxdotKnobAttribute.prototype, "tag", void 0);
__decorate([
    property()
], UxdotKnobAttribute.prototype, "demo", void 0);
__decorate([
    property()
], UxdotKnobAttribute.prototype, "name", void 0);
__decorate([
    property()
], UxdotKnobAttribute.prototype, "type", void 0);
__decorate([
    property()
], UxdotKnobAttribute.prototype, "default", void 0);
__decorate([
    observes('type')
], UxdotKnobAttribute.prototype, "typeChanged", null);
UxdotKnobAttribute = __decorate([
    customElement('uxdot-knob-attribute')
], UxdotKnobAttribute);
export { UxdotKnobAttribute };
//# sourceMappingURL=uxdot-knob-attribute.js.map