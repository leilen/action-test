async function run() {
  //const octokit = github.getOctokit('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');
  //const currentBranch = '1.0.1-staging.23030300';
  const currentBranch = 'dist/api-client';
  const isStaging = (currentBranch as string) === 'staging/api-client';
  //const isStaging = /^\d+\.\d+\.\d+-staging.\d{8}$/.test(currentBranch);

  if (isStaging) {
    console.log('staging');
  } else {
    console.log('production');
  }
}

function returnProductionVersionUp(currentversion) {}

run();
