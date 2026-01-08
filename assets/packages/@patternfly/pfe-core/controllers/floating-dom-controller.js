var _FloatingDOMController_instances, _FloatingDOMController_open, _FloatingDOMController_opening, _FloatingDOMController_cleanup, _FloatingDOMController_anchor, _FloatingDOMController_alignment, _FloatingDOMController_styles, _FloatingDOMController_placement, _FloatingDOMController_options, _FloatingDOMController_invoker_get, _FloatingDOMController_content_get, _FloatingDOMController_arrow_get, _FloatingDOMController_update;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { isServer } from 'lit';
/**
 * Controls floating DOM within a web component, e.g. tooltips and popovers
 */
export class FloatingDOMController {
    /** The crosswise alignment of the invoker on which to display the floating DOM */
    get alignment() {
        return __classPrivateFieldGet(this, _FloatingDOMController_alignment, "f") ?? 'center';
    }
    /** The side of the invoker on which to display the floating DOM */
    get anchor() {
        return __classPrivateFieldGet(this, _FloatingDOMController_anchor, "f") ?? '';
    }
    /**
     * When true, the floating DOM is visible
     */
    get open() {
        return __classPrivateFieldGet(this, _FloatingDOMController_open, "f");
    }
    /** The computed placement of the floating DOM */
    get placement() {
        return __classPrivateFieldGet(this, _FloatingDOMController_placement, "f") ?? 'top';
    }
    /**
     * Styles to apply to your element's container
     *
     * - `--_floating-content-translate`: translate to apply to floating content.
     */
    get styles() {
        return __classPrivateFieldGet(this, _FloatingDOMController_styles, "f") ?? {};
    }
    constructor(host, options) {
        _FloatingDOMController_instances.add(this);
        this.host = host;
        _FloatingDOMController_open.set(this, false);
        _FloatingDOMController_opening.set(this, false);
        _FloatingDOMController_cleanup.set(this, void 0);
        _FloatingDOMController_anchor.set(this, void 0);
        _FloatingDOMController_alignment.set(this, void 0);
        _FloatingDOMController_styles.set(this, void 0);
        _FloatingDOMController_placement.set(this, void 0);
        _FloatingDOMController_options.set(this, void 0);
        host.addController(this);
        __classPrivateFieldSet(this, _FloatingDOMController_options, {
            invoker: (() => host),
            shift: true,
            ...options,
        }, "f");
    }
    hostDisconnected() {
        __classPrivateFieldGet(this, _FloatingDOMController_cleanup, "f")?.call(this);
    }
    /**
     * Show the floating DOM
     * @param [options={}]
     * @param options.offset
     * @param options.placement
     * @param options.flip
     * @param options.fallbackPlacements
     * */
    async show({ offset, placement, flip, fallbackPlacements } = {}) {
        const invoker = __classPrivateFieldGet(this, _FloatingDOMController_instances, "a", _FloatingDOMController_invoker_get);
        const content = __classPrivateFieldGet(this, _FloatingDOMController_instances, "a", _FloatingDOMController_content_get);
        if (!invoker || !content) {
            return;
        }
        if (!__classPrivateFieldGet(this, _FloatingDOMController_opening, "f")) {
            __classPrivateFieldSet(this, _FloatingDOMController_opening, true, "f");
            const p = __classPrivateFieldGet(this, _FloatingDOMController_instances, "m", _FloatingDOMController_update).call(this, placement, offset, flip, fallbackPlacements);
            __classPrivateFieldSet(this, _FloatingDOMController_cleanup, __classPrivateFieldGet(this, _FloatingDOMController_cleanup, "f") ?? autoUpdate(invoker, content, () => __classPrivateFieldGet(this, _FloatingDOMController_instances, "m", _FloatingDOMController_update).call(this, placement, offset, flip, fallbackPlacements)), "f");
            await p;
            __classPrivateFieldSet(this, _FloatingDOMController_opening, false, "f");
        }
        __classPrivateFieldSet(this, _FloatingDOMController_open, true, "f");
        this.host.requestUpdate();
    }
    /** Hide the floating DOM */
    async hide() {
        await this.host.updateComplete;
        while (__classPrivateFieldGet(this, _FloatingDOMController_opening, "f") && !this.open) {
            await new Promise(requestAnimationFrame);
        }
        __classPrivateFieldSet(this, _FloatingDOMController_open, false, "f");
        __classPrivateFieldGet(this, _FloatingDOMController_cleanup, "f")?.call(this);
        this.host.requestUpdate();
        await this.host.updateComplete;
    }
}
_FloatingDOMController_open = new WeakMap(), _FloatingDOMController_opening = new WeakMap(), _FloatingDOMController_cleanup = new WeakMap(), _FloatingDOMController_anchor = new WeakMap(), _FloatingDOMController_alignment = new WeakMap(), _FloatingDOMController_styles = new WeakMap(), _FloatingDOMController_placement = new WeakMap(), _FloatingDOMController_options = new WeakMap(), _FloatingDOMController_instances = new WeakSet(), _FloatingDOMController_invoker_get = function _FloatingDOMController_invoker_get() {
    const { invoker } = __classPrivateFieldGet(this, _FloatingDOMController_options, "f");
    return typeof invoker === 'function' ? invoker() : invoker;
}, _FloatingDOMController_content_get = function _FloatingDOMController_content_get() {
    const { content } = __classPrivateFieldGet(this, _FloatingDOMController_options, "f");
    return typeof content === 'function' ? content() : content;
}, _FloatingDOMController_arrow_get = function _FloatingDOMController_arrow_get() {
    const { arrow } = __classPrivateFieldGet(this, _FloatingDOMController_options, "f");
    return typeof arrow === 'function' ? arrow() : arrow;
}, _FloatingDOMController_update = async function _FloatingDOMController_update(placement = 'top', offset, flip = true, fallbackPlacements) {
    var _a, _b;
    const { padding, shift } = __classPrivateFieldGet(this, _FloatingDOMController_options, "f");
    const invoker = __classPrivateFieldGet(this, _FloatingDOMController_instances, "a", _FloatingDOMController_invoker_get);
    const content = __classPrivateFieldGet(this, _FloatingDOMController_instances, "a", _FloatingDOMController_content_get);
    const arrow = __classPrivateFieldGet(this, _FloatingDOMController_instances, "a", _FloatingDOMController_arrow_get);
    if (!invoker || !content) {
        return;
    }
    const cache = new Map();
    const { x, y, placement: _placement, arrow: arrowData, } = calculatePosition(invoker, content, {
        strategy: 'absolute',
        placement,
        offset,
        enableShift: shift,
        shiftPadding: padding,
        enableFlip: flip,
        flipPadding: padding,
        fallbackPlacements,
        arrow: arrow ?? undefined,
        arrowPadding: arrow ? arrow.offsetHeight / 2 : undefined,
    }, cache);
    if (arrow) {
        const { x: arrowX, y: arrowY } = arrowData || {};
        const staticSide = {
            top: 'bottom',
            right: 'left',
            bottom: 'top',
            left: 'right',
        }[_placement.split('-')[0]] || '';
        Object.assign(arrow.style, {
            left: arrowX != null ? `${arrowX}px` : '',
            top: arrowY != null && !['top'].includes(_placement) ? `${arrowY}px` : '',
            right: '',
            bottom: '',
            [staticSide]: `-${arrow.offsetHeight / 2}px`,
        });
    }
    __classPrivateFieldSet(this, _FloatingDOMController_placement, _placement, "f");
    _a = this, _b = this, [({ set value(_c) { __classPrivateFieldSet(_a, _FloatingDOMController_anchor, _c, "f"); } }).value, ({ set value(_c) { __classPrivateFieldSet(_b, _FloatingDOMController_alignment, _c, "f"); } }).value] = (__classPrivateFieldGet(this, _FloatingDOMController_placement, "f").split('-') ?? []);
    __classPrivateFieldSet(this, _FloatingDOMController_styles, {
        '--_floating-content-translate': `${x}px ${y}px`,
    }, "f");
    this.host.requestUpdate();
};
const absoluteOrFixed = new Set(['absolute', 'fixed']);
const noOffsets = createCoords(0);
const originSides = new Set(['left', 'top']);
const lastTraversableNodeNames = new Set(['html', 'body', '#document']);
const transformProperties = [
    'transform',
    'translate',
    'scale',
    'rotate',
    'perspective',
];
const willChangeValues = [
    'transform',
    'translate',
    'scale',
    'rotate',
    'perspective',
    'filter',
];
const containValues = ['paint', 'layout', 'strict', 'content'];
const invalidOverflowDisplayValues = new Set(['inline', 'contents']);
const tableElements = new Set(['table', 'td', 'th']);
const topLayerSelectors = [':popover-open', ':modal'];
const oppositeSideMap = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom',
};
const oppositeAlignmentMap = {
    start: 'end',
    end: 'start',
};
const yAxisSides = new Set(['top', 'bottom']);
// Utility functions
/**
 * Creates a coordinate object with the same value for both x and y.
 * @param v - The value to use for both coordinates
 * @returns Coordinate object with x and y set to the same value
 */
