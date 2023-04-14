import * as github from '@actions/github';
async function run() {
  const octokit = github.getOctokit('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');
  const packages = await octokit.rest.packages.getPackageForUser({
    username: 'leilen',
    package_type: 'npm',
    package_name: 'action-test',
  });
  console.log(packages);
}

run();
