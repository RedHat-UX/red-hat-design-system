#!/usr/bin/bash

set -euo pipefail
npx changeset version
scripts/since.js
