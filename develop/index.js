// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ projectTitle, description, motivation, tableOC, installation, usage, credits, license, features, tests}) =>

    `# ${projectTitle}

## ${description}

- What was your motivation? ${motivation}
- Why did you build this project?
- What problem does it solve?
- What did you learn?

## Table of Contents ${tableOC}

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## ${installation}


## ${usage}


## ${credits}


## ${license}


## ${features}


## ${tests}`


// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
