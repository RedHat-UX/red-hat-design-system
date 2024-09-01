import{isSingleExpression as rt}from"./directive-helpers.js";import{Directive as i,PartType as t}from"./directive.js";export{directive}from"./directive.js";
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const mt=(i,t)=>{const e=i._$AN;if(void 0===e)return!1;for(const i of e)i._$AO?.(t,!1),mt(i,t);return!0},_t=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t}while(0===e?.size)},wt=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),gt(t)}};function bt(i){void 0!==this._$AN?(_t(this),this._$AM=i,wt(this)):this._$AM=i}function yt(i,t=!1,e=0){const s=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(t)if(Array.isArray(s))for(let i=e;i<s.length;i++)mt(s[i],!1),_t(s[i]);else null!=s&&(mt(s,!1),_t(s));else mt(this,i)}const gt=i=>{i.type==t.CHILD&&(i._$AP??=yt,i._$AQ??=bt)};class $t extends i{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,t,e){super._$AT(i,t,e),wt(this),this.isConnected=i._$AU}_$AO(i,t=!0){i!==this.isConnected&&(this.isConnected=i,i?this.reconnected?.():this.disconnected?.()),t&&(mt(this,i),_t(this))}setValue(i){if(rt(this.t))this.t._$AI(i,this);else{const t=[...this.t._$AH];t[this.i]=i,this.t._$AI(t,this,0)}}disconnected(){}reconnected(){}}export{$t as AsyncDirective,i as Directive,t as PartType};
//# sourceMappingURL=async-directive.js.map