function createCoords(v) {
    return { x: v, y: v };
}
;
/**
 * Clamps a value between a minimum and maximum range.
 * @param start - The minimum value
 * @param value - The value to clamp
 * @param end - The maximum value
 * @returns The clamped value
 */
function clamp(start, value, end) {
    return Math.max(start, Math.min(value, end));
}
/**
 * Extracts the side from a placement string.
 * @param placement - The placement string (e.g., 'top-start')
 * @returns The side portion (e.g., 'top')
 */
function getSide(placement) {
    return placement.split('-')[0];
}
/**
 * Extracts the alignment from a placement string.
 * @param placement - The placement string (e.g., 'top-start')
 * @returns The alignment portion (e.g., 'start') or undefined if no alignment
 */
function getAlignment(placement) {
    return placement.split('-')[1];
}
/**
 * Gets the opposite axis (x ↔ y).
 * @param axis - The axis to flip
 * @returns The opposite axis
 */
function getOppositeAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
}
/**
 * Gets the length property name for an axis.
 * @param axis - The axis ('x' or 'y')
 * @returns 'width' for x-axis, 'height' for y-axis
 */
function getAxisLength(axis) {
    return axis === 'y' ? 'height' : 'width';
}
/**
 * Gets the axis that runs along the side of a placement.
 * @param placement - The placement to get the side axis for
 * @returns 'y' for top/bottom sides, 'x' for left/right sides
 */
function getSideAxis(placement) {
    return yAxisSides.has(getSide(placement)) ? 'y' : 'x';
}
/**
 * Gets the axis that runs along the alignment of a placement.
 * @param placement - The placement to get the alignment axis for
 * @returns The axis perpendicular to the side axis
 */
function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
}
/**
 * Flips the alignment portion of a placement (start ↔ end).
 * @param placement - The placement string to flip alignment for
 * @returns The placement with opposite alignment
 */
function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
}
/**
 * Gets the opposite placement by flipping the side.
 * @param placement - The placement to flip
 * @returns The placement with opposite side
 */
function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
}
/**
 * Converts padding value to a complete side object.
 * @param padding - The padding value (number or partial side object)
 * @returns Complete side object with padding for all sides
 */
function getPaddingObject(padding) {
    return typeof padding !== 'number' ? {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...padding,
    } : {
        top: padding,
        right: padding,
        bottom: padding,
        left: padding,
    };
}
/**
 * Converts a basic rect to a client rect object with all sides.
 * @param rect - The basic rect with x, y, width, height
 * @returns Client rect object with top, left, right, bottom properties
 */
function rectToClientRect(rect) {
    const { x, y, width, height } = rect;
    return {
        width,
        height,
        top: y,
        left: x,
        right: x + width,
        bottom: y + height,
        x,
        y,
    };
}
// =============================================================================
// DOM UTILITY FUNCTIONS
// =============================================================================
/**
 * Gets the node name of a given node or window object.
 * @param {Node | Window} node - The node or window to get the name for
 * @returns {string} The lowercase node name, or '#document' for non-Node objects
 */
