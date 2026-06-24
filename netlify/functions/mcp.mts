/**
 * RHDS MCP Server — Netlify Function (Streamable HTTP, stateless)
 *
 * Exposes Red Hat Design System component data via the Model Context Protocol,
 * sourced from the Custom Elements Manifest (custom-elements.json) generated at
 * build time by `cem generate`.
 *
 * Resources:
 *   cem://elements               — paginated list of element tag names
 *   cem://elements?limit=N&cursor=N — pagination params (default limit: 20)
 *   cem://element/{tagName}      — full element API (attrs, slots, events, CSS)
 *
 * Transport: Streamable HTTP (stateless, one transport per request).
 * JSON responses only — no SSE streaming — compatible with Netlify Functions.
 *
 * The CEM manifest is imported as a JSON module; esbuild inlines it into the
 * function bundle at deploy time, so no file-system access is needed at runtime.
 *
 * Observability: when OTEL_EXPORTER_OTLP_ENDPOINT is set, traces are emitted
 * via the OTLP HTTP exporter and force-flushed before the response is returned.
 */

import type { Config } from '@netlify/functions';
import { McpServer, ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';
import { WebStandardStreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js';
import { trace, SpanStatusCode } from '@opentelemetry/api';
import { BasicTracerProvider, SimpleSpanProcessor } from '@opentelemetry/sdk-trace-node';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
// esbuild inlines this JSON into the function bundle at build time
import cemJson from '../../custom-elements.json' with { type: 'json' };

// ---------------------------------------------------------------------------
// OpenTelemetry — initialised once at module load; no-op if endpoint unset
// ---------------------------------------------------------------------------

const otelEndpoint = process.env['OTEL_EXPORTER_OTLP_ENDPOINT'];
const serviceName = process.env['OTEL_SERVICE_NAME'] ?? 'rhds-mcp';

let tracerProvider: BasicTracerProvider | undefined;

if (otelEndpoint) {
  // Validate the endpoint is a well-formed https:// URL before use (Finding 3)
  let validatedEndpoint: string;
  try {
    const u = new URL(otelEndpoint);
    if (u.protocol !== 'https:') throw new Error('OTEL endpoint must use https://');
    validatedEndpoint = u.origin;
  } catch {
    console.error('[rhds-mcp] Invalid OTEL_EXPORTER_OTLP_ENDPOINT — tracing disabled');
    validatedEndpoint = '';
  }
  if (validatedEndpoint) {
    tracerProvider = new BasicTracerProvider({
      spanProcessors: [
        new SimpleSpanProcessor(
          new OTLPTraceExporter({ url: `${validatedEndpoint}/v1/traces` }),
        ),
      ],
    });
    trace.setGlobalTracerProvider(tracerProvider);
  }
}

const tracer = trace.getTracer(serviceName);

// ---------------------------------------------------------------------------
// CEM manifest types (subset used by this server)
// ---------------------------------------------------------------------------

interface CemType {
  text: string;
}

interface CemAttribute {
  name: string;
  type?: CemType;
  description?: string;
  default?: string;
}

interface CemSlot {
  name: string;
  description?: string;
}

interface CemEvent {
  name: string;
  type?: CemType;
  description?: string;
}

interface CemCssProperty {
  name: string;
  description?: string;
  default?: string;
}

interface CemCssPart {
  name: string;
  description?: string;
}

interface CemDeclaration {
  name: string;
  tagName?: string;
  summary?: string;
  description?: string;
  attributes?: CemAttribute[];
  slots?: CemSlot[];
  events?: CemEvent[];
  cssProperties?: CemCssProperty[];
  cssParts?: CemCssPart[];
}

interface CemModule {
  path: string;
  declarations?: CemDeclaration[];
}

interface CemManifest {
  schemaVersion: string;
  modules: CemModule[];
}

// ---------------------------------------------------------------------------
// Index manifest by tagName at module load time (once per warm Lambda instance)
// ---------------------------------------------------------------------------

const cem = cemJson as unknown as CemManifest;

const elementMap = new Map<string, CemDeclaration>();
for (const mod of cem.modules) {
  for (const decl of mod.declarations ?? []) {
    if (decl.tagName) {
      elementMap.set(decl.tagName, decl);
    }
  }
}

const allTagNames = Array.from(elementMap.keys());

const DEFAULT_PAGE_LIMIT = 20;

// Allowlist for tag name characters — rejects anything outside [a-z0-9-] and
// caps length at 64 chars to prevent reflected user input in error messages (Finding 1).
const TAG_NAME_RE = /^[a-z0-9-]{1,64}$/;
function sanitizeTagName(raw: string): string | null {
  return TAG_NAME_RE.test(raw) ? raw : null;
}

// ---------------------------------------------------------------------------
// MCP server factory — a new server is created for each stateless request
// ---------------------------------------------------------------------------

function createMcpServer(): McpServer {
  const server = new McpServer({ name: 'rhds', version: '0.1.0' });

  // ---- Resource: cem://elements -------------------------------------------
  // Returns a paginated list of tag names. Use cem://element/{tagName} for
  // full API details. Kept compact (tag names only) to stay within the 2k
  // response size guideline (DESIGN-003).
  //
  // Pagination params (as URI query string):
  //   limit  — items per page (default: 20)
  //   cursor — integer offset into the full list (default: 0)
  server.registerResource(
    'elements',
    'cem://elements',
    {
      description: [
        'Paginated list of RHDS custom element tag names.',
        `Default page size: ${DEFAULT_PAGE_LIMIT}.`,
        'Use cem://elements?limit=N&cursor=N to page through results.',
        'Use cem://element/{tagName} to retrieve the full API for a specific element.',
      ].join(' '),
      mimeType: 'application/json',
    },
    async (uri) => {
      const params = new URL(uri.href.replace('cem://', 'mcp://host/')).searchParams;
      const limit = Math.min(100, Math.max(1, parseInt(params.get('limit') ?? String(DEFAULT_PAGE_LIMIT), 10)));
      const cursor = Math.max(0, parseInt(params.get('cursor') ?? '0', 10));
      const page = allTagNames.slice(cursor, cursor + limit);
      const nextCursor = cursor + limit < allTagNames.length ? cursor + limit : null;

      return {
        contents: [{
          uri: uri.href,
          mimeType: 'application/json',
          text: JSON.stringify({
            tagNames: page,
            total: allTagNames.length,
            cursor,
            limit,
            nextCursor,
          }, null, 2),
        }],
      };
    },
  );

  // ---- Resource template: cem://element/{tagName} -------------------------
  server.registerResource(
    'element',
    new ResourceTemplate('cem://element/{tagName}', {
      list: async () => ({
        resources: allTagNames.map(tagName => ({
          uri: `cem://element/${tagName}`,
          name: tagName,
          description: elementMap.get(tagName)?.summary ?? '',
          mimeType: 'application/json',
        })),
      }),
    }),
    {
      description: [
        'Full RHDS element API for the given tag name.',
        'Includes attributes, slots, events, CSS custom properties, and CSS parts.',
      ].join(' '),
      mimeType: 'application/json',
    },
    async (uri, { tagName }) => {
      const tag = sanitizeTagName(String(tagName));
      const decl = tag ? elementMap.get(tag) : undefined;

      if (!decl) {
        return {
          contents: [{
            uri: uri.href,
            mimeType: 'text/plain',
            text: 'Element not found in the RHDS manifest.',
          }],
        };
      }

      return {
        contents: [{
          uri: uri.href,
          mimeType: 'application/json',
          text: JSON.stringify({
            tagName: tag,
            name: decl.name,
            summary: decl.summary ?? '',
            description: decl.description ?? '',
            attributes: decl.attributes ?? [],
            slots: decl.slots ?? [],
            events: decl.events ?? [],
            cssProperties: decl.cssProperties ?? [],
            cssParts: decl.cssParts ?? [],
          }, null, 2),
        }],
      };
    },
  );

  return server;
}

// ---------------------------------------------------------------------------
// Netlify Function handler
// ---------------------------------------------------------------------------

export default async (req: Request): Promise<Response> => {
  const span = tracer.startSpan('mcp.request', {
    attributes: {
      'http.method': req.method,
      'http.url': req.url,
    },
  });

  try {
    const transport = new WebStandardStreamableHTTPServerTransport({
      sessionIdGenerator: undefined, // stateless — no cross-request session state
      enableJsonResponse: true, // plain JSON responses; no SSE (serverless-safe)
    });

    const server = createMcpServer();
    await server.connect(transport);

    const response = await transport.handleRequest(req);
    span.setAttribute('http.status_code', response.status);
    span.setStatus({ code: SpanStatusCode.OK });
    return response;
  } catch (err) {
    span.recordException(err instanceof Error ? err : new Error(String(err)));
    span.setStatus({ code: SpanStatusCode.ERROR });
    // Return a sanitized error rather than rethrowing raw exception details (Finding 4)
    return new Response(
      JSON.stringify({ jsonrpc: '2.0', error: { code: -32603, message: 'Internal error' }, id: null }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  } finally {
    span.end();
    // Force-flush traces before the serverless function returns
    await tracerProvider?.forceFlush();
  }
};

export const config: Config = {
  path: '/mcp',
  rateLimit: {
    windowSize: 60, // seconds
    windowLimit: 30, // per IP per window
  },
};
