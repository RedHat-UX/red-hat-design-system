# RHDS MCP Server

**Purpose**: Exposes Red Hat Design System component data via the [Model Context Protocol](https://modelcontextprotocol.io/), allowing AI agents and coding assistants to look up element APIs, slots, attributes, events, and CSS custom properties from the RHDS Custom Elements Manifest.

**Use cases**:
- An AI coding assistant generates correct `<rh-button>` markup with the right slots and attributes
- An agent audits a codebase for incorrect RHDS component usage
- A developer asks their editor "what CSS custom properties does `rh-card` expose?"

---

## Installation

This server is deployed as a Netlify Function and available at:

```
https://ux.redhat.com/mcp
```

No installation is required for consumers. To run locally for development:

```bash
npm install
netlify functions:serve --port 9999
# Server available at http://localhost:9999/mcp
```

### Adding to an MCP client

**Cursor** (`~/.cursor/mcp.json`):
```json
{
  "mcpServers": {
    "rhds": {
      "url": "https://ux.redhat.com/mcp"
    }
  }
}
```

**Claude Desktop** (`~/Library/Application Support/Claude/claude_desktop_config.json`):
```json
{
  "mcpServers": {
    "rhds": {
      "url": "https://ux.redhat.com/mcp"
    }
  }
}
```

For PR preview testing, substitute the Netlify deploy preview URL:
```
https://deploy-preview-{PR#}--red-hat-design-system.netlify.app/mcp
```

---

## Configuration

No environment variables are required to run the server. The following are optional:

| Environment Variable | Required | Default | Description |
|---|---|---|---|
| `OTEL_EXPORTER_OTLP_ENDPOINT` | No | — | OpenTelemetry collector endpoint; tracing is disabled if unset |
| `OTEL_SERVICE_NAME` | No | `rhds-mcp` | Service name emitted in OTEL traces |

---

## Available Resources

| URI | Description |
|---|---|
| `cem://elements` | Paginated list of all RHDS element tag names |
| `cem://element/{tagName}` | Full element API — attributes, slots, events, CSS custom properties, CSS parts |

### Transport

Streamable HTTP (stateless). Each request creates a new MCP session — no cross-request state.
JSON responses only; SSE streaming is not used (serverless-compatible).

### Pagination

`cem://elements` supports cursor-based pagination via URI parameters:

```
cem://elements?limit=20&cursor=20
```

| Parameter | Default | Description |
|---|---|---|
| `limit` | `20` | Number of elements per page |
| `cursor` | `0` | Offset (integer) into the full element list |

---

## Required Permissions

This server is read-only and requires no credentials. The data it serves (the RHDS Custom Elements Manifest) is publicly available on [ux.redhat.com](https://ux.redhat.com) and via the `@rhds/elements` npm package.

---

## Usage Examples

### Look up an element's API

```
User: What attributes does rh-button accept?
Resource read: cem://element/rh-button
Response: { "attributes": [{ "name": "variant", ... }, { "name": "disabled", ... }] }
```

### Discover available elements

```
User: What RHDS elements are available?
Resource read: cem://elements
Response: ["rh-accordion", "rh-alert", "rh-audio-player", ...]
```

---

## Security Considerations

- **Authentication**: None required — all data is public. If the server is extended to expose internal or protected data, Red Hat SSO / OAuth 2.0 MUST be added (SEC-005).
- **Read-only**: The server exposes only read resources. No tools that write, execute, or mutate state are provided.
- **Rate limiting**: 30 requests per minute per IP, enforced at the Netlify edge before the function is invoked.
- **Data in context**: The CEM manifest contains no PII, secrets, or sensitive data.
- **No user code execution**: The server never evaluates or executes user-provided input (SEC-003).

---

## Health Check

```bash
curl -s -X POST https://ux.redhat.com/mcp \
  -H "Content-Type: application/json" \
  -H "Accept: application/json, text/event-stream" \
  -d '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2025-03-26","capabilities":{},"clientInfo":{"name":"healthcheck","version":"0.0.1"}}}'
```

Expected response includes `"serverInfo":{"name":"rhds","version":"0.1.0"}`.

---

## Observability

When `OTEL_EXPORTER_OTLP_ENDPOINT` is set, the server emits OpenTelemetry traces for each MCP request via the OTLP HTTP exporter. Spans are force-flushed before the function returns to ensure delivery in the serverless context.

Set `OTEL_SERVICE_NAME` (default: `rhds-mcp`) to identify the service in your tracing backend.

---

## Troubleshooting

**"Not Acceptable" (406) response**
Include both `application/json` and `text/event-stream` in the `Accept` header.

**"Function not found" at `/.netlify/functions/mcp`**
When running locally with `netlify functions:serve`, use `/mcp` directly (not `/.netlify/functions/mcp`). The `config.path` setting enforces the short path.

**Empty `resources/list`**
The static `cem://elements` resource always appears. Element template URIs (`cem://element/{tagName}`) are listed via the `list` callback — ensure your MCP client calls `resources/list` (not just `resources/templates/list`).