function getNodeName(node) {
    if (isNode(node)) {
        return (node.nodeName || '').toLowerCase();
    }
    // Mocked nodes in testing environments may not be instances of Node. By
    // returning `#document` an infinite loop won't occur.
    // https://github.com/floating-ui/floating-ui/issues/2317
    return '#document';
}
/**
 * Gets the document element (html element) for a given node or window.
 * @param  node - The node or window to get the document element for
 * @returns  The document element (html element)
 */
function getDocumentElement(node) {
    return ((isNode(node) ? node.ownerDocument : node.document) || window.document)?.documentElement;
}
/**
 * Type guard to check if a value is a Node.
 * @param  value - The value to check
 * @returns  True if the value is a Node, false otherwise
 */
function isNode(value) {
    return !isServer && value instanceof Node;
}
/**
 * Type guard to check if a value is an Element.
 * @param  value - The value to check
 * @returns  True if the value is an Element, false otherwise
 */
function isElement(value) {
    return !isServer && value instanceof Element;
}
/**
 * Type guard to check if a value is an HTMLElement.
 * @param  value - The value to check
 * @returns  True if the value is an HTMLElement, false otherwise
 */
function isHTMLElement(value) {
    return !isServer && value instanceof HTMLElement;
}
/**
 * Type guard to check if a value is a ShadowRoot.
 * @param  value - The value to check
 * @returns  True if the value is a ShadowRoot, false otherwise
 */
function isShadowRoot(value) {
    return !isServer && typeof ShadowRoot !== 'undefined' && value instanceof ShadowRoot;
}
/**
 * Checks if an element has overflow properties that create a scrolling context.
 * @param  element - The element to check
 * @returns  True if the element has overflow properties that create a scrolling context
 */
function isOverflowElement(element) {
    const { overflow, overflowX, overflowY, display } = window.getComputedStyle(element);
    return (/auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX)
        && !invalidOverflowDisplayValues.has(display));
}
/**
 * Checks if an element is a table-related element (table, td, th).
 * @param  element - The element to check
 * @returns  True if the element is a table-related element
 */
function isTableElement(element) {
    return tableElements.has(getNodeName(element));
}
/**
 * Checks if an element is in the top layer (popover or modal).
 * @param  element - The element to check
 * @returns  True if the element is in the top layer
 */
function isTopLayer(element) {
    return topLayerSelectors.some(selector => {
        try {
            return element.matches(selector);
        }
        catch {
            return false;
        }
    });
}
/**
 * Checks if an element or CSS style declaration creates a containing block.
 * A containing block is the element relative to which positioned elements are positioned.
 * @param  elementOrCss - The element or CSS style declaration to check
 * @returns  True if the element creates a containing block
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
 * @see https://drafts.csswg.org/css-transforms-2/#individual-transforms
 */
function isContainingBlock(elementOrCss) {
    const webkit = isWebKit();
    const css = isElement(elementOrCss) ?
        window.getComputedStyle(elementOrCss)
        : elementOrCss;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    // https://drafts.csswg.org/css-transforms-2/#individual-transforms
    return (transformProperties.some(value => css[value] ?
        css[value] !== 'none'
        : false)
        || (css.containerType ? css.containerType !== 'normal' : false)
        || (!webkit && (css.backdropFilter ? css.backdropFilter !== 'none' : false))
        || (!webkit && (css.filter ? css.filter !== 'none' : false))
        || willChangeValues.some(value => (css.willChange || '').includes(value))
        || containValues.some(value => (css.contain || '').includes(value)));
}
/**
 * Gets the nearest containing block element for a given element.
 * Traverses up the DOM tree to find the first element that creates a containing block.
 * @param {Element} element - The element to find the containing block for
 * @returns {HTMLElement | null} The containing block element, or null if none found
 */
function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
        if (isContainingBlock(currentNode)) {
            return currentNode;
        }
        else if (isTopLayer(currentNode)) {
            return null;
        }
        currentNode = getParentNode(currentNode);
    }
    return null;
}
/**
 * Checks if the current browser is WebKit-based.
 * @returns {boolean} True if the browser is WebKit-based, false otherwise
 */
function isWebKit() {
    if (typeof CSS === 'undefined' || !CSS.supports) {
        return false;
    }
    return CSS.supports('-webkit-backdrop-filter', 'none');
}
/**
 * Checks if a node is the last traversable node in the DOM tree.
 * @param {Node} node - The node to check
 * @returns {boolean} True if the node is the last traversable node (html, body, or #document)
 */
function isLastTraversableNode(node) {
    return lastTraversableNodeNames.has(getNodeName(node));
}
/**
 * Gets the scroll position of an element or window.
 * @param {Element | Window} element - The element or window to get scroll position for
 * @returns {{scrollLeft: number, scrollTop: number}} Object containing scrollLeft and scrollTop values
 */
function getNodeScroll(element) {
    if (isElement(element)) {
        return {
            scrollLeft: element.scrollLeft,
            scrollTop: element.scrollTop,
        };
    }
    return {
        scrollLeft: element.scrollX,
        scrollTop: element.scrollY,
    };
}
/**
 * Gets the parent node of a given node, handling shadow DOM and slotted elements.
 * @param {Node} node - The node to get the parent for
 * @returns {Node} The parent node, handling shadow DOM boundaries and slotted elements
 */
function getParentNode(node) {
    if (getNodeName(node) === 'html') {
        return node;
    }
    const result = 
    // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot
        // DOM Element detected.
        || node.parentNode
        // ShadowRoot detected.
        || (isShadowRoot(node) && node.host)
        // Fallback.
        || getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
}
/**
 * Gets the nearest overflow ancestor element for a given node.
 * Traverses up the DOM tree to find the first element that has overflow properties.
 * @param {Node} node - The node to find the overflow ancestor for
 * @returns {HTMLElement} The nearest overflow ancestor element
 */
