// require dependencies needed for application
const fs = require(`fs`);
const inquirer = require(`inquirer`);
const generateMarkdown = require("./utils/generateMarkdown");

// queries from user to get input to generate READme.md documentation
const questions = [
    { /* title query */
        type: "input",
        name: "title",
        message: "Enter the project name:",
    },
    { /* description query */
        type: "input",
        name: "description",
        message: "Describe the project and how it should function:",
    },
    { /* instructions query */
        type: "input",
        name: "installation",
        message: "Provide installations instructions:",
    },
    { /* how to use query */
        type: "input",
        name: "usage",
        message: "Provide operational instructions for use of project:",
    },
    { /* license selection query */
        type: "list",
        name: "license",
        message: "Select a license for the project:",
        // copied available options from gitHub; are there more? there are issues around the "space" between words that solutions between java and md seem to conflict with using code to represent &nbsp; or &#32; without adding lots of coding to get around it which I am opting not to do at this time
        choices: [
            "None",
            "Apache&#32;License&#32;2.0",
            "GNU&nbsp;General&nbsp;Public&nbsp;License&nbsp;v3.0",
            "MIT", 
            "BSD 2-Clause Simplified License",
            "BSD 3-Clause New or Revised License",
            "Boost Software License 1.0",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 2.0",
            "GNU Affero General Public License v3.0",
            "GNU General Public License v2.0",
            "GNU Lesser General Public License v2.1",
            "Mozilla Public License 2.0",
            "The Unlicense"
        ],
    },
    { /* contributor credit query */
        type: "input",
        name: "contributors",
        message: "List any contributors who assisted you in the project creation:",
    },
    { /* test sample query */
        type: "input",
        name: "tests",
        message: "Provide any project tests to be included:",
    },
    { /* follow up queries to my gitHub */
        type: "input",
        name: "gitHubID",
        message: "Provide your GitHub username:",
    },
    { /* follow up queries to my email */
        type: "input",
        name: "email",
        message: "Provide your contact email:",
    },
];

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        fs.writeFile("./sample/README.md", generateMarkdown(data), () => {
            console.log('Go find your file in samples');
        });
    })
};

// Function call to initialize app
init();
