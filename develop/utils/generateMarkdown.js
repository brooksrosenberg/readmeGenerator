// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'MIT'){
    return '[!license: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(https://opensource.org/licenses/MIT)'
  }
  else if(license === 'Apache 2.0'){
    return '[!license: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)(https://opensource.org/licenses/Apache-2.0)'
  }
  
  else if(license === 'GNU GPL v3'){
    return '[!license: GNU GPL v3][!(https://img.shields.io/badge/License-GPL%20v3-blue.svg)(https://www.gnu.org/licenses/gpl-3.0)'
  

  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if( license === 'MIT'){
    return '[!license: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  }
  if( license === 'GNU GPL v3'){
    return 'https://www.gnu.org/licenses/gpl-3.0'
  }
  if( license === 'Apache 2.0'){
    return 'https://opensource.org/licenses/Apache-2.0'
  }
}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string

function renderLicenseSection(license) {
  
  if (license === 'MIT') {
    return license = 'https://img.shields.io/badge/License-MIT-yellow.svg'
    
  }
  if (license === 'Apache 2.0') {
    return license = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg'
    
  }
  if (license === 'GNU GPL v3') {
    return license = 'https://img.shields.io/badge/License-Apache%202.0-blue.svg' 
    
  }
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  # ${data.projectTitle}

  [${data.license}]${renderLicenseLink(data.license)}
  
 ##  Description
 ${data.description}
 
 ## Table of Contents 
 
 - [Installation](#Installation)
 - [Usage](#Usage)
 - [License](#License)
 - [Contributing](#Contributing)
 - [Tests](#Tests)
 - [Questions](#Questions)
 
 
 ## Installation 
 to install necessary dependencies, run the following command:
 
 ${data.installation}
 
 
 ## Usage 
 ${data.usage}
 
 
 ## License
 This project is licensed under the ${data.license} license.
 [${data.license}]${renderLicenseBadge (data.license)}
 
 
 ## Contributing
 ${data.contributing}
 
 
 ## Tests
 To run tests, run the following command:
 
 ${data.tests}
 
 ## Questions
 If you have any questions about the repo, open an issue or contact me directly at [${data.email}](mailto:${data.email}). You can find more of my work at: [${data.username}](https://github.com/${data.username}) `;}


module.exports = generateMarkdown;
