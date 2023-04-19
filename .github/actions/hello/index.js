const core = require('@actions/core');
const github = require('@actions/github');

try {
  const name = core.getInput('who-to-greet');
  const message = `Hello, ${name}!`;
  console.log(message);
  core.setOutput('time', new Date().toDateString());
} catch (error) {
  core.setFailed(error.message);
}
