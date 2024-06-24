import { LitElement, html, svg } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import { type ColorPalette } from '../../lib/context/color/provider.js';
import { colorContextConsumer } from '../../lib/context/color/consumer.js';

import '../rh-spinner/rh-spinner.js';

import styles from './rh-site-status.css';

type Impact = 'none' | 'minor' | 'major' | 'critical';
type StatusKey = 'operational' | 'degraded_performance' | 'partial_outage' | 'major_outage';
type Indicator = Impact | StatusKey;

interface Page {
  id?: string;
  name?: string;
  updated_at?: string;
  url: string;
}

/** @see https://metastatuspage.com/api#status */
interface Status {
  description: string;
  indicator: Impact;
}

/** @see https://metastatuspage.com/api#components */
interface Component {
  status: StatusKey;
  name: string;
  /** ISO-8601 Date time format string */
  created_at: string;
  /** ISO-8601 Date time format string */
  updated_at: string;
  position: number;
  description: string | null;
  showcase: boolean;
  /** ISO-8601 Date time format string */
  start_date: string | null;
  id: string;
  page_id: string;
  group_id: string | null;
  components: string[];
}

interface Incident {
  created_at: string;
  id: string;
  impact: Impact;
  name: string;
  page_id: string;
  status: 'investigating' | 'identified' | 'monitoring' | 'resolved' | 'postmortem';
  resolved_at: string | null;
  updated_at: string | null;
  shortlink: string;
  monitoring_at: string | null;
  incident_updates: unknown[];
}

/** @internal */
export interface SummaryResponse {
  page: Page;
  status: Status;
  components: Component[];
  incidents: Incident[];
}

const STATUS_ICONS = Object.freeze({
  'ok': svg`
    <path d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5Z" fill="#63993D"/>
    <path d="M6.89999 12.1C6.69999 12.1 6.49999 12 6.39999 11.9L3.49999 9.00001C3.19999 8.70001 3.19999 8.30001 3.49999 8.00001C3.79999 7.70001 4.19999 7.70001 4.49999 8.00001L6.89999 10.4L11.5 5.80001C11.8 5.50001 12.2 5.50001 12.5 5.80001C12.8 6.10001 12.8 6.50001 12.5 6.80001L7.39999 11.9C7.19999 12 6.99999 12.1 6.89999 12.1Z" fill="white"/>
  `,
  'warn': svg`
    <path d="M0 14.6H16L8 0.400024L0 14.6Z" fill="#F5921B"/>
    <path d="M8.00005 9.80007C7.60005 9.80007 7.30005 9.50007 7.30005 9.10007V5.90007C7.30005 5.50007 7.60005 5.20007 8.00005 5.20007C8.40005 5.20007 8.70005 5.50007 8.70005 5.90007V9.20007C8.70005 9.50007 8.40005 9.80007 8.00005 9.80007ZM8.20005 12.7001C8.30005 12.7001 8.30005 12.7001 8.40005 12.7001C8.40005 12.7001 8.50005 12.7001 8.50005 12.6001L8.60005 12.5001C8.80005 12.3001 8.80005 12.1001 8.80005 11.9001C8.80005 11.7001 8.70005 11.5001 8.60005 11.3001L8.50005 11.2001L8.40005 11.1001C8.30005 11.1001 8.30005 11.1001 8.20005 11.1001C7.90005 11.0001 7.70005 11.1001 7.50005 11.3001C7.30005 11.5001 7.30005 11.7001 7.30005 11.9001C7.30005 12.1001 7.40005 12.3001 7.50005 12.5001C7.70005 12.7001 7.90005 12.7001 8.10005 12.7001C8.10005 12.7001 8.10005 12.7001 8.20005 12.7001Z" fill="white"/>
  `,
  'danger': svg`
    <path d="M8 16.5C12.4183 16.5 16 12.9183 16 8.5C16 4.08172 12.4183 0.5 8 0.5C3.58172 0.5 0 4.08172 0 8.5C0 12.9183 3.58172 16.5 8 16.5Z" fill="#F4784A"/>
    <path d="M8.0001 9.80005C7.6001 9.80005 7.3001 9.50005 7.3001 9.10005V4.50005C7.3001 4.10005 7.6001 3.80005 8.0001 3.80005C8.4001 3.80005 8.7001 4.10005 8.7001 4.50005V9.10005C8.7001 9.50005 8.4001 9.80005 8.0001 9.80005ZM8.2001 12.8C8.3001 12.8 8.3001 12.8 8.4001 12.7C8.5001 12.7 8.5001 12.7 8.5001 12.6C8.6001 12.6 8.6001 12.5 8.6001 12.5C8.8001 12.3 8.9001 12.1 8.9001 11.9C8.9001 11.7 8.8001 11.5 8.6001 11.3L8.5001 11.2L8.4001 11.1C8.3001 11.1 8.3001 11.1 8.2001 11.1C7.9001 11 7.6001 11.1 7.4001 11.3L7.3001 11.4L7.2001 11.5C7.2001 11.6 7.2001 11.6 7.1001 11.7C7.1001 11.8 7.1001 11.8 7.1001 11.9C7.1001 12.1 7.2001 12.3 7.4001 12.5C7.6001 12.7 7.8001 12.8 8.0001 12.8C8.1001 12.8 8.1001 12.8 8.2001 12.8Z" fill="white"/>
  `,
} as const);

