import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit/directives/class-map.js';

import { Logger } from '@patternfly/pfe-core/controllers/logger.js';

import '@rhds/elements/rh-icon/rh-icon.js';
import '@rhds/elements/rh-spinner/rh-spinner.js';

// eagerly load these to avoid icon FOUC
import '@rhds/icons/ui/check-circle.js';
import '@rhds/icons/ui/check-circle-fill.js';
import '@rhds/icons/ui/warning-fill.js';
import '@rhds/icons/ui/warning.js';
import '@rhds/icons/ui/error.js';
import '@rhds/icons/ui/error-fill.js';

import { themable } from '@rhds/elements/lib/themable.js';

import styles from './rh-site-status.css';

type Impact = 'none' | 'minor' | 'major' | 'critical';
type StatusKey = 'operational' | 'degraded_performance' | 'partial_outage' | 'major_outage';

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

// map statuspage.io's text to our text; at least one of their status
// strings is too long for the space we have
const TEXT_MAP = Object.freeze({
  'Partially Degraded Service': 'Partial service',
});

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
 * @slot - loading-text - Text to display while loading the status defaults to "Loading"
 */
@customElement('rh-site-status')
@themable
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


  #status: Status | null = null;

  #component: Component | null = null;

  #loading = true;

  #logger = new Logger(this);

  #domain = location.hostname;

  get #icon() {
    const status = this.#component?.status ?? this.#status?.indicator;
    switch (status) {
      case 'none':
      case 'operational':
        return { icon: 'check-circle-fill', status: 'success' };
      case 'degraded_performance':
      case 'partial_outage':
      case 'major_outage':
      case 'major':
      case 'minor':
        return { icon: 'warning-fill', status: 'warning' };
      default:
        return { icon: 'error-fill', status: 'danger' };
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

  override connectedCallback() {
    super.connectedCallback();
    this.#fetch();
  }

  protected override render() {
    const loading = this.#loading;
    const { icon, status } = this.#icon;
    return html`
      <div id="container" class="${classMap({ loading })}">
        <a aria-busy="${String(this.#loading) as 'true' | 'false'}"
           aria-live="polite"
           href="https://status.redhat.com/">${this.#loading ? html`
          <rh-spinner size="sm"></rh-spinner>
          <span><slot name="loading-text">Loading</slot></span>` : html`
          <rh-icon class="${status}" icon="${icon}" loading="eager" set="ui"></rh-icon>
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