function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
        return node.ownerDocument ?
            node.ownerDocument.body
            : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
        return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
}
/**
 * Gets all overflow ancestors for a given node, including windows and visual viewports.
 * @param  node - The node to get overflow ancestors for
 * @param  list - Accumulator list for overflow ancestors
 * @param  traverseIframes - Whether to traverse iframe boundaries
 * @returns  Array of overflow ancestors including elements, windows, and visual viewports
 */
function getOverflowAncestors(node, list = [], traverseIframes = true) {
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === node.ownerDocument?.body;
    const win = window;
    if (isBody) {
        const frameElement = getFrameElement(win);
        return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
}
/**
 * Gets the frame element for a window if it's within an iframe.
 * @param {Window} win - The window to get the frame element for
 * @returns {Element | null} The frame element if the window is within an iframe, null otherwise
 */
function getFrameElement(win) {
    return win.parent && Object.getPrototypeOf(win.parent) ?
        win.frameElement
        : null;
}
// =============================================================================
// CORE MIDDLEWARES
// =============================================================================
// Helper function implementations
function computeCoordsFromPlacement({ reference, floating }, placement, rtl) {
    const sideAxis = getSideAxis(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const alignLength = getAxisLength(alignmentAxis);
    const side = getSide(placement);
    const isVertical = sideAxis === 'y';
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch (side) {
        case 'top':
            coords = {
                x: commonX,
                y: reference.y - floating.height,
            };
            break;
        case 'bottom':
            coords = {
                x: commonX,
                y: reference.y + reference.height,
            };
            break;
        case 'right':
            coords = {
                x: reference.x + reference.width,
                y: commonY,
            };
            break;
        case 'left':
            coords = {
                x: reference.x - floating.width,
                y: commonY,
            };
            break;
        default:
            coords = {
                x: reference.x,
                y: reference.y,
            };
    }
    switch (getAlignment(placement)) {
        case 'start':
            coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
            break;
        case 'end':
            coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
            break;
    }
    return coords;
}
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * @param reference - The reference element
 * @param floating - The floating element
 * @param config - Configuration options
 * @param cache - Cache for clipping ancestor calculations
 */
function calculatePosition(reference, floating, config, cache) {
    const { placement: initialPlacement = 'bottom', strategy = 'absolute', offset = 0, enableShift = true, shiftPadding, enableFlip = true, flipPadding, fallbackPlacements, arrow, arrowPadding = 0, } = config;
    const rtl = isRTL(floating);
    const elements = { reference, floating };
    let resetCount = 0;
    let statefulPlacement = initialPlacement;
    let arrowData;
    let x = 0;
    let y = 0;
    // Main positioning loop (handles flip resets)
    while (resetCount < 50) {
        const rects = getElementRects({ reference, floating, strategy });
        const coords = computeCoordsFromPlacement(rects, statefulPlacement, rtl);
        ({ x, y } = coords);
        // 1. Apply offset
        if (offset) {
            const offsetCoords = convertValueToCoords({ placement: statefulPlacement, elements, rects, x, y, strategy,
                initialPlacement }, offset);
            x += offsetCoords.x;
            y += offsetCoords.y;
        }
        // 2. Apply shift (keep in viewport)
        if (enableShift) {
            const overflow = detectOverflow({ x, y, placement: statefulPlacement, strategy, rects, elements,
                initialPlacement }, { padding: shiftPadding }, cache);
            const side = getSideAxis(getSide(statefulPlacement));
            const mainAxis = getOppositeAxis(side);
            const minSide = mainAxis === 'y' ? 'top' : 'left';
            const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
            const minCoord = (mainAxis === 'y' ? y : x) + overflow[minSide];
            const maxCoord = (mainAxis === 'y' ? y : x) - overflow[maxSide];
            if (mainAxis === 'y') {
                y = clamp(minCoord, y, maxCoord);
            }
            else {
                x = clamp(minCoord, x, maxCoord);
            }
        }
        // 3. Calculate arrow position (if arrow element provided)
        if (arrow) {
            const axis = getAlignmentAxis(statefulPlacement);
            const length = getAxisLength(axis);
            const arrowDimensions = getDimensions(arrow);
            const isYAxis = axis === 'y';
            const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
            const arrowOffsetParent = getOffsetParent(arrow);
            let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
            if (!clientSize || !isElement(arrowOffsetParent)) {
                clientSize = floating[clientProp] || rects.floating[length];
            }
            const endDiff = rects.reference[length] + rects.reference[axis]
                - (axis === 'y' ? y : x) - rects.floating[length];
            const startDiff = (axis === 'y' ? y : x) - rects.reference[axis];
            const centerToReference = endDiff / 2 - startDiff / 2;
            const paddingObject = getPaddingObject(arrowPadding);
            const minProp = isYAxis ? 'top' : 'left';
            const maxProp = isYAxis ? 'bottom' : 'right';
            const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
            const minPadding = Math.min(paddingObject[minProp], largestPossiblePadding);
            const maxPadding = Math.min(paddingObject[maxProp], largestPossiblePadding);
            const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
            const arrowOffset = clamp(minPadding, center, clientSize - arrowDimensions[length] - maxPadding);
            arrowData = {
                [axis]: arrowOffset,
                centerOffset: center - arrowOffset,
            };
        }
        // 4. Check for flip
        if (enableFlip) {
            const overflow = detectOverflow({ x, y, placement: statefulPlacement, strategy, rects, elements,
                initialPlacement }, { padding: flipPadding }, cache);
            const side = getSide(statefulPlacement);
            const isOverflowing = overflow[side] > 0;
            if (isOverflowing) {
                // Determine fallback placements
                const isBasePlacement = getSide(initialPlacement) === initialPlacement;
                const placements = fallbackPlacements || (isBasePlacement ?
                    [getOppositePlacement(initialPlacement)]
                    : (() => {
                        const oppositePlacement = getOppositePlacement(initialPlacement);
                        return [
                            getOppositeAlignmentPlacement(initialPlacement),
                            oppositePlacement,
                            getOppositeAlignmentPlacement(oppositePlacement),
                        ];
                    })());
                const allPlacements = [initialPlacement, ...placements];
                const nextIndex = resetCount + 1;
                if (nextIndex < allPlacements.length) {
                    statefulPlacement = allPlacements[nextIndex];
                    resetCount++;
                    continue; // Restart loop with new placement
                }
            }
        }
        // No reset needed, we're done
        break;
    }
    return {
        x,
        y,
        placement: statefulPlacement,
        strategy,
        arrow: arrowData,
    };
}
/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 * @param state - The position state
 * @param options - Detection options
 * @param cache - Cache for clipping ancestor calculations
 */
function detectOverflow(state, options = {}, cache) {
    const { x, y, rects, elements, strategy, } = state;
    const { boundary = 'clippingAncestors', rootBoundary = 'viewport', elementContext = 'floating', altBoundary = false, padding = 0, } = options;
    const paddingObject = getPaddingObject(padding);
    const altContext = elementContext === 'floating' ? 'reference' : 'floating';
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(getClippingRect({
        element: isElement(element) ?
            element
            : (getDocumentElement(elements.floating) || elements.floating),
        boundary,
        rootBoundary,
        strategy,
        cache,
    }));
    const rect = elementContext === 'floating' ? {
        x,
        y,
        width: rects.floating.width,
        height: rects.floating.height,
    } : rects.reference;
    const offsetParent = getOffsetParent(elements.floating);
    const offsetScale = (offsetParent && isElement(offsetParent)) ?
        getScale(offsetParent) || { x: 1, y: 1 }
        : { x: 1, y: 1 };
    const elementClientRect = rectToClientRect(offsetParent ?
        convertOffsetParentRelativeRectToViewportRelativeRect({
            elements,
            rect,
            offsetParent,
            strategy,
        })
        : rect);
    return {
        top: (clippingClientRect.top - elementClientRect.top + paddingObject.top)
            / offsetScale.y,
        bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom)
            / offsetScale.y,
        left: (clippingClientRect.left - elementClientRect.left + paddingObject.left)
            / offsetScale.x,
        right: (elementClientRect.right - clippingClientRect.right + paddingObject.right)
            / offsetScale.x,
    };
}
function convertValueToCoords(state, options) {
    const { placement, elements, } = state;
    const rtl = isRTL(elements.floating);
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getSideAxis(placement) === 'y';
    const mainAxisMulti = originSides.has(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const { mainAxis, crossAxis: initialCrossAxis, alignmentAxis, } = typeof options === 'number' ? {
        mainAxis: options,
        crossAxis: 0,
        alignmentAxis: null,
    } : {
        mainAxis: options.mainAxis || 0,
        crossAxis: options.crossAxis || 0,
        alignmentAxis: options.alignmentAxis,
    };
    const crossAxis = alignment && typeof alignmentAxis === 'number' ?
        alignment === 'end' ? alignmentAxis * -1 : alignmentAxis
        : initialCrossAxis;
    return isVertical ? {
        x: crossAxis * crossAxisMulti,
        y: mainAxis * mainAxisMulti,
    } : {
        x: mainAxis * mainAxisMulti,
        y: crossAxis * crossAxisMulti,
    };
}
/**
 * Gets the CSS dimensions of an element, handling fallbacks for SVG elements.
 * @param element - The element to get dimensions for
 * @returns Object containing width, height, and fallback flag
 */
function getCssDimensions(element) {
    const css = window.getComputedStyle(element);
    // In testing environments, the `width` and `height` properties are empty
    // strings for SVG elements, returning NaN. Fallback to `0` in this case.
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = isHTMLElement(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = Math.round(width) !== offsetWidth || Math.round(height) !== offsetHeight;
    if (shouldFallback) {
        width = offsetWidth;
        height = offsetHeight;
    }
    return {
        width,
        height,
        $: shouldFallback,
    };
}
/**
 * Gets the scale factor of an element based on its bounding rect vs CSS dimensions.
 * @param element - The element to get scale for
 * @returns Coordinates object with x and y scale factors
 */
function getScale(element) {
    if (!isHTMLElement(element)) {
        return createCoords(1);
    }
    const rect = element.getBoundingClientRect();
    const { width, height, $, } = getCssDimensions(element);
    let x = ($ ? Math.round(rect.width) : rect.width) / width;
    let y = ($ ? Math.round(rect.height) : rect.height) / height;
    // 0, NaN, or Infinity should always fallback to 1.
    if (!x || !Number.isFinite(x)) {
        x = 1;
    }
    if (!y || !Number.isFinite(y)) {
        y = 1;
    }
    return {
        x,
        y,
    };
}
/**
 * Gets the visual viewport offsets for an element in WebKit browsers.
 * @param element - The element to get visual offsets for
 * @returns Coordinates object with x and y offsets
 */
function getVisualOffsets() {
    const win = window;
    if (!isWebKit() || !win.visualViewport) {
        return noOffsets;
    }
    return {
        x: win.visualViewport.offsetLeft,
        y: win.visualViewport.offsetTop,
    };
}
/**
 * Determines if visual offsets should be added for positioning calculations.
 * @param element - The element to check
 * @param isFixed - Whether the element uses fixed positioning
 * @param floatingOffsetParent - The floating element's offset parent
 * @returns True if visual offsets should be added
 */
function shouldAddVisualOffsets(isFixed = false, floatingOffsetParent) {
    if (!floatingOffsetParent || (isFixed && floatingOffsetParent !== window)) {
        return false;
    }
    return isFixed;
}
/**
 * Gets the bounding client rect of an element with optional scale and iframe handling.
 * @param element - The element to get bounding rect for
 * @param includeScale - Whether to include scale calculations
 * @param isFixedStrategy - Whether the element uses fixed positioning strategy
 * @param offsetParent - The offset parent for calculations
 * @returns Client rect object with position and dimensions
 */
function getBoundingClientRect(element, includeScale = false, isFixedStrategy = false, offsetParent) {
    const clientRect = element.getBoundingClientRect();
    let scale = createCoords(1);
    if (includeScale) {
        if (offsetParent) {
            if (isElement(offsetParent)) {
                scale = getScale(offsetParent);
            }
        }
        else {
            scale = getScale(element);
        }
    }
    const visualOffsets = shouldAddVisualOffsets(isFixedStrategy, offsetParent) ?
        getVisualOffsets()
        : createCoords(0);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (element) {
        const win = window;
        const offsetWin = offsetParent
            && isElement(offsetParent) ? window : offsetParent;
        let currentWin = win;
        let currentIFrame = getFrameElement(currentWin);
        while (currentIFrame && offsetParent && offsetWin !== currentWin) {
            const iframeScale = getScale(currentIFrame);
            const iframeRect = currentIFrame.getBoundingClientRect();
            const css = window.getComputedStyle(currentIFrame);
            const left = iframeRect.left
                + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
            const top = iframeRect.top
                + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
            x *= iframeScale.x;
            y *= iframeScale.y;
            width *= iframeScale.x;
            height *= iframeScale.y;
            x += left;
            y += top;
            currentWin = window;
            currentIFrame = getFrameElement(currentWin);
        }
    }
    return rectToClientRect({
        width,
        height,
        x,
        y,
    });
}
/**
 * Gets the X position of the window scrollbar.
 * Note: If <html> has a CSS width greater than the viewport, this will be incorrect for RTL.
 * @param element - The element to get scrollbar position for
 * @param rect - Optional rect to use instead of calculating
 * @returns The X position of the scrollbar
 */
function getWindowScrollBarX(element, rect) {
    const leftScroll = getNodeScroll(element).scrollLeft;
    if (!rect) {
        return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
    }
    return rect.left + leftScroll;
}
/**
 * Gets the HTML offset for positioning calculations.
 * @param documentElement - The document element
 * @param scroll - The scroll position object
 * @param scroll.scrollTop
 * @param scroll.scrollLeft
 * @param ignoreScrollbarX - Whether to ignore X scrollbar in calculations
 * @returns Coordinates object with x and y offsets
 */
function getHTMLOffset(documentElement, scroll, ignoreScrollbarX = false) {
    const htmlRect = documentElement.getBoundingClientRect();
    const x = htmlRect.left + scroll.scrollLeft - (ignoreScrollbarX ? 0
        // RTL <body> scrollbar.
        : getWindowScrollBarX(documentElement, htmlRect));
    const y = htmlRect.top + scroll.scrollTop;
    return {
        x,
        y,
    };
}
/**
 * Converts an offset parent relative rect to a viewport relative rect.
 * @param args - Object containing elements, rect, offsetParent, and strategy
 * @param args.strategy
 * @param args.offsetParent
 * @param args.rect
 * @param args.elements
 * @param args.elements.floating
 * @returns Viewport-relative rect
 */
function convertOffsetParentRelativeRectToViewportRelativeRect(args) {
    const { elements, rect, offsetParent, strategy } = args;
    const isFixed = strategy === 'fixed';
    const documentElement = getDocumentElement(offsetParent);
    const topLayer = elements ? isTopLayer(elements.floating) : false;
    if (offsetParent === documentElement || (topLayer && isFixed)) {
        return rect;
    }
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0,
    };
    let scale = createCoords(1);
    const offsets = createCoords(0);
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    if (isOffsetParentAnElement || (!isOffsetParentAnElement && !isFixed)) {
        if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
            scroll = getNodeScroll(offsetParent);
        }
        if (isHTMLElement(offsetParent)) {
            const offsetRect = getBoundingClientRect(offsetParent);
            scale = getScale(offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        }
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ?
        getHTMLOffset(documentElement, scroll, true)
        : createCoords(0);
    return {
        width: rect.width * scale.x,
        height: rect.height * scale.y,
        x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
        y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y,
    };
}
/**
 * Gets the entire size of the scrollable document area, even extending outside
 * of the `<html>` and `<body>` rect bounds if horizontally scrollable.
 * @param element - The element to get document rect for
 * @returns Rect object with document dimensions and position
 */
function getDocumentRect(element) {
    const html = getDocumentElement(element);
    const scroll = getNodeScroll(element);
    const { body } = element.ownerDocument;
    const width = Math.max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = Math.max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y = -scroll.scrollTop;
    if (window.getComputedStyle(body).direction === 'rtl') {
        x += Math.max(html.clientWidth, body.clientWidth) - width;
    }
    return {
        width,
        height,
        x,
        y,
    };
}
/**
 * Gets the viewport rect, accounting for visual viewport if available.
 * @param element - The element to get viewport rect for
 * @param strategy - The positioning strategy being used
 * @returns Rect object with viewport dimensions and position
 */
function getViewportRect(element, strategy) {
    const win = window;
    const html = getDocumentElement(element);
    const { visualViewport } = win;
    const width = visualViewport ? visualViewport.width : html.clientWidth;
    const height = visualViewport ? visualViewport.height : html.clientHeight;
    let x = 0;
    let y = 0;
    if (visualViewport) {
        const visualViewportBased = isWebKit();
        if (!visualViewportBased || (visualViewportBased && strategy === 'fixed')) {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width,
        height,
        x,
        y,
    };
}
/**
 * Returns the inner client rect, subtracting scrollbars if present.
 * @param element - The element to get inner rect for
 * @param strategy - The positioning strategy being used
 * @returns Rect object with inner dimensions and position
 */
function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x = left * scale.x;
    const y = top * scale.y;
    return {
        width,
        height,
        x,
        y,
    };
}
/**
 * Gets the client rect from a clipping ancestor (viewport, document, or element).
 * @param element - The element being positioned
 * @param clippingAncestor - The clipping ancestor ('viewport', 'document', or element)
 * @param strategy - The positioning strategy being used
 * @returns Client rect object for the clipping boundary
 */
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === 'viewport') {
        rect = getViewportRect(element, strategy);
    }
    else if (clippingAncestor === 'document') {
        rect = getDocumentRect(getDocumentElement(element));
    }
    else if (isElement(clippingAncestor)) {
        rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    }
    else {
        const visualOffsets = getVisualOffsets();
        rect = {
            x: clippingAncestor.x - visualOffsets.x,
            y: clippingAncestor.y - visualOffsets.y,
            width: clippingAncestor.width,
            height: clippingAncestor.height,
        };
    }
    return rectToClientRect(rect);
}
/**
 * Checks if an element has a fixed position ancestor up to a stop node.
 * @param element - The element to check
 * @param stopNode - The node to stop checking at
 * @returns True if a fixed position ancestor is found
 */
function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = getParentNode(element);
    if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
        return false;
    }
    return window.getComputedStyle(parentNode).position === 'fixed'
        || hasFixedPositionAncestor(parentNode, stopNode);
}
/**
 * A "clipping ancestor" is an `overflow` element with the characteristic of
 * clipping (or hiding) child elements. This returns all clipping ancestors
 * of the given element up the tree.
 * @param element - The element to find clipping ancestors for
 * @param cache - Cache map to store results
 * @returns Array of clipping ancestor elements
 */
