var _RandomPatternController_instances, _RandomPatternController_colorTuples, _RandomPatternController_colors, _RandomPatternController_name, _RandomPatternController_pattern, _RandomPatternController_squareSize, _RandomPatternController_triangleSize, _RandomPatternController_color1, _RandomPatternController_color2, _RandomPatternController_canvas, _RandomPatternController_ctx, _RandomPatternController_logger, _RandomPatternController_initColorTuples, _RandomPatternController_clear, _RandomPatternController_drawBackground, _RandomPatternController_drawSquarePattern, _RandomPatternController_drawMirroredSquare, _RandomPatternController_drawSquare, _RandomPatternController_drawTrianglePattern, _RandomPatternController_drawMirroredTriangle, _RandomPatternController_drawTriangle;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
/**
 * djb2 string hashing function.
 *
 * @see http://www.cse.yorku.ca/~oz/hash.html
 * @param  str the string to hash.
 * @return  a positive integer
 */
function hash(str) {
    let hash = 5381;
    let i = str.length;
    while (i) {
        hash = (hash * 33) ^ str.charCodeAt(--i);
    }
    return hash >>> 0;
}
function h2rgb(v1, v2, vH) {
    if (vH < 0) {
        vH += 1;
    }
    if (vH > 1) {
        vH -= 1;
    }
    if (6 * vH < 1) {
        return v1 + (v2 - v1) * 6 * vH;
    }
    if (2 * vH < 1) {
        return v2;
    }
    if (3 * vH < 2) {
        return v1 + (v2 - v1) * (2 / 3 - vH) * 6;
    }
    return v1;
}
/**
 * Convert an HSL color to RGB.
 *
 * @param h the hue component
 * @param s the saturation component
 * @param l the luminance component
 *
 * @see https://www.easyrgb.com/en/math.php
 */
function hsl2rgb(h, s, l) {
    let R;
    let G;
    let B;
    const H = Math.max(0, Math.min(1, h));
    const S = Math.max(0, Math.min(1, s));
    const L = Math.max(0, Math.min(1, l));
    if (S === 0) {
        R = L * 255;
        G = L * 255;
        B = L * 255;
    }
    else {
        const b = (L < 0.5) ? L * (1 + S) : L + S - S * L;
        const a = 2 * L - b;
        R = Math.floor(255 * h2rgb(a, b, H + 1 / 3));
        G = Math.floor(255 * h2rgb(a, b, H));
        B = Math.floor(255 * h2rgb(a, b, H - 1 / 3));
    }
    return [R, G, B];
}
/**
 * Convert an RGBcolor to HSL.
 *
 * @param _R the red component
 * @param _G the green component
 * @param _B the blue component
 *
 * @see https://www.easyrgb.com/en/math.php
 */
