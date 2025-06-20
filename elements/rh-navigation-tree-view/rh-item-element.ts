import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js'; // Added 'custon-element'
import { state } from 'lit/decorators/state.js'; // Added 'state'
import { classMap } from 'lit/directives/class-map.js'; // Add 'classMap'
import { consume } from '@lit/context'; // Added 'consume'
// contexts/parent-context.ts
import { parentContext } from './context.js';

@customElement('rh-item-element')
export class ItemElement extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    
    .root {
      background: white;
      padding: 16px;
    }
    
    .child {
      margin-inline-start: 16px;
    }
    
    .child[data-depth='1'] {
      margin-inline-start: 32px;
    }
  `

  // @state() is used here because depth will be updated dynamically based on consumed context
  @state()
  private _depth: number = 0; // Internal state for depth, initially 0

  // Consume the parent context to determine our own depth
  @consume({ context: parentContext, subscribe: true })
  @state() // Mark as state so changes re-render
  private _upstreamParentInfo?: { parent: HTMLElement; depth: number };

  // Lifecycle method to update depth based on consumed context
  willUpdate(changedProperties: Map<string | number | symbol, unknown>) {
    if (changedProperties.has('_upstreamParentInfo')) {
      // If we found an upstream parent context, our depth is theirs + 1
      this._depth = this._upstreamParentInfo ? this._upstreamParentInfo.depth + 1 : 0;
    }
  }

  render() {
    const classes = { root: this._depth === 0, child: this._depth > 0 }
    return html`
      <div id="container" class="${classMap(classes)}" data-depth="${this._depth}">
        <h2>${this.id} - ${this.tagName}</h2>
        <ul>
          <li>My Depth: ${this._depth}</li>
          <li>My Parent: 
              ${this._upstreamParentInfo ?
                html`${this._upstreamParentInfo.parent.id} at depth ${this._upstreamParentInfo.depth}`
                : html`No parent`}
          </li>
        </ul>
        <slot></slot> 
      </div>`;
  }
}