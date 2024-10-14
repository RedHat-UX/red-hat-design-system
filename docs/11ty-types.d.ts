declare module '@11ty/eleventy-plugin-syntaxhighlight/src/getAttributes.js' {
  export default function getAttributes(...args: any[]): string
}

declare module '@11ty/eleventy/src/UserConfig.js' {
  import type MarkdownIt from 'markdown-it';
  interface EleventyPage {
    url: string;
    fileSlug: string;
    filePathStem: string;
    date: Date;
    inputPath: string;
    outputPath: string;
    outputFileExtension: string;
    templateSyntax: string;
    rawInput: string;
    lang: string;
  }

  interface EleventyData {
    version: string;
    generator: string;
    env: {
      root: string;
      config: string;
      source: "cli" | "script";
      runMode: "build" | 'serve'|'watch';
    };
    directories: {
      input: string;
      includes: string;
      data: string;
      output: string;
    };
  }

  interface Context {
    page: EleventyPage;
    eleventy: EleventyData;
  }

  interface FilterContext extends Context { }
  interface TransformContext extends Context {
    inputPath: string;
    outputPath: string;
    url: string;
    baseHref?: string;
  }

  interface CollectionItem {
    [key: string]: unknown;
    data?: {
      order: number;
      title: string;
    }
  }

  interface CollectionApi {
    getAll(): Required<CollectionItem>[];
    getAllSorted(): Required<CollectionItem>[];
    getFilteredByGlob(glob: string|string[]): Required<CollectionItem>[];
    getFilteredByTag(tag: string): Required<CollectionItem>[];
    getFilteredByTags(...tags: string[]): Required<CollectionItem>[];
  }

  interface PassthroughCopyOptions {
    filter: (path: string) => boolean;
  }

  interface CompileContext {
    defaultRenderer(data: unknown): Promise<string>;
  }

  interface AddExtensionOptions {
    key: string,
    compile(inputContent: string): (this: CompileContext, data: unknown) => string | Promise<string>;
  }

  interface EleventyBeforeEventHandlerOptions {
    directories: EleventyData['directories'],
    /** @deprecated */
    dir: {input: string; output: string; includes: string, data: string; layouts: string;};
    outputMode: 'js'|'json'|'ndjson';
    runMode: 'build'|'serve'|'watch';
  }

  interface EleventyAfterEventHandlerOptions extends EleventyBeforeEventHandlerOptions {
    results?: {inputPath:string;outputPath:string; url:string;content:string}[];
  }

  type TransformCallback = (this: TransformContext, content: string) => string | Promise<string>;

  type AddCollectionCallback = (api: CollectionApi) => CollectionItem[] | Promise<CollectionItem[]>;

  type OnCallback<O = EleventyBeforeEventHandlerOptions> = (opts: O) => void | Promise<void>;

  export type PluginFunction<Opts = unknown> = (config: UserConfig, opts?: Opts) => void | Promise<void>

  type FilterFunction<T = string, R = string> = (this: FilterContext, data: T) => R | Promise<R>;
  type FilterFunctionWithArgs<T = string, R = string> = (this: FilterContext, data: T, ...args: any[]) => R | Promise<R>;

  type DataEntry =
    | string
    | number
    | object
    | Promise<string|number|object>
    | (() => unknown)
    | (() => Promise<unknown>);

  export default class UserConfig {
    addCollection(name: string, callback: AddCollectionCallback): void;
    addDataExtension(names: string, processor: (content: string) => unknown | Promise<unknown>): void;
    addExtension(extension: string, options: AddExtensionOptions): void;
    addFilter(name: string, filter: FilterFunction): void;
    addFilter(name: string, filter: FilterFunctionWithArgs): void;
    addGlobalData(name: string, data: unknown | (() => unknown)): void;
    addJavaScriptFunction(name: string, filter: FilterFunction): void;
    addJavaScriptFunction(name: string, filter: FilterFunctionWithArgs): void;
    addPassthroughCopy(items: string | Record<string, string>, copyOptions?: PassthroughCopyOptions): void;
    addPlugin<Opts>(Plugin:  PluginFunction<Opts> | {
      initֵArguments?: Opts;
      configFunction: PluginFunction<Opts>;
    }, opts?: Opts): void | Promise<void>;
    addTransform(name: string, callback: TransformCallback): void;
    addWatchTarget(name: string, opts?: { resetConfig: boolean }): void;
    amendLibrary(md: 'md', callback: ((md: MarkdownIt) => MarkdownIt)): void;
    getFilter(name: string): FilterFunction;
    getFilter(name: string): FilterFunctionWithArgs;
    globalData: { [key: string]: DataEntry };
    on(event: 'eleventy.before', callback: OnCallback): void;
    on(event: 'eleventy.after', callback: OnCallback<EleventyAfterEventHandlerOptions>): void;
    on(event: 'eleventy.beforeWatch', callback: (changedFiles: string[]) => void | Promise<void>): void;
    on(event: 'eleventy.contentMap', callback: (opts: ({ inputPathToUrl: Record<string, string>, urlToInputPath: Record<string, string> })) => void | Promise<void>): void;
    on(event: 'eleventy.beforeConfig', callback: (config: UserConfig) => void | Promise<void>): void;
    setQuietMode(quiet: boolean): void;
    javascriptFunctions: Record<string, (...args: unknown[]) => any>;
    watchIgnores: Set<string>;
  }
}

