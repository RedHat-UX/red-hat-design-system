import { html } from '@open-wc/testing';
export const NAV = html `
<rh-navigation-secondary role="navigation">
  <a href="#" slot="logo">Red Hat Ansible Automation Platform</a>
  <ul slot="nav">
    <li>
      <rh-navigation-secondary-dropdown>
        <a href="#" slot="link">Explore</a>
        <rh-navigation-secondary-menu slot="menu">
          <rh-navigation-secondary-menu-section slot="section">
            <h3 slot="header" id="ansible-platform"><a href="#">Why Red Hat Ansible Automation Platforms</a></h3>
            <ul slot="links">
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Custom success stories </a></li>
              <li><a href="#">What is ansible</a></li>
              <li><a href="#">Why choose Red Hat for automation?</a></li>
              <li><a href="#">Edge automation with Red Hat Ansible Automation Platform</a></li>
            </ul>
            <rh-cta slot="cta"><a href="#">Section Level CTA</a></rh-cta>
          </rh-navigation-secondary-menu-section>
          <rh-navigation-secondary-menu-section slot="section">
            <h3 slot="header"><a href="#">Additional Features</a></h3>
            <ul slot="links">
              <li><a href="#">Automation execution environments</a></li>
              <li><a href="#">Automation controller</a></li>
              <li><a href="#">Automation mesh</a></li>
              <li><a href="#">Ansible Content Collections</a></li>
              <li><a href="#">Automation Hub</a></li>
              <li><a href="#">Red Hat Insights for Red Hat Ansible Automation Platform</a></li>
              <li><a href="#"> Automation services catalog</a></li>
              <li><a href="#">Ansible content tools</a></li>
            </ul>
            <rh-cta slot="cta"><a href="#">Section Level CTA</a></rh-cta>
          </rh-navigation-secondary-menu-section>
          <rh-navigation-secondary-menu-section slot="section">
            <h3 slot="header"><a href="#">Additional Features</a></h3>
            <ul slot="links">
              <li><a href="#">Automation execution environments</a></li>
              <li><a href="#">Automation controller</a></li>
              <li><a href="#">Automation mesh</a></li>
              <li><a href="#">Ansible Content Collections</a></li>
              <li><a href="#">Automation Hub</a></li>
              <li><a href="#">Red Hat Insights for Red Hat Ansible Automation Platform</a></li>
              <li><a href="#">Automation services catalog</a></li>
              <li><a href="#">Ansible content tools</a></li>
            </ul>
            <rh-cta slot="cta"><a href="#">Section Level CTA</a></rh-cta>
          </rh-navigation-secondary-menu-section>
          <rh-cta slot="cta"><a href="#">Menu Level CTA</a></rh-cta>
        </rh-navigation-secondary-menu>
      </rh-navigation-secondary-dropdown>
    </li>
    <li>
      <rh-navigation-secondary-dropdown>
        <a href="#" slot="link">Use cases</a>
        <rh-navigation-secondary-menu slot="menu">
          <ul slot="section">
            <li><a href="#">Infrastructure</a></li>
            <li><a href="#">Applications</a></li>
            <li><a href="#">Networks</a></li>
          </ul>
          <ul slot="section">
            <li><a href="#">Containers</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Cloud</a></li>
          </ul>
        </rh-navigation-secondary-menu>
      </rh-navigation-secondary-dropdown>
    </li>
    <li>
      <rh-navigation-secondary-dropdown>
        <a href="#" slot="link">Fixed Width</a>
        <rh-navigation-secondary-menu slot="menu" type="fixed-width">
          <ul slot="links">
            <li><a href="#">Containers</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Cloud</a></li>
          </ul>
        </rh-navigation-secondary-menu>
      </rh-navigation-secondary-dropdown>
    </li>
    <li><a href="#">Extra Placeholder</a></li>
  </ul>
  <rh-cta slot="cta"><a href="#">Get started</a></rh-cta>
</rh-navigation-secondary>
`;
export const DARKVARIANT = html `
<rh-navigation-secondary role="navigation" color-palette="dark">
  <a href="#" slot="logo">Red Hat Ansible Automation Platform</a>
  <ul slot="nav">
    <li>
      <rh-navigation-secondary-dropdown>
        <a href="#" slot="link">Explore</a>
        <rh-navigation-secondary-menu slot="menu">
          <rh-navigation-secondary-menu-section slot="section">
            <h3 slot="header" id="ansible-platform"><a href="#">Why Red Hat Ansible Automation Platforms</a></h3>
            <ul slot="links">
              <li><a href="#">Integrations</a></li>
              <li><a href="#">Custom success stories </a></li>
              <li><a href="#">What is ansible</a></li>
              <li><a href="#">Why choose Red Hat for automation?</a></li>
              <li><a href="#">Edge automation with Red Hat Ansible Automation Platform</a></li>
            </ul>
            <rh-cta slot="cta"><a href="#">Section Level CTA</a></rh-cta>
          </rh-navigation-secondary-menu-section>
          <rh-navigation-secondary-menu-section slot="section">
            <h3 slot="header"><a href="#">Additional Features</a></h3>
            <ul slot="links">
              <li><a href="#">Automation execution environments</a></li>
              <li><a href="#">Automation controller</a></li>
              <li><a href="#">Automation mesh</a></li>
              <li><a href="#">Ansible Content Collections</a></li>
              <li><a href="#">Automation Hub</a></li>
              <li><a href="#">Red Hat Insights for Red Hat Ansible Automation Platform</a></li>
              <li><a href="#"> Automation services catalog</a></li>
              <li><a href="#">Ansible content tools</a></li>
            </ul>
            <rh-cta slot="cta"><a href="#">Section Level CTA</a></rh-cta>
          </rh-navigation-secondary-menu-section>
          <rh-navigation-secondary-menu-section slot="section">
            <h3 slot="header"><a href="#">Additional Features</a></h3>
            <ul slot="links">
              <li><a href="#">Automation execution environments</a></li>
              <li><a href="#">Automation controller</a></li>
              <li><a href="#">Automation mesh</a></li>
              <li><a href="#">Ansible Content Collections</a></li>
              <li><a href="#">Automation Hub</a></li>
              <li><a href="#">Red Hat Insights for Red Hat Ansible Automation Platform</a></li>
              <li><a href="#">Automation services catalog</a></li>
              <li><a href="#">Ansible content tools</a></li>
            </ul>
            <rh-cta slot="cta"><a href="#">Section Level CTA</a></rh-cta>
          </rh-navigation-secondary-menu-section>
          <rh-cta slot="cta"><a href="#">Menu Level CTA</a></rh-cta>
        </rh-navigation-secondary-menu>
      </rh-navigation-secondary-dropdown>
    </li>
    <li>
      <rh-navigation-secondary-dropdown>
        <a href="#" slot="link">Use cases</a>
        <rh-navigation-secondary-menu slot="menu">
          <ul slot="section">
            <li><a href="#">Infrastructure</a></li>
            <li><a href="#">Applications</a></li>
            <li><a href="#">Networks</a></li>
          </ul>
          <ul slot="section">
            <li><a href="#">Containers</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Cloud</a></li>
          </ul>
        </rh-navigation-secondary-menu>
      </rh-navigation-secondary-dropdown>
    </li>
    <li>
      <rh-navigation-secondary-dropdown>
        <a href="#" slot="link">Fixed Width</a>
        <rh-navigation-secondary-menu slot="menu" type="fixed-width">
          <ul slot="links">
            <li><a href="#">Containers</a></li>
            <li><a href="#">Security</a></li>
            <li><a href="#">Cloud</a></li>
          </ul>
        </rh-navigation-secondary-menu>
      </rh-navigation-secondary-dropdown>
    </li>
    <li><a href="#">Extra Placeholder</a></li>
  </ul>
  <rh-cta slot="cta"><a href="#">Get started</a></rh-cta>
</rh-navigation-secondary>
`;
//# sourceMappingURL=fixtures.js.map