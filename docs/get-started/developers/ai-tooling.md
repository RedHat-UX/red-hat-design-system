---
layout: layouts/pages/has-toc.njk
title: AI Tooling
heading: Developers
permalink: /get-started/developers/ai-tooling/index.html
tags:
  - developers
subnav:
  collection: sortedDevelopers
  order: 55
---

<script type="module" data-helmet>
  import '@rhds/elements/rh-code-block/rh-code-block.js';
  import '@rhds/elements/rh-alert/rh-alert.js';
</script>

## Overview

Two MCP servers give your AI assistant structured knowledge of
Red Hat Design System **components** and **design tokens**. Once
configured, your assistant can generate correct RHDS markup, suggest
token values, and validate your usage.

| Server               | What it knows                                                          | Install                   |
| -------------------- | ---------------------------------------------------------------------- | ------------------------- |
| [CEM][cem]           | Elements: attributes, slots, events, CSS custom properties, guidelines | `npm i -g @pwrs/cem`      |
| [Asimonim][asimonim] | Design tokens: colors, spacing, typography, shadows, and more          | `npm i -g @pwrs/asimonim` |

Both are also available via `go install`:

```shell rhcodeblock
go install bennypowers.dev/cem@latest
go install bennypowers.dev/asimonim@latest
```

Verify both are installed:

```shell rhcodeblock
cem version
asimonim version
```

## Setup

Pick your editor below and follow the steps. You only need to configure
one.

### Claude Code

Install both plugins:

```text rhcodeblock
/plugin marketplace add bennypowers/cem
/plugin install cem
/plugin marketplace add bennypowers/asimonim
/plugin install asimonim
```

No additional configuration needed. Both plugins discover RHDS
manifests and token files from `node_modules` automatically.

### Cursor

Add both servers to your [Cursor MCP config][cursormcp]:

```json rhcodeblock
{
  "mcpServers": {
    "cem": {
      "command": "cem",
      "args": ["mcp"]
    },
    "asimonim": {
      "command": "asimonim",
      "args": ["mcp"]
    }
  }
}
```

### VS Code

For component intelligence, install the [Custom Elements Language
Server][vscodeext] extension from the marketplace.

For MCP support, add both servers to your MCP configuration the same
way as Cursor (above).

### Neovim

For Neovim 0.12+ with native LSP support, create two files:

`~/.config/nvim/lsp/cem.lua`:

```lua rhcodeblock
return {
  cmd = { 'cem', 'lsp' },
  root_markers = { 'custom-elements.json', 'package.json', '.git' },
  filetypes = { 'html', 'twig', 'php', 'typescript', 'javascript' },
}
```

`~/.config/nvim/lsp/asimonim.lua`:

```lua rhcodeblock
return {
  cmd = { 'asimonim', 'lsp' },
  root_markers = { 'package.json', '.git' },
  filetypes = {
    'css', 'html', 'twig', 'php',
    'javascript', 'javascriptreact',
    'typescript', 'typescriptreact',
    'json', 'yaml',
  },
}
```

## Verify your setup

1. Open an HTML or CSS file in a project that depends on `@rhds/elements`
2. Type `<rh-` and confirm that autocomplete suggestions appear
3. In a CSS file, type `--rh-` and confirm that token suggestions appear
4. If using MCP, ask your AI assistant to generate an RHDS component or
   list available tokens

If completions do not appear, make sure your project has `@rhds/elements`
in its dependencies. If your project has its own web components, you can
generate a manifest with:

```shell rhcodeblock
cem generate
```

## Learn more

- [CEM documentation][cemdocs]
- [Asimonim documentation][asimonimdocs]

<uxdot-feedback>
  <h2>Designers</h2>
  <p>To get started using our design system as a designer, go to the <a href="/get-started/designers">Designers</a> page.</p>
</uxdot-feedback>

[asimonim]: https://github.com/bennypowers/asimonim
[asimonimdocs]: https://bennypowers.dev/asimonim/
[cem]: https://github.com/bennypowers/cem
[cemdocs]: https://bennypowers.dev/cem/
[claudecode]: https://claude.com/product/claude-code
[cursor]: https://cursor.com
[cursormcp]: https://docs.cursor.com/mcp
[vscodeext]: https://marketplace.visualstudio.com/items?itemName=pwrs.cem-language-server-vscode
