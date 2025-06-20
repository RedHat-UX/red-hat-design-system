// import { LitElement, html, type TemplateResult, type PropertyValues } from 'lit';
// import { customElement } from 'lit/decorators/custom-element.js';
// import { property } from 'lit/decorators/property.js';
// import { state } from 'lit/decorators/state.js';
// import { classMap } from 'lit-html/directives/class-map.js';
// import { ifDefined } from 'lit-html/directives/if-defined.js';

// import { consume } from '@lit/context';
// import { parentContext } from './context.js';

// import { InternalsController } from '@patternfly/pfe-core/controllers/internals-controller.js';

// import styles from './rh-navigation-tree-view-item.css';

// /**
//  * Navigation Tree View
//  * @slot - Place element content here
//  */
// @customElement('rh-navigation-tree-view-item')
// export class RhNavigationTreeViewItem extends LitElement {
//   static readonly styles: CSSStyleSheet[] = [styles];

//   #internals = InternalsController.of(this, { role: 'treeitem' });

//   // @state() is used here because depth will be updated dynamically based on consumed context
//   @state()
//   private _depth = 0; // Internal state for depth, initially 0

//   // Consume the parent context to determine our own depth
//   @consume({ context: parentContext, subscribe: true })
//   @state() // Mark as state so changes re-render
//   private _upstreamParentInfo?: { parent: HTMLElement; depth: number };

//   @property() href?: string;

//   @property({ attribute: 'current-page', type: Boolean }) currentPage? = false;

//   // Lifecycle method to update depth based on consumed context
//   willUpdate(changedProperties: Map<string | number | symbol, unknown>) {
//     if (changedProperties.has('_upstreamParentInfo')) {
//       // If we found an upstream parent context, our depth is theirs + 1
//       this._depth = this._upstreamParentInfo ? this._upstreamParentInfo.depth + 1 : 0;
//     }
//   }

//   render(): TemplateResult<1> {
//     const isCurrentPage = this.currentPage ? 'page' : undefined;
//     const classes = {
//       root: !!this._depth && this._depth === 1,
//       child: !!this._depth && this._depth > 1,
//     };
//     return html`
//       <div id="container" class="${classMap(classes)}">
//         <a href="${ifDefined(this.href)}" aria-current="${ifDefined(isCurrentPage)}">
//           <slot></slot>
//         </a>
//       </div>
//     `;
//   }
// }

// declare global {
//   interface HTMLElementTagNameMap {
//     'rh-navigation-tree-view-item': RhNavigationTreeViewItem;
//   }
// }
