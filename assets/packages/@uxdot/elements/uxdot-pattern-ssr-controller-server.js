var _UxdotPatternSSRControllerServer_instances, _UxdotPatternSSRControllerServer_extractInlineContent, _UxdotPatternSSRControllerServer_getPatternContent, _UxdotPatternSSRControllerServer_highlight, _UxdotPatternSSRControllerServer_loadHighlighter;
import { __classPrivateFieldGet } from "tslib";
import { URL } from 'node:url';
import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { pathToFileURL } from 'node:url';
import { parseFragment, serialize } from 'parse5';
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js';
import { RHDSSSRController } from '@rhds/elements/lib/ssr-controller.js';
import * as Tools from '@parse5/tools';
let HighlightPairedShortcode;
function dedent(str) {
    const stripped = str.replace(/^\n/, '');
    const match = stripped.match(/^\s+/);
    return match ? stripped.replace(new RegExp(`^${match[0]}`, 'gm'), '') : str;
}
function isScript(node) {
    if (node.tagName === 'script') {
        const type = Tools.getAttribute(node, 'type');
        switch (type) {
            case 'module':
            case 'javascript':
            case 'application/javascript':
            case 'text/javascript':
            case null:
                return true;
        }
    }
    return false;
}
function isStyle(node) {
    return node.tagName === 'style';
}
export class UxdotPatternSSRControllerServer extends RHDSSSRController {
    constructor() {
        super(...arguments);
        _UxdotPatternSSRControllerServer_instances.add(this);
        this.hasCss = false;
        this.hasJs = false;
    }
    async ssrSetup(renderInfo) {
        HighlightPairedShortcode || (HighlightPairedShortcode = await __classPrivateFieldGet(this, _UxdotPatternSSRControllerServer_instances, "m", _UxdotPatternSSRControllerServer_loadHighlighter).call(this));
        const allContent = await __classPrivateFieldGet(this, _UxdotPatternSSRControllerServer_instances, "m", _UxdotPatternSSRControllerServer_getPatternContent).call(this, renderInfo);
        const partial = parseFragment(allContent);
        const baseUrl = pathToFileURL(renderInfo.page.inputPath);
        // NB: the css and js content functions *mutate* the partial,
        //     so it's important that the HTML content is serialized last, and that
        //     the entire content is printed as the runtime portion of the pattern.
        const cssContent = await __classPrivateFieldGet(this, _UxdotPatternSSRControllerServer_instances, "m", _UxdotPatternSSRControllerServer_extractInlineContent).call(this, 'css', partial, baseUrl);
        const jsContent = await __classPrivateFieldGet(this, _UxdotPatternSSRControllerServer_instances, "m", _UxdotPatternSSRControllerServer_extractInlineContent).call(this, 'js', partial, baseUrl);
        const htmlContent = serialize(partial).trim();
        this.hasCss = !!cssContent.length;
        this.hasJs = !!jsContent.length;
        this.allContent = unsafeHTML(allContent);
        this.cssContent = unsafeHTML(__classPrivateFieldGet(this, _UxdotPatternSSRControllerServer_instances, "m", _UxdotPatternSSRControllerServer_highlight).call(this, 'css', cssContent));
        this.jsContent = unsafeHTML(__classPrivateFieldGet(this, _UxdotPatternSSRControllerServer_instances, "m", _UxdotPatternSSRControllerServer_highlight).call(this, 'js', jsContent));
        this.htmlContent = unsafeHTML(__classPrivateFieldGet(this, _UxdotPatternSSRControllerServer_instances, "m", _UxdotPatternSSRControllerServer_highlight).call(this, 'html', htmlContent));
    }
}
_UxdotPatternSSRControllerServer_instances = new WeakSet(), _UxdotPatternSSRControllerServer_extractInlineContent = async function _UxdotPatternSSRControllerServer_extractInlineContent(kind, partial, baseUrl) {
    const prop = kind === 'js' ? 'jsSrc' : 'cssSrc';
    const nodePred = kind === 'js' ? isScript
        : kind === 'css' ? isStyle
            : () => false;
    let content = !this.host[prop] ? ''
        : await readFile(new URL(this.host[prop], baseUrl.href), 'utf-8');
    for (const scriptTag of Tools.queryAll(partial, node => Tools.isElementNode(node) && nodePred(node))) {
        content += `\n${dedent(Tools.getTextContent(scriptTag))}`;
        Tools.removeNode(scriptTag);
    }
    return content.trim();
}, _UxdotPatternSSRControllerServer_getPatternContent = async function _UxdotPatternSSRControllerServer_getPatternContent(renderInfo) {
    const { src } = this.host;
    if (!src) {
        return '';
    }
    else {
        return readFile(join(dirname(renderInfo.page.inputPath), src), 'utf8');
    }
}, _UxdotPatternSSRControllerServer_highlight = function _UxdotPatternSSRControllerServer_highlight(language, content) {
    const result = HighlightPairedShortcode(content, language, '', {
        lineSeparator: '\n',
        errorOnInvalidLanguage: false,
        alwaysWrapLineHighlights: false,
        preAttributes: {},
        codeAttributes: {},
    }) ?? '';
    return result;
}, _UxdotPatternSSRControllerServer_loadHighlighter = async function _UxdotPatternSSRControllerServer_loadHighlighter() {
    // START workaround for ssr: prism will try to use the DOM is `document` is available
    // but lit-ssr needs the shims, so delete it before highlighting and restore it after
    const shim = globalThis.document;
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    delete globalThis.document;
    const { pairedShortcode } = await import('@11ty/eleventy-plugin-syntaxhighlight');
    // END workaround
    globalThis.document = shim;
    return pairedShortcode;
};
//# sourceMappingURL=uxdot-pattern-ssr-controller-server.js.map