declare module '@11ty/eleventy' {
  import UserConfig, { PluginFunction } from '@11ty/eleventy/src/UserConfig.js';
  export type { UserConfig };
  export const EleventyRenderPlugin: PluginFunction<{
    /** Change the renderTemplate shortcode name */
    tagName: string;
    /** Change the renderFile shortcode name */
    tagNameFile: string;
    /** Change the renderContent filter name */
    filterName: string;
    /**
     * Only available in Liquid right now
     * Does rendered content has access to the data cascade?
     */
    accessGlobalData: boolean;
  }>;
}


declare module '@11ty/eleventy-plugin-syntaxhighlight' {
  import { PluginFunction } from '@11ty/eleventy/src/UserConfig.js';
  import type { Prism } from 'prismjs';
  const Plugin: PluginFunction<{
    /** Line separator for line breaks */
    lineSeparator: string;
    /** Change which Eleventy template formats use syntax highlighters */
    templateFormats: string[];
    /** init callback lets you customize Prism */
    init(opts: { Prism: Prism }): void;
    /** Added in 3.1.1, add HTML attributes to the <pre> or <code> tags */
    preAttributes: {
      tabindex: number,
      /** Added in 4.1.0 you can use callback functions too */
      ["data-language"]({ language, content, options }): string;
    };
    codeAttributes: Record<string, string>;
    /** Added in 5.0.0, throw errors on invalid language names */
    errorOnInvalidLanguage: boolean;
  }>;
  export default Plugin;
  export function pairedShortcode(content: string, language: string, highlightLines: string, options: object): string;
}

declare module '@11ty/eleventy-plugin-directory-output' {
  import { PluginFunction } from "@11ty/eleventy/src/UserConfig.js";
  const Plugin: PluginFunction<{
    /** Customize columns */
    columns: { filesize: boolean; benchmark: boolean; };
    /** Will show in yellow if greater than this number of bytes */
    warningFileSize: number;
  }>;
  export default Plugin;
}

declare module '@11ty/eleventy-fetch' {
  import { PluginFunction } from "@11ty/eleventy/src/UserConfig.js";
  type Duration = `${number}${'d'|'m'|'h'}`;
  type CacheType = 'json' | 'buffer' | 'text';
  function EleventyFetch<T = unknown>(url: string, options: {
    directory: string;
    removeUrlQueryParams: boolean;
    type: CacheType;
    duration: Duration;
    fetchOptions: { headers: Record<string, string> };
  }): Promise<T>;
  export default EleventyFetch;
  export class AssetCache<T=unknown> {
    constructor(tag: string);
    isCacheValid(time: Duration): boolean;
    save(data:T, type: CacheType): Promise<void>;
    getCachedValue(): Promise<T>
    cache: {
      destroy(): void;
    }
  }
}

declare module '@patternfly/pfe-tools/11ty/plugins/anchors.cjs' {
  import type { Cheerio } from 'cheerio';
  import type { AnyNode } from 'domhandler';
  import { PluginFunction } from "@11ty/eleventy/src/UserConfig.js";
  const AnchorsPlugin: PluginFunction<{
    exclude: RegExp;
    formatter($: Cheerio<AnyNode>, existingids: string[]): string|null;
  }>;
  export default AnchorsPlugin;
}

declare module '@patternfly/pfe-tools/11ty/plugins/custom-elements-manifest.cjs' {
  import type { PluginOptions } from '@patternfly/pfe-tools/11ty/plugins/types';
  import { PluginFunction } from "@11ty/eleventy/src/UserConfig.js";
  const Plugin: PluginFunction<PluginOptions>;
  export default Plugin;
}

declare module 'eleventy-plugin-helmet' {
  import { PluginFunction } from "@11ty/eleventy/src/UserConfig.js";
  const Plugin: PluginFunction;
  export default Plugin;
}
