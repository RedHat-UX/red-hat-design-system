## Implementation guidelines

### Basic Structure
  * `<rh-pagination>` must have a nested `<ol>` element with at least one nested `<li>` and `<a>` element.
  * Each `<a>` element should have an `href` attribute that links to the corresponding page.

### URL Structure Options
You can implement pagination URLs using any of these approaches:

#### Option 1: Hash fragments (recommended for client-side routing)
  * Example: `example.redhat.com/search/#2`, `example.redhat.com/search/#3`
  * If using query parameters, ensure the hash comes after: `example.redhat.com/search/?q=test#2`

#### Option 2: Query parameters
  * Example: `example.redhat.com/search?page=2`, `example.redhat.com/search?page=3`
  * Can be combined with other query parameters: `example.redhat.com/search?q=test&page=2`

#### Option 3: Path-based URLs
  * Example: `example.redhat.com/search/page/2`, `example.redhat.com/search/page/3`

#### Option 4: Manual control with `aria-current`
  * Set `aria-current="page"` on the current page's `<a>` element
  * Useful for server-side rendered pagination

### How the Current Page is Determined
The component determines the active page in this order:
  1. Looking for an `aria-current="page"` attribute on an `<a>` tag
  2. Matching the full URL (pathname, search parameters, and hash) against each link's `href`
  3. If no match is found, the component logs a warning: "could not determine current link"
