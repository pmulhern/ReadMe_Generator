// Requiring fs since we will be writing to the ReadMe file
let fs = require("fs");
// Require the inquirer package for prompts
let inquirer = require("inquirer");
// Not sure yet.  This was provided by instructor
let genMark = require("./utils/generateMarkdown.js");

// array of questions for user.  Used Questions from instructor example.
const questions = ["What is your GitHub username?",
"What is your email address?",
"What is your project's name?",
"Please write a short description of your project.",
"What kind of license should your project have?",
"what command should be run to install dependencies?",
"What command should be run to run tests?",
"What does the user need to know about using the repo?",
"What does the user need to know about contributing to the repo?",
];

// Inquirer prompts
inquirer
    .prompt([
        {
            type: "input",
            message: questions[0],
            name: "username"
        },
        {
            type: "input",
            message: questions[1],
            name: "email"
        },
        {
            type: "input",
            message: questions[2],
            name: "projectName"
        },
        {
            type: "input",
            message: questions[3],
            name: "projectDesc"
        },
        {
            type: "list",
            message: questions[4],
            name: "license",
            choices: [
                "MIT",
                "APACHE 2.0",
                "BSD 2",
                "BSD 3",
                "GPL 3.0",
                "None"
            ]
        },
        {
            type: "input",
            message: questions[5],
            name: "dependencies"
        },
        {
            type: "input",
            message: questions[6],
            name: "tests"
        },
        {
            type: "input",
            message: questions[7],
            name: "userIntel"
        },
        {
            type: "input",
            message: questions[8],
            name: "userContrib"
        }
    ])

    .then(function(response) {

        // Setting variables.  Mainly pulled from above prompts and will populate README. Try Object Deconstruction here.
        let fileName = "README.md";
        let username = response.username;
        let email = response.email;
        let projectName = response.projectName;
        let projectDesc = response.projectDesc;
        let license = response.license;
        let dependencies = response.dependencies;
        let tests = response.tests;
        let userIntel = response.userIntel;
        let userContrib = response.userContrib;
        let questions = "If you have any question about the repo, open an issue or contact me directly at " + email +". You can fin more of my work at "  + [username] + "(https://gitbuh.com/" + username + "/)."

        // Anchor link variable for the README. Takes user to different sections of the document.
        let anchorLinks = [
        "* [Installation](#installation)"+ "\n\n" +
        "* [Usage](#usage)"+ "\n\n" +
        "* [License](#license)"+ "\n\n" +
        "* [Contributing](#contributing)"+ "\n\n" +
        "* [Tests](#tests)"+ "\n\n" +
        "* [Questions](#questions)"
        ]

        // README Section Headers
        let readMeHeaders = ["# "+ projectName,
        "## Description",
        "## Table of Contents",
        "## Installation",
        "## Usage",
        "## License",
        "## Contributing",
        "## Tests",
        "## Questions",
        ];

        let badges = ""
        if(license==="MIT"){
            badges = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
        } else if (license==="APACHE 2.0"){
            badges =`[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
        } else if (license==="BSD 2"){
            badges =`[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
        } else if (license==="BSD 3"){
            badges = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
        } else if (license==="Eclipse"){
            badges = `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
        } else {
            "No License Used"
        }

        // This likely needs tobe turned into a function.  Try For Loop here
        let output = readMeHeaders[0] + "\n\n" +
        badges + "\n\n" +
        readMeHeaders[1] + "\n\n" + projectDesc + "\n\n" +
        readMeHeaders[2] + "\n\n" + anchorLinks + "\n\n" +
        readMeHeaders[3] + "\n\n" + "To install necessary dependencies, run the following command:" + "\n\n" +
        "```" + "\n" +
        dependencies + "\n" +
        "```" + "\n\n" +
        readMeHeaders[4] + "\n\n" + userIntel + "\n\n" +
        readMeHeaders[5] + "\n\n" + 
        "This project is licensed under the " + license + " license" + "\n\n" +
        readMeHeaders[6] + "\n\n" + userContrib + "\n\n" +
        readMeHeaders[7] + "\n\n" + "To run tests, run the following command:" + "\n\n" +
        "```" + "\n" +
        tests + "\n" +
        "```" + "\n\n" +
        readMeHeaders[8] + "\n\n" + questions;

        // Code to populate the README.
        fs.writeFile(fileName, output, function(err){
            if (err) {
                return console.log(err);
                }        
        });
    })




