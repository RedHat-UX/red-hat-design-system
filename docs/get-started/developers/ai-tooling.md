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

[CEM][cem] (Custom Elements Manifest multitool) provides AI-powered
editor features for Red Hat Design System components. It gives your
editor and AI assistant structured knowledge of RHDS elements, including
their attributes, slots, events, CSS custom properties, and usage
guidelines.

CEM offers two integration modes:

- **LSP** (Language Server Protocol) adds autocomplete, hover
  documentation, go-to-definition, and validation to your editor
- **MCP** (Model Context Protocol) gives AI assistants direct access to
  component manifests for accurate HTML generation and validation

## Install CEM

Install CEM using npm:

```shell rhcodeblock
npm install -g @pwrs/cem
```

Or using Go:

```shell rhcodeblock
go install bennypowers.dev/cem@latest
```

Verify the installation:

```shell rhcodeblock
cem version
```

## Claude Code

The CEM plugin for [Claude Code][claudecode] provides both LSP and MCP
support. Install the plugin with two commands:

```text rhcodeblock
/plugin marketplace add bennypowers/cem
/plugin install cem
```

Once installed, Claude Code gains:

- **Editor intelligence** for HTML, TypeScript, and JavaScript files,
  with autocomplete and validation for RHDS elements
- **AI-native component understanding**, so Claude can generate correct
  HTML using RHDS components with proper slots, attributes, and design
  tokens

No additional configuration is needed. The plugin discovers
`custom-elements.json` manifests in your project and in `node_modules`
automatically.

## Cursor

[Cursor][cursor] supports MCP servers for AI-assisted development.
Add CEM to your Cursor MCP configuration:

```json rhcodeblock
{
  "mcpServers": {
    "cem": {
      "command": "cem",
      "args": ["mcp"]
    }
  }
}
```

See the [Cursor MCP docs][cursormcp] for the configuration file location
on your platform.

For LSP support in Cursor, configure the language server to run
`cem lsp` for HTML, TypeScript, and JavaScript files.

## VS Code

Install the [Custom Elements Language Server][vscodeext] extension from
the VS Code marketplace. The extension bundles the language server and
works out of the box.

For MCP support, add CEM to your MCP configuration the same way as
Cursor (above).

## Neovim

For Neovim 0.12+ with native LSP support, create
`~/.config/nvim/lsp/cem.lua`:

```lua rhcodeblock
return {
  cmd = { 'cem', 'lsp' },
  root_markers = { 'custom-elements.json', 'package.json', '.git' },
  filetypes = { 'html', 'twig', 'php', 'typescript', 'javascript' },
}
```

## Verify your setup

After configuring your editor or AI assistant:

1. Open an HTML file in a project that depends on `@rhds/elements`
2. Start typing `<rh-` and confirm that autocomplete suggestions appear
3. If using MCP, ask your AI assistant "What RHDS elements are available
   in this project?"

If completions do not appear, make sure your project has a
`custom-elements.json` manifest. Generate one with:

```shell rhcodeblock
cem generate
```

## Learn more

- [CEM documentation][cemdocs]
- [MCP reference][mcpref]
- [LSP reference][lspref]

<uxdot-feedback>
  <h2>Designers</h2>
  <p>To get started using our design system as a designer, go to the <a href="/get-started/designers">Designers</a> page.</p>
</uxdot-feedback>

[cem]: https://github.com/bennypowers/cem
[cemdocs]: https://bennypowers.dev/cem/
[claudecode]: https://claude.com/product/claude-code
[cursor]: https://cursor.com
[cursormcp]: https://docs.cursor.com/mcp
[lspref]: https://bennypowers.dev/cem/docs/reference/lsp/
[mcpref]: https://bennypowers.dev/cem/docs/reference/mcp/
[vscodeext]: https://marketplace.visualstudio.com/items?itemName=pwrs.cem-language-server-vscode
