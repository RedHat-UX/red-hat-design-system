declare module 'markdown-it-deflist' {
  import type MarkdownIt from "markdown-it";
  declare function deflist(md: MarkdownIt): void;
  export default deflist;
}
declare module 'markdown-it-table-captions' {
  import type MarkdownIt from "markdown-it";
  declare function captions(md: MarkdownIt): void;
  export default captions;
}
