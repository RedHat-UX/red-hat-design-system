#!/usr/bin/bash

set -eou pipefail
npx changeset version
scripts/since.js
