import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';
import type { UserConfig } from '@11ty/eleventy';

interface InlineCssPluginOptions {
  /** The folder containing the source CSS files. */
  cssSourcePath?: string;
}

type NunjucksAsyncCallback = (error: Error | null, result: string) => void;

interface EleventyConfig extends UserConfig {
  addNunjucksAsyncFilter: (
    name: string,
    callback: (filename: string, cb: NunjucksAsyncCallback) => Promise<void>
  ) => void;
}

/**
 * An Eleventy plugin to read and inline CSS file contents.
 * @param eleventyConfig - The Eleventy configuration object
 * @param options - Plugin options
 */
export default function inlineCssPlugin(
  eleventyConfig: EleventyConfig,
  options: InlineCssPluginOptions = {}
): void {
  // Set default options
  const defaults: Required<InlineCssPluginOptions> = {
    cssSourcePath: '',
  };

  // Merge defaults with user-provided options
  const settings: Required<InlineCssPluginOptions> = { ...defaults, ...options };

  /**
   * Reads a CSS file from the filesystem and returns its contents as a string.
   * This is an async filter, which is best practice for I/O operations.
   */
  eleventyConfig.addNunjucksAsyncFilter(
    'inlineCss',
    async (filename: string, callback: NunjucksAsyncCallback): Promise<void> => {
      // Construct the full path to the CSS file
      const fullPath = path.join(process.cwd(), settings.cssSourcePath, filename);

      try {
        // Read the file asynchronously and return its content as a string (utf8)
        // The `await` keyword pauses execution until the file is read.
        const cssContent = await readFile(fullPath, 'utf8');

        // Pass the result back to the template via the callback.
        callback(null, cssContent);
      } catch (error) {
        // If the file is not found or reading fails, log an error and return an empty string.
        // eslint-disable-next-line no-console
        console.error(
          `[eleventy-plugin-inline-css] Failed to read CSS file: ${fullPath}`,
          error instanceof Error ? error.message : String(error)
        );
        callback(null, '');
      }
    }
  );
}
