var _PaletteController_host, _PaletteController_palettes, _PaletteController_last, _PaletteController_logger;
import { __classPrivateFieldGet, __classPrivateFieldSet } from "tslib";
import {} from 'lit';
import { Logger } from '@patternfly/pfe-core/controllers/logger.js';
import styles from '@rhds/tokens/css/color-palette.css.js';
const Palettes = Object.freeze([
    'light',
    'lighter',
    'lightest',
    'dark',
    'darker',
    'darkest',
]);
class PaletteController {
    constructor(host, palettes) {
        _PaletteController_host.set(this, void 0);
        _PaletteController_palettes.set(this, void 0);
        _PaletteController_last.set(this, void 0);
        _PaletteController_logger.set(this, void 0);
        __classPrivateFieldSet(this, _PaletteController_host, host, "f");
        __classPrivateFieldSet(this, _PaletteController_palettes, new Set(palettes), "f");
        __classPrivateFieldSet(this, _PaletteController_last, __classPrivateFieldGet(this, _PaletteController_host, "f").colorPalette, "f");
        __classPrivateFieldGet(this, _PaletteController_host, "f").addController(this);
        __classPrivateFieldSet(this, _PaletteController_logger, new Logger(host), "f");
    }
    hostUpdate() {
        const { colorPalette } = __classPrivateFieldGet(this, _PaletteController_host, "f");
        if (colorPalette && !__classPrivateFieldGet(this, _PaletteController_palettes, "f").has(colorPalette)) {
            __classPrivateFieldGet(this, _PaletteController_logger, "f").warn(`color-palette="${colorPalette}" is not allowed`);
            __classPrivateFieldGet(this, _PaletteController_host, "f").colorPalette = __classPrivateFieldGet(this, _PaletteController_last, "f");
        }
        else {
            __classPrivateFieldSet(this, _PaletteController_last, colorPalette, "f");
        }
    }
}
_PaletteController_host = new WeakMap(), _PaletteController_palettes = new WeakMap(), _PaletteController_last = new WeakMap(), _PaletteController_logger = new WeakMap();
function impl(klass, supportedPalettes = Palettes) {
    const { attribute, reflect } = klass.properties?.colorPalette
        ?? klass.getPropertyOptions('colorPalette')
        ?? {};
    if (attribute !== 'color-palette' || !reflect) {
        throw new Error('@colorPalettes requires the `color-palette` attribute.');
    }
    klass.addInitializer(instance => new PaletteController(instance, [...supportedPalettes]));
    const elementStyles = Array.isArray(klass.styles) ? klass.styles
        : klass.styles ? [klass.styles]
            : [];
    klass.styles = [
        styles,
        ...elementStyles,
    ];
}
export function colorPalettes(...args) {
    if (args.every(x => typeof x === 'string')) {
        return function (klass) {
            return impl(klass, args);
        };
    }
    else {
        return impl(...args);
    }
}
//# sourceMappingURL=color-palettes.js.map