function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
        return cachedResult;
    }
    let result = getOverflowAncestors(element, [], false).filter(el => isElement(el) && getNodeName(el) !== 'body');
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = window.getComputedStyle(element).position === 'fixed';
    let currentNode = elementIsFixed ? getParentNode(element) : element;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
        const computedStyle = window.getComputedStyle(currentNode);
        const currentNodeIsContaining = isContainingBlock(currentNode);
        if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
            currentContainingBlockComputedStyle = null;
        }
        const shouldDropCurrentNode = elementIsFixed ?
            !currentNodeIsContaining && !currentContainingBlockComputedStyle
            : !currentNodeIsContaining && computedStyle.position === 'static'
                && !!currentContainingBlockComputedStyle
                && absoluteOrFixed.has(currentContainingBlockComputedStyle.position)
                || isOverflowElement(currentNode)
                    && !currentNodeIsContaining
                    && hasFixedPositionAncestor(element, currentNode);
        if (shouldDropCurrentNode) {
            // Drop non-containing blocks.
            result = result.filter(ancestor => ancestor !== currentNode);
        }
        else {
            // Record last containing block for next iteration.
            currentContainingBlockComputedStyle = computedStyle;
        }
        currentNode = getParentNode(currentNode);
    }
    cache.set(element, result);
    return result;
}
/**
 * Gets the maximum area that the element is visible in due to any number of
 * clipping ancestors.
 * @param args - Object containing element, boundary, rootBoundary, strategy, and cache
 * @returns Rect object representing the clipping area
 */
