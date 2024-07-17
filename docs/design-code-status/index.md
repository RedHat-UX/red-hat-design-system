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
              <rh-tag variant="filled" color="gray">
                Planned
                <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" role="img" aria-label="planned icon">
                  <style type="text/css">
                    .planned{fill:#707070;}
                  </style>
                  <g>
                    <path class="planned" d="M8,12c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S7.4,12,8,12z M8,11c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2
                      S9.1,11,8,11z"/>
                    <path class="planned" d="M12.5,9V7.5C12.5,5,10.5,3,8,3S3.5,5,3.5,7.5V9c0,0.6-0.4,1-1,1C2.2,10,2,10.2,2,10.5v2C2,12.8,2.2,13,2.5,13
                      h11c0.3,0,0.5-0.2,0.5-0.5v-2c0-0.3-0.2-0.5-0.5-0.5C12.9,10,12.5,9.6,12.5,9z"/>
                    <path class="planned" d="M8,2c0.3,0,0.5,0.2,0.5,0.5S8.3,3,8,3S7.5,2.8,7.5,2.5S7.7,2,8,2z M8,1C7.2,1,6.5,1.7,6.5,2.5S7.2,4,8,4
                      s1.5-0.7,1.5-1.5S8.8,1,8,1z"/>
                  </g>
                </svg>
              </rh-tag>
            </span>
          </td>
          <td data-label="Meaning">Ready to be worked on or ready to be released</td>
        </tr>
        <tr>
          <td data-label="Sample tag">
            <span>
              <rh-tag variant="outline" color="green">
                In progress
                <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" fill="none" role="img" aria-label="in progress icon">
                  <style type="text/css">
                    .inprogress{fill:#63993D;}
                  </style>
                  <path class="inprogress" d="M15,8c0,3.9-3.1,7-7,7s-7-3.1-7-7H15z"/>
                  <path class="inprogress" d="M8,2c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6S4.7,2,8,2z M8,1C4.1,1,1,4.1,1,8s3.1,7,7,7s7-3.1,7-7S11.9,1,8,1z"/>
                </svg>
              </rh-tag>
            </span>
          </td>
          <td data-label="Meaning">In the design or development process</td>
        </tr>
        <tr>
          <td data-label="Sample tag">
            <span>
              <rh-tag variant="filled" color="green">
                Ready
                <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 15" fill="none" role="img" aria-label="ready icon">
                  <path d="M7 14.5C10.866 14.5 14 11.366 14 7.5C14 3.63401 10.866 0.5 7 0.5C3.13401 0.5 0 3.63401 0 7.5C0 11.366 3.13401 14.5 7 14.5Z" fill="#63993D"/>
                  <path d="M4 7.5L6 9.5L10 5.5" stroke="#E9F7DF" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </rh-tag>
            </span>
          </td>
          <td data-label="Meaning">Ready to use and approved by all team members</td>
        </tr>
        <tr>
          <td data-label="Sample tag">
            <span>
              <rh-tag variant="filled" color="orange">
                Deprecated
                <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 14 15" fill="none" role="img" aria-label="deprecated icon">
                  <path d="M7 14.5C10.866 14.5 14 11.366 14 7.5C14 3.63401 10.866 0.5 7 0.5C3.13401 0.5 0 3.63401 0 7.5C0 11.366 3.13401 14.5 7 14.5Z" fill="#F0561D"/>
                  <path d="M5 9.5L9 5.5" stroke="#FFE3D9" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9 9.5L5 5.5" stroke="#FFE3D9" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </rh-tag>
            </span>
          </td>
          <td data-label="Meaning">No longer supported by RHDS</td>
        </tr>
        <tr>
          <td data-label="Sample tag">
            <span>
              <rh-tag variant="outline" color="gray">
                N/A
                <svg slot="icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" role="img" aria-label="not applicable icon">
                  <style type="text/css">
                    .na{fill:#707070;}
                  </style>
                  <path class="na" d="M8,1C4.1,1,1,4.1,1,8c0,3.9,3.1,7,7,7c3.9,0,7-3.1,7-7C15,4.1,11.9,1,8,1z M2,8c0-1.5,0.5-2.8,1.4-3.9l8.4,8.4
                    C10.8,13.5,9.5,14,8,14C4.7,14,2,11.3,2,8z M12.6,11.9L4.1,3.4C5.2,2.5,6.5,2,8,2c3.3,0,6,2.7,6,6C14,9.5,13.5,10.8,12.6,11.9z"/>
                </svg>
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
