<rh-alert state="info">
  <h3 slot="header">Note</h3>
  <p>Page 3 is marked with <code>aria-current="page"</code> by default, regardless of the URL. This takes precedence over the URL hash.</p>
  
  <p>When the URL hash changes, <code>aria-current="page"</code> is set on the correct link. In real applications, this is handled during render or app logic.</p>
</rh-alert>