## Implementation guidelines

  * `<rh-pagination>` must have a nested `<ol>` element with at least one nested `<li>` and `<a>` element.
  * Pagination URLs must start with a hash, eg `#2`.
    * We recommend structuring your pagination URL as follows:
      * `example.redhat.com/search/#2`
    * If your URL contains query parameters (eg: `?search=test`), ensure the hash comes after the query parameter.
    * Ensure the hash for the `href` in the first page of the pagination is `#` and not `#1`.
  * The active page is set in this order:
    1. Looking for an `aria-current="page"` attribute on a `<a>` tag
    1. Looking in the URL for a hash, eg `/search/#2`
    1. If neither of these are set and no hashes exist in the URL, `<rh-pagination>` sets the current page to the first `<a>` in the list
    1. If `<rh-pagination>` cannot determine the current link from these conditions, it will log a message to the console saying, "Could not determine current link."
