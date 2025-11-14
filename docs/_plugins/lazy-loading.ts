import type { UserConfig } from '@11ty/eleventy';
import { load as parseHTML } from 'cheerio';

export interface LazyLoadingOptions {
  /**
   * Number of images to skip before applying lazy loading
   * @default 1
   */
  skipFirstImages?: number;

  /**
   * CSS selectors to exclude from lazy loading
   * @default []
   */
  excludeSelectors?: string[];
}

/**
 * Eleventy plugin to automatically add loading="lazy" to images below the fold
 * @param eleventyConfig - Eleventy configuration object
 * @param options - Plugin options
 */
export default function LazyLoadingPlugin(
  eleventyConfig: UserConfig,
  options: LazyLoadingOptions = {}
) {
  const {
    skipFirstImages = 1,
    excludeSelectors = [],
  } = options;

  eleventyConfig.addTransform(
    'lazy-loading',
    function(
      this: { page?: { outputPath?: string; url?: string } },
      content: string
    ) {
      const outputPath = this.page?.outputPath;

      // Only process HTML files
      if (!outputPath?.endsWith('.html')) {
        return content;
      }

      const $ = parseHTML(content);
      const images = $('img').not('[loading]');

      let imageCount = 0;

      images.each((_, img) => {
        const $img = $(img);

        // Check if image should be excluded
        const shouldExclude = excludeSelectors.some(selector => {
          return $img.is(selector) || $img.closest(selector).length > 0;
        });

        if (shouldExclude) {
          return;
        }

        // Skip the first N images
        if (imageCount < skipFirstImages) {
          imageCount++;
          return;
        }

        // Add loading="lazy" to remaining images
        $img.attr('loading', 'lazy');
        imageCount++;
      });

      return $.html();
    }
  );
}
