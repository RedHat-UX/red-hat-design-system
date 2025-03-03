import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import TinyColor from 'tinycolor2';

import { colorContextConsumer } from '@rhds/elements/lib/context/color/consumer.js';

import {
  colorContextProvider,
  type ColorPalette,
} from '@rhds/elements/lib/context/color/provider.js';
import { tokens } from '@rhds/tokens';

const dark = tokens.get('--rh-color-text-primary-on-dark') as string;
const light = tokens.get('--rh-color-text-primary-on-light') as string;

class RendersText extends LitElement {
  static styles = [css`:host {
    display: block;
    padding: 24px;
    color: var(--rh-color-text-primary);
  }`];

  get on() {
    const color = this.#style.getPropertyValue('color');
    return TinyColor.equals(color, dark) ? 'dark'
         : TinyColor.equals(color, light) ? 'light'
         : 'nothing';
  }

  #style = getComputedStyle(this);

  render() {
    return html`<span>Hello</span>`;
  }
}

@customElement('test-context-consumer')
@colorContextConsumer
export class ContextConsumer extends RendersText { }

@customElement('test-context-consumer-provider')
@colorContextConsumer
export class ContextConsumerProvider extends RendersText {
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;
}

@customElement('test-context-provider-consumer')
@colorContextConsumer
export class ContextProviderConsumer extends RendersText {
  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;
}
