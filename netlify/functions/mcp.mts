/**
 * RHDS MCP Server — Netlify Function (Streamable HTTP, stateless)
 *
 * Exposes Red Hat Design System component data via the Model Context Protocol,
 * sourced from the Custom Elements Manifest (custom-elements.json) generated at
 * build time by `cem generate`.
 *
 * Resources:
 *   cem://elements               — all elements (tagName + summary)
 *   cem://element/{tagName}      — full element API (attrs, slots, events, CSS)
 *
 * Transport: Streamable HTTP (stateless, one transport per request).
 * JSON responses only — no SSE streaming — compatible with Netlify Functions.
 *
 * The CEM manifest is imported as a JSON module; esbuild inlines it into the
 * function bundle at deploy time, so no file-system access is needed at runtime.
 */

import type { Config } from '@netlify/functions';
import { McpServer, ResourceTemplate } from '@modelcontextprotocol/sdk/server/mcp.js';
import { WebStandardStreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js';
// esbuild inlines this JSON into the function bundle at build time
import cemJson from '../../custom-elements.json' with { type: 'json' };

// ---------------------------------------------------------------------------
// CEM manifest types (subset used by this server)
// ---------------------------------------------------------------------------

interface CemType { text: string }

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

// ---------------------------------------------------------------------------
// MCP server factory — a new server is created for each stateless request
// ---------------------------------------------------------------------------

function createMcpServer(): McpServer {
  const server = new McpServer({ name: 'rhds', version: '0.1.0' });

  // ---- Resource: cem://elements -------------------------------------------
  server.registerResource(
    'elements',
    'cem://elements',
    {
      description: 'All Red Hat Design System custom elements — tag names and summaries.',
      mimeType: 'application/json',
    },
    async () => ({
      contents: [{
        uri: 'cem://elements',
        mimeType: 'application/json',
        text: JSON.stringify(
          Array.from(elementMap.entries()).map(([tagName, decl]) => ({
            tagName,
            summary: decl.summary ?? '',
          })),
          null,
          2,
        ),
      }],
    }),
  );

  // ---- Resource template: cem://element/{tagName} -------------------------
  server.registerResource(
    'element',
    new ResourceTemplate('cem://element/{tagName}', {
      list: async () => ({
        resources: Array.from(elementMap.entries()).map(([tagName, decl]) => ({
          uri: `cem://element/${tagName}`,
          name: tagName,
          description: decl.summary ?? '',
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
      const tag = String(tagName);
      const decl = elementMap.get(tag);

      if (!decl) {
        return {
          contents: [{
            uri: uri.href,
            mimeType: 'text/plain',
            text: `Element "${tag}" was not found in the RHDS manifest.`,
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
  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: undefined, // stateless — no cross-request session state
    enableJsonResponse: true,      // plain JSON responses; no SSE (serverless-safe)
  });

  const server = createMcpServer();
  await server.connect(transport);

  return transport.handleRequest(req);
};

export const config: Config = {
  path: '/mcp',
  rateLimit: {
    windowSize: 60,  // seconds
    maxRequests: 30, // per IP per window
  },
};
