import { readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

/**
 * An Eleventy plugin to read and inline CSS file contents.
 * @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 * @param {object} [options={}]
 * @param {string} [options.cssSourcePath="css"] The folder containing the source CSS files.
 */
export default function inlineCssPlugin(eleventyConfig, options = {}) {
  // Set default options
  const defaults = {
    cssSourcePath: '',
  };

  // Merge defaults with user-provided options
  const settings = Object.assign(defaults, options);

  /**
   * Reads a CSS file from the filesystem and returns its contents as a string.
   * This is an async filter, which is best practice for I/O operations.
   * @param {string} filename The name of the CSS file (e.g., 'main.css').
   * @returns {Promise<string>} The contents of the CSS file.
   */
  eleventyConfig.addNunjucksAsyncFilter('inlineCss', async (filename, callback) => {
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
      console.error(`[eleventy-plugin-inline-css] Failed to read CSS file: ${fullPath}`, error.message);
      callback(null, '');
    }
  });
};
