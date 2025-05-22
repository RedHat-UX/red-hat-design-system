import { default as read } from '@changesets/read';
import semanticRelease from 'semantic-release';


/**
 * named capture group 1 `commitType`:
 * > Either `feat`, `fix`, `chore`, `docs`, or `style`
 * **ANY** (_>= 0x_)
 * named capture group 2 `bang`:
 * > `!`
 */
const COMMIT_TYPE_RE = /(?<commitType>feat|fix|chore|docs|style).*(?<bang>!)/;

async function getReleaseType(title, mergeType) {
  if (mergeType === 'rebase') {
    const result = await semanticRelease({
      dryRun: true,
      branches: ['main'],
    }) ?? {};
    const type = result?.nextRelease?.type;
    return type;
  } else {
    const { commitType, bang } = title.match(COMMIT_TYPE_RE)?.groups ?? {};
    if (bang) {
      return 'major';
    } else {
      switch (commitType) {
        case 'feat': return 'minor';
        case 'fix': return 'patch';
      }
    }
  }
}

export async function validate({ context }) {
  const { base, title, auto_merge: autoMerge } = context.payload.pull_request;

  if (base.ref.startsWith('staging/')) {
    return true;
  }

  const type = await getReleaseType(title, autoMerge?.merge_method) ?? null;
  const sets = await read(process.cwd());

  const release = sets.reduce((greatest, type) => {
    switch (greatest) {
      case null:
      case 'major':
        return greatest;
      case 'minor':
        return type === 'major' ? type : greatest;
      case 'patch':
        return (type === 'major' || type === 'minor') ? type : greatest;
    }
  }, null);

  if (!release && type?.match(/m(aj|in)or/)) {
    throw new Error(`PR conventional commit title has type (${type}) but no changesets were detected.`);
  }

  if (type !== release) {
    throw new Error(`PR conventional commit title type (${type}) does not match release type (${release}).`);
  }
}
