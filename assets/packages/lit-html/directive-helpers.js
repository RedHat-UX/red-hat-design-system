import{_$LH as io}from"./lit-html.js";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:et}=io,st=o=>null===o||"object"!=typeof o&&"function"!=typeof o,no={HTML:1,SVG:2,MATHML:3},nt=(o,t)=>void 0===t?void 0!==o?._$litType$:o?._$litType$===t,ot=o=>null!=o?._$litType$?.h,eo=o=>void 0!==o?._$litDirective$,lo=o=>o?._$litDirective$,rt=o=>void 0===o.strings,lt=()=>document.createComment(""),at=(o,t,i)=>{const n=o._$AA.parentNode,e=void 0===t?o._$AB:t._$AA;if(void 0===i){const t=n.insertBefore(lt(),e),l=n.insertBefore(lt(),e);i=new et(t,l,o,o.options)}else{const t=i._$AB.nextSibling,l=i._$AM,c=l!==o;if(c){let t;i._$AQ?.(o),i._$AM=o,void 0!==i._$AP&&(t=o._$AU)!==l._$AU&&i._$AP(t)}if(t!==e||c){let o=i._$AA;for(;o!==t;){const t=o.nextSibling;n.insertBefore(o,e),o=t}}}return i},ct=(o,t,i=o)=>(o._$AI(t,i),o),ht={},dt=(o,t=ht)=>o._$AH=t,ut=o=>o._$AH,pt=o=>{o._$AP?.(!1,!0);let t=o._$AA;const i=o._$AB.nextSibling;for(;t!==i;){const o=t.nextSibling;t.remove(),t=o}},ft=o=>{o._$AR()};export{no as TemplateResultType,ft as clearPart,ut as getCommittedValue,lo as getDirectiveClass,at as insertPart,ot as isCompiledTemplateResult,eo as isDirectiveResult,st as isPrimitive,rt as isSingleExpression,nt as isTemplateResult,pt as removePart,ct as setChildPartValue,dt as setCommittedValue};
//# sourceMappingURL=directive-helpers.js.map
