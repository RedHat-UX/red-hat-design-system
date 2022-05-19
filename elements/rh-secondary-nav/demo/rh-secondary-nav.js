import '@patternfly/pfe-cta';
import '@patternfly/pfe-icon';
import '@patternfly/pfe-band';
import '@patternfly/pfe-card';

import '../../elements/rh-secondary-nav/rh-secondary-nav';


// Set things up
window.addEventListener('load', () => {
  const root = document.querySelector('[data-demo="rh-secondary-nav"]')?.shadowRoot ?? document;
  const nav = root.querySelector('rh-secondary-nav');

  // uncomment the block below if you want to test component outside constraints of the dev view
  // document.querySelector('link[href="/node_modules/@patternfly/pfe-styles/pfe.min.css"]').remove();
  // document.querySelector('link[href="/docs/main.css"]').remove();
  // document.body.appendChild(root);
  // const main = document.querySelector('main');
  // main.remove();
  // const variantNav = document.querySelector('rh-secondary-nav[variant]');

  // comment this line out if the above block 15:20 is uncommented
  const variantNav = root.querySelector('rh-secondary-nav[variant]');

  let prevRatio = 100.0;

  createObserver(variantNav);

  function createObserver(element) {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(element);
  }

  function handleIntersect(entries) {
    entries.forEach(entry => {
      if (entry.intersectionRatio > prevRatio) {
        nav.style.display = 'none';
      } else {
        nav.style.display = 'block';
      }

      prevRatio = entry.intersectionRatio;
    });
  }
}, false);
