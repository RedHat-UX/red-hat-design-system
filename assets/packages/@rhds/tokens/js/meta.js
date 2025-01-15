/**
 * Do not edit directly, this file was auto-generated.
 */


export const tokens = new Map([
  [
    "--rh-animation-speed",
    {
      "$type": "duration",
      "$value": "0.3s",
      "filePath": "tokens/animation.yml",
      "isSource": true,
      "original": {
        "$type": "duration",
        "$value": "0.3s"
      },
      "name": "rh-animation-speed",
      "attributes": {
        "category": "animation",
        "type": "speed"
      },
      "path": [
        "animation",
        "speed"
      ]
    }
  ],
  [
    "--rh-animation-timing",
    {
      "$type": "cubicBezier",
      "$value": "cubic-bezier(0.465, 0.183, 0.153, 0.946)",
      "filePath": "tokens/animation.yml",
      "isSource": true,
      "original": {
        "$type": "cubicBezier",
        "$value": [
          0.465,
          0.183,
          0.153,
          0.946
        ]
      },
      "name": "rh-animation-timing",
      "attributes": {
        "category": "animation",
        "type": "timing"
      },
      "path": [
        "animation",
        "timing"
      ]
    }
  ],
  [
    "--rh-border-width-sm",
    {
      "$value": "1px",
      "$description": "1px border width; Example: Secondary CTA or Button",
      "filePath": "tokens/border.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "{length.4xs}",
        "$description": "1px border width; Example: Secondary CTA or Button",
        "$type": "dimension"
      },
      "name": "rh-border-width-sm",
      "attributes": {
        "category": "border",
        "type": "width",
        "item": "sm",
        "px": 1
      },
      "path": [
        "border",
        "width",
        "sm"
      ]
    }
  ],
  [
    "--rh-border-width-md",
    {
      "$value": "2px",
      "$description": "2px border width: Example: Alert",
      "filePath": "tokens/border.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "{length.3xs}",
        "$description": "2px border width: Example: Alert",
        "$type": "dimension"
      },
      "name": "rh-border-width-md",
      "attributes": {
        "category": "border",
        "type": "width",
        "item": "md",
        "px": 2
      },
      "path": [
        "border",
        "width",
        "md"
      ]
    }
  ],
  [
    "--rh-border-width-lg",
    {
      "$value": "3px",
      "$description": "3px border width: Example: Expanded Accordion panel",
      "filePath": "tokens/border.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "{length.2xs}",
        "$description": "3px border width: Example: Expanded Accordion panel",
        "$type": "dimension"
      },
      "name": "rh-border-width-lg",
      "attributes": {
        "category": "border",
        "type": "width",
        "item": "lg",
        "px": 3
      },
      "path": [
        "border",
        "width",
        "lg"
      ]
    }
  ],
  [
    "--rh-border-radius-sharp",
    {
      "$value": "0.0px",
      "$description": "Border radius reset",
      "filePath": "tokens/border.yml",
      "isSource": true,
      "original": {
        "$value": "0.0px",
        "$description": "Border radius reset"
      },
      "name": "rh-border-radius-sharp",
      "attributes": {
        "category": "border",
        "type": "radius",
        "item": "sharp",
        "px": 0
      },
      "path": [
        "border",
        "radius",
        "sharp"
      ]
    }
  ],
  [
    "--rh-border-radius-default",
    {
      "$description": "3px border radius; Example: Card",
      "$value": "3px",
      "filePath": "tokens/border.yml",
      "isSource": true,
      "original": {
        "$description": "3px border radius; Example: Card",
        "$value": "{length.2xs}"
      },
      "name": "rh-border-radius-default",
      "attributes": {
        "category": "border",
        "type": "radius",
        "item": "default",
        "px": 3
      },
      "path": [
        "border",
        "radius",
        "default"
      ]
    }
  ],
  [
    "--rh-border-radius-pill",
    {
      "$value": "64px",
      "$description": "Pill border radius; Example: Label",
      "filePath": "tokens/border.yml",
      "isSource": true,
      "original": {
        "$value": "{length.4xl}",
        "$description": "Pill border radius; Example: Label"
      },
      "name": "rh-border-radius-pill",
      "attributes": {
        "category": "border",
        "type": "radius",
        "item": "pill",
        "px": 64
      },
      "path": [
        "border",
        "radius",
        "pill"
      ]
    }
  ],
  [
    "--rh-breakpoint-2xs-max",
    {
      "$value": "575px",
      "$description": "Mobile portrait (max-width)",
      "$extensions": {
        "com.redhat.ux": {
          "title": "Extra Extra Small (max-width)"
        }
      },
      "attributes": {
        "category": "media",
        "type": "2xsMax",
        "px": 575
      },
      "filePath": "tokens/breakpoints.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "575px",
        "$description": "Mobile portrait (max-width)",
        "$extensions": {
          "com.redhat.ux": {
            "title": "Extra Extra Small (max-width)"
          }
        },
        "attributes": {
          "category": "media"
        },
        "$type": "dimension"
      },
      "name": "rh-breakpoint-2xs-max",
      "path": [
        "breakpoint",
        "2xsMax"
      ]
    }
  ],
  [
    "--rh-breakpoint-xs",
    {
      "$value": "576px",
      "$description": "Mobile portrait",
      "$extensions": {
        "com.redhat.ux": {
          "title": "Extra Small"
        }
      },
      "attributes": {
        "category": "media",
        "type": "xs",
        "px": 576
      },
      "filePath": "tokens/breakpoints.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "576px",
        "$description": "Mobile portrait",
        "$extensions": {
          "com.redhat.ux": {
            "title": "Extra Small"
          }
        },
        "attributes": {
          "category": "media"
        },
        "$type": "dimension"
      },
      "name": "rh-breakpoint-xs",
      "path": [
        "breakpoint",
        "xs"
      ]
    }
  ],
  [
    "--rh-breakpoint-xs-max",
    {
      "$value": "767px",
      "$description": "Mobile landscape (max-width)",
      "$extensions": {
        "com.redhat.ux": {
          "title": "Extra Small (max-width)"
        }
      },
      "attributes": {
        "category": "media",
        "type": "xsMax",
        "px": 767
      },
      "filePath": "tokens/breakpoints.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "767px",
        "$description": "Mobile landscape (max-width)",
        "$extensions": {
          "com.redhat.ux": {
            "title": "Extra Small (max-width)"
          }
        },
        "attributes": {
          "category": "media"
        },
        "$type": "dimension"
      },
      "name": "rh-breakpoint-xs-max",
      "path": [
        "breakpoint",
        "xsMax"
      ]
    }
  ],
  [
    "--rh-breakpoint-sm",
    {
      "$value": "768px",
      "$description": "Mobile landscape",
      "$extensions": {
        "com.redhat.ux": {
          "title": "Small"
        }
      },
      "attributes": {
        "category": "media",
        "type": "sm",
        "px": 768
      },
      "filePath": "tokens/breakpoints.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "768px",
        "$description": "Mobile landscape",
        "$extensions": {
          "com.redhat.ux": {
            "title": "Small"
          }
        },
        "attributes": {
          "category": "media"
        },
        "$type": "dimension"
      },
      "name": "rh-breakpoint-sm",
      "path": [
        "breakpoint",
        "sm"
      ]
    }
  ],
  [
    "--rh-breakpoint-sm-max",
    {
      "$value": "991px",
      "$description": "Mobile landscape (max-width)",
      "$extensions": {
        "com.redhat.ux": {
          "title": "Small (max-width)"
        }
      },
      "attributes": {
        "category": "media",
        "type": "smMax",
        "px": 991
      },
      "filePath": "tokens/breakpoints.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "991px",
        "$description": "Mobile landscape (max-width)",
        "$extensions": {
          "com.redhat.ux": {
            "title": "Small (max-width)"
          }
        },
        "attributes": {
          "category": "media"
        },
        "$type": "dimension"
      },
      "name": "rh-breakpoint-sm-max",
      "path": [
        "breakpoint",
        "smMax"
      ]
    }
  ],
  [
    "--rh-breakpoint-md",
    {
      "$value": "992px",
      "$description": "Tablet portrait",
      "$extensions": {
        "com.redhat.ux": {
          "title": "Medium"
        }
      },
      "attributes": {
        "category": "media",
        "type": "md",
        "px": 992
      },
      "filePath": "tokens/breakpoints.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "992px",
        "$description": "Tablet portrait",
        "$extensions": {
          "com.redhat.ux": {
            "title": "Medium"
          }
        },
        "attributes": {
          "category": "media"
        },
        "$type": "dimension"
      },
      "name": "rh-breakpoint-md",
      "path": [
        "breakpoint",
        "md"
      ]
    }
  ],
  [
    "--rh-breakpoint-md-max",
    {
      "$value": "1199px",
      "$description": "Tablet portrait (max-width)",
      "$extensions": {
        "com.redhat.ux": {
          "title": "Medium (max-width)"
        }
      },
      "attributes": {
        "category": "media",
        "type": "mdMax",
        "px": 1199
      },
      "filePath": "tokens/breakpoints.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "1199px",
        "$description": "Tablet portrait (max-width)",
        "$extensions": {
          "com.redhat.ux": {
            "title": "Medium (max-width)"
          }
        },
        "attributes": {
          "category": "media"
        },
        "$type": "dimension"
      },
      "name": "rh-breakpoint-md-max",
      "path": [
        "breakpoint",
        "mdMax"
      ]
    }
  ],
  [
    "--rh-breakpoint-lg",
    {
      "$value": "1200px",
      "$description": "Tablet landscape",
      "$extensions": {
        "com.redhat.ux": {
          "title": "Large"
        }
      },
      "attributes": {
        "category": "media",
        "type": "lg",
        "px": 1200
      },
      "filePath": "tokens/breakpoints.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "1200px",
        "$description": "Tablet landscape",
        "$extensions": {
          "com.redhat.ux": {
            "title": "Large"
          }
        },
        "attributes": {
          "category": "media"
        },
        "$type": "dimension"
      },
      "name": "rh-breakpoint-lg",
      "path": [
        "breakpoint",
        "lg"
      ]
    }
  ],
  [
    "--rh-breakpoint-lg-max",
    {
      "$value": "1439px",
      "$description": "Tablet landscape (max-width)",
      "$extensions": {
        "com.redhat.ux": {
          "title": "Large (max-width)"
        }
      },
      "attributes": {
        "category": "media",
        "type": "lgMax",
        "px": 1439
      },
      "filePath": "tokens/breakpoints.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "1439px",
        "$description": "Tablet landscape (max-width)",
        "$extensions": {
          "com.redhat.ux": {
            "title": "Large (max-width)"
          }
        },
        "attributes": {
          "category": "media"
        },
        "$type": "dimension"
      },
      "name": "rh-breakpoint-lg-max",
      "path": [
        "breakpoint",
        "lgMax"
      ]
    }
  ],
  [
    "--rh-breakpoint-xl",
    {
      "$value": "1440px",
      "$description": "Desktop small",
      "$extensions": {
        "com.redhat.ux": {
          "title": "Extra Large"
        }
      },
      "attributes": {
        "category": "media",
        "type": "xl",
        "px": 1440
      },
      "filePath": "tokens/breakpoints.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "1440px",
        "$description": "Desktop small",
        "$extensions": {
          "com.redhat.ux": {
            "title": "Extra Large"
          }
        },
        "attributes": {
          "category": "media"
        },
        "$type": "dimension"
      },
      "name": "rh-breakpoint-xl",
      "path": [
        "breakpoint",
        "xl"
      ]
    }
  ],
  [
    "--rh-breakpoint-xl-max",
    {
      "$value": "1679px",
      "$description": "Desktop small (max-width)",
      "$extensions": {
        "com.redhat.ux": {
          "title": "Extra Large (max-width)"
        }
      },
      "attributes": {
        "category": "media",
        "type": "xlMax",
        "px": 1679
      },
      "filePath": "tokens/breakpoints.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "1679px",
        "$description": "Desktop small (max-width)",
        "$extensions": {
          "com.redhat.ux": {
            "title": "Extra Large (max-width)"
          }
        },
        "attributes": {
          "category": "media"
        },
        "$type": "dimension"
      },
      "name": "rh-breakpoint-xl-max",
      "path": [
        "breakpoint",
        "xlMax"
      ]
    }
  ],
  [
    "--rh-breakpoint-2xl",
    {
      "$value": "1680px",
      "$description": "Desktop large",
      "$extensions": {
        "com.redhat.ux": {
          "title": "Extra Extra Large"
        }
      },
      "attributes": {
        "category": "media",
        "type": "2xl",
        "px": 1680
      },
      "filePath": "tokens/breakpoints.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "1680px",
        "$description": "Desktop large",
        "$extensions": {
          "com.redhat.ux": {
            "title": "Extra Extra Large"
          }
        },
        "attributes": {
          "category": "media"
        },
        "$type": "dimension"
      },
      "name": "rh-breakpoint-2xl",
      "path": [
        "breakpoint",
        "2xl"
      ]
    }
  ],
  [
    "--rh-color-accent-base",
    {
      "$value": "",
      "$description": "Responsive `accent-base` color value. Typically read only - use a themable container e.g. `<rh-surface>` Resolves to `--rh-color-accent-base-on-light` on a themable container with a light color palette and `--rh-color-accent-base-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/accent.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.accent.base.on-light}",
          "{color.accent.base.on-dark}"
        ],
        "$description": "Responsive `accent-base` color value. Typically read only - use a themable container e.g. `<rh-surface>` Resolves to `--rh-color-accent-base-on-light` on a themable container with a light color palette and `--rh-color-accent-base-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-accent-base",
      "attributes": {
        "category": "color",
        "type": "accent",
        "item": "base",
        "subitem": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "accent",
        "base",
        "_"
      ]
    }
  ],
  [
    "--rh-color-accent-base-on-light",
    {
      "$value": "#0066cc",
      "$description": "Inline link (light theme)",
      "filePath": "tokens/color/accent.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.blue.50}",
        "$description": "Inline link (light theme)",
        "$type": "color"
      },
      "name": "rh-color-accent-base-on-light",
      "attributes": {
        "category": "color",
        "type": "accent",
        "item": "base",
        "subitem": "on-light",
        "hex": "0066cc",
        "rgb": {
          "r": 0,
          "g": 102,
          "b": 204,
          "a": 1
        },
        "hsl": {
          "h": 210,
          "s": 100,
          "l": 40,
          "a": 1
        },
        "hsv": {
          "h": 210,
          "s": 1,
          "v": 0.8,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "accent",
        "base",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-accent-base-on-dark",
    {
      "$value": "#92c5f9",
      "$description": "Inline link (dark theme)",
      "filePath": "tokens/color/accent.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.blue.30}",
        "$description": "Inline link (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-accent-base-on-dark",
      "attributes": {
        "category": "color",
        "type": "accent",
        "item": "base",
        "subitem": "on-dark",
        "hex": "92c5f9",
        "rgb": {
          "r": 146,
          "g": 197,
          "b": 249,
          "a": 1
        },
        "hsl": {
          "h": 210.29126213592232,
          "s": 89.56521739130436,
          "l": 77.45098039215685,
          "a": 1
        },
        "hsv": {
          "h": 210.29126213592232,
          "s": 0.4136546184738956,
          "v": 0.9764705882352941,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "accent",
        "base",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-accent-brand",
    {
      "$value": "",
      "$description": "Responsive `accent-brand` color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-accent-brand-on-light` on a themable container with a light color palette and `--rh-color-accent-brand-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/accent.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.accent.brand.on-light}",
          "{color.accent.brand.on-dark}"
        ],
        "$description": "Responsive `accent-brand` color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-accent-brand-on-light` on a themable container with a light color palette and `--rh-color-accent-brand-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-accent-brand",
      "attributes": {
        "category": "color",
        "type": "accent",
        "item": "brand",
        "subitem": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "accent",
        "brand",
        "_"
      ]
    }
  ],
  [
    "--rh-color-accent-brand-on-light",
    {
      "$value": "#ee0000",
      "$description": "Brand red (light theme)",
      "filePath": "tokens/color/accent.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.brand.red.on-light}",
        "$description": "Brand red (light theme)",
        "$type": "color"
      },
      "name": "rh-color-accent-brand-on-light",
      "attributes": {
        "category": "color",
        "type": "accent",
        "item": "brand",
        "subitem": "on-light",
        "hex": "ee0000",
        "rgb": {
          "r": 238,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 100,
          "l": 46.666666666666664,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 1,
          "v": 0.9333333333333333,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "accent",
        "brand",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-accent-brand-on-dark",
    {
      "$value": "#ee0000",
      "$description": "Brand red (dark theme)",
      "filePath": "tokens/color/accent.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.brand.red.on-dark}",
        "$description": "Brand red (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-accent-brand-on-dark",
      "attributes": {
        "category": "color",
        "type": "accent",
        "item": "brand",
        "subitem": "on-dark",
        "hex": "ee0000",
        "rgb": {
          "r": 238,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 100,
          "l": 46.666666666666664,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 1,
          "v": 0.9333333333333333,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "accent",
        "brand",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-border-strong",
    {
      "$value": "",
      "$description": "Responsive `border-strong` color value. Typically read only - use a themable container e.g. `<rh-surface>` Resolves to `--rh-color-border-strong-on-light` on a themable container with a light color palette and `--rh-color-border-strong-on-dark` on a themable container with a dark color palette",
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.border.strong.on-light}",
          "{color.border.strong.on-dark}"
        ],
        "$description": "Responsive `border-strong` color value. Typically read only - use a themable container e.g. `<rh-surface>` Resolves to `--rh-color-border-strong-on-light` on a themable container with a light color palette and `--rh-color-border-strong-on-dark` on a themable container with a dark color palette",
        "$type": "color"
      },
      "name": "rh-color-border-strong",
      "attributes": {
        "category": "color",
        "type": "border",
        "item": "strong",
        "subitem": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "border",
        "strong",
        "_"
      ]
    }
  ],
  [
    "--rh-color-border-strong-on-light",
    {
      "$value": "#151515",
      "$description": "Strong border color (light theme)",
      "attributes": {
        "category": "border",
        "type": "color",
        "item": "strong",
        "subitem": "on-light",
        "hex": "151515",
        "rgb": {
          "r": 21,
          "g": 21,
          "b": 21,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 8.235294117647058,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.08235294117647059,
          "a": 1
        },
        "isLight": false
      },
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.95}",
        "$description": "Strong border color (light theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-border-strong-on-light",
      "path": [
        "color",
        "border",
        "strong",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-border-strong-on-dark",
    {
      "$value": "#ffffff",
      "$description": "Strong border color (dark theme)",
      "attributes": {
        "category": "border",
        "type": "color",
        "item": "strong",
        "subitem": "on-dark",
        "hex": "ffffff",
        "rgb": {
          "r": 255,
          "g": 255,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 100,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.white}",
        "$description": "Strong border color (dark theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-border-strong-on-dark",
      "path": [
        "color",
        "border",
        "strong",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-border-subtle",
    {
      "$value": "",
      "$description": "Responsive `border-subtle` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-border-subtle-on-light` on a themable container with a light color palette and `--rh-color-border-subtle-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.border.subtle.on-light}",
          "{color.border.subtle.on-dark}"
        ],
        "$description": "Responsive `border-subtle` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-border-subtle-on-light` on a themable container with a light color palette and `--rh-color-border-subtle-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-border-subtle",
      "attributes": {
        "category": "color",
        "type": "border",
        "item": "subtle",
        "subitem": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "border",
        "subtle",
        "_"
      ]
    }
  ],
  [
    "--rh-color-border-subtle-on-light",
    {
      "$value": "#c7c7c7",
      "$description": "Subtle border color (light theme)",
      "attributes": {
        "category": "border",
        "type": "color",
        "item": "subtle",
        "subitem": "on-light",
        "hex": "c7c7c7",
        "rgb": {
          "r": 199,
          "g": 199,
          "b": 199,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 78.03921568627452,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.7803921568627451,
          "a": 1
        },
        "isLight": true
      },
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.30}",
        "$description": "Subtle border color (light theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-border-subtle-on-light",
      "path": [
        "color",
        "border",
        "subtle",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-border-subtle-on-dark",
    {
      "$value": "#707070",
      "$description": "Subtle border color (dark theme)",
      "attributes": {
        "category": "border",
        "type": "color",
        "item": "subtle",
        "subitem": "on-dark",
        "hex": "707070",
        "rgb": {
          "r": 112,
          "g": 112,
          "b": 112,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 43.92156862745098,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.4392156862745098,
          "a": 1
        },
        "isLight": false
      },
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.50}",
        "$description": "Subtle border color (dark theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-border-subtle-on-dark",
      "path": [
        "color",
        "border",
        "subtle",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-border-interactive",
    {
      "$value": "",
      "$description": "Responsive `border-interactive` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-border-interactive-on-light` on a themable container with a light color palette and `--rh-color-border-interactive-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.border.interactive.on-light}",
          "{color.border.interactive.on-dark}"
        ],
        "$description": "Responsive `border-interactive` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-border-interactive-on-light` on a themable container with a light color palette and `--rh-color-border-interactive-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-border-interactive",
      "attributes": {
        "category": "color",
        "type": "border",
        "item": "interactive",
        "subitem": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "border",
        "interactive",
        "_"
      ]
    }
  ],
  [
    "--rh-color-border-interactive-on-light",
    {
      "$value": "#0066cc",
      "$description": "Interactive border color (light theme)",
      "attributes": {
        "category": "border",
        "type": "color",
        "item": "interactive",
        "subitem": "on-light",
        "hex": "0066cc",
        "rgb": {
          "r": 0,
          "g": 102,
          "b": 204,
          "a": 1
        },
        "hsl": {
          "h": 210,
          "s": 100,
          "l": 40,
          "a": 1
        },
        "hsv": {
          "h": 210,
          "s": 1,
          "v": 0.8,
          "a": 1
        },
        "isLight": false
      },
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.blue.50}",
        "$description": "Interactive border color (light theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-border-interactive-on-light",
      "path": [
        "color",
        "border",
        "interactive",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-border-interactive-on-dark",
    {
      "$value": "#92c5f9",
      "$description": "Interactive border color (dark theme)",
      "attributes": {
        "category": "border",
        "type": "color",
        "item": "interactive",
        "subitem": "on-dark",
        "hex": "92c5f9",
        "rgb": {
          "r": 146,
          "g": 197,
          "b": 249,
          "a": 1
        },
        "hsl": {
          "h": 210.29126213592232,
          "s": 89.56521739130436,
          "l": 77.45098039215685,
          "a": 1
        },
        "hsv": {
          "h": 210.29126213592232,
          "s": 0.4136546184738956,
          "v": 0.9764705882352941,
          "a": 1
        },
        "isLight": true
      },
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.blue.30}",
        "$description": "Interactive border color (dark theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-border-interactive-on-dark",
      "path": [
        "color",
        "border",
        "interactive",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-border-destructive",
    {
      "$value": "",
      "$description": "Responsive `border-destructive` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-border-destructive-on-light` on a themable container with a light color palette and `--rh-color-border-destructive-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.border.destructive.on-light}",
          "{color.border.destructive.on-dark}"
        ],
        "$description": "Responsive `border-destructive` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-border-destructive-on-light` on a themable container with a light color palette and `--rh-color-border-destructive-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-border-destructive",
      "attributes": {
        "category": "color",
        "type": "border",
        "item": "destructive",
        "subitem": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "border",
        "destructive",
        "_"
      ]
    }
  ],
  [
    "--rh-color-border-destructive-on-light",
    {
      "$value": "#b1380b",
      "$description": "Destructive border color (light theme)",
      "attributes": {
        "category": "border",
        "type": "color",
        "item": "destructive",
        "subitem": "on-light",
        "hex": "b1380b",
        "rgb": {
          "r": 177,
          "g": 56,
          "b": 11,
          "a": 1
        },
        "hsl": {
          "h": 16.265060240963855,
          "s": 88.29787234042554,
          "l": 36.86274509803921,
          "a": 1
        },
        "hsv": {
          "h": 16.265060240963855,
          "s": 0.9378531073446328,
          "v": 0.6941176470588235,
          "a": 1
        },
        "isLight": false
      },
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.border.status.danger.on-light}",
        "$description": "Destructive border color (light theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-border-destructive-on-light",
      "path": [
        "color",
        "border",
        "destructive",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-border-destructive-on-dark",
    {
      "$value": "#f0561d",
      "$description": "Destructive border color (dark theme)",
      "attributes": {
        "category": "border",
        "type": "color",
        "item": "destructive",
        "subitem": "on-dark",
        "hex": "f0561d",
        "rgb": {
          "r": 240,
          "g": 86,
          "b": 29,
          "a": 1
        },
        "hsl": {
          "h": 16.208530805687207,
          "s": 87.55186721991701,
          "l": 52.74509803921569,
          "a": 1
        },
        "hsv": {
          "h": 16.208530805687207,
          "s": 0.8791666666666667,
          "v": 0.9411764705882353,
          "a": 1
        },
        "isLight": false
      },
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.border.status.danger.on-dark}",
        "$description": "Destructive border color (dark theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-border-destructive-on-dark",
      "path": [
        "color",
        "border",
        "destructive",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-border-status-danger",
    {
      "$value": "",
      "$description": "Responsive `border-danger` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-border-danger-on-light` on a themable container with a light color palette and `--rh-color-border-danger-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.border.status.danger.on-light}",
          "{color.border.status.danger.on-dark}"
        ],
        "$description": "Responsive `border-danger` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-border-danger-on-light` on a themable container with a light color palette and `--rh-color-border-danger-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-border-status-danger",
      "attributes": {
        "category": "color",
        "type": "border",
        "item": "status",
        "subitem": "danger",
        "state": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "border",
        "status",
        "danger",
        "_"
      ]
    }
  ],
  [
    "--rh-color-border-status-danger-on-light",
    {
      "$value": "#b1380b",
      "$description": "Danger border color (light theme)",
      "attributes": {
        "category": "border",
        "type": "color",
        "item": "status",
        "subitem": "danger",
        "state": "on-light",
        "hex": "b1380b",
        "rgb": {
          "r": 177,
          "g": 56,
          "b": 11,
          "a": 1
        },
        "hsl": {
          "h": 16.265060240963855,
          "s": 88.29787234042554,
          "l": 36.86274509803921,
          "a": 1
        },
        "hsv": {
          "h": 16.265060240963855,
          "s": 0.9378531073446328,
          "v": 0.6941176470588235,
          "a": 1
        },
        "isLight": false
      },
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.status.danger.on-light}",
        "$description": "Danger border color (light theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-border-status-danger-on-light",
      "path": [
        "color",
        "border",
        "status",
        "danger",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-border-status-danger-on-dark",
    {
      "$value": "#f0561d",
      "$description": "Danger border color (dark theme)",
      "attributes": {
        "category": "border",
        "type": "color",
        "item": "status",
        "subitem": "danger",
        "state": "on-dark",
        "hex": "f0561d",
        "rgb": {
          "r": 240,
          "g": 86,
          "b": 29,
          "a": 1
        },
        "hsl": {
          "h": 16.208530805687207,
          "s": 87.55186721991701,
          "l": 52.74509803921569,
          "a": 1
        },
        "hsv": {
          "h": 16.208530805687207,
          "s": 0.8791666666666667,
          "v": 0.9411764705882353,
          "a": 1
        },
        "isLight": false
      },
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.status.danger.on-dark}",
        "$description": "Danger border color (dark theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-border-status-danger-on-dark",
      "path": [
        "color",
        "border",
        "status",
        "danger",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-border-status-caution",
    {
      "$value": "",
      "$description": "Responsive `border-caution` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-border-caution-on-light` on a themable container with a light color palette and `--rh-color-border-caution-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.border.status.caution.on-light}",
          "{color.border.status.caution.on-dark}"
        ],
        "$description": "Responsive `border-caution` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-border-caution-on-light` on a themable container with a light color palette and `--rh-color-border-caution-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-border-status-caution",
      "attributes": {
        "category": "color",
        "type": "border",
        "item": "status",
        "subitem": "caution",
        "state": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "border",
        "status",
        "caution",
        "_"
      ]
    }
  ],
  [
    "--rh-color-border-status-caution-on-light",
    {
      "$value": "#ca6c0f",
      "$description": "Caution border color (light theme)",
      "attributes": {
        "category": "border",
        "type": "color",
        "item": "status",
        "subitem": "caution",
        "state": "on-light",
        "hex": "ca6c0f",
        "rgb": {
          "r": 202,
          "g": 108,
          "b": 15,
          "a": 1
        },
        "hsl": {
          "h": 29.83957219251337,
          "s": 86.17511520737327,
          "l": 42.549019607843135,
          "a": 1
        },
        "hsv": {
          "h": 29.83957219251337,
          "s": 0.9257425742574257,
          "v": 0.792156862745098,
          "a": 1
        },
        "isLight": false
      },
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.status.caution.on-light}",
        "$description": "Caution border color (light theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-border-status-caution-on-light",
      "path": [
        "color",
        "border",
        "status",
        "caution",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-border-status-caution-on-dark",
    {
      "$value": "#f5921b",
      "$description": "Caution border color (dark theme)",
      "attributes": {
        "category": "border",
        "type": "color",
        "item": "status",
        "subitem": "caution",
        "state": "on-dark",
        "hex": "f5921b",
        "rgb": {
          "r": 245,
          "g": 146,
          "b": 27,
          "a": 1
        },
        "hsl": {
          "h": 32.752293577981646,
          "s": 91.5966386554622,
          "l": 53.333333333333336,
          "a": 1
        },
        "hsv": {
          "h": 32.752293577981646,
          "s": 0.889795918367347,
          "v": 0.9607843137254902,
          "a": 1
        },
        "isLight": true
      },
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.status.caution.on-dark}",
        "$description": "Caution border color (dark theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-border-status-caution-on-dark",
      "path": [
        "color",
        "border",
        "status",
        "caution",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-border-status-warning",
    {
      "$value": "",
      "$description": "Responsive `border-warning` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-border-warning-on-light` on a themable container with a light color palette and `--rh-color-border-warning-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.border.status.warning.on-light}",
          "{color.border.status.warning.on-dark}"
        ],
        "$description": "Responsive `border-warning` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-border-warning-on-light` on a themable container with a light color palette and `--rh-color-border-warning-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-border-status-warning",
      "attributes": {
        "category": "color",
        "type": "border",
        "item": "status",
        "subitem": "warning",
        "state": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "border",
        "status",
        "warning",
        "_"
      ]
    }
  ],
  [
    "--rh-color-border-status-warning-on-light",
    {
      "$value": "#dca614",
      "$description": "Warning border color (light theme)",
      "attributes": {
        "category": "border",
        "type": "color",
        "item": "status",
        "subitem": "warning",
        "state": "on-light",
        "hex": "dca614",
        "rgb": {
          "r": 220,
          "g": 166,
          "b": 20,
          "a": 1
        },
        "hsl": {
          "h": 43.79999999999999,
          "s": 83.33333333333334,
          "l": 47.05882352941176,
          "a": 1
        },
        "hsv": {
          "h": 43.79999999999999,
          "s": 0.9090909090909092,
          "v": 0.8627450980392157,
          "a": 1
        },
        "isLight": true
      },
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.status.warning.on-light}",
        "$description": "Warning border color (light theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-border-status-warning-on-light",
      "path": [
        "color",
        "border",
        "status",
        "warning",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-border-status-warning-on-dark",
    {
      "$value": "#ffcc17",
      "$description": "Warning border color (dark theme)",
      "attributes": {
        "category": "border",
        "type": "color",
        "item": "status",
        "subitem": "warning",
        "state": "on-dark",
        "hex": "ffcc17",
        "rgb": {
          "r": 255,
          "g": 204,
          "b": 23,
          "a": 1
        },
        "hsl": {
          "h": 46.81034482758621,
          "s": 100,
          "l": 54.509803921568626,
          "a": 1
        },
        "hsv": {
          "h": 46.81034482758621,
          "s": 0.9098039215686274,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.status.warning.on-dark}",
        "$description": "Warning border color (dark theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-border-status-warning-on-dark",
      "path": [
        "color",
        "border",
        "status",
        "warning",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-border-status-neutral",
    {
      "$value": "",
      "$description": "Responsive `border-neutral` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-border-neutral-on-light` on a themable container with a light color palette and `--rh-color-border-neutral-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.border.status.neutral.on-light}",
          "{color.border.status.neutral.on-dark}"
        ],
        "$description": "Responsive `border-neutral` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-border-neutral-on-light` on a themable container with a light color palette and `--rh-color-border-neutral-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-border-status-neutral",
      "attributes": {
        "category": "color",
        "type": "border",
        "item": "status",
        "subitem": "neutral",
        "state": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "border",
        "status",
        "neutral",
        "_"
      ]
    }
  ],
  [
    "--rh-color-border-status-neutral-on-light",
    {
      "$value": "#4d4d4d",
      "$description": "Neutral border color (light theme)",
      "attributes": {
        "category": "border",
        "type": "color",
        "item": "status",
        "subitem": "neutral",
        "state": "on-light",
        "hex": "4d4d4d",
        "rgb": {
          "r": 77,
          "g": 77,
          "b": 77,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 30.19607843137255,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.30196078431372547,
          "a": 1
        },
        "isLight": false
      },
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.status.neutral.on-light}",
        "$description": "Neutral border color (light theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-border-status-neutral-on-light",
      "path": [
        "color",
        "border",
        "status",
        "neutral",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-border-status-neutral-on-dark",
    {
      "$value": "#c7c7c7",
      "$description": "Neutral border color (dark theme)",
      "attributes": {
        "category": "border",
        "type": "color",
        "item": "status",
        "subitem": "neutral",
        "state": "on-dark",
        "hex": "c7c7c7",
        "rgb": {
          "r": 199,
          "g": 199,
          "b": 199,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 78.03921568627452,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.7803921568627451,
          "a": 1
        },
        "isLight": true
      },
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.status.neutral.on-dark}",
        "$description": "Neutral border color (dark theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-border-status-neutral-on-dark",
      "path": [
        "color",
        "border",
        "status",
        "neutral",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-border-status-info",
    {
      "$value": "",
      "$description": "Responsive `border-info` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-border-info-on-light` on a themable container with a light color palette and `--rh-color-border-info-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.border.status.info.on-light}",
          "{color.border.status.info.on-dark}"
        ],
        "$description": "Responsive `border-info` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-border-info-on-light` on a themable container with a light color palette and `--rh-color-border-info-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-border-status-info",
      "attributes": {
        "category": "color",
        "type": "border",
        "item": "status",
        "subitem": "info",
        "state": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "border",
        "status",
        "info",
        "_"
      ]
    }
  ],
  [
    "--rh-color-border-status-info-on-light",
    {
      "$value": "#5e40be",
      "$description": "Info border color (light theme)",
      "attributes": {
        "category": "border",
        "type": "color",
        "item": "status",
        "subitem": "info",
        "state": "on-light",
        "hex": "5e40be",
        "rgb": {
          "r": 94,
          "g": 64,
          "b": 190,
          "a": 1
        },
        "hsl": {
          "h": 254.2857142857143,
          "s": 49.60629921259843,
          "l": 49.80392156862745,
          "a": 1
        },
        "hsv": {
          "h": 254.2857142857143,
          "s": 0.6631578947368422,
          "v": 0.7450980392156863,
          "a": 1
        },
        "isLight": false
      },
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.status.info.on-light}",
        "$description": "Info border color (light theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-border-status-info-on-light",
      "path": [
        "color",
        "border",
        "status",
        "info",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-border-status-info-on-dark",
    {
      "$value": "#b6a6e9",
      "$description": "Info border color (dark theme)",
      "attributes": {
        "category": "border",
        "type": "color",
        "item": "status",
        "subitem": "info",
        "state": "on-dark",
        "hex": "b6a6e9",
        "rgb": {
          "r": 182,
          "g": 166,
          "b": 233,
          "a": 1
        },
        "hsl": {
          "h": 254.32835820895522,
          "s": 60.36036036036033,
          "l": 78.23529411764706,
          "a": 1
        },
        "hsv": {
          "h": 254.32835820895522,
          "s": 0.2875536480686695,
          "v": 0.9137254901960784,
          "a": 1
        },
        "isLight": true
      },
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.status.info.on-dark}",
        "$description": "Info border color (dark theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-border-status-info-on-dark",
      "path": [
        "color",
        "border",
        "status",
        "info",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-border-status-success",
    {
      "$value": "",
      "$description": "Responsive `border-success` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-border-success-on-light` on a themable container with a light color palette and `--rh-color-border-success-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.border.status.success.on-light}",
          "{color.border.status.success.on-dark}"
        ],
        "$description": "Responsive `border-success` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-border-success-on-light` on a themable container with a light color palette and `--rh-color-border-success-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-border-status-success",
      "attributes": {
        "category": "color",
        "type": "border",
        "item": "status",
        "subitem": "success",
        "state": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "border",
        "status",
        "success",
        "_"
      ]
    }
  ],
  [
    "--rh-color-border-status-success-on-light",
    {
      "$value": "#3d7317",
      "$description": "Success border color (light theme)",
      "attributes": {
        "category": "border",
        "type": "color",
        "item": "status",
        "subitem": "success",
        "state": "on-light",
        "hex": "3d7317",
        "rgb": {
          "r": 61,
          "g": 115,
          "b": 23,
          "a": 1
        },
        "hsl": {
          "h": 95.21739130434783,
          "s": 66.66666666666667,
          "l": 27.058823529411764,
          "a": 1
        },
        "hsv": {
          "h": 95.21739130434783,
          "s": 0.7999999999999999,
          "v": 0.45098039215686275,
          "a": 1
        },
        "isLight": false
      },
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.status.success.on-light}",
        "$description": "Success border color (light theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-border-status-success-on-light",
      "path": [
        "color",
        "border",
        "status",
        "success",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-border-status-success-on-dark",
    {
      "$value": "#87bb62",
      "$description": "Success border color (dark theme)",
      "attributes": {
        "category": "border",
        "type": "color",
        "item": "status",
        "subitem": "success",
        "state": "on-dark",
        "hex": "87bb62",
        "rgb": {
          "r": 135,
          "g": 187,
          "b": 98,
          "a": 1
        },
        "hsl": {
          "h": 95.05617977528091,
          "s": 39.55555555555555,
          "l": 55.88235294117647,
          "a": 1
        },
        "hsv": {
          "h": 95.05617977528091,
          "s": 0.4759358288770053,
          "v": 0.7333333333333333,
          "a": 1
        },
        "isLight": true
      },
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.status.success.on-dark}",
        "$description": "Success border color (dark theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-border-status-success-on-dark",
      "path": [
        "color",
        "border",
        "status",
        "success",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-brand-red",
    {
      "$value": "",
      "$description": "Responsive `brand-red` color value. Typically read only - use a themable container e.g. `<rh-surface>` Resolves to `--rh-color-brand-red-on-light` on a themable container with a light color palette and `--rh-color-brand-red-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/brand.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.brand.red.on-light}",
          "{color.brand.red.on-dark}"
        ],
        "$description": "Responsive `brand-red` color value. Typically read only - use a themable container e.g. `<rh-surface>` Resolves to `--rh-color-brand-red-on-light` on a themable container with a light color palette and `--rh-color-brand-red-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-brand-red",
      "attributes": {
        "category": "color",
        "type": "brand",
        "item": "red",
        "subitem": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "brand",
        "red",
        "_"
      ]
    }
  ],
  [
    "--rh-color-brand-red-on-light",
    {
      "$value": "#ee0000",
      "$description": "Brand red on light background",
      "filePath": "tokens/color/brand.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.red.50}",
        "$description": "Brand red on light background",
        "$type": "color"
      },
      "name": "rh-color-brand-red-on-light",
      "attributes": {
        "category": "color",
        "type": "brand",
        "item": "red",
        "subitem": "on-light",
        "hex": "ee0000",
        "rgb": {
          "r": 238,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 100,
          "l": 46.666666666666664,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 1,
          "v": 0.9333333333333333,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "brand",
        "red",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-brand-red-on-dark",
    {
      "$value": "#ee0000",
      "$description": "Brand red on dark background",
      "filePath": "tokens/color/brand.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.red.50}",
        "$description": "Brand red on dark background",
        "$type": "color"
      },
      "name": "rh-color-brand-red-on-dark",
      "attributes": {
        "category": "color",
        "type": "brand",
        "item": "red",
        "subitem": "on-dark",
        "hex": "ee0000",
        "rgb": {
          "r": 238,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 100,
          "l": 46.666666666666664,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 1,
          "v": 0.9333333333333333,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "brand",
        "red",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-brand-red-lightest",
    {
      "$value": "#fbc5c5",
      "$description": "Lightest brand red",
      "filePath": "tokens/color/brand.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.red.20}",
        "$description": "Lightest brand red",
        "$type": "color"
      },
      "name": "rh-color-brand-red-lightest",
      "attributes": {
        "category": "color",
        "type": "brand",
        "item": "red",
        "subitem": "lightest",
        "hex": "fbc5c5",
        "rgb": {
          "r": 251,
          "g": 197,
          "b": 197,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 87.09677419354838,
          "l": 87.84313725490196,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0.21513944223107562,
          "v": 0.984313725490196,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "brand",
        "red",
        "lightest"
      ]
    }
  ],
  [
    "--rh-color-brand-red-lighter",
    {
      "$value": "#f9a8a8",
      "$description": "lighter brand red",
      "filePath": "tokens/color/brand.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.red.30}",
        "$description": "lighter brand red",
        "$type": "color"
      },
      "name": "rh-color-brand-red-lighter",
      "attributes": {
        "category": "color",
        "type": "brand",
        "item": "red",
        "subitem": "lighter",
        "hex": "f9a8a8",
        "rgb": {
          "r": 249,
          "g": 168,
          "b": 168,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 87.0967741935484,
          "l": 81.76470588235294,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0.3253012048192771,
          "v": 0.9764705882352941,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "brand",
        "red",
        "lighter"
      ]
    }
  ],
  [
    "--rh-color-brand-red-light",
    {
      "$value": "#f56e6e",
      "$description": "Light brand red",
      "filePath": "tokens/color/brand.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.red.40}",
        "$description": "Light brand red",
        "$type": "color"
      },
      "name": "rh-color-brand-red-light",
      "attributes": {
        "category": "color",
        "type": "brand",
        "item": "red",
        "subitem": "light",
        "hex": "f56e6e",
        "rgb": {
          "r": 245,
          "g": 110,
          "b": 110,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 87.09677419354841,
          "l": 69.6078431372549,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0.5510204081632653,
          "v": 0.9607843137254902,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "brand",
        "red",
        "light"
      ]
    }
  ],
  [
    "--rh-color-brand-red-dark",
    {
      "$value": "#a60000",
      "$description": "Dark brand red/Brand red hover",
      "filePath": "tokens/color/brand.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.red.60}",
        "$description": "Dark brand red/Brand red hover",
        "$type": "color"
      },
      "name": "rh-color-brand-red-dark",
      "attributes": {
        "category": "color",
        "type": "brand",
        "item": "red",
        "subitem": "dark",
        "hex": "a60000",
        "rgb": {
          "r": 166,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 100,
          "l": 32.549019607843135,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 1,
          "v": 0.6509803921568628,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "brand",
        "red",
        "dark"
      ]
    }
  ],
  [
    "--rh-color-brand-red-darker",
    {
      "$value": "#5f0000",
      "$description": "Darker brand red",
      "filePath": "tokens/color/brand.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.red.70}",
        "$description": "Darker brand red",
        "$type": "color"
      },
      "name": "rh-color-brand-red-darker",
      "attributes": {
        "category": "color",
        "type": "brand",
        "item": "red",
        "subitem": "darker",
        "hex": "5f0000",
        "rgb": {
          "r": 95,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 100,
          "l": 18.627450980392158,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 1,
          "v": 0.37254901960784315,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "brand",
        "red",
        "darker"
      ]
    }
  ],
  [
    "--rh-color-brand-red-darkest",
    {
      "$value": "#5f0000",
      "$description": "Darkest brand red",
      "filePath": "tokens/color/brand.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.red.70}",
        "$description": "Darkest brand red",
        "$type": "color"
      },
      "name": "rh-color-brand-red-darkest",
      "attributes": {
        "category": "color",
        "type": "brand",
        "item": "red",
        "subitem": "darkest",
        "hex": "5f0000",
        "rgb": {
          "r": 95,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 100,
          "l": 18.627450980392158,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 1,
          "v": 0.37254901960784315,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "brand",
        "red",
        "darkest"
      ]
    }
  ],
  [
    "--rh-color-green-10",
    {
      "$value": "#e9f7df",
      "$description": "Alert - success background",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#E9F7DF",
        "$description": "Alert - success background",
        "$type": "color"
      },
      "name": "rh-color-green-10",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "10",
        "hex": "e9f7df",
        "rgb": {
          "r": 233,
          "g": 247,
          "b": 223,
          "a": 1
        },
        "hsl": {
          "h": 95.00000000000003,
          "s": 60.00000000000004,
          "l": 92.15686274509804,
          "a": 1
        },
        "hsv": {
          "h": 95.00000000000003,
          "s": 0.09716599190283401,
          "v": 0.9686274509803922,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "green",
        "10"
      ]
    }
  ],
  [
    "--rh-color-green-20",
    {
      "$value": "#d1f1bb",
      "$description": "Label - Filled (Green) border color",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#D1F1BB",
        "$description": "Label - Filled (Green) border color",
        "$type": "color"
      },
      "name": "rh-color-green-20",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "20",
        "hex": "d1f1bb",
        "rgb": {
          "r": 209,
          "g": 241,
          "b": 187,
          "a": 1
        },
        "hsl": {
          "h": 95.55555555555556,
          "s": 65.85365853658536,
          "l": 83.92156862745097,
          "a": 1
        },
        "hsv": {
          "h": 95.55555555555556,
          "s": 0.2240663900414938,
          "v": 0.9450980392156862,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "green",
        "20"
      ]
    }
  ],
  [
    "--rh-color-green-30",
    {
      "$value": "#afdc8f",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#AFDC8F",
        "$type": "color"
      },
      "name": "rh-color-green-30",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "30",
        "hex": "afdc8f",
        "rgb": {
          "r": 175,
          "g": 220,
          "b": 143,
          "a": 1
        },
        "hsl": {
          "h": 95.06493506493506,
          "s": 52.380952380952394,
          "l": 71.17647058823529,
          "a": 1
        },
        "hsv": {
          "h": 95.06493506493506,
          "s": 0.35000000000000003,
          "v": 0.8627450980392157,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "green",
        "30"
      ]
    }
  ],
  [
    "--rh-color-green-40",
    {
      "$value": "#87bb62",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#87BB62",
        "$type": "color"
      },
      "name": "rh-color-green-40",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "40",
        "hex": "87bb62",
        "rgb": {
          "r": 135,
          "g": 187,
          "b": 98,
          "a": 1
        },
        "hsl": {
          "h": 95.05617977528091,
          "s": 39.55555555555555,
          "l": 55.88235294117647,
          "a": 1
        },
        "hsv": {
          "h": 95.05617977528091,
          "s": 0.4759358288770053,
          "v": 0.7333333333333333,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "green",
        "40"
      ]
    }
  ],
  [
    "--rh-color-green-50",
    {
      "$value": "#63993d",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#63993D",
        "$type": "color"
      },
      "name": "rh-color-green-50",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "50",
        "hex": "63993d",
        "rgb": {
          "r": 99,
          "g": 153,
          "b": 61,
          "a": 1
        },
        "hsl": {
          "h": 95.21739130434783,
          "s": 42.99065420560747,
          "l": 41.96078431372549,
          "a": 1
        },
        "hsv": {
          "h": 95.21739130434783,
          "s": 0.6013071895424836,
          "v": 0.6,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "green",
        "50"
      ]
    }
  ],
  [
    "--rh-color-green-60",
    {
      "$value": "#3d7317",
      "$description": "Alert - Success accent",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#3D7317",
        "$description": "Alert - Success accent",
        "$type": "color"
      },
      "name": "rh-color-green-60",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "60",
        "hex": "3d7317",
        "rgb": {
          "r": 61,
          "g": 115,
          "b": 23,
          "a": 1
        },
        "hsl": {
          "h": 95.21739130434783,
          "s": 66.66666666666667,
          "l": 27.058823529411764,
          "a": 1
        },
        "hsv": {
          "h": 95.21739130434783,
          "s": 0.7999999999999999,
          "v": 0.45098039215686275,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "green",
        "60"
      ]
    }
  ],
  [
    "--rh-color-green-70",
    {
      "$value": "#204d00",
      "$description": "Alert - Success title text",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#204D00",
        "$description": "Alert - Success title text",
        "$type": "color"
      },
      "name": "rh-color-green-70",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "70",
        "hex": "204d00",
        "rgb": {
          "r": 32,
          "g": 77,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 95.06493506493506,
          "s": 100,
          "l": 15.098039215686274,
          "a": 1
        },
        "hsv": {
          "h": 95.06493506493506,
          "s": 1,
          "v": 0.30196078431372547,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "green",
        "70"
      ]
    }
  ],
  [
    "--rh-color-green-10-hsl",
    {
      "$value": "95.00000000000003 60.00000000000004% 92.15686274509804%",
      "$type": "color",
      "original": {
        "$value": "{color.green.10}",
        "$type": "color"
      },
      "name": "rh-color-green-10-hsl",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "10-hsl",
        "hex": "e9f7df",
        "rgb": {
          "r": 233,
          "g": 247,
          "b": 223,
          "a": 1
        },
        "hsl": {
          "h": 95.00000000000003,
          "s": 60.00000000000004,
          "l": 92.15686274509804,
          "a": 1
        },
        "hsv": {
          "h": 95.00000000000003,
          "s": 0.09716599190283401,
          "v": 0.9686274509803922,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "green",
        "10-hsl"
      ]
    }
  ],
  [
    "--rh-color-green-10-rgb",
    {
      "$value": "233 247 223",
      "$type": "color",
      "original": {
        "$value": "{color.green.10}",
        "$type": "color"
      },
      "name": "rh-color-green-10-rgb",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "10-rgb",
        "hex": "e9f7df",
        "rgb": {
          "r": 233,
          "g": 247,
          "b": 223,
          "a": 1
        },
        "hsl": {
          "h": 95.00000000000003,
          "s": 60.00000000000004,
          "l": 92.15686274509804,
          "a": 1
        },
        "hsv": {
          "h": 95.00000000000003,
          "s": 0.09716599190283401,
          "v": 0.9686274509803922,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "green",
        "10-rgb"
      ]
    }
  ],
  [
    "--rh-color-green-20-hsl",
    {
      "$value": "95.55555555555556 65.85365853658536% 83.92156862745097%",
      "$type": "color",
      "original": {
        "$value": "{color.green.20}",
        "$type": "color"
      },
      "name": "rh-color-green-20-hsl",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "20-hsl",
        "hex": "d1f1bb",
        "rgb": {
          "r": 209,
          "g": 241,
          "b": 187,
          "a": 1
        },
        "hsl": {
          "h": 95.55555555555556,
          "s": 65.85365853658536,
          "l": 83.92156862745097,
          "a": 1
        },
        "hsv": {
          "h": 95.55555555555556,
          "s": 0.2240663900414938,
          "v": 0.9450980392156862,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "green",
        "20-hsl"
      ]
    }
  ],
  [
    "--rh-color-green-20-rgb",
    {
      "$value": "209 241 187",
      "$type": "color",
      "original": {
        "$value": "{color.green.20}",
        "$type": "color"
      },
      "name": "rh-color-green-20-rgb",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "20-rgb",
        "hex": "d1f1bb",
        "rgb": {
          "r": 209,
          "g": 241,
          "b": 187,
          "a": 1
        },
        "hsl": {
          "h": 95.55555555555556,
          "s": 65.85365853658536,
          "l": 83.92156862745097,
          "a": 1
        },
        "hsv": {
          "h": 95.55555555555556,
          "s": 0.2240663900414938,
          "v": 0.9450980392156862,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "green",
        "20-rgb"
      ]
    }
  ],
  [
    "--rh-color-green-30-hsl",
    {
      "$value": "95.06493506493506 52.380952380952394% 71.17647058823529%",
      "$type": "color",
      "original": {
        "$value": "{color.green.30}",
        "$type": "color"
      },
      "name": "rh-color-green-30-hsl",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "30-hsl",
        "hex": "afdc8f",
        "rgb": {
          "r": 175,
          "g": 220,
          "b": 143,
          "a": 1
        },
        "hsl": {
          "h": 95.06493506493506,
          "s": 52.380952380952394,
          "l": 71.17647058823529,
          "a": 1
        },
        "hsv": {
          "h": 95.06493506493506,
          "s": 0.35000000000000003,
          "v": 0.8627450980392157,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "green",
        "30-hsl"
      ]
    }
  ],
  [
    "--rh-color-green-30-rgb",
    {
      "$value": "175 220 143",
      "$type": "color",
      "original": {
        "$value": "{color.green.30}",
        "$type": "color"
      },
      "name": "rh-color-green-30-rgb",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "30-rgb",
        "hex": "afdc8f",
        "rgb": {
          "r": 175,
          "g": 220,
          "b": 143,
          "a": 1
        },
        "hsl": {
          "h": 95.06493506493506,
          "s": 52.380952380952394,
          "l": 71.17647058823529,
          "a": 1
        },
        "hsv": {
          "h": 95.06493506493506,
          "s": 0.35000000000000003,
          "v": 0.8627450980392157,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "green",
        "30-rgb"
      ]
    }
  ],
  [
    "--rh-color-green-40-hsl",
    {
      "$value": "95.05617977528091 39.55555555555555% 55.88235294117647%",
      "$type": "color",
      "original": {
        "$value": "{color.green.40}",
        "$type": "color"
      },
      "name": "rh-color-green-40-hsl",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "40-hsl",
        "hex": "87bb62",
        "rgb": {
          "r": 135,
          "g": 187,
          "b": 98,
          "a": 1
        },
        "hsl": {
          "h": 95.05617977528091,
          "s": 39.55555555555555,
          "l": 55.88235294117647,
          "a": 1
        },
        "hsv": {
          "h": 95.05617977528091,
          "s": 0.4759358288770053,
          "v": 0.7333333333333333,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "green",
        "40-hsl"
      ]
    }
  ],
  [
    "--rh-color-green-40-rgb",
    {
      "$value": "135 187 98",
      "$type": "color",
      "original": {
        "$value": "{color.green.40}",
        "$type": "color"
      },
      "name": "rh-color-green-40-rgb",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "40-rgb",
        "hex": "87bb62",
        "rgb": {
          "r": 135,
          "g": 187,
          "b": 98,
          "a": 1
        },
        "hsl": {
          "h": 95.05617977528091,
          "s": 39.55555555555555,
          "l": 55.88235294117647,
          "a": 1
        },
        "hsv": {
          "h": 95.05617977528091,
          "s": 0.4759358288770053,
          "v": 0.7333333333333333,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "green",
        "40-rgb"
      ]
    }
  ],
  [
    "--rh-color-green-50-hsl",
    {
      "$value": "95.21739130434783 42.99065420560747% 41.96078431372549%",
      "$type": "color",
      "original": {
        "$value": "{color.green.50}",
        "$type": "color"
      },
      "name": "rh-color-green-50-hsl",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "50-hsl",
        "hex": "63993d",
        "rgb": {
          "r": 99,
          "g": 153,
          "b": 61,
          "a": 1
        },
        "hsl": {
          "h": 95.21739130434783,
          "s": 42.99065420560747,
          "l": 41.96078431372549,
          "a": 1
        },
        "hsv": {
          "h": 95.21739130434783,
          "s": 0.6013071895424836,
          "v": 0.6,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "green",
        "50-hsl"
      ]
    }
  ],
  [
    "--rh-color-green-50-rgb",
    {
      "$value": "99 153 61",
      "$type": "color",
      "original": {
        "$value": "{color.green.50}",
        "$type": "color"
      },
      "name": "rh-color-green-50-rgb",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "50-rgb",
        "hex": "63993d",
        "rgb": {
          "r": 99,
          "g": 153,
          "b": 61,
          "a": 1
        },
        "hsl": {
          "h": 95.21739130434783,
          "s": 42.99065420560747,
          "l": 41.96078431372549,
          "a": 1
        },
        "hsv": {
          "h": 95.21739130434783,
          "s": 0.6013071895424836,
          "v": 0.6,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "green",
        "50-rgb"
      ]
    }
  ],
  [
    "--rh-color-green-60-hsl",
    {
      "$value": "95.21739130434783 66.66666666666667% 27.058823529411764%",
      "$type": "color",
      "original": {
        "$value": "{color.green.60}",
        "$type": "color"
      },
      "name": "rh-color-green-60-hsl",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "60-hsl",
        "hex": "3d7317",
        "rgb": {
          "r": 61,
          "g": 115,
          "b": 23,
          "a": 1
        },
        "hsl": {
          "h": 95.21739130434783,
          "s": 66.66666666666667,
          "l": 27.058823529411764,
          "a": 1
        },
        "hsv": {
          "h": 95.21739130434783,
          "s": 0.7999999999999999,
          "v": 0.45098039215686275,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "green",
        "60-hsl"
      ]
    }
  ],
  [
    "--rh-color-green-60-rgb",
    {
      "$value": "61 115 23",
      "$type": "color",
      "original": {
        "$value": "{color.green.60}",
        "$type": "color"
      },
      "name": "rh-color-green-60-rgb",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "60-rgb",
        "hex": "3d7317",
        "rgb": {
          "r": 61,
          "g": 115,
          "b": 23,
          "a": 1
        },
        "hsl": {
          "h": 95.21739130434783,
          "s": 66.66666666666667,
          "l": 27.058823529411764,
          "a": 1
        },
        "hsv": {
          "h": 95.21739130434783,
          "s": 0.7999999999999999,
          "v": 0.45098039215686275,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "green",
        "60-rgb"
      ]
    }
  ],
  [
    "--rh-color-green-70-hsl",
    {
      "$value": "95.06493506493506 100% 15.098039215686274%",
      "$type": "color",
      "original": {
        "$value": "{color.green.70}",
        "$type": "color"
      },
      "name": "rh-color-green-70-hsl",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "70-hsl",
        "hex": "204d00",
        "rgb": {
          "r": 32,
          "g": 77,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 95.06493506493506,
          "s": 100,
          "l": 15.098039215686274,
          "a": 1
        },
        "hsv": {
          "h": 95.06493506493506,
          "s": 1,
          "v": 0.30196078431372547,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "green",
        "70-hsl"
      ]
    }
  ],
  [
    "--rh-color-green-70-rgb",
    {
      "$value": "32 77 0",
      "$type": "color",
      "original": {
        "$value": "{color.green.70}",
        "$type": "color"
      },
      "name": "rh-color-green-70-rgb",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "70-rgb",
        "hex": "204d00",
        "rgb": {
          "r": 32,
          "g": 77,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 95.06493506493506,
          "s": 100,
          "l": 15.098039215686274,
          "a": 1
        },
        "hsv": {
          "h": 95.06493506493506,
          "s": 1,
          "v": 0.30196078431372547,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "green",
        "70-rgb"
      ]
    }
  ],
  [
    "--rh-color-orange-10",
    {
      "$value": "#ffe8cc",
      "$description": "Label - Filled (Orange) background color",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#FFE8CC",
        "$description": "Label - Filled (Orange) background color",
        "$type": "color"
      },
      "name": "rh-color-orange-10",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "10",
        "hex": "ffe8cc",
        "rgb": {
          "r": 255,
          "g": 232,
          "b": 204,
          "a": 1
        },
        "hsl": {
          "h": 32.941176470588225,
          "s": 100,
          "l": 90,
          "a": 1
        },
        "hsv": {
          "h": 32.941176470588225,
          "s": 0.19999999999999996,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "orange",
        "10"
      ]
    }
  ],
  [
    "--rh-color-orange-20",
    {
      "$value": "#fccb8f",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#FCCB8F",
        "$type": "color"
      },
      "name": "rh-color-orange-20",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "20",
        "hex": "fccb8f",
        "rgb": {
          "r": 252,
          "g": 203,
          "b": 143,
          "a": 1
        },
        "hsl": {
          "h": 33.02752293577981,
          "s": 94.78260869565219,
          "l": 77.45098039215686,
          "a": 1
        },
        "hsv": {
          "h": 33.02752293577981,
          "s": 0.43253968253968256,
          "v": 0.9882352941176471,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "orange",
        "20"
      ]
    }
  ],
  [
    "--rh-color-orange-30",
    {
      "$value": "#f8ae54",
      "$description": "Label - Filled (Orange) border color",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#F8AE54",
        "$description": "Label - Filled (Orange) border color",
        "$type": "color"
      },
      "name": "rh-color-orange-30",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "30",
        "hex": "f8ae54",
        "rgb": {
          "r": 248,
          "g": 174,
          "b": 84,
          "a": 1
        },
        "hsl": {
          "h": 32.926829268292686,
          "s": 92.13483146067415,
          "l": 65.09803921568627,
          "a": 1
        },
        "hsv": {
          "h": 32.926829268292686,
          "s": 0.6612903225806451,
          "v": 0.9725490196078431,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "orange",
        "30"
      ]
    }
  ],
  [
    "--rh-color-orange-40",
    {
      "$value": "#f5921b",
      "$description": "Label - Filled (Orange) accent color",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#F5921B",
        "$description": "Label - Filled (Orange) accent color",
        "$type": "color"
      },
      "name": "rh-color-orange-40",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "40",
        "hex": "f5921b",
        "rgb": {
          "r": 245,
          "g": 146,
          "b": 27,
          "a": 1
        },
        "hsl": {
          "h": 32.752293577981646,
          "s": 91.5966386554622,
          "l": 53.333333333333336,
          "a": 1
        },
        "hsv": {
          "h": 32.752293577981646,
          "s": 0.889795918367347,
          "v": 0.9607843137254902,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "orange",
        "40"
      ]
    }
  ],
  [
    "--rh-color-orange-50",
    {
      "$value": "#ca6c0f",
      "$description": "Label - Filled (Orange) accent color",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#CA6C0F",
        "$description": "Label - Filled (Orange) accent color",
        "$type": "color"
      },
      "name": "rh-color-orange-50",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "50",
        "hex": "ca6c0f",
        "rgb": {
          "r": 202,
          "g": 108,
          "b": 15,
          "a": 1
        },
        "hsl": {
          "h": 29.83957219251337,
          "s": 86.17511520737327,
          "l": 42.549019607843135,
          "a": 1
        },
        "hsv": {
          "h": 29.83957219251337,
          "s": 0.9257425742574257,
          "v": 0.792156862745098,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "orange",
        "50"
      ]
    }
  ],
  [
    "--rh-color-orange-60",
    {
      "$value": "#9e4a06",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#9E4A06",
        "$type": "color"
      },
      "name": "rh-color-orange-60",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "60",
        "hex": "9e4a06",
        "rgb": {
          "r": 158,
          "g": 74,
          "b": 6,
          "a": 1
        },
        "hsl": {
          "h": 26.842105263157904,
          "s": 92.68292682926828,
          "l": 32.15686274509804,
          "a": 1
        },
        "hsv": {
          "h": 26.842105263157904,
          "s": 0.9620253164556961,
          "v": 0.6196078431372549,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "orange",
        "60"
      ]
    }
  ],
  [
    "--rh-color-orange-70",
    {
      "$value": "#732e00",
      "$description": "Label - Filled (Orange) text color",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#732E00",
        "$description": "Label - Filled (Orange) text color",
        "$type": "color"
      },
      "name": "rh-color-orange-70",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "70",
        "hex": "732e00",
        "rgb": {
          "r": 115,
          "g": 46,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 24,
          "s": 100,
          "l": 22.54901960784314,
          "a": 1
        },
        "hsv": {
          "h": 24,
          "s": 1,
          "v": 0.45098039215686275,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "orange",
        "70"
      ]
    }
  ],
  [
    "--rh-color-orange-10-hsl",
    {
      "$value": "32.941176470588225 100% 90%",
      "$type": "color",
      "original": {
        "$value": "{color.orange.10}",
        "$type": "color"
      },
      "name": "rh-color-orange-10-hsl",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "10-hsl",
        "hex": "ffe8cc",
        "rgb": {
          "r": 255,
          "g": 232,
          "b": 204,
          "a": 1
        },
        "hsl": {
          "h": 32.941176470588225,
          "s": 100,
          "l": 90,
          "a": 1
        },
        "hsv": {
          "h": 32.941176470588225,
          "s": 0.19999999999999996,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "orange",
        "10-hsl"
      ]
    }
  ],
  [
    "--rh-color-orange-10-rgb",
    {
      "$value": "255 232 204",
      "$type": "color",
      "original": {
        "$value": "{color.orange.10}",
        "$type": "color"
      },
      "name": "rh-color-orange-10-rgb",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "10-rgb",
        "hex": "ffe8cc",
        "rgb": {
          "r": 255,
          "g": 232,
          "b": 204,
          "a": 1
        },
        "hsl": {
          "h": 32.941176470588225,
          "s": 100,
          "l": 90,
          "a": 1
        },
        "hsv": {
          "h": 32.941176470588225,
          "s": 0.19999999999999996,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "orange",
        "10-rgb"
      ]
    }
  ],
  [
    "--rh-color-orange-20-hsl",
    {
      "$value": "33.02752293577981 94.78260869565219% 77.45098039215686%",
      "$type": "color",
      "original": {
        "$value": "{color.orange.20}",
        "$type": "color"
      },
      "name": "rh-color-orange-20-hsl",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "20-hsl",
        "hex": "fccb8f",
        "rgb": {
          "r": 252,
          "g": 203,
          "b": 143,
          "a": 1
        },
        "hsl": {
          "h": 33.02752293577981,
          "s": 94.78260869565219,
          "l": 77.45098039215686,
          "a": 1
        },
        "hsv": {
          "h": 33.02752293577981,
          "s": 0.43253968253968256,
          "v": 0.9882352941176471,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "orange",
        "20-hsl"
      ]
    }
  ],
  [
    "--rh-color-orange-20-rgb",
    {
      "$value": "252 203 143",
      "$type": "color",
      "original": {
        "$value": "{color.orange.20}",
        "$type": "color"
      },
      "name": "rh-color-orange-20-rgb",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "20-rgb",
        "hex": "fccb8f",
        "rgb": {
          "r": 252,
          "g": 203,
          "b": 143,
          "a": 1
        },
        "hsl": {
          "h": 33.02752293577981,
          "s": 94.78260869565219,
          "l": 77.45098039215686,
          "a": 1
        },
        "hsv": {
          "h": 33.02752293577981,
          "s": 0.43253968253968256,
          "v": 0.9882352941176471,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "orange",
        "20-rgb"
      ]
    }
  ],
  [
    "--rh-color-orange-30-hsl",
    {
      "$value": "32.926829268292686 92.13483146067415% 65.09803921568627%",
      "$type": "color",
      "original": {
        "$value": "{color.orange.30}",
        "$type": "color"
      },
      "name": "rh-color-orange-30-hsl",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "30-hsl",
        "hex": "f8ae54",
        "rgb": {
          "r": 248,
          "g": 174,
          "b": 84,
          "a": 1
        },
        "hsl": {
          "h": 32.926829268292686,
          "s": 92.13483146067415,
          "l": 65.09803921568627,
          "a": 1
        },
        "hsv": {
          "h": 32.926829268292686,
          "s": 0.6612903225806451,
          "v": 0.9725490196078431,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "orange",
        "30-hsl"
      ]
    }
  ],
  [
    "--rh-color-orange-30-rgb",
    {
      "$value": "248 174 84",
      "$type": "color",
      "original": {
        "$value": "{color.orange.30}",
        "$type": "color"
      },
      "name": "rh-color-orange-30-rgb",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "30-rgb",
        "hex": "f8ae54",
        "rgb": {
          "r": 248,
          "g": 174,
          "b": 84,
          "a": 1
        },
        "hsl": {
          "h": 32.926829268292686,
          "s": 92.13483146067415,
          "l": 65.09803921568627,
          "a": 1
        },
        "hsv": {
          "h": 32.926829268292686,
          "s": 0.6612903225806451,
          "v": 0.9725490196078431,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "orange",
        "30-rgb"
      ]
    }
  ],
  [
    "--rh-color-orange-40-hsl",
    {
      "$value": "32.752293577981646 91.5966386554622% 53.333333333333336%",
      "$type": "color",
      "original": {
        "$value": "{color.orange.40}",
        "$type": "color"
      },
      "name": "rh-color-orange-40-hsl",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "40-hsl",
        "hex": "f5921b",
        "rgb": {
          "r": 245,
          "g": 146,
          "b": 27,
          "a": 1
        },
        "hsl": {
          "h": 32.752293577981646,
          "s": 91.5966386554622,
          "l": 53.333333333333336,
          "a": 1
        },
        "hsv": {
          "h": 32.752293577981646,
          "s": 0.889795918367347,
          "v": 0.9607843137254902,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "orange",
        "40-hsl"
      ]
    }
  ],
  [
    "--rh-color-orange-40-rgb",
    {
      "$value": "245 146 27",
      "$type": "color",
      "original": {
        "$value": "{color.orange.40}",
        "$type": "color"
      },
      "name": "rh-color-orange-40-rgb",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "40-rgb",
        "hex": "f5921b",
        "rgb": {
          "r": 245,
          "g": 146,
          "b": 27,
          "a": 1
        },
        "hsl": {
          "h": 32.752293577981646,
          "s": 91.5966386554622,
          "l": 53.333333333333336,
          "a": 1
        },
        "hsv": {
          "h": 32.752293577981646,
          "s": 0.889795918367347,
          "v": 0.9607843137254902,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "orange",
        "40-rgb"
      ]
    }
  ],
  [
    "--rh-color-orange-50-hsl",
    {
      "$value": "29.83957219251337 86.17511520737327% 42.549019607843135%",
      "$type": "color",
      "original": {
        "$value": "{color.orange.50}",
        "$type": "color"
      },
      "name": "rh-color-orange-50-hsl",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "50-hsl",
        "hex": "ca6c0f",
        "rgb": {
          "r": 202,
          "g": 108,
          "b": 15,
          "a": 1
        },
        "hsl": {
          "h": 29.83957219251337,
          "s": 86.17511520737327,
          "l": 42.549019607843135,
          "a": 1
        },
        "hsv": {
          "h": 29.83957219251337,
          "s": 0.9257425742574257,
          "v": 0.792156862745098,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "orange",
        "50-hsl"
      ]
    }
  ],
  [
    "--rh-color-orange-50-rgb",
    {
      "$value": "202 108 15",
      "$type": "color",
      "original": {
        "$value": "{color.orange.50}",
        "$type": "color"
      },
      "name": "rh-color-orange-50-rgb",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "50-rgb",
        "hex": "ca6c0f",
        "rgb": {
          "r": 202,
          "g": 108,
          "b": 15,
          "a": 1
        },
        "hsl": {
          "h": 29.83957219251337,
          "s": 86.17511520737327,
          "l": 42.549019607843135,
          "a": 1
        },
        "hsv": {
          "h": 29.83957219251337,
          "s": 0.9257425742574257,
          "v": 0.792156862745098,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "orange",
        "50-rgb"
      ]
    }
  ],
  [
    "--rh-color-orange-60-hsl",
    {
      "$value": "26.842105263157904 92.68292682926828% 32.15686274509804%",
      "$type": "color",
      "original": {
        "$value": "{color.orange.60}",
        "$type": "color"
      },
      "name": "rh-color-orange-60-hsl",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "60-hsl",
        "hex": "9e4a06",
        "rgb": {
          "r": 158,
          "g": 74,
          "b": 6,
          "a": 1
        },
        "hsl": {
          "h": 26.842105263157904,
          "s": 92.68292682926828,
          "l": 32.15686274509804,
          "a": 1
        },
        "hsv": {
          "h": 26.842105263157904,
          "s": 0.9620253164556961,
          "v": 0.6196078431372549,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "orange",
        "60-hsl"
      ]
    }
  ],
  [
    "--rh-color-orange-60-rgb",
    {
      "$value": "158 74 6",
      "$type": "color",
      "original": {
        "$value": "{color.orange.60}",
        "$type": "color"
      },
      "name": "rh-color-orange-60-rgb",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "60-rgb",
        "hex": "9e4a06",
        "rgb": {
          "r": 158,
          "g": 74,
          "b": 6,
          "a": 1
        },
        "hsl": {
          "h": 26.842105263157904,
          "s": 92.68292682926828,
          "l": 32.15686274509804,
          "a": 1
        },
        "hsv": {
          "h": 26.842105263157904,
          "s": 0.9620253164556961,
          "v": 0.6196078431372549,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "orange",
        "60-rgb"
      ]
    }
  ],
  [
    "--rh-color-orange-70-hsl",
    {
      "$value": "24 100% 22.54901960784314%",
      "$type": "color",
      "original": {
        "$value": "{color.orange.70}",
        "$type": "color"
      },
      "name": "rh-color-orange-70-hsl",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "70-hsl",
        "hex": "732e00",
        "rgb": {
          "r": 115,
          "g": 46,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 24,
          "s": 100,
          "l": 22.54901960784314,
          "a": 1
        },
        "hsv": {
          "h": 24,
          "s": 1,
          "v": 0.45098039215686275,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "orange",
        "70-hsl"
      ]
    }
  ],
  [
    "--rh-color-orange-70-rgb",
    {
      "$value": "115 46 0",
      "$type": "color",
      "original": {
        "$value": "{color.orange.70}",
        "$type": "color"
      },
      "name": "rh-color-orange-70-rgb",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "70-rgb",
        "hex": "732e00",
        "rgb": {
          "r": 115,
          "g": 46,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 24,
          "s": 100,
          "l": 22.54901960784314,
          "a": 1
        },
        "hsv": {
          "h": 24,
          "s": 1,
          "v": 0.45098039215686275,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "orange",
        "70-rgb"
      ]
    }
  ],
  [
    "--rh-color-icon-primary",
    {
      "$value": "",
      "$description": "Responsive `icon-primary` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-icon-primary-on-light` on a themable container with a light color palette and `--rh-color-icon-primary-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.icon.primary.on-light}",
          "{color.icon.primary.on-dark}"
        ],
        "$description": "Responsive `icon-primary` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-icon-primary-on-light` on a themable container with a light color palette and `--rh-color-icon-primary-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-icon-primary",
      "attributes": {
        "category": "color",
        "type": "icon",
        "item": "primary",
        "subitem": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "icon",
        "primary",
        "_"
      ]
    }
  ],
  [
    "--rh-color-icon-primary-on-light",
    {
      "$value": "#ee0000",
      "attributes": {
        "category": "icon",
        "type": "color",
        "item": "primary",
        "subitem": "on-light",
        "hex": "ee0000",
        "rgb": {
          "r": 238,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 100,
          "l": 46.666666666666664,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 1,
          "v": 0.9333333333333333,
          "a": 1
        },
        "isLight": false
      },
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.brand.red.on-light}",
        "attributes": {
          "category": "icon",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-icon-primary-on-light",
      "path": [
        "color",
        "icon",
        "primary",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-icon-primary-on-dark",
    {
      "$value": "#ee0000",
      "attributes": {
        "category": "icon",
        "type": "color",
        "item": "primary",
        "subitem": "on-dark",
        "hex": "ee0000",
        "rgb": {
          "r": 238,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 100,
          "l": 46.666666666666664,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 1,
          "v": 0.9333333333333333,
          "a": 1
        },
        "isLight": false
      },
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.brand.red.on-dark}",
        "attributes": {
          "category": "icon",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-icon-primary-on-dark",
      "path": [
        "color",
        "icon",
        "primary",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-icon-secondary",
    {
      "$value": "",
      "$description": "Responsive `icon-secondary` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-icon-secondary-on-light` on a themable container with a light color palette and `--rh-color-icon-secondary-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.icon.secondary.on-light}",
          "{color.icon.secondary.on-dark}"
        ],
        "$description": "Responsive `icon-secondary` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-icon-secondary-on-light` on a themable container with a light color palette and `--rh-color-icon-secondary-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-icon-secondary",
      "attributes": {
        "category": "color",
        "type": "icon",
        "item": "secondary",
        "subitem": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "icon",
        "secondary",
        "_"
      ]
    }
  ],
  [
    "--rh-color-icon-secondary-on-light",
    {
      "$value": "#151515",
      "attributes": {
        "category": "icon",
        "type": "color",
        "item": "secondary",
        "subitem": "on-light",
        "hex": "151515",
        "rgb": {
          "r": 21,
          "g": 21,
          "b": 21,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 8.235294117647058,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.08235294117647059,
          "a": 1
        },
        "isLight": false
      },
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.95}",
        "attributes": {
          "category": "icon",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-icon-secondary-on-light",
      "path": [
        "color",
        "icon",
        "secondary",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-icon-secondary-on-dark",
    {
      "$value": "#ffffff",
      "attributes": {
        "category": "icon",
        "type": "color",
        "item": "secondary",
        "subitem": "on-dark",
        "hex": "ffffff",
        "rgb": {
          "r": 255,
          "g": 255,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 100,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.white}",
        "attributes": {
          "category": "icon",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-icon-secondary-on-dark",
      "path": [
        "color",
        "icon",
        "secondary",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-icon-subtle",
    {
      "$value": "#707070",
      "attributes": {
        "category": "icon",
        "type": "color",
        "item": "subtle",
        "subitem": "_",
        "hex": "707070",
        "rgb": {
          "r": 112,
          "g": 112,
          "b": 112,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 43.92156862745098,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.4392156862745098,
          "a": 1
        },
        "isLight": false
      },
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.50}",
        "attributes": {
          "category": "icon",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-icon-subtle",
      "path": [
        "color",
        "icon",
        "subtle",
        "_"
      ]
    }
  ],
  [
    "--rh-color-icon-subtle-hover",
    {
      "$value": "#a3a3a3",
      "attributes": {
        "category": "icon",
        "type": "color",
        "item": "subtle",
        "subitem": "hover",
        "hex": "a3a3a3",
        "rgb": {
          "r": 163,
          "g": 163,
          "b": 163,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 63.921568627450974,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.6392156862745098,
          "a": 1
        },
        "isLight": true
      },
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.40}",
        "attributes": {
          "category": "icon",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-icon-subtle-hover",
      "path": [
        "color",
        "icon",
        "subtle",
        "hover"
      ]
    }
  ],
  [
    "--rh-color-icon-status-danger",
    {
      "$value": "",
      "$description": "Responsive `icon-status-danger` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-icon-status-danger-on-light` on a themable container with a light color palette and `--rh-color-icon-status-danger-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.icon.status.danger.on-light}",
          "{color.icon.status.danger.on-dark}"
        ],
        "$description": "Responsive `icon-status-danger` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-icon-status-danger-on-light` on a themable container with a light color palette and `--rh-color-icon-status-danger-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-icon-status-danger",
      "attributes": {
        "category": "color",
        "type": "icon",
        "item": "status",
        "subitem": "danger",
        "state": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "icon",
        "status",
        "danger",
        "_"
      ]
    }
  ],
  [
    "--rh-color-icon-status-danger-on-light",
    {
      "$value": "#b1380b",
      "$description": "Danger status icon color (light theme)",
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.status.danger.on-light}",
        "$description": "Danger status icon color (light theme)",
        "$type": "color"
      },
      "name": "rh-color-icon-status-danger-on-light",
      "attributes": {
        "category": "color",
        "type": "icon",
        "item": "status",
        "subitem": "danger",
        "state": "on-light",
        "hex": "b1380b",
        "rgb": {
          "r": 177,
          "g": 56,
          "b": 11,
          "a": 1
        },
        "hsl": {
          "h": 16.265060240963855,
          "s": 88.29787234042554,
          "l": 36.86274509803921,
          "a": 1
        },
        "hsv": {
          "h": 16.265060240963855,
          "s": 0.9378531073446328,
          "v": 0.6941176470588235,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "icon",
        "status",
        "danger",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-icon-status-danger-on-dark",
    {
      "$value": "#f0561d",
      "$description": "Danger status icon color (dark theme)",
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.status.danger.on-dark}",
        "$description": "Danger status icon color (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-icon-status-danger-on-dark",
      "attributes": {
        "category": "color",
        "type": "icon",
        "item": "status",
        "subitem": "danger",
        "state": "on-dark",
        "hex": "f0561d",
        "rgb": {
          "r": 240,
          "g": 86,
          "b": 29,
          "a": 1
        },
        "hsl": {
          "h": 16.208530805687207,
          "s": 87.55186721991701,
          "l": 52.74509803921569,
          "a": 1
        },
        "hsv": {
          "h": 16.208530805687207,
          "s": 0.8791666666666667,
          "v": 0.9411764705882353,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "icon",
        "status",
        "danger",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-icon-status-caution",
    {
      "$value": "",
      "$description": "Responsive `icon-status-caution` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-icon-status-caution-on-light` on a themable container with a light color palette and `--rh-color-icon-status-caution-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.icon.status.caution.on-light}",
          "{color.icon.status.caution.on-dark}"
        ],
        "$description": "Responsive `icon-status-caution` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-icon-status-caution-on-light` on a themable container with a light color palette and `--rh-color-icon-status-caution-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-icon-status-caution",
      "attributes": {
        "category": "color",
        "type": "icon",
        "item": "status",
        "subitem": "caution",
        "state": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "icon",
        "status",
        "caution",
        "_"
      ]
    }
  ],
  [
    "--rh-color-icon-status-caution-on-light",
    {
      "$value": "#ca6c0f",
      "$description": "Caution status icon color (light theme)",
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.status.caution.on-light}",
        "$description": "Caution status icon color (light theme)",
        "$type": "color"
      },
      "name": "rh-color-icon-status-caution-on-light",
      "attributes": {
        "category": "color",
        "type": "icon",
        "item": "status",
        "subitem": "caution",
        "state": "on-light",
        "hex": "ca6c0f",
        "rgb": {
          "r": 202,
          "g": 108,
          "b": 15,
          "a": 1
        },
        "hsl": {
          "h": 29.83957219251337,
          "s": 86.17511520737327,
          "l": 42.549019607843135,
          "a": 1
        },
        "hsv": {
          "h": 29.83957219251337,
          "s": 0.9257425742574257,
          "v": 0.792156862745098,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "icon",
        "status",
        "caution",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-icon-status-caution-on-dark",
    {
      "$value": "#f5921b",
      "$description": "Caution status icon color (dark theme)",
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.status.caution.on-dark}",
        "$description": "Caution status icon color (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-icon-status-caution-on-dark",
      "attributes": {
        "category": "color",
        "type": "icon",
        "item": "status",
        "subitem": "caution",
        "state": "on-dark",
        "hex": "f5921b",
        "rgb": {
          "r": 245,
          "g": 146,
          "b": 27,
          "a": 1
        },
        "hsl": {
          "h": 32.752293577981646,
          "s": 91.5966386554622,
          "l": 53.333333333333336,
          "a": 1
        },
        "hsv": {
          "h": 32.752293577981646,
          "s": 0.889795918367347,
          "v": 0.9607843137254902,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "icon",
        "status",
        "caution",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-icon-status-warning",
    {
      "$value": "",
      "$description": "Responsive `icon-status-warning` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-icon-status-warning-on-light` on a themable container with a light color palette and `--rh-color-icon-status-warning-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.icon.status.warning.on-light}",
          "{color.icon.status.warning.on-dark}"
        ],
        "$description": "Responsive `icon-status-warning` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-icon-status-warning-on-light` on a themable container with a light color palette and `--rh-color-icon-status-warning-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-icon-status-warning",
      "attributes": {
        "category": "color",
        "type": "icon",
        "item": "status",
        "subitem": "warning",
        "state": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "icon",
        "status",
        "warning",
        "_"
      ]
    }
  ],
  [
    "--rh-color-icon-status-warning-on-light",
    {
      "$value": "#dca614",
      "$description": "Warning status icon color (light theme)",
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.status.warning.on-light}",
        "$description": "Warning status icon color (light theme)",
        "$type": "color"
      },
      "name": "rh-color-icon-status-warning-on-light",
      "attributes": {
        "category": "color",
        "type": "icon",
        "item": "status",
        "subitem": "warning",
        "state": "on-light",
        "hex": "dca614",
        "rgb": {
          "r": 220,
          "g": 166,
          "b": 20,
          "a": 1
        },
        "hsl": {
          "h": 43.79999999999999,
          "s": 83.33333333333334,
          "l": 47.05882352941176,
          "a": 1
        },
        "hsv": {
          "h": 43.79999999999999,
          "s": 0.9090909090909092,
          "v": 0.8627450980392157,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "icon",
        "status",
        "warning",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-icon-status-warning-on-dark",
    {
      "$value": "#ffcc17",
      "$description": "Warning status icon color (dark theme)",
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.status.warning.on-dark}",
        "$description": "Warning status icon color (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-icon-status-warning-on-dark",
      "attributes": {
        "category": "color",
        "type": "icon",
        "item": "status",
        "subitem": "warning",
        "state": "on-dark",
        "hex": "ffcc17",
        "rgb": {
          "r": 255,
          "g": 204,
          "b": 23,
          "a": 1
        },
        "hsl": {
          "h": 46.81034482758621,
          "s": 100,
          "l": 54.509803921568626,
          "a": 1
        },
        "hsv": {
          "h": 46.81034482758621,
          "s": 0.9098039215686274,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "icon",
        "status",
        "warning",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-icon-status-default",
    {
      "$value": "",
      "$description": "Responsive `icon-status-default` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-icon-status-default-on-light` on a themable container with a light color palette and `--rh-color-icon-status-default-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.icon.status.default.on-light}",
          "{color.icon.status.default.on-dark}"
        ],
        "$description": "Responsive `icon-status-default` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-icon-status-default-on-light` on a themable container with a light color palette and `--rh-color-icon-status-default-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-icon-status-default",
      "attributes": {
        "category": "color",
        "type": "icon",
        "item": "status",
        "subitem": "default",
        "state": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "icon",
        "status",
        "default",
        "_"
      ]
    }
  ],
  [
    "--rh-color-icon-status-default-on-light",
    {
      "$value": "#4d4d4d",
      "$description": "Default status icon color (light theme)",
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.icon.status.neutral.on-light}",
        "$description": "Default status icon color (light theme)",
        "$type": "color"
      },
      "name": "rh-color-icon-status-default-on-light",
      "attributes": {
        "category": "color",
        "type": "icon",
        "item": "status",
        "subitem": "default",
        "state": "on-light",
        "hex": "4d4d4d",
        "rgb": {
          "r": 77,
          "g": 77,
          "b": 77,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 30.19607843137255,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.30196078431372547,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "icon",
        "status",
        "default",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-icon-status-default-on-dark",
    {
      "$value": "#4d4d4d",
      "$description": "Default status icon color (dark theme)",
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.icon.status.neutral.on-light}",
        "$description": "Default status icon color (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-icon-status-default-on-dark",
      "attributes": {
        "category": "color",
        "type": "icon",
        "item": "status",
        "subitem": "default",
        "state": "on-dark",
        "hex": "4d4d4d",
        "rgb": {
          "r": 77,
          "g": 77,
          "b": 77,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 30.19607843137255,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.30196078431372547,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "icon",
        "status",
        "default",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-icon-status-neutral",
    {
      "$value": "",
      "$description": "Responsive `icon-status-neutral` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-icon-status-neutral-on-light` on a themable container with a light color palette and `--rh-color-icon-status-neutral-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.icon.status.neutral.on-light}",
          "{color.icon.status.neutral.on-dark}"
        ],
        "$description": "Responsive `icon-status-neutral` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-icon-status-neutral-on-light` on a themable container with a light color palette and `--rh-color-icon-status-neutral-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-icon-status-neutral",
      "attributes": {
        "category": "color",
        "type": "icon",
        "item": "status",
        "subitem": "neutral",
        "state": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "icon",
        "status",
        "neutral",
        "_"
      ]
    }
  ],
  [
    "--rh-color-icon-status-neutral-on-light",
    {
      "$value": "#4d4d4d",
      "$description": "Neutral status icon color (light theme)",
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.status.neutral.on-light}",
        "$description": "Neutral status icon color (light theme)",
        "$type": "color"
      },
      "name": "rh-color-icon-status-neutral-on-light",
      "attributes": {
        "category": "color",
        "type": "icon",
        "item": "status",
        "subitem": "neutral",
        "state": "on-light",
        "hex": "4d4d4d",
        "rgb": {
          "r": 77,
          "g": 77,
          "b": 77,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 30.19607843137255,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.30196078431372547,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "icon",
        "status",
        "neutral",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-icon-status-neutral-on-dark",
    {
      "$value": "#c7c7c7",
      "$description": "Neutral status icon color (dark theme)",
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.status.neutral.on-dark}",
        "$description": "Neutral status icon color (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-icon-status-neutral-on-dark",
      "attributes": {
        "category": "color",
        "type": "icon",
        "item": "status",
        "subitem": "neutral",
        "state": "on-dark",
        "hex": "c7c7c7",
        "rgb": {
          "r": 199,
          "g": 199,
          "b": 199,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 78.03921568627452,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.7803921568627451,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "icon",
        "status",
        "neutral",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-icon-status-info",
    {
      "$value": "",
      "$description": "Responsive `icon-status-info` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-icon-status-info-on-light` on a themable container with a light color palette and `--rh-color-icon-status-info-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.icon.status.info.on-light}",
          "{color.icon.status.info.on-dark}"
        ],
        "$description": "Responsive `icon-status-info` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-icon-status-info-on-light` on a themable container with a light color palette and `--rh-color-icon-status-info-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-icon-status-info",
      "attributes": {
        "category": "color",
        "type": "icon",
        "item": "status",
        "subitem": "info",
        "state": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "icon",
        "status",
        "info",
        "_"
      ]
    }
  ],
  [
    "--rh-color-icon-status-info-on-light",
    {
      "$value": "#5e40be",
      "$description": "Info status icon color (light theme)",
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.status.info.on-light}",
        "$description": "Info status icon color (light theme)",
        "$type": "color"
      },
      "name": "rh-color-icon-status-info-on-light",
      "attributes": {
        "category": "color",
        "type": "icon",
        "item": "status",
        "subitem": "info",
        "state": "on-light",
        "hex": "5e40be",
        "rgb": {
          "r": 94,
          "g": 64,
          "b": 190,
          "a": 1
        },
        "hsl": {
          "h": 254.2857142857143,
          "s": 49.60629921259843,
          "l": 49.80392156862745,
          "a": 1
        },
        "hsv": {
          "h": 254.2857142857143,
          "s": 0.6631578947368422,
          "v": 0.7450980392156863,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "icon",
        "status",
        "info",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-icon-status-info-on-dark",
    {
      "$value": "#b6a6e9",
      "$description": "Info status icon color (dark theme)",
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.status.info.on-dark}",
        "$description": "Info status icon color (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-icon-status-info-on-dark",
      "attributes": {
        "category": "color",
        "type": "icon",
        "item": "status",
        "subitem": "info",
        "state": "on-dark",
        "hex": "b6a6e9",
        "rgb": {
          "r": 182,
          "g": 166,
          "b": 233,
          "a": 1
        },
        "hsl": {
          "h": 254.32835820895522,
          "s": 60.36036036036033,
          "l": 78.23529411764706,
          "a": 1
        },
        "hsv": {
          "h": 254.32835820895522,
          "s": 0.2875536480686695,
          "v": 0.9137254901960784,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "icon",
        "status",
        "info",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-icon-status-success",
    {
      "$value": "",
      "$description": "Responsive `icon-status-success` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-icon-status-success-on-light` on a themable container with a light color palette and `--rh-color-icon-status-success-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.icon.status.success.on-light}",
          "{color.icon.status.success.on-dark}"
        ],
        "$description": "Responsive `icon-status-success` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-icon-status-success-on-light` on a themable container with a light color palette and `--rh-color-icon-status-success-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-icon-status-success",
      "attributes": {
        "category": "color",
        "type": "icon",
        "item": "status",
        "subitem": "success",
        "state": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "icon",
        "status",
        "success",
        "_"
      ]
    }
  ],
  [
    "--rh-color-icon-status-success-on-light",
    {
      "$value": "#3d7317",
      "$description": "Success status icon color (light theme)",
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.status.success.on-light}",
        "$description": "Success status icon color (light theme)",
        "$type": "color"
      },
      "name": "rh-color-icon-status-success-on-light",
      "attributes": {
        "category": "color",
        "type": "icon",
        "item": "status",
        "subitem": "success",
        "state": "on-light",
        "hex": "3d7317",
        "rgb": {
          "r": 61,
          "g": 115,
          "b": 23,
          "a": 1
        },
        "hsl": {
          "h": 95.21739130434783,
          "s": 66.66666666666667,
          "l": 27.058823529411764,
          "a": 1
        },
        "hsv": {
          "h": 95.21739130434783,
          "s": 0.7999999999999999,
          "v": 0.45098039215686275,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "icon",
        "status",
        "success",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-icon-status-success-on-dark",
    {
      "$value": "#87bb62",
      "$description": "Success status icon color (dark theme)",
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.status.success.on-dark}",
        "$description": "Success status icon color (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-icon-status-success-on-dark",
      "attributes": {
        "category": "color",
        "type": "icon",
        "item": "status",
        "subitem": "success",
        "state": "on-dark",
        "hex": "87bb62",
        "rgb": {
          "r": 135,
          "g": 187,
          "b": 98,
          "a": 1
        },
        "hsl": {
          "h": 95.05617977528091,
          "s": 39.55555555555555,
          "l": 55.88235294117647,
          "a": 1
        },
        "hsv": {
          "h": 95.05617977528091,
          "s": 0.4759358288770053,
          "v": 0.7333333333333333,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "icon",
        "status",
        "success",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-canvas-white",
    {
      "$value": "#ffffff",
      "$description": "Primary canvas (light theme)",
      "filePath": "tokens/color/canvas.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.white}",
        "$description": "Primary canvas (light theme)",
        "$type": "color"
      },
      "name": "rh-color-canvas-white",
      "attributes": {
        "category": "color",
        "type": "canvas",
        "item": "white",
        "hex": "ffffff",
        "rgb": {
          "r": 255,
          "g": 255,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 100,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "canvas",
        "white"
      ]
    }
  ],
  [
    "--rh-color-canvas-black",
    {
      "$value": "#151515",
      "$description": "Primary canvas (dark theme)",
      "filePath": "tokens/color/canvas.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.95}",
        "$description": "Primary canvas (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-canvas-black",
      "attributes": {
        "category": "color",
        "type": "canvas",
        "item": "black",
        "hex": "151515",
        "rgb": {
          "r": 21,
          "g": 21,
          "b": 21,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 8.235294117647058,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.08235294117647059,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "canvas",
        "black"
      ]
    }
  ],
  [
    "--rh-color-canvas-white-hsl",
    {
      "$value": "0 0% 100%",
      "$type": "color",
      "original": {
        "$value": "{color.white}",
        "$type": "color"
      },
      "name": "rh-color-canvas-white-hsl",
      "attributes": {
        "category": "color",
        "type": "canvas",
        "item": "white-hsl",
        "hex": "ffffff",
        "rgb": {
          "r": 255,
          "g": 255,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 100,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "canvas",
        "white-hsl"
      ]
    }
  ],
  [
    "--rh-color-canvas-white-rgb",
    {
      "$value": "255 255 255",
      "$type": "color",
      "original": {
        "$value": "{color.white}",
        "$type": "color"
      },
      "name": "rh-color-canvas-white-rgb",
      "attributes": {
        "category": "color",
        "type": "canvas",
        "item": "white-rgb",
        "hex": "ffffff",
        "rgb": {
          "r": 255,
          "g": 255,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 100,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "canvas",
        "white-rgb"
      ]
    }
  ],
  [
    "--rh-color-canvas-black-hsl",
    {
      "$value": "0 0% 0%",
      "$type": "color",
      "original": {
        "$value": "{color.black}",
        "$type": "color"
      },
      "name": "rh-color-canvas-black-hsl",
      "attributes": {
        "category": "color",
        "type": "canvas",
        "item": "black-hsl",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "canvas",
        "black-hsl"
      ]
    }
  ],
  [
    "--rh-color-canvas-black-rgb",
    {
      "$value": "0 0 0",
      "$type": "color",
      "original": {
        "$value": "{color.black}",
        "$type": "color"
      },
      "name": "rh-color-canvas-black-rgb",
      "attributes": {
        "category": "color",
        "type": "canvas",
        "item": "black-rgb",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "canvas",
        "black-rgb"
      ]
    }
  ],
  [
    "--rh-color-blue-10",
    {
      "$value": "#e0f0ff",
      "$description": "Alert - Info background",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#E0F0FF",
        "$description": "Alert - Info background",
        "$type": "color"
      },
      "name": "rh-color-blue-10",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "10",
        "hex": "e0f0ff",
        "rgb": {
          "r": 224,
          "g": 240,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 209.03225806451616,
          "s": 100,
          "l": 93.92156862745098,
          "a": 1
        },
        "hsv": {
          "h": 209.03225806451616,
          "s": 0.1215686274509804,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "blue",
        "10"
      ]
    }
  ],
  [
    "--rh-color-blue-20",
    {
      "$value": "#b9dafc",
      "$description": "Label - Filled (Blue) border color",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#B9DAFC",
        "$description": "Label - Filled (Blue) border color",
        "$type": "color"
      },
      "name": "rh-color-blue-20",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "20",
        "hex": "b9dafc",
        "rgb": {
          "r": 185,
          "g": 218,
          "b": 252,
          "a": 1
        },
        "hsl": {
          "h": 210.44776119402988,
          "s": 91.78082191780825,
          "l": 85.68627450980392,
          "a": 1
        },
        "hsv": {
          "h": 210.44776119402988,
          "s": 0.2658730158730159,
          "v": 0.9882352941176471,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "blue",
        "20"
      ]
    }
  ],
  [
    "--rh-color-blue-30",
    {
      "$value": "#92c5f9",
      "$description": "Inline link (dark theme)",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#92C5F9",
        "$description": "Inline link (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-blue-30",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "30",
        "hex": "92c5f9",
        "rgb": {
          "r": 146,
          "g": 197,
          "b": 249,
          "a": 1
        },
        "hsl": {
          "h": 210.29126213592232,
          "s": 89.56521739130436,
          "l": 77.45098039215685,
          "a": 1
        },
        "hsv": {
          "h": 210.29126213592232,
          "s": 0.4136546184738956,
          "v": 0.9764705882352941,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "blue",
        "30"
      ]
    }
  ],
  [
    "--rh-color-blue-40",
    {
      "$value": "#4394e5",
      "$description": "Alert - Info accent",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#4394E5",
        "$description": "Alert - Info accent",
        "$type": "color"
      },
      "name": "rh-color-blue-40",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "40",
        "hex": "4394e5",
        "rgb": {
          "r": 67,
          "g": 148,
          "b": 229,
          "a": 1
        },
        "hsl": {
          "h": 210,
          "s": 75.70093457943923,
          "l": 58.03921568627452,
          "a": 1
        },
        "hsv": {
          "h": 210,
          "s": 0.7074235807860262,
          "v": 0.8980392156862745,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "blue",
        "40"
      ]
    }
  ],
  [
    "--rh-color-blue-50",
    {
      "$value": "#0066cc",
      "$description": "Label - Filled (Blue) accent color",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#0066CC",
        "$description": "Label - Filled (Blue) accent color",
        "$type": "color"
      },
      "name": "rh-color-blue-50",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "50",
        "hex": "0066cc",
        "rgb": {
          "r": 0,
          "g": 102,
          "b": 204,
          "a": 1
        },
        "hsl": {
          "h": 210,
          "s": 100,
          "l": 40,
          "a": 1
        },
        "hsv": {
          "h": 210,
          "s": 1,
          "v": 0.8,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "blue",
        "50"
      ]
    }
  ],
  [
    "--rh-color-blue-60",
    {
      "$value": "#004d99",
      "$description": "Inline link hover (light theme)",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#004D99",
        "$description": "Inline link hover (light theme)",
        "$type": "color"
      },
      "name": "rh-color-blue-60",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "60",
        "hex": "004d99",
        "rgb": {
          "r": 0,
          "g": 77,
          "b": 153,
          "a": 1
        },
        "hsl": {
          "h": 209.80392156862746,
          "s": 100,
          "l": 30,
          "a": 1
        },
        "hsv": {
          "h": 209.80392156862746,
          "s": 1,
          "v": 0.6,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "blue",
        "60"
      ]
    }
  ],
  [
    "--rh-color-blue-70",
    {
      "$value": "#003366",
      "$description": "Alert - Info title text",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#003366",
        "$description": "Alert - Info title text",
        "$type": "color"
      },
      "name": "rh-color-blue-70",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "70",
        "hex": "003366",
        "rgb": {
          "r": 0,
          "g": 51,
          "b": 102,
          "a": 1
        },
        "hsl": {
          "h": 210,
          "s": 100,
          "l": 20,
          "a": 1
        },
        "hsv": {
          "h": 210,
          "s": 1,
          "v": 0.4,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "blue",
        "70"
      ]
    }
  ],
  [
    "--rh-color-blue-10-hsl",
    {
      "$value": "209.03225806451616 100% 93.92156862745098%",
      "$type": "color",
      "original": {
        "$value": "{color.blue.10}",
        "$type": "color"
      },
      "name": "rh-color-blue-10-hsl",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "10-hsl",
        "hex": "e0f0ff",
        "rgb": {
          "r": 224,
          "g": 240,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 209.03225806451616,
          "s": 100,
          "l": 93.92156862745098,
          "a": 1
        },
        "hsv": {
          "h": 209.03225806451616,
          "s": 0.1215686274509804,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "blue",
        "10-hsl"
      ]
    }
  ],
  [
    "--rh-color-blue-10-rgb",
    {
      "$value": "224 240 255",
      "$type": "color",
      "original": {
        "$value": "{color.blue.10}",
        "$type": "color"
      },
      "name": "rh-color-blue-10-rgb",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "10-rgb",
        "hex": "e0f0ff",
        "rgb": {
          "r": 224,
          "g": 240,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 209.03225806451616,
          "s": 100,
          "l": 93.92156862745098,
          "a": 1
        },
        "hsv": {
          "h": 209.03225806451616,
          "s": 0.1215686274509804,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "blue",
        "10-rgb"
      ]
    }
  ],
  [
    "--rh-color-blue-20-hsl",
    {
      "$value": "210.44776119402988 91.78082191780825% 85.68627450980392%",
      "$type": "color",
      "original": {
        "$value": "{color.blue.20}",
        "$type": "color"
      },
      "name": "rh-color-blue-20-hsl",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "20-hsl",
        "hex": "b9dafc",
        "rgb": {
          "r": 185,
          "g": 218,
          "b": 252,
          "a": 1
        },
        "hsl": {
          "h": 210.44776119402988,
          "s": 91.78082191780825,
          "l": 85.68627450980392,
          "a": 1
        },
        "hsv": {
          "h": 210.44776119402988,
          "s": 0.2658730158730159,
          "v": 0.9882352941176471,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "blue",
        "20-hsl"
      ]
    }
  ],
  [
    "--rh-color-blue-20-rgb",
    {
      "$value": "185 218 252",
      "$type": "color",
      "original": {
        "$value": "{color.blue.20}",
        "$type": "color"
      },
      "name": "rh-color-blue-20-rgb",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "20-rgb",
        "hex": "b9dafc",
        "rgb": {
          "r": 185,
          "g": 218,
          "b": 252,
          "a": 1
        },
        "hsl": {
          "h": 210.44776119402988,
          "s": 91.78082191780825,
          "l": 85.68627450980392,
          "a": 1
        },
        "hsv": {
          "h": 210.44776119402988,
          "s": 0.2658730158730159,
          "v": 0.9882352941176471,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "blue",
        "20-rgb"
      ]
    }
  ],
  [
    "--rh-color-blue-30-hsl",
    {
      "$value": "210.29126213592232 89.56521739130436% 77.45098039215685%",
      "$type": "color",
      "original": {
        "$value": "{color.blue.30}",
        "$type": "color"
      },
      "name": "rh-color-blue-30-hsl",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "30-hsl",
        "hex": "92c5f9",
        "rgb": {
          "r": 146,
          "g": 197,
          "b": 249,
          "a": 1
        },
        "hsl": {
          "h": 210.29126213592232,
          "s": 89.56521739130436,
          "l": 77.45098039215685,
          "a": 1
        },
        "hsv": {
          "h": 210.29126213592232,
          "s": 0.4136546184738956,
          "v": 0.9764705882352941,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "blue",
        "30-hsl"
      ]
    }
  ],
  [
    "--rh-color-blue-30-rgb",
    {
      "$value": "146 197 249",
      "$type": "color",
      "original": {
        "$value": "{color.blue.30}",
        "$type": "color"
      },
      "name": "rh-color-blue-30-rgb",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "30-rgb",
        "hex": "92c5f9",
        "rgb": {
          "r": 146,
          "g": 197,
          "b": 249,
          "a": 1
        },
        "hsl": {
          "h": 210.29126213592232,
          "s": 89.56521739130436,
          "l": 77.45098039215685,
          "a": 1
        },
        "hsv": {
          "h": 210.29126213592232,
          "s": 0.4136546184738956,
          "v": 0.9764705882352941,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "blue",
        "30-rgb"
      ]
    }
  ],
  [
    "--rh-color-blue-40-hsl",
    {
      "$value": "210 75.70093457943923% 58.03921568627452%",
      "$type": "color",
      "original": {
        "$value": "{color.blue.40}",
        "$type": "color"
      },
      "name": "rh-color-blue-40-hsl",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "40-hsl",
        "hex": "4394e5",
        "rgb": {
          "r": 67,
          "g": 148,
          "b": 229,
          "a": 1
        },
        "hsl": {
          "h": 210,
          "s": 75.70093457943923,
          "l": 58.03921568627452,
          "a": 1
        },
        "hsv": {
          "h": 210,
          "s": 0.7074235807860262,
          "v": 0.8980392156862745,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "blue",
        "40-hsl"
      ]
    }
  ],
  [
    "--rh-color-blue-40-rgb",
    {
      "$value": "67 148 229",
      "$type": "color",
      "original": {
        "$value": "{color.blue.40}",
        "$type": "color"
      },
      "name": "rh-color-blue-40-rgb",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "40-rgb",
        "hex": "4394e5",
        "rgb": {
          "r": 67,
          "g": 148,
          "b": 229,
          "a": 1
        },
        "hsl": {
          "h": 210,
          "s": 75.70093457943923,
          "l": 58.03921568627452,
          "a": 1
        },
        "hsv": {
          "h": 210,
          "s": 0.7074235807860262,
          "v": 0.8980392156862745,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "blue",
        "40-rgb"
      ]
    }
  ],
  [
    "--rh-color-blue-50-hsl",
    {
      "$value": "210 100% 40%",
      "$type": "color",
      "original": {
        "$value": "{color.blue.50}",
        "$type": "color"
      },
      "name": "rh-color-blue-50-hsl",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "50-hsl",
        "hex": "0066cc",
        "rgb": {
          "r": 0,
          "g": 102,
          "b": 204,
          "a": 1
        },
        "hsl": {
          "h": 210,
          "s": 100,
          "l": 40,
          "a": 1
        },
        "hsv": {
          "h": 210,
          "s": 1,
          "v": 0.8,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "blue",
        "50-hsl"
      ]
    }
  ],
  [
    "--rh-color-blue-50-rgb",
    {
      "$value": "0 102 204",
      "$type": "color",
      "original": {
        "$value": "{color.blue.50}",
        "$type": "color"
      },
      "name": "rh-color-blue-50-rgb",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "50-rgb",
        "hex": "0066cc",
        "rgb": {
          "r": 0,
          "g": 102,
          "b": 204,
          "a": 1
        },
        "hsl": {
          "h": 210,
          "s": 100,
          "l": 40,
          "a": 1
        },
        "hsv": {
          "h": 210,
          "s": 1,
          "v": 0.8,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "blue",
        "50-rgb"
      ]
    }
  ],
  [
    "--rh-color-blue-60-hsl",
    {
      "$value": "209.80392156862746 100% 30%",
      "$type": "color",
      "original": {
        "$value": "{color.blue.60}",
        "$type": "color"
      },
      "name": "rh-color-blue-60-hsl",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "60-hsl",
        "hex": "004d99",
        "rgb": {
          "r": 0,
          "g": 77,
          "b": 153,
          "a": 1
        },
        "hsl": {
          "h": 209.80392156862746,
          "s": 100,
          "l": 30,
          "a": 1
        },
        "hsv": {
          "h": 209.80392156862746,
          "s": 1,
          "v": 0.6,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "blue",
        "60-hsl"
      ]
    }
  ],
  [
    "--rh-color-blue-60-rgb",
    {
      "$value": "0 77 153",
      "$type": "color",
      "original": {
        "$value": "{color.blue.60}",
        "$type": "color"
      },
      "name": "rh-color-blue-60-rgb",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "60-rgb",
        "hex": "004d99",
        "rgb": {
          "r": 0,
          "g": 77,
          "b": 153,
          "a": 1
        },
        "hsl": {
          "h": 209.80392156862746,
          "s": 100,
          "l": 30,
          "a": 1
        },
        "hsv": {
          "h": 209.80392156862746,
          "s": 1,
          "v": 0.6,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "blue",
        "60-rgb"
      ]
    }
  ],
  [
    "--rh-color-blue-70-hsl",
    {
      "$value": "210 100% 20%",
      "$type": "color",
      "original": {
        "$value": "{color.blue.70}",
        "$type": "color"
      },
      "name": "rh-color-blue-70-hsl",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "70-hsl",
        "hex": "003366",
        "rgb": {
          "r": 0,
          "g": 51,
          "b": 102,
          "a": 1
        },
        "hsl": {
          "h": 210,
          "s": 100,
          "l": 20,
          "a": 1
        },
        "hsv": {
          "h": 210,
          "s": 1,
          "v": 0.4,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "blue",
        "70-hsl"
      ]
    }
  ],
  [
    "--rh-color-blue-70-rgb",
    {
      "$value": "0 51 102",
      "$type": "color",
      "original": {
        "$value": "{color.blue.70}",
        "$type": "color"
      },
      "name": "rh-color-blue-70-rgb",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "70-rgb",
        "hex": "003366",
        "rgb": {
          "r": 0,
          "g": 51,
          "b": 102,
          "a": 1
        },
        "hsl": {
          "h": 210,
          "s": 100,
          "l": 20,
          "a": 1
        },
        "hsv": {
          "h": 210,
          "s": 1,
          "v": 0.4,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "blue",
        "70-rgb"
      ]
    }
  ],
  [
    "--rh-color-white",
    {
      "$description": "Lightest surface (light theme) or primary text (dark theme)",
      "$value": "#ffffff",
      "attributes": {
        "type": "gray",
        "category": "color",
        "hex": "ffffff",
        "rgb": {
          "r": 255,
          "g": 255,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 100,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$description": "Lightest surface (light theme) or primary text (dark theme)",
        "$value": "#ffffff",
        "attributes": {
          "type": "gray"
        },
        "$type": "color"
      },
      "name": "rh-color-white",
      "path": [
        "color",
        "white"
      ]
    }
  ],
  [
    "--rh-color-gray-10",
    {
      "$value": "#f2f2f2",
      "$description": "Tertiary surface (light theme)",
      "attributes": {
        "type": "gray",
        "category": "color",
        "item": "10",
        "hex": "f2f2f2",
        "rgb": {
          "r": 242,
          "g": 242,
          "b": 242,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 94.90196078431372,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.9490196078431372,
          "a": 1
        },
        "isLight": true
      },
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#F2F2F2",
        "$description": "Tertiary surface (light theme)",
        "attributes": {
          "type": "gray"
        },
        "$type": "color"
      },
      "name": "rh-color-gray-10",
      "path": [
        "color",
        "gray",
        "10"
      ]
    }
  ],
  [
    "--rh-color-gray-20",
    {
      "$value": "#e0e0e0",
      "$description": "Secondary surface (light theme)",
      "attributes": {
        "type": "gray",
        "category": "color",
        "item": "20",
        "hex": "e0e0e0",
        "rgb": {
          "r": 224,
          "g": 224,
          "b": 224,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 87.84313725490196,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.8784313725490196,
          "a": 1
        },
        "isLight": true
      },
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#E0E0E0",
        "$description": "Secondary surface (light theme)",
        "attributes": {
          "type": "gray"
        },
        "$type": "color"
      },
      "name": "rh-color-gray-20",
      "path": [
        "color",
        "gray",
        "20"
      ]
    }
  ],
  [
    "--rh-color-gray-30",
    {
      "$value": "#c7c7c7",
      "$description": "Subtle borders (light theme)",
      "attributes": {
        "type": "gray",
        "category": "color",
        "item": "30",
        "hex": "c7c7c7",
        "rgb": {
          "r": 199,
          "g": 199,
          "b": 199,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 78.03921568627452,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.7803921568627451,
          "a": 1
        },
        "isLight": true
      },
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#C7C7C7",
        "$description": "Subtle borders (light theme)",
        "attributes": {
          "type": "gray"
        },
        "$type": "color"
      },
      "name": "rh-color-gray-30",
      "path": [
        "color",
        "gray",
        "30"
      ]
    }
  ],
  [
    "--rh-color-gray-40",
    {
      "$value": "#a3a3a3",
      "$description": "Subtle icon (hover state)",
      "attributes": {
        "type": "gray",
        "category": "color",
        "item": "40",
        "hex": "a3a3a3",
        "rgb": {
          "r": 163,
          "g": 163,
          "b": 163,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 63.921568627450974,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.6392156862745098,
          "a": 1
        },
        "isLight": true
      },
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#A3A3A3",
        "$description": "Subtle icon (hover state)",
        "attributes": {
          "type": "gray"
        },
        "$type": "color"
      },
      "name": "rh-color-gray-40",
      "path": [
        "color",
        "gray",
        "40"
      ]
    }
  ],
  [
    "--rh-color-gray-50",
    {
      "$value": "#707070",
      "$description": "Subtle icon",
      "attributes": {
        "type": "gray",
        "category": "color",
        "item": "50",
        "hex": "707070",
        "rgb": {
          "r": 112,
          "g": 112,
          "b": 112,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 43.92156862745098,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.4392156862745098,
          "a": 1
        },
        "isLight": false
      },
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#707070",
        "$description": "Subtle icon",
        "attributes": {
          "type": "gray"
        },
        "$type": "color"
      },
      "name": "rh-color-gray-50",
      "path": [
        "color",
        "gray",
        "50"
      ]
    }
  ],
  [
    "--rh-color-gray-60",
    {
      "$value": "#4d4d4d",
      "$description": "Secondary text (light theme)",
      "attributes": {
        "type": "gray",
        "category": "color",
        "item": "60",
        "hex": "4d4d4d",
        "rgb": {
          "r": 77,
          "g": 77,
          "b": 77,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 30.19607843137255,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.30196078431372547,
          "a": 1
        },
        "isLight": false
      },
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#4D4D4D",
        "$description": "Secondary text (light theme)",
        "attributes": {
          "type": "gray"
        },
        "$type": "color"
      },
      "name": "rh-color-gray-60",
      "path": [
        "color",
        "gray",
        "60"
      ]
    }
  ],
  [
    "--rh-color-gray-70",
    {
      "$value": "#383838",
      "$description": "Tertiary surface (dark theme)",
      "attributes": {
        "type": "gray",
        "category": "color",
        "item": "70",
        "hex": "383838",
        "rgb": {
          "r": 56,
          "g": 56,
          "b": 56,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 21.96078431372549,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.2196078431372549,
          "a": 1
        },
        "isLight": false
      },
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#383838",
        "$description": "Tertiary surface (dark theme)",
        "attributes": {
          "type": "gray"
        },
        "$type": "color"
      },
      "name": "rh-color-gray-70",
      "path": [
        "color",
        "gray",
        "70"
      ]
    }
  ],
  [
    "--rh-color-gray-80",
    {
      "$value": "#292929",
      "$description": "Alternative tertiary surface (not available for use with context provider)",
      "attributes": {
        "type": "gray",
        "category": "color",
        "item": "80",
        "hex": "292929",
        "rgb": {
          "r": 41,
          "g": 41,
          "b": 41,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 16.07843137254902,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.1607843137254902,
          "a": 1
        },
        "isLight": false
      },
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#292929",
        "$description": "Alternative tertiary surface (not available for use with context provider)",
        "attributes": {
          "type": "gray"
        },
        "$type": "color"
      },
      "name": "rh-color-gray-80",
      "path": [
        "color",
        "gray",
        "80"
      ]
    }
  ],
  [
    "--rh-color-gray-90",
    {
      "$value": "#1f1f1f",
      "$description": "Secondary surface (dark theme)",
      "attributes": {
        "type": "gray",
        "category": "color",
        "item": "90",
        "hex": "1f1f1f",
        "rgb": {
          "r": 31,
          "g": 31,
          "b": 31,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 12.156862745098039,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.12156862745098039,
          "a": 1
        },
        "isLight": false
      },
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#1F1F1F",
        "$description": "Secondary surface (dark theme)",
        "attributes": {
          "type": "gray"
        },
        "$type": "color"
      },
      "name": "rh-color-gray-90",
      "path": [
        "color",
        "gray",
        "90"
      ]
    }
  ],
  [
    "--rh-color-gray-95",
    {
      "$value": "#151515",
      "$description": "Primary surface (dark theme) or primary text (light theme)",
      "attributes": {
        "type": "gray",
        "category": "color",
        "item": "95",
        "hex": "151515",
        "rgb": {
          "r": 21,
          "g": 21,
          "b": 21,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 8.235294117647058,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.08235294117647059,
          "a": 1
        },
        "isLight": false
      },
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#151515",
        "$description": "Primary surface (dark theme) or primary text (light theme)",
        "attributes": {
          "type": "gray"
        },
        "$type": "color"
      },
      "name": "rh-color-gray-95",
      "path": [
        "color",
        "gray",
        "95"
      ]
    }
  ],
  [
    "--rh-color-gray-10-hsl",
    {
      "$value": "0 0% 94.90196078431372%",
      "$type": "color",
      "original": {
        "$value": "{color.gray.10}",
        "$type": "color"
      },
      "name": "rh-color-gray-10-hsl",
      "attributes": {
        "category": "color",
        "type": "gray",
        "item": "10-hsl",
        "hex": "f2f2f2",
        "rgb": {
          "r": 242,
          "g": 242,
          "b": 242,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 94.90196078431372,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.9490196078431372,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "gray",
        "10-hsl"
      ]
    }
  ],
  [
    "--rh-color-gray-10-rgb",
    {
      "$value": "242 242 242",
      "$type": "color",
      "original": {
        "$value": "{color.gray.10}",
        "$type": "color"
      },
      "name": "rh-color-gray-10-rgb",
      "attributes": {
        "category": "color",
        "type": "gray",
        "item": "10-rgb",
        "hex": "f2f2f2",
        "rgb": {
          "r": 242,
          "g": 242,
          "b": 242,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 94.90196078431372,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.9490196078431372,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "gray",
        "10-rgb"
      ]
    }
  ],
  [
    "--rh-color-gray-20-hsl",
    {
      "$value": "0 0% 87.84313725490196%",
      "$type": "color",
      "original": {
        "$value": "{color.gray.20}",
        "$type": "color"
      },
      "name": "rh-color-gray-20-hsl",
      "attributes": {
        "category": "color",
        "type": "gray",
        "item": "20-hsl",
        "hex": "e0e0e0",
        "rgb": {
          "r": 224,
          "g": 224,
          "b": 224,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 87.84313725490196,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.8784313725490196,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "gray",
        "20-hsl"
      ]
    }
  ],
  [
    "--rh-color-gray-20-rgb",
    {
      "$value": "224 224 224",
      "$type": "color",
      "original": {
        "$value": "{color.gray.20}",
        "$type": "color"
      },
      "name": "rh-color-gray-20-rgb",
      "attributes": {
        "category": "color",
        "type": "gray",
        "item": "20-rgb",
        "hex": "e0e0e0",
        "rgb": {
          "r": 224,
          "g": 224,
          "b": 224,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 87.84313725490196,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.8784313725490196,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "gray",
        "20-rgb"
      ]
    }
  ],
  [
    "--rh-color-gray-30-hsl",
    {
      "$value": "0 0% 78.03921568627452%",
      "$type": "color",
      "original": {
        "$value": "{color.gray.30}",
        "$type": "color"
      },
      "name": "rh-color-gray-30-hsl",
      "attributes": {
        "category": "color",
        "type": "gray",
        "item": "30-hsl",
        "hex": "c7c7c7",
        "rgb": {
          "r": 199,
          "g": 199,
          "b": 199,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 78.03921568627452,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.7803921568627451,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "gray",
        "30-hsl"
      ]
    }
  ],
  [
    "--rh-color-gray-30-rgb",
    {
      "$value": "199 199 199",
      "$type": "color",
      "original": {
        "$value": "{color.gray.30}",
        "$type": "color"
      },
      "name": "rh-color-gray-30-rgb",
      "attributes": {
        "category": "color",
        "type": "gray",
        "item": "30-rgb",
        "hex": "c7c7c7",
        "rgb": {
          "r": 199,
          "g": 199,
          "b": 199,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 78.03921568627452,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.7803921568627451,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "gray",
        "30-rgb"
      ]
    }
  ],
  [
    "--rh-color-gray-40-hsl",
    {
      "$value": "0 0% 63.921568627450974%",
      "$type": "color",
      "original": {
        "$value": "{color.gray.40}",
        "$type": "color"
      },
      "name": "rh-color-gray-40-hsl",
      "attributes": {
        "category": "color",
        "type": "gray",
        "item": "40-hsl",
        "hex": "a3a3a3",
        "rgb": {
          "r": 163,
          "g": 163,
          "b": 163,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 63.921568627450974,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.6392156862745098,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "gray",
        "40-hsl"
      ]
    }
  ],
  [
    "--rh-color-gray-40-rgb",
    {
      "$value": "163 163 163",
      "$type": "color",
      "original": {
        "$value": "{color.gray.40}",
        "$type": "color"
      },
      "name": "rh-color-gray-40-rgb",
      "attributes": {
        "category": "color",
        "type": "gray",
        "item": "40-rgb",
        "hex": "a3a3a3",
        "rgb": {
          "r": 163,
          "g": 163,
          "b": 163,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 63.921568627450974,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.6392156862745098,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "gray",
        "40-rgb"
      ]
    }
  ],
  [
    "--rh-color-gray-50-hsl",
    {
      "$value": "0 0% 43.92156862745098%",
      "$type": "color",
      "original": {
        "$value": "{color.gray.50}",
        "$type": "color"
      },
      "name": "rh-color-gray-50-hsl",
      "attributes": {
        "category": "color",
        "type": "gray",
        "item": "50-hsl",
        "hex": "707070",
        "rgb": {
          "r": 112,
          "g": 112,
          "b": 112,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 43.92156862745098,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.4392156862745098,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "gray",
        "50-hsl"
      ]
    }
  ],
  [
    "--rh-color-gray-50-rgb",
    {
      "$value": "112 112 112",
      "$type": "color",
      "original": {
        "$value": "{color.gray.50}",
        "$type": "color"
      },
      "name": "rh-color-gray-50-rgb",
      "attributes": {
        "category": "color",
        "type": "gray",
        "item": "50-rgb",
        "hex": "707070",
        "rgb": {
          "r": 112,
          "g": 112,
          "b": 112,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 43.92156862745098,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.4392156862745098,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "gray",
        "50-rgb"
      ]
    }
  ],
  [
    "--rh-color-gray-60-hsl",
    {
      "$value": "0 0% 30.19607843137255%",
      "$type": "color",
      "original": {
        "$value": "{color.gray.60}",
        "$type": "color"
      },
      "name": "rh-color-gray-60-hsl",
      "attributes": {
        "category": "color",
        "type": "gray",
        "item": "60-hsl",
        "hex": "4d4d4d",
        "rgb": {
          "r": 77,
          "g": 77,
          "b": 77,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 30.19607843137255,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.30196078431372547,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "gray",
        "60-hsl"
      ]
    }
  ],
  [
    "--rh-color-gray-60-rgb",
    {
      "$value": "77 77 77",
      "$type": "color",
      "original": {
        "$value": "{color.gray.60}",
        "$type": "color"
      },
      "name": "rh-color-gray-60-rgb",
      "attributes": {
        "category": "color",
        "type": "gray",
        "item": "60-rgb",
        "hex": "4d4d4d",
        "rgb": {
          "r": 77,
          "g": 77,
          "b": 77,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 30.19607843137255,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.30196078431372547,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "gray",
        "60-rgb"
      ]
    }
  ],
  [
    "--rh-color-gray-70-hsl",
    {
      "$value": "0 0% 21.96078431372549%",
      "$type": "color",
      "original": {
        "$value": "{color.gray.70}",
        "$type": "color"
      },
      "name": "rh-color-gray-70-hsl",
      "attributes": {
        "category": "color",
        "type": "gray",
        "item": "70-hsl",
        "hex": "383838",
        "rgb": {
          "r": 56,
          "g": 56,
          "b": 56,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 21.96078431372549,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.2196078431372549,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "gray",
        "70-hsl"
      ]
    }
  ],
  [
    "--rh-color-gray-70-rgb",
    {
      "$value": "56 56 56",
      "$type": "color",
      "original": {
        "$value": "{color.gray.70}",
        "$type": "color"
      },
      "name": "rh-color-gray-70-rgb",
      "attributes": {
        "category": "color",
        "type": "gray",
        "item": "70-rgb",
        "hex": "383838",
        "rgb": {
          "r": 56,
          "g": 56,
          "b": 56,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 21.96078431372549,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.2196078431372549,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "gray",
        "70-rgb"
      ]
    }
  ],
  [
    "--rh-color-gray-80-hsl",
    {
      "$value": "0 0% 16.07843137254902%",
      "$type": "color",
      "original": {
        "$value": "{color.gray.80}",
        "$type": "color"
      },
      "name": "rh-color-gray-80-hsl",
      "attributes": {
        "category": "color",
        "type": "gray",
        "item": "80-hsl",
        "hex": "292929",
        "rgb": {
          "r": 41,
          "g": 41,
          "b": 41,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 16.07843137254902,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.1607843137254902,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "gray",
        "80-hsl"
      ]
    }
  ],
  [
    "--rh-color-gray-80-rgb",
    {
      "$value": "41 41 41",
      "$type": "color",
      "original": {
        "$value": "{color.gray.80}",
        "$type": "color"
      },
      "name": "rh-color-gray-80-rgb",
      "attributes": {
        "category": "color",
        "type": "gray",
        "item": "80-rgb",
        "hex": "292929",
        "rgb": {
          "r": 41,
          "g": 41,
          "b": 41,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 16.07843137254902,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.1607843137254902,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "gray",
        "80-rgb"
      ]
    }
  ],
  [
    "--rh-color-gray-90-hsl",
    {
      "$value": "0 0% 12.156862745098039%",
      "$type": "color",
      "original": {
        "$value": "{color.gray.90}",
        "$type": "color"
      },
      "name": "rh-color-gray-90-hsl",
      "attributes": {
        "category": "color",
        "type": "gray",
        "item": "90-hsl",
        "hex": "1f1f1f",
        "rgb": {
          "r": 31,
          "g": 31,
          "b": 31,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 12.156862745098039,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.12156862745098039,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "gray",
        "90-hsl"
      ]
    }
  ],
  [
    "--rh-color-gray-90-rgb",
    {
      "$value": "31 31 31",
      "$type": "color",
      "original": {
        "$value": "{color.gray.90}",
        "$type": "color"
      },
      "name": "rh-color-gray-90-rgb",
      "attributes": {
        "category": "color",
        "type": "gray",
        "item": "90-rgb",
        "hex": "1f1f1f",
        "rgb": {
          "r": 31,
          "g": 31,
          "b": 31,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 12.156862745098039,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.12156862745098039,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "gray",
        "90-rgb"
      ]
    }
  ],
  [
    "--rh-color-gray-95-hsl",
    {
      "$value": "0 0% 8.235294117647058%",
      "$type": "color",
      "original": {
        "$value": "{color.gray.95}",
        "$type": "color"
      },
      "name": "rh-color-gray-95-hsl",
      "attributes": {
        "category": "color",
        "type": "gray",
        "item": "95-hsl",
        "hex": "151515",
        "rgb": {
          "r": 21,
          "g": 21,
          "b": 21,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 8.235294117647058,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.08235294117647059,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "gray",
        "95-hsl"
      ]
    }
  ],
  [
    "--rh-color-gray-95-rgb",
    {
      "$value": "21 21 21",
      "$type": "color",
      "original": {
        "$value": "{color.gray.95}",
        "$type": "color"
      },
      "name": "rh-color-gray-95-rgb",
      "attributes": {
        "category": "color",
        "type": "gray",
        "item": "95-rgb",
        "hex": "151515",
        "rgb": {
          "r": 21,
          "g": 21,
          "b": 21,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 8.235294117647058,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.08235294117647059,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "gray",
        "95-rgb"
      ]
    }
  ],
  [
    "--rh-color-black",
    {
      "$value": "#000000",
      "$description": "Brand black (avoid using)",
      "attributes": {
        "type": "gray",
        "category": "color",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#000000",
        "$description": "Brand black (avoid using)",
        "attributes": {
          "type": "gray"
        },
        "$type": "color"
      },
      "name": "rh-color-black",
      "path": [
        "color",
        "black"
      ]
    }
  ],
  [
    "--rh-color-purple-10",
    {
      "$value": "#ece6ff",
      "$description": "Label - Filled (Purple) background color",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#ECE6FF",
        "$description": "Label - Filled (Purple) background color",
        "$type": "color"
      },
      "name": "rh-color-purple-10",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "10",
        "hex": "ece6ff",
        "rgb": {
          "r": 236,
          "g": 230,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 254.4,
          "s": 100,
          "l": 95.09803921568627,
          "a": 1
        },
        "hsv": {
          "h": 254.4,
          "s": 0.0980392156862745,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "purple",
        "10"
      ]
    }
  ],
  [
    "--rh-color-purple-20",
    {
      "$value": "#d0c5f4",
      "$description": "Inline link visited hover (dark theme)",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#D0C5F4",
        "$description": "Inline link visited hover (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-purple-20",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "20",
        "hex": "d0c5f4",
        "rgb": {
          "r": 208,
          "g": 197,
          "b": 244,
          "a": 1
        },
        "hsl": {
          "h": 254.0425531914893,
          "s": 68.11594202898556,
          "l": 86.47058823529412,
          "a": 1
        },
        "hsv": {
          "h": 254.0425531914893,
          "s": 0.19262295081967212,
          "v": 0.9568627450980393,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "purple",
        "20"
      ]
    }
  ],
  [
    "--rh-color-purple-30",
    {
      "$value": "#b6a6e9",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#B6A6E9",
        "$type": "color"
      },
      "name": "rh-color-purple-30",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "30",
        "hex": "b6a6e9",
        "rgb": {
          "r": 182,
          "g": 166,
          "b": 233,
          "a": 1
        },
        "hsl": {
          "h": 254.32835820895522,
          "s": 60.36036036036033,
          "l": 78.23529411764706,
          "a": 1
        },
        "hsv": {
          "h": 254.32835820895522,
          "s": 0.2875536480686695,
          "v": 0.9137254901960784,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "purple",
        "30"
      ]
    }
  ],
  [
    "--rh-color-purple-40",
    {
      "$value": "#876fd4",
      "$description": "Inline link visited (dark theme)",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#876FD4",
        "$description": "Inline link visited (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-purple-40",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "40",
        "hex": "876fd4",
        "rgb": {
          "r": 135,
          "g": 111,
          "b": 212,
          "a": 1
        },
        "hsl": {
          "h": 254.25742574257427,
          "s": 54.010695187165794,
          "l": 63.33333333333333,
          "a": 1
        },
        "hsv": {
          "h": 254.25742574257427,
          "s": 0.47641509433962265,
          "v": 0.8313725490196079,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "purple",
        "40"
      ]
    }
  ],
  [
    "--rh-color-purple-50",
    {
      "$value": "#5e40be",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#5E40BE",
        "$type": "color"
      },
      "name": "rh-color-purple-50",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "50",
        "hex": "5e40be",
        "rgb": {
          "r": 94,
          "g": 64,
          "b": 190,
          "a": 1
        },
        "hsl": {
          "h": 254.2857142857143,
          "s": 49.60629921259843,
          "l": 49.80392156862745,
          "a": 1
        },
        "hsv": {
          "h": 254.2857142857143,
          "s": 0.6631578947368422,
          "v": 0.7450980392156863,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "purple",
        "50"
      ]
    }
  ],
  [
    "--rh-color-purple-60",
    {
      "$value": "#3d2785",
      "$description": "Inline link visited (light theme)",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#3D2785",
        "$description": "Inline link visited (light theme)",
        "$type": "color"
      },
      "name": "rh-color-purple-60",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "60",
        "hex": "3d2785",
        "rgb": {
          "r": 61,
          "g": 39,
          "b": 133,
          "a": 1
        },
        "hsl": {
          "h": 254.0425531914894,
          "s": 54.65116279069767,
          "l": 33.72549019607843,
          "a": 1
        },
        "hsv": {
          "h": 254.0425531914894,
          "s": 0.706766917293233,
          "v": 0.5215686274509804,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "purple",
        "60"
      ]
    }
  ],
  [
    "--rh-color-purple-70",
    {
      "$value": "#21134d",
      "$description": "Inline link visited hover (light theme)",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#21134D",
        "$description": "Inline link visited hover (light theme)",
        "$type": "color"
      },
      "name": "rh-color-purple-70",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "70",
        "hex": "21134d",
        "rgb": {
          "r": 33,
          "g": 19,
          "b": 77,
          "a": 1
        },
        "hsl": {
          "h": 254.48275862068965,
          "s": 60.416666666666664,
          "l": 18.823529411764707,
          "a": 1
        },
        "hsv": {
          "h": 254.48275862068965,
          "s": 0.7532467532467532,
          "v": 0.30196078431372547,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "purple",
        "70"
      ]
    }
  ],
  [
    "--rh-color-purple-10-hsl",
    {
      "$value": "254.4 100% 95.09803921568627%",
      "$type": "color",
      "original": {
        "$value": "{color.purple.10}",
        "$type": "color"
      },
      "name": "rh-color-purple-10-hsl",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "10-hsl",
        "hex": "ece6ff",
        "rgb": {
          "r": 236,
          "g": 230,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 254.4,
          "s": 100,
          "l": 95.09803921568627,
          "a": 1
        },
        "hsv": {
          "h": 254.4,
          "s": 0.0980392156862745,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "purple",
        "10-hsl"
      ]
    }
  ],
  [
    "--rh-color-purple-10-rgb",
    {
      "$value": "236 230 255",
      "$type": "color",
      "original": {
        "$value": "{color.purple.10}",
        "$type": "color"
      },
      "name": "rh-color-purple-10-rgb",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "10-rgb",
        "hex": "ece6ff",
        "rgb": {
          "r": 236,
          "g": 230,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 254.4,
          "s": 100,
          "l": 95.09803921568627,
          "a": 1
        },
        "hsv": {
          "h": 254.4,
          "s": 0.0980392156862745,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "purple",
        "10-rgb"
      ]
    }
  ],
  [
    "--rh-color-purple-20-hsl",
    {
      "$value": "254.0425531914893 68.11594202898556% 86.47058823529412%",
      "$type": "color",
      "original": {
        "$value": "{color.purple.20}",
        "$type": "color"
      },
      "name": "rh-color-purple-20-hsl",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "20-hsl",
        "hex": "d0c5f4",
        "rgb": {
          "r": 208,
          "g": 197,
          "b": 244,
          "a": 1
        },
        "hsl": {
          "h": 254.0425531914893,
          "s": 68.11594202898556,
          "l": 86.47058823529412,
          "a": 1
        },
        "hsv": {
          "h": 254.0425531914893,
          "s": 0.19262295081967212,
          "v": 0.9568627450980393,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "purple",
        "20-hsl"
      ]
    }
  ],
  [
    "--rh-color-purple-20-rgb",
    {
      "$value": "208 197 244",
      "$type": "color",
      "original": {
        "$value": "{color.purple.20}",
        "$type": "color"
      },
      "name": "rh-color-purple-20-rgb",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "20-rgb",
        "hex": "d0c5f4",
        "rgb": {
          "r": 208,
          "g": 197,
          "b": 244,
          "a": 1
        },
        "hsl": {
          "h": 254.0425531914893,
          "s": 68.11594202898556,
          "l": 86.47058823529412,
          "a": 1
        },
        "hsv": {
          "h": 254.0425531914893,
          "s": 0.19262295081967212,
          "v": 0.9568627450980393,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "purple",
        "20-rgb"
      ]
    }
  ],
  [
    "--rh-color-purple-30-hsl",
    {
      "$value": "254.32835820895522 60.36036036036033% 78.23529411764706%",
      "$type": "color",
      "original": {
        "$value": "{color.purple.30}",
        "$type": "color"
      },
      "name": "rh-color-purple-30-hsl",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "30-hsl",
        "hex": "b6a6e9",
        "rgb": {
          "r": 182,
          "g": 166,
          "b": 233,
          "a": 1
        },
        "hsl": {
          "h": 254.32835820895522,
          "s": 60.36036036036033,
          "l": 78.23529411764706,
          "a": 1
        },
        "hsv": {
          "h": 254.32835820895522,
          "s": 0.2875536480686695,
          "v": 0.9137254901960784,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "purple",
        "30-hsl"
      ]
    }
  ],
  [
    "--rh-color-purple-30-rgb",
    {
      "$value": "182 166 233",
      "$type": "color",
      "original": {
        "$value": "{color.purple.30}",
        "$type": "color"
      },
      "name": "rh-color-purple-30-rgb",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "30-rgb",
        "hex": "b6a6e9",
        "rgb": {
          "r": 182,
          "g": 166,
          "b": 233,
          "a": 1
        },
        "hsl": {
          "h": 254.32835820895522,
          "s": 60.36036036036033,
          "l": 78.23529411764706,
          "a": 1
        },
        "hsv": {
          "h": 254.32835820895522,
          "s": 0.2875536480686695,
          "v": 0.9137254901960784,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "purple",
        "30-rgb"
      ]
    }
  ],
  [
    "--rh-color-purple-40-hsl",
    {
      "$value": "254.25742574257427 54.010695187165794% 63.33333333333333%",
      "$type": "color",
      "original": {
        "$value": "{color.purple.40}",
        "$type": "color"
      },
      "name": "rh-color-purple-40-hsl",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "40-hsl",
        "hex": "876fd4",
        "rgb": {
          "r": 135,
          "g": 111,
          "b": 212,
          "a": 1
        },
        "hsl": {
          "h": 254.25742574257427,
          "s": 54.010695187165794,
          "l": 63.33333333333333,
          "a": 1
        },
        "hsv": {
          "h": 254.25742574257427,
          "s": 0.47641509433962265,
          "v": 0.8313725490196079,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "purple",
        "40-hsl"
      ]
    }
  ],
  [
    "--rh-color-purple-40-rgb",
    {
      "$value": "135 111 212",
      "$type": "color",
      "original": {
        "$value": "{color.purple.40}",
        "$type": "color"
      },
      "name": "rh-color-purple-40-rgb",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "40-rgb",
        "hex": "876fd4",
        "rgb": {
          "r": 135,
          "g": 111,
          "b": 212,
          "a": 1
        },
        "hsl": {
          "h": 254.25742574257427,
          "s": 54.010695187165794,
          "l": 63.33333333333333,
          "a": 1
        },
        "hsv": {
          "h": 254.25742574257427,
          "s": 0.47641509433962265,
          "v": 0.8313725490196079,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "purple",
        "40-rgb"
      ]
    }
  ],
  [
    "--rh-color-purple-50-hsl",
    {
      "$value": "254.2857142857143 49.60629921259843% 49.80392156862745%",
      "$type": "color",
      "original": {
        "$value": "{color.purple.50}",
        "$type": "color"
      },
      "name": "rh-color-purple-50-hsl",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "50-hsl",
        "hex": "5e40be",
        "rgb": {
          "r": 94,
          "g": 64,
          "b": 190,
          "a": 1
        },
        "hsl": {
          "h": 254.2857142857143,
          "s": 49.60629921259843,
          "l": 49.80392156862745,
          "a": 1
        },
        "hsv": {
          "h": 254.2857142857143,
          "s": 0.6631578947368422,
          "v": 0.7450980392156863,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "purple",
        "50-hsl"
      ]
    }
  ],
  [
    "--rh-color-purple-50-rgb",
    {
      "$value": "94 64 190",
      "$type": "color",
      "original": {
        "$value": "{color.purple.50}",
        "$type": "color"
      },
      "name": "rh-color-purple-50-rgb",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "50-rgb",
        "hex": "5e40be",
        "rgb": {
          "r": 94,
          "g": 64,
          "b": 190,
          "a": 1
        },
        "hsl": {
          "h": 254.2857142857143,
          "s": 49.60629921259843,
          "l": 49.80392156862745,
          "a": 1
        },
        "hsv": {
          "h": 254.2857142857143,
          "s": 0.6631578947368422,
          "v": 0.7450980392156863,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "purple",
        "50-rgb"
      ]
    }
  ],
  [
    "--rh-color-purple-60-hsl",
    {
      "$value": "254.0425531914894 54.65116279069767% 33.72549019607843%",
      "$type": "color",
      "original": {
        "$value": "{color.purple.60}",
        "$type": "color"
      },
      "name": "rh-color-purple-60-hsl",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "60-hsl",
        "hex": "3d2785",
        "rgb": {
          "r": 61,
          "g": 39,
          "b": 133,
          "a": 1
        },
        "hsl": {
          "h": 254.0425531914894,
          "s": 54.65116279069767,
          "l": 33.72549019607843,
          "a": 1
        },
        "hsv": {
          "h": 254.0425531914894,
          "s": 0.706766917293233,
          "v": 0.5215686274509804,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "purple",
        "60-hsl"
      ]
    }
  ],
  [
    "--rh-color-purple-60-rgb",
    {
      "$value": "61 39 133",
      "$type": "color",
      "original": {
        "$value": "{color.purple.60}",
        "$type": "color"
      },
      "name": "rh-color-purple-60-rgb",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "60-rgb",
        "hex": "3d2785",
        "rgb": {
          "r": 61,
          "g": 39,
          "b": 133,
          "a": 1
        },
        "hsl": {
          "h": 254.0425531914894,
          "s": 54.65116279069767,
          "l": 33.72549019607843,
          "a": 1
        },
        "hsv": {
          "h": 254.0425531914894,
          "s": 0.706766917293233,
          "v": 0.5215686274509804,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "purple",
        "60-rgb"
      ]
    }
  ],
  [
    "--rh-color-purple-70-hsl",
    {
      "$value": "254.48275862068965 60.416666666666664% 18.823529411764707%",
      "$type": "color",
      "original": {
        "$value": "{color.purple.70}",
        "$type": "color"
      },
      "name": "rh-color-purple-70-hsl",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "70-hsl",
        "hex": "21134d",
        "rgb": {
          "r": 33,
          "g": 19,
          "b": 77,
          "a": 1
        },
        "hsl": {
          "h": 254.48275862068965,
          "s": 60.416666666666664,
          "l": 18.823529411764707,
          "a": 1
        },
        "hsv": {
          "h": 254.48275862068965,
          "s": 0.7532467532467532,
          "v": 0.30196078431372547,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "purple",
        "70-hsl"
      ]
    }
  ],
  [
    "--rh-color-purple-70-rgb",
    {
      "$value": "33 19 77",
      "$type": "color",
      "original": {
        "$value": "{color.purple.70}",
        "$type": "color"
      },
      "name": "rh-color-purple-70-rgb",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "70-rgb",
        "hex": "21134d",
        "rgb": {
          "r": 33,
          "g": 19,
          "b": 77,
          "a": 1
        },
        "hsl": {
          "h": 254.48275862068965,
          "s": 60.416666666666664,
          "l": 18.823529411764707,
          "a": 1
        },
        "hsv": {
          "h": 254.48275862068965,
          "s": 0.7532467532467532,
          "v": 0.30196078431372547,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "purple",
        "70-rgb"
      ]
    }
  ],
  [
    "--rh-color-red-orange-10",
    {
      "$value": "#ffe3d9",
      "filePath": "tokens/color/crayon/red-orange.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#FFE3D9",
        "$type": "color"
      },
      "name": "rh-color-red-orange-10",
      "attributes": {
        "category": "color",
        "type": "red-orange",
        "item": "10",
        "hex": "ffe3d9",
        "rgb": {
          "r": 255,
          "g": 227,
          "b": 217,
          "a": 1
        },
        "hsl": {
          "h": 15.789473684210513,
          "s": 100,
          "l": 92.54901960784314,
          "a": 1
        },
        "hsv": {
          "h": 15.789473684210513,
          "s": 0.14901960784313728,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red-orange",
        "10"
      ]
    }
  ],
  [
    "--rh-color-red-orange-20",
    {
      "$value": "#fbbea8",
      "filePath": "tokens/color/crayon/red-orange.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#FBBEA8",
        "$type": "color"
      },
      "name": "rh-color-red-orange-20",
      "attributes": {
        "category": "color",
        "type": "red-orange",
        "item": "20",
        "hex": "fbbea8",
        "rgb": {
          "r": 251,
          "g": 190,
          "b": 168,
          "a": 1
        },
        "hsl": {
          "h": 15.903614457831333,
          "s": 91.20879120879121,
          "l": 82.15686274509804,
          "a": 1
        },
        "hsv": {
          "h": 15.903614457831333,
          "s": 0.33067729083665337,
          "v": 0.984313725490196,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red-orange",
        "20"
      ]
    }
  ],
  [
    "--rh-color-red-orange-30",
    {
      "$value": "#f89b78",
      "filePath": "tokens/color/crayon/red-orange.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#F89B78",
        "$type": "color"
      },
      "name": "rh-color-red-orange-30",
      "attributes": {
        "category": "color",
        "type": "red-orange",
        "item": "30",
        "hex": "f89b78",
        "rgb": {
          "r": 248,
          "g": 155,
          "b": 120,
          "a": 1
        },
        "hsl": {
          "h": 16.406249999999996,
          "s": 90.14084507042254,
          "l": 72.15686274509804,
          "a": 1
        },
        "hsv": {
          "h": 16.406249999999996,
          "s": 0.5161290322580645,
          "v": 0.9725490196078431,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red-orange",
        "30"
      ]
    }
  ],
  [
    "--rh-color-red-orange-40",
    {
      "$value": "#f4784a",
      "filePath": "tokens/color/crayon/red-orange.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#F4784A",
        "$type": "color"
      },
      "name": "rh-color-red-orange-40",
      "attributes": {
        "category": "color",
        "type": "red-orange",
        "item": "40",
        "hex": "f4784a",
        "rgb": {
          "r": 244,
          "g": 120,
          "b": 74,
          "a": 1
        },
        "hsl": {
          "h": 16.235294117647054,
          "s": 88.54166666666671,
          "l": 62.35294117647059,
          "a": 1
        },
        "hsv": {
          "h": 16.235294117647054,
          "s": 0.6967213114754098,
          "v": 0.9568627450980393,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red-orange",
        "40"
      ]
    }
  ],
  [
    "--rh-color-red-orange-50",
    {
      "$value": "#f0561d",
      "filePath": "tokens/color/crayon/red-orange.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#F0561D",
        "$type": "color"
      },
      "name": "rh-color-red-orange-50",
      "attributes": {
        "category": "color",
        "type": "red-orange",
        "item": "50",
        "hex": "f0561d",
        "rgb": {
          "r": 240,
          "g": 86,
          "b": 29,
          "a": 1
        },
        "hsl": {
          "h": 16.208530805687207,
          "s": 87.55186721991701,
          "l": 52.74509803921569,
          "a": 1
        },
        "hsv": {
          "h": 16.208530805687207,
          "s": 0.8791666666666667,
          "v": 0.9411764705882353,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "red-orange",
        "50"
      ]
    }
  ],
  [
    "--rh-color-red-orange-60",
    {
      "$value": "#b1380b",
      "filePath": "tokens/color/crayon/red-orange.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#B1380B",
        "$type": "color"
      },
      "name": "rh-color-red-orange-60",
      "attributes": {
        "category": "color",
        "type": "red-orange",
        "item": "60",
        "hex": "b1380b",
        "rgb": {
          "r": 177,
          "g": 56,
          "b": 11,
          "a": 1
        },
        "hsl": {
          "h": 16.265060240963855,
          "s": 88.29787234042554,
          "l": 36.86274509803921,
          "a": 1
        },
        "hsv": {
          "h": 16.265060240963855,
          "s": 0.9378531073446328,
          "v": 0.6941176470588235,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "red-orange",
        "60"
      ]
    }
  ],
  [
    "--rh-color-red-orange-70",
    {
      "$value": "#731f00",
      "filePath": "tokens/color/crayon/red-orange.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#731F00",
        "$type": "color"
      },
      "name": "rh-color-red-orange-70",
      "attributes": {
        "category": "color",
        "type": "red-orange",
        "item": "70",
        "hex": "731f00",
        "rgb": {
          "r": 115,
          "g": 31,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 16.17391304347826,
          "s": 100,
          "l": 22.54901960784314,
          "a": 1
        },
        "hsv": {
          "h": 16.17391304347826,
          "s": 1,
          "v": 0.45098039215686275,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "red-orange",
        "70"
      ]
    }
  ],
  [
    "--rh-color-red-orange-10-hsl",
    {
      "$value": "15.789473684210513 100% 92.54901960784314%",
      "$type": "color",
      "original": {
        "$value": "{color.red-orange.10}",
        "$type": "color"
      },
      "name": "rh-color-red-orange-10-hsl",
      "attributes": {
        "category": "color",
        "type": "red-orange",
        "item": "10-hsl",
        "hex": "ffe3d9",
        "rgb": {
          "r": 255,
          "g": 227,
          "b": 217,
          "a": 1
        },
        "hsl": {
          "h": 15.789473684210513,
          "s": 100,
          "l": 92.54901960784314,
          "a": 1
        },
        "hsv": {
          "h": 15.789473684210513,
          "s": 0.14901960784313728,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red-orange",
        "10-hsl"
      ]
    }
  ],
  [
    "--rh-color-red-orange-10-rgb",
    {
      "$value": "255 227 217",
      "$type": "color",
      "original": {
        "$value": "{color.red-orange.10}",
        "$type": "color"
      },
      "name": "rh-color-red-orange-10-rgb",
      "attributes": {
        "category": "color",
        "type": "red-orange",
        "item": "10-rgb",
        "hex": "ffe3d9",
        "rgb": {
          "r": 255,
          "g": 227,
          "b": 217,
          "a": 1
        },
        "hsl": {
          "h": 15.789473684210513,
          "s": 100,
          "l": 92.54901960784314,
          "a": 1
        },
        "hsv": {
          "h": 15.789473684210513,
          "s": 0.14901960784313728,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red-orange",
        "10-rgb"
      ]
    }
  ],
  [
    "--rh-color-red-orange-20-hsl",
    {
      "$value": "15.903614457831333 91.20879120879121% 82.15686274509804%",
      "$type": "color",
      "original": {
        "$value": "{color.red-orange.20}",
        "$type": "color"
      },
      "name": "rh-color-red-orange-20-hsl",
      "attributes": {
        "category": "color",
        "type": "red-orange",
        "item": "20-hsl",
        "hex": "fbbea8",
        "rgb": {
          "r": 251,
          "g": 190,
          "b": 168,
          "a": 1
        },
        "hsl": {
          "h": 15.903614457831333,
          "s": 91.20879120879121,
          "l": 82.15686274509804,
          "a": 1
        },
        "hsv": {
          "h": 15.903614457831333,
          "s": 0.33067729083665337,
          "v": 0.984313725490196,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red-orange",
        "20-hsl"
      ]
    }
  ],
  [
    "--rh-color-red-orange-20-rgb",
    {
      "$value": "251 190 168",
      "$type": "color",
      "original": {
        "$value": "{color.red-orange.20}",
        "$type": "color"
      },
      "name": "rh-color-red-orange-20-rgb",
      "attributes": {
        "category": "color",
        "type": "red-orange",
        "item": "20-rgb",
        "hex": "fbbea8",
        "rgb": {
          "r": 251,
          "g": 190,
          "b": 168,
          "a": 1
        },
        "hsl": {
          "h": 15.903614457831333,
          "s": 91.20879120879121,
          "l": 82.15686274509804,
          "a": 1
        },
        "hsv": {
          "h": 15.903614457831333,
          "s": 0.33067729083665337,
          "v": 0.984313725490196,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red-orange",
        "20-rgb"
      ]
    }
  ],
  [
    "--rh-color-red-orange-30-hsl",
    {
      "$value": "16.406249999999996 90.14084507042254% 72.15686274509804%",
      "$type": "color",
      "original": {
        "$value": "{color.red-orange.30}",
        "$type": "color"
      },
      "name": "rh-color-red-orange-30-hsl",
      "attributes": {
        "category": "color",
        "type": "red-orange",
        "item": "30-hsl",
        "hex": "f89b78",
        "rgb": {
          "r": 248,
          "g": 155,
          "b": 120,
          "a": 1
        },
        "hsl": {
          "h": 16.406249999999996,
          "s": 90.14084507042254,
          "l": 72.15686274509804,
          "a": 1
        },
        "hsv": {
          "h": 16.406249999999996,
          "s": 0.5161290322580645,
          "v": 0.9725490196078431,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red-orange",
        "30-hsl"
      ]
    }
  ],
  [
    "--rh-color-red-orange-30-rgb",
    {
      "$value": "248 155 120",
      "$type": "color",
      "original": {
        "$value": "{color.red-orange.30}",
        "$type": "color"
      },
      "name": "rh-color-red-orange-30-rgb",
      "attributes": {
        "category": "color",
        "type": "red-orange",
        "item": "30-rgb",
        "hex": "f89b78",
        "rgb": {
          "r": 248,
          "g": 155,
          "b": 120,
          "a": 1
        },
        "hsl": {
          "h": 16.406249999999996,
          "s": 90.14084507042254,
          "l": 72.15686274509804,
          "a": 1
        },
        "hsv": {
          "h": 16.406249999999996,
          "s": 0.5161290322580645,
          "v": 0.9725490196078431,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red-orange",
        "30-rgb"
      ]
    }
  ],
  [
    "--rh-color-red-orange-40-hsl",
    {
      "$value": "16.235294117647054 88.54166666666671% 62.35294117647059%",
      "$type": "color",
      "original": {
        "$value": "{color.red-orange.40}",
        "$type": "color"
      },
      "name": "rh-color-red-orange-40-hsl",
      "attributes": {
        "category": "color",
        "type": "red-orange",
        "item": "40-hsl",
        "hex": "f4784a",
        "rgb": {
          "r": 244,
          "g": 120,
          "b": 74,
          "a": 1
        },
        "hsl": {
          "h": 16.235294117647054,
          "s": 88.54166666666671,
          "l": 62.35294117647059,
          "a": 1
        },
        "hsv": {
          "h": 16.235294117647054,
          "s": 0.6967213114754098,
          "v": 0.9568627450980393,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red-orange",
        "40-hsl"
      ]
    }
  ],
  [
    "--rh-color-red-orange-40-rgb",
    {
      "$value": "244 120 74",
      "$type": "color",
      "original": {
        "$value": "{color.red-orange.40}",
        "$type": "color"
      },
      "name": "rh-color-red-orange-40-rgb",
      "attributes": {
        "category": "color",
        "type": "red-orange",
        "item": "40-rgb",
        "hex": "f4784a",
        "rgb": {
          "r": 244,
          "g": 120,
          "b": 74,
          "a": 1
        },
        "hsl": {
          "h": 16.235294117647054,
          "s": 88.54166666666671,
          "l": 62.35294117647059,
          "a": 1
        },
        "hsv": {
          "h": 16.235294117647054,
          "s": 0.6967213114754098,
          "v": 0.9568627450980393,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red-orange",
        "40-rgb"
      ]
    }
  ],
  [
    "--rh-color-red-orange-50-hsl",
    {
      "$value": "16.208530805687207 87.55186721991701% 52.74509803921569%",
      "$type": "color",
      "original": {
        "$value": "{color.red-orange.50}",
        "$type": "color"
      },
      "name": "rh-color-red-orange-50-hsl",
      "attributes": {
        "category": "color",
        "type": "red-orange",
        "item": "50-hsl",
        "hex": "f0561d",
        "rgb": {
          "r": 240,
          "g": 86,
          "b": 29,
          "a": 1
        },
        "hsl": {
          "h": 16.208530805687207,
          "s": 87.55186721991701,
          "l": 52.74509803921569,
          "a": 1
        },
        "hsv": {
          "h": 16.208530805687207,
          "s": 0.8791666666666667,
          "v": 0.9411764705882353,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "red-orange",
        "50-hsl"
      ]
    }
  ],
  [
    "--rh-color-red-orange-50-rgb",
    {
      "$value": "240 86 29",
      "$type": "color",
      "original": {
        "$value": "{color.red-orange.50}",
        "$type": "color"
      },
      "name": "rh-color-red-orange-50-rgb",
      "attributes": {
        "category": "color",
        "type": "red-orange",
        "item": "50-rgb",
        "hex": "f0561d",
        "rgb": {
          "r": 240,
          "g": 86,
          "b": 29,
          "a": 1
        },
        "hsl": {
          "h": 16.208530805687207,
          "s": 87.55186721991701,
          "l": 52.74509803921569,
          "a": 1
        },
        "hsv": {
          "h": 16.208530805687207,
          "s": 0.8791666666666667,
          "v": 0.9411764705882353,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "red-orange",
        "50-rgb"
      ]
    }
  ],
  [
    "--rh-color-red-orange-60-hsl",
    {
      "$value": "16.265060240963855 88.29787234042554% 36.86274509803921%",
      "$type": "color",
      "original": {
        "$value": "{color.red-orange.60}",
        "$type": "color"
      },
      "name": "rh-color-red-orange-60-hsl",
      "attributes": {
        "category": "color",
        "type": "red-orange",
        "item": "60-hsl",
        "hex": "b1380b",
        "rgb": {
          "r": 177,
          "g": 56,
          "b": 11,
          "a": 1
        },
        "hsl": {
          "h": 16.265060240963855,
          "s": 88.29787234042554,
          "l": 36.86274509803921,
          "a": 1
        },
        "hsv": {
          "h": 16.265060240963855,
          "s": 0.9378531073446328,
          "v": 0.6941176470588235,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "red-orange",
        "60-hsl"
      ]
    }
  ],
  [
    "--rh-color-red-orange-60-rgb",
    {
      "$value": "177 56 11",
      "$type": "color",
      "original": {
        "$value": "{color.red-orange.60}",
        "$type": "color"
      },
      "name": "rh-color-red-orange-60-rgb",
      "attributes": {
        "category": "color",
        "type": "red-orange",
        "item": "60-rgb",
        "hex": "b1380b",
        "rgb": {
          "r": 177,
          "g": 56,
          "b": 11,
          "a": 1
        },
        "hsl": {
          "h": 16.265060240963855,
          "s": 88.29787234042554,
          "l": 36.86274509803921,
          "a": 1
        },
        "hsv": {
          "h": 16.265060240963855,
          "s": 0.9378531073446328,
          "v": 0.6941176470588235,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "red-orange",
        "60-rgb"
      ]
    }
  ],
  [
    "--rh-color-red-orange-70-hsl",
    {
      "$value": "16.17391304347826 100% 22.54901960784314%",
      "$type": "color",
      "original": {
        "$value": "{color.red-orange.70}",
        "$type": "color"
      },
      "name": "rh-color-red-orange-70-hsl",
      "attributes": {
        "category": "color",
        "type": "red-orange",
        "item": "70-hsl",
        "hex": "731f00",
        "rgb": {
          "r": 115,
          "g": 31,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 16.17391304347826,
          "s": 100,
          "l": 22.54901960784314,
          "a": 1
        },
        "hsv": {
          "h": 16.17391304347826,
          "s": 1,
          "v": 0.45098039215686275,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "red-orange",
        "70-hsl"
      ]
    }
  ],
  [
    "--rh-color-red-orange-70-rgb",
    {
      "$value": "115 31 0",
      "$type": "color",
      "original": {
        "$value": "{color.red-orange.70}",
        "$type": "color"
      },
      "name": "rh-color-red-orange-70-rgb",
      "attributes": {
        "category": "color",
        "type": "red-orange",
        "item": "70-rgb",
        "hex": "731f00",
        "rgb": {
          "r": 115,
          "g": 31,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 16.17391304347826,
          "s": 100,
          "l": 22.54901960784314,
          "a": 1
        },
        "hsv": {
          "h": 16.17391304347826,
          "s": 1,
          "v": 0.45098039215686275,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "red-orange",
        "70-rgb"
      ]
    }
  ],
  [
    "--rh-color-red-10",
    {
      "$value": "#fce3e3",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#FCE3E3",
        "$type": "color"
      },
      "name": "rh-color-red-10",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "10",
        "hex": "fce3e3",
        "rgb": {
          "r": 252,
          "g": 227,
          "b": 227,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 80.64516129032265,
          "l": 93.92156862745098,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0.0992063492063493,
          "v": 0.9882352941176471,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red",
        "10"
      ]
    }
  ],
  [
    "--rh-color-red-20",
    {
      "$value": "#fbc5c5",
      "$description": "Lightest brand red",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#FBC5C5",
        "$description": "Lightest brand red",
        "$type": "color"
      },
      "name": "rh-color-red-20",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "20",
        "hex": "fbc5c5",
        "rgb": {
          "r": 251,
          "g": 197,
          "b": 197,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 87.09677419354838,
          "l": 87.84313725490196,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0.21513944223107562,
          "v": 0.984313725490196,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red",
        "20"
      ]
    }
  ],
  [
    "--rh-color-red-30",
    {
      "$value": "#f9a8a8",
      "$description": "Lighter brand red",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#F9A8A8",
        "$description": "Lighter brand red",
        "$type": "color"
      },
      "name": "rh-color-red-30",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "30",
        "hex": "f9a8a8",
        "rgb": {
          "r": 249,
          "g": 168,
          "b": 168,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 87.0967741935484,
          "l": 81.76470588235294,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0.3253012048192771,
          "v": 0.9764705882352941,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red",
        "30"
      ]
    }
  ],
  [
    "--rh-color-red-40",
    {
      "$value": "#f56e6e",
      "$description": "Light brand red",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#F56E6E",
        "$description": "Light brand red",
        "$type": "color"
      },
      "name": "rh-color-red-40",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "40",
        "hex": "f56e6e",
        "rgb": {
          "r": 245,
          "g": 110,
          "b": 110,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 87.09677419354841,
          "l": 69.6078431372549,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0.5510204081632653,
          "v": 0.9607843137254902,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red",
        "40"
      ]
    }
  ],
  [
    "--rh-color-red-50",
    {
      "$value": "#ee0000",
      "$description": "Brand red (light and dark theme)",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#EE0000",
        "$description": "Brand red (light and dark theme)",
        "$type": "color"
      },
      "name": "rh-color-red-50",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "50",
        "hex": "ee0000",
        "rgb": {
          "r": 238,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 100,
          "l": 46.666666666666664,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 1,
          "v": 0.9333333333333333,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "red",
        "50"
      ]
    }
  ],
  [
    "--rh-color-red-60",
    {
      "$value": "#a60000",
      "$description": "Dark brand red",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#A60000",
        "$description": "Dark brand red",
        "$type": "color"
      },
      "name": "rh-color-red-60",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "60",
        "hex": "a60000",
        "rgb": {
          "r": 166,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 100,
          "l": 32.549019607843135,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 1,
          "v": 0.6509803921568628,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "red",
        "60"
      ]
    }
  ],
  [
    "--rh-color-red-70",
    {
      "$value": "#5f0000",
      "$description": "Darker brand red",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#5F0000",
        "$description": "Darker brand red",
        "$type": "color"
      },
      "name": "rh-color-red-70",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "70",
        "hex": "5f0000",
        "rgb": {
          "r": 95,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 100,
          "l": 18.627450980392158,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 1,
          "v": 0.37254901960784315,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "red",
        "70"
      ]
    }
  ],
  [
    "--rh-color-red-10-hsl",
    {
      "$value": "0 80.64516129032265% 93.92156862745098%",
      "$type": "color",
      "original": {
        "$value": "{color.red.10}",
        "$type": "color"
      },
      "name": "rh-color-red-10-hsl",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "10-hsl",
        "hex": "fce3e3",
        "rgb": {
          "r": 252,
          "g": 227,
          "b": 227,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 80.64516129032265,
          "l": 93.92156862745098,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0.0992063492063493,
          "v": 0.9882352941176471,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red",
        "10-hsl"
      ]
    }
  ],
  [
    "--rh-color-red-10-rgb",
    {
      "$value": "252 227 227",
      "$type": "color",
      "original": {
        "$value": "{color.red.10}",
        "$type": "color"
      },
      "name": "rh-color-red-10-rgb",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "10-rgb",
        "hex": "fce3e3",
        "rgb": {
          "r": 252,
          "g": 227,
          "b": 227,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 80.64516129032265,
          "l": 93.92156862745098,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0.0992063492063493,
          "v": 0.9882352941176471,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red",
        "10-rgb"
      ]
    }
  ],
  [
    "--rh-color-red-20-hsl",
    {
      "$value": "0 87.09677419354838% 87.84313725490196%",
      "$type": "color",
      "original": {
        "$value": "{color.red.20}",
        "$type": "color"
      },
      "name": "rh-color-red-20-hsl",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "20-hsl",
        "hex": "fbc5c5",
        "rgb": {
          "r": 251,
          "g": 197,
          "b": 197,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 87.09677419354838,
          "l": 87.84313725490196,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0.21513944223107562,
          "v": 0.984313725490196,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red",
        "20-hsl"
      ]
    }
  ],
  [
    "--rh-color-red-20-rgb",
    {
      "$value": "251 197 197",
      "$type": "color",
      "original": {
        "$value": "{color.red.20}",
        "$type": "color"
      },
      "name": "rh-color-red-20-rgb",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "20-rgb",
        "hex": "fbc5c5",
        "rgb": {
          "r": 251,
          "g": 197,
          "b": 197,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 87.09677419354838,
          "l": 87.84313725490196,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0.21513944223107562,
          "v": 0.984313725490196,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red",
        "20-rgb"
      ]
    }
  ],
  [
    "--rh-color-red-30-hsl",
    {
      "$value": "0 87.0967741935484% 81.76470588235294%",
      "$type": "color",
      "original": {
        "$value": "{color.red.30}",
        "$type": "color"
      },
      "name": "rh-color-red-30-hsl",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "30-hsl",
        "hex": "f9a8a8",
        "rgb": {
          "r": 249,
          "g": 168,
          "b": 168,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 87.0967741935484,
          "l": 81.76470588235294,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0.3253012048192771,
          "v": 0.9764705882352941,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red",
        "30-hsl"
      ]
    }
  ],
  [
    "--rh-color-red-30-rgb",
    {
      "$value": "249 168 168",
      "$type": "color",
      "original": {
        "$value": "{color.red.30}",
        "$type": "color"
      },
      "name": "rh-color-red-30-rgb",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "30-rgb",
        "hex": "f9a8a8",
        "rgb": {
          "r": 249,
          "g": 168,
          "b": 168,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 87.0967741935484,
          "l": 81.76470588235294,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0.3253012048192771,
          "v": 0.9764705882352941,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red",
        "30-rgb"
      ]
    }
  ],
  [
    "--rh-color-red-40-hsl",
    {
      "$value": "0 87.09677419354841% 69.6078431372549%",
      "$type": "color",
      "original": {
        "$value": "{color.red.40}",
        "$type": "color"
      },
      "name": "rh-color-red-40-hsl",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "40-hsl",
        "hex": "f56e6e",
        "rgb": {
          "r": 245,
          "g": 110,
          "b": 110,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 87.09677419354841,
          "l": 69.6078431372549,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0.5510204081632653,
          "v": 0.9607843137254902,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red",
        "40-hsl"
      ]
    }
  ],
  [
    "--rh-color-red-40-rgb",
    {
      "$value": "245 110 110",
      "$type": "color",
      "original": {
        "$value": "{color.red.40}",
        "$type": "color"
      },
      "name": "rh-color-red-40-rgb",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "40-rgb",
        "hex": "f56e6e",
        "rgb": {
          "r": 245,
          "g": 110,
          "b": 110,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 87.09677419354841,
          "l": 69.6078431372549,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0.5510204081632653,
          "v": 0.9607843137254902,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red",
        "40-rgb"
      ]
    }
  ],
  [
    "--rh-color-red-50-hsl",
    {
      "$value": "0 100% 46.666666666666664%",
      "$type": "color",
      "original": {
        "$value": "{color.red.50}",
        "$type": "color"
      },
      "name": "rh-color-red-50-hsl",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "50-hsl",
        "hex": "ee0000",
        "rgb": {
          "r": 238,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 100,
          "l": 46.666666666666664,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 1,
          "v": 0.9333333333333333,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "red",
        "50-hsl"
      ]
    }
  ],
  [
    "--rh-color-red-50-rgb",
    {
      "$value": "238 0 0",
      "$type": "color",
      "original": {
        "$value": "{color.red.50}",
        "$type": "color"
      },
      "name": "rh-color-red-50-rgb",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "50-rgb",
        "hex": "ee0000",
        "rgb": {
          "r": 238,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 100,
          "l": 46.666666666666664,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 1,
          "v": 0.9333333333333333,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "red",
        "50-rgb"
      ]
    }
  ],
  [
    "--rh-color-red-60-hsl",
    {
      "$value": "0 100% 32.549019607843135%",
      "$type": "color",
      "original": {
        "$value": "{color.red.60}",
        "$type": "color"
      },
      "name": "rh-color-red-60-hsl",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "60-hsl",
        "hex": "a60000",
        "rgb": {
          "r": 166,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 100,
          "l": 32.549019607843135,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 1,
          "v": 0.6509803921568628,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "red",
        "60-hsl"
      ]
    }
  ],
  [
    "--rh-color-red-60-rgb",
    {
      "$value": "166 0 0",
      "$type": "color",
      "original": {
        "$value": "{color.red.60}",
        "$type": "color"
      },
      "name": "rh-color-red-60-rgb",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "60-rgb",
        "hex": "a60000",
        "rgb": {
          "r": 166,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 100,
          "l": 32.549019607843135,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 1,
          "v": 0.6509803921568628,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "red",
        "60-rgb"
      ]
    }
  ],
  [
    "--rh-color-red-70-hsl",
    {
      "$value": "0 100% 18.627450980392158%",
      "$type": "color",
      "original": {
        "$value": "{color.red.70}",
        "$type": "color"
      },
      "name": "rh-color-red-70-hsl",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "70-hsl",
        "hex": "5f0000",
        "rgb": {
          "r": 95,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 100,
          "l": 18.627450980392158,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 1,
          "v": 0.37254901960784315,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "red",
        "70-hsl"
      ]
    }
  ],
  [
    "--rh-color-red-70-rgb",
    {
      "$value": "95 0 0",
      "$type": "color",
      "original": {
        "$value": "{color.red.70}",
        "$type": "color"
      },
      "name": "rh-color-red-70-rgb",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "70-rgb",
        "hex": "5f0000",
        "rgb": {
          "r": 95,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 100,
          "l": 18.627450980392158,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 1,
          "v": 0.37254901960784315,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "red",
        "70-rgb"
      ]
    }
  ],
  [
    "--rh-color-teal-10",
    {
      "$value": "#daf2f2",
      "$description": "Alert - Default background",
      "filePath": "tokens/color/crayon/teal.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#DAF2F2",
        "$description": "Alert - Default background",
        "$type": "color"
      },
      "name": "rh-color-teal-10",
      "attributes": {
        "category": "color",
        "type": "teal",
        "item": "10",
        "hex": "daf2f2",
        "rgb": {
          "r": 218,
          "g": 242,
          "b": 242,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 47.99999999999998,
          "l": 90.19607843137254,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 0.09917355371900827,
          "v": 0.9490196078431372,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "teal",
        "10"
      ]
    }
  ],
  [
    "--rh-color-teal-20",
    {
      "$value": "#b9e5e5",
      "filePath": "tokens/color/crayon/teal.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#B9E5E5",
        "$type": "color"
      },
      "name": "rh-color-teal-20",
      "attributes": {
        "category": "color",
        "type": "teal",
        "item": "20",
        "hex": "b9e5e5",
        "rgb": {
          "r": 185,
          "g": 229,
          "b": 229,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 45.833333333333336,
          "l": 81.17647058823529,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 0.19213973799126643,
          "v": 0.8980392156862745,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "teal",
        "20"
      ]
    }
  ],
  [
    "--rh-color-teal-30",
    {
      "$value": "#9ad8d8",
      "$description": "Label (Cyan) border color",
      "filePath": "tokens/color/crayon/teal.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#9AD8D8",
        "$description": "Label (Cyan) border color",
        "$type": "color"
      },
      "name": "rh-color-teal-30",
      "attributes": {
        "category": "color",
        "type": "teal",
        "item": "30",
        "hex": "9ad8d8",
        "rgb": {
          "r": 154,
          "g": 216,
          "b": 216,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 44.28571428571429,
          "l": 72.54901960784314,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 0.2870370370370371,
          "v": 0.8470588235294118,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "teal",
        "30"
      ]
    }
  ],
  [
    "--rh-color-teal-40",
    {
      "$value": "#63bdbd",
      "filePath": "tokens/color/crayon/teal.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#63BDBD",
        "$type": "color"
      },
      "name": "rh-color-teal-40",
      "attributes": {
        "category": "color",
        "type": "teal",
        "item": "40",
        "hex": "63bdbd",
        "rgb": {
          "r": 99,
          "g": 189,
          "b": 189,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 40.54054054054054,
          "l": 56.470588235294116,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 0.4761904761904762,
          "v": 0.7411764705882353,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "teal",
        "40"
      ]
    }
  ],
  [
    "--rh-color-teal-50",
    {
      "$value": "#37a3a3",
      "$description": "Alert - Default accent",
      "filePath": "tokens/color/crayon/teal.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#37A3A3",
        "$description": "Alert - Default accent",
        "$type": "color"
      },
      "name": "rh-color-teal-50",
      "attributes": {
        "category": "color",
        "type": "teal",
        "item": "50",
        "hex": "37a3a3",
        "rgb": {
          "r": 55,
          "g": 163,
          "b": 163,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 49.54128440366972,
          "l": 42.745098039215684,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 0.6625766871165644,
          "v": 0.6392156862745098,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "teal",
        "50"
      ]
    }
  ],
  [
    "--rh-color-teal-60",
    {
      "$value": "#147878",
      "filePath": "tokens/color/crayon/teal.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#147878",
        "$type": "color"
      },
      "name": "rh-color-teal-60",
      "attributes": {
        "category": "color",
        "type": "teal",
        "item": "60",
        "hex": "147878",
        "rgb": {
          "r": 20,
          "g": 120,
          "b": 120,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 71.42857142857142,
          "l": 27.450980392156865,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 0.8333333333333334,
          "v": 0.47058823529411764,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "teal",
        "60"
      ]
    }
  ],
  [
    "--rh-color-teal-70",
    {
      "$value": "#004d4d",
      "$description": "Alert - Default title text",
      "filePath": "tokens/color/crayon/teal.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#004D4D",
        "$description": "Alert - Default title text",
        "$type": "color"
      },
      "name": "rh-color-teal-70",
      "attributes": {
        "category": "color",
        "type": "teal",
        "item": "70",
        "hex": "004d4d",
        "rgb": {
          "r": 0,
          "g": 77,
          "b": 77,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 100,
          "l": 15.098039215686274,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 1,
          "v": 0.30196078431372547,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "teal",
        "70"
      ]
    }
  ],
  [
    "--rh-color-teal-10-hsl",
    {
      "$value": "180 47.99999999999998% 90.19607843137254%",
      "$type": "color",
      "original": {
        "$value": "{color.teal.10}",
        "$type": "color"
      },
      "name": "rh-color-teal-10-hsl",
      "attributes": {
        "category": "color",
        "type": "teal",
        "item": "10-hsl",
        "hex": "daf2f2",
        "rgb": {
          "r": 218,
          "g": 242,
          "b": 242,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 47.99999999999998,
          "l": 90.19607843137254,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 0.09917355371900827,
          "v": 0.9490196078431372,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "teal",
        "10-hsl"
      ]
    }
  ],
  [
    "--rh-color-teal-10-rgb",
    {
      "$value": "218 242 242",
      "$type": "color",
      "original": {
        "$value": "{color.teal.10}",
        "$type": "color"
      },
      "name": "rh-color-teal-10-rgb",
      "attributes": {
        "category": "color",
        "type": "teal",
        "item": "10-rgb",
        "hex": "daf2f2",
        "rgb": {
          "r": 218,
          "g": 242,
          "b": 242,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 47.99999999999998,
          "l": 90.19607843137254,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 0.09917355371900827,
          "v": 0.9490196078431372,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "teal",
        "10-rgb"
      ]
    }
  ],
  [
    "--rh-color-teal-20-hsl",
    {
      "$value": "180 45.833333333333336% 81.17647058823529%",
      "$type": "color",
      "original": {
        "$value": "{color.teal.20}",
        "$type": "color"
      },
      "name": "rh-color-teal-20-hsl",
      "attributes": {
        "category": "color",
        "type": "teal",
        "item": "20-hsl",
        "hex": "b9e5e5",
        "rgb": {
          "r": 185,
          "g": 229,
          "b": 229,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 45.833333333333336,
          "l": 81.17647058823529,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 0.19213973799126643,
          "v": 0.8980392156862745,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "teal",
        "20-hsl"
      ]
    }
  ],
  [
    "--rh-color-teal-20-rgb",
    {
      "$value": "185 229 229",
      "$type": "color",
      "original": {
        "$value": "{color.teal.20}",
        "$type": "color"
      },
      "name": "rh-color-teal-20-rgb",
      "attributes": {
        "category": "color",
        "type": "teal",
        "item": "20-rgb",
        "hex": "b9e5e5",
        "rgb": {
          "r": 185,
          "g": 229,
          "b": 229,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 45.833333333333336,
          "l": 81.17647058823529,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 0.19213973799126643,
          "v": 0.8980392156862745,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "teal",
        "20-rgb"
      ]
    }
  ],
  [
    "--rh-color-teal-30-hsl",
    {
      "$value": "180 44.28571428571429% 72.54901960784314%",
      "$type": "color",
      "original": {
        "$value": "{color.teal.30}",
        "$type": "color"
      },
      "name": "rh-color-teal-30-hsl",
      "attributes": {
        "category": "color",
        "type": "teal",
        "item": "30-hsl",
        "hex": "9ad8d8",
        "rgb": {
          "r": 154,
          "g": 216,
          "b": 216,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 44.28571428571429,
          "l": 72.54901960784314,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 0.2870370370370371,
          "v": 0.8470588235294118,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "teal",
        "30-hsl"
      ]
    }
  ],
  [
    "--rh-color-teal-30-rgb",
    {
      "$value": "154 216 216",
      "$type": "color",
      "original": {
        "$value": "{color.teal.30}",
        "$type": "color"
      },
      "name": "rh-color-teal-30-rgb",
      "attributes": {
        "category": "color",
        "type": "teal",
        "item": "30-rgb",
        "hex": "9ad8d8",
        "rgb": {
          "r": 154,
          "g": 216,
          "b": 216,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 44.28571428571429,
          "l": 72.54901960784314,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 0.2870370370370371,
          "v": 0.8470588235294118,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "teal",
        "30-rgb"
      ]
    }
  ],
  [
    "--rh-color-teal-40-hsl",
    {
      "$value": "180 40.54054054054054% 56.470588235294116%",
      "$type": "color",
      "original": {
        "$value": "{color.teal.40}",
        "$type": "color"
      },
      "name": "rh-color-teal-40-hsl",
      "attributes": {
        "category": "color",
        "type": "teal",
        "item": "40-hsl",
        "hex": "63bdbd",
        "rgb": {
          "r": 99,
          "g": 189,
          "b": 189,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 40.54054054054054,
          "l": 56.470588235294116,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 0.4761904761904762,
          "v": 0.7411764705882353,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "teal",
        "40-hsl"
      ]
    }
  ],
  [
    "--rh-color-teal-40-rgb",
    {
      "$value": "99 189 189",
      "$type": "color",
      "original": {
        "$value": "{color.teal.40}",
        "$type": "color"
      },
      "name": "rh-color-teal-40-rgb",
      "attributes": {
        "category": "color",
        "type": "teal",
        "item": "40-rgb",
        "hex": "63bdbd",
        "rgb": {
          "r": 99,
          "g": 189,
          "b": 189,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 40.54054054054054,
          "l": 56.470588235294116,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 0.4761904761904762,
          "v": 0.7411764705882353,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "teal",
        "40-rgb"
      ]
    }
  ],
  [
    "--rh-color-teal-50-hsl",
    {
      "$value": "180 49.54128440366972% 42.745098039215684%",
      "$type": "color",
      "original": {
        "$value": "{color.teal.50}",
        "$type": "color"
      },
      "name": "rh-color-teal-50-hsl",
      "attributes": {
        "category": "color",
        "type": "teal",
        "item": "50-hsl",
        "hex": "37a3a3",
        "rgb": {
          "r": 55,
          "g": 163,
          "b": 163,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 49.54128440366972,
          "l": 42.745098039215684,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 0.6625766871165644,
          "v": 0.6392156862745098,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "teal",
        "50-hsl"
      ]
    }
  ],
  [
    "--rh-color-teal-50-rgb",
    {
      "$value": "55 163 163",
      "$type": "color",
      "original": {
        "$value": "{color.teal.50}",
        "$type": "color"
      },
      "name": "rh-color-teal-50-rgb",
      "attributes": {
        "category": "color",
        "type": "teal",
        "item": "50-rgb",
        "hex": "37a3a3",
        "rgb": {
          "r": 55,
          "g": 163,
          "b": 163,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 49.54128440366972,
          "l": 42.745098039215684,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 0.6625766871165644,
          "v": 0.6392156862745098,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "teal",
        "50-rgb"
      ]
    }
  ],
  [
    "--rh-color-teal-60-hsl",
    {
      "$value": "180 71.42857142857142% 27.450980392156865%",
      "$type": "color",
      "original": {
        "$value": "{color.teal.60}",
        "$type": "color"
      },
      "name": "rh-color-teal-60-hsl",
      "attributes": {
        "category": "color",
        "type": "teal",
        "item": "60-hsl",
        "hex": "147878",
        "rgb": {
          "r": 20,
          "g": 120,
          "b": 120,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 71.42857142857142,
          "l": 27.450980392156865,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 0.8333333333333334,
          "v": 0.47058823529411764,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "teal",
        "60-hsl"
      ]
    }
  ],
  [
    "--rh-color-teal-60-rgb",
    {
      "$value": "20 120 120",
      "$type": "color",
      "original": {
        "$value": "{color.teal.60}",
        "$type": "color"
      },
      "name": "rh-color-teal-60-rgb",
      "attributes": {
        "category": "color",
        "type": "teal",
        "item": "60-rgb",
        "hex": "147878",
        "rgb": {
          "r": 20,
          "g": 120,
          "b": 120,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 71.42857142857142,
          "l": 27.450980392156865,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 0.8333333333333334,
          "v": 0.47058823529411764,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "teal",
        "60-rgb"
      ]
    }
  ],
  [
    "--rh-color-teal-70-hsl",
    {
      "$value": "180 100% 15.098039215686274%",
      "$type": "color",
      "original": {
        "$value": "{color.teal.70}",
        "$type": "color"
      },
      "name": "rh-color-teal-70-hsl",
      "attributes": {
        "category": "color",
        "type": "teal",
        "item": "70-hsl",
        "hex": "004d4d",
        "rgb": {
          "r": 0,
          "g": 77,
          "b": 77,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 100,
          "l": 15.098039215686274,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 1,
          "v": 0.30196078431372547,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "teal",
        "70-hsl"
      ]
    }
  ],
  [
    "--rh-color-teal-70-rgb",
    {
      "$value": "0 77 77",
      "$type": "color",
      "original": {
        "$value": "{color.teal.70}",
        "$type": "color"
      },
      "name": "rh-color-teal-70-rgb",
      "attributes": {
        "category": "color",
        "type": "teal",
        "item": "70-rgb",
        "hex": "004d4d",
        "rgb": {
          "r": 0,
          "g": 77,
          "b": 77,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 100,
          "l": 15.098039215686274,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 1,
          "v": 0.30196078431372547,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "teal",
        "70-rgb"
      ]
    }
  ],
  [
    "--rh-color-yellow-10",
    {
      "$value": "#fff4cc",
      "$description": "Alert - Warning background",
      "filePath": "tokens/color/crayon/yellow.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#FFF4CC",
        "$description": "Alert - Warning background",
        "$type": "color"
      },
      "name": "rh-color-yellow-10",
      "attributes": {
        "category": "color",
        "type": "yellow",
        "item": "10",
        "hex": "fff4cc",
        "rgb": {
          "r": 255,
          "g": 244,
          "b": 204,
          "a": 1
        },
        "hsl": {
          "h": 47.058823529411775,
          "s": 100,
          "l": 90,
          "a": 1
        },
        "hsv": {
          "h": 47.058823529411775,
          "s": 0.19999999999999996,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "yellow",
        "10"
      ]
    }
  ],
  [
    "--rh-color-yellow-20",
    {
      "$value": "#ffe072",
      "filePath": "tokens/color/crayon/yellow.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#FFE072",
        "$type": "color"
      },
      "name": "rh-color-yellow-20",
      "attributes": {
        "category": "color",
        "type": "yellow",
        "item": "20",
        "hex": "ffe072",
        "rgb": {
          "r": 255,
          "g": 224,
          "b": 114,
          "a": 1
        },
        "hsl": {
          "h": 46.80851063829787,
          "s": 100,
          "l": 72.35294117647058,
          "a": 1
        },
        "hsv": {
          "h": 46.80851063829787,
          "s": 0.5529411764705883,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "yellow",
        "20"
      ]
    }
  ],
  [
    "--rh-color-yellow-30",
    {
      "$value": "#ffcc17",
      "filePath": "tokens/color/crayon/yellow.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#FFCC17",
        "$type": "color"
      },
      "name": "rh-color-yellow-30",
      "attributes": {
        "category": "color",
        "type": "yellow",
        "item": "30",
        "hex": "ffcc17",
        "rgb": {
          "r": 255,
          "g": 204,
          "b": 23,
          "a": 1
        },
        "hsl": {
          "h": 46.81034482758621,
          "s": 100,
          "l": 54.509803921568626,
          "a": 1
        },
        "hsv": {
          "h": 46.81034482758621,
          "s": 0.9098039215686274,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "yellow",
        "30"
      ]
    }
  ],
  [
    "--rh-color-yellow-40",
    {
      "$value": "#dca614",
      "$description": "Alert - Warning accent",
      "filePath": "tokens/color/crayon/yellow.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#DCA614",
        "$description": "Alert - Warning accent",
        "$type": "color"
      },
      "name": "rh-color-yellow-40",
      "attributes": {
        "category": "color",
        "type": "yellow",
        "item": "40",
        "hex": "dca614",
        "rgb": {
          "r": 220,
          "g": 166,
          "b": 20,
          "a": 1
        },
        "hsl": {
          "h": 43.79999999999999,
          "s": 83.33333333333334,
          "l": 47.05882352941176,
          "a": 1
        },
        "hsv": {
          "h": 43.79999999999999,
          "s": 0.9090909090909092,
          "v": 0.8627450980392157,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "yellow",
        "40"
      ]
    }
  ],
  [
    "--rh-color-yellow-50",
    {
      "$value": "#b98412",
      "filePath": "tokens/color/crayon/yellow.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#B98412",
        "$type": "color"
      },
      "name": "rh-color-yellow-50",
      "attributes": {
        "category": "color",
        "type": "yellow",
        "item": "50",
        "hex": "b98412",
        "rgb": {
          "r": 185,
          "g": 132,
          "b": 18,
          "a": 1
        },
        "hsl": {
          "h": 40.95808383233534,
          "s": 82.26600985221675,
          "l": 39.80392156862745,
          "a": 1
        },
        "hsv": {
          "h": 40.95808383233534,
          "s": 0.9027027027027027,
          "v": 0.7254901960784313,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "yellow",
        "50"
      ]
    }
  ],
  [
    "--rh-color-yellow-60",
    {
      "$value": "#96640f",
      "filePath": "tokens/color/crayon/yellow.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#96640F",
        "$type": "color"
      },
      "name": "rh-color-yellow-60",
      "attributes": {
        "category": "color",
        "type": "yellow",
        "item": "60",
        "hex": "96640f",
        "rgb": {
          "r": 150,
          "g": 100,
          "b": 15,
          "a": 1
        },
        "hsl": {
          "h": 37.77777777777777,
          "s": 81.81818181818181,
          "l": 32.35294117647059,
          "a": 1
        },
        "hsv": {
          "h": 37.77777777777777,
          "s": 0.9,
          "v": 0.5882352941176471,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "yellow",
        "60"
      ]
    }
  ],
  [
    "--rh-color-yellow-70",
    {
      "$value": "#73480b",
      "$description": "Alert - Warning title text",
      "filePath": "tokens/color/crayon/yellow.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "#73480B",
        "$description": "Alert - Warning title text",
        "$type": "color"
      },
      "name": "rh-color-yellow-70",
      "attributes": {
        "category": "color",
        "type": "yellow",
        "item": "70",
        "hex": "73480b",
        "rgb": {
          "r": 115,
          "g": 72,
          "b": 11,
          "a": 1
        },
        "hsl": {
          "h": 35.192307692307686,
          "s": 82.53968253968253,
          "l": 24.705882352941178,
          "a": 1
        },
        "hsv": {
          "h": 35.192307692307686,
          "s": 0.9043478260869565,
          "v": 0.45098039215686275,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "yellow",
        "70"
      ]
    }
  ],
  [
    "--rh-color-yellow-10-hsl",
    {
      "$value": "47.058823529411775 100% 90%",
      "$type": "color",
      "original": {
        "$value": "{color.yellow.10}",
        "$type": "color"
      },
      "name": "rh-color-yellow-10-hsl",
      "attributes": {
        "category": "color",
        "type": "yellow",
        "item": "10-hsl",
        "hex": "fff4cc",
        "rgb": {
          "r": 255,
          "g": 244,
          "b": 204,
          "a": 1
        },
        "hsl": {
          "h": 47.058823529411775,
          "s": 100,
          "l": 90,
          "a": 1
        },
        "hsv": {
          "h": 47.058823529411775,
          "s": 0.19999999999999996,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "yellow",
        "10-hsl"
      ]
    }
  ],
  [
    "--rh-color-yellow-10-rgb",
    {
      "$value": "255 244 204",
      "$type": "color",
      "original": {
        "$value": "{color.yellow.10}",
        "$type": "color"
      },
      "name": "rh-color-yellow-10-rgb",
      "attributes": {
        "category": "color",
        "type": "yellow",
        "item": "10-rgb",
        "hex": "fff4cc",
        "rgb": {
          "r": 255,
          "g": 244,
          "b": 204,
          "a": 1
        },
        "hsl": {
          "h": 47.058823529411775,
          "s": 100,
          "l": 90,
          "a": 1
        },
        "hsv": {
          "h": 47.058823529411775,
          "s": 0.19999999999999996,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "yellow",
        "10-rgb"
      ]
    }
  ],
  [
    "--rh-color-yellow-20-hsl",
    {
      "$value": "46.80851063829787 100% 72.35294117647058%",
      "$type": "color",
      "original": {
        "$value": "{color.yellow.20}",
        "$type": "color"
      },
      "name": "rh-color-yellow-20-hsl",
      "attributes": {
        "category": "color",
        "type": "yellow",
        "item": "20-hsl",
        "hex": "ffe072",
        "rgb": {
          "r": 255,
          "g": 224,
          "b": 114,
          "a": 1
        },
        "hsl": {
          "h": 46.80851063829787,
          "s": 100,
          "l": 72.35294117647058,
          "a": 1
        },
        "hsv": {
          "h": 46.80851063829787,
          "s": 0.5529411764705883,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "yellow",
        "20-hsl"
      ]
    }
  ],
  [
    "--rh-color-yellow-20-rgb",
    {
      "$value": "255 224 114",
      "$type": "color",
      "original": {
        "$value": "{color.yellow.20}",
        "$type": "color"
      },
      "name": "rh-color-yellow-20-rgb",
      "attributes": {
        "category": "color",
        "type": "yellow",
        "item": "20-rgb",
        "hex": "ffe072",
        "rgb": {
          "r": 255,
          "g": 224,
          "b": 114,
          "a": 1
        },
        "hsl": {
          "h": 46.80851063829787,
          "s": 100,
          "l": 72.35294117647058,
          "a": 1
        },
        "hsv": {
          "h": 46.80851063829787,
          "s": 0.5529411764705883,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "yellow",
        "20-rgb"
      ]
    }
  ],
  [
    "--rh-color-yellow-30-hsl",
    {
      "$value": "46.81034482758621 100% 54.509803921568626%",
      "$type": "color",
      "original": {
        "$value": "{color.yellow.30}",
        "$type": "color"
      },
      "name": "rh-color-yellow-30-hsl",
      "attributes": {
        "category": "color",
        "type": "yellow",
        "item": "30-hsl",
        "hex": "ffcc17",
        "rgb": {
          "r": 255,
          "g": 204,
          "b": 23,
          "a": 1
        },
        "hsl": {
          "h": 46.81034482758621,
          "s": 100,
          "l": 54.509803921568626,
          "a": 1
        },
        "hsv": {
          "h": 46.81034482758621,
          "s": 0.9098039215686274,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "yellow",
        "30-hsl"
      ]
    }
  ],
  [
    "--rh-color-yellow-30-rgb",
    {
      "$value": "255 204 23",
      "$type": "color",
      "original": {
        "$value": "{color.yellow.30}",
        "$type": "color"
      },
      "name": "rh-color-yellow-30-rgb",
      "attributes": {
        "category": "color",
        "type": "yellow",
        "item": "30-rgb",
        "hex": "ffcc17",
        "rgb": {
          "r": 255,
          "g": 204,
          "b": 23,
          "a": 1
        },
        "hsl": {
          "h": 46.81034482758621,
          "s": 100,
          "l": 54.509803921568626,
          "a": 1
        },
        "hsv": {
          "h": 46.81034482758621,
          "s": 0.9098039215686274,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "yellow",
        "30-rgb"
      ]
    }
  ],
  [
    "--rh-color-yellow-40-hsl",
    {
      "$value": "43.79999999999999 83.33333333333334% 47.05882352941176%",
      "$type": "color",
      "original": {
        "$value": "{color.yellow.40}",
        "$type": "color"
      },
      "name": "rh-color-yellow-40-hsl",
      "attributes": {
        "category": "color",
        "type": "yellow",
        "item": "40-hsl",
        "hex": "dca614",
        "rgb": {
          "r": 220,
          "g": 166,
          "b": 20,
          "a": 1
        },
        "hsl": {
          "h": 43.79999999999999,
          "s": 83.33333333333334,
          "l": 47.05882352941176,
          "a": 1
        },
        "hsv": {
          "h": 43.79999999999999,
          "s": 0.9090909090909092,
          "v": 0.8627450980392157,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "yellow",
        "40-hsl"
      ]
    }
  ],
  [
    "--rh-color-yellow-40-rgb",
    {
      "$value": "220 166 20",
      "$type": "color",
      "original": {
        "$value": "{color.yellow.40}",
        "$type": "color"
      },
      "name": "rh-color-yellow-40-rgb",
      "attributes": {
        "category": "color",
        "type": "yellow",
        "item": "40-rgb",
        "hex": "dca614",
        "rgb": {
          "r": 220,
          "g": 166,
          "b": 20,
          "a": 1
        },
        "hsl": {
          "h": 43.79999999999999,
          "s": 83.33333333333334,
          "l": 47.05882352941176,
          "a": 1
        },
        "hsv": {
          "h": 43.79999999999999,
          "s": 0.9090909090909092,
          "v": 0.8627450980392157,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "yellow",
        "40-rgb"
      ]
    }
  ],
  [
    "--rh-color-yellow-50-hsl",
    {
      "$value": "40.95808383233534 82.26600985221675% 39.80392156862745%",
      "$type": "color",
      "original": {
        "$value": "{color.yellow.50}",
        "$type": "color"
      },
      "name": "rh-color-yellow-50-hsl",
      "attributes": {
        "category": "color",
        "type": "yellow",
        "item": "50-hsl",
        "hex": "b98412",
        "rgb": {
          "r": 185,
          "g": 132,
          "b": 18,
          "a": 1
        },
        "hsl": {
          "h": 40.95808383233534,
          "s": 82.26600985221675,
          "l": 39.80392156862745,
          "a": 1
        },
        "hsv": {
          "h": 40.95808383233534,
          "s": 0.9027027027027027,
          "v": 0.7254901960784313,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "yellow",
        "50-hsl"
      ]
    }
  ],
  [
    "--rh-color-yellow-50-rgb",
    {
      "$value": "185 132 18",
      "$type": "color",
      "original": {
        "$value": "{color.yellow.50}",
        "$type": "color"
      },
      "name": "rh-color-yellow-50-rgb",
      "attributes": {
        "category": "color",
        "type": "yellow",
        "item": "50-rgb",
        "hex": "b98412",
        "rgb": {
          "r": 185,
          "g": 132,
          "b": 18,
          "a": 1
        },
        "hsl": {
          "h": 40.95808383233534,
          "s": 82.26600985221675,
          "l": 39.80392156862745,
          "a": 1
        },
        "hsv": {
          "h": 40.95808383233534,
          "s": 0.9027027027027027,
          "v": 0.7254901960784313,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "yellow",
        "50-rgb"
      ]
    }
  ],
  [
    "--rh-color-yellow-60-hsl",
    {
      "$value": "37.77777777777777 81.81818181818181% 32.35294117647059%",
      "$type": "color",
      "original": {
        "$value": "{color.yellow.60}",
        "$type": "color"
      },
      "name": "rh-color-yellow-60-hsl",
      "attributes": {
        "category": "color",
        "type": "yellow",
        "item": "60-hsl",
        "hex": "96640f",
        "rgb": {
          "r": 150,
          "g": 100,
          "b": 15,
          "a": 1
        },
        "hsl": {
          "h": 37.77777777777777,
          "s": 81.81818181818181,
          "l": 32.35294117647059,
          "a": 1
        },
        "hsv": {
          "h": 37.77777777777777,
          "s": 0.9,
          "v": 0.5882352941176471,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "yellow",
        "60-hsl"
      ]
    }
  ],
  [
    "--rh-color-yellow-60-rgb",
    {
      "$value": "150 100 15",
      "$type": "color",
      "original": {
        "$value": "{color.yellow.60}",
        "$type": "color"
      },
      "name": "rh-color-yellow-60-rgb",
      "attributes": {
        "category": "color",
        "type": "yellow",
        "item": "60-rgb",
        "hex": "96640f",
        "rgb": {
          "r": 150,
          "g": 100,
          "b": 15,
          "a": 1
        },
        "hsl": {
          "h": 37.77777777777777,
          "s": 81.81818181818181,
          "l": 32.35294117647059,
          "a": 1
        },
        "hsv": {
          "h": 37.77777777777777,
          "s": 0.9,
          "v": 0.5882352941176471,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "yellow",
        "60-rgb"
      ]
    }
  ],
  [
    "--rh-color-yellow-70-hsl",
    {
      "$value": "35.192307692307686 82.53968253968253% 24.705882352941178%",
      "$type": "color",
      "original": {
        "$value": "{color.yellow.70}",
        "$type": "color"
      },
      "name": "rh-color-yellow-70-hsl",
      "attributes": {
        "category": "color",
        "type": "yellow",
        "item": "70-hsl",
        "hex": "73480b",
        "rgb": {
          "r": 115,
          "g": 72,
          "b": 11,
          "a": 1
        },
        "hsl": {
          "h": 35.192307692307686,
          "s": 82.53968253968253,
          "l": 24.705882352941178,
          "a": 1
        },
        "hsv": {
          "h": 35.192307692307686,
          "s": 0.9043478260869565,
          "v": 0.45098039215686275,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "yellow",
        "70-hsl"
      ]
    }
  ],
  [
    "--rh-color-yellow-70-rgb",
    {
      "$value": "115 72 11",
      "$type": "color",
      "original": {
        "$value": "{color.yellow.70}",
        "$type": "color"
      },
      "name": "rh-color-yellow-70-rgb",
      "attributes": {
        "category": "color",
        "type": "yellow",
        "item": "70-rgb",
        "hex": "73480b",
        "rgb": {
          "r": 115,
          "g": 72,
          "b": 11,
          "a": 1
        },
        "hsl": {
          "h": 35.192307692307686,
          "s": 82.53968253968253,
          "l": 24.705882352941178,
          "a": 1
        },
        "hsv": {
          "h": 35.192307692307686,
          "s": 0.9043478260869565,
          "v": 0.45098039215686275,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "yellow",
        "70-rgb"
      ]
    }
  ],
  [
    "--rh-color-interactive-primary-default",
    {
      "$value": "",
      "$description": "Responsive `interactive-primary` (e.g. link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-primary-default-on-light` on a themable container with a light color palette and `--rh-color-interactive-primary-default-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.interactive.primary.default.on-light}",
          "{color.interactive.primary.default.on-dark}"
        ],
        "$description": "Responsive `interactive-primary` (e.g. link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-primary-default-on-light` on a themable container with a light color palette and `--rh-color-interactive-primary-default-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-interactive-primary-default",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "primary",
        "subitem": "default",
        "state": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "primary",
        "default",
        "_"
      ]
    }
  ],
  [
    "--rh-color-interactive-primary-default-on-light",
    {
      "$value": "#0066cc",
      "$description": "Primary interactive - default (Light theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.blue.50}",
        "$description": "Primary interactive - default (Light theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-primary-default-on-light",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "primary",
        "subitem": "default",
        "state": "on-light",
        "hex": "0066cc",
        "rgb": {
          "r": 0,
          "g": 102,
          "b": 204,
          "a": 1
        },
        "hsl": {
          "h": 210,
          "s": 100,
          "l": 40,
          "a": 1
        },
        "hsv": {
          "h": 210,
          "s": 1,
          "v": 0.8,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "primary",
        "default",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-interactive-primary-default-on-dark",
    {
      "$value": "#92c5f9",
      "$description": "Primary interactive - default (Dark theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.blue.30}",
        "$description": "Primary interactive - default (Dark theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-primary-default-on-dark",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "primary",
        "subitem": "default",
        "state": "on-dark",
        "hex": "92c5f9",
        "rgb": {
          "r": 146,
          "g": 197,
          "b": 249,
          "a": 1
        },
        "hsl": {
          "h": 210.29126213592232,
          "s": 89.56521739130436,
          "l": 77.45098039215685,
          "a": 1
        },
        "hsv": {
          "h": 210.29126213592232,
          "s": 0.4136546184738956,
          "v": 0.9764705882352941,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "interactive",
        "primary",
        "default",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-interactive-primary-hover",
    {
      "$value": "",
      "$description": "Responsive `interactive-primary` (e.g. link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-primary-hover-on-light` on a themable container with a light color palette\n     and to `--rh-color-interactive-primary-hover-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.interactive.primary.hover.on-light}",
          "{color.interactive.primary.hover.on-dark}"
        ],
        "$description": "Responsive `interactive-primary` (e.g. link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-primary-hover-on-light` on a themable container with a light color palette\n     and to `--rh-color-interactive-primary-hover-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-interactive-primary-hover",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "primary",
        "subitem": "hover",
        "state": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "primary",
        "hover",
        "_"
      ]
    }
  ],
  [
    "--rh-color-interactive-primary-hover-on-light",
    {
      "$value": "#003366",
      "$description": "Primary interactive - hover (Light theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.blue.70}",
        "$description": "Primary interactive - hover (Light theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-primary-hover-on-light",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "primary",
        "subitem": "hover",
        "state": "on-light",
        "hex": "003366",
        "rgb": {
          "r": 0,
          "g": 51,
          "b": 102,
          "a": 1
        },
        "hsl": {
          "h": 210,
          "s": 100,
          "l": 20,
          "a": 1
        },
        "hsv": {
          "h": 210,
          "s": 1,
          "v": 0.4,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "primary",
        "hover",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-interactive-primary-hover-on-dark",
    {
      "$value": "#b9dafc",
      "$description": "Primary interactive - hover (Dark theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.blue.20}",
        "$description": "Primary interactive - hover (Dark theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-primary-hover-on-dark",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "primary",
        "subitem": "hover",
        "state": "on-dark",
        "hex": "b9dafc",
        "rgb": {
          "r": 185,
          "g": 218,
          "b": 252,
          "a": 1
        },
        "hsl": {
          "h": 210.44776119402988,
          "s": 91.78082191780825,
          "l": 85.68627450980392,
          "a": 1
        },
        "hsv": {
          "h": 210.44776119402988,
          "s": 0.2658730158730159,
          "v": 0.9882352941176471,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "interactive",
        "primary",
        "hover",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-interactive-primary-active",
    {
      "$value": "",
      "$description": "Responsive `interactive-primary` (e.g. link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-primary-active-on-light` on a themable container with a light color palette\n     and to `--rh-color-interactive-primary-active-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.interactive.primary.active.on-light}",
          "{color.interactive.primary.active.on-dark}"
        ],
        "$description": "Responsive `interactive-primary` (e.g. link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-primary-active-on-light` on a themable container with a light color palette\n     and to `--rh-color-interactive-primary-active-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-interactive-primary-active",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "primary",
        "subitem": "active",
        "state": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "primary",
        "active",
        "_"
      ]
    }
  ],
  [
    "--rh-color-interactive-primary-active-on-light",
    {
      "$value": "#003366",
      "$description": "Primary interactive - active (Light theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.blue.70}",
        "$description": "Primary interactive - active (Light theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-primary-active-on-light",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "primary",
        "subitem": "active",
        "state": "on-light",
        "hex": "003366",
        "rgb": {
          "r": 0,
          "g": 51,
          "b": 102,
          "a": 1
        },
        "hsl": {
          "h": 210,
          "s": 100,
          "l": 20,
          "a": 1
        },
        "hsv": {
          "h": 210,
          "s": 1,
          "v": 0.4,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "primary",
        "active",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-interactive-primary-active-on-dark",
    {
      "$value": "#b9dafc",
      "$description": "Primary interactive - active (Dark theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.blue.20}",
        "$description": "Primary interactive - active (Dark theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-primary-active-on-dark",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "primary",
        "subitem": "active",
        "state": "on-dark",
        "hex": "b9dafc",
        "rgb": {
          "r": 185,
          "g": 218,
          "b": 252,
          "a": 1
        },
        "hsl": {
          "h": 210.44776119402988,
          "s": 91.78082191780825,
          "l": 85.68627450980392,
          "a": 1
        },
        "hsv": {
          "h": 210.44776119402988,
          "s": 0.2658730158730159,
          "v": 0.9882352941176471,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "interactive",
        "primary",
        "active",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-interactive-primary-focus",
    {
      "$value": "",
      "$description": "Responsive `interactive-primary` (e.g. link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-primary-focus-on-light` on a themable container with a light color palette\n     and to `--rh-color-interactive-primary-focus-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.interactive.primary.focus.on-light}",
          "{color.interactive.primary.focus.on-dark}"
        ],
        "$description": "Responsive `interactive-primary` (e.g. link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-primary-focus-on-light` on a themable container with a light color palette\n     and to `--rh-color-interactive-primary-focus-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-interactive-primary-focus",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "primary",
        "subitem": "focus",
        "state": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "primary",
        "focus",
        "_"
      ]
    }
  ],
  [
    "--rh-color-interactive-primary-focus-on-light",
    {
      "$value": "#003366",
      "$description": "Primary interactive - focus (Light theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.blue.70}",
        "$description": "Primary interactive - focus (Light theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-primary-focus-on-light",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "primary",
        "subitem": "focus",
        "state": "on-light",
        "hex": "003366",
        "rgb": {
          "r": 0,
          "g": 51,
          "b": 102,
          "a": 1
        },
        "hsl": {
          "h": 210,
          "s": 100,
          "l": 20,
          "a": 1
        },
        "hsv": {
          "h": 210,
          "s": 1,
          "v": 0.4,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "primary",
        "focus",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-interactive-primary-focus-on-dark",
    {
      "$value": "#b9dafc",
      "$description": "Primary interactive - focus (Dark theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.blue.20}",
        "$description": "Primary interactive - focus (Dark theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-primary-focus-on-dark",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "primary",
        "subitem": "focus",
        "state": "on-dark",
        "hex": "b9dafc",
        "rgb": {
          "r": 185,
          "g": 218,
          "b": 252,
          "a": 1
        },
        "hsl": {
          "h": 210.44776119402988,
          "s": 91.78082191780825,
          "l": 85.68627450980392,
          "a": 1
        },
        "hsv": {
          "h": 210.44776119402988,
          "s": 0.2658730158730159,
          "v": 0.9882352941176471,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "interactive",
        "primary",
        "focus",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-interactive-primary-visited-default",
    {
      "$value": "",
      "$description": "Responsive `interactive-primary-visited` (e.g. visited link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-primary-visited-default-on-light` on a themable container with a light color palette and `--rh-color-interactive-primary-visited-default-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.interactive.primary.visited.default.on-light}",
          "{color.interactive.primary.visited.default.on-dark}"
        ],
        "$description": "Responsive `interactive-primary-visited` (e.g. visited link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-primary-visited-default-on-light` on a themable container with a light color palette and `--rh-color-interactive-primary-visited-default-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-interactive-primary-visited-default",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "primary",
        "subitem": "visited",
        "state": "default",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "primary",
        "visited",
        "default",
        "_"
      ]
    }
  ],
  [
    "--rh-color-interactive-primary-visited-default-on-light",
    {
      "$value": "#5e40be",
      "$description": "Primary interactive visited - default (Light theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.purple.50}",
        "$description": "Primary interactive visited - default (Light theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-primary-visited-default-on-light",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "primary",
        "subitem": "visited",
        "state": "default",
        "hex": "5e40be",
        "rgb": {
          "r": 94,
          "g": 64,
          "b": 190,
          "a": 1
        },
        "hsl": {
          "h": 254.2857142857143,
          "s": 49.60629921259843,
          "l": 49.80392156862745,
          "a": 1
        },
        "hsv": {
          "h": 254.2857142857143,
          "s": 0.6631578947368422,
          "v": 0.7450980392156863,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "primary",
        "visited",
        "default",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-interactive-primary-visited-default-on-dark",
    {
      "$value": "#b6a6e9",
      "$description": "Primary interactive visited - default (Dark theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.purple.30}",
        "$description": "Primary interactive visited - default (Dark theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-primary-visited-default-on-dark",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "primary",
        "subitem": "visited",
        "state": "default",
        "hex": "b6a6e9",
        "rgb": {
          "r": 182,
          "g": 166,
          "b": 233,
          "a": 1
        },
        "hsl": {
          "h": 254.32835820895522,
          "s": 60.36036036036033,
          "l": 78.23529411764706,
          "a": 1
        },
        "hsv": {
          "h": 254.32835820895522,
          "s": 0.2875536480686695,
          "v": 0.9137254901960784,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "interactive",
        "primary",
        "visited",
        "default",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-interactive-primary-visited-hover",
    {
      "$value": "",
      "$description": "Responsive `interactive-primary-visited` (e.g. visited link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-primary-visited-hover-on-light` on a themable container with a light color palette\n     and to `--rh-color-interactive-primary-visited-hover-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.interactive.primary.visited.hover.on-light}",
          "{color.interactive.primary.visited.hover.on-dark}"
        ],
        "$description": "Responsive `interactive-primary-visited` (e.g. visited link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-primary-visited-hover-on-light` on a themable container with a light color palette\n     and to `--rh-color-interactive-primary-visited-hover-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-interactive-primary-visited-hover",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "primary",
        "subitem": "visited",
        "state": "hover",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "primary",
        "visited",
        "hover",
        "_"
      ]
    }
  ],
  [
    "--rh-color-interactive-primary-visited-hover-on-light",
    {
      "$value": "#21134d",
      "$description": "Primary interactive visited - hover (Light theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.purple.70}",
        "$description": "Primary interactive visited - hover (Light theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-primary-visited-hover-on-light",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "primary",
        "subitem": "visited",
        "state": "hover",
        "hex": "21134d",
        "rgb": {
          "r": 33,
          "g": 19,
          "b": 77,
          "a": 1
        },
        "hsl": {
          "h": 254.48275862068965,
          "s": 60.416666666666664,
          "l": 18.823529411764707,
          "a": 1
        },
        "hsv": {
          "h": 254.48275862068965,
          "s": 0.7532467532467532,
          "v": 0.30196078431372547,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "primary",
        "visited",
        "hover",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-interactive-primary-visited-hover-on-dark",
    {
      "$value": "#ece6ff",
      "$description": "Primary interactive visited - hover (Dark theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.purple.10}",
        "$description": "Primary interactive visited - hover (Dark theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-primary-visited-hover-on-dark",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "primary",
        "subitem": "visited",
        "state": "hover",
        "hex": "ece6ff",
        "rgb": {
          "r": 236,
          "g": 230,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 254.4,
          "s": 100,
          "l": 95.09803921568627,
          "a": 1
        },
        "hsv": {
          "h": 254.4,
          "s": 0.0980392156862745,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "interactive",
        "primary",
        "visited",
        "hover",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-interactive-primary-visited-active",
    {
      "$value": "",
      "$description": "Responsive `interactive-primary-visited` (e.g. visited link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-primary-visited-active-on-light` on a themable container with a light color palette\n     and to `--rh-color-interactive-primary-visited-active-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.interactive.primary.visited.active.on-light}",
          "{color.interactive.primary.visited.active.on-dark}"
        ],
        "$description": "Responsive `interactive-primary-visited` (e.g. visited link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-primary-visited-active-on-light` on a themable container with a light color palette\n     and to `--rh-color-interactive-primary-visited-active-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-interactive-primary-visited-active",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "primary",
        "subitem": "visited",
        "state": "active",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "primary",
        "visited",
        "active",
        "_"
      ]
    }
  ],
  [
    "--rh-color-interactive-primary-visited-active-on-light",
    {
      "$value": "#21134d",
      "$description": "Primary interactive visited - active (Light theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.purple.70}",
        "$description": "Primary interactive visited - active (Light theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-primary-visited-active-on-light",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "primary",
        "subitem": "visited",
        "state": "active",
        "hex": "21134d",
        "rgb": {
          "r": 33,
          "g": 19,
          "b": 77,
          "a": 1
        },
        "hsl": {
          "h": 254.48275862068965,
          "s": 60.416666666666664,
          "l": 18.823529411764707,
          "a": 1
        },
        "hsv": {
          "h": 254.48275862068965,
          "s": 0.7532467532467532,
          "v": 0.30196078431372547,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "primary",
        "visited",
        "active",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-interactive-primary-visited-active-on-dark",
    {
      "$value": "#ece6ff",
      "$description": "Primary interactive visited - active (Dark theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.purple.10}",
        "$description": "Primary interactive visited - active (Dark theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-primary-visited-active-on-dark",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "primary",
        "subitem": "visited",
        "state": "active",
        "hex": "ece6ff",
        "rgb": {
          "r": 236,
          "g": 230,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 254.4,
          "s": 100,
          "l": 95.09803921568627,
          "a": 1
        },
        "hsv": {
          "h": 254.4,
          "s": 0.0980392156862745,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "interactive",
        "primary",
        "visited",
        "active",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-interactive-primary-visited-focus",
    {
      "$value": "",
      "$description": "Responsive `interactive-primary-visited` (e.g. visited link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-primary-visited-focus-on-light` on a themable container with a light color palette\n     and to `--rh-color-interactive-primary-visited-focus-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.interactive.primary.visited.focus.on-light}",
          "{color.interactive.primary.visited.focus.on-dark}"
        ],
        "$description": "Responsive `interactive-primary-visited` (e.g. visited link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-primary-visited-focus-on-light` on a themable container with a light color palette\n     and to `--rh-color-interactive-primary-visited-focus-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-interactive-primary-visited-focus",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "primary",
        "subitem": "visited",
        "state": "focus",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "primary",
        "visited",
        "focus",
        "_"
      ]
    }
  ],
  [
    "--rh-color-interactive-primary-visited-focus-on-light",
    {
      "$value": "#21134d",
      "$description": "Primary interactive visited - focus (Light theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.purple.70}",
        "$description": "Primary interactive visited - focus (Light theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-primary-visited-focus-on-light",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "primary",
        "subitem": "visited",
        "state": "focus",
        "hex": "21134d",
        "rgb": {
          "r": 33,
          "g": 19,
          "b": 77,
          "a": 1
        },
        "hsl": {
          "h": 254.48275862068965,
          "s": 60.416666666666664,
          "l": 18.823529411764707,
          "a": 1
        },
        "hsv": {
          "h": 254.48275862068965,
          "s": 0.7532467532467532,
          "v": 0.30196078431372547,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "primary",
        "visited",
        "focus",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-interactive-primary-visited-focus-on-dark",
    {
      "$value": "#ece6ff",
      "$description": "Primary interactive visited - focus (Dark theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.purple.10}",
        "$description": "Primary interactive visited - focus (Dark theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-primary-visited-focus-on-dark",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "primary",
        "subitem": "visited",
        "state": "focus",
        "hex": "ece6ff",
        "rgb": {
          "r": 236,
          "g": 230,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 254.4,
          "s": 100,
          "l": 95.09803921568627,
          "a": 1
        },
        "hsv": {
          "h": 254.4,
          "s": 0.0980392156862745,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "interactive",
        "primary",
        "visited",
        "focus",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-interactive-secondary-default",
    {
      "$value": "",
      "$description": "Responsive `interactive-secondary` (e.g. link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-secondary-default-on-light` on a themable container with a light color palette and `--rh-color-interactive-secondary-default-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.interactive.secondary.default.on-light}",
          "{color.interactive.secondary.default.on-dark}"
        ],
        "$description": "Responsive `interactive-secondary` (e.g. link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-secondary-default-on-light` on a themable container with a light color palette and `--rh-color-interactive-secondary-default-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-interactive-secondary-default",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "secondary",
        "subitem": "default",
        "state": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "secondary",
        "default",
        "_"
      ]
    }
  ],
  [
    "--rh-color-interactive-secondary-default-on-light",
    {
      "$value": "#4d4d4d",
      "$description": "Secondary interactive - default (Light theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.60}",
        "$description": "Secondary interactive - default (Light theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-secondary-default-on-light",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "secondary",
        "subitem": "default",
        "state": "on-light",
        "hex": "4d4d4d",
        "rgb": {
          "r": 77,
          "g": 77,
          "b": 77,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 30.19607843137255,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.30196078431372547,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "secondary",
        "default",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-interactive-secondary-default-on-dark",
    {
      "$value": "#c7c7c7",
      "$description": "Secondary interactive - default (Dark theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.30}",
        "$description": "Secondary interactive - default (Dark theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-secondary-default-on-dark",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "secondary",
        "subitem": "default",
        "state": "on-dark",
        "hex": "c7c7c7",
        "rgb": {
          "r": 199,
          "g": 199,
          "b": 199,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 78.03921568627452,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.7803921568627451,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "interactive",
        "secondary",
        "default",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-interactive-secondary-hover",
    {
      "$value": "",
      "$description": "Responsive `interactive-secondary` (e.g. link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-secondary-hover-on-light` on a themable container with a light color palette\n     and to `--rh-color-interactive-secondary-hover-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.interactive.secondary.hover.on-light}",
          "{color.interactive.secondary.hover.on-dark}"
        ],
        "$description": "Responsive `interactive-secondary` (e.g. link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-secondary-hover-on-light` on a themable container with a light color palette\n     and to `--rh-color-interactive-secondary-hover-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-interactive-secondary-hover",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "secondary",
        "subitem": "hover",
        "state": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "secondary",
        "hover",
        "_"
      ]
    }
  ],
  [
    "--rh-color-interactive-secondary-hover-on-light",
    {
      "$value": "#4d4d4d",
      "$description": "Secondary interactive - hover (Light theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.60}",
        "$description": "Secondary interactive - hover (Light theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-secondary-hover-on-light",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "secondary",
        "subitem": "hover",
        "state": "on-light",
        "hex": "4d4d4d",
        "rgb": {
          "r": 77,
          "g": 77,
          "b": 77,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 30.19607843137255,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.30196078431372547,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "secondary",
        "hover",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-interactive-secondary-hover-on-dark",
    {
      "$value": "#c7c7c7",
      "$description": "Secondary interactive - hover (Dark theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.30}",
        "$description": "Secondary interactive - hover (Dark theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-secondary-hover-on-dark",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "secondary",
        "subitem": "hover",
        "state": "on-dark",
        "hex": "c7c7c7",
        "rgb": {
          "r": 199,
          "g": 199,
          "b": 199,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 78.03921568627452,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.7803921568627451,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "interactive",
        "secondary",
        "hover",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-interactive-secondary-active",
    {
      "$value": "",
      "$description": "Responsive `interactive-secondary` (e.g. link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-secondary-active-on-light` on a themable container with a light color palette\n     and to `--rh-color-interactive-secondary-active-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.interactive.secondary.active.on-light}",
          "{color.interactive.secondary.active.on-dark}"
        ],
        "$description": "Responsive `interactive-secondary` (e.g. link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-secondary-active-on-light` on a themable container with a light color palette\n     and to `--rh-color-interactive-secondary-active-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-interactive-secondary-active",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "secondary",
        "subitem": "active",
        "state": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "secondary",
        "active",
        "_"
      ]
    }
  ],
  [
    "--rh-color-interactive-secondary-active-on-light",
    {
      "$value": "#4d4d4d",
      "$description": "Secondary interactive - active (Light theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.60}",
        "$description": "Secondary interactive - active (Light theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-secondary-active-on-light",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "secondary",
        "subitem": "active",
        "state": "on-light",
        "hex": "4d4d4d",
        "rgb": {
          "r": 77,
          "g": 77,
          "b": 77,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 30.19607843137255,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.30196078431372547,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "secondary",
        "active",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-interactive-secondary-active-on-dark",
    {
      "$value": "#c7c7c7",
      "$description": "Secondary interactive - active (Dark theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.30}",
        "$description": "Secondary interactive - active (Dark theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-secondary-active-on-dark",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "secondary",
        "subitem": "active",
        "state": "on-dark",
        "hex": "c7c7c7",
        "rgb": {
          "r": 199,
          "g": 199,
          "b": 199,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 78.03921568627452,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.7803921568627451,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "interactive",
        "secondary",
        "active",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-interactive-secondary-focus",
    {
      "$value": "",
      "$description": "Responsive `interactive-secondary` (e.g. link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-secondary-focus-on-light` on a themable container with a light color palette\n     and to `--rh-color-interactive-secondary-focus-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.interactive.secondary.focus.on-light}",
          "{color.interactive.secondary.focus.on-dark}"
        ],
        "$description": "Responsive `interactive-secondary` (e.g. link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-secondary-focus-on-light` on a themable container with a light color palette\n     and to `--rh-color-interactive-secondary-focus-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-interactive-secondary-focus",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "secondary",
        "subitem": "focus",
        "state": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "secondary",
        "focus",
        "_"
      ]
    }
  ],
  [
    "--rh-color-interactive-secondary-focus-on-light",
    {
      "$value": "#4d4d4d",
      "$description": "Secondary interactive - focus (Light theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.60}",
        "$description": "Secondary interactive - focus (Light theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-secondary-focus-on-light",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "secondary",
        "subitem": "focus",
        "state": "on-light",
        "hex": "4d4d4d",
        "rgb": {
          "r": 77,
          "g": 77,
          "b": 77,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 30.19607843137255,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.30196078431372547,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "secondary",
        "focus",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-interactive-secondary-focus-on-dark",
    {
      "$value": "#c7c7c7",
      "$description": "Secondary interactive - focus (Dark theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.30}",
        "$description": "Secondary interactive - focus (Dark theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-secondary-focus-on-dark",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "secondary",
        "subitem": "focus",
        "state": "on-dark",
        "hex": "c7c7c7",
        "rgb": {
          "r": 199,
          "g": 199,
          "b": 199,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 78.03921568627452,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.7803921568627451,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "interactive",
        "secondary",
        "focus",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-interactive-secondary-visited-default",
    {
      "$value": "",
      "$description": "Responsive `interactive-secondary-visited` (e.g. visited link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-secondary-visited-default-on-light` on a themable container with a light color palette and `--rh-color-interactive-secondary-visited-default-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.interactive.secondary.visited.default.on-light}",
          "{color.interactive.secondary.visited.default.on-dark}"
        ],
        "$description": "Responsive `interactive-secondary-visited` (e.g. visited link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-secondary-visited-default-on-light` on a themable container with a light color palette and `--rh-color-interactive-secondary-visited-default-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-interactive-secondary-visited-default",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "secondary",
        "subitem": "visited",
        "state": "default",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "secondary",
        "visited",
        "default",
        "_"
      ]
    }
  ],
  [
    "--rh-color-interactive-secondary-visited-default-on-light",
    {
      "$value": "#4d4d4d",
      "$description": "Secondary interactive visited - default (Light theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.60}",
        "$description": "Secondary interactive visited - default (Light theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-secondary-visited-default-on-light",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "secondary",
        "subitem": "visited",
        "state": "default",
        "hex": "4d4d4d",
        "rgb": {
          "r": 77,
          "g": 77,
          "b": 77,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 30.19607843137255,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.30196078431372547,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "secondary",
        "visited",
        "default",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-interactive-secondary-visited-default-on-dark",
    {
      "$value": "#c7c7c7",
      "$description": "Secondary interactive visited - default (Dark theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.30}",
        "$description": "Secondary interactive visited - default (Dark theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-secondary-visited-default-on-dark",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "secondary",
        "subitem": "visited",
        "state": "default",
        "hex": "c7c7c7",
        "rgb": {
          "r": 199,
          "g": 199,
          "b": 199,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 78.03921568627452,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.7803921568627451,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "interactive",
        "secondary",
        "visited",
        "default",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-interactive-secondary-visited-hover",
    {
      "$value": "",
      "$description": "Responsive `interactive-secondary-visited` (e.g. visited link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-secondary-visited-hover-on-light` on a themable container with a light color palette\n     and to `--rh-color-interactive-secondary-visited-hover-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.interactive.secondary.visited.hover.on-light}",
          "{color.interactive.secondary.visited.hover.on-dark}"
        ],
        "$description": "Responsive `interactive-secondary-visited` (e.g. visited link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-secondary-visited-hover-on-light` on a themable container with a light color palette\n     and to `--rh-color-interactive-secondary-visited-hover-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-interactive-secondary-visited-hover",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "secondary",
        "subitem": "visited",
        "state": "hover",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "secondary",
        "visited",
        "hover",
        "_"
      ]
    }
  ],
  [
    "--rh-color-interactive-secondary-visited-hover-on-light",
    {
      "$value": "#4d4d4d",
      "$description": "Secondary interactive visited - hover (Light theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.60}",
        "$description": "Secondary interactive visited - hover (Light theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-secondary-visited-hover-on-light",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "secondary",
        "subitem": "visited",
        "state": "hover",
        "hex": "4d4d4d",
        "rgb": {
          "r": 77,
          "g": 77,
          "b": 77,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 30.19607843137255,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.30196078431372547,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "secondary",
        "visited",
        "hover",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-interactive-secondary-visited-hover-on-dark",
    {
      "$value": "#c7c7c7",
      "$description": "Secondary interactive visited - hover (Dark theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.30}",
        "$description": "Secondary interactive visited - hover (Dark theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-secondary-visited-hover-on-dark",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "secondary",
        "subitem": "visited",
        "state": "hover",
        "hex": "c7c7c7",
        "rgb": {
          "r": 199,
          "g": 199,
          "b": 199,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 78.03921568627452,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.7803921568627451,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "interactive",
        "secondary",
        "visited",
        "hover",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-interactive-secondary-visited-active",
    {
      "$value": "",
      "$description": "Responsive `interactive-secondary-visited` (e.g. visited link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-secondary-visited-active-on-light` on a themable container with a light color palette\n     and to `--rh-color-interactive-secondary-visited-active-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.interactive.secondary.visited.active.on-light}",
          "{color.interactive.secondary.visited.active.on-dark}"
        ],
        "$description": "Responsive `interactive-secondary-visited` (e.g. visited link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-secondary-visited-active-on-light` on a themable container with a light color palette\n     and to `--rh-color-interactive-secondary-visited-active-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-interactive-secondary-visited-active",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "secondary",
        "subitem": "visited",
        "state": "active",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "secondary",
        "visited",
        "active",
        "_"
      ]
    }
  ],
  [
    "--rh-color-interactive-secondary-visited-active-on-light",
    {
      "$value": "#4d4d4d",
      "$description": "Secondary interactive visited - active (Light theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.60}",
        "$description": "Secondary interactive visited - active (Light theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-secondary-visited-active-on-light",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "secondary",
        "subitem": "visited",
        "state": "active",
        "hex": "4d4d4d",
        "rgb": {
          "r": 77,
          "g": 77,
          "b": 77,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 30.19607843137255,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.30196078431372547,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "secondary",
        "visited",
        "active",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-interactive-secondary-visited-active-on-dark",
    {
      "$value": "#c7c7c7",
      "$description": "Secondary interactive visited - active (Dark theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.30}",
        "$description": "Secondary interactive visited - active (Dark theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-secondary-visited-active-on-dark",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "secondary",
        "subitem": "visited",
        "state": "active",
        "hex": "c7c7c7",
        "rgb": {
          "r": 199,
          "g": 199,
          "b": 199,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 78.03921568627452,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.7803921568627451,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "interactive",
        "secondary",
        "visited",
        "active",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-interactive-secondary-visited-focus",
    {
      "$value": "",
      "$description": "Responsive `interactive-secondary-visited` (e.g. visited link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-secondary-visited-focus-on-light` on a themable container with a light color palette\n     and to `--rh-color-interactive-secondary-visited-focus-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.interactive.secondary.visited.focus.on-light}",
          "{color.interactive.secondary.visited.focus.on-dark}"
        ],
        "$description": "Responsive `interactive-secondary-visited` (e.g. visited link) color value. Typically read only - use a themable container e.g. `<rh-surface>`. Resolves to `--rh-color-interactive-secondary-visited-focus-on-light` on a themable container with a light color palette\n     and to `--rh-color-interactive-secondary-visited-focus-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-interactive-secondary-visited-focus",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "secondary",
        "subitem": "visited",
        "state": "focus",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "secondary",
        "visited",
        "focus",
        "_"
      ]
    }
  ],
  [
    "--rh-color-interactive-secondary-visited-focus-on-light",
    {
      "$value": "#4d4d4d",
      "$description": "Secondary interactive visited - focus (Light theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.60}",
        "$description": "Secondary interactive visited - focus (Light theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-secondary-visited-focus-on-light",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "secondary",
        "subitem": "visited",
        "state": "focus",
        "hex": "4d4d4d",
        "rgb": {
          "r": 77,
          "g": 77,
          "b": 77,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 30.19607843137255,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.30196078431372547,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "secondary",
        "visited",
        "focus",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-interactive-secondary-visited-focus-on-dark",
    {
      "$value": "#c7c7c7",
      "$description": "Secondary interactive visited - focus (Dark theme)",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.30}",
        "$description": "Secondary interactive visited - focus (Dark theme)",
        "$type": "color"
      },
      "name": "rh-color-interactive-secondary-visited-focus-on-dark",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "secondary",
        "subitem": "visited",
        "state": "focus",
        "hex": "c7c7c7",
        "rgb": {
          "r": 199,
          "g": 199,
          "b": 199,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 78.03921568627452,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.7803921568627451,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "interactive",
        "secondary",
        "visited",
        "focus",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-interactive-blue-lightest",
    {
      "$value": "#b9dafc",
      "$description": "Inline link hover (dark theme)",
      "$extensions": {
        "com.redhat.ux": {
          "deprecated": true
        }
      },
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.interactive.primary.hover.on-dark}",
        "$description": "Inline link hover (dark theme)",
        "$extensions": {
          "com.redhat.ux": {
            "deprecated": true
          }
        },
        "$type": "color"
      },
      "name": "rh-color-interactive-blue-lightest",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "blue",
        "subitem": "lightest",
        "hex": "b9dafc",
        "rgb": {
          "r": 185,
          "g": 218,
          "b": 252,
          "a": 1
        },
        "hsl": {
          "h": 210.44776119402988,
          "s": 91.78082191780825,
          "l": 85.68627450980392,
          "a": 1
        },
        "hsv": {
          "h": 210.44776119402988,
          "s": 0.2658730158730159,
          "v": 0.9882352941176471,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "interactive",
        "blue",
        "lightest"
      ]
    }
  ],
  [
    "--rh-color-interactive-blue-lighter",
    {
      "$value": "#92c5f9",
      "$description": "Inline link (dark theme)",
      "$extensions": {
        "com.redhat.ux": {
          "deprecated": true
        }
      },
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.interactive.primary.default.on-dark}",
        "$description": "Inline link (dark theme)",
        "$extensions": {
          "com.redhat.ux": {
            "deprecated": true
          }
        },
        "$type": "color"
      },
      "name": "rh-color-interactive-blue-lighter",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "blue",
        "subitem": "lighter",
        "hex": "92c5f9",
        "rgb": {
          "r": 146,
          "g": 197,
          "b": 249,
          "a": 1
        },
        "hsl": {
          "h": 210.29126213592232,
          "s": 89.56521739130436,
          "l": 77.45098039215685,
          "a": 1
        },
        "hsv": {
          "h": 210.29126213592232,
          "s": 0.4136546184738956,
          "v": 0.9764705882352941,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "interactive",
        "blue",
        "lighter"
      ]
    }
  ],
  [
    "--rh-color-interactive-blue-darker",
    {
      "$value": "#0066cc",
      "$description": "Inline link (light theme)",
      "$extensions": {
        "com.redhat.ux": {
          "deprecated": true
        }
      },
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.interactive.primary.default.on-light}",
        "$description": "Inline link (light theme)",
        "$extensions": {
          "com.redhat.ux": {
            "deprecated": true
          }
        },
        "$type": "color"
      },
      "name": "rh-color-interactive-blue-darker",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "blue",
        "subitem": "darker",
        "hex": "0066cc",
        "rgb": {
          "r": 0,
          "g": 102,
          "b": 204,
          "a": 1
        },
        "hsl": {
          "h": 210,
          "s": 100,
          "l": 40,
          "a": 1
        },
        "hsv": {
          "h": 210,
          "s": 1,
          "v": 0.8,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "blue",
        "darker"
      ]
    }
  ],
  [
    "--rh-color-interactive-blue-darkest",
    {
      "$value": "#003366",
      "$description": "Inline link hover (light theme)",
      "$extensions": {
        "com.redhat.ux": {
          "deprecated": true
        }
      },
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.interactive.primary.hover.on-light}",
        "$description": "Inline link hover (light theme)",
        "$extensions": {
          "com.redhat.ux": {
            "deprecated": true
          }
        },
        "$type": "color"
      },
      "name": "rh-color-interactive-blue-darkest",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "blue",
        "subitem": "darkest",
        "hex": "003366",
        "rgb": {
          "r": 0,
          "g": 51,
          "b": 102,
          "a": 1
        },
        "hsl": {
          "h": 210,
          "s": 100,
          "l": 20,
          "a": 1
        },
        "hsv": {
          "h": 210,
          "s": 1,
          "v": 0.4,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "blue",
        "darkest"
      ]
    }
  ],
  [
    "--rh-color-interactive-purple-lightest",
    {
      "$value": "#ece6ff",
      "$description": "Inline link visited hover (dark theme)",
      "$extensions": {
        "com.redhat.ux": {
          "deprecated": true
        }
      },
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.interactive.primary.visited.hover.on-dark}",
        "$description": "Inline link visited hover (dark theme)",
        "$extensions": {
          "com.redhat.ux": {
            "deprecated": true
          }
        },
        "$type": "color"
      },
      "name": "rh-color-interactive-purple-lightest",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "purple",
        "subitem": "lightest",
        "hex": "ece6ff",
        "rgb": {
          "r": 236,
          "g": 230,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 254.4,
          "s": 100,
          "l": 95.09803921568627,
          "a": 1
        },
        "hsv": {
          "h": 254.4,
          "s": 0.0980392156862745,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "interactive",
        "purple",
        "lightest"
      ]
    }
  ],
  [
    "--rh-color-interactive-purple-lighter",
    {
      "$value": "#b6a6e9",
      "$description": "Inline link visited (dark theme)",
      "$extensions": {
        "com.redhat.ux": {
          "deprecated": true
        }
      },
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.interactive.primary.visited.default.on-dark}",
        "$description": "Inline link visited (dark theme)",
        "$extensions": {
          "com.redhat.ux": {
            "deprecated": true
          }
        },
        "$type": "color"
      },
      "name": "rh-color-interactive-purple-lighter",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "purple",
        "subitem": "lighter",
        "hex": "b6a6e9",
        "rgb": {
          "r": 182,
          "g": 166,
          "b": 233,
          "a": 1
        },
        "hsl": {
          "h": 254.32835820895522,
          "s": 60.36036036036033,
          "l": 78.23529411764706,
          "a": 1
        },
        "hsv": {
          "h": 254.32835820895522,
          "s": 0.2875536480686695,
          "v": 0.9137254901960784,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "interactive",
        "purple",
        "lighter"
      ]
    }
  ],
  [
    "--rh-color-interactive-purple-darker",
    {
      "$value": "#5e40be",
      "$description": "Inline link visited (light theme)",
      "$extensions": {
        "com.redhat.ux": {
          "deprecated": true
        }
      },
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.interactive.primary.visited.default.on-light}",
        "$description": "Inline link visited (light theme)",
        "$extensions": {
          "com.redhat.ux": {
            "deprecated": true
          }
        },
        "$type": "color"
      },
      "name": "rh-color-interactive-purple-darker",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "purple",
        "subitem": "darker",
        "hex": "5e40be",
        "rgb": {
          "r": 94,
          "g": 64,
          "b": 190,
          "a": 1
        },
        "hsl": {
          "h": 254.2857142857143,
          "s": 49.60629921259843,
          "l": 49.80392156862745,
          "a": 1
        },
        "hsv": {
          "h": 254.2857142857143,
          "s": 0.6631578947368422,
          "v": 0.7450980392156863,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "interactive",
        "purple",
        "darker"
      ]
    }
  ],
  [
    "--rh-color-interactive-purple-darkest",
    {
      "$value": "#ece6ff",
      "$description": "Inline link visited hover (light theme)",
      "$extensions": {
        "com.redhat.ux": {
          "deprecated": true
        }
      },
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.interactive.primary.visited.hover.on-dark}",
        "$description": "Inline link visited hover (light theme)",
        "$extensions": {
          "com.redhat.ux": {
            "deprecated": true
          }
        },
        "$type": "color"
      },
      "name": "rh-color-interactive-purple-darkest",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "purple",
        "subitem": "darkest",
        "hex": "ece6ff",
        "rgb": {
          "r": 236,
          "g": 230,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 254.4,
          "s": 100,
          "l": 95.09803921568627,
          "a": 1
        },
        "hsv": {
          "h": 254.4,
          "s": 0.0980392156862745,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "interactive",
        "purple",
        "darkest"
      ]
    }
  ],
  [
    "--rh-color-status-danger",
    {
      "$value": "",
      "$description": "Responsive `status-danger` color value. Typically read-only – use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-status-danger-on-light` on a themable container with a light color palette and `--rh-color-status-danger-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/status.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.status.danger.on-light}",
          "{color.status.danger.on-dark}"
        ],
        "$description": "Responsive `status-danger` color value. Typically read-only – use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-status-danger-on-light` on a themable container with a light color palette and `--rh-color-status-danger-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-status-danger",
      "attributes": {
        "category": "color",
        "type": "status",
        "item": "danger",
        "subitem": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "status",
        "danger",
        "_"
      ]
    }
  ],
  [
    "--rh-color-status-danger-on-light",
    {
      "$value": "#b1380b",
      "$description": "Danger status color (light theme)",
      "filePath": "tokens/color/status.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.red-orange.60}",
        "$description": "Danger status color (light theme)",
        "$type": "color"
      },
      "name": "rh-color-status-danger-on-light",
      "attributes": {
        "category": "color",
        "type": "status",
        "item": "danger",
        "subitem": "on-light",
        "hex": "b1380b",
        "rgb": {
          "r": 177,
          "g": 56,
          "b": 11,
          "a": 1
        },
        "hsl": {
          "h": 16.265060240963855,
          "s": 88.29787234042554,
          "l": 36.86274509803921,
          "a": 1
        },
        "hsv": {
          "h": 16.265060240963855,
          "s": 0.9378531073446328,
          "v": 0.6941176470588235,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "status",
        "danger",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-status-danger-on-dark",
    {
      "$value": "#f0561d",
      "$description": "Danger status color (dark theme)",
      "filePath": "tokens/color/status.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.red-orange.50}",
        "$description": "Danger status color (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-status-danger-on-dark",
      "attributes": {
        "category": "color",
        "type": "status",
        "item": "danger",
        "subitem": "on-dark",
        "hex": "f0561d",
        "rgb": {
          "r": 240,
          "g": 86,
          "b": 29,
          "a": 1
        },
        "hsl": {
          "h": 16.208530805687207,
          "s": 87.55186721991701,
          "l": 52.74509803921569,
          "a": 1
        },
        "hsv": {
          "h": 16.208530805687207,
          "s": 0.8791666666666667,
          "v": 0.9411764705882353,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "status",
        "danger",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-status-caution",
    {
      "$value": "",
      "$description": "Responsive `status-caution` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-status-caution-on-light` on a themable container with a light color palette and `--rh-color-status-caution-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/status.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.status.caution.on-light}",
          "{color.status.caution.on-dark}"
        ],
        "$description": "Responsive `status-caution` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-status-caution-on-light` on a themable container with a light color palette and `--rh-color-status-caution-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-status-caution",
      "attributes": {
        "category": "color",
        "type": "status",
        "item": "caution",
        "subitem": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "status",
        "caution",
        "_"
      ]
    }
  ],
  [
    "--rh-color-status-caution-on-light",
    {
      "$value": "#ca6c0f",
      "$description": "Caution status color (light theme)",
      "filePath": "tokens/color/status.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.orange.50}",
        "$description": "Caution status color (light theme)",
        "$type": "color"
      },
      "name": "rh-color-status-caution-on-light",
      "attributes": {
        "category": "color",
        "type": "status",
        "item": "caution",
        "subitem": "on-light",
        "hex": "ca6c0f",
        "rgb": {
          "r": 202,
          "g": 108,
          "b": 15,
          "a": 1
        },
        "hsl": {
          "h": 29.83957219251337,
          "s": 86.17511520737327,
          "l": 42.549019607843135,
          "a": 1
        },
        "hsv": {
          "h": 29.83957219251337,
          "s": 0.9257425742574257,
          "v": 0.792156862745098,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "status",
        "caution",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-status-caution-on-dark",
    {
      "$value": "#f5921b",
      "$description": "Caution status color (dark theme)",
      "filePath": "tokens/color/status.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.orange.40}",
        "$description": "Caution status color (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-status-caution-on-dark",
      "attributes": {
        "category": "color",
        "type": "status",
        "item": "caution",
        "subitem": "on-dark",
        "hex": "f5921b",
        "rgb": {
          "r": 245,
          "g": 146,
          "b": 27,
          "a": 1
        },
        "hsl": {
          "h": 32.752293577981646,
          "s": 91.5966386554622,
          "l": 53.333333333333336,
          "a": 1
        },
        "hsv": {
          "h": 32.752293577981646,
          "s": 0.889795918367347,
          "v": 0.9607843137254902,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "status",
        "caution",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-status-warning",
    {
      "$value": "",
      "$description": "Responsive `status-warning` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-status-warning-on-light` on a themable container with a light color palette and `--rh-color-status-warning-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/status.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.status.warning.on-light}",
          "{color.status.warning.on-dark}"
        ],
        "$description": "Responsive `status-warning` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-status-warning-on-light` on a themable container with a light color palette and `--rh-color-status-warning-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-status-warning",
      "attributes": {
        "category": "color",
        "type": "status",
        "item": "warning",
        "subitem": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "status",
        "warning",
        "_"
      ]
    }
  ],
  [
    "--rh-color-status-warning-on-light",
    {
      "$value": "#dca614",
      "$description": "Warning status color (light theme)",
      "filePath": "tokens/color/status.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.yellow.40}",
        "$description": "Warning status color (light theme)",
        "$type": "color"
      },
      "name": "rh-color-status-warning-on-light",
      "attributes": {
        "category": "color",
        "type": "status",
        "item": "warning",
        "subitem": "on-light",
        "hex": "dca614",
        "rgb": {
          "r": 220,
          "g": 166,
          "b": 20,
          "a": 1
        },
        "hsl": {
          "h": 43.79999999999999,
          "s": 83.33333333333334,
          "l": 47.05882352941176,
          "a": 1
        },
        "hsv": {
          "h": 43.79999999999999,
          "s": 0.9090909090909092,
          "v": 0.8627450980392157,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "status",
        "warning",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-status-warning-on-dark",
    {
      "$value": "#ffcc17",
      "$description": "Warning status color (dark theme)",
      "filePath": "tokens/color/status.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.yellow.30}",
        "$description": "Warning status color (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-status-warning-on-dark",
      "attributes": {
        "category": "color",
        "type": "status",
        "item": "warning",
        "subitem": "on-dark",
        "hex": "ffcc17",
        "rgb": {
          "r": 255,
          "g": 204,
          "b": 23,
          "a": 1
        },
        "hsl": {
          "h": 46.81034482758621,
          "s": 100,
          "l": 54.509803921568626,
          "a": 1
        },
        "hsv": {
          "h": 46.81034482758621,
          "s": 0.9098039215686274,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "status",
        "warning",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-status-neutral",
    {
      "$value": "",
      "$description": "Responsive `status-neutral` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-status-neutral-on-light` on a themable container with a light color palette and `--rh-color-status-neutral-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/status.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.status.neutral.on-light}",
          "{color.status.neutral.on-dark}"
        ],
        "$description": "Responsive `status-neutral` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-status-neutral-on-light` on a themable container with a light color palette and `--rh-color-status-neutral-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-status-neutral",
      "attributes": {
        "category": "color",
        "type": "status",
        "item": "neutral",
        "subitem": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "status",
        "neutral",
        "_"
      ]
    }
  ],
  [
    "--rh-color-status-neutral-on-light",
    {
      "$value": "#4d4d4d",
      "$description": "Neutral accent color (light theme)",
      "filePath": "tokens/color/status.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.60}",
        "$description": "Neutral accent color (light theme)",
        "$type": "color"
      },
      "name": "rh-color-status-neutral-on-light",
      "attributes": {
        "category": "color",
        "type": "status",
        "item": "neutral",
        "subitem": "on-light",
        "hex": "4d4d4d",
        "rgb": {
          "r": 77,
          "g": 77,
          "b": 77,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 30.19607843137255,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.30196078431372547,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "status",
        "neutral",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-status-neutral-on-dark",
    {
      "$value": "#c7c7c7",
      "$description": "Neutral accent color (dark theme)",
      "filePath": "tokens/color/status.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.30}",
        "$description": "Neutral accent color (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-status-neutral-on-dark",
      "attributes": {
        "category": "color",
        "type": "status",
        "item": "neutral",
        "subitem": "on-dark",
        "hex": "c7c7c7",
        "rgb": {
          "r": 199,
          "g": 199,
          "b": 199,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 78.03921568627452,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.7803921568627451,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "status",
        "neutral",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-status-note",
    {
      "$value": "",
      "$description": "Responsive `status-note` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-status-note-on-light` on a themable container with a light color palette and `--rh-color-status-note-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/status.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.status.note.on-light}",
          "{color.status.note.on-dark}"
        ],
        "$description": "Responsive `status-note` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-status-note-on-light` on a themable container with a light color palette and `--rh-color-status-note-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-status-note",
      "attributes": {
        "category": "color",
        "type": "status",
        "item": "note",
        "subitem": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "status",
        "note",
        "_"
      ]
    }
  ],
  [
    "--rh-color-status-note-on-light",
    {
      "$value": "#5e40be",
      "$description": "Note/tip status color (light theme)",
      "filePath": "tokens/color/status.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.status.info.on-light}",
        "$description": "Note/tip status color (light theme)",
        "$type": "color"
      },
      "name": "rh-color-status-note-on-light",
      "attributes": {
        "category": "color",
        "type": "status",
        "item": "note",
        "subitem": "on-light",
        "hex": "5e40be",
        "rgb": {
          "r": 94,
          "g": 64,
          "b": 190,
          "a": 1
        },
        "hsl": {
          "h": 254.2857142857143,
          "s": 49.60629921259843,
          "l": 49.80392156862745,
          "a": 1
        },
        "hsv": {
          "h": 254.2857142857143,
          "s": 0.6631578947368422,
          "v": 0.7450980392156863,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "status",
        "note",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-status-note-on-dark",
    {
      "$value": "#b6a6e9",
      "$description": "Note/tip status color (dark theme)",
      "filePath": "tokens/color/status.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.status.info.on-dark}",
        "$description": "Note/tip status color (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-status-note-on-dark",
      "attributes": {
        "category": "color",
        "type": "status",
        "item": "note",
        "subitem": "on-dark",
        "hex": "b6a6e9",
        "rgb": {
          "r": 182,
          "g": 166,
          "b": 233,
          "a": 1
        },
        "hsl": {
          "h": 254.32835820895522,
          "s": 60.36036036036033,
          "l": 78.23529411764706,
          "a": 1
        },
        "hsv": {
          "h": 254.32835820895522,
          "s": 0.2875536480686695,
          "v": 0.9137254901960784,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "status",
        "note",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-status-info",
    {
      "$value": "",
      "$description": "Responsive `status-info` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-status-info-on-light` on a themable container with a light color palette and `--rh-color-status-info-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/status.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.status.info.on-light}",
          "{color.status.info.on-dark}"
        ],
        "$description": "Responsive `status-info` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-status-info-on-light` on a themable container with a light color palette and `--rh-color-status-info-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-status-info",
      "attributes": {
        "category": "color",
        "type": "status",
        "item": "info",
        "subitem": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "status",
        "info",
        "_"
      ]
    }
  ],
  [
    "--rh-color-status-info-on-light",
    {
      "$value": "#5e40be",
      "$description": "Info status color (light theme)",
      "filePath": "tokens/color/status.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.purple.50}",
        "$description": "Info status color (light theme)",
        "$type": "color"
      },
      "name": "rh-color-status-info-on-light",
      "attributes": {
        "category": "color",
        "type": "status",
        "item": "info",
        "subitem": "on-light",
        "hex": "5e40be",
        "rgb": {
          "r": 94,
          "g": 64,
          "b": 190,
          "a": 1
        },
        "hsl": {
          "h": 254.2857142857143,
          "s": 49.60629921259843,
          "l": 49.80392156862745,
          "a": 1
        },
        "hsv": {
          "h": 254.2857142857143,
          "s": 0.6631578947368422,
          "v": 0.7450980392156863,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "status",
        "info",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-status-info-on-dark",
    {
      "$value": "#b6a6e9",
      "$description": "Info status color (dark theme)",
      "filePath": "tokens/color/status.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.purple.30}",
        "$description": "Info status color (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-status-info-on-dark",
      "attributes": {
        "category": "color",
        "type": "status",
        "item": "info",
        "subitem": "on-dark",
        "hex": "b6a6e9",
        "rgb": {
          "r": 182,
          "g": 166,
          "b": 233,
          "a": 1
        },
        "hsl": {
          "h": 254.32835820895522,
          "s": 60.36036036036033,
          "l": 78.23529411764706,
          "a": 1
        },
        "hsv": {
          "h": 254.32835820895522,
          "s": 0.2875536480686695,
          "v": 0.9137254901960784,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "status",
        "info",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-status-success",
    {
      "$value": "",
      "$description": "Responsive `status-success` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-status-success-on-light` on a themable container with a light color palette and `--rh-color-status-success-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/status.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.status.success.on-light}",
          "{color.status.success.on-dark}"
        ],
        "$description": "Responsive `status-success` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-status-success-on-light` on a themable container with a light color palette and `--rh-color-status-success-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-status-success",
      "attributes": {
        "category": "color",
        "type": "status",
        "item": "success",
        "subitem": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "status",
        "success",
        "_"
      ]
    }
  ],
  [
    "--rh-color-status-success-on-light",
    {
      "$value": "#3d7317",
      "$description": "Success status color (light theme)",
      "filePath": "tokens/color/status.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.green.60}",
        "$description": "Success status color (light theme)",
        "$type": "color"
      },
      "name": "rh-color-status-success-on-light",
      "attributes": {
        "category": "color",
        "type": "status",
        "item": "success",
        "subitem": "on-light",
        "hex": "3d7317",
        "rgb": {
          "r": 61,
          "g": 115,
          "b": 23,
          "a": 1
        },
        "hsl": {
          "h": 95.21739130434783,
          "s": 66.66666666666667,
          "l": 27.058823529411764,
          "a": 1
        },
        "hsv": {
          "h": 95.21739130434783,
          "s": 0.7999999999999999,
          "v": 0.45098039215686275,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "status",
        "success",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-status-success-on-dark",
    {
      "$value": "#87bb62",
      "$description": "Success status color (dark theme)",
      "filePath": "tokens/color/status.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.green.40}",
        "$description": "Success status color (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-status-success-on-dark",
      "attributes": {
        "category": "color",
        "type": "status",
        "item": "success",
        "subitem": "on-dark",
        "hex": "87bb62",
        "rgb": {
          "r": 135,
          "g": 187,
          "b": 98,
          "a": 1
        },
        "hsl": {
          "h": 95.05617977528091,
          "s": 39.55555555555555,
          "l": 55.88235294117647,
          "a": 1
        },
        "hsv": {
          "h": 95.05617977528091,
          "s": 0.4759358288770053,
          "v": 0.7333333333333333,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "status",
        "success",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-surface",
    {
      "$value": "",
      "$description": "Responsive `surface` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to the surface color corresponding to the surface' color palette.",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.surface.lightest}",
          "{color.surface.lighter}",
          "{color.surface.light}",
          "{color.surface.dark}",
          "{color.surface.darker}",
          "{color.surface.darkest}"
        ],
        "$description": "Responsive `surface` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to the surface color corresponding to the surface' color palette.",
        "$type": "color"
      },
      "name": "rh-color-surface",
      "attributes": {
        "category": "color",
        "type": "surface",
        "item": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "surface",
        "_"
      ]
    }
  ],
  [
    "--rh-color-surface-lightest",
    {
      "$value": "#ffffff",
      "$description": "Primary surface (light theme)",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.white}",
        "$description": "Primary surface (light theme)",
        "$type": "color"
      },
      "name": "rh-color-surface-lightest",
      "attributes": {
        "category": "color",
        "type": "surface",
        "item": "lightest",
        "hex": "ffffff",
        "rgb": {
          "r": 255,
          "g": 255,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 100,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "surface",
        "lightest"
      ]
    }
  ],
  [
    "--rh-color-surface-lighter",
    {
      "$value": "#f2f2f2",
      "$description": "Tertiary surface (light theme)",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.10}",
        "$description": "Tertiary surface (light theme)",
        "$type": "color"
      },
      "name": "rh-color-surface-lighter",
      "attributes": {
        "category": "color",
        "type": "surface",
        "item": "lighter",
        "hex": "f2f2f2",
        "rgb": {
          "r": 242,
          "g": 242,
          "b": 242,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 94.90196078431372,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.9490196078431372,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "surface",
        "lighter"
      ]
    }
  ],
  [
    "--rh-color-surface-light",
    {
      "$value": "#e0e0e0",
      "$description": "Secondary surface (light theme)",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.20}",
        "$description": "Secondary surface (light theme)",
        "$type": "color"
      },
      "name": "rh-color-surface-light",
      "attributes": {
        "category": "color",
        "type": "surface",
        "item": "light",
        "hex": "e0e0e0",
        "rgb": {
          "r": 224,
          "g": 224,
          "b": 224,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 87.84313725490196,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.8784313725490196,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "surface",
        "light"
      ]
    }
  ],
  [
    "--rh-color-surface-dark",
    {
      "$value": "#383838",
      "$description": "Tertiary surface (dark theme)",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.70}",
        "$description": "Tertiary surface (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-surface-dark",
      "attributes": {
        "category": "color",
        "type": "surface",
        "item": "dark",
        "hex": "383838",
        "rgb": {
          "r": 56,
          "g": 56,
          "b": 56,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 21.96078431372549,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.2196078431372549,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "surface",
        "dark"
      ]
    }
  ],
  [
    "--rh-color-surface-dark-alt",
    {
      "$value": "#292929",
      "$description": "Alternative tertiary surface (not available for use with context provider)",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.80}",
        "$description": "Alternative tertiary surface (not available for use with context provider)",
        "$type": "color"
      },
      "name": "rh-color-surface-dark-alt",
      "attributes": {
        "category": "color",
        "type": "surface",
        "item": "dark-alt",
        "hex": "292929",
        "rgb": {
          "r": 41,
          "g": 41,
          "b": 41,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 16.07843137254902,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.1607843137254902,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "surface",
        "dark-alt"
      ]
    }
  ],
  [
    "--rh-color-surface-darker",
    {
      "$value": "#1f1f1f",
      "$description": "Secondary surface (dark theme)",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.90}",
        "$description": "Secondary surface (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-surface-darker",
      "attributes": {
        "category": "color",
        "type": "surface",
        "item": "darker",
        "hex": "1f1f1f",
        "rgb": {
          "r": 31,
          "g": 31,
          "b": 31,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 12.156862745098039,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.12156862745098039,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "surface",
        "darker"
      ]
    }
  ],
  [
    "--rh-color-surface-darkest",
    {
      "$value": "#151515",
      "$description": "Primary surface (dark theme)",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.95}",
        "$description": "Primary surface (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-surface-darkest",
      "attributes": {
        "category": "color",
        "type": "surface",
        "item": "darkest",
        "hex": "151515",
        "rgb": {
          "r": 21,
          "g": 21,
          "b": 21,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 8.235294117647058,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.08235294117647059,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "surface",
        "darkest"
      ]
    }
  ],
  [
    "--rh-color-surface-status-danger",
    {
      "$value": "",
      "$description": "Responsive `surface-status-danger` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-surface-status-danger-on-light` on a themable container with a light color palette and `--rh-color-surface-status-danger-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.surface.status.danger.on-light}",
          "{color.surface.status.danger.on-dark}"
        ],
        "$description": "Responsive `surface-status-danger` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-surface-status-danger-on-light` on a themable container with a light color palette and `--rh-color-surface-status-danger-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-surface-status-danger",
      "attributes": {
        "category": "color",
        "type": "surface",
        "item": "status",
        "subitem": "danger",
        "state": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "surface",
        "status",
        "danger",
        "_"
      ]
    }
  ],
  [
    "--rh-color-surface-status-danger-on-light",
    {
      "$value": "#ffe3d9",
      "$description": "Danger status surface color (light theme)",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.red-orange.10}",
        "$description": "Danger status surface color (light theme)",
        "$type": "color"
      },
      "name": "rh-color-surface-status-danger-on-light",
      "attributes": {
        "category": "color",
        "type": "surface",
        "item": "status",
        "subitem": "danger",
        "state": "on-light",
        "hex": "ffe3d9",
        "rgb": {
          "r": 255,
          "g": 227,
          "b": 217,
          "a": 1
        },
        "hsl": {
          "h": 15.789473684210513,
          "s": 100,
          "l": 92.54901960784314,
          "a": 1
        },
        "hsv": {
          "h": 15.789473684210513,
          "s": 0.14901960784313728,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "surface",
        "status",
        "danger",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-surface-status-danger-on-dark",
    {
      "$value": "#ffe3d9",
      "$description": "Danger status surface color (dark theme)",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.red-orange.10}",
        "$description": "Danger status surface color (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-surface-status-danger-on-dark",
      "attributes": {
        "category": "color",
        "type": "surface",
        "item": "status",
        "subitem": "danger",
        "state": "on-dark",
        "hex": "ffe3d9",
        "rgb": {
          "r": 255,
          "g": 227,
          "b": 217,
          "a": 1
        },
        "hsl": {
          "h": 15.789473684210513,
          "s": 100,
          "l": 92.54901960784314,
          "a": 1
        },
        "hsv": {
          "h": 15.789473684210513,
          "s": 0.14901960784313728,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "surface",
        "status",
        "danger",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-surface-status-caution",
    {
      "$value": "",
      "$description": "Responsive `surface-status-caution` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-surface-status-caution-on-light` on a themable container with a light color palette and `--rh-color-surface-status-caution-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.surface.status.caution.on-light}",
          "{color.surface.status.caution.on-dark}"
        ],
        "$description": "Responsive `surface-status-caution` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-surface-status-caution-on-light` on a themable container with a light color palette and `--rh-color-surface-status-caution-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-surface-status-caution",
      "attributes": {
        "category": "color",
        "type": "surface",
        "item": "status",
        "subitem": "caution",
        "state": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "surface",
        "status",
        "caution",
        "_"
      ]
    }
  ],
  [
    "--rh-color-surface-status-caution-on-light",
    {
      "$value": "#ffe8cc",
      "$description": "Caution status surface color (light theme)",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.orange.10}",
        "$description": "Caution status surface color (light theme)",
        "$type": "color"
      },
      "name": "rh-color-surface-status-caution-on-light",
      "attributes": {
        "category": "color",
        "type": "surface",
        "item": "status",
        "subitem": "caution",
        "state": "on-light",
        "hex": "ffe8cc",
        "rgb": {
          "r": 255,
          "g": 232,
          "b": 204,
          "a": 1
        },
        "hsl": {
          "h": 32.941176470588225,
          "s": 100,
          "l": 90,
          "a": 1
        },
        "hsv": {
          "h": 32.941176470588225,
          "s": 0.19999999999999996,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "surface",
        "status",
        "caution",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-surface-status-caution-on-dark",
    {
      "$value": "#ffe8cc",
      "$description": "Caution status surface color (dark theme)",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.orange.10}",
        "$description": "Caution status surface color (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-surface-status-caution-on-dark",
      "attributes": {
        "category": "color",
        "type": "surface",
        "item": "status",
        "subitem": "caution",
        "state": "on-dark",
        "hex": "ffe8cc",
        "rgb": {
          "r": 255,
          "g": 232,
          "b": 204,
          "a": 1
        },
        "hsl": {
          "h": 32.941176470588225,
          "s": 100,
          "l": 90,
          "a": 1
        },
        "hsv": {
          "h": 32.941176470588225,
          "s": 0.19999999999999996,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "surface",
        "status",
        "caution",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-surface-status-warning",
    {
      "$value": "",
      "$description": "Responsive `surface-status-warning` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-surface-status-warning-on-light` on a themable container with a light color palette and `--rh-color-surface-status-warning-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.surface.status.warning.on-light}",
          "{color.surface.status.warning.on-dark}"
        ],
        "$description": "Responsive `surface-status-warning` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-surface-status-warning-on-light` on a themable container with a light color palette and `--rh-color-surface-status-warning-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-surface-status-warning",
      "attributes": {
        "category": "color",
        "type": "surface",
        "item": "status",
        "subitem": "warning",
        "state": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "surface",
        "status",
        "warning",
        "_"
      ]
    }
  ],
  [
    "--rh-color-surface-status-warning-on-light",
    {
      "$value": "#fff4cc",
      "$description": "Warning status surface color (light theme)",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.yellow.10}",
        "$description": "Warning status surface color (light theme)",
        "$type": "color"
      },
      "name": "rh-color-surface-status-warning-on-light",
      "attributes": {
        "category": "color",
        "type": "surface",
        "item": "status",
        "subitem": "warning",
        "state": "on-light",
        "hex": "fff4cc",
        "rgb": {
          "r": 255,
          "g": 244,
          "b": 204,
          "a": 1
        },
        "hsl": {
          "h": 47.058823529411775,
          "s": 100,
          "l": 90,
          "a": 1
        },
        "hsv": {
          "h": 47.058823529411775,
          "s": 0.19999999999999996,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "surface",
        "status",
        "warning",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-surface-status-warning-on-dark",
    {
      "$value": "#73480b",
      "$description": "Warning status surface color (dark theme)",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.yellow.70}",
        "$description": "Warning status surface color (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-surface-status-warning-on-dark",
      "attributes": {
        "category": "color",
        "type": "surface",
        "item": "status",
        "subitem": "warning",
        "state": "on-dark",
        "hex": "73480b",
        "rgb": {
          "r": 115,
          "g": 72,
          "b": 11,
          "a": 1
        },
        "hsl": {
          "h": 35.192307692307686,
          "s": 82.53968253968253,
          "l": 24.705882352941178,
          "a": 1
        },
        "hsv": {
          "h": 35.192307692307686,
          "s": 0.9043478260869565,
          "v": 0.45098039215686275,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "surface",
        "status",
        "warning",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-surface-status-default",
    {
      "$value": "",
      "$description": "Responsive `surface-status-default` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-surface-status-default-on-light` on a themable container with a light color palette and `--rh-color-surface-status-default-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.surface.status.default.on-light}",
          "{color.surface.status.default.on-dark}"
        ],
        "$description": "Responsive `surface-status-default` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-surface-status-default-on-light` on a themable container with a light color palette and `--rh-color-surface-status-default-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-surface-status-default",
      "attributes": {
        "category": "color",
        "type": "surface",
        "item": "status",
        "subitem": "default",
        "state": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "surface",
        "status",
        "default",
        "_"
      ]
    }
  ],
  [
    "--rh-color-surface-status-default-on-light",
    {
      "$value": "#f2f2f2",
      "$description": "Default status surface color (light theme)",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.surface.status.neutral.on-light}",
        "$description": "Default status surface color (light theme)",
        "$type": "color"
      },
      "name": "rh-color-surface-status-default-on-light",
      "attributes": {
        "category": "color",
        "type": "surface",
        "item": "status",
        "subitem": "default",
        "state": "on-light",
        "hex": "f2f2f2",
        "rgb": {
          "r": 242,
          "g": 242,
          "b": 242,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 94.90196078431372,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.9490196078431372,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "surface",
        "status",
        "default",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-surface-status-default-on-dark",
    {
      "$value": "#f2f2f2",
      "$description": "Default status surface color (dark theme)",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.surface.status.neutral.on-light}",
        "$description": "Default status surface color (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-surface-status-default-on-dark",
      "attributes": {
        "category": "color",
        "type": "surface",
        "item": "status",
        "subitem": "default",
        "state": "on-dark",
        "hex": "f2f2f2",
        "rgb": {
          "r": 242,
          "g": 242,
          "b": 242,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 94.90196078431372,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.9490196078431372,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "surface",
        "status",
        "default",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-surface-status-neutral",
    {
      "$value": "",
      "$description": "Responsive `surface-status-neutral` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-surface-status-neutral-on-light` on a themable container with a light color palette and `--rh-color-surface-status-neutral-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.surface.status.neutral.on-light}",
          "{color.surface.status.neutral.on-dark}"
        ],
        "$description": "Responsive `surface-status-neutral` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-surface-status-neutral-on-light` on a themable container with a light color palette and `--rh-color-surface-status-neutral-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-surface-status-neutral",
      "attributes": {
        "category": "color",
        "type": "surface",
        "item": "status",
        "subitem": "neutral",
        "state": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "surface",
        "status",
        "neutral",
        "_"
      ]
    }
  ],
  [
    "--rh-color-surface-status-neutral-on-light",
    {
      "$value": "#f2f2f2",
      "$description": "Neutral status surface color (light theme)",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.10}",
        "$description": "Neutral status surface color (light theme)",
        "$type": "color"
      },
      "name": "rh-color-surface-status-neutral-on-light",
      "attributes": {
        "category": "color",
        "type": "surface",
        "item": "status",
        "subitem": "neutral",
        "state": "on-light",
        "hex": "f2f2f2",
        "rgb": {
          "r": 242,
          "g": 242,
          "b": 242,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 94.90196078431372,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.9490196078431372,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "surface",
        "status",
        "neutral",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-surface-status-neutral-on-dark",
    {
      "$value": "#f2f2f2",
      "$description": "Neutral status surface color (dark theme)",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.10}",
        "$description": "Neutral status surface color (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-surface-status-neutral-on-dark",
      "attributes": {
        "category": "color",
        "type": "surface",
        "item": "status",
        "subitem": "neutral",
        "state": "on-dark",
        "hex": "f2f2f2",
        "rgb": {
          "r": 242,
          "g": 242,
          "b": 242,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 94.90196078431372,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.9490196078431372,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "surface",
        "status",
        "neutral",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-surface-status-info",
    {
      "$value": "",
      "$description": "Responsive `surface-status-info` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-surface-status-info-on-light` on a themable container with a light color palette and `--rh-color-surface-status-info-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.surface.status.info.on-light}",
          "{color.surface.status.info.on-dark}"
        ],
        "$description": "Responsive `surface-status-info` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-surface-status-info-on-light` on a themable container with a light color palette and `--rh-color-surface-status-info-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-surface-status-info",
      "attributes": {
        "category": "color",
        "type": "surface",
        "item": "status",
        "subitem": "info",
        "state": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "surface",
        "status",
        "info",
        "_"
      ]
    }
  ],
  [
    "--rh-color-surface-status-info-on-light",
    {
      "$value": "#ece6ff",
      "$description": "Info status surface color (light theme)",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.purple.10}",
        "$description": "Info status surface color (light theme)",
        "$type": "color"
      },
      "name": "rh-color-surface-status-info-on-light",
      "attributes": {
        "category": "color",
        "type": "surface",
        "item": "status",
        "subitem": "info",
        "state": "on-light",
        "hex": "ece6ff",
        "rgb": {
          "r": 236,
          "g": 230,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 254.4,
          "s": 100,
          "l": 95.09803921568627,
          "a": 1
        },
        "hsv": {
          "h": 254.4,
          "s": 0.0980392156862745,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "surface",
        "status",
        "info",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-surface-status-info-on-dark",
    {
      "$value": "#ece6ff",
      "$description": "Info status surface color (dark theme)",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.purple.10}",
        "$description": "Info status surface color (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-surface-status-info-on-dark",
      "attributes": {
        "category": "color",
        "type": "surface",
        "item": "status",
        "subitem": "info",
        "state": "on-dark",
        "hex": "ece6ff",
        "rgb": {
          "r": 236,
          "g": 230,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 254.4,
          "s": 100,
          "l": 95.09803921568627,
          "a": 1
        },
        "hsv": {
          "h": 254.4,
          "s": 0.0980392156862745,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "surface",
        "status",
        "info",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-surface-status-success",
    {
      "$value": "",
      "$description": "Responsive `surface-status-success` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-surface-status-success-on-light` on a themable container with a light color palette and `--rh-color-surface-status-success-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.surface.status.success.on-light}",
          "{color.surface.status.success.on-dark}"
        ],
        "$description": "Responsive `surface-status-success` color value. Typically read-only - use a themable container, e.g. `<rh-surface>`. Resolves to `--rh-color-surface-status-success-on-light` on a themable container with a light color palette and `--rh-color-surface-status-success-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-surface-status-success",
      "attributes": {
        "category": "color",
        "type": "surface",
        "item": "status",
        "subitem": "success",
        "state": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "surface",
        "status",
        "success",
        "_"
      ]
    }
  ],
  [
    "--rh-color-surface-status-success-on-light",
    {
      "$value": "#e9f7df",
      "$description": "Success status surface color (light theme)",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.green.10}",
        "$description": "Success status surface color (light theme)",
        "$type": "color"
      },
      "name": "rh-color-surface-status-success-on-light",
      "attributes": {
        "category": "color",
        "type": "surface",
        "item": "status",
        "subitem": "success",
        "state": "on-light",
        "hex": "e9f7df",
        "rgb": {
          "r": 233,
          "g": 247,
          "b": 223,
          "a": 1
        },
        "hsl": {
          "h": 95.00000000000003,
          "s": 60.00000000000004,
          "l": 92.15686274509804,
          "a": 1
        },
        "hsv": {
          "h": 95.00000000000003,
          "s": 0.09716599190283401,
          "v": 0.9686274509803922,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "surface",
        "status",
        "success",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-surface-status-success-on-dark",
    {
      "$value": "#e9f7df",
      "$description": "Success status surface color (dark theme)",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.green.10}",
        "$description": "Success status surface color (dark theme)",
        "$type": "color"
      },
      "name": "rh-color-surface-status-success-on-dark",
      "attributes": {
        "category": "color",
        "type": "surface",
        "item": "status",
        "subitem": "success",
        "state": "on-dark",
        "hex": "e9f7df",
        "rgb": {
          "r": 233,
          "g": 247,
          "b": 223,
          "a": 1
        },
        "hsl": {
          "h": 95.00000000000003,
          "s": 60.00000000000004,
          "l": 92.15686274509804,
          "a": 1
        },
        "hsv": {
          "h": 95.00000000000003,
          "s": 0.09716599190283401,
          "v": 0.9686274509803922,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "surface",
        "status",
        "success",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-text-primary",
    {
      "$value": "",
      "$description": "Responsive `text-primary` color value. Typically read only - use a themable container e.g. `<rh-surface>` Resolves to `--rh-color-text-primary-on-light` on a themable container with a light color palette and `--rh-color-text-primary-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/text.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.text.primary.on-light}",
          "{color.text.primary.on-dark}"
        ],
        "$description": "Responsive `text-primary` color value. Typically read only - use a themable container e.g. `<rh-surface>` Resolves to `--rh-color-text-primary-on-light` on a themable container with a light color palette and `--rh-color-text-primary-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-text-primary",
      "attributes": {
        "category": "color",
        "type": "text",
        "item": "primary",
        "subitem": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "text",
        "primary",
        "_"
      ]
    }
  ],
  [
    "--rh-color-text-primary-on-light",
    {
      "$value": "#151515",
      "$description": "Primary text color for light theme",
      "attributes": {
        "category": "typography",
        "type": "color",
        "item": "primary",
        "subitem": "on-light",
        "hex": "151515",
        "rgb": {
          "r": 21,
          "g": 21,
          "b": 21,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 8.235294117647058,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.08235294117647059,
          "a": 1
        },
        "isLight": false
      },
      "filePath": "tokens/color/text.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.95}",
        "$description": "Primary text color for light theme",
        "attributes": {
          "category": "typography",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-text-primary-on-light",
      "path": [
        "color",
        "text",
        "primary",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-text-primary-on-dark",
    {
      "$value": "#ffffff",
      "$description": "Primary text color for dark theme",
      "attributes": {
        "category": "typography",
        "type": "color",
        "item": "primary",
        "subitem": "on-dark",
        "hex": "ffffff",
        "rgb": {
          "r": 255,
          "g": 255,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 100,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "filePath": "tokens/color/text.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.white}",
        "$description": "Primary text color for dark theme",
        "attributes": {
          "category": "typography",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-text-primary-on-dark",
      "path": [
        "color",
        "text",
        "primary",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-text-secondary",
    {
      "$value": "",
      "$description": "Responsive `text-secondary` color value. Typically read only - use a themable container e.g. `<rh-surface>` Resolves to `--rh-color-text-secondary-on-light` on a themable container with a light color palette and `--rh-color-text-secondary-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/text.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.text.secondary.on-light}",
          "{color.text.secondary.on-dark}"
        ],
        "$description": "Responsive `text-secondary` color value. Typically read only - use a themable container e.g. `<rh-surface>` Resolves to `--rh-color-text-secondary-on-light` on a themable container with a light color palette and `--rh-color-text-secondary-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-text-secondary",
      "attributes": {
        "category": "color",
        "type": "text",
        "item": "secondary",
        "subitem": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "text",
        "secondary",
        "_"
      ]
    }
  ],
  [
    "--rh-color-text-secondary-on-light",
    {
      "$value": "#4d4d4d",
      "$description": "Secondary text color for light theme",
      "attributes": {
        "category": "typography",
        "type": "color",
        "item": "secondary",
        "subitem": "on-light",
        "hex": "4d4d4d",
        "rgb": {
          "r": 77,
          "g": 77,
          "b": 77,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 30.19607843137255,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.30196078431372547,
          "a": 1
        },
        "isLight": false
      },
      "filePath": "tokens/color/text.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.60}",
        "$description": "Secondary text color for light theme",
        "attributes": {
          "category": "typography",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-text-secondary-on-light",
      "path": [
        "color",
        "text",
        "secondary",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-text-secondary-on-dark",
    {
      "$value": "#c7c7c7",
      "$description": "Secondary text color for dark theme",
      "attributes": {
        "category": "typography",
        "type": "color",
        "item": "secondary",
        "subitem": "on-dark",
        "hex": "c7c7c7",
        "rgb": {
          "r": 199,
          "g": 199,
          "b": 199,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 78.03921568627452,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0.7803921568627451,
          "a": 1
        },
        "isLight": true
      },
      "filePath": "tokens/color/text.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.gray.30}",
        "$description": "Secondary text color for dark theme",
        "attributes": {
          "category": "typography",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-text-secondary-on-dark",
      "path": [
        "color",
        "text",
        "secondary",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-text-brand",
    {
      "$value": "",
      "$description": "Responsive `text-brand` color value. Typically read only - use a themable container e.g. `<rh-surface>` Resolves to `--rh-color-text-brand-on-light` on a themable container with a light color palette and `--rh-color-text-brand-on-dark` on a themable container with a dark color palette.",
      "filePath": "tokens/color/text.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": [
          "{color.text.brand.on-light}",
          "{color.text.brand.on-dark}"
        ],
        "$description": "Responsive `text-brand` color value. Typically read only - use a themable container e.g. `<rh-surface>` Resolves to `--rh-color-text-brand-on-light` on a themable container with a light color palette and `--rh-color-text-brand-on-dark` on a themable container with a dark color palette.",
        "$type": "color"
      },
      "name": "rh-color-text-brand",
      "attributes": {
        "category": "color",
        "type": "text",
        "item": "brand",
        "subitem": "_",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "text",
        "brand",
        "_"
      ]
    }
  ],
  [
    "--rh-color-text-brand-on-light",
    {
      "$value": "#ee0000",
      "$description": "Brand text color for light theme",
      "attributes": {
        "category": "typography",
        "type": "color",
        "item": "brand",
        "subitem": "on-light",
        "hex": "ee0000",
        "rgb": {
          "r": 238,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 100,
          "l": 46.666666666666664,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 1,
          "v": 0.9333333333333333,
          "a": 1
        },
        "isLight": false
      },
      "filePath": "tokens/color/text.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.brand.red.on-light}",
        "$description": "Brand text color for light theme",
        "attributes": {
          "category": "typography",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-text-brand-on-light",
      "path": [
        "color",
        "text",
        "brand",
        "on-light"
      ]
    }
  ],
  [
    "--rh-color-text-brand-on-dark",
    {
      "$value": "#ee0000",
      "$description": "Brand text color for dark theme",
      "attributes": {
        "category": "typography",
        "type": "color",
        "item": "brand",
        "subitem": "on-dark",
        "hex": "ee0000",
        "rgb": {
          "r": 238,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 100,
          "l": 46.666666666666664,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 1,
          "v": 0.9333333333333333,
          "a": 1
        },
        "isLight": false
      },
      "filePath": "tokens/color/text.yaml",
      "isSource": true,
      "$type": "color",
      "original": {
        "$value": "{color.brand.red.on-dark}",
        "$description": "Brand text color for dark theme",
        "attributes": {
          "category": "typography",
          "type": "color"
        },
        "$type": "color"
      },
      "name": "rh-color-text-brand-on-dark",
      "path": [
        "color",
        "text",
        "brand",
        "on-dark"
      ]
    }
  ],
  [
    "--rh-color-white-hsl",
    {
      "$value": "0 0% 100%",
      "$type": "color",
      "original": {
        "$value": "{color.white}",
        "$type": "color"
      },
      "name": "rh-color-white-hsl",
      "attributes": {
        "category": "color",
        "type": "white-hsl",
        "hex": "ffffff",
        "rgb": {
          "r": 255,
          "g": 255,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 100,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "white-hsl"
      ]
    }
  ],
  [
    "--rh-color-white-rgb",
    {
      "$value": "255 255 255",
      "$type": "color",
      "original": {
        "$value": "{color.white}",
        "$type": "color"
      },
      "name": "rh-color-white-rgb",
      "attributes": {
        "category": "color",
        "type": "white-rgb",
        "hex": "ffffff",
        "rgb": {
          "r": 255,
          "g": 255,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 100,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "white-rgb"
      ]
    }
  ],
  [
    "--rh-color-black-hsl",
    {
      "$value": "0 0% 0%",
      "$type": "color",
      "original": {
        "$value": "{color.black}",
        "$type": "color"
      },
      "name": "rh-color-black-hsl",
      "attributes": {
        "category": "color",
        "type": "black-hsl",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "black-hsl"
      ]
    }
  ],
  [
    "--rh-color-black-rgb",
    {
      "$value": "0 0 0",
      "$type": "color",
      "original": {
        "$value": "{color.black}",
        "$type": "color"
      },
      "name": "rh-color-black-rgb",
      "attributes": {
        "category": "color",
        "type": "black-rgb",
        "hex": "000000",
        "rgb": {
          "r": 0,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 0,
          "l": 0,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0,
          "v": 0,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "black-rgb"
      ]
    }
  ],
  [
    "--rh-font-family-heading",
    {
      "$description": "Heading font family",
      "$extensions": {
        "com.redhat.ux": {
          "example": "Display"
        }
      },
      "$value": "RedHatDisplay, 'Red Hat Display', Helvetica, Arial, sans-serif",
      "attributes": {
        "category": "typography",
        "type": "font-family",
        "item": "heading"
      },
      "filePath": "tokens/font/family.yml",
      "isSource": true,
      "$type": "fontFamily",
      "original": {
        "$description": "Heading font family",
        "$extensions": {
          "com.redhat.ux": {
            "example": "Display"
          }
        },
        "$value": [
          "RedHatDisplay",
          "Red Hat Display",
          "Helvetica",
          "Arial",
          "sans-serif"
        ],
        "attributes": {
          "category": "typography",
          "type": "font-family"
        },
        "$type": "fontFamily"
      },
      "name": "rh-font-family-heading",
      "path": [
        "font",
        "family",
        "heading"
      ]
    }
  ],
  [
    "--rh-font-family-body-text",
    {
      "$description": "Body text font family",
      "$extensions": {
        "com.redhat.ux": {
          "example": "Body text"
        }
      },
      "$value": "RedHatText, 'Red Hat Text', Helvetica, Arial, sans-serif",
      "attributes": {
        "category": "typography",
        "type": "font-family",
        "item": "body-text"
      },
      "filePath": "tokens/font/family.yml",
      "isSource": true,
      "$type": "fontFamily",
      "original": {
        "$description": "Body text font family",
        "$extensions": {
          "com.redhat.ux": {
            "example": "Body text"
          }
        },
        "$value": [
          "RedHatText",
          "Red Hat Text",
          "Helvetica",
          "Arial",
          "sans-serif"
        ],
        "attributes": {
          "category": "typography",
          "type": "font-family"
        },
        "$type": "fontFamily"
      },
      "name": "rh-font-family-body-text",
      "path": [
        "font",
        "family",
        "body-text"
      ]
    }
  ],
  [
    "--rh-font-family-code",
    {
      "$description": "Code font family",
      "$extensions": {
        "com.redhat.ux": {
          "example": "Code"
        }
      },
      "$value": "RedHatMono, 'Red Hat Mono', 'Courier New', Courier, monospace",
      "attributes": {
        "category": "typography",
        "type": "font-family",
        "item": "code"
      },
      "filePath": "tokens/font/family.yml",
      "isSource": true,
      "$type": "fontFamily",
      "original": {
        "$description": "Code font family",
        "$extensions": {
          "com.redhat.ux": {
            "example": "Code"
          }
        },
        "$value": [
          "RedHatMono",
          "Red Hat Mono",
          "Courier New",
          "Courier",
          "monospace"
        ],
        "attributes": {
          "category": "typography",
          "type": "font-family"
        },
        "$type": "fontFamily"
      },
      "name": "rh-font-family-code",
      "path": [
        "font",
        "family",
        "code"
      ]
    }
  ],
  [
    "--rh-font-family-lang-ar",
    {
      "$description": "Arabic font family",
      "$extensions": {
        "com.redhat.ux": {
          "example": "Arabic"
        }
      },
      "$value": "'Noto Sans Arabic'",
      "attributes": {
        "category": "typography",
        "type": "font-family",
        "item": "lang-ar"
      },
      "filePath": "tokens/font/family.yml",
      "isSource": true,
      "$type": "fontFamily",
      "original": {
        "$description": "Arabic font family",
        "$extensions": {
          "com.redhat.ux": {
            "example": "Arabic"
          }
        },
        "$value": [
          "Noto Sans Arabic"
        ],
        "attributes": {
          "category": "typography",
          "type": "font-family"
        },
        "$type": "fontFamily"
      },
      "name": "rh-font-family-lang-ar",
      "path": [
        "font",
        "family",
        "lang-ar"
      ]
    }
  ],
  [
    "--rh-font-family-lang-he",
    {
      "$description": "Hebrew font family",
      "$extensions": {
        "com.redhat.ux": {
          "example": "Hebrew"
        }
      },
      "$value": "'Noto Sans Hebrew'",
      "attributes": {
        "category": "typography",
        "type": "font-family",
        "item": "lang-he"
      },
      "filePath": "tokens/font/family.yml",
      "isSource": true,
      "$type": "fontFamily",
      "original": {
        "$description": "Hebrew font family",
        "$extensions": {
          "com.redhat.ux": {
            "example": "Hebrew"
          }
        },
        "$value": [
          "Noto Sans Hebrew"
        ],
        "attributes": {
          "category": "typography",
          "type": "font-family"
        },
        "$type": "fontFamily"
      },
      "name": "rh-font-family-lang-he",
      "path": [
        "font",
        "family",
        "lang-he"
      ]
    }
  ],
  [
    "--rh-font-family-lang-ja",
    {
      "$description": "Japanese font family",
      "$extensions": {
        "com.redhat.ux": {
          "example": "Japanese"
        }
      },
      "$value": "'Noto Sans JP'",
      "attributes": {
        "category": "typography",
        "type": "font-family",
        "item": "lang-ja"
      },
      "filePath": "tokens/font/family.yml",
      "isSource": true,
      "$type": "fontFamily",
      "original": {
        "$description": "Japanese font family",
        "$extensions": {
          "com.redhat.ux": {
            "example": "Japanese"
          }
        },
        "$value": [
          "Noto Sans JP"
        ],
        "attributes": {
          "category": "typography",
          "type": "font-family"
        },
        "$type": "fontFamily"
      },
      "name": "rh-font-family-lang-ja",
      "path": [
        "font",
        "family",
        "lang-ja"
      ]
    }
  ],
  [
    "--rh-font-family-lang-ko",
    {
      "$description": "Korean font family",
      "$extensions": {
        "com.redhat.ux": {
          "example": "Korean"
        }
      },
      "$value": "'Noto Sans KR'",
      "attributes": {
        "category": "typography",
        "type": "font-family",
        "item": "lang-ko"
      },
      "filePath": "tokens/font/family.yml",
      "isSource": true,
      "$type": "fontFamily",
      "original": {
        "$description": "Korean font family",
        "$extensions": {
          "com.redhat.ux": {
            "example": "Korean"
          }
        },
        "$value": [
          "Noto Sans KR"
        ],
        "attributes": {
          "category": "typography",
          "type": "font-family"
        },
        "$type": "fontFamily"
      },
      "name": "rh-font-family-lang-ko",
      "path": [
        "font",
        "family",
        "lang-ko"
      ]
    }
  ],
  [
    "--rh-font-family-lang-hi",
    {
      "$description": "Malayalam font family",
      "$extensions": {
        "com.redhat.ux": {
          "example": "Malayalam"
        }
      },
      "$value": "'Noto Sans Malayalam'",
      "attributes": {
        "category": "typography",
        "type": "font-family",
        "item": "lang-hi"
      },
      "filePath": "tokens/font/family.yml",
      "isSource": true,
      "$type": "fontFamily",
      "original": {
        "$description": "Malayalam font family",
        "$extensions": {
          "com.redhat.ux": {
            "example": "Malayalam"
          }
        },
        "$value": [
          "Noto Sans Malayalam"
        ],
        "attributes": {
          "category": "typography",
          "type": "font-family"
        },
        "$type": "fontFamily"
      },
      "name": "rh-font-family-lang-hi",
      "path": [
        "font",
        "family",
        "lang-hi"
      ]
    }
  ],
  [
    "--rh-font-family-lang-th",
    {
      "$description": "Thai font family",
      "$extensions": {
        "com.redhat.ux": {
          "example": "Thai"
        }
      },
      "$value": "'Noto Sans Thai'",
      "attributes": {
        "category": "typography",
        "type": "font-family",
        "item": "lang-th"
      },
      "filePath": "tokens/font/family.yml",
      "isSource": true,
      "$type": "fontFamily",
      "original": {
        "$description": "Thai font family",
        "$extensions": {
          "com.redhat.ux": {
            "example": "Thai"
          }
        },
        "$value": [
          "Noto Sans Thai"
        ],
        "attributes": {
          "category": "typography",
          "type": "font-family"
        },
        "$type": "fontFamily"
      },
      "name": "rh-font-family-lang-th",
      "path": [
        "font",
        "family",
        "lang-th"
      ]
    }
  ],
  [
    "--rh-font-family-lang-zh-cn",
    {
      "$description": "Simplified Chinese font family",
      "$extensions": {
        "com.redhat.ux": {
          "example": "Simplified Chinese"
        }
      },
      "$value": "'Noto Sans SC'",
      "attributes": {
        "category": "typography",
        "type": "font-family",
        "item": "lang-zh-cn"
      },
      "filePath": "tokens/font/family.yml",
      "isSource": true,
      "$type": "fontFamily",
      "original": {
        "$description": "Simplified Chinese font family",
        "$extensions": {
          "com.redhat.ux": {
            "example": "Simplified Chinese"
          }
        },
        "$value": [
          "Noto Sans SC"
        ],
        "attributes": {
          "category": "typography",
          "type": "font-family"
        },
        "$type": "fontFamily"
      },
      "name": "rh-font-family-lang-zh-cn",
      "path": [
        "font",
        "family",
        "lang-zh-cn"
      ]
    }
  ],
  [
    "--rh-font-family-lang-zh-hk",
    {
      "$description": "Traditional Chinese font family",
      "$extensions": {
        "com.redhat.ux": {
          "example": "Traditional Chinese"
        }
      },
      "$value": "'Noto Sans TC'",
      "attributes": {
        "category": "typography",
        "type": "font-family",
        "item": "lang-zh-hk"
      },
      "filePath": "tokens/font/family.yml",
      "isSource": true,
      "$type": "fontFamily",
      "original": {
        "$description": "Traditional Chinese font family",
        "$extensions": {
          "com.redhat.ux": {
            "example": "Traditional Chinese"
          }
        },
        "$value": [
          "Noto Sans TC"
        ],
        "attributes": {
          "category": "typography",
          "type": "font-family"
        },
        "$type": "fontFamily"
      },
      "name": "rh-font-family-lang-zh-hk",
      "path": [
        "font",
        "family",
        "lang-zh-hk"
      ]
    }
  ],
  [
    "--rh-font-size-body-text-xs",
    {
      "$value": "0.75rem",
      "$description": "12px font size",
      "attributes": {
        "category": "typography",
        "type": "font-size",
        "item": "body-text",
        "subitem": "xs"
      },
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "0.75rem",
        "$description": "12px font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "$type": "dimension"
      },
      "name": "rh-font-size-body-text-xs",
      "path": [
        "font",
        "size",
        "body-text",
        "xs"
      ]
    }
  ],
  [
    "--rh-font-size-body-text-sm",
    {
      "$value": "0.875rem",
      "$description": "14px font size",
      "attributes": {
        "category": "typography",
        "type": "font-size",
        "item": "body-text",
        "subitem": "sm"
      },
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "0.875rem",
        "$description": "14px font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "$type": "dimension"
      },
      "name": "rh-font-size-body-text-sm",
      "path": [
        "font",
        "size",
        "body-text",
        "sm"
      ]
    }
  ],
  [
    "--rh-font-size-body-text-md",
    {
      "$value": "1rem",
      "$description": "16px font size",
      "attributes": {
        "category": "typography",
        "type": "font-size",
        "item": "body-text",
        "subitem": "md"
      },
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "1rem",
        "$description": "16px font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "$type": "dimension"
      },
      "name": "rh-font-size-body-text-md",
      "path": [
        "font",
        "size",
        "body-text",
        "md"
      ]
    }
  ],
  [
    "--rh-font-size-body-text-lg",
    {
      "$value": "1.125rem",
      "$description": "18px font size",
      "attributes": {
        "category": "typography",
        "type": "font-size",
        "item": "body-text",
        "subitem": "lg"
      },
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "1.125rem",
        "$description": "18px font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "$type": "dimension"
      },
      "name": "rh-font-size-body-text-lg",
      "path": [
        "font",
        "size",
        "body-text",
        "lg"
      ]
    }
  ],
  [
    "--rh-font-size-body-text-xl",
    {
      "$value": "1.25rem",
      "$description": "20px font size",
      "attributes": {
        "category": "typography",
        "type": "font-size",
        "item": "body-text",
        "subitem": "xl"
      },
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "1.25rem",
        "$description": "20px font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "$type": "dimension"
      },
      "name": "rh-font-size-body-text-xl",
      "path": [
        "font",
        "size",
        "body-text",
        "xl"
      ]
    }
  ],
  [
    "--rh-font-size-body-text-2xl",
    {
      "$value": "1.5rem",
      "$description": "24px font size",
      "attributes": {
        "category": "typography",
        "type": "font-size",
        "item": "body-text",
        "subitem": "2xl"
      },
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "1.5rem",
        "$description": "24px font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "$type": "dimension"
      },
      "name": "rh-font-size-body-text-2xl",
      "path": [
        "font",
        "size",
        "body-text",
        "2xl"
      ]
    }
  ],
  [
    "--rh-font-size-code-xs",
    {
      "$value": "0.75rem",
      "$description": "12px font size",
      "attributes": {
        "category": "typography",
        "type": "font-size",
        "item": "code",
        "subitem": "xs"
      },
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "{font.size.body-text.xs}",
        "$description": "12px font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "$type": "dimension"
      },
      "name": "rh-font-size-code-xs",
      "path": [
        "font",
        "size",
        "code",
        "xs"
      ]
    }
  ],
  [
    "--rh-font-size-code-sm",
    {
      "$value": "0.875rem",
      "$description": "14px font size",
      "attributes": {
        "category": "typography",
        "type": "font-size",
        "item": "code",
        "subitem": "sm"
      },
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "{font.size.body-text.sm}",
        "$description": "14px font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "$type": "dimension"
      },
      "name": "rh-font-size-code-sm",
      "path": [
        "font",
        "size",
        "code",
        "sm"
      ]
    }
  ],
  [
    "--rh-font-size-code-md",
    {
      "$value": "1rem",
      "$description": "16px font size",
      "attributes": {
        "category": "typography",
        "type": "font-size",
        "item": "code",
        "subitem": "md"
      },
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "{font.size.body-text.md}",
        "$description": "16px font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "$type": "dimension"
      },
      "name": "rh-font-size-code-md",
      "path": [
        "font",
        "size",
        "code",
        "md"
      ]
    }
  ],
  [
    "--rh-font-size-code-lg",
    {
      "$value": "1.125rem",
      "$description": "18px font size",
      "attributes": {
        "category": "typography",
        "type": "font-size",
        "item": "code",
        "subitem": "lg"
      },
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "{font.size.body-text.lg}",
        "$description": "18px font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "$type": "dimension"
      },
      "name": "rh-font-size-code-lg",
      "path": [
        "font",
        "size",
        "code",
        "lg"
      ]
    }
  ],
  [
    "--rh-font-size-code-xl",
    {
      "$value": "1.25rem",
      "$description": "20px font size",
      "attributes": {
        "category": "typography",
        "type": "font-size",
        "item": "code",
        "subitem": "xl"
      },
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "{font.size.body-text.xl}",
        "$description": "20px font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "$type": "dimension"
      },
      "name": "rh-font-size-code-xl",
      "path": [
        "font",
        "size",
        "code",
        "xl"
      ]
    }
  ],
  [
    "--rh-font-size-code-2xl",
    {
      "$value": "1.5rem",
      "$description": "24px font size",
      "attributes": {
        "category": "typography",
        "type": "font-size",
        "item": "code",
        "subitem": "2xl"
      },
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "{font.size.body-text.2xl}",
        "$description": "24px font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "$type": "dimension"
      },
      "name": "rh-font-size-code-2xl",
      "path": [
        "font",
        "size",
        "code",
        "2xl"
      ]
    }
  ],
  [
    "--rh-font-size-heading-xs",
    {
      "$value": "1.25rem",
      "$description": "h6 heading font size",
      "attributes": {
        "category": "typography",
        "type": "font-size",
        "item": "heading",
        "subitem": "xs"
      },
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "1.25rem",
        "$description": "h6 heading font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "$type": "dimension"
      },
      "name": "rh-font-size-heading-xs",
      "path": [
        "font",
        "size",
        "heading",
        "xs"
      ]
    }
  ],
  [
    "--rh-font-size-heading-sm",
    {
      "$value": "1.5rem",
      "$description": "h5 heading font size",
      "attributes": {
        "category": "typography",
        "type": "font-size",
        "item": "heading",
        "subitem": "sm"
      },
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "1.5rem",
        "$description": "h5 heading font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "$type": "dimension"
      },
      "name": "rh-font-size-heading-sm",
      "path": [
        "font",
        "size",
        "heading",
        "sm"
      ]
    }
  ],
  [
    "--rh-font-size-heading-md",
    {
      "$value": "1.75rem",
      "$description": "h4 heading font size",
      "attributes": {
        "category": "typography",
        "type": "font-size",
        "item": "heading",
        "subitem": "md"
      },
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "1.75rem",
        "$description": "h4 heading font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "$type": "dimension"
      },
      "name": "rh-font-size-heading-md",
      "path": [
        "font",
        "size",
        "heading",
        "md"
      ]
    }
  ],
  [
    "--rh-font-size-heading-lg",
    {
      "$value": "2.25rem",
      "$description": "h3 heading font size",
      "attributes": {
        "category": "typography",
        "type": "font-size",
        "item": "heading",
        "subitem": "lg"
      },
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "2.25rem",
        "$description": "h3 heading font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "$type": "dimension"
      },
      "name": "rh-font-size-heading-lg",
      "path": [
        "font",
        "size",
        "heading",
        "lg"
      ]
    }
  ],
  [
    "--rh-font-size-heading-xl",
    {
      "$value": "2.5rem",
      "$description": "h2 heading font size",
      "attributes": {
        "category": "typography",
        "type": "font-size",
        "item": "heading",
        "subitem": "xl"
      },
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "2.5rem",
        "$description": "h2 heading font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "$type": "dimension"
      },
      "name": "rh-font-size-heading-xl",
      "path": [
        "font",
        "size",
        "heading",
        "xl"
      ]
    }
  ],
  [
    "--rh-font-size-heading-2xl",
    {
      "$value": "3rem",
      "$description": "h1 heading font size",
      "attributes": {
        "category": "typography",
        "type": "font-size",
        "item": "heading",
        "subitem": "2xl"
      },
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "3rem",
        "$description": "h1 heading font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "$type": "dimension"
      },
      "name": "rh-font-size-heading-2xl",
      "path": [
        "font",
        "size",
        "heading",
        "2xl"
      ]
    }
  ],
  [
    "--rh-font-weight-body-text-regular",
    {
      "$description": "Regular font weight",
      "$value": 400,
      "attributes": {
        "category": "typography",
        "type": "weight",
        "item": "body-text",
        "subitem": "regular"
      },
      "filePath": "tokens/font/weight.yml",
      "isSource": true,
      "$type": "fontWeight",
      "original": {
        "$description": "Regular font weight",
        "$value": 400,
        "attributes": {
          "category": "typography"
        },
        "$type": "fontWeight"
      },
      "name": "rh-font-weight-body-text-regular",
      "path": [
        "font",
        "weight",
        "body-text",
        "regular"
      ]
    }
  ],
  [
    "--rh-font-weight-body-text-medium",
    {
      "$description": "Medium font weight",
      "$value": 500,
      "attributes": {
        "category": "typography",
        "type": "weight",
        "item": "body-text",
        "subitem": "medium"
      },
      "filePath": "tokens/font/weight.yml",
      "isSource": true,
      "$type": "fontWeight",
      "original": {
        "$description": "Medium font weight",
        "$value": 500,
        "attributes": {
          "category": "typography"
        },
        "$type": "fontWeight"
      },
      "name": "rh-font-weight-body-text-medium",
      "path": [
        "font",
        "weight",
        "body-text",
        "medium"
      ]
    }
  ],
  [
    "--rh-font-weight-code-regular",
    {
      "$description": "Regular font weight",
      "$value": 400,
      "attributes": {
        "category": "typography",
        "type": "weight",
        "item": "code",
        "subitem": "regular"
      },
      "filePath": "tokens/font/weight.yml",
      "isSource": true,
      "$type": "fontWeight",
      "original": {
        "$description": "Regular font weight",
        "$value": 400,
        "attributes": {
          "category": "typography"
        },
        "$type": "fontWeight"
      },
      "name": "rh-font-weight-code-regular",
      "path": [
        "font",
        "weight",
        "code",
        "regular"
      ]
    }
  ],
  [
    "--rh-font-weight-code-medium",
    {
      "$description": "Medium font weight",
      "$value": 500,
      "attributes": {
        "category": "typography",
        "type": "weight",
        "item": "code",
        "subitem": "medium"
      },
      "filePath": "tokens/font/weight.yml",
      "isSource": true,
      "$type": "fontWeight",
      "original": {
        "$description": "Medium font weight",
        "$value": 500,
        "attributes": {
          "category": "typography"
        },
        "$type": "fontWeight"
      },
      "name": "rh-font-weight-code-medium",
      "path": [
        "font",
        "weight",
        "code",
        "medium"
      ]
    }
  ],
  [
    "--rh-font-weight-heading-regular",
    {
      "$description": "Regular font weight for headings",
      "$value": 400,
      "attributes": {
        "category": "typography",
        "type": "weight",
        "item": "heading",
        "subitem": "regular"
      },
      "filePath": "tokens/font/weight.yml",
      "isSource": true,
      "$type": "fontWeight",
      "original": {
        "$description": "Regular font weight for headings",
        "$value": 400,
        "attributes": {
          "category": "typography"
        },
        "$type": "fontWeight"
      },
      "name": "rh-font-weight-heading-regular",
      "path": [
        "font",
        "weight",
        "heading",
        "regular"
      ]
    }
  ],
  [
    "--rh-font-weight-heading-medium",
    {
      "$description": "Medium font weight for headings",
      "$value": 500,
      "attributes": {
        "category": "typography",
        "type": "weight",
        "item": "heading",
        "subitem": "medium"
      },
      "filePath": "tokens/font/weight.yml",
      "isSource": true,
      "$type": "fontWeight",
      "original": {
        "$description": "Medium font weight for headings",
        "$value": 500,
        "attributes": {
          "category": "typography"
        },
        "$type": "fontWeight"
      },
      "name": "rh-font-weight-heading-medium",
      "path": [
        "font",
        "weight",
        "heading",
        "medium"
      ]
    }
  ],
  [
    "--rh-font-weight-heading-bold",
    {
      "$description": "Bold font weight for headings",
      "$value": 700,
      "attributes": {
        "category": "typography",
        "type": "weight",
        "item": "heading",
        "subitem": "bold"
      },
      "filePath": "tokens/font/weight.yml",
      "isSource": true,
      "$type": "fontWeight",
      "original": {
        "$description": "Bold font weight for headings",
        "$value": 700,
        "attributes": {
          "category": "typography"
        },
        "$type": "fontWeight"
      },
      "name": "rh-font-weight-heading-bold",
      "path": [
        "font",
        "weight",
        "heading",
        "bold"
      ]
    }
  ],
  [
    "--rh-letter-spacing-body-text",
    {
      "$value": "0.0125rem",
      "$description": "Extra letter spacing for small body text sizes",
      "attributes": {
        "category": "typography",
        "type": "letter-spacing",
        "item": "text"
      },
      "filePath": "tokens/font/letter-spacing.yml",
      "isSource": true,
      "original": {
        "$value": "0.0125rem",
        "$description": "Extra letter spacing for small body text sizes",
        "attributes": {
          "category": "typography",
          "type": "letter-spacing"
        }
      },
      "name": "rh-letter-spacing-body-text",
      "path": [
        "letter-spacing",
        "body",
        "text"
      ]
    }
  ],
  [
    "--rh-line-height-heading",
    {
      "$value": 1.3,
      "$description": "Line height for headings",
      "attributes": {
        "category": "typography",
        "type": "line-height"
      },
      "filePath": "tokens/font/line-height.yml",
      "isSource": true,
      "original": {
        "$value": 1.3,
        "$description": "Line height for headings",
        "attributes": {
          "category": "typography",
          "type": "line-height"
        }
      },
      "name": "rh-line-height-heading",
      "path": [
        "line-height",
        "heading"
      ]
    }
  ],
  [
    "--rh-line-height-body-text",
    {
      "$value": 1.5,
      "$description": "Line height for body text",
      "attributes": {
        "category": "typography",
        "type": "line-height"
      },
      "filePath": "tokens/font/line-height.yml",
      "isSource": true,
      "original": {
        "$value": 1.5,
        "$description": "Line height for body text",
        "attributes": {
          "category": "typography",
          "type": "line-height"
        }
      },
      "name": "rh-line-height-body-text",
      "path": [
        "line-height",
        "body-text"
      ]
    }
  ],
  [
    "--rh-line-height-code",
    {
      "$value": 1.5,
      "$description": "Line height for code",
      "attributes": {
        "category": "typography",
        "type": "line-height"
      },
      "filePath": "tokens/font/line-height.yml",
      "isSource": true,
      "original": {
        "$value": 1.5,
        "$description": "Line height for code",
        "attributes": {
          "category": "typography",
          "type": "line-height"
        }
      },
      "name": "rh-line-height-code",
      "path": [
        "line-height",
        "code"
      ]
    }
  ],
  [
    "--rh-size-icon-01",
    {
      "$value": "16px",
      "$description": "16px icon box",
      "attributes": {
        "category": "icon",
        "type": "size",
        "item": "01",
        "px": 16
      },
      "filePath": "tokens/length/icon.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "{length.lg}",
        "$description": "16px icon box",
        "attributes": {
          "category": "icon",
          "type": "size"
        },
        "$type": "dimension"
      },
      "name": "rh-size-icon-01",
      "path": [
        "size",
        "icon",
        "01"
      ]
    }
  ],
  [
    "--rh-size-icon-02",
    {
      "$value": "24px",
      "$description": "24px icon box",
      "attributes": {
        "category": "icon",
        "type": "size",
        "item": "02",
        "px": 24
      },
      "filePath": "tokens/length/icon.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "{length.xl}",
        "$description": "24px icon box",
        "attributes": {
          "category": "icon",
          "type": "size"
        },
        "$type": "dimension"
      },
      "name": "rh-size-icon-02",
      "path": [
        "size",
        "icon",
        "02"
      ]
    }
  ],
  [
    "--rh-size-icon-03",
    {
      "$value": "32px",
      "$description": "32px icon box",
      "attributes": {
        "category": "icon",
        "type": "size",
        "item": "03",
        "px": 32
      },
      "filePath": "tokens/length/icon.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "{length.2xl}",
        "$description": "32px icon box",
        "attributes": {
          "category": "icon",
          "type": "size"
        },
        "$type": "dimension"
      },
      "name": "rh-size-icon-03",
      "path": [
        "size",
        "icon",
        "03"
      ]
    }
  ],
  [
    "--rh-size-icon-04",
    {
      "$value": "40px",
      "$description": "40px icon box",
      "attributes": {
        "category": "icon",
        "type": "size",
        "item": "04",
        "px": 40
      },
      "filePath": "tokens/length/icon.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "40px",
        "$description": "40px icon box",
        "attributes": {
          "category": "icon",
          "type": "size"
        },
        "$type": "dimension"
      },
      "name": "rh-size-icon-04",
      "path": [
        "size",
        "icon",
        "04"
      ]
    }
  ],
  [
    "--rh-size-icon-05",
    {
      "$value": "48px",
      "$description": "48px icon box",
      "attributes": {
        "category": "icon",
        "type": "size",
        "item": "05",
        "px": 48
      },
      "filePath": "tokens/length/icon.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "{length.3xl}",
        "$description": "48px icon box",
        "attributes": {
          "category": "icon",
          "type": "size"
        },
        "$type": "dimension"
      },
      "name": "rh-size-icon-05",
      "path": [
        "size",
        "icon",
        "05"
      ]
    }
  ],
  [
    "--rh-size-icon-06",
    {
      "$value": "64px",
      "$description": "64px icon box",
      "attributes": {
        "category": "icon",
        "type": "size",
        "item": "06",
        "px": 64
      },
      "filePath": "tokens/length/icon.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "{length.4xl}",
        "$description": "64px icon box",
        "attributes": {
          "category": "icon",
          "type": "size"
        },
        "$type": "dimension"
      },
      "name": "rh-size-icon-06",
      "path": [
        "size",
        "icon",
        "06"
      ]
    }
  ],
  [
    "--rh-size-icon-07",
    {
      "$value": "80px",
      "$description": "80px icon box",
      "attributes": {
        "category": "icon",
        "type": "size",
        "item": "07",
        "px": 80
      },
      "filePath": "tokens/length/icon.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "{length.5xl}",
        "$description": "80px icon box",
        "attributes": {
          "category": "icon",
          "type": "size"
        },
        "$type": "dimension"
      },
      "name": "rh-size-icon-07",
      "path": [
        "size",
        "icon",
        "07"
      ]
    }
  ],
  [
    "--rh-size-icon-08",
    {
      "$value": "96px",
      "$description": "96px icon box",
      "attributes": {
        "category": "icon",
        "type": "size",
        "item": "08",
        "px": 96
      },
      "filePath": "tokens/length/icon.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "{length.6xl}",
        "$description": "96px icon box",
        "attributes": {
          "category": "icon",
          "type": "size"
        },
        "$type": "dimension"
      },
      "name": "rh-size-icon-08",
      "path": [
        "size",
        "icon",
        "08"
      ]
    }
  ],
  [
    "--rh-size-icon-09",
    {
      "$value": "128px",
      "$description": "128px icon box",
      "attributes": {
        "category": "icon",
        "type": "size",
        "item": "09",
        "px": 128
      },
      "filePath": "tokens/length/icon.yml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "{length.7xl}",
        "$description": "128px icon box",
        "attributes": {
          "category": "icon",
          "type": "size"
        },
        "$type": "dimension"
      },
      "name": "rh-size-icon-09",
      "path": [
        "size",
        "icon",
        "09"
      ]
    }
  ],
  [
    "--rh-media-xs",
    {
      "$description": "Mobile portrait",
      "$value": "(min-width: 576px)",
      "$extensions": {
        "com.redhat.ux": {
          "title": "Extra Small"
        }
      },
      "filePath": "tokens/media.yml",
      "isSource": true,
      "$type": "mediaQuery",
      "original": {
        "$description": "Mobile portrait",
        "$value": {
          "min-width": "{breakpoint.xs}"
        },
        "$extensions": {
          "com.redhat.ux": {
            "title": "Extra Small"
          }
        },
        "$type": "mediaQuery"
      },
      "name": "rh-media-xs",
      "attributes": {
        "category": "media",
        "type": "xs"
      },
      "path": [
        "media",
        "xs"
      ]
    }
  ],
  [
    "--rh-media-sm",
    {
      "$description": "Mobile landscape",
      "$value": "(min-width: 768px)",
      "$extensions": {
        "com.redhat.ux": {
          "title": "Small"
        }
      },
      "filePath": "tokens/media.yml",
      "isSource": true,
      "$type": "mediaQuery",
      "original": {
        "$description": "Mobile landscape",
        "$value": {
          "min-width": "{breakpoint.sm}"
        },
        "$extensions": {
          "com.redhat.ux": {
            "title": "Small"
          }
        },
        "$type": "mediaQuery"
      },
      "name": "rh-media-sm",
      "attributes": {
        "category": "media",
        "type": "sm"
      },
      "path": [
        "media",
        "sm"
      ]
    }
  ],
  [
    "--rh-media-md",
    {
      "$description": "Tablet portrait",
      "$value": "(min-width: 992px)",
      "$extensions": {
        "com.redhat.ux": {
          "title": "Medium"
        }
      },
      "filePath": "tokens/media.yml",
      "isSource": true,
      "$type": "mediaQuery",
      "original": {
        "$description": "Tablet portrait",
        "$value": {
          "min-width": "{breakpoint.md}"
        },
        "$extensions": {
          "com.redhat.ux": {
            "title": "Medium"
          }
        },
        "$type": "mediaQuery"
      },
      "name": "rh-media-md",
      "attributes": {
        "category": "media",
        "type": "md"
      },
      "path": [
        "media",
        "md"
      ]
    }
  ],
  [
    "--rh-media-lg",
    {
      "$description": "Tablet landscape",
      "$value": "(min-width: 1200px)",
      "$extensions": {
        "com.redhat.ux": {
          "title": "Large"
        }
      },
      "filePath": "tokens/media.yml",
      "isSource": true,
      "$type": "mediaQuery",
      "original": {
        "$description": "Tablet landscape",
        "$value": {
          "min-width": "{breakpoint.lg}"
        },
        "$extensions": {
          "com.redhat.ux": {
            "title": "Large"
          }
        },
        "$type": "mediaQuery"
      },
      "name": "rh-media-lg",
      "attributes": {
        "category": "media",
        "type": "lg"
      },
      "path": [
        "media",
        "lg"
      ]
    }
  ],
  [
    "--rh-media-xl",
    {
      "$description": "Desktop small",
      "$value": "(min-width: 1440px)",
      "$extensions": {
        "com.redhat.ux": {
          "title": "Extra Large"
        }
      },
      "filePath": "tokens/media.yml",
      "isSource": true,
      "$type": "mediaQuery",
      "original": {
        "$description": "Desktop small",
        "$value": {
          "min-width": "{breakpoint.xl}"
        },
        "$extensions": {
          "com.redhat.ux": {
            "title": "Extra Large"
          }
        },
        "$type": "mediaQuery"
      },
      "name": "rh-media-xl",
      "attributes": {
        "category": "media",
        "type": "xl"
      },
      "path": [
        "media",
        "xl"
      ]
    }
  ],
  [
    "--rh-media-2xl",
    {
      "$description": "Desktop Large",
      "$value": "(min-width: 1680px)",
      "$extensions": {
        "com.redhat.ux": {
          "title": "Extra Extra Large"
        }
      },
      "filePath": "tokens/media.yml",
      "isSource": true,
      "$type": "mediaQuery",
      "original": {
        "$description": "Desktop Large",
        "$value": {
          "min-width": "{breakpoint.2xl}"
        },
        "$extensions": {
          "com.redhat.ux": {
            "title": "Extra Extra Large"
          }
        },
        "$type": "mediaQuery"
      },
      "name": "rh-media-2xl",
      "attributes": {
        "category": "media",
        "type": "2xl"
      },
      "path": [
        "media",
        "2xl"
      ]
    }
  ],
  [
    "--rh-opacity-0",
    {
      "$value": "0%",
      "$description": "0% opacity",
      "filePath": "tokens/opacity.yml",
      "isSource": true,
      "original": {
        "$value": "0%",
        "$description": "0% opacity"
      },
      "name": "rh-opacity-0",
      "attributes": {
        "category": "opacity",
        "type": "0"
      },
      "path": [
        "opacity",
        "0"
      ]
    }
  ],
  [
    "--rh-opacity-10",
    {
      "$value": "10%",
      "$description": "10% opacity",
      "filePath": "tokens/opacity.yml",
      "isSource": true,
      "original": {
        "$value": "10%",
        "$description": "10% opacity"
      },
      "name": "rh-opacity-10",
      "attributes": {
        "category": "opacity",
        "type": "10"
      },
      "path": [
        "opacity",
        "10"
      ]
    }
  ],
  [
    "--rh-opacity-20",
    {
      "$value": "20%",
      "$description": "20% opacity",
      "filePath": "tokens/opacity.yml",
      "isSource": true,
      "original": {
        "$value": "20%",
        "$description": "20% opacity"
      },
      "name": "rh-opacity-20",
      "attributes": {
        "category": "opacity",
        "type": "20"
      },
      "path": [
        "opacity",
        "20"
      ]
    }
  ],
  [
    "--rh-opacity-30",
    {
      "$value": "30%",
      "$description": "30% opacity",
      "filePath": "tokens/opacity.yml",
      "isSource": true,
      "original": {
        "$value": "30%",
        "$description": "30% opacity"
      },
      "name": "rh-opacity-30",
      "attributes": {
        "category": "opacity",
        "type": "30"
      },
      "path": [
        "opacity",
        "30"
      ]
    }
  ],
  [
    "--rh-opacity-40",
    {
      "$value": "40%",
      "$description": "40% opacity",
      "filePath": "tokens/opacity.yml",
      "isSource": true,
      "original": {
        "$value": "40%",
        "$description": "40% opacity"
      },
      "name": "rh-opacity-40",
      "attributes": {
        "category": "opacity",
        "type": "40"
      },
      "path": [
        "opacity",
        "40"
      ]
    }
  ],
  [
    "--rh-opacity-50",
    {
      "$value": "50%",
      "$description": "50% opacity",
      "filePath": "tokens/opacity.yml",
      "isSource": true,
      "original": {
        "$value": "50%",
        "$description": "50% opacity"
      },
      "name": "rh-opacity-50",
      "attributes": {
        "category": "opacity",
        "type": "50"
      },
      "path": [
        "opacity",
        "50"
      ]
    }
  ],
  [
    "--rh-opacity-60",
    {
      "$value": "60%",
      "$description": "60% opacity",
      "filePath": "tokens/opacity.yml",
      "isSource": true,
      "original": {
        "$value": "60%",
        "$description": "60% opacity"
      },
      "name": "rh-opacity-60",
      "attributes": {
        "category": "opacity",
        "type": "60"
      },
      "path": [
        "opacity",
        "60"
      ]
    }
  ],
  [
    "--rh-opacity-70",
    {
      "$value": "70%",
      "$description": "70% opacity",
      "filePath": "tokens/opacity.yml",
      "isSource": true,
      "original": {
        "$value": "70%",
        "$description": "70% opacity"
      },
      "name": "rh-opacity-70",
      "attributes": {
        "category": "opacity",
        "type": "70"
      },
      "path": [
        "opacity",
        "70"
      ]
    }
  ],
  [
    "--rh-opacity-80",
    {
      "$value": "80%",
      "$description": "80% opacity",
      "filePath": "tokens/opacity.yml",
      "isSource": true,
      "original": {
        "$value": "80%",
        "$description": "80% opacity"
      },
      "name": "rh-opacity-80",
      "attributes": {
        "category": "opacity",
        "type": "80"
      },
      "path": [
        "opacity",
        "80"
      ]
    }
  ],
  [
    "--rh-opacity-90",
    {
      "$value": "90%",
      "$description": "90% opacity",
      "filePath": "tokens/opacity.yml",
      "isSource": true,
      "original": {
        "$value": "90%",
        "$description": "90% opacity"
      },
      "name": "rh-opacity-90",
      "attributes": {
        "category": "opacity",
        "type": "90"
      },
      "path": [
        "opacity",
        "90"
      ]
    }
  ],
  [
    "--rh-opacity-100",
    {
      "$value": "100%",
      "$description": "100% opacity",
      "filePath": "tokens/opacity.yml",
      "isSource": true,
      "original": {
        "$value": "100%",
        "$description": "100% opacity"
      },
      "name": "rh-opacity-100",
      "attributes": {
        "category": "opacity",
        "type": "100"
      },
      "path": [
        "opacity",
        "100"
      ]
    }
  ],
  [
    "--rh-box-shadow-sm",
    {
      "$description": "Small box shadow",
      "$value": "0 2px 4px 0 rgba(21, 21, 21, 0.2)",
      "filePath": "tokens/shadow.yml",
      "isSource": true,
      "$type": "shadow",
      "original": {
        "$description": "Small box shadow",
        "$value": {
          "offsetX": "0",
          "offsetY": "{length.3xs}",
          "blur": "{length.xs}",
          "spread": "0",
          "color": "rgba(21, 21, 21, 0.2)"
        },
        "$type": "shadow"
      },
      "name": "rh-box-shadow-sm",
      "attributes": {
        "category": "box-shadow",
        "type": "sm"
      },
      "path": [
        "box-shadow",
        "sm"
      ]
    }
  ],
  [
    "--rh-box-shadow-md",
    {
      "$description": "Medium box shadow",
      "$value": "0 4px 6px 1px rgba(21, 21, 21, 0.25)",
      "filePath": "tokens/shadow.yml",
      "isSource": true,
      "$type": "shadow",
      "original": {
        "$description": "Medium box shadow",
        "$value": {
          "offsetX": "0",
          "offsetY": "{length.xs}",
          "blur": "{length.sm}",
          "spread": "{length.4xs}",
          "color": "rgba(21, 21, 21, 0.25)"
        },
        "$type": "shadow"
      },
      "name": "rh-box-shadow-md",
      "attributes": {
        "category": "box-shadow",
        "type": "md"
      },
      "path": [
        "box-shadow",
        "md"
      ]
    }
  ],
  [
    "--rh-box-shadow-lg",
    {
      "$description": "Large box shadow",
      "$value": "0 6px 8px 2px rgba(21, 21, 21, 0.3)",
      "filePath": "tokens/shadow.yml",
      "isSource": true,
      "$type": "shadow",
      "original": {
        "$description": "Large box shadow",
        "$value": {
          "offsetX": "0",
          "offsetY": "{length.sm}",
          "blur": "{length.md}",
          "spread": "{length.3xs}",
          "color": "rgba(21, 21, 21, 0.3)"
        },
        "$type": "shadow"
      },
      "name": "rh-box-shadow-lg",
      "attributes": {
        "category": "box-shadow",
        "type": "lg"
      },
      "path": [
        "box-shadow",
        "lg"
      ]
    }
  ],
  [
    "--rh-box-shadow-xl",
    {
      "$description": "Extra large box shadow",
      "$value": "0 8px 24px 3px rgba(21, 21, 21, 0.35)",
      "filePath": "tokens/shadow.yml",
      "isSource": true,
      "$type": "shadow",
      "original": {
        "$description": "Extra large box shadow",
        "$value": {
          "offsetX": "0",
          "offsetY": "{length.md}",
          "blur": "{length.xl}",
          "spread": "{length.2xs}",
          "color": "rgba(21, 21, 21, 0.35)"
        },
        "$type": "shadow"
      },
      "name": "rh-box-shadow-xl",
      "attributes": {
        "category": "box-shadow",
        "type": "xl"
      },
      "path": [
        "box-shadow",
        "xl"
      ]
    }
  ],
  [
    "--rh-length-4xs",
    {
      "$value": "1px",
      "$description": "1px length token",
      "filePath": "tokens/length/length.yaml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "1px",
        "$description": "1px length token",
        "$type": "dimension"
      },
      "name": "rh-length-4xs",
      "attributes": {
        "category": "length",
        "type": "4xs",
        "px": 1
      },
      "path": [
        "length",
        "4xs"
      ]
    }
  ],
  [
    "--rh-length-3xs",
    {
      "$value": "2px",
      "$description": "2px length token",
      "filePath": "tokens/length/length.yaml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "2px",
        "$description": "2px length token",
        "$type": "dimension"
      },
      "name": "rh-length-3xs",
      "attributes": {
        "category": "length",
        "type": "3xs",
        "px": 2
      },
      "path": [
        "length",
        "3xs"
      ]
    }
  ],
  [
    "--rh-length-2xs",
    {
      "$value": "3px",
      "$description": "3px length token",
      "filePath": "tokens/length/length.yaml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "3px",
        "$description": "3px length token",
        "$type": "dimension"
      },
      "name": "rh-length-2xs",
      "attributes": {
        "category": "length",
        "type": "2xs",
        "px": 3
      },
      "path": [
        "length",
        "2xs"
      ]
    }
  ],
  [
    "--rh-length-xs",
    {
      "$value": "4px",
      "$description": "4px length token",
      "filePath": "tokens/length/length.yaml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "4px",
        "$description": "4px length token",
        "$type": "dimension"
      },
      "name": "rh-length-xs",
      "attributes": {
        "category": "length",
        "type": "xs",
        "px": 4
      },
      "path": [
        "length",
        "xs"
      ]
    }
  ],
  [
    "--rh-length-sm",
    {
      "$value": "6px",
      "$description": "6px length token",
      "filePath": "tokens/length/length.yaml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "6px",
        "$description": "6px length token",
        "$type": "dimension"
      },
      "name": "rh-length-sm",
      "attributes": {
        "category": "length",
        "type": "sm",
        "px": 6
      },
      "path": [
        "length",
        "sm"
      ]
    }
  ],
  [
    "--rh-length-md",
    {
      "$value": "8px",
      "$description": "8px length token",
      "filePath": "tokens/length/length.yaml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "8px",
        "$description": "8px length token",
        "$type": "dimension"
      },
      "name": "rh-length-md",
      "attributes": {
        "category": "length",
        "type": "md",
        "px": 8
      },
      "path": [
        "length",
        "md"
      ]
    }
  ],
  [
    "--rh-length-lg",
    {
      "$value": "16px",
      "$description": "16px length token",
      "filePath": "tokens/length/length.yaml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "16px",
        "$description": "16px length token",
        "$type": "dimension"
      },
      "name": "rh-length-lg",
      "attributes": {
        "category": "length",
        "type": "lg",
        "px": 16
      },
      "path": [
        "length",
        "lg"
      ]
    }
  ],
  [
    "--rh-length-xl",
    {
      "$value": "24px",
      "$description": "24px length token",
      "filePath": "tokens/length/length.yaml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "24px",
        "$description": "24px length token",
        "$type": "dimension"
      },
      "name": "rh-length-xl",
      "attributes": {
        "category": "length",
        "type": "xl",
        "px": 24
      },
      "path": [
        "length",
        "xl"
      ]
    }
  ],
  [
    "--rh-length-2xl",
    {
      "$value": "32px",
      "$description": "32px length token",
      "filePath": "tokens/length/length.yaml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "32px",
        "$description": "32px length token",
        "$type": "dimension"
      },
      "name": "rh-length-2xl",
      "attributes": {
        "category": "length",
        "type": "2xl",
        "px": 32
      },
      "path": [
        "length",
        "2xl"
      ]
    }
  ],
  [
    "--rh-length-3xl",
    {
      "$value": "48px",
      "$description": "48px length token",
      "filePath": "tokens/length/length.yaml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "48px",
        "$description": "48px length token",
        "$type": "dimension"
      },
      "name": "rh-length-3xl",
      "attributes": {
        "category": "length",
        "type": "3xl",
        "px": 48
      },
      "path": [
        "length",
        "3xl"
      ]
    }
  ],
  [
    "--rh-length-4xl",
    {
      "$value": "64px",
      "$description": "64px length token",
      "filePath": "tokens/length/length.yaml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "64px",
        "$description": "64px length token",
        "$type": "dimension"
      },
      "name": "rh-length-4xl",
      "attributes": {
        "category": "length",
        "type": "4xl",
        "px": 64
      },
      "path": [
        "length",
        "4xl"
      ]
    }
  ],
  [
    "--rh-length-5xl",
    {
      "$value": "80px",
      "$description": "80px length token",
      "filePath": "tokens/length/length.yaml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "80px",
        "$description": "80px length token",
        "$type": "dimension"
      },
      "name": "rh-length-5xl",
      "attributes": {
        "category": "length",
        "type": "5xl",
        "px": 80
      },
      "path": [
        "length",
        "5xl"
      ]
    }
  ],
  [
    "--rh-length-6xl",
    {
      "$value": "96px",
      "$description": "96px length token",
      "filePath": "tokens/length/length.yaml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "96px",
        "$description": "96px length token",
        "$type": "dimension"
      },
      "name": "rh-length-6xl",
      "attributes": {
        "category": "length",
        "type": "6xl",
        "px": 96
      },
      "path": [
        "length",
        "6xl"
      ]
    }
  ],
  [
    "--rh-length-7xl",
    {
      "$value": "128px",
      "$description": "128px length token",
      "filePath": "tokens/length/length.yaml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "128px",
        "$description": "128px length token",
        "$type": "dimension"
      },
      "name": "rh-length-7xl",
      "attributes": {
        "category": "length",
        "type": "7xl",
        "px": 128
      },
      "path": [
        "length",
        "7xl"
      ]
    }
  ],
  [
    "--rh-space-xs",
    {
      "$value": "4px",
      "$description": "4px spacer",
      "$extensions": {
        "com.redhat.ux": {
          "color": "#ec861b"
        }
      },
      "filePath": "tokens/length/space.yaml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "{length.xs}",
        "$description": "4px spacer",
        "$extensions": {
          "com.redhat.ux": {
            "color": "#ec861b"
          }
        },
        "$type": "dimension"
      },
      "name": "rh-space-xs",
      "attributes": {
        "category": "space",
        "type": "xs",
        "px": 4
      },
      "path": [
        "space",
        "xs"
      ]
    }
  ],
  [
    "--rh-space-sm",
    {
      "$value": "6px",
      "$description": "6px spacer",
      "$extensions": {
        "com.redhat.ux": {
          "color": "#f3d53c"
        }
      },
      "filePath": "tokens/length/space.yaml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "{length.sm}",
        "$description": "6px spacer",
        "$extensions": {
          "com.redhat.ux": {
            "color": "#f3d53c"
          }
        },
        "$type": "dimension"
      },
      "name": "rh-space-sm",
      "attributes": {
        "category": "space",
        "type": "sm",
        "px": 6
      },
      "path": [
        "space",
        "sm"
      ]
    }
  ],
  [
    "--rh-space-md",
    {
      "$value": "8px",
      "$description": "8px spacer",
      "$extensions": {
        "com.redhat.ux": {
          "color": "#9bd917"
        }
      },
      "filePath": "tokens/length/space.yaml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "{length.md}",
        "$description": "8px spacer",
        "$extensions": {
          "com.redhat.ux": {
            "color": "#9bd917"
          }
        },
        "$type": "dimension"
      },
      "name": "rh-space-md",
      "attributes": {
        "category": "space",
        "type": "md",
        "px": 8
      },
      "path": [
        "space",
        "md"
      ]
    }
  ],
  [
    "--rh-space-lg",
    {
      "$value": "16px",
      "$description": "16px spacer",
      "$extensions": {
        "com.redhat.ux": {
          "color": "#51a549"
        }
      },
      "filePath": "tokens/length/space.yaml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "{length.lg}",
        "$description": "16px spacer",
        "$extensions": {
          "com.redhat.ux": {
            "color": "#51a549"
          }
        },
        "$type": "dimension"
      },
      "name": "rh-space-lg",
      "attributes": {
        "category": "space",
        "type": "lg",
        "px": 16
      },
      "path": [
        "space",
        "lg"
      ]
    }
  ],
  [
    "--rh-space-xl",
    {
      "$value": "24px",
      "$description": "24px spacer",
      "$extensions": {
        "com.redhat.ux": {
          "color": "#1b8793"
        }
      },
      "filePath": "tokens/length/space.yaml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "{length.xl}",
        "$description": "24px spacer",
        "$extensions": {
          "com.redhat.ux": {
            "color": "#1b8793"
          }
        },
        "$type": "dimension"
      },
      "name": "rh-space-xl",
      "attributes": {
        "category": "space",
        "type": "xl",
        "px": 24
      },
      "path": [
        "space",
        "xl"
      ]
    }
  ],
  [
    "--rh-space-2xl",
    {
      "$value": "32px",
      "$description": "32px spacer",
      "$extensions": {
        "com.redhat.ux": {
          "color": "#1893d2"
        }
      },
      "filePath": "tokens/length/space.yaml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "{length.2xl}",
        "$description": "32px spacer",
        "$extensions": {
          "com.redhat.ux": {
            "color": "#1893d2"
          }
        },
        "$type": "dimension"
      },
      "name": "rh-space-2xl",
      "attributes": {
        "category": "space",
        "type": "2xl",
        "px": 32
      },
      "path": [
        "space",
        "2xl"
      ]
    }
  ],
  [
    "--rh-space-3xl",
    {
      "$value": "48px",
      "$description": "48px spacer",
      "$extensions": {
        "com.redhat.ux": {
          "color": "#6743c6"
        }
      },
      "filePath": "tokens/length/space.yaml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "{length.3xl}",
        "$description": "48px spacer",
        "$extensions": {
          "com.redhat.ux": {
            "color": "#6743c6"
          }
        },
        "$type": "dimension"
      },
      "name": "rh-space-3xl",
      "attributes": {
        "category": "space",
        "type": "3xl",
        "px": 48
      },
      "path": [
        "space",
        "3xl"
      ]
    }
  ],
  [
    "--rh-space-4xl",
    {
      "$value": "64px",
      "$description": "64px spacer",
      "$extensions": {
        "com.redhat.ux": {
          "color": "#341974"
        }
      },
      "filePath": "tokens/length/space.yaml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "{length.4xl}",
        "$description": "64px spacer",
        "$extensions": {
          "com.redhat.ux": {
            "color": "#341974"
          }
        },
        "$type": "dimension"
      },
      "name": "rh-space-4xl",
      "attributes": {
        "category": "space",
        "type": "4xl",
        "px": 64
      },
      "path": [
        "space",
        "4xl"
      ]
    }
  ],
  [
    "--rh-space-5xl",
    {
      "$value": "80px",
      "$description": "80px spacer",
      "$extensions": {
        "com.redhat.ux": {
          "color": "#b300b3"
        }
      },
      "filePath": "tokens/length/space.yaml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "{length.5xl}",
        "$description": "80px spacer",
        "$extensions": {
          "com.redhat.ux": {
            "color": "#b300b3"
          }
        },
        "$type": "dimension"
      },
      "name": "rh-space-5xl",
      "attributes": {
        "category": "space",
        "type": "5xl",
        "px": 80
      },
      "path": [
        "space",
        "5xl"
      ]
    }
  ],
  [
    "--rh-space-6xl",
    {
      "$value": "96px",
      "$description": "96px spacer",
      "$extensions": {
        "com.redhat.ux": {
          "color": "#f279a1"
        }
      },
      "filePath": "tokens/length/space.yaml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "{length.6xl}",
        "$description": "96px spacer",
        "$extensions": {
          "com.redhat.ux": {
            "color": "#f279a1"
          }
        },
        "$type": "dimension"
      },
      "name": "rh-space-6xl",
      "attributes": {
        "category": "space",
        "type": "6xl",
        "px": 96
      },
      "path": [
        "space",
        "6xl"
      ]
    }
  ],
  [
    "--rh-space-7xl",
    {
      "$value": "128px",
      "$description": "128px spacer",
      "$extensions": {
        "com.redhat.ux": {
          "color": "#bf1d1d"
        }
      },
      "filePath": "tokens/length/space.yaml",
      "isSource": true,
      "$type": "dimension",
      "original": {
        "$value": "{length.7xl}",
        "$description": "128px spacer",
        "$extensions": {
          "com.redhat.ux": {
            "color": "#bf1d1d"
          }
        },
        "$type": "dimension"
      },
      "name": "rh-space-7xl",
      "attributes": {
        "category": "space",
        "type": "7xl",
        "px": 128
      },
      "path": [
        "space",
        "7xl"
      ]
    }
  ]
]);