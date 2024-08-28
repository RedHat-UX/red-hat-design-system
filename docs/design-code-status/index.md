---
layout: layouts/pages/basic.njk
title: Design/code status
hasToc: true
importElements:
  - rh-table
  - rh-tag
---

<link rel="stylesheet" href="{{ '/assets/packages/@rhds/elements/elements/rh-table/rh-table-lightdom.css' | url }}">

<section aria-labelledby="overview">

## Overview

A detailed synopsis of our web components and their implementation status.

  <rh-table class="component-status-table">
    <table>
      <colgroup>
        <col />
        <col />
      </colgroup>
      <thead>
        <tr>
          <th scope="col" data-label="Sample tag">Sample tag</th>
          <th scope="col" data-label="Meaning">Meaning</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td data-label="Sample tag">
            <span>
              <rh-tag variant="filled" color="gray" icon="notification-fill">
                Planned
              </rh-tag>
            </span>
          </td>
          <td data-label="Meaning">Ready to be worked on or ready to be released</td>
        </tr>
        <tr>
          <td data-label="Sample tag">
            <span>
              <rh-tag variant="outline" color="green" icon="harvey-ball-50">
                In progress
              </rh-tag>
            </span>
          </td>
          <td data-label="Meaning">In the design or development process</td>
        </tr>
        <tr>
          <td data-label="Sample tag">
            <span>
              <rh-tag variant="filled" color="green" icon="check-circle-fill">
                Ready
              </rh-tag>
            </span>
          </td>
          <td data-label="Meaning">Ready to use and approved by all team members</td>
        </tr>
        <tr>
          <td data-label="Sample tag">
            <span>
              <rh-tag variant="filled" color="orange" icon="close-circle-fill">
                Deprecated
              </rh-tag>
            </span>
          </td>
          <td data-label="Meaning">No longer supported by RHDS</td>
        </tr>
        <tr>
          <td data-label="Sample tag">
            <span>
              <rh-tag variant="outline" color="gray" icon="ban">
                N/A
              </rh-tag>
            </span>
          </td>
          <td data-label="Meaning">Not planned, not available, or does not apply</td>
        </tr>
      </tbody>
    </table>
  </rh-table>
</section>

<section aria-labelledby="web-component-status">

## Web component status

{% repoStatusTable repoStatus=repoStatus %}

</section>

<uxdot-feedback>
  <h2>Release notes</h2>
  <p>To see what foundations, tokens, elements, or patterns have been released recently, visit <a href="/release-notes/">this page</a>.</p>
</uxdot-feedback>
