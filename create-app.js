#!/usr/bin/env node

const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);
const [...args] = process.argv;

(async function run() {
  const projectName = args[2];
  const repositoryUrl = 'https://github.com/nodly/next-template';

  try {
    await execAsync(`yarn create next-app -e ${repositoryUrl} ${projectName}`);
  } catch (error) {
    console.error(error);
  }
})();