function getClippingRect(args) {
    const { element, boundary, rootBoundary, strategy, cache } = args;
    const elementClippingAncestors = boundary === 'clippingAncestors' ?
        isTopLayer(element) ?
            []
            : getClippingElementAncestors(element, cache)
        : [boundary].flat();
    const clippingAncestors = [...elementClippingAncestors, rootBoundary];
    const [firstClippingAncestor] = clippingAncestors;
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
        const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
        accRect.top = Math.max(rect.top, accRect.top);
        accRect.right = Math.min(rect.right, accRect.right);
        accRect.bottom = Math.min(rect.bottom, accRect.bottom);
        accRect.left = Math.max(rect.left, accRect.left);
        return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
        width: clippingRect.right - clippingRect.left,
        height: clippingRect.bottom - clippingRect.top,
        x: clippingRect.left,
        y: clippingRect.top,
    };
}
/**
 * Gets the dimensions of an element.
 * @param element - The element to get dimensions for
 * @returns Dimensions object with width and height
 */
function getDimensions(element) {
    const { width, height } = getCssDimensions(element);
    return {
        width,
        height,
    };
}
/**
 * Gets the rect of an element relative to its offset parent.
 * @param element - The element to get rect for
 * @param offsetParent - The offset parent element
 * @param strategy - The positioning strategy being used
 * @returns Rect object relative to the offset parent
 */
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    const isFixed = strategy === 'fixed';
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0,
    };
    const offsets = createCoords(0);
    // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
    // Firefox with layout.scrollbar.side = 3 in about:config to test this.
    function setLeftRTLScrollbarOffset() {
        offsets.x = getWindowScrollBarX(documentElement);
    }
    if (isOffsetParentAnElement || (!isOffsetParentAnElement && !isFixed)) {
        if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
            scroll = getNodeScroll(offsetParent);
        }
        if (isOffsetParentAnElement) {
            const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        }
        else if (documentElement) {
            setLeftRTLScrollbarOffset();
        }
    }
    if (isFixed && !isOffsetParentAnElement && documentElement) {
        setLeftRTLScrollbarOffset();
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ?
        getHTMLOffset(documentElement, scroll)
        : createCoords(0);
    const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
    const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
    return {
        x,
        y,
        width: rect.width,
        height: rect.height,
    };
}
/**
 * Checks if an element has static positioning.
 * @param element - The element to check
 * @returns True if the element is statically positioned
 */
