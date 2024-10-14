import type { TagStatus } from './uxdot-repo.js';

import { join, dirname } from 'node:path';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import yaml from 'js-yaml';

const rootDir = fileURLToPath(dirname(import.meta.resolve('@rhds/elements')));
const text = await readFile(join(rootDir, 'docs/_data/repoStatus.yaml'), 'utf8');
export default yaml.load(text) as TagStatus[];
