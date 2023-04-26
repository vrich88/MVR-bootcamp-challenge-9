// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license == "None") {
        return ""
    } else {
        return `![Badge](https://img.shields.io/badge/license-${license}-yellow.svg)\n`;
    }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license == "None") {
        return ""
    } else {
        return `[${license}License](#license)\n`;
    };
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license == "None") {
        return ""
    } else {
        return `This application is licensed under ${license}.`
    };
};
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title} 
${renderLicenseBadge(data.license)}
## Table of Contents
[Description](#description)
[Installation](#installation)
[Usage](#usage)
[Contributors](#contributors)
[Test](#test)
${renderLicenseLink(data.license)}
## Description
${data.description}
## Installation
${data.installation}
## Usage
${data.usage}
## Questions
To see more of my work check out my profile or email me
* GitHub: [${data.gitHubID}](https://github.com/${data.gitHubID}/)
* Email: ${data.email}
## Contributors
${data.contributors}
## Test
${data.tests}
## License
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