function isStaticPositioned(element) {
    return window.getComputedStyle(element).position === 'static';
}
/**
 * Gets the true offset parent of an element, handling browser differences.
 * Firefox returns the <html> element as the offsetParent if it's non-static,
 * while Chrome and Safari return the <body> element. The <body> element must
 * be used to perform the correct calculations even if the <html> element is
 * non-static.
 * @param element - The element to get offset parent for
 * @param polyfill - Optional polyfill function for offset parent
 * @returns The true offset parent or null
 */
function getTrueOffsetParent(element, polyfill) {
    if (!isHTMLElement(element) || window.getComputedStyle(element).position === 'fixed') {
        return null;
    }
    if (polyfill) {
        return polyfill(element);
    }
    let rawOffsetParent = element.offsetParent;
    if (getDocumentElement(element) === rawOffsetParent) {
        rawOffsetParent = rawOffsetParent.ownerDocument.body;
    }
    return rawOffsetParent;
}
/**
 * Gets the closest ancestor positioned element. Handles some edge cases,
 * such as table ancestors and cross browser bugs.
 * @param element - The element to get offset parent for
 * @param polyfill - Optional polyfill function for offset parent
 * @returns The offset parent element or window
 */
function getOffsetParent(element, polyfill) {
    const win = window;
    if (isTopLayer(element)) {
        return win;
    }
    if (!isHTMLElement(element)) {
        let svgOffsetParent = getParentNode(element);
        while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
            if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
                return svgOffsetParent;
            }
            svgOffsetParent = getParentNode(svgOffsetParent);
        }
        return win;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
        offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && isLastTraversableNode(offsetParent)
        && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
        return win;
    }
    return offsetParent || getContainingBlock(element) || win;
}
/**
 * Gets the element rects for reference and floating elements.
 * @param data - Object containing reference, floating, and strategy
 * @param data.reference
 * @param data.floating
 * @param data.strategy
 * @returns Element rects
 */
