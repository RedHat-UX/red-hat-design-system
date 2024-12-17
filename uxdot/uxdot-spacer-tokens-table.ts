import type { DesignToken } from '#11ty-plugins/tokensHelpers.js';

import { tokens as metaTokens } from '@rhds/tokens/meta.js';
import { tokens as allTokens } from '@rhds/tokens';
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { customElement } from 'lit/decorators/custom-element.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';
import { state } from 'lit/decorators/state.js';
import { StringListConverter } from '@patternfly/pfe-core';

import '@rhds/elements/rh-table/rh-table.js';

import './uxdot-copy-button.js';

import styles from './uxdot-spacer-tokens-table.css';

const assignBasename = (token: DesignToken) => ({
  ...token,
  baseName: token.name.replace(/^(--)?rh-space-/, ''),
});

const getToken = (name: string) => {
  const tokenName = `--rh-space-${name.trim().replace('--rh-space-', '')}` as const;
  return metaTokens.get(tokenName);
};

/**
 * Reads token data from @rhds/tokens and outputs a table for specified tokens
 */
@customElement('uxdot-spacer-tokens-table')
export class UxdotSpacerTokensTable extends LitElement {
  static styles = [styles];
  @property() caption = '';

  @property({ attribute: 'color-palette' }) colorPalette = 'light';

  @property({ converter: StringListConverter }) tokens: string[] =
    Array.from(allTokens.keys())
        .filter((x): x is `--rh-space-${string}` => x.startsWith('--rh-space'));

  @state() metaData: DesignToken[] = [];

  render() {
    const metaData = this.tokens
        .map(getToken)
        .filter(Boolean);

    return html`
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
              .map(token => html`
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
}
