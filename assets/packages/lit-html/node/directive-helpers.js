import{_$LH as o}from"./lit-html.js";
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{I:l}=o,i=o=>null===o||"object"!=typeof o&&"function"!=typeof o,n={HTML:1,SVG:2},t=(o,l)=>void 0===l?void 0!==(null==o?void 0:o._$litType$):(null==o?void 0:o._$litType$)===l,v=o=>{var l;return null!=(null===(l=null==o?void 0:o._$litType$)||void 0===l?void 0:l.h)},d=o=>void 0!==(null==o?void 0:o._$litDirective$),u=o=>null==o?void 0:o._$litDirective$,e=o=>void 0===o.strings,r=()=>document.createComment(""),c=(o,i,n)=>{var t;const v=o._$AA.parentNode,d=void 0===i?o._$AB:i._$AA;if(void 0===n){const i=v.insertBefore(r(),d),t=v.insertBefore(r(),d);n=new l(i,t,o,o.options)}else{const l=n._$AB.nextSibling,i=n._$AM,u=i!==o;if(u){let l;null===(t=n._$AQ)||void 0===t||t.call(n,o),n._$AM=o,void 0!==n._$AP&&(l=o._$AU)!==i._$AU&&n._$AP(l)}if(l!==d||u){let o=n._$AA;for(;o!==l;){const l=o.nextSibling;v.insertBefore(o,d),o=l}}}return n},f=(o,l,i=o)=>(o._$AI(l,i),o),s={},a=(o,l=s)=>o._$AH=l,m=o=>o._$AH,p=o=>{var l;null===(l=o._$AP)||void 0===l||l.call(o,!1,!0);let i=o._$AA;const n=o._$AB.nextSibling;for(;i!==n;){const o=i.nextSibling;i.remove(),i=o}},h=o=>{o._$AR()};export{n as TemplateResultType,h as clearPart,m as getCommittedValue,u as getDirectiveClass,c as insertPart,v as isCompiledTemplateResult,d as isDirectiveResult,i as isPrimitive,e as isSingleExpression,t as isTemplateResult,p as removePart,f as setChildPartValue,a as setCommittedValue};
//# sourceMappingURL=directive-helpers.js.map