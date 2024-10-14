declare module '*.css' {
  const style: CSSStyleSheet
  export default style;
}

declare module 'prism-esm/plugins/line-numbers/prism-line-numbers.js' {
  import type { Prism } from "prism-esm";
  export function Plugin(prism: Prism): void
}

