// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = ({ projectTitle, description, installation, usage, license, features, contributing, tests, email, username}) =>

 `# ${projectTitle}

##  Description:
${description}

## Table of Contents 

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)


## Installation 
to install necessary dependencies, run the following command:

${installation}


## Usage 
${usage}


## License
This project is licensed under the ${license} license.

## Contributing
${contributing}


## Tests
To run tests, run the following command;
${tests}

## Questions
If you have any questions about the repo, open an issue or contact me directly at ${email}. You can find more of my work at ${username} `


// TODO: create an array of questions for user input
inquirer
  .prompt([
    {
        type: 'input',
        name: 'username',
        message: 'Enter your Github username: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email: '
    },
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Enter your project title: '
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a short description of your project: '
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose your license: ',
        choices: ['MIT', 'Red', 'Green']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What command should be used to install dependecies? ',
        default: ('npm i')
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests? ',
        default: ('npm test')
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo? ',
        default: 'Open to public use. Creator is not responsible for use.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo? '
    },


])
.then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('README.md', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README!')
    );
  });

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) { }

// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();
