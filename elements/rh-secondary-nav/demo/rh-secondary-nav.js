import '@patternfly/pfe-cta';
import '@patternfly/pfe-icon';
import '@patternfly/pfe-band';
import '@patternfly/pfe-card';

import '../../elements/rh-secondary-nav/rh-secondary-nav';


// Set things up
window.addEventListener('load', () => {
  const root = document.querySelector('[data-demo="rh-secondary-nav"]')?.shadowRoot ?? document;
  root.querySelector('rh-secondary-nav');

  let prevRatio = 100.0;
  const navElement = root.querySelector('rh-secondary-nav[variant]');
  createObserver(navElement);

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
        root.querySelector('rh-secondary-nav').style.display = 'none';
      } else {
        root.querySelector('rh-secondary-nav').style.display = 'block';
      }

      prevRatio = entry.intersectionRatio;
    });
  }
}, false);