function rgb2hsl(_R, _G, _B) {
    let H;
    let S;
    const R = Math.max(0, Math.min(255, _R));
    const G = Math.max(0, Math.min(255, _G));
    const B = Math.max(0, Math.min(255, _B));
    const r = R / 255;
    const g = G / 255;
    const b = B / 255;
    const varMin = Math.min(Math.min(r, g), b);
    const varMax = Math.max(Math.max(r, g), b);
    const delMax = varMax - varMin;
    const L = (varMax + varMin) / 2;
    if (delMax === 0) {
        H = 0;
        S = 0;
    }
    else {
        if (L < 0.5) {
            S = delMax / (varMax + varMin);
        }
        else {
            S = delMax / (2 - varMax - varMin);
        }
        const delR = ((varMax - r) / 6 + delMax / 2) / delMax;
        const delG = ((varMax - g) / 6 + delMax / 2) / delMax;
        const delB = ((varMax - b) / 6 + delMax / 2) / delMax;
        if (r === varMax) {
            H = delB - delG;
        }
        else if (g === varMax) {
            H = 1 / 3 + delR - delB;
        }
        else if (b === varMax) {
            H = 2 / 3 + delG - delR;
        }
        H ?? (H = 0);
        if (H < 0) {
            H += 1;
        }
        else if (H > 1) {
            H -= 1;
        }
    }
    return [H, S, L];
}
const HEX_PARSERS = {
    // ex: "#0fc"
    [4]: {
        regexp: /^#([A-f0-9])([A-f0-9])([A-f0-9])$/,
        parser: (c) => parseInt(`${c}${c}`, 16),
    },
    // ex: "#00ffcc"
    [7]: {
        regexp: /^#([A-f0-9]{2})([A-f0-9]{2})([A-f0-9]{2})$/,
        parser: (c) => parseInt(c, 16),
    },
};
function adjustColor(color) {
    const dark = 0.1;
    const lAdj = 0.1; // luminance adjustment
    const hsl = rgb2hsl(...color);
    // if luminance is too dark already, then lighten the alternate color
    // instead of darkening it.
    hsl[2] += hsl[2] > dark ? -lAdj : lAdj;
    return hsl2rgb(...hsl);
}
export class RandomPatternController {
    constructor(host, canvas) {
        _RandomPatternController_instances.add(this);
        _RandomPatternController_colorTuples.set(this, []);
        _RandomPatternController_colors.set(this, []);
        _RandomPatternController_name.set(this, void 0);
        _RandomPatternController_pattern.set(this, 'squares');
        _RandomPatternController_squareSize.set(this, 0);
        _RandomPatternController_triangleSize.set(this, 0);
        _RandomPatternController_color1.set(this, '');
        _RandomPatternController_color2.set(this, '');
        _RandomPatternController_canvas.set(this, void 0);
        _RandomPatternController_ctx.set(this, void 0);
        _RandomPatternController_logger.set(this, void 0);
        __classPrivateFieldSet(this, _RandomPatternController_logger, new Logger(host), "f");
        __classPrivateFieldSet(this, _RandomPatternController_canvas, canvas, "f");
        __classPrivateFieldSet(this, _RandomPatternController_ctx, __classPrivateFieldGet(this, _RandomPatternController_canvas, "f").getContext('2d'), "f");
        this.render();
    }
    render(options) {
        var _a, _b;
        __classPrivateFieldSet(this, _RandomPatternController_name, options?.name ?? __classPrivateFieldGet(this, _RandomPatternController_name, "f"), "f");
        __classPrivateFieldSet(this, _RandomPatternController_colors, options?.colors ?? __classPrivateFieldGet(this, _RandomPatternController_colors, "f"), "f");
        __classPrivateFieldSet(this, _RandomPatternController_pattern, options?.pattern ?? __classPrivateFieldGet(this, _RandomPatternController_pattern, "f"), "f");
        __classPrivateFieldGet(this, _RandomPatternController_canvas, "f").width = options?.size ?? 0;
        __classPrivateFieldGet(this, _RandomPatternController_canvas, "f").height = options?.size ?? 0;
        if (options?.colors) {
            __classPrivateFieldSet(this, _RandomPatternController_colorTuples, __classPrivateFieldGet(this, _RandomPatternController_instances, "m", _RandomPatternController_initColorTuples).call(this), "f");
        }
        const bitPattern = hash(__classPrivateFieldGet(this, _RandomPatternController_name, "f") ?? '').toString(2);
        const arrPattern = bitPattern.split('').map(n => Number(n));
        const index = Math.floor((__classPrivateFieldGet(this, _RandomPatternController_colorTuples, "f").length * parseInt(bitPattern, 2)) / (2 ** 32));
        _a = this, _b = this, [({ set value(_c) { __classPrivateFieldSet(_a, _RandomPatternController_color1, _c, "f"); } }).value, ({ set value(_c) { __classPrivateFieldSet(_b, _RandomPatternController_color2, _c, "f"); } }).value] = __classPrivateFieldGet(this, _RandomPatternController_colorTuples, "f")[index] ?? [];
        __classPrivateFieldSet(this, _RandomPatternController_squareSize, __classPrivateFieldGet(this, _RandomPatternController_canvas, "f").width / 8, "f");
        __classPrivateFieldSet(this, _RandomPatternController_triangleSize, __classPrivateFieldGet(this, _RandomPatternController_canvas, "f").width / 4, "f");
        __classPrivateFieldGet(this, _RandomPatternController_instances, "m", _RandomPatternController_clear).call(this);
        __classPrivateFieldGet(this, _RandomPatternController_instances, "m", _RandomPatternController_drawBackground).call(this);
        if (__classPrivateFieldGet(this, _RandomPatternController_pattern, "f") === 'squares') {
            __classPrivateFieldGet(this, _RandomPatternController_instances, "m", _RandomPatternController_drawSquarePattern).call(this, arrPattern);
        }
        else if (__classPrivateFieldGet(this, _RandomPatternController_pattern, "f") === 'triangles') {
            __classPrivateFieldGet(this, _RandomPatternController_instances, "m", _RandomPatternController_drawTrianglePattern).call(this, arrPattern);
        }
    }
}
_RandomPatternController_colorTuples = new WeakMap(), _RandomPatternController_colors = new WeakMap(), _RandomPatternController_name = new WeakMap(), _RandomPatternController_pattern = new WeakMap(), _RandomPatternController_squareSize = new WeakMap(), _RandomPatternController_triangleSize = new WeakMap(), _RandomPatternController_color1 = new WeakMap(), _RandomPatternController_color2 = new WeakMap(), _RandomPatternController_canvas = new WeakMap(), _RandomPatternController_ctx = new WeakMap(), _RandomPatternController_logger = new WeakMap(), _RandomPatternController_instances = new WeakSet(), _RandomPatternController_initColorTuples = function _RandomPatternController_initColorTuples() {
    const tuples = [];
    __classPrivateFieldGet(this, _RandomPatternController_colors, "f").forEach(colorCode => {
        const { regexp, parser } = HEX_PARSERS[colorCode.length] ?? {};
        if (regexp && parser) {
            const [, ...pattern] = regexp.exec(colorCode) ?? [];
            if (pattern.length) {
                const color = pattern.map(parser);
                tuples.push([
                    `rgb(${color.join(',')})`,
                    `rgb(${adjustColor(color).join(',')})`,
                ]);
            }
            else {
                __classPrivateFieldGet(this, _RandomPatternController_logger, "f").warn(`invalid color ${colorCode}`);
            }
        }
    });
    return tuples;
}, _RandomPatternController_clear = function _RandomPatternController_clear() {
    if (__classPrivateFieldGet(this, _RandomPatternController_ctx, "f") && __classPrivateFieldGet(this, _RandomPatternController_canvas, "f")) {
        __classPrivateFieldGet(this, _RandomPatternController_ctx, "f").clearRect(0, 0, __classPrivateFieldGet(this, _RandomPatternController_canvas, "f").width, __classPrivateFieldGet(this, _RandomPatternController_canvas, "f").height);
    }
}, _RandomPatternController_drawBackground = function _RandomPatternController_drawBackground() {
    if (__classPrivateFieldGet(this, _RandomPatternController_ctx, "f") && __classPrivateFieldGet(this, _RandomPatternController_canvas, "f")) {
        __classPrivateFieldGet(this, _RandomPatternController_ctx, "f").fillStyle = __classPrivateFieldGet(this, _RandomPatternController_color1, "f");
        __classPrivateFieldGet(this, _RandomPatternController_ctx, "f").fillRect(0, 0, __classPrivateFieldGet(this, _RandomPatternController_canvas, "f").width, __classPrivateFieldGet(this, _RandomPatternController_canvas, "f").height);
    }
}, _RandomPatternController_drawSquarePattern = function _RandomPatternController_drawSquarePattern(pattern) {
    if (__classPrivateFieldGet(this, _RandomPatternController_ctx, "f")) {
        __classPrivateFieldGet(this, _RandomPatternController_ctx, "f").fillStyle = __classPrivateFieldGet(this, _RandomPatternController_color2, "f");
        let i = pattern.length;
        while (i--) {
            if (pattern[i]) {
                __classPrivateFieldGet(this, _RandomPatternController_instances, "m", _RandomPatternController_drawMirroredSquare).call(this, i % 4, Math.floor(i / 4));
            }
        }
    }
}, _RandomPatternController_drawMirroredSquare = function _RandomPatternController_drawMirroredSquare(x, y) {
    if (__classPrivateFieldGet(this, _RandomPatternController_ctx, "f")) {
        __classPrivateFieldGet(this, _RandomPatternController_instances, "m", _RandomPatternController_drawSquare).call(this, x, y);
        __classPrivateFieldGet(this, _RandomPatternController_instances, "m", _RandomPatternController_drawSquare).call(this, 7 - x, y);
    }
}, _RandomPatternController_drawSquare = function _RandomPatternController_drawSquare(x, y) {
    if (__classPrivateFieldGet(this, _RandomPatternController_ctx, "f")) {
        __classPrivateFieldGet(this, _RandomPatternController_ctx, "f").fillRect(__classPrivateFieldGet(this, _RandomPatternController_squareSize, "f") * x, __classPrivateFieldGet(this, _RandomPatternController_squareSize, "f") * y, __classPrivateFieldGet(this, _RandomPatternController_squareSize, "f"), __classPrivateFieldGet(this, _RandomPatternController_squareSize, "f"));
    }
}, _RandomPatternController_drawTrianglePattern = function _RandomPatternController_drawTrianglePattern(pattern) {
    if (__classPrivateFieldGet(this, _RandomPatternController_ctx, "f")) {
        __classPrivateFieldGet(this, _RandomPatternController_ctx, "f").fillStyle = __classPrivateFieldGet(this, _RandomPatternController_color2, "f") ?? '';
        let i = pattern.length;
        while (i--) {
            if (pattern[i]) {
                const x = Math.floor(i / 2) % 2;
                const y = Math.floor(i / 4);
                const alt = i % 4;
                const p1 = [x, y];
                const p2 = [x, y];
                const p3 = [x, y];
                switch (alt) {
                    case 0:
                        p2[1]++;
                        p3[0]++;
                        p3[1]++;
                        break;
                    case 1:
                        p2[0]++;
                        p3[0]++;
                        p3[1]++;
                        break;
                    case 2:
                        p2[0]++;
                        p3[1]++;
                        break;
                    case 3:
                        p1[0]++;
                        p2[0]++;
                        p2[1]++;
                        p3[1]++;
                        break;
                }
                __classPrivateFieldGet(this, _RandomPatternController_instances, "m", _RandomPatternController_drawMirroredTriangle).call(this, p1, p2, p3);
            }
        }
    }
}, _RandomPatternController_drawMirroredTriangle = function _RandomPatternController_drawMirroredTriangle(p1, p2, p3) {
    if (__classPrivateFieldGet(this, _RandomPatternController_ctx, "f")) {
        __classPrivateFieldGet(this, _RandomPatternController_instances, "m", _RandomPatternController_drawTriangle).call(this, p1, p2, p3);
        __classPrivateFieldGet(this, _RandomPatternController_instances, "m", _RandomPatternController_drawTriangle).call(this, [4 - p1[0], p1[1]], [4 - p2[0], p2[1]], [4 - p3[0], p3[1]]);
    }
}, _RandomPatternController_drawTriangle = function _RandomPatternController_drawTriangle(p1, p2, p3) {
    const mult = (c) => c * __classPrivateFieldGet(this, _RandomPatternController_triangleSize, "f");
    if (__classPrivateFieldGet(this, _RandomPatternController_ctx, "f")) {
        __classPrivateFieldGet(this, _RandomPatternController_ctx, "f").beginPath();
        __classPrivateFieldGet(this, _RandomPatternController_ctx, "f").moveTo(...p1.map(mult));
        __classPrivateFieldGet(this, _RandomPatternController_ctx, "f").lineTo(...p2.map(mult));
        __classPrivateFieldGet(this, _RandomPatternController_ctx, "f").lineTo(...p3.map(mult));
        __classPrivateFieldGet(this, _RandomPatternController_ctx, "f").closePath();
        __classPrivateFieldGet(this, _RandomPatternController_ctx, "f").fill();
        __classPrivateFieldGet(this, _RandomPatternController_ctx, "f").fill();
    }
};
//# sourceMappingURL=random-pattern-controller.js.map