declare module 'markdown-it-deflist' {
  import type MarkdownIt from "markdown-it";
  declare function deflist(md: MarkdownIt): void;
  export default deflist;
}
