import type { IconSetName } from '@rhds/icons';
import { LitElement, html, isServer, type PropertyValues } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import { icons } from '@rhds/icons/metadata.js';

import type * as Tools from '@parse5/tools';
import styles from './uxdot-knob-attribute.css';

import '@rhds/elements/rh-switch/rh-switch.js';
import '@rhds/elements/rh-tabs/rh-tabs.js';
import '@rhds/elements/lib/elements/rh-context-picker/rh-context-picker.js';

const dequote = (x: string) =>
  x.replace(/^\s*['"]([^'"]+)['"].*$/m, '$1');

const ARRAY_OF_PAREN_TYPE_RE = /^\((.*)\)\[\]$/;

@customElement('uxdot-knob-attribute')
export class UxdotKnobAttribute extends LitElement {
  static styles = [styles];

  @property() tag!: string;

  @property() demo!: string;

  @property() name!: string;

  @property() type?: string;

  @property() default?: string;

  #values = new Map<string, string | boolean | null>;

  #iconSet: IconSetName | null = null;

  #icons: string[] = [];

  get value() {
    const el = this.shadowRoot?.getElementById('knob') as HTMLInputElement;
    return el?.value;
  }

  set value(v) {
    const el = this.shadowRoot?.getElementById('knob') as HTMLInputElement;
    el.value = v;
  }

  async update(ch: PropertyValues<this>) {
    await this.#computeValues();
    await this.#computeIcons();
    super.update(ch);
  }

