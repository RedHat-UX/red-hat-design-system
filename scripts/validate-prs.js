/* eslint-env node */
import { default as read } from '@changesets/read';
import semanticRelease from 'semantic-release';

/** @typedef {'major'|'minor'|'patch'} ReleaseType */

async function getReleaseType(title, mergeType) {
  if (mergeType === 'rebase') {
    const result = await semanticRelease({
      dryRun: true,
      branches: ['main'],
    }) ?? {};
    /** @type {ReleaseType} */
    const type = result?.nextRelease?.type;
    return type;
  } else {
    const { commitType, bang } = title.match(/(?<commitType>feat|fix|chore|docs|style).*(?<bang>!)/)?.groups ?? {};
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

  /** @type {ReleaseType} */
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
