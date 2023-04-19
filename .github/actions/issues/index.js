const core = require("@actions/core");
const github = require("@actions/github");
const { async } = require("rxjs/internal/scheduler/async");
async function run() {
  try {
    const token = core.getInput("token");
    const title = core.getInput("title");
    const body = core.getInput("body");
    const assignees = core.getInput("assignees");

    const octokit = new github.Github(token);
    const response = await octokit.issues.create({
      ...github.context.repo,
      title,
      body,
      assignees: assignees ? assignees.split("/n") : undefined,
    });

    core.setOutput("issues", JSON.stringify(response.data));
  } catch (error) {
    core.setFailed(error.message);
  }
}