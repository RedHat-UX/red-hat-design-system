declare module '*.css' {
  import type { CSSResult } from 'lit';

  // import style from './some-styles.css';
  const style: CSSResult;
  export default style;
}

/**
 * @see https://github.com/nonara/ts-patch/issues/93
 * @see https://github.com/cevek/ttypescript/issues/140
 */
declare module '@rhds/tokens/media.js' {
  export * from '@rhds/tokens/js/media.js';
}
