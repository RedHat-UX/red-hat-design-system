/**
 * Do not edit directly
 * Generated on Tue, 23 May 2023 15:21:18 GMT
 */


exports.tokens = new Map([
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
        "$value": "{color.blue.400}",
        "$description": "Inline link (light theme)",
        "value": "{color.blue.400}"
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
      "$value": "#73bcf7",
      "$description": "Inline link (dark theme)",
      "value": "#73bcf7",
      "filePath": "tokens/color/accent.yml",
      "isSource": true,
      "original": {
        "$value": "{color.blue.200}",
        "$description": "Inline link (dark theme)",
        "value": "{color.blue.200}"
      },
      "name": "rh-color-accent-base-on-dark",
      "attributes": {
        "category": "color",
        "type": "accent",
        "item": "base",
        "subitem": "on-dark",
        "hex": "73bcf7",
        "rgb": {
          "r": 115,
          "g": 188,
          "b": 247,
          "a": 1
        },
        "hsl": {
          "h": 206.8181818181818,
          "s": 89.1891891891892,
          "l": 70.98039215686275,
          "a": 1
        },
        "hsv": {
          "h": 206.8181818181818,
          "s": 0.534412955465587,
          "v": 0.9686274509803922,
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
        "$value": "{color.red.500}",
        "$description": "Brand red (light theme)",
        "value": "{color.red.500}"
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
      "$value": "#ff442b",
      "$description": "Brand red (dark theme)",
      "value": "#ff442b",
      "filePath": "tokens/color/accent.yml",
      "isSource": true,
      "original": {
        "$value": "{color.red.400}",
        "$description": "Brand red (dark theme)",
        "value": "{color.red.400}"
      },
      "name": "rh-color-accent-brand-on-dark",
      "attributes": {
        "category": "color",
        "type": "accent",
        "item": "brand",
        "subitem": "on-dark",
        "hex": "ff442b",
        "rgb": {
          "r": 255,
          "g": 68,
          "b": 43,
          "a": 1
        },
        "hsl": {
          "h": 7.0754716981132075,
          "s": 100,
          "l": 58.43137254901961,
          "a": 1
        },
        "hsv": {
          "h": 7.0754716981132075,
          "s": 0.8313725490196078,
          "v": 1,
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
        "$value": "{color.gray.90}",
        "$description": "Strong border color (light theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "value": "{color.gray.90}"
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
        "$value": "{color.gray.20}",
        "$description": "Subtle border color (light theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "value": "{color.gray.20}"
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
        "$value": "{color.gray.40}",
        "$description": "Subtle border color (dark theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "value": "{color.gray.40}"
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
        "$value": "{color.blue.400}",
        "$description": "Interactive border color (light theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "value": "{color.blue.400}"
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
      "$value": "#73bcf7",
      "$description": "Interactive border color (dark theme)",
      "attributes": {
        "category": "border",
        "type": "color",
        "item": "interactive",
        "subitem": "on-dark",
        "hex": "73bcf7",
        "rgb": {
          "r": 115,
          "g": 188,
          "b": 247,
          "a": 1
        },
        "hsl": {
          "h": 206.8181818181818,
          "s": 89.1891891891892,
          "l": 70.98039215686275,
          "a": 1
        },
        "hsv": {
          "h": 206.8181818181818,
          "s": 0.534412955465587,
          "v": 0.9686274509803922,
          "a": 1
        },
        "isLight": true
      },
      "value": "#73bcf7",
      "filePath": "tokens/color/border.yml",
      "isSource": true,
      "original": {
        "$value": "{color.blue.200}",
        "$description": "Interactive border color (dark theme)",
        "attributes": {
          "category": "border",
          "type": "color"
        },
        "value": "{color.blue.200}"
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
      "$value": "#fddbdb",
      "$description": "Lightest brand red",
      "value": "#fddbdb",
      "filePath": "tokens/color/brand.yml",
      "isSource": true,
      "original": {
        "$value": "{color.red.100}",
        "$description": "Lightest brand red",
        "value": "{color.red.100}"
      },
      "name": "rh-color-brand-red-lightest",
      "attributes": {
        "category": "color",
        "type": "brand",
        "item": "red",
        "subitem": "lightest",
        "hex": "fddbdb",
        "rgb": {
          "r": 253,
          "g": 219,
          "b": 219,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 89.47368421052634,
          "l": 92.54901960784314,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0.1343873517786562,
          "v": 0.9921568627450981,
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
      "$value": "#fab6b6",
      "$description": "lighter brand red",
      "value": "#fab6b6",
      "filePath": "tokens/color/brand.yml",
      "isSource": true,
      "original": {
        "$value": "{color.red.200}",
        "$description": "lighter brand red",
        "value": "{color.red.200}"
      },
      "name": "rh-color-brand-red-lighter",
      "attributes": {
        "category": "color",
        "type": "brand",
        "item": "red",
        "subitem": "lighter",
        "hex": "fab6b6",
        "rgb": {
          "r": 250,
          "g": 182,
          "b": 182,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 87.17948717948718,
          "l": 84.70588235294117,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0.27199999999999996,
          "v": 0.9803921568627451,
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
      "$value": "#f56d6d",
      "$description": "Light brand red",
      "value": "#f56d6d",
      "filePath": "tokens/color/brand.yml",
      "isSource": true,
      "original": {
        "$value": "{color.red.300}",
        "$description": "Light brand red",
        "value": "{color.red.300}"
      },
      "name": "rh-color-brand-red-light",
      "attributes": {
        "category": "color",
        "type": "brand",
        "item": "red",
        "subitem": "light",
        "hex": "f56d6d",
        "rgb": {
          "r": 245,
          "g": 109,
          "b": 109,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 87.17948717948723,
          "l": 69.41176470588235,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0.5551020408163266,
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
      "$value": "#be0000",
      "$description": "Dark brand red/Brand red hover",
      "value": "#be0000",
      "filePath": "tokens/color/brand.yml",
      "isSource": true,
      "original": {
        "$value": "{color.red.600}",
        "$description": "Dark brand red/Brand red hover",
        "value": "{color.red.600}"
      },
      "name": "rh-color-brand-red-dark",
      "attributes": {
        "category": "color",
        "type": "brand",
        "item": "red",
        "subitem": "dark",
        "hex": "be0000",
        "rgb": {
          "r": 190,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 100,
          "l": 37.254901960784316,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 1,
          "v": 0.7450980392156863,
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
      "$value": "#8f0000",
      "$description": "Darker brand red",
      "value": "#8f0000",
      "filePath": "tokens/color/brand.yml",
      "isSource": true,
      "original": {
        "$value": "{color.red.700}",
        "$description": "Darker brand red",
        "value": "{color.red.700}"
      },
      "name": "rh-color-brand-red-darker",
      "attributes": {
        "category": "color",
        "type": "brand",
        "item": "red",
        "subitem": "darker",
        "hex": "8f0000",
        "rgb": {
          "r": 143,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 100,
          "l": 28.03921568627451,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 1,
          "v": 0.5607843137254902,
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
        "$value": "{color.red.800}",
        "$description": "Darkest brand red",
        "value": "{color.red.800}"
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
      "$value": "#ff442b",
      "$description": "Brand red on dark background",
      "value": "#ff442b",
      "filePath": "tokens/color/brand.yml",
      "isSource": true,
      "original": {
        "$value": "{color.red.400}",
        "$description": "Brand red on dark background",
        "value": "{color.red.400}"
      },
      "name": "rh-color-brand-red-on-dark",
      "attributes": {
        "category": "color",
        "type": "brand",
        "item": "red",
        "subitem": "on-dark",
        "hex": "ff442b",
        "rgb": {
          "r": 255,
          "g": 68,
          "b": 43,
          "a": 1
        },
        "hsl": {
          "h": 7.0754716981132075,
          "s": 100,
          "l": 58.43137254901961,
          "a": 1
        },
        "hsv": {
          "h": 7.0754716981132075,
          "s": 0.8313725490196078,
          "v": 1,
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
        "$value": "{color.red.500}",
        "$description": "Brand red on light background",
        "value": "{color.red.500}"
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
        "$value": "{color.gray.90}",
        "$description": "Primary canvas (dark theme)",
        "value": "{color.gray.90}"
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
    "--rh-color-blue-50",
    {
      "$value": "#e7f1fa",
      "$description": "Alert - Info background",
      "value": "#e7f1fa",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$value": "#e7f1fa",
        "$description": "Alert - Info background",
        "value": "#e7f1fa"
      },
      "name": "rh-color-blue-50",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "50",
        "hex": "e7f1fa",
        "rgb": {
          "r": 231,
          "g": 241,
          "b": 250,
          "a": 1
        },
        "hsl": {
          "h": 208.42105263157896,
          "s": 65.51724137931035,
          "l": 94.31372549019608,
          "a": 1
        },
        "hsv": {
          "h": 208.42105263157896,
          "s": 0.07599999999999996,
          "v": 0.9803921568627451,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "blue",
        "50"
      ],
      "comment": "Alert - Info background",
      "$type": "color"
    }
  ],
  [
    "--rh-color-blue-100",
    {
      "$value": "#bee1f4",
      "$description": "Label - Filled (Blue) border color",
      "value": "#bee1f4",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$value": "#bee1f4",
        "$description": "Label - Filled (Blue) border color",
        "value": "#bee1f4"
      },
      "name": "rh-color-blue-100",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "100",
        "hex": "bee1f4",
        "rgb": {
          "r": 190,
          "g": 225,
          "b": 244,
          "a": 1
        },
        "hsl": {
          "h": 201.11111111111111,
          "s": 71.05263157894743,
          "l": 85.09803921568628,
          "a": 1
        },
        "hsv": {
          "h": 201.11111111111111,
          "s": 0.2213114754098361,
          "v": 0.9568627450980393,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "blue",
        "100"
      ],
      "comment": "Label - Filled (Blue) border color",
      "$type": "color"
    }
  ],
  [
    "--rh-color-blue-200",
    {
      "$value": "#73bcf7",
      "value": "#73bcf7",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$value": "#73bcf7",
        "value": "#73bcf7"
      },
      "name": "rh-color-blue-200",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "200",
        "hex": "73bcf7",
        "rgb": {
          "r": 115,
          "g": 188,
          "b": 247,
          "a": 1
        },
        "hsl": {
          "h": 206.8181818181818,
          "s": 89.1891891891892,
          "l": 70.98039215686275,
          "a": 1
        },
        "hsv": {
          "h": 206.8181818181818,
          "s": 0.534412955465587,
          "v": 0.9686274509803922,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "blue",
        "200"
      ],
      "$type": "color"
    }
  ],
  [
    "--rh-color-blue-250",
    {
      "$value": "#2b9af3",
      "$description": "Alert - Info accent",
      "value": "#2b9af3",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$value": "#2b9af3",
        "$description": "Alert - Info accent",
        "value": "#2b9af3"
      },
      "name": "rh-color-blue-250",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "250",
        "hex": "2b9af3",
        "rgb": {
          "r": 43,
          "g": 154,
          "b": 243,
          "a": 1
        },
        "hsl": {
          "h": 206.7,
          "s": 89.28571428571426,
          "l": 56.07843137254902,
          "a": 1
        },
        "hsv": {
          "h": 206.7,
          "s": 0.8230452674897119,
          "v": 0.9529411764705882,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "blue",
        "250"
      ],
      "comment": "Alert - Info accent",
      "$type": "color"
    }
  ],
  [
    "--rh-color-blue-400",
    {
      "$value": "#0066cc",
      "$description": "Label - Filled (Blue) accent color",
      "value": "#0066cc",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$value": "#0066cc",
        "$description": "Label - Filled (Blue) accent color",
        "value": "#0066cc"
      },
      "name": "rh-color-blue-400",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "400",
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
        "400"
      ],
      "comment": "Label - Filled (Blue) accent color",
      "$type": "color"
    }
  ],
  [
    "--rh-color-blue-500",
    {
      "$value": "#004080",
      "value": "#004080",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$value": "#004080",
        "value": "#004080"
      },
      "name": "rh-color-blue-500",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "500",
        "hex": "004080",
        "rgb": {
          "r": 0,
          "g": 64,
          "b": 128,
          "a": 1
        },
        "hsl": {
          "h": 210,
          "s": 100,
          "l": 25.098039215686274,
          "a": 1
        },
        "hsv": {
          "h": 210,
          "s": 1,
          "v": 0.5019607843137255,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "blue",
        "500"
      ],
      "$type": "color"
    }
  ],
  [
    "--rh-color-blue-600",
    {
      "$value": "#002952",
      "$description": "Alert - Info title text",
      "value": "#002952",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$value": "#002952",
        "$description": "Alert - Info title text",
        "value": "#002952"
      },
      "name": "rh-color-blue-600",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "600",
        "hex": "002952",
        "rgb": {
          "r": 0,
          "g": 41,
          "b": 82,
          "a": 1
        },
        "hsl": {
          "h": 210,
          "s": 100,
          "l": 16.07843137254902,
          "a": 1
        },
        "hsv": {
          "h": 210,
          "s": 1,
          "v": 0.3215686274509804,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "blue",
        "600"
      ],
      "comment": "Alert - Info title text",
      "$type": "color"
    }
  ],
  [
    "--rh-color-blue-50-hsl",
    {
      "$type": "color",
      "$value": "208.42105263157896 65.51724137931035% 94.31372549019608%",
      "value": "208.42105263157896 65.51724137931035% 94.31372549019608%",
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
        "hex": "e7f1fa",
        "rgb": {
          "r": 231,
          "g": 241,
          "b": 250,
          "a": 1
        },
        "hsl": {
          "h": 208.42105263157896,
          "s": 65.51724137931035,
          "l": 94.31372549019608,
          "a": 1
        },
        "hsv": {
          "h": 208.42105263157896,
          "s": 0.07599999999999996,
          "v": 0.9803921568627451,
          "a": 1
        },
        "isLight": true
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
      "$value": "231 241 250",
      "value": "231 241 250",
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
        "hex": "e7f1fa",
        "rgb": {
          "r": 231,
          "g": 241,
          "b": 250,
          "a": 1
        },
        "hsl": {
          "h": 208.42105263157896,
          "s": 65.51724137931035,
          "l": 94.31372549019608,
          "a": 1
        },
        "hsv": {
          "h": 208.42105263157896,
          "s": 0.07599999999999996,
          "v": 0.9803921568627451,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "blue",
        "50-rgb"
      ]
    }
  ],
  [
    "--rh-color-blue-100-hsl",
    {
      "$type": "color",
      "$value": "201.11111111111111 71.05263157894743% 85.09803921568628%",
      "value": "201.11111111111111 71.05263157894743% 85.09803921568628%",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.blue.100}",
        "value": "{color.blue.100}"
      },
      "name": "rh-color-blue-100-hsl",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "100-hsl",
        "hex": "bee1f4",
        "rgb": {
          "r": 190,
          "g": 225,
          "b": 244,
          "a": 1
        },
        "hsl": {
          "h": 201.11111111111111,
          "s": 71.05263157894743,
          "l": 85.09803921568628,
          "a": 1
        },
        "hsv": {
          "h": 201.11111111111111,
          "s": 0.2213114754098361,
          "v": 0.9568627450980393,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "blue",
        "100-hsl"
      ]
    }
  ],
  [
    "--rh-color-blue-100-rgb",
    {
      "$type": "color",
      "$value": "190 225 244",
      "value": "190 225 244",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.blue.100}",
        "value": "{color.blue.100}"
      },
      "name": "rh-color-blue-100-rgb",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "100-rgb",
        "hex": "bee1f4",
        "rgb": {
          "r": 190,
          "g": 225,
          "b": 244,
          "a": 1
        },
        "hsl": {
          "h": 201.11111111111111,
          "s": 71.05263157894743,
          "l": 85.09803921568628,
          "a": 1
        },
        "hsv": {
          "h": 201.11111111111111,
          "s": 0.2213114754098361,
          "v": 0.9568627450980393,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "blue",
        "100-rgb"
      ]
    }
  ],
  [
    "--rh-color-blue-200-hsl",
    {
      "$type": "color",
      "$value": "206.8181818181818 89.1891891891892% 70.98039215686275%",
      "value": "206.8181818181818 89.1891891891892% 70.98039215686275%",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.blue.200}",
        "value": "{color.blue.200}"
      },
      "name": "rh-color-blue-200-hsl",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "200-hsl",
        "hex": "73bcf7",
        "rgb": {
          "r": 115,
          "g": 188,
          "b": 247,
          "a": 1
        },
        "hsl": {
          "h": 206.8181818181818,
          "s": 89.1891891891892,
          "l": 70.98039215686275,
          "a": 1
        },
        "hsv": {
          "h": 206.8181818181818,
          "s": 0.534412955465587,
          "v": 0.9686274509803922,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "blue",
        "200-hsl"
      ]
    }
  ],
  [
    "--rh-color-blue-200-rgb",
    {
      "$type": "color",
      "$value": "115 188 247",
      "value": "115 188 247",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.blue.200}",
        "value": "{color.blue.200}"
      },
      "name": "rh-color-blue-200-rgb",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "200-rgb",
        "hex": "73bcf7",
        "rgb": {
          "r": 115,
          "g": 188,
          "b": 247,
          "a": 1
        },
        "hsl": {
          "h": 206.8181818181818,
          "s": 89.1891891891892,
          "l": 70.98039215686275,
          "a": 1
        },
        "hsv": {
          "h": 206.8181818181818,
          "s": 0.534412955465587,
          "v": 0.9686274509803922,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "blue",
        "200-rgb"
      ]
    }
  ],
  [
    "--rh-color-blue-250-hsl",
    {
      "$type": "color",
      "$value": "206.7 89.28571428571426% 56.07843137254902%",
      "value": "206.7 89.28571428571426% 56.07843137254902%",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.blue.250}",
        "value": "{color.blue.250}"
      },
      "name": "rh-color-blue-250-hsl",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "250-hsl",
        "hex": "2b9af3",
        "rgb": {
          "r": 43,
          "g": 154,
          "b": 243,
          "a": 1
        },
        "hsl": {
          "h": 206.7,
          "s": 89.28571428571426,
          "l": 56.07843137254902,
          "a": 1
        },
        "hsv": {
          "h": 206.7,
          "s": 0.8230452674897119,
          "v": 0.9529411764705882,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "blue",
        "250-hsl"
      ]
    }
  ],
  [
    "--rh-color-blue-250-rgb",
    {
      "$type": "color",
      "$value": "43 154 243",
      "value": "43 154 243",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.blue.250}",
        "value": "{color.blue.250}"
      },
      "name": "rh-color-blue-250-rgb",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "250-rgb",
        "hex": "2b9af3",
        "rgb": {
          "r": 43,
          "g": 154,
          "b": 243,
          "a": 1
        },
        "hsl": {
          "h": 206.7,
          "s": 89.28571428571426,
          "l": 56.07843137254902,
          "a": 1
        },
        "hsv": {
          "h": 206.7,
          "s": 0.8230452674897119,
          "v": 0.9529411764705882,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "blue",
        "250-rgb"
      ]
    }
  ],
  [
    "--rh-color-blue-400-hsl",
    {
      "$type": "color",
      "$value": "210 100% 40%",
      "value": "210 100% 40%",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.blue.400}",
        "value": "{color.blue.400}"
      },
      "name": "rh-color-blue-400-hsl",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "400-hsl",
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
        "400-hsl"
      ]
    }
  ],
  [
    "--rh-color-blue-400-rgb",
    {
      "$type": "color",
      "$value": "0 102 204",
      "value": "0 102 204",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.blue.400}",
        "value": "{color.blue.400}"
      },
      "name": "rh-color-blue-400-rgb",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "400-rgb",
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
        "400-rgb"
      ]
    }
  ],
  [
    "--rh-color-blue-500-hsl",
    {
      "$type": "color",
      "$value": "210 100% 25.098039215686274%",
      "value": "210 100% 25.098039215686274%",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.blue.500}",
        "value": "{color.blue.500}"
      },
      "name": "rh-color-blue-500-hsl",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "500-hsl",
        "hex": "004080",
        "rgb": {
          "r": 0,
          "g": 64,
          "b": 128,
          "a": 1
        },
        "hsl": {
          "h": 210,
          "s": 100,
          "l": 25.098039215686274,
          "a": 1
        },
        "hsv": {
          "h": 210,
          "s": 1,
          "v": 0.5019607843137255,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "blue",
        "500-hsl"
      ]
    }
  ],
  [
    "--rh-color-blue-500-rgb",
    {
      "$type": "color",
      "$value": "0 64 128",
      "value": "0 64 128",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.blue.500}",
        "value": "{color.blue.500}"
      },
      "name": "rh-color-blue-500-rgb",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "500-rgb",
        "hex": "004080",
        "rgb": {
          "r": 0,
          "g": 64,
          "b": 128,
          "a": 1
        },
        "hsl": {
          "h": 210,
          "s": 100,
          "l": 25.098039215686274,
          "a": 1
        },
        "hsv": {
          "h": 210,
          "s": 1,
          "v": 0.5019607843137255,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "blue",
        "500-rgb"
      ]
    }
  ],
  [
    "--rh-color-blue-600-hsl",
    {
      "$type": "color",
      "$value": "210 100% 16.07843137254902%",
      "value": "210 100% 16.07843137254902%",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.blue.600}",
        "value": "{color.blue.600}"
      },
      "name": "rh-color-blue-600-hsl",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "600-hsl",
        "hex": "002952",
        "rgb": {
          "r": 0,
          "g": 41,
          "b": 82,
          "a": 1
        },
        "hsl": {
          "h": 210,
          "s": 100,
          "l": 16.07843137254902,
          "a": 1
        },
        "hsv": {
          "h": 210,
          "s": 1,
          "v": 0.3215686274509804,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "blue",
        "600-hsl"
      ]
    }
  ],
  [
    "--rh-color-blue-600-rgb",
    {
      "$type": "color",
      "$value": "0 41 82",
      "value": "0 41 82",
      "filePath": "tokens/color/crayon/blue.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.blue.600}",
        "value": "{color.blue.600}"
      },
      "name": "rh-color-blue-600-rgb",
      "attributes": {
        "category": "color",
        "type": "blue",
        "item": "600-rgb",
        "hex": "002952",
        "rgb": {
          "r": 0,
          "g": 41,
          "b": 82,
          "a": 1
        },
        "hsl": {
          "h": 210,
          "s": 100,
          "l": 16.07843137254902,
          "a": 1
        },
        "hsv": {
          "h": 210,
          "s": 1,
          "v": 0.3215686274509804,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "blue",
        "600-rgb"
      ]
    }
  ],
  [
    "--rh-color-cyan-50",
    {
      "$value": "#f2f9f9",
      "$description": "Alert - Default background",
      "value": "#f2f9f9",
      "filePath": "tokens/color/crayon/cyan.yml",
      "isSource": true,
      "original": {
        "$value": "#f2f9f9",
        "$description": "Alert - Default background",
        "value": "#f2f9f9"
      },
      "name": "rh-color-cyan-50",
      "attributes": {
        "category": "color",
        "type": "cyan",
        "item": "50",
        "hex": "f2f9f9",
        "rgb": {
          "r": 242,
          "g": 249,
          "b": 249,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 36.84210526315793,
          "l": 96.27450980392156,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 0.0281124497991968,
          "v": 0.9764705882352941,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "cyan",
        "50"
      ],
      "comment": "Alert - Default background",
      "$type": "color"
    }
  ],
  [
    "--rh-color-cyan-100",
    {
      "$value": "#a2d9d9",
      "$description": "Label (Cyan) border color",
      "value": "#a2d9d9",
      "filePath": "tokens/color/crayon/cyan.yml",
      "isSource": true,
      "original": {
        "$value": "#a2d9d9",
        "$description": "Label (Cyan) border color",
        "value": "#a2d9d9"
      },
      "name": "rh-color-cyan-100",
      "attributes": {
        "category": "color",
        "type": "cyan",
        "item": "100",
        "hex": "a2d9d9",
        "rgb": {
          "r": 162,
          "g": 217,
          "b": 217,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 41.98473282442749,
          "l": 74.31372549019608,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 0.2534562211981567,
          "v": 0.8509803921568627,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "cyan",
        "100"
      ],
      "comment": "Label (Cyan) border color",
      "$type": "color"
    }
  ],
  [
    "--rh-color-cyan-300",
    {
      "$value": "#009596",
      "$description": "Alert - Default accent",
      "value": "#009596",
      "filePath": "tokens/color/crayon/cyan.yml",
      "isSource": true,
      "original": {
        "$value": "#009596",
        "$description": "Alert - Default accent",
        "value": "#009596"
      },
      "name": "rh-color-cyan-300",
      "attributes": {
        "category": "color",
        "type": "cyan",
        "item": "300",
        "hex": "009596",
        "rgb": {
          "r": 0,
          "g": 149,
          "b": 150,
          "a": 1
        },
        "hsl": {
          "h": 180.40000000000003,
          "s": 100,
          "l": 29.411764705882355,
          "a": 1
        },
        "hsv": {
          "h": 180.40000000000003,
          "s": 1,
          "v": 0.5882352941176471,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "cyan",
        "300"
      ],
      "comment": "Alert - Default accent",
      "$type": "color"
    }
  ],
  [
    "--rh-color-cyan-400",
    {
      "$value": "#005f60",
      "$description": "Alert - Default accent",
      "value": "#005f60",
      "filePath": "tokens/color/crayon/cyan.yml",
      "isSource": true,
      "original": {
        "$value": "#005f60",
        "$description": "Alert - Default accent",
        "value": "#005f60"
      },
      "name": "rh-color-cyan-400",
      "attributes": {
        "category": "color",
        "type": "cyan",
        "item": "400",
        "hex": "005f60",
        "rgb": {
          "r": 0,
          "g": 95,
          "b": 96,
          "a": 1
        },
        "hsl": {
          "h": 180.62499999999997,
          "s": 100,
          "l": 18.823529411764707,
          "a": 1
        },
        "hsv": {
          "h": 180.62499999999997,
          "s": 1,
          "v": 0.3764705882352941,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "cyan",
        "400"
      ],
      "comment": "Alert - Default accent",
      "$type": "color"
    }
  ],
  [
    "--rh-color-cyan-500",
    {
      "$value": "#003737",
      "$description": "Alert - Default title text",
      "value": "#003737",
      "filePath": "tokens/color/crayon/cyan.yml",
      "isSource": true,
      "original": {
        "$value": "#003737",
        "$description": "Alert - Default title text",
        "value": "#003737"
      },
      "name": "rh-color-cyan-500",
      "attributes": {
        "category": "color",
        "type": "cyan",
        "item": "500",
        "hex": "003737",
        "rgb": {
          "r": 0,
          "g": 55,
          "b": 55,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 100,
          "l": 10.784313725490197,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 1,
          "v": 0.21568627450980393,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "cyan",
        "500"
      ],
      "comment": "Alert - Default title text",
      "$type": "color"
    }
  ],
  [
    "--rh-color-cyan-50-hsl",
    {
      "$type": "color",
      "$value": "180 36.84210526315793% 96.27450980392156%",
      "value": "180 36.84210526315793% 96.27450980392156%",
      "filePath": "tokens/color/crayon/cyan.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.cyan.50}",
        "value": "{color.cyan.50}"
      },
      "name": "rh-color-cyan-50-hsl",
      "attributes": {
        "category": "color",
        "type": "cyan",
        "item": "50-hsl",
        "hex": "f2f9f9",
        "rgb": {
          "r": 242,
          "g": 249,
          "b": 249,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 36.84210526315793,
          "l": 96.27450980392156,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 0.0281124497991968,
          "v": 0.9764705882352941,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "cyan",
        "50-hsl"
      ]
    }
  ],
  [
    "--rh-color-cyan-50-rgb",
    {
      "$type": "color",
      "$value": "242 249 249",
      "value": "242 249 249",
      "filePath": "tokens/color/crayon/cyan.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.cyan.50}",
        "value": "{color.cyan.50}"
      },
      "name": "rh-color-cyan-50-rgb",
      "attributes": {
        "category": "color",
        "type": "cyan",
        "item": "50-rgb",
        "hex": "f2f9f9",
        "rgb": {
          "r": 242,
          "g": 249,
          "b": 249,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 36.84210526315793,
          "l": 96.27450980392156,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 0.0281124497991968,
          "v": 0.9764705882352941,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "cyan",
        "50-rgb"
      ]
    }
  ],
  [
    "--rh-color-cyan-100-hsl",
    {
      "$type": "color",
      "$value": "180 41.98473282442749% 74.31372549019608%",
      "value": "180 41.98473282442749% 74.31372549019608%",
      "filePath": "tokens/color/crayon/cyan.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.cyan.100}",
        "value": "{color.cyan.100}"
      },
      "name": "rh-color-cyan-100-hsl",
      "attributes": {
        "category": "color",
        "type": "cyan",
        "item": "100-hsl",
        "hex": "a2d9d9",
        "rgb": {
          "r": 162,
          "g": 217,
          "b": 217,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 41.98473282442749,
          "l": 74.31372549019608,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 0.2534562211981567,
          "v": 0.8509803921568627,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "cyan",
        "100-hsl"
      ]
    }
  ],
  [
    "--rh-color-cyan-100-rgb",
    {
      "$type": "color",
      "$value": "162 217 217",
      "value": "162 217 217",
      "filePath": "tokens/color/crayon/cyan.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.cyan.100}",
        "value": "{color.cyan.100}"
      },
      "name": "rh-color-cyan-100-rgb",
      "attributes": {
        "category": "color",
        "type": "cyan",
        "item": "100-rgb",
        "hex": "a2d9d9",
        "rgb": {
          "r": 162,
          "g": 217,
          "b": 217,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 41.98473282442749,
          "l": 74.31372549019608,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 0.2534562211981567,
          "v": 0.8509803921568627,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "cyan",
        "100-rgb"
      ]
    }
  ],
  [
    "--rh-color-cyan-300-hsl",
    {
      "$type": "color",
      "$value": "180.40000000000003 100% 29.411764705882355%",
      "value": "180.40000000000003 100% 29.411764705882355%",
      "filePath": "tokens/color/crayon/cyan.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.cyan.300}",
        "value": "{color.cyan.300}"
      },
      "name": "rh-color-cyan-300-hsl",
      "attributes": {
        "category": "color",
        "type": "cyan",
        "item": "300-hsl",
        "hex": "009596",
        "rgb": {
          "r": 0,
          "g": 149,
          "b": 150,
          "a": 1
        },
        "hsl": {
          "h": 180.40000000000003,
          "s": 100,
          "l": 29.411764705882355,
          "a": 1
        },
        "hsv": {
          "h": 180.40000000000003,
          "s": 1,
          "v": 0.5882352941176471,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "cyan",
        "300-hsl"
      ]
    }
  ],
  [
    "--rh-color-cyan-300-rgb",
    {
      "$type": "color",
      "$value": "0 149 150",
      "value": "0 149 150",
      "filePath": "tokens/color/crayon/cyan.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.cyan.300}",
        "value": "{color.cyan.300}"
      },
      "name": "rh-color-cyan-300-rgb",
      "attributes": {
        "category": "color",
        "type": "cyan",
        "item": "300-rgb",
        "hex": "009596",
        "rgb": {
          "r": 0,
          "g": 149,
          "b": 150,
          "a": 1
        },
        "hsl": {
          "h": 180.40000000000003,
          "s": 100,
          "l": 29.411764705882355,
          "a": 1
        },
        "hsv": {
          "h": 180.40000000000003,
          "s": 1,
          "v": 0.5882352941176471,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "cyan",
        "300-rgb"
      ]
    }
  ],
  [
    "--rh-color-cyan-400-hsl",
    {
      "$type": "color",
      "$value": "180.62499999999997 100% 18.823529411764707%",
      "value": "180.62499999999997 100% 18.823529411764707%",
      "filePath": "tokens/color/crayon/cyan.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.cyan.400}",
        "value": "{color.cyan.400}"
      },
      "name": "rh-color-cyan-400-hsl",
      "attributes": {
        "category": "color",
        "type": "cyan",
        "item": "400-hsl",
        "hex": "005f60",
        "rgb": {
          "r": 0,
          "g": 95,
          "b": 96,
          "a": 1
        },
        "hsl": {
          "h": 180.62499999999997,
          "s": 100,
          "l": 18.823529411764707,
          "a": 1
        },
        "hsv": {
          "h": 180.62499999999997,
          "s": 1,
          "v": 0.3764705882352941,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "cyan",
        "400-hsl"
      ]
    }
  ],
  [
    "--rh-color-cyan-400-rgb",
    {
      "$type": "color",
      "$value": "0 95 96",
      "value": "0 95 96",
      "filePath": "tokens/color/crayon/cyan.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.cyan.400}",
        "value": "{color.cyan.400}"
      },
      "name": "rh-color-cyan-400-rgb",
      "attributes": {
        "category": "color",
        "type": "cyan",
        "item": "400-rgb",
        "hex": "005f60",
        "rgb": {
          "r": 0,
          "g": 95,
          "b": 96,
          "a": 1
        },
        "hsl": {
          "h": 180.62499999999997,
          "s": 100,
          "l": 18.823529411764707,
          "a": 1
        },
        "hsv": {
          "h": 180.62499999999997,
          "s": 1,
          "v": 0.3764705882352941,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "cyan",
        "400-rgb"
      ]
    }
  ],
  [
    "--rh-color-cyan-500-hsl",
    {
      "$type": "color",
      "$value": "180 100% 10.784313725490197%",
      "value": "180 100% 10.784313725490197%",
      "filePath": "tokens/color/crayon/cyan.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.cyan.500}",
        "value": "{color.cyan.500}"
      },
      "name": "rh-color-cyan-500-hsl",
      "attributes": {
        "category": "color",
        "type": "cyan",
        "item": "500-hsl",
        "hex": "003737",
        "rgb": {
          "r": 0,
          "g": 55,
          "b": 55,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 100,
          "l": 10.784313725490197,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 1,
          "v": 0.21568627450980393,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "cyan",
        "500-hsl"
      ]
    }
  ],
  [
    "--rh-color-cyan-500-rgb",
    {
      "$type": "color",
      "$value": "0 55 55",
      "value": "0 55 55",
      "filePath": "tokens/color/crayon/cyan.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.cyan.500}",
        "value": "{color.cyan.500}"
      },
      "name": "rh-color-cyan-500-rgb",
      "attributes": {
        "category": "color",
        "type": "cyan",
        "item": "500-rgb",
        "hex": "003737",
        "rgb": {
          "r": 0,
          "g": 55,
          "b": 55,
          "a": 1
        },
        "hsl": {
          "h": 180,
          "s": 100,
          "l": 10.784313725490197,
          "a": 1
        },
        "hsv": {
          "h": 180,
          "s": 1,
          "v": 0.21568627450980393,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "cyan",
        "500-rgb"
      ]
    }
  ],
  [
    "--rh-color-gold-50",
    {
      "$value": "#fdf7e7",
      "$description": "Alert - Warning background",
      "value": "#fdf7e7",
      "filePath": "tokens/color/crayon/gold.yml",
      "isSource": true,
      "original": {
        "$value": "#fdf7e7",
        "$description": "Alert - Warning background",
        "value": "#fdf7e7"
      },
      "name": "rh-color-gold-50",
      "attributes": {
        "category": "color",
        "type": "gold",
        "item": "50",
        "hex": "fdf7e7",
        "rgb": {
          "r": 253,
          "g": 247,
          "b": 231,
          "a": 1
        },
        "hsl": {
          "h": 43.636363636363626,
          "s": 84.61538461538467,
          "l": 94.90196078431372,
          "a": 1
        },
        "hsv": {
          "h": 43.636363636363626,
          "s": 0.08695652173913046,
          "v": 0.9921568627450981,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "gold",
        "50"
      ],
      "comment": "Alert - Warning background",
      "$type": "color"
    }
  ],
  [
    "--rh-color-gold-400",
    {
      "$value": "#f0ab00",
      "$description": "Alert - Warning accent",
      "value": "#f0ab00",
      "filePath": "tokens/color/crayon/gold.yml",
      "isSource": true,
      "original": {
        "$value": "#f0ab00",
        "$description": "Alert - Warning accent",
        "value": "#f0ab00"
      },
      "name": "rh-color-gold-400",
      "attributes": {
        "category": "color",
        "type": "gold",
        "item": "400",
        "hex": "f0ab00",
        "rgb": {
          "r": 240,
          "g": 171,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 42.74999999999999,
          "s": 100,
          "l": 47.05882352941176,
          "a": 1
        },
        "hsv": {
          "h": 42.74999999999999,
          "s": 1,
          "v": 0.9411764705882353,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "gold",
        "400"
      ],
      "comment": "Alert - Warning accent",
      "$type": "color"
    }
  ],
  [
    "--rh-color-gold-600",
    {
      "$value": "#795600",
      "$description": "Alert - Warning title text",
      "value": "#795600",
      "filePath": "tokens/color/crayon/gold.yml",
      "isSource": true,
      "original": {
        "$value": "#795600",
        "$description": "Alert - Warning title text",
        "value": "#795600"
      },
      "name": "rh-color-gold-600",
      "attributes": {
        "category": "color",
        "type": "gold",
        "item": "600",
        "hex": "795600",
        "rgb": {
          "r": 121,
          "g": 86,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 42.64462809917356,
          "s": 100,
          "l": 23.72549019607843,
          "a": 1
        },
        "hsv": {
          "h": 42.64462809917356,
          "s": 1,
          "v": 0.4745098039215686,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "gold",
        "600"
      ],
      "comment": "Alert - Warning title text",
      "$type": "color"
    }
  ],
  [
    "--rh-color-gold-50-hsl",
    {
      "$type": "color",
      "$value": "43.636363636363626 84.61538461538467% 94.90196078431372%",
      "value": "43.636363636363626 84.61538461538467% 94.90196078431372%",
      "filePath": "tokens/color/crayon/gold.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.gold.50}",
        "value": "{color.gold.50}"
      },
      "name": "rh-color-gold-50-hsl",
      "attributes": {
        "category": "color",
        "type": "gold",
        "item": "50-hsl",
        "hex": "fdf7e7",
        "rgb": {
          "r": 253,
          "g": 247,
          "b": 231,
          "a": 1
        },
        "hsl": {
          "h": 43.636363636363626,
          "s": 84.61538461538467,
          "l": 94.90196078431372,
          "a": 1
        },
        "hsv": {
          "h": 43.636363636363626,
          "s": 0.08695652173913046,
          "v": 0.9921568627450981,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "gold",
        "50-hsl"
      ]
    }
  ],
  [
    "--rh-color-gold-50-rgb",
    {
      "$type": "color",
      "$value": "253 247 231",
      "value": "253 247 231",
      "filePath": "tokens/color/crayon/gold.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.gold.50}",
        "value": "{color.gold.50}"
      },
      "name": "rh-color-gold-50-rgb",
      "attributes": {
        "category": "color",
        "type": "gold",
        "item": "50-rgb",
        "hex": "fdf7e7",
        "rgb": {
          "r": 253,
          "g": 247,
          "b": 231,
          "a": 1
        },
        "hsl": {
          "h": 43.636363636363626,
          "s": 84.61538461538467,
          "l": 94.90196078431372,
          "a": 1
        },
        "hsv": {
          "h": 43.636363636363626,
          "s": 0.08695652173913046,
          "v": 0.9921568627450981,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "gold",
        "50-rgb"
      ]
    }
  ],
  [
    "--rh-color-gold-400-hsl",
    {
      "$type": "color",
      "$value": "42.74999999999999 100% 47.05882352941176%",
      "value": "42.74999999999999 100% 47.05882352941176%",
      "filePath": "tokens/color/crayon/gold.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.gold.400}",
        "value": "{color.gold.400}"
      },
      "name": "rh-color-gold-400-hsl",
      "attributes": {
        "category": "color",
        "type": "gold",
        "item": "400-hsl",
        "hex": "f0ab00",
        "rgb": {
          "r": 240,
          "g": 171,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 42.74999999999999,
          "s": 100,
          "l": 47.05882352941176,
          "a": 1
        },
        "hsv": {
          "h": 42.74999999999999,
          "s": 1,
          "v": 0.9411764705882353,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "gold",
        "400-hsl"
      ]
    }
  ],
  [
    "--rh-color-gold-400-rgb",
    {
      "$type": "color",
      "$value": "240 171 0",
      "value": "240 171 0",
      "filePath": "tokens/color/crayon/gold.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.gold.400}",
        "value": "{color.gold.400}"
      },
      "name": "rh-color-gold-400-rgb",
      "attributes": {
        "category": "color",
        "type": "gold",
        "item": "400-rgb",
        "hex": "f0ab00",
        "rgb": {
          "r": 240,
          "g": 171,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 42.74999999999999,
          "s": 100,
          "l": 47.05882352941176,
          "a": 1
        },
        "hsv": {
          "h": 42.74999999999999,
          "s": 1,
          "v": 0.9411764705882353,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "gold",
        "400-rgb"
      ]
    }
  ],
  [
    "--rh-color-gold-600-hsl",
    {
      "$type": "color",
      "$value": "42.64462809917356 100% 23.72549019607843%",
      "value": "42.64462809917356 100% 23.72549019607843%",
      "filePath": "tokens/color/crayon/gold.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.gold.600}",
        "value": "{color.gold.600}"
      },
      "name": "rh-color-gold-600-hsl",
      "attributes": {
        "category": "color",
        "type": "gold",
        "item": "600-hsl",
        "hex": "795600",
        "rgb": {
          "r": 121,
          "g": 86,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 42.64462809917356,
          "s": 100,
          "l": 23.72549019607843,
          "a": 1
        },
        "hsv": {
          "h": 42.64462809917356,
          "s": 1,
          "v": 0.4745098039215686,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "gold",
        "600-hsl"
      ]
    }
  ],
  [
    "--rh-color-gold-600-rgb",
    {
      "$type": "color",
      "$value": "121 86 0",
      "value": "121 86 0",
      "filePath": "tokens/color/crayon/gold.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.gold.600}",
        "value": "{color.gold.600}"
      },
      "name": "rh-color-gold-600-rgb",
      "attributes": {
        "category": "color",
        "type": "gold",
        "item": "600-rgb",
        "hex": "795600",
        "rgb": {
          "r": 121,
          "g": 86,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 42.64462809917356,
          "s": 100,
          "l": 23.72549019607843,
          "a": 1
        },
        "hsv": {
          "h": 42.64462809917356,
          "s": 1,
          "v": 0.4745098039215686,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "gold",
        "600-rgb"
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
      "$value": "#E0E0E0",
      "$description": "Secondary surface (light theme)",
      "attributes": {
        "type": "gray",
        "category": "color",
        "item": "10",
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
      "name": "rh-color-gray-10",
      "path": [
        "color",
        "gray",
        "10"
      ],
      "comment": "Secondary surface (light theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-gray-20",
    {
      "$value": "#C7C7C7",
      "$description": "Subtle borders (light theme)",
      "attributes": {
        "type": "gray",
        "category": "color",
        "item": "20",
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
      "name": "rh-color-gray-20",
      "path": [
        "color",
        "gray",
        "20"
      ],
      "comment": "Subtle borders (light theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-gray-30",
    {
      "$value": "#A3A3A3",
      "$description": "Subtle icon (hover state)",
      "attributes": {
        "type": "gray",
        "category": "color",
        "item": "30",
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
      "name": "rh-color-gray-30",
      "path": [
        "color",
        "gray",
        "30"
      ],
      "comment": "Subtle icon (hover state)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-gray-40",
    {
      "$value": "#707070",
      "$description": "Subtle icon",
      "attributes": {
        "type": "gray",
        "category": "color",
        "item": "40",
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
      "name": "rh-color-gray-40",
      "path": [
        "color",
        "gray",
        "40"
      ],
      "comment": "Subtle icon",
      "$type": "color"
    }
  ],
  [
    "--rh-color-gray-50",
    {
      "$value": "#4D4D4D",
      "$description": "Secondary text (light theme)",
      "attributes": {
        "type": "gray",
        "category": "color",
        "item": "50",
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
      "name": "rh-color-gray-50",
      "path": [
        "color",
        "gray",
        "50"
      ],
      "comment": "Secondary text (light theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-gray-60",
    {
      "$value": "#383838",
      "$description": "Tertiary surface (dark theme)",
      "attributes": {
        "type": "gray",
        "category": "color",
        "item": "60",
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
      "name": "rh-color-gray-60",
      "path": [
        "color",
        "gray",
        "60"
      ],
      "comment": "Tertiary surface (dark theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-gray-70",
    {
      "$value": "#292929",
      "$description": null,
      "attributes": {
        "type": "gray",
        "category": "color",
        "item": "70",
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
        "$description": null,
        "attributes": {
          "type": "gray"
        },
        "value": "#292929"
      },
      "name": "rh-color-gray-70",
      "path": [
        "color",
        "gray",
        "70"
      ],
      "comment": null,
      "$type": "color"
    }
  ],
  [
    "--rh-color-gray-80",
    {
      "$value": "#1F1F1F",
      "$description": "Secondary surface (dark theme)",
      "attributes": {
        "type": "gray",
        "category": "color",
        "item": "80",
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
      "name": "rh-color-gray-80",
      "path": [
        "color",
        "gray",
        "80"
      ],
      "comment": "Secondary surface (dark theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-gray-90",
    {
      "$value": "#151515",
      "$description": "Primary surface (dark theme) or primary text (light theme)",
      "attributes": {
        "type": "gray",
        "category": "color",
        "item": "90",
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
      "name": "rh-color-gray-90",
      "path": [
        "color",
        "gray",
        "90"
      ],
      "comment": "Primary surface (dark theme) or primary text (light theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-gray-10-hsl",
    {
      "$type": "color",
      "$value": "0 0% 87.84313725490196%",
      "value": "0 0% 87.84313725490196%",
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
        "10-hsl"
      ]
    }
  ],
  [
    "--rh-color-gray-10-rgb",
    {
      "$type": "color",
      "$value": "224 224 224",
      "value": "224 224 224",
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
        "10-rgb"
      ]
    }
  ],
  [
    "--rh-color-gray-20-hsl",
    {
      "$type": "color",
      "$value": "0 0% 78.03921568627452%",
      "value": "0 0% 78.03921568627452%",
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
        "20-hsl"
      ]
    }
  ],
  [
    "--rh-color-gray-20-rgb",
    {
      "$type": "color",
      "$value": "199 199 199",
      "value": "199 199 199",
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
        "20-rgb"
      ]
    }
  ],
  [
    "--rh-color-gray-30-hsl",
    {
      "$type": "color",
      "$value": "0 0% 63.921568627450974%",
      "value": "0 0% 63.921568627450974%",
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
        "30-hsl"
      ]
    }
  ],
  [
    "--rh-color-gray-30-rgb",
    {
      "$type": "color",
      "$value": "163 163 163",
      "value": "163 163 163",
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
        "30-rgb"
      ]
    }
  ],
  [
    "--rh-color-gray-40-hsl",
    {
      "$type": "color",
      "$value": "0 0% 43.92156862745098%",
      "value": "0 0% 43.92156862745098%",
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
        "40-hsl"
      ]
    }
  ],
  [
    "--rh-color-gray-40-rgb",
    {
      "$type": "color",
      "$value": "112 112 112",
      "value": "112 112 112",
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
        "40-rgb"
      ]
    }
  ],
  [
    "--rh-color-gray-50-hsl",
    {
      "$type": "color",
      "$value": "0 0% 30.19607843137255%",
      "value": "0 0% 30.19607843137255%",
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
        "50-hsl"
      ]
    }
  ],
  [
    "--rh-color-gray-50-rgb",
    {
      "$type": "color",
      "$value": "77 77 77",
      "value": "77 77 77",
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
        "50-rgb"
      ]
    }
  ],
  [
    "--rh-color-gray-60-hsl",
    {
      "$type": "color",
      "$value": "0 0% 21.96078431372549%",
      "value": "0 0% 21.96078431372549%",
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
        "60-hsl"
      ]
    }
  ],
  [
    "--rh-color-gray-60-rgb",
    {
      "$type": "color",
      "$value": "56 56 56",
      "value": "56 56 56",
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
        "60-rgb"
      ]
    }
  ],
  [
    "--rh-color-gray-70-hsl",
    {
      "$type": "color",
      "$value": "0 0% 16.07843137254902%",
      "value": "0 0% 16.07843137254902%",
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
        "70-hsl"
      ]
    }
  ],
  [
    "--rh-color-gray-70-rgb",
    {
      "$type": "color",
      "$value": "41 41 41",
      "value": "41 41 41",
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
        "70-rgb"
      ]
    }
  ],
  [
    "--rh-color-gray-80-hsl",
    {
      "$type": "color",
      "$value": "0 0% 12.156862745098039%",
      "value": "0 0% 12.156862745098039%",
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
        "80-hsl"
      ]
    }
  ],
  [
    "--rh-color-gray-80-rgb",
    {
      "$type": "color",
      "$value": "31 31 31",
      "value": "31 31 31",
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
        "80-rgb"
      ]
    }
  ],
  [
    "--rh-color-gray-90-hsl",
    {
      "$type": "color",
      "$value": "0 0% 8.235294117647058%",
      "value": "0 0% 8.235294117647058%",
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
        "90-hsl"
      ]
    }
  ],
  [
    "--rh-color-gray-90-rgb",
    {
      "$type": "color",
      "$value": "21 21 21",
      "value": "21 21 21",
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
        "90-rgb"
      ]
    }
  ],
  [
    "--rh-color-gray-05",
    {
      "$value": "#F2F2F2",
      "$description": "Tertiary surface (light theme)",
      "attributes": {
        "type": "gray",
        "category": "color",
        "item": "05",
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
      "name": "rh-color-gray-05",
      "path": [
        "color",
        "gray",
        "05"
      ],
      "comment": "Tertiary surface (light theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-gray-05-hsl",
    {
      "$type": "color",
      "$value": "0 0% 94.90196078431372%",
      "value": "0 0% 94.90196078431372%",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.gray.05}",
        "value": "{color.gray.05}"
      },
      "name": "rh-color-gray-05-hsl",
      "attributes": {
        "category": "color",
        "type": "gray",
        "item": "05-hsl",
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
        "05-hsl"
      ]
    }
  ],
  [
    "--rh-color-gray-05-rgb",
    {
      "$type": "color",
      "$value": "242 242 242",
      "value": "242 242 242",
      "filePath": "tokens/color/crayon/gray.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.gray.05}",
        "value": "{color.gray.05}"
      },
      "name": "rh-color-gray-05-rgb",
      "attributes": {
        "category": "color",
        "type": "gray",
        "item": "05-rgb",
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
        "05-rgb"
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
    "--rh-color-green-50",
    {
      "$value": "#f3faf2",
      "$description": "alert - success background",
      "value": "#f3faf2",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$value": "#f3faf2",
        "$description": "alert - success background",
        "value": "#f3faf2"
      },
      "name": "rh-color-green-50",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "50",
        "hex": "f3faf2",
        "rgb": {
          "r": 243,
          "g": 250,
          "b": 242,
          "a": 1
        },
        "hsl": {
          "h": 112.50000000000001,
          "s": 44.444444444444464,
          "l": 96.4705882352941,
          "a": 1
        },
        "hsv": {
          "h": 112.50000000000001,
          "s": 0.032,
          "v": 0.9803921568627451,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "green",
        "50"
      ],
      "comment": "alert - success background",
      "$type": "color"
    }
  ],
  [
    "--rh-color-green-100",
    {
      "$value": "#bde5b8",
      "$description": "Label - Filled (Green) border color",
      "value": "#bde5b8",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$value": "#bde5b8",
        "$description": "Label - Filled (Green) border color",
        "value": "#bde5b8"
      },
      "name": "rh-color-green-100",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "100",
        "hex": "bde5b8",
        "rgb": {
          "r": 189,
          "g": 229,
          "b": 184,
          "a": 1
        },
        "hsl": {
          "h": 113.33333333333331,
          "s": 46.391752577319586,
          "l": 80.98039215686275,
          "a": 1
        },
        "hsv": {
          "h": 113.33333333333331,
          "s": 0.19650655021834065,
          "v": 0.8980392156862745,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "green",
        "100"
      ],
      "comment": "Label - Filled (Green) border color",
      "$type": "color"
    }
  ],
  [
    "--rh-color-green-500",
    {
      "$value": "#3e8635",
      "$description": "Alert - Success accent",
      "value": "#3e8635",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$value": "#3e8635",
        "$description": "Alert - Success accent",
        "value": "#3e8635"
      },
      "name": "rh-color-green-500",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "500",
        "hex": "3e8635",
        "rgb": {
          "r": 62,
          "g": 134,
          "b": 53,
          "a": 1
        },
        "hsl": {
          "h": 113.33333333333334,
          "s": 43.31550802139037,
          "l": 36.66666666666667,
          "a": 1
        },
        "hsv": {
          "h": 113.33333333333334,
          "s": 0.6044776119402985,
          "v": 0.5254901960784314,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "green",
        "500"
      ],
      "comment": "Alert - Success accent",
      "$type": "color"
    }
  ],
  [
    "--rh-color-green-600",
    {
      "$value": "#1e4f18",
      "$description": "Alert - Success title text",
      "value": "#1e4f18",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$value": "#1e4f18",
        "$description": "Alert - Success title text",
        "value": "#1e4f18"
      },
      "name": "rh-color-green-600",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "600",
        "hex": "1e4f18",
        "rgb": {
          "r": 30,
          "g": 79,
          "b": 24,
          "a": 1
        },
        "hsl": {
          "h": 113.45454545454544,
          "s": 53.398058252427184,
          "l": 20.19607843137255,
          "a": 1
        },
        "hsv": {
          "h": 113.45454545454544,
          "s": 0.6962025316455697,
          "v": 0.30980392156862746,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "green",
        "600"
      ],
      "comment": "Alert - Success title text",
      "$type": "color"
    }
  ],
  [
    "--rh-color-green-50-hsl",
    {
      "$type": "color",
      "$value": "112.50000000000001 44.444444444444464% 96.4705882352941%",
      "value": "112.50000000000001 44.444444444444464% 96.4705882352941%",
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
        "hex": "f3faf2",
        "rgb": {
          "r": 243,
          "g": 250,
          "b": 242,
          "a": 1
        },
        "hsl": {
          "h": 112.50000000000001,
          "s": 44.444444444444464,
          "l": 96.4705882352941,
          "a": 1
        },
        "hsv": {
          "h": 112.50000000000001,
          "s": 0.032,
          "v": 0.9803921568627451,
          "a": 1
        },
        "isLight": true
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
      "$value": "243 250 242",
      "value": "243 250 242",
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
        "hex": "f3faf2",
        "rgb": {
          "r": 243,
          "g": 250,
          "b": 242,
          "a": 1
        },
        "hsl": {
          "h": 112.50000000000001,
          "s": 44.444444444444464,
          "l": 96.4705882352941,
          "a": 1
        },
        "hsv": {
          "h": 112.50000000000001,
          "s": 0.032,
          "v": 0.9803921568627451,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "green",
        "50-rgb"
      ]
    }
  ],
  [
    "--rh-color-green-100-hsl",
    {
      "$type": "color",
      "$value": "113.33333333333331 46.391752577319586% 80.98039215686275%",
      "value": "113.33333333333331 46.391752577319586% 80.98039215686275%",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.green.100}",
        "value": "{color.green.100}"
      },
      "name": "rh-color-green-100-hsl",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "100-hsl",
        "hex": "bde5b8",
        "rgb": {
          "r": 189,
          "g": 229,
          "b": 184,
          "a": 1
        },
        "hsl": {
          "h": 113.33333333333331,
          "s": 46.391752577319586,
          "l": 80.98039215686275,
          "a": 1
        },
        "hsv": {
          "h": 113.33333333333331,
          "s": 0.19650655021834065,
          "v": 0.8980392156862745,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "green",
        "100-hsl"
      ]
    }
  ],
  [
    "--rh-color-green-100-rgb",
    {
      "$type": "color",
      "$value": "189 229 184",
      "value": "189 229 184",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.green.100}",
        "value": "{color.green.100}"
      },
      "name": "rh-color-green-100-rgb",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "100-rgb",
        "hex": "bde5b8",
        "rgb": {
          "r": 189,
          "g": 229,
          "b": 184,
          "a": 1
        },
        "hsl": {
          "h": 113.33333333333331,
          "s": 46.391752577319586,
          "l": 80.98039215686275,
          "a": 1
        },
        "hsv": {
          "h": 113.33333333333331,
          "s": 0.19650655021834065,
          "v": 0.8980392156862745,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "green",
        "100-rgb"
      ]
    }
  ],
  [
    "--rh-color-green-500-hsl",
    {
      "$type": "color",
      "$value": "113.33333333333334 43.31550802139037% 36.66666666666667%",
      "value": "113.33333333333334 43.31550802139037% 36.66666666666667%",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.green.500}",
        "value": "{color.green.500}"
      },
      "name": "rh-color-green-500-hsl",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "500-hsl",
        "hex": "3e8635",
        "rgb": {
          "r": 62,
          "g": 134,
          "b": 53,
          "a": 1
        },
        "hsl": {
          "h": 113.33333333333334,
          "s": 43.31550802139037,
          "l": 36.66666666666667,
          "a": 1
        },
        "hsv": {
          "h": 113.33333333333334,
          "s": 0.6044776119402985,
          "v": 0.5254901960784314,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "green",
        "500-hsl"
      ]
    }
  ],
  [
    "--rh-color-green-500-rgb",
    {
      "$type": "color",
      "$value": "62 134 53",
      "value": "62 134 53",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.green.500}",
        "value": "{color.green.500}"
      },
      "name": "rh-color-green-500-rgb",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "500-rgb",
        "hex": "3e8635",
        "rgb": {
          "r": 62,
          "g": 134,
          "b": 53,
          "a": 1
        },
        "hsl": {
          "h": 113.33333333333334,
          "s": 43.31550802139037,
          "l": 36.66666666666667,
          "a": 1
        },
        "hsv": {
          "h": 113.33333333333334,
          "s": 0.6044776119402985,
          "v": 0.5254901960784314,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "green",
        "500-rgb"
      ]
    }
  ],
  [
    "--rh-color-green-600-hsl",
    {
      "$type": "color",
      "$value": "113.45454545454544 53.398058252427184% 20.19607843137255%",
      "value": "113.45454545454544 53.398058252427184% 20.19607843137255%",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.green.600}",
        "value": "{color.green.600}"
      },
      "name": "rh-color-green-600-hsl",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "600-hsl",
        "hex": "1e4f18",
        "rgb": {
          "r": 30,
          "g": 79,
          "b": 24,
          "a": 1
        },
        "hsl": {
          "h": 113.45454545454544,
          "s": 53.398058252427184,
          "l": 20.19607843137255,
          "a": 1
        },
        "hsv": {
          "h": 113.45454545454544,
          "s": 0.6962025316455697,
          "v": 0.30980392156862746,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "green",
        "600-hsl"
      ]
    }
  ],
  [
    "--rh-color-green-600-rgb",
    {
      "$type": "color",
      "$value": "30 79 24",
      "value": "30 79 24",
      "filePath": "tokens/color/crayon/green.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.green.600}",
        "value": "{color.green.600}"
      },
      "name": "rh-color-green-600-rgb",
      "attributes": {
        "category": "color",
        "type": "green",
        "item": "600-rgb",
        "hex": "1e4f18",
        "rgb": {
          "r": 30,
          "g": 79,
          "b": 24,
          "a": 1
        },
        "hsl": {
          "h": 113.45454545454544,
          "s": 53.398058252427184,
          "l": 20.19607843137255,
          "a": 1
        },
        "hsv": {
          "h": 113.45454545454544,
          "s": 0.6962025316455697,
          "v": 0.30980392156862746,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "green",
        "600-rgb"
      ]
    }
  ],
  [
    "--rh-color-orange-50",
    {
      "$value": "#fff6ec",
      "$description": "Label - Filled (Orange) background color",
      "value": "#fff6ec",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$value": "#fff6ec",
        "$description": "Label - Filled (Orange) background color",
        "value": "#fff6ec"
      },
      "name": "rh-color-orange-50",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "50",
        "hex": "fff6ec",
        "rgb": {
          "r": 255,
          "g": 246,
          "b": 236,
          "a": 1
        },
        "hsl": {
          "h": 31.57894736842105,
          "s": 100,
          "l": 96.27450980392157,
          "a": 1
        },
        "hsv": {
          "h": 31.57894736842105,
          "s": 0.07450980392156858,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "orange",
        "50"
      ],
      "comment": "Label - Filled (Orange) background color",
      "$type": "color"
    }
  ],
  [
    "--rh-color-orange-100",
    {
      "$value": "#f4b678",
      "$description": "Label - Filled (Orange) border color",
      "value": "#f4b678",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$value": "#f4b678",
        "$description": "Label - Filled (Orange) border color",
        "value": "#f4b678"
      },
      "name": "rh-color-orange-100",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "100",
        "hex": "f4b678",
        "rgb": {
          "r": 244,
          "g": 182,
          "b": 120,
          "a": 1
        },
        "hsl": {
          "h": 30,
          "s": 84.9315068493151,
          "l": 71.37254901960785,
          "a": 1
        },
        "hsv": {
          "h": 30,
          "s": 0.5081967213114754,
          "v": 0.9568627450980393,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "orange",
        "100"
      ],
      "comment": "Label - Filled (Orange) border color",
      "$type": "color"
    }
  ],
  [
    "--rh-color-orange-300",
    {
      "$value": "#ec7a08",
      "$description": "Label - Filled (Orange) accent color",
      "value": "#ec7a08",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$value": "#ec7a08",
        "$description": "Label - Filled (Orange) accent color",
        "value": "#ec7a08"
      },
      "name": "rh-color-orange-300",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "300",
        "hex": "ec7a08",
        "rgb": {
          "r": 236,
          "g": 122,
          "b": 8,
          "a": 1
        },
        "hsl": {
          "h": 30,
          "s": 93.44262295081968,
          "l": 47.84313725490196,
          "a": 1
        },
        "hsv": {
          "h": 30,
          "s": 0.9661016949152542,
          "v": 0.9254901960784314,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "orange",
        "300"
      ],
      "comment": "Label - Filled (Orange) accent color",
      "$type": "color"
    }
  ],
  [
    "--rh-color-orange-500",
    {
      "$value": "#8f4700",
      "$description": "Label - Filled (Orange) accent color",
      "value": "#8f4700",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$value": "#8f4700",
        "$description": "Label - Filled (Orange) accent color",
        "value": "#8f4700"
      },
      "name": "rh-color-orange-500",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "500",
        "hex": "8f4700",
        "rgb": {
          "r": 143,
          "g": 71,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 29.79020979020979,
          "s": 100,
          "l": 28.03921568627451,
          "a": 1
        },
        "hsv": {
          "h": 29.79020979020979,
          "s": 1,
          "v": 0.5607843137254902,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "orange",
        "500"
      ],
      "comment": "Label - Filled (Orange) accent color",
      "$type": "color"
    }
  ],
  [
    "--rh-color-orange-700",
    {
      "$value": "#3b1f00",
      "$description": "Label - Filled (Orange) text color",
      "value": "#3b1f00",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$value": "#3b1f00",
        "$description": "Label - Filled (Orange) text color",
        "value": "#3b1f00"
      },
      "name": "rh-color-orange-700",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "700",
        "hex": "3b1f00",
        "rgb": {
          "r": 59,
          "g": 31,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 31.525423728813553,
          "s": 100,
          "l": 11.568627450980392,
          "a": 1
        },
        "hsv": {
          "h": 31.525423728813553,
          "s": 1,
          "v": 0.23137254901960785,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "orange",
        "700"
      ],
      "comment": "Label - Filled (Orange) text color",
      "$type": "color"
    }
  ],
  [
    "--rh-color-orange-50-hsl",
    {
      "$type": "color",
      "$value": "31.57894736842105 100% 96.27450980392157%",
      "value": "31.57894736842105 100% 96.27450980392157%",
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
        "hex": "fff6ec",
        "rgb": {
          "r": 255,
          "g": 246,
          "b": 236,
          "a": 1
        },
        "hsl": {
          "h": 31.57894736842105,
          "s": 100,
          "l": 96.27450980392157,
          "a": 1
        },
        "hsv": {
          "h": 31.57894736842105,
          "s": 0.07450980392156858,
          "v": 1,
          "a": 1
        },
        "isLight": true
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
      "$value": "255 246 236",
      "value": "255 246 236",
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
        "hex": "fff6ec",
        "rgb": {
          "r": 255,
          "g": 246,
          "b": 236,
          "a": 1
        },
        "hsl": {
          "h": 31.57894736842105,
          "s": 100,
          "l": 96.27450980392157,
          "a": 1
        },
        "hsv": {
          "h": 31.57894736842105,
          "s": 0.07450980392156858,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "orange",
        "50-rgb"
      ]
    }
  ],
  [
    "--rh-color-orange-100-hsl",
    {
      "$type": "color",
      "$value": "30 84.9315068493151% 71.37254901960785%",
      "value": "30 84.9315068493151% 71.37254901960785%",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.orange.100}",
        "value": "{color.orange.100}"
      },
      "name": "rh-color-orange-100-hsl",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "100-hsl",
        "hex": "f4b678",
        "rgb": {
          "r": 244,
          "g": 182,
          "b": 120,
          "a": 1
        },
        "hsl": {
          "h": 30,
          "s": 84.9315068493151,
          "l": 71.37254901960785,
          "a": 1
        },
        "hsv": {
          "h": 30,
          "s": 0.5081967213114754,
          "v": 0.9568627450980393,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "orange",
        "100-hsl"
      ]
    }
  ],
  [
    "--rh-color-orange-100-rgb",
    {
      "$type": "color",
      "$value": "244 182 120",
      "value": "244 182 120",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.orange.100}",
        "value": "{color.orange.100}"
      },
      "name": "rh-color-orange-100-rgb",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "100-rgb",
        "hex": "f4b678",
        "rgb": {
          "r": 244,
          "g": 182,
          "b": 120,
          "a": 1
        },
        "hsl": {
          "h": 30,
          "s": 84.9315068493151,
          "l": 71.37254901960785,
          "a": 1
        },
        "hsv": {
          "h": 30,
          "s": 0.5081967213114754,
          "v": 0.9568627450980393,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "orange",
        "100-rgb"
      ]
    }
  ],
  [
    "--rh-color-orange-300-hsl",
    {
      "$type": "color",
      "$value": "30 93.44262295081968% 47.84313725490196%",
      "value": "30 93.44262295081968% 47.84313725490196%",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.orange.300}",
        "value": "{color.orange.300}"
      },
      "name": "rh-color-orange-300-hsl",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "300-hsl",
        "hex": "ec7a08",
        "rgb": {
          "r": 236,
          "g": 122,
          "b": 8,
          "a": 1
        },
        "hsl": {
          "h": 30,
          "s": 93.44262295081968,
          "l": 47.84313725490196,
          "a": 1
        },
        "hsv": {
          "h": 30,
          "s": 0.9661016949152542,
          "v": 0.9254901960784314,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "orange",
        "300-hsl"
      ]
    }
  ],
  [
    "--rh-color-orange-300-rgb",
    {
      "$type": "color",
      "$value": "236 122 8",
      "value": "236 122 8",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.orange.300}",
        "value": "{color.orange.300}"
      },
      "name": "rh-color-orange-300-rgb",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "300-rgb",
        "hex": "ec7a08",
        "rgb": {
          "r": 236,
          "g": 122,
          "b": 8,
          "a": 1
        },
        "hsl": {
          "h": 30,
          "s": 93.44262295081968,
          "l": 47.84313725490196,
          "a": 1
        },
        "hsv": {
          "h": 30,
          "s": 0.9661016949152542,
          "v": 0.9254901960784314,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "orange",
        "300-rgb"
      ]
    }
  ],
  [
    "--rh-color-orange-500-hsl",
    {
      "$type": "color",
      "$value": "29.79020979020979 100% 28.03921568627451%",
      "value": "29.79020979020979 100% 28.03921568627451%",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.orange.500}",
        "value": "{color.orange.500}"
      },
      "name": "rh-color-orange-500-hsl",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "500-hsl",
        "hex": "8f4700",
        "rgb": {
          "r": 143,
          "g": 71,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 29.79020979020979,
          "s": 100,
          "l": 28.03921568627451,
          "a": 1
        },
        "hsv": {
          "h": 29.79020979020979,
          "s": 1,
          "v": 0.5607843137254902,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "orange",
        "500-hsl"
      ]
    }
  ],
  [
    "--rh-color-orange-500-rgb",
    {
      "$type": "color",
      "$value": "143 71 0",
      "value": "143 71 0",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.orange.500}",
        "value": "{color.orange.500}"
      },
      "name": "rh-color-orange-500-rgb",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "500-rgb",
        "hex": "8f4700",
        "rgb": {
          "r": 143,
          "g": 71,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 29.79020979020979,
          "s": 100,
          "l": 28.03921568627451,
          "a": 1
        },
        "hsv": {
          "h": 29.79020979020979,
          "s": 1,
          "v": 0.5607843137254902,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "orange",
        "500-rgb"
      ]
    }
  ],
  [
    "--rh-color-orange-700-hsl",
    {
      "$type": "color",
      "$value": "31.525423728813553 100% 11.568627450980392%",
      "value": "31.525423728813553 100% 11.568627450980392%",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.orange.700}",
        "value": "{color.orange.700}"
      },
      "name": "rh-color-orange-700-hsl",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "700-hsl",
        "hex": "3b1f00",
        "rgb": {
          "r": 59,
          "g": 31,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 31.525423728813553,
          "s": 100,
          "l": 11.568627450980392,
          "a": 1
        },
        "hsv": {
          "h": 31.525423728813553,
          "s": 1,
          "v": 0.23137254901960785,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "orange",
        "700-hsl"
      ]
    }
  ],
  [
    "--rh-color-orange-700-rgb",
    {
      "$type": "color",
      "$value": "59 31 0",
      "value": "59 31 0",
      "filePath": "tokens/color/crayon/orange.yml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.orange.700}",
        "value": "{color.orange.700}"
      },
      "name": "rh-color-orange-700-rgb",
      "attributes": {
        "category": "color",
        "type": "orange",
        "item": "700-rgb",
        "hex": "3b1f00",
        "rgb": {
          "r": 59,
          "g": 31,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 31.525423728813553,
          "s": 100,
          "l": 11.568627450980392,
          "a": 1
        },
        "hsv": {
          "h": 31.525423728813553,
          "s": 1,
          "v": 0.23137254901960785,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "orange",
        "700-rgb"
      ]
    }
  ],
  [
    "--rh-color-purple-50",
    {
      "$value": "#f2f0fc",
      "$description": "Label - Filled (Purple) background color",
      "value": "#f2f0fc",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$value": "#f2f0fc",
        "$description": "Label - Filled (Purple) background color",
        "value": "#f2f0fc"
      },
      "name": "rh-color-purple-50",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "50",
        "hex": "f2f0fc",
        "rgb": {
          "r": 242,
          "g": 240,
          "b": 252,
          "a": 1
        },
        "hsl": {
          "h": 249.99999999999994,
          "s": 66.66666666666677,
          "l": 96.47058823529412,
          "a": 1
        },
        "hsv": {
          "h": 249.99999999999994,
          "s": 0.04761904761904767,
          "v": 0.9882352941176471,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "purple",
        "50"
      ],
      "comment": "Label - Filled (Purple) background color",
      "$type": "color"
    }
  ],
  [
    "--rh-color-purple-100",
    {
      "$value": "#cbc1ff",
      "value": "#cbc1ff",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$value": "#cbc1ff",
        "value": "#cbc1ff"
      },
      "name": "rh-color-purple-100",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "100",
        "hex": "cbc1ff",
        "rgb": {
          "r": 203,
          "g": 193,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 249.6774193548387,
          "s": 100,
          "l": 87.84313725490196,
          "a": 1
        },
        "hsv": {
          "h": 249.6774193548387,
          "s": 0.2431372549019608,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "purple",
        "100"
      ],
      "$type": "color"
    }
  ],
  [
    "--rh-color-purple-300",
    {
      "$value": "#a18fff",
      "value": "#a18fff",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$value": "#a18fff",
        "value": "#a18fff"
      },
      "name": "rh-color-purple-300",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "300",
        "hex": "a18fff",
        "rgb": {
          "r": 161,
          "g": 143,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 249.64285714285714,
          "s": 100,
          "l": 78.03921568627452,
          "a": 1
        },
        "hsv": {
          "h": 249.64285714285714,
          "s": 0.4392156862745098,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "purple",
        "300"
      ],
      "$type": "color"
    }
  ],
  [
    "--rh-color-purple-500",
    {
      "$value": "#6753ac",
      "value": "#6753ac",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$value": "#6753ac",
        "value": "#6753ac"
      },
      "name": "rh-color-purple-500",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "500",
        "hex": "6753ac",
        "rgb": {
          "r": 103,
          "g": 83,
          "b": 172,
          "a": 1
        },
        "hsl": {
          "h": 253.4831460674157,
          "s": 34.90196078431373,
          "l": 50,
          "a": 1
        },
        "hsv": {
          "h": 253.4831460674157,
          "s": 0.5174418604651163,
          "v": 0.6745098039215687,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "purple",
        "500"
      ],
      "$type": "color"
    }
  ],
  [
    "--rh-color-purple-700",
    {
      "$value": "#1f0066",
      "value": "#1f0066",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$value": "#1f0066",
        "value": "#1f0066"
      },
      "name": "rh-color-purple-700",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "700",
        "hex": "1f0066",
        "rgb": {
          "r": 31,
          "g": 0,
          "b": 102,
          "a": 1
        },
        "hsl": {
          "h": 258.2352941176471,
          "s": 100,
          "l": 20,
          "a": 1
        },
        "hsv": {
          "h": 258.2352941176471,
          "s": 1,
          "v": 0.4,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "purple",
        "700"
      ],
      "$type": "color"
    }
  ],
  [
    "--rh-color-purple-50-hsl",
    {
      "$type": "color",
      "$value": "249.99999999999994 66.66666666666677% 96.47058823529412%",
      "value": "249.99999999999994 66.66666666666677% 96.47058823529412%",
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
        "hex": "f2f0fc",
        "rgb": {
          "r": 242,
          "g": 240,
          "b": 252,
          "a": 1
        },
        "hsl": {
          "h": 249.99999999999994,
          "s": 66.66666666666677,
          "l": 96.47058823529412,
          "a": 1
        },
        "hsv": {
          "h": 249.99999999999994,
          "s": 0.04761904761904767,
          "v": 0.9882352941176471,
          "a": 1
        },
        "isLight": true
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
      "$value": "242 240 252",
      "value": "242 240 252",
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
        "hex": "f2f0fc",
        "rgb": {
          "r": 242,
          "g": 240,
          "b": 252,
          "a": 1
        },
        "hsl": {
          "h": 249.99999999999994,
          "s": 66.66666666666677,
          "l": 96.47058823529412,
          "a": 1
        },
        "hsv": {
          "h": 249.99999999999994,
          "s": 0.04761904761904767,
          "v": 0.9882352941176471,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "purple",
        "50-rgb"
      ]
    }
  ],
  [
    "--rh-color-purple-100-hsl",
    {
      "$type": "color",
      "$value": "249.6774193548387 100% 87.84313725490196%",
      "value": "249.6774193548387 100% 87.84313725490196%",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.purple.100}",
        "value": "{color.purple.100}"
      },
      "name": "rh-color-purple-100-hsl",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "100-hsl",
        "hex": "cbc1ff",
        "rgb": {
          "r": 203,
          "g": 193,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 249.6774193548387,
          "s": 100,
          "l": 87.84313725490196,
          "a": 1
        },
        "hsv": {
          "h": 249.6774193548387,
          "s": 0.2431372549019608,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "purple",
        "100-hsl"
      ]
    }
  ],
  [
    "--rh-color-purple-100-rgb",
    {
      "$type": "color",
      "$value": "203 193 255",
      "value": "203 193 255",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.purple.100}",
        "value": "{color.purple.100}"
      },
      "name": "rh-color-purple-100-rgb",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "100-rgb",
        "hex": "cbc1ff",
        "rgb": {
          "r": 203,
          "g": 193,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 249.6774193548387,
          "s": 100,
          "l": 87.84313725490196,
          "a": 1
        },
        "hsv": {
          "h": 249.6774193548387,
          "s": 0.2431372549019608,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "purple",
        "100-rgb"
      ]
    }
  ],
  [
    "--rh-color-purple-300-hsl",
    {
      "$type": "color",
      "$value": "249.64285714285714 100% 78.03921568627452%",
      "value": "249.64285714285714 100% 78.03921568627452%",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.purple.300}",
        "value": "{color.purple.300}"
      },
      "name": "rh-color-purple-300-hsl",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "300-hsl",
        "hex": "a18fff",
        "rgb": {
          "r": 161,
          "g": 143,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 249.64285714285714,
          "s": 100,
          "l": 78.03921568627452,
          "a": 1
        },
        "hsv": {
          "h": 249.64285714285714,
          "s": 0.4392156862745098,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "purple",
        "300-hsl"
      ]
    }
  ],
  [
    "--rh-color-purple-300-rgb",
    {
      "$type": "color",
      "$value": "161 143 255",
      "value": "161 143 255",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.purple.300}",
        "value": "{color.purple.300}"
      },
      "name": "rh-color-purple-300-rgb",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "300-rgb",
        "hex": "a18fff",
        "rgb": {
          "r": 161,
          "g": 143,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 249.64285714285714,
          "s": 100,
          "l": 78.03921568627452,
          "a": 1
        },
        "hsv": {
          "h": 249.64285714285714,
          "s": 0.4392156862745098,
          "v": 1,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "purple",
        "300-rgb"
      ]
    }
  ],
  [
    "--rh-color-purple-500-hsl",
    {
      "$type": "color",
      "$value": "253.4831460674157 34.90196078431373% 50%",
      "value": "253.4831460674157 34.90196078431373% 50%",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.purple.500}",
        "value": "{color.purple.500}"
      },
      "name": "rh-color-purple-500-hsl",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "500-hsl",
        "hex": "6753ac",
        "rgb": {
          "r": 103,
          "g": 83,
          "b": 172,
          "a": 1
        },
        "hsl": {
          "h": 253.4831460674157,
          "s": 34.90196078431373,
          "l": 50,
          "a": 1
        },
        "hsv": {
          "h": 253.4831460674157,
          "s": 0.5174418604651163,
          "v": 0.6745098039215687,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "purple",
        "500-hsl"
      ]
    }
  ],
  [
    "--rh-color-purple-500-rgb",
    {
      "$type": "color",
      "$value": "103 83 172",
      "value": "103 83 172",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.purple.500}",
        "value": "{color.purple.500}"
      },
      "name": "rh-color-purple-500-rgb",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "500-rgb",
        "hex": "6753ac",
        "rgb": {
          "r": 103,
          "g": 83,
          "b": 172,
          "a": 1
        },
        "hsl": {
          "h": 253.4831460674157,
          "s": 34.90196078431373,
          "l": 50,
          "a": 1
        },
        "hsv": {
          "h": 253.4831460674157,
          "s": 0.5174418604651163,
          "v": 0.6745098039215687,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "purple",
        "500-rgb"
      ]
    }
  ],
  [
    "--rh-color-purple-700-hsl",
    {
      "$type": "color",
      "$value": "258.2352941176471 100% 20%",
      "value": "258.2352941176471 100% 20%",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.purple.700}",
        "value": "{color.purple.700}"
      },
      "name": "rh-color-purple-700-hsl",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "700-hsl",
        "hex": "1f0066",
        "rgb": {
          "r": 31,
          "g": 0,
          "b": 102,
          "a": 1
        },
        "hsl": {
          "h": 258.2352941176471,
          "s": 100,
          "l": 20,
          "a": 1
        },
        "hsv": {
          "h": 258.2352941176471,
          "s": 1,
          "v": 0.4,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "purple",
        "700-hsl"
      ]
    }
  ],
  [
    "--rh-color-purple-700-rgb",
    {
      "$type": "color",
      "$value": "31 0 102",
      "value": "31 0 102",
      "filePath": "tokens/color/crayon/purple.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.purple.700}",
        "value": "{color.purple.700}"
      },
      "name": "rh-color-purple-700-rgb",
      "attributes": {
        "category": "color",
        "type": "purple",
        "item": "700-rgb",
        "hex": "1f0066",
        "rgb": {
          "r": 31,
          "g": 0,
          "b": 102,
          "a": 1
        },
        "hsl": {
          "h": 258.2352941176471,
          "s": 100,
          "l": 20,
          "a": 1
        },
        "hsv": {
          "h": 258.2352941176471,
          "s": 1,
          "v": 0.4,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "purple",
        "700-rgb"
      ]
    }
  ],
  [
    "--rh-color-red-50",
    {
      "$value": "#faeae8",
      "$description": "Alert - Critical background",
      "value": "#faeae8",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$value": "#faeae8",
        "$description": "Alert - Critical background",
        "value": "#faeae8"
      },
      "name": "rh-color-red-50",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "50",
        "hex": "faeae8",
        "rgb": {
          "r": 250,
          "g": 234,
          "b": 232,
          "a": 1
        },
        "hsl": {
          "h": 6.666666666666645,
          "s": 64.28571428571429,
          "l": 94.50980392156862,
          "a": 1
        },
        "hsv": {
          "h": 6.666666666666645,
          "s": 0.07199999999999997,
          "v": 0.9803921568627451,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red",
        "50"
      ],
      "comment": "Alert - Critical background",
      "$type": "color"
    }
  ],
  [
    "--rh-color-red-100",
    {
      "$value": "#fddbdb",
      "$description": "Lightest red",
      "value": "#fddbdb",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$value": "#fddbdb",
        "$description": "Lightest red",
        "value": "#fddbdb"
      },
      "name": "rh-color-red-100",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "100",
        "hex": "fddbdb",
        "rgb": {
          "r": 253,
          "g": 219,
          "b": 219,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 89.47368421052634,
          "l": 92.54901960784314,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0.1343873517786562,
          "v": 0.9921568627450981,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red",
        "100"
      ],
      "comment": "Lightest red",
      "$type": "color"
    }
  ],
  [
    "--rh-color-red-200",
    {
      "$value": "#fab6b6",
      "$description": "Lighter red",
      "value": "#fab6b6",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$value": "#fab6b6",
        "$description": "Lighter red",
        "value": "#fab6b6"
      },
      "name": "rh-color-red-200",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "200",
        "hex": "fab6b6",
        "rgb": {
          "r": 250,
          "g": 182,
          "b": 182,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 87.17948717948718,
          "l": 84.70588235294117,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0.27199999999999996,
          "v": 0.9803921568627451,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red",
        "200"
      ],
      "comment": "Lighter red",
      "$type": "color"
    }
  ],
  [
    "--rh-color-red-300",
    {
      "$value": "#f56d6d",
      "$description": "Light red",
      "value": "#f56d6d",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$value": "#f56d6d",
        "$description": "Light red",
        "value": "#f56d6d"
      },
      "name": "rh-color-red-300",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "300",
        "hex": "f56d6d",
        "rgb": {
          "r": 245,
          "g": 109,
          "b": 109,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 87.17948717948723,
          "l": 69.41176470588235,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0.5551020408163266,
          "v": 0.9607843137254902,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red",
        "300"
      ],
      "comment": "Light red",
      "$type": "color"
    }
  ],
  [
    "--rh-color-red-400",
    {
      "$value": "#ff442b",
      "$description": "Brand red (dark theme)",
      "value": "#ff442b",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$value": "#ff442b",
        "$description": "Brand red (dark theme)",
        "value": "#ff442b"
      },
      "name": "rh-color-red-400",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "400",
        "hex": "ff442b",
        "rgb": {
          "r": 255,
          "g": 68,
          "b": 43,
          "a": 1
        },
        "hsl": {
          "h": 7.0754716981132075,
          "s": 100,
          "l": 58.43137254901961,
          "a": 1
        },
        "hsv": {
          "h": 7.0754716981132075,
          "s": 0.8313725490196078,
          "v": 1,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "red",
        "400"
      ],
      "comment": "Brand red (dark theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-red-500",
    {
      "$value": "#ee0000",
      "$description": "Brand red (light theme)",
      "value": "#ee0000",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$value": "#ee0000",
        "$description": "Brand red (light theme)",
        "value": "#ee0000"
      },
      "name": "rh-color-red-500",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "500",
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
        "500"
      ],
      "comment": "Brand red (light theme)",
      "$type": "color"
    }
  ],
  [
    "--rh-color-red-600",
    {
      "$value": "#be0000",
      "$description": "Dark red or brand red hover",
      "value": "#be0000",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$value": "#be0000",
        "$description": "Dark red or brand red hover",
        "value": "#be0000"
      },
      "name": "rh-color-red-600",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "600",
        "hex": "be0000",
        "rgb": {
          "r": 190,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 100,
          "l": 37.254901960784316,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 1,
          "v": 0.7450980392156863,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "red",
        "600"
      ],
      "comment": "Dark red or brand red hover",
      "$type": "color"
    }
  ],
  [
    "--rh-color-red-700",
    {
      "$value": "#8f0000",
      "$description": "Darker red",
      "value": "#8f0000",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$value": "#8f0000",
        "$description": "Darker red",
        "value": "#8f0000"
      },
      "name": "rh-color-red-700",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "700",
        "hex": "8f0000",
        "rgb": {
          "r": 143,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 100,
          "l": 28.03921568627451,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 1,
          "v": 0.5607843137254902,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "red",
        "700"
      ],
      "comment": "Darker red",
      "$type": "color"
    }
  ],
  [
    "--rh-color-red-800",
    {
      "$value": "#5f0000",
      "$description": "Darkest red",
      "value": "#5f0000",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$value": "#5f0000",
        "$description": "Darkest red",
        "value": "#5f0000"
      },
      "name": "rh-color-red-800",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "800",
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
        "800"
      ],
      "comment": "Darkest red",
      "$type": "color"
    }
  ],
  [
    "--rh-color-red-50-hsl",
    {
      "$type": "color",
      "$value": "6.666666666666645 64.28571428571429% 94.50980392156862%",
      "value": "6.666666666666645 64.28571428571429% 94.50980392156862%",
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
        "hex": "faeae8",
        "rgb": {
          "r": 250,
          "g": 234,
          "b": 232,
          "a": 1
        },
        "hsl": {
          "h": 6.666666666666645,
          "s": 64.28571428571429,
          "l": 94.50980392156862,
          "a": 1
        },
        "hsv": {
          "h": 6.666666666666645,
          "s": 0.07199999999999997,
          "v": 0.9803921568627451,
          "a": 1
        },
        "isLight": true
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
      "$value": "250 234 232",
      "value": "250 234 232",
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
        "hex": "faeae8",
        "rgb": {
          "r": 250,
          "g": 234,
          "b": 232,
          "a": 1
        },
        "hsl": {
          "h": 6.666666666666645,
          "s": 64.28571428571429,
          "l": 94.50980392156862,
          "a": 1
        },
        "hsv": {
          "h": 6.666666666666645,
          "s": 0.07199999999999997,
          "v": 0.9803921568627451,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red",
        "50-rgb"
      ]
    }
  ],
  [
    "--rh-color-red-100-hsl",
    {
      "$type": "color",
      "$value": "0 89.47368421052634% 92.54901960784314%",
      "value": "0 89.47368421052634% 92.54901960784314%",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.100}",
        "value": "{color.red.100}"
      },
      "name": "rh-color-red-100-hsl",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "100-hsl",
        "hex": "fddbdb",
        "rgb": {
          "r": 253,
          "g": 219,
          "b": 219,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 89.47368421052634,
          "l": 92.54901960784314,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0.1343873517786562,
          "v": 0.9921568627450981,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red",
        "100-hsl"
      ]
    }
  ],
  [
    "--rh-color-red-100-rgb",
    {
      "$type": "color",
      "$value": "253 219 219",
      "value": "253 219 219",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.100}",
        "value": "{color.red.100}"
      },
      "name": "rh-color-red-100-rgb",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "100-rgb",
        "hex": "fddbdb",
        "rgb": {
          "r": 253,
          "g": 219,
          "b": 219,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 89.47368421052634,
          "l": 92.54901960784314,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0.1343873517786562,
          "v": 0.9921568627450981,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red",
        "100-rgb"
      ]
    }
  ],
  [
    "--rh-color-red-200-hsl",
    {
      "$type": "color",
      "$value": "0 87.17948717948718% 84.70588235294117%",
      "value": "0 87.17948717948718% 84.70588235294117%",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.200}",
        "value": "{color.red.200}"
      },
      "name": "rh-color-red-200-hsl",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "200-hsl",
        "hex": "fab6b6",
        "rgb": {
          "r": 250,
          "g": 182,
          "b": 182,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 87.17948717948718,
          "l": 84.70588235294117,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0.27199999999999996,
          "v": 0.9803921568627451,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red",
        "200-hsl"
      ]
    }
  ],
  [
    "--rh-color-red-200-rgb",
    {
      "$type": "color",
      "$value": "250 182 182",
      "value": "250 182 182",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.200}",
        "value": "{color.red.200}"
      },
      "name": "rh-color-red-200-rgb",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "200-rgb",
        "hex": "fab6b6",
        "rgb": {
          "r": 250,
          "g": 182,
          "b": 182,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 87.17948717948718,
          "l": 84.70588235294117,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0.27199999999999996,
          "v": 0.9803921568627451,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red",
        "200-rgb"
      ]
    }
  ],
  [
    "--rh-color-red-300-hsl",
    {
      "$type": "color",
      "$value": "0 87.17948717948723% 69.41176470588235%",
      "value": "0 87.17948717948723% 69.41176470588235%",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.300}",
        "value": "{color.red.300}"
      },
      "name": "rh-color-red-300-hsl",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "300-hsl",
        "hex": "f56d6d",
        "rgb": {
          "r": 245,
          "g": 109,
          "b": 109,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 87.17948717948723,
          "l": 69.41176470588235,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0.5551020408163266,
          "v": 0.9607843137254902,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red",
        "300-hsl"
      ]
    }
  ],
  [
    "--rh-color-red-300-rgb",
    {
      "$type": "color",
      "$value": "245 109 109",
      "value": "245 109 109",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.300}",
        "value": "{color.red.300}"
      },
      "name": "rh-color-red-300-rgb",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "300-rgb",
        "hex": "f56d6d",
        "rgb": {
          "r": 245,
          "g": 109,
          "b": 109,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 87.17948717948723,
          "l": 69.41176470588235,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 0.5551020408163266,
          "v": 0.9607843137254902,
          "a": 1
        },
        "isLight": true
      },
      "path": [
        "color",
        "red",
        "300-rgb"
      ]
    }
  ],
  [
    "--rh-color-red-400-hsl",
    {
      "$type": "color",
      "$value": "7.0754716981132075 100% 58.43137254901961%",
      "value": "7.0754716981132075 100% 58.43137254901961%",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.400}",
        "value": "{color.red.400}"
      },
      "name": "rh-color-red-400-hsl",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "400-hsl",
        "hex": "ff442b",
        "rgb": {
          "r": 255,
          "g": 68,
          "b": 43,
          "a": 1
        },
        "hsl": {
          "h": 7.0754716981132075,
          "s": 100,
          "l": 58.43137254901961,
          "a": 1
        },
        "hsv": {
          "h": 7.0754716981132075,
          "s": 0.8313725490196078,
          "v": 1,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "red",
        "400-hsl"
      ]
    }
  ],
  [
    "--rh-color-red-400-rgb",
    {
      "$type": "color",
      "$value": "255 68 43",
      "value": "255 68 43",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.400}",
        "value": "{color.red.400}"
      },
      "name": "rh-color-red-400-rgb",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "400-rgb",
        "hex": "ff442b",
        "rgb": {
          "r": 255,
          "g": 68,
          "b": 43,
          "a": 1
        },
        "hsl": {
          "h": 7.0754716981132075,
          "s": 100,
          "l": 58.43137254901961,
          "a": 1
        },
        "hsv": {
          "h": 7.0754716981132075,
          "s": 0.8313725490196078,
          "v": 1,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "red",
        "400-rgb"
      ]
    }
  ],
  [
    "--rh-color-red-500-hsl",
    {
      "$type": "color",
      "$value": "0 100% 46.666666666666664%",
      "value": "0 100% 46.666666666666664%",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.500}",
        "value": "{color.red.500}"
      },
      "name": "rh-color-red-500-hsl",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "500-hsl",
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
        "500-hsl"
      ]
    }
  ],
  [
    "--rh-color-red-500-rgb",
    {
      "$type": "color",
      "$value": "238 0 0",
      "value": "238 0 0",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.500}",
        "value": "{color.red.500}"
      },
      "name": "rh-color-red-500-rgb",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "500-rgb",
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
        "500-rgb"
      ]
    }
  ],
  [
    "--rh-color-red-600-hsl",
    {
      "$type": "color",
      "$value": "0 100% 37.254901960784316%",
      "value": "0 100% 37.254901960784316%",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.600}",
        "value": "{color.red.600}"
      },
      "name": "rh-color-red-600-hsl",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "600-hsl",
        "hex": "be0000",
        "rgb": {
          "r": 190,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 100,
          "l": 37.254901960784316,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 1,
          "v": 0.7450980392156863,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "red",
        "600-hsl"
      ]
    }
  ],
  [
    "--rh-color-red-600-rgb",
    {
      "$type": "color",
      "$value": "190 0 0",
      "value": "190 0 0",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.600}",
        "value": "{color.red.600}"
      },
      "name": "rh-color-red-600-rgb",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "600-rgb",
        "hex": "be0000",
        "rgb": {
          "r": 190,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 100,
          "l": 37.254901960784316,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 1,
          "v": 0.7450980392156863,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "red",
        "600-rgb"
      ]
    }
  ],
  [
    "--rh-color-red-700-hsl",
    {
      "$type": "color",
      "$value": "0 100% 28.03921568627451%",
      "value": "0 100% 28.03921568627451%",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.700}",
        "value": "{color.red.700}"
      },
      "name": "rh-color-red-700-hsl",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "700-hsl",
        "hex": "8f0000",
        "rgb": {
          "r": 143,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 100,
          "l": 28.03921568627451,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 1,
          "v": 0.5607843137254902,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "red",
        "700-hsl"
      ]
    }
  ],
  [
    "--rh-color-red-700-rgb",
    {
      "$type": "color",
      "$value": "143 0 0",
      "value": "143 0 0",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.700}",
        "value": "{color.red.700}"
      },
      "name": "rh-color-red-700-rgb",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "700-rgb",
        "hex": "8f0000",
        "rgb": {
          "r": 143,
          "g": 0,
          "b": 0,
          "a": 1
        },
        "hsl": {
          "h": 0,
          "s": 100,
          "l": 28.03921568627451,
          "a": 1
        },
        "hsv": {
          "h": 0,
          "s": 1,
          "v": 0.5607843137254902,
          "a": 1
        },
        "isLight": false
      },
      "path": [
        "color",
        "red",
        "700-rgb"
      ]
    }
  ],
  [
    "--rh-color-red-800-hsl",
    {
      "$type": "color",
      "$value": "0 100% 18.627450980392158%",
      "value": "0 100% 18.627450980392158%",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.800}",
        "value": "{color.red.800}"
      },
      "name": "rh-color-red-800-hsl",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "800-hsl",
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
        "800-hsl"
      ]
    }
  ],
  [
    "--rh-color-red-800-rgb",
    {
      "$type": "color",
      "$value": "95 0 0",
      "value": "95 0 0",
      "filePath": "tokens/color/crayon/red.yaml",
      "isSource": true,
      "original": {
        "$type": "color",
        "$value": "{color.red.800}",
        "value": "{color.red.800}"
      },
      "name": "rh-color-red-800-rgb",
      "attributes": {
        "category": "color",
        "type": "red",
        "item": "800-rgb",
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
        "800-rgb"
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
      "$value": "#ff442b",
      "attributes": {
        "category": "icon",
        "type": "color",
        "item": "primary",
        "subitem": "on-dark",
        "hex": "ff442b",
        "rgb": {
          "r": 255,
          "g": 68,
          "b": 43,
          "a": 1
        },
        "hsl": {
          "h": 7.0754716981132075,
          "s": 100,
          "l": 58.43137254901961,
          "a": 1
        },
        "hsv": {
          "h": 7.0754716981132075,
          "s": 0.8313725490196078,
          "v": 1,
          "a": 1
        },
        "isLight": false
      },
      "value": "#ff442b",
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
        "$value": "{color.gray.90}",
        "attributes": {
          "category": "icon",
          "type": "color"
        },
        "value": "{color.gray.90}"
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
        "$value": "{color.gray.40}",
        "attributes": {
          "category": "icon",
          "type": "color"
        },
        "value": "{color.gray.40}"
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
        "$value": "{color.gray.30}",
        "attributes": {
          "category": "icon",
          "type": "color"
        },
        "value": "{color.gray.30}"
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
      "$value": "#bee1f4",
      "$description": "Inline link hover (dark theme)",
      "value": "#bee1f4",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.blue.100}",
        "$description": "Inline link hover (dark theme)",
        "value": "{color.blue.100}"
      },
      "name": "rh-color-interactive-blue-lightest",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "blue",
        "subitem": "lightest",
        "hex": "bee1f4",
        "rgb": {
          "r": 190,
          "g": 225,
          "b": 244,
          "a": 1
        },
        "hsl": {
          "h": 201.11111111111111,
          "s": 71.05263157894743,
          "l": 85.09803921568628,
          "a": 1
        },
        "hsv": {
          "h": 201.11111111111111,
          "s": 0.2213114754098361,
          "v": 0.9568627450980393,
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
      "$value": "#73bcf7",
      "$description": "Inline link (dark theme)",
      "value": "#73bcf7",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.blue.200}",
        "$description": "Inline link (dark theme)",
        "value": "{color.blue.200}"
      },
      "name": "rh-color-interactive-blue-lighter",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "blue",
        "subitem": "lighter",
        "hex": "73bcf7",
        "rgb": {
          "r": 115,
          "g": 188,
          "b": 247,
          "a": 1
        },
        "hsl": {
          "h": 206.8181818181818,
          "s": 89.1891891891892,
          "l": 70.98039215686275,
          "a": 1
        },
        "hsv": {
          "h": 206.8181818181818,
          "s": 0.534412955465587,
          "v": 0.9686274509803922,
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
        "$value": "{color.blue.400}",
        "$description": "Inline link (light theme)",
        "value": "{color.blue.400}"
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
      "$value": "#004080",
      "$description": "Inline link hover (light theme)",
      "value": "#004080",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.blue.500}",
        "$description": "Inline link hover (light theme)",
        "value": "{color.blue.500}"
      },
      "name": "rh-color-interactive-blue-darkest",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "blue",
        "subitem": "darkest",
        "hex": "004080",
        "rgb": {
          "r": 0,
          "g": 64,
          "b": 128,
          "a": 1
        },
        "hsl": {
          "h": 210,
          "s": 100,
          "l": 25.098039215686274,
          "a": 1
        },
        "hsv": {
          "h": 210,
          "s": 1,
          "v": 0.5019607843137255,
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
      "$value": "#cbc1ff",
      "$description": "Inline link visited hover (dark theme)",
      "value": "#cbc1ff",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.purple.100}",
        "$description": "Inline link visited hover (dark theme)",
        "value": "{color.purple.100}"
      },
      "name": "rh-color-interactive-purple-lightest",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "purple",
        "subitem": "lightest",
        "hex": "cbc1ff",
        "rgb": {
          "r": 203,
          "g": 193,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 249.6774193548387,
          "s": 100,
          "l": 87.84313725490196,
          "a": 1
        },
        "hsv": {
          "h": 249.6774193548387,
          "s": 0.2431372549019608,
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
      "$value": "#a18fff",
      "$description": "Inline link visited (dark theme)",
      "value": "#a18fff",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.purple.300}",
        "$description": "Inline link visited (dark theme)",
        "value": "{color.purple.300}"
      },
      "name": "rh-color-interactive-purple-lighter",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "purple",
        "subitem": "lighter",
        "hex": "a18fff",
        "rgb": {
          "r": 161,
          "g": 143,
          "b": 255,
          "a": 1
        },
        "hsl": {
          "h": 249.64285714285714,
          "s": 100,
          "l": 78.03921568627452,
          "a": 1
        },
        "hsv": {
          "h": 249.64285714285714,
          "s": 0.4392156862745098,
          "v": 1,
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
      "$value": "#6753ac",
      "$description": "Inline link visited (light theme)",
      "value": "#6753ac",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.purple.500}",
        "$description": "Inline link visited (light theme)",
        "value": "{color.purple.500}"
      },
      "name": "rh-color-interactive-purple-darker",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "purple",
        "subitem": "darker",
        "hex": "6753ac",
        "rgb": {
          "r": 103,
          "g": 83,
          "b": 172,
          "a": 1
        },
        "hsl": {
          "h": 253.4831460674157,
          "s": 34.90196078431373,
          "l": 50,
          "a": 1
        },
        "hsv": {
          "h": 253.4831460674157,
          "s": 0.5174418604651163,
          "v": 0.6745098039215687,
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
      "$value": "#1f0066",
      "$description": "Inline link visited hover (light theme)",
      "value": "#1f0066",
      "filePath": "tokens/color/interactive.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.purple.700}",
        "$description": "Inline link visited hover (light theme)",
        "value": "{color.purple.700}"
      },
      "name": "rh-color-interactive-purple-darkest",
      "attributes": {
        "category": "color",
        "type": "interactive",
        "item": "purple",
        "subitem": "darkest",
        "hex": "1f0066",
        "rgb": {
          "r": 31,
          "g": 0,
          "b": 102,
          "a": 1
        },
        "hsl": {
          "h": 258.2352941176471,
          "s": 100,
          "l": 20,
          "a": 1
        },
        "hsv": {
          "h": 258.2352941176471,
          "s": 1,
          "v": 0.4,
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
        "$value": "{color.gray.05}",
        "$description": "Tertiary surface (light theme)",
        "value": "{color.gray.05}"
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
        "$value": "{color.gray.10}",
        "$description": "Secondary surface (light theme)",
        "value": "{color.gray.10}"
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
        "$value": "{color.gray.60}",
        "$description": "Tertiary surface (dark theme)",
        "value": "{color.gray.60}"
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
        "$value": "{color.gray.70}",
        "$description": "Alternative tertiary surface (not available for use with context provider)",
        "value": "{color.gray.70}"
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
        "$value": "{color.gray.80}",
        "$description": "Secondary surface (dark theme)",
        "value": "{color.gray.80}"
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
        "$value": "{color.gray.90}",
        "$description": "Primary surface (dark theme)",
        "value": "{color.gray.90}"
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
        "$value": "{color.gray.90}",
        "$description": "Primary text color for light theme",
        "attributes": {
          "category": "typography",
          "type": "color"
        },
        "value": "{color.gray.90}"
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
        "$value": "{color.gray.50}",
        "$description": "Secondary text color for light theme",
        "attributes": {
          "category": "typography",
          "type": "color"
        },
        "value": "{color.gray.50}"
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
        "$value": "{color.gray.20}",
        "$description": "Secondary text color for dark theme",
        "attributes": {
          "category": "typography",
          "type": "color"
        },
        "value": "{color.gray.20}"
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
        "$value": "{color.red.500}",
        "$description": "Brand text color for light theme",
        "attributes": {
          "category": "typography",
          "type": "color"
        },
        "value": "{color.red.500}"
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
      "$value": "#ff442b",
      "$description": "Brand text color for dark theme",
      "attributes": {
        "category": "typography",
        "type": "color",
        "item": "brand",
        "subitem": "on-dark",
        "hex": "ff442b",
        "rgb": {
          "r": 255,
          "g": 68,
          "b": 43,
          "a": 1
        },
        "hsl": {
          "h": 7.0754716981132075,
          "s": 100,
          "l": 58.43137254901961,
          "a": 1
        },
        "hsv": {
          "h": 7.0754716981132075,
          "s": 0.8313725490196078,
          "v": 1,
          "a": 1
        },
        "isLight": false
      },
      "value": "#ff442b",
      "filePath": "tokens/color/text.yaml",
      "isSource": true,
      "original": {
        "$value": "{color.red.400}",
        "$description": "Brand text color for dark theme",
        "attributes": {
          "category": "typography",
          "type": "color"
        },
        "value": "{color.red.400}"
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