function getElementRects(data) {
    const floatingDimensions = getDimensions(data.floating);
    return {
        reference: getRectRelativeToOffsetParent(data.reference, getOffsetParent(data.floating), data.strategy),
        floating: {
            x: 0,
            y: 0,
            width: floatingDimensions.width,
            height: floatingDimensions.height,
        },
    };
}
/**
 * Checks if an element is in a right-to-left (RTL) context.
 * @param element - The element to check
 * @returns True if the element is in RTL context
 */
function isRTL(element) {
    return window.getComputedStyle(element).direction === 'rtl';
}
/**
 * Checks if two client rect objects are equal.
 * @param a - First rect object
 * @param b - Second rect object
 * @returns True if the rects are equal
 */
function rectsAreEqual(a, b) {
    return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
/**
 * Observes an element for movement and calls a callback when it moves.
 * Based on https://samthor.au/2021/observing-dom/
 * @param element - The element to observe
 * @param onMove - Callback function called when element moves
 * @returns Cleanup function to stop observing
 */
function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = getDocumentElement(element);
    function cleanup() {
        clearTimeout(timeoutId);
        io?.disconnect();
        io = null;
    }
    function refresh(skip = false, threshold = 1) {
        cleanup();
        const elementRectForRootMargin = element.getBoundingClientRect();
        const { left, top, width, height } = elementRectForRootMargin;
        if (!skip) {
            onMove();
        }
        if (!width || !height) {
            return;
        }
        const insetTop = Math.floor(top);
        const insetRight = Math.floor(root.clientWidth - (left + width));
        const insetBottom = Math.floor(root.clientHeight - (top + height));
        const insetLeft = Math.floor(left);
        const rootMargin = `${-insetTop}px ${-insetRight}px ${-insetBottom}px ${-insetLeft}px`;
        const options = {
            rootMargin,
            threshold: Math.max(0, Math.min(1, threshold)) || 1,
        };
        let isFirstUpdate = true;
        function handleObserve(entries) {
            const ratio = entries[0].intersectionRatio;
            if (ratio !== threshold) {
                if (!isFirstUpdate) {
                    return refresh();
                }
                if (!ratio) {
                    // If the reference is clipped, the ratio is 0. Throttle the refresh
                    // to prevent an infinite loop of updates.
                    timeoutId = setTimeout(() => {
                        refresh(false, 1e-7);
                    }, 1000);
                }
                else {
                    refresh(false, ratio);
                }
            }
            if (ratio === 1
                && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
                // It's possible that even though the ratio is reported as 1, the
                // element is not actually fully within the IntersectionObserver's root
                // area anymore. This can happen under performance constraints. This may
                // be a bug in the browser's IntersectionObserver implementation. To
                // work around this, we compare the element's bounding rect now with
                // what it was at the time we created the IntersectionObserver. If they
                // are not equal then the element moved, so we refresh.
                refresh();
            }
            isFirstUpdate = false;
        }
        // Older browsers don't support a `document` as the root and will throw an
        // error.
        try {
            io = new IntersectionObserver(handleObserve, {
                ...options,
                // Handle <iframe>s
                root: root.ownerDocument,
            });
        }
        catch {
            io = new IntersectionObserver(handleObserve, options);
        }
        io.observe(element);
    }
    refresh(true);
    return cleanup;
}
/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @param referenceEl
 * @param floating
 * @param update
 * @param options
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */
function autoUpdate(referenceEl, floating, update, options = {}) {
    const { ancestorScroll = true, ancestorResize = true, elementResize = typeof ResizeObserver === 'function', layoutShift = typeof IntersectionObserver === 'function', animationFrame = false, } = options;
    const ancestors = ancestorScroll || ancestorResize ?
        [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)]
        : [];
    ancestors.forEach(ancestor => {
        if (ancestorScroll) {
            ancestor.addEventListener('scroll', update, { passive: true });
        }
        if (ancestorResize) {
            ancestor.addEventListener('resize', update);
        }
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
        resizeObserver = new ResizeObserver(([firstEntry]) => {
            if (firstEntry && firstEntry.target === referenceEl && resizeObserver) {
                // Prevent update loops when using the `size` middleware.
                // https://github.com/floating-ui/floating-ui/issues/1740
                resizeObserver.unobserve(floating);
                cancelAnimationFrame(reobserveFrame);
                reobserveFrame = requestAnimationFrame(() => {
                    resizeObserver?.observe(floating);
                });
            }
            update();
        });
        if (referenceEl && !animationFrame) {
            resizeObserver.observe(referenceEl);
        }
        resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(referenceEl) : null;
    if (animationFrame) {
        frameLoop();
    }
    function frameLoop() {
        const nextRefRect = getBoundingClientRect(referenceEl);
        if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
            update();
        }
        prevRefRect = nextRefRect;
        frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return () => {
        ancestors.forEach(ancestor => {
            if (ancestorScroll) {
                ancestor.removeEventListener('scroll', update);
            }
            if (ancestorResize) {
                ancestor.removeEventListener('resize', update);
            }
        });
        cleanupIo?.();
        resizeObserver?.disconnect();
        resizeObserver = null;
        if (animationFrame) {
            cancelAnimationFrame(frameId);
        }
    };
}
//# sourceMappingURL=floating-dom-controller.js.map