// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) =>
  license !== "None"
  ? `![${license}](https://img.shields.io/static/v1?label=license&message=${license}&color=green)`
    : "";

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
  function renderLicenseLink(license) {
    switch (license) {
      case "ISC": 
        return "(https://opensource.org/licenses/ISC)"; 

      case "MIT":
        return "https://opensource.org/licenses/MIT";
  
      case "Apache":
        return "https://opensource.org/licenses/Apache-2.0";
  
      case "IBM":
        return "https://opensource.org/licenses/IPL-1.0";
  
      case "BSD":
        return "https://opensource.org/licenses/BSD-3-Clause";
  
      default:
        return "";
    }
  };

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) =>
  license !== "None"
  ? `[`+renderLicenseBadge(license)+`](`+renderLicenseLink(license)+`)`
    : "";

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}`+renderLicenseSection(data.license)+`
  ${data.license}
## Description
${data.description}

## Table of Contents: 
* [Description](#Description)
* [Installation](#Installation)
* [Usage](#Usage)
* [License](#License)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)
* [Github Username](#Username)

## Installation
${data.installation}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}

## GitHub
${data.username}
`;
}

module.exports = generateMarkdown;

