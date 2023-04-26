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
${renderLicenseBadge(data.license)}\n
## Table of Contents
[Description](#description)\n
[Installation](#installation)\n
[Usage](#usage)\n
[Contributors](#contributors)\n
[Test](#test)\n
${renderLicenseLink(data.license)}\n
## Description
${data.description}\n
## Installation
${data.installation}\n
## Usage
${data.usage}\n
## Questions
To see more of my work check out my profile or email me
* GitHub: [${data.gitHubID}](https://github.com/${data.gitHubID}/)
* Email: ${data.email}\n
## Contributors
${data.contributors}\n
## Test
${data.tests}\n
## License
${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
