import * as github from '@actions/github';
import * as core from '@actions/core';
async function run() {
  //const octokit = github.getOctokit('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');
  const currentBranch = core.getInput('current_branch');
  core.debug(`testaaaaa ${currentBranch}`);
  console.log(11111);
  console.log(currentBranch);
}

run();
