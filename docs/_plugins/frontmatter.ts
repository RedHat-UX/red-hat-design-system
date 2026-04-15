import yaml from 'js-yaml';

const FRONTMATTER_RE = /^---\n([\s\S]*?)\n---\n?/;

/** Strip YAML frontmatter from file content, returning only the body */
export function stripFrontmatter(content: string): string {
  return content.replace(FRONTMATTER_RE, '');
}

export interface DemoFrontmatter {
  description?: string;
  doc?: string;
  url?: string;
  for?: string;
}

/** Parse YAML frontmatter from file content, returning data and body */
export function parseFrontmatter(content: string): { data: DemoFrontmatter; body: string } {
  const match = content.match(FRONTMATTER_RE);
  if (!match) {
    return { data: {}, body: content };
  }
  const data = (yaml.load(match[1]) ?? {}) as DemoFrontmatter;
  const body = content.slice(match[0].length);
  return { data, body };
}
