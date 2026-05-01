const FRONTMATTER_RE = /^---\n([\s\S]*?)\n---\n?/;

/** Strip YAML frontmatter from file content, returning only the body */
export function stripFrontmatter(content: string): string {
  return content.replace(FRONTMATTER_RE, '');
}
