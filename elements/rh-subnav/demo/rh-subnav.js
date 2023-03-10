import '@rhds/elements/rh-subnav/rh-subnav.js';
import '@rhds/elements/rh-context-provider/rh-context-provider.js';

import '@patternfly/elements/pf-icon/pf-icon.js';


const demo = document.getElementById('demo');
const links = demo.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    links.forEach(link => link.removeAttribute('active'));
    link.setAttribute('active', '');
  });
});
