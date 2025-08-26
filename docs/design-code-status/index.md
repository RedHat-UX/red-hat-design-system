---
layout: layouts/pages/has-toc.njk
title: Design/code status
---

<link data-helmet rel="stylesheet" href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css">

<script data-helmet type="module">
  import '@rhds/elements/rh-tag/rh-tag.js';
  import '@rhds/elements/rh-table/rh-table.js';
  import '@rhds/elements/rh-icon/rh-icon.js';
</script>

<style>
  rh-tag {
    text-transform: capitalize;
  }
</style>

<section aria-labelledby="overview">

  ## Overview

  A detailed synopsis of our Web Components and their implementation status.

  <rh-table>

  | Sample tag                                                                           | Meaning                                       |
  | ------------------------------------------------------------------------------------ | --------------------------------------------- |
  | <rh-tag variant="filled" color="purple" icon="notification-fill">Planned</rh-tag>      | Ready to be worked on or ready to be released |
  | <rh-tag variant="outline" color="green" icon="harvey-ball-50">In progress</rh-tag>   | In the design or development process          |
  | <rh-tag variant="filled" color="green" icon="check-circle-fill">Ready</rh-tag>       | Ready to use and approved by all team members |
  | <rh-tag variant="filled" color="orange" icon="close-circle-fill">Deprecated</rh-tag> | No longer supported by RHDS                   |
  | <rh-tag variant="outline" color="gray" icon="ban">N/A</rh-tag>                       | Not planned, not available, or does not apply |

  </rh-table>
</section>

<section aria-labelledby="web-component-status">

  ## Web component status

  <uxdot-repo-status-table>
    <template shadowrootmode="open">
      <style>
        rh-table {
          margin-block: var(--rh-space-3xl);
        }
      </style>
      <!-- TODO: remove lightdom after implementing auto-load-->
      <link rel="stylesheet" href="/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css">
      <div id="container">
        <rh-table>
          <table>
            <colgroup>
              <col>
              <col>
              <col>
              <col>
              <col>
            </colgroup>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Figma library</th>
                <th scope="col">RH Elements</th>
                <th scope="col">RH Shared Libs</th>
                <th scope="col">Documentation</th>
              </tr>
            </thead>
            <tbody>
              {%- set statusLegend = {
                'planned': { pretty: 'Planned', color: 'purple', variant: 'filled', icon: 'notification-fill' },
                'inProgress': { pretty: 'In Progress', color: 'green', variant: 'outline', icon: 'harvey-ball-50' },
                'ready': { pretty: 'Ready', color: 'green', variant: 'filled', icon: 'check-circle-fill' },
                'deprecated': { pretty: 'Deprecated', color: 'orange', variant: 'filled', icon: 'close-circle-fill' },
                'na': { pretty: 'N/A', color: 'gray', variant: 'outline', icon: 'ban' },
                'not-applicable': { pretty: 'Not Applicable', color: 'gray', variant: 'outline', icon: 'ban' },
                'beta': { pretty: 'Beta', color: 'cyan', variant: 'outline', icon: 'notification' },
                'experimental': { pretty: 'Experimental', color: 'orange', variant: 'outline', icon: 'warning-triangle' },
                'new': { pretty: 'New', color: 'green', variant: 'outline', icon: 'sparkle' }
              } -%}
              {% for item in repoStatusData %}
              {%- set figmaStatus = statusLegend[item.libraries.figma] -%}
              {%- set rhdsStatus = statusLegend[item.libraries.rhds] -%}
              {%- set sharedStatus = statusLegend[item.libraries.shared] -%}
              {%- set docsStatus = statusLegend[item.libraries.docs] -%}
              {%- set overallStatus = statusLegend[item.overallStatus] -%}
              <tr>
                <td>
                  <a href="/elements/{{ item.tagName }}/">{{ item.name }}</a>
                  {%- if item.overallStatus != 'ready' and overallStatus -%}
                  <rh-tag color="{{ overallStatus.color }}" variant="{{ overallStatus.variant }}" icon="{{ overallStatus.icon }}">
                    <rh-icon set="ui" icon="{{ overallStatus.icon }}"></rh-icon>
                    {{ item.overallStatus }}
                  </rh-tag>
                  {%- endif -%}
                </td>
                <td>
                  {%- if figmaStatus -%}
                  <rh-tag color="{{ figmaStatus.color }}" variant="{{ figmaStatus.variant }}" icon="{{ figmaStatus.icon }}">
                    <rh-icon set="ui" icon="{{ figmaStatus.icon }}"></rh-icon>
                    {{ figmaStatus.pretty }}
                  </rh-tag>
                  {%- endif -%}
                </td>
                <td>
                  {%- if rhdsStatus -%}
                  <rh-tag color="{{ rhdsStatus.color }}" variant="{{ rhdsStatus.variant }}" icon="{{ rhdsStatus.icon }}">
                    <rh-icon set="ui" icon="{{ rhdsStatus.icon }}"></rh-icon>
                    {{ rhdsStatus.pretty }}
                  </rh-tag>
                  {%- endif -%}
                </td>
                <td>
                  {%- if sharedStatus -%}
                  <rh-tag color="{{ sharedStatus.color }}" variant="{{ sharedStatus.variant }}" icon="{{ sharedStatus.icon }}">
                    <rh-icon set="ui" icon="{{ sharedStatus.icon }}"></rh-icon>
                    {{ sharedStatus.pretty }}
                  </rh-tag>
                  {%- endif -%}
                </td>
                <td>
                  {%- if docsStatus -%}
                  <rh-tag color="{{ docsStatus.color }}" variant="{{ docsStatus.variant }}" icon="{{ docsStatus.icon }}">
                    <rh-icon set="ui" icon="{{ docsStatus.icon }}"></rh-icon>
                    {{ docsStatus.pretty }}
                  </rh-tag>
                  {%- endif -%}
                </td>
              </tr>
              {% endfor %}
            </tbody>
          </table>
        </rh-table>
      </div>
    </template>
  </uxdot-repo-status-table>

</section>

<uxdot-feedback>
  <h2>Release notes</h2>
  <p>To see what foundations, tokens, elements, or patterns have been released recently, visit <a href="/release-notes/">this page</a>.</p>
</uxdot-feedback>
