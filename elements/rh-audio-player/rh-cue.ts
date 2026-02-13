import { LitElement, html, nothing } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';

import { HeadingLevelContextConsumer } from '../../lib/context/headings/consumer.js';

import styles from './rh-cue.css' with { type: 'css' };

export type Seconds = (number | null | undefined);
export type TimeString = (string | null | undefined);

/**
 * formats time in seconds as `mm:ss.ms` string
 */
export const getFormattedTime = (seconds: Seconds): string => {
  const ss = seconds ?? 0;
  return (
      typeof seconds === 'undefined' ? ''
    : `${Math.floor(ss % 3600 / 60).toString().padStart(2, '0')}:${Math.floor(ss % 60).toString().padStart(2, '0')}`
  );
};


/**
 * non-capturing group (_optional_):
 * > named capture group 1 `hh`:
 * > > **0-9** (_2x_)
 * > `:`
 * non-capturing group:
 * > named capture group 2 `mm`:
 * > > **0-9** (_2x_)
 * > `:`
 * named capture group 3 `ss`:
 * > **0-9** (_2x_)
 * non-capturing group (_optional_):
 * > `.`
 * > named capture group 4 `ms`:
 * > > **0-9** (_>= 1x_)
 */
const SECONDS_RE = /(?:(?<hh>\d{2}):)?(?:(?<mm>\d{2}):)(?<ss>\d{2})(?:\.(?<ms>\d+))?/;

/**
 * gets seconds from a string formatted as `mm:ss.mss` or `hh:mm:ss.mss`
 */
export const getSeconds = (str: TimeString): Seconds => {
  if (!str) {
    return undefined;
  }
  const match = str.match(SECONDS_RE);
  if (!match) {
    return undefined;
  } else {
    const { hh = 0, mm = 0, ss = 0, ms = 0 } = match.groups ?? {};
    return (hh as number * 3600) + (mm as number * 60) + (ss as number * 1) + (ms as number / 1000);
  }
};

/**
 * Media Transcript Cue
 * @fires cueseek - when user clicks a time cue
 */
@customElement('rh-cue')
export class RhCue extends LitElement {
  static readonly styles = [styles];

  /** Start time, in mm:ss.ms */
  @property() start?: string;

  /** End time, in mm:ss.ms */
  @property() end?: string;

  /** Text of this cue. Overridden by `text` slot */
  @property() text?: string;

  /** Name of voice speaking this text. Overridden by `voice` slot */
  @property({ reflect: true }) voice?: string;

  /** Whether this cue is active right now */
  @property({ type: Boolean, reflect: true }) active = false;

  #headings = new HeadingLevelContextConsumer(this);

  get #hasVoice() {
    return !!this.voice && this.voice.trim()?.length > 0;
  }

  get startTime() {
    return this.start ? getSeconds(this.start) : undefined;
  }

  get endTime() {
    return this.end ? getSeconds(this.end) : undefined;
  }

  get downloadText() {
    const { textContent } = this;
    const voiceContent = this.voice || '';
    const text = (textContent || '').trim();
    const voice = (voiceContent || '').trim();
    const time = this.end ? [this.start, this.end].join(' - ') : this.start;
    const heading = voice.length > 0 ? [time, voice].join(': ') : time;
    return text.length > 0 ? [heading, text].join('\n') : heading;
  }

  render() {
    const { start, voice } = this;
    return html`${!this.#hasVoice ? nothing : this.#headings.wrap(this.#linkTemplate(html`
      <span id="start">${start}</span> - <span id="voice">${voice}</span>`, true))}${this.#linkTemplate(html`
      <!-- text of cue -->
      <slot></slot>
    `)}`;
  }

  #linkTemplate(content: unknown = nothing, heading = false) {
    const id = [
      this.id,
      this.startTime && `t${this.startTime}-`,
      this.endTime,
      heading ? 'heading' : 'text',
    ].filter(Boolean).join('');
    return html`
      <a id="${id}"
         href="#${id}"
         ?active="${this.active && !heading}"
         @click=${this.#onClick}>${content}</a>`;
  }

  #onClick() {
    this.dispatchEvent(new Event('cueseek', { bubbles: true }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-cue': RhCue;
  }
}