// map statuspage.io's text to our text; at least one of their status
// strings is too long for the space we have
const TEXT_MAP = Object.freeze({
  'Partially Degraded Service': 'Partial service',
});

// map statuspage.io's statuses to icon map keys
const STATUS_MAP = Object.freeze({
  'none': 'ok',
  'operational': 'ok',
  'degraded_performance': 'warn',
  'partial_outage': 'warn',
  'major_outage': 'warn',
  'major': 'warn',
  'minor': 'warn',
  'critical': 'danger',
} satisfies Record<Indicator, keyof typeof STATUS_ICONS>);

const getSummaryOrThrow = async (response: Response) => {
  if (!response.ok) {
    throw new Error(`${response.statusText}`);
  } else {
    const json = await response.json();
    if (!isStatusPageResponse(json)) {
      throw new Error('invalid status data');
    } else {
      return json;
    }
  }
};

const byISO8601Property =
  <T extends object>(key: keyof T) =>
    (a: T, b: T) =>
      a[key] > b[key] ? 1
    : a[key] < b[key] ? -1
    : 0;

const isStatusPageResponse = (data: unknown): data is SummaryResponse => {
  return (
    typeof data === 'object'
    && data !== null
    && 'page' in data
    && 'status' in data
    && 'components' in data
    && 'incidents' in data
    && typeof data.status === 'object'
    && data.status !== null
    && 'description' in data.status
    && 'indicator' in data.status
    && Array.isArray(data.components)
  );
};

/**
 * Website status communicates the operational status of a website or domain using a status icon and
 * link. It is usually located in the Footer component.
 * @summary Communicates operational status of a website or domain
 * @slot loading-text - Text to display while loading the status defaults to "Loading"
 */
@customElement('rh-site-status')
export class RhSiteStatus extends LitElement {
  static readonly styles = [styles];

  private static dataURI = 'https://status.redhat.com/index.json' as const;

  private static fetchOptions: RequestInit = {
    mode: 'cors',
    cache: 'no-cache',
    headers: {
      Accept: 'application/json',
    },
  };

  /**
   * Sets color theme based on parent context
   */
  @colorContextConsumer() private on?: ColorPalette;

  #status: Status | null = null;

  #component: Component | null = null;

  #loading = true;

  #logger = new Logger(this);

  #domain = location.hostname;

  /** secret testing-only domain override */
  private set __TESTING_ONLY_DONT_USE_OR_WELL_TELL_YOUR_BOSS__domain__(domain: string) {
    this.#domain = domain;
    this.#loading = true;
    this.requestUpdate();
    this.#fetch();
  }

  get #icon() {
    const status = this.#component?.status ?? this.#status?.indicator;
    if (status) {
      return STATUS_ICONS[STATUS_MAP[status]];
    } else {
      return STATUS_ICONS.danger;
    }
  }

  get #text() {
    if (this.#component) {
      return this.#component.description ?? this.#component.status;
    } else if (this.#status) {
      const statusText = this.#status.description;
      return TEXT_MAP[statusText as keyof typeof TEXT_MAP] ?? statusText;
    } else {
      return 'Error loading status';
    }
  };

  connectedCallback() {
    super.connectedCallback();
    this.#fetch();
  }

  render() {
    const { on = '' } = this;
    return html`
      <div id="container" class="${classMap({ [on]: !!on })}">
        <a href="https://status.redhat.com/"
           aria-busy="${String(this.#loading) as 'true' | 'false'}"
           aria-live="polite">${this.#loading ? html`
          <rh-spinner size="sm"></rh-spinner>
          <span><slot name="loading-text">Loading</slot></span>` : html`
          <svg xmlns="http://www.w3.org/2000/svg"
               width="16"
               height="17"
               viewbox="0 0 16 17"
               fill="none">${this.#icon}</svg>
          <span>${this.#text}</span>`}
        </a>
      </div>
    `;
  }

  async #fetch() {
    try {
      const { dataURI, fetchOptions } = RhSiteStatus;
      const data = await fetch(dataURI, fetchOptions)
          .then(getSummaryOrThrow);
      const [component] = data.components
          .filter(x => x.name === this.#domain)
          .sort(byISO8601Property('updated_at'));
      this.#component = component ?? null;
      this.#status = data.status;
    } catch (error) {
      this.#logger.warn('Error loading site status:', error);
    } finally {
      this.#loading = false;
      this.requestUpdate();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'rh-site-status': RhSiteStatus;
  }
}
