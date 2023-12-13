/**
 * Do not edit directly
 * Generated on Wed, 13 Dec 2023 08:19:14 GMT
 */


export const tokens = new Map([
  [
    "--rh-animation-speed",
    {
      "$type": "duration",
      "$value": "0.3s",
      "value": "0.3s",
      "filePath": "tokens/animation.yml",
      "isSource": true,
      "original": {
        "$type": "duration",
        "$value": "0.3s",
        "value": "0.3s"
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
      "value": "cubic-bezier(0.465, 0.183, 0.153, 0.946)",
      "filePath": "tokens/animation.yml",
      "isSource": true,
      "original": {
        "$type": "cubicBezier",
        "$value": [
          0.465,
          0.183,
          0.153,
          0.946
        ],
        "value": [
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
      "value": "1px",
      "filePath": "tokens/border.yml",
      "isSource": true,
      "original": {
        "$value": "{length.4xs}",
        "$description": "1px border width; Example: Secondary CTA or Button",
        "value": "{length.4xs}"
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
      ],
      "comment": "1px border width; Example: Secondary CTA or Button",
      "$type": "dimension"
    }
  ],
  [
    "--rh-border-width-md",
    {
      "$value": "2px",
      "$description": "2px border width: Example: Alert",
      "value": "2px",
      "filePath": "tokens/border.yml",
      "isSource": true,
      "original": {
        "$value": "{length.3xs}",
        "$description": "2px border width: Example: Alert",
        "value": "{length.3xs}"
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
      ],
      "comment": "2px border width: Example: Alert",
      "$type": "dimension"
    }
  ],
  [
    "--rh-border-width-lg",
    {
      "$value": "3px",
      "$description": "3px border width: Example: Expanded Accordion panel",
      "value": "3px",
      "filePath": "tokens/border.yml",
      "isSource": true,
      "original": {
        "$value": "{length.2xs}",
        "$description": "3px border width: Example: Expanded Accordion panel",
        "value": "{length.2xs}"
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
      ],
      "comment": "3px border width: Example: Expanded Accordion panel",
      "$type": "dimension"
    }
  ],
  [
    "--rh-border-radius-sharp",
    {
      "$value": "0.0px",
      "$description": "Border radius reset",
      "value": "0.0px",
      "filePath": "tokens/border.yml",
      "isSource": true,
      "original": {
        "$value": "0.0px",
        "$description": "Border radius reset",
        "value": "0.0px"
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
      ],
      "comment": "Border radius reset"
    }
  ],
  [
    "--rh-border-radius-default",
    {
      "$description": "3px border radius; Example: Card",
      "$value": "3px",
      "value": "3px",
      "filePath": "tokens/border.yml",
      "isSource": true,
      "original": {
        "$description": "3px border radius; Example: Card",
        "$value": "{length.2xs}",
        "value": "{length.2xs}"
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
      ],
      "comment": "3px border radius; Example: Card"
    }
  ],
  [
    "--rh-border-radius-pill",
    {
      "$value": "64px",
      "$description": "Pill border radius; Example: Label",
      "value": "64px",
      "filePath": "tokens/border.yml",
      "isSource": true,
      "original": {
        "$value": "{length.4xl}",
        "$description": "Pill border radius; Example: Label",
        "value": "{length.4xl}"
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
      ],
      "comment": "Pill border radius; Example: Label"
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
      "value": "575px",
      "filePath": "tokens/breakpoints.yml",
      "isSource": true,
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
        "value": "575px"
      },
      "name": "rh-breakpoint-2xs-max",
      "path": [
        "breakpoint",
        "2xsMax"
      ],
      "comment": "Mobile portrait (max-width)",
      "$type": "dimension"
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
      "value": "576px",
      "filePath": "tokens/breakpoints.yml",
      "isSource": true,
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
        "value": "576px"
      },
      "name": "rh-breakpoint-xs",
      "path": [
        "breakpoint",
        "xs"
      ],
      "comment": "Mobile portrait",
      "$type": "dimension"
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
      "value": "767px",
      "filePath": "tokens/breakpoints.yml",
      "isSource": true,
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
        "value": "767px"
      },
      "name": "rh-breakpoint-xs-max",
      "path": [
        "breakpoint",
        "xsMax"
      ],
      "comment": "Mobile landscape (max-width)",
      "$type": "dimension"
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
      "value": "768px",
      "filePath": "tokens/breakpoints.yml",
      "isSource": true,
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
        "value": "768px"
      },
      "name": "rh-breakpoint-sm",
      "path": [
        "breakpoint",
        "sm"
      ],
      "comment": "Mobile landscape",
      "$type": "dimension"
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
      "value": "991px",
      "filePath": "tokens/breakpoints.yml",
      "isSource": true,
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
        "value": "991px"
      },
      "name": "rh-breakpoint-sm-max",
      "path": [
        "breakpoint",
        "smMax"
      ],
      "comment": "Mobile landscape (max-width)",
      "$type": "dimension"
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
      "value": "992px",
      "filePath": "tokens/breakpoints.yml",
      "isSource": true,
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
        "value": "992px"
      },
      "name": "rh-breakpoint-md",
      "path": [
        "breakpoint",
        "md"
      ],
      "comment": "Tablet portrait",
      "$type": "dimension"
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
      "value": "1199px",
      "filePath": "tokens/breakpoints.yml",
      "isSource": true,
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
        "value": "1199px"
      },
      "name": "rh-breakpoint-md-max",
      "path": [
        "breakpoint",
        "mdMax"
      ],
      "comment": "Tablet portrait (max-width)",
      "$type": "dimension"
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
      "value": "1200px",
      "filePath": "tokens/breakpoints.yml",
      "isSource": true,
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
        "value": "1200px"
      },
      "name": "rh-breakpoint-lg",
      "path": [
        "breakpoint",
        "lg"
      ],
      "comment": "Tablet landscape",
      "$type": "dimension"
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
      "value": "1439px",
      "filePath": "tokens/breakpoints.yml",
      "isSource": true,
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
        "value": "1439px"
      },
      "name": "rh-breakpoint-lg-max",
      "path": [
        "breakpoint",
        "lgMax"
      ],
      "comment": "Tablet landscape (max-width)",
      "$type": "dimension"
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
      "value": "1440px",
      "filePath": "tokens/breakpoints.yml",
      "isSource": true,
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
        "value": "1440px"
      },
      "name": "rh-breakpoint-xl",
      "path": [
        "breakpoint",
        "xl"
      ],
      "comment": "Desktop small",
      "$type": "dimension"
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
      "value": "1679px",
      "filePath": "tokens/breakpoints.yml",
      "isSource": true,
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
        "value": "1679px"
      },
      "name": "rh-breakpoint-xl-max",
      "path": [
        "breakpoint",
        "xlMax"
      ],
      "comment": "Desktop small (max-width)",
      "$type": "dimension"
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
      "value": "1680px",
      "filePath": "tokens/breakpoints.yml",
      "isSource": true,
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
        "value": "1680px"
      },
      "name": "rh-breakpoint-2xl",
      "path": [
        "breakpoint",
        "2xl"
      ],
      "comment": "Desktop large",
      "$type": "dimension"
    }
  ],
  [
    "--rh-color-accent-base-on-light",
    {
      "$value": "#0066cc",
      "$description": "Inline link (light theme)",
      "value": "#0066cc",
      "filePath": "tokens/color/accent.yml",
      "isSource": true,
      "original": {
        "$value": "{color.blue.50}",
        "$description": "Inline link (light theme)",
        "value": "{color.blue.50}"
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
      ],
      "comment": "Inline link (light theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-accent-base-on-dark",
    {
      "$value": "#92c5f9",
      "$description": "Inline link (dark theme)",
      "value": "#92c5f9",
      "filePath": "tokens/color/accent.yml",
      "isSource": true,
      "original": {
        "$value": "{color.blue.30}",
        "$description": "Inline link (dark theme)",
        "value": "{color.blue.30}"
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
      ],
      "comment": "Inline link (dark theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-accent-brand-on-light",
    {
      "$value": "#ee0000",
      "$description": "Brand red (light theme)",
      "value": "#ee0000",
      "filePath": "tokens/color/accent.yml",
      "isSource": true,
      "original": {
        "$value": "{color.brand.red.on-light}",
        "$description": "Brand red (light theme)",
        "value": "{color.brand.red.on-light}"
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
      ],
      "comment": "Brand red (light theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-accent-brand-on-dark",
    {
      "$value": "#ee0000",
      "$description": "Brand red (dark theme)",
      "value": "#ee0000",
      "filePath": "tokens/color/accent.yml",
      "isSource": true,
      "original": {
        "$value": "{color.brand.red.on-dark}",
        "$description": "Brand red (dark theme)",
        "value": "{color.brand.red.on-dark}"
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
      ],
      "comment": "Brand red (dark theme)",
      "$type": "color"
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
      "value": "#151515",
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "original": {
        "$value": "{color.gray.95}",
        "$description": "Strong border color (light theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "value": "{color.gray.95}"
      },
      "name": "rh-color-border-strong-on-light",
      "path": [
        "color",
        "border",
        "strong",
        "on-light"
      ],
      "comment": "Strong border color (light theme)",
      "$type": "color"
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
      "value": "#ffffff",
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "original": {
        "$value": "{color.white}",
        "$description": "Strong border color (dark theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "value": "{color.white}"
      },
      "name": "rh-color-border-strong-on-dark",
      "path": [
        "color",
        "border",
        "strong",
        "on-dark"
      ],
      "comment": "Strong border color (dark theme)",
      "$type": "color"
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
      "value": "#c7c7c7",
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "original": {
        "$value": "{color.gray.30}",
        "$description": "Subtle border color (light theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "value": "{color.gray.30}"
      },
      "name": "rh-color-border-subtle-on-light",
      "path": [
        "color",
        "border",
        "subtle",
        "on-light"
      ],
      "comment": "Subtle border color (light theme)",
      "$type": "color"
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
      "value": "#707070",
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "original": {
        "$value": "{color.gray.50}",
        "$description": "Subtle border color (dark theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "value": "{color.gray.50}"
      },
      "name": "rh-color-border-subtle-on-dark",
      "path": [
        "color",
        "border",
        "subtle",
        "on-dark"
      ],
      "comment": "Subtle border color (dark theme)",
      "$type": "color"
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
      "value": "#0066cc",
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "original": {
        "$value": "{color.blue.50}",
        "$description": "Interactive border color (light theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "value": "{color.blue.50}"
      },
      "name": "rh-color-border-interactive-on-light",
      "path": [
        "color",
        "border",
        "interactive",
        "on-light"
      ],
      "comment": "Interactive border color (light theme)",
      "$type": "color"
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
      "value": "#92c5f9",
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "original": {
        "$value": "{color.blue.30}",
        "$description": "Interactive border color (dark theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "value": "{color.blue.30}"
      },
      "name": "rh-color-border-interactive-on-dark",
      "path": [
        "color",
        "border",
        "interactive",
        "on-dark"
      ],
      "comment": "Interactive border color (dark theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-brand-red-lightest",
    {
      "$value": "#fbc5c5",
      "$description": "Lightest brand red",
      "value": "#fbc5c5",
      "filePath": "tokens/color/brand.yml",
      "isSource": true,
      "original": {
        "$value": "{color.red.20}",
        "$description": "Lightest brand red",
        "value": "{color.red.20}"
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
      ],
      "comment": "Lightest brand red",
      "$type": "color"
    }
  ],
  [
    "--rh-color-brand-red-lighter",
    {
      "$value": "#f9a8a8",
      "$description": "lighter brand red",
      "value": "#f9a8a8",
      "filePath": "tokens/color/brand.yml",
      "isSource": true,
      "original": {
        "$value": "{color.red.30}",
        "$description": "lighter brand red",
        "value": "{color.red.30}"
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
      ],
      "comment": "lighter brand red",
      "$type": "color"
    }
  ],
  [
    "--rh-color-brand-red-light",
    {
      "$value": "#f56e6e",
      "$description": "Light brand red",
      "value": "#f56e6e",
      "filePath": "tokens/color/brand.yml",
      "isSource": true,
      "original": {
        "$value": "{color.red.40}",
        "$description": "Light brand red",
        "value": "{color.red.40}"
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
      ],
      "comment": "Light brand red",
      "$type": "color"
    }
  ],
  [
    "--rh-color-brand-red-dark",
    {
      "$value": "#a60000",
      "$description": "Dark brand red/Brand red hover",
      "value": "#a60000",
      "filePath": "tokens/color/brand.yml",
      "isSource": true,
      "original": {
        "$value": "{color.red.60}",
        "$description": "Dark brand red/Brand red hover",
        "value": "{color.red.60}"
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
      ],
      "comment": "Dark brand red/Brand red hover",
      "$type": "color"
    }
  ],
  [
    "--rh-color-brand-red-darker",
    {
      "$value": "#5f0000",
      "$description": "Darker brand red",
      "value": "#5f0000",
      "filePath": "tokens/color/brand.yml",
      "isSource": true,
      "original": {
        "$value": "{color.red.70}",
        "$description": "Darker brand red",
        "value": "{color.red.70}"
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
      ],
      "comment": "Darker brand red",
      "$type": "color"
    }
  ],
  [
    "--rh-color-brand-red-darkest",
    {
      "$value": "#5f0000",
      "$description": "Darkest brand red",
      "value": "#5f0000",
      "filePath": "tokens/color/brand.yml",
      "isSource": true,
      "original": {
        "$value": "{color.red.70}",
        "$description": "Darkest brand red",
        "value": "{color.red.70}"
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
      ],
      "comment": "Darkest brand red",
      "$type": "color"
    }
  ],
  [
    "--rh-color-brand-red-on-dark",
    {
      "$value": "#ee0000",
      "$description": "Brand red on dark background",
      "value": "#ee0000",
      "filePath": "tokens/color/brand.yml",
      "isSource": true,
      "original": {
        "$value": "{color.red.50}",
        "$description": "Brand red on dark background",
        "value": "{color.red.50}"
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
      ],
      "comment": "Brand red on dark background",
      "$type": "color"
    }
  ],
  [
    "--rh-color-brand-red-on-light",
    {
      "$value": "#ee0000",
      "$description": "Brand red on light background",
      "value": "#ee0000",
      "filePath": "tokens/color/brand.yml",
      "isSource": true,
      "original": {
        "$value": "{color.red.50}",
        "$description": "Brand red on light background",
        "value": "{color.red.50}"
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
      ],
      "comment": "Brand red on light background",
      "$type": "color"
    }
  ],
  [
    "--rh-color-canvas-white",
    {
      "$value": "#ffffff",
      "$description": "Primary canvas (light theme)",
      "value": "#ffffff",
      "filePath": "tokens/color/canvas.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.white}",
        "$description": "Primary canvas (light theme)",
        "value": "{color.white}"
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
      ],
      "comment": "Primary canvas (light theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-canvas-black",
    {
      "$value": "#151515",
      "$description": "Primary canvas (dark theme)",
      "value": "#151515",
      "filePath": "tokens/color/canvas.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.gray.95}",
        "$description": "Primary canvas (dark theme)",
        "value": "{color.gray.95}"
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
      ],
      "comment": "Primary canvas (dark theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-blue-10",
    {
      "$value": "#E0F0FF",
      "$description": "Alert - Info background",
      "value": "#e0f0ff",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$value": "#E0F0FF",
        "$description": "Alert - Info background",
        "value": "#E0F0FF"
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
      ],
      "comment": "Alert - Info background",
      "$type": "color"
    }
  ],
  [
    "--rh-color-blue-20",
    {
      "$value": "#B9DAFC",
      "$description": "Label - Filled (Blue) border color",
      "value": "#b9dafc",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$value": "#B9DAFC",
        "$description": "Label - Filled (Blue) border color",
        "value": "#B9DAFC"
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
      ],
      "comment": "Label - Filled (Blue) border color",
      "$type": "color"
    }
  ],
  [
    "--rh-color-blue-30",
    {
      "$value": "#92C5F9",
      "$description": "Inline link (dark theme)",
      "value": "#92c5f9",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$value": "#92C5F9",
        "$description": "Inline link (dark theme)",
        "value": "#92C5F9"
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
      ],
      "comment": "Inline link (dark theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-blue-40",
    {
      "$value": "#4394E5",
      "$description": "Alert - Info accent",
      "value": "#4394e5",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$value": "#4394E5",
        "$description": "Alert - Info accent",
        "value": "#4394E5"
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
      ],
      "comment": "Alert - Info accent",
      "$type": "color"
    }
  ],
  [
    "--rh-color-blue-50",
    {
      "$value": "#0066CC",
      "$description": "Label - Filled (Blue) accent color",
      "value": "#0066cc",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$value": "#0066CC",
        "$description": "Label - Filled (Blue) accent color",
        "value": "#0066CC"
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
      ],
      "comment": "Label - Filled (Blue) accent color",
      "$type": "color"
    }
  ],
  [
    "--rh-color-blue-60",
    {
      "$value": "#004D99",
      "$description": "Inline link hover (light theme)",
      "value": "#004d99",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$value": "#004D99",
        "$description": "Inline link hover (light theme)",
        "value": "#004D99"
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
      ],
      "comment": "Inline link hover (light theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-blue-70",
    {
      "$value": "#003366",
      "$description": "Alert - Info title text",
      "value": "#003366",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$value": "#003366",
        "$description": "Alert - Info title text",
        "value": "#003366"
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
      ],
      "comment": "Alert - Info title text",
      "$type": "color"
    }
  ],
  [
    "--rh-color-blue-10-hsl",
    {
      "$type": "color",
      "$value": "209.03225806451616 100% 93.92156862745098%",
      "value": "209.03225806451616 100% 93.92156862745098%",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.blue.10}",
        "value": "{color.blue.10}"
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
      "$type": "color",
      "$value": "224 240 255",
      "value": "224 240 255",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.blue.10}",
        "value": "{color.blue.10}"
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
      "$type": "color",
      "$value": "210.44776119402988 91.78082191780825% 85.68627450980392%",
      "value": "210.44776119402988 91.78082191780825% 85.68627450980392%",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.blue.20}",
        "value": "{color.blue.20}"
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
      "$type": "color",
      "$value": "185 218 252",
      "value": "185 218 252",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.blue.20}",
        "value": "{color.blue.20}"
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
      "$type": "color",
      "$value": "210.29126213592232 89.56521739130436% 77.45098039215685%",
      "value": "210.29126213592232 89.56521739130436% 77.45098039215685%",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.blue.30}",
        "value": "{color.blue.30}"
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
      "$type": "color",
      "$value": "146 197 249",
      "value": "146 197 249",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.blue.30}",
        "value": "{color.blue.30}"
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
      "$type": "color",
      "$value": "210 75.70093457943923% 58.03921568627452%",
      "value": "210 75.70093457943923% 58.03921568627452%",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.blue.40}",
        "value": "{color.blue.40}"
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
      "$type": "color",
      "$value": "67 148 229",
      "value": "67 148 229",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.blue.40}",
        "value": "{color.blue.40}"
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
      "$type": "color",
      "$value": "210 100% 40%",
      "value": "210 100% 40%",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.blue.50}",
        "value": "{color.blue.50}"
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
      "$type": "color",
      "$value": "0 102 204",
      "value": "0 102 204",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.blue.50}",
        "value": "{color.blue.50}"
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
      "$type": "color",
      "$value": "209.80392156862746 100% 30%",
      "value": "209.80392156862746 100% 30%",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.blue.60}",
        "value": "{color.blue.60}"
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
      "$type": "color",
      "$value": "0 77 153",
      "value": "0 77 153",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.blue.60}",
        "value": "{color.blue.60}"
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
      "$type": "color",
      "$value": "210 100% 20%",
      "value": "210 100% 20%",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.blue.70}",
        "value": "{color.blue.70}"
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
      "$type": "color",
      "$value": "0 51 102",
      "value": "0 51 102",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.blue.70}",
        "value": "{color.blue.70}"
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
      "$value": "#ffffff",
      "$description": "Lightest surface (light theme) or primary text (dark theme)",
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
      "value": "#ffffff",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$value": "#ffffff",
        "$description": "Lightest surface (light theme) or primary text (dark theme)",
        "attributes": {
          "type": "gray"
        },
        "value": "#ffffff"
      },
      "name": "rh-color-white",
      "path": [
        "color",
        "white"
      ],
      "comment": "Lightest surface (light theme) or primary text (dark theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-gray-10",
    {
      "$value": "#F2F2F2",
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
      "value": "#f2f2f2",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$value": "#F2F2F2",
        "$description": "Tertiary surface (light theme)",
        "attributes": {
          "type": "gray"
        },
        "value": "#F2F2F2"
      },
      "name": "rh-color-gray-10",
      "path": [
        "color",
        "gray",
        "10"
      ],
      "comment": "Tertiary surface (light theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-gray-20",
    {
      "$value": "#E0E0E0",
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
      "value": "#e0e0e0",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$value": "#E0E0E0",
        "$description": "Secondary surface (light theme)",
        "attributes": {
          "type": "gray"
        },
        "value": "#E0E0E0"
      },
      "name": "rh-color-gray-20",
      "path": [
        "color",
        "gray",
        "20"
      ],
      "comment": "Secondary surface (light theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-gray-30",
    {
      "$value": "#C7C7C7",
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
      "value": "#c7c7c7",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$value": "#C7C7C7",
        "$description": "Subtle borders (light theme)",
        "attributes": {
          "type": "gray"
        },
        "value": "#C7C7C7"
      },
      "name": "rh-color-gray-30",
      "path": [
        "color",
        "gray",
        "30"
      ],
      "comment": "Subtle borders (light theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-gray-40",
    {
      "$value": "#A3A3A3",
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
      "value": "#a3a3a3",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$value": "#A3A3A3",
        "$description": "Subtle icon (hover state)",
        "attributes": {
          "type": "gray"
        },
        "value": "#A3A3A3"
      },
      "name": "rh-color-gray-40",
      "path": [
        "color",
        "gray",
        "40"
      ],
      "comment": "Subtle icon (hover state)",
      "$type": "color"
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
      "value": "#707070",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$value": "#707070",
        "$description": "Subtle icon",
        "attributes": {
          "type": "gray"
        },
        "value": "#707070"
      },
      "name": "rh-color-gray-50",
      "path": [
        "color",
        "gray",
        "50"
      ],
      "comment": "Subtle icon",
      "$type": "color"
    }
  ],
  [
    "--rh-color-gray-60",
    {
      "$value": "#4D4D4D",
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
      "value": "#4d4d4d",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$value": "#4D4D4D",
        "$description": "Secondary text (light theme)",
        "attributes": {
          "type": "gray"
        },
        "value": "#4D4D4D"
      },
      "name": "rh-color-gray-60",
      "path": [
        "color",
        "gray",
        "60"
      ],
      "comment": "Secondary text (light theme)",
      "$type": "color"
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
      "value": "#383838",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$value": "#383838",
        "$description": "Tertiary surface (dark theme)",
        "attributes": {
          "type": "gray"
        },
        "value": "#383838"
      },
      "name": "rh-color-gray-70",
      "path": [
        "color",
        "gray",
        "70"
      ],
      "comment": "Tertiary surface (dark theme)",
      "$type": "color"
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
      "value": "#292929",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$value": "#292929",
        "$description": "Alternative tertiary surface (not available for use with context provider)",
        "attributes": {
          "type": "gray"
        },
        "value": "#292929"
      },
      "name": "rh-color-gray-80",
      "path": [
        "color",
        "gray",
        "80"
      ],
      "comment": "Alternative tertiary surface (not available for use with context provider)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-gray-90",
    {
      "$value": "#1F1F1F",
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
      "value": "#1f1f1f",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$value": "#1F1F1F",
        "$description": "Secondary surface (dark theme)",
        "attributes": {
          "type": "gray"
        },
        "value": "#1F1F1F"
      },
      "name": "rh-color-gray-90",
      "path": [
        "color",
        "gray",
        "90"
      ],
      "comment": "Secondary surface (dark theme)",
      "$type": "color"
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
      "value": "#151515",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$value": "#151515",
        "$description": "Primary surface (dark theme) or primary text (light theme)",
        "attributes": {
          "type": "gray"
        },
        "value": "#151515"
      },
      "name": "rh-color-gray-95",
      "path": [
        "color",
        "gray",
        "95"
      ],
      "comment": "Primary surface (dark theme) or primary text (light theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-gray-10-hsl",
    {
      "$type": "color",
      "$value": "0 0% 94.90196078431372%",
      "value": "0 0% 94.90196078431372%",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.gray.10}",
        "value": "{color.gray.10}"
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
      "$type": "color",
      "$value": "242 242 242",
      "value": "242 242 242",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.gray.10}",
        "value": "{color.gray.10}"
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
      "$type": "color",
      "$value": "0 0% 87.84313725490196%",
      "value": "0 0% 87.84313725490196%",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.gray.20}",
        "value": "{color.gray.20}"
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
      "$type": "color",
      "$value": "224 224 224",
      "value": "224 224 224",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.gray.20}",
        "value": "{color.gray.20}"
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
      "$type": "color",
      "$value": "0 0% 78.03921568627452%",
      "value": "0 0% 78.03921568627452%",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.gray.30}",
        "value": "{color.gray.30}"
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
      "$type": "color",
      "$value": "199 199 199",
      "value": "199 199 199",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.gray.30}",
        "value": "{color.gray.30}"
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
      "$type": "color",
      "$value": "0 0% 63.921568627450974%",
      "value": "0 0% 63.921568627450974%",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.gray.40}",
        "value": "{color.gray.40}"
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
      "$type": "color",
      "$value": "163 163 163",
      "value": "163 163 163",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.gray.40}",
        "value": "{color.gray.40}"
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
      "$type": "color",
      "$value": "0 0% 43.92156862745098%",
      "value": "0 0% 43.92156862745098%",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.gray.50}",
        "value": "{color.gray.50}"
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
      "$type": "color",
      "$value": "112 112 112",
      "value": "112 112 112",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.gray.50}",
        "value": "{color.gray.50}"
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
      "$type": "color",
      "$value": "0 0% 30.19607843137255%",
      "value": "0 0% 30.19607843137255%",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.gray.60}",
        "value": "{color.gray.60}"
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
      "$type": "color",
      "$value": "77 77 77",
      "value": "77 77 77",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.gray.60}",
        "value": "{color.gray.60}"
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
      "$type": "color",
      "$value": "0 0% 21.96078431372549%",
      "value": "0 0% 21.96078431372549%",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.gray.70}",
        "value": "{color.gray.70}"
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
      "$type": "color",
      "$value": "56 56 56",
      "value": "56 56 56",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.gray.70}",
        "value": "{color.gray.70}"
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
      "$type": "color",
      "$value": "0 0% 16.07843137254902%",
      "value": "0 0% 16.07843137254902%",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.gray.80}",
        "value": "{color.gray.80}"
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
      "$type": "color",
      "$value": "41 41 41",
      "value": "41 41 41",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.gray.80}",
        "value": "{color.gray.80}"
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
      "$type": "color",
      "$value": "0 0% 12.156862745098039%",
      "value": "0 0% 12.156862745098039%",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.gray.90}",
        "value": "{color.gray.90}"
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
      "$type": "color",
      "$value": "31 31 31",
      "value": "31 31 31",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.gray.90}",
        "value": "{color.gray.90}"
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
      "$type": "color",
      "$value": "0 0% 8.235294117647058%",
      "value": "0 0% 8.235294117647058%",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.gray.95}",
        "value": "{color.gray.95}"
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
      "$type": "color",
      "$value": "21 21 21",
      "value": "21 21 21",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.gray.95}",
        "value": "{color.gray.95}"
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
      "value": "#000000",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$value": "#000000",
        "$description": "Brand black (avoid using)",
        "attributes": {
          "type": "gray"
        },
        "value": "#000000"
      },
      "name": "rh-color-black",
      "path": [
        "color",
        "black"
      ],
      "comment": "Brand black (avoid using)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-green-10",
    {
      "$value": "#E9F7DF",
      "$description": "Alert - success background",
      "value": "#e9f7df",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$value": "#E9F7DF",
        "$description": "Alert - success background",
        "value": "#E9F7DF"
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
      ],
      "comment": "Alert - success background",
      "$type": "color"
    }
  ],
  [
    "--rh-color-green-20",
    {
      "$value": "#D1F1BB",
      "$description": "Label - Filled (Green) border color",
      "value": "#d1f1bb",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$value": "#D1F1BB",
        "$description": "Label - Filled (Green) border color",
        "value": "#D1F1BB"
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
      ],
      "comment": "Label - Filled (Green) border color",
      "$type": "color"
    }
  ],
  [
    "--rh-color-green-30",
    {
      "$value": "#AFDC8F",
      "value": "#afdc8f",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$value": "#AFDC8F",
        "value": "#AFDC8F"
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
      ],
      "$type": "color"
    }
  ],
  [
    "--rh-color-green-40",
    {
      "$value": "#87BB62",
      "value": "#87bb62",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$value": "#87BB62",
        "value": "#87BB62"
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
      ],
      "$type": "color"
    }
  ],
  [
    "--rh-color-green-50",
    {
      "$value": "#63993D",
      "$description": null,
      "value": "#63993d",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$value": "#63993D",
        "$description": null,
        "value": "#63993D"
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
      ],
      "comment": null,
      "$type": "color"
    }
  ],
  [
    "--rh-color-green-60",
    {
      "$value": "#3D7317",
      "$description": "Alert - Success accent",
      "value": "#3d7317",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$value": "#3D7317",
        "$description": "Alert - Success accent",
        "value": "#3D7317"
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
      ],
      "comment": "Alert - Success accent",
      "$type": "color"
    }
  ],
  [
    "--rh-color-green-70",
    {
      "$value": "#204D00",
      "$description": "Alert - Success title text",
      "value": "#204d00",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$value": "#204D00",
        "$description": "Alert - Success title text",
        "value": "#204D00"
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
      ],
      "comment": "Alert - Success title text",
      "$type": "color"
    }
  ],
  [
    "--rh-color-green-10-hsl",
    {
      "$type": "color",
      "$value": "95.00000000000003 60.00000000000004% 92.15686274509804%",
      "value": "95.00000000000003 60.00000000000004% 92.15686274509804%",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.green.10}",
        "value": "{color.green.10}"
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
      "$type": "color",
      "$value": "233 247 223",
      "value": "233 247 223",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.green.10}",
        "value": "{color.green.10}"
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
      "$type": "color",
      "$value": "95.55555555555556 65.85365853658536% 83.92156862745097%",
      "value": "95.55555555555556 65.85365853658536% 83.92156862745097%",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.green.20}",
        "value": "{color.green.20}"
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
      "$type": "color",
      "$value": "209 241 187",
      "value": "209 241 187",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.green.20}",
        "value": "{color.green.20}"
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
      "$type": "color",
      "$value": "95.06493506493506 52.380952380952394% 71.17647058823529%",
      "value": "95.06493506493506 52.380952380952394% 71.17647058823529%",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.green.30}",
        "value": "{color.green.30}"
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
      "$type": "color",
      "$value": "175 220 143",
      "value": "175 220 143",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.green.30}",
        "value": "{color.green.30}"
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
      "$type": "color",
      "$value": "95.05617977528091 39.55555555555555% 55.88235294117647%",
      "value": "95.05617977528091 39.55555555555555% 55.88235294117647%",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.green.40}",
        "value": "{color.green.40}"
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
      "$type": "color",
      "$value": "135 187 98",
      "value": "135 187 98",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.green.40}",
        "value": "{color.green.40}"
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
      "$type": "color",
      "$value": "95.21739130434783 42.99065420560747% 41.96078431372549%",
      "value": "95.21739130434783 42.99065420560747% 41.96078431372549%",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.green.50}",
        "value": "{color.green.50}"
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
      "$type": "color",
      "$value": "99 153 61",
      "value": "99 153 61",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.green.50}",
        "value": "{color.green.50}"
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
      "$type": "color",
      "$value": "95.21739130434783 66.66666666666667% 27.058823529411764%",
      "value": "95.21739130434783 66.66666666666667% 27.058823529411764%",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.green.60}",
        "value": "{color.green.60}"
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
      "$type": "color",
      "$value": "61 115 23",
      "value": "61 115 23",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.green.60}",
        "value": "{color.green.60}"
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
      "$type": "color",
      "$value": "95.06493506493506 100% 15.098039215686274%",
      "value": "95.06493506493506 100% 15.098039215686274%",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.green.70}",
        "value": "{color.green.70}"
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
      "$type": "color",
      "$value": "32 77 0",
      "value": "32 77 0",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.green.70}",
        "value": "{color.green.70}"
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
      "$value": "#FFE8CC",
      "$description": "Label - Filled (Orange) background color",
      "value": "#ffe8cc",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$value": "#FFE8CC",
        "$description": "Label - Filled (Orange) background color",
        "value": "#FFE8CC"
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
      ],
      "comment": "Label - Filled (Orange) background color",
      "$type": "color"
    }
  ],
  [
    "--rh-color-orange-20",
    {
      "$value": "#FCCB8F",
      "value": "#fccb8f",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$value": "#FCCB8F",
        "value": "#FCCB8F"
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
      ],
      "$type": "color"
    }
  ],
  [
    "--rh-color-orange-30",
    {
      "$value": "#F8AE54",
      "$description": "Label - Filled (Orange) border color",
      "value": "#f8ae54",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$value": "#F8AE54",
        "$description": "Label - Filled (Orange) border color",
        "value": "#F8AE54"
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
      ],
      "comment": "Label - Filled (Orange) border color",
      "$type": "color"
    }
  ],
  [
    "--rh-color-orange-40",
    {
      "$value": "#F5921B",
      "$description": "Label - Filled (Orange) accent color",
      "value": "#f5921b",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$value": "#F5921B",
        "$description": "Label - Filled (Orange) accent color",
        "value": "#F5921B"
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
      ],
      "comment": "Label - Filled (Orange) accent color",
      "$type": "color"
    }
  ],
  [
    "--rh-color-orange-50",
    {
      "$value": "#CA6C0F",
      "$description": "Label - Filled (Orange) accent color",
      "value": "#ca6c0f",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$value": "#CA6C0F",
        "$description": "Label - Filled (Orange) accent color",
        "value": "#CA6C0F"
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
      ],
      "comment": "Label - Filled (Orange) accent color",
      "$type": "color"
    }
  ],
  [
    "--rh-color-orange-60",
    {
      "$value": "#9E4A06",
      "value": "#9e4a06",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$value": "#9E4A06",
        "value": "#9E4A06"
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
      ],
      "$type": "color"
    }
  ],
  [
    "--rh-color-orange-70",
    {
      "$value": "#732E00",
      "$description": "Label - Filled (Orange) text color",
      "value": "#732e00",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$value": "#732E00",
        "$description": "Label - Filled (Orange) text color",
        "value": "#732E00"
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
      ],
      "comment": "Label - Filled (Orange) text color",
      "$type": "color"
    }
  ],
  [
    "--rh-color-orange-10-hsl",
    {
      "$type": "color",
      "$value": "32.941176470588225 100% 90%",
      "value": "32.941176470588225 100% 90%",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.orange.10}",
        "value": "{color.orange.10}"
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
      "$type": "color",
      "$value": "255 232 204",
      "value": "255 232 204",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.orange.10}",
        "value": "{color.orange.10}"
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
      "$type": "color",
      "$value": "33.02752293577981 94.78260869565219% 77.45098039215686%",
      "value": "33.02752293577981 94.78260869565219% 77.45098039215686%",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.orange.20}",
        "value": "{color.orange.20}"
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
      "$type": "color",
      "$value": "252 203 143",
      "value": "252 203 143",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.orange.20}",
        "value": "{color.orange.20}"
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
      "$type": "color",
      "$value": "32.926829268292686 92.13483146067415% 65.09803921568627%",
      "value": "32.926829268292686 92.13483146067415% 65.09803921568627%",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.orange.30}",
        "value": "{color.orange.30}"
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
      "$type": "color",
      "$value": "248 174 84",
      "value": "248 174 84",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.orange.30}",
        "value": "{color.orange.30}"
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
      "$type": "color",
      "$value": "32.752293577981646 91.5966386554622% 53.333333333333336%",
      "value": "32.752293577981646 91.5966386554622% 53.333333333333336%",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.orange.40}",
        "value": "{color.orange.40}"
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
      "$type": "color",
      "$value": "245 146 27",
      "value": "245 146 27",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.orange.40}",
        "value": "{color.orange.40}"
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
      "$type": "color",
      "$value": "29.83957219251337 86.17511520737327% 42.549019607843135%",
      "value": "29.83957219251337 86.17511520737327% 42.549019607843135%",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.orange.50}",
        "value": "{color.orange.50}"
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
      "$type": "color",
      "$value": "202 108 15",
      "value": "202 108 15",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.orange.50}",
        "value": "{color.orange.50}"
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
      "$type": "color",
      "$value": "26.842105263157904 92.68292682926828% 32.15686274509804%",
      "value": "26.842105263157904 92.68292682926828% 32.15686274509804%",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.orange.60}",
        "value": "{color.orange.60}"
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
      "$type": "color",
      "$value": "158 74 6",
      "value": "158 74 6",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.orange.60}",
        "value": "{color.orange.60}"
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
      "$type": "color",
      "$value": "24 100% 22.54901960784314%",
      "value": "24 100% 22.54901960784314%",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.orange.70}",
        "value": "{color.orange.70}"
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
      "$type": "color",
      "$value": "115 46 0",
      "value": "115 46 0",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.orange.70}",
        "value": "{color.orange.70}"
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
    "--rh-color-purple-10",
    {
      "$value": "#ECE6FF",
      "$description": "Label - Filled (Purple) background color",
      "value": "#ece6ff",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$value": "#ECE6FF",
        "$description": "Label - Filled (Purple) background color",
        "value": "#ECE6FF"
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
      ],
      "comment": "Label - Filled (Purple) background color",
      "$type": "color"
    }
  ],
  [
    "--rh-color-purple-20",
    {
      "$value": "#D0C5F4",
      "$description": "Inline link visited hover (dark theme)",
      "value": "#d0c5f4",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$value": "#D0C5F4",
        "$description": "Inline link visited hover (dark theme)",
        "value": "#D0C5F4"
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
      ],
      "comment": "Inline link visited hover (dark theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-purple-30",
    {
      "$value": "#B6A6E9",
      "value": "#b6a6e9",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$value": "#B6A6E9",
        "value": "#B6A6E9"
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
      ],
      "$type": "color"
    }
  ],
  [
    "--rh-color-purple-40",
    {
      "$value": "#876FD4",
      "$description": "Inline link visited (dark theme)",
      "value": "#876fd4",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$value": "#876FD4",
        "$description": "Inline link visited (dark theme)",
        "value": "#876FD4"
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
      ],
      "comment": "Inline link visited (dark theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-purple-50",
    {
      "$value": "#5E40BE",
      "value": "#5e40be",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$value": "#5E40BE",
        "value": "#5E40BE"
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
      ],
      "$type": "color"
    }
  ],
  [
    "--rh-color-purple-60",
    {
      "$value": "#3D2785",
      "$description": "Inline link visited (light theme)",
      "value": "#3d2785",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$value": "#3D2785",
        "$description": "Inline link visited (light theme)",
        "value": "#3D2785"
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
      ],
      "comment": "Inline link visited (light theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-purple-70",
    {
      "$value": "#21134D",
      "$description": "Inline link visited hover (light theme)",
      "value": "#21134d",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$value": "#21134D",
        "$description": "Inline link visited hover (light theme)",
        "value": "#21134D"
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
      ],
      "comment": "Inline link visited hover (light theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-purple-10-hsl",
    {
      "$type": "color",
      "$value": "254.4 100% 95.09803921568627%",
      "value": "254.4 100% 95.09803921568627%",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.purple.10}",
        "value": "{color.purple.10}"
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
      "$type": "color",
      "$value": "236 230 255",
      "value": "236 230 255",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.purple.10}",
        "value": "{color.purple.10}"
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
      "$type": "color",
      "$value": "254.0425531914893 68.11594202898556% 86.47058823529412%",
      "value": "254.0425531914893 68.11594202898556% 86.47058823529412%",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.purple.20}",
        "value": "{color.purple.20}"
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
      "$type": "color",
      "$value": "208 197 244",
      "value": "208 197 244",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.purple.20}",
        "value": "{color.purple.20}"
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
      "$type": "color",
      "$value": "254.32835820895522 60.36036036036033% 78.23529411764706%",
      "value": "254.32835820895522 60.36036036036033% 78.23529411764706%",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.purple.30}",
        "value": "{color.purple.30}"
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
      "$type": "color",
      "$value": "182 166 233",
      "value": "182 166 233",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.purple.30}",
        "value": "{color.purple.30}"
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
      "$type": "color",
      "$value": "254.25742574257427 54.010695187165794% 63.33333333333333%",
      "value": "254.25742574257427 54.010695187165794% 63.33333333333333%",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.purple.40}",
        "value": "{color.purple.40}"
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
      "$type": "color",
      "$value": "135 111 212",
      "value": "135 111 212",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.purple.40}",
        "value": "{color.purple.40}"
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
      "$type": "color",
      "$value": "254.2857142857143 49.60629921259843% 49.80392156862745%",
      "value": "254.2857142857143 49.60629921259843% 49.80392156862745%",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.purple.50}",
        "value": "{color.purple.50}"
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
      "$type": "color",
      "$value": "94 64 190",
      "value": "94 64 190",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.purple.50}",
        "value": "{color.purple.50}"
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
      "$type": "color",
      "$value": "254.0425531914894 54.65116279069767% 33.72549019607843%",
      "value": "254.0425531914894 54.65116279069767% 33.72549019607843%",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.purple.60}",
        "value": "{color.purple.60}"
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
      "$type": "color",
      "$value": "61 39 133",
      "value": "61 39 133",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.purple.60}",
        "value": "{color.purple.60}"
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
      "$type": "color",
      "$value": "254.48275862068965 60.416666666666664% 18.823529411764707%",
      "value": "254.48275862068965 60.416666666666664% 18.823529411764707%",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.purple.70}",
        "value": "{color.purple.70}"
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
      "$type": "color",
      "$value": "33 19 77",
      "value": "33 19 77",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.purple.70}",
        "value": "{color.purple.70}"
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
      "$value": "#FFE3D9",
      "value": "#ffe3d9",
      "filePath": "tokens/color/crayon/red-orange.yaml",
      "isSource": true,
      "original": {
        "$value": "#FFE3D9",
        "value": "#FFE3D9"
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
      ],
      "$type": "color"
    }
  ],
  [
    "--rh-color-red-orange-20",
    {
      "$value": "#FBBEA8",
      "value": "#fbbea8",
      "filePath": "tokens/color/crayon/red-orange.yaml",
      "isSource": true,
      "original": {
        "$value": "#FBBEA8",
        "value": "#FBBEA8"
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
      ],
      "$type": "color"
    }
  ],
  [
    "--rh-color-red-orange-30",
    {
      "$value": "#F89B78",
      "value": "#f89b78",
      "filePath": "tokens/color/crayon/red-orange.yaml",
      "isSource": true,
      "original": {
        "$value": "#F89B78",
        "value": "#F89B78"
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
      ],
      "$type": "color"
    }
  ],
  [
    "--rh-color-red-orange-40",
    {
      "$value": "#F4784A",
      "value": "#f4784a",
      "filePath": "tokens/color/crayon/red-orange.yaml",
      "isSource": true,
      "original": {
        "$value": "#F4784A",
        "value": "#F4784A"
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
      ],
      "$type": "color"
    }
  ],
  [
    "--rh-color-red-orange-50",
    {
      "$value": "#F4784A",
      "value": "#f4784a",
      "filePath": "tokens/color/crayon/red-orange.yaml",
      "isSource": true,
      "original": {
        "$value": "#F4784A",
        "value": "#F4784A"
      },
      "name": "rh-color-red-orange-50",
      "attributes": {
        "category": "color",
        "type": "red-orange",
        "item": "50",
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
        "50"
      ],
      "$type": "color"
    }
  ],
  [
    "--rh-color-red-orange-60",
    {
      "$value": "#B1380B",
      "value": "#b1380b",
      "filePath": "tokens/color/crayon/red-orange.yaml",
      "isSource": true,
      "original": {
        "$value": "#B1380B",
        "value": "#B1380B"
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
      ],
      "$type": "color"
    }
  ],
  [
    "--rh-color-red-orange-70",
    {
      "$value": "#731F00",
      "value": "#731f00",
      "filePath": "tokens/color/crayon/red-orange.yaml",
      "isSource": true,
      "original": {
        "$value": "#731F00",
        "value": "#731F00"
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
      ],
      "$type": "color"
    }
  ],
  [
    "--rh-color-red-orange-10-hsl",
    {
      "$type": "color",
      "$value": "15.789473684210513 100% 92.54901960784314%",
      "value": "15.789473684210513 100% 92.54901960784314%",
      "filePath": "tokens/color/crayon/red-orange.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red-orange.10}",
        "value": "{color.red-orange.10}"
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
      "$type": "color",
      "$value": "255 227 217",
      "value": "255 227 217",
      "filePath": "tokens/color/crayon/red-orange.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red-orange.10}",
        "value": "{color.red-orange.10}"
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
      "$type": "color",
      "$value": "15.903614457831333 91.20879120879121% 82.15686274509804%",
      "value": "15.903614457831333 91.20879120879121% 82.15686274509804%",
      "filePath": "tokens/color/crayon/red-orange.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red-orange.20}",
        "value": "{color.red-orange.20}"
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
      "$type": "color",
      "$value": "251 190 168",
      "value": "251 190 168",
      "filePath": "tokens/color/crayon/red-orange.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red-orange.20}",
        "value": "{color.red-orange.20}"
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
      "$type": "color",
      "$value": "16.406249999999996 90.14084507042254% 72.15686274509804%",
      "value": "16.406249999999996 90.14084507042254% 72.15686274509804%",
      "filePath": "tokens/color/crayon/red-orange.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red-orange.30}",
        "value": "{color.red-orange.30}"
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
      "$type": "color",
      "$value": "248 155 120",
      "value": "248 155 120",
      "filePath": "tokens/color/crayon/red-orange.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red-orange.30}",
        "value": "{color.red-orange.30}"
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
      "$type": "color",
      "$value": "16.235294117647054 88.54166666666671% 62.35294117647059%",
      "value": "16.235294117647054 88.54166666666671% 62.35294117647059%",
      "filePath": "tokens/color/crayon/red-orange.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red-orange.40}",
        "value": "{color.red-orange.40}"
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
      "$type": "color",
      "$value": "244 120 74",
      "value": "244 120 74",
      "filePath": "tokens/color/crayon/red-orange.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red-orange.40}",
        "value": "{color.red-orange.40}"
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
      "$type": "color",
      "$value": "16.235294117647054 88.54166666666671% 62.35294117647059%",
      "value": "16.235294117647054 88.54166666666671% 62.35294117647059%",
      "filePath": "tokens/color/crayon/red-orange.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red-orange.50}",
        "value": "{color.red-orange.50}"
      },
      "name": "rh-color-red-orange-50-hsl",
      "attributes": {
        "category": "color",
        "type": "red-orange",
        "item": "50-hsl",
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
        "50-hsl"
      ]
    }
  ],
  [
    "--rh-color-red-orange-50-rgb",
    {
      "$type": "color",
      "$value": "244 120 74",
      "value": "244 120 74",
      "filePath": "tokens/color/crayon/red-orange.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red-orange.50}",
        "value": "{color.red-orange.50}"
      },
      "name": "rh-color-red-orange-50-rgb",
      "attributes": {
        "category": "color",
        "type": "red-orange",
        "item": "50-rgb",
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
        "50-rgb"
      ]
    }
  ],
  [
    "--rh-color-red-orange-60-hsl",
    {
      "$type": "color",
      "$value": "16.265060240963855 88.29787234042554% 36.86274509803921%",
      "value": "16.265060240963855 88.29787234042554% 36.86274509803921%",
      "filePath": "tokens/color/crayon/red-orange.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red-orange.60}",
        "value": "{color.red-orange.60}"
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
      "$type": "color",
      "$value": "177 56 11",
      "value": "177 56 11",
      "filePath": "tokens/color/crayon/red-orange.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red-orange.60}",
        "value": "{color.red-orange.60}"
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
      "$type": "color",
      "$value": "16.17391304347826 100% 22.54901960784314%",
      "value": "16.17391304347826 100% 22.54901960784314%",
      "filePath": "tokens/color/crayon/red-orange.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red-orange.70}",
        "value": "{color.red-orange.70}"
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
      "$type": "color",
      "$value": "115 31 0",
      "value": "115 31 0",
      "filePath": "tokens/color/crayon/red-orange.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red-orange.70}",
        "value": "{color.red-orange.70}"
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
      "$value": "#FCE3E3",
      "$description": null,
      "value": "#fce3e3",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$value": "#FCE3E3",
        "$description": null,
        "value": "#FCE3E3"
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
      ],
      "comment": null,
      "$type": "color"
    }
  ],
  [
    "--rh-color-red-20",
    {
      "$value": "#FBC5C5",
      "$description": "Lightest brand red",
      "value": "#fbc5c5",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$value": "#FBC5C5",
        "$description": "Lightest brand red",
        "value": "#FBC5C5"
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
      ],
      "comment": "Lightest brand red",
      "$type": "color"
    }
  ],
  [
    "--rh-color-red-30",
    {
      "$value": "#F9A8A8",
      "$description": "Lighter brand red",
      "value": "#f9a8a8",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$value": "#F9A8A8",
        "$description": "Lighter brand red",
        "value": "#F9A8A8"
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
      ],
      "comment": "Lighter brand red",
      "$type": "color"
    }
  ],
  [
    "--rh-color-red-40",
    {
      "$value": "#F56E6E",
      "$description": "Light brand red",
      "value": "#f56e6e",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$value": "#F56E6E",
        "$description": "Light brand red",
        "value": "#F56E6E"
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
      ],
      "comment": "Light brand red",
      "$type": "color"
    }
  ],
  [
    "--rh-color-red-50",
    {
      "$value": "#EE0000",
      "$description": "Brand red (light and dark theme)",
      "value": "#ee0000",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$value": "#EE0000",
        "$description": "Brand red (light and dark theme)",
        "value": "#EE0000"
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
      ],
      "comment": "Brand red (light and dark theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-red-60",
    {
      "$value": "#A60000",
      "$description": "Dark brand red",
      "value": "#a60000",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$value": "#A60000",
        "$description": "Dark brand red",
        "value": "#A60000"
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
      ],
      "comment": "Dark brand red",
      "$type": "color"
    }
  ],
  [
    "--rh-color-red-70",
    {
      "$value": "#5F0000",
      "$description": "Darker brand red",
      "value": "#5f0000",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$value": "#5F0000",
        "$description": "Darker brand red",
        "value": "#5F0000"
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
      ],
      "comment": "Darker brand red",
      "$type": "color"
    }
  ],
  [
    "--rh-color-red-10-hsl",
    {
      "$type": "color",
      "$value": "0 80.64516129032265% 93.92156862745098%",
      "value": "0 80.64516129032265% 93.92156862745098%",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.10}",
        "value": "{color.red.10}"
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
      "$type": "color",
      "$value": "252 227 227",
      "value": "252 227 227",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.10}",
        "value": "{color.red.10}"
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
      "$type": "color",
      "$value": "0 87.09677419354838% 87.84313725490196%",
      "value": "0 87.09677419354838% 87.84313725490196%",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.20}",
        "value": "{color.red.20}"
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
      "$type": "color",
      "$value": "251 197 197",
      "value": "251 197 197",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.20}",
        "value": "{color.red.20}"
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
      "$type": "color",
      "$value": "0 87.0967741935484% 81.76470588235294%",
      "value": "0 87.0967741935484% 81.76470588235294%",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.30}",
        "value": "{color.red.30}"
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
      "$type": "color",
      "$value": "249 168 168",
      "value": "249 168 168",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.30}",
        "value": "{color.red.30}"
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
      "$type": "color",
      "$value": "0 87.09677419354841% 69.6078431372549%",
      "value": "0 87.09677419354841% 69.6078431372549%",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.40}",
        "value": "{color.red.40}"
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
      "$type": "color",
      "$value": "245 110 110",
      "value": "245 110 110",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.40}",
        "value": "{color.red.40}"
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
      "$type": "color",
      "$value": "0 100% 46.666666666666664%",
      "value": "0 100% 46.666666666666664%",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.50}",
        "value": "{color.red.50}"
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
      "$type": "color",
      "$value": "238 0 0",
      "value": "238 0 0",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.50}",
        "value": "{color.red.50}"
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
      "$type": "color",
      "$value": "0 100% 32.549019607843135%",
      "value": "0 100% 32.549019607843135%",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.60}",
        "value": "{color.red.60}"
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
      "$type": "color",
      "$value": "166 0 0",
      "value": "166 0 0",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.60}",
        "value": "{color.red.60}"
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
      "$type": "color",
      "$value": "0 100% 18.627450980392158%",
      "value": "0 100% 18.627450980392158%",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.70}",
        "value": "{color.red.70}"
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
      "$type": "color",
      "$value": "95 0 0",
      "value": "95 0 0",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.70}",
        "value": "{color.red.70}"
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
      "$value": "#DAF2F2",
      "$description": "Alert - Default background",
      "value": "#daf2f2",
      "filePath": "tokens/color/crayon/teal.yaml",
      "isSource": true,
      "original": {
        "$value": "#DAF2F2",
        "$description": "Alert - Default background",
        "value": "#DAF2F2"
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
      ],
      "comment": "Alert - Default background",
      "$type": "color"
    }
  ],
  [
    "--rh-color-teal-20",
    {
      "$value": "#B9E5E5",
      "value": "#b9e5e5",
      "filePath": "tokens/color/crayon/teal.yaml",
      "isSource": true,
      "original": {
        "$value": "#B9E5E5",
        "value": "#B9E5E5"
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
      ],
      "$type": "color"
    }
  ],
  [
    "--rh-color-teal-30",
    {
      "$value": "#9AD8D8",
      "$description": "Label (Cyan) border color",
      "value": "#9ad8d8",
      "filePath": "tokens/color/crayon/teal.yaml",
      "isSource": true,
      "original": {
        "$value": "#9AD8D8",
        "$description": "Label (Cyan) border color",
        "value": "#9AD8D8"
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
      ],
      "comment": "Label (Cyan) border color",
      "$type": "color"
    }
  ],
  [
    "--rh-color-teal-40",
    {
      "$value": "#63BDBD",
      "value": "#63bdbd",
      "filePath": "tokens/color/crayon/teal.yaml",
      "isSource": true,
      "original": {
        "$value": "#63BDBD",
        "value": "#63BDBD"
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
      ],
      "$type": "color"
    }
  ],
  [
    "--rh-color-teal-50",
    {
      "$value": "#37A3A3",
      "$description": "Alert - Default accent",
      "value": "#37a3a3",
      "filePath": "tokens/color/crayon/teal.yaml",
      "isSource": true,
      "original": {
        "$value": "#37A3A3",
        "$description": "Alert - Default accent",
        "value": "#37A3A3"
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
      ],
      "comment": "Alert - Default accent",
      "$type": "color"
    }
  ],
  [
    "--rh-color-teal-60",
    {
      "$value": "#147878",
      "value": "#147878",
      "filePath": "tokens/color/crayon/teal.yaml",
      "isSource": true,
      "original": {
        "$value": "#147878",
        "value": "#147878"
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
      ],
      "$type": "color"
    }
  ],
  [
    "--rh-color-teal-70",
    {
      "$value": "#004D4D",
      "$description": "Alert - Default title text",
      "value": "#004d4d",
      "filePath": "tokens/color/crayon/teal.yaml",
      "isSource": true,
      "original": {
        "$value": "#004D4D",
        "$description": "Alert - Default title text",
        "value": "#004D4D"
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
      ],
      "comment": "Alert - Default title text",
      "$type": "color"
    }
  ],
  [
    "--rh-color-teal-10-hsl",
    {
      "$type": "color",
      "$value": "180 47.99999999999998% 90.19607843137254%",
      "value": "180 47.99999999999998% 90.19607843137254%",
      "filePath": "tokens/color/crayon/teal.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.teal.10}",
        "value": "{color.teal.10}"
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
      "$type": "color",
      "$value": "218 242 242",
      "value": "218 242 242",
      "filePath": "tokens/color/crayon/teal.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.teal.10}",
        "value": "{color.teal.10}"
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
      "$type": "color",
      "$value": "180 45.833333333333336% 81.17647058823529%",
      "value": "180 45.833333333333336% 81.17647058823529%",
      "filePath": "tokens/color/crayon/teal.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.teal.20}",
        "value": "{color.teal.20}"
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
      "$type": "color",
      "$value": "185 229 229",
      "value": "185 229 229",
      "filePath": "tokens/color/crayon/teal.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.teal.20}",
        "value": "{color.teal.20}"
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
      "$type": "color",
      "$value": "180 44.28571428571429% 72.54901960784314%",
      "value": "180 44.28571428571429% 72.54901960784314%",
      "filePath": "tokens/color/crayon/teal.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.teal.30}",
        "value": "{color.teal.30}"
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
      "$type": "color",
      "$value": "154 216 216",
      "value": "154 216 216",
      "filePath": "tokens/color/crayon/teal.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.teal.30}",
        "value": "{color.teal.30}"
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
      "$type": "color",
      "$value": "180 40.54054054054054% 56.470588235294116%",
      "value": "180 40.54054054054054% 56.470588235294116%",
      "filePath": "tokens/color/crayon/teal.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.teal.40}",
        "value": "{color.teal.40}"
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
      "$type": "color",
      "$value": "99 189 189",
      "value": "99 189 189",
      "filePath": "tokens/color/crayon/teal.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.teal.40}",
        "value": "{color.teal.40}"
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
      "$type": "color",
      "$value": "180 49.54128440366972% 42.745098039215684%",
      "value": "180 49.54128440366972% 42.745098039215684%",
      "filePath": "tokens/color/crayon/teal.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.teal.50}",
        "value": "{color.teal.50}"
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
      "$type": "color",
      "$value": "55 163 163",
      "value": "55 163 163",
      "filePath": "tokens/color/crayon/teal.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.teal.50}",
        "value": "{color.teal.50}"
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
      "$type": "color",
      "$value": "180 71.42857142857142% 27.450980392156865%",
      "value": "180 71.42857142857142% 27.450980392156865%",
      "filePath": "tokens/color/crayon/teal.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.teal.60}",
        "value": "{color.teal.60}"
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
      "$type": "color",
      "$value": "20 120 120",
      "value": "20 120 120",
      "filePath": "tokens/color/crayon/teal.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.teal.60}",
        "value": "{color.teal.60}"
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
      "$type": "color",
      "$value": "180 100% 15.098039215686274%",
      "value": "180 100% 15.098039215686274%",
      "filePath": "tokens/color/crayon/teal.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.teal.70}",
        "value": "{color.teal.70}"
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
      "$type": "color",
      "$value": "0 77 77",
      "value": "0 77 77",
      "filePath": "tokens/color/crayon/teal.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.teal.70}",
        "value": "{color.teal.70}"
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
      "$value": "#FFF4CC",
      "$description": "Alert - Warning background",
      "value": "#fff4cc",
      "filePath": "tokens/color/crayon/yellow.yaml",
      "isSource": true,
      "original": {
        "$value": "#FFF4CC",
        "$description": "Alert - Warning background",
        "value": "#FFF4CC"
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
      ],
      "comment": "Alert - Warning background",
      "$type": "color"
    }
  ],
  [
    "--rh-color-yellow-20",
    {
      "$value": "#FFE072",
      "value": "#ffe072",
      "filePath": "tokens/color/crayon/yellow.yaml",
      "isSource": true,
      "original": {
        "$value": "#FFE072",
        "value": "#FFE072"
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
      ],
      "$type": "color"
    }
  ],
  [
    "--rh-color-yellow-30",
    {
      "$value": "#FFCC17",
      "value": "#ffcc17",
      "filePath": "tokens/color/crayon/yellow.yaml",
      "isSource": true,
      "original": {
        "$value": "#FFCC17",
        "value": "#FFCC17"
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
      ],
      "$type": "color"
    }
  ],
  [
    "--rh-color-yellow-40",
    {
      "$value": "#DCA614",
      "$description": "Alert - Warning accent",
      "value": "#dca614",
      "filePath": "tokens/color/crayon/yellow.yaml",
      "isSource": true,
      "original": {
        "$value": "#DCA614",
        "$description": "Alert - Warning accent",
        "value": "#DCA614"
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
      ],
      "comment": "Alert - Warning accent",
      "$type": "color"
    }
  ],
  [
    "--rh-color-yellow-50",
    {
      "$value": "#B98412",
      "value": "#b98412",
      "filePath": "tokens/color/crayon/yellow.yaml",
      "isSource": true,
      "original": {
        "$value": "#B98412",
        "value": "#B98412"
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
      ],
      "$type": "color"
    }
  ],
  [
    "--rh-color-yellow-60",
    {
      "$value": "#96640F",
      "value": "#96640f",
      "filePath": "tokens/color/crayon/yellow.yaml",
      "isSource": true,
      "original": {
        "$value": "#96640F",
        "value": "#96640F"
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
      ],
      "$type": "color"
    }
  ],
  [
    "--rh-color-yellow-70",
    {
      "$value": "#73480B",
      "$description": "Alert - Warning title text",
      "value": "#73480b",
      "filePath": "tokens/color/crayon/yellow.yaml",
      "isSource": true,
      "original": {
        "$value": "#73480B",
        "$description": "Alert - Warning title text",
        "value": "#73480B"
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
      ],
      "comment": "Alert - Warning title text",
      "$type": "color"
    }
  ],
  [
    "--rh-color-yellow-10-hsl",
    {
      "$type": "color",
      "$value": "47.058823529411775 100% 90%",
      "value": "47.058823529411775 100% 90%",
      "filePath": "tokens/color/crayon/yellow.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.yellow.10}",
        "value": "{color.yellow.10}"
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
      "$type": "color",
      "$value": "255 244 204",
      "value": "255 244 204",
      "filePath": "tokens/color/crayon/yellow.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.yellow.10}",
        "value": "{color.yellow.10}"
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
      "$type": "color",
      "$value": "46.80851063829787 100% 72.35294117647058%",
      "value": "46.80851063829787 100% 72.35294117647058%",
      "filePath": "tokens/color/crayon/yellow.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.yellow.20}",
        "value": "{color.yellow.20}"
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
      "$type": "color",
      "$value": "255 224 114",
      "value": "255 224 114",
      "filePath": "tokens/color/crayon/yellow.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.yellow.20}",
        "value": "{color.yellow.20}"
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
      "$type": "color",
      "$value": "46.81034482758621 100% 54.509803921568626%",
      "value": "46.81034482758621 100% 54.509803921568626%",
      "filePath": "tokens/color/crayon/yellow.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.yellow.30}",
        "value": "{color.yellow.30}"
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
      "$type": "color",
      "$value": "255 204 23",
      "value": "255 204 23",
      "filePath": "tokens/color/crayon/yellow.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.yellow.30}",
        "value": "{color.yellow.30}"
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
      "$type": "color",
      "$value": "43.79999999999999 83.33333333333334% 47.05882352941176%",
      "value": "43.79999999999999 83.33333333333334% 47.05882352941176%",
      "filePath": "tokens/color/crayon/yellow.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.yellow.40}",
        "value": "{color.yellow.40}"
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
      "$type": "color",
      "$value": "220 166 20",
      "value": "220 166 20",
      "filePath": "tokens/color/crayon/yellow.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.yellow.40}",
        "value": "{color.yellow.40}"
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
      "$type": "color",
      "$value": "40.95808383233534 82.26600985221675% 39.80392156862745%",
      "value": "40.95808383233534 82.26600985221675% 39.80392156862745%",
      "filePath": "tokens/color/crayon/yellow.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.yellow.50}",
        "value": "{color.yellow.50}"
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
      "$type": "color",
      "$value": "185 132 18",
      "value": "185 132 18",
      "filePath": "tokens/color/crayon/yellow.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.yellow.50}",
        "value": "{color.yellow.50}"
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
      "$type": "color",
      "$value": "37.77777777777777 81.81818181818181% 32.35294117647059%",
      "value": "37.77777777777777 81.81818181818181% 32.35294117647059%",
      "filePath": "tokens/color/crayon/yellow.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.yellow.60}",
        "value": "{color.yellow.60}"
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
      "$type": "color",
      "$value": "150 100 15",
      "value": "150 100 15",
      "filePath": "tokens/color/crayon/yellow.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.yellow.60}",
        "value": "{color.yellow.60}"
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
      "$type": "color",
      "$value": "35.192307692307686 82.53968253968253% 24.705882352941178%",
      "value": "35.192307692307686 82.53968253968253% 24.705882352941178%",
      "filePath": "tokens/color/crayon/yellow.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.yellow.70}",
        "value": "{color.yellow.70}"
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
      "$type": "color",
      "$value": "115 72 11",
      "value": "115 72 11",
      "filePath": "tokens/color/crayon/yellow.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.yellow.70}",
        "value": "{color.yellow.70}"
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
      "value": "#ee0000",
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "original": {
        "$value": "{color.brand.red.on-light}",
        "attributes": {
          "category": "icon",
          "type": "color"
        },
        "value": "{color.brand.red.on-light}"
      },
      "name": "rh-color-icon-primary-on-light",
      "path": [
        "color",
        "icon",
        "primary",
        "on-light"
      ],
      "$type": "color"
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
      "value": "#ee0000",
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "original": {
        "$value": "{color.brand.red.on-dark}",
        "attributes": {
          "category": "icon",
          "type": "color"
        },
        "value": "{color.brand.red.on-dark}"
      },
      "name": "rh-color-icon-primary-on-dark",
      "path": [
        "color",
        "icon",
        "primary",
        "on-dark"
      ],
      "$type": "color"
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
      "value": "#151515",
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "original": {
        "$value": "{color.gray.95}",
        "attributes": {
          "category": "icon",
          "type": "color"
        },
        "value": "{color.gray.95}"
      },
      "name": "rh-color-icon-secondary-on-light",
      "path": [
        "color",
        "icon",
        "secondary",
        "on-light"
      ],
      "$type": "color"
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
      "value": "#ffffff",
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "original": {
        "$value": "{color.white}",
        "attributes": {
          "category": "icon",
          "type": "color"
        },
        "value": "{color.white}"
      },
      "name": "rh-color-icon-secondary-on-dark",
      "path": [
        "color",
        "icon",
        "secondary",
        "on-dark"
      ],
      "$type": "color"
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
      "value": "#707070",
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "original": {
        "$value": "{color.gray.50}",
        "attributes": {
          "category": "icon",
          "type": "color"
        },
        "value": "{color.gray.50}"
      },
      "name": "rh-color-icon-subtle",
      "path": [
        "color",
        "icon",
        "subtle",
        "_"
      ],
      "$type": "color"
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
      "value": "#a3a3a3",
      "filePath": "tokens/color/icon.yml",
      "isSource": true,
      "original": {
        "$value": "{color.gray.40}",
        "attributes": {
          "category": "icon",
          "type": "color"
        },
        "value": "{color.gray.40}"
      },
      "name": "rh-color-icon-subtle-hover",
      "path": [
        "color",
        "icon",
        "subtle",
        "hover"
      ],
      "$type": "color"
    }
  ],
  [
    "--rh-color-interactive-blue-lightest",
    {
      "$value": "#b9dafc",
      "$description": "Inline link hover (dark theme)",
      "value": "#b9dafc",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.blue.20}",
        "$description": "Inline link hover (dark theme)",
        "value": "{color.blue.20}"
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
      ],
      "comment": "Inline link hover (dark theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-interactive-blue-lighter",
    {
      "$value": "#92c5f9",
      "$description": "Inline link (dark theme)",
      "value": "#92c5f9",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.blue.30}",
        "$description": "Inline link (dark theme)",
        "value": "{color.blue.30}"
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
      ],
      "comment": "Inline link (dark theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-interactive-blue-darker",
    {
      "$value": "#0066cc",
      "$description": "Inline link (light theme)",
      "value": "#0066cc",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.blue.50}",
        "$description": "Inline link (light theme)",
        "value": "{color.blue.50}"
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
      ],
      "comment": "Inline link (light theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-interactive-blue-darkest",
    {
      "$value": "#003366",
      "$description": "Inline link hover (light theme)",
      "value": "#003366",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.blue.70}",
        "$description": "Inline link hover (light theme)",
        "value": "{color.blue.70}"
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
      ],
      "comment": "Inline link hover (light theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-interactive-purple-lightest",
    {
      "$value": "#ece6ff",
      "$description": "Inline link visited hover (dark theme)",
      "value": "#ece6ff",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.purple.10}",
        "$description": "Inline link visited hover (dark theme)",
        "value": "{color.purple.10}"
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
      ],
      "comment": "Inline link visited hover (dark theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-interactive-purple-lighter",
    {
      "$value": "#b6a6e9",
      "$description": "Inline link visited (dark theme)",
      "value": "#b6a6e9",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.purple.30}",
        "$description": "Inline link visited (dark theme)",
        "value": "{color.purple.30}"
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
      ],
      "comment": "Inline link visited (dark theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-interactive-purple-darker",
    {
      "$value": "#5e40be",
      "$description": "Inline link visited (light theme)",
      "value": "#5e40be",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.purple.50}",
        "$description": "Inline link visited (light theme)",
        "value": "{color.purple.50}"
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
      ],
      "comment": "Inline link visited (light theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-interactive-purple-darkest",
    {
      "$value": "#21134d",
      "$description": "Inline link visited hover (light theme)",
      "value": "#21134d",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.purple.70}",
        "$description": "Inline link visited hover (light theme)",
        "value": "{color.purple.70}"
      },
      "name": "rh-color-interactive-purple-darkest",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "purple",
        "subitem": "darkest",
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
        "purple",
        "darkest"
      ],
      "comment": "Inline link visited hover (light theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-surface-lightest",
    {
      "$value": "#ffffff",
      "$description": "Primary surface (light theme)",
      "value": "#ffffff",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.white}",
        "$description": "Primary surface (light theme)",
        "value": "{color.white}"
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
      ],
      "comment": "Primary surface (light theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-surface-lighter",
    {
      "$value": "#f2f2f2",
      "$description": "Tertiary surface (light theme)",
      "value": "#f2f2f2",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.gray.10}",
        "$description": "Tertiary surface (light theme)",
        "value": "{color.gray.10}"
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
      ],
      "comment": "Tertiary surface (light theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-surface-light",
    {
      "$value": "#e0e0e0",
      "$description": "Secondary surface (light theme)",
      "value": "#e0e0e0",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.gray.20}",
        "$description": "Secondary surface (light theme)",
        "value": "{color.gray.20}"
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
      ],
      "comment": "Secondary surface (light theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-surface-dark",
    {
      "$value": "#383838",
      "$description": "Tertiary surface (dark theme)",
      "value": "#383838",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.gray.70}",
        "$description": "Tertiary surface (dark theme)",
        "value": "{color.gray.70}"
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
      ],
      "comment": "Tertiary surface (dark theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-surface-dark-alt",
    {
      "$value": "#292929",
      "$description": "Alternative tertiary surface (not available for use with context provider)",
      "value": "#292929",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.gray.80}",
        "$description": "Alternative tertiary surface (not available for use with context provider)",
        "value": "{color.gray.80}"
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
      ],
      "comment": "Alternative tertiary surface (not available for use with context provider)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-surface-darker",
    {
      "$value": "#1f1f1f",
      "$description": "Secondary surface (dark theme)",
      "value": "#1f1f1f",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.gray.90}",
        "$description": "Secondary surface (dark theme)",
        "value": "{color.gray.90}"
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
      ],
      "comment": "Secondary surface (dark theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-surface-darkest",
    {
      "$value": "#151515",
      "$description": "Primary surface (dark theme)",
      "value": "#151515",
      "filePath": "tokens/color/surface.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.gray.95}",
        "$description": "Primary surface (dark theme)",
        "value": "{color.gray.95}"
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
      ],
      "comment": "Primary surface (dark theme)",
      "$type": "color"
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
      "value": "#151515",
      "filePath": "tokens/color/text.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.gray.95}",
        "$description": "Primary text color for light theme",
        "attributes": {
          "category": "typography",
          "type": "color"
        },
        "value": "{color.gray.95}"
      },
      "name": "rh-color-text-primary-on-light",
      "path": [
        "color",
        "text",
        "primary",
        "on-light"
      ],
      "comment": "Primary text color for light theme",
      "$type": "color"
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
      "value": "#ffffff",
      "filePath": "tokens/color/text.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.white}",
        "$description": "Primary text color for dark theme",
        "attributes": {
          "category": "typography",
          "type": "color"
        },
        "value": "{color.white}"
      },
      "name": "rh-color-text-primary-on-dark",
      "path": [
        "color",
        "text",
        "primary",
        "on-dark"
      ],
      "comment": "Primary text color for dark theme",
      "$type": "color"
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
      "value": "#4d4d4d",
      "filePath": "tokens/color/text.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.gray.60}",
        "$description": "Secondary text color for light theme",
        "attributes": {
          "category": "typography",
          "type": "color"
        },
        "value": "{color.gray.60}"
      },
      "name": "rh-color-text-secondary-on-light",
      "path": [
        "color",
        "text",
        "secondary",
        "on-light"
      ],
      "comment": "Secondary text color for light theme",
      "$type": "color"
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
      "value": "#c7c7c7",
      "filePath": "tokens/color/text.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.gray.30}",
        "$description": "Secondary text color for dark theme",
        "attributes": {
          "category": "typography",
          "type": "color"
        },
        "value": "{color.gray.30}"
      },
      "name": "rh-color-text-secondary-on-dark",
      "path": [
        "color",
        "text",
        "secondary",
        "on-dark"
      ],
      "comment": "Secondary text color for dark theme",
      "$type": "color"
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
      "value": "#ee0000",
      "filePath": "tokens/color/text.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.brand.red.on-light}",
        "$description": "Brand text color for light theme",
        "attributes": {
          "category": "typography",
          "type": "color"
        },
        "value": "{color.brand.red.on-light}"
      },
      "name": "rh-color-text-brand-on-light",
      "path": [
        "color",
        "text",
        "brand",
        "on-light"
      ],
      "comment": "Brand text color for light theme",
      "$type": "color"
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
      "value": "#ee0000",
      "filePath": "tokens/color/text.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.brand.red.on-dark}",
        "$description": "Brand text color for dark theme",
        "attributes": {
          "category": "typography",
          "type": "color"
        },
        "value": "{color.brand.red.on-dark}"
      },
      "name": "rh-color-text-brand-on-dark",
      "path": [
        "color",
        "text",
        "brand",
        "on-dark"
      ],
      "comment": "Brand text color for dark theme",
      "$type": "color"
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
      "$value": "RedHatDisplay, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif",
      "attributes": {
        "category": "typography",
        "type": "font-family",
        "item": "heading"
      },
      "value": "RedHatDisplay, \"Red Hat Display\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif",
      "filePath": "tokens/font/family.yml",
      "isSource": true,
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
          "Noto Sans Arabic",
          "Noto Sans Hebrew",
          "Noto Sans JP",
          "Noto Sans KR",
          "Noto Sans Malayalam",
          "Noto Sans SC",
          "Noto Sans TC",
          "Noto Sans Thai",
          "Helvetica",
          "Arial",
          "sans-serif"
        ],
        "attributes": {
          "category": "typography",
          "type": "font-family"
        },
        "value": [
          "RedHatDisplay",
          "Red Hat Display",
          "Noto Sans Arabic",
          "Noto Sans Hebrew",
          "Noto Sans JP",
          "Noto Sans KR",
          "Noto Sans Malayalam",
          "Noto Sans SC",
          "Noto Sans TC",
          "Noto Sans Thai",
          "Helvetica",
          "Arial",
          "sans-serif"
        ]
      },
      "name": "rh-font-family-heading",
      "path": [
        "font",
        "family",
        "heading"
      ],
      "comment": "Heading font family",
      "$type": "fontFamily"
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
      "$value": "RedHatText, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif",
      "attributes": {
        "category": "typography",
        "type": "font-family",
        "item": "body-text"
      },
      "value": "RedHatText, \"Red Hat Text\", \"Noto Sans Arabic\", \"Noto Sans Hebrew\", \"Noto Sans JP\", \"Noto Sans KR\", \"Noto Sans Malayalam\", \"Noto Sans SC\", \"Noto Sans TC\", \"Noto Sans Thai\", Helvetica, Arial, sans-serif",
      "filePath": "tokens/font/family.yml",
      "isSource": true,
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
          "Noto Sans Arabic",
          "Noto Sans Hebrew",
          "Noto Sans JP",
          "Noto Sans KR",
          "Noto Sans Malayalam",
          "Noto Sans SC",
          "Noto Sans TC",
          "Noto Sans Thai",
          "Helvetica",
          "Arial",
          "sans-serif"
        ],
        "attributes": {
          "category": "typography",
          "type": "font-family"
        },
        "value": [
          "RedHatText",
          "Red Hat Text",
          "Noto Sans Arabic",
          "Noto Sans Hebrew",
          "Noto Sans JP",
          "Noto Sans KR",
          "Noto Sans Malayalam",
          "Noto Sans SC",
          "Noto Sans TC",
          "Noto Sans Thai",
          "Helvetica",
          "Arial",
          "sans-serif"
        ]
      },
      "name": "rh-font-family-body-text",
      "path": [
        "font",
        "family",
        "body-text"
      ],
      "comment": "Body text font family",
      "$type": "fontFamily"
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
      "$value": "RedHatMono, \"Red Hat Mono\", \"Courier New\", Courier, monospace",
      "attributes": {
        "category": "typography",
        "type": "font-family",
        "item": "code"
      },
      "value": "RedHatMono, \"Red Hat Mono\", \"Courier New\", Courier, monospace",
      "filePath": "tokens/font/family.yml",
      "isSource": true,
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
        "value": [
          "RedHatMono",
          "Red Hat Mono",
          "Courier New",
          "Courier",
          "monospace"
        ]
      },
      "name": "rh-font-family-code",
      "path": [
        "font",
        "family",
        "code"
      ],
      "comment": "Code font family",
      "$type": "fontFamily"
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
      "value": "0.75rem",
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "original": {
        "$value": "0.75rem",
        "$description": "12px font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "value": "0.75rem"
      },
      "name": "rh-font-size-body-text-xs",
      "path": [
        "font",
        "size",
        "body-text",
        "xs"
      ],
      "comment": "12px font size",
      "$type": "dimension"
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
      "value": "0.875rem",
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "original": {
        "$value": "0.875rem",
        "$description": "14px font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "value": "0.875rem"
      },
      "name": "rh-font-size-body-text-sm",
      "path": [
        "font",
        "size",
        "body-text",
        "sm"
      ],
      "comment": "14px font size",
      "$type": "dimension"
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
      "value": "1rem",
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "original": {
        "$value": "1rem",
        "$description": "16px font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "value": "1rem"
      },
      "name": "rh-font-size-body-text-md",
      "path": [
        "font",
        "size",
        "body-text",
        "md"
      ],
      "comment": "16px font size",
      "$type": "dimension"
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
      "value": "1.125rem",
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "original": {
        "$value": "1.125rem",
        "$description": "18px font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "value": "1.125rem"
      },
      "name": "rh-font-size-body-text-lg",
      "path": [
        "font",
        "size",
        "body-text",
        "lg"
      ],
      "comment": "18px font size",
      "$type": "dimension"
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
      "value": "1.25rem",
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "original": {
        "$value": "1.25rem",
        "$description": "20px font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "value": "1.25rem"
      },
      "name": "rh-font-size-body-text-xl",
      "path": [
        "font",
        "size",
        "body-text",
        "xl"
      ],
      "comment": "20px font size",
      "$type": "dimension"
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
      "value": "1.5rem",
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "original": {
        "$value": "1.5rem",
        "$description": "24px font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "value": "1.5rem"
      },
      "name": "rh-font-size-body-text-2xl",
      "path": [
        "font",
        "size",
        "body-text",
        "2xl"
      ],
      "comment": "24px font size",
      "$type": "dimension"
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
      "value": "0.75rem",
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "original": {
        "$value": "{font.size.body-text.xs}",
        "$description": "12px font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "value": "{font.size.body-text.xs}"
      },
      "name": "rh-font-size-code-xs",
      "path": [
        "font",
        "size",
        "code",
        "xs"
      ],
      "comment": "12px font size",
      "$type": "dimension"
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
      "value": "0.875rem",
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "original": {
        "$value": "{font.size.body-text.sm}",
        "$description": "14px font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "value": "{font.size.body-text.sm}"
      },
      "name": "rh-font-size-code-sm",
      "path": [
        "font",
        "size",
        "code",
        "sm"
      ],
      "comment": "14px font size",
      "$type": "dimension"
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
      "value": "1rem",
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "original": {
        "$value": "{font.size.body-text.md}",
        "$description": "16px font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "value": "{font.size.body-text.md}"
      },
      "name": "rh-font-size-code-md",
      "path": [
        "font",
        "size",
        "code",
        "md"
      ],
      "comment": "16px font size",
      "$type": "dimension"
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
      "value": "1.125rem",
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "original": {
        "$value": "{font.size.body-text.lg}",
        "$description": "18px font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "value": "{font.size.body-text.lg}"
      },
      "name": "rh-font-size-code-lg",
      "path": [
        "font",
        "size",
        "code",
        "lg"
      ],
      "comment": "18px font size",
      "$type": "dimension"
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
      "value": "1.25rem",
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "original": {
        "$value": "{font.size.body-text.xl}",
        "$description": "20px font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "value": "{font.size.body-text.xl}"
      },
      "name": "rh-font-size-code-xl",
      "path": [
        "font",
        "size",
        "code",
        "xl"
      ],
      "comment": "20px font size",
      "$type": "dimension"
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
      "value": "1.5rem",
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "original": {
        "$value": "{font.size.body-text.2xl}",
        "$description": "24px font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "value": "{font.size.body-text.2xl}"
      },
      "name": "rh-font-size-code-2xl",
      "path": [
        "font",
        "size",
        "code",
        "2xl"
      ],
      "comment": "24px font size",
      "$type": "dimension"
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
      "value": "1.25rem",
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "original": {
        "$value": "1.25rem",
        "$description": "h6 heading font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "value": "1.25rem"
      },
      "name": "rh-font-size-heading-xs",
      "path": [
        "font",
        "size",
        "heading",
        "xs"
      ],
      "comment": "h6 heading font size",
      "$type": "dimension"
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
      "value": "1.5rem",
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "original": {
        "$value": "1.5rem",
        "$description": "h5 heading font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "value": "1.5rem"
      },
      "name": "rh-font-size-heading-sm",
      "path": [
        "font",
        "size",
        "heading",
        "sm"
      ],
      "comment": "h5 heading font size",
      "$type": "dimension"
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
      "value": "1.75rem",
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "original": {
        "$value": "1.75rem",
        "$description": "h4 heading font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "value": "1.75rem"
      },
      "name": "rh-font-size-heading-md",
      "path": [
        "font",
        "size",
        "heading",
        "md"
      ],
      "comment": "h4 heading font size",
      "$type": "dimension"
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
      "value": "2.25rem",
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "original": {
        "$value": "2.25rem",
        "$description": "h3 heading font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "value": "2.25rem"
      },
      "name": "rh-font-size-heading-lg",
      "path": [
        "font",
        "size",
        "heading",
        "lg"
      ],
      "comment": "h3 heading font size",
      "$type": "dimension"
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
      "value": "2.5rem",
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "original": {
        "$value": "2.5rem",
        "$description": "h2 heading font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "value": "2.5rem"
      },
      "name": "rh-font-size-heading-xl",
      "path": [
        "font",
        "size",
        "heading",
        "xl"
      ],
      "comment": "h2 heading font size",
      "$type": "dimension"
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
      "value": "3rem",
      "filePath": "tokens/font/size.yml",
      "isSource": true,
      "original": {
        "$value": "3rem",
        "$description": "h1 heading font size",
        "attributes": {
          "category": "typography",
          "type": "font-size"
        },
        "value": "3rem"
      },
      "name": "rh-font-size-heading-2xl",
      "path": [
        "font",
        "size",
        "heading",
        "2xl"
      ],
      "comment": "h1 heading font size",
      "$type": "dimension"
    }
  ],
  [
    "--rh-font-weight-body-text-regular",
    {
      "$description": "Regular font weight",
      "$value": 400,
      "attributes": {
        "category": "typography",
        "type": "font-weight",
        "aliases": [
          "regular",
          "normal",
          "book"
        ],
        "item": "body-text",
        "subitem": "regular"
      },
      "value": 400,
      "filePath": "tokens/font/weight.yml",
      "isSource": true,
      "original": {
        "$description": "Regular font weight",
        "$value": 400,
        "attributes": {
          "category": "typography",
          "type": "font-weight"
        },
        "value": 400
      },
      "name": "rh-font-weight-body-text-regular",
      "path": [
        "font",
        "weight",
        "body-text",
        "regular"
      ],
      "comment": "Regular font weight",
      "$type": "fontWeight"
    }
  ],
  [
    "--rh-font-weight-body-text-medium",
    {
      "$description": "Medium font weight",
      "$value": 500,
      "attributes": {
        "category": "typography",
        "type": "font-weight",
        "aliases": [
          "medium"
        ],
        "item": "body-text",
        "subitem": "medium"
      },
      "value": 500,
      "filePath": "tokens/font/weight.yml",
      "isSource": true,
      "original": {
        "$description": "Medium font weight",
        "$value": 500,
        "attributes": {
          "category": "typography",
          "type": "font-weight"
        },
        "value": 500
      },
      "name": "rh-font-weight-body-text-medium",
      "path": [
        "font",
        "weight",
        "body-text",
        "medium"
      ],
      "comment": "Medium font weight",
      "$type": "fontWeight"
    }
  ],
  [
    "--rh-font-weight-code-regular",
    {
      "$description": "Regular font weight",
      "$value": 400,
      "attributes": {
        "category": "typography",
        "type": "font-weight",
        "aliases": [
          "regular",
          "normal",
          "book"
        ],
        "item": "code",
        "subitem": "regular"
      },
      "value": 400,
      "filePath": "tokens/font/weight.yml",
      "isSource": true,
      "original": {
        "$description": "Regular font weight",
        "$value": 400,
        "attributes": {
          "category": "typography",
          "type": "font-weight"
        },
        "value": 400
      },
      "name": "rh-font-weight-code-regular",
      "path": [
        "font",
        "weight",
        "code",
        "regular"
      ],
      "comment": "Regular font weight",
      "$type": "fontWeight"
    }
  ],
  [
    "--rh-font-weight-code-medium",
    {
      "$description": "Medium font weight",
      "$value": 500,
      "attributes": {
        "category": "typography",
        "type": "font-weight",
        "aliases": [
          "medium"
        ],
        "item": "code",
        "subitem": "medium"
      },
      "value": 500,
      "filePath": "tokens/font/weight.yml",
      "isSource": true,
      "original": {
        "$description": "Medium font weight",
        "$value": 500,
        "attributes": {
          "category": "typography",
          "type": "font-weight"
        },
        "value": 500
      },
      "name": "rh-font-weight-code-medium",
      "path": [
        "font",
        "weight",
        "code",
        "medium"
      ],
      "comment": "Medium font weight",
      "$type": "fontWeight"
    }
  ],
  [
    "--rh-font-weight-heading-regular",
    {
      "$description": "Regular font weight for headings",
      "$value": 300,
      "attributes": {
        "category": "typography",
        "type": "font-weight",
        "aliases": [
          "light"
        ],
        "item": "heading",
        "subitem": "regular"
      },
      "value": 300,
      "filePath": "tokens/font/weight.yml",
      "isSource": true,
      "original": {
        "$description": "Regular font weight for headings",
        "$value": 300,
        "attributes": {
          "category": "typography",
          "type": "font-weight"
        },
        "value": 300
      },
      "name": "rh-font-weight-heading-regular",
      "path": [
        "font",
        "weight",
        "heading",
        "regular"
      ],
      "comment": "Regular font weight for headings",
      "$type": "fontWeight"
    }
  ],
  [
    "--rh-font-weight-heading-medium",
    {
      "$description": "Medium font weight for headings",
      "$value": 500,
      "attributes": {
        "category": "typography",
        "type": "font-weight",
        "aliases": [
          "medium"
        ],
        "item": "heading",
        "subitem": "medium"
      },
      "value": 500,
      "filePath": "tokens/font/weight.yml",
      "isSource": true,
      "original": {
        "$description": "Medium font weight for headings",
        "$value": 500,
        "attributes": {
          "category": "typography",
          "type": "font-weight"
        },
        "value": 500
      },
      "name": "rh-font-weight-heading-medium",
      "path": [
        "font",
        "weight",
        "heading",
        "medium"
      ],
      "comment": "Medium font weight for headings",
      "$type": "fontWeight"
    }
  ],
  [
    "--rh-font-weight-heading-bold",
    {
      "$description": "Bold font weight for headings",
      "$value": 700,
      "attributes": {
        "category": "typography",
        "type": "font-weight",
        "aliases": [
          "bold"
        ],
        "item": "heading",
        "subitem": "bold"
      },
      "value": 700,
      "filePath": "tokens/font/weight.yml",
      "isSource": true,
      "original": {
        "$description": "Bold font weight for headings",
        "$value": 700,
        "attributes": {
          "category": "typography",
          "type": "font-weight"
        },
        "value": 700
      },
      "name": "rh-font-weight-heading-bold",
      "path": [
        "font",
        "weight",
        "heading",
        "bold"
      ],
      "comment": "Bold font weight for headings",
      "$type": "fontWeight"
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
      "value": "0.0125rem",
      "filePath": "tokens/font/letter-spacing.yml",
      "isSource": true,
      "original": {
        "$value": "0.0125rem",
        "$description": "Extra letter spacing for small body text sizes",
        "attributes": {
          "category": "typography",
          "type": "letter-spacing"
        },
        "value": "0.0125rem"
      },
      "name": "rh-letter-spacing-body-text",
      "path": [
        "letter-spacing",
        "body",
        "text"
      ],
      "comment": "Extra letter spacing for small body text sizes"
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
      "value": 1.3,
      "filePath": "tokens/font/line-height.yml",
      "isSource": true,
      "original": {
        "$value": 1.3,
        "$description": "Line height for headings",
        "attributes": {
          "category": "typography",
          "type": "line-height"
        },
        "value": 1.3
      },
      "name": "rh-line-height-heading",
      "path": [
        "line-height",
        "heading"
      ],
      "comment": "Line height for headings"
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
      "value": 1.5,
      "filePath": "tokens/font/line-height.yml",
      "isSource": true,
      "original": {
        "$value": 1.5,
        "$description": "Line height for body text",
        "attributes": {
          "category": "typography",
          "type": "line-height"
        },
        "value": 1.5
      },
      "name": "rh-line-height-body-text",
      "path": [
        "line-height",
        "body-text"
      ],
      "comment": "Line height for body text"
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
      "value": 1.5,
      "filePath": "tokens/font/line-height.yml",
      "isSource": true,
      "original": {
        "$value": 1.5,
        "$description": "Line height for code",
        "attributes": {
          "category": "typography",
          "type": "line-height"
        },
        "value": 1.5
      },
      "name": "rh-line-height-code",
      "path": [
        "line-height",
        "code"
      ],
      "comment": "Line height for code"
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
      "value": "16px",
      "filePath": "tokens/length/icon.yml",
      "isSource": true,
      "original": {
        "$value": "{length.lg}",
        "$description": "16px icon box",
        "attributes": {
          "category": "icon",
          "type": "size"
        },
        "value": "{length.lg}"
      },
      "name": "rh-size-icon-01",
      "path": [
        "size",
        "icon",
        "01"
      ],
      "comment": "16px icon box",
      "$type": "dimension"
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
      "value": "24px",
      "filePath": "tokens/length/icon.yml",
      "isSource": true,
      "original": {
        "$value": "{length.xl}",
        "$description": "24px icon box",
        "attributes": {
          "category": "icon",
          "type": "size"
        },
        "value": "{length.xl}"
      },
      "name": "rh-size-icon-02",
      "path": [
        "size",
        "icon",
        "02"
      ],
      "comment": "24px icon box",
      "$type": "dimension"
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
      "value": "32px",
      "filePath": "tokens/length/icon.yml",
      "isSource": true,
      "original": {
        "$value": "{length.2xl}",
        "$description": "32px icon box",
        "attributes": {
          "category": "icon",
          "type": "size"
        },
        "value": "{length.2xl}"
      },
      "name": "rh-size-icon-03",
      "path": [
        "size",
        "icon",
        "03"
      ],
      "comment": "32px icon box",
      "$type": "dimension"
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
      "value": "40px",
      "filePath": "tokens/length/icon.yml",
      "isSource": true,
      "original": {
        "$value": "40px",
        "$description": "40px icon box",
        "attributes": {
          "category": "icon",
          "type": "size"
        },
        "value": "40px"
      },
      "name": "rh-size-icon-04",
      "path": [
        "size",
        "icon",
        "04"
      ],
      "comment": "40px icon box",
      "$type": "dimension"
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
      "value": "48px",
      "filePath": "tokens/length/icon.yml",
      "isSource": true,
      "original": {
        "$value": "{length.3xl}",
        "$description": "48px icon box",
        "attributes": {
          "category": "icon",
          "type": "size"
        },
        "value": "{length.3xl}"
      },
      "name": "rh-size-icon-05",
      "path": [
        "size",
        "icon",
        "05"
      ],
      "comment": "48px icon box",
      "$type": "dimension"
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
      "value": "64px",
      "filePath": "tokens/length/icon.yml",
      "isSource": true,
      "original": {
        "$value": "{length.4xl}",
        "$description": "64px icon box",
        "attributes": {
          "category": "icon",
          "type": "size"
        },
        "value": "{length.4xl}"
      },
      "name": "rh-size-icon-06",
      "path": [
        "size",
        "icon",
        "06"
      ],
      "comment": "64px icon box",
      "$type": "dimension"
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
      "value": "80px",
      "filePath": "tokens/length/icon.yml",
      "isSource": true,
      "original": {
        "$value": "{length.5xl}",
        "$description": "80px icon box",
        "attributes": {
          "category": "icon",
          "type": "size"
        },
        "value": "{length.5xl}"
      },
      "name": "rh-size-icon-07",
      "path": [
        "size",
        "icon",
        "07"
      ],
      "comment": "80px icon box",
      "$type": "dimension"
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
      "value": "96px",
      "filePath": "tokens/length/icon.yml",
      "isSource": true,
      "original": {
        "$value": "{length.6xl}",
        "$description": "96px icon box",
        "attributes": {
          "category": "icon",
          "type": "size"
        },
        "value": "{length.6xl}"
      },
      "name": "rh-size-icon-08",
      "path": [
        "size",
        "icon",
        "08"
      ],
      "comment": "96px icon box",
      "$type": "dimension"
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
      "value": "128px",
      "filePath": "tokens/length/icon.yml",
      "isSource": true,
      "original": {
        "$value": "{length.7xl}",
        "$description": "128px icon box",
        "attributes": {
          "category": "icon",
          "type": "size"
        },
        "value": "{length.7xl}"
      },
      "name": "rh-size-icon-09",
      "path": [
        "size",
        "icon",
        "09"
      ],
      "comment": "128px icon box",
      "$type": "dimension"
    }
  ],
  [
    "--rh-length-4xs",
    {
      "$value": "1px",
      "$description": "1px length token",
      "value": "1px",
      "filePath": "tokens/length/length.yaml",
      "isSource": true,
      "original": {
        "$value": "1px",
        "$description": "1px length token",
        "value": "1px"
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
      ],
      "comment": "1px length token",
      "$type": "dimension"
    }
  ],
  [
    "--rh-length-3xs",
    {
      "$value": "2px",
      "$description": "2px length token",
      "value": "2px",
      "filePath": "tokens/length/length.yaml",
      "isSource": true,
      "original": {
        "$value": "2px",
        "$description": "2px length token",
        "value": "2px"
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
      ],
      "comment": "2px length token",
      "$type": "dimension"
    }
  ],
  [
    "--rh-length-2xs",
    {
      "$value": "3px",
      "$description": "3px length token",
      "value": "3px",
      "filePath": "tokens/length/length.yaml",
      "isSource": true,
      "original": {
        "$value": "3px",
        "$description": "3px length token",
        "value": "3px"
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
      ],
      "comment": "3px length token",
      "$type": "dimension"
    }
  ],
  [
    "--rh-length-xs",
    {
      "$value": "4px",
      "$description": "4px length token",
      "value": "4px",
      "filePath": "tokens/length/length.yaml",
      "isSource": true,
      "original": {
        "$value": "4px",
        "$description": "4px length token",
        "value": "4px"
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
      ],
      "comment": "4px length token",
      "$type": "dimension"
    }
  ],
  [
    "--rh-length-sm",
    {
      "$value": "6px",
      "$description": "6px length token",
      "value": "6px",
      "filePath": "tokens/length/length.yaml",
      "isSource": true,
      "original": {
        "$value": "6px",
        "$description": "6px length token",
        "value": "6px"
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
      ],
      "comment": "6px length token",
      "$type": "dimension"
    }
  ],
  [
    "--rh-length-md",
    {
      "$value": "8px",
      "$description": "8px length token",
      "value": "8px",
      "filePath": "tokens/length/length.yaml",
      "isSource": true,
      "original": {
        "$value": "8px",
        "$description": "8px length token",
        "value": "8px"
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
      ],
      "comment": "8px length token",
      "$type": "dimension"
    }
  ],
  [
    "--rh-length-lg",
    {
      "$value": "16px",
      "$description": "16px length token",
      "value": "16px",
      "filePath": "tokens/length/length.yaml",
      "isSource": true,
      "original": {
        "$value": "16px",
        "$description": "16px length token",
        "value": "16px"
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
      ],
      "comment": "16px length token",
      "$type": "dimension"
    }
  ],
  [
    "--rh-length-xl",
    {
      "$value": "24px",
      "$description": "24px length token",
      "value": "24px",
      "filePath": "tokens/length/length.yaml",
      "isSource": true,
      "original": {
        "$value": "24px",
        "$description": "24px length token",
        "value": "24px"
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
      ],
      "comment": "24px length token",
      "$type": "dimension"
    }
  ],
  [
    "--rh-length-2xl",
    {
      "$value": "32px",
      "$description": "32px length token",
      "value": "32px",
      "filePath": "tokens/length/length.yaml",
      "isSource": true,
      "original": {
        "$value": "32px",
        "$description": "32px length token",
        "value": "32px"
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
      ],
      "comment": "32px length token",
      "$type": "dimension"
    }
  ],
  [
    "--rh-length-3xl",
    {
      "$value": "48px",
      "$description": "48px length token",
      "value": "48px",
      "filePath": "tokens/length/length.yaml",
      "isSource": true,
      "original": {
        "$value": "48px",
        "$description": "48px length token",
        "value": "48px"
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
      ],
      "comment": "48px length token",
      "$type": "dimension"
    }
  ],
  [
    "--rh-length-4xl",
    {
      "$value": "64px",
      "$description": "64px length token",
      "value": "64px",
      "filePath": "tokens/length/length.yaml",
      "isSource": true,
      "original": {
        "$value": "64px",
        "$description": "64px length token",
        "value": "64px"
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
      ],
      "comment": "64px length token",
      "$type": "dimension"
    }
  ],
  [
    "--rh-length-5xl",
    {
      "$value": "80px",
      "$description": "80px length token",
      "value": "80px",
      "filePath": "tokens/length/length.yaml",
      "isSource": true,
      "original": {
        "$value": "80px",
        "$description": "80px length token",
        "value": "80px"
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
      ],
      "comment": "80px length token",
      "$type": "dimension"
    }
  ],
  [
    "--rh-length-6xl",
    {
      "$value": "96px",
      "$description": "96px length token",
      "value": "96px",
      "filePath": "tokens/length/length.yaml",
      "isSource": true,
      "original": {
        "$value": "96px",
        "$description": "96px length token",
        "value": "96px"
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
      ],
      "comment": "96px length token",
      "$type": "dimension"
    }
  ],
  [
    "--rh-length-7xl",
    {
      "$value": "128px",
      "$description": "128px length token",
      "value": "128px",
      "filePath": "tokens/length/length.yaml",
      "isSource": true,
      "original": {
        "$value": "128px",
        "$description": "128px length token",
        "value": "128px"
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
      ],
      "comment": "128px length token",
      "$type": "dimension"
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
      "value": "4px",
      "filePath": "tokens/length/space.yaml",
      "isSource": true,
      "original": {
        "$value": "{length.xs}",
        "$description": "4px spacer",
        "$extensions": {
          "com.redhat.ux": {
            "color": "#ec861b"
          }
        },
        "value": "{length.xs}"
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
      ],
      "comment": "4px spacer",
      "$type": "dimension"
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
      "value": "6px",
      "filePath": "tokens/length/space.yaml",
      "isSource": true,
      "original": {
        "$value": "{length.sm}",
        "$description": "6px spacer",
        "$extensions": {
          "com.redhat.ux": {
            "color": "#f3d53c"
          }
        },
        "value": "{length.sm}"
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
      ],
      "comment": "6px spacer",
      "$type": "dimension"
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
      "value": "8px",
      "filePath": "tokens/length/space.yaml",
      "isSource": true,
      "original": {
        "$value": "{length.md}",
        "$description": "8px spacer",
        "$extensions": {
          "com.redhat.ux": {
            "color": "#9bd917"
          }
        },
        "value": "{length.md}"
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
      ],
      "comment": "8px spacer",
      "$type": "dimension"
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
      "value": "16px",
      "filePath": "tokens/length/space.yaml",
      "isSource": true,
      "original": {
        "$value": "{length.lg}",
        "$description": "16px spacer",
        "$extensions": {
          "com.redhat.ux": {
            "color": "#51a549"
          }
        },
        "value": "{length.lg}"
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
      ],
      "comment": "16px spacer",
      "$type": "dimension"
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
      "value": "24px",
      "filePath": "tokens/length/space.yaml",
      "isSource": true,
      "original": {
        "$value": "{length.xl}",
        "$description": "24px spacer",
        "$extensions": {
          "com.redhat.ux": {
            "color": "#1b8793"
          }
        },
        "value": "{length.xl}"
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
      ],
      "comment": "24px spacer",
      "$type": "dimension"
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
      "value": "32px",
      "filePath": "tokens/length/space.yaml",
      "isSource": true,
      "original": {
        "$value": "{length.2xl}",
        "$description": "32px spacer",
        "$extensions": {
          "com.redhat.ux": {
            "color": "#1893d2"
          }
        },
        "value": "{length.2xl}"
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
      ],
      "comment": "32px spacer",
      "$type": "dimension"
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
      "value": "48px",
      "filePath": "tokens/length/space.yaml",
      "isSource": true,
      "original": {
        "$value": "{length.3xl}",
        "$description": "48px spacer",
        "$extensions": {
          "com.redhat.ux": {
            "color": "#6743c6"
          }
        },
        "value": "{length.3xl}"
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
      ],
      "comment": "48px spacer",
      "$type": "dimension"
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
      "value": "64px",
      "filePath": "tokens/length/space.yaml",
      "isSource": true,
      "original": {
        "$value": "{length.4xl}",
        "$description": "64px spacer",
        "$extensions": {
          "com.redhat.ux": {
            "color": "#341974"
          }
        },
        "value": "{length.4xl}"
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
      ],
      "comment": "64px spacer",
      "$type": "dimension"
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
      "value": "80px",
      "filePath": "tokens/length/space.yaml",
      "isSource": true,
      "original": {
        "$value": "{length.5xl}",
        "$description": "80px spacer",
        "$extensions": {
          "com.redhat.ux": {
            "color": "#b300b3"
          }
        },
        "value": "{length.5xl}"
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
      ],
      "comment": "80px spacer",
      "$type": "dimension"
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
      "value": "96px",
      "filePath": "tokens/length/space.yaml",
      "isSource": true,
      "original": {
        "$value": "{length.6xl}",
        "$description": "96px spacer",
        "$extensions": {
          "com.redhat.ux": {
            "color": "#f279a1"
          }
        },
        "value": "{length.6xl}"
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
      ],
      "comment": "96px spacer",
      "$type": "dimension"
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
      "value": "128px",
      "filePath": "tokens/length/space.yaml",
      "isSource": true,
      "original": {
        "$value": "{length.7xl}",
        "$description": "128px spacer",
        "$extensions": {
          "com.redhat.ux": {
            "color": "#bf1d1d"
          }
        },
        "value": "{length.7xl}"
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
      ],
      "comment": "128px spacer",
      "$type": "dimension"
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
      "value": "(min-width: 576px)",
      "filePath": "tokens/media.yml",
      "isSource": true,
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
        "value": {
          "min-width": "{breakpoint.xs}"
        }
      },
      "name": "rh-media-xs",
      "attributes": {
        "category": "media",
        "type": "xs"
      },
      "path": [
        "media",
        "xs"
      ],
      "comment": "Mobile portrait",
      "$type": "mediaQuery"
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
      "value": "(min-width: 768px)",
      "filePath": "tokens/media.yml",
      "isSource": true,
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
        "value": {
          "min-width": "{breakpoint.sm}"
        }
      },
      "name": "rh-media-sm",
      "attributes": {
        "category": "media",
        "type": "sm"
      },
      "path": [
        "media",
        "sm"
      ],
      "comment": "Mobile landscape",
      "$type": "mediaQuery"
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
      "value": "(min-width: 992px)",
      "filePath": "tokens/media.yml",
      "isSource": true,
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
        "value": {
          "min-width": "{breakpoint.md}"
        }
      },
      "name": "rh-media-md",
      "attributes": {
        "category": "media",
        "type": "md"
      },
      "path": [
        "media",
        "md"
      ],
      "comment": "Tablet portrait",
      "$type": "mediaQuery"
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
      "value": "(min-width: 1200px)",
      "filePath": "tokens/media.yml",
      "isSource": true,
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
        "value": {
          "min-width": "{breakpoint.lg}"
        }
      },
      "name": "rh-media-lg",
      "attributes": {
        "category": "media",
        "type": "lg"
      },
      "path": [
        "media",
        "lg"
      ],
      "comment": "Tablet landscape",
      "$type": "mediaQuery"
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
      "value": "(min-width: 1440px)",
      "filePath": "tokens/media.yml",
      "isSource": true,
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
        "value": {
          "min-width": "{breakpoint.xl}"
        }
      },
      "name": "rh-media-xl",
      "attributes": {
        "category": "media",
        "type": "xl"
      },
      "path": [
        "media",
        "xl"
      ],
      "comment": "Desktop small",
      "$type": "mediaQuery"
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
      "value": "(min-width: 1680px)",
      "filePath": "tokens/media.yml",
      "isSource": true,
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
        "value": {
          "min-width": "{breakpoint.2xl}"
        }
      },
      "name": "rh-media-2xl",
      "attributes": {
        "category": "media",
        "type": "2xl"
      },
      "path": [
        "media",
        "2xl"
      ],
      "comment": "Desktop Large",
      "$type": "mediaQuery"
    }
  ],
  [
    "--rh-opacity-0",
    {
      "$value": "0%",
      "$description": "0% opacity",
      "value": "0%",
      "filePath": "tokens/opacity.yml",
      "isSource": true,
      "original": {
        "$value": "0%",
        "$description": "0% opacity",
        "value": "0%"
      },
      "name": "rh-opacity-0",
      "attributes": {
        "category": "opacity",
        "type": "0"
      },
      "path": [
        "opacity",
        "0"
      ],
      "comment": "0% opacity"
    }
  ],
  [
    "--rh-opacity-10",
    {
      "$value": "10%",
      "$description": "10% opacity",
      "value": "10%",
      "filePath": "tokens/opacity.yml",
      "isSource": true,
      "original": {
        "$value": "10%",
        "$description": "10% opacity",
        "value": "10%"
      },
      "name": "rh-opacity-10",
      "attributes": {
        "category": "opacity",
        "type": "10"
      },
      "path": [
        "opacity",
        "10"
      ],
      "comment": "10% opacity"
    }
  ],
  [
    "--rh-opacity-20",
    {
      "$value": "20%",
      "$description": "20% opacity",
      "value": "20%",
      "filePath": "tokens/opacity.yml",
      "isSource": true,
      "original": {
        "$value": "20%",
        "$description": "20% opacity",
        "value": "20%"
      },
      "name": "rh-opacity-20",
      "attributes": {
        "category": "opacity",
        "type": "20"
      },
      "path": [
        "opacity",
        "20"
      ],
      "comment": "20% opacity"
    }
  ],
  [
    "--rh-opacity-30",
    {
      "$value": "30%",
      "$description": "30% opacity",
      "value": "30%",
      "filePath": "tokens/opacity.yml",
      "isSource": true,
      "original": {
        "$value": "30%",
        "$description": "30% opacity",
        "value": "30%"
      },
      "name": "rh-opacity-30",
      "attributes": {
        "category": "opacity",
        "type": "30"
      },
      "path": [
        "opacity",
        "30"
      ],
      "comment": "30% opacity"
    }
  ],
  [
    "--rh-opacity-40",
    {
      "$value": "40%",
      "$description": "40% opacity",
      "value": "40%",
      "filePath": "tokens/opacity.yml",
      "isSource": true,
      "original": {
        "$value": "40%",
        "$description": "40% opacity",
        "value": "40%"
      },
      "name": "rh-opacity-40",
      "attributes": {
        "category": "opacity",
        "type": "40"
      },
      "path": [
        "opacity",
        "40"
      ],
      "comment": "40% opacity"
    }
  ],
  [
    "--rh-opacity-50",
    {
      "$value": "50%",
      "$description": "50% opacity",
      "value": "50%",
      "filePath": "tokens/opacity.yml",
      "isSource": true,
      "original": {
        "$value": "50%",
        "$description": "50% opacity",
        "value": "50%"
      },
      "name": "rh-opacity-50",
      "attributes": {
        "category": "opacity",
        "type": "50"
      },
      "path": [
        "opacity",
        "50"
      ],
      "comment": "50% opacity"
    }
  ],
  [
    "--rh-opacity-60",
    {
      "$value": "60%",
      "$description": "60% opacity",
      "value": "60%",
      "filePath": "tokens/opacity.yml",
      "isSource": true,
      "original": {
        "$value": "60%",
        "$description": "60% opacity",
        "value": "60%"
      },
      "name": "rh-opacity-60",
      "attributes": {
        "category": "opacity",
        "type": "60"
      },
      "path": [
        "opacity",
        "60"
      ],
      "comment": "60% opacity"
    }
  ],
  [
    "--rh-opacity-70",
    {
      "$value": "70%",
      "$description": "70% opacity",
      "value": "70%",
      "filePath": "tokens/opacity.yml",
      "isSource": true,
      "original": {
        "$value": "70%",
        "$description": "70% opacity",
        "value": "70%"
      },
      "name": "rh-opacity-70",
      "attributes": {
        "category": "opacity",
        "type": "70"
      },
      "path": [
        "opacity",
        "70"
      ],
      "comment": "70% opacity"
    }
  ],
  [
    "--rh-opacity-80",
    {
      "$value": "80%",
      "$description": "80% opacity",
      "value": "80%",
      "filePath": "tokens/opacity.yml",
      "isSource": true,
      "original": {
        "$value": "80%",
        "$description": "80% opacity",
        "value": "80%"
      },
      "name": "rh-opacity-80",
      "attributes": {
        "category": "opacity",
        "type": "80"
      },
      "path": [
        "opacity",
        "80"
      ],
      "comment": "80% opacity"
    }
  ],
  [
    "--rh-opacity-90",
    {
      "$value": "90%",
      "$description": "90% opacity",
      "value": "90%",
      "filePath": "tokens/opacity.yml",
      "isSource": true,
      "original": {
        "$value": "90%",
        "$description": "90% opacity",
        "value": "90%"
      },
      "name": "rh-opacity-90",
      "attributes": {
        "category": "opacity",
        "type": "90"
      },
      "path": [
        "opacity",
        "90"
      ],
      "comment": "90% opacity"
    }
  ],
  [
    "--rh-opacity-100",
    {
      "$value": "100%",
      "$description": "100% opacity",
      "value": "100%",
      "filePath": "tokens/opacity.yml",
      "isSource": true,
      "original": {
        "$value": "100%",
        "$description": "100% opacity",
        "value": "100%"
      },
      "name": "rh-opacity-100",
      "attributes": {
        "category": "opacity",
        "type": "100"
      },
      "path": [
        "opacity",
        "100"
      ],
      "comment": "100% opacity"
    }
  ],
  [
    "--rh-box-shadow-sm",
    {
      "$description": "Small box shadow",
      "$value": "0 2px 4px 0 rgba(21, 21, 21, 0.2)",
      "value": "0 2px 4px 0 rgba(21, 21, 21, 0.2)",
      "filePath": "tokens/shadow.yml",
      "isSource": true,
      "original": {
        "$description": "Small box shadow",
        "$value": {
          "offsetX": 0,
          "offsetY": "{length.3xs}",
          "blur": "{length.xs}",
          "spread": 0,
          "color": "rgba(21, 21, 21, 0.2)"
        },
        "value": {
          "offsetX": 0,
          "offsetY": "{length.3xs}",
          "blur": "{length.xs}",
          "spread": 0,
          "color": "rgba(21, 21, 21, 0.2)"
        }
      },
      "name": "rh-box-shadow-sm",
      "attributes": {
        "category": "box-shadow",
        "type": "sm"
      },
      "path": [
        "box-shadow",
        "sm"
      ],
      "comment": "Small box shadow",
      "$type": "shadow"
    }
  ],
  [
    "--rh-box-shadow-md",
    {
      "$description": "Medium box shadow",
      "$value": "0 4px 6px 1px rgba(21, 21, 21, 0.25)",
      "value": "0 4px 6px 1px rgba(21, 21, 21, 0.25)",
      "filePath": "tokens/shadow.yml",
      "isSource": true,
      "original": {
        "$description": "Medium box shadow",
        "$value": {
          "offsetX": 0,
          "offsetY": "{length.xs}",
          "blur": "{length.sm}",
          "spread": "{length.4xs}",
          "color": "rgba(21, 21, 21, 0.25)"
        },
        "value": {
          "offsetX": 0,
          "offsetY": "{length.xs}",
          "blur": "{length.sm}",
          "spread": "{length.4xs}",
          "color": "rgba(21, 21, 21, 0.25)"
        }
      },
      "name": "rh-box-shadow-md",
      "attributes": {
        "category": "box-shadow",
        "type": "md"
      },
      "path": [
        "box-shadow",
        "md"
      ],
      "comment": "Medium box shadow",
      "$type": "shadow"
    }
  ],
  [
    "--rh-box-shadow-lg",
    {
      "$description": "Large box shadow",
      "$value": "0 6px 8px 2px rgba(21, 21, 21, 0.3)",
      "value": "0 6px 8px 2px rgba(21, 21, 21, 0.3)",
      "filePath": "tokens/shadow.yml",
      "isSource": true,
      "original": {
        "$description": "Large box shadow",
        "$value": {
          "offsetX": 0,
          "offsetY": "{length.sm}",
          "blur": "{length.md}",
          "spread": "{length.3xs}",
          "color": "rgba(21, 21, 21, 0.3)"
        },
        "value": {
          "offsetX": 0,
          "offsetY": "{length.sm}",
          "blur": "{length.md}",
          "spread": "{length.3xs}",
          "color": "rgba(21, 21, 21, 0.3)"
        }
      },
      "name": "rh-box-shadow-lg",
      "attributes": {
        "category": "box-shadow",
        "type": "lg"
      },
      "path": [
        "box-shadow",
        "lg"
      ],
      "comment": "Large box shadow",
      "$type": "shadow"
    }
  ],
  [
    "--rh-box-shadow-xl",
    {
      "$description": "Extra large box shadow",
      "$value": "0 8px 24px 3px rgba(21, 21, 21, 0.35)",
      "value": "0 8px 24px 3px rgba(21, 21, 21, 0.35)",
      "filePath": "tokens/shadow.yml",
      "isSource": true,
      "original": {
        "$description": "Extra large box shadow",
        "$value": {
          "offsetX": 0,
          "offsetY": "{length.md}",
          "blur": "{length.xl}",
          "spread": "{length.2xs}",
          "color": "rgba(21, 21, 21, 0.35)"
        },
        "value": {
          "offsetX": 0,
          "offsetY": "{length.md}",
          "blur": "{length.xl}",
          "spread": "{length.2xs}",
          "color": "rgba(21, 21, 21, 0.35)"
        }
      },
      "name": "rh-box-shadow-xl",
      "attributes": {
        "category": "box-shadow",
        "type": "xl"
      },
      "path": [
        "box-shadow",
        "xl"
      ],
      "comment": "Extra large box shadow",
      "$type": "shadow"
    }
  ]
]);