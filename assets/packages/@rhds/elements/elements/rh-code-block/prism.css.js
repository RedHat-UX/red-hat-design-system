import { css } from 'lit';
const styles = css `
  & code[class*="language-"],
  & pre[class*="language-"] {
    color: var(--_code-color);
    font-family: var(--rh-font-family-code, RedHatMono, "Red Hat Mono", "Courier New", Courier, monospace);
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: var(--rh-line-height-code, 1.5);
    tab-size: 4;
    hyphens: none;
    background: transparent;
  }

  & pre[class*="language-"]::selection,
  & pre[class*="language-"] ::selection,
  & code[class*="language-"]::selection,
  & code[class*="language-"] ::selection {
    text-shadow: none;
    background: var(--_selected-text-background);
  }

  @media print {
    & code[class*="language-"],
    & pre[class*="language-"] {
      text-shadow: none;
    }
  }

  & .token.atrule { color: var(--_at-rule-color); }
  & .token.attr-name { color: var(--_attr-name-color); }
  & .token.attr-value { color: var(--_attr-value-color); }
  & .token.bold { font-weight: var(--_important-color); }
  & .token.boolean { color: var(--_boolean-color); }
  & .token.builtin { color: var(--_built-in-color); }
  & .token.cdata { color: var(--_cdata-color); }
  & .token.char { color: var(--_character-color); }
  & .token.class-name { color: var(--_class-name-color); }
  & .token.comment { color: var(--_comment-color); }
  & .token.constant { color: var(--_constant-color); }
  & .token.deleted { color: var(--_deleted-color); }
  & .token.function { color: var(--_function-name-color); }
  & .token.important { color: var(--_important-color); }
  & .token.inserted { color: var(--_inserted-color); }
  & .token.keyword { color: var(--_keyword-color); }
  & .token.namespace { color: var(--_namespace-color); }
  & .token.number { color: var(--_number-color); }
  & .token.operator { color: var(--_operator-color); }
  & .token.property { color: var(--_property-color); }
  & .token.punctuation { color: var(--_punctuation-color); }
  & .token.regex { color: var(--_regex-color); }
  & .token.selector { color: var(--_selector-color); }
  & .token.string { color: var(--_string-color); }
  & .token.symbol { color: var(--_symbol-color); }
  & .token.tag { color: var(--_tag-color); }
  & .token.url { color: var(--_url-color); }
  & .token.variable { color: var(--_variable-color); }

  & .token.italic { font-style: italic; }

  & .token.entity {
    color: var(--_entity-color);
    cursor: help;
  }

  & .token.prolog,
  & .token.doctype { color: var(--_doctype-color); }

  & .language-css .token.string,
  & .style .token.string { color: var(--_operator-color); }
`;
export const prismStyles = css `#prism-output {${styles}}`;
export const preRenderedLightDomStyles = css `rh-code-block {
--_styles-applied: true;
${styles}
& > pre { opacity: 1; }
}`;
//# sourceMappingURL=prism.css.js.map