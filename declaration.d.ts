declare module '*.css' {
  const style: CSSStyleSheet
  export default style;
}

declare module 'prism-esm/plugins/line-numbers/prism-line-numbers.js' {
  import type { Prism } from "prism-esm";
  export function Plugin(prism: Prism): void
}

declare module '@11ty/eleventy-plugin-syntaxhighlight/src/HighlightPairedShortcode.js' {
  export default function HighlightPairedShortcode(content: string, language: string, highlightLines: string, options: object): any
}

declare module '@11ty/eleventy-plugin-syntaxhighlight/src/getAttributes.js' {
  export default function getAttributes(...args: any[]): string
}

