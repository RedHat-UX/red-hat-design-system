{% renderInstall %}{% endrenderInstall %}

## Usage

```html
<rh-announcement>
  <svg slot="image"
       width="80"
       height="48"
       role="img"
       aria-label="Sample image">
    <rect fill="var(--rh-color-border-interactive-on-light, #0066cc)"
      fill-opacity="0.1"
      stroke="var(--rh-color-border-interactive-on-light, #0066cc)"
      stroke-width="2px"
      width="100%"
      height="100%"
      stroke-dasharray="4 4">
    </rect>
    <text x="17"
          y="30"
          style="font-family: var(--rh-font-family-code, RedHatMono, 'Red Hat Mono', 'Courier New', Courier, monospace); font-size: var(--rh-font-size-body-text-md, 1rem);"
          fill="var(--rh-color-blue-50, #0066CC)">
            Image
    </text>
  </svg>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit adipisicing elit adipisicing elit.</p>
  <rh-cta slot="cta">
    <a href="#">Learn More</a>
  </rh-cta>
</rh-announcement>
```

{% renderCodeDocs hideDescription=true %}{% endrenderCodeDocs %}
