/**
 * Do not edit directly
 * Generated on Thu, 30 Mar 2023 07:02:41 GMT
 * 
 * @license
 * MIT License
 * 
 * Copyright (c) 2022 Red Hat UX
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */


import { css } from 'lit';
export const resetStyles = css`
:host {
  --rh-animation-speed: 0.3s;
  --rh-animation-timing: cubic-bezier(0.465, 0.183, 0.153, 0.946);
  --rh-border-width-sm: 1px; /* 1px border width; Example: Secondary CTA or Button */
  --rh-border-width-md: 2px; /* 2px border width: Example: Alert */
  --rh-border-width-lg: 3px; /* 3px border width: Example: Expanded Accordion panel */
  --rh-border-radius-sharp: 0.0px; /* Border radius reset */
  --rh-border-radius-default: 3px; /* 3px border radius; Example: Card */
  --rh-border-radius-pill: 64px; /* Pill border radius; Example: Label */
  --rh-breakpoint-2xs-max: 575px; /* Mobile portrait (max-width) */
  --rh-breakpoint-xs: 576px; /* Mobile portrait */
  --rh-breakpoint-xs-max: 767px; /* Mobile landscape (max-width) */
  --rh-breakpoint-sm: 768px; /* Mobile landscape */
  --rh-breakpoint-sm-max: 991px; /* Mobile landscape (max-width) */
  --rh-breakpoint-md: 992px; /* Tablet portrait */
  --rh-breakpoint-md-max: 1199px; /* Tablet portrait (max-width) */
  --rh-breakpoint-lg: 1200px; /* Tablet landscape */
  --rh-breakpoint-lg-max: 1439px; /* Tablet landscape (max-width) */
  --rh-breakpoint-xl: 1440px; /* Desktop small */
  --rh-breakpoint-xl-max: 1679px; /* Desktop small (max-width) */
  --rh-breakpoint-2xl: 1680px; /* Desktop large */
  --rh-color-accent-base-on-light: #0066cc; /* Inline link (light theme) */
  --rh-color-accent-base-on-dark: #73bcf7; /* Inline link (dark theme) */
  --rh-color-accent-brand-on-light: #ee0000; /* Brand red (light theme) */
  --rh-color-accent-brand-on-dark: #ff442b; /* Brand red (dark theme) */
  --rh-color-border-strong-on-light: #151515; /* Strong border color (light theme) */
  --rh-color-border-strong-on-dark: #ffffff; /* Strong border color (dark theme) */
  --rh-color-border-subtle-on-light: #c7c7c7; /* Subtle border color (light theme) */
  --rh-color-border-subtle-on-dark: #707070; /* Subtle border color (dark theme) */
  --rh-color-border-interactive-on-light: #0066cc; /* Interactive border color (light theme) */
  --rh-color-border-interactive-on-dark: #73bcf7; /* Interactive border color (dark theme) */
  --rh-color-border-danger-on-light: #ee0000; /* Danger border color (light theme) */
  --rh-color-border-danger-on-dark: #ff442b; /* Danger border color (dark theme) */
  --rh-color-brand-red-lightest: #fddbdb; /* Lightest brand red */
  --rh-color-brand-red-lighter: #fab6b6; /* lighter brand red */
  --rh-color-brand-red-light: #f56d6d; /* Light brand red */
  --rh-color-brand-red-dark: #be0000; /* Dark brand red/Brand red hover */
  --rh-color-brand-red-darker: #8f0000; /* Darker brand red */
  --rh-color-brand-red-darkest: #5f0000; /* Darkest brand red */
  --rh-color-brand-red-on-dark: #ff442b; /* Brand red on dark background */
  --rh-color-brand-red-on-light: #ee0000; /* Brand red on light background */
  --rh-color-canvas-white: #ffffff; /* Primary canvas (light theme) */
  --rh-color-canvas-black: #151515; /* Primary canvas (dark theme) */
  --rh-color-blue-50: #e7f1fa; /* Alert - Info background */
  --rh-color-blue-100: #bee1f4; /* Label - Filled (Blue) border color */
  --rh-color-blue-200: #73bcf7;
  --rh-color-blue-250: #2b9af3; /* Alert - Info accent */
  --rh-color-blue-400: #0066cc; /* Label - Filled (Blue) accent color */
  --rh-color-blue-500: #004080;
  --rh-color-blue-600: #002952; /* Alert - Info title text */
  --rh-color-blue-50-hsl: 208.42105263157896 65.51724137931035% 94.31372549019608%;
  --rh-color-blue-50-rgb: 231 241 250;
  --rh-color-blue-100-hsl: 201.11111111111111 71.05263157894743% 85.09803921568628%;
  --rh-color-blue-100-rgb: 190 225 244;
  --rh-color-blue-200-hsl: 206.8181818181818 89.1891891891892% 70.98039215686275%;
  --rh-color-blue-200-rgb: 115 188 247;
  --rh-color-blue-250-hsl: 206.7 89.28571428571426% 56.07843137254902%;
  --rh-color-blue-250-rgb: 43 154 243;
  --rh-color-blue-400-hsl: 210 100% 40%;
  --rh-color-blue-400-rgb: 0 102 204;
  --rh-color-blue-500-hsl: 210 100% 25.098039215686274%;
  --rh-color-blue-500-rgb: 0 64 128;
  --rh-color-blue-600-hsl: 210 100% 16.07843137254902%;
  --rh-color-blue-600-rgb: 0 41 82;
  --rh-color-cyan-50: #f2f9f9; /* Alert - Default background */
  --rh-color-cyan-100: #a2d9d9; /* Label (Cyan) border color */
  --rh-color-cyan-300: #009596; /* Alert - Default accent */
  --rh-color-cyan-400: #005f60; /* Alert - Default accent */
  --rh-color-cyan-500: #003737; /* Alert - Default title text */
  --rh-color-cyan-50-hsl: 180 36.84210526315793% 96.27450980392156%;
  --rh-color-cyan-50-rgb: 242 249 249;
  --rh-color-cyan-100-hsl: 180 41.98473282442749% 74.31372549019608%;
  --rh-color-cyan-100-rgb: 162 217 217;
  --rh-color-cyan-300-hsl: 180.40000000000003 100% 29.411764705882355%;
  --rh-color-cyan-300-rgb: 0 149 150;
  --rh-color-cyan-400-hsl: 180.62499999999997 100% 18.823529411764707%;
  --rh-color-cyan-400-rgb: 0 95 96;
  --rh-color-cyan-500-hsl: 180 100% 10.784313725490197%;
  --rh-color-cyan-500-rgb: 0 55 55;
  --rh-color-gold-50: #fdf7e7; /* Alert - Warning background */
  --rh-color-gold-400: #f0ab00; /* Alert - Warning accent */
  --rh-color-gold-600: #795600; /* Alert - Warning title text */
  --rh-color-gold-50-hsl: 43.636363636363626 84.61538461538467% 94.90196078431372%;
  --rh-color-gold-50-rgb: 253 247 231;
  --rh-color-gold-400-hsl: 42.74999999999999 100% 47.05882352941176%;
  --rh-color-gold-400-rgb: 240 171 0;
  --rh-color-gold-600-hsl: 42.64462809917356 100% 23.72549019607843%;
  --rh-color-gold-600-rgb: 121 86 0;
  --rh-color-white: #ffffff; /* Lightest surface (light theme) or primary text (dark theme) */
  --rh-color-gray-10: #e0e0e0; /* Secondary surface (light theme) */
  --rh-color-gray-20: #c7c7c7; /* Subtle borders (light theme) */
  --rh-color-gray-30: #a3a3a3; /* Subtle icon (hover state) */
  --rh-color-gray-40: #707070; /* Subtle icon */
  --rh-color-gray-50: #4d4d4d; /* Secondary text (light theme) */
  --rh-color-gray-60: #383838; /* Tertiary surface (dark theme) */
  --rh-color-gray-70: #292929;
  --rh-color-gray-80: #1f1f1f; /* Secondary surface (dark theme) */
  --rh-color-gray-90: #151515; /* Primary surface (dark theme) or primary text (light theme) */
  --rh-color-gray-10-hsl: 0 0% 87.84313725490196%;
  --rh-color-gray-10-rgb: 224 224 224;
  --rh-color-gray-20-hsl: 0 0% 78.03921568627452%;
  --rh-color-gray-20-rgb: 199 199 199;
  --rh-color-gray-30-hsl: 0 0% 63.921568627450974%;
  --rh-color-gray-30-rgb: 163 163 163;
  --rh-color-gray-40-hsl: 0 0% 43.92156862745098%;
  --rh-color-gray-40-rgb: 112 112 112;
  --rh-color-gray-50-hsl: 0 0% 30.19607843137255%;
  --rh-color-gray-50-rgb: 77 77 77;
  --rh-color-gray-60-hsl: 0 0% 21.96078431372549%;
  --rh-color-gray-60-rgb: 56 56 56;
  --rh-color-gray-70-hsl: 0 0% 16.07843137254902%;
  --rh-color-gray-70-rgb: 41 41 41;
  --rh-color-gray-80-hsl: 0 0% 12.156862745098039%;
  --rh-color-gray-80-rgb: 31 31 31;
  --rh-color-gray-90-hsl: 0 0% 8.235294117647058%;
  --rh-color-gray-90-rgb: 21 21 21;
  --rh-color-gray-05: #f2f2f2; /* Tertiary surface (light theme) */
  --rh-color-gray-05-hsl: 0 0% 94.90196078431372%;
  --rh-color-gray-05-rgb: 242 242 242;
  --rh-color-black: #000000; /* Brand black (avoid using) */
  --rh-color-green-50: #f3faf2; /* alert - success background */
  --rh-color-green-100: #bde5b8; /* Label - Filled (Green) border color */
  --rh-color-green-500: #3e8635; /* Alert - Success accent */
  --rh-color-green-600: #1e4f18; /* Alert - Success title text */
  --rh-color-green-50-hsl: 112.50000000000001 44.444444444444464% 96.4705882352941%;
  --rh-color-green-50-rgb: 243 250 242;
  --rh-color-green-100-hsl: 113.33333333333331 46.391752577319586% 80.98039215686275%;
  --rh-color-green-100-rgb: 189 229 184;
  --rh-color-green-500-hsl: 113.33333333333334 43.31550802139037% 36.66666666666667%;
  --rh-color-green-500-rgb: 62 134 53;
  --rh-color-green-600-hsl: 113.45454545454544 53.398058252427184% 20.19607843137255%;
  --rh-color-green-600-rgb: 30 79 24;
  --rh-color-orange-50: #fff6ec; /* Label - Filled (Orange) background color */
  --rh-color-orange-100: #f4b678; /* Label - Filled (Orange) border color */
  --rh-color-orange-300: #ec7a08; /* Label - Filled (Orange) accent color */
  --rh-color-orange-500: #8f4700; /* Label - Filled (Orange) accent color */
  --rh-color-orange-700: #3b1f00; /* Label - Filled (Orange) text color */
  --rh-color-orange-50-hsl: 31.57894736842105 100% 96.27450980392157%;
  --rh-color-orange-50-rgb: 255 246 236;
  --rh-color-orange-100-hsl: 30 84.9315068493151% 71.37254901960785%;
  --rh-color-orange-100-rgb: 244 182 120;
  --rh-color-orange-300-hsl: 30 93.44262295081968% 47.84313725490196%;
  --rh-color-orange-300-rgb: 236 122 8;
  --rh-color-orange-500-hsl: 29.79020979020979 100% 28.03921568627451%;
  --rh-color-orange-500-rgb: 143 71 0;
  --rh-color-orange-700-hsl: 31.525423728813553 100% 11.568627450980392%;
  --rh-color-orange-700-rgb: 59 31 0;
  --rh-color-purple-50: #f2f0fc; /* Label - Filled (Purple) background color */
  --rh-color-purple-100: #cbc1ff;
  --rh-color-purple-300: #a18fff;
  --rh-color-purple-500: #6753ac;
  --rh-color-purple-700: #1f0066;
  --rh-color-purple-50-hsl: 249.99999999999994 66.66666666666677% 96.47058823529412%;
  --rh-color-purple-50-rgb: 242 240 252;
  --rh-color-purple-100-hsl: 249.6774193548387 100% 87.84313725490196%;
  --rh-color-purple-100-rgb: 203 193 255;
  --rh-color-purple-300-hsl: 249.64285714285714 100% 78.03921568627452%;
  --rh-color-purple-300-rgb: 161 143 255;
  --rh-color-purple-500-hsl: 253.4831460674157 34.90196078431373% 50%;
  --rh-color-purple-500-rgb: 103 83 172;
  --rh-color-purple-700-hsl: 258.2352941176471 100% 20%;
  --rh-color-purple-700-rgb: 31 0 102;
  --rh-color-red-50: #faeae8; /* Alert - Critical background */
  --rh-color-red-100: #fddbdb; /* Lightest red */
  --rh-color-red-200: #fab6b6; /* Lighter red */
  --rh-color-red-300: #f56d6d; /* Light red */
  --rh-color-red-400: #ff442b; /* Brand red (dark theme) */
  --rh-color-red-500: #ee0000; /* Brand red (light theme) */
  --rh-color-red-600: #be0000; /* Dark red or brand red hover */
  --rh-color-red-700: #8f0000; /* Darker red */
  --rh-color-red-800: #5f0000; /* Darkest red */
  --rh-color-red-50-hsl: 6.666666666666645 64.28571428571429% 94.50980392156862%;
  --rh-color-red-50-rgb: 250 234 232;
  --rh-color-red-100-hsl: 0 89.47368421052634% 92.54901960784314%;
  --rh-color-red-100-rgb: 253 219 219;
  --rh-color-red-200-hsl: 0 87.17948717948718% 84.70588235294117%;
  --rh-color-red-200-rgb: 250 182 182;
  --rh-color-red-300-hsl: 0 87.17948717948723% 69.41176470588235%;
  --rh-color-red-300-rgb: 245 109 109;
  --rh-color-red-400-hsl: 7.0754716981132075 100% 58.43137254901961%;
  --rh-color-red-400-rgb: 255 68 43;
  --rh-color-red-500-hsl: 0 100% 46.666666666666664%;
  --rh-color-red-500-rgb: 238 0 0;
  --rh-color-red-600-hsl: 0 100% 37.254901960784316%;
  --rh-color-red-600-rgb: 190 0 0;
  --rh-color-red-700-hsl: 0 100% 28.03921568627451%;
  --rh-color-red-700-rgb: 143 0 0;
  --rh-color-red-800-hsl: 0 100% 18.627450980392158%;
  --rh-color-red-800-rgb: 95 0 0;
  --rh-color-icon-primary-on-light: #ee0000;
  --rh-color-icon-primary-on-dark: #ff442b;
  --rh-color-icon-secondary-on-light: #151515;
  --rh-color-icon-secondary-on-dark: #ffffff;
  --rh-color-icon-subtle: #707070;
  --rh-color-icon-subtle-hover: #a3a3a3;
  --rh-color-interactive-blue-lightest: #bee1f4; /* Inline link hover (dark theme) */
  --rh-color-interactive-blue-lighter: #73bcf7; /* Inline link (dark theme) */
  --rh-color-interactive-blue-darker: #0066cc; /* Inline link (light theme) */
  --rh-color-interactive-blue-darkest: #004080; /* Inline link hover (light theme) */
  --rh-color-interactive-purple-lightest: #cbc1ff; /* Inline link visited hover (dark theme) */
  --rh-color-interactive-purple-lighter: #a18fff; /* Inline link visited (dark theme) */
  --rh-color-interactive-purple-darker: #6753ac; /* Inline link visited (light theme) */
  --rh-color-interactive-purple-darkest: #1f0066; /* Inline link visited hover (light theme) */
  --rh-color-surface-lightest: #ffffff; /* Primary surface (light theme) */
  --rh-color-surface-lighter: #f2f2f2; /* Tertiary surface (light theme) */
  --rh-color-surface-light: #e0e0e0; /* Secondary surface (light theme) */
  --rh-color-surface-dark: #383838; /* Tertiary surface (dark theme) */
  --rh-color-surface-dark-alt: #292929; /* Alternative tertiary surface (not available for use with context provider) */
  --rh-color-surface-darker: #1f1f1f; /* Secondary surface (dark theme) */
  --rh-color-surface-darkest: #151515; /* Primary surface (dark theme) */
  --rh-color-text-primary-on-light: #151515; /* Primary text color for light theme */
  --rh-color-text-primary-on-dark: #ffffff; /* Primary text color for dark theme */
  --rh-color-text-secondary-on-light: #4d4d4d; /* Secondary text color for light theme */
  --rh-color-text-secondary-on-dark: #c7c7c7; /* Secondary text color for dark theme */
  --rh-color-text-brand-on-light: #ee0000; /* Brand text color for light theme */
  --rh-color-text-brand-on-dark: #ff442b; /* Brand text color for dark theme */
  --rh-font-family-heading: RedHatDisplay, "Red Hat Display", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif; /* Heading font family */
  --rh-font-family-body-text: RedHatText, "Red Hat Text", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans JP", "Noto Sans KR", "Noto Sans Malayalam", "Noto Sans SC", "Noto Sans TC", "Noto Sans Thai", Helvetica, Arial, sans-serif; /* Body text font family */
  --rh-font-family-code: RedHatMono, "Red Hat Mono", "Courier New", Courier, monospace; /* Code font family */
  --rh-font-size-body-text-xs: 0.75rem; /* 12px font size */
  --rh-font-size-body-text-sm: 0.875rem; /* 14px font size */
  --rh-font-size-body-text-md: 1rem; /* 16px font size */
  --rh-font-size-body-text-lg: 1.125rem; /* 18px font size */
  --rh-font-size-body-text-xl: 1.25rem; /* 20px font size */
  --rh-font-size-body-text-2xl: 1.5rem; /* 24px font size */
  --rh-font-size-code-xs: 0.75rem; /* 12px font size */
  --rh-font-size-code-sm: 0.875rem; /* 14px font size */
  --rh-font-size-code-md: 1rem; /* 16px font size */
  --rh-font-size-code-lg: 1.125rem; /* 18px font size */
  --rh-font-size-code-xl: 1.25rem; /* 20px font size */
  --rh-font-size-code-2xl: 1.5rem; /* 24px font size */
  --rh-font-size-heading-xs: 1.25rem; /* h6 heading font size */
  --rh-font-size-heading-sm: 1.5rem; /* h5 heading font size */
  --rh-font-size-heading-md: 1.75rem; /* h4 heading font size */
  --rh-font-size-heading-lg: 2.25rem; /* h3 heading font size */
  --rh-font-size-heading-xl: 2.5rem; /* h2 heading font size */
  --rh-font-size-heading-2xl: 3rem; /* h1 heading font size */
  --rh-font-weight-body-text-regular: 400; /* Regular font weight */
  --rh-font-weight-body-text-medium: 500; /* Medium font weight */
  --rh-font-weight-code-regular: 400; /* Regular font weight */
  --rh-font-weight-code-medium: 500; /* Medium font weight */
  --rh-font-weight-heading-regular: 300; /* Regular font weight for headings */
  --rh-font-weight-heading-medium: 500; /* Medium font weight for headings */
  --rh-font-weight-heading-bold: 700; /* Bold font weight for headings */
  --rh-letter-spacing-body-text: 0.0125rem; /* Extra letter spacing for small body text sizes */
  --rh-line-height-heading: 1.3; /* Line height for headings */
  --rh-line-height-body-text: 1.5; /* Line height for body text */
  --rh-line-height-code: 1.5; /* Line height for code */
  --rh-size-icon-01: 16px; /* 16px icon box */
  --rh-size-icon-02: 24px; /* 24px icon box */
  --rh-size-icon-03: 32px; /* 32px icon box */
  --rh-size-icon-04: 40px; /* 40px icon box */
  --rh-size-icon-05: 48px; /* 48px icon box */
  --rh-size-icon-06: 64px; /* 64px icon box */
  --rh-size-icon-07: 80px; /* 80px icon box */
  --rh-size-icon-08: 96px; /* 96px icon box */
  --rh-size-icon-09: 128px; /* 128px icon box */
  --rh-length-4xs: 1px; /* 1px length token */
  --rh-length-3xs: 2px; /* 2px length token */
  --rh-length-2xs: 3px; /* 3px length token */
  --rh-length-xs: 4px; /* 4px length token */
  --rh-length-sm: 6px; /* 6px length token */
  --rh-length-md: 8px; /* 8px length token */
  --rh-length-lg: 16px; /* 16px length token */
  --rh-length-xl: 24px; /* 24px length token */
  --rh-length-2xl: 32px; /* 32px length token */
  --rh-length-3xl: 48px; /* 48px length token */
  --rh-length-4xl: 64px; /* 64px length token */
  --rh-length-5xl: 80px; /* 80px length token */
  --rh-length-6xl: 96px; /* 96px length token */
  --rh-length-7xl: 128px; /* 128px length token */
  --rh-space-xs: 4px; /* 4px spacer */
  --rh-space-sm: 6px; /* 6px spacer */
  --rh-space-md: 8px; /* 8px spacer */
  --rh-space-lg: 16px; /* 16px spacer */
  --rh-space-xl: 24px; /* 24px spacer */
  --rh-space-2xl: 32px; /* 32px spacer */
  --rh-space-3xl: 48px; /* 48px spacer */
  --rh-space-4xl: 64px; /* 64px spacer */
  --rh-space-5xl: 80px; /* 80px spacer */
  --rh-space-6xl: 96px; /* 96px spacer */
  --rh-space-7xl: 128px; /* 128px spacer */
  --rh-media-xs: (min-width: 576px); /* Mobile portrait */
  --rh-media-sm: (min-width: 768px); /* Mobile landscape */
  --rh-media-md: (min-width: 992px); /* Tablet portrait */
  --rh-media-lg: (min-width: 1200px); /* Tablet landscape */
  --rh-media-xl: (min-width: 1440px); /* Desktop small */
  --rh-media-2xl: (min-width: 1680px); /* Desktop Large */
  --rh-opacity-0: 0%; /* 0% opacity */
  --rh-opacity-10: 10%; /* 10% opacity */
  --rh-opacity-20: 20%; /* 20% opacity */
  --rh-opacity-30: 30%; /* 30% opacity */
  --rh-opacity-40: 40%; /* 40% opacity */
  --rh-opacity-50: 50%; /* 50% opacity */
  --rh-opacity-60: 60%; /* 60% opacity */
  --rh-opacity-70: 70%; /* 70% opacity */
  --rh-opacity-80: 80%; /* 80% opacity */
  --rh-opacity-90: 90%; /* 90% opacity */
  --rh-opacity-100: 100%; /* 100% opacity */
  --rh-box-shadow-sm: 0 2px 4px 0 rgba(21, 21, 21, 0.2); /* Small box shadow */
  --rh-box-shadow-md: 0 4px 6px 1px rgba(21, 21, 21, 0.25); /* Medium box shadow */
  --rh-box-shadow-lg: 0 6px 8px 2px rgba(21, 21, 21, 0.3); /* Large box shadow */
  --rh-box-shadow-xl: 0 8px 24px 3px rgba(21, 21, 21, 0.35); /* Extra large box shadow */
}`;
export default resetStyles;