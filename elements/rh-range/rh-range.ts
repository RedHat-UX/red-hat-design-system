import { LitElement, html, type PropertyValues } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { colorContextConsumer, type ColorTheme } from '../../lib/context/color/consumer.js';
import { colorContextProvider, type ColorPalette } from '../../lib/context/color/provider.js';
import { DirController } from '../../lib/DirController.js';
import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';
import styles from './rh-range.css';

export class RangeInputEvent extends Event {
  constructor(public value: number) {
    super('input', { bubbles: true });
  }
}
/**
 * Range Slider
 * @cssprop --rh-range-thumb-color -  - {@default var(--rh-color-brand-red-on-light, #ee0000)}
 * @cssprop --rh-range-progress-color -  - {@default var(--rh-range-thumb-color, #ee0000)}
 * @fires {RangeInputEvent} input - when the range changes
 */
@customElement('rh-range')
export class RhRange extends LitElement {
  static readonly styles = [styles];

  static shadowRootOptions: ShadowRootInit = { ...LitElement.shadowRootOptions, delegatesFocus: true };

  static formAssociated = true;

  @property({ reflect: true, type: Boolean }) disabled = false;

  @property({ reflect: true, type: Boolean }) hidden = false;

  @property({ reflect: true, type: Boolean }) readonly = false;

  @property({ reflect: true, type: Number }) min = 0;

  @property({ reflect: true, type: Number }) max = 100;

  @property({ reflect: true, type: Number }) step?: number;

  @colorContextProvider()
  @property({ reflect: true, attribute: 'color-palette' }) colorPalette?: ColorPalette;

  @colorContextConsumer() private on?: ColorTheme;

  @property({ reflect: true, type: Number })
  get value() {
    return this.#value ?? this.min;
  }

  set value(value: number) {
    const old = this.#value ?? this.min;
    if (value >= this.min && value <= this.max && this.dispatchEvent(new RangeInputEvent(value))) {
      let next = value;
      if (this.step) {
        // FIXME: this is ugly as sin and maybe slow.
        let current = this.min;
        while (current < value) { current += this.step; }
        const lower = current === this.step ? this.min : current;
        const upper = Math.min(current + this.step, this.max);
        next = Math.max(lower, Math.min(value, upper));
        if (next > this.min && next < this.step) {
          next = this.step;
        }
      }
      this.#value = next;
    }
    this.requestUpdate('value', old);
  }

  #mousedown = false;

  #value?: number;

  #thumbWidth?: number;

  #style?: CSSStyleDeclaration;

  #ro = new ResizeObserver(() => this.requestUpdate());

  #dir = new DirController(this);

  #internals = new InternalsController(this, {
    role: 'slider',
    ariaValueMin: `${this.min}`,
    ariaValueMax: `${this.max}`,
    ariaValueNow: `${this.value}`,
  });

  connectedCallback(): void {
    super.connectedCallback();
    this.addEventListener('wheel', this.#onMousewheel);
    this.#ro.observe(this);
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    this.#ro.disconnect();
  }

  willUpdate(changed: PropertyValues<this>) {
    this.#thumbWidth = parseInt(this.#style?.getPropertyValue('--_thumb-size') ?? '0');
    if (changed.has('min') || changed.has('max') || changed.has('value')) {
      this.#internals.ariaValueMin = `${this.min}`;
      this.#internals.ariaValueMax = `${this.max}`;
      this.#internals.ariaValueNow = `${this.value}`;
    }
  }

  render() {
    const { on = '', disabled, max, offsetWidth } = this;
    const { dir } = this.#dir;
    const value = this.value ?? this.min;
    const thumbWidth = this.#thumbWidth ?? 8;
    const xOffset = Math.min((value / max) * offsetWidth, (offsetWidth - thumbWidth));
    const translate = `${xOffset * (dir === 'rtl' ? -1 : 1)}px`;
    const pct = this.value / this.max * 100;
    return html`
      <div id="container"
           aria-hidden="true"
           class="${classMap({ [on]: !!on, [dir]: !!dir, disabled, })}"
           style="${styleMap({
             '--_thumb-translate': translate,
             '--_track-inner': `${pct}%`,
           })}">
        <div id="track"></div>
        <div id="thumb"
             tabindex="0"
             @keydown="${this.#onKeydown}"
             @mousedown="${this.#onMousedown}"
        ></div>
      </div>
    `;
  }

  firstUpdated(): void {
    const container = this.shadowRoot?.querySelector('#container');
    if (container) { this.#style = getComputedStyle(container); }
  }

  /**
   * handles time input changes by seeking to input value
   */
  #onKeydown(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp':
        return this.#increment();
      case 'ArrowDown':
        return this.#decrement();
      case 'ArrowLeft':
        if (this.#dir.dir === 'rtl') {
          return this.#increment();
        } else {
          return this.#decrement();
        }
      case 'ArrowRight':
        if (this.#dir.dir === 'rtl') {
          return this.#decrement();
        } else {
          return this.#increment();
        }
    }
  }

  #onMousedown() {
    this.#mousedown = true;
    window.addEventListener('mousemove', this.#onMousemove);
    window.addEventListener('mouseup', this.#onMouseup, { once: true });
    window.addEventListener('blur', this.#onMouseup, { once: true });
  }

  #onMouseup = () => {
    this.#mousedown = false;
    window.removeEventListener('mousemove', this.#onMousemove);
    window.removeEventListener('blur', this.#onMouseup);
  };

  #onMousemove = (event: MouseEvent) => {
    if (this.#mousedown) {
      const thumbWidth = this.#thumbWidth ?? 8;
      const { left, right, x, width } = this.getBoundingClientRect();
      const { clientX } = event;
      const isRtl = this.#dir.dir === 'rtl';
      if (clientX <= left) {
        this.value = isRtl ? this.max : this.min;
      } else if (clientX >= right) {
        this.value = isRtl ? this.min : this.max;
      } else {
        const range = this.max - this.min;
        let q = ((clientX - x - thumbWidth / 2) / width);
        if (isRtl) {
          q = -q + 1;
        }
        this.value = range * q;
      }
    }
  };

  #onMousewheel(event: WheelEvent) {
    if (this.matches(':focus-within')) {
      this.value += event.deltaY / -100;
    }
  }

  #increment() {
    this.value = ((this.value ?? this.min) + (this.step ?? 1));
  }

  #decrement() {
    this.value = ((this.value ?? this.min) - (this.step ?? 1));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-range': RhRange;
  }
}
