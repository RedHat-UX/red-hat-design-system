# Breadcrumb

A breadcrumb trail consists of a list of links to the parent pages of
the current page in hierarchical order. It helps users find their
place within a website or web application. Breadcrumbs are often
placed horizontally before a page's main content.

## Usage

Place the following on your page with your site's breadcrumb
navigation inside as an ordered list:

```html
<rh-breadcrumb>
  <ol>
    <li><a href="../../../..">Home</a></li>
    <li><a href="../../../">About</a></li>
    <li><a href="../../">Our Team</a></li>
    <li><a href="" aria-current="page">Jamie Simeon Walinsky-Choeffer</a></li>
  </ol>
</rh-breadcrumb>
```