  render() {
    const options = (this.type ?? '')
        .split('|')
        .filter(member => member !== 'undefined');

    const isIconSet = this.name === 'icon-set' || (this.tag === 'rh-icon' && this.name === 'set');
    const isUnionType =
         options.length > 1
         // case: `variant?: 'subtle'`
      || (options.length === 1 && !!options.at(0)?.match(/^'.*'$/));
    // case: rh-code-block action field: `actions?: ('code'|'wrap')[]`
    const [, listAttrEnum] =
      this.type?.match(ARRAY_OF_PAREN_TYPE_RE) ?? [];
    const listAttrEnumMembers = listAttrEnum?.split('|') ?? [];

    // TODO: replace tooltip with popover for toggletips
    return html`
      <li data-name="${this.name}" @change="${this.#onChange}">
        <label for="knob">
          <code id="knob-title">${this.name}</code>
          <rh-tooltip>
            <button class="toggletip" aria-labelledby="knob-title"><rh-icon icon="information" set="ui"></rh-icon></button>
            <div slot="content"><slot name="description"></slot></div>
          </rh-tooltip>
        </label>${this.type === 'boolean' ? html`
        <rh-switch id="knob"
                   ?checked="${this.#values.get(this.name)}"
                   message-on="Attribute is present"
                   message-off="Attribute is absent"></rh-switch>` : listAttrEnumMembers.length ? listAttrEnumMembers.map(member => html`
        <div class="checkbox-group">
          <input id="${this.name}-${dequote(member)}"
                 type="checkbox"
                 name="${this.name}"
                 value="${dequote(member)}">
          <label for="${this.name}-${dequote(member)}">${dequote(member)}</label>
        </div>`) : isIconSet ? html`
        <pf-select id="knob"
                   data-kind="iconSet"
                   value="${ifDefined(this.#values.get(this.name)) ?? this.default}">
          <pf-option>ui</pf-option>
          <pf-option>standard</pf-option>
          <pf-option>microns</pf-option>
          <pf-option>social</pf-option>
        </pf-select>` : this.name === 'icon' ? html`
        <pf-select id="knob"
                   data-kind="icon"
                   variant="typeahead"
                   value="${ifDefined(this.#values.get(this.name))}">${this.#icons.map(option => html`
          <pf-option>
            ${option}
            <rh-icon slot="icon"
                     icon="${option}"
                     set="${this.#iconSet}"></rh-icon>
          </pf-option>`)}
        </pf-select>` : isUnionType ? html`
        <pf-select id="knob"
                   data-kind="enum"
                   value="${ifDefined(this.#values.get(this.name))}">${options.map(option => html`
          <pf-option>${dequote(option)}</pf-option>`)}
        </pf-select>` : this.name === 'color-palette' ? html`
        <rh-context-picker id="knob"
                           allowed="${ifDefined(options.at(0) === 'ColorPalette' ? undefined : options.map(dequote).join(','))}"
                           value="${this.#values.get(this.name) ?? 'lightest'}"></rh-context-picker>` : html`
        <input type="text"
               id="knob"
               inputmode="${ifDefined(this.type === 'number' ? 'numeric' : undefined)}"
               value="${ifDefined(this.#values.get(this.name))}">`}
      </li>
    `;
  }

  async #computeValues() {
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
              .flatMap(tagName => manifest.getDemoMetadata(tagName, getPfeConfig()))),
                                    x => x.primaryElementName)[this.tag] ?? [];
      if (!demo?.filePath) {
        return new Map;
      };
      const attributes = manifest.getAttributes(this.tag) ?? [];
      const content = await readFile(demo.filePath, 'utf-8');
      const fragment = parseFragment(content);
      const elementNode: Tools.Element | null =
        Tools.query(fragment, node => Tools.isElementNode(node) && node.tagName === this.tag);
      if (!elementNode) {
        throw new Error('demo does not contain element');
      }
      for (const attr of attributes) {
        this.#values.set(
          attr.name,
          attr.type?.text === 'boolean' ?
            Tools.hasAttribute(elementNode, attr.name)
            : Tools.getAttribute(elementNode, attr.name),
        );
      }
    } else {
      const demo = this.closest('uxdot-demo');
      if (demo) {
        for (const attr of demo.dataset.attributes?.split(',') ?? []) {
          const value = await demo.getDemoElementAttribute(attr);
          this.#values.set(attr, value);
          if (attr === this.name) {
            this.value = value ?? '';
          }
        }
      }
    }
  }

  async #computeIcons() {
    if (!isServer
      && this.hasUpdated
      && this.name === 'icon') {
      const demo = this.closest('uxdot-demo');
      if (demo) {
        await demo.updateComplete;
        let iconSet: string | IconSetName | null = null;
        if (this.tag === 'rh-icon') {
          iconSet = await demo.getDemoElementAttribute('set') ?? 'standard';
        } else {
          const liveValue = await demo.getDemoElementAttribute('icon-set');
          if (liveValue) {
            iconSet = liveValue;
          } else {
            const setKnob =
              demo.querySelector<UxdotKnobAttribute>('uxdot-knob-attribute[name="icon-set"]');
            await setKnob?.updateComplete;
            iconSet = setKnob?.value || this.tagName === 'rh-icon' ? 'standard' : 'ui';
          }
        }
        switch (iconSet) {
          case 'microns':
          case 'ui':
          case 'social':
          case 'standard': {
            this.#iconSet = iconSet;
            this.#icons = [...icons.get(iconSet) ?? []];
            break;
          }
          default:
            this.#iconSet = null;
        }
      }
    }
  }

  #getValueForCheckboxes() {
    const checkboxes = this.shadowRoot?.querySelectorAll<HTMLInputElement>(`[type="checkbox"][name="${this.name}"]`);
    return Array.from(checkboxes ?? [])
        .filter(x => x.checked)
        .map(x => x.value)
        .join(' ');
  }

  async #onChange(event: Event) {
    const target = event.target as LitElement & HTMLInputElement;
    const demo = this.closest('uxdot-demo');
    await target.updateComplete;
    const value =
        target.type === 'checkbox' ? this.#getValueForCheckboxes()
      : this.type === 'boolean' ? target.checked
      : target.value;
    if (demo && this.name) {
      demo.setDemoElementAttribute(this.name, value);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'uxdot-knob-attribute': UxdotKnobAttribute;
  }
}
