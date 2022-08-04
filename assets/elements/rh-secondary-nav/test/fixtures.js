import { html } from '@open-wc/testing';
export const NAV = html `
<rh-secondary-nav role="navigation">
  <a href="#" slot="logo">Red Hat Ansible Automation Platform</a>
  <ul slot="nav">
    <li>
      <rh-secondary-nav-dropdown>
        <a href="#" slot="link">Explore</a>
        <rh-secondary-nav-menu slot="menu">
          <rh-secondary-nav-menu-section slot="section">
            <h3 slot="header" id="ansible-platform"><a href="#">Why Red Hat Ansible Automation Platforms</a></h3>
            <ul slot="links">
              <li><a href="#">Integrations <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
              <li><a href="#">Custom success stories </a></li>
              <li><a href="#">What is ansible <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
              <li><a href="#">Why choose Red Hat for automation?</a></li>
              <li><a href="#">Edge automation with Red Hat Ansible Automation Platform</a></li>
            </ul>
            <pfe-cta slot="cta"><a href="#">Section Level CTA</a></pfe-cta>
          </rh-secondary-nav-menu-section>
          <rh-secondary-nav-menu-section slot="section">
            <h3 slot="header"><a href="#">Additional Features</a></h3>
            <ul slot="links">
              <li><a href="#">Automation execution environments</a></li>
              <li><a href="#">Automation controller</a></li>
              <li><a href="#">Automation mesh <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
              <li><a href="#">Ansible Content Collections</a></li>
              <li><a href="#">Automation Hubn<pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
              <li><a href="#">Red Hat Insights for Red Hat Ansible Automation Platform <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
              <li><a href="#"> Automation services catalogm<pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
              <li><a href="#">Ansible content tools <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
            </ul>
            <pfe-cta slot="cta"><a href="#">Section Level CTA</a></pfe-cta>
          </rh-secondary-nav-menu-section>
          <rh-secondary-nav-menu-section slot="section">
            <h3 slot="header"><a href="#">Additional Features</a></h3>
            <ul slot="links">
              <li><a href="#">Automation execution environments</a></li>
              <li><a href="#">Automation controller</a></li>
              <li><a href="#">Automation mesh <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
              <li><a href="#">Ansible Content Collections</a></li>
              <li><a href="#">Automation Hub <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
              <li><a href="#">Red Hat Insights for Red Hat Ansible Automation Platform <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
              <li><a href="#">Automation services catalog <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
              <li><a href="#">Ansible content tools <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
            </ul>
            <pfe-cta slot="cta"><a href="#">Section Level CTA</a></pfe-cta>
          </rh-secondary-nav-menu-section>
          <pfe-cta slot="cta"><a href="#">Menu Level CTA</a></pfe-cta>
        </rh-secondary-nav-menu>
      </rh-secondary-nav-dropdown>
    </li>
    <li>
      <rh-secondary-nav-dropdown>
        <a href="#" slot="link">Use cases</a>
        <rh-secondary-nav-menu slot="menu">
          <ul slot="section">
            <li><a href="#">Infrastructure <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
            <li><a href="#">Applications <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
            <li><a href="#">Networks <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
          </ul>
          <ul slot="section">
            <li><a href="#">Containers <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
            <li><a href="#">Security <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
            <li><a href="#">Cloud <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
          </ul>
        </rh-secondary-nav-menu>
      </rh-secondary-nav-dropdown>
    </li>
    <li>
      <rh-secondary-nav-dropdown>
        <a href="#" slot="link">Fixed Width</a>
        <rh-secondary-nav-menu slot="menu" type="fixed-width">
          <ul slot="links">
            <li><a href="#">Containers <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
            <li><a href="#">Security <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
            <li><a href="#">Cloud <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
          </ul>
        </rh-secondary-nav-menu>
      </rh-secondary-nav-dropdown>
    </li>
    <li><a href="#">Extra Placeholder</a></li>
  </ul>
  <pfe-cta slot="cta"><a href="#">Get started</a></pfe-cta>
</rh-secondary-nav>
`;
export const DARKVARIANT = html `
<rh-secondary-nav role="navigation" variant="dark">
  <a href="#" slot="logo">Red Hat Ansible Automation Platform</a>
  <ul slot="nav">
    <li>
      <rh-secondary-nav-dropdown>
        <a href="#" slot="link">Explore</a>
        <rh-secondary-nav-menu slot="menu">
          <rh-secondary-nav-menu-section slot="section">
            <h3 slot="header" id="ansible-platform"><a href="#">Why Red Hat Ansible Automation Platforms</a></h3>
            <ul slot="links">
              <li><a href="#">Integrations <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
              <li><a href="#">Custom success stories </a></li>
              <li><a href="#">What is ansible <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
              <li><a href="#">Why choose Red Hat for automation?</a></li>
              <li><a href="#">Edge automation with Red Hat Ansible Automation Platform</a></li>
            </ul>
            <pfe-cta slot="cta"><a href="#">Section Level CTA</a></pfe-cta>
          </rh-secondary-nav-menu-section>
          <rh-secondary-nav-menu-section slot="section">
            <h3 slot="header"><a href="#">Additional Features</a></h3>
            <ul slot="links">
              <li><a href="#">Automation execution environments</a></li>
              <li><a href="#">Automation controller</a></li>
              <li><a href="#">Automation mesh <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
              <li><a href="#">Ansible Content Collections</a></li>
              <li><a href="#">Automation Hubn<pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
              <li><a href="#">Red Hat Insights for Red Hat Ansible Automation Platform <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
              <li><a href="#"> Automation services catalogm<pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
              <li><a href="#">Ansible content tools <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
            </ul>
            <pfe-cta slot="cta"><a href="#">Section Level CTA</a></pfe-cta>
          </rh-secondary-nav-menu-section>
          <rh-secondary-nav-menu-section slot="section">
            <h3 slot="header"><a href="#">Additional Features</a></h3>
            <ul slot="links">
              <li><a href="#">Automation execution environments</a></li>
              <li><a href="#">Automation controller</a></li>
              <li><a href="#">Automation mesh <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
              <li><a href="#">Ansible Content Collections</a></li>
              <li><a href="#">Automation Hub <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
              <li><a href="#">Red Hat Insights for Red Hat Ansible Automation Platform <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
              <li><a href="#">Automation services catalog <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
              <li><a href="#">Ansible content tools <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
            </ul>
            <pfe-cta slot="cta"><a href="#">Section Level CTA</a></pfe-cta>
          </rh-secondary-nav-menu-section>
          <pfe-cta slot="cta"><a href="#">Menu Level CTA</a></pfe-cta>
        </rh-secondary-nav-menu>
      </rh-secondary-nav-dropdown>
    </li>
    <li>
      <rh-secondary-nav-dropdown>
        <a href="#" slot="link">Use cases</a>
        <rh-secondary-nav-menu slot="menu">
          <ul slot="section">
            <li><a href="#">Infrastructure <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
            <li><a href="#">Applications <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
            <li><a href="#">Networks <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
          </ul>
          <ul slot="section">
            <li><a href="#">Containers <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
            <li><a href="#">Security <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
            <li><a href="#">Cloud <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
          </ul>
        </rh-secondary-nav-menu>
      </rh-secondary-nav-dropdown>
    </li>
    <li>
      <rh-secondary-nav-dropdown>
        <a href="#" slot="link">Fixed Width</a>
        <rh-secondary-nav-menu slot="menu" type="fixed-width">
          <ul slot="links">
            <li><a href="#">Containers <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
            <li><a href="#">Security <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
            <li><a href="#">Cloud <pfe-icon icon="web-icon-new-window" color="info" size="sm"></pfe-icon></a></li>
          </ul>
        </rh-secondary-nav-menu>
      </rh-secondary-nav-dropdown>
    </li>
    <li><a href="#">Extra Placeholder</a></li>
  </ul>
  <pfe-cta slot="cta"><a href="#">Get started</a></pfe-cta>
</rh-secondary-nav>
`;
//# sourceMappingURL=fixtures.